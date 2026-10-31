<h1 id="amazon-simple-email-service">Amazon Simple Email Service v2010-12-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Simple Email Service</fullname> <p> This document contains reference information for the <a href="https://aws.amazon.com/ses/">Amazon Simple Email Service</a> (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>. </p> <note> <p> For a list of Amazon SES endpoints to use in service requests, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html">Regions and Amazon SES</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html">Amazon SES Developer Guide</a>.</p> </note>

Base URLs:

* <a href="http://email.us-east-1.amazonaws.com">http://email.us-east-1.amazonaws.com</a> - The Amazon SES multi-region endpoint

* <a href="https://email.us-east-1.amazonaws.com">https://email.us-east-1.amazonaws.com</a> - The Amazon SES multi-region endpoint

* <a href="http://email.cn-north-1.amazonaws.com.cn">http://email.cn-north-1.amazonaws.com.cn</a> - The Amazon SES endpoint for China (Beijing) and China (Ningxia)

* <a href="https://email.cn-north-1.amazonaws.com.cn">https://email.cn-north-1.amazonaws.com.cn</a> - The Amazon SES endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/email/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-simple-email-service-default">Default</h1>

## GET_CloneReceiptRuleSet

<a id="opIdGET_CloneReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CloneReceiptRuleSet?RuleSetName=string&OriginalRuleSetName=string&Action=CloneReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CloneReceiptRuleSet`

<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getclonereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>|
|OriginalRuleSetName|query|string|true|The name of the rule set to clone.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CloneReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getclonereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloneReceiptRuleSetResponse](#schemaclonereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CloneReceiptRuleSet

<a id="opIdPOST_CloneReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CloneReceiptRuleSet?Action=CloneReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"OriginalRuleSetName":{}}'
```

`POST /#Action=CloneReceiptRuleSet`

<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "OriginalRuleSetName": {}
}
```

<h3 id="postclonereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CloneReceiptRuleSetRequest](#schemaclonereceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|true|none|
|» OriginalRuleSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CloneReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postclonereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CloneReceiptRuleSetResponse](#schemaclonereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateConfigurationSet

<a id="opIdGET_CreateConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSet?Name=%7B%7D&Action=CreateConfigurationSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateConfigurationSet`

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreateconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSet|query|object|true|A data structure that contains the name of the configuration set.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateConfigurationSet|
|Version|2010-12-01|

<h3 id="getcreateconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetResponse](#schemacreateconfigurationsetresponse)|
|480|480|ConfigurationSetAlreadyExistsException|[ConfigurationSetAlreadyExistsException](#schemaconfigurationsetalreadyexistsexception)|
|481|481|InvalidConfigurationSetException|[InvalidConfigurationSetException](#schemainvalidconfigurationsetexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateConfigurationSet

<a id="opIdPOST_CreateConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSet?Action=CreateConfigurationSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSet":{"Name":{}}}'
```

`POST /#Action=CreateConfigurationSet`

<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSet": {
    "Name": {}
  }
}
```

<h3 id="postcreateconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateConfigurationSetRequest](#schemacreateconfigurationsetrequest)|false|none|
|» ConfigurationSet|body|object|true|none|
|» » Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateConfigurationSet|
|Version|2010-12-01|

<h3 id="postcreateconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetResponse](#schemacreateconfigurationsetresponse)|
|480|480|ConfigurationSetAlreadyExistsException|[ConfigurationSetAlreadyExistsException](#schemaconfigurationsetalreadyexistsexception)|
|481|481|InvalidConfigurationSetException|[InvalidConfigurationSetException](#schemainvalidconfigurationsetexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateConfigurationSetEventDestination

<a id="opIdGET_CreateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSetEventDestination?ConfigurationSetName=string&Name=%7B%7D&Enabled=%7B%7D&MatchingEventTypes=%7B%7D&KinesisFirehoseDestination=%7B%22IAMRoleARN%22%3A%7B%7D%2C%22DeliveryStreamARN%22%3A%7B%7D%7D&CloudWatchDestination=%7B%22DimensionConfigurations%22%3A%7B%7D%7D&SNSDestination=%7B%22TopicARN%22%3A%7B%7D%7D&Action=CreateConfigurationSetEventDestination&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateConfigurationSetEventDestination`

<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that the event destination should be associated with.|
|EventDestination|query|object|true|An object that describes the AWS service that email sending event information will be published to.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="getcreateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetEventDestinationResponse](#schemacreateconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationAlreadyExistsException|[EventDestinationAlreadyExistsException](#schemaeventdestinationalreadyexistsexception)|
|482|482|InvalidCloudWatchDestinationException|[InvalidCloudWatchDestinationException](#schemainvalidcloudwatchdestinationexception)|
|483|483|InvalidFirehoseDestinationException|[InvalidFirehoseDestinationException](#schemainvalidfirehosedestinationexception)|
|484|484|InvalidSNSDestinationException|[InvalidSNSDestinationException](#schemainvalidsnsdestinationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateConfigurationSetEventDestination

<a id="opIdPOST_CreateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSetEventDestination?Action=CreateConfigurationSetEventDestination&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"EventDestination":{"Name":{},"Enabled":{},"MatchingEventTypes":{},"KinesisFirehoseDestination":{"IAMRoleARN":{},"DeliveryStreamARN":{}},"CloudWatchDestination":{"DimensionConfigurations":{}},"SNSDestination":{"TopicARN":{}}}}'
```

`POST /#Action=CreateConfigurationSetEventDestination`

<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "EventDestination": {
    "Name": {},
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IAMRoleARN": {},
      "DeliveryStreamARN": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SNSDestination": {
      "TopicARN": {}
    }
  }
}
```

<h3 id="postcreateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateConfigurationSetEventDestinationRequest](#schemacreateconfigurationseteventdestinationrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» EventDestination|body|object|true|none|
|» » Name|body|object|true|none|
|» » Enabled|body|object|false|none|
|» » MatchingEventTypes|body|object|true|none|
|» » KinesisFirehoseDestination|body|object|false|none|
|» » » IAMRoleARN|body|object|true|none|
|» » » DeliveryStreamARN|body|object|true|none|
|» » CloudWatchDestination|body|object|false|none|
|» » » DimensionConfigurations|body|object|true|none|
|» » SNSDestination|body|object|false|none|
|» » » TopicARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="postcreateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetEventDestinationResponse](#schemacreateconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationAlreadyExistsException|[EventDestinationAlreadyExistsException](#schemaeventdestinationalreadyexistsexception)|
|482|482|InvalidCloudWatchDestinationException|[InvalidCloudWatchDestinationException](#schemainvalidcloudwatchdestinationexception)|
|483|483|InvalidFirehoseDestinationException|[InvalidFirehoseDestinationException](#schemainvalidfirehosedestinationexception)|
|484|484|InvalidSNSDestinationException|[InvalidSNSDestinationException](#schemainvalidsnsdestinationexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateConfigurationSetTrackingOptions

<a id="opIdGET_CreateConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSetTrackingOptions?ConfigurationSetName=string&CustomRedirectDomain=%7B%7D&Action=CreateConfigurationSetTrackingOptions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateConfigurationSetTrackingOptions`

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getcreateconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that the tracking options should be associated with.|
|TrackingOptions|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="getcreateconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetTrackingOptionsResponse](#schemacreateconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsAlreadyExistsException|[TrackingOptionsAlreadyExistsException](#schematrackingoptionsalreadyexistsexception)|
|482|482|InvalidTrackingOptionsException|[InvalidTrackingOptionsException](#schemainvalidtrackingoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateConfigurationSetTrackingOptions

<a id="opIdPOST_CreateConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateConfigurationSetTrackingOptions?Action=CreateConfigurationSetTrackingOptions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"TrackingOptions":{"CustomRedirectDomain":{}}}'
```

`POST /#Action=CreateConfigurationSetTrackingOptions`

<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  }
}
```

<h3 id="postcreateconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateConfigurationSetTrackingOptionsRequest](#schemacreateconfigurationsettrackingoptionsrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» TrackingOptions|body|[TrackingOptions](#schematrackingoptions)|true|<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="postcreateconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationSetTrackingOptionsResponse](#schemacreateconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsAlreadyExistsException|[TrackingOptionsAlreadyExistsException](#schematrackingoptionsalreadyexistsexception)|
|482|482|InvalidTrackingOptionsException|[InvalidTrackingOptionsException](#schemainvalidtrackingoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateCustomVerificationEmailTemplate

<a id="opIdGET_CreateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateCustomVerificationEmailTemplate?TemplateName=string&FromEmailAddress=string&TemplateSubject=string&TemplateContent=string&SuccessRedirectionURL=string&FailureRedirectionURL=string&Action=CreateCustomVerificationEmailTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateCustomVerificationEmailTemplate`

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreatecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the custom verification email template.|
|FromEmailAddress|query|string|true|The email address that the custom verification email is sent from.|
|TemplateSubject|query|string|true|The subject line of the custom verification email.|
|TemplateContent|query|string|true|The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.|
|SuccessRedirectionURL|query|string|true|The URL that the recipient of the verification email is sent to if his or her address is successfully verified.|
|FailureRedirectionURL|query|string|true|The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="getcreatecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CustomVerificationEmailTemplateAlreadyExistsException|[CustomVerificationEmailTemplateAlreadyExistsException](#schemacustomverificationemailtemplatealreadyexistsexception)|
|481|481|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|482|482|CustomVerificationEmailInvalidContentException|[CustomVerificationEmailInvalidContentException](#schemacustomverificationemailinvalidcontentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateCustomVerificationEmailTemplate

<a id="opIdPOST_CreateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateCustomVerificationEmailTemplate?Action=CreateCustomVerificationEmailTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{},"FromEmailAddress":{},"TemplateSubject":{},"TemplateContent":{},"SuccessRedirectionURL":{},"FailureRedirectionURL":{}}'
```

`POST /#Action=CreateCustomVerificationEmailTemplate`

<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

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

<h3 id="postcreatecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateCustomVerificationEmailTemplateRequest](#schemacreatecustomverificationemailtemplaterequest)|false|none|
|» TemplateName|body|object|true|none|
|» FromEmailAddress|body|object|true|none|
|» TemplateSubject|body|object|true|none|
|» TemplateContent|body|object|true|none|
|» SuccessRedirectionURL|body|object|true|none|
|» FailureRedirectionURL|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="postcreatecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CustomVerificationEmailTemplateAlreadyExistsException|[CustomVerificationEmailTemplateAlreadyExistsException](#schemacustomverificationemailtemplatealreadyexistsexception)|
|481|481|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|482|482|CustomVerificationEmailInvalidContentException|[CustomVerificationEmailInvalidContentException](#schemacustomverificationemailinvalidcontentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateReceiptFilter

<a id="opIdGET_CreateReceiptFilter"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptFilter?Name=%7B%7D&IpFilter=%7B%22Policy%22%3A%7B%7D%2C%22Cidr%22%3A%7B%7D%7D&Action=CreateReceiptFilter&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateReceiptFilter`

<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreatereceiptfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Filter|query|object|true|A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateReceiptFilter|
|Version|2010-12-01|

<h3 id="getcreatereceiptfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptFilterResponse](#schemacreatereceiptfilterresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateReceiptFilter

<a id="opIdPOST_CreateReceiptFilter"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptFilter?Action=CreateReceiptFilter&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Filter":{"Name":{},"IpFilter":{"Policy":{},"Cidr":{}}}}'
```

`POST /#Action=CreateReceiptFilter`

<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Filter": {
    "Name": {},
    "IpFilter": {
      "Policy": {},
      "Cidr": {}
    }
  }
}
```

<h3 id="postcreatereceiptfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateReceiptFilterRequest](#schemacreatereceiptfilterrequest)|false|none|
|» Filter|body|object|true|none|
|» » Name|body|object|true|none|
|» » IpFilter|body|object|true|none|
|» » » Policy|body|object|true|none|
|» » » Cidr|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateReceiptFilter|
|Version|2010-12-01|

<h3 id="postcreatereceiptfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptFilterResponse](#schemacreatereceiptfilterresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateReceiptRule

<a id="opIdGET_CreateReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptRule?RuleSetName=string&Name=%7B%7D&Enabled=%7B%7D&TlsPolicy=%7B%7D&Recipients=%7B%7D&Actions=%7B%7D&ScanEnabled=%7B%7D&Action=CreateReceiptRule&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateReceiptRule`

<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreatereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the rule set that the receipt rule will be added to.|
|After|query|string|false|The name of an existing rule after which the new rule will be placed. If this parameter is null, the new rule will be inserted at the beginning of the rule list.|
|Rule|query|object|true|A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateReceiptRule|
|Version|2010-12-01|

<h3 id="getcreatereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptRuleResponse](#schemacreatereceiptruleresponse)|
|480|480|InvalidSnsTopicException|[InvalidSnsTopicException](#schemainvalidsnstopicexception)|
|481|481|InvalidS3ConfigurationException|[InvalidS3ConfigurationException](#schemainvalids3configurationexception)|
|482|482|InvalidLambdaFunctionException|[InvalidLambdaFunctionException](#schemainvalidlambdafunctionexception)|
|483|483|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|484|484|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|485|485|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateReceiptRule

<a id="opIdPOST_CreateReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptRule?Action=CreateReceiptRule&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"After":{},"Rule":{"Name":{},"Enabled":{},"TlsPolicy":{},"Recipients":{},"Actions":{},"ScanEnabled":{}}}'
```

`POST /#Action=CreateReceiptRule`

<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "After": {},
  "Rule": {
    "Name": {},
    "Enabled": {},
    "TlsPolicy": {},
    "Recipients": {},
    "Actions": {},
    "ScanEnabled": {}
  }
}
```

<h3 id="postcreatereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateReceiptRuleRequest](#schemacreatereceiptrulerequest)|false|none|
|» RuleSetName|body|object|true|none|
|» After|body|object|false|none|
|» Rule|body|object|true|none|
|» » Name|body|object|true|none|
|» » Enabled|body|object|false|none|
|» » TlsPolicy|body|object|false|none|
|» » Recipients|body|object|false|none|
|» » Actions|body|object|false|none|
|» » ScanEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateReceiptRule|
|Version|2010-12-01|

<h3 id="postcreatereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptRuleResponse](#schemacreatereceiptruleresponse)|
|480|480|InvalidSnsTopicException|[InvalidSnsTopicException](#schemainvalidsnstopicexception)|
|481|481|InvalidS3ConfigurationException|[InvalidS3ConfigurationException](#schemainvalids3configurationexception)|
|482|482|InvalidLambdaFunctionException|[InvalidLambdaFunctionException](#schemainvalidlambdafunctionexception)|
|483|483|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|484|484|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|485|485|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateReceiptRuleSet

<a id="opIdGET_CreateReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptRuleSet?RuleSetName=string&Action=CreateReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateReceiptRuleSet`

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreatereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|<p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getcreatereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptRuleSetResponse](#schemacreatereceiptrulesetresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateReceiptRuleSet

<a id="opIdPOST_CreateReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateReceiptRuleSet?Action=CreateReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{}}'
```

`POST /#Action=CreateReceiptRuleSet`

<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {}
}
```

<h3 id="postcreatereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateReceiptRuleSetRequest](#schemacreatereceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postcreatereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateReceiptRuleSetResponse](#schemacreatereceiptrulesetresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateTemplate

<a id="opIdGET_CreateTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateTemplate?TemplateName=%7B%7D&SubjectPart=%7B%7D&TextPart=%7B%7D&HtmlPart=%7B%7D&Action=CreateTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateTemplate`

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getcreatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Template|query|object|true|The content of the email, composed of a subject line, an HTML part, and a text-only part.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateTemplate|
|Version|2010-12-01|

<h3 id="getcreatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTemplateResponse](#schemacreatetemplateresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|InvalidTemplateException|[InvalidTemplateException](#schemainvalidtemplateexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateTemplate

<a id="opIdPOST_CreateTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=CreateTemplate?Action=CreateTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Template":{"TemplateName":{},"SubjectPart":{},"TextPart":{},"HtmlPart":{}}}'
```

`POST /#Action=CreateTemplate`

<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Template": {
    "TemplateName": {},
    "SubjectPart": {},
    "TextPart": {},
    "HtmlPart": {}
  }
}
```

<h3 id="postcreatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateTemplateRequest](#schemacreatetemplaterequest)|false|none|
|» Template|body|object|true|none|
|» » TemplateName|body|object|true|none|
|» » SubjectPart|body|object|false|none|
|» » TextPart|body|object|false|none|
|» » HtmlPart|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateTemplate|
|Version|2010-12-01|

<h3 id="postcreatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTemplateResponse](#schemacreatetemplateresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|InvalidTemplateException|[InvalidTemplateException](#schemainvalidtemplateexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteConfigurationSet

<a id="opIdGET_DeleteConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSet?ConfigurationSetName=string&Action=DeleteConfigurationSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteConfigurationSet`

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeleteconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteConfigurationSet|
|Version|2010-12-01|

<h3 id="getdeleteconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetResponse](#schemadeleteconfigurationsetresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteConfigurationSet

<a id="opIdPOST_DeleteConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSet?Action=DeleteConfigurationSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{}}'
```

`POST /#Action=DeleteConfigurationSet`

<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {}
}
```

<h3 id="postdeleteconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigurationSetRequest](#schemadeleteconfigurationsetrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteConfigurationSet|
|Version|2010-12-01|

<h3 id="postdeleteconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetResponse](#schemadeleteconfigurationsetresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteConfigurationSetEventDestination

<a id="opIdGET_DeleteConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSetEventDestination?ConfigurationSetName=string&EventDestinationName=string&Action=DeleteConfigurationSetEventDestination&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteConfigurationSetEventDestination`

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeleteconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set from which to delete the event destination.|
|EventDestinationName|query|string|true|The name of the event destination to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="getdeleteconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetEventDestinationResponse](#schemadeleteconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationDoesNotExistException|[EventDestinationDoesNotExistException](#schemaeventdestinationdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteConfigurationSetEventDestination

<a id="opIdPOST_DeleteConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSetEventDestination?Action=DeleteConfigurationSetEventDestination&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"EventDestinationName":{}}'
```

`POST /#Action=DeleteConfigurationSetEventDestination`

<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "EventDestinationName": {}
}
```

<h3 id="postdeleteconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigurationSetEventDestinationRequest](#schemadeleteconfigurationseteventdestinationrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» EventDestinationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="postdeleteconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetEventDestinationResponse](#schemadeleteconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationDoesNotExistException|[EventDestinationDoesNotExistException](#schemaeventdestinationdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteConfigurationSetTrackingOptions

<a id="opIdGET_DeleteConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSetTrackingOptions?ConfigurationSetName=string&Action=DeleteConfigurationSetTrackingOptions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteConfigurationSetTrackingOptions`

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

<h3 id="getdeleteconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set from which you want to delete the tracking options.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="getdeleteconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetTrackingOptionsResponse](#schemadeleteconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsDoesNotExistException|[TrackingOptionsDoesNotExistException](#schematrackingoptionsdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteConfigurationSetTrackingOptions

<a id="opIdPOST_DeleteConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteConfigurationSetTrackingOptions?Action=DeleteConfigurationSetTrackingOptions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{}}'
```

`POST /#Action=DeleteConfigurationSetTrackingOptions`

<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>

> Body parameter

```json
{
  "ConfigurationSetName": {}
}
```

<h3 id="postdeleteconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteConfigurationSetTrackingOptionsRequest](#schemadeleteconfigurationsettrackingoptionsrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="postdeleteconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationSetTrackingOptionsResponse](#schemadeleteconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsDoesNotExistException|[TrackingOptionsDoesNotExistException](#schematrackingoptionsdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteCustomVerificationEmailTemplate

<a id="opIdGET_DeleteCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteCustomVerificationEmailTemplate?TemplateName=string&Action=DeleteCustomVerificationEmailTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteCustomVerificationEmailTemplate`

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeletecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the custom verification email template that you want to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="getdeletecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteCustomVerificationEmailTemplate

<a id="opIdPOST_DeleteCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteCustomVerificationEmailTemplate?Action=DeleteCustomVerificationEmailTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{}}'
```

`POST /#Action=DeleteCustomVerificationEmailTemplate`

<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": {}
}
```

<h3 id="postdeletecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteCustomVerificationEmailTemplateRequest](#schemadeletecustomverificationemailtemplaterequest)|false|none|
|» TemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="postdeletecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteIdentity

<a id="opIdGET_DeleteIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteIdentity?Identity=string&Action=DeleteIdentity&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteIdentity`

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeleteidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|The identity to be removed from the list of identities for the AWS Account.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteIdentity|
|Version|2010-12-01|

<h3 id="getdeleteidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIdentityResponse](#schemadeleteidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteIdentity

<a id="opIdPOST_DeleteIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteIdentity?Action=DeleteIdentity&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{}}'
```

`POST /#Action=DeleteIdentity`

<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {}
}
```

<h3 id="postdeleteidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteIdentityRequest](#schemadeleteidentityrequest)|false|none|
|» Identity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteIdentity|
|Version|2010-12-01|

<h3 id="postdeleteidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIdentityResponse](#schemadeleteidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteIdentityPolicy

<a id="opIdGET_DeleteIdentityPolicy"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteIdentityPolicy?Identity=string&PolicyName=string&Action=DeleteIdentityPolicy&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteIdentityPolicy`

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeleteidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|<p>The identity that is associated with the policy that you want to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>|
|PolicyName|query|string|true|The name of the policy to be deleted.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteIdentityPolicy|
|Version|2010-12-01|

<h3 id="getdeleteidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIdentityPolicyResponse](#schemadeleteidentitypolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteIdentityPolicy

<a id="opIdPOST_DeleteIdentityPolicy"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteIdentityPolicy?Action=DeleteIdentityPolicy&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"PolicyName":{}}'
```

`POST /#Action=DeleteIdentityPolicy`

<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {},
  "PolicyName": {}
}
```

<h3 id="postdeleteidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteIdentityPolicyRequest](#schemadeleteidentitypolicyrequest)|false|none|
|» Identity|body|object|true|none|
|» PolicyName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteIdentityPolicy|
|Version|2010-12-01|

<h3 id="postdeleteidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIdentityPolicyResponse](#schemadeleteidentitypolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteReceiptFilter

<a id="opIdGET_DeleteReceiptFilter"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptFilter?FilterName=string&Action=DeleteReceiptFilter&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteReceiptFilter`

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeletereceiptfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FilterName|query|string|true|The name of the IP address filter to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteReceiptFilter|
|Version|2010-12-01|

<h3 id="getdeletereceiptfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptFilterResponse](#schemadeletereceiptfilterresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteReceiptFilter

<a id="opIdPOST_DeleteReceiptFilter"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptFilter?Action=DeleteReceiptFilter&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"FilterName":{}}'
```

`POST /#Action=DeleteReceiptFilter`

<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "FilterName": {}
}
```

<h3 id="postdeletereceiptfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReceiptFilterRequest](#schemadeletereceiptfilterrequest)|false|none|
|» FilterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteReceiptFilter|
|Version|2010-12-01|

<h3 id="postdeletereceiptfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptFilterResponse](#schemadeletereceiptfilterresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteReceiptRule

<a id="opIdGET_DeleteReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptRule?RuleSetName=string&RuleName=string&Action=DeleteReceiptRule&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteReceiptRule`

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeletereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set that contains the receipt rule to delete.|
|RuleName|query|string|true|The name of the receipt rule to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteReceiptRule|
|Version|2010-12-01|

<h3 id="getdeletereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptRuleResponse](#schemadeletereceiptruleresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteReceiptRule

<a id="opIdPOST_DeleteReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptRule?Action=DeleteReceiptRule&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"RuleName":{}}'
```

`POST /#Action=DeleteReceiptRule`

<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "RuleName": {}
}
```

<h3 id="postdeletereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReceiptRuleRequest](#schemadeletereceiptrulerequest)|false|none|
|» RuleSetName|body|object|true|none|
|» RuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteReceiptRule|
|Version|2010-12-01|

<h3 id="postdeletereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptRuleResponse](#schemadeletereceiptruleresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteReceiptRuleSet

<a id="opIdGET_DeleteReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptRuleSet?RuleSetName=string&Action=DeleteReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteReceiptRuleSet`

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeletereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getdeletereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptRuleSetResponse](#schemadeletereceiptrulesetresponse)|
|480|480|CannotDeleteException|[CannotDeleteException](#schemacannotdeleteexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteReceiptRuleSet

<a id="opIdPOST_DeleteReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteReceiptRuleSet?Action=DeleteReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{}}'
```

`POST /#Action=DeleteReceiptRuleSet`

<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {}
}
```

<h3 id="postdeletereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteReceiptRuleSetRequest](#schemadeletereceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postdeletereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReceiptRuleSetResponse](#schemadeletereceiptrulesetresponse)|
|480|480|CannotDeleteException|[CannotDeleteException](#schemacannotdeleteexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteTemplate

<a id="opIdGET_DeleteTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteTemplate?TemplateName=string&Action=DeleteTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteTemplate`

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdeletetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the template to be deleted.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteTemplate|
|Version|2010-12-01|

<h3 id="getdeletetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTemplateResponse](#schemadeletetemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteTemplate

<a id="opIdPOST_DeleteTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteTemplate?Action=DeleteTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{}}'
```

`POST /#Action=DeleteTemplate`

<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": {}
}
```

<h3 id="postdeletetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteTemplateRequest](#schemadeletetemplaterequest)|false|none|
|» TemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteTemplate|
|Version|2010-12-01|

<h3 id="postdeletetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTemplateResponse](#schemadeletetemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteVerifiedEmailAddress

<a id="opIdGET_DeleteVerifiedEmailAddress"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteVerifiedEmailAddress?EmailAddress=string&Action=DeleteVerifiedEmailAddress&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteVerifiedEmailAddress`

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

