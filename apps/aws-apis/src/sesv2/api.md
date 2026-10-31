<h1 id="amazon-simple-email-service">Amazon Simple Email Service v2019-09-27</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon SES API v2</fullname> <p> <a href="http://aws.amazon.com/ses">Amazon SES</a> is an Amazon Web Services service that you can use to send email messages to your customers.</p> <p>If you're new to Amazon SES API v2, you might find it helpful to review the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon Simple Email Service Developer Guide</a>. The <i>Amazon SES Developer Guide</i> provides information and code samples that demonstrate how to use Amazon SES API v2 features programmatically.</p>

Base URLs:

* <a href="http://email.us-east-1.amazonaws.com">http://email.us-east-1.amazonaws.com</a> - The Amazon SES V2 multi-region endpoint

* <a href="https://email.us-east-1.amazonaws.com">https://email.us-east-1.amazonaws.com</a> - The Amazon SES V2 multi-region endpoint

* <a href="http://email.cn-north-1.amazonaws.com.cn">http://email.cn-north-1.amazonaws.com.cn</a> - The Amazon SES V2 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://email.cn-north-1.amazonaws.com.cn">https://email.cn-north-1.amazonaws.com.cn</a> - The Amazon SES V2 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/email/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-email-service-default">Default</h1>

## BatchGetMetricData

<a id="opIdBatchGetMetricData"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/metrics/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Queries": [
      {
        "Id": {},
        "Namespace": {},
        "Metric": {},
        "Dimensions": {
          "property1": "string",
          "property2": "string"
        },
        "StartDate": {},
        "EndDate": {}
      }
    ]
  }'
```

`POST /v2/email/metrics/batch`

<p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>

> Body parameter

```json
{
  "Queries": [
    {
      "Id": {},
      "Namespace": {},
      "Metric": {},
      "Dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "StartDate": {},
      "EndDate": {}
    }
  ]
}
```

<h3 id="batchgetmetricdata-parameters">Parameters</h3>

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
|» Queries|body|[[BatchGetMetricDataQuery](#schemabatchgetmetricdataquery)]|true|A list of queries for metrics to be retrieved.|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "Errors": {}
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

<h3 id="batchgetmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetMetricDataResponse](#schemabatchgetmetricdataresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurationSets

<a id="opIdListConfigurationSets"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/configuration-sets`

<p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h3 id="listconfigurationsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position in the list of configuration sets.|
|PageSize|query|integer|false|The number of results to show in a single call to <code>ListConfigurationSets</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.|
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
  "ConfigurationSets": {},
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

<h3 id="listconfigurationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationSetsResponse](#schemalistconfigurationsetsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfigurationSet

<a id="opIdCreateConfigurationSet"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConfigurationSetName": "string",
    "TrackingOptions": {
      "CustomRedirectDomain": {}
    },
    "DeliveryOptions": {
      "TlsPolicy": {},
      "SendingPoolName": {}
    },
    "ReputationOptions": {
      "ReputationMetricsEnabled": {},
      "LastFreshStart": {}
    },
    "SendingOptions": {
      "SendingEnabled": {}
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "SuppressionOptions": {
      "SuppressedReasons": {}
    },
    "VdmOptions": {
      "DashboardOptions": {
        "EngagementMetrics": {}
      },
      "GuardianOptions": {
        "OptimizedSharedDelivery": {}
      }
    }
  }'
```

`POST /v2/email/configuration-sets`

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

> Body parameter

```json
{
  "ConfigurationSetName": "string",
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  },
  "DeliveryOptions": {
    "TlsPolicy": {},
    "SendingPoolName": {}
  },
  "ReputationOptions": {
    "ReputationMetricsEnabled": {},
    "LastFreshStart": {}
  },
  "SendingOptions": {
    "SendingEnabled": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "SuppressionOptions": {
    "SuppressedReasons": {}
  },
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

<h3 id="createconfigurationset-parameters">Parameters</h3>

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
|» ConfigurationSetName|body|string|true|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|
|» TrackingOptions|body|object|false|<p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>|
|» » CustomRedirectDomain|body|object|false|none|
|» DeliveryOptions|body|object|false|Used to associate a configuration set with a dedicated IP pool.|
|» » TlsPolicy|body|object|false|none|
|» » SendingPoolName|body|object|false|none|
|» ReputationOptions|body|object|false|Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region. |
|» » ReputationMetricsEnabled|body|object|false|none|
|» » LastFreshStart|body|object|false|none|
|» SendingOptions|body|object|false|Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.|
|» » SendingEnabled|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|An array of objects that define the tags (keys and values) to associate with the configuration set.|
|» SuppressionOptions|body|object|false|An object that contains information about the suppression list preferences for your account.|
|» » SuppressedReasons|body|object|false|none|
|» VdmOptions|body|object|false|An object that defines the VDM settings that apply to emails that you send using the configuration set.|
|» » DashboardOptions|body|object|false|none|
|» » » EngagementMetrics|body|object|false|none|
|» » GuardianOptions|body|object|false|none|
|» » » OptimizedSharedDelivery|body|object|false|none|

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

<h3 id="createconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetResponse](#schemacreateconfigurationsetresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfigurationSetEventDestinations

<a id="opIdGetConfigurationSetEventDestinations"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/event-destinations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations`

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

<h3 id="getconfigurationseteventdestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that contains the event destination.|
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
  "EventDestinations": {}
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

<h3 id="getconfigurationseteventdestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigurationSetEventDestinationsResponse](#schemagetconfigurationseteventdestinationsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfigurationSetEventDestination

<a id="opIdCreateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/event-destinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventDestinationName": "string",
    "EventDestination": {
      "Enabled": {},
      "MatchingEventTypes": {},
      "KinesisFirehoseDestination": {
        "IamRoleArn": {},
        "DeliveryStreamArn": {}
      },
      "CloudWatchDestination": {
        "DimensionConfigurations": {}
      },
      "SnsDestination": {
        "TopicArn": {}
      },
      "PinpointDestination": {
        "ApplicationArn": {}
      }
    }
  }'
```

`POST /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations`

<p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

> Body parameter

```json
{
  "EventDestinationName": "string",
  "EventDestination": {
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IamRoleArn": {},
      "DeliveryStreamArn": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SnsDestination": {
      "TopicArn": {}
    },
    "PinpointDestination": {
      "ApplicationArn": {}
    }
  }
}
```

<h3 id="createconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set .|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventDestinationName|body|string|true|<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>|
|» EventDestination|body|object|true|An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.|
|» » Enabled|body|object|false|none|
|» » MatchingEventTypes|body|object|false|none|
|» » KinesisFirehoseDestination|body|object|false|none|
|» » » IamRoleArn|body|object|true|none|
|» » » DeliveryStreamArn|body|object|true|none|
|» » CloudWatchDestination|body|object|false|none|
|» » » DimensionConfigurations|body|object|true|none|
|» » SnsDestination|body|object|false|none|
|» » » TopicArn|body|object|true|none|
|» » PinpointDestination|body|object|false|none|
|» » » ApplicationArn|body|object|false|none|

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

<h3 id="createconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetEventDestinationResponse](#schemacreateconfigurationseteventdestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContacts

<a id="opIdListContacts"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string/contacts \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filter": {
      "FilteredStatus": {},
      "TopicFilter": {
        "TopicName": {},
        "UseDefaultIfPreferenceUnavailable": {}
      }
    }
  }'
```

`GET /v2/email/contact-lists/{ContactListName}/contacts`

Lists the contacts present in a specific contact list.

> Body parameter

```json
{
  "Filter": {
    "FilteredStatus": {},
    "TopicFilter": {
      "TopicName": {},
      "UseDefaultIfPreferenceUnavailable": {}
    }
  }
}
```

<h3 id="listcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list.|
|PageSize|query|integer|false|The number of contacts that may be returned at once, which is dependent on if there are more or less contacts than the value of the PageSize. Use this parameter to paginate results. If additional contacts exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional contacts.|
|NextToken|query|string|false|A string token indicating that there might be additional contacts available to be listed. Use the token provided in the Response to use in the subsequent call to ListContacts with the same parameters to retrieve the next page of contacts.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filter|body|object|false|A filter that can be applied to a list of contacts.|
|» » FilteredStatus|body|object|false|none|
|» » TopicFilter|body|object|false|none|
|» » » TopicName|body|object|false|none|
|» » » UseDefaultIfPreferenceUnavailable|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Contacts": {},
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

<h3 id="listcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactsResponse](#schemalistcontactsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContact

<a id="opIdCreateContact"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailAddress": "string",
    "TopicPreferences": [
      {
        "TopicName": {},
        "SubscriptionStatus": {}
      }
    ],
    "UnsubscribeAll": true,
    "AttributesData": "string"
  }'
```

`POST /v2/email/contact-lists/{ContactListName}/contacts`

Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.

> Body parameter

```json
{
  "EmailAddress": "string",
  "TopicPreferences": [
    {
      "TopicName": {},
      "SubscriptionStatus": {}
    }
  ],
  "UnsubscribeAll": true,
  "AttributesData": "string"
}
```

<h3 id="createcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list to which the contact should be added.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EmailAddress|body|string|true|The contact's email address.|
|» TopicPreferences|body|[[TopicPreference](#schematopicpreference)]|false|The contact's preferences for being opted-in to or opted-out of topics.|
|» UnsubscribeAll|body|boolean|false|A boolean value status noting if the contact is unsubscribed from all contact list topics.|
|» AttributesData|body|string|false|The attribute data attached to a contact.|

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

<h3 id="createcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactResponse](#schemacreatecontactresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContactLists

<a id="opIdListContactLists"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/contact-lists`

Lists all of the contact lists available.

<h3 id="listcontactlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|integer|false|Maximum number of contact lists to return at once. Use this parameter to paginate results. If additional contact lists exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional lists.|
|NextToken|query|string|false|A string token indicating that there might be additional contact lists available to be listed. Use the token provided in the Response to use in the subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.|
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
  "ContactLists": {},
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

<h3 id="listcontactlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactListsResponse](#schemalistcontactlistsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContactList

<a id="opIdCreateContactList"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ContactListName": "string",
    "Topics": [
      {
        "TopicName": {},
        "DisplayName": {},
        "Description": {},
        "DefaultSubscriptionStatus": {}
      }
    ],
    "Description": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /v2/email/contact-lists`

Creates a contact list.

> Body parameter

```json
{
  "ContactListName": "string",
  "Topics": [
    {
      "TopicName": {},
      "DisplayName": {},
      "Description": {},
      "DefaultSubscriptionStatus": {}
    }
  ],
  "Description": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createcontactlist-parameters">Parameters</h3>

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
|» ContactListName|body|string|true|The name of the contact list.|
|» Topics|body|[[Topic](#schematopic)]|false|An interest group, theme, or label within a list. A contact list can have multiple topics.|
|» Description|body|string|false|A description of what the contact list is about.|
|» Tags|body|[[Tag](#schematag)]|false|The tags associated with a contact list.|

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

<h3 id="createcontactlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactListResponse](#schemacreatecontactlistresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCustomVerificationEmailTemplates

<a id="opIdListCustomVerificationEmailTemplates"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/custom-verification-email-templates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/custom-verification-email-templates`

<p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="listcustomverificationemailtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the list of custom verification email templates.|
|PageSize|query|integer|false|<p>The number of results to show in a single call to <code>ListCustomVerificationEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 50.</p>|
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
  "CustomVerificationEmailTemplates": {},
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

<h3 id="listcustomverificationemailtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomVerificationEmailTemplatesResponse](#schemalistcustomverificationemailtemplatesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCustomVerificationEmailTemplate

<a id="opIdCreateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/custom-verification-email-templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TemplateName": "string",
    "FromEmailAddress": "string",
    "TemplateSubject": "string",
    "TemplateContent": "string",
    "SuccessRedirectionURL": "string",
    "FailureRedirectionURL": "string"
  }'
```

`POST /v2/email/custom-verification-email-templates`

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": "string",
  "FromEmailAddress": "string",
  "TemplateSubject": "string",
  "TemplateContent": "string",
  "SuccessRedirectionURL": "string",
  "FailureRedirectionURL": "string"
}
```

<h3 id="createcustomverificationemailtemplate-parameters">Parameters</h3>

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
|» TemplateName|body|string|true|The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.|
|» FromEmailAddress|body|string|true|The email address that the custom verification email is sent from.|
|» TemplateSubject|body|string|true|The subject line of the email.|
|» TemplateContent|body|string|true|The content of the custom verification email template.|
|» SuccessRedirectionURL|body|string|true|The URL that the recipient of the verification email is sent to if his or her address is successfully verified.|
|» FailureRedirectionURL|body|string|true|The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.|

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

<h3 id="createcustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCustomVerificationEmailTemplateResponse](#schemacreatecustomverificationemailtemplateresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDedicatedIpPools

<a id="opIdListDedicatedIpPools"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ip-pools \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/dedicated-ip-pools`

List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.

<h3 id="listdedicatedippools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate the position in the list of dedicated IP pools.|
|PageSize|query|integer|false|The number of results to show in a single call to <code>ListDedicatedIpPools</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.|
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
  "DedicatedIpPools": {},
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

<h3 id="listdedicatedippools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDedicatedIpPoolsResponse](#schemalistdedicatedippoolsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDedicatedIpPool

<a id="opIdCreateDedicatedIpPool"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ip-pools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PoolName": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "ScalingMode": "STANDARD"
  }'
```

`POST /v2/email/dedicated-ip-pools`

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.

> Body parameter

```json
{
  "PoolName": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ScalingMode": "STANDARD"
}
```

<h3 id="creatededicatedippool-parameters">Parameters</h3>

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
|» PoolName|body|string|true|The name of a dedicated IP pool.|
|» Tags|body|[[Tag](#schematag)]|false|An object that defines the tags (keys and values) that you want to associate with the pool.|
|» ScalingMode|body|string|false|The type of scaling mode.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ScalingMode|STANDARD|
|» ScalingMode|MANAGED|

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

<h3 id="creatededicatedippool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDedicatedIpPoolResponse](#schemacreatededicatedippoolresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDeliverabilityTestReport

<a id="opIdCreateDeliverabilityTestReport"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReportName": "string",
    "FromEmailAddress": "string",
    "Content": {
      "Simple": {
        "Subject": {
          "Data": {},
          "Charset": {}
        },
        "Body": {
          "Text": {
            "Data": {},
            "Charset": {}
          },
          "Html": {
            "Data": {},
            "Charset": {}
          }
        }
      },
      "Raw": {
        "Data": {}
      },
      "Template": {
        "TemplateName": {},
        "TemplateArn": {},
        "TemplateData": {}
      }
    },
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /v2/email/deliverability-dashboard/test`

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

> Body parameter

```json
{
  "ReportName": "string",
  "FromEmailAddress": "string",
  "Content": {
    "Simple": {
      "Subject": {
        "Data": {},
        "Charset": {}
      },
      "Body": {
        "Text": {
          "Data": {},
          "Charset": {}
        },
        "Html": {
          "Data": {},
          "Charset": {}
        }
      }
    },
    "Raw": {
      "Data": {}
    },
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createdeliverabilitytestreport-parameters">Parameters</h3>

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
|» ReportName|body|string|false|A name that helps you identify a report generated by the Deliverability dashboard.|
|» FromEmailAddress|body|string|true|The email address that the predictive inbox placement test email was sent from.|
|» Content|body|object|true|An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.|
|» » Simple|body|object|false|none|
|» » » Subject|body|object|true|none|
|» » » » Data|body|object|true|none|
|» » » » Charset|body|object|false|none|
|» » » Body|body|object|true|none|
|» » » » Text|body|object|false|none|
|» » » » » Data|body|object|true|none|
|» » » » » Charset|body|object|false|none|
|» » » » Html|body|object|false|none|
|» » » » » Data|body|object|true|none|
|» » » » » Charset|body|object|false|none|
|» » Raw|body|object|false|none|
|» » » Data|body|object|true|none|
|» » Template|body|object|false|none|
|» » » TemplateName|body|object|false|none|
|» » » TemplateArn|body|object|false|none|
|» » » TemplateData|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.|

> Example responses

> 200 Response

```json
{
  "ReportId": {},
  "DeliverabilityTestStatus": {}
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

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createdeliverabilitytestreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeliverabilityTestReportResponse](#schemacreatedeliverabilitytestreportresponse)|
|480|480|AccountSuspendedException|[AccountSuspendedException](#schemaaccountsuspendedexception)|
|481|481|SendingPausedException|[SendingPausedException](#schemasendingpausedexception)|
|482|482|MessageRejected|[MessageRejected](#schemamessagerejected)|
|483|483|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|488|488|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEmailIdentities

<a id="opIdListEmailIdentities"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/identities`

Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.

<h3 id="listemailidentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.|
|PageSize|query|integer|false|<p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>|
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
  "EmailIdentities": {},
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

<h3 id="listemailidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEmailIdentitiesResponse](#schemalistemailidentitiesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEmailIdentity

<a id="opIdCreateEmailIdentity"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailIdentity": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ],
    "DkimSigningAttributes": {
      "DomainSigningSelector": {},
      "DomainSigningPrivateKey": {},
      "NextSigningKeyLength": {}
    },
    "ConfigurationSetName": "string"
  }'
```

`POST /v2/email/identities`

<p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>

> Body parameter

```json
{
  "EmailIdentity": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "DkimSigningAttributes": {
    "DomainSigningSelector": {},
    "DomainSigningPrivateKey": {},
    "NextSigningKeyLength": {}
  },
  "ConfigurationSetName": "string"
}
```

<h3 id="createemailidentity-parameters">Parameters</h3>

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
|» EmailIdentity|body|string|true|The email address or domain to verify.|
|» Tags|body|[[Tag](#schematag)]|false|An array of objects that define the tags (keys and values) to associate with the email identity.|
|» DkimSigningAttributes|body|object|false|An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM|
|» » DomainSigningSelector|body|object|false|none|
|» » DomainSigningPrivateKey|body|object|false|none|
|» » NextSigningKeyLength|body|object|false|none|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|

> Example responses

> 200 Response

```json
{
  "IdentityType": {},
  "VerifiedForSendingStatus": {},
  "DkimAttributes": {
    "SigningEnabled": {},
    "Status": {},
    "Tokens": {},
    "SigningAttributesOrigin": {},
    "NextSigningKeyLength": {},
    "CurrentSigningKeyLength": {},
    "LastKeyGenerationTimestamp": {}
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

<h3 id="createemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEmailIdentityResponse](#schemacreateemailidentityresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEmailIdentityPolicy

<a id="opIdUpdateEmailIdentityPolicy"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/policies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string"
  }'
```

`PUT /v2/email/identities/{EmailIdentity}/policies/{PolicyName}`

<p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="updateemailidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|PolicyName|path|string|true|<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|

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

<h3 id="updateemailidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEmailIdentityPolicyResponse](#schemaupdateemailidentitypolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEmailIdentityPolicy

<a id="opIdCreateEmailIdentityPolicy"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/policies/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Policy": "string"
  }'
```

`POST /v2/email/identities/{EmailIdentity}/policies/{PolicyName}`

<p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="createemailidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|PolicyName|path|string|true|<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|

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

<h3 id="createemailidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEmailIdentityPolicyResponse](#schemacreateemailidentitypolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEmailIdentityPolicy

<a id="opIdDeleteEmailIdentityPolicy"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/policies/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/identities/{EmailIdentity}/policies/{PolicyName}`

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="deleteemailidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|PolicyName|path|string|true|<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>|
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

<h3 id="deleteemailidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEmailIdentityPolicyResponse](#schemadeleteemailidentitypolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEmailTemplates

<a id="opIdListEmailTemplates"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/templates`

<p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="listemailtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListEmailTemplates</code> to indicate the position in the list of email templates.|
|PageSize|query|integer|false|<p>The number of results to show in a single call to <code>ListEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 10.</p>|
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
  "TemplatesMetadata": {},
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

<h3 id="listemailtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEmailTemplatesResponse](#schemalistemailtemplatesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateEmailTemplate

<a id="opIdCreateEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TemplateName": "string",
    "TemplateContent": {
      "Subject": {},
      "Text": {},
      "Html": {}
    }
  }'
```

`POST /v2/email/templates`

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": "string",
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
  }
}
```

<h3 id="createemailtemplate-parameters">Parameters</h3>

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
|» TemplateName|body|string|true|The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.|
|» TemplateContent|body|object|true|The content of the email, composed of a subject line, an HTML part, and a text-only part.|
|» » Subject|body|object|false|none|
|» » Text|body|object|false|none|
|» » Html|body|object|false|none|

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

<h3 id="createemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEmailTemplateResponse](#schemacreateemailtemplateresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImportJobs

<a id="opIdListImportJobs"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/import-jobs \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ImportDestinationType": "SUPPRESSION_LIST"
  }'
```

`GET /v2/email/import-jobs`

Lists all of the import jobs.

> Body parameter

```json
{
  "ImportDestinationType": "SUPPRESSION_LIST"
}
```

<h3 id="listimportjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the same parameters to retrieve the next page of import jobs.|
|PageSize|query|integer|false|Maximum number of import jobs to return at once. Use this parameter to paginate results. If additional import jobs exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional addresses.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ImportDestinationType|body|string|false|The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ImportDestinationType|SUPPRESSION_LIST|
|» ImportDestinationType|CONTACT_LIST|

> Example responses

> 200 Response

```json
{
  "ImportJobs": {},
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

<h3 id="listimportjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImportJobsResponse](#schemalistimportjobsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImportJob

<a id="opIdCreateImportJob"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/import-jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ImportDestination": {
      "SuppressionListDestination": {
        "SuppressionListImportAction": {}
      },
      "ContactListDestination": {
        "ContactListName": {},
        "ContactListImportAction": {}
      }
    },
    "ImportDataSource": {
      "S3Url": {},
      "DataFormat": {}
    }
  }'
```

`POST /v2/email/import-jobs`

Creates an import job for a data destination.

> Body parameter

```json
{
  "ImportDestination": {
    "SuppressionListDestination": {
      "SuppressionListImportAction": {}
    },
    "ContactListDestination": {
      "ContactListName": {},
      "ContactListImportAction": {}
    }
  },
  "ImportDataSource": {
    "S3Url": {},
    "DataFormat": {}
  }
}
```

<h3 id="createimportjob-parameters">Parameters</h3>

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
|» ImportDestination|body|object|true|An object that contains details about the resource destination the import job is going to target.|
|» » SuppressionListDestination|body|object|false|none|
|» » » SuppressionListImportAction|body|object|true|none|
|» » ContactListDestination|body|object|false|none|
|» » » ContactListName|body|object|true|none|
|» » » ContactListImportAction|body|object|true|none|
|» ImportDataSource|body|object|true|An object that contains details about the data source of the import job.|
|» » S3Url|body|object|false|none|
|» » DataFormat|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "JobId": {}
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

<h3 id="createimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImportJobResponse](#schemacreateimportjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfigurationSet

<a id="opIdGetConfigurationSet"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/configuration-sets/{ConfigurationSetName}`

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h3 id="getconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set.|
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
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  },
  "DeliveryOptions": {
    "TlsPolicy": {},
    "SendingPoolName": {}
  },
  "ReputationOptions": {
    "ReputationMetricsEnabled": {},
    "LastFreshStart": {}
  },
  "SendingOptions": {
    "SendingEnabled": {}
  },
  "Tags": {},
  "SuppressionOptions": {
    "SuppressedReasons": {}
  },
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
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

<h3 id="getconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConfigurationSetResponse](#schemagetconfigurationsetresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationSet

<a id="opIdDeleteConfigurationSet"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/configuration-sets/{ConfigurationSetName}`

<p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h3 id="deleteconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set.|
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

<h3 id="deleteconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetResponse](#schemadeleteconfigurationsetresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConfigurationSetEventDestination

<a id="opIdUpdateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/event-destinations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EventDestination": {
      "Enabled": {},
      "MatchingEventTypes": {},
      "KinesisFirehoseDestination": {
        "IamRoleArn": {},
        "DeliveryStreamArn": {}
      },
      "CloudWatchDestination": {
        "DimensionConfigurations": {}
      },
      "SnsDestination": {
        "TopicArn": {}
      },
      "PinpointDestination": {
        "ApplicationArn": {}
      }
    }
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

<p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

> Body parameter

```json
{
  "EventDestination": {
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IamRoleArn": {},
      "DeliveryStreamArn": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SnsDestination": {
      "TopicArn": {}
    },
    "PinpointDestination": {
      "ApplicationArn": {}
    }
  }
}
```

<h3 id="updateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that contains the event destination to modify.|
|EventDestinationName|path|string|true|The name of the event destination.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventDestination|body|object|true|An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.|
|» » Enabled|body|object|false|none|
|» » MatchingEventTypes|body|object|false|none|
|» » KinesisFirehoseDestination|body|object|false|none|
|» » » IamRoleArn|body|object|true|none|
|» » » DeliveryStreamArn|body|object|true|none|
|» » CloudWatchDestination|body|object|false|none|
|» » » DimensionConfigurations|body|object|true|none|
|» » SnsDestination|body|object|false|none|
|» » » TopicArn|body|object|true|none|
|» » PinpointDestination|body|object|false|none|
|» » » ApplicationArn|body|object|false|none|

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

<h3 id="updateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetEventDestinationResponse](#schemaupdateconfigurationseteventdestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfigurationSetEventDestination

<a id="opIdDeleteConfigurationSetEventDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/event-destinations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

<p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

<h3 id="deleteconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that contains the event destination to delete.|
|EventDestinationName|path|string|true|The name of the event destination to delete.|
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

<h3 id="deleteconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetEventDestinationResponse](#schemadeleteconfigurationseteventdestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContact

<a id="opIdGetContact"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string/contacts/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}`

Returns a contact from a contact list.

<h3 id="getcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list to which the contact belongs.|
|EmailAddress|path|string|true|The contact's email address.|
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
  "ContactListName": {},
  "EmailAddress": {},
  "TopicPreferences": {},
  "TopicDefaultPreferences": {},
  "UnsubscribeAll": {},
  "AttributesData": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {}
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

<h3 id="getcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactResponse](#schemagetcontactresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContact

<a id="opIdUpdateContact"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string/contacts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TopicPreferences": [
      {
        "TopicName": {},
        "SubscriptionStatus": {}
      }
    ],
    "UnsubscribeAll": true,
    "AttributesData": "string"
  }'
```

`PUT /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}`

Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.

> Body parameter

```json
{
  "TopicPreferences": [
    {
      "TopicName": {},
      "SubscriptionStatus": {}
    }
  ],
  "UnsubscribeAll": true,
  "AttributesData": "string"
}
```

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list.|
|EmailAddress|path|string|true|The contact's email address.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TopicPreferences|body|[[TopicPreference](#schematopicpreference)]|false|The contact's preference for being opted-in to or opted-out of a topic.|
|» UnsubscribeAll|body|boolean|false|A boolean value status noting if the contact is unsubscribed from all contact list topics.|
|» AttributesData|body|string|false|The attribute data attached to a contact.|

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

<h3 id="updatecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactResponse](#schemaupdatecontactresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContact

<a id="opIdDeleteContact"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string/contacts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}`

Removes a contact from a contact list.

<h3 id="deletecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list from which the contact should be removed.|
|EmailAddress|path|string|true|The contact's email address.|
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

<h3 id="deletecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactResponse](#schemadeletecontactresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactList

<a id="opIdGetContactList"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/contact-lists/{ContactListName}`

Returns contact list metadata. It does not return any information about the contacts present in the list.

<h3 id="getcontactlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list.|
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
  "ContactListName": {},
  "Topics": {},
  "Description": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {},
  "Tags": {}
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

<h3 id="getcontactlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactListResponse](#schemagetcontactlistresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactList

<a id="opIdUpdateContactList"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Topics": [
      {
        "TopicName": {},
        "DisplayName": {},
        "Description": {},
        "DefaultSubscriptionStatus": {}
      }
    ],
    "Description": "string"
  }'
```

`PUT /v2/email/contact-lists/{ContactListName}`

Updates contact list metadata. This operation does a complete replacement.

> Body parameter

```json
{
  "Topics": [
    {
      "TopicName": {},
      "DisplayName": {},
      "Description": {},
      "DefaultSubscriptionStatus": {}
    }
  ],
  "Description": "string"
}
```

<h3 id="updatecontactlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Topics|body|[[Topic](#schematopic)]|false|An interest group, theme, or label within a list. A contact list can have multiple topics.|
|» Description|body|string|false|A description of what the contact list is about.|

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

<h3 id="updatecontactlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactListResponse](#schemaupdatecontactlistresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContactList

<a id="opIdDeleteContactList"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/contact-lists/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/contact-lists/{ContactListName}`

Deletes a contact list and all of the contacts on that list.

<h3 id="deletecontactlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ContactListName|path|string|true|The name of the contact list.|
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

<h3 id="deletecontactlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactListResponse](#schemadeletecontactlistresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCustomVerificationEmailTemplate

<a id="opIdGetCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/custom-verification-email-templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/custom-verification-email-templates/{TemplateName}`

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the custom verification email template that you want to retrieve.|
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
  "TemplateName": {},
  "FromEmailAddress": {},
  "TemplateSubject": {},
  "TemplateContent": {},
  "SuccessRedirectionURL": {},
  "FailureRedirectionURL": {}
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

<h3 id="getcustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomVerificationEmailTemplateResponse](#schemagetcustomverificationemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCustomVerificationEmailTemplate

