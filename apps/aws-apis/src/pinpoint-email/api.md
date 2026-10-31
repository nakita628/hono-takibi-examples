<h1 id="amazon-pinpoint-email-service">Amazon Pinpoint Email Service v2018-07-26</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Pinpoint Email Service</fullname> <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>

Base URLs:

* <a href="http://email.us-east-1.amazonaws.com">http://email.us-east-1.amazonaws.com</a> - The Pinpoint Email multi-region endpoint

* <a href="https://email.us-east-1.amazonaws.com">https://email.us-east-1.amazonaws.com</a> - The Pinpoint Email multi-region endpoint

* <a href="http://email.cn-north-1.amazonaws.com.cn">http://email.cn-north-1.amazonaws.com.cn</a> - The Pinpoint Email endpoint for China (Beijing) and China (Ningxia)

* <a href="https://email.cn-north-1.amazonaws.com.cn">https://email.cn-north-1.amazonaws.com.cn</a> - The Pinpoint Email endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/email/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-pinpoint-email-service-default">Default</h1>

## ListConfigurationSets

<a id="opIdListConfigurationSets"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/configuration-sets`

<p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets \
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
    ]
  }'
```

`POST /v1/email/configuration-sets`

Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email. 

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
  ]
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
|» ConfigurationSetName|body|string|true|<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|
|» TrackingOptions|body|object|false|<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>|
|» » CustomRedirectDomain|body|object|false|none|
|» DeliveryOptions|body|object|false|Used to associate a configuration set with a dedicated IP pool.|
|» » TlsPolicy|body|object|false|none|
|» » SendingPoolName|body|object|false|none|
|» ReputationOptions|body|object|false|Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. |
|» » ReputationMetricsEnabled|body|object|false|none|
|» » LastFreshStart|body|object|false|none|
|» SendingOptions|body|object|false|Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.|
|» » SendingEnabled|body|object|false|none|
|» Tags|body|[[Tag](#schematag)]|false|An array of objects that define the tags (keys and values) that you want to associate with the configuration set.|

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/event-destinations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations`

<p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/event-destinations \
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

`POST /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations`

<p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>

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
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to add an event destination to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EventDestinationName|body|string|true|<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>|
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

## ListDedicatedIpPools

<a id="opIdListDedicatedIpPools"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ip-pools \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/dedicated-ip-pools`

List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ip-pools \
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
    ]
  }'