<h3 id="getdeleteverifiedemailaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|query|string|true|An email address to be removed from the list of verified addresses.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteVerifiedEmailAddress|
|Version|2010-12-01|

<h3 id="getdeleteverifiedemailaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteVerifiedEmailAddress

<a id="opIdPOST_DeleteVerifiedEmailAddress"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DeleteVerifiedEmailAddress?Action=DeleteVerifiedEmailAddress&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EmailAddress":{}}'
```

`POST /#Action=DeleteVerifiedEmailAddress`

Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.

> Body parameter

```json
{
  "EmailAddress": {}
}
```

<h3 id="postdeleteverifiedemailaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteVerifiedEmailAddressRequest](#schemadeleteverifiedemailaddressrequest)|false|none|
|» EmailAddress|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteVerifiedEmailAddress|
|Version|2010-12-01|

<h3 id="postdeleteverifiedemailaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeActiveReceiptRuleSet

<a id="opIdGET_DescribeActiveReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeActiveReceiptRuleSet?Action=DescribeActiveReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeActiveReceiptRuleSet`

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdescribeactivereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeActiveReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getdescribeactivereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeActiveReceiptRuleSetResponse](#schemadescribeactivereceiptrulesetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeActiveReceiptRuleSet

<a id="opIdPOST_DescribeActiveReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeActiveReceiptRuleSet?Action=DescribeActiveReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=DescribeActiveReceiptRuleSet`

<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{}
```

<h3 id="postdescribeactivereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeActiveReceiptRuleSetRequest](#schemadescribeactivereceiptrulesetrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeActiveReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postdescribeactivereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeActiveReceiptRuleSetResponse](#schemadescribeactivereceiptrulesetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeConfigurationSet

<a id="opIdGET_DescribeConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeConfigurationSet?ConfigurationSetName=string&Action=DescribeConfigurationSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeConfigurationSet`

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdescribeconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set to describe.|
|ConfigurationSetAttributeNames|query|[[ConfigurationSetAttribute](#schemaconfigurationsetattribute)]|false|A list of configuration set attributes to return.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|ConfigurationSetAttributeNames|eventDestinations|
|ConfigurationSetAttributeNames|trackingOptions|
|ConfigurationSetAttributeNames|deliveryOptions|
|ConfigurationSetAttributeNames|reputationOptions|
|Action|DescribeConfigurationSet|
|Version|2010-12-01|

<h3 id="getdescribeconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationSetResponse](#schemadescribeconfigurationsetresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeConfigurationSet

<a id="opIdPOST_DescribeConfigurationSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeConfigurationSet?Action=DescribeConfigurationSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"ConfigurationSetAttributeNames":{}}'
```

`POST /#Action=DescribeConfigurationSet`

<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "ConfigurationSetAttributeNames": {}
}
```

<h3 id="postdescribeconfigurationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeConfigurationSetRequest](#schemadescribeconfigurationsetrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» ConfigurationSetAttributeNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeConfigurationSet|
|Version|2010-12-01|

<h3 id="postdescribeconfigurationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationSetResponse](#schemadescribeconfigurationsetresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeReceiptRule

<a id="opIdGET_DescribeReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeReceiptRule?RuleSetName=string&RuleName=string&Action=DescribeReceiptRule&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeReceiptRule`

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdescribereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set that the receipt rule belongs to.|
|RuleName|query|string|true|The name of the receipt rule.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeReceiptRule|
|Version|2010-12-01|

<h3 id="getdescribereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReceiptRuleResponse](#schemadescribereceiptruleresponse)|
|480|480|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|481|481|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeReceiptRule

<a id="opIdPOST_DescribeReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeReceiptRule?Action=DescribeReceiptRule&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"RuleName":{}}'
```

`POST /#Action=DescribeReceiptRule`

<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "RuleName": {}
}
```

<h3 id="postdescribereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReceiptRuleRequest](#schemadescribereceiptrulerequest)|false|none|
|» RuleSetName|body|object|true|none|
|» RuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeReceiptRule|
|Version|2010-12-01|

<h3 id="postdescribereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReceiptRuleResponse](#schemadescribereceiptruleresponse)|
|480|480|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|481|481|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeReceiptRuleSet

<a id="opIdGET_DescribeReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeReceiptRuleSet?RuleSetName=string&Action=DescribeReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeReceiptRuleSet`

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getdescribereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set to describe.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getdescribereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReceiptRuleSetResponse](#schemadescribereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeReceiptRuleSet

<a id="opIdPOST_DescribeReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=DescribeReceiptRuleSet?Action=DescribeReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{}}'
```

`POST /#Action=DescribeReceiptRuleSet`

<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {}
}
```

<h3 id="postdescribereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeReceiptRuleSetRequest](#schemadescribereceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postdescribereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReceiptRuleSetResponse](#schemadescribereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetAccountSendingEnabled

<a id="opIdGET_GetAccountSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetAccountSendingEnabled?Action=GetAccountSendingEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetAccountSendingEnabled`

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgetaccountsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetAccountSendingEnabled|
|Version|2010-12-01|

<h3 id="getgetaccountsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSendingEnabledResponse](#schemagetaccountsendingenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetAccountSendingEnabled

<a id="opIdPOST_GetAccountSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetAccountSendingEnabled?Action=GetAccountSendingEnabled&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=GetAccountSendingEnabled`

<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="postgetaccountsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetAccountSendingEnabled|
|Version|2010-12-01|

<h3 id="postgetaccountsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountSendingEnabledResponse](#schemagetaccountsendingenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetCustomVerificationEmailTemplate

<a id="opIdGET_GetCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetCustomVerificationEmailTemplate?TemplateName=string&Action=GetCustomVerificationEmailTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetCustomVerificationEmailTemplate`

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgetcustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the custom verification email template that you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="getgetcustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomVerificationEmailTemplateResponse](#schemagetcustomverificationemailtemplateresponse)|
|480|480|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetCustomVerificationEmailTemplate

<a id="opIdPOST_GetCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetCustomVerificationEmailTemplate?Action=GetCustomVerificationEmailTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{}}'
```

`POST /#Action=GetCustomVerificationEmailTemplate`

<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": {}
}
```

<h3 id="postgetcustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCustomVerificationEmailTemplateRequest](#schemagetcustomverificationemailtemplaterequest)|false|none|
|» TemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="postgetcustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCustomVerificationEmailTemplateResponse](#schemagetcustomverificationemailtemplateresponse)|
|480|480|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetIdentityDkimAttributes

<a id="opIdGET_GetIdentityDkimAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityDkimAttributes?Identities=string&Action=GetIdentityDkimAttributes&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetIdentityDkimAttributes`

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getgetidentitydkimattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identities|query|[[Identity](#schemaidentity)]|true|A list of one or more verified identities - email addresses, domains, or both.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetIdentityDkimAttributes|
|Version|2010-12-01|

<h3 id="getgetidentitydkimattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityDkimAttributesResponse](#schemagetidentitydkimattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetIdentityDkimAttributes

<a id="opIdPOST_GetIdentityDkimAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityDkimAttributes?Action=GetIdentityDkimAttributes&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identities":{}}'
```

`POST /#Action=GetIdentityDkimAttributes`

<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identities": {}
}
```

<h3 id="postgetidentitydkimattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIdentityDkimAttributesRequest](#schemagetidentitydkimattributesrequest)|false|none|
|» Identities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetIdentityDkimAttributes|
|Version|2010-12-01|

<h3 id="postgetidentitydkimattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityDkimAttributesResponse](#schemagetidentitydkimattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetIdentityMailFromDomainAttributes

<a id="opIdGET_GetIdentityMailFromDomainAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityMailFromDomainAttributes?Identities=string&Action=GetIdentityMailFromDomainAttributes&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetIdentityMailFromDomainAttributes`

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

<h3 id="getgetidentitymailfromdomainattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identities|query|[[Identity](#schemaidentity)]|true|A list of one or more identities.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetIdentityMailFromDomainAttributes|
|Version|2010-12-01|

<h3 id="getgetidentitymailfromdomainattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityMailFromDomainAttributesResponse](#schemagetidentitymailfromdomainattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetIdentityMailFromDomainAttributes

<a id="opIdPOST_GetIdentityMailFromDomainAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityMailFromDomainAttributes?Action=GetIdentityMailFromDomainAttributes&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identities":{}}'
```

`POST /#Action=GetIdentityMailFromDomainAttributes`

<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>

> Body parameter

```json
{
  "Identities": {}
}
```

<h3 id="postgetidentitymailfromdomainattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIdentityMailFromDomainAttributesRequest](#schemagetidentitymailfromdomainattributesrequest)|false|none|
|» Identities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetIdentityMailFromDomainAttributes|
|Version|2010-12-01|

<h3 id="postgetidentitymailfromdomainattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityMailFromDomainAttributesResponse](#schemagetidentitymailfromdomainattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetIdentityNotificationAttributes

<a id="opIdGET_GetIdentityNotificationAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityNotificationAttributes?Identities=string&Action=GetIdentityNotificationAttributes&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetIdentityNotificationAttributes`

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getgetidentitynotificationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identities|query|[[Identity](#schemaidentity)]|true|A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetIdentityNotificationAttributes|
|Version|2010-12-01|

<h3 id="getgetidentitynotificationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityNotificationAttributesResponse](#schemagetidentitynotificationattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetIdentityNotificationAttributes

<a id="opIdPOST_GetIdentityNotificationAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityNotificationAttributes?Action=GetIdentityNotificationAttributes&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identities":{}}'
```

`POST /#Action=GetIdentityNotificationAttributes`

<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identities": {}
}
```

<h3 id="postgetidentitynotificationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIdentityNotificationAttributesRequest](#schemagetidentitynotificationattributesrequest)|false|none|
|» Identities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetIdentityNotificationAttributes|
|Version|2010-12-01|

<h3 id="postgetidentitynotificationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityNotificationAttributesResponse](#schemagetidentitynotificationattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetIdentityPolicies

<a id="opIdGET_GetIdentityPolicies"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityPolicies?Identity=string&PolicyNames=string&Action=GetIdentityPolicies&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetIdentityPolicies`

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgetidentitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|<p>The identity for which the policies will be retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>|
|PolicyNames|query|[[PolicyName](#schemapolicyname)]|true|A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use <code>ListIdentityPolicies</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetIdentityPolicies|
|Version|2010-12-01|

<h3 id="getgetidentitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityPoliciesResponse](#schemagetidentitypoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetIdentityPolicies

<a id="opIdPOST_GetIdentityPolicies"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityPolicies?Action=GetIdentityPolicies&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"PolicyNames":{}}'
```

`POST /#Action=GetIdentityPolicies`

<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {},
  "PolicyNames": {}
}
```

<h3 id="postgetidentitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIdentityPoliciesRequest](#schemagetidentitypoliciesrequest)|false|none|
|» Identity|body|object|true|none|
|» PolicyNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetIdentityPolicies|
|Version|2010-12-01|

<h3 id="postgetidentitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityPoliciesResponse](#schemagetidentitypoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetIdentityVerificationAttributes

<a id="opIdGET_GetIdentityVerificationAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityVerificationAttributes?Identities=string&Action=GetIdentityVerificationAttributes&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetIdentityVerificationAttributes`

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

<h3 id="getgetidentityverificationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identities|query|[[Identity](#schemaidentity)]|true|A list of identities.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetIdentityVerificationAttributes|
|Version|2010-12-01|

<h3 id="getgetidentityverificationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityVerificationAttributesResponse](#schemagetidentityverificationattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetIdentityVerificationAttributes

<a id="opIdPOST_GetIdentityVerificationAttributes"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetIdentityVerificationAttributes?Action=GetIdentityVerificationAttributes&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identities":{}}'
```

`POST /#Action=GetIdentityVerificationAttributes`

<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>

> Body parameter

```json
{
  "Identities": {}
}
```

<h3 id="postgetidentityverificationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIdentityVerificationAttributesRequest](#schemagetidentityverificationattributesrequest)|false|none|
|» Identities|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetIdentityVerificationAttributes|
|Version|2010-12-01|

<h3 id="postgetidentityverificationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIdentityVerificationAttributesResponse](#schemagetidentityverificationattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSendQuota

<a id="opIdGET_GetSendQuota"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetSendQuota?Action=GetSendQuota&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSendQuota`

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgetsendquota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetSendQuota|
|Version|2010-12-01|

<h3 id="getgetsendquota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSendQuotaResponse](#schemagetsendquotaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSendQuota

<a id="opIdPOST_GetSendQuota"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetSendQuota?Action=GetSendQuota&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=GetSendQuota`

<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>

<h3 id="postgetsendquota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetSendQuota|
|Version|2010-12-01|

<h3 id="postgetsendquota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSendQuotaResponse](#schemagetsendquotaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSendStatistics

<a id="opIdGET_GetSendStatistics"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetSendStatistics?Action=GetSendStatistics&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSendStatistics`

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgetsendstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetSendStatistics|
|Version|2010-12-01|

<h3 id="getgetsendstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSendStatisticsResponse](#schemagetsendstatisticsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSendStatistics

<a id="opIdPOST_GetSendStatistics"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetSendStatistics?Action=GetSendStatistics&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=GetSendStatistics`

<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="postgetsendstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetSendStatistics|
|Version|2010-12-01|

<h3 id="postgetsendstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSendStatisticsResponse](#schemagetsendstatisticsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetTemplate

<a id="opIdGET_GetTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetTemplate?TemplateName=string&Action=GetTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetTemplate`

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getgettemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the template you want to retrieve.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|GetTemplate|
|Version|2010-12-01|

<h3 id="getgettemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateResponse](#schemagettemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetTemplate

<a id="opIdPOST_GetTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=GetTemplate?Action=GetTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{}}'
```

`POST /#Action=GetTemplate`

<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": {}
}
```

<h3 id="postgettemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetTemplateRequest](#schemagettemplaterequest)|false|none|
|» TemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetTemplate|
|Version|2010-12-01|

<h3 id="postgettemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTemplateResponse](#schemagettemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListConfigurationSets

<a id="opIdGET_ListConfigurationSets"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListConfigurationSets?Action=ListConfigurationSets&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListConfigurationSets`

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

<h3 id="getlistconfigurationsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position of the configuration set in the configuration set list.|
|MaxItems|query|integer|false|The number of configuration sets to return.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListConfigurationSets|
|Version|2010-12-01|

<h3 id="getlistconfigurationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationSetsResponse](#schemalistconfigurationsetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListConfigurationSets

<a id="opIdPOST_ListConfigurationSets"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListConfigurationSets?Action=ListConfigurationSets&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxItems":{}}'
```

`POST /#Action=ListConfigurationSets`

<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxItems": {}
}
```

<h3 id="postlistconfigurationsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListConfigurationSetsRequest](#schemalistconfigurationsetsrequest)|false|none|
|» NextToken|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListConfigurationSets|
|Version|2010-12-01|

<h3 id="postlistconfigurationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationSetsResponse](#schemalistconfigurationsetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListCustomVerificationEmailTemplates

<a id="opIdGET_ListCustomVerificationEmailTemplates"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListCustomVerificationEmailTemplates?Action=ListCustomVerificationEmailTemplates&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListCustomVerificationEmailTemplates`

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlistcustomverificationemailtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|An array the contains the name and creation time stamp for each template in your Amazon SES account.|
|MaxResults|query|integer|false|The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation will return up to 50 results.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListCustomVerificationEmailTemplates|
|Version|2010-12-01|

<h3 id="getlistcustomverificationemailtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomVerificationEmailTemplatesResponse](#schemalistcustomverificationemailtemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListCustomVerificationEmailTemplates

<a id="opIdPOST_ListCustomVerificationEmailTemplates"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListCustomVerificationEmailTemplates?Action=ListCustomVerificationEmailTemplates&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListCustomVerificationEmailTemplates`

<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistcustomverificationemailtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListCustomVerificationEmailTemplatesRequest](#schemalistcustomverificationemailtemplatesrequest)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListCustomVerificationEmailTemplates|
|Version|2010-12-01|

<h3 id="postlistcustomverificationemailtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCustomVerificationEmailTemplatesResponse](#schemalistcustomverificationemailtemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListIdentities

<a id="opIdGET_ListIdentities"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListIdentities?Action=ListIdentities&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListIdentities`

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlistidentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IdentityType|query|string|false|The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.|
|NextToken|query|string|false|The token to use for pagination.|
|MaxItems|query|integer|false|The maximum number of identities per page. Possible values are 1-1000 inclusive.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|IdentityType|EmailAddress|
|IdentityType|Domain|
|Action|ListIdentities|
|Version|2010-12-01|

<h3 id="getlistidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentitiesResponse](#schemalistidentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListIdentities

<a id="opIdPOST_ListIdentities"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListIdentities?Action=ListIdentities&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"IdentityType":{},"NextToken":{},"MaxItems":{}}'
```

`POST /#Action=ListIdentities`

<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "IdentityType": {},
  "NextToken": {},
  "MaxItems": {}
}
```

<h3 id="postlistidentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListIdentitiesRequest](#schemalistidentitiesrequest)|false|none|
|» IdentityType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListIdentities|
|Version|2010-12-01|

<h3 id="postlistidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentitiesResponse](#schemalistidentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListIdentityPolicies

<a id="opIdGET_ListIdentityPolicies"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListIdentityPolicies?Identity=string&Action=ListIdentityPolicies&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListIdentityPolicies`

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlistidentitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|<p>The identity that is associated with the policy for which the policies will be listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListIdentityPolicies|
|Version|2010-12-01|

<h3 id="getlistidentitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityPoliciesResponse](#schemalistidentitypoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListIdentityPolicies

<a id="opIdPOST_ListIdentityPolicies"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListIdentityPolicies?Action=ListIdentityPolicies&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{}}'
```

`POST /#Action=ListIdentityPolicies`

<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {}
}
```

<h3 id="postlistidentitypolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListIdentityPoliciesRequest](#schemalistidentitypoliciesrequest)|false|none|
|» Identity|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListIdentityPolicies|
|Version|2010-12-01|

<h3 id="postlistidentitypolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIdentityPoliciesResponse](#schemalistidentitypoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListReceiptFilters

<a id="opIdGET_ListReceiptFilters"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListReceiptFilters?Action=ListReceiptFilters&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListReceiptFilters`

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlistreceiptfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListReceiptFilters|
|Version|2010-12-01|

<h3 id="getlistreceiptfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceiptFiltersResponse](#schemalistreceiptfiltersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListReceiptFilters

<a id="opIdPOST_ListReceiptFilters"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListReceiptFilters?Action=ListReceiptFilters&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=ListReceiptFilters`

<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{}
```

<h3 id="postlistreceiptfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListReceiptFiltersRequest](#schemalistreceiptfiltersrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListReceiptFilters|
|Version|2010-12-01|

<h3 id="postlistreceiptfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceiptFiltersResponse](#schemalistreceiptfiltersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListReceiptRuleSets

<a id="opIdGET_ListReceiptRuleSets"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListReceiptRuleSets?Action=ListReceiptRuleSets&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListReceiptRuleSets`

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlistreceiptrulesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate the position in the receipt rule set list.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListReceiptRuleSets|
|Version|2010-12-01|

<h3 id="getlistreceiptrulesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceiptRuleSetsResponse](#schemalistreceiptrulesetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListReceiptRuleSets

<a id="opIdPOST_ListReceiptRuleSets"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListReceiptRuleSets?Action=ListReceiptRuleSets&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{}}'
```

`POST /#Action=ListReceiptRuleSets`

<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "NextToken": {}
}
```

<h3 id="postlistreceiptrulesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListReceiptRuleSetsRequest](#schemalistreceiptrulesetsrequest)|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListReceiptRuleSets|
|Version|2010-12-01|

<h3 id="postlistreceiptrulesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceiptRuleSetsResponse](#schemalistreceiptrulesetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTemplates

<a id="opIdGET_ListTemplates"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListTemplates?Action=ListTemplates&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTemplates`

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getlisttemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|A token returned from a previous call to <code>ListTemplates</code> to indicate the position in the list of email templates.|
|MaxItems|query|integer|false|The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListTemplates|
|Version|2010-12-01|

<h3 id="getlisttemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTemplatesResponse](#schemalisttemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTemplates

<a id="opIdPOST_ListTemplates"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListTemplates?Action=ListTemplates&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxItems":{}}'
```

`POST /#Action=ListTemplates`

<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxItems": {}
}
```

<h3 id="postlisttemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTemplatesRequest](#schemalisttemplatesrequest)|false|none|
|» NextToken|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTemplates|
|Version|2010-12-01|

<h3 id="postlisttemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTemplatesResponse](#schemalisttemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListVerifiedEmailAddresses

<a id="opIdGET_ListVerifiedEmailAddresses"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListVerifiedEmailAddresses?Action=ListVerifiedEmailAddresses&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListVerifiedEmailAddresses`

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

<h3 id="getlistverifiedemailaddresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListVerifiedEmailAddresses|
|Version|2010-12-01|

<h3 id="getlistverifiedemailaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVerifiedEmailAddressesResponse](#schemalistverifiedemailaddressesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListVerifiedEmailAddresses

<a id="opIdPOST_ListVerifiedEmailAddresses"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ListVerifiedEmailAddresses?Action=ListVerifiedEmailAddresses&Version=2010-12-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=ListVerifiedEmailAddresses`

Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.

<h3 id="postlistverifiedemailaddresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListVerifiedEmailAddresses|
|Version|2010-12-01|

<h3 id="postlistverifiedemailaddresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVerifiedEmailAddressesResponse](#schemalistverifiedemailaddressesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutConfigurationSetDeliveryOptions

<a id="opIdGET_PutConfigurationSetDeliveryOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=PutConfigurationSetDeliveryOptions?ConfigurationSetName=string&Action=PutConfigurationSetDeliveryOptions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutConfigurationSetDeliveryOptions`

Adds or updates the delivery options for a configuration set.

<h3 id="getputconfigurationsetdeliveryoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that you want to specify the delivery options for.|
|DeliveryOptions|query|object|false|Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutConfigurationSetDeliveryOptions|
|Version|2010-12-01|

<h3 id="getputconfigurationsetdeliveryoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetDeliveryOptionsResponse](#schemaputconfigurationsetdeliveryoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|InvalidDeliveryOptionsException|[InvalidDeliveryOptionsException](#schemainvaliddeliveryoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutConfigurationSetDeliveryOptions

<a id="opIdPOST_PutConfigurationSetDeliveryOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=PutConfigurationSetDeliveryOptions?Action=PutConfigurationSetDeliveryOptions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"DeliveryOptions":{"TlsPolicy":{}}}'
```

`POST /#Action=PutConfigurationSetDeliveryOptions`

Adds or updates the delivery options for a configuration set.

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "DeliveryOptions": {
    "TlsPolicy": {}
  }
}
```

<h3 id="postputconfigurationsetdeliveryoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutConfigurationSetDeliveryOptionsRequest](#schemaputconfigurationsetdeliveryoptionsrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» DeliveryOptions|body|object|false|none|
|» » TlsPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutConfigurationSetDeliveryOptions|
|Version|2010-12-01|

<h3 id="postputconfigurationsetdeliveryoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConfigurationSetDeliveryOptionsResponse](#schemaputconfigurationsetdeliveryoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|InvalidDeliveryOptionsException|[InvalidDeliveryOptionsException](#schemainvaliddeliveryoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutIdentityPolicy

<a id="opIdGET_PutIdentityPolicy"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=PutIdentityPolicy?Identity=string&PolicyName=string&Policy=string&Action=PutIdentityPolicy&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutIdentityPolicy`

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getputidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|<p>The identity that the policy will apply to. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>|
|PolicyName|query|string|true|<p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>|
|Policy|query|string|true|<p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>. </p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|PutIdentityPolicy|
|Version|2010-12-01|

<h3 id="getputidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutIdentityPolicyResponse](#schemaputidentitypolicyresponse)|
|480|480|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutIdentityPolicy

<a id="opIdPOST_PutIdentityPolicy"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=PutIdentityPolicy?Action=PutIdentityPolicy&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"PolicyName":{},"Policy":{}}'
```

`POST /#Action=PutIdentityPolicy`