<a id="opIdUpdateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/custom-verification-email-templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromEmailAddress": "string",
    "TemplateSubject": "string",
    "TemplateContent": "string",
    "SuccessRedirectionURL": "string",
    "FailureRedirectionURL": "string"
  }'
```

`PUT /v2/email/custom-verification-email-templates/{TemplateName}`

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "FromEmailAddress": "string",
  "TemplateSubject": "string",
  "TemplateContent": "string",
  "SuccessRedirectionURL": "string",
  "FailureRedirectionURL": "string"
}
```

<h3 id="updatecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the custom verification email template that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FromEmailAddress|body|string|true|The email address that the custom verification email is sent from.|
|» TemplateSubject|body|string|true|The subject line of the email.|
|» TemplateContent|body|string|true|The content of the custom verification email template.|
|» SuccessRedirectionURL|body|string|true|The URL that the recipient of the verification email is sent to if his or her address is successfully verified.|
|» FailureRedirectionURL|body|string|true|The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.|

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

<h3 id="updatecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCustomVerificationEmailTemplateResponse](#schemaupdatecustomverificationemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCustomVerificationEmailTemplate

<a id="opIdDeleteCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/custom-verification-email-templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/custom-verification-email-templates/{TemplateName}`

<p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="deletecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the custom verification email template that you want to delete.|
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

<h3 id="deletecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCustomVerificationEmailTemplateResponse](#schemadeletecustomverificationemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDedicatedIpPool

<a id="opIdGetDedicatedIpPool"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ip-pools/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/dedicated-ip-pools/{PoolName}`

Retrieve information about the dedicated pool.

<h3 id="getdedicatedippool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PoolName|path|string|true|The name of the dedicated IP pool to retrieve.|
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
  "DedicatedIpPool": {
    "PoolName": {},
    "ScalingMode": {}
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

<h3 id="getdedicatedippool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDedicatedIpPoolResponse](#schemagetdedicatedippoolresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDedicatedIpPool

<a id="opIdDeleteDedicatedIpPool"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ip-pools/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/dedicated-ip-pools/{PoolName}`

Delete a dedicated IP pool.

<h3 id="deletededicatedippool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PoolName|path|string|true|The name of the dedicated IP pool that you want to delete.|
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

<h3 id="deletededicatedippool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDedicatedIpPoolResponse](#schemadeletededicatedippoolresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEmailIdentity

<a id="opIdGetEmailIdentity"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/identities/{EmailIdentity}`

Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.

<h3 id="getemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
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
  "IdentityType": {},
  "FeedbackForwardingStatus": {},
  "VerifiedForSendingStatus": {},
  "DkimAttributes": {
    "SigningEnabled": {},
    "Status": {},
    "Tokens": {},
    "SigningAttributesOrigin": {},
    "NextSigningKeyLength": {},
    "CurrentSigningKeyLength": {},
    "LastKeyGenerationTimestamp": {}
  },
  "MailFromAttributes": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMxFailure": {}
  },
  "Policies": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {},
  "ConfigurationSetName": {},
  "VerificationStatus": {}
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

<h3 id="getemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEmailIdentityResponse](#schemagetemailidentityresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEmailIdentity

<a id="opIdDeleteEmailIdentity"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/identities/{EmailIdentity}`

Deletes an email identity. An identity can be either an email address or a domain name.

<h3 id="deleteemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The identity (that is, the email address or domain) to delete.|
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

<h3 id="deleteemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEmailIdentityResponse](#schemadeleteemailidentityresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEmailTemplate

<a id="opIdGetEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/templates/{TemplateName}`

<p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the template.|
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
  "TemplateName": {},
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
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

<h3 id="getemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEmailTemplateResponse](#schemagetemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateEmailTemplate

<a id="opIdUpdateEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TemplateContent": {
      "Subject": {},
      "Text": {},
      "Html": {}
    }
  }'
```

`PUT /v2/email/templates/{TemplateName}`

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
  }
}
```

<h3 id="updateemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the template.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TemplateContent|body|object|true|The content of the email, composed of a subject line, an HTML part, and a text-only part.|
|» » Subject|body|object|false|none|
|» » Text|body|object|false|none|
|» » Html|body|object|false|none|

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

<h3 id="updateemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateEmailTemplateResponse](#schemaupdateemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteEmailTemplate

<a id="opIdDeleteEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/templates/{TemplateName}`

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="deleteemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the template to be deleted.|
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

<h3 id="deleteemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteEmailTemplateResponse](#schemadeleteemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSuppressedDestination

<a id="opIdGetSuppressedDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/suppression/addresses/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/suppression/addresses/{EmailAddress}`

Retrieves information about a specific email address that's on the suppression list for your account.

<h3 id="getsuppresseddestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|path|string|true|The email address that's on the account suppression list.|
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
  "SuppressedDestination": {
    "EmailAddress": {},
    "Reason": {},
    "LastUpdateTime": {},
    "Attributes": {
      "MessageId": {},
      "FeedbackId": {}
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

<h3 id="getsuppresseddestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSuppressedDestinationResponse](#schemagetsuppresseddestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSuppressedDestination

<a id="opIdDeleteSuppressedDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/suppression/addresses/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/suppression/addresses/{EmailAddress}`

Removes an email address from the suppression list for your account.

<h3 id="deletesuppresseddestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|path|string|true|The suppressed email destination to remove from the account suppression list.|
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

<h3 id="deletesuppresseddestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSuppressedDestinationResponse](#schemadeletesuppresseddestinationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccount

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/account`

Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.

<h3 id="getaccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "DedicatedIpAutoWarmupEnabled": {},
  "EnforcementStatus": {},
  "ProductionAccessEnabled": {},
  "SendQuota": {
    "Max24HourSend": {},
    "MaxSendRate": {},
    "SentLast24Hours": {}
  },
  "SendingEnabled": {},
  "SuppressionAttributes": {
    "SuppressedReasons": {}
  },
  "Details": {
    "MailType": {},
    "WebsiteURL": {},
    "ContactLanguage": {},
    "UseCaseDescription": {},
    "AdditionalContactEmailAddresses": {},
    "ReviewDetails": {
      "Status": {},
      "CaseId": {}
    }
  },
  "VdmAttributes": {
    "VdmEnabled": {},
    "DashboardAttributes": {
      "EngagementMetrics": {}
    },
    "GuardianAttributes": {
      "OptimizedSharedDelivery": {}
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

<h3 id="getaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountResponse](#schemagetaccountresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBlacklistReports

<a id="opIdGetBlacklistReports"></a>

> Code samples

```bash
curl 'https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames?BlacklistItemNames=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames`

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

<h3 id="getblacklistreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BlacklistItemNames|query|[[BlacklistItemName](#schemablacklistitemname)]|true|A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon SES or Amazon Pinpoint.|
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
  "BlacklistReport": {
    "property1": [
      {
        "RblName": {},
        "ListingTime": {},
        "Description": {}
      }
    ],
    "property2": [
      {
        "RblName": {},
        "ListingTime": {},
        "Description": {}
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

<h3 id="getblacklistreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBlacklistReportsResponse](#schemagetblacklistreportsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDedicatedIp

<a id="opIdGetDedicatedIp"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ips/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/dedicated-ips/{IP}`

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

<h3 id="getdedicatedip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Web Services account.|
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
  "DedicatedIp": {
    "Ip": {},
    "WarmupStatus": {},
    "WarmupPercentage": {},
    "PoolName": {}
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

<h3 id="getdedicatedip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDedicatedIpResponse](#schemagetdedicatedipresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDedicatedIps

<a id="opIdGetDedicatedIps"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ips \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/dedicated-ips`

List the dedicated IP addresses that are associated with your Amazon Web Services account.

<h3 id="getdedicatedips-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PoolName|query|string|false|The name of the IP pool that the dedicated IP address is associated with.|
|NextToken|query|string|false|A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the position of the dedicated IP pool in the list of IP pools.|
|PageSize|query|integer|false|The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.|
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
  "DedicatedIps": {},
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

<h3 id="getdedicatedips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDedicatedIpsResponse](#schemagetdedicatedipsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeliverabilityDashboardOptions

<a id="opIdGetDeliverabilityDashboardOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard`

<p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

<h3 id="getdeliverabilitydashboardoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
  "DashboardEnabled": {},
  "SubscriptionExpiryDate": {},
  "AccountStatus": {},
  "ActiveSubscribedDomains": {},
  "PendingExpirationSubscribedDomains": {}
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

<h3 id="getdeliverabilitydashboardoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeliverabilityDashboardOptionsResponse](#schemagetdeliverabilitydashboardoptionsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDeliverabilityDashboardOption

<a id="opIdPutDeliverabilityDashboardOption"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DashboardEnabled": true,
    "SubscribedDomains": [
      {
        "Domain": {},
        "SubscriptionStartDate": {},
        "InboxPlacementTrackingOption": {
          "Global": {},
          "TrackedIsps": {}
        }
      }
    ]
  }'
```

`PUT /v2/email/deliverability-dashboard`

<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>

> Body parameter

```json
{
  "DashboardEnabled": true,
  "SubscribedDomains": [
    {
      "Domain": {},
      "SubscriptionStartDate": {},
      "InboxPlacementTrackingOption": {
        "Global": {},
        "TrackedIsps": {}
      }
    }
  ]
}
```

<h3 id="putdeliverabilitydashboardoption-parameters">Parameters</h3>

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
|» DashboardEnabled|body|boolean|true|Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.|
|» SubscribedDomains|body|[[DomainDeliverabilityTrackingOption](#schemadomaindeliverabilitytrackingoption)]|false|An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.|

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

<h3 id="putdeliverabilitydashboardoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDeliverabilityDashboardOptionResponse](#schemaputdeliverabilitydashboardoptionresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDeliverabilityTestReport

<a id="opIdGetDeliverabilityTestReport"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/test-reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/test-reports/{ReportId}`

Retrieve the results of a predictive inbox placement test.

<h3 id="getdeliverabilitytestreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ReportId|path|string|true|A unique string that identifies the predictive inbox placement test.|
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
  "DeliverabilityTestReport": {
    "ReportId": {},
    "ReportName": {},
    "Subject": {},
    "FromEmailAddress": {},
    "CreateDate": {},
    "DeliverabilityTestStatus": {}
  },
  "OverallPlacement": {
    "InboxPercentage": {},
    "SpamPercentage": {},
    "MissingPercentage": {},
    "SpfPercentage": {},
    "DkimPercentage": {}
  },
  "IspPlacements": {},
  "Message": {},
  "Tags": {}
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

<h3 id="getdeliverabilitytestreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeliverabilityTestReportResponse](#schemagetdeliverabilitytestreportresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainDeliverabilityCampaign

<a id="opIdGetDomainDeliverabilityCampaign"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/campaigns/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/campaigns/{CampaignId}`

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

<h3 id="getdomaindeliverabilitycampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CampaignId|path|string|true|The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.|
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
  "DomainDeliverabilityCampaign": {
    "CampaignId": {},
    "ImageUrl": {},
    "Subject": {},
    "FromAddress": {},
    "SendingIps": {},
    "FirstSeenDateTime": {},
    "LastSeenDateTime": {},
    "InboxCount": {},
    "SpamCount": {},
    "ReadRate": {},
    "DeleteRate": {},
    "ReadDeleteRate": {},
    "ProjectedVolume": {},
    "Esps": {}
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

<h3 id="getdomaindeliverabilitycampaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainDeliverabilityCampaignResponse](#schemagetdomaindeliverabilitycampaignresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainStatisticsReport

<a id="opIdGetDomainStatisticsReport"></a>

> Code samples

```bash
curl 'https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/statistics-report/string#StartDate&EndDate?StartDate=1970-01-01T00%3A00%3A00Z&EndDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate`

Retrieve inbox placement and engagement rates for the domains that you use to send email.

<h3 id="getdomainstatisticsreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Domain|path|string|true|The domain that you want to obtain deliverability metrics for.|
|StartDate|query|string(date-time)|true|The first day (in Unix time) that you want to obtain domain deliverability metrics for.|
|EndDate|query|string(date-time)|true|The last day (in Unix time) that you want to obtain domain deliverability metrics for. The <code>EndDate</code> that you specify has to be less than or equal to 30 days after the <code>StartDate</code>.|
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
  "OverallVolume": {
    "VolumeStatistics": {
      "InboxRawCount": {},
      "SpamRawCount": {},
      "ProjectedInbox": {},
      "ProjectedSpam": {}
    },
    "ReadRatePercent": {},
    "DomainIspPlacements": {}
  },
  "DailyVolumes": {}
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

<h3 id="getdomainstatisticsreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainStatisticsReportResponse](#schemagetdomainstatisticsreportresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetEmailIdentityPolicies

<a id="opIdGetEmailIdentityPolicies"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/policies \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/identities/{EmailIdentity}/policies`

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getemailidentitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
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
  "Policies": {
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

<h3 id="getemailidentitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEmailIdentityPoliciesResponse](#schemagetemailidentitypoliciesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImportJob

<a id="opIdGetImportJob"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/import-jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/import-jobs/{JobId}`

Provides information about an import job.

<h3 id="getimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|JobId|path|string|true|The ID of the import job.|
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
  "JobId": {},
  "ImportDestination": {
    "SuppressionListDestination": {
      "SuppressionListImportAction": {}
    },
    "ContactListDestination": {
      "ContactListName": {},
      "ContactListImportAction": {}
    }
  },
  "ImportDataSource": {
    "S3Url": {},
    "DataFormat": {}
  },
  "FailureInfo": {
    "FailedRecordsS3Url": {},
    "ErrorMessage": {}
  },
  "JobStatus": {},
  "CreatedTimestamp": {},
  "CompletedTimestamp": {},
  "ProcessedRecordsCount": {},
  "FailedRecordsCount": {}
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

<h3 id="getimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImportJobResponse](#schemagetimportjobresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeliverabilityTestReports

<a id="opIdListDeliverabilityTestReports"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/test-reports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/test-reports`

Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.

<h3 id="listdeliverabilitytestreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to indicate the position in the list of predictive inbox placement tests.|
|PageSize|query|integer|false|<p>The number of results to show in a single call to <code>ListDeliverabilityTestReports</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>|
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
  "DeliverabilityTestReports": {},
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

<h3 id="listdeliverabilitytestreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeliverabilityTestReportsResponse](#schemalistdeliverabilitytestreportsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomainDeliverabilityCampaigns

<a id="opIdListDomainDeliverabilityCampaigns"></a>

> Code samples

```bash
curl 'https://sesv2.us-east-1.amazonaws.com/v2/email/deliverability-dashboard/domains/string/campaigns#StartDate&EndDate?StartDate=1970-01-01T00%3A00%3A00Z&EndDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate`

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

<h3 id="listdomaindeliverabilitycampaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StartDate|query|string(date-time)|true|The first day that you want to obtain deliverability data for.|
|EndDate|query|string(date-time)|true|The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.|
|SubscribedDomain|path|string|true|The domain to obtain deliverability data for.|
|NextToken|query|string|false|A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.|
|PageSize|query|integer|false|The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.|
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
  "DomainDeliverabilityCampaigns": {},
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

<h3 id="listdomaindeliverabilitycampaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainDeliverabilityCampaignsResponse](#schemalistdomaindeliverabilitycampaignsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecommendations

<a id="opIdListRecommendations"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/vdm/recommendations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filter": {
      "property1": "string",
      "property2": "string"
    },
    "NextToken": "string",
    "PageSize": 0
  }'
```

`POST /v2/email/vdm/recommendations`

<p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Filter": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": "string",
  "PageSize": 0
}
```

<h3 id="listrecommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filter|body|object|false|An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by.|
|» » **additionalProperties**|body|[ListRecommendationFilterValue](#schemalistrecommendationfiltervalue)|false|none|
|» NextToken|body|string|false|A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations.|
|» PageSize|body|integer|false|<p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p>|

> Example responses

> 200 Response

```json
{
  "Recommendations": {},
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

<h3 id="listrecommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecommendationsResponse](#schemalistrecommendationsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSuppressedDestinations

<a id="opIdListSuppressedDestinations"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/suppression/addresses \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/suppression/addresses`

Retrieves a list of email addresses that are on the suppression list for your account.

<h3 id="listsuppresseddestinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Reason|query|[[SuppressionListReason](#schemasuppressionlistreason)]|false|The factors that caused the email address to be added to .|
|StartDate|query|string(date-time)|false|Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.|
|EndDate|query|string(date-time)|false|Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.|
|NextToken|query|string|false|A token returned from a previous call to <code>ListSuppressedDestinations</code> to indicate the position in the list of suppressed email addresses.|
|PageSize|query|integer|false|The number of results to show in a single call to <code>ListSuppressedDestinations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.|
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
|Reason|BOUNCE|
|Reason|COMPLAINT|

> Example responses

> 200 Response

```json
{
  "SuppressedDestinationSummaries": {},
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

<h3 id="listsuppresseddestinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSuppressedDestinationsResponse](#schemalistsuppresseddestinationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSuppressedDestination

<a id="opIdPutSuppressedDestination"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/suppression/addresses \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailAddress": "string",
    "Reason": "BOUNCE"
  }'
```

`PUT /v2/email/suppression/addresses`

Adds an email address to the suppression list for your account.

> Body parameter

```json
{
  "EmailAddress": "string",
  "Reason": "BOUNCE"
}
```

<h3 id="putsuppresseddestination-parameters">Parameters</h3>

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
|» EmailAddress|body|string|true|The email address that should be added to the suppression list for your account.|
|» Reason|body|string|true|<p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Reason|BOUNCE|
|» Reason|COMPLAINT|

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

<h3 id="putsuppresseddestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSuppressedDestinationResponse](#schemaputsuppresseddestinationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://sesv2.us-east-1.amazonaws.com/v2/email/tags#ResourceArn?ResourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/email/tags#ResourceArn`

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.|
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
  "Tags": {}
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountDedicatedIpWarmupAttributes

<a id="opIdPutAccountDedicatedIpWarmupAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account/dedicated-ips/warmup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AutoWarmupEnabled": true
  }'
```

`PUT /v2/email/account/dedicated-ips/warmup`

Enable or disable the automatic warm-up feature for dedicated IP addresses.

> Body parameter

```json
{
  "AutoWarmupEnabled": true
}
```

<h3 id="putaccountdedicatedipwarmupattributes-parameters">Parameters</h3>

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
|» AutoWarmupEnabled|body|boolean|false|Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.|

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

<h3 id="putaccountdedicatedipwarmupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountDedicatedIpWarmupAttributesResponse](#schemaputaccountdedicatedipwarmupattributesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountDetails

<a id="opIdPutAccountDetails"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account/details \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MailType": "MARKETING",
    "WebsiteURL": "password",
    "ContactLanguage": "EN",
    "UseCaseDescription": "password",
    "AdditionalContactEmailAddresses": [
      "password"
    ],
    "ProductionAccessEnabled": true
  }'
```

`POST /v2/email/account/details`

Update your Amazon SES account details.

> Body parameter

```json
{
  "MailType": "MARKETING",
  "WebsiteURL": "password",
  "ContactLanguage": "EN",
  "UseCaseDescription": "password",
  "AdditionalContactEmailAddresses": [
    "password"
  ],
  "ProductionAccessEnabled": true
}
```

<h3 id="putaccountdetails-parameters">Parameters</h3>

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
|» MailType|body|string|true|The type of email your account will send.|
|» WebsiteURL|body|string(password)|true|The URL of your website. This information helps us better understand the type of content that you plan to send.|
|» ContactLanguage|body|string|false|The language you would prefer to be contacted with.|
|» UseCaseDescription|body|string(password)|true|A description of the types of email that you plan to send.|
|» AdditionalContactEmailAddresses|body|[[AdditionalContactEmailAddress](#schemaadditionalcontactemailaddress)]|false|Additional email addresses that you would like to be notified regarding Amazon SES matters.|
|» ProductionAccessEnabled|body|boolean|false|<p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» MailType|MARKETING|
|» MailType|TRANSACTIONAL|
|» ContactLanguage|EN|
|» ContactLanguage|JA|

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

<h3 id="putaccountdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountDetailsResponse](#schemaputaccountdetailsresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountSendingAttributes

<a id="opIdPutAccountSendingAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account/sending \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SendingEnabled": true
  }'
```

`PUT /v2/email/account/sending`

Enable or disable the ability of your account to send email.

> Body parameter

```json
{
  "SendingEnabled": true
}
```

<h3 id="putaccountsendingattributes-parameters">Parameters</h3>

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
|» SendingEnabled|body|boolean|false|<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>|

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

<h3 id="putaccountsendingattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountSendingAttributesResponse](#schemaputaccountsendingattributesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountSuppressionAttributes

<a id="opIdPutAccountSuppressionAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account/suppression \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SuppressedReasons": [
      "BOUNCE"
    ]
  }'
```

`PUT /v2/email/account/suppression`

Change the settings for the account-level suppression list.

> Body parameter

```json
{
  "SuppressedReasons": [
    "BOUNCE"
  ]
}
```

<h3 id="putaccountsuppressionattributes-parameters">Parameters</h3>

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
|» SuppressedReasons|body|[[SuppressionListReason](#schemasuppressionlistreason)]|false|<p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SuppressedReasons|BOUNCE|
|» SuppressedReasons|COMPLAINT|

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

<h3 id="putaccountsuppressionattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountSuppressionAttributesResponse](#schemaputaccountsuppressionattributesresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccountVdmAttributes

<a id="opIdPutAccountVdmAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/account/vdm \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VdmAttributes": {
      "VdmEnabled": {},
      "DashboardAttributes": {
        "EngagementMetrics": {}
      },
      "GuardianAttributes": {
        "OptimizedSharedDelivery": {}
      }
    }
  }'
```

`PUT /v2/email/account/vdm`

<p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "VdmAttributes": {
    "VdmEnabled": {},
    "DashboardAttributes": {
      "EngagementMetrics": {}
    },
    "GuardianAttributes": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

<h3 id="putaccountvdmattributes-parameters">Parameters</h3>

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
|» VdmAttributes|body|object|true|The VDM attributes that apply to your Amazon SES account.|
|» » VdmEnabled|body|object|false|none|
|» » DashboardAttributes|body|object|false|none|
|» » » EngagementMetrics|body|object|false|none|
|» » GuardianAttributes|body|object|false|none|
|» » » OptimizedSharedDelivery|body|object|false|none|

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

<h3 id="putaccountvdmattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAccountVdmAttributesResponse](#schemaputaccountvdmattributesresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetDeliveryOptions

<a id="opIdPutConfigurationSetDeliveryOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/delivery-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TlsPolicy": "REQUIRE",
    "SendingPoolName": "string"
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/delivery-options`

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

> Body parameter

```json
{
  "TlsPolicy": "REQUIRE",
  "SendingPoolName": "string"
}
```

<h3 id="putconfigurationsetdeliveryoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set to associate with a dedicated IP pool.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TlsPolicy|body|string|false|Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.|
|» SendingPoolName|body|string|false|The name of the dedicated IP pool to associate with the configuration set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» TlsPolicy|REQUIRE|
|» TlsPolicy|OPTIONAL|

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

<h3 id="putconfigurationsetdeliveryoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetDeliveryOptionsResponse](#schemaputconfigurationsetdeliveryoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetReputationOptions

<a id="opIdPutConfigurationSetReputationOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/reputation-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReputationMetricsEnabled": true
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/reputation-options`

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.

> Body parameter

```json
{
  "ReputationMetricsEnabled": true
}
```

<h3 id="putconfigurationsetreputationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ReputationMetricsEnabled|body|boolean|false|If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set.|

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

<h3 id="putconfigurationsetreputationoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetReputationOptionsResponse](#schemaputconfigurationsetreputationoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetSendingOptions

<a id="opIdPutConfigurationSetSendingOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/sending \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SendingEnabled": true
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/sending`

Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.

> Body parameter

```json
{
  "SendingEnabled": true
}
```

<h3 id="putconfigurationsetsendingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set to enable or disable email sending for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SendingEnabled|body|boolean|false|If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.|

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

<h3 id="putconfigurationsetsendingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetSendingOptionsResponse](#schemaputconfigurationsetsendingoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetSuppressionOptions

<a id="opIdPutConfigurationSetSuppressionOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/suppression-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SuppressedReasons": [
      "BOUNCE"
    ]
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/suppression-options`

Specify the account suppression list preferences for a configuration set.

> Body parameter

```json
{
  "SuppressedReasons": [
    "BOUNCE"
  ]
}
```

<h3 id="putconfigurationsetsuppressionoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set to change the suppression list preferences for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SuppressedReasons|body|[[SuppressionListReason](#schemasuppressionlistreason)]|false|<p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SuppressedReasons|BOUNCE|
|» SuppressedReasons|COMPLAINT|

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

<h3 id="putconfigurationsetsuppressionoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetSuppressionOptionsResponse](#schemaputconfigurationsetsuppressionoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetTrackingOptions

<a id="opIdPutConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/tracking-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CustomRedirectDomain": "string"
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/tracking-options`

Specify a custom domain to use for open and click tracking elements in email that you send.

> Body parameter

```json
{
  "CustomRedirectDomain": "string"
}
```

<h3 id="putconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CustomRedirectDomain|body|string|false|The domain to use for tracking open and click events.|

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

<h3 id="putconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetTrackingOptionsResponse](#schemaputconfigurationsettrackingoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConfigurationSetVdmOptions

<a id="opIdPutConfigurationSetVdmOptions"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/configuration-sets/string/vdm-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VdmOptions": {
      "DashboardOptions": {
        "EngagementMetrics": {}
      },
      "GuardianOptions": {
        "OptimizedSharedDelivery": {}
      }
    }
  }'
```

`PUT /v2/email/configuration-sets/{ConfigurationSetName}/vdm-options`

<p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

<h3 id="putconfigurationsetvdmoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VdmOptions|body|object|false|An object that defines the VDM settings that apply to emails that you send using the configuration set.|
|» » DashboardOptions|body|object|false|none|
|» » » EngagementMetrics|body|object|false|none|
|» » GuardianOptions|body|object|false|none|
|» » » OptimizedSharedDelivery|body|object|false|none|

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

<h3 id="putconfigurationsetvdmoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetVdmOptionsResponse](#schemaputconfigurationsetvdmoptionsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDedicatedIpInPool

<a id="opIdPutDedicatedIpInPool"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ips/string/pool \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationPoolName": "string"
  }'
```

`PUT /v2/email/dedicated-ips/{IP}/pool`

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

> Body parameter

```json
{
  "DestinationPoolName": "string"
}
```

<h3 id="putdedicatedipinpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Web Services account.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DestinationPoolName|body|string|true|The name of a dedicated IP pool.|

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

<h3 id="putdedicatedipinpool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDedicatedIpInPoolResponse](#schemaputdedicatedipinpoolresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDedicatedIpPoolScalingAttributes

<a id="opIdPutDedicatedIpPoolScalingAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ip-pools/string/scaling \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ScalingMode": "STANDARD"
  }'
```

`PUT /v2/email/dedicated-ip-pools/{PoolName}/scaling`

<p>Used to convert a dedicated IP pool to a different scaling mode.</p> <note> <p> <code>MANAGED</code> pools cannot be converted to <code>STANDARD</code> scaling mode.</p> </note>

> Body parameter

```json
{
  "ScalingMode": "STANDARD"
}
```

<h3 id="putdedicatedippoolscalingattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PoolName|path|string|true|The name of the dedicated IP pool.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ScalingMode|body|string|true|<p>The scaling mode to apply to the dedicated IP pool.</p> <note> <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p> </note>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» ScalingMode|STANDARD|
|» ScalingMode|MANAGED|

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

<h3 id="putdedicatedippoolscalingattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDedicatedIpPoolScalingAttributesResponse](#schemaputdedicatedippoolscalingattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|483|483|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutDedicatedIpWarmupAttributes

<a id="opIdPutDedicatedIpWarmupAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/dedicated-ips/string/warmup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WarmupPercentage": 0
  }'
```

`PUT /v2/email/dedicated-ips/{IP}/warmup`

<p/>

> Body parameter

```json
{
  "WarmupPercentage": 0
}
```

<h3 id="putdedicatedipwarmupattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The dedicated IP address that you want to update the warm-up attributes for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» WarmupPercentage|body|integer|true|The warm-up percentage that you want to associate with the dedicated IP address.|

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

<h3 id="putdedicatedipwarmupattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDedicatedIpWarmupAttributesResponse](#schemaputdedicatedipwarmupattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailIdentityConfigurationSetAttributes

<a id="opIdPutEmailIdentityConfigurationSetAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/configuration-set \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConfigurationSetName": "string"
  }'
```

`PUT /v2/email/identities/{EmailIdentity}/configuration-set`

Used to associate a configuration set with an email identity.

> Body parameter

```json
{
  "ConfigurationSetName": "string"
}
```

<h3 id="putemailidentityconfigurationsetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email address or domain to associate with a configuration set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|

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

<h3 id="putemailidentityconfigurationsetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailIdentityConfigurationSetAttributesResponse](#schemaputemailidentityconfigurationsetattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailIdentityDkimAttributes

<a id="opIdPutEmailIdentityDkimAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/dkim \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SigningEnabled": true
  }'
```

`PUT /v2/email/identities/{EmailIdentity}/dkim`

Used to enable or disable DKIM authentication for an email identity.

> Body parameter

```json
{
  "SigningEnabled": true
}
```

<h3 id="putemailidentitydkimattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SigningEnabled|body|boolean|false|<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p>|

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