```

`POST /v1/email/dedicated-ip-pools`

Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.

> Body parameter

```json
{
  "PoolName": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/test \
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

`POST /v1/email/deliverability-dashboard/test`

Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/identities`

Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities \
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
    ]
  }'
```

`POST /v1/email/identities`

<p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>

> Body parameter

```json
{
  "EmailIdentity": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
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
|» EmailIdentity|body|string|true|The email address or domain that you want to verify.|
|» Tags|body|[[Tag](#schematag)]|false|An array of objects that define the tags (keys and values) that you want to associate with the email identity.|

> Example responses

> 200 Response

```json
{
  "IdentityType": {},
  "VerifiedForSendingStatus": {},
  "DkimAttributes": {
    "SigningEnabled": {},
    "Status": {},
    "Tokens": {}
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

<h3 id="createemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateEmailIdentityResponse](#schemacreateemailidentityresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConfigurationSet

<a id="opIdGetConfigurationSet"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/configuration-sets/{ConfigurationSetName}`

<p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h3 id="getconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to obtain more information about.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/email/configuration-sets/{ConfigurationSetName}`

<p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

<h3 id="deleteconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to delete.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/event-destinations/string \
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

`PUT /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

<p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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
|ConfigurationSetName|path|string|true|The name of the configuration set that contains the event destination that you want to modify.|
|EventDestinationName|path|string|true|The name of the event destination that you want to modify.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/event-destinations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}`

<p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

<h3 id="deleteconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that contains the event destination that you want to delete.|
|EventDestinationName|path|string|true|The name of the event destination that you want to delete.|
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

## DeleteDedicatedIpPool

<a id="opIdDeleteDedicatedIpPool"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ip-pools/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/email/dedicated-ip-pools/{PoolName}`

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/identities/{EmailIdentity}`

Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.

<h3 id="getemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity that you want to retrieve details for.|
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
    "Tokens": {}
  },
  "MailFromAttributes": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMxFailure": {}
  },
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/email/identities/{EmailIdentity}`

Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.

<h3 id="deleteemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The identity (that is, the email address or domain) that you want to delete from your Amazon Pinpoint account.|
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

## GetAccount

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/account \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/account`

Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.

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
  "SendQuota": {
    "Max24HourSend": {},
    "MaxSendRate": {},
    "SentLast24Hours": {}
  },
  "SendingEnabled": {},
  "DedicatedIpAutoWarmupEnabled": {},
  "EnforcementStatus": {},
  "ProductionAccessEnabled": {}
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
curl 'https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames?BlacklistItemNames=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/blacklist-report#BlacklistItemNames`

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

<h3 id="getblacklistreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BlacklistItemNames|query|[[BlacklistItemName](#schemablacklistitemname)]|true|A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ips/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/dedicated-ips/{IP}`

Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.

<h3 id="getdedicatedip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ips \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/dedicated-ips`

List the dedicated IP addresses that are associated with your Amazon Pinpoint account.

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard`

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard \
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

`PUT /v1/email/deliverability-dashboard`

<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
|» DashboardEnabled|body|boolean|true|Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to <code>true</code>.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/test-reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/test-reports/{ReportId}`

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/campaigns/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/campaigns/{CampaignId}`

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

<h3 id="getdomaindeliverabilitycampaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CampaignId|path|string|true|The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.|
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
curl 'https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/statistics-report/string#StartDate&EndDate?StartDate=1970-01-01T00%3A00%3A00Z&EndDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate`

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

## ListDeliverabilityTestReports

<a id="opIdListDeliverabilityTestReports"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/test-reports \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/test-reports`

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
curl 'https://pinpoint-email.us-east-1.amazonaws.com/v1/email/deliverability-dashboard/domains/string/campaigns#StartDate&EndDate?StartDate=1970-01-01T00%3A00%3A00Z&EndDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate`

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

<h3 id="listdomaindeliverabilitycampaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StartDate|query|string(date-time)|true|The first day, in Unix time format, that you want to obtain deliverability data for.|
|EndDate|query|string(date-time)|true|The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.|
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

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://pinpoint-email.us-east-1.amazonaws.com/v1/email/tags#ResourceArn?ResourceArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/email/tags#ResourceArn`

Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/account/dedicated-ips/warmup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "AutoWarmupEnabled": true
  }'
```

`PUT /v1/email/account/dedicated-ips/warmup`

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
|» AutoWarmupEnabled|body|boolean|false|Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it.|

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

## PutAccountSendingAttributes

<a id="opIdPutAccountSendingAttributes"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/account/sending \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SendingEnabled": true
  }'
```

`PUT /v1/email/account/sending`

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
|» SendingEnabled|body|boolean|false|<p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note>|

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

## PutConfigurationSetDeliveryOptions

<a id="opIdPutConfigurationSetDeliveryOptions"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/delivery-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "TlsPolicy": "REQUIRE",
    "SendingPoolName": "string"
  }'
```

`PUT /v1/email/configuration-sets/{ConfigurationSetName}/delivery-options`

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
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to associate with a dedicated IP pool.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TlsPolicy|body|string|false|Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.|
|» SendingPoolName|body|string|false|The name of the dedicated IP pool that you want to associate with the configuration set.|

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/reputation-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReputationMetricsEnabled": true
  }'
```

`PUT /v1/email/configuration-sets/{ConfigurationSetName}/reputation-options`

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.

> Body parameter

```json
{
  "ReputationMetricsEnabled": true
}
```

<h3 id="putconfigurationsetreputationoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to enable or disable reputation metric tracking for.|
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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/sending \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SendingEnabled": true
  }'
```

`PUT /v1/email/configuration-sets/{ConfigurationSetName}/sending`

Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.

> Body parameter

```json
{
  "SendingEnabled": true
}
```

<h3 id="putconfigurationsetsendingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to enable or disable email sending for.|
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

## PutConfigurationSetTrackingOptions

<a id="opIdPutConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/configuration-sets/string/tracking-options \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CustomRedirectDomain": "string"
  }'
```

`PUT /v1/email/configuration-sets/{ConfigurationSetName}/tracking-options`

Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.

> Body parameter

```json
{
  "CustomRedirectDomain": "string"
}
```

<h3 id="putconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|path|string|true|The name of the configuration set that you want to add a custom tracking domain to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CustomRedirectDomain|body|string|false|The domain that you want to use for tracking open and click events.|

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

## PutDedicatedIpInPool

<a id="opIdPutDedicatedIpInPool"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ips/string/pool \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DestinationPoolName": "string"
  }'