<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {},
  "PolicyName": {},
  "Policy": {}
}
```

<h3 id="postputidentitypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutIdentityPolicyRequest](#schemaputidentitypolicyrequest)|false|none|
|» Identity|body|object|true|none|
|» PolicyName|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutIdentityPolicy|
|Version|2010-12-01|

<h3 id="postputidentitypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutIdentityPolicyResponse](#schemaputidentitypolicyresponse)|
|480|480|InvalidPolicyException|[InvalidPolicyException](#schemainvalidpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ReorderReceiptRuleSet

<a id="opIdGET_ReorderReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ReorderReceiptRuleSet?RuleSetName=string&RuleNames=string&Action=ReorderReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ReorderReceiptRuleSet`

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getreorderreceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set to reorder.|
|RuleNames|query|[[ReceiptRuleName](#schemareceiptrulename)]|true|A list of the specified receipt rule set's receipt rules in the order that you want to put them.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ReorderReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getreorderreceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReorderReceiptRuleSetResponse](#schemareorderreceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ReorderReceiptRuleSet

<a id="opIdPOST_ReorderReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=ReorderReceiptRuleSet?Action=ReorderReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"RuleNames":{}}'
```

`POST /#Action=ReorderReceiptRuleSet`

<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "RuleNames": {}
}
```

<h3 id="postreorderreceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ReorderReceiptRuleSetRequest](#schemareorderreceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|true|none|
|» RuleNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ReorderReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postreorderreceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReorderReceiptRuleSetResponse](#schemareorderreceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendBounce

<a id="opIdGET_SendBounce"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendBounce?OriginalMessageId=string&BounceSender=string&BouncedRecipientInfoList=%7B%22Recipient%22%3A%7B%7D%2C%22RecipientArn%22%3A%7B%7D%2C%22BounceType%22%3A%7B%7D%2C%22RecipientDsnFields%22%3A%7B%22FinalRecipient%22%3A%7B%7D%2C%22Action%22%3A%7B%7D%2C%22RemoteMta%22%3A%7B%7D%2C%22Status%22%3A%7B%7D%2C%22DiagnosticCode%22%3A%7B%7D%2C%22LastAttemptDate%22%3A%7B%7D%2C%22ExtensionFields%22%3A%7B%7D%7D%7D&Action=SendBounce&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendBounce`

<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getsendbounce-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OriginalMessageId|query|string|true|The message ID of the message to be bounced.|
|BounceSender|query|string|true|The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.|
|Explanation|query|string|false|Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.|
|MessageDsn|query|object|false|Message-related DSN fields. If not specified, Amazon SES will choose the values.|
|BouncedRecipientInfoList|query|[[BouncedRecipientInfo](#schemabouncedrecipientinfo)]|true|A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one <code>BouncedRecipientInfo</code> in the list.|
|BounceSenderArn|query|string|false|This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendBounce|
|Version|2010-12-01|

<h3 id="getsendbounce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBounceResponse](#schemasendbounceresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendBounce

<a id="opIdPOST_SendBounce"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendBounce?Action=SendBounce&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OriginalMessageId":{},"BounceSender":{},"Explanation":{},"MessageDsn":{"ReportingMta":{},"ArrivalDate":{},"ExtensionFields":{}},"BouncedRecipientInfoList":{},"BounceSenderArn":{}}'
```

`POST /#Action=SendBounce`

<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "OriginalMessageId": {},
  "BounceSender": {},
  "Explanation": {},
  "MessageDsn": {
    "ReportingMta": {},
    "ArrivalDate": {},
    "ExtensionFields": {}
  },
  "BouncedRecipientInfoList": {},
  "BounceSenderArn": {}
}
```

<h3 id="postsendbounce-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendBounceRequest](#schemasendbouncerequest)|false|none|
|» OriginalMessageId|body|object|true|none|
|» BounceSender|body|object|true|none|
|» Explanation|body|object|false|none|
|» MessageDsn|body|object|false|none|
|» » ReportingMta|body|object|true|none|
|» » ArrivalDate|body|object|false|none|
|» » ExtensionFields|body|object|false|none|
|» BouncedRecipientInfoList|body|object|true|none|
|» BounceSenderArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendBounce|
|Version|2010-12-01|

<h3 id="postsendbounce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBounceResponse](#schemasendbounceresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendBulkTemplatedEmail

<a id="opIdGET_SendBulkTemplatedEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendBulkTemplatedEmail?Source=string&Template=string&Destinations=%7B%22Destination%22%3A%7B%22ToAddresses%22%3A%7B%7D%2C%22CcAddresses%22%3A%7B%7D%2C%22BccAddresses%22%3A%7B%7D%7D%2C%22ReplacementTags%22%3A%7B%7D%2C%22ReplacementTemplateData%22%3A%7B%7D%7D&Action=SendBulkTemplatedEmail&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendBulkTemplatedEmail`

<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>

<h3 id="getsendbulktemplatedemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Source|query|string|true|<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>|
|SourceArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|ReplyToAddresses|query|[[Address](#schemaaddress)]|false|The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.|
|ReturnPath|query|string|false|The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. |
|ReturnPathArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|ConfigurationSetName|query|string|false|The name of the configuration set to use when you send an email using <code>SendBulkTemplatedEmail</code>.|
|DefaultTags|query|[[MessageTag](#schemamessagetag)]|false|A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using <code>SendBulkTemplatedEmail</code>.|
|Template|query|string|true|The template to use when sending this email.|
|TemplateArn|query|string|false|The ARN of the template to use when sending this email.|
|DefaultTemplateData|query|string|false|<p>A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available.</p> <p>The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</p>|
|Destinations|query|[[BulkEmailDestination](#schemabulkemaildestination)]|true|One or more <code>Destination</code> objects. All of the recipients in a <code>Destination</code> will receive the same version of the email. You can specify up to 50 <code>Destination</code> objects within a <code>Destinations</code> array.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendBulkTemplatedEmail|
|Version|2010-12-01|

<h3 id="getsendbulktemplatedemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBulkTemplatedEmailResponse](#schemasendbulktemplatedemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|484|484|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|485|485|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendBulkTemplatedEmail

<a id="opIdPOST_SendBulkTemplatedEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendBulkTemplatedEmail?Action=SendBulkTemplatedEmail&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Source":{},"SourceArn":{},"ReplyToAddresses":{},"ReturnPath":{},"ReturnPathArn":{},"ConfigurationSetName":{},"DefaultTags":{},"Template":{},"TemplateArn":{},"DefaultTemplateData":{},"Destinations":{}}'
```

`POST /#Action=SendBulkTemplatedEmail`

<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>

> Body parameter

```json
{
  "Source": {},
  "SourceArn": {},
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "ReturnPathArn": {},
  "ConfigurationSetName": {},
  "DefaultTags": {},
  "Template": {},
  "TemplateArn": {},
  "DefaultTemplateData": {},
  "Destinations": {}
}
```

<h3 id="postsendbulktemplatedemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendBulkTemplatedEmailRequest](#schemasendbulktemplatedemailrequest)|false|none|
|» Source|body|object|true|none|
|» SourceArn|body|object|false|none|
|» ReplyToAddresses|body|object|false|none|
|» ReturnPath|body|object|false|none|
|» ReturnPathArn|body|object|false|none|
|» ConfigurationSetName|body|object|false|none|
|» DefaultTags|body|object|false|none|
|» Template|body|object|true|none|
|» TemplateArn|body|object|false|none|
|» DefaultTemplateData|body|object|false|none|
|» Destinations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendBulkTemplatedEmail|
|Version|2010-12-01|

<h3 id="postsendbulktemplatedemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendBulkTemplatedEmailResponse](#schemasendbulktemplatedemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|484|484|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|485|485|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendCustomVerificationEmail

<a id="opIdGET_SendCustomVerificationEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendCustomVerificationEmail?EmailAddress=string&TemplateName=string&Action=SendCustomVerificationEmail&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendCustomVerificationEmail`

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getsendcustomverificationemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|query|string|true|The email address to verify.|
|TemplateName|query|string|true|The name of the custom verification email template to use when sending the verification email.|
|ConfigurationSetName|query|string|false|Name of a configuration set to use when sending the verification email.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendCustomVerificationEmail|
|Version|2010-12-01|

<h3 id="getsendcustomverificationemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendCustomVerificationEmailResponse](#schemasendcustomverificationemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|482|482|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|
|483|483|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|484|484|ProductionAccessNotGrantedException|[ProductionAccessNotGrantedException](#schemaproductionaccessnotgrantedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendCustomVerificationEmail

<a id="opIdPOST_SendCustomVerificationEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendCustomVerificationEmail?Action=SendCustomVerificationEmail&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EmailAddress":{},"TemplateName":{},"ConfigurationSetName":{}}'
```

`POST /#Action=SendCustomVerificationEmail`

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "EmailAddress": {},
  "TemplateName": {},
  "ConfigurationSetName": {}
}
```

<h3 id="postsendcustomverificationemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendCustomVerificationEmailRequest](#schemasendcustomverificationemailrequest)|false|none|
|» EmailAddress|body|object|true|none|
|» TemplateName|body|object|true|none|
|» ConfigurationSetName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendCustomVerificationEmail|
|Version|2010-12-01|

<h3 id="postsendcustomverificationemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendCustomVerificationEmailResponse](#schemasendcustomverificationemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|482|482|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|
|483|483|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|484|484|ProductionAccessNotGrantedException|[ProductionAccessNotGrantedException](#schemaproductionaccessnotgrantedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendEmail

<a id="opIdGET_SendEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendEmail?Source=string&ToAddresses=%7B%7D&CcAddresses=%7B%7D&BccAddresses=%7B%7D&Subject=%7B%22Data%22%3A%7B%7D%2C%22Charset%22%3A%7B%7D%7D&Body=%7B%22Text%22%3A%7B%22Data%22%3A%7B%7D%2C%22Charset%22%3A%7B%7D%7D%2C%22Html%22%3A%7B%22Data%22%3A%7B%7D%2C%22Charset%22%3A%7B%7D%7D%7D&Action=SendEmail&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendEmail`

<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>

<h3 id="getsendemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Source|query|string|true|<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>|
|Destination|query|object|true|The destination for this email, composed of To:, CC:, and BCC: fields.|
|Message|query|object|true|The message to be sent.|
|ReplyToAddresses|query|[[Address](#schemaaddress)]|false|The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.|
|ReturnPath|query|string|false|The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. |
|SourceArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|ReturnPathArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|Tags|query|[[MessageTag](#schemamessagetag)]|false|A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.|
|ConfigurationSetName|query|string|false|The name of the configuration set to use when you send an email using <code>SendEmail</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendEmail|
|Version|2010-12-01|

<h3 id="getsendemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendEmailResponse](#schemasendemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|484|484|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendEmail

<a id="opIdPOST_SendEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendEmail?Action=SendEmail&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Source":{},"Destination":{"ToAddresses":{},"CcAddresses":{},"BccAddresses":{}},"Message":{"Subject":{"Data":{},"Charset":{}},"Body":{"Text":{"Data":{},"Charset":{}},"Html":{"Data":{},"Charset":{}}}},"ReplyToAddresses":{},"ReturnPath":{},"SourceArn":{},"ReturnPathArn":{},"Tags":{},"ConfigurationSetName":{}}'
```

`POST /#Action=SendEmail`

<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>

> Body parameter

```json
{
  "Source": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "Message": {
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
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {}
}
```

<h3 id="postsendemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendEmailRequest](#schemasendemailrequest)|false|none|
|» Source|body|object|true|none|
|» Destination|body|object|true|none|
|» » ToAddresses|body|object|false|none|
|» » CcAddresses|body|object|false|none|
|» » BccAddresses|body|object|false|none|
|» Message|body|object|true|none|
|» » Subject|body|object|true|none|
|» » » Data|body|object|true|none|
|» » » Charset|body|object|false|none|
|» » Body|body|object|true|none|
|» » » Text|body|object|false|none|
|» » » » Data|body|object|true|none|
|» » » » Charset|body|object|false|none|
|» » » Html|body|object|false|none|
|» » » » Data|body|object|true|none|
|» » » » Charset|body|object|false|none|
|» ReplyToAddresses|body|object|false|none|
|» ReturnPath|body|object|false|none|
|» SourceArn|body|object|false|none|
|» ReturnPathArn|body|object|false|none|
|» Tags|body|object|false|none|
|» ConfigurationSetName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendEmail|
|Version|2010-12-01|

<h3 id="postsendemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendEmailResponse](#schemasendemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|484|484|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendRawEmail

<a id="opIdGET_SendRawEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendRawEmail?Data=%7B%7D&Action=SendRawEmail&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendRawEmail`

<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>

<h3 id="getsendrawemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Source|query|string|false|<p>The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note> <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.</p>|
|Destinations|query|[[Address](#schemaaddress)]|false|A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.|
|RawMessage|query|object|true|<p>The raw email message itself. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by a blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment Types</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>The entire message must be base64-encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> </ul>|
|FromArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code> in the raw message of the email. If you use both the <code>FromArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>|
|SourceArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>SourceArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>|
|ReturnPathArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>ReturnPathArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>|
|Tags|query|[[MessageTag](#schemamessagetag)]|false|A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.|
|ConfigurationSetName|query|string|false|The name of the configuration set to use when you send an email using <code>SendRawEmail</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendRawEmail|
|Version|2010-12-01|

<h3 id="getsendrawemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendRawEmailResponse](#schemasendrawemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|484|484|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendRawEmail

<a id="opIdPOST_SendRawEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendRawEmail?Action=SendRawEmail&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Source":{},"Destinations":{},"RawMessage":{"Data":{}},"FromArn":{},"SourceArn":{},"ReturnPathArn":{},"Tags":{},"ConfigurationSetName":{}}'
```

`POST /#Action=SendRawEmail`

<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>

> Body parameter

```json
{
  "Source": {},
  "Destinations": {},
  "RawMessage": {
    "Data": {}
  },
  "FromArn": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {}
}
```

<h3 id="postsendrawemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendRawEmailRequest](#schemasendrawemailrequest)|false|none|
|» Source|body|object|false|none|
|» Destinations|body|object|false|none|
|» RawMessage|body|object|true|none|
|» » Data|body|object|true|none|
|» FromArn|body|object|false|none|
|» SourceArn|body|object|false|none|
|» ReturnPathArn|body|object|false|none|
|» Tags|body|object|false|none|
|» ConfigurationSetName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendRawEmail|
|Version|2010-12-01|

<h3 id="postsendrawemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendRawEmailResponse](#schemasendrawemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|484|484|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SendTemplatedEmail

<a id="opIdGET_SendTemplatedEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendTemplatedEmail?Source=string&ToAddresses=%7B%7D&CcAddresses=%7B%7D&BccAddresses=%7B%7D&Template=string&TemplateData=string&Action=SendTemplatedEmail&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SendTemplatedEmail`

<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>

<h3 id="getsendtemplatedemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Source|query|string|true|<p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in<a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>|
|Destination|query|object|true|The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.|
|ReplyToAddresses|query|[[Address](#schemaaddress)]|false|The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.|
|ReturnPath|query|string|false|The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. |
|SourceArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|ReturnPathArn|query|string|false|<p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>|
|Tags|query|[[MessageTag](#schemamessagetag)]|false|A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.|
|ConfigurationSetName|query|string|false|The name of the configuration set to use when you send an email using <code>SendTemplatedEmail</code>.|
|Template|query|string|true|The template to use when sending this email.|
|TemplateArn|query|string|false|The ARN of the template to use when sending this email.|
|TemplateData|query|string|true|A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SendTemplatedEmail|
|Version|2010-12-01|

<h3 id="getsendtemplatedemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTemplatedEmailResponse](#schemasendtemplatedemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|484|484|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|485|485|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SendTemplatedEmail

<a id="opIdPOST_SendTemplatedEmail"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SendTemplatedEmail?Action=SendTemplatedEmail&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Source":{},"Destination":{"ToAddresses":{},"CcAddresses":{},"BccAddresses":{}},"ReplyToAddresses":{},"ReturnPath":{},"SourceArn":{},"ReturnPathArn":{},"Tags":{},"ConfigurationSetName":{},"Template":{},"TemplateArn":{},"TemplateData":{}}'
```

`POST /#Action=SendTemplatedEmail`

<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>

> Body parameter

```json
{
  "Source": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {},
  "Template": {},
  "TemplateArn": {},
  "TemplateData": {}
}
```

<h3 id="postsendtemplatedemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendTemplatedEmailRequest](#schemasendtemplatedemailrequest)|false|none|
|» Source|body|object|true|none|
|» Destination|body|object|true|none|
|» » ToAddresses|body|object|false|none|
|» » CcAddresses|body|object|false|none|
|» » BccAddresses|body|object|false|none|
|» ReplyToAddresses|body|object|false|none|
|» ReturnPath|body|object|false|none|
|» SourceArn|body|object|false|none|
|» ReturnPathArn|body|object|false|none|
|» Tags|body|object|false|none|
|» ConfigurationSetName|body|object|false|none|
|» Template|body|object|true|none|
|» TemplateArn|body|object|false|none|
|» TemplateData|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SendTemplatedEmail|
|Version|2010-12-01|

<h3 id="postsendtemplatedemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendTemplatedEmailResponse](#schemasendtemplatedemailresponse)|
|480|480|MessageRejected|[MessageRejected](#schemamessagerejected)|
|481|481|MailFromDomainNotVerifiedException|[MailFromDomainNotVerifiedException](#schemamailfromdomainnotverifiedexception)|
|482|482|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|483|483|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|484|484|ConfigurationSetSendingPausedException|[ConfigurationSetSendingPausedException](#schemaconfigurationsetsendingpausedexception)|
|485|485|AccountSendingPausedException|[AccountSendingPausedException](#schemaaccountsendingpausedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetActiveReceiptRuleSet

<a id="opIdGET_SetActiveReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetActiveReceiptRuleSet?Action=SetActiveReceiptRuleSet&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetActiveReceiptRuleSet`

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getsetactivereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|false|The name of the receipt rule set to make active. Setting this value to null disables all email receiving.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetActiveReceiptRuleSet|
|Version|2010-12-01|

<h3 id="getsetactivereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetActiveReceiptRuleSetResponse](#schemasetactivereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetActiveReceiptRuleSet

<a id="opIdPOST_SetActiveReceiptRuleSet"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetActiveReceiptRuleSet?Action=SetActiveReceiptRuleSet&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{}}'
```

`POST /#Action=SetActiveReceiptRuleSet`

<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {}
}
```

<h3 id="postsetactivereceiptruleset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetActiveReceiptRuleSetRequest](#schemasetactivereceiptrulesetrequest)|false|none|
|» RuleSetName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetActiveReceiptRuleSet|
|Version|2010-12-01|

<h3 id="postsetactivereceiptruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetActiveReceiptRuleSetResponse](#schemasetactivereceiptrulesetresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIdentityDkimEnabled

<a id="opIdGET_SetIdentityDkimEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityDkimEnabled?Identity=string&DkimEnabled=true&Action=SetIdentityDkimEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIdentityDkimEnabled`

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getsetidentitydkimenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|The identity for which DKIM signing should be enabled or disabled.|
|DkimEnabled|query|boolean|true|Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to enable DKIM signing for this identity; <code>false</code> to disable it. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetIdentityDkimEnabled|
|Version|2010-12-01|

<h3 id="getsetidentitydkimenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityDkimEnabledResponse](#schemasetidentitydkimenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIdentityDkimEnabled

<a id="opIdPOST_SetIdentityDkimEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityDkimEnabled?Action=SetIdentityDkimEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"DkimEnabled":{}}'
```

`POST /#Action=SetIdentityDkimEnabled`

<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identity": {},
  "DkimEnabled": {}
}
```

<h3 id="postsetidentitydkimenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetIdentityDkimEnabledRequest](#schemasetidentitydkimenabledrequest)|false|none|
|» Identity|body|object|true|none|
|» DkimEnabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIdentityDkimEnabled|
|Version|2010-12-01|

<h3 id="postsetidentitydkimenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityDkimEnabledResponse](#schemasetidentitydkimenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIdentityFeedbackForwardingEnabled

<a id="opIdGET_SetIdentityFeedbackForwardingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityFeedbackForwardingEnabled?Identity=string&ForwardingEnabled=true&Action=SetIdentityFeedbackForwardingEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIdentityFeedbackForwardingEnabled`

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getsetidentityfeedbackforwardingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|The identity for which to set bounce and complaint notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.|
|ForwardingEnabled|query|boolean|true|Sets whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to <code>false</code> when Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code> notification types.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetIdentityFeedbackForwardingEnabled|
|Version|2010-12-01|

<h3 id="getsetidentityfeedbackforwardingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityFeedbackForwardingEnabledResponse](#schemasetidentityfeedbackforwardingenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIdentityFeedbackForwardingEnabled

<a id="opIdPOST_SetIdentityFeedbackForwardingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityFeedbackForwardingEnabled?Action=SetIdentityFeedbackForwardingEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"ForwardingEnabled":{}}'
```

`POST /#Action=SetIdentityFeedbackForwardingEnabled`

<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identity": {},
  "ForwardingEnabled": {}
}
```

<h3 id="postsetidentityfeedbackforwardingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetIdentityFeedbackForwardingEnabledRequest](#schemasetidentityfeedbackforwardingenabledrequest)|false|none|
|» Identity|body|object|true|none|
|» ForwardingEnabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIdentityFeedbackForwardingEnabled|
|Version|2010-12-01|

<h3 id="postsetidentityfeedbackforwardingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityFeedbackForwardingEnabledResponse](#schemasetidentityfeedbackforwardingenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIdentityHeadersInNotificationsEnabled

<a id="opIdGET_SetIdentityHeadersInNotificationsEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityHeadersInNotificationsEnabled?Identity=string&NotificationType=Bounce&Enabled=true&Action=SetIdentityHeadersInNotificationsEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIdentityHeadersInNotificationsEnabled`

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getsetidentityheadersinnotificationsenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|The identity for which to enable or disable headers in notifications. Examples: <code>user@example.com</code>, <code>example.com</code>.|
|NotificationType|query|string|true|The notification type for which to enable or disable headers in notifications. |
|Enabled|query|boolean|true|<p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of <code>true</code> specifies that Amazon SES will include headers in notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in notifications.</p> <p>This value can only be set when <code>NotificationType</code> is already set to use a particular Amazon SNS topic.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|NotificationType|Bounce|
|NotificationType|Complaint|
|NotificationType|Delivery|
|Action|SetIdentityHeadersInNotificationsEnabled|
|Version|2010-12-01|

<h3 id="getsetidentityheadersinnotificationsenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityHeadersInNotificationsEnabledResponse](#schemasetidentityheadersinnotificationsenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIdentityHeadersInNotificationsEnabled

<a id="opIdPOST_SetIdentityHeadersInNotificationsEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityHeadersInNotificationsEnabled?Action=SetIdentityHeadersInNotificationsEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"NotificationType":{},"Enabled":{}}'
```

`POST /#Action=SetIdentityHeadersInNotificationsEnabled`

<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identity": {},
  "NotificationType": {},
  "Enabled": {}
}
```

<h3 id="postsetidentityheadersinnotificationsenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetIdentityHeadersInNotificationsEnabledRequest](#schemasetidentityheadersinnotificationsenabledrequest)|false|none|
|» Identity|body|object|true|none|
|» NotificationType|body|object|true|none|
|» Enabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIdentityHeadersInNotificationsEnabled|
|Version|2010-12-01|

<h3 id="postsetidentityheadersinnotificationsenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityHeadersInNotificationsEnabledResponse](#schemasetidentityheadersinnotificationsenabledresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIdentityMailFromDomain

<a id="opIdGET_SetIdentityMailFromDomain"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityMailFromDomain?Identity=string&Action=SetIdentityMailFromDomain&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIdentityMailFromDomain`

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

<h3 id="getsetidentitymailfromdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|The verified identity for which you want to enable or disable the specified custom MAIL FROM domain.|
|MailFromDomain|query|string|false|The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>), and 3) not be used to receive emails. A value of <code>null</code> disables the custom MAIL FROM setting for the identity.|
|BehaviorOnMXFailure|query|string|false|<p>The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose <code>UseDefaultValue</code>, Amazon SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose <code>RejectMessage</code>, Amazon SES will return a <code>MailFromDomainNotVerified</code> error and not send the email.</p> <p>The action specified in <code>BehaviorOnMXFailure</code> is taken when the custom MAIL FROM domain setup is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|BehaviorOnMXFailure|UseDefaultValue|
|BehaviorOnMXFailure|RejectMessage|
|Action|SetIdentityMailFromDomain|
|Version|2010-12-01|

<h3 id="getsetidentitymailfromdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityMailFromDomainResponse](#schemasetidentitymailfromdomainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIdentityMailFromDomain

<a id="opIdPOST_SetIdentityMailFromDomain"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityMailFromDomain?Action=SetIdentityMailFromDomain&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"MailFromDomain":{},"BehaviorOnMXFailure":{}}'
```

`POST /#Action=SetIdentityMailFromDomain`

<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Identity": {},
  "MailFromDomain": {},
  "BehaviorOnMXFailure": {}
}
```

<h3 id="postsetidentitymailfromdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetIdentityMailFromDomainRequest](#schemasetidentitymailfromdomainrequest)|false|none|
|» Identity|body|object|true|none|
|» MailFromDomain|body|object|false|none|
|» BehaviorOnMXFailure|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIdentityMailFromDomain|
|Version|2010-12-01|

<h3 id="postsetidentitymailfromdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityMailFromDomainResponse](#schemasetidentitymailfromdomainresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetIdentityNotificationTopic

<a id="opIdGET_SetIdentityNotificationTopic"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityNotificationTopic?Identity=string&NotificationType=Bounce&Action=SetIdentityNotificationTopic&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetIdentityNotificationTopic`

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getsetidentitynotificationtopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Identity|query|string|true|<p>The identity (email address or domain) that you want to set the Amazon SNS topic for.</p> <important> <p>You can only specify a verified identity for this parameter.</p> </important> <p>You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: <code>sender@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>|
|NotificationType|query|string|true|The type of notifications that will be published to the specified Amazon SNS topic.|
|SnsTopic|query|string|false|The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing is disabled.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|NotificationType|Bounce|
|NotificationType|Complaint|
|NotificationType|Delivery|
|Action|SetIdentityNotificationTopic|
|Version|2010-12-01|

<h3 id="getsetidentitynotificationtopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityNotificationTopicResponse](#schemasetidentitynotificationtopicresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetIdentityNotificationTopic

<a id="opIdPOST_SetIdentityNotificationTopic"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetIdentityNotificationTopic?Action=SetIdentityNotificationTopic&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Identity":{},"NotificationType":{},"SnsTopic":{}}'
```

`POST /#Action=SetIdentityNotificationTopic`

<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "Identity": {},
  "NotificationType": {},
  "SnsTopic": {}
}
```

<h3 id="postsetidentitynotificationtopic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetIdentityNotificationTopicRequest](#schemasetidentitynotificationtopicrequest)|false|none|
|» Identity|body|object|true|none|
|» NotificationType|body|object|true|none|
|» SnsTopic|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetIdentityNotificationTopic|
|Version|2010-12-01|

<h3 id="postsetidentitynotificationtopic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetIdentityNotificationTopicResponse](#schemasetidentitynotificationtopicresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetReceiptRulePosition

<a id="opIdGET_SetReceiptRulePosition"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetReceiptRulePosition?RuleSetName=string&RuleName=string&Action=SetReceiptRulePosition&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetReceiptRulePosition`

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getsetreceiptruleposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set that contains the receipt rule to reposition.|
|RuleName|query|string|true|The name of the receipt rule to reposition.|
|After|query|string|false|The name of the receipt rule after which to place the specified receipt rule.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|SetReceiptRulePosition|
|Version|2010-12-01|

<h3 id="getsetreceiptruleposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetReceiptRulePositionResponse](#schemasetreceiptrulepositionresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetReceiptRulePosition

<a id="opIdPOST_SetReceiptRulePosition"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=SetReceiptRulePosition?Action=SetReceiptRulePosition&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"RuleName":{},"After":{}}'
```

`POST /#Action=SetReceiptRulePosition`

<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "RuleName": {},
  "After": {}
}
```

<h3 id="postsetreceiptruleposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SetReceiptRulePositionRequest](#schemasetreceiptrulepositionrequest)|false|none|
|» RuleSetName|body|object|true|none|
|» RuleName|body|object|true|none|
|» After|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetReceiptRulePosition|
|Version|2010-12-01|

<h3 id="postsetreceiptruleposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetReceiptRulePositionResponse](#schemasetreceiptrulepositionresponse)|
|480|480|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|481|481|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TestRenderTemplate

<a id="opIdGET_TestRenderTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=TestRenderTemplate?TemplateName=string&TemplateData=string&Action=TestRenderTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TestRenderTemplate`

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="gettestrendertemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the template that you want to render.|
|TemplateData|query|string|true|A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|TestRenderTemplate|
|Version|2010-12-01|

<h3 id="gettestrendertemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestRenderTemplateResponse](#schematestrendertemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|481|481|InvalidRenderingParameterException|[InvalidRenderingParameterException](#schemainvalidrenderingparameterexception)|
|482|482|MissingRenderingAttributeException|[MissingRenderingAttributeException](#schemamissingrenderingattributeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TestRenderTemplate

<a id="opIdPOST_TestRenderTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=TestRenderTemplate?Action=TestRenderTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{},"TemplateData":{}}'
```

`POST /#Action=TestRenderTemplate`

<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "TemplateName": {},
  "TemplateData": {}
}
```

<h3 id="posttestrendertemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TestRenderTemplateRequest](#schematestrendertemplaterequest)|false|none|
|» TemplateName|body|object|true|none|
|» TemplateData|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TestRenderTemplate|
|Version|2010-12-01|

<h3 id="posttestrendertemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestRenderTemplateResponse](#schematestrendertemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|481|481|InvalidRenderingParameterException|[InvalidRenderingParameterException](#schemainvalidrenderingparameterexception)|
|482|482|MissingRenderingAttributeException|[MissingRenderingAttributeException](#schemamissingrenderingattributeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateAccountSendingEnabled

<a id="opIdGET_UpdateAccountSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateAccountSendingEnabled?Action=UpdateAccountSendingEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateAccountSendingEnabled`

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdateaccountsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Enabled|query|boolean|false|Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateAccountSendingEnabled|
|Version|2010-12-01|

<h3 id="getupdateaccountsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateAccountSendingEnabled

<a id="opIdPOST_UpdateAccountSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateAccountSendingEnabled?Action=UpdateAccountSendingEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Enabled":{}}'
```

`POST /#Action=UpdateAccountSendingEnabled`

<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Enabled": {}
}
```

<h3 id="postupdateaccountsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAccountSendingEnabledRequest](#schemaupdateaccountsendingenabledrequest)|false|none|
|» Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateAccountSendingEnabled|
|Version|2010-12-01|

<h3 id="postupdateaccountsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateConfigurationSetEventDestination

<a id="opIdGET_UpdateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetEventDestination?ConfigurationSetName=string&Name=%7B%7D&Enabled=%7B%7D&MatchingEventTypes=%7B%7D&KinesisFirehoseDestination=%7B%22IAMRoleARN%22%3A%7B%7D%2C%22DeliveryStreamARN%22%3A%7B%7D%7D&CloudWatchDestination=%7B%22DimensionConfigurations%22%3A%7B%7D%7D&SNSDestination=%7B%22TopicARN%22%3A%7B%7D%7D&Action=UpdateConfigurationSetEventDestination&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateConfigurationSetEventDestination`

<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that contains the event destination that you want to update.|
|EventDestination|query|object|true|The event destination object that you want to apply to the specified configuration set.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="getupdateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetEventDestinationResponse](#schemaupdateconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationDoesNotExistException|[EventDestinationDoesNotExistException](#schemaeventdestinationdoesnotexistexception)|
|482|482|InvalidCloudWatchDestinationException|[InvalidCloudWatchDestinationException](#schemainvalidcloudwatchdestinationexception)|
|483|483|InvalidFirehoseDestinationException|[InvalidFirehoseDestinationException](#schemainvalidfirehosedestinationexception)|
|484|484|InvalidSNSDestinationException|[InvalidSNSDestinationException](#schemainvalidsnsdestinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateConfigurationSetEventDestination

<a id="opIdPOST_UpdateConfigurationSetEventDestination"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetEventDestination?Action=UpdateConfigurationSetEventDestination&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"EventDestination":{"Name":{},"Enabled":{},"MatchingEventTypes":{},"KinesisFirehoseDestination":{"IAMRoleARN":{},"DeliveryStreamARN":{}},"CloudWatchDestination":{"DimensionConfigurations":{}},"SNSDestination":{"TopicARN":{}}}}'
```

`POST /#Action=UpdateConfigurationSetEventDestination`

<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "EventDestination": {
    "Name": {},
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IAMRoleARN": {},
      "DeliveryStreamARN": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SNSDestination": {
      "TopicARN": {}
    }
  }
}
```

<h3 id="postupdateconfigurationseteventdestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConfigurationSetEventDestinationRequest](#schemaupdateconfigurationseteventdestinationrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» EventDestination|body|object|true|none|
|» » Name|body|object|true|none|
|» » Enabled|body|object|false|none|
|» » MatchingEventTypes|body|object|true|none|
|» » KinesisFirehoseDestination|body|object|false|none|
|» » » IAMRoleARN|body|object|true|none|
|» » » DeliveryStreamARN|body|object|true|none|
|» » CloudWatchDestination|body|object|false|none|
|» » » DimensionConfigurations|body|object|true|none|
|» » SNSDestination|body|object|false|none|
|» » » TopicARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateConfigurationSetEventDestination|
|Version|2010-12-01|

<h3 id="postupdateconfigurationseteventdestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetEventDestinationResponse](#schemaupdateconfigurationseteventdestinationresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|EventDestinationDoesNotExistException|[EventDestinationDoesNotExistException](#schemaeventdestinationdoesnotexistexception)|
|482|482|InvalidCloudWatchDestinationException|[InvalidCloudWatchDestinationException](#schemainvalidcloudwatchdestinationexception)|
|483|483|InvalidFirehoseDestinationException|[InvalidFirehoseDestinationException](#schemainvalidfirehosedestinationexception)|
|484|484|InvalidSNSDestinationException|[InvalidSNSDestinationException](#schemainvalidsnsdestinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateConfigurationSetReputationMetricsEnabled

<a id="opIdGET_UpdateConfigurationSetReputationMetricsEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetReputationMetricsEnabled?ConfigurationSetName=string&Enabled=true&Action=UpdateConfigurationSetReputationMetricsEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateConfigurationSetReputationMetricsEnabled`

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdateconfigurationsetreputationmetricsenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that you want to update.|
|Enabled|query|boolean|true|Describes whether or not Amazon SES will publish reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateConfigurationSetReputationMetricsEnabled|
|Version|2010-12-01|

<h3 id="getupdateconfigurationsetreputationmetricsenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateConfigurationSetReputationMetricsEnabled

<a id="opIdPOST_UpdateConfigurationSetReputationMetricsEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetReputationMetricsEnabled?Action=UpdateConfigurationSetReputationMetricsEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"Enabled":{}}'
```

`POST /#Action=UpdateConfigurationSetReputationMetricsEnabled`

<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "Enabled": {}
}
```

<h3 id="postupdateconfigurationsetreputationmetricsenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConfigurationSetReputationMetricsEnabledRequest](#schemaupdateconfigurationsetreputationmetricsenabledrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» Enabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateConfigurationSetReputationMetricsEnabled|
|Version|2010-12-01|

<h3 id="postupdateconfigurationsetreputationmetricsenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateConfigurationSetSendingEnabled

<a id="opIdGET_UpdateConfigurationSetSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetSendingEnabled?ConfigurationSetName=string&Enabled=true&Action=UpdateConfigurationSetSendingEnabled&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateConfigurationSetSendingEnabled`

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdateconfigurationsetsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set that you want to update.|
|Enabled|query|boolean|true|Describes whether email sending is enabled or disabled for the configuration set. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateConfigurationSetSendingEnabled|
|Version|2010-12-01|

<h3 id="getupdateconfigurationsetsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateConfigurationSetSendingEnabled

<a id="opIdPOST_UpdateConfigurationSetSendingEnabled"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetSendingEnabled?Action=UpdateConfigurationSetSendingEnabled&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"Enabled":{}}'
```

`POST /#Action=UpdateConfigurationSetSendingEnabled`

<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "Enabled": {}
}
```

<h3 id="postupdateconfigurationsetsendingenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConfigurationSetSendingEnabledRequest](#schemaupdateconfigurationsetsendingenabledrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» Enabled|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateConfigurationSetSendingEnabled|
|Version|2010-12-01|

<h3 id="postupdateconfigurationsetsendingenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateConfigurationSetTrackingOptions

<a id="opIdGET_UpdateConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetTrackingOptions?ConfigurationSetName=string&CustomRedirectDomain=%7B%7D&Action=UpdateConfigurationSetTrackingOptions&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateConfigurationSetTrackingOptions`

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

<h3 id="getupdateconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConfigurationSetName|query|string|true|The name of the configuration set for which you want to update the custom tracking domain.|
|TrackingOptions|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="getupdateconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetTrackingOptionsResponse](#schemaupdateconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsDoesNotExistException|[TrackingOptionsDoesNotExistException](#schematrackingoptionsdoesnotexistexception)|
|482|482|InvalidTrackingOptionsException|[InvalidTrackingOptionsException](#schemainvalidtrackingoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateConfigurationSetTrackingOptions

<a id="opIdPOST_UpdateConfigurationSetTrackingOptions"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateConfigurationSetTrackingOptions?Action=UpdateConfigurationSetTrackingOptions&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ConfigurationSetName":{},"TrackingOptions":{"CustomRedirectDomain":{}}}'
```

`POST /#Action=UpdateConfigurationSetTrackingOptions`

<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>

> Body parameter

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  }
}
```

<h3 id="postupdateconfigurationsettrackingoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateConfigurationSetTrackingOptionsRequest](#schemaupdateconfigurationsettrackingoptionsrequest)|false|none|
|» ConfigurationSetName|body|object|true|none|
|» TrackingOptions|body|[TrackingOptions](#schematrackingoptions)|true|<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateConfigurationSetTrackingOptions|
|Version|2010-12-01|

<h3 id="postupdateconfigurationsettrackingoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationSetTrackingOptionsResponse](#schemaupdateconfigurationsettrackingoptionsresponse)|
|480|480|ConfigurationSetDoesNotExistException|[ConfigurationSetDoesNotExistException](#schemaconfigurationsetdoesnotexistexception)|
|481|481|TrackingOptionsDoesNotExistException|[TrackingOptionsDoesNotExistException](#schematrackingoptionsdoesnotexistexception)|
|482|482|InvalidTrackingOptionsException|[InvalidTrackingOptionsException](#schemainvalidtrackingoptionsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateCustomVerificationEmailTemplate

<a id="opIdGET_UpdateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateCustomVerificationEmailTemplate?TemplateName=string&Action=UpdateCustomVerificationEmailTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateCustomVerificationEmailTemplate`

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdatecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TemplateName|query|string|true|The name of the custom verification email template that you want to update.|
|FromEmailAddress|query|string|false|The email address that the custom verification email is sent from.|
|TemplateSubject|query|string|false|The subject line of the custom verification email.|
|TemplateContent|query|string|false|The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.|
|SuccessRedirectionURL|query|string|false|The URL that the recipient of the verification email is sent to if his or her address is successfully verified.|
|FailureRedirectionURL|query|string|false|The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="getupdatecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|
|481|481|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|482|482|CustomVerificationEmailInvalidContentException|[CustomVerificationEmailInvalidContentException](#schemacustomverificationemailinvalidcontentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateCustomVerificationEmailTemplate

<a id="opIdPOST_UpdateCustomVerificationEmailTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateCustomVerificationEmailTemplate?Action=UpdateCustomVerificationEmailTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TemplateName":{},"FromEmailAddress":{},"TemplateSubject":{},"TemplateContent":{},"SuccessRedirectionURL":{},"FailureRedirectionURL":{}}'
```

`POST /#Action=UpdateCustomVerificationEmailTemplate`

<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

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

<h3 id="postupdatecustomverificationemailtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateCustomVerificationEmailTemplateRequest](#schemaupdatecustomverificationemailtemplaterequest)|false|none|
|» TemplateName|body|object|true|none|
|» FromEmailAddress|body|object|false|none|
|» TemplateSubject|body|object|false|none|
|» TemplateContent|body|object|false|none|
|» SuccessRedirectionURL|body|object|false|none|
|» FailureRedirectionURL|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateCustomVerificationEmailTemplate|
|Version|2010-12-01|

<h3 id="postupdatecustomverificationemailtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CustomVerificationEmailTemplateDoesNotExistException|[CustomVerificationEmailTemplateDoesNotExistException](#schemacustomverificationemailtemplatedoesnotexistexception)|
|481|481|FromEmailAddressNotVerifiedException|[FromEmailAddressNotVerifiedException](#schemafromemailaddressnotverifiedexception)|
|482|482|CustomVerificationEmailInvalidContentException|[CustomVerificationEmailInvalidContentException](#schemacustomverificationemailinvalidcontentexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateReceiptRule

<a id="opIdGET_UpdateReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateReceiptRule?RuleSetName=string&Name=%7B%7D&Enabled=%7B%7D&TlsPolicy=%7B%7D&Recipients=%7B%7D&Actions=%7B%7D&ScanEnabled=%7B%7D&Action=UpdateReceiptRule&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateReceiptRule`

<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdatereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleSetName|query|string|true|The name of the receipt rule set that the receipt rule belongs to.|
|Rule|query|object|true|A data structure that contains the updated receipt rule information.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateReceiptRule|
|Version|2010-12-01|

<h3 id="getupdatereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReceiptRuleResponse](#schemaupdatereceiptruleresponse)|
|480|480|InvalidSnsTopicException|[InvalidSnsTopicException](#schemainvalidsnstopicexception)|
|481|481|InvalidS3ConfigurationException|[InvalidS3ConfigurationException](#schemainvalids3configurationexception)|
|482|482|InvalidLambdaFunctionException|[InvalidLambdaFunctionException](#schemainvalidlambdafunctionexception)|
|483|483|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|484|484|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateReceiptRule

<a id="opIdPOST_UpdateReceiptRule"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateReceiptRule?Action=UpdateReceiptRule&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleSetName":{},"Rule":{"Name":{},"Enabled":{},"TlsPolicy":{},"Recipients":{},"Actions":{},"ScanEnabled":{}}}'
```

`POST /#Action=UpdateReceiptRule`

<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "RuleSetName": {},
  "Rule": {
    "Name": {},
    "Enabled": {},
    "TlsPolicy": {},
    "Recipients": {},
    "Actions": {},
    "ScanEnabled": {}
  }
}
```

<h3 id="postupdatereceiptrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateReceiptRuleRequest](#schemaupdatereceiptrulerequest)|false|none|
|» RuleSetName|body|object|true|none|
|» Rule|body|object|true|none|
|» » Name|body|object|true|none|
|» » Enabled|body|object|false|none|
|» » TlsPolicy|body|object|false|none|
|» » Recipients|body|object|false|none|
|» » Actions|body|object|false|none|
|» » ScanEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateReceiptRule|
|Version|2010-12-01|

<h3 id="postupdatereceiptrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateReceiptRuleResponse](#schemaupdatereceiptruleresponse)|
|480|480|InvalidSnsTopicException|[InvalidSnsTopicException](#schemainvalidsnstopicexception)|
|481|481|InvalidS3ConfigurationException|[InvalidS3ConfigurationException](#schemainvalids3configurationexception)|
|482|482|InvalidLambdaFunctionException|[InvalidLambdaFunctionException](#schemainvalidlambdafunctionexception)|
|483|483|RuleSetDoesNotExistException|[RuleSetDoesNotExistException](#schemarulesetdoesnotexistexception)|
|484|484|RuleDoesNotExistException|[RuleDoesNotExistException](#schemaruledoesnotexistexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateTemplate

<a id="opIdGET_UpdateTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateTemplate?TemplateName=%7B%7D&SubjectPart=%7B%7D&TextPart=%7B%7D&HtmlPart=%7B%7D&Action=UpdateTemplate&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateTemplate`

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getupdatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Template|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateTemplate|
|Version|2010-12-01|

<h3 id="getupdatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTemplateResponse](#schemaupdatetemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|481|481|InvalidTemplateException|[InvalidTemplateException](#schemainvalidtemplateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateTemplate

<a id="opIdPOST_UpdateTemplate"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=UpdateTemplate?Action=UpdateTemplate&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Template":{"TemplateName":{},"SubjectPart":{},"TextPart":{},"HtmlPart":{}}}'
```

`POST /#Action=UpdateTemplate`

<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Template": {
    "TemplateName": {},
    "SubjectPart": {},
    "TextPart": {},
    "HtmlPart": {}
  }
}
```

<h3 id="postupdatetemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateTemplateRequest](#schemaupdatetemplaterequest)|false|none|
|» Template|body|[Template](#schematemplate)|true|The content of the email, composed of a subject line, an HTML part, and a text-only part.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateTemplate|
|Version|2010-12-01|

<h3 id="postupdatetemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTemplateResponse](#schemaupdatetemplateresponse)|
|480|480|TemplateDoesNotExistException|[TemplateDoesNotExistException](#schematemplatedoesnotexistexception)|
|481|481|InvalidTemplateException|[InvalidTemplateException](#schemainvalidtemplateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_VerifyDomainDkim

<a id="opIdGET_VerifyDomainDkim"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyDomainDkim?Domain=string&Action=VerifyDomainDkim&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=VerifyDomainDkim`

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getverifydomaindkim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Domain|query|string|true|The name of the domain to be verified for Easy DKIM signing.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|VerifyDomainDkim|
|Version|2010-12-01|

<h3 id="getverifydomaindkim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyDomainDkimResponse](#schemaverifydomaindkimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_VerifyDomainDkim

<a id="opIdPOST_VerifyDomainDkim"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyDomainDkim?Action=VerifyDomainDkim&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Domain":{}}'
```

`POST /#Action=VerifyDomainDkim`

<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Domain": {}
}
```

<h3 id="postverifydomaindkim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyDomainDkimRequest](#schemaverifydomaindkimrequest)|false|none|
|» Domain|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|VerifyDomainDkim|
|Version|2010-12-01|

<h3 id="postverifydomaindkim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyDomainDkimResponse](#schemaverifydomaindkimresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_VerifyDomainIdentity

<a id="opIdGET_VerifyDomainIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyDomainIdentity?Domain=string&Action=VerifyDomainIdentity&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=VerifyDomainIdentity`

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getverifydomainidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Domain|query|string|true|The domain to be verified.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|VerifyDomainIdentity|
|Version|2010-12-01|

<h3 id="getverifydomainidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyDomainIdentityResponse](#schemaverifydomainidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_VerifyDomainIdentity

<a id="opIdPOST_VerifyDomainIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyDomainIdentity?Action=VerifyDomainIdentity&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Domain":{}}'
```

`POST /#Action=VerifyDomainIdentity`

<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "Domain": {}
}
```

<h3 id="postverifydomainidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyDomainIdentityRequest](#schemaverifydomainidentityrequest)|false|none|
|» Domain|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|VerifyDomainIdentity|
|Version|2010-12-01|

<h3 id="postverifydomainidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyDomainIdentityResponse](#schemaverifydomainidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_VerifyEmailAddress

<a id="opIdGET_VerifyEmailAddress"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyEmailAddress?EmailAddress=string&Action=VerifyEmailAddress&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=VerifyEmailAddress`

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

<h3 id="getverifyemailaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|query|string|true|The email address to be verified.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|VerifyEmailAddress|
|Version|2010-12-01|

<h3 id="getverifyemailaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_VerifyEmailAddress

<a id="opIdPOST_VerifyEmailAddress"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyEmailAddress?Action=VerifyEmailAddress&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EmailAddress":{}}'
```

`POST /#Action=VerifyEmailAddress`

Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.

> Body parameter

```json
{
  "EmailAddress": {}
}
```

<h3 id="postverifyemailaddress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyEmailAddressRequest](#schemaverifyemailaddressrequest)|false|none|
|» EmailAddress|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|VerifyEmailAddress|
|Version|2010-12-01|

<h3 id="postverifyemailaddress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_VerifyEmailIdentity

<a id="opIdGET_VerifyEmailIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyEmailIdentity?EmailAddress=string&Action=VerifyEmailIdentity&Version=2010-12-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=VerifyEmailIdentity`

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

<h3 id="getverifyemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EmailAddress|query|string|true|The email address to be verified.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|VerifyEmailIdentity|
|Version|2010-12-01|

<h3 id="getverifyemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyEmailIdentityResponse](#schemaverifyemailidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_VerifyEmailIdentity

<a id="opIdPOST_VerifyEmailIdentity"></a>

> Code samples

```bash
curl 'https://email.us-east-1.amazonaws.com/#Action=VerifyEmailIdentity?Action=VerifyEmailIdentity&Version=2010-12-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EmailAddress":{}}'
```

`POST /#Action=VerifyEmailIdentity`

<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>

> Body parameter

```json
{
  "EmailAddress": {}
}
```

<h3 id="postverifyemailidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[VerifyEmailIdentityRequest](#schemaverifyemailidentityrequest)|false|none|
|» EmailAddress|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|VerifyEmailIdentity|
|Version|2010-12-01|

<h3 id="postverifyemailidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[VerifyEmailIdentityResponse](#schemaverifyemailidentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CloneReceiptRuleSetResponse">CloneReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclonereceiptrulesetresponse"></a>
<a id="schema_CloneReceiptRuleSetResponse"></a>
<a id="tocSclonereceiptrulesetresponse"></a>
<a id="tocsclonereceiptrulesetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_RuleSetDoesNotExistException">RuleSetDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemarulesetdoesnotexistexception"></a>
<a id="schema_RuleSetDoesNotExistException"></a>
<a id="tocSrulesetdoesnotexistexception"></a>
<a id="tocsrulesetdoesnotexistexception"></a>

```json
null
```

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

<h2 id="tocS_CreateConfigurationSetResponse">CreateConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetresponse"></a>
<a id="schema_CreateConfigurationSetResponse"></a>
<a id="tocScreateconfigurationsetresponse"></a>
<a id="tocscreateconfigurationsetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_ConfigurationSetName">ConfigurationSetName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetname"></a>
<a id="schema_ConfigurationSetName"></a>
<a id="tocSconfigurationsetname"></a>
<a id="tocsconfigurationsetname"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationSetAlreadyExistsException">ConfigurationSetAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetalreadyexistsexception"></a>
<a id="schema_ConfigurationSetAlreadyExistsException"></a>
<a id="tocSconfigurationsetalreadyexistsexception"></a>
<a id="tocsconfigurationsetalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidConfigurationSetException">InvalidConfigurationSetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconfigurationsetexception"></a>
<a id="schema_InvalidConfigurationSetException"></a>
<a id="tocSinvalidconfigurationsetexception"></a>
<a id="tocsinvalidconfigurationsetexception"></a>

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

An empty element returned on a successful request.

<h2 id="tocS_EventDestinationName">EventDestinationName</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationname"></a>
<a id="schema_EventDestinationName"></a>
<a id="tocSeventdestinationname"></a>
<a id="tocseventdestinationname"></a>

```json
"string"
```

<h2 id="tocS_Enabled">Enabled</h2>
<!-- backwards compatibility -->
<a id="schemaenabled"></a>
<a id="schema_Enabled"></a>
<a id="tocSenabled"></a>
<a id="tocsenabled"></a>

```json
true
```

<h2 id="tocS_EventTypes">EventTypes</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypes"></a>
<a id="schema_EventTypes"></a>
<a id="tocSeventtypes"></a>
<a id="tocseventtypes"></a>

```json
[
  "send"
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
  "IAMRoleARN": {},
  "DeliveryStreamARN": {}
}
```

<p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IAMRoleARN|object|true|none|none|
|DeliveryStreamARN|object|true|none|none|

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

<p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionConfigurations|object|true|none|none|

<h2 id="tocS_SNSDestination">SNSDestination</h2>
<!-- backwards compatibility -->
<a id="schemasnsdestination"></a>
<a id="schema_SNSDestination"></a>
<a id="tocSsnsdestination"></a>
<a id="tocssnsdestination"></a>

```json
{
  "TopicARN": {}
}
```

<p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicARN|object|true|none|none|

<h2 id="tocS_ConfigurationSetDoesNotExistException">ConfigurationSetDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetdoesnotexistexception"></a>
<a id="schema_ConfigurationSetDoesNotExistException"></a>
<a id="tocSconfigurationsetdoesnotexistexception"></a>
<a id="tocsconfigurationsetdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_EventDestinationAlreadyExistsException">EventDestinationAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationalreadyexistsexception"></a>
<a id="schema_EventDestinationAlreadyExistsException"></a>
<a id="tocSeventdestinationalreadyexistsexception"></a>
<a id="tocseventdestinationalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidCloudWatchDestinationException">InvalidCloudWatchDestinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcloudwatchdestinationexception"></a>
<a id="schema_InvalidCloudWatchDestinationException"></a>
<a id="tocSinvalidcloudwatchdestinationexception"></a>
<a id="tocsinvalidcloudwatchdestinationexception"></a>

```json
null
```

<h2 id="tocS_InvalidFirehoseDestinationException">InvalidFirehoseDestinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfirehosedestinationexception"></a>
<a id="schema_InvalidFirehoseDestinationException"></a>
<a id="tocSinvalidfirehosedestinationexception"></a>
<a id="tocsinvalidfirehosedestinationexception"></a>

```json
null
```

<h2 id="tocS_InvalidSNSDestinationException">InvalidSNSDestinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnsdestinationexception"></a>
<a id="schema_InvalidSNSDestinationException"></a>
<a id="tocSinvalidsnsdestinationexception"></a>
<a id="tocsinvalidsnsdestinationexception"></a>

```json
null
```

<h2 id="tocS_CreateConfigurationSetTrackingOptionsResponse">CreateConfigurationSetTrackingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsettrackingoptionsresponse"></a>
<a id="schema_CreateConfigurationSetTrackingOptionsResponse"></a>
<a id="tocScreateconfigurationsettrackingoptionsresponse"></a>
<a id="tocscreateconfigurationsettrackingoptionsresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_CustomRedirectDomain">CustomRedirectDomain</h2>
<!-- backwards compatibility -->
<a id="schemacustomredirectdomain"></a>
<a id="schema_CustomRedirectDomain"></a>
<a id="tocScustomredirectdomain"></a>
<a id="tocscustomredirectdomain"></a>

```json
"string"
```

<h2 id="tocS_TrackingOptionsAlreadyExistsException">TrackingOptionsAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schematrackingoptionsalreadyexistsexception"></a>
<a id="schema_TrackingOptionsAlreadyExistsException"></a>
<a id="tocStrackingoptionsalreadyexistsexception"></a>
<a id="tocstrackingoptionsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidTrackingOptionsException">InvalidTrackingOptionsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtrackingoptionsexception"></a>
<a id="schema_InvalidTrackingOptionsException"></a>
<a id="tocSinvalidtrackingoptionsexception"></a>
<a id="tocsinvalidtrackingoptionsexception"></a>

```json
null
```

<h2 id="tocS_CustomVerificationEmailTemplateAlreadyExistsException">CustomVerificationEmailTemplateAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplatealreadyexistsexception"></a>
<a id="schema_CustomVerificationEmailTemplateAlreadyExistsException"></a>
<a id="tocScustomverificationemailtemplatealreadyexistsexception"></a>
<a id="tocscustomverificationemailtemplatealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_FromEmailAddressNotVerifiedException">FromEmailAddressNotVerifiedException</h2>
<!-- backwards compatibility -->
<a id="schemafromemailaddressnotverifiedexception"></a>
<a id="schema_FromEmailAddressNotVerifiedException"></a>
<a id="tocSfromemailaddressnotverifiedexception"></a>
<a id="tocsfromemailaddressnotverifiedexception"></a>

```json
null
```

<h2 id="tocS_CustomVerificationEmailInvalidContentException">CustomVerificationEmailInvalidContentException</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailinvalidcontentexception"></a>
<a id="schema_CustomVerificationEmailInvalidContentException"></a>
<a id="tocScustomverificationemailinvalidcontentexception"></a>
<a id="tocscustomverificationemailinvalidcontentexception"></a>

```json
null
```

<h2 id="tocS_CreateReceiptFilterResponse">CreateReceiptFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptfilterresponse"></a>
<a id="schema_CreateReceiptFilterResponse"></a>
<a id="tocScreatereceiptfilterresponse"></a>
<a id="tocscreatereceiptfilterresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_ReceiptFilterName">ReceiptFilterName</h2>
<!-- backwards compatibility -->
<a id="schemareceiptfiltername"></a>
<a id="schema_ReceiptFilterName"></a>
<a id="tocSreceiptfiltername"></a>
<a id="tocsreceiptfiltername"></a>

```json
"string"
```

<h2 id="tocS_ReceiptIpFilter">ReceiptIpFilter</h2>
<!-- backwards compatibility -->
<a id="schemareceiptipfilter"></a>
<a id="schema_ReceiptIpFilter"></a>
<a id="tocSreceiptipfilter"></a>
<a id="tocsreceiptipfilter"></a>

```json
{
  "Policy": {},
  "Cidr": {}
}
```

<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|
|Cidr|object|true|none|none|

<h2 id="tocS_CreateReceiptRuleResponse">CreateReceiptRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptruleresponse"></a>
<a id="schema_CreateReceiptRuleResponse"></a>
<a id="tocScreatereceiptruleresponse"></a>
<a id="tocscreatereceiptruleresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_ReceiptRuleName">ReceiptRuleName</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrulename"></a>
<a id="schema_ReceiptRuleName"></a>
<a id="tocSreceiptrulename"></a>
<a id="tocsreceiptrulename"></a>

```json
"string"
```

<h2 id="tocS_TlsPolicy">TlsPolicy</h2>
<!-- backwards compatibility -->
<a id="schematlspolicy"></a>
<a id="schema_TlsPolicy"></a>
<a id="tocStlspolicy"></a>
<a id="tocstlspolicy"></a>

```json
"Require"
```

<h2 id="tocS_RecipientsList">RecipientsList</h2>
<!-- backwards compatibility -->
<a id="schemarecipientslist"></a>
<a id="schema_RecipientsList"></a>
<a id="tocSrecipientslist"></a>
<a id="tocsrecipientslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReceiptActionsList">ReceiptActionsList</h2>
<!-- backwards compatibility -->
<a id="schemareceiptactionslist"></a>
<a id="schema_ReceiptActionsList"></a>
<a id="tocSreceiptactionslist"></a>
<a id="tocsreceiptactionslist"></a>

```json
[
  {
    "S3Action": {
      "TopicArn": {},
      "BucketName": {},
      "ObjectKeyPrefix": {},
      "KmsKeyArn": {}
    },
    "BounceAction": {
      "TopicArn": {},
      "SmtpReplyCode": {},
      "StatusCode": {},
      "Message": {},
      "Sender": {}
    },
    "WorkmailAction": {
      "TopicArn": {},
      "OrganizationArn": {}
    },
    "LambdaAction": {
      "TopicArn": {},
      "FunctionArn": {},
      "InvocationType": {}
    },
    "StopAction": {
      "Scope": {},
      "TopicArn": {}
    },
    "AddHeaderAction": {
      "HeaderName": {},
      "HeaderValue": {}
    },
    "SNSAction": {
      "TopicArn": {},
      "Encoding": {}
    }
  }
]
```

<h2 id="tocS_InvalidSnsTopicException">InvalidSnsTopicException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsnstopicexception"></a>
<a id="schema_InvalidSnsTopicException"></a>
<a id="tocSinvalidsnstopicexception"></a>
<a id="tocsinvalidsnstopicexception"></a>

```json
null
```

<h2 id="tocS_InvalidS3ConfigurationException">InvalidS3ConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalids3configurationexception"></a>
<a id="schema_InvalidS3ConfigurationException"></a>
<a id="tocSinvalids3configurationexception"></a>
<a id="tocsinvalids3configurationexception"></a>

```json
null
```

<h2 id="tocS_InvalidLambdaFunctionException">InvalidLambdaFunctionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlambdafunctionexception"></a>
<a id="schema_InvalidLambdaFunctionException"></a>
<a id="tocSinvalidlambdafunctionexception"></a>
<a id="tocsinvalidlambdafunctionexception"></a>

```json
null
```

<h2 id="tocS_RuleDoesNotExistException">RuleDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaruledoesnotexistexception"></a>
<a id="schema_RuleDoesNotExistException"></a>
<a id="tocSruledoesnotexistexception"></a>
<a id="tocsruledoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_CreateReceiptRuleSetResponse">CreateReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptrulesetresponse"></a>
<a id="schema_CreateReceiptRuleSetResponse"></a>
<a id="tocScreatereceiptrulesetresponse"></a>
<a id="tocscreatereceiptrulesetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_CreateTemplateResponse">CreateTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplateresponse"></a>
<a id="schema_CreateTemplateResponse"></a>
<a id="tocScreatetemplateresponse"></a>
<a id="tocscreatetemplateresponse"></a>

```json
{}
```

<h2 id="tocS_TemplateName">TemplateName</h2>
<!-- backwards compatibility -->
<a id="schematemplatename"></a>
<a id="schema_TemplateName"></a>
<a id="tocStemplatename"></a>
<a id="tocstemplatename"></a>

```json
"string"
```

<h2 id="tocS_SubjectPart">SubjectPart</h2>
<!-- backwards compatibility -->
<a id="schemasubjectpart"></a>
<a id="schema_SubjectPart"></a>
<a id="tocSsubjectpart"></a>
<a id="tocssubjectpart"></a>

```json
"string"
```

<h2 id="tocS_TextPart">TextPart</h2>
<!-- backwards compatibility -->
<a id="schematextpart"></a>
<a id="schema_TextPart"></a>
<a id="tocStextpart"></a>
<a id="tocstextpart"></a>

```json
"string"
```

<h2 id="tocS_HtmlPart">HtmlPart</h2>
<!-- backwards compatibility -->
<a id="schemahtmlpart"></a>
<a id="schema_HtmlPart"></a>
<a id="tocShtmlpart"></a>
<a id="tocshtmlpart"></a>

```json
"string"
```

<h2 id="tocS_InvalidTemplateException">InvalidTemplateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtemplateexception"></a>
<a id="schema_InvalidTemplateException"></a>
<a id="tocSinvalidtemplateexception"></a>
<a id="tocsinvalidtemplateexception"></a>

```json
null
```

<h2 id="tocS_DeleteConfigurationSetResponse">DeleteConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetresponse"></a>
<a id="schema_DeleteConfigurationSetResponse"></a>
<a id="tocSdeleteconfigurationsetresponse"></a>
<a id="tocsdeleteconfigurationsetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_DeleteConfigurationSetEventDestinationResponse">DeleteConfigurationSetEventDestinationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationresponse"></a>
<a id="schema_DeleteConfigurationSetEventDestinationResponse"></a>
<a id="tocSdeleteconfigurationseteventdestinationresponse"></a>
<a id="tocsdeleteconfigurationseteventdestinationresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_EventDestinationDoesNotExistException">EventDestinationDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaeventdestinationdoesnotexistexception"></a>
<a id="schema_EventDestinationDoesNotExistException"></a>
<a id="tocSeventdestinationdoesnotexistexception"></a>
<a id="tocseventdestinationdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_DeleteConfigurationSetTrackingOptionsResponse">DeleteConfigurationSetTrackingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsettrackingoptionsresponse"></a>
<a id="schema_DeleteConfigurationSetTrackingOptionsResponse"></a>
<a id="tocSdeleteconfigurationsettrackingoptionsresponse"></a>
<a id="tocsdeleteconfigurationsettrackingoptionsresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_TrackingOptionsDoesNotExistException">TrackingOptionsDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schematrackingoptionsdoesnotexistexception"></a>
<a id="schema_TrackingOptionsDoesNotExistException"></a>
<a id="tocStrackingoptionsdoesnotexistexception"></a>
<a id="tocstrackingoptionsdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_DeleteIdentityResponse">DeleteIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentityresponse"></a>
<a id="schema_DeleteIdentityResponse"></a>
<a id="tocSdeleteidentityresponse"></a>
<a id="tocsdeleteidentityresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_DeleteIdentityPolicyResponse">DeleteIdentityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentitypolicyresponse"></a>
<a id="schema_DeleteIdentityPolicyResponse"></a>
<a id="tocSdeleteidentitypolicyresponse"></a>
<a id="tocsdeleteidentitypolicyresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_DeleteReceiptFilterResponse">DeleteReceiptFilterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptfilterresponse"></a>
<a id="schema_DeleteReceiptFilterResponse"></a>
<a id="tocSdeletereceiptfilterresponse"></a>
<a id="tocsdeletereceiptfilterresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_DeleteReceiptRuleResponse">DeleteReceiptRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptruleresponse"></a>
<a id="schema_DeleteReceiptRuleResponse"></a>
<a id="tocSdeletereceiptruleresponse"></a>
<a id="tocsdeletereceiptruleresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_DeleteReceiptRuleSetResponse">DeleteReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptrulesetresponse"></a>
<a id="schema_DeleteReceiptRuleSetResponse"></a>
<a id="tocSdeletereceiptrulesetresponse"></a>
<a id="tocsdeletereceiptrulesetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_CannotDeleteException">CannotDeleteException</h2>
<!-- backwards compatibility -->
<a id="schemacannotdeleteexception"></a>
<a id="schema_CannotDeleteException"></a>
<a id="tocScannotdeleteexception"></a>
<a id="tocscannotdeleteexception"></a>

```json
null
```

<h2 id="tocS_DeleteTemplateResponse">DeleteTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetemplateresponse"></a>
<a id="schema_DeleteTemplateResponse"></a>
<a id="tocSdeletetemplateresponse"></a>
<a id="tocsdeletetemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeActiveReceiptRuleSetResponse">DescribeActiveReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivereceiptrulesetresponse"></a>
<a id="schema_DescribeActiveReceiptRuleSetResponse"></a>
<a id="tocSdescribeactivereceiptrulesetresponse"></a>
<a id="tocsdescribeactivereceiptrulesetresponse"></a>

```json
{
  "Metadata": {
    "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
    "Name": "default-rule-set"
  },
  "Rules": [
    {
      "Actions": [
        {
          "S3Action": {
            "BucketName": "MyBucket",
            "ObjectKeyPrefix": "email"
          }
        }
      ],
      "Enabled": true,
      "Name": "MyRule",
      "ScanEnabled": true,
      "TlsPolicy": "Optional"
    }
  ]
}
```

Represents the metadata and receipt rules for the receipt rule set that is currently active.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_DescribeConfigurationSetResponse">DescribeConfigurationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsetresponse"></a>
<a id="schema_DescribeConfigurationSetResponse"></a>
<a id="tocSdescribeconfigurationsetresponse"></a>
<a id="tocsdescribeconfigurationsetresponse"></a>

```json
{
  "ConfigurationSet": {
    "Name": {}
  },
  "EventDestinations": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  },
  "DeliveryOptions": {
    "TlsPolicy": {}
  },
  "ReputationOptions": {
    "SendingEnabled": {},
    "ReputationMetricsEnabled": {},
    "LastFreshStart": {}
  }
}
```

Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSet|object|false|none|none|
|EventDestinations|object|false|none|none|
|TrackingOptions|object|false|none|none|
|DeliveryOptions|[DeliveryOptions](#schemadeliveryoptions)|false|none|Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).|
|ReputationOptions|object|false|none|none|

<h2 id="tocS_ConfigurationSetAttribute">ConfigurationSetAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetattribute"></a>
<a id="schema_ConfigurationSetAttribute"></a>
<a id="tocSconfigurationsetattribute"></a>
<a id="tocsconfigurationsetattribute"></a>

```json
"eventDestinations"
```

<h2 id="tocS_DescribeReceiptRuleResponse">DescribeReceiptRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereceiptruleresponse"></a>
<a id="schema_DescribeReceiptRuleResponse"></a>
<a id="tocSdescribereceiptruleresponse"></a>
<a id="tocsdescribereceiptruleresponse"></a>

```json
{
  "Rule": {
    "Actions": [
      {
        "S3Action": {
          "BucketName": "MyBucket",
          "ObjectKeyPrefix": "email"
        }
      }
    ],
    "Enabled": true,
    "Name": "MyRule",
    "ScanEnabled": true,
    "TlsPolicy": "Optional"
  }
}
```

Represents the details of a receipt rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|false|none|none|

<h2 id="tocS_DescribeReceiptRuleSetResponse">DescribeReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereceiptrulesetresponse"></a>
<a id="schema_DescribeReceiptRuleSetResponse"></a>
<a id="tocSdescribereceiptrulesetresponse"></a>
<a id="tocsdescribereceiptrulesetresponse"></a>

```json
{
  "Metadata": {
    "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
    "Name": "MyRuleSet"
  },
  "Rules": [
    {
      "Actions": [
        {
          "S3Action": {
            "BucketName": "MyBucket",
            "ObjectKeyPrefix": "email"
          }
        }
      ],
      "Enabled": true,
      "Name": "MyRule",
      "ScanEnabled": true,
      "TlsPolicy": "Optional"
    }
  ]
}
```

Represents the details of the specified receipt rule set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metadata|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_GetAccountSendingEnabledResponse">GetAccountSendingEnabledResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountsendingenabledresponse"></a>
<a id="schema_GetAccountSendingEnabledResponse"></a>
<a id="tocSgetaccountsendingenabledresponse"></a>
<a id="tocsgetaccountsendingenabledresponse"></a>

```json
{
  "Enabled": true
}
```

Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

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

The content of the custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|FromEmailAddress|object|false|none|none|
|TemplateSubject|object|false|none|none|
|TemplateContent|object|false|none|none|
|SuccessRedirectionURL|object|false|none|none|
|FailureRedirectionURL|object|false|none|none|

<h2 id="tocS_CustomVerificationEmailTemplateDoesNotExistException">CustomVerificationEmailTemplateDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplatedoesnotexistexception"></a>
<a id="schema_CustomVerificationEmailTemplateDoesNotExistException"></a>
<a id="tocScustomverificationemailtemplatedoesnotexistexception"></a>
<a id="tocscustomverificationemailtemplatedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_GetIdentityDkimAttributesResponse">GetIdentityDkimAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitydkimattributesresponse"></a>
<a id="schema_GetIdentityDkimAttributesResponse"></a>
<a id="tocSgetidentitydkimattributesresponse"></a>
<a id="tocsgetidentitydkimattributesresponse"></a>

```json
{
  "DkimAttributes": {
    "example.com": {
      "DkimEnabled": true,
      "DkimTokens": [
        "EXAMPLEjcs5xoyqytjsotsijas7236gr",
        "EXAMPLEjr76cvoc6mysspnioorxsn6ep",
        "EXAMPLEkbmkqkhlm2lyz77ppkulerm4k"
      ],
      "DkimVerificationStatus": "Success"
    },
    "user@example.com": {
      "DkimEnabled": false,
      "DkimVerificationStatus": "NotStarted"
    }
  }
}
```

Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DkimAttributes|object|true|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
"string"
```

<h2 id="tocS_GetIdentityMailFromDomainAttributesResponse">GetIdentityMailFromDomainAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitymailfromdomainattributesresponse"></a>
<a id="schema_GetIdentityMailFromDomainAttributesResponse"></a>
<a id="tocSgetidentitymailfromdomainattributesresponse"></a>
<a id="tocsgetidentitymailfromdomainattributesresponse"></a>

```json
{
  "MailFromDomainAttributes": {
    "example.com": {
      "BehaviorOnMXFailure": "UseDefaultValue",
      "MailFromDomain": "bounces.example.com",
      "MailFromDomainStatus": "Success"
    }
  }
}
```

Represents the custom MAIL FROM attributes for a list of identities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailFromDomainAttributes|object|true|none|none|

<h2 id="tocS_GetIdentityNotificationAttributesResponse">GetIdentityNotificationAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitynotificationattributesresponse"></a>
<a id="schema_GetIdentityNotificationAttributesResponse"></a>
<a id="tocSgetidentitynotificationattributesresponse"></a>
<a id="tocsgetidentitynotificationattributesresponse"></a>

```json
{
  "NotificationAttributes": {
    "example.com": {
      "BounceTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
      "ComplaintTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
      "DeliveryTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
      "ForwardingEnabled": true,
      "HeadersInBounceNotificationsEnabled": false,
      "HeadersInComplaintNotificationsEnabled": false,
      "HeadersInDeliveryNotificationsEnabled": false
    }
  }
}
```

Represents the notification attributes for a list of identities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NotificationAttributes|object|true|none|none|

<h2 id="tocS_GetIdentityPoliciesResponse">GetIdentityPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoliciesresponse"></a>
<a id="schema_GetIdentityPoliciesResponse"></a>
<a id="tocSgetidentitypoliciesresponse"></a>
<a id="tocsgetidentitypoliciesresponse"></a>

```json
{
  "Policies": {
    "MyPolicy": "{\"Version\":\"2008-10-17\",\"Statement\":[{\"Sid\":\"stmt1469123904194\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::123456789012:root\"},\"Action\":[\"ses:SendEmail\",\"ses:SendRawEmail\"],\"Resource\":\"arn:aws:ses:us-east-1:EXAMPLE65304:identity/example.com\"}]}"
  }
}
```

Represents the requested sending authorization policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policies|object|true|none|none|

<h2 id="tocS_PolicyName">PolicyName</h2>
<!-- backwards compatibility -->
<a id="schemapolicyname"></a>
<a id="schema_PolicyName"></a>
<a id="tocSpolicyname"></a>
<a id="tocspolicyname"></a>

```json
"string"
```

<h2 id="tocS_GetIdentityVerificationAttributesResponse">GetIdentityVerificationAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityverificationattributesresponse"></a>
<a id="schema_GetIdentityVerificationAttributesResponse"></a>
<a id="tocSgetidentityverificationattributesresponse"></a>
<a id="tocsgetidentityverificationattributesresponse"></a>

```json
{
  "VerificationAttributes": {
    "example.com": {
      "VerificationStatus": "Success",
      "VerificationToken": "EXAMPLE3VYb9EDI2nTOQRi/Tf6MI/6bD6THIGiP1MVY="
    }
  }
}
```

The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VerificationAttributes|object|true|none|none|

<h2 id="tocS_GetSendQuotaResponse">GetSendQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsendquotaresponse"></a>
<a id="schema_GetSendQuotaResponse"></a>
<a id="tocSgetsendquotaresponse"></a>
<a id="tocsgetsendquotaresponse"></a>

```json
{
  "Max24HourSend": 200,
  "MaxSendRate": 1,
  "SentLast24Hours": 1
}
```

Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Max24HourSend|object|false|none|none|
|MaxSendRate|object|false|none|none|
|SentLast24Hours|object|false|none|none|

<h2 id="tocS_GetSendStatisticsResponse">GetSendStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsendstatisticsresponse"></a>
<a id="schema_GetSendStatisticsResponse"></a>
<a id="tocSgetsendstatisticsresponse"></a>
<a id="tocsgetsendstatisticsresponse"></a>

```json
{
  "SendDataPoints": [
    {
      "Bounces": 0,
      "Complaints": 0,
      "DeliveryAttempts": 5,
      "Rejects": 0,
      "Timestamp": "2016-07-13T22:43:00Z"
    },
    {
      "Bounces": 0,
      "Complaints": 0,
      "DeliveryAttempts": 3,
      "Rejects": 0,
      "Timestamp": "2016-07-13T23:13:00Z"
    },
    {
      "Bounces": 0,
      "Complaints": 0,
      "DeliveryAttempts": 1,
      "Rejects": 0,
      "Timestamp": "2016-07-13T21:13:00Z"
    }
  ]
}
```

Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendDataPoints|object|false|none|none|

<h2 id="tocS_GetTemplateResponse">GetTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettemplateresponse"></a>
<a id="schema_GetTemplateResponse"></a>
<a id="tocSgettemplateresponse"></a>
<a id="tocsgettemplateresponse"></a>

```json
{
  "Template": {
    "TemplateName": {},
    "SubjectPart": {},
    "TextPart": {},
    "HtmlPart": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Template|[Template](#schematemplate)|false|none|The content of the email, composed of a subject line, an HTML part, and a text-only part.|

<h2 id="tocS_TemplateDoesNotExistException">TemplateDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schematemplatedoesnotexistexception"></a>
<a id="schema_TemplateDoesNotExistException"></a>
<a id="tocStemplatedoesnotexistexception"></a>
<a id="tocstemplatedoesnotexistexception"></a>

```json
null
```

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

A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSets|object|false|none|none|
|NextToken|object|false|none|none|

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

A paginated list of custom verification email templates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomVerificationEmailTemplates|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentitiesResponse">ListIdentitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitiesresponse"></a>
<a id="schema_ListIdentitiesResponse"></a>
<a id="tocSlistidentitiesresponse"></a>
<a id="tocslistidentitiesresponse"></a>

```json
{
  "Identities": [
    "user@example.com"
  ],
  "NextToken": ""
}
```

A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identities|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListIdentityPoliciesResponse">ListIdentityPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoliciesresponse"></a>
<a id="schema_ListIdentityPoliciesResponse"></a>
<a id="tocSlistidentitypoliciesresponse"></a>
<a id="tocslistidentitypoliciesresponse"></a>

```json
{
  "PolicyNames": [
    "MyPolicy"
  ]
}
```

A list of names of sending authorization policies that apply to an identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyNames|object|true|none|none|

<h2 id="tocS_ListReceiptFiltersResponse">ListReceiptFiltersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceiptfiltersresponse"></a>
<a id="schema_ListReceiptFiltersResponse"></a>
<a id="tocSlistreceiptfiltersresponse"></a>
<a id="tocslistreceiptfiltersresponse"></a>

```json
{
  "Filters": [
    {
      "IpFilter": {
        "Cidr": "1.2.3.4/24",
        "Policy": "Block"
      },
      "Name": "MyFilter"
    }
  ]
}
```

A list of IP address filters that exist under your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|

<h2 id="tocS_ListReceiptRuleSetsResponse">ListReceiptRuleSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceiptrulesetsresponse"></a>
<a id="schema_ListReceiptRuleSetsResponse"></a>
<a id="tocSlistreceiptrulesetsresponse"></a>
<a id="tocslistreceiptrulesetsresponse"></a>

```json
{
  "NextToken": "",
  "RuleSets": [
    {
      "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
      "Name": "MyRuleSet"
    }
  ]
}
```

A list of receipt rule sets that exist under your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTemplatesResponse">ListTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplatesresponse"></a>
<a id="schema_ListTemplatesResponse"></a>
<a id="tocSlisttemplatesresponse"></a>
<a id="tocslisttemplatesresponse"></a>

```json
{
  "TemplatesMetadata": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplatesMetadata|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVerifiedEmailAddressesResponse">ListVerifiedEmailAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistverifiedemailaddressesresponse"></a>
<a id="schema_ListVerifiedEmailAddressesResponse"></a>
<a id="tocSlistverifiedemailaddressesresponse"></a>
<a id="tocslistverifiedemailaddressesresponse"></a>

```json
{
  "VerifiedEmailAddresses": [
    "user1@example.com",
    "user2@example.com"
  ]
}
```

A list of email addresses that you have verified with Amazon SES under your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VerifiedEmailAddresses|object|false|none|none|

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

<h2 id="tocS_InvalidDeliveryOptionsException">InvalidDeliveryOptionsException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeliveryoptionsexception"></a>
<a id="schema_InvalidDeliveryOptionsException"></a>
<a id="tocSinvaliddeliveryoptionsexception"></a>
<a id="tocsinvaliddeliveryoptionsexception"></a>

```json
null
```

<h2 id="tocS_PutIdentityPolicyResponse">PutIdentityPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputidentitypolicyresponse"></a>
<a id="schema_PutIdentityPolicyResponse"></a>
<a id="tocSputidentitypolicyresponse"></a>
<a id="tocsputidentitypolicyresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_InvalidPolicyException">InvalidPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpolicyexception"></a>
<a id="schema_InvalidPolicyException"></a>
<a id="tocSinvalidpolicyexception"></a>
<a id="tocsinvalidpolicyexception"></a>

```json
null
```

<h2 id="tocS_ReorderReceiptRuleSetResponse">ReorderReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemareorderreceiptrulesetresponse"></a>
<a id="schema_ReorderReceiptRuleSetResponse"></a>
<a id="tocSreorderreceiptrulesetresponse"></a>
<a id="tocsreorderreceiptrulesetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SendBounceResponse">SendBounceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendbounceresponse"></a>
<a id="schema_SendBounceResponse"></a>
<a id="tocSsendbounceresponse"></a>
<a id="tocssendbounceresponse"></a>

```json
{
  "MessageId": {}
}
```

Represents a unique message ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_ReportingMta">ReportingMta</h2>
<!-- backwards compatibility -->
<a id="schemareportingmta"></a>
<a id="schema_ReportingMta"></a>
<a id="tocSreportingmta"></a>
<a id="tocsreportingmta"></a>

```json
"string"
```

<h2 id="tocS_ArrivalDate">ArrivalDate</h2>
<!-- backwards compatibility -->
<a id="schemaarrivaldate"></a>
<a id="schema_ArrivalDate"></a>
<a id="tocSarrivaldate"></a>
<a id="tocsarrivaldate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ExtensionFieldList">ExtensionFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaextensionfieldlist"></a>
<a id="schema_ExtensionFieldList"></a>
<a id="tocSextensionfieldlist"></a>
<a id="tocsextensionfieldlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_BouncedRecipientInfo">BouncedRecipientInfo</h2>
<!-- backwards compatibility -->
<a id="schemabouncedrecipientinfo"></a>
<a id="schema_BouncedRecipientInfo"></a>
<a id="tocSbouncedrecipientinfo"></a>
<a id="tocsbouncedrecipientinfo"></a>

```json
{
  "Recipient": {},
  "RecipientArn": {},
  "BounceType": {},
  "RecipientDsnFields": {
    "FinalRecipient": {},
    "Action": {},
    "RemoteMta": {},
    "Status": {},
    "DiagnosticCode": {},
    "LastAttemptDate": {},
    "ExtensionFields": {}
  }
}
```

<p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Recipient|object|true|none|none|
|RecipientArn|object|false|none|none|
|BounceType|object|false|none|none|
|RecipientDsnFields|object|false|none|none|

<h2 id="tocS_MessageRejected">MessageRejected</h2>
<!-- backwards compatibility -->
<a id="schemamessagerejected"></a>
<a id="schema_MessageRejected"></a>
<a id="tocSmessagerejected"></a>
<a id="tocsmessagerejected"></a>

```json
null
```

<h2 id="tocS_SendBulkTemplatedEmailResponse">SendBulkTemplatedEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendbulktemplatedemailresponse"></a>
<a id="schema_SendBulkTemplatedEmailResponse"></a>
<a id="tocSsendbulktemplatedemailresponse"></a>
<a id="tocssendbulktemplatedemailresponse"></a>

```json
{
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

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

<p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_BulkEmailDestination">BulkEmailDestination</h2>
<!-- backwards compatibility -->
<a id="schemabulkemaildestination"></a>
<a id="schema_BulkEmailDestination"></a>
<a id="tocSbulkemaildestination"></a>
<a id="tocsbulkemaildestination"></a>

```json
{
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplacementTags": {},
  "ReplacementTemplateData": {}
}
```

An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Destination|[Destination](#schemadestination)|true|none|<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>|
|ReplacementTags|object|false|none|none|
|ReplacementTemplateData|object|false|none|none|

<h2 id="tocS_MailFromDomainNotVerifiedException">MailFromDomainNotVerifiedException</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainnotverifiedexception"></a>
<a id="schema_MailFromDomainNotVerifiedException"></a>
<a id="tocSmailfromdomainnotverifiedexception"></a>
<a id="tocsmailfromdomainnotverifiedexception"></a>

```json
null
```

<h2 id="tocS_ConfigurationSetSendingPausedException">ConfigurationSetSendingPausedException</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetsendingpausedexception"></a>
<a id="schema_ConfigurationSetSendingPausedException"></a>
<a id="tocSconfigurationsetsendingpausedexception"></a>
<a id="tocsconfigurationsetsendingpausedexception"></a>

```json
null
```

<h2 id="tocS_AccountSendingPausedException">AccountSendingPausedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsendingpausedexception"></a>
<a id="schema_AccountSendingPausedException"></a>
<a id="tocSaccountsendingpausedexception"></a>
<a id="tocsaccountsendingpausedexception"></a>

```json
null
```

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

The response received when attempting to send the custom verification email.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|false|none|none|

<h2 id="tocS_ProductionAccessNotGrantedException">ProductionAccessNotGrantedException</h2>
<!-- backwards compatibility -->
<a id="schemaproductionaccessnotgrantedexception"></a>
<a id="schema_ProductionAccessNotGrantedException"></a>
<a id="tocSproductionaccessnotgrantedexception"></a>
<a id="tocsproductionaccessnotgrantedexception"></a>

```json
null
```

<h2 id="tocS_SendEmailResponse">SendEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendemailresponse"></a>
<a id="schema_SendEmailResponse"></a>
<a id="tocSsendemailresponse"></a>
<a id="tocssendemailresponse"></a>

```json
{
  "MessageId": "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
}
```

Represents a unique message ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|true|none|none|

<h2 id="tocS_AddressList">AddressList</h2>
<!-- backwards compatibility -->
<a id="schemaaddresslist"></a>
<a id="schema_AddressList"></a>
<a id="tocSaddresslist"></a>
<a id="tocsaddresslist"></a>

```json
[
  "string"
]
```

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

<p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>

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

Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Text|object|false|none|none|
|Html|object|false|none|none|

<h2 id="tocS_SendRawEmailResponse">SendRawEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendrawemailresponse"></a>
<a id="schema_SendRawEmailResponse"></a>
<a id="tocSsendrawemailresponse"></a>
<a id="tocssendrawemailresponse"></a>

```json
{
  "MessageId": "EXAMPLEf3f73d99b-c63fb06f-d263-41f8-a0fb-d0dc67d56c07-000000"
}
```

Represents a unique message ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|true|none|none|

<h2 id="tocS_RawMessageData">RawMessageData</h2>
<!-- backwards compatibility -->
<a id="schemarawmessagedata"></a>
<a id="schema_RawMessageData"></a>
<a id="tocSrawmessagedata"></a>
<a id="tocsrawmessagedata"></a>

```json
"string"
```

<h2 id="tocS_SendTemplatedEmailResponse">SendTemplatedEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendtemplatedemailresponse"></a>
<a id="schema_SendTemplatedEmailResponse"></a>
<a id="tocSsendtemplatedemailresponse"></a>
<a id="tocssendtemplatedemailresponse"></a>

```json
{
  "MessageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MessageId|object|true|none|none|

<h2 id="tocS_SetActiveReceiptRuleSetResponse">SetActiveReceiptRuleSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetactivereceiptrulesetresponse"></a>
<a id="schema_SetActiveReceiptRuleSetResponse"></a>
<a id="tocSsetactivereceiptrulesetresponse"></a>
<a id="tocssetactivereceiptrulesetresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetIdentityDkimEnabledResponse">SetIdentityDkimEnabledResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitydkimenabledresponse"></a>
<a id="schema_SetIdentityDkimEnabledResponse"></a>
<a id="tocSsetidentitydkimenabledresponse"></a>
<a id="tocssetidentitydkimenabledresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetIdentityFeedbackForwardingEnabledResponse">SetIdentityFeedbackForwardingEnabledResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentityfeedbackforwardingenabledresponse"></a>
<a id="schema_SetIdentityFeedbackForwardingEnabledResponse"></a>
<a id="tocSsetidentityfeedbackforwardingenabledresponse"></a>
<a id="tocssetidentityfeedbackforwardingenabledresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetIdentityHeadersInNotificationsEnabledResponse">SetIdentityHeadersInNotificationsEnabledResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentityheadersinnotificationsenabledresponse"></a>
<a id="schema_SetIdentityHeadersInNotificationsEnabledResponse"></a>
<a id="tocSsetidentityheadersinnotificationsenabledresponse"></a>
<a id="tocssetidentityheadersinnotificationsenabledresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetIdentityMailFromDomainResponse">SetIdentityMailFromDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitymailfromdomainresponse"></a>
<a id="schema_SetIdentityMailFromDomainResponse"></a>
<a id="tocSsetidentitymailfromdomainresponse"></a>
<a id="tocssetidentitymailfromdomainresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetIdentityNotificationTopicResponse">SetIdentityNotificationTopicResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitynotificationtopicresponse"></a>
<a id="schema_SetIdentityNotificationTopicResponse"></a>
<a id="tocSsetidentitynotificationtopicresponse"></a>
<a id="tocssetidentitynotificationtopicresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_SetReceiptRulePositionResponse">SetReceiptRulePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetreceiptrulepositionresponse"></a>
<a id="schema_SetReceiptRulePositionResponse"></a>
<a id="tocSsetreceiptrulepositionresponse"></a>
<a id="tocssetreceiptrulepositionresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_TestRenderTemplateResponse">TestRenderTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schematestrendertemplateresponse"></a>
<a id="schema_TestRenderTemplateResponse"></a>
<a id="tocStestrendertemplateresponse"></a>
<a id="tocstestrendertemplateresponse"></a>

```json
{
  "RenderedTemplate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RenderedTemplate|object|false|none|none|

<h2 id="tocS_InvalidRenderingParameterException">InvalidRenderingParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrenderingparameterexception"></a>
<a id="schema_InvalidRenderingParameterException"></a>
<a id="tocSinvalidrenderingparameterexception"></a>
<a id="tocsinvalidrenderingparameterexception"></a>

```json
null
```

<h2 id="tocS_MissingRenderingAttributeException">MissingRenderingAttributeException</h2>
<!-- backwards compatibility -->
<a id="schemamissingrenderingattributeexception"></a>
<a id="schema_MissingRenderingAttributeException"></a>
<a id="tocSmissingrenderingattributeexception"></a>
<a id="tocsmissingrenderingattributeexception"></a>

```json
null
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

An empty element returned on a successful request.

<h2 id="tocS_UpdateConfigurationSetTrackingOptionsResponse">UpdateConfigurationSetTrackingOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationsettrackingoptionsresponse"></a>
<a id="schema_UpdateConfigurationSetTrackingOptionsResponse"></a>
<a id="tocSupdateconfigurationsettrackingoptionsresponse"></a>
<a id="tocsupdateconfigurationsettrackingoptionsresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_UpdateReceiptRuleResponse">UpdateReceiptRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereceiptruleresponse"></a>
<a id="schema_UpdateReceiptRuleResponse"></a>
<a id="tocSupdatereceiptruleresponse"></a>
<a id="tocsupdatereceiptruleresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_UpdateTemplateResponse">UpdateTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplateresponse"></a>
<a id="schema_UpdateTemplateResponse"></a>
<a id="tocSupdatetemplateresponse"></a>
<a id="tocsupdatetemplateresponse"></a>

```json
{}
```

<h2 id="tocS_VerifyDomainDkimResponse">VerifyDomainDkimResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifydomaindkimresponse"></a>
<a id="schema_VerifyDomainDkimResponse"></a>
<a id="tocSverifydomaindkimresponse"></a>
<a id="tocsverifydomaindkimresponse"></a>

```json
{
  "DkimTokens": [
    "EXAMPLEq76owjnks3lnluwg65scbemvw",
    "EXAMPLEi3dnsj67hstzaj673klariwx2",
    "EXAMPLEwfbtcukvimehexktmdtaz6naj"
  ]
}
```

Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DkimTokens|object|true|none|none|

<h2 id="tocS_VerifyDomainIdentityResponse">VerifyDomainIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifydomainidentityresponse"></a>
<a id="schema_VerifyDomainIdentityResponse"></a>
<a id="tocSverifydomainidentityresponse"></a>
<a id="tocsverifydomainidentityresponse"></a>

```json
{
  "VerificationToken": "eoEmxw+YaYhb3h3iVJHuXMJXqeu1q1/wwmvjuEXAMPLE"
}
```

Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VerificationToken|object|true|none|none|

<h2 id="tocS_VerifyEmailIdentityResponse">VerifyEmailIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyemailidentityresponse"></a>
<a id="schema_VerifyEmailIdentityResponse"></a>
<a id="tocSverifyemailidentityresponse"></a>
<a id="tocsverifyemailidentityresponse"></a>

```json
{}
```

An empty element returned on a successful request.

<h2 id="tocS_HeaderName">HeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaheadername"></a>
<a id="schema_HeaderName"></a>
<a id="tocSheadername"></a>
<a id="tocsheadername"></a>

```json
"string"
```

<h2 id="tocS_HeaderValue">HeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemaheadervalue"></a>
<a id="schema_HeaderValue"></a>
<a id="tocSheadervalue"></a>
<a id="tocsheadervalue"></a>

```json
"string"
```

<h2 id="tocS_AddHeaderAction">AddHeaderAction</h2>
<!-- backwards compatibility -->
<a id="schemaaddheaderaction"></a>
<a id="schema_AddHeaderAction"></a>
<a id="tocSaddheaderaction"></a>
<a id="tocsaddheaderaction"></a>

```json
{
  "HeaderName": {},
  "HeaderValue": {}
}
```

<p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderName|object|true|none|none|
|HeaderValue|object|true|none|none|

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_BehaviorOnMXFailure">BehaviorOnMXFailure</h2>
<!-- backwards compatibility -->
<a id="schemabehavioronmxfailure"></a>
<a id="schema_BehaviorOnMXFailure"></a>
<a id="tocSbehavioronmxfailure"></a>
<a id="tocsbehavioronmxfailure"></a>

```json
"UseDefaultValue"
```

<h2 id="tocS_BounceSmtpReplyCode">BounceSmtpReplyCode</h2>
<!-- backwards compatibility -->
<a id="schemabouncesmtpreplycode"></a>
<a id="schema_BounceSmtpReplyCode"></a>
<a id="tocSbouncesmtpreplycode"></a>
<a id="tocsbouncesmtpreplycode"></a>

```json
"string"
```

<h2 id="tocS_BounceStatusCode">BounceStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemabouncestatuscode"></a>
<a id="schema_BounceStatusCode"></a>
<a id="tocSbouncestatuscode"></a>
<a id="tocsbouncestatuscode"></a>

```json
"string"
```

<h2 id="tocS_BounceMessage">BounceMessage</h2>
<!-- backwards compatibility -->
<a id="schemabouncemessage"></a>
<a id="schema_BounceMessage"></a>
<a id="tocSbouncemessage"></a>
<a id="tocsbouncemessage"></a>

```json
"string"
```

<h2 id="tocS_BounceAction">BounceAction</h2>
<!-- backwards compatibility -->
<a id="schemabounceaction"></a>
<a id="schema_BounceAction"></a>
<a id="tocSbounceaction"></a>
<a id="tocsbounceaction"></a>

```json
{
  "TopicArn": {},
  "SmtpReplyCode": {},
  "StatusCode": {},
  "Message": {},
  "Sender": {}
}
```

<p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|SmtpReplyCode|object|true|none|none|
|StatusCode|object|false|none|none|
|Message|object|true|none|none|
|Sender|object|true|none|none|

<h2 id="tocS_BounceType">BounceType</h2>
<!-- backwards compatibility -->
<a id="schemabouncetype"></a>
<a id="schema_BounceType"></a>
<a id="tocSbouncetype"></a>
<a id="tocsbouncetype"></a>

```json
"DoesNotExist"
```

<h2 id="tocS_RecipientDsnFields">RecipientDsnFields</h2>
<!-- backwards compatibility -->
<a id="schemarecipientdsnfields"></a>
<a id="schema_RecipientDsnFields"></a>
<a id="tocSrecipientdsnfields"></a>
<a id="tocsrecipientdsnfields"></a>

```json
{
  "FinalRecipient": {},
  "Action": {},
  "RemoteMta": {},
  "Status": {},
  "DiagnosticCode": {},
  "LastAttemptDate": {},
  "ExtensionFields": {}
}
```

<p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FinalRecipient|object|false|none|none|
|Action|object|true|none|none|
|RemoteMta|object|false|none|none|
|Status|object|true|none|none|
|DiagnosticCode|object|false|none|none|
|LastAttemptDate|object|false|none|none|
|ExtensionFields|object|false|none|none|

<h2 id="tocS_BouncedRecipientInfoList">BouncedRecipientInfoList</h2>
<!-- backwards compatibility -->
<a id="schemabouncedrecipientinfolist"></a>
<a id="schema_BouncedRecipientInfoList"></a>
<a id="tocSbouncedrecipientinfolist"></a>
<a id="tocsbouncedrecipientinfolist"></a>

```json
[
  {
    "Recipient": {},
    "RecipientArn": {},
    "BounceType": {},
    "RecipientDsnFields": {
      "FinalRecipient": {},
      "Action": {},
      "RemoteMta": {},
      "Status": {},
      "DiagnosticCode": {},
      "LastAttemptDate": {},
      "ExtensionFields": {}
    }
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

<p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>

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

<h2 id="tocS_TemplateData">TemplateData</h2>
<!-- backwards compatibility -->
<a id="schematemplatedata"></a>
<a id="schema_TemplateData"></a>
<a id="tocStemplatedata"></a>
<a id="tocstemplatedata"></a>

```json
"string"
```

<h2 id="tocS_BulkEmailDestinationList">BulkEmailDestinationList</h2>
<!-- backwards compatibility -->
<a id="schemabulkemaildestinationlist"></a>
<a id="schema_BulkEmailDestinationList"></a>
<a id="tocSbulkemaildestinationlist"></a>
<a id="tocsbulkemaildestinationlist"></a>

```json
[
  {
    "Destination": {
      "ToAddresses": {},
      "CcAddresses": {},
      "BccAddresses": {}
    },
    "ReplacementTags": {},
    "ReplacementTemplateData": {}
  }
]
```

<h2 id="tocS_BulkEmailStatus">BulkEmailStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkemailstatus"></a>
<a id="schema_BulkEmailStatus"></a>
<a id="tocSbulkemailstatus"></a>
<a id="tocsbulkemailstatus"></a>

```json
"Success"
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
"string"
```

<h2 id="tocS_MessageId">MessageId</h2>
<!-- backwards compatibility -->
<a id="schemamessageid"></a>
<a id="schema_MessageId"></a>
<a id="tocSmessageid"></a>
<a id="tocsmessageid"></a>

```json
"string"
```

<h2 id="tocS_BulkEmailDestinationStatus">BulkEmailDestinationStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkemaildestinationstatus"></a>
<a id="schema_BulkEmailDestinationStatus"></a>
<a id="tocSbulkemaildestinationstatus"></a>
<a id="tocsbulkemaildestinationstatus"></a>

```json
{
  "Status": {},
  "Error": {},
  "MessageId": {}
}
```

An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Error|object|false|none|none|
|MessageId|object|false|none|none|

<h2 id="tocS_BulkEmailDestinationStatusList">BulkEmailDestinationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemabulkemaildestinationstatuslist"></a>
<a id="schema_BulkEmailDestinationStatusList"></a>
<a id="tocSbulkemaildestinationstatuslist"></a>
<a id="tocsbulkemaildestinationstatuslist"></a>

```json
[
  {
    "Status": {},
    "Error": {},
    "MessageId": {}
  }
]
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

<h2 id="tocS_Cidr">Cidr</h2>
<!-- backwards compatibility -->
<a id="schemacidr"></a>
<a id="schema_Cidr"></a>
<a id="tocScidr"></a>
<a id="tocscidr"></a>

```json
"string"
```

<h2 id="tocS_ReceiptRuleSetName">ReceiptRuleSetName</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrulesetname"></a>
<a id="schema_ReceiptRuleSetName"></a>
<a id="tocSreceiptrulesetname"></a>
<a id="tocsreceiptrulesetname"></a>

```json
"string"
```

<h2 id="tocS_CloneReceiptRuleSetRequest">CloneReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclonereceiptrulesetrequest"></a>
<a id="schema_CloneReceiptRuleSetRequest"></a>
<a id="tocSclonereceiptrulesetrequest"></a>
<a id="tocsclonereceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {},
  "OriginalRuleSetName": {}
}
```

Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|OriginalRuleSetName|object|true|none|none|

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

<h2 id="tocS_DimensionValueSource">DimensionValueSource</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvaluesource"></a>
<a id="schema_DimensionValueSource"></a>
<a id="tocSdimensionvaluesource"></a>
<a id="tocsdimensionvaluesource"></a>

```json
"messageTag"
```

<h2 id="tocS_DefaultDimensionValue">DefaultDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultdimensionvalue"></a>
<a id="schema_DefaultDimensionValue"></a>
<a id="tocSdefaultdimensionvalue"></a>
<a id="tocsdefaultdimensionvalue"></a>

```json
"string"
```

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

<p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DimensionName|object|true|none|none|
|DimensionValueSource|object|true|none|none|
|DefaultDimensionValue|object|true|none|none|

<h2 id="tocS_ConfigurationSet">ConfigurationSet</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationset"></a>
<a id="schema_ConfigurationSet"></a>
<a id="tocSconfigurationset"></a>
<a id="tocsconfigurationset"></a>

```json
{
  "Name": {}
}
```

<p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_ConfigurationSetAttributeList">ConfigurationSetAttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsetattributelist"></a>
<a id="schema_ConfigurationSetAttributeList"></a>
<a id="tocSconfigurationsetattributelist"></a>
<a id="tocsconfigurationsetattributelist"></a>

```json
[
  "eventDestinations"
]
```

<h2 id="tocS_ConfigurationSets">ConfigurationSets</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsets"></a>
<a id="schema_ConfigurationSets"></a>
<a id="tocSconfigurationsets"></a>
<a id="tocsconfigurationsets"></a>

```json
[
  {
    "Name": {}
  }
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

<h2 id="tocS_Counter">Counter</h2>
<!-- backwards compatibility -->
<a id="schemacounter"></a>
<a id="schema_Counter"></a>
<a id="tocScounter"></a>
<a id="tocscounter"></a>

```json
0
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
    "IAMRoleARN": {},
    "DeliveryStreamARN": {}
  },
  "CloudWatchDestination": {
    "DimensionConfigurations": {}
  },
  "SNSDestination": {
    "TopicARN": {}
  }
}
```

<p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Enabled|object|false|none|none|
|MatchingEventTypes|object|true|none|none|
|KinesisFirehoseDestination|object|false|none|none|
|CloudWatchDestination|object|false|none|none|
|SNSDestination|object|false|none|none|

<h2 id="tocS_CreateConfigurationSetEventDestinationRequest">CreateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationseteventdestinationrequest"></a>
<a id="schema_CreateConfigurationSetEventDestinationRequest"></a>
<a id="tocScreateconfigurationseteventdestinationrequest"></a>
<a id="tocscreateconfigurationseteventdestinationrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "EventDestination": {
    "Name": {},
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IAMRoleARN": {},
      "DeliveryStreamARN": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SNSDestination": {
      "TopicARN": {}
    }
  }
}
```

Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|EventDestination|object|true|none|none|

<h2 id="tocS_CreateConfigurationSetRequest">CreateConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsetrequest"></a>
<a id="schema_CreateConfigurationSetRequest"></a>
<a id="tocScreateconfigurationsetrequest"></a>
<a id="tocscreateconfigurationsetrequest"></a>

```json
{
  "ConfigurationSet": {
    "Name": {}
  }
}
```

Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSet|object|true|none|none|

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

<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CustomRedirectDomain|object|false|none|none|

<h2 id="tocS_CreateConfigurationSetTrackingOptionsRequest">CreateConfigurationSetTrackingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationsettrackingoptionsrequest"></a>
<a id="schema_CreateConfigurationSetTrackingOptionsRequest"></a>
<a id="tocScreateconfigurationsettrackingoptionsrequest"></a>
<a id="tocscreateconfigurationsettrackingoptionsrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  }
}
```

Represents a request to create an open and click tracking option object in a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|TrackingOptions|[TrackingOptions](#schematrackingoptions)|true|none|<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>|

<h2 id="tocS_FromAddress">FromAddress</h2>
<!-- backwards compatibility -->
<a id="schemafromaddress"></a>
<a id="schema_FromAddress"></a>
<a id="tocSfromaddress"></a>
<a id="tocsfromaddress"></a>

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

<h2 id="tocS_TemplateContent">TemplateContent</h2>
<!-- backwards compatibility -->
<a id="schematemplatecontent"></a>
<a id="schema_TemplateContent"></a>
<a id="tocStemplatecontent"></a>
<a id="tocstemplatecontent"></a>

```json
"string"
```

<h2 id="tocS_SuccessRedirectionURL">SuccessRedirectionURL</h2>
<!-- backwards compatibility -->
<a id="schemasuccessredirectionurl"></a>
<a id="schema_SuccessRedirectionURL"></a>
<a id="tocSsuccessredirectionurl"></a>
<a id="tocssuccessredirectionurl"></a>

```json
"string"
```

<h2 id="tocS_FailureRedirectionURL">FailureRedirectionURL</h2>
<!-- backwards compatibility -->
<a id="schemafailureredirectionurl"></a>
<a id="schema_FailureRedirectionURL"></a>
<a id="tocSfailureredirectionurl"></a>
<a id="tocsfailureredirectionurl"></a>

```json
"string"
```

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

<h2 id="tocS_ReceiptFilter">ReceiptFilter</h2>
<!-- backwards compatibility -->
<a id="schemareceiptfilter"></a>
<a id="schema_ReceiptFilter"></a>
<a id="tocSreceiptfilter"></a>
<a id="tocsreceiptfilter"></a>

```json
{
  "Name": {},
  "IpFilter": {
    "Policy": {},
    "Cidr": {}
  }
}
```

<p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IpFilter|object|true|none|none|

<h2 id="tocS_CreateReceiptFilterRequest">CreateReceiptFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptfilterrequest"></a>
<a id="schema_CreateReceiptFilterRequest"></a>
<a id="tocScreatereceiptfilterrequest"></a>
<a id="tocscreatereceiptfilterrequest"></a>

```json
{
  "Filter": {
    "Name": {},
    "IpFilter": {
      "Policy": {},
      "Cidr": {}
    }
  }
}
```

Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|true|none|none|

<h2 id="tocS_ReceiptRule">ReceiptRule</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrule"></a>
<a id="schema_ReceiptRule"></a>
<a id="tocSreceiptrule"></a>
<a id="tocsreceiptrule"></a>

```json
{
  "Name": {},
  "Enabled": {},
  "TlsPolicy": {},
  "Recipients": {},
  "Actions": {},
  "ScanEnabled": {}
}
```

<p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Enabled|object|false|none|none|
|TlsPolicy|object|false|none|none|
|Recipients|object|false|none|none|
|Actions|object|false|none|none|
|ScanEnabled|object|false|none|none|

<h2 id="tocS_CreateReceiptRuleRequest">CreateReceiptRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptrulerequest"></a>
<a id="schema_CreateReceiptRuleRequest"></a>
<a id="tocScreatereceiptrulerequest"></a>
<a id="tocscreatereceiptrulerequest"></a>

```json
{
  "RuleSetName": {},
  "After": {},
  "Rule": {
    "Name": {},
    "Enabled": {},
    "TlsPolicy": {},
    "Recipients": {},
    "Actions": {},
    "ScanEnabled": {}
  }
}
```

Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|After|object|false|none|none|
|Rule|object|true|none|none|

<h2 id="tocS_CreateReceiptRuleSetRequest">CreateReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereceiptrulesetrequest"></a>
<a id="schema_CreateReceiptRuleSetRequest"></a>
<a id="tocScreatereceiptrulesetrequest"></a>
<a id="tocscreatereceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {}
}
```

Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "TemplateName": {},
  "SubjectPart": {},
  "TextPart": {},
  "HtmlPart": {}
}
```

The content of the email, composed of a subject line, an HTML part, and a text-only part.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|SubjectPart|object|false|none|none|
|TextPart|object|false|none|none|
|HtmlPart|object|false|none|none|

<h2 id="tocS_CreateTemplateRequest">CreateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetemplaterequest"></a>
<a id="schema_CreateTemplateRequest"></a>
<a id="tocScreatetemplaterequest"></a>
<a id="tocscreatetemplaterequest"></a>

```json
{
  "Template": {
    "TemplateName": {},
    "SubjectPart": {},
    "TextPart": {},
    "HtmlPart": {}
  }
}
```

Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Template|object|true|none|none|

<h2 id="tocS_CustomMailFromStatus">CustomMailFromStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustommailfromstatus"></a>
<a id="schema_CustomMailFromStatus"></a>
<a id="tocScustommailfromstatus"></a>
<a id="tocscustommailfromstatus"></a>

```json
"Pending"
```

<h2 id="tocS_CustomVerificationEmailTemplate">CustomVerificationEmailTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplate"></a>
<a id="schema_CustomVerificationEmailTemplate"></a>
<a id="tocScustomverificationemailtemplate"></a>
<a id="tocscustomverificationemailtemplate"></a>

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

<h2 id="tocS_CustomVerificationEmailTemplates">CustomVerificationEmailTemplates</h2>
<!-- backwards compatibility -->
<a id="schemacustomverificationemailtemplates"></a>
<a id="schema_CustomVerificationEmailTemplates"></a>
<a id="tocScustomverificationemailtemplates"></a>
<a id="tocscustomverificationemailtemplates"></a>

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

<h2 id="tocS_DeleteConfigurationSetEventDestinationRequest">DeleteConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationseteventdestinationrequest"></a>
<a id="schema_DeleteConfigurationSetEventDestinationRequest"></a>
<a id="tocSdeleteconfigurationseteventdestinationrequest"></a>
<a id="tocsdeleteconfigurationseteventdestinationrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "EventDestinationName": {}
}
```

Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|EventDestinationName|object|true|none|none|

<h2 id="tocS_DeleteConfigurationSetRequest">DeleteConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsetrequest"></a>
<a id="schema_DeleteConfigurationSetRequest"></a>
<a id="tocSdeleteconfigurationsetrequest"></a>
<a id="tocsdeleteconfigurationsetrequest"></a>

```json
{
  "ConfigurationSetName": {}
}
```

Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|

<h2 id="tocS_DeleteConfigurationSetTrackingOptionsRequest">DeleteConfigurationSetTrackingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationsettrackingoptionsrequest"></a>
<a id="schema_DeleteConfigurationSetTrackingOptionsRequest"></a>
<a id="tocSdeleteconfigurationsettrackingoptionsrequest"></a>
<a id="tocsdeleteconfigurationsettrackingoptionsrequest"></a>

```json
{
  "ConfigurationSetName": {}
}
```

Represents a request to delete open and click tracking options in a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|

<h2 id="tocS_DeleteCustomVerificationEmailTemplateRequest">DeleteCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomverificationemailtemplaterequest"></a>
<a id="schema_DeleteCustomVerificationEmailTemplateRequest"></a>
<a id="tocSdeletecustomverificationemailtemplaterequest"></a>
<a id="tocsdeletecustomverificationemailtemplaterequest"></a>

```json
{
  "TemplateName": {}
}
```

Represents a request to delete an existing custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|

<h2 id="tocS_DeleteIdentityPolicyRequest">DeleteIdentityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentitypolicyrequest"></a>
<a id="schema_DeleteIdentityPolicyRequest"></a>
<a id="tocSdeleteidentitypolicyrequest"></a>
<a id="tocsdeleteidentitypolicyrequest"></a>

```json
{
  "Identity": {},
  "PolicyName": {}
}
```

Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|PolicyName|object|true|none|none|

<h2 id="tocS_DeleteIdentityRequest">DeleteIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteidentityrequest"></a>
<a id="schema_DeleteIdentityRequest"></a>
<a id="tocSdeleteidentityrequest"></a>
<a id="tocsdeleteidentityrequest"></a>

```json
{
  "Identity": {}
}
```

Represents a request to delete one of your Amazon SES identities (an email address or domain).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|

<h2 id="tocS_DeleteReceiptFilterRequest">DeleteReceiptFilterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptfilterrequest"></a>
<a id="schema_DeleteReceiptFilterRequest"></a>
<a id="tocSdeletereceiptfilterrequest"></a>
<a id="tocsdeletereceiptfilterrequest"></a>

```json
{
  "FilterName": {}
}
```

Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterName|object|true|none|none|

<h2 id="tocS_DeleteReceiptRuleRequest">DeleteReceiptRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptrulerequest"></a>
<a id="schema_DeleteReceiptRuleRequest"></a>
<a id="tocSdeletereceiptrulerequest"></a>
<a id="tocsdeletereceiptrulerequest"></a>

```json
{
  "RuleSetName": {},
  "RuleName": {}
}
```

Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|RuleName|object|true|none|none|

<h2 id="tocS_DeleteReceiptRuleSetRequest">DeleteReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereceiptrulesetrequest"></a>
<a id="schema_DeleteReceiptRuleSetRequest"></a>
<a id="tocSdeletereceiptrulesetrequest"></a>
<a id="tocsdeletereceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {}
}
```

Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|

<h2 id="tocS_DeleteTemplateRequest">DeleteTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetemplaterequest"></a>
<a id="schema_DeleteTemplateRequest"></a>
<a id="tocSdeletetemplaterequest"></a>
<a id="tocsdeletetemplaterequest"></a>

```json
{
  "TemplateName": {}
}
```

Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|

<h2 id="tocS_DeleteVerifiedEmailAddressRequest">DeleteVerifiedEmailAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteverifiedemailaddressrequest"></a>
<a id="schema_DeleteVerifiedEmailAddressRequest"></a>
<a id="tocSdeleteverifiedemailaddressrequest"></a>
<a id="tocsdeleteverifiedemailaddressrequest"></a>

```json
{
  "EmailAddress": {}
}
```

Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|

<h2 id="tocS_DeliveryOptions">DeliveryOptions</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryoptions"></a>
<a id="schema_DeliveryOptions"></a>
<a id="tocSdeliveryoptions"></a>
<a id="tocsdeliveryoptions"></a>

```json
{
  "TlsPolicy": {}
}
```

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TlsPolicy|object|false|none|none|

<h2 id="tocS_DescribeActiveReceiptRuleSetRequest">DescribeActiveReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeactivereceiptrulesetrequest"></a>
<a id="schema_DescribeActiveReceiptRuleSetRequest"></a>
<a id="tocSdescribeactivereceiptrulesetrequest"></a>
<a id="tocsdescribeactivereceiptrulesetrequest"></a>

```json
{}
```

Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

<h2 id="tocS_ReceiptRuleSetMetadata">ReceiptRuleSetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrulesetmetadata"></a>
<a id="schema_ReceiptRuleSetMetadata"></a>
<a id="tocSreceiptrulesetmetadata"></a>
<a id="tocsreceiptrulesetmetadata"></a>

```json
{
  "Name": {},
  "CreatedTimestamp": {}
}
```

<p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreatedTimestamp|object|false|none|none|

<h2 id="tocS_ReceiptRulesList">ReceiptRulesList</h2>
<!-- backwards compatibility -->
<a id="schemareceiptruleslist"></a>
<a id="schema_ReceiptRulesList"></a>
<a id="tocSreceiptruleslist"></a>
<a id="tocsreceiptruleslist"></a>

```json
[
  {
    "Name": {},
    "Enabled": {},
    "TlsPolicy": {},
    "Recipients": {},
    "Actions": {},
    "ScanEnabled": {}
  }
]
```

<h2 id="tocS_DescribeConfigurationSetRequest">DescribeConfigurationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationsetrequest"></a>
<a id="schema_DescribeConfigurationSetRequest"></a>
<a id="tocSdescribeconfigurationsetrequest"></a>
<a id="tocsdescribeconfigurationsetrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "ConfigurationSetAttributeNames": {}
}
```

Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|ConfigurationSetAttributeNames|object|false|none|none|

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
      "IAMRoleARN": {},
      "DeliveryStreamARN": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SNSDestination": {
      "TopicARN": {}
    }
  }
]
```

<h2 id="tocS_ReputationOptions">ReputationOptions</h2>
<!-- backwards compatibility -->
<a id="schemareputationoptions"></a>
<a id="schema_ReputationOptions"></a>
<a id="tocSreputationoptions"></a>
<a id="tocsreputationoptions"></a>

```json
{
  "SendingEnabled": {},
  "ReputationMetricsEnabled": {},
  "LastFreshStart": {}
}
```

Contains information about the reputation settings for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SendingEnabled|object|false|none|none|
|ReputationMetricsEnabled|object|false|none|none|
|LastFreshStart|object|false|none|none|

<h2 id="tocS_DescribeReceiptRuleRequest">DescribeReceiptRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereceiptrulerequest"></a>
<a id="schema_DescribeReceiptRuleRequest"></a>
<a id="tocSdescribereceiptrulerequest"></a>
<a id="tocsdescribereceiptrulerequest"></a>

```json
{
  "RuleSetName": {},
  "RuleName": {}
}
```

Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|RuleName|object|true|none|none|

<h2 id="tocS_DescribeReceiptRuleSetRequest">DescribeReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereceiptrulesetrequest"></a>
<a id="schema_DescribeReceiptRuleSetRequest"></a>
<a id="tocSdescribereceiptrulesetrequest"></a>
<a id="tocsdescribereceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {}
}
```

Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|

<h2 id="tocS_DiagnosticCode">DiagnosticCode</h2>
<!-- backwards compatibility -->
<a id="schemadiagnosticcode"></a>
<a id="schema_DiagnosticCode"></a>
<a id="tocSdiagnosticcode"></a>
<a id="tocsdiagnosticcode"></a>

```json
"string"
```

<h2 id="tocS_IdentityDkimAttributes">IdentityDkimAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaidentitydkimattributes"></a>
<a id="schema_IdentityDkimAttributes"></a>
<a id="tocSidentitydkimattributes"></a>
<a id="tocsidentitydkimattributes"></a>

```json
{
  "DkimEnabled": {},
  "DkimVerificationStatus": {},
  "DkimTokens": {}
}
```

Represents the DKIM attributes of a verified email address or a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DkimEnabled|object|true|none|none|
|DkimVerificationStatus|object|true|none|none|
|DkimTokens|object|false|none|none|

<h2 id="tocS_DkimAttributes">DkimAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadkimattributes"></a>
<a id="schema_DkimAttributes"></a>
<a id="tocSdkimattributes"></a>
<a id="tocsdkimattributes"></a>

```json
{
  "property1": {
    "DkimEnabled": {},
    "DkimVerificationStatus": {},
    "DkimTokens": {}
  },
  "property2": {
    "DkimEnabled": {},
    "DkimVerificationStatus": {},
    "DkimTokens": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityDkimAttributes](#schemaidentitydkimattributes)|false|none|Represents the DKIM attributes of a verified email address or a domain.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"string"
```

<h2 id="tocS_DsnAction">DsnAction</h2>
<!-- backwards compatibility -->
<a id="schemadsnaction"></a>
<a id="schema_DsnAction"></a>
<a id="tocSdsnaction"></a>
<a id="tocsdsnaction"></a>

```json
"failed"
```

<h2 id="tocS_DsnStatus">DsnStatus</h2>
<!-- backwards compatibility -->
<a id="schemadsnstatus"></a>
<a id="schema_DsnStatus"></a>
<a id="tocSdsnstatus"></a>
<a id="tocsdsnstatus"></a>

```json
"string"
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"send"
```

<h2 id="tocS_Explanation">Explanation</h2>
<!-- backwards compatibility -->
<a id="schemaexplanation"></a>
<a id="schema_Explanation"></a>
<a id="tocSexplanation"></a>
<a id="tocsexplanation"></a>

```json
"string"
```

<h2 id="tocS_ExtensionFieldName">ExtensionFieldName</h2>
<!-- backwards compatibility -->
<a id="schemaextensionfieldname"></a>
<a id="schema_ExtensionFieldName"></a>
<a id="tocSextensionfieldname"></a>
<a id="tocsextensionfieldname"></a>

```json
"string"
```

<h2 id="tocS_ExtensionFieldValue">ExtensionFieldValue</h2>
<!-- backwards compatibility -->
<a id="schemaextensionfieldvalue"></a>
<a id="schema_ExtensionFieldValue"></a>
<a id="tocSextensionfieldvalue"></a>
<a id="tocsextensionfieldvalue"></a>

```json
"string"
```

<h2 id="tocS_ExtensionField">ExtensionField</h2>
<!-- backwards compatibility -->
<a id="schemaextensionfield"></a>
<a id="schema_ExtensionField"></a>
<a id="tocSextensionfield"></a>
<a id="tocsextensionfield"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

<p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_GetCustomVerificationEmailTemplateRequest">GetCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcustomverificationemailtemplaterequest"></a>
<a id="schema_GetCustomVerificationEmailTemplateRequest"></a>
<a id="tocSgetcustomverificationemailtemplaterequest"></a>
<a id="tocsgetcustomverificationemailtemplaterequest"></a>

```json
{
  "TemplateName": {}
}
```

Represents a request to retrieve an existing custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|

<h2 id="tocS_IdentityList">IdentityList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitylist"></a>
<a id="schema_IdentityList"></a>
<a id="tocSidentitylist"></a>
<a id="tocsidentitylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetIdentityDkimAttributesRequest">GetIdentityDkimAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitydkimattributesrequest"></a>
<a id="schema_GetIdentityDkimAttributesRequest"></a>
<a id="tocSgetidentitydkimattributesrequest"></a>
<a id="tocsgetidentitydkimattributesrequest"></a>

```json
{
  "Identities": {}
}
```

Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identities|object|true|none|none|

<h2 id="tocS_GetIdentityMailFromDomainAttributesRequest">GetIdentityMailFromDomainAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitymailfromdomainattributesrequest"></a>
<a id="schema_GetIdentityMailFromDomainAttributesRequest"></a>
<a id="tocSgetidentitymailfromdomainattributesrequest"></a>
<a id="tocsgetidentitymailfromdomainattributesrequest"></a>

```json
{
  "Identities": {}
}
```

Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identities|object|true|none|none|

<h2 id="tocS_MailFromDomainAttributes">MailFromDomainAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamailfromdomainattributes"></a>
<a id="schema_MailFromDomainAttributes"></a>
<a id="tocSmailfromdomainattributes"></a>
<a id="tocsmailfromdomainattributes"></a>

```json
{
  "property1": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMXFailure": {}
  },
  "property2": {
    "MailFromDomain": {},
    "MailFromDomainStatus": {},
    "BehaviorOnMXFailure": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityMailFromDomainAttributes](#schemaidentitymailfromdomainattributes)|false|none|Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).|

<h2 id="tocS_GetIdentityNotificationAttributesRequest">GetIdentityNotificationAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitynotificationattributesrequest"></a>
<a id="schema_GetIdentityNotificationAttributesRequest"></a>
<a id="tocSgetidentitynotificationattributesrequest"></a>
<a id="tocsgetidentitynotificationattributesrequest"></a>

```json
{
  "Identities": {}
}
```

Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identities|object|true|none|none|

<h2 id="tocS_NotificationAttributes">NotificationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanotificationattributes"></a>
<a id="schema_NotificationAttributes"></a>
<a id="tocSnotificationattributes"></a>
<a id="tocsnotificationattributes"></a>

```json
{
  "property1": {
    "BounceTopic": {},
    "ComplaintTopic": {},
    "DeliveryTopic": {},
    "ForwardingEnabled": {},
    "HeadersInBounceNotificationsEnabled": {},
    "HeadersInComplaintNotificationsEnabled": {},
    "HeadersInDeliveryNotificationsEnabled": {}
  },
  "property2": {
    "BounceTopic": {},
    "ComplaintTopic": {},
    "DeliveryTopic": {},
    "ForwardingEnabled": {},
    "HeadersInBounceNotificationsEnabled": {},
    "HeadersInComplaintNotificationsEnabled": {},
    "HeadersInDeliveryNotificationsEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityNotificationAttributes](#schemaidentitynotificationattributes)|false|none|Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.|

<h2 id="tocS_PolicyNameList">PolicyNameList</h2>
<!-- backwards compatibility -->
<a id="schemapolicynamelist"></a>
<a id="schema_PolicyNameList"></a>
<a id="tocSpolicynamelist"></a>
<a id="tocspolicynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetIdentityPoliciesRequest">GetIdentityPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentitypoliciesrequest"></a>
<a id="schema_GetIdentityPoliciesRequest"></a>
<a id="tocSgetidentitypoliciesrequest"></a>
<a id="tocsgetidentitypoliciesrequest"></a>

```json
{
  "Identity": {},
  "PolicyNames": {}
}
```

Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|PolicyNames|object|true|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Policy](#schemapolicy)|false|none|none|

<h2 id="tocS_GetIdentityVerificationAttributesRequest">GetIdentityVerificationAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetidentityverificationattributesrequest"></a>
<a id="schema_GetIdentityVerificationAttributesRequest"></a>
<a id="tocSgetidentityverificationattributesrequest"></a>
<a id="tocsgetidentityverificationattributesrequest"></a>

```json
{
  "Identities": {}
}
```

Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identities|object|true|none|none|

<h2 id="tocS_VerificationAttributes">VerificationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaverificationattributes"></a>
<a id="schema_VerificationAttributes"></a>
<a id="tocSverificationattributes"></a>
<a id="tocsverificationattributes"></a>

```json
{
  "property1": {
    "VerificationStatus": {},
    "VerificationToken": {}
  },
  "property2": {
    "VerificationStatus": {},
    "VerificationToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[IdentityVerificationAttributes](#schemaidentityverificationattributes)|false|none|Represents the verification attributes of a single identity.|

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

<h2 id="tocS_SentLast24Hours">SentLast24Hours</h2>
<!-- backwards compatibility -->
<a id="schemasentlast24hours"></a>
<a id="schema_SentLast24Hours"></a>
<a id="tocSsentlast24hours"></a>
<a id="tocssentlast24hours"></a>

```json
0
```

<h2 id="tocS_SendDataPointList">SendDataPointList</h2>
<!-- backwards compatibility -->
<a id="schemasenddatapointlist"></a>
<a id="schema_SendDataPointList"></a>
<a id="tocSsenddatapointlist"></a>
<a id="tocssenddatapointlist"></a>

```json
[
  {
    "Timestamp": {},
    "DeliveryAttempts": {},
    "Bounces": {},
    "Complaints": {},
    "Rejects": {}
  }
]
```

<h2 id="tocS_GetTemplateRequest">GetTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettemplaterequest"></a>
<a id="schema_GetTemplateRequest"></a>
<a id="tocSgettemplaterequest"></a>
<a id="tocsgettemplaterequest"></a>

```json
{
  "TemplateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|

<h2 id="tocS_VerificationStatus">VerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstatus"></a>
<a id="schema_VerificationStatus"></a>
<a id="tocSverificationstatus"></a>
<a id="tocsverificationstatus"></a>

```json
"Pending"
```

<h2 id="tocS_VerificationTokenList">VerificationTokenList</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtokenlist"></a>
<a id="schema_VerificationTokenList"></a>
<a id="tocSverificationtokenlist"></a>
<a id="tocsverificationtokenlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_IdentityMailFromDomainAttributes">IdentityMailFromDomainAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaidentitymailfromdomainattributes"></a>
<a id="schema_IdentityMailFromDomainAttributes"></a>
<a id="tocSidentitymailfromdomainattributes"></a>
<a id="tocsidentitymailfromdomainattributes"></a>

```json
{
  "MailFromDomain": {},
  "MailFromDomainStatus": {},
  "BehaviorOnMXFailure": {}
}
```

Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MailFromDomain|object|true|none|none|
|MailFromDomainStatus|object|true|none|none|
|BehaviorOnMXFailure|object|true|none|none|

<h2 id="tocS_NotificationTopic">NotificationTopic</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtopic"></a>
<a id="schema_NotificationTopic"></a>
<a id="tocSnotificationtopic"></a>
<a id="tocsnotificationtopic"></a>

```json
"string"
```

<h2 id="tocS_IdentityNotificationAttributes">IdentityNotificationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaidentitynotificationattributes"></a>
<a id="schema_IdentityNotificationAttributes"></a>
<a id="tocSidentitynotificationattributes"></a>
<a id="tocsidentitynotificationattributes"></a>

```json
{
  "BounceTopic": {},
  "ComplaintTopic": {},
  "DeliveryTopic": {},
  "ForwardingEnabled": {},
  "HeadersInBounceNotificationsEnabled": {},
  "HeadersInComplaintNotificationsEnabled": {},
  "HeadersInDeliveryNotificationsEnabled": {}
}
```

Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BounceTopic|object|true|none|none|
|ComplaintTopic|object|true|none|none|
|DeliveryTopic|object|true|none|none|
|ForwardingEnabled|object|true|none|none|
|HeadersInBounceNotificationsEnabled|object|false|none|none|
|HeadersInComplaintNotificationsEnabled|object|false|none|none|
|HeadersInDeliveryNotificationsEnabled|object|false|none|none|

<h2 id="tocS_IdentityType">IdentityType</h2>
<!-- backwards compatibility -->
<a id="schemaidentitytype"></a>
<a id="schema_IdentityType"></a>
<a id="tocSidentitytype"></a>
<a id="tocsidentitytype"></a>

```json
"EmailAddress"
```

<h2 id="tocS_VerificationToken">VerificationToken</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtoken"></a>
<a id="schema_VerificationToken"></a>
<a id="tocSverificationtoken"></a>
<a id="tocsverificationtoken"></a>

```json
"string"
```

<h2 id="tocS_IdentityVerificationAttributes">IdentityVerificationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaidentityverificationattributes"></a>
<a id="schema_IdentityVerificationAttributes"></a>
<a id="tocSidentityverificationattributes"></a>
<a id="tocsidentityverificationattributes"></a>

```json
{
  "VerificationStatus": {},
  "VerificationToken": {}
}
```

Represents the verification attributes of a single identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VerificationStatus|object|true|none|none|
|VerificationToken|object|false|none|none|

<h2 id="tocS_InvocationType">InvocationType</h2>
<!-- backwards compatibility -->
<a id="schemainvocationtype"></a>
<a id="schema_InvocationType"></a>
<a id="tocSinvocationtype"></a>
<a id="tocsinvocationtype"></a>

```json
"Event"
```

<h2 id="tocS_LambdaAction">LambdaAction</h2>
<!-- backwards compatibility -->
<a id="schemalambdaaction"></a>
<a id="schema_LambdaAction"></a>
<a id="tocSlambdaaction"></a>
<a id="tocslambdaaction"></a>

```json
{
  "TopicArn": {},
  "FunctionArn": {},
  "InvocationType": {}
}
```

<p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|FunctionArn|object|true|none|none|
|InvocationType|object|false|none|none|

<h2 id="tocS_LastAttemptDate">LastAttemptDate</h2>
<!-- backwards compatibility -->
<a id="schemalastattemptdate"></a>
<a id="schema_LastAttemptDate"></a>
<a id="tocSlastattemptdate"></a>
<a id="tocslastattemptdate"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_ListConfigurationSetsRequest">ListConfigurationSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsetsrequest"></a>
<a id="schema_ListConfigurationSetsRequest"></a>
<a id="tocSlistconfigurationsetsrequest"></a>
<a id="tocslistconfigurationsetsrequest"></a>

```json
{
  "NextToken": {},
  "MaxItems": {}
}
```

Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListCustomVerificationEmailTemplatesRequest">ListCustomVerificationEmailTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomverificationemailtemplatesrequest"></a>
<a id="schema_ListCustomVerificationEmailTemplatesRequest"></a>
<a id="tocSlistcustomverificationemailtemplatesrequest"></a>
<a id="tocslistcustomverificationemailtemplatesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListIdentitiesRequest">ListIdentitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitiesrequest"></a>
<a id="schema_ListIdentitiesRequest"></a>
<a id="tocSlistidentitiesrequest"></a>
<a id="tocslistidentitiesrequest"></a>

```json
{
  "IdentityType": {},
  "NextToken": {},
  "MaxItems": {}
}
```

Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_ListIdentityPoliciesRequest">ListIdentityPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistidentitypoliciesrequest"></a>
<a id="schema_ListIdentityPoliciesRequest"></a>
<a id="tocSlistidentitypoliciesrequest"></a>
<a id="tocslistidentitypoliciesrequest"></a>

```json
{
  "Identity": {}
}
```

Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|

<h2 id="tocS_ListReceiptFiltersRequest">ListReceiptFiltersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceiptfiltersrequest"></a>
<a id="schema_ListReceiptFiltersRequest"></a>
<a id="tocSlistreceiptfiltersrequest"></a>
<a id="tocslistreceiptfiltersrequest"></a>

```json
{}
```

Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

<h2 id="tocS_ReceiptFilterList">ReceiptFilterList</h2>
<!-- backwards compatibility -->
<a id="schemareceiptfilterlist"></a>
<a id="schema_ReceiptFilterList"></a>
<a id="tocSreceiptfilterlist"></a>
<a id="tocsreceiptfilterlist"></a>

```json
[
  {
    "Name": {},
    "IpFilter": {
      "Policy": {},
      "Cidr": {}
    }
  }
]
```

<h2 id="tocS_ListReceiptRuleSetsRequest">ListReceiptRuleSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceiptrulesetsrequest"></a>
<a id="schema_ListReceiptRuleSetsRequest"></a>
<a id="tocSlistreceiptrulesetsrequest"></a>
<a id="tocslistreceiptrulesetsrequest"></a>

```json
{
  "NextToken": {}
}
```

Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|

<h2 id="tocS_ReceiptRuleSetsLists">ReceiptRuleSetsLists</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrulesetslists"></a>
<a id="schema_ReceiptRuleSetsLists"></a>
<a id="tocSreceiptrulesetslists"></a>
<a id="tocsreceiptrulesetslists"></a>

```json
[
  {
    "Name": {},
    "CreatedTimestamp": {}
  }
]
```

<h2 id="tocS_ListTemplatesRequest">ListTemplatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplatesrequest"></a>
<a id="schema_ListTemplatesRequest"></a>
<a id="tocSlisttemplatesrequest"></a>
<a id="tocslisttemplatesrequest"></a>

```json
{
  "NextToken": {},
  "MaxItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_TemplateMetadataList">TemplateMetadataList</h2>
<!-- backwards compatibility -->
<a id="schematemplatemetadatalist"></a>
<a id="schema_TemplateMetadataList"></a>
<a id="tocStemplatemetadatalist"></a>
<a id="tocstemplatemetadatalist"></a>

```json
[
  {
    "Name": {},
    "CreatedTimestamp": {}
  }
]
```

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

Represents the message to be sent, composed of a subject and a body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subject|object|true|none|none|
|Body|object|true|none|none|

<h2 id="tocS_MessageDsn">MessageDsn</h2>
<!-- backwards compatibility -->
<a id="schemamessagedsn"></a>
<a id="schema_MessageDsn"></a>
<a id="tocSmessagedsn"></a>
<a id="tocsmessagedsn"></a>

```json
{
  "ReportingMta": {},
  "ArrivalDate": {},
  "ExtensionFields": {}
}
```

<p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportingMta|object|true|none|none|
|ArrivalDate|object|false|none|none|
|ExtensionFields|object|false|none|none|

<h2 id="tocS_MessageTagName">MessageTagName</h2>
<!-- backwards compatibility -->
<a id="schemamessagetagname"></a>
<a id="schema_MessageTagName"></a>
<a id="tocSmessagetagname"></a>
<a id="tocsmessagetagname"></a>

```json
"string"
```

<h2 id="tocS_MessageTagValue">MessageTagValue</h2>
<!-- backwards compatibility -->
<a id="schemamessagetagvalue"></a>
<a id="schema_MessageTagValue"></a>
<a id="tocSmessagetagvalue"></a>
<a id="tocsmessagetagvalue"></a>

```json
"string"
```

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
"Bounce"
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_PutConfigurationSetDeliveryOptionsRequest">PutConfigurationSetDeliveryOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconfigurationsetdeliveryoptionsrequest"></a>
<a id="schema_PutConfigurationSetDeliveryOptionsRequest"></a>
<a id="tocSputconfigurationsetdeliveryoptionsrequest"></a>
<a id="tocsputconfigurationsetdeliveryoptionsrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "DeliveryOptions": {
    "TlsPolicy": {}
  }
}
```

A request to modify the delivery options for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|DeliveryOptions|object|false|none|none|

<h2 id="tocS_PutIdentityPolicyRequest">PutIdentityPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputidentitypolicyrequest"></a>
<a id="schema_PutIdentityPolicyRequest"></a>
<a id="tocSputidentitypolicyrequest"></a>
<a id="tocsputidentitypolicyrequest"></a>

```json
{
  "Identity": {},
  "PolicyName": {},
  "Policy": {}
}
```

Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|PolicyName|object|true|none|none|
|Policy|object|true|none|none|

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

Represents the raw data of the message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_S3Action">S3Action</h2>
<!-- backwards compatibility -->
<a id="schemas3action"></a>
<a id="schema_S3Action"></a>
<a id="tocSs3action"></a>
<a id="tocss3action"></a>

```json
{
  "TopicArn": {},
  "BucketName": {},
  "ObjectKeyPrefix": {},
  "KmsKeyArn": {}
}
```

<p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|BucketName|object|true|none|none|
|ObjectKeyPrefix|object|false|none|none|
|KmsKeyArn|object|false|none|none|

<h2 id="tocS_WorkmailAction">WorkmailAction</h2>
<!-- backwards compatibility -->
<a id="schemaworkmailaction"></a>
<a id="schema_WorkmailAction"></a>
<a id="tocSworkmailaction"></a>
<a id="tocsworkmailaction"></a>

```json
{
  "TopicArn": {},
  "OrganizationArn": {}
}
```

<p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|false|none|none|
|OrganizationArn|object|true|none|none|

<h2 id="tocS_StopAction">StopAction</h2>
<!-- backwards compatibility -->
<a id="schemastopaction"></a>
<a id="schema_StopAction"></a>
<a id="tocSstopaction"></a>
<a id="tocsstopaction"></a>

```json
{
  "Scope": {},
  "TopicArn": {}
}
```

<p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scope|object|true|none|none|
|TopicArn|object|false|none|none|

<h2 id="tocS_SNSAction">SNSAction</h2>
<!-- backwards compatibility -->
<a id="schemasnsaction"></a>
<a id="schema_SNSAction"></a>
<a id="tocSsnsaction"></a>
<a id="tocssnsaction"></a>

```json
{
  "TopicArn": {},
  "Encoding": {}
}
```

<p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TopicArn|object|true|none|none|
|Encoding|object|false|none|none|

<h2 id="tocS_ReceiptAction">ReceiptAction</h2>
<!-- backwards compatibility -->
<a id="schemareceiptaction"></a>
<a id="schema_ReceiptAction"></a>
<a id="tocSreceiptaction"></a>
<a id="tocsreceiptaction"></a>

```json
{
  "S3Action": {
    "TopicArn": {},
    "BucketName": {},
    "ObjectKeyPrefix": {},
    "KmsKeyArn": {}
  },
  "BounceAction": {
    "TopicArn": {},
    "SmtpReplyCode": {},
    "StatusCode": {},
    "Message": {},
    "Sender": {}
  },
  "WorkmailAction": {
    "TopicArn": {},
    "OrganizationArn": {}
  },
  "LambdaAction": {
    "TopicArn": {},
    "FunctionArn": {},
    "InvocationType": {}
  },
  "StopAction": {
    "Scope": {},
    "TopicArn": {}
  },
  "AddHeaderAction": {
    "HeaderName": {},
    "HeaderValue": {}
  },
  "SNSAction": {
    "TopicArn": {},
    "Encoding": {}
  }
}
```

<p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3Action|object|false|none|none|
|BounceAction|object|false|none|none|
|WorkmailAction|object|false|none|none|
|LambdaAction|object|false|none|none|
|StopAction|object|false|none|none|
|AddHeaderAction|object|false|none|none|
|SNSAction|object|false|none|none|

<h2 id="tocS_ReceiptFilterPolicy">ReceiptFilterPolicy</h2>
<!-- backwards compatibility -->
<a id="schemareceiptfilterpolicy"></a>
<a id="schema_ReceiptFilterPolicy"></a>
<a id="tocSreceiptfilterpolicy"></a>
<a id="tocsreceiptfilterpolicy"></a>

```json
"Block"
```

<h2 id="tocS_ReceiptRuleNamesList">ReceiptRuleNamesList</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrulenameslist"></a>
<a id="schema_ReceiptRuleNamesList"></a>
<a id="tocSreceiptrulenameslist"></a>
<a id="tocsreceiptrulenameslist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_Recipient">Recipient</h2>
<!-- backwards compatibility -->
<a id="schemarecipient"></a>
<a id="schema_Recipient"></a>
<a id="tocSrecipient"></a>
<a id="tocsrecipient"></a>

```json
"string"
```

<h2 id="tocS_RemoteMta">RemoteMta</h2>
<!-- backwards compatibility -->
<a id="schemaremotemta"></a>
<a id="schema_RemoteMta"></a>
<a id="tocSremotemta"></a>
<a id="tocsremotemta"></a>

```json
"string"
```

<h2 id="tocS_RenderedTemplate">RenderedTemplate</h2>
<!-- backwards compatibility -->
<a id="schemarenderedtemplate"></a>
<a id="schema_RenderedTemplate"></a>
<a id="tocSrenderedtemplate"></a>
<a id="tocsrenderedtemplate"></a>

```json
"string"
```

<h2 id="tocS_ReorderReceiptRuleSetRequest">ReorderReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemareorderreceiptrulesetrequest"></a>
<a id="schema_ReorderReceiptRuleSetRequest"></a>
<a id="tocSreorderreceiptrulesetrequest"></a>
<a id="tocsreorderreceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {},
  "RuleNames": {}
}
```

Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|RuleNames|object|true|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_SNSActionEncoding">SNSActionEncoding</h2>
<!-- backwards compatibility -->
<a id="schemasnsactionencoding"></a>
<a id="schema_SNSActionEncoding"></a>
<a id="tocSsnsactionencoding"></a>
<a id="tocssnsactionencoding"></a>

```json
"UTF-8"
```

<h2 id="tocS_SendBounceRequest">SendBounceRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendbouncerequest"></a>
<a id="schema_SendBounceRequest"></a>
<a id="tocSsendbouncerequest"></a>
<a id="tocssendbouncerequest"></a>

```json
{
  "OriginalMessageId": {},
  "BounceSender": {},
  "Explanation": {},
  "MessageDsn": {
    "ReportingMta": {},
    "ArrivalDate": {},
    "ExtensionFields": {}
  },
  "BouncedRecipientInfoList": {},
  "BounceSenderArn": {}
}
```

Represents a request to send a bounce message to the sender of an email you received through Amazon SES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginalMessageId|object|true|none|none|
|BounceSender|object|true|none|none|
|Explanation|object|false|none|none|
|MessageDsn|object|false|none|none|
|BouncedRecipientInfoList|object|true|none|none|
|BounceSenderArn|object|false|none|none|

<h2 id="tocS_SendBulkTemplatedEmailRequest">SendBulkTemplatedEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendbulktemplatedemailrequest"></a>
<a id="schema_SendBulkTemplatedEmailRequest"></a>
<a id="tocSsendbulktemplatedemailrequest"></a>
<a id="tocssendbulktemplatedemailrequest"></a>

```json
{
  "Source": {},
  "SourceArn": {},
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "ReturnPathArn": {},
  "ConfigurationSetName": {},
  "DefaultTags": {},
  "Template": {},
  "TemplateArn": {},
  "DefaultTemplateData": {},
  "Destinations": {}
}
```

Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|SourceArn|object|false|none|none|
|ReplyToAddresses|object|false|none|none|
|ReturnPath|object|false|none|none|
|ReturnPathArn|object|false|none|none|
|ConfigurationSetName|object|false|none|none|
|DefaultTags|object|false|none|none|
|Template|object|true|none|none|
|TemplateArn|object|false|none|none|
|DefaultTemplateData|object|false|none|none|
|Destinations|object|true|none|none|

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

<h2 id="tocS_SendDataPoint">SendDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemasenddatapoint"></a>
<a id="schema_SendDataPoint"></a>
<a id="tocSsenddatapoint"></a>
<a id="tocssenddatapoint"></a>

```json
{
  "Timestamp": {},
  "DeliveryAttempts": {},
  "Bounces": {},
  "Complaints": {},
  "Rejects": {}
}
```

Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|DeliveryAttempts|object|false|none|none|
|Bounces|object|false|none|none|
|Complaints|object|false|none|none|
|Rejects|object|false|none|none|

<h2 id="tocS_SendEmailRequest">SendEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendemailrequest"></a>
<a id="schema_SendEmailRequest"></a>
<a id="tocSsendemailrequest"></a>
<a id="tocssendemailrequest"></a>

```json
{
  "Source": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "Message": {
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
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {}
}
```

Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|Destination|object|true|none|none|
|Message|object|true|none|none|
|ReplyToAddresses|object|false|none|none|
|ReturnPath|object|false|none|none|
|SourceArn|object|false|none|none|
|ReturnPathArn|object|false|none|none|
|Tags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_SendRawEmailRequest">SendRawEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendrawemailrequest"></a>
<a id="schema_SendRawEmailRequest"></a>
<a id="tocSsendrawemailrequest"></a>
<a id="tocssendrawemailrequest"></a>

```json
{
  "Source": {},
  "Destinations": {},
  "RawMessage": {
    "Data": {}
  },
  "FromArn": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {}
}
```

Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|false|none|none|
|Destinations|object|false|none|none|
|RawMessage|object|true|none|none|
|FromArn|object|false|none|none|
|SourceArn|object|false|none|none|
|ReturnPathArn|object|false|none|none|
|Tags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|

<h2 id="tocS_SendTemplatedEmailRequest">SendTemplatedEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendtemplatedemailrequest"></a>
<a id="schema_SendTemplatedEmailRequest"></a>
<a id="tocSsendtemplatedemailrequest"></a>
<a id="tocssendtemplatedemailrequest"></a>

```json
{
  "Source": {},
  "Destination": {
    "ToAddresses": {},
    "CcAddresses": {},
    "BccAddresses": {}
  },
  "ReplyToAddresses": {},
  "ReturnPath": {},
  "SourceArn": {},
  "ReturnPathArn": {},
  "Tags": {},
  "ConfigurationSetName": {},
  "Template": {},
  "TemplateArn": {},
  "TemplateData": {}
}
```

Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Source|object|true|none|none|
|Destination|object|true|none|none|
|ReplyToAddresses|object|false|none|none|
|ReturnPath|object|false|none|none|
|SourceArn|object|false|none|none|
|ReturnPathArn|object|false|none|none|
|Tags|object|false|none|none|
|ConfigurationSetName|object|false|none|none|
|Template|object|true|none|none|
|TemplateArn|object|false|none|none|
|TemplateData|object|true|none|none|

<h2 id="tocS_SetActiveReceiptRuleSetRequest">SetActiveReceiptRuleSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetactivereceiptrulesetrequest"></a>
<a id="schema_SetActiveReceiptRuleSetRequest"></a>
<a id="tocSsetactivereceiptrulesetrequest"></a>
<a id="tocssetactivereceiptrulesetrequest"></a>

```json
{
  "RuleSetName": {}
}
```

Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|false|none|none|

<h2 id="tocS_SetIdentityDkimEnabledRequest">SetIdentityDkimEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitydkimenabledrequest"></a>
<a id="schema_SetIdentityDkimEnabledRequest"></a>
<a id="tocSsetidentitydkimenabledrequest"></a>
<a id="tocssetidentitydkimenabledrequest"></a>

```json
{
  "Identity": {},
  "DkimEnabled": {}
}
```

Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|DkimEnabled|object|true|none|none|

<h2 id="tocS_SetIdentityFeedbackForwardingEnabledRequest">SetIdentityFeedbackForwardingEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentityfeedbackforwardingenabledrequest"></a>
<a id="schema_SetIdentityFeedbackForwardingEnabledRequest"></a>
<a id="tocSsetidentityfeedbackforwardingenabledrequest"></a>
<a id="tocssetidentityfeedbackforwardingenabledrequest"></a>

```json
{
  "Identity": {},
  "ForwardingEnabled": {}
}
```

Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|ForwardingEnabled|object|true|none|none|

<h2 id="tocS_SetIdentityHeadersInNotificationsEnabledRequest">SetIdentityHeadersInNotificationsEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentityheadersinnotificationsenabledrequest"></a>
<a id="schema_SetIdentityHeadersInNotificationsEnabledRequest"></a>
<a id="tocSsetidentityheadersinnotificationsenabledrequest"></a>
<a id="tocssetidentityheadersinnotificationsenabledrequest"></a>

```json
{
  "Identity": {},
  "NotificationType": {},
  "Enabled": {}
}
```

Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|NotificationType|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_SetIdentityMailFromDomainRequest">SetIdentityMailFromDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitymailfromdomainrequest"></a>
<a id="schema_SetIdentityMailFromDomainRequest"></a>
<a id="tocSsetidentitymailfromdomainrequest"></a>
<a id="tocssetidentitymailfromdomainrequest"></a>

```json
{
  "Identity": {},
  "MailFromDomain": {},
  "BehaviorOnMXFailure": {}
}
```

Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|MailFromDomain|object|false|none|none|
|BehaviorOnMXFailure|object|false|none|none|

<h2 id="tocS_SetIdentityNotificationTopicRequest">SetIdentityNotificationTopicRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetidentitynotificationtopicrequest"></a>
<a id="schema_SetIdentityNotificationTopicRequest"></a>
<a id="tocSsetidentitynotificationtopicrequest"></a>
<a id="tocssetidentitynotificationtopicrequest"></a>

```json
{
  "Identity": {},
  "NotificationType": {},
  "SnsTopic": {}
}
```

Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identity|object|true|none|none|
|NotificationType|object|true|none|none|
|SnsTopic|object|false|none|none|

<h2 id="tocS_SetReceiptRulePositionRequest">SetReceiptRulePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetreceiptrulepositionrequest"></a>
<a id="schema_SetReceiptRulePositionRequest"></a>
<a id="tocSsetreceiptrulepositionrequest"></a>
<a id="tocssetreceiptrulepositionrequest"></a>

```json
{
  "RuleSetName": {},
  "RuleName": {},
  "After": {}
}
```

Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|RuleName|object|true|none|none|
|After|object|false|none|none|

<h2 id="tocS_StopScope">StopScope</h2>
<!-- backwards compatibility -->
<a id="schemastopscope"></a>
<a id="schema_StopScope"></a>
<a id="tocSstopscope"></a>
<a id="tocsstopscope"></a>

```json
"RuleSet"
```

<h2 id="tocS_TemplateMetadata">TemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schematemplatemetadata"></a>
<a id="schema_TemplateMetadata"></a>
<a id="tocStemplatemetadata"></a>
<a id="tocstemplatemetadata"></a>

```json
{
  "Name": {},
  "CreatedTimestamp": {}
}
```

Contains information about an email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|CreatedTimestamp|object|false|none|none|

<h2 id="tocS_TestRenderTemplateRequest">TestRenderTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schematestrendertemplaterequest"></a>
<a id="schema_TestRenderTemplateRequest"></a>
<a id="tocStestrendertemplaterequest"></a>
<a id="tocstestrendertemplaterequest"></a>

```json
{
  "TemplateName": {},
  "TemplateData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|TemplateData|object|true|none|none|

<h2 id="tocS_UpdateAccountSendingEnabledRequest">UpdateAccountSendingEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountsendingenabledrequest"></a>
<a id="schema_UpdateAccountSendingEnabledRequest"></a>
<a id="tocSupdateaccountsendingenabledrequest"></a>
<a id="tocsupdateaccountsendingenabledrequest"></a>

```json
{
  "Enabled": {}
}
```

Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateConfigurationSetEventDestinationRequest">UpdateConfigurationSetEventDestinationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationseteventdestinationrequest"></a>
<a id="schema_UpdateConfigurationSetEventDestinationRequest"></a>
<a id="tocSupdateconfigurationseteventdestinationrequest"></a>
<a id="tocsupdateconfigurationseteventdestinationrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "EventDestination": {
    "Name": {},
    "Enabled": {},
    "MatchingEventTypes": {},
    "KinesisFirehoseDestination": {
      "IAMRoleARN": {},
      "DeliveryStreamARN": {}
    },
    "CloudWatchDestination": {
      "DimensionConfigurations": {}
    },
    "SNSDestination": {
      "TopicARN": {}
    }
  }
}
```

Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|EventDestination|object|true|none|none|

<h2 id="tocS_UpdateConfigurationSetReputationMetricsEnabledRequest">UpdateConfigurationSetReputationMetricsEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationsetreputationmetricsenabledrequest"></a>
<a id="schema_UpdateConfigurationSetReputationMetricsEnabledRequest"></a>
<a id="tocSupdateconfigurationsetreputationmetricsenabledrequest"></a>
<a id="tocsupdateconfigurationsetreputationmetricsenabledrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "Enabled": {}
}
```

Represents a request to modify the reputation metric publishing settings for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_UpdateConfigurationSetSendingEnabledRequest">UpdateConfigurationSetSendingEnabledRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationsetsendingenabledrequest"></a>
<a id="schema_UpdateConfigurationSetSendingEnabledRequest"></a>
<a id="tocSupdateconfigurationsetsendingenabledrequest"></a>
<a id="tocsupdateconfigurationsetsendingenabledrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "Enabled": {}
}
```

Represents a request to enable or disable the email sending capabilities for a specific configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_UpdateConfigurationSetTrackingOptionsRequest">UpdateConfigurationSetTrackingOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationsettrackingoptionsrequest"></a>
<a id="schema_UpdateConfigurationSetTrackingOptionsRequest"></a>
<a id="tocSupdateconfigurationsettrackingoptionsrequest"></a>
<a id="tocsupdateconfigurationsettrackingoptionsrequest"></a>

```json
{
  "ConfigurationSetName": {},
  "TrackingOptions": {
    "CustomRedirectDomain": {}
  }
}
```

Represents a request to update the tracking options for a configuration set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSetName|object|true|none|none|
|TrackingOptions|[TrackingOptions](#schematrackingoptions)|true|none|<p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>|

<h2 id="tocS_UpdateCustomVerificationEmailTemplateRequest">UpdateCustomVerificationEmailTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecustomverificationemailtemplaterequest"></a>
<a id="schema_UpdateCustomVerificationEmailTemplateRequest"></a>
<a id="tocSupdatecustomverificationemailtemplaterequest"></a>
<a id="tocsupdatecustomverificationemailtemplaterequest"></a>

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

Represents a request to update an existing custom verification email template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|FromEmailAddress|object|false|none|none|
|TemplateSubject|object|false|none|none|
|TemplateContent|object|false|none|none|
|SuccessRedirectionURL|object|false|none|none|
|FailureRedirectionURL|object|false|none|none|

<h2 id="tocS_UpdateReceiptRuleRequest">UpdateReceiptRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatereceiptrulerequest"></a>
<a id="schema_UpdateReceiptRuleRequest"></a>
<a id="tocSupdatereceiptrulerequest"></a>
<a id="tocsupdatereceiptrulerequest"></a>

```json
{
  "RuleSetName": {},
  "Rule": {
    "Name": {},
    "Enabled": {},
    "TlsPolicy": {},
    "Recipients": {},
    "Actions": {},
    "ScanEnabled": {}
  }
}
```

Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|true|none|none|
|Rule|object|true|none|none|

<h2 id="tocS_UpdateTemplateRequest">UpdateTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetemplaterequest"></a>
<a id="schema_UpdateTemplateRequest"></a>
<a id="tocSupdatetemplaterequest"></a>
<a id="tocsupdatetemplaterequest"></a>

```json
{
  "Template": {
    "TemplateName": {},
    "SubjectPart": {},
    "TextPart": {},
    "HtmlPart": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Template|[Template](#schematemplate)|true|none|The content of the email, composed of a subject line, an HTML part, and a text-only part.|

<h2 id="tocS_VerifyDomainDkimRequest">VerifyDomainDkimRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifydomaindkimrequest"></a>
<a id="schema_VerifyDomainDkimRequest"></a>
<a id="tocSverifydomaindkimrequest"></a>
<a id="tocsverifydomaindkimrequest"></a>

```json
{
  "Domain": {}
}
```

Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|

<h2 id="tocS_VerifyDomainIdentityRequest">VerifyDomainIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifydomainidentityrequest"></a>
<a id="schema_VerifyDomainIdentityRequest"></a>
<a id="tocSverifydomainidentityrequest"></a>
<a id="tocsverifydomainidentityrequest"></a>

```json
{
  "Domain": {}
}
```

Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domain|object|true|none|none|

<h2 id="tocS_VerifyEmailAddressRequest">VerifyEmailAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyemailaddressrequest"></a>
<a id="schema_VerifyEmailAddressRequest"></a>
<a id="tocSverifyemailaddressrequest"></a>
<a id="tocsverifyemailaddressrequest"></a>

```json
{
  "EmailAddress": {}
}
```

Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|

<h2 id="tocS_VerifyEmailIdentityRequest">VerifyEmailIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyemailidentityrequest"></a>
<a id="schema_VerifyEmailIdentityRequest"></a>
<a id="tocSverifyemailidentityrequest"></a>
<a id="tocsverifyemailidentityrequest"></a>

```json
{
  "EmailAddress": {}
}
```

Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EmailAddress|object|true|none|none|