<h3 id="putemailidentitydkimattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailIdentityDkimAttributesResponse](#schemaputemailidentitydkimattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailIdentityDkimSigningAttributes

<a id="opIdPutEmailIdentityDkimSigningAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v1/email/identities/string/dkim/signing \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SigningAttributesOrigin": "AWS_SES",
    "SigningAttributes": {
      "DomainSigningSelector": {},
      "DomainSigningPrivateKey": {},
      "NextSigningKeyLength": {}
    }
  }'
```

`PUT /v1/email/identities/{EmailIdentity}/dkim/signing`

<p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>

> Body parameter

```json
{
  "SigningAttributesOrigin": "AWS_SES",
  "SigningAttributes": {
    "DomainSigningSelector": {},
    "DomainSigningPrivateKey": {},
    "NextSigningKeyLength": {}
  }
}
```

<h3 id="putemailidentitydkimsigningattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SigningAttributesOrigin|body|string|true|<p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>|
|» SigningAttributes|body|object|false|An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM|
|» » DomainSigningSelector|body|object|false|none|
|» » DomainSigningPrivateKey|body|object|false|none|
|» » NextSigningKeyLength|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» SigningAttributesOrigin|AWS_SES|
|» SigningAttributesOrigin|EXTERNAL|

> Example responses

> 200 Response

```json
{
  "DkimStatus": {},
  "DkimTokens": {}
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

<h3 id="putemailidentitydkimsigningattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailIdentityDkimSigningAttributesResponse](#schemaputemailidentitydkimsigningattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailIdentityFeedbackAttributes

<a id="opIdPutEmailIdentityFeedbackAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/feedback \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailForwardingEnabled": true
  }'
```

`PUT /v2/email/identities/{EmailIdentity}/feedback`

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>

> Body parameter

```json
{
  "EmailForwardingEnabled": true
}
```

<h3 id="putemailidentityfeedbackattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EmailForwardingEnabled|body|boolean|false|<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>|

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

<h3 id="putemailidentityfeedbackattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailIdentityFeedbackAttributesResponse](#schemaputemailidentityfeedbackattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutEmailIdentityMailFromAttributes

<a id="opIdPutEmailIdentityMailFromAttributes"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/identities/string/mail-from \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MailFromDomain": "string",
    "BehaviorOnMxFailure": "USE_DEFAULT_VALUE"
  }'
```

`PUT /v2/email/identities/{EmailIdentity}/mail-from`

Used to enable or disable the custom Mail-From domain configuration for an email identity.

> Body parameter

```json
{
  "MailFromDomain": "string",
  "BehaviorOnMxFailure": "USE_DEFAULT_VALUE"
}
```

<h3 id="putemailidentitymailfromattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The verified email identity.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MailFromDomain|body|string|false|The domain to use as a MAIL FROM domain.|
|» BehaviorOnMxFailure|body|string|false|<p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» BehaviorOnMxFailure|USE_DEFAULT_VALUE|
|» BehaviorOnMxFailure|REJECT_MESSAGE|

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

<h3 id="putemailidentitymailfromattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutEmailIdentityMailFromAttributesResponse](#schemaputemailidentitymailfromattributesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendBulkEmail

<a id="opIdSendBulkEmail"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/outbound-bulk-emails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromEmailAddress": "string",
    "FromEmailAddressIdentityArn": "string",
    "ReplyToAddresses": [
      "string"
    ],
    "FeedbackForwardingEmailAddress": "string",
    "FeedbackForwardingEmailAddressIdentityArn": "string",
    "DefaultEmailTags": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "DefaultContent": {
      "Template": {
        "TemplateName": {},
        "TemplateArn": {},
        "TemplateData": {}
      }
    },
    "BulkEmailEntries": [
      {
        "Destination": {
          "ToAddresses": {},
          "CcAddresses": {},
          "BccAddresses": {}
        },
        "ReplacementTags": {},
        "ReplacementEmailContent": {
          "ReplacementTemplate": {
            "ReplacementTemplateData": {}
          }
        }
      }
    ],
    "ConfigurationSetName": "string"
  }'