```

`PUT /v1/email/dedicated-ips/{IP}/pool`

<p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>

> Body parameter

```json
{
  "DestinationPoolName": "string"
}
```

<h3 id="putdedicatedipinpool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Pinpoint account.|
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

## PutDedicatedIpWarmupAttributes

<a id="opIdPutDedicatedIpWarmupAttributes"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/dedicated-ips/string/warmup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "WarmupPercentage": 0
  }'
```

`PUT /v1/email/dedicated-ips/{IP}/warmup`

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

## PutEmailIdentityDkimAttributes

<a id="opIdPutEmailIdentityDkimAttributes"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities/string/dkim \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SigningEnabled": true
  }'
```

`PUT /v1/email/identities/{EmailIdentity}/dkim`

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
|EmailIdentity|path|string|true|The email identity that you want to change the DKIM settings for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» SigningEnabled|body|boolean|false|<p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>|

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

## PutEmailIdentityFeedbackAttributes

<a id="opIdPutEmailIdentityFeedbackAttributes"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities/string/feedback \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EmailForwardingEnabled": true
  }'
```

`PUT /v1/email/identities/{EmailIdentity}/feedback`

<p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>

> Body parameter

```json
{
  "EmailForwardingEnabled": true
}
```

<h3 id="putemailidentityfeedbackattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailIdentity|path|string|true|The email identity that you want to configure bounce and complaint feedback forwarding for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EmailForwardingEnabled|body|boolean|false|<p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>|

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/identities/string/mail-from \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MailFromDomain": "string",
    "BehaviorOnMxFailure": "USE_DEFAULT_VALUE"
  }'
```

`PUT /v1/email/identities/{EmailIdentity}/mail-from`

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
|EmailIdentity|path|string|true|The verified email identity that you want to set up the custom MAIL FROM domain for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MailFromDomain|body|string|false|The domain that you want to use as a MAIL FROM domain.|
|» BehaviorOnMxFailure|body|string|false|<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>|

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

## SendEmail

<a id="opIdSendEmail"></a>

> Code samples

```bash
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/outbound-emails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FromEmailAddress": "string",
    "Destination": {
      "ToAddresses": {},
      "CcAddresses": {},
      "BccAddresses": {}
    },
    "ReplyToAddresses": [
      "string"
    ],
    "FeedbackForwardingEmailAddress": "string",
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
    "ConfigurationSetName": "string"
  }'
```

`POST /v1/email/outbound-emails`

<p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>

> Body parameter

```json
{
  "FromEmailAddress": "string",
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": [
    "string"
  ],
  "FeedbackForwardingEmailAddress": "string",
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
  "ConfigurationSetName": "string"
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
|» FromEmailAddress|body|string|false|The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. |
|» Destination|body|object|true|An object that describes the recipients for an email.|
|» » ToAddresses|body|object|false|none|
|» » CcAddresses|body|object|false|none|
|» » BccAddresses|body|object|false|none|
|» ReplyToAddresses|body|[[EmailAddress](#schemaemailaddress)]|false|The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.|
|» FeedbackForwardingEmailAddress|body|string|false|The address that Amazon Pinpoint should send bounce and complaint notifications to.|
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
|» » » TemplateArn|body|object|false|none|
|» » » TemplateData|body|object|false|none|
|» EmailTags|body|[[MessageTag](#schemamessagetag)]|false|A list of message tags.|
|» ConfigurationSetName|body|string|false|<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>|

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
curl https://pinpoint-email.us-east-1.amazonaws.com/v1/email/tags \
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

`POST /v1/email/tags`

<p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

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

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://pinpoint-email.us-east-1.amazonaws.com/v1/email/tags#ResourceArn&TagKeys?ResourceArn=string&TagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/email/tags#ResourceArn&TagKeys`

Remove one or more tags (keys and values) from a specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|query|string|true|The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.|
|TagKeys|query|[[TagKey](#schematagkey)]|true|<p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v1/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>|
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

The domain that you want to use for tracking open and click events.

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

<p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

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

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

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

An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationArn|object|false|none|none|

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

The raw email message.

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
  "TemplateArn": {},
  "TemplateData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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
    "Tokens": {}
  }
}
```

<p>If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.</p> <p>If the email identity is an email address, this object is empty. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|VerifiedForSendingStatus|object|false|none|none|
|DkimAttributes|object|false|none|none|

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

<h2 id="tocS_GetAccountResponse">GetAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountresponse"></a>
<a id="schema_GetAccountResponse"></a>
<a id="tocSgetaccountresponse"></a>
<a id="tocsgetaccountresponse"></a>

```json
{
  "SendQuota": {
    "Max24HourSend": {},
    "MaxSendRate": {},
    "SentLast24Hours": {}
  },
  "SendingEnabled": {},
  "DedicatedIpAutoWarmupEnabled": {},
  "EnforcementStatus": {},
  "ProductionAccessEnabled": {}
}
```

A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendQuota|object|false|none|none|
|SendingEnabled|object|false|none|none|
|DedicatedIpAutoWarmupEnabled|object|false|none|none|
|EnforcementStatus|object|false|none|none|
|ProductionAccessEnabled|object|false|none|none|

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
  "Tags": {}
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

Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.

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

An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.

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

An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).

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
    "Tokens": {}
  },
  "MailFromAttributes": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMxFailure": {}
  },
  "Tags": {}
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
|Tags|object|false|none|none|

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

A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSets|object|false|none|none|
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

An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

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

A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailIdentities|object|false|none|none|
|NextToken|object|false|none|none|

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

A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account.

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

A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.

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

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
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

<p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>

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

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

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

<h2 id="tocS_CampaignId">CampaignId</h2>
<!-- backwards compatibility -->
<a id="schemacampaignid"></a>
<a id="schema_CampaignId"></a>
<a id="tocScampaignid"></a>
<a id="tocscampaignid"></a>

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

The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want Amazon Pinpoint to use link tags, choose <code>linkTags</code>.

<h2 id="tocS_DefaultDimensionValue">DefaultDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdimensionvalue"></a>
<a id="schema_DefaultDimensionValue"></a>
<a id="tocSdefaultdimensionvalue"></a>
<a id="tocsdefaultdimensionvalue"></a>

```json
"string"
```

<p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>

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

An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.

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

<p>The name of a configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>

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

<h2 id="tocS_MessageData">MessageData</h2>
<!-- backwards compatibility -->
<a id="schemamessagedata"></a>
<a id="schema_MessageData"></a>
<a id="tocSmessagedata"></a>
<a id="tocsmessagedata"></a>

```json
"string"
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

<p>The name of an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>

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

<p>An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.</p>

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

Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.

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

Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.

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
  "Tags": {}
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

<h2 id="tocS_CreateDedicatedIpPoolRequest">CreateDedicatedIpPoolRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatededicatedippoolrequest"></a>
<a id="schema_CreateDedicatedIpPoolRequest"></a>
<a id="tocScreatededicatedippoolrequest"></a>
<a id="tocscreatededicatedippoolrequest"></a>

```json
{
  "PoolName": {},
  "Tags": {}
}
```

A request to create a new dedicated IP pool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PoolName|object|true|none|none|
|Tags|object|false|none|none|

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
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "Tags": {}
}
```

A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.

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

<h2 id="tocS_CreateEmailIdentityRequest">CreateEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateemailidentityrequest"></a>
<a id="schema_CreateEmailIdentityRequest"></a>
<a id="tocScreateemailidentityrequest"></a>
<a id="tocscreateemailidentityrequest"></a>

```json
{
  "EmailIdentity": {},
  "Tags": {}
}
```

A request to begin the verification process for an email identity (an email address or domain).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailIdentity|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_IdentityType">IdentityType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytype"></a>
<a id="schema_IdentityType"></a>
<a id="tocSidentitytype"></a>
<a id="tocsidentitytype"></a>

```json
"EMAIL_ADDRESS"
```

<p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul>

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
  "Tokens": {}
}
```

An object that contains information about the DKIM configuration for an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigningEnabled|object|false|none|none|
|Status|object|false|none|none|
|Tokens|object|false|none|none|

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

A dedicated IP address that is associated with your Amazon Pinpoint account.

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

<p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>

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

A list of dedicated IP addresses that are associated with your Amazon Pinpoint account.

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

<h2 id="tocS_DeleteEmailIdentityRequest">DeleteEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteemailidentityrequest"></a>
<a id="schema_DeleteEmailIdentityRequest"></a>
<a id="tocSdeleteemailidentityrequest"></a>
<a id="tocsdeleteemailidentityrequest"></a>

```json
{}
```

A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.

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

An object that describes the recipients for an email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ToAddresses|object|false|none|none|
|CcAddresses|object|false|none|none|
|BccAddresses|object|false|none|none|

<h2 id="tocS_DkimStatus">DkimStatus</h2>
<!-- backwards compatibility -->
<a id="schemadkimstatus"></a>
<a id="schema_DkimStatus"></a>
<a id="tocSdkimstatus"></a>
<a id="tocsdkimstatus"></a>

```json
"PENDING"
```

<p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>

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

An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).

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

In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.

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

A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account.

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

An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Max24HourSend|object|false|none|none|
|MaxSendRate|object|false|none|none|
|SentLast24Hours|object|false|none|none|

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

<p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

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
  "SendingEnabled": {}
}
```

Information about an email identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|IdentityName|object|false|none|none|
|SendingEnabled|object|false|none|none|

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
    "SendingEnabled": {}
  }
]
```

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

A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region.

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

A list of dedicated IP pools that are associated with your Amazon Pinpoint account.

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

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.

<h2 id="tocS_ListEmailIdentitiesRequest">ListEmailIdentitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistemailidentitiesrequest"></a>
<a id="schema_ListEmailIdentitiesRequest"></a>
<a id="tocSlistemailidentitiesrequest"></a>
<a id="tocslistemailidentitiesrequest"></a>

```json
{}
```

A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.

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

The domain that you want to use as a MAIL FROM domain.

<h2 id="tocS_MailFromDomainStatus">MailFromDomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainstatus"></a>
<a id="schema_MailFromDomainStatus"></a>
<a id="tocSmailfromdomainstatus"></a>
<a id="tocsmailfromdomainstatus"></a>

```json
"PENDING"
```

<p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p> </li> </ul>

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

<h2 id="tocS_OutboundMessageId">OutboundMessageId</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundmessageid"></a>
<a id="schema_OutboundMessageId"></a>
<a id="tocSoutboundmessageid"></a>
<a id="tocsoutboundmessageid"></a>

```json
"string"
```

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

<h2 id="tocS_SendingPoolName">SendingPoolName</h2>
<!-- backwards compatibility -->
<a id="schemasendingpoolname"></a>
<a id="schema_SendingPoolName"></a>
<a id="tocSsendingpoolname"></a>
<a id="tocssendingpoolname"></a>

```json
"string"
```

The name of the dedicated IP pool that you want to associate with the configuration set.

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

A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendingEnabled|object|false|none|none|

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

<p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardEnabled|object|true|none|none|
|SubscribedDomains|object|false|none|none|

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

<h2 id="tocS_RawMessageData">RawMessageData</h2>
<!-- backwards compatibility -->
<a id="schemarawmessagedata"></a>
<a id="schema_RawMessageData"></a>
<a id="tocSrawmessagedata"></a>
<a id="tocsrawmessagedata"></a>

```json
"string"
```

<p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that Amazon Pinpoint supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>

<h2 id="tocS_SendEmailRequest">SendEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendemailrequest"></a>
<a id="schema_SendEmailRequest"></a>
<a id="tocSsendemailrequest"></a>
<a id="tocssendemailrequest"></a>

```json
{
  "FromEmailAddress": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": {},
  "FeedbackForwardingEmailAddress": {},
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
      "TemplateArn": {},
      "TemplateData": {}
    }
  },
  "EmailTags": {},
  "ConfigurationSetName": {}
}
```

A request to send an email message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromEmailAddress|object|false|none|none|
|Destination|object|true|none|none|
|ReplyToAddresses|object|false|none|none|
|FeedbackForwardingEmailAddress|object|false|none|none|
|Content|object|true|none|none|
|EmailTags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_SentLast24Hours">SentLast24Hours</h2>
<!-- backwards compatibility -->
<a id="schemasentlast24hours"></a>
<a id="schema_SentLast24Hours"></a>
<a id="tocSsentlast24hours"></a>
<a id="tocssentlast24hours"></a>

```json
0
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

<h2 id="tocS_TemplateArn">TemplateArn</h2>
<!-- backwards compatibility -->
<a id="schematemplatearn"></a>
<a id="schema_TemplateArn"></a>
<a id="tocStemplatearn"></a>
<a id="tocstemplatearn"></a>

```json
"string"
```

<h2 id="tocS_TemplateData">TemplateData</h2>
<!-- backwards compatibility -->
<a id="schematemplatedata"></a>
<a id="schema_TemplateData"></a>
<a id="tocStemplatedata"></a>
<a id="tocstemplatedata"></a>

```json
"string"
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