```

`POST /v2/email/outbound-bulk-emails`

Composes an email message to multiple destinations.

> Body parameter

```json
{
  "FromEmailAddress": "string",
  "FromEmailAddressIdentityArn": "string",
  "ReplyToAddresses": [
    "string"
  ],
  "FeedbackForwardingEmailAddress": "string",
  "FeedbackForwardingEmailAddressIdentityArn": "string",
  "DefaultEmailTags": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "DefaultContent": {
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "BulkEmailEntries": [
    {
      "Destination": {
        "ToAddresses": {},
        "CcAddresses": {},
        "BccAddresses": {}
      },
      "ReplacementTags": {},
      "ReplacementEmailContent": {
        "ReplacementTemplate": {
          "ReplacementTemplateData": {}
        }
      }
    }
  ],
  "ConfigurationSetName": "string"
}
```

<h3 id="sendbulkemail-parameters">Parameters</h3>

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
|» FromEmailAddress|body|string|false|The email address to use as the "From" address for the email. The address that you specify has to be verified.|
|» FromEmailAddressIdentityArn|body|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|» ReplyToAddresses|body|[[EmailAddress](#schemaemailaddress)]|false|The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.|
|» FeedbackForwardingEmailAddress|body|string|false|The address that you want bounce and complaint notifications to be sent to.|
|» FeedbackForwardingEmailAddressIdentityArn|body|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|» DefaultEmailTags|body|[[MessageTag](#schemamessagetag)]|false|A list of message tags.|
|» DefaultContent|body|object|true|An object that contains the body of the message. You can specify a template message.|
|» » Template|body|object|false|none|
|» » » TemplateName|body|object|false|none|
|» » » TemplateArn|body|object|false|none|
|» » » TemplateData|body|object|false|none|
|» BulkEmailEntries|body|[[BulkEmailEntry](#schemabulkemailentry)]|true|A list of <code>BulkEmailEntry</code> objects.|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|

> Example responses

> 200 Response

```json
{
  "BulkEmailEntryResults": {}
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

> 487 Response

```json
null
```

<h3 id="sendbulkemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBulkEmailResponse](#schemasendbulkemailresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|AccountSuspendedException|[AccountSuspendedException](#schemaaccountsuspendedexception)|
|483|483|SendingPausedException|[SendingPausedException](#schemasendingpausedexception)|
|484|484|MessageRejected|[MessageRejected](#schemamessagerejected)|
|485|485|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|487|487|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendCustomVerificationEmail

<a id="opIdSendCustomVerificationEmail"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/outbound-custom-verification-emails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailAddress": "string",
    "TemplateName": "string",
    "ConfigurationSetName": "string"
  }'
```

`POST /v2/email/outbound-custom-verification-emails`

<p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "EmailAddress": "string",
  "TemplateName": "string",
  "ConfigurationSetName": "string"
}
```

<h3 id="sendcustomverificationemail-parameters">Parameters</h3>

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
|» EmailAddress|body|string|true|The email address to verify.|
|» TemplateName|body|string|true|The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|

> Example responses

> 200 Response

```json
{
  "MessageId": {}
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

<h3 id="sendcustomverificationemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendCustomVerificationEmailResponse](#schemasendcustomverificationemailresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|MessageRejected|[MessageRejected](#schemamessagerejected)|
|483|483|SendingPausedException|[SendingPausedException](#schemasendingpausedexception)|
|484|484|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|485|485|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|486|486|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendEmail

<a id="opIdSendEmail"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/outbound-emails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromEmailAddress": "string",
    "FromEmailAddressIdentityArn": "string",
    "Destination": {
      "ToAddresses": {},
      "CcAddresses": {},
      "BccAddresses": {}
    },
    "ReplyToAddresses": [
      "string"
    ],
    "FeedbackForwardingEmailAddress": "string",
    "FeedbackForwardingEmailAddressIdentityArn": "string",
    "Content": {
      "Simple": {
        "Subject": {
          "Data": {},
          "Charset": {}
        },
        "Body": {
          "Text": {
            "Data": {},
            "Charset": {}
          },
          "Html": {
            "Data": {},
            "Charset": {}
          }
        }
      },
      "Raw": {
        "Data": {}
      },
      "Template": {
        "TemplateName": {},
        "TemplateArn": {},
        "TemplateData": {}
      }
    },
    "EmailTags": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "ConfigurationSetName": "string",
    "ListManagementOptions": {
      "ContactListName": {},
      "TopicName": {}
    }
  }'
```

`POST /v2/email/outbound-emails`

<p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>

> Body parameter

```json
{
  "FromEmailAddress": "string",
  "FromEmailAddressIdentityArn": "string",
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": [
    "string"
  ],
  "FeedbackForwardingEmailAddress": "string",
  "FeedbackForwardingEmailAddressIdentityArn": "string",
  "Content": {
    "Simple": {
      "Subject": {
        "Data": {},
        "Charset": {}
      },
      "Body": {
        "Text": {
          "Data": {},
          "Charset": {}
        },
        "Html": {
          "Data": {},
          "Charset": {}
        }
      }
    },
    "Raw": {
      "Data": {}
    },
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "EmailTags": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "ConfigurationSetName": "string",
  "ListManagementOptions": {
    "ContactListName": {},
    "TopicName": {}
  }
}
```

<h3 id="sendemail-parameters">Parameters</h3>

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
|» FromEmailAddress|body|string|false|The email address to use as the "From" address for the email. The address that you specify has to be verified. |
|» FromEmailAddressIdentityArn|body|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p>|
|» Destination|body|object|false|<p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>|
|» » ToAddresses|body|object|false|none|
|» » CcAddresses|body|object|false|none|
|» » BccAddresses|body|object|false|none|
|» ReplyToAddresses|body|[[EmailAddress](#schemaemailaddress)]|false|The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.|
|» FeedbackForwardingEmailAddress|body|string|false|The address that you want bounce and complaint notifications to be sent to.|
|» FeedbackForwardingEmailAddressIdentityArn|body|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|» Content|body|object|true|An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.|
|» » Simple|body|object|false|none|
|» » » Subject|body|object|true|none|
|» » » » Data|body|object|true|none|
|» » » » Charset|body|object|false|none|
|» » » Body|body|object|true|none|
|» » » » Text|body|object|false|none|
|» » » » » Data|body|object|true|none|
|» » » » » Charset|body|object|false|none|
|» » » » Html|body|object|false|none|
|» » » » » Data|body|object|true|none|
|» » » » » Charset|body|object|false|none|
|» » Raw|body|object|false|none|
|» » » Data|body|object|true|none|
|» » Template|body|object|false|none|
|» » » TemplateName|body|object|false|none|
|» » » TemplateArn|body|object|false|none|
|» » » TemplateData|body|object|false|none|
|» EmailTags|body|[[MessageTag](#schemamessagetag)]|false|A list of message tags.|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|
|» ListManagementOptions|body|object|false|An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.|
|» » ContactListName|body|object|false|none|
|» » TopicName|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "MessageId": {}
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

> 487 Response

```json
null
```

<h3 id="sendemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendEmailResponse](#schemasendemailresponse)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|AccountSuspendedException|[AccountSuspendedException](#schemaaccountsuspendedexception)|
|483|483|SendingPausedException|[SendingPausedException](#schemasendingpausedexception)|
|484|484|MessageRejected|[MessageRejected](#schemamessagerejected)|
|485|485|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|487|487|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ResourceArn": "string",
    "Tags": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /v2/email/tags`

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

> Body parameter

```json
{
  "ResourceArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
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
|» ResourceArn|body|string|true|The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.|
|» Tags|body|[[Tag](#schematag)]|true|A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.|

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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestRenderEmailTemplate

<a id="opIdTestRenderEmailTemplate"></a>

> Code samples

```bash
curl https://sesv2.us-east-1.amazonaws.com/v2/email/templates/string/render \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TemplateData": "string"
  }'
```

`POST /v2/email/templates/{TemplateName}/render`

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateData": "string"
}
```

<h3 id="testrenderemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|path|string|true|The name of the template.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TemplateData|body|string|true|An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.|

> Example responses

> 200 Response

```json
{
  "RenderedTemplate": {}
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

<h3 id="testrenderemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestRenderEmailTemplateResponse](#schematestrenderemailtemplateresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://sesv2.us-east-1.amazonaws.com/v2/email/tags#ResourceArn&TagKeys?ResourceArn=string&TagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/email/tags#ResourceArn&TagKeys`

Remove one or more tags (keys and values) from a specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.|
|TagKeys|query|[[TagKey](#schematagkey)]|true|<p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v2/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>|
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
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchGetMetricDataResponse">BatchGetMetricDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmetricdataresponse"></a>
<a id="schema_BatchGetMetricDataResponse"></a>
<a id="tocSbatchgetmetricdataresponse"></a>
<a id="tocsbatchgetmetricdataresponse"></a>

```json
{
  "Results": {},
  "Errors": {}
}
```

Represents the result of processing your metric data batch request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|false|none|none|
|Errors|object|false|none|none|

<h2 id="tocS_BatchGetMetricDataQuery">BatchGetMetricDataQuery</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmetricdataquery"></a>
<a id="schema_BatchGetMetricDataQuery"></a>
<a id="tocSbatchgetmetricdataquery"></a>
<a id="tocsbatchgetmetricdataquery"></a>

```json
{
  "Id": {},
  "Namespace": {},
  "Metric": {},
  "Dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "StartDate": {},
  "EndDate": {}
}
```

Represents a single metric data query to include in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Namespace|object|true|none|none|
|Metric|object|true|none|none|
|Dimensions|object|false|none|none|
|StartDate|object|true|none|none|
|EndDate|object|true|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_CreateConfigurationSetResponse">CreateConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetresponse"></a>
<a id="schema_CreateConfigurationSetResponse"></a>
<a id="tocScreateconfigurationsetresponse"></a>
<a id="tocscreateconfigurationsetresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_CustomRedirectDomain">CustomRedirectDomain</h2>
<!-- backwards compatibility -->
<a id="schemacustomredirectdomain"></a>
<a id="schema_CustomRedirectDomain"></a>
<a id="tocScustomredirectdomain"></a>
<a id="tocscustomredirectdomain"></a>

```json
"string"
```

The domain to use for tracking open and click events.

<h2 id="tocS_TlsPolicy">TlsPolicy</h2>
<!-- backwards compatibility -->
<a id="schematlspolicy"></a>
<a id="schema_TlsPolicy"></a>
<a id="tocStlspolicy"></a>
<a id="tocstlspolicy"></a>

```json
"REQUIRE"
```

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.

<h2 id="tocS_PoolName">PoolName</h2>
<!-- backwards compatibility -->
<a id="schemapoolname"></a>
<a id="schema_PoolName"></a>
<a id="tocSpoolname"></a>
<a id="tocspoolname"></a>

```json
"string"
```

The name of a dedicated IP pool.

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_LastFreshStart">LastFreshStart</h2>
<!-- backwards compatibility -->
<a id="schemalastfreshstart"></a>
<a id="schema_LastFreshStart"></a>
<a id="tocSlastfreshstart"></a>
<a id="tocslastfreshstart"></a>

```json
"1970-01-01T00:00:00Z"
```

The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

<p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your Amazon Web Services account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified Amazon Web Services Region for your Amazon Web Services account.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SuppressionListReasons">SuppressionListReasons</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionlistreasons"></a>
<a id="schema_SuppressionListReasons"></a>
<a id="tocSsuppressionlistreasons"></a>
<a id="tocssuppressionlistreasons"></a>

```json
[
  "BOUNCE"
]
```

<h2 id="tocS_DashboardOptions">DashboardOptions</h2>
<!-- backwards compatibility -->
<a id="schemadashboardoptions"></a>
<a id="schema_DashboardOptions"></a>
<a id="tocSdashboardoptions"></a>
<a id="tocsdashboardoptions"></a>

```json
{
  "EngagementMetrics": {}
}
```

An object containing additional settings for your VDM configuration as applicable to the Dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementMetrics|object|false|none|none|

<h2 id="tocS_GuardianOptions">GuardianOptions</h2>
<!-- backwards compatibility -->
<a id="schemaguardianoptions"></a>
<a id="schema_GuardianOptions"></a>
<a id="tocSguardianoptions"></a>
<a id="tocsguardianoptions"></a>

```json
{
  "OptimizedSharedDelivery": {}
}
```

An object containing additional settings for your VDM configuration as applicable to the Guardian.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptimizedSharedDelivery|object|false|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

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

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_CreateConfigurationSetEventDestinationResponse">CreateConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationseteventdestinationresponse"></a>
<a id="schema_CreateConfigurationSetEventDestinationResponse"></a>
<a id="tocScreateconfigurationseteventdestinationresponse"></a>
<a id="tocscreateconfigurationseteventdestinationresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_EventTypes">EventTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypes"></a>
<a id="schema_EventTypes"></a>
<a id="tocSeventtypes"></a>
<a id="tocseventtypes"></a>

```json
[
  "SEND"
]
```

<h2 id="tocS_KinesisFirehoseDestination">KinesisFirehoseDestination</h2>
<!-- backwards compatibility -->
<a id="schemakinesisfirehosedestination"></a>
<a id="schema_KinesisFirehoseDestination"></a>
<a id="tocSkinesisfirehosedestination"></a>
<a id="tocskinesisfirehosedestination"></a>

```json
{
  "IamRoleArn": {},
  "DeliveryStreamArn": {}
}
```

An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IamRoleArn|object|true|none|none|
|DeliveryStreamArn|object|true|none|none|

<h2 id="tocS_CloudWatchDestination">CloudWatchDestination</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdestination"></a>
<a id="schema_CloudWatchDestination"></a>
<a id="tocScloudwatchdestination"></a>
<a id="tocscloudwatchdestination"></a>

```json
{
  "DimensionConfigurations": {}
}
```

An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionConfigurations|object|true|none|none|

<h2 id="tocS_SnsDestination">SnsDestination</h2>
<!-- backwards compatibility -->
<a id="schemasnsdestination"></a>
<a id="schema_SnsDestination"></a>
<a id="tocSsnsdestination"></a>
<a id="tocssnsdestination"></a>

```json
{
  "TopicArn": {}
}
```

An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|

<h2 id="tocS_PinpointDestination">PinpointDestination</h2>
<!-- backwards compatibility -->
<a id="schemapinpointdestination"></a>
<a id="schema_PinpointDestination"></a>
<a id="tocSpinpointdestination"></a>
<a id="tocspinpointdestination"></a>

```json
{
  "ApplicationArn": {}
}
```

An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationArn|object|false|none|none|

<h2 id="tocS_CreateContactResponse">CreateContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactresponse"></a>
<a id="schema_CreateContactResponse"></a>
<a id="tocScreatecontactresponse"></a>
<a id="tocscreatecontactresponse"></a>

```json
{}
```

<h2 id="tocS_TopicPreference">TopicPreference</h2>
<!-- backwards compatibility -->
<a id="schematopicpreference"></a>
<a id="schema_TopicPreference"></a>
<a id="tocStopicpreference"></a>
<a id="tocstopicpreference"></a>

```json
{
  "TopicName": {},
  "SubscriptionStatus": {}
}
```

The contact's preference for being opted-in to or opted-out of a topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicName|object|true|none|none|
|SubscriptionStatus|object|true|none|none|

<h2 id="tocS_CreateContactListResponse">CreateContactListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactlistresponse"></a>
<a id="schema_CreateContactListResponse"></a>
<a id="tocScreatecontactlistresponse"></a>
<a id="tocscreatecontactlistresponse"></a>

```json
{}
```

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "TopicName": {},
  "DisplayName": {},
  "Description": {},
  "DefaultSubscriptionStatus": {}
}
```

An interest group, theme, or label within a list. Lists can have multiple topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicName|object|true|none|none|
|DisplayName|object|true|none|none|
|Description|object|false|none|none|
|DefaultSubscriptionStatus|object|true|none|none|

<h2 id="tocS_CreateCustomVerificationEmailTemplateResponse">CreateCustomVerificationEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomverificationemailtemplateresponse"></a>
<a id="schema_CreateCustomVerificationEmailTemplateResponse"></a>
<a id="tocScreatecustomverificationemailtemplateresponse"></a>
<a id="tocscreatecustomverificationemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_CreateDedicatedIpPoolResponse">CreateDedicatedIpPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatededicatedippoolresponse"></a>
<a id="schema_CreateDedicatedIpPoolResponse"></a>
<a id="tocScreatededicatedippoolresponse"></a>
<a id="tocscreatededicatedippoolresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_CreateDeliverabilityTestReportResponse">CreateDeliverabilityTestReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeliverabilitytestreportresponse"></a>
<a id="schema_CreateDeliverabilityTestReportResponse"></a>
<a id="tocScreatedeliverabilitytestreportresponse"></a>
<a id="tocscreatedeliverabilitytestreportresponse"></a>

```json
{
  "ReportId": {},
  "DeliverabilityTestStatus": {}
}
```

Information about the predictive inbox placement test that you created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportId|object|true|none|none|
|DeliverabilityTestStatus|object|true|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "Subject": {
    "Data": {},
    "Charset": {}
  },
  "Body": {
    "Text": {
      "Data": {},
      "Charset": {}
    },
    "Html": {
      "Data": {},
      "Charset": {}
    }
  }
}
```

Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subject|object|true|none|none|
|Body|object|true|none|none|

<h2 id="tocS_RawMessage">RawMessage</h2>
<!-- backwards compatibility -->
<a id="schemarawmessage"></a>
<a id="schema_RawMessage"></a>
<a id="tocSrawmessage"></a>
<a id="tocsrawmessage"></a>

```json
{
  "Data": {}
}
```

Represents the raw content of an email message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "TemplateName": {},
  "TemplateArn": {},
  "TemplateData": {}
}
```

An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|TemplateArn|object|false|none|none|
|TemplateData|object|false|none|none|

<h2 id="tocS_AccountSuspendedException">AccountSuspendedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsuspendedexception"></a>
<a id="schema_AccountSuspendedException"></a>
<a id="tocSaccountsuspendedexception"></a>
<a id="tocsaccountsuspendedexception"></a>

```json
null
```

<h2 id="tocS_SendingPausedException">SendingPausedException</h2>
<!-- backwards compatibility -->
<a id="schemasendingpausedexception"></a>
<a id="schema_SendingPausedException"></a>
<a id="tocSsendingpausedexception"></a>
<a id="tocssendingpausedexception"></a>

```json
null
```

<h2 id="tocS_MessageRejected">MessageRejected</h2>
<!-- backwards compatibility -->
<a id="schemamessagerejected"></a>
<a id="schema_MessageRejected"></a>
<a id="tocSmessagerejected"></a>
<a id="tocsmessagerejected"></a>

```json
null
```

<h2 id="tocS_MailFromDomainNotVerifiedException">MailFromDomainNotVerifiedException</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainnotverifiedexception"></a>
<a id="schema_MailFromDomainNotVerifiedException"></a>
<a id="tocSmailfromdomainnotverifiedexception"></a>
<a id="tocsmailfromdomainnotverifiedexception"></a>

```json
null
```

<h2 id="tocS_CreateEmailIdentityResponse">CreateEmailIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailidentityresponse"></a>
<a id="schema_CreateEmailIdentityResponse"></a>
<a id="tocScreateemailidentityresponse"></a>
<a id="tocscreateemailidentityresponse"></a>

```json
{
  "IdentityType": {},
  "VerifiedForSendingStatus": {},
  "DkimAttributes": {
    "SigningEnabled": {},
    "Status": {},
    "Tokens": {},
    "SigningAttributesOrigin": {},
    "NextSigningKeyLength": {},
    "CurrentSigningKeyLength": {},
    "LastKeyGenerationTimestamp": {}
  }
}
```

<p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|VerifiedForSendingStatus|object|false|none|none|
|DkimAttributes|object|false|none|none|

<h2 id="tocS_Selector">Selector</h2>
<!-- backwards compatibility -->
<a id="schemaselector"></a>
<a id="schema_Selector"></a>
<a id="tocSselector"></a>
<a id="tocsselector"></a>

```json
"string"
```

<h2 id="tocS_PrivateKey">PrivateKey</h2>
<!-- backwards compatibility -->
<a id="schemaprivatekey"></a>
<a id="schema_PrivateKey"></a>
<a id="tocSprivatekey"></a>
<a id="tocsprivatekey"></a>

```json
"password"
```

<h2 id="tocS_DkimSigningKeyLength">DkimSigningKeyLength</h2>
<!-- backwards compatibility -->
<a id="schemadkimsigningkeylength"></a>
<a id="schema_DkimSigningKeyLength"></a>
<a id="tocSdkimsigningkeylength"></a>
<a id="tocsdkimsigningkeylength"></a>

```json
"RSA_1024_BIT"
```

<h2 id="tocS_CreateEmailIdentityPolicyResponse">CreateEmailIdentityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailidentitypolicyresponse"></a>
<a id="schema_CreateEmailIdentityPolicyResponse"></a>
<a id="tocScreateemailidentitypolicyresponse"></a>
<a id="tocscreateemailidentitypolicyresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_CreateEmailTemplateResponse">CreateEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailtemplateresponse"></a>
<a id="schema_CreateEmailTemplateResponse"></a>
<a id="tocScreateemailtemplateresponse"></a>
<a id="tocscreateemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_EmailTemplateSubject">EmailTemplateSubject</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatesubject"></a>
<a id="schema_EmailTemplateSubject"></a>
<a id="tocSemailtemplatesubject"></a>
<a id="tocsemailtemplatesubject"></a>

```json
"string"
```

The subject line of the email.

<h2 id="tocS_EmailTemplateText">EmailTemplateText</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatetext"></a>
<a id="schema_EmailTemplateText"></a>
<a id="tocSemailtemplatetext"></a>
<a id="tocsemailtemplatetext"></a>

```json
"string"
```

The email body that will be visible to recipients whose email clients do not display HTML.

<h2 id="tocS_EmailTemplateHtml">EmailTemplateHtml</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatehtml"></a>
<a id="schema_EmailTemplateHtml"></a>
<a id="tocSemailtemplatehtml"></a>
<a id="tocsemailtemplatehtml"></a>

```json
"string"
```

The HTML body of the email.

<h2 id="tocS_CreateImportJobResponse">CreateImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimportjobresponse"></a>
<a id="schema_CreateImportJobResponse"></a>
<a id="tocScreateimportjobresponse"></a>
<a id="tocscreateimportjobresponse"></a>

```json
{
  "JobId": {}
}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_SuppressionListDestination">SuppressionListDestination</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionlistdestination"></a>
<a id="schema_SuppressionListDestination"></a>
<a id="tocSsuppressionlistdestination"></a>
<a id="tocssuppressionlistdestination"></a>

```json
{
  "SuppressionListImportAction": {}
}
```

An object that contains details about the action of suppression list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressionListImportAction|object|true|none|none|

<h2 id="tocS_ContactListDestination">ContactListDestination</h2>
<!-- backwards compatibility -->
<a id="schemacontactlistdestination"></a>
<a id="schema_ContactListDestination"></a>
<a id="tocScontactlistdestination"></a>
<a id="tocscontactlistdestination"></a>

```json
{
  "ContactListName": {},
  "ContactListImportAction": {}
}
```

An object that contains details about the action of a contact list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|true|none|none|
|ContactListImportAction|object|true|none|none|

<h2 id="tocS_S3Url">S3Url</h2>
<!-- backwards compatibility -->
<a id="schemas3url"></a>
<a id="schema_S3Url"></a>
<a id="tocSs3url"></a>
<a id="tocss3url"></a>

```json
"string"
```

An Amazon S3 URL in the format s3://<i>&lt;bucket_name&gt;</i>/<i>&lt;object&gt;</i>.

<h2 id="tocS_DataFormat">DataFormat</h2>
<!-- backwards compatibility -->
<a id="schemadataformat"></a>
<a id="schema_DataFormat"></a>
<a id="tocSdataformat"></a>
<a id="tocsdataformat"></a>

```json
"CSV"
```

The data format of the import job's data source.

<h2 id="tocS_DeleteConfigurationSetResponse">DeleteConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetresponse"></a>
<a id="schema_DeleteConfigurationSetResponse"></a>
<a id="tocSdeleteconfigurationsetresponse"></a>
<a id="tocsdeleteconfigurationsetresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_DeleteConfigurationSetEventDestinationResponse">DeleteConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationresponse"></a>
<a id="schema_DeleteConfigurationSetEventDestinationResponse"></a>
<a id="tocSdeleteconfigurationseteventdestinationresponse"></a>
<a id="tocsdeleteconfigurationseteventdestinationresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_DeleteContactResponse">DeleteContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactresponse"></a>
<a id="schema_DeleteContactResponse"></a>
<a id="tocSdeletecontactresponse"></a>
<a id="tocsdeletecontactresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteContactListResponse">DeleteContactListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactlistresponse"></a>
<a id="schema_DeleteContactListResponse"></a>
<a id="tocSdeletecontactlistresponse"></a>
<a id="tocsdeletecontactlistresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomVerificationEmailTemplateResponse">DeleteCustomVerificationEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomverificationemailtemplateresponse"></a>
<a id="schema_DeleteCustomVerificationEmailTemplateResponse"></a>
<a id="tocSdeletecustomverificationemailtemplateresponse"></a>
<a id="tocsdeletecustomverificationemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_DeleteDedicatedIpPoolResponse">DeleteDedicatedIpPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletededicatedippoolresponse"></a>
<a id="schema_DeleteDedicatedIpPoolResponse"></a>
<a id="tocSdeletededicatedippoolresponse"></a>
<a id="tocsdeletededicatedippoolresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_DeleteEmailIdentityResponse">DeleteEmailIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailidentityresponse"></a>
<a id="schema_DeleteEmailIdentityResponse"></a>
<a id="tocSdeleteemailidentityresponse"></a>
<a id="tocsdeleteemailidentityresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_DeleteEmailIdentityPolicyResponse">DeleteEmailIdentityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailidentitypolicyresponse"></a>
<a id="schema_DeleteEmailIdentityPolicyResponse"></a>
<a id="tocSdeleteemailidentitypolicyresponse"></a>
<a id="tocsdeleteemailidentitypolicyresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_DeleteEmailTemplateResponse">DeleteEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailtemplateresponse"></a>
<a id="schema_DeleteEmailTemplateResponse"></a>
<a id="tocSdeleteemailtemplateresponse"></a>
<a id="tocsdeleteemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_DeleteSuppressedDestinationResponse">DeleteSuppressedDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuppresseddestinationresponse"></a>
<a id="schema_DeleteSuppressedDestinationResponse"></a>
<a id="tocSdeletesuppresseddestinationresponse"></a>
<a id="tocsdeletesuppresseddestinationresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_GetAccountResponse">GetAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountresponse"></a>
<a id="schema_GetAccountResponse"></a>
<a id="tocSgetaccountresponse"></a>
<a id="tocsgetaccountresponse"></a>

```json
{
  "DedicatedIpAutoWarmupEnabled": {},
  "EnforcementStatus": {},
  "ProductionAccessEnabled": {},
  "SendQuota": {
    "Max24HourSend": {},
    "MaxSendRate": {},
    "SentLast24Hours": {}
  },
  "SendingEnabled": {},
  "SuppressionAttributes": {
    "SuppressedReasons": {}
  },
  "Details": {
    "MailType": {},
    "WebsiteURL": {},
    "ContactLanguage": {},
    "UseCaseDescription": {},
    "AdditionalContactEmailAddresses": {},
    "ReviewDetails": {
      "Status": {},
      "CaseId": {}
    }
  },
  "VdmAttributes": {
    "VdmEnabled": {},
    "DashboardAttributes": {
      "EngagementMetrics": {}
    },
    "GuardianAttributes": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedIpAutoWarmupEnabled|object|false|none|none|
|EnforcementStatus|object|false|none|none|
|ProductionAccessEnabled|object|false|none|none|
|SendQuota|object|false|none|none|
|SendingEnabled|object|false|none|none|
|SuppressionAttributes|object|false|none|none|
|Details|object|false|none|none|
|VdmAttributes|object|false|none|none|

<h2 id="tocS_GetBlacklistReportsResponse">GetBlacklistReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetblacklistreportsresponse"></a>
<a id="schema_GetBlacklistReportsResponse"></a>
<a id="tocSgetblacklistreportsresponse"></a>
<a id="tocsgetblacklistreportsresponse"></a>

```json
{
  "BlacklistReport": {
    "property1": [
      {
        "RblName": {},
        "ListingTime": {},
        "Description": {}
      }
    ],
    "property2": [
      {
        "RblName": {},
        "ListingTime": {},
        "Description": {}
      }
    ]
  }
}
```

An object that contains information about blacklist events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlacklistReport|object|true|none|none|

<h2 id="tocS_BlacklistItemName">BlacklistItemName</h2>
<!-- backwards compatibility -->
<a id="schemablacklistitemname"></a>
<a id="schema_BlacklistItemName"></a>
<a id="tocSblacklistitemname"></a>
<a id="tocsblacklistitemname"></a>

```json
"string"
```

An IP address that you want to obtain blacklist information for.

<h2 id="tocS_GetConfigurationSetResponse">GetConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationsetresponse"></a>
<a id="schema_GetConfigurationSetResponse"></a>
<a id="tocSgetconfigurationsetresponse"></a>
<a id="tocsgetconfigurationsetresponse"></a>

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  },
  "DeliveryOptions": {
    "TlsPolicy": {},
    "SendingPoolName": {}
  },
  "ReputationOptions": {
    "ReputationMetricsEnabled": {},
    "LastFreshStart": {}
  },
  "SendingOptions": {
    "SendingEnabled": {}
  },
  "Tags": {},
  "SuppressionOptions": {
    "SuppressedReasons": {}
  },
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

Information about a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|false|none|none|
|TrackingOptions|object|false|none|none|
|DeliveryOptions|object|false|none|none|
|ReputationOptions|object|false|none|none|
|SendingOptions|object|false|none|none|
|Tags|object|false|none|none|
|SuppressionOptions|object|false|none|none|
|VdmOptions|object|false|none|none|

<h2 id="tocS_GetConfigurationSetEventDestinationsResponse">GetConfigurationSetEventDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationseteventdestinationsresponse"></a>
<a id="schema_GetConfigurationSetEventDestinationsResponse"></a>
<a id="tocSgetconfigurationseteventdestinationsresponse"></a>
<a id="tocsgetconfigurationseteventdestinationsresponse"></a>

```json
{
  "EventDestinations": {}
}
```

Information about an event destination for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestinations|object|false|none|none|

<h2 id="tocS_GetContactResponse">GetContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactresponse"></a>
<a id="schema_GetContactResponse"></a>
<a id="tocSgetcontactresponse"></a>
<a id="tocsgetcontactresponse"></a>

```json
{
  "ContactListName": {},
  "EmailAddress": {},
  "TopicPreferences": {},
  "TopicDefaultPreferences": {},
  "UnsubscribeAll": {},
  "AttributesData": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|false|none|none|
|EmailAddress|object|false|none|none|
|TopicPreferences|object|false|none|none|
|TopicDefaultPreferences|object|false|none|none|
|UnsubscribeAll|object|false|none|none|
|AttributesData|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_GetContactListResponse">GetContactListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactlistresponse"></a>
<a id="schema_GetContactListResponse"></a>
<a id="tocSgetcontactlistresponse"></a>
<a id="tocsgetcontactlistresponse"></a>

```json
{
  "ContactListName": {},
  "Topics": {},
  "Description": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|false|none|none|
|Topics|object|false|none|none|
|Description|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetCustomVerificationEmailTemplateResponse">GetCustomVerificationEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomverificationemailtemplateresponse"></a>
<a id="schema_GetCustomVerificationEmailTemplateResponse"></a>
<a id="tocSgetcustomverificationemailtemplateresponse"></a>
<a id="tocsgetcustomverificationemailtemplateresponse"></a>

```json
{
  "TemplateName": {},
  "FromEmailAddress": {},
  "TemplateSubject": {},
  "TemplateContent": {},
  "SuccessRedirectionURL": {},
  "FailureRedirectionURL": {}
}
```

The following elements are returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|FromEmailAddress|object|false|none|none|
|TemplateSubject|object|false|none|none|
|TemplateContent|object|false|none|none|
|SuccessRedirectionURL|object|false|none|none|
|FailureRedirectionURL|object|false|none|none|

<h2 id="tocS_GetDedicatedIpResponse">GetDedicatedIpResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatedipresponse"></a>
<a id="schema_GetDedicatedIpResponse"></a>
<a id="tocSgetdedicatedipresponse"></a>
<a id="tocsgetdedicatedipresponse"></a>

```json
{
  "DedicatedIp": {
    "Ip": {},
    "WarmupStatus": {},
    "WarmupPercentage": {},
    "PoolName": {}
  }
}
```

Information about a dedicated IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedIp|object|false|none|none|

<h2 id="tocS_GetDedicatedIpPoolResponse">GetDedicatedIpPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatedippoolresponse"></a>
<a id="schema_GetDedicatedIpPoolResponse"></a>
<a id="tocSgetdedicatedippoolresponse"></a>
<a id="tocsgetdedicatedippoolresponse"></a>

```json
{
  "DedicatedIpPool": {
    "PoolName": {},
    "ScalingMode": {}
  }
}
```

The following element is returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedIpPool|object|false|none|none|

<h2 id="tocS_GetDedicatedIpsResponse">GetDedicatedIpsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatedipsresponse"></a>
<a id="schema_GetDedicatedIpsResponse"></a>
<a id="tocSgetdedicatedipsresponse"></a>
<a id="tocsgetdedicatedipsresponse"></a>

```json
{
  "DedicatedIps": {},
  "NextToken": {}
}
```

Information about the dedicated IP addresses that are associated with your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedIps|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetDeliverabilityDashboardOptionsResponse">GetDeliverabilityDashboardOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeliverabilitydashboardoptionsresponse"></a>
<a id="schema_GetDeliverabilityDashboardOptionsResponse"></a>
<a id="tocSgetdeliverabilitydashboardoptionsresponse"></a>
<a id="tocsgetdeliverabilitydashboardoptionsresponse"></a>

```json
{
  "DashboardEnabled": {},
  "SubscriptionExpiryDate": {},
  "AccountStatus": {},
  "ActiveSubscribedDomains": {},
  "PendingExpirationSubscribedDomains": {}
}
```

An object that shows the status of the Deliverability dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardEnabled|object|true|none|none|
|SubscriptionExpiryDate|object|false|none|none|
|AccountStatus|object|false|none|none|
|ActiveSubscribedDomains|object|false|none|none|
|PendingExpirationSubscribedDomains|object|false|none|none|

<h2 id="tocS_GetDeliverabilityTestReportResponse">GetDeliverabilityTestReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeliverabilitytestreportresponse"></a>
<a id="schema_GetDeliverabilityTestReportResponse"></a>
<a id="tocSgetdeliverabilitytestreportresponse"></a>
<a id="tocsgetdeliverabilitytestreportresponse"></a>

```json
{
  "DeliverabilityTestReport": {
    "ReportId": {},
    "ReportName": {},
    "Subject": {},
    "FromEmailAddress": {},
    "CreateDate": {},
    "DeliverabilityTestStatus": {}
  },
  "OverallPlacement": {
    "InboxPercentage": {},
    "SpamPercentage": {},
    "MissingPercentage": {},
    "SpfPercentage": {},
    "DkimPercentage": {}
  },
  "IspPlacements": {},
  "Message": {},
  "Tags": {}
}
```

The results of the predictive inbox placement test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliverabilityTestReport|object|true|none|none|
|OverallPlacement|object|true|none|none|
|IspPlacements|object|true|none|none|
|Message|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetDomainDeliverabilityCampaignResponse">GetDomainDeliverabilityCampaignResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomaindeliverabilitycampaignresponse"></a>
<a id="schema_GetDomainDeliverabilityCampaignResponse"></a>
<a id="tocSgetdomaindeliverabilitycampaignresponse"></a>
<a id="tocsgetdomaindeliverabilitycampaignresponse"></a>

```json
{
  "DomainDeliverabilityCampaign": {
    "CampaignId": {},
    "ImageUrl": {},
    "Subject": {},
    "FromAddress": {},
    "SendingIps": {},
    "FirstSeenDateTime": {},
    "LastSeenDateTime": {},
    "InboxCount": {},
    "SpamCount": {},
    "ReadRate": {},
    "DeleteRate": {},
    "ReadDeleteRate": {},
    "ProjectedVolume": {},
    "Esps": {}
  }
}
```

An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainDeliverabilityCampaign|object|true|none|none|

<h2 id="tocS_GetDomainStatisticsReportResponse">GetDomainStatisticsReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainstatisticsreportresponse"></a>
<a id="schema_GetDomainStatisticsReportResponse"></a>
<a id="tocSgetdomainstatisticsreportresponse"></a>
<a id="tocsgetdomainstatisticsreportresponse"></a>

```json
{
  "OverallVolume": {
    "VolumeStatistics": {
      "InboxRawCount": {},
      "SpamRawCount": {},
      "ProjectedInbox": {},
      "ProjectedSpam": {}
    },
    "ReadRatePercent": {},
    "DomainIspPlacements": {}
  },
  "DailyVolumes": {}
}
```

An object that includes statistics that are related to the domain that you specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OverallVolume|object|true|none|none|
|DailyVolumes|object|true|none|none|

<h2 id="tocS_GetEmailIdentityResponse">GetEmailIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemailidentityresponse"></a>
<a id="schema_GetEmailIdentityResponse"></a>
<a id="tocSgetemailidentityresponse"></a>
<a id="tocsgetemailidentityresponse"></a>

```json
{
  "IdentityType": {},
  "FeedbackForwardingStatus": {},
  "VerifiedForSendingStatus": {},
  "DkimAttributes": {
    "SigningEnabled": {},
    "Status": {},
    "Tokens": {},
    "SigningAttributesOrigin": {},
    "NextSigningKeyLength": {},
    "CurrentSigningKeyLength": {},
    "LastKeyGenerationTimestamp": {}
  },
  "MailFromAttributes": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMxFailure": {}
  },
  "Policies": {
    "property1": "string",
    "property2": "string"
  },
  "Tags": {},
  "ConfigurationSetName": {},
  "VerificationStatus": {}
}
```

Details about an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|FeedbackForwardingStatus|object|false|none|none|
|VerifiedForSendingStatus|object|false|none|none|
|DkimAttributes|object|false|none|none|
|MailFromAttributes|object|false|none|none|
|Policies|object|false|none|none|
|Tags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|
|VerificationStatus|object|false|none|none|

<h2 id="tocS_GetEmailIdentityPoliciesResponse">GetEmailIdentityPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemailidentitypoliciesresponse"></a>
<a id="schema_GetEmailIdentityPoliciesResponse"></a>
<a id="tocSgetemailidentitypoliciesresponse"></a>
<a id="tocsgetemailidentitypoliciesresponse"></a>

```json
{
  "Policies": {
    "property1": "string",
    "property2": "string"
  }
}
```

Identity policies associated with email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policies|object|false|none|none|

<h2 id="tocS_GetEmailTemplateResponse">GetEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetemailtemplateresponse"></a>
<a id="schema_GetEmailTemplateResponse"></a>
<a id="tocSgetemailtemplateresponse"></a>
<a id="tocsgetemailtemplateresponse"></a>

```json
{
  "TemplateName": {},
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
  }
}
```

The following element is returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|TemplateContent|object|true|none|none|

<h2 id="tocS_GetImportJobResponse">GetImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimportjobresponse"></a>
<a id="schema_GetImportJobResponse"></a>
<a id="tocSgetimportjobresponse"></a>
<a id="tocsgetimportjobresponse"></a>

```json
{
  "JobId": {},
  "ImportDestination": {
    "SuppressionListDestination": {
      "SuppressionListImportAction": {}
    },
    "ContactListDestination": {
      "ContactListName": {},
      "ContactListImportAction": {}
    }
  },
  "ImportDataSource": {
    "S3Url": {},
    "DataFormat": {}
  },
  "FailureInfo": {
    "FailedRecordsS3Url": {},
    "ErrorMessage": {}
  },
  "JobStatus": {},
  "CreatedTimestamp": {},
  "CompletedTimestamp": {},
  "ProcessedRecordsCount": {},
  "FailedRecordsCount": {}
}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|ImportDestination|object|false|none|none|
|ImportDataSource|object|false|none|none|
|FailureInfo|object|false|none|none|
|JobStatus|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|CompletedTimestamp|object|false|none|none|
|ProcessedRecordsCount|object|false|none|none|
|FailedRecordsCount|object|false|none|none|

<h2 id="tocS_GetSuppressedDestinationResponse">GetSuppressedDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsuppresseddestinationresponse"></a>
<a id="schema_GetSuppressedDestinationResponse"></a>
<a id="tocSgetsuppresseddestinationresponse"></a>
<a id="tocsgetsuppresseddestinationresponse"></a>

```json
{
  "SuppressedDestination": {
    "EmailAddress": {},
    "Reason": {},
    "LastUpdateTime": {},
    "Attributes": {
      "MessageId": {},
      "FeedbackId": {}
    }
  }
}
```

Information about the suppressed email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedDestination|object|true|none|none|

<h2 id="tocS_ListConfigurationSetsResponse">ListConfigurationSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsetsresponse"></a>
<a id="schema_ListConfigurationSetsResponse"></a>
<a id="tocSlistconfigurationsetsresponse"></a>
<a id="tocslistconfigurationsetsresponse"></a>

```json
{
  "ConfigurationSets": {},
  "NextToken": {}
}
```

A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContactListsResponse">ListContactListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactlistsresponse"></a>
<a id="schema_ListContactListsResponse"></a>
<a id="tocSlistcontactlistsresponse"></a>
<a id="tocslistcontactlistsresponse"></a>

```json
{
  "ContactLists": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactLists|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContactsResponse">ListContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsresponse"></a>
<a id="schema_ListContactsResponse"></a>
<a id="tocSlistcontactsresponse"></a>
<a id="tocslistcontactsresponse"></a>

```json
{
  "Contacts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Contacts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SubscriptionStatus">SubscriptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionstatus"></a>
<a id="schema_SubscriptionStatus"></a>
<a id="tocSsubscriptionstatus"></a>
<a id="tocssubscriptionstatus"></a>

```json
"OPT_IN"
```

<h2 id="tocS_TopicFilter">TopicFilter</h2>
<!-- backwards compatibility -->
<a id="schematopicfilter"></a>
<a id="schema_TopicFilter"></a>
<a id="tocStopicfilter"></a>
<a id="tocstopicfilter"></a>

```json
{
  "TopicName": {},
  "UseDefaultIfPreferenceUnavailable": {}
}
```

Used for filtering by a specific topic preference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicName|object|false|none|none|
|UseDefaultIfPreferenceUnavailable|object|false|none|none|

<h2 id="tocS_ListCustomVerificationEmailTemplatesResponse">ListCustomVerificationEmailTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomverificationemailtemplatesresponse"></a>
<a id="schema_ListCustomVerificationEmailTemplatesResponse"></a>
<a id="tocSlistcustomverificationemailtemplatesresponse"></a>
<a id="tocslistcustomverificationemailtemplatesresponse"></a>

```json
{
  "CustomVerificationEmailTemplates": {},
  "NextToken": {}
}
```

The following elements are returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomVerificationEmailTemplates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDedicatedIpPoolsResponse">ListDedicatedIpPoolsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdedicatedippoolsresponse"></a>
<a id="schema_ListDedicatedIpPoolsResponse"></a>
<a id="tocSlistdedicatedippoolsresponse"></a>
<a id="tocslistdedicatedippoolsresponse"></a>

```json
{
  "DedicatedIpPools": {},
  "NextToken": {}
}
```

A list of dedicated IP pools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DedicatedIpPools|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDeliverabilityTestReportsResponse">ListDeliverabilityTestReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverabilitytestreportsresponse"></a>
<a id="schema_ListDeliverabilityTestReportsResponse"></a>
<a id="tocSlistdeliverabilitytestreportsresponse"></a>
<a id="tocslistdeliverabilitytestreportsresponse"></a>

```json
{
  "DeliverabilityTestReports": {},
  "NextToken": {}
}
```

A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliverabilityTestReports|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDomainDeliverabilityCampaignsResponse">ListDomainDeliverabilityCampaignsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomaindeliverabilitycampaignsresponse"></a>
<a id="schema_ListDomainDeliverabilityCampaignsResponse"></a>
<a id="tocSlistdomaindeliverabilitycampaignsresponse"></a>
<a id="tocslistdomaindeliverabilitycampaignsresponse"></a>

```json
{
  "DomainDeliverabilityCampaigns": {},
  "NextToken": {}
}
```

An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainDeliverabilityCampaigns|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEmailIdentitiesResponse">ListEmailIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistemailidentitiesresponse"></a>
<a id="schema_ListEmailIdentitiesResponse"></a>
<a id="tocSlistemailidentitiesresponse"></a>
<a id="tocslistemailidentitiesresponse"></a>

```json
{
  "EmailIdentities": {},
  "NextToken": {}
}
```

A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailIdentities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListEmailTemplatesResponse">ListEmailTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistemailtemplatesresponse"></a>
<a id="schema_ListEmailTemplatesResponse"></a>
<a id="tocSlistemailtemplatesresponse"></a>
<a id="tocslistemailtemplatesresponse"></a>

```json
{
  "TemplatesMetadata": {},
  "NextToken": {}
}
```

The following elements are returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplatesMetadata|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListImportJobsResponse">ListImportJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimportjobsresponse"></a>
<a id="schema_ListImportJobsResponse"></a>
<a id="tocSlistimportjobsresponse"></a>
<a id="tocslistimportjobsresponse"></a>

```json
{
  "ImportJobs": {},
  "NextToken": {}
}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecommendationsResponse">ListRecommendationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsresponse"></a>
<a id="schema_ListRecommendationsResponse"></a>
<a id="tocSlistrecommendationsresponse"></a>
<a id="tocslistrecommendationsresponse"></a>

```json
{
  "Recommendations": {},
  "NextToken": {}
}
```

Contains the response to your request to retrieve the list of recommendations for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Recommendations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRecommendationFilterValue">ListRecommendationFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationfiltervalue"></a>
<a id="schema_ListRecommendationFilterValue"></a>
<a id="tocSlistrecommendationfiltervalue"></a>
<a id="tocslistrecommendationfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ListSuppressedDestinationsResponse">ListSuppressedDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsuppresseddestinationsresponse"></a>
<a id="schema_ListSuppressedDestinationsResponse"></a>
<a id="tocSlistsuppresseddestinationsresponse"></a>
<a id="tocslistsuppresseddestinationsresponse"></a>

```json
{
  "SuppressedDestinationSummaries": {},
  "NextToken": {}
}
```

A list of suppressed email addresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedDestinationSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SuppressionListReason">SuppressionListReason</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionlistreason"></a>
<a id="schema_SuppressionListReason"></a>
<a id="tocSsuppressionlistreason"></a>
<a id="tocssuppressionlistreason"></a>

```json
"BOUNCE"
```

<p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_PutAccountDedicatedIpWarmupAttributesResponse">PutAccountDedicatedIpWarmupAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountdedicatedipwarmupattributesresponse"></a>
<a id="schema_PutAccountDedicatedIpWarmupAttributesResponse"></a>
<a id="tocSputaccountdedicatedipwarmupattributesresponse"></a>
<a id="tocsputaccountdedicatedipwarmupattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutAccountDetailsResponse">PutAccountDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountdetailsresponse"></a>
<a id="schema_PutAccountDetailsResponse"></a>
<a id="tocSputaccountdetailsresponse"></a>
<a id="tocsputaccountdetailsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_AdditionalContactEmailAddress">AdditionalContactEmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalcontactemailaddress"></a>
<a id="schema_AdditionalContactEmailAddress"></a>
<a id="tocSadditionalcontactemailaddress"></a>
<a id="tocsadditionalcontactemailaddress"></a>

```json
"password"
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_PutAccountSendingAttributesResponse">PutAccountSendingAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsendingattributesresponse"></a>
<a id="schema_PutAccountSendingAttributesResponse"></a>
<a id="tocSputaccountsendingattributesresponse"></a>
<a id="tocsputaccountsendingattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutAccountSuppressionAttributesResponse">PutAccountSuppressionAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsuppressionattributesresponse"></a>
<a id="schema_PutAccountSuppressionAttributesResponse"></a>
<a id="tocSputaccountsuppressionattributesresponse"></a>
<a id="tocsputaccountsuppressionattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutAccountVdmAttributesResponse">PutAccountVdmAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountvdmattributesresponse"></a>
<a id="schema_PutAccountVdmAttributesResponse"></a>
<a id="tocSputaccountvdmattributesresponse"></a>
<a id="tocsputaccountvdmattributesresponse"></a>

```json
{}
```

<h2 id="tocS_FeatureStatus">FeatureStatus</h2>
<!-- backwards compatibility -->
<a id="schemafeaturestatus"></a>
<a id="schema_FeatureStatus"></a>
<a id="tocSfeaturestatus"></a>
<a id="tocsfeaturestatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_DashboardAttributes">DashboardAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadashboardattributes"></a>
<a id="schema_DashboardAttributes"></a>
<a id="tocSdashboardattributes"></a>
<a id="tocsdashboardattributes"></a>

```json
{
  "EngagementMetrics": {}
}
```

An object containing additional settings for your VDM configuration as applicable to the Dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementMetrics|object|false|none|none|

<h2 id="tocS_GuardianAttributes">GuardianAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaguardianattributes"></a>
<a id="schema_GuardianAttributes"></a>
<a id="tocSguardianattributes"></a>
<a id="tocsguardianattributes"></a>

```json
{
  "OptimizedSharedDelivery": {}
}
```

An object containing additional settings for your VDM configuration as applicable to the Guardian.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OptimizedSharedDelivery|object|false|none|none|

<h2 id="tocS_PutConfigurationSetDeliveryOptionsResponse">PutConfigurationSetDeliveryOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetdeliveryoptionsresponse"></a>
<a id="schema_PutConfigurationSetDeliveryOptionsResponse"></a>
<a id="tocSputconfigurationsetdeliveryoptionsresponse"></a>
<a id="tocsputconfigurationsetdeliveryoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutConfigurationSetReputationOptionsResponse">PutConfigurationSetReputationOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetreputationoptionsresponse"></a>
<a id="schema_PutConfigurationSetReputationOptionsResponse"></a>
<a id="tocSputconfigurationsetreputationoptionsresponse"></a>
<a id="tocsputconfigurationsetreputationoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutConfigurationSetSendingOptionsResponse">PutConfigurationSetSendingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetsendingoptionsresponse"></a>
<a id="schema_PutConfigurationSetSendingOptionsResponse"></a>
<a id="tocSputconfigurationsetsendingoptionsresponse"></a>
<a id="tocsputconfigurationsetsendingoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutConfigurationSetSuppressionOptionsResponse">PutConfigurationSetSuppressionOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetsuppressionoptionsresponse"></a>
<a id="schema_PutConfigurationSetSuppressionOptionsResponse"></a>
<a id="tocSputconfigurationsetsuppressionoptionsresponse"></a>
<a id="tocsputconfigurationsetsuppressionoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutConfigurationSetTrackingOptionsResponse">PutConfigurationSetTrackingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsettrackingoptionsresponse"></a>
<a id="schema_PutConfigurationSetTrackingOptionsResponse"></a>
<a id="tocSputconfigurationsettrackingoptionsresponse"></a>
<a id="tocsputconfigurationsettrackingoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutConfigurationSetVdmOptionsResponse">PutConfigurationSetVdmOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetvdmoptionsresponse"></a>
<a id="schema_PutConfigurationSetVdmOptionsResponse"></a>
<a id="tocSputconfigurationsetvdmoptionsresponse"></a>
<a id="tocsputconfigurationsetvdmoptionsresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutDedicatedIpInPoolResponse">PutDedicatedIpInPoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedipinpoolresponse"></a>
<a id="schema_PutDedicatedIpInPoolResponse"></a>
<a id="tocSputdedicatedipinpoolresponse"></a>
<a id="tocsputdedicatedipinpoolresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutDedicatedIpPoolScalingAttributesResponse">PutDedicatedIpPoolScalingAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedippoolscalingattributesresponse"></a>
<a id="schema_PutDedicatedIpPoolScalingAttributesResponse"></a>
<a id="tocSputdedicatedippoolscalingattributesresponse"></a>
<a id="tocsputdedicatedippoolscalingattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutDedicatedIpWarmupAttributesResponse">PutDedicatedIpWarmupAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedipwarmupattributesresponse"></a>
<a id="schema_PutDedicatedIpWarmupAttributesResponse"></a>
<a id="tocSputdedicatedipwarmupattributesresponse"></a>
<a id="tocsputdedicatedipwarmupattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutDeliverabilityDashboardOptionResponse">PutDeliverabilityDashboardOptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputdeliverabilitydashboardoptionresponse"></a>
<a id="schema_PutDeliverabilityDashboardOptionResponse"></a>
<a id="tocSputdeliverabilitydashboardoptionresponse"></a>
<a id="tocsputdeliverabilitydashboardoptionresponse"></a>

```json
{}
```

A response that indicates whether the Deliverability dashboard is enabled.

<h2 id="tocS_DomainDeliverabilityTrackingOption">DomainDeliverabilityTrackingOption</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeliverabilitytrackingoption"></a>
<a id="schema_DomainDeliverabilityTrackingOption"></a>
<a id="tocSdomaindeliverabilitytrackingoption"></a>
<a id="tocsdomaindeliverabilitytrackingoption"></a>

```json
{
  "Domain": {},
  "SubscriptionStartDate": {},
  "InboxPlacementTrackingOption": {
    "Global": {},
    "TrackedIsps": {}
  }
}
```

An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|false|none|none|
|SubscriptionStartDate|object|false|none|none|
|InboxPlacementTrackingOption|object|false|none|none|

<h2 id="tocS_PutEmailIdentityConfigurationSetAttributesResponse">PutEmailIdentityConfigurationSetAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentityconfigurationsetattributesresponse"></a>
<a id="schema_PutEmailIdentityConfigurationSetAttributesResponse"></a>
<a id="tocSputemailidentityconfigurationsetattributesresponse"></a>
<a id="tocsputemailidentityconfigurationsetattributesresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_PutEmailIdentityDkimAttributesResponse">PutEmailIdentityDkimAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitydkimattributesresponse"></a>
<a id="schema_PutEmailIdentityDkimAttributesResponse"></a>
<a id="tocSputemailidentitydkimattributesresponse"></a>
<a id="tocsputemailidentitydkimattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutEmailIdentityDkimSigningAttributesResponse">PutEmailIdentityDkimSigningAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitydkimsigningattributesresponse"></a>
<a id="schema_PutEmailIdentityDkimSigningAttributesResponse"></a>
<a id="tocSputemailidentitydkimsigningattributesresponse"></a>
<a id="tocsputemailidentitydkimsigningattributesresponse"></a>

```json
{
  "DkimStatus": {},
  "DkimTokens": {}
}
```

<p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DkimStatus|object|false|none|none|
|DkimTokens|object|false|none|none|

<h2 id="tocS_PutEmailIdentityFeedbackAttributesResponse">PutEmailIdentityFeedbackAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentityfeedbackattributesresponse"></a>
<a id="schema_PutEmailIdentityFeedbackAttributesResponse"></a>
<a id="tocSputemailidentityfeedbackattributesresponse"></a>
<a id="tocsputemailidentityfeedbackattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutEmailIdentityMailFromAttributesResponse">PutEmailIdentityMailFromAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitymailfromattributesresponse"></a>
<a id="schema_PutEmailIdentityMailFromAttributesResponse"></a>
<a id="tocSputemailidentitymailfromattributesresponse"></a>
<a id="tocsputemailidentitymailfromattributesresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_PutSuppressedDestinationResponse">PutSuppressedDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputsuppresseddestinationresponse"></a>
<a id="schema_PutSuppressedDestinationResponse"></a>
<a id="tocSputsuppresseddestinationresponse"></a>
<a id="tocsputsuppresseddestinationresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_SendBulkEmailResponse">SendBulkEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendbulkemailresponse"></a>
<a id="schema_SendBulkEmailResponse"></a>
<a id="tocSsendbulkemailresponse"></a>
<a id="tocssendbulkemailresponse"></a>

```json
{
  "BulkEmailEntryResults": {}
}
```

The following data is returned in JSON format by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BulkEmailEntryResults|object|true|none|none|

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

<h2 id="tocS_MessageTag">MessageTag</h2>
<!-- backwards compatibility -->
<a id="schemamessagetag"></a>
<a id="schema_MessageTag"></a>
<a id="tocSmessagetag"></a>
<a id="tocsmessagetag"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_BulkEmailEntry">BulkEmailEntry</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailentry"></a>
<a id="schema_BulkEmailEntry"></a>
<a id="tocSbulkemailentry"></a>
<a id="tocsbulkemailentry"></a>

```json
{
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplacementTags": {},
  "ReplacementEmailContent": {
    "ReplacementTemplate": {
      "ReplacementTemplateData": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|object|true|none|none|
|ReplacementTags|object|false|none|none|
|ReplacementEmailContent|object|false|none|none|

<h2 id="tocS_SendCustomVerificationEmailResponse">SendCustomVerificationEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendcustomverificationemailresponse"></a>
<a id="schema_SendCustomVerificationEmailResponse"></a>
<a id="tocSsendcustomverificationemailresponse"></a>
<a id="tocssendcustomverificationemailresponse"></a>

```json
{
  "MessageId": {}
}
```

The following element is returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_SendEmailResponse">SendEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendemailresponse"></a>
<a id="schema_SendEmailResponse"></a>
<a id="tocSsendemailresponse"></a>
<a id="tocssendemailresponse"></a>

```json
{
  "MessageId": {}
}
```

A unique message ID that you receive when an email is accepted for sending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_EmailAddressList">EmailAddressList</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddresslist"></a>
<a id="schema_EmailAddressList"></a>
<a id="tocSemailaddresslist"></a>
<a id="tocsemailaddresslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ContactListName">ContactListName</h2>
<!-- backwards compatibility -->
<a id="schemacontactlistname"></a>
<a id="schema_ContactListName"></a>
<a id="tocScontactlistname"></a>
<a id="tocscontactlistname"></a>

```json
"string"
```

<h2 id="tocS_TopicName">TopicName</h2>
<!-- backwards compatibility -->
<a id="schematopicname"></a>
<a id="schema_TopicName"></a>
<a id="tocStopicname"></a>
<a id="tocstopicname"></a>

```json
"string"
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

<h2 id="tocS_TestRenderEmailTemplateResponse">TestRenderEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schematestrenderemailtemplateresponse"></a>
<a id="schema_TestRenderEmailTemplateResponse"></a>
<a id="tocStestrenderemailtemplateresponse"></a>
<a id="tocstestrenderemailtemplateresponse"></a>

```json
{
  "RenderedTemplate": {}
}
```

The following element is returned by the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RenderedTemplate|object|true|none|none|

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

<h2 id="tocS_UpdateConfigurationSetEventDestinationResponse">UpdateConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationseteventdestinationresponse"></a>
<a id="schema_UpdateConfigurationSetEventDestinationResponse"></a>
<a id="tocSupdateconfigurationseteventdestinationresponse"></a>
<a id="tocsupdateconfigurationseteventdestinationresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_UpdateContactResponse">UpdateContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactresponse"></a>
<a id="schema_UpdateContactResponse"></a>
<a id="tocSupdatecontactresponse"></a>
<a id="tocsupdatecontactresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateContactListResponse">UpdateContactListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactlistresponse"></a>
<a id="schema_UpdateContactListResponse"></a>
<a id="tocSupdatecontactlistresponse"></a>
<a id="tocsupdatecontactlistresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateCustomVerificationEmailTemplateResponse">UpdateCustomVerificationEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomverificationemailtemplateresponse"></a>
<a id="schema_UpdateCustomVerificationEmailTemplateResponse"></a>
<a id="tocSupdatecustomverificationemailtemplateresponse"></a>
<a id="tocsupdatecustomverificationemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_UpdateEmailIdentityPolicyResponse">UpdateEmailIdentityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailidentitypolicyresponse"></a>
<a id="schema_UpdateEmailIdentityPolicyResponse"></a>
<a id="tocSupdateemailidentitypolicyresponse"></a>
<a id="tocsupdateemailidentitypolicyresponse"></a>

```json
{}
```

An HTTP 200 response if the request succeeds, or an error message if the request fails.

<h2 id="tocS_UpdateEmailTemplateResponse">UpdateEmailTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailtemplateresponse"></a>
<a id="schema_UpdateEmailTemplateResponse"></a>
<a id="tocSupdateemailtemplateresponse"></a>
<a id="tocsupdateemailtemplateresponse"></a>

```json
{}
```

If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

<h2 id="tocS_MailType">MailType</h2>
<!-- backwards compatibility -->
<a id="schemamailtype"></a>
<a id="schema_MailType"></a>
<a id="tocSmailtype"></a>
<a id="tocsmailtype"></a>

```json
"MARKETING"
```

<h2 id="tocS_WebsiteURL">WebsiteURL</h2>
<!-- backwards compatibility -->
<a id="schemawebsiteurl"></a>
<a id="schema_WebsiteURL"></a>
<a id="tocSwebsiteurl"></a>
<a id="tocswebsiteurl"></a>

```json
"password"
```

<h2 id="tocS_ContactLanguage">ContactLanguage</h2>
<!-- backwards compatibility -->
<a id="schemacontactlanguage"></a>
<a id="schema_ContactLanguage"></a>
<a id="tocScontactlanguage"></a>
<a id="tocscontactlanguage"></a>

```json
"EN"
```

<h2 id="tocS_UseCaseDescription">UseCaseDescription</h2>
<!-- backwards compatibility -->
<a id="schemausecasedescription"></a>
<a id="schema_UseCaseDescription"></a>
<a id="tocSusecasedescription"></a>
<a id="tocsusecasedescription"></a>

```json
"password"
```

<h2 id="tocS_AdditionalContactEmailAddresses">AdditionalContactEmailAddresses</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalcontactemailaddresses"></a>
<a id="schema_AdditionalContactEmailAddresses"></a>
<a id="tocSadditionalcontactemailaddresses"></a>
<a id="tocsadditionalcontactemailaddresses"></a>

```json
[
  "password"
]
```

<h2 id="tocS_ReviewDetails">ReviewDetails</h2>
<!-- backwards compatibility -->
<a id="schemareviewdetails"></a>
<a id="schema_ReviewDetails"></a>
<a id="tocSreviewdetails"></a>
<a id="tocsreviewdetails"></a>

```json
{
  "Status": {},
  "CaseId": {}
}
```

An object that contains information about your account details review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|CaseId|object|false|none|none|

<h2 id="tocS_AccountDetails">AccountDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetails"></a>
<a id="schema_AccountDetails"></a>
<a id="tocSaccountdetails"></a>
<a id="tocsaccountdetails"></a>

```json
{
  "MailType": {},
  "WebsiteURL": {},
  "ContactLanguage": {},
  "UseCaseDescription": {},
  "AdditionalContactEmailAddresses": {},
  "ReviewDetails": {
    "Status": {},
    "CaseId": {}
  }
}
```

An object that contains information about your account details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailType|object|false|none|none|
|WebsiteURL|object|false|none|none|
|ContactLanguage|object|false|none|none|
|UseCaseDescription|object|false|none|none|
|AdditionalContactEmailAddresses|object|false|none|none|
|ReviewDetails|object|false|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_AttributesData">AttributesData</h2>
<!-- backwards compatibility -->
<a id="schemaattributesdata"></a>
<a id="schema_AttributesData"></a>
<a id="tocSattributesdata"></a>
<a id="tocsattributesdata"></a>

```json
"string"
```

<h2 id="tocS_BatchGetMetricDataQueries">BatchGetMetricDataQueries</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmetricdataqueries"></a>
<a id="schema_BatchGetMetricDataQueries"></a>
<a id="tocSbatchgetmetricdataqueries"></a>
<a id="tocsbatchgetmetricdataqueries"></a>

```json
[
  {
    "Id": {},
    "Namespace": {},
    "Metric": {},
    "Dimensions": {
      "property1": "string",
      "property2": "string"
    },
    "StartDate": {},
    "EndDate": {}
  }
]
```

<h2 id="tocS_QueryIdentifier">QueryIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaqueryidentifier"></a>
<a id="schema_QueryIdentifier"></a>
<a id="tocSqueryidentifier"></a>
<a id="tocsqueryidentifier"></a>

```json
"string"
```

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"VDM"
```

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
"SEND"
```

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetricDimensionValue](#schemametricdimensionvalue)|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BatchGetMetricDataRequest">BatchGetMetricDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmetricdatarequest"></a>
<a id="schema_BatchGetMetricDataRequest"></a>
<a id="tocSbatchgetmetricdatarequest"></a>
<a id="tocsbatchgetmetricdatarequest"></a>

```json
{
  "Queries": {}
}
```

Represents a request to retrieve a batch of metric data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Queries|object|true|none|none|

<h2 id="tocS_MetricDataResultList">MetricDataResultList</h2>
<!-- backwards compatibility -->
<a id="schemametricdataresultlist"></a>
<a id="schema_MetricDataResultList"></a>
<a id="tocSmetricdataresultlist"></a>
<a id="tocsmetricdataresultlist"></a>

```json
[
  {
    "Id": {},
    "Timestamps": {},
    "Values": {}
  }
]
```

<h2 id="tocS_MetricDataErrorList">MetricDataErrorList</h2>
<!-- backwards compatibility -->
<a id="schemametricdataerrorlist"></a>
<a id="schema_MetricDataErrorList"></a>
<a id="tocSmetricdataerrorlist"></a>
<a id="tocsmetricdataerrorlist"></a>

```json
[
  {
    "Id": {},
    "Code": {},
    "Message": {}
  }
]
```

<h2 id="tocS_BehaviorOnMxFailure">BehaviorOnMxFailure</h2>
<!-- backwards compatibility -->
<a id="schemabehavioronmxfailure"></a>
<a id="schema_BehaviorOnMxFailure"></a>
<a id="tocSbehavioronmxfailure"></a>
<a id="tocsbehavioronmxfailure"></a>

```json
"USE_DEFAULT_VALUE"
```

<p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>

<h2 id="tocS_BlacklistEntry">BlacklistEntry</h2>
<!-- backwards compatibility -->
<a id="schemablacklistentry"></a>
<a id="schema_BlacklistEntry"></a>
<a id="tocSblacklistentry"></a>
<a id="tocsblacklistentry"></a>

```json
{
  "RblName": {},
  "ListingTime": {},
  "Description": {}
}
```

An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RblName|object|false|none|none|
|ListingTime|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_BlacklistEntries">BlacklistEntries</h2>
<!-- backwards compatibility -->
<a id="schemablacklistentries"></a>
<a id="schema_BlacklistEntries"></a>
<a id="tocSblacklistentries"></a>
<a id="tocsblacklistentries"></a>

```json
[
  {
    "RblName": {},
    "ListingTime": {},
    "Description": {}
  }
]
```

<h2 id="tocS_RblName">RblName</h2>
<!-- backwards compatibility -->
<a id="schemarblname"></a>
<a id="schema_RblName"></a>
<a id="tocSrblname"></a>
<a id="tocsrblname"></a>

```json
"string"
```

The name of a blacklist that an IP address was found on.

<h2 id="tocS_BlacklistingDescription">BlacklistingDescription</h2>
<!-- backwards compatibility -->
<a id="schemablacklistingdescription"></a>
<a id="schema_BlacklistingDescription"></a>
<a id="tocSblacklistingdescription"></a>
<a id="tocsblacklistingdescription"></a>

```json
"string"
```

A description of the blacklisting event.

<h2 id="tocS_BlacklistItemNames">BlacklistItemNames</h2>
<!-- backwards compatibility -->
<a id="schemablacklistitemnames"></a>
<a id="schema_BlacklistItemNames"></a>
<a id="tocSblacklistitemnames"></a>
<a id="tocsblacklistitemnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BlacklistReport">BlacklistReport</h2>
<!-- backwards compatibility -->
<a id="schemablacklistreport"></a>
<a id="schema_BlacklistReport"></a>
<a id="tocSblacklistreport"></a>
<a id="tocsblacklistreport"></a>

```json
{
  "property1": [
    {
      "RblName": {},
      "ListingTime": {},
      "Description": {}
    }
  ],
  "property2": [
    {
      "RblName": {},
      "ListingTime": {},
      "Description": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[BlacklistEntries](#schemablacklistentries)|false|none|none|

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
{
  "Data": {},
  "Charset": {}
}
```

An object that represents the content of the email, and optionally a character set specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Charset|object|false|none|none|

<h2 id="tocS_Body">Body</h2>
<!-- backwards compatibility -->
<a id="schemabody"></a>
<a id="schema_Body"></a>
<a id="tocSbody"></a>
<a id="tocsbody"></a>

```json
{
  "Text": {
    "Data": {},
    "Charset": {}
  },
  "Html": {
    "Data": {},
    "Charset": {}
  }
}
```

Represents the body of the email message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Html|object|false|none|none|

<h2 id="tocS_BulkEmailContent">BulkEmailContent</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailcontent"></a>
<a id="schema_BulkEmailContent"></a>
<a id="tocSbulkemailcontent"></a>
<a id="tocsbulkemailcontent"></a>

```json
{
  "Template": {
    "TemplateName": {},
    "TemplateArn": {},
    "TemplateData": {}
  }
}
```

An object that contains the body of the message. You can specify a template message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Template|object|false|none|none|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "ToAddresses": {},
  "CcAddresses": {},
  "BccAddresses": {}
}
```

<p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ToAddresses|object|false|none|none|
|CcAddresses|object|false|none|none|
|BccAddresses|object|false|none|none|

<h2 id="tocS_MessageTagList">MessageTagList</h2>
<!-- backwards compatibility -->
<a id="schemamessagetaglist"></a>
<a id="schema_MessageTagList"></a>
<a id="tocSmessagetaglist"></a>
<a id="tocsmessagetaglist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

A list of message tags.

<h2 id="tocS_ReplacementEmailContent">ReplacementEmailContent</h2>
<!-- backwards compatibility -->
<a id="schemareplacementemailcontent"></a>
<a id="schema_ReplacementEmailContent"></a>
<a id="tocSreplacementemailcontent"></a>
<a id="tocsreplacementemailcontent"></a>

```json
{
  "ReplacementTemplate": {
    "ReplacementTemplateData": {}
  }
}
```

The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplacementTemplate|object|false|none|none|

<h2 id="tocS_BulkEmailEntryList">BulkEmailEntryList</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailentrylist"></a>
<a id="schema_BulkEmailEntryList"></a>
<a id="tocSbulkemailentrylist"></a>
<a id="tocsbulkemailentrylist"></a>

```json
[
  {
    "Destination": {
      "ToAddresses": {},
      "CcAddresses": {},
      "BccAddresses": {}
    },
    "ReplacementTags": {},
    "ReplacementEmailContent": {
      "ReplacementTemplate": {
        "ReplacementTemplateData": {}
      }
    }
  }
]
```

A list of <code>BulkEmailEntry</code> objects.

<h2 id="tocS_BulkEmailStatus">BulkEmailStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailstatus"></a>
<a id="schema_BulkEmailStatus"></a>
<a id="tocSbulkemailstatus"></a>
<a id="tocsbulkemailstatus"></a>

```json
"SUCCESS"
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

<h2 id="tocS_OutboundMessageId">OutboundMessageId</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundmessageid"></a>
<a id="schema_OutboundMessageId"></a>
<a id="tocSoutboundmessageid"></a>
<a id="tocsoutboundmessageid"></a>

```json
"string"
```

<h2 id="tocS_BulkEmailEntryResult">BulkEmailEntryResult</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailentryresult"></a>
<a id="schema_BulkEmailEntryResult"></a>
<a id="tocSbulkemailentryresult"></a>
<a id="tocsbulkemailentryresult"></a>

```json
{
  "Status": {},
  "Error": {},
  "MessageId": {}
}
```

The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Error|object|false|none|none|
|MessageId|object|false|none|none|

<h2 id="tocS_BulkEmailEntryResultList">BulkEmailEntryResultList</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailentryresultlist"></a>
<a id="schema_BulkEmailEntryResultList"></a>
<a id="tocSbulkemailentryresultlist"></a>
<a id="tocsbulkemailentryresultlist"></a>

```json
[
  {
    "Status": {},
    "Error": {},
    "MessageId": {}
  }
]
```

A list of <code>BulkMailEntry</code> objects.

<h2 id="tocS_CampaignId">CampaignId</h2>
<!-- backwards compatibility -->
<a id="schemacampaignid"></a>
<a id="schema_CampaignId"></a>
<a id="tocScampaignid"></a>
<a id="tocscampaignid"></a>

```json
"string"
```

<h2 id="tocS_CaseId">CaseId</h2>
<!-- backwards compatibility -->
<a id="schemacaseid"></a>
<a id="schema_CaseId"></a>
<a id="tocScaseid"></a>
<a id="tocscaseid"></a>

```json
"string"
```

<h2 id="tocS_Charset">Charset</h2>
<!-- backwards compatibility -->
<a id="schemacharset"></a>
<a id="schema_Charset"></a>
<a id="tocScharset"></a>
<a id="tocscharset"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchDimensionConfigurations">CloudWatchDimensionConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdimensionconfigurations"></a>
<a id="schema_CloudWatchDimensionConfigurations"></a>
<a id="tocScloudwatchdimensionconfigurations"></a>
<a id="tocscloudwatchdimensionconfigurations"></a>

```json
[
  {
    "DimensionName": {},
    "DimensionValueSource": {},
    "DefaultDimensionValue": {}
  }
]
```

<h2 id="tocS_DimensionName">DimensionName</h2>
<!-- backwards compatibility -->
<a id="schemadimensionname"></a>
<a id="schema_DimensionName"></a>
<a id="tocSdimensionname"></a>
<a id="tocsdimensionname"></a>

```json
"string"
```

<p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

<h2 id="tocS_DimensionValueSource">DimensionValueSource</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluesource"></a>
<a id="schema_DimensionValueSource"></a>
<a id="tocSdimensionvaluesource"></a>
<a id="tocsdimensionvaluesource"></a>

```json
"MESSAGE_TAG"
```

The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. To use your own email headers, choose <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.

<h2 id="tocS_DefaultDimensionValue">DefaultDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdimensionvalue"></a>
<a id="schema_DefaultDimensionValue"></a>
<a id="tocSdefaultdimensionvalue"></a>
<a id="tocsdefaultdimensionvalue"></a>

```json
"string"
```

<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

<h2 id="tocS_CloudWatchDimensionConfiguration">CloudWatchDimensionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdimensionconfiguration"></a>
<a id="schema_CloudWatchDimensionConfiguration"></a>
<a id="tocScloudwatchdimensionconfiguration"></a>
<a id="tocscloudwatchdimensionconfiguration"></a>

```json
{
  "DimensionName": {},
  "DimensionValueSource": {},
  "DefaultDimensionValue": {}
}
```

An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|true|none|none|
|DimensionValueSource|object|true|none|none|
|DefaultDimensionValue|object|true|none|none|

<h2 id="tocS_ConfigurationSetName">ConfigurationSetName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetname"></a>
<a id="schema_ConfigurationSetName"></a>
<a id="tocSconfigurationsetname"></a>
<a id="tocsconfigurationsetname"></a>

```json
"string"
```

<p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h2 id="tocS_ConfigurationSetNameList">ConfigurationSetNameList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetnamelist"></a>
<a id="schema_ConfigurationSetNameList"></a>
<a id="tocSconfigurationsetnamelist"></a>
<a id="tocsconfigurationsetnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TopicPreferenceList">TopicPreferenceList</h2>
<!-- backwards compatibility -->
<a id="schematopicpreferencelist"></a>
<a id="schema_TopicPreferenceList"></a>
<a id="tocStopicpreferencelist"></a>
<a id="tocstopicpreferencelist"></a>

```json
[
  {
    "TopicName": {},
    "SubscriptionStatus": {}
  }
]
```

<h2 id="tocS_UnsubscribeAll">UnsubscribeAll</h2>
<!-- backwards compatibility -->
<a id="schemaunsubscribeall"></a>
<a id="schema_UnsubscribeAll"></a>
<a id="tocSunsubscribeall"></a>
<a id="tocsunsubscribeall"></a>

```json
true
```

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "EmailAddress": {},
  "TopicPreferences": {},
  "TopicDefaultPreferences": {},
  "UnsubscribeAll": {},
  "LastUpdatedTimestamp": {}
}
```

A contact is the end-user who is receiving the email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|false|none|none|
|TopicPreferences|object|false|none|none|
|TopicDefaultPreferences|object|false|none|none|
|UnsubscribeAll|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ContactList">ContactList</h2>
<!-- backwards compatibility -->
<a id="schemacontactlist"></a>
<a id="schema_ContactList"></a>
<a id="tocScontactlist"></a>
<a id="tocscontactlist"></a>

```json
{
  "ContactListName": {},
  "LastUpdatedTimestamp": {}
}
```

A list that contains contacts that have subscribed to a particular topic or topics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|

<h2 id="tocS_ContactListImportAction">ContactListImportAction</h2>
<!-- backwards compatibility -->
<a id="schemacontactlistimportaction"></a>
<a id="schema_ContactListImportAction"></a>
<a id="tocScontactlistimportaction"></a>
<a id="tocscontactlistimportaction"></a>

```json
"DELETE"
```

<h2 id="tocS_MessageData">MessageData</h2>
<!-- backwards compatibility -->
<a id="schemamessagedata"></a>
<a id="schema_MessageData"></a>
<a id="tocSmessagedata"></a>
<a id="tocsmessagedata"></a>

```json
"string"
```

<h2 id="tocS_Counter">Counter</h2>
<!-- backwards compatibility -->
<a id="schemacounter"></a>
<a id="schema_Counter"></a>
<a id="tocScounter"></a>
<a id="tocscounter"></a>

```json
0
```

<h2 id="tocS_EventDestinationName">EventDestinationName</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationname"></a>
<a id="schema_EventDestinationName"></a>
<a id="tocSeventdestinationname"></a>
<a id="tocseventdestinationname"></a>

```json
"string"
```

<p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

<h2 id="tocS_EventDestinationDefinition">EventDestinationDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationdefinition"></a>
<a id="schema_EventDestinationDefinition"></a>
<a id="tocSeventdestinationdefinition"></a>
<a id="tocseventdestinationdefinition"></a>

```json
{
  "Enabled": {},
  "MatchingEventTypes": {},
  "KinesisFirehoseDestination": {
    "IamRoleArn": {},
    "DeliveryStreamArn": {}
  },
  "CloudWatchDestination": {
    "DimensionConfigurations": {}
  },
  "SnsDestination": {
    "TopicArn": {}
  },
  "PinpointDestination": {
    "ApplicationArn": {}
  }
}
```

An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|MatchingEventTypes|object|false|none|none|
|KinesisFirehoseDestination|object|false|none|none|
|CloudWatchDestination|object|false|none|none|
|SnsDestination|object|false|none|none|
|PinpointDestination|object|false|none|none|

<h2 id="tocS_CreateConfigurationSetEventDestinationRequest">CreateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationseteventdestinationrequest"></a>
<a id="schema_CreateConfigurationSetEventDestinationRequest"></a>
<a id="tocScreateconfigurationseteventdestinationrequest"></a>
<a id="tocscreateconfigurationseteventdestinationrequest"></a>

```json
{
  "EventDestinationName": {},
  "EventDestination": {
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IamRoleArn": {},
      "DeliveryStreamArn": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SnsDestination": {
      "TopicArn": {}
    },
    "PinpointDestination": {
      "ApplicationArn": {}
    }
  }
}
```

A request to add an event destination to a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestinationName|object|true|none|none|
|EventDestination|object|true|none|none|

<h2 id="tocS_TrackingOptions">TrackingOptions</h2>
<!-- backwards compatibility -->
<a id="schematrackingoptions"></a>
<a id="schema_TrackingOptions"></a>
<a id="tocStrackingoptions"></a>
<a id="tocstrackingoptions"></a>

```json
{
  "CustomRedirectDomain": {}
}
```

<p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRedirectDomain|object|true|none|none|

<h2 id="tocS_DeliveryOptions">DeliveryOptions</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryoptions"></a>
<a id="schema_DeliveryOptions"></a>
<a id="tocSdeliveryoptions"></a>
<a id="tocsdeliveryoptions"></a>

```json
{
  "TlsPolicy": {},
  "SendingPoolName": {}
}
```

Used to associate a configuration set with a dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TlsPolicy|object|false|none|none|
|SendingPoolName|object|false|none|none|

<h2 id="tocS_ReputationOptions">ReputationOptions</h2>
<!-- backwards compatibility -->
<a id="schemareputationoptions"></a>
<a id="schema_ReputationOptions"></a>
<a id="tocSreputationoptions"></a>
<a id="tocsreputationoptions"></a>

```json
{
  "ReputationMetricsEnabled": {},
  "LastFreshStart": {}
}
```

Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReputationMetricsEnabled|object|false|none|none|
|LastFreshStart|object|false|none|none|

<h2 id="tocS_SendingOptions">SendingOptions</h2>
<!-- backwards compatibility -->
<a id="schemasendingoptions"></a>
<a id="schema_SendingOptions"></a>
<a id="tocSsendingoptions"></a>
<a id="tocssendingoptions"></a>

```json
{
  "SendingEnabled": {}
}
```

Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendingEnabled|object|false|none|none|

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_SuppressionOptions">SuppressionOptions</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionoptions"></a>
<a id="schema_SuppressionOptions"></a>
<a id="tocSsuppressionoptions"></a>
<a id="tocssuppressionoptions"></a>

```json
{
  "SuppressedReasons": {}
}
```

An object that contains information about the suppression list preferences for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedReasons|object|false|none|none|

<h2 id="tocS_VdmOptions">VdmOptions</h2>
<!-- backwards compatibility -->
<a id="schemavdmoptions"></a>
<a id="schema_VdmOptions"></a>
<a id="tocSvdmoptions"></a>
<a id="tocsvdmoptions"></a>

```json
{
  "DashboardOptions": {
    "EngagementMetrics": {}
  },
  "GuardianOptions": {
    "OptimizedSharedDelivery": {}
  }
}
```

An object that defines the VDM settings that apply to emails that you send using the configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardOptions|object|false|none|none|
|GuardianOptions|object|false|none|none|

<h2 id="tocS_CreateConfigurationSetRequest">CreateConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetrequest"></a>
<a id="schema_CreateConfigurationSetRequest"></a>
<a id="tocScreateconfigurationsetrequest"></a>
<a id="tocscreateconfigurationsetrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  },
  "DeliveryOptions": {
    "TlsPolicy": {},
    "SendingPoolName": {}
  },
  "ReputationOptions": {
    "ReputationMetricsEnabled": {},
    "LastFreshStart": {}
  },
  "SendingOptions": {
    "SendingEnabled": {}
  },
  "Tags": {},
  "SuppressionOptions": {
    "SuppressedReasons": {}
  },
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

A request to create a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|TrackingOptions|object|false|none|none|
|DeliveryOptions|object|false|none|none|
|ReputationOptions|object|false|none|none|
|SendingOptions|object|false|none|none|
|Tags|object|false|none|none|
|SuppressionOptions|[SuppressionOptions](#schemasuppressionoptions)|false|none|An object that contains information about the suppression list preferences for your account.|
|VdmOptions|object|false|none|none|

<h2 id="tocS_Topics">Topics</h2>
<!-- backwards compatibility -->
<a id="schematopics"></a>
<a id="schema_Topics"></a>
<a id="tocStopics"></a>
<a id="tocstopics"></a>

```json
[
  {
    "TopicName": {},
    "DisplayName": {},
    "Description": {},
    "DefaultSubscriptionStatus": {}
  }
]
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

<h2 id="tocS_CreateContactListRequest">CreateContactListRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactlistrequest"></a>
<a id="schema_CreateContactListRequest"></a>
<a id="tocScreatecontactlistrequest"></a>
<a id="tocscreatecontactlistrequest"></a>

```json
{
  "ContactListName": {},
  "Topics": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|true|none|none|
|Topics|object|false|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateContactRequest">CreateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactrequest"></a>
<a id="schema_CreateContactRequest"></a>
<a id="tocScreatecontactrequest"></a>
<a id="tocscreatecontactrequest"></a>

```json
{
  "EmailAddress": {},
  "TopicPreferences": {},
  "UnsubscribeAll": {},
  "AttributesData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|TopicPreferences|object|false|none|none|
|UnsubscribeAll|object|false|none|none|
|AttributesData|object|false|none|none|

<h2 id="tocS_EmailTemplateName">EmailTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatename"></a>
<a id="schema_EmailTemplateName"></a>
<a id="tocSemailtemplatename"></a>
<a id="tocsemailtemplatename"></a>

```json
"string"
```

The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.

<h2 id="tocS_TemplateContent">TemplateContent</h2>
<!-- backwards compatibility -->
<a id="schematemplatecontent"></a>
<a id="schema_TemplateContent"></a>
<a id="tocStemplatecontent"></a>
<a id="tocstemplatecontent"></a>

```json
"string"
```

The content of the custom verification email template.

<h2 id="tocS_SuccessRedirectionURL">SuccessRedirectionURL</h2>
<!-- backwards compatibility -->
<a id="schemasuccessredirectionurl"></a>
<a id="schema_SuccessRedirectionURL"></a>
<a id="tocSsuccessredirectionurl"></a>
<a id="tocssuccessredirectionurl"></a>

```json
"string"
```

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

<h2 id="tocS_FailureRedirectionURL">FailureRedirectionURL</h2>
<!-- backwards compatibility -->
<a id="schemafailureredirectionurl"></a>
<a id="schema_FailureRedirectionURL"></a>
<a id="tocSfailureredirectionurl"></a>
<a id="tocsfailureredirectionurl"></a>

```json
"string"
```

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

<h2 id="tocS_CreateCustomVerificationEmailTemplateRequest">CreateCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecustomverificationemailtemplaterequest"></a>
<a id="schema_CreateCustomVerificationEmailTemplateRequest"></a>
<a id="tocScreatecustomverificationemailtemplaterequest"></a>
<a id="tocscreatecustomverificationemailtemplaterequest"></a>

```json
{
  "TemplateName": {},
  "FromEmailAddress": {},
  "TemplateSubject": {},
  "TemplateContent": {},
  "SuccessRedirectionURL": {},
  "FailureRedirectionURL": {}
}
```

Represents a request to create a custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|FromEmailAddress|object|true|none|none|
|TemplateSubject|object|true|none|none|
|TemplateContent|object|true|none|none|
|SuccessRedirectionURL|object|true|none|none|
|FailureRedirectionURL|object|true|none|none|

<h2 id="tocS_ScalingMode">ScalingMode</h2>
<!-- backwards compatibility -->
<a id="schemascalingmode"></a>
<a id="schema_ScalingMode"></a>
<a id="tocSscalingmode"></a>
<a id="tocsscalingmode"></a>

```json
"STANDARD"
```

<h2 id="tocS_CreateDedicatedIpPoolRequest">CreateDedicatedIpPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatededicatedippoolrequest"></a>
<a id="schema_CreateDedicatedIpPoolRequest"></a>
<a id="tocScreatededicatedippoolrequest"></a>
<a id="tocscreatededicatedippoolrequest"></a>

```json
{
  "PoolName": {},
  "Tags": {},
  "ScalingMode": {}
}
```

A request to create a new dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolName|object|true|none|none|
|Tags|object|false|none|none|
|ScalingMode|object|false|none|none|

<h2 id="tocS_ReportName">ReportName</h2>
<!-- backwards compatibility -->
<a id="schemareportname"></a>
<a id="schema_ReportName"></a>
<a id="tocSreportname"></a>
<a id="tocsreportname"></a>

```json
"string"
```

A name that helps you identify a report generated by the Deliverability dashboard.

<h2 id="tocS_EmailContent">EmailContent</h2>
<!-- backwards compatibility -->
<a id="schemaemailcontent"></a>
<a id="schema_EmailContent"></a>
<a id="tocSemailcontent"></a>
<a id="tocsemailcontent"></a>

```json
{
  "Simple": {
    "Subject": {
      "Data": {},
      "Charset": {}
    },
    "Body": {
      "Text": {
        "Data": {},
        "Charset": {}
      },
      "Html": {
        "Data": {},
        "Charset": {}
      }
    }
  },
  "Raw": {
    "Data": {}
  },
  "Template": {
    "TemplateName": {},
    "TemplateArn": {},
    "TemplateData": {}
  }
}
```

An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Simple|object|false|none|none|
|Raw|object|false|none|none|
|Template|object|false|none|none|

<h2 id="tocS_CreateDeliverabilityTestReportRequest">CreateDeliverabilityTestReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeliverabilitytestreportrequest"></a>
<a id="schema_CreateDeliverabilityTestReportRequest"></a>
<a id="tocScreatedeliverabilitytestreportrequest"></a>
<a id="tocscreatedeliverabilitytestreportrequest"></a>

```json
{
  "ReportName": {},
  "FromEmailAddress": {},
  "Content": {
    "Simple": {
      "Subject": {
        "Data": {},
        "Charset": {}
      },
      "Body": {
        "Text": {
          "Data": {},
          "Charset": {}
        },
        "Html": {
          "Data": {},
          "Charset": {}
        }
      }
    },
    "Raw": {
      "Data": {}
    },
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "Tags": {}
}
```

A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportName|object|false|none|none|
|FromEmailAddress|object|true|none|none|
|Content|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ReportId">ReportId</h2>
<!-- backwards compatibility -->
<a id="schemareportid"></a>
<a id="schema_ReportId"></a>
<a id="tocSreportid"></a>
<a id="tocsreportid"></a>

```json
"string"
```

A unique string that identifies a Deliverability dashboard report.

<h2 id="tocS_DeliverabilityTestStatus">DeliverabilityTestStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverabilityteststatus"></a>
<a id="schema_DeliverabilityTestStatus"></a>
<a id="tocSdeliverabilityteststatus"></a>
<a id="tocsdeliverabilityteststatus"></a>

```json
"IN_PROGRESS"
```

The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
"string"
```

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>

<h2 id="tocS_CreateEmailIdentityPolicyRequest">CreateEmailIdentityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailidentitypolicyrequest"></a>
<a id="schema_CreateEmailIdentityPolicyRequest"></a>
<a id="tocScreateemailidentitypolicyrequest"></a>
<a id="tocscreateemailidentitypolicyrequest"></a>

```json
{
  "Policy": {}
}
```

Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_DkimSigningAttributes">DkimSigningAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadkimsigningattributes"></a>
<a id="schema_DkimSigningAttributes"></a>
<a id="tocSdkimsigningattributes"></a>
<a id="tocsdkimsigningattributes"></a>

```json
{
  "DomainSigningSelector": {},
  "DomainSigningPrivateKey": {},
  "NextSigningKeyLength": {}
}
```

An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainSigningSelector|object|false|none|none|
|DomainSigningPrivateKey|object|false|none|none|
|NextSigningKeyLength|object|false|none|none|

<h2 id="tocS_CreateEmailIdentityRequest">CreateEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailidentityrequest"></a>
<a id="schema_CreateEmailIdentityRequest"></a>
<a id="tocScreateemailidentityrequest"></a>
<a id="tocscreateemailidentityrequest"></a>

```json
{
  "EmailIdentity": {},
  "Tags": {},
  "DkimSigningAttributes": {
    "DomainSigningSelector": {},
    "DomainSigningPrivateKey": {},
    "NextSigningKeyLength": {}
  },
  "ConfigurationSetName": {}
}
```

A request to begin the verification process for an email identity (an email address or domain).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailIdentity|object|true|none|none|
|Tags|object|false|none|none|
|DkimSigningAttributes|object|false|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_IdentityType">IdentityType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytype"></a>
<a id="schema_IdentityType"></a>
<a id="tocSidentitytype"></a>
<a id="tocsidentitytype"></a>

```json
"EMAIL_ADDRESS"
```

<h2 id="tocS_DkimAttributes">DkimAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadkimattributes"></a>
<a id="schema_DkimAttributes"></a>
<a id="tocSdkimattributes"></a>
<a id="tocsdkimattributes"></a>

```json
{
  "SigningEnabled": {},
  "Status": {},
  "Tokens": {},
  "SigningAttributesOrigin": {},
  "NextSigningKeyLength": {},
  "CurrentSigningKeyLength": {},
  "LastKeyGenerationTimestamp": {}
}
```

<p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningEnabled|object|false|none|none|
|Status|object|false|none|none|
|Tokens|object|false|none|none|
|SigningAttributesOrigin|object|false|none|none|
|NextSigningKeyLength|object|false|none|none|
|CurrentSigningKeyLength|object|false|none|none|
|LastKeyGenerationTimestamp|object|false|none|none|

<h2 id="tocS_EmailTemplateContent">EmailTemplateContent</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatecontent"></a>
<a id="schema_EmailTemplateContent"></a>
<a id="tocSemailtemplatecontent"></a>
<a id="tocsemailtemplatecontent"></a>

```json
{
  "Subject": {},
  "Text": {},
  "Html": {}
}
```

The content of the email, composed of a subject line, an HTML part, and a text-only part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subject|object|false|none|none|
|Text|object|false|none|none|
|Html|object|false|none|none|

<h2 id="tocS_CreateEmailTemplateRequest">CreateEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailtemplaterequest"></a>
<a id="schema_CreateEmailTemplateRequest"></a>
<a id="tocScreateemailtemplaterequest"></a>
<a id="tocscreateemailtemplaterequest"></a>

```json
{
  "TemplateName": {},
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
  }
}
```

Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|TemplateContent|object|true|none|none|

<h2 id="tocS_ImportDestination">ImportDestination</h2>
<!-- backwards compatibility -->
<a id="schemaimportdestination"></a>
<a id="schema_ImportDestination"></a>
<a id="tocSimportdestination"></a>
<a id="tocsimportdestination"></a>

```json
{
  "SuppressionListDestination": {
    "SuppressionListImportAction": {}
  },
  "ContactListDestination": {
    "ContactListName": {},
    "ContactListImportAction": {}
  }
}
```

An object that contains details about the resource destination the import job is going to target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressionListDestination|object|false|none|none|
|ContactListDestination|object|false|none|none|

<h2 id="tocS_ImportDataSource">ImportDataSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatasource"></a>
<a id="schema_ImportDataSource"></a>
<a id="tocSimportdatasource"></a>
<a id="tocsimportdatasource"></a>

```json
{
  "S3Url": {},
  "DataFormat": {}
}
```

An object that contains details about the data source of the import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Url|object|true|none|none|
|DataFormat|object|true|none|none|

<h2 id="tocS_CreateImportJobRequest">CreateImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimportjobrequest"></a>
<a id="schema_CreateImportJobRequest"></a>
<a id="tocScreateimportjobrequest"></a>
<a id="tocscreateimportjobrequest"></a>

```json
{
  "ImportDestination": {
    "SuppressionListDestination": {
      "SuppressionListImportAction": {}
    },
    "ContactListDestination": {
      "ContactListName": {},
      "ContactListImportAction": {}
    }
  },
  "ImportDataSource": {
    "S3Url": {},
    "DataFormat": {}
  }
}
```

Represents a request to create an import job from a data source for a data destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportDestination|object|true|none|none|
|ImportDataSource|object|true|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

A string that represents the import job ID.

<h2 id="tocS_CustomVerificationEmailTemplateMetadata">CustomVerificationEmailTemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplatemetadata"></a>
<a id="schema_CustomVerificationEmailTemplateMetadata"></a>
<a id="tocScustomverificationemailtemplatemetadata"></a>
<a id="tocscustomverificationemailtemplatemetadata"></a>

```json
{
  "TemplateName": {},
  "FromEmailAddress": {},
  "TemplateSubject": {},
  "SuccessRedirectionURL": {},
  "FailureRedirectionURL": {}
}
```

Contains information about a custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|FromEmailAddress|object|false|none|none|
|TemplateSubject|object|false|none|none|
|SuccessRedirectionURL|object|false|none|none|
|FailureRedirectionURL|object|false|none|none|

<h2 id="tocS_CustomVerificationEmailTemplatesList">CustomVerificationEmailTemplatesList</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplateslist"></a>
<a id="schema_CustomVerificationEmailTemplatesList"></a>
<a id="tocScustomverificationemailtemplateslist"></a>
<a id="tocscustomverificationemailtemplateslist"></a>

```json
[
  {
    "TemplateName": {},
    "FromEmailAddress": {},
    "TemplateSubject": {},
    "SuccessRedirectionURL": {},
    "FailureRedirectionURL": {}
  }
]
```

A list of the custom verification email templates that exist in your account.

<h2 id="tocS_VolumeStatistics">VolumeStatistics</h2>
<!-- backwards compatibility -->
<a id="schemavolumestatistics"></a>
<a id="schema_VolumeStatistics"></a>
<a id="tocSvolumestatistics"></a>
<a id="tocsvolumestatistics"></a>

```json
{
  "InboxRawCount": {},
  "SpamRawCount": {},
  "ProjectedInbox": {},
  "ProjectedSpam": {}
}
```

An object that contains information about the amount of email that was delivered to recipients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InboxRawCount|object|false|none|none|
|SpamRawCount|object|false|none|none|
|ProjectedInbox|object|false|none|none|
|ProjectedSpam|object|false|none|none|

<h2 id="tocS_DomainIspPlacements">DomainIspPlacements</h2>
<!-- backwards compatibility -->
<a id="schemadomainispplacements"></a>
<a id="schema_DomainIspPlacements"></a>
<a id="tocSdomainispplacements"></a>
<a id="tocsdomainispplacements"></a>

```json
[
  {
    "IspName": {},
    "InboxRawCount": {},
    "SpamRawCount": {},
    "InboxPercentage": {},
    "SpamPercentage": {}
  }
]
```

<h2 id="tocS_DailyVolume">DailyVolume</h2>
<!-- backwards compatibility -->
<a id="schemadailyvolume"></a>
<a id="schema_DailyVolume"></a>
<a id="tocSdailyvolume"></a>
<a id="tocsdailyvolume"></a>

```json
{
  "StartDate": {},
  "VolumeStatistics": {
    "InboxRawCount": {},
    "SpamRawCount": {},
    "ProjectedInbox": {},
    "ProjectedSpam": {}
  },
  "DomainIspPlacements": {}
}
```

An object that contains information about the volume of email sent on each day of the analysis period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartDate|object|false|none|none|
|VolumeStatistics|object|false|none|none|
|DomainIspPlacements|object|false|none|none|

<h2 id="tocS_DailyVolumes">DailyVolumes</h2>
<!-- backwards compatibility -->
<a id="schemadailyvolumes"></a>
<a id="schema_DailyVolumes"></a>
<a id="tocSdailyvolumes"></a>
<a id="tocsdailyvolumes"></a>

```json
[
  {
    "StartDate": {},
    "VolumeStatistics": {
      "InboxRawCount": {},
      "SpamRawCount": {},
      "ProjectedInbox": {},
      "ProjectedSpam": {}
    },
    "DomainIspPlacements": {}
  }
]
```

<h2 id="tocS_Ip">Ip</h2>
<!-- backwards compatibility -->
<a id="schemaip"></a>
<a id="schema_Ip"></a>
<a id="tocSip"></a>
<a id="tocsip"></a>

```json
"string"
```

An IPv4 address.

<h2 id="tocS_WarmupStatus">WarmupStatus</h2>
<!-- backwards compatibility -->
<a id="schemawarmupstatus"></a>
<a id="schema_WarmupStatus"></a>
<a id="tocSwarmupstatus"></a>
<a id="tocswarmupstatus"></a>

```json
"IN_PROGRESS"
```

The warmup status of a dedicated IP.

<h2 id="tocS_Percentage100Wrapper">Percentage100Wrapper</h2>
<!-- backwards compatibility -->
<a id="schemapercentage100wrapper"></a>
<a id="schema_Percentage100Wrapper"></a>
<a id="tocSpercentage100wrapper"></a>
<a id="tocspercentage100wrapper"></a>

```json
0
```

<h2 id="tocS_DedicatedIp">DedicatedIp</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedip"></a>
<a id="schema_DedicatedIp"></a>
<a id="tocSdedicatedip"></a>
<a id="tocsdedicatedip"></a>

```json
{
  "Ip": {},
  "WarmupStatus": {},
  "WarmupPercentage": {},
  "PoolName": {}
}
```

<p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ip|object|true|none|none|
|WarmupStatus|object|true|none|none|
|WarmupPercentage|object|true|none|none|
|PoolName|object|false|none|none|

<h2 id="tocS_DedicatedIpList">DedicatedIpList</h2>
<!-- backwards compatibility -->
<a id="schemadedicatediplist"></a>
<a id="schema_DedicatedIpList"></a>
<a id="tocSdedicatediplist"></a>
<a id="tocsdedicatediplist"></a>

```json
[
  {
    "Ip": {},
    "WarmupStatus": {},
    "WarmupPercentage": {},
    "PoolName": {}
  }
]
```

A list of dedicated IP addresses that are associated with your Amazon Web Services account.

<h2 id="tocS_DedicatedIpPool">DedicatedIpPool</h2>
<!-- backwards compatibility -->
<a id="schemadedicatedippool"></a>
<a id="schema_DedicatedIpPool"></a>
<a id="tocSdedicatedippool"></a>
<a id="tocsdedicatedippool"></a>

```json
{
  "PoolName": {},
  "ScalingMode": {}
}
```

Contains information about a dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolName|object|true|none|none|
|ScalingMode|object|true|none|none|

<h2 id="tocS_DeleteConfigurationSetEventDestinationRequest">DeleteConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationrequest"></a>
<a id="schema_DeleteConfigurationSetEventDestinationRequest"></a>
<a id="tocSdeleteconfigurationseteventdestinationrequest"></a>
<a id="tocsdeleteconfigurationseteventdestinationrequest"></a>

```json
{}
```

A request to delete an event destination from a configuration set.

<h2 id="tocS_DeleteConfigurationSetRequest">DeleteConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetrequest"></a>
<a id="schema_DeleteConfigurationSetRequest"></a>
<a id="tocSdeleteconfigurationsetrequest"></a>
<a id="tocsdeleteconfigurationsetrequest"></a>

```json
{}
```

A request to delete a configuration set.

<h2 id="tocS_DeleteContactListRequest">DeleteContactListRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactlistrequest"></a>
<a id="schema_DeleteContactListRequest"></a>
<a id="tocSdeletecontactlistrequest"></a>
<a id="tocsdeletecontactlistrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteContactRequest">DeleteContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactrequest"></a>
<a id="schema_DeleteContactRequest"></a>
<a id="tocSdeletecontactrequest"></a>
<a id="tocsdeletecontactrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCustomVerificationEmailTemplateRequest">DeleteCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomverificationemailtemplaterequest"></a>
<a id="schema_DeleteCustomVerificationEmailTemplateRequest"></a>
<a id="tocSdeletecustomverificationemailtemplaterequest"></a>
<a id="tocsdeletecustomverificationemailtemplaterequest"></a>

```json
{}
```

Represents a request to delete an existing custom verification email template.

<h2 id="tocS_DeleteDedicatedIpPoolRequest">DeleteDedicatedIpPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletededicatedippoolrequest"></a>
<a id="schema_DeleteDedicatedIpPoolRequest"></a>
<a id="tocSdeletededicatedippoolrequest"></a>
<a id="tocsdeletededicatedippoolrequest"></a>

```json
{}
```

A request to delete a dedicated IP pool.

<h2 id="tocS_DeleteEmailIdentityPolicyRequest">DeleteEmailIdentityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailidentitypolicyrequest"></a>
<a id="schema_DeleteEmailIdentityPolicyRequest"></a>
<a id="tocSdeleteemailidentitypolicyrequest"></a>
<a id="tocsdeleteemailidentitypolicyrequest"></a>

```json
{}
```

Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.

<h2 id="tocS_DeleteEmailIdentityRequest">DeleteEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailidentityrequest"></a>
<a id="schema_DeleteEmailIdentityRequest"></a>
<a id="tocSdeleteemailidentityrequest"></a>
<a id="tocsdeleteemailidentityrequest"></a>

```json
{}
```

A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.

<h2 id="tocS_DeleteEmailTemplateRequest">DeleteEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailtemplaterequest"></a>
<a id="schema_DeleteEmailTemplateRequest"></a>
<a id="tocSdeleteemailtemplaterequest"></a>
<a id="tocsdeleteemailtemplaterequest"></a>

```json
{}
```

Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

<h2 id="tocS_DeleteSuppressedDestinationRequest">DeleteSuppressedDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuppresseddestinationrequest"></a>
<a id="schema_DeleteSuppressedDestinationRequest"></a>
<a id="tocSdeletesuppresseddestinationrequest"></a>
<a id="tocsdeletesuppresseddestinationrequest"></a>

```json
{}
```

A request to remove an email address from the suppression list for your account.

<h2 id="tocS_DeliverabilityDashboardAccountStatus">DeliverabilityDashboardAccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverabilitydashboardaccountstatus"></a>
<a id="schema_DeliverabilityDashboardAccountStatus"></a>
<a id="tocSdeliverabilitydashboardaccountstatus"></a>
<a id="tocsdeliverabilitydashboardaccountstatus"></a>

```json
"ACTIVE"
```

The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month.

<h2 id="tocS_DeliverabilityTestSubject">DeliverabilityTestSubject</h2>
<!-- backwards compatibility -->
<a id="schemadeliverabilitytestsubject"></a>
<a id="schema_DeliverabilityTestSubject"></a>
<a id="tocSdeliverabilitytestsubject"></a>
<a id="tocsdeliverabilitytestsubject"></a>

```json
"string"
```

The subject line for an email that you submitted in a predictive inbox placement test.

<h2 id="tocS_DeliverabilityTestReport">DeliverabilityTestReport</h2>
<!-- backwards compatibility -->
<a id="schemadeliverabilitytestreport"></a>
<a id="schema_DeliverabilityTestReport"></a>
<a id="tocSdeliverabilitytestreport"></a>
<a id="tocsdeliverabilitytestreport"></a>

```json
{
  "ReportId": {},
  "ReportName": {},
  "Subject": {},
  "FromEmailAddress": {},
  "CreateDate": {},
  "DeliverabilityTestStatus": {}
}
```

An object that contains metadata related to a predictive inbox placement test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportId|object|false|none|none|
|ReportName|object|false|none|none|
|Subject|object|false|none|none|
|FromEmailAddress|object|false|none|none|
|CreateDate|object|false|none|none|
|DeliverabilityTestStatus|object|false|none|none|

<h2 id="tocS_DeliverabilityTestReports">DeliverabilityTestReports</h2>
<!-- backwards compatibility -->
<a id="schemadeliverabilitytestreports"></a>
<a id="schema_DeliverabilityTestReports"></a>
<a id="tocSdeliverabilitytestreports"></a>
<a id="tocsdeliverabilitytestreports"></a>

```json
[
  {
    "ReportId": {},
    "ReportName": {},
    "Subject": {},
    "FromEmailAddress": {},
    "CreateDate": {},
    "DeliverabilityTestStatus": {}
  }
]
```

<h2 id="tocS_MetricDimensionValue">MetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionvalue"></a>
<a id="schema_MetricDimensionValue"></a>
<a id="tocSmetricdimensionvalue"></a>
<a id="tocsmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_DkimStatus">DkimStatus</h2>
<!-- backwards compatibility -->
<a id="schemadkimstatus"></a>
<a id="schema_DkimStatus"></a>
<a id="tocSdkimstatus"></a>
<a id="tocsdkimstatus"></a>

```json
"PENDING"
```

<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>

<h2 id="tocS_DnsTokenList">DnsTokenList</h2>
<!-- backwards compatibility -->
<a id="schemadnstokenlist"></a>
<a id="schema_DnsTokenList"></a>
<a id="tocSdnstokenlist"></a>
<a id="tocsdnstokenlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DkimSigningAttributesOrigin">DkimSigningAttributesOrigin</h2>
<!-- backwards compatibility -->
<a id="schemadkimsigningattributesorigin"></a>
<a id="schema_DkimSigningAttributesOrigin"></a>
<a id="tocSdkimsigningattributesorigin"></a>
<a id="tocsdkimsigningattributesorigin"></a>

```json
"AWS_SES"
```

<h2 id="tocS_DnsToken">DnsToken</h2>
<!-- backwards compatibility -->
<a id="schemadnstoken"></a>
<a id="schema_DnsToken"></a>
<a id="tocSdnstoken"></a>
<a id="tocsdnstoken"></a>

```json
"string"
```

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"string"
```

<h2 id="tocS_ImageUrl">ImageUrl</h2>
<!-- backwards compatibility -->
<a id="schemaimageurl"></a>
<a id="schema_ImageUrl"></a>
<a id="tocSimageurl"></a>
<a id="tocsimageurl"></a>

```json
"string"
```

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_IpList">IpList</h2>
<!-- backwards compatibility -->
<a id="schemaiplist"></a>
<a id="schema_IpList"></a>
<a id="tocSiplist"></a>
<a id="tocsiplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
0
```

An object that contains information about inbox placement volume.

<h2 id="tocS_Percentage">Percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_Percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
0
```

An object that contains information about inbox placement percentages.

<h2 id="tocS_Esps">Esps</h2>
<!-- backwards compatibility -->
<a id="schemaesps"></a>
<a id="schema_Esps"></a>
<a id="tocSesps"></a>
<a id="tocsesps"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DomainDeliverabilityCampaign">DomainDeliverabilityCampaign</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeliverabilitycampaign"></a>
<a id="schema_DomainDeliverabilityCampaign"></a>
<a id="tocSdomaindeliverabilitycampaign"></a>
<a id="tocsdomaindeliverabilitycampaign"></a>

```json
{
  "CampaignId": {},
  "ImageUrl": {},
  "Subject": {},
  "FromAddress": {},
  "SendingIps": {},
  "FirstSeenDateTime": {},
  "LastSeenDateTime": {},
  "InboxCount": {},
  "SpamCount": {},
  "ReadRate": {},
  "DeleteRate": {},
  "ReadDeleteRate": {},
  "ProjectedVolume": {},
  "Esps": {}
}
```

An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CampaignId|object|false|none|none|
|ImageUrl|object|false|none|none|
|Subject|object|false|none|none|
|FromAddress|object|false|none|none|
|SendingIps|object|false|none|none|
|FirstSeenDateTime|object|false|none|none|
|LastSeenDateTime|object|false|none|none|
|InboxCount|object|false|none|none|
|SpamCount|object|false|none|none|
|ReadRate|object|false|none|none|
|DeleteRate|object|false|none|none|
|ReadDeleteRate|object|false|none|none|
|ProjectedVolume|object|false|none|none|
|Esps|object|false|none|none|

<h2 id="tocS_DomainDeliverabilityCampaignList">DomainDeliverabilityCampaignList</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeliverabilitycampaignlist"></a>
<a id="schema_DomainDeliverabilityCampaignList"></a>
<a id="tocSdomaindeliverabilitycampaignlist"></a>
<a id="tocsdomaindeliverabilitycampaignlist"></a>

```json
[
  {
    "CampaignId": {},
    "ImageUrl": {},
    "Subject": {},
    "FromAddress": {},
    "SendingIps": {},
    "FirstSeenDateTime": {},
    "LastSeenDateTime": {},
    "InboxCount": {},
    "SpamCount": {},
    "ReadRate": {},
    "DeleteRate": {},
    "ReadDeleteRate": {},
    "ProjectedVolume": {},
    "Esps": {}
  }
]
```

<p/>

<h2 id="tocS_InboxPlacementTrackingOption">InboxPlacementTrackingOption</h2>
<!-- backwards compatibility -->
<a id="schemainboxplacementtrackingoption"></a>
<a id="schema_InboxPlacementTrackingOption"></a>
<a id="tocSinboxplacementtrackingoption"></a>
<a id="tocsinboxplacementtrackingoption"></a>

```json
{
  "Global": {},
  "TrackedIsps": {}
}
```

An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Global|object|false|none|none|
|TrackedIsps|object|false|none|none|

<h2 id="tocS_DomainDeliverabilityTrackingOptions">DomainDeliverabilityTrackingOptions</h2>
<!-- backwards compatibility -->
<a id="schemadomaindeliverabilitytrackingoptions"></a>
<a id="schema_DomainDeliverabilityTrackingOptions"></a>
<a id="tocSdomaindeliverabilitytrackingoptions"></a>
<a id="tocsdomaindeliverabilitytrackingoptions"></a>

```json
[
  {
    "Domain": {},
    "SubscriptionStartDate": {},
    "InboxPlacementTrackingOption": {
      "Global": {},
      "TrackedIsps": {}
    }
  }
]
```

An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.

<h2 id="tocS_IspName">IspName</h2>
<!-- backwards compatibility -->
<a id="schemaispname"></a>
<a id="schema_IspName"></a>
<a id="tocSispname"></a>
<a id="tocsispname"></a>

```json
"string"
```

The name of an email provider.

<h2 id="tocS_DomainIspPlacement">DomainIspPlacement</h2>
<!-- backwards compatibility -->
<a id="schemadomainispplacement"></a>
<a id="schema_DomainIspPlacement"></a>
<a id="tocSdomainispplacement"></a>
<a id="tocsdomainispplacement"></a>

```json
{
  "IspName": {},
  "InboxRawCount": {},
  "SpamRawCount": {},
  "InboxPercentage": {},
  "SpamPercentage": {}
}
```

An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IspName|object|false|none|none|
|InboxRawCount|object|false|none|none|
|SpamRawCount|object|false|none|none|
|InboxPercentage|object|false|none|none|
|SpamPercentage|object|false|none|none|

<h2 id="tocS_EmailTemplateData">EmailTemplateData</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatedata"></a>
<a id="schema_EmailTemplateData"></a>
<a id="tocSemailtemplatedata"></a>
<a id="tocsemailtemplatedata"></a>

```json
"string"
```

An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.

<h2 id="tocS_EmailTemplateMetadata">EmailTemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatemetadata"></a>
<a id="schema_EmailTemplateMetadata"></a>
<a id="tocSemailtemplatemetadata"></a>
<a id="tocsemailtemplatemetadata"></a>

```json
{
  "TemplateName": {},
  "CreatedTimestamp": {}
}
```

Contains information about an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|CreatedTimestamp|object|false|none|none|

<h2 id="tocS_EmailTemplateMetadataList">EmailTemplateMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaemailtemplatemetadatalist"></a>
<a id="schema_EmailTemplateMetadataList"></a>
<a id="tocSemailtemplatemetadatalist"></a>
<a id="tocsemailtemplatemetadatalist"></a>

```json
[
  {
    "TemplateName": {},
    "CreatedTimestamp": {}
  }
]
```

A list of the EmailTemplateMetadata object.

<h2 id="tocS_EnabledWrapper">EnabledWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaenabledwrapper"></a>
<a id="schema_EnabledWrapper"></a>
<a id="tocSenabledwrapper"></a>
<a id="tocsenabledwrapper"></a>

```json
true
```

<h2 id="tocS_Esp">Esp</h2>
<!-- backwards compatibility -->
<a id="schemaesp"></a>
<a id="schema_Esp"></a>
<a id="tocSesp"></a>
<a id="tocsesp"></a>

```json
"string"
```

<h2 id="tocS_EventDestination">EventDestination</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestination"></a>
<a id="schema_EventDestination"></a>
<a id="tocSeventdestination"></a>
<a id="tocseventdestination"></a>

```json
{
  "Name": {},
  "Enabled": {},
  "MatchingEventTypes": {},
  "KinesisFirehoseDestination": {
    "IamRoleArn": {},
    "DeliveryStreamArn": {}
  },
  "CloudWatchDestination": {
    "DimensionConfigurations": {}
  },
  "SnsDestination": {
    "TopicArn": {}
  },
  "PinpointDestination": {
    "ApplicationArn": {}
  }
}
```

In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Enabled|object|false|none|none|
|MatchingEventTypes|object|true|none|none|
|KinesisFirehoseDestination|object|false|none|none|
|CloudWatchDestination|object|false|none|none|
|SnsDestination|object|false|none|none|
|PinpointDestination|object|false|none|none|

<h2 id="tocS_EventDestinations">EventDestinations</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinations"></a>
<a id="schema_EventDestinations"></a>
<a id="tocSeventdestinations"></a>
<a id="tocseventdestinations"></a>

```json
[
  {
    "Name": {},
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IamRoleArn": {},
      "DeliveryStreamArn": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SnsDestination": {
      "TopicArn": {}
    },
    "PinpointDestination": {
      "ApplicationArn": {}
    }
  }
]
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"SEND"
```

An email sending event type. For example, email sends, opens, and bounces are all email events.

<h2 id="tocS_FailedRecordsCount">FailedRecordsCount</h2>
<!-- backwards compatibility -->
<a id="schemafailedrecordscount"></a>
<a id="schema_FailedRecordsCount"></a>
<a id="tocSfailedrecordscount"></a>
<a id="tocsfailedrecordscount"></a>

```json
0
```

<h2 id="tocS_FailedRecordsS3Url">FailedRecordsS3Url</h2>
<!-- backwards compatibility -->
<a id="schemafailedrecordss3url"></a>
<a id="schema_FailedRecordsS3Url"></a>
<a id="tocSfailedrecordss3url"></a>
<a id="tocsfailedrecordss3url"></a>

```json
"string"
```

<h2 id="tocS_FailureInfo">FailureInfo</h2>
<!-- backwards compatibility -->
<a id="schemafailureinfo"></a>
<a id="schema_FailureInfo"></a>
<a id="tocSfailureinfo"></a>
<a id="tocsfailureinfo"></a>

```json
{
  "FailedRecordsS3Url": {},
  "ErrorMessage": {}
}
```

An object that contains the failure details about an import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedRecordsS3Url|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_FeedbackId">FeedbackId</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackid"></a>
<a id="schema_FeedbackId"></a>
<a id="tocSfeedbackid"></a>
<a id="tocsfeedbackid"></a>

```json
"string"
```

<h2 id="tocS_GeneralEnforcementStatus">GeneralEnforcementStatus</h2>
<!-- backwards compatibility -->
<a id="schemageneralenforcementstatus"></a>
<a id="schema_GeneralEnforcementStatus"></a>
<a id="tocSgeneralenforcementstatus"></a>
<a id="tocsgeneralenforcementstatus"></a>

```json
"string"
```

<h2 id="tocS_GetAccountRequest">GetAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountrequest"></a>
<a id="schema_GetAccountRequest"></a>
<a id="tocSgetaccountrequest"></a>
<a id="tocsgetaccountrequest"></a>

```json
{}
```

A request to obtain information about the email-sending capabilities of your Amazon SES account.

<h2 id="tocS_SendQuota">SendQuota</h2>
<!-- backwards compatibility -->
<a id="schemasendquota"></a>
<a id="schema_SendQuota"></a>
<a id="tocSsendquota"></a>
<a id="tocssendquota"></a>

```json
{
  "Max24HourSend": {},
  "MaxSendRate": {},
  "SentLast24Hours": {}
}
```

An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Max24HourSend|object|false|none|none|
|MaxSendRate|object|false|none|none|
|SentLast24Hours|object|false|none|none|

<h2 id="tocS_SuppressionAttributes">SuppressionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionattributes"></a>
<a id="schema_SuppressionAttributes"></a>
<a id="tocSsuppressionattributes"></a>
<a id="tocssuppressionattributes"></a>

```json
{
  "SuppressedReasons": {}
}
```

An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedReasons|object|false|none|none|

<h2 id="tocS_VdmAttributes">VdmAttributes</h2>
<!-- backwards compatibility -->
<a id="schemavdmattributes"></a>
<a id="schema_VdmAttributes"></a>
<a id="tocSvdmattributes"></a>
<a id="tocsvdmattributes"></a>

```json
{
  "VdmEnabled": {},
  "DashboardAttributes": {
    "EngagementMetrics": {}
  },
  "GuardianAttributes": {
    "OptimizedSharedDelivery": {}
  }
}
```

The VDM attributes that apply to your Amazon SES account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VdmEnabled|object|true|none|none|
|DashboardAttributes|object|false|none|none|
|GuardianAttributes|object|false|none|none|

<h2 id="tocS_GetBlacklistReportsRequest">GetBlacklistReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetblacklistreportsrequest"></a>
<a id="schema_GetBlacklistReportsRequest"></a>
<a id="tocSgetblacklistreportsrequest"></a>
<a id="tocsgetblacklistreportsrequest"></a>

```json
{}
```

A request to retrieve a list of the blacklists that your dedicated IP addresses appear on.

<h2 id="tocS_GetConfigurationSetEventDestinationsRequest">GetConfigurationSetEventDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationseteventdestinationsrequest"></a>
<a id="schema_GetConfigurationSetEventDestinationsRequest"></a>
<a id="tocSgetconfigurationseteventdestinationsrequest"></a>
<a id="tocsgetconfigurationseteventdestinationsrequest"></a>

```json
{}
```

A request to obtain information about the event destinations for a configuration set.

<h2 id="tocS_GetConfigurationSetRequest">GetConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconfigurationsetrequest"></a>
<a id="schema_GetConfigurationSetRequest"></a>
<a id="tocSgetconfigurationsetrequest"></a>
<a id="tocsgetconfigurationsetrequest"></a>

```json
{}
```

A request to obtain information about a configuration set.

<h2 id="tocS_GetContactListRequest">GetContactListRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactlistrequest"></a>
<a id="schema_GetContactListRequest"></a>
<a id="tocSgetcontactlistrequest"></a>
<a id="tocsgetcontactlistrequest"></a>

```json
{}
```

<h2 id="tocS_GetContactRequest">GetContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactrequest"></a>
<a id="schema_GetContactRequest"></a>
<a id="tocSgetcontactrequest"></a>
<a id="tocsgetcontactrequest"></a>

```json
{}
```

<h2 id="tocS_GetCustomVerificationEmailTemplateRequest">GetCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomverificationemailtemplaterequest"></a>
<a id="schema_GetCustomVerificationEmailTemplateRequest"></a>
<a id="tocSgetcustomverificationemailtemplaterequest"></a>
<a id="tocsgetcustomverificationemailtemplaterequest"></a>

```json
{}
```

Represents a request to retrieve an existing custom verification email template.

<h2 id="tocS_GetDedicatedIpPoolRequest">GetDedicatedIpPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatedippoolrequest"></a>
<a id="schema_GetDedicatedIpPoolRequest"></a>
<a id="tocSgetdedicatedippoolrequest"></a>
<a id="tocsgetdedicatedippoolrequest"></a>

```json
{}
```

A request to obtain more information about a dedicated IP pool.

<h2 id="tocS_GetDedicatedIpRequest">GetDedicatedIpRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatediprequest"></a>
<a id="schema_GetDedicatedIpRequest"></a>
<a id="tocSgetdedicatediprequest"></a>
<a id="tocsgetdedicatediprequest"></a>

```json
{}
```

A request to obtain more information about a dedicated IP address.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxItems">MaxItems</h2>
<!-- backwards compatibility -->
<a id="schemamaxitems"></a>
<a id="schema_MaxItems"></a>
<a id="tocSmaxitems"></a>
<a id="tocsmaxitems"></a>

```json
0
```

<h2 id="tocS_GetDedicatedIpsRequest">GetDedicatedIpsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdedicatedipsrequest"></a>
<a id="schema_GetDedicatedIpsRequest"></a>
<a id="tocSgetdedicatedipsrequest"></a>
<a id="tocsgetdedicatedipsrequest"></a>

```json
{}
```

A request to obtain more information about dedicated IP pools.

<h2 id="tocS_GetDeliverabilityDashboardOptionsRequest">GetDeliverabilityDashboardOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeliverabilitydashboardoptionsrequest"></a>
<a id="schema_GetDeliverabilityDashboardOptionsRequest"></a>
<a id="tocSgetdeliverabilitydashboardoptionsrequest"></a>
<a id="tocsgetdeliverabilitydashboardoptionsrequest"></a>

```json
{}
```

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

<h2 id="tocS_GetDeliverabilityTestReportRequest">GetDeliverabilityTestReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdeliverabilitytestreportrequest"></a>
<a id="schema_GetDeliverabilityTestReportRequest"></a>
<a id="tocSgetdeliverabilitytestreportrequest"></a>
<a id="tocsgetdeliverabilitytestreportrequest"></a>

```json
{}
```

A request to retrieve the results of a predictive inbox placement test.

<h2 id="tocS_PlacementStatistics">PlacementStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaplacementstatistics"></a>
<a id="schema_PlacementStatistics"></a>
<a id="tocSplacementstatistics"></a>
<a id="tocsplacementstatistics"></a>

```json
{
  "InboxPercentage": {},
  "SpamPercentage": {},
  "MissingPercentage": {},
  "SpfPercentage": {},
  "DkimPercentage": {}
}
```

An object that contains inbox placement data for an email provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InboxPercentage|object|false|none|none|
|SpamPercentage|object|false|none|none|
|MissingPercentage|object|false|none|none|
|SpfPercentage|object|false|none|none|
|DkimPercentage|object|false|none|none|

<h2 id="tocS_IspPlacements">IspPlacements</h2>
<!-- backwards compatibility -->
<a id="schemaispplacements"></a>
<a id="schema_IspPlacements"></a>
<a id="tocSispplacements"></a>
<a id="tocsispplacements"></a>

```json
[
  {
    "IspName": {},
    "PlacementStatistics": {
      "InboxPercentage": {},
      "SpamPercentage": {},
      "MissingPercentage": {},
      "SpfPercentage": {},
      "DkimPercentage": {}
    }
  }
]
```

<h2 id="tocS_MessageContent">MessageContent</h2>
<!-- backwards compatibility -->
<a id="schemamessagecontent"></a>
<a id="schema_MessageContent"></a>
<a id="tocSmessagecontent"></a>
<a id="tocsmessagecontent"></a>

```json
"string"
```

The body of an email message.

<h2 id="tocS_GetDomainDeliverabilityCampaignRequest">GetDomainDeliverabilityCampaignRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomaindeliverabilitycampaignrequest"></a>
<a id="schema_GetDomainDeliverabilityCampaignRequest"></a>
<a id="tocSgetdomaindeliverabilitycampaignrequest"></a>
<a id="tocsgetdomaindeliverabilitycampaignrequest"></a>

```json
{}
```

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

<h2 id="tocS_GetDomainStatisticsReportRequest">GetDomainStatisticsReportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainstatisticsreportrequest"></a>
<a id="schema_GetDomainStatisticsReportRequest"></a>
<a id="tocSgetdomainstatisticsreportrequest"></a>
<a id="tocsgetdomainstatisticsreportrequest"></a>

```json
{}
```

A request to obtain deliverability metrics for a domain.

<h2 id="tocS_OverallVolume">OverallVolume</h2>
<!-- backwards compatibility -->
<a id="schemaoverallvolume"></a>
<a id="schema_OverallVolume"></a>
<a id="tocSoverallvolume"></a>
<a id="tocsoverallvolume"></a>

```json
{
  "VolumeStatistics": {
    "InboxRawCount": {},
    "SpamRawCount": {},
    "ProjectedInbox": {},
    "ProjectedSpam": {}
  },
  "ReadRatePercent": {},
  "DomainIspPlacements": {}
}
```

An object that contains information about email that was sent from the selected domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VolumeStatistics|object|false|none|none|
|ReadRatePercent|object|false|none|none|
|DomainIspPlacements|object|false|none|none|

<h2 id="tocS_GetEmailIdentityPoliciesRequest">GetEmailIdentityPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetemailidentitypoliciesrequest"></a>
<a id="schema_GetEmailIdentityPoliciesRequest"></a>
<a id="tocSgetemailidentitypoliciesrequest"></a>
<a id="tocsgetemailidentitypoliciesrequest"></a>

```json
{}
```

A request to return the policies of an email identity.

<h2 id="tocS_PolicyMap">PolicyMap</h2>
<!-- backwards compatibility -->
<a id="schemapolicymap"></a>
<a id="schema_PolicyMap"></a>
<a id="tocSpolicymap"></a>
<a id="tocspolicymap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

An object that contains mapping between <code>PolicyName</code> and <code>Policy</code> text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Policy](#schemapolicy)|false|none|<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|

<h2 id="tocS_GetEmailIdentityRequest">GetEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetemailidentityrequest"></a>
<a id="schema_GetEmailIdentityRequest"></a>
<a id="tocSgetemailidentityrequest"></a>
<a id="tocsgetemailidentityrequest"></a>

```json
{}
```

A request to return details about an email identity.

<h2 id="tocS_MailFromAttributes">MailFromAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamailfromattributes"></a>
<a id="schema_MailFromAttributes"></a>
<a id="tocSmailfromattributes"></a>
<a id="tocsmailfromattributes"></a>

```json
{
  "MailFromDomain": {},
  "MailFromDomainStatus": {},
  "BehaviorOnMxFailure": {}
}
```

A list of attributes that are associated with a MAIL FROM domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailFromDomain|object|true|none|none|
|MailFromDomainStatus|object|true|none|none|
|BehaviorOnMxFailure|object|true|none|none|

<h2 id="tocS_VerificationStatus">VerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstatus"></a>
<a id="schema_VerificationStatus"></a>
<a id="tocSverificationstatus"></a>
<a id="tocsverificationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_GetEmailTemplateRequest">GetEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetemailtemplaterequest"></a>
<a id="schema_GetEmailTemplateRequest"></a>
<a id="tocSgetemailtemplaterequest"></a>
<a id="tocsgetemailtemplaterequest"></a>

```json
{}
```

Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify.

<h2 id="tocS_GetImportJobRequest">GetImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimportjobrequest"></a>
<a id="schema_GetImportJobRequest"></a>
<a id="tocSgetimportjobrequest"></a>
<a id="tocsgetimportjobrequest"></a>

```json
{}
```

Represents a request for information about an import job using the import job ID.

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"CREATED"
```

The status of the import job.

<h2 id="tocS_ProcessedRecordsCount">ProcessedRecordsCount</h2>
<!-- backwards compatibility -->
<a id="schemaprocessedrecordscount"></a>
<a id="schema_ProcessedRecordsCount"></a>
<a id="tocSprocessedrecordscount"></a>
<a id="tocsprocessedrecordscount"></a>

```json
0
```

<h2 id="tocS_GetSuppressedDestinationRequest">GetSuppressedDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsuppresseddestinationrequest"></a>
<a id="schema_GetSuppressedDestinationRequest"></a>
<a id="tocSgetsuppresseddestinationrequest"></a>
<a id="tocsgetsuppresseddestinationrequest"></a>

```json
{}
```

A request to retrieve information about an email address that's on the suppression list for your account.

<h2 id="tocS_SuppressedDestination">SuppressedDestination</h2>
<!-- backwards compatibility -->
<a id="schemasuppresseddestination"></a>
<a id="schema_SuppressedDestination"></a>
<a id="tocSsuppresseddestination"></a>
<a id="tocssuppresseddestination"></a>

```json
{
  "EmailAddress": {},
  "Reason": {},
  "LastUpdateTime": {},
  "Attributes": {
    "MessageId": {},
    "FeedbackId": {}
  }
}
```

An object that contains information about an email address that is on the suppression list for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|Reason|object|true|none|none|
|LastUpdateTime|object|true|none|none|
|Attributes|object|false|none|none|

<h2 id="tocS_IdentityInfo">IdentityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaidentityinfo"></a>
<a id="schema_IdentityInfo"></a>
<a id="tocSidentityinfo"></a>
<a id="tocsidentityinfo"></a>

```json
{
  "IdentityType": {},
  "IdentityName": {},
  "SendingEnabled": {},
  "VerificationStatus": {}
}
```

Information about an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|IdentityName|object|false|none|none|
|SendingEnabled|object|false|none|none|
|VerificationStatus|object|false|none|none|

<h2 id="tocS_IdentityInfoList">IdentityInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaidentityinfolist"></a>
<a id="schema_IdentityInfoList"></a>
<a id="tocSidentityinfolist"></a>
<a id="tocsidentityinfolist"></a>

```json
[
  {
    "IdentityType": {},
    "IdentityName": {},
    "SendingEnabled": {},
    "VerificationStatus": {}
  }
]
```

<h2 id="tocS_ImportDestinationType">ImportDestinationType</h2>
<!-- backwards compatibility -->
<a id="schemaimportdestinationtype"></a>
<a id="schema_ImportDestinationType"></a>
<a id="tocSimportdestinationtype"></a>
<a id="tocsimportdestinationtype"></a>

```json
"SUPPRESSION_LIST"
```

The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>.

<h2 id="tocS_ImportJobSummary">ImportJobSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimportjobsummary"></a>
<a id="schema_ImportJobSummary"></a>
<a id="tocSimportjobsummary"></a>
<a id="tocsimportjobsummary"></a>

```json
{
  "JobId": "string",
  "ImportDestination": {
    "SuppressionListDestination": {
      "SuppressionListImportAction": {}
    },
    "ContactListDestination": {
      "ContactListName": {},
      "ContactListImportAction": {}
    }
  },
  "JobStatus": "CREATED",
  "CreatedTimestamp": {},
  "ProcessedRecordsCount": {},
  "FailedRecordsCount": {}
}
```

A summary of the import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|[JobId](#schemajobid)|false|none|A string that represents the import job ID.|
|ImportDestination|[ImportDestination](#schemaimportdestination)|false|none|An object that contains details about the resource destination the import job is going to target.|
|JobStatus|[JobStatus](#schemajobstatus)|false|none|The status of the import job.|
|CreatedTimestamp|object|false|none|none|
|ProcessedRecordsCount|object|false|none|none|
|FailedRecordsCount|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|JobStatus|CREATED|
|JobStatus|PROCESSING|
|JobStatus|COMPLETED|
|JobStatus|FAILED|

<h2 id="tocS_ImportJobSummaryList">ImportJobSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaimportjobsummarylist"></a>
<a id="schema_ImportJobSummaryList"></a>
<a id="tocSimportjobsummarylist"></a>
<a id="tocsimportjobsummarylist"></a>

```json
[
  {
    "JobId": "string",
    "ImportDestination": {
      "SuppressionListDestination": {
        "SuppressionListImportAction": {}
      },
      "ContactListDestination": {
        "ContactListName": {},
        "ContactListImportAction": {}
      }
    },
    "JobStatus": "CREATED",
    "CreatedTimestamp": {},
    "ProcessedRecordsCount": {},
    "FailedRecordsCount": {}
  }
]
```

A list of the import job summaries.

<h2 id="tocS_IspNameList">IspNameList</h2>
<!-- backwards compatibility -->
<a id="schemaispnamelist"></a>
<a id="schema_IspNameList"></a>
<a id="tocSispnamelist"></a>
<a id="tocsispnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_IspPlacement">IspPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaispplacement"></a>
<a id="schema_IspPlacement"></a>
<a id="tocSispplacement"></a>
<a id="tocsispplacement"></a>

```json
{
  "IspName": {},
  "PlacementStatistics": {
    "InboxPercentage": {},
    "SpamPercentage": {},
    "MissingPercentage": {},
    "SpfPercentage": {},
    "DkimPercentage": {}
  }
}
```

An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IspName|object|false|none|none|
|PlacementStatistics|object|false|none|none|

<h2 id="tocS_ListConfigurationSetsRequest">ListConfigurationSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsetsrequest"></a>
<a id="schema_ListConfigurationSetsRequest"></a>
<a id="tocSlistconfigurationsetsrequest"></a>
<a id="tocslistconfigurationsetsrequest"></a>

```json
{}
```

A request to obtain a list of configuration sets for your Amazon SES account in the current Amazon Web Services Region.

<h2 id="tocS_ListContactListsRequest">ListContactListsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactlistsrequest"></a>
<a id="schema_ListContactListsRequest"></a>
<a id="tocSlistcontactlistsrequest"></a>
<a id="tocslistcontactlistsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOfContactLists">ListOfContactLists</h2>
<!-- backwards compatibility -->
<a id="schemalistofcontactlists"></a>
<a id="schema_ListOfContactLists"></a>
<a id="tocSlistofcontactlists"></a>
<a id="tocslistofcontactlists"></a>

```json
[
  {
    "ContactListName": {},
    "LastUpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListContactsFilter">ListContactsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsfilter"></a>
<a id="schema_ListContactsFilter"></a>
<a id="tocSlistcontactsfilter"></a>
<a id="tocslistcontactsfilter"></a>

```json
{
  "FilteredStatus": {},
  "TopicFilter": {
    "TopicName": {},
    "UseDefaultIfPreferenceUnavailable": {}
  }
}
```

A filter that can be applied to a list of contacts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilteredStatus|object|false|none|none|
|TopicFilter|object|false|none|none|

<h2 id="tocS_ListContactsRequest">ListContactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsrequest"></a>
<a id="schema_ListContactsRequest"></a>
<a id="tocSlistcontactsrequest"></a>
<a id="tocslistcontactsrequest"></a>

```json
{
  "Filter": {
    "FilteredStatus": {},
    "TopicFilter": {
      "TopicName": {},
      "UseDefaultIfPreferenceUnavailable": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|

<h2 id="tocS_ListOfContacts">ListOfContacts</h2>
<!-- backwards compatibility -->
<a id="schemalistofcontacts"></a>
<a id="schema_ListOfContacts"></a>
<a id="tocSlistofcontacts"></a>
<a id="tocslistofcontacts"></a>

```json
[
  {
    "EmailAddress": {},
    "TopicPreferences": {},
    "TopicDefaultPreferences": {},
    "UnsubscribeAll": {},
    "LastUpdatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListCustomVerificationEmailTemplatesRequest">ListCustomVerificationEmailTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomverificationemailtemplatesrequest"></a>
<a id="schema_ListCustomVerificationEmailTemplatesRequest"></a>
<a id="tocSlistcustomverificationemailtemplatesrequest"></a>
<a id="tocslistcustomverificationemailtemplatesrequest"></a>

```json
{}
```

Represents a request to list the existing custom verification email templates for your account.

<h2 id="tocS_ListDedicatedIpPoolsRequest">ListDedicatedIpPoolsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdedicatedippoolsrequest"></a>
<a id="schema_ListDedicatedIpPoolsRequest"></a>
<a id="tocSlistdedicatedippoolsrequest"></a>
<a id="tocslistdedicatedippoolsrequest"></a>

```json
{}
```

A request to obtain a list of dedicated IP pools.

<h2 id="tocS_ListOfDedicatedIpPools">ListOfDedicatedIpPools</h2>
<!-- backwards compatibility -->
<a id="schemalistofdedicatedippools"></a>
<a id="schema_ListOfDedicatedIpPools"></a>
<a id="tocSlistofdedicatedippools"></a>
<a id="tocslistofdedicatedippools"></a>

```json
[
  "string"
]
```

A list of dedicated IP pools that are associated with your Amazon Web Services account.

<h2 id="tocS_ListDeliverabilityTestReportsRequest">ListDeliverabilityTestReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverabilitytestreportsrequest"></a>
<a id="schema_ListDeliverabilityTestReportsRequest"></a>
<a id="tocSlistdeliverabilitytestreportsrequest"></a>
<a id="tocslistdeliverabilitytestreportsrequest"></a>

```json
{}
```

A request to list all of the predictive inbox placement tests that you've performed.

<h2 id="tocS_ListDomainDeliverabilityCampaignsRequest">ListDomainDeliverabilityCampaignsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomaindeliverabilitycampaignsrequest"></a>
<a id="schema_ListDomainDeliverabilityCampaignsRequest"></a>
<a id="tocSlistdomaindeliverabilitycampaignsrequest"></a>
<a id="tocslistdomaindeliverabilitycampaignsrequest"></a>

```json
{}
```

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard.

<h2 id="tocS_ListEmailIdentitiesRequest">ListEmailIdentitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistemailidentitiesrequest"></a>
<a id="schema_ListEmailIdentitiesRequest"></a>
<a id="tocSlistemailidentitiesrequest"></a>
<a id="tocslistemailidentitiesrequest"></a>

```json
{}
```

A request to list all of the email identities associated with your Amazon Web Services account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.

<h2 id="tocS_ListEmailTemplatesRequest">ListEmailTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistemailtemplatesrequest"></a>
<a id="schema_ListEmailTemplatesRequest"></a>
<a id="tocSlistemailtemplatesrequest"></a>
<a id="tocslistemailtemplatesrequest"></a>

```json
{}
```

Represents a request to list the email templates present in your Amazon SES account in the current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

<h2 id="tocS_ListImportJobsRequest">ListImportJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimportjobsrequest"></a>
<a id="schema_ListImportJobsRequest"></a>
<a id="tocSlistimportjobsrequest"></a>
<a id="tocslistimportjobsrequest"></a>

```json
{
  "ImportDestinationType": {}
}
```

Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImportDestinationType|object|false|none|none|

<h2 id="tocS_ListManagementOptions">ListManagementOptions</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagementoptions"></a>
<a id="schema_ListManagementOptions"></a>
<a id="tocSlistmanagementoptions"></a>
<a id="tocslistmanagementoptions"></a>

```json
{
  "ContactListName": {},
  "TopicName": {}
}
```

An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactListName|object|true|none|none|
|TopicName|object|false|none|none|

<h2 id="tocS_ListRecommendationsFilter">ListRecommendationsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsfilter"></a>
<a id="schema_ListRecommendationsFilter"></a>
<a id="tocSlistrecommendationsfilter"></a>
<a id="tocslistrecommendationsfilter"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ListRecommendationFilterValue](#schemalistrecommendationfiltervalue)|false|none|none|

<h2 id="tocS_ListRecommendationsFilterKey">ListRecommendationsFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsfilterkey"></a>
<a id="schema_ListRecommendationsFilterKey"></a>
<a id="tocSlistrecommendationsfilterkey"></a>
<a id="tocslistrecommendationsfilterkey"></a>

```json
"TYPE"
```

<p>The <code>ListRecommendations</code> filter type. This can be one of the following:</p> <ul> <li> <p> <code>TYPE</code> – The recommendation type, with values like <code>DKIM</code>, <code>SPF</code>, <code>DMARC</code> or <code>BIMI</code>.</p> </li> <li> <p> <code>IMPACT</code> – The recommendation impact, with values like <code>HIGH</code> or <code>LOW</code>.</p> </li> <li> <p> <code>STATUS</code> – The recommendation status, with values like <code>OPEN</code> or <code>FIXED</code>.</p> </li> <li> <p> <code>RESOURCE_ARN</code> – The resource affected by the recommendation, with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> </li> </ul>

<h2 id="tocS_ListRecommendationsRequest">ListRecommendationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrecommendationsrequest"></a>
<a id="schema_ListRecommendationsRequest"></a>
<a id="tocSlistrecommendationsrequest"></a>
<a id="tocslistrecommendationsrequest"></a>

```json
{
  "Filter": {
    "property1": "string",
    "property2": "string"
  },
  "NextToken": {},
  "PageSize": {}
}
```

Represents a request to list the existing recommendations for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_RecommendationsList">RecommendationsList</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationslist"></a>
<a id="schema_RecommendationsList"></a>
<a id="tocSrecommendationslist"></a>
<a id="tocsrecommendationslist"></a>

```json
[
  {
    "ResourceArn": {},
    "Type": {},
    "Description": {},
    "Status": {},
    "CreatedTimestamp": {},
    "LastUpdatedTimestamp": {},
    "Impact": {}
  }
]
```

<h2 id="tocS_ListSuppressedDestinationsRequest">ListSuppressedDestinationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsuppresseddestinationsrequest"></a>
<a id="schema_ListSuppressedDestinationsRequest"></a>
<a id="tocSlistsuppresseddestinationsrequest"></a>
<a id="tocslistsuppresseddestinationsrequest"></a>

```json
{}
```

A request to obtain a list of email destinations that are on the suppression list for your account.

<h2 id="tocS_SuppressedDestinationSummaries">SuppressedDestinationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasuppresseddestinationsummaries"></a>
<a id="schema_SuppressedDestinationSummaries"></a>
<a id="tocSsuppresseddestinationsummaries"></a>
<a id="tocssuppresseddestinationsummaries"></a>

```json
[
  {
    "EmailAddress": {},
    "Reason": {},
    "LastUpdateTime": {}
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

<h2 id="tocS_MailFromDomainName">MailFromDomainName</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainname"></a>
<a id="schema_MailFromDomainName"></a>
<a id="tocSmailfromdomainname"></a>
<a id="tocsmailfromdomainname"></a>

```json
"string"
```

The domain to use as a MAIL FROM domain.

<h2 id="tocS_MailFromDomainStatus">MailFromDomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainstatus"></a>
<a id="schema_MailFromDomainStatus"></a>
<a id="tocSmailfromdomainstatus"></a>
<a id="tocsmailfromdomainstatus"></a>

```json
"PENDING"
```

<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>

<h2 id="tocS_Max24HourSend">Max24HourSend</h2>
<!-- backwards compatibility -->
<a id="schemamax24hoursend"></a>
<a id="schema_Max24HourSend"></a>
<a id="tocSmax24hoursend"></a>
<a id="tocsmax24hoursend"></a>

```json
0
```

<h2 id="tocS_MaxSendRate">MaxSendRate</h2>
<!-- backwards compatibility -->
<a id="schemamaxsendrate"></a>
<a id="schema_MaxSendRate"></a>
<a id="tocSmaxsendrate"></a>
<a id="tocsmaxsendrate"></a>

```json
0
```

<h2 id="tocS_MessageTagName">MessageTagName</h2>
<!-- backwards compatibility -->
<a id="schemamessagetagname"></a>
<a id="schema_MessageTagName"></a>
<a id="tocSmessagetagname"></a>
<a id="tocsmessagetagname"></a>

```json
"string"
```

<p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

<h2 id="tocS_MessageTagValue">MessageTagValue</h2>
<!-- backwards compatibility -->
<a id="schemamessagetagvalue"></a>
<a id="schema_MessageTagValue"></a>
<a id="tocSmessagetagvalue"></a>
<a id="tocsmessagetagvalue"></a>

```json
"string"
```

<p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

<h2 id="tocS_QueryErrorCode">QueryErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerrorcode"></a>
<a id="schema_QueryErrorCode"></a>
<a id="tocSqueryerrorcode"></a>
<a id="tocsqueryerrorcode"></a>

```json
"INTERNAL_FAILURE"
```

<h2 id="tocS_QueryErrorMessage">QueryErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaqueryerrormessage"></a>
<a id="schema_QueryErrorMessage"></a>
<a id="tocSqueryerrormessage"></a>
<a id="tocsqueryerrormessage"></a>

```json
"string"
```

<h2 id="tocS_MetricDataError">MetricDataError</h2>
<!-- backwards compatibility -->
<a id="schemametricdataerror"></a>
<a id="schema_MetricDataError"></a>
<a id="tocSmetricdataerror"></a>
<a id="tocsmetricdataerror"></a>

```json
{
  "Id": {},
  "Code": {},
  "Message": {}
}
```

An error corresponding to the unsuccessful processing of a single metric data query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_TimestampList">TimestampList</h2>
<!-- backwards compatibility -->
<a id="schematimestamplist"></a>
<a id="schema_TimestampList"></a>
<a id="tocStimestamplist"></a>
<a id="tocstimestamplist"></a>

```json
[
  "1970-01-01T00:00:00Z"
]
```

<h2 id="tocS_MetricValueList">MetricValueList</h2>
<!-- backwards compatibility -->
<a id="schemametricvaluelist"></a>
<a id="schema_MetricValueList"></a>
<a id="tocSmetricvaluelist"></a>
<a id="tocsmetricvaluelist"></a>

```json
[
  0
]
```

<h2 id="tocS_MetricDataResult">MetricDataResult</h2>
<!-- backwards compatibility -->
<a id="schemametricdataresult"></a>
<a id="schema_MetricDataResult"></a>
<a id="tocSmetricdataresult"></a>
<a id="tocsmetricdataresult"></a>

```json
{
  "Id": {},
  "Timestamps": {},
  "Values": {}
}
```

The result of a single metric data query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Timestamps|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_MetricDimensionName">MetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionname"></a>
<a id="schema_MetricDimensionName"></a>
<a id="tocSmetricdimensionname"></a>
<a id="tocsmetricdimensionname"></a>

```json
"EMAIL_IDENTITY"
```

<p>The <code>BatchGetMetricDataQuery</code> dimension name. This can be one of the following:</p> <ul> <li> <p> <code>EMAIL_IDENTITY</code> – The email identity used when sending messages.</p> </li> <li> <p> <code>CONFIGURATION_SET</code> – The configuration set used when sending messages (if one was used).</p> </li> <li> <p> <code>ISP</code> – The recipient ISP (e.g. <code>Gmail</code>, <code>Yahoo</code>, etc.).</p> </li> </ul>

<h2 id="tocS_PutAccountDedicatedIpWarmupAttributesRequest">PutAccountDedicatedIpWarmupAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountdedicatedipwarmupattributesrequest"></a>
<a id="schema_PutAccountDedicatedIpWarmupAttributesRequest"></a>
<a id="tocSputaccountdedicatedipwarmupattributesrequest"></a>
<a id="tocsputaccountdedicatedipwarmupattributesrequest"></a>

```json
{
  "AutoWarmupEnabled": {}
}
```

A request to enable or disable the automatic IP address warm-up feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoWarmupEnabled|object|false|none|none|

<h2 id="tocS_PutAccountDetailsRequest">PutAccountDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountdetailsrequest"></a>
<a id="schema_PutAccountDetailsRequest"></a>
<a id="tocSputaccountdetailsrequest"></a>
<a id="tocsputaccountdetailsrequest"></a>

```json
{
  "MailType": {},
  "WebsiteURL": {},
  "ContactLanguage": {},
  "UseCaseDescription": {},
  "AdditionalContactEmailAddresses": {},
  "ProductionAccessEnabled": {}
}
```

A request to submit new account details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailType|object|true|none|none|
|WebsiteURL|object|true|none|none|
|ContactLanguage|object|false|none|none|
|UseCaseDescription|object|true|none|none|
|AdditionalContactEmailAddresses|object|false|none|none|
|ProductionAccessEnabled|object|false|none|none|

<h2 id="tocS_PutAccountSendingAttributesRequest">PutAccountSendingAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsendingattributesrequest"></a>
<a id="schema_PutAccountSendingAttributesRequest"></a>
<a id="tocSputaccountsendingattributesrequest"></a>
<a id="tocsputaccountsendingattributesrequest"></a>

```json
{
  "SendingEnabled": {}
}
```

A request to change the ability of your account to send email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendingEnabled|object|false|none|none|

<h2 id="tocS_PutAccountSuppressionAttributesRequest">PutAccountSuppressionAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountsuppressionattributesrequest"></a>
<a id="schema_PutAccountSuppressionAttributesRequest"></a>
<a id="tocSputaccountsuppressionattributesrequest"></a>
<a id="tocsputaccountsuppressionattributesrequest"></a>

```json
{
  "SuppressedReasons": {}
}
```

A request to change your account's suppression preferences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedReasons|object|false|none|none|

<h2 id="tocS_PutAccountVdmAttributesRequest">PutAccountVdmAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccountvdmattributesrequest"></a>
<a id="schema_PutAccountVdmAttributesRequest"></a>
<a id="tocSputaccountvdmattributesrequest"></a>
<a id="tocsputaccountvdmattributesrequest"></a>

```json
{
  "VdmAttributes": {
    "VdmEnabled": {},
    "DashboardAttributes": {
      "EngagementMetrics": {}
    },
    "GuardianAttributes": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

A request to submit new account VDM attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VdmAttributes|object|true|none|none|

<h2 id="tocS_SendingPoolName">SendingPoolName</h2>
<!-- backwards compatibility -->
<a id="schemasendingpoolname"></a>
<a id="schema_SendingPoolName"></a>
<a id="tocSsendingpoolname"></a>
<a id="tocssendingpoolname"></a>

```json
"string"
```

The name of the dedicated IP pool to associate with the configuration set.

<h2 id="tocS_PutConfigurationSetDeliveryOptionsRequest">PutConfigurationSetDeliveryOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetdeliveryoptionsrequest"></a>
<a id="schema_PutConfigurationSetDeliveryOptionsRequest"></a>
<a id="tocSputconfigurationsetdeliveryoptionsrequest"></a>
<a id="tocsputconfigurationsetdeliveryoptionsrequest"></a>

```json
{
  "TlsPolicy": {},
  "SendingPoolName": {}
}
```

A request to associate a configuration set with a dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TlsPolicy|object|false|none|none|
|SendingPoolName|object|false|none|none|

<h2 id="tocS_PutConfigurationSetReputationOptionsRequest">PutConfigurationSetReputationOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetreputationoptionsrequest"></a>
<a id="schema_PutConfigurationSetReputationOptionsRequest"></a>
<a id="tocSputconfigurationsetreputationoptionsrequest"></a>
<a id="tocsputconfigurationsetreputationoptionsrequest"></a>

```json
{
  "ReputationMetricsEnabled": {}
}
```

A request to enable or disable tracking of reputation metrics for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReputationMetricsEnabled|object|false|none|none|

<h2 id="tocS_PutConfigurationSetSendingOptionsRequest">PutConfigurationSetSendingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetsendingoptionsrequest"></a>
<a id="schema_PutConfigurationSetSendingOptionsRequest"></a>
<a id="tocSputconfigurationsetsendingoptionsrequest"></a>
<a id="tocsputconfigurationsetsendingoptionsrequest"></a>

```json
{
  "SendingEnabled": {}
}
```

A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendingEnabled|object|false|none|none|

<h2 id="tocS_PutConfigurationSetSuppressionOptionsRequest">PutConfigurationSetSuppressionOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetsuppressionoptionsrequest"></a>
<a id="schema_PutConfigurationSetSuppressionOptionsRequest"></a>
<a id="tocSputconfigurationsetsuppressionoptionsrequest"></a>
<a id="tocsputconfigurationsetsuppressionoptionsrequest"></a>

```json
{
  "SuppressedReasons": {}
}
```

A request to change the account suppression list preferences for a specific configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuppressedReasons|object|false|none|none|

<h2 id="tocS_PutConfigurationSetTrackingOptionsRequest">PutConfigurationSetTrackingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsettrackingoptionsrequest"></a>
<a id="schema_PutConfigurationSetTrackingOptionsRequest"></a>
<a id="tocSputconfigurationsettrackingoptionsrequest"></a>
<a id="tocsputconfigurationsettrackingoptionsrequest"></a>

```json
{
  "CustomRedirectDomain": {}
}
```

A request to add a custom domain for tracking open and click events to a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRedirectDomain|object|false|none|none|

<h2 id="tocS_PutConfigurationSetVdmOptionsRequest">PutConfigurationSetVdmOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetvdmoptionsrequest"></a>
<a id="schema_PutConfigurationSetVdmOptionsRequest"></a>
<a id="tocSputconfigurationsetvdmoptionsrequest"></a>
<a id="tocsputconfigurationsetvdmoptionsrequest"></a>

```json
{
  "VdmOptions": {
    "DashboardOptions": {
      "EngagementMetrics": {}
    },
    "GuardianOptions": {
      "OptimizedSharedDelivery": {}
    }
  }
}
```

A request to add specific VDM settings to a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VdmOptions|object|false|none|none|

<h2 id="tocS_PutDedicatedIpInPoolRequest">PutDedicatedIpInPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedipinpoolrequest"></a>
<a id="schema_PutDedicatedIpInPoolRequest"></a>
<a id="tocSputdedicatedipinpoolrequest"></a>
<a id="tocsputdedicatedipinpoolrequest"></a>

```json
{
  "DestinationPoolName": {}
}
```

A request to move a dedicated IP address to a dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationPoolName|object|true|none|none|

<h2 id="tocS_PutDedicatedIpPoolScalingAttributesRequest">PutDedicatedIpPoolScalingAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedippoolscalingattributesrequest"></a>
<a id="schema_PutDedicatedIpPoolScalingAttributesRequest"></a>
<a id="tocSputdedicatedippoolscalingattributesrequest"></a>
<a id="tocsputdedicatedippoolscalingattributesrequest"></a>

```json
{
  "ScalingMode": {}
}
```

A request to convert a dedicated IP pool to a different scaling mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingMode|object|true|none|none|

<h2 id="tocS_PutDedicatedIpWarmupAttributesRequest">PutDedicatedIpWarmupAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdedicatedipwarmupattributesrequest"></a>
<a id="schema_PutDedicatedIpWarmupAttributesRequest"></a>
<a id="tocSputdedicatedipwarmupattributesrequest"></a>
<a id="tocsputdedicatedipwarmupattributesrequest"></a>

```json
{
  "WarmupPercentage": {}
}
```

A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WarmupPercentage|object|true|none|none|

<h2 id="tocS_PutDeliverabilityDashboardOptionRequest">PutDeliverabilityDashboardOptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputdeliverabilitydashboardoptionrequest"></a>
<a id="schema_PutDeliverabilityDashboardOptionRequest"></a>
<a id="tocSputdeliverabilitydashboardoptionrequest"></a>
<a id="tocsputdeliverabilitydashboardoptionrequest"></a>

```json
{
  "DashboardEnabled": {},
  "SubscribedDomains": {}
}
```

<p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardEnabled|object|true|none|none|
|SubscribedDomains|object|false|none|none|

<h2 id="tocS_PutEmailIdentityConfigurationSetAttributesRequest">PutEmailIdentityConfigurationSetAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentityconfigurationsetattributesrequest"></a>
<a id="schema_PutEmailIdentityConfigurationSetAttributesRequest"></a>
<a id="tocSputemailidentityconfigurationsetattributesrequest"></a>
<a id="tocsputemailidentityconfigurationsetattributesrequest"></a>

```json
{
  "ConfigurationSetName": {}
}
```

A request to associate a configuration set with an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_PutEmailIdentityDkimAttributesRequest">PutEmailIdentityDkimAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitydkimattributesrequest"></a>
<a id="schema_PutEmailIdentityDkimAttributesRequest"></a>
<a id="tocSputemailidentitydkimattributesrequest"></a>
<a id="tocsputemailidentitydkimattributesrequest"></a>

```json
{
  "SigningEnabled": {}
}
```

A request to enable or disable DKIM signing of email that you send from an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningEnabled|object|false|none|none|

<h2 id="tocS_PutEmailIdentityDkimSigningAttributesRequest">PutEmailIdentityDkimSigningAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitydkimsigningattributesrequest"></a>
<a id="schema_PutEmailIdentityDkimSigningAttributesRequest"></a>
<a id="tocSputemailidentitydkimsigningattributesrequest"></a>
<a id="tocsputemailidentitydkimsigningattributesrequest"></a>

```json
{
  "SigningAttributesOrigin": {},
  "SigningAttributes": {
    "DomainSigningSelector": {},
    "DomainSigningPrivateKey": {},
    "NextSigningKeyLength": {}
  }
}
```

A request to change the DKIM attributes for an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningAttributesOrigin|object|true|none|none|
|SigningAttributes|object|false|none|none|

<h2 id="tocS_PutEmailIdentityFeedbackAttributesRequest">PutEmailIdentityFeedbackAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentityfeedbackattributesrequest"></a>
<a id="schema_PutEmailIdentityFeedbackAttributesRequest"></a>
<a id="tocSputemailidentityfeedbackattributesrequest"></a>
<a id="tocsputemailidentityfeedbackattributesrequest"></a>

```json
{
  "EmailForwardingEnabled": {}
}
```

A request to set the attributes that control how bounce and complaint events are processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailForwardingEnabled|object|false|none|none|

<h2 id="tocS_PutEmailIdentityMailFromAttributesRequest">PutEmailIdentityMailFromAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputemailidentitymailfromattributesrequest"></a>
<a id="schema_PutEmailIdentityMailFromAttributesRequest"></a>
<a id="tocSputemailidentitymailfromattributesrequest"></a>
<a id="tocsputemailidentitymailfromattributesrequest"></a>

```json
{
  "MailFromDomain": {},
  "BehaviorOnMxFailure": {}
}
```

A request to configure the custom MAIL FROM domain for a verified identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailFromDomain|object|false|none|none|
|BehaviorOnMxFailure|object|false|none|none|

<h2 id="tocS_PutSuppressedDestinationRequest">PutSuppressedDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputsuppresseddestinationrequest"></a>
<a id="schema_PutSuppressedDestinationRequest"></a>
<a id="tocSputsuppresseddestinationrequest"></a>
<a id="tocsputsuppresseddestinationrequest"></a>

```json
{
  "EmailAddress": {},
  "Reason": {}
}
```

A request to add an email destination to the suppression list for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|Reason|object|true|none|none|

<h2 id="tocS_RawMessageData">RawMessageData</h2>
<!-- backwards compatibility -->
<a id="schemarawmessagedata"></a>
<a id="schema_RawMessageData"></a>
<a id="tocSrawmessagedata"></a>
<a id="tocsrawmessagedata"></a>

```json
"string"
```

<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>

<h2 id="tocS_RecommendationType">RecommendationType</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationtype"></a>
<a id="schema_RecommendationType"></a>
<a id="tocSrecommendationtype"></a>
<a id="tocsrecommendationtype"></a>

```json
"DKIM"
```

<h2 id="tocS_RecommendationDescription">RecommendationDescription</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationdescription"></a>
<a id="schema_RecommendationDescription"></a>
<a id="tocSrecommendationdescription"></a>
<a id="tocsrecommendationdescription"></a>

```json
"string"
```

<h2 id="tocS_RecommendationStatus">RecommendationStatus</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationstatus"></a>
<a id="schema_RecommendationStatus"></a>
<a id="tocSrecommendationstatus"></a>
<a id="tocsrecommendationstatus"></a>

```json
"OPEN"
```

<h2 id="tocS_RecommendationImpact">RecommendationImpact</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationimpact"></a>
<a id="schema_RecommendationImpact"></a>
<a id="tocSrecommendationimpact"></a>
<a id="tocsrecommendationimpact"></a>

```json
"LOW"
```

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "ResourceArn": {},
  "Type": {},
  "Description": {},
  "Status": {},
  "CreatedTimestamp": {},
  "LastUpdatedTimestamp": {},
  "Impact": {}
}
```

A recommendation generated for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|Status|object|false|none|none|
|CreatedTimestamp|object|false|none|none|
|LastUpdatedTimestamp|object|false|none|none|
|Impact|object|false|none|none|

<h2 id="tocS_RenderedEmailTemplate">RenderedEmailTemplate</h2>
<!-- backwards compatibility -->
<a id="schemarenderedemailtemplate"></a>
<a id="schema_RenderedEmailTemplate"></a>
<a id="tocSrenderedemailtemplate"></a>
<a id="tocsrenderedemailtemplate"></a>

```json
"string"
```

The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.

<h2 id="tocS_ReplacementTemplate">ReplacementTemplate</h2>
<!-- backwards compatibility -->
<a id="schemareplacementtemplate"></a>
<a id="schema_ReplacementTemplate"></a>
<a id="tocSreplacementtemplate"></a>
<a id="tocsreplacementtemplate"></a>

```json
{
  "ReplacementTemplateData": {}
}
```

An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplacementTemplateData|object|false|none|none|

<h2 id="tocS_ReviewStatus">ReviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemareviewstatus"></a>
<a id="schema_ReviewStatus"></a>
<a id="tocSreviewstatus"></a>
<a id="tocsreviewstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_SendBulkEmailRequest">SendBulkEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendbulkemailrequest"></a>
<a id="schema_SendBulkEmailRequest"></a>
<a id="tocSsendbulkemailrequest"></a>
<a id="tocssendbulkemailrequest"></a>

```json
{
  "FromEmailAddress": {},
  "FromEmailAddressIdentityArn": {},
  "ReplyToAddresses": {},
  "FeedbackForwardingEmailAddress": {},
  "FeedbackForwardingEmailAddressIdentityArn": {},
  "DefaultEmailTags": {},
  "DefaultContent": {
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "BulkEmailEntries": {},
  "ConfigurationSetName": {}
}
```

Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromEmailAddress|object|false|none|none|
|FromEmailAddressIdentityArn|object|false|none|none|
|ReplyToAddresses|object|false|none|none|
|FeedbackForwardingEmailAddress|object|false|none|none|
|FeedbackForwardingEmailAddressIdentityArn|object|false|none|none|
|DefaultEmailTags|object|false|none|none|
|DefaultContent|object|true|none|none|
|BulkEmailEntries|object|true|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_SendCustomVerificationEmailRequest">SendCustomVerificationEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendcustomverificationemailrequest"></a>
<a id="schema_SendCustomVerificationEmailRequest"></a>
<a id="tocSsendcustomverificationemailrequest"></a>
<a id="tocssendcustomverificationemailrequest"></a>

```json
{
  "EmailAddress": {},
  "TemplateName": {},
  "ConfigurationSetName": {}
}
```

Represents a request to send a custom verification email to a specified recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|TemplateName|object|true|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_SendEmailRequest">SendEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendemailrequest"></a>
<a id="schema_SendEmailRequest"></a>
<a id="tocSsendemailrequest"></a>
<a id="tocssendemailrequest"></a>

```json
{
  "FromEmailAddress": {},
  "FromEmailAddressIdentityArn": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": {},
  "FeedbackForwardingEmailAddress": {},
  "FeedbackForwardingEmailAddressIdentityArn": {},
  "Content": {
    "Simple": {
      "Subject": {
        "Data": {},
        "Charset": {}
      },
      "Body": {
        "Text": {
          "Data": {},
          "Charset": {}
        },
        "Html": {
          "Data": {},
          "Charset": {}
        }
      }
    },
    "Raw": {
      "Data": {}
    },
    "Template": {
      "TemplateName": {},
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "EmailTags": {},
  "ConfigurationSetName": {},
  "ListManagementOptions": {
    "ContactListName": {},
    "TopicName": {}
  }
}
```

Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromEmailAddress|object|false|none|none|
|FromEmailAddressIdentityArn|object|false|none|none|
|Destination|object|false|none|none|
|ReplyToAddresses|object|false|none|none|
|FeedbackForwardingEmailAddress|object|false|none|none|
|FeedbackForwardingEmailAddressIdentityArn|object|false|none|none|
|Content|object|true|none|none|
|EmailTags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|
|ListManagementOptions|object|false|none|none|

<h2 id="tocS_SentLast24Hours">SentLast24Hours</h2>
<!-- backwards compatibility -->
<a id="schemasentlast24hours"></a>
<a id="schema_SentLast24Hours"></a>
<a id="tocSsentlast24hours"></a>
<a id="tocssentlast24hours"></a>

```json
0
```

<h2 id="tocS_SuppressedDestinationAttributes">SuppressedDestinationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemasuppresseddestinationattributes"></a>
<a id="schema_SuppressedDestinationAttributes"></a>
<a id="tocSsuppresseddestinationattributes"></a>
<a id="tocssuppresseddestinationattributes"></a>

```json
{
  "MessageId": {},
  "FeedbackId": {}
}
```

An object that contains additional attributes that are related an email address that is on the suppression list for your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|
|FeedbackId|object|false|none|none|

<h2 id="tocS_SuppressedDestinationSummary">SuppressedDestinationSummary</h2>
<!-- backwards compatibility -->
<a id="schemasuppresseddestinationsummary"></a>
<a id="schema_SuppressedDestinationSummary"></a>
<a id="tocSsuppresseddestinationsummary"></a>
<a id="tocssuppresseddestinationsummary"></a>

```json
{
  "EmailAddress": {},
  "Reason": {},
  "LastUpdateTime": {}
}
```

A summary that describes the suppressed email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
|Reason|object|true|none|none|
|LastUpdateTime|object|true|none|none|

<h2 id="tocS_SuppressionListImportAction">SuppressionListImportAction</h2>
<!-- backwards compatibility -->
<a id="schemasuppressionlistimportaction"></a>
<a id="schema_SuppressionListImportAction"></a>
<a id="tocSsuppressionlistimportaction"></a>
<a id="tocssuppressionlistimportaction"></a>

```json
"DELETE"
```

<p>The type of action to perform on the address. The following are possible values:</p> <ul> <li> <p>PUT: add the addresses to the suppression list.</p> </li> <li> <p>DELETE: remove the address from the suppression list.</p> </li> </ul>

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_TestRenderEmailTemplateRequest">TestRenderEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schematestrenderemailtemplaterequest"></a>
<a id="schema_TestRenderEmailTemplateRequest"></a>
<a id="tocStestrenderemailtemplaterequest"></a>
<a id="tocstestrenderemailtemplaterequest"></a>

```json
{
  "TemplateData": {}
}
```

&gt;Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateData|object|true|none|none|

<h2 id="tocS_UseDefaultIfPreferenceUnavailable">UseDefaultIfPreferenceUnavailable</h2>
<!-- backwards compatibility -->
<a id="schemausedefaultifpreferenceunavailable"></a>
<a id="schema_UseDefaultIfPreferenceUnavailable"></a>
<a id="tocSusedefaultifpreferenceunavailable"></a>
<a id="tocsusedefaultifpreferenceunavailable"></a>

```json
true
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateConfigurationSetEventDestinationRequest">UpdateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationseteventdestinationrequest"></a>
<a id="schema_UpdateConfigurationSetEventDestinationRequest"></a>
<a id="tocSupdateconfigurationseteventdestinationrequest"></a>
<a id="tocsupdateconfigurationseteventdestinationrequest"></a>

```json
{
  "EventDestination": {
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IamRoleArn": {},
      "DeliveryStreamArn": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SnsDestination": {
      "TopicArn": {}
    },
    "PinpointDestination": {
      "ApplicationArn": {}
    }
  }
}
```

A request to change the settings for an event destination for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventDestination|object|true|none|none|

<h2 id="tocS_UpdateContactListRequest">UpdateContactListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactlistrequest"></a>
<a id="schema_UpdateContactListRequest"></a>
<a id="tocSupdatecontactlistrequest"></a>
<a id="tocsupdatecontactlistrequest"></a>

```json
{
  "Topics": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Topics|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateContactRequest">UpdateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactrequest"></a>
<a id="schema_UpdateContactRequest"></a>
<a id="tocSupdatecontactrequest"></a>
<a id="tocsupdatecontactrequest"></a>

```json
{
  "TopicPreferences": {},
  "UnsubscribeAll": {},
  "AttributesData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicPreferences|object|false|none|none|
|UnsubscribeAll|object|false|none|none|
|AttributesData|object|false|none|none|

<h2 id="tocS_UpdateCustomVerificationEmailTemplateRequest">UpdateCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomverificationemailtemplaterequest"></a>
<a id="schema_UpdateCustomVerificationEmailTemplateRequest"></a>
<a id="tocSupdatecustomverificationemailtemplaterequest"></a>
<a id="tocsupdatecustomverificationemailtemplaterequest"></a>

```json
{
  "FromEmailAddress": {},
  "TemplateSubject": {},
  "TemplateContent": {},
  "SuccessRedirectionURL": {},
  "FailureRedirectionURL": {}
}
```

Represents a request to update an existing custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromEmailAddress|object|true|none|none|
|TemplateSubject|object|true|none|none|
|TemplateContent|object|true|none|none|
|SuccessRedirectionURL|object|true|none|none|
|FailureRedirectionURL|object|true|none|none|

<h2 id="tocS_UpdateEmailIdentityPolicyRequest">UpdateEmailIdentityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailidentitypolicyrequest"></a>
<a id="schema_UpdateEmailIdentityPolicyRequest"></a>
<a id="tocSupdateemailidentitypolicyrequest"></a>
<a id="tocsupdateemailidentitypolicyrequest"></a>

```json
{
  "Policy": {}
}
```

Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_UpdateEmailTemplateRequest">UpdateEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateemailtemplaterequest"></a>
<a id="schema_UpdateEmailTemplateRequest"></a>
<a id="tocSupdateemailtemplaterequest"></a>
<a id="tocsupdateemailtemplaterequest"></a>

```json
{
  "TemplateContent": {
    "Subject": {},
    "Text": {},
    "Html": {}
  }
}
```

Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateContent|object|true|none|none|
