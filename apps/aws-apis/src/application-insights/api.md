<h1 id="amazon-cloudwatch-application-insights">Amazon CloudWatch Application Insights v2018-11-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

Base URLs:

* <a href="http://applicationinsights.us-east-1.amazonaws.com">http://applicationinsights.us-east-1.amazonaws.com</a> - The Application Insights multi-region endpoint

* <a href="https://applicationinsights.us-east-1.amazonaws.com">https://applicationinsights.us-east-1.amazonaws.com</a> - The Application Insights multi-region endpoint

* <a href="http://applicationinsights.cn-north-1.amazonaws.com.cn">http://applicationinsights.cn-north-1.amazonaws.com.cn</a> - The Application Insights endpoint for China (Beijing) and China (Ningxia)

* <a href="https://applicationinsights.cn-north-1.amazonaws.com.cn">https://applicationinsights.cn-north-1.amazonaws.com.cn</a> - The Application Insights endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/applicationinsights/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudwatch-application-insights-default">Default</h1>

## CreateApplication

<a id="opIdCreateApplication"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.CreateApplication' \
  -d '{
    "ResourceGroupName": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "OpsItemSNSTopicArn": {},
    "Tags": {},
    "AutoConfigEnabled": {},
    "AutoCreate": {},
    "GroupingType": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication`

Adds an application that is created from a resource group.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "OpsCenterEnabled": {},
  "CWEMonitorEnabled": {},
  "OpsItemSNSTopicArn": {},
  "Tags": {},
  "AutoConfigEnabled": {},
  "AutoCreate": {},
  "GroupingType": {}
}
```

<h3 id="createapplication-parameters">Parameters</h3>

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
|body|body|[CreateApplicationRequest](#schemacreateapplicationrequest)|true|none|
|» ResourceGroupName|body|object|false|none|
|» OpsCenterEnabled|body|object|false|none|
|» CWEMonitorEnabled|body|object|false|none|
|» OpsItemSNSTopicArn|body|object|false|none|
|» Tags|body|object|false|none|
|» AutoConfigEnabled|body|object|false|none|
|» AutoCreate|body|object|false|none|
|» GroupingType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.CreateApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
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

<h3 id="createapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApplicationResponse](#schemacreateapplicationresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|TagsAlreadyExistException|[TagsAlreadyExistException](#schematagsalreadyexistexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComponent

<a id="opIdCreateComponent"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.CreateComponent' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {},
    "ResourceList": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent`

Creates a custom component by grouping similar standalone instances to monitor.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "ResourceList": {}
}
```

<h3 id="createcomponent-parameters">Parameters</h3>

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
|body|body|[CreateComponentRequest](#schemacreatecomponentrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|
|» ResourceList|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.CreateComponent|

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

<h3 id="createcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateComponentResponse](#schemacreatecomponentresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLogPattern

<a id="opIdCreateLogPattern"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.CreateLogPattern' \
  -d '{
    "ResourceGroupName": {},
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern`

Adds an log pattern to a <code>LogPatternSet</code>.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {},
  "Pattern": {},
  "Rank": {}
}
```

<h3 id="createlogpattern-parameters">Parameters</h3>

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
|body|body|[CreateLogPatternRequest](#schemacreatelogpatternrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» PatternSetName|body|object|true|none|
|» PatternName|body|object|true|none|
|» Pattern|body|object|true|none|
|» Rank|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.CreateLogPattern|

> Example responses

> 200 Response

```json
{
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  },
  "ResourceGroupName": {}
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

<h3 id="createlogpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLogPatternResponse](#schemacreatelogpatternresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApplication

<a id="opIdDeleteApplication"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DeleteApplication' \
  -d '{
    "ResourceGroupName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication`

Removes the specified application from monitoring. Does not delete the application.

> Body parameter

```json
{
  "ResourceGroupName": {}
}
```

<h3 id="deleteapplication-parameters">Parameters</h3>

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
|body|body|[DeleteApplicationRequest](#schemadeleteapplicationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DeleteApplication|

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

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApplicationResponse](#schemadeleteapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComponent

<a id="opIdDeleteComponent"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DeleteComponent' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent`

Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

<h3 id="deletecomponent-parameters">Parameters</h3>

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
|body|body|[DeleteComponentRequest](#schemadeletecomponentrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DeleteComponent|

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

<h3 id="deletecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteComponentResponse](#schemadeletecomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLogPattern

<a id="opIdDeleteLogPattern"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DeleteLogPattern' \
  -d '{
    "ResourceGroupName": {},
    "PatternSetName": {},
    "PatternName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern`

Removes the specified log pattern from a <code>LogPatternSet</code>.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {}
}
```

<h3 id="deletelogpattern-parameters">Parameters</h3>

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
|body|body|[DeleteLogPatternRequest](#schemadeletelogpatternrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» PatternSetName|body|object|true|none|
|» PatternName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DeleteLogPattern|

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

<h3 id="deletelogpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLogPatternResponse](#schemadeletelogpatternresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeApplication

<a id="opIdDescribeApplication"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeApplication' \
  -d '{
    "ResourceGroupName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication`

Describes the application.

> Body parameter

```json
{
  "ResourceGroupName": {}
}
```

<h3 id="describeapplication-parameters">Parameters</h3>

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
|body|body|[DescribeApplicationRequest](#schemadescribeapplicationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
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

<h3 id="describeapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeApplicationResponse](#schemadescribeapplicationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComponent

<a id="opIdDescribeComponent"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeComponent' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent`

Describes a component and lists the resources that are grouped together in a component.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

<h3 id="describecomponent-parameters">Parameters</h3>

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
|body|body|[DescribeComponentRequest](#schemadescribecomponentrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeComponent|

> Example responses

> 200 Response

```json
{
  "ApplicationComponent": {
    "ComponentName": {},
    "ComponentRemarks": {},
    "ResourceType": {},
    "OsType": {},
    "Tier": {},
    "Monitor": {},
    "DetectedWorkload": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "ResourceList": {}
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

<h3 id="describecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComponentResponse](#schemadescribecomponentresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComponentConfiguration

<a id="opIdDescribeComponentConfiguration"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeComponentConfiguration' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration`

Describes the monitoring configuration of the component.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

<h3 id="describecomponentconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeComponentConfigurationRequest](#schemadescribecomponentconfigurationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeComponentConfiguration|

> Example responses

> 200 Response

```json
{
  "Monitor": {},
  "Tier": {},
  "ComponentConfiguration": {}
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

<h3 id="describecomponentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComponentConfigurationResponse](#schemadescribecomponentconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeComponentConfigurationRecommendation

<a id="opIdDescribeComponentConfigurationRecommendation"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {},
    "Tier": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation`

Describes the recommended monitoring configuration of the component.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "Tier": {}
}
```

<h3 id="describecomponentconfigurationrecommendation-parameters">Parameters</h3>

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
|body|body|[DescribeComponentConfigurationRecommendationRequest](#schemadescribecomponentconfigurationrecommendationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|
|» Tier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation|

> Example responses

> 200 Response

```json
{
  "ComponentConfiguration": {}
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

<h3 id="describecomponentconfigurationrecommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComponentConfigurationRecommendationResponse](#schemadescribecomponentconfigurationrecommendationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeLogPattern

<a id="opIdDescribeLogPattern"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeLogPattern' \
  -d '{
    "ResourceGroupName": {},
    "PatternSetName": {},
    "PatternName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern`

Describe a specific log pattern from a <code>LogPatternSet</code>.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {}
}
```

<h3 id="describelogpattern-parameters">Parameters</h3>

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
|body|body|[DescribeLogPatternRequest](#schemadescribelogpatternrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» PatternSetName|body|object|true|none|
|» PatternName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeLogPattern|

> Example responses

> 200 Response

```json
{
  "ResourceGroupName": {},
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
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

<h3 id="describelogpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeLogPatternResponse](#schemadescribelogpatternresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeObservation

<a id="opIdDescribeObservation"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeObservation' \
  -d '{
    "ObservationId": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation`

Describes an anomaly or error with the application.

> Body parameter

```json
{
  "ObservationId": {}
}
```

<h3 id="describeobservation-parameters">Parameters</h3>

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
|body|body|[DescribeObservationRequest](#schemadescribeobservationrequest)|true|none|
|» ObservationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeObservation|

> Example responses

> 200 Response

```json
{
  "Observation": {
    "Id": {},
    "StartTime": {},
    "EndTime": {},
    "SourceType": {},
    "SourceARN": {},
    "LogGroup": {},
    "LineTime": {},
    "LogText": {},
    "LogFilter": {},
    "MetricNamespace": {},
    "MetricName": {},
    "Unit": {},
    "Value": {},
    "CloudWatchEventId": {},
    "CloudWatchEventSource": {},
    "CloudWatchEventDetailType": {},
    "HealthEventArn": {},
    "HealthService": {},
    "HealthEventTypeCode": {},
    "HealthEventTypeCategory": {},
    "HealthEventDescription": {},
    "CodeDeployDeploymentId": {},
    "CodeDeployDeploymentGroup": {},
    "CodeDeployState": {},
    "CodeDeployApplication": {},
    "CodeDeployInstanceGroupId": {},
    "Ec2State": {},
    "RdsEventCategories": {},
    "RdsEventMessage": {},
    "S3EventName": {},
    "StatesExecutionArn": {},
    "StatesArn": {},
    "StatesStatus": {},
    "StatesInput": {},
    "EbsEvent": {},
    "EbsResult": {},
    "EbsCause": {},
    "EbsRequestId": {},
    "XRayFaultPercent": {},
    "XRayThrottlePercent": {},
    "XRayErrorPercent": {},
    "XRayRequestCount": {},
    "XRayRequestAverageLatency": {},
    "XRayNodeName": {},
    "XRayNodeType": {}
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

<h3 id="describeobservation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeObservationResponse](#schemadescribeobservationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProblem

<a id="opIdDescribeProblem"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeProblem' \
  -d '{
    "ProblemId": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem`

Describes an application problem.

> Body parameter

```json
{
  "ProblemId": {}
}
```

<h3 id="describeproblem-parameters">Parameters</h3>

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
|body|body|[DescribeProblemRequest](#schemadescribeproblemrequest)|true|none|
|» ProblemId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeProblem|

> Example responses

> 200 Response

```json
{
  "Problem": {
    "Id": {},
    "Title": {},
    "Insights": {},
    "Status": {},
    "AffectedResource": {},
    "StartTime": {},
    "EndTime": {},
    "SeverityLevel": {},
    "ResourceGroupName": {},
    "Feedback": {
      "property1": "NOT_SPECIFIED",
      "property2": "NOT_SPECIFIED"
    },
    "RecurringCount": {},
    "LastRecurrenceTime": {}
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

<h3 id="describeproblem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProblemResponse](#schemadescribeproblemresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProblemObservations

<a id="opIdDescribeProblemObservations"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.DescribeProblemObservations' \
  -d '{
    "ProblemId": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations`

Describes the anomalies or errors associated with the problem.

> Body parameter

```json
{
  "ProblemId": {}
}
```

<h3 id="describeproblemobservations-parameters">Parameters</h3>

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
|body|body|[DescribeProblemObservationsRequest](#schemadescribeproblemobservationsrequest)|true|none|
|» ProblemId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.DescribeProblemObservations|

> Example responses

> 200 Response

```json
{
  "RelatedObservations": {
    "ObservationList": {}
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

<h3 id="describeproblemobservations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProblemObservationsResponse](#schemadescribeproblemobservationsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApplications

<a id="opIdListApplications"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListApplications' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListApplications' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListApplications`

Lists the IDs of the applications that you are monitoring. 

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listapplications-parameters">Parameters</h3>

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
|body|body|[ListApplicationsRequest](#schemalistapplicationsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListApplications|

> Example responses

> 200 Response

```json
{
  "ApplicationInfoList": {},
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

<h3 id="listapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApplicationsResponse](#schemalistapplicationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponents

<a id="opIdListComponents"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListComponents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListComponents' \
  -d '{
    "ResourceGroupName": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListComponents`

Lists the auto-grouped, standalone, and custom components of the application.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listcomponents-parameters">Parameters</h3>

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
|body|body|[ListComponentsRequest](#schemalistcomponentsrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListComponents|

> Example responses

> 200 Response

```json
{
  "ApplicationComponentList": {},
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

<h3 id="listcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentsResponse](#schemalistcomponentsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurationHistory

<a id="opIdListConfigurationHistory"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListConfigurationHistory' \
  -d '{
    "ResourceGroupName": {},
    "StartTime": {},
    "EndTime": {},
    "EventStatus": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory`

<p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>

> Body parameter

```json
{
  "ResourceGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "EventStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listconfigurationhistory-parameters">Parameters</h3>

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
|body|body|[ListConfigurationHistoryRequest](#schemalistconfigurationhistoryrequest)|true|none|
|» ResourceGroupName|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» EventStatus|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListConfigurationHistory|

> Example responses

> 200 Response

```json
{
  "EventList": {},
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

<h3 id="listconfigurationhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationHistoryResponse](#schemalistconfigurationhistoryresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLogPatternSets

<a id="opIdListLogPatternSets"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListLogPatternSets' \
  -d '{
    "ResourceGroupName": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets`

Lists the log pattern sets in the specific application.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listlogpatternsets-parameters">Parameters</h3>

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
|body|body|[ListLogPatternSetsRequest](#schemalistlogpatternsetsrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListLogPatternSets|

> Example responses

> 200 Response

```json
{
  "ResourceGroupName": {},
  "LogPatternSets": {},
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

<h3 id="listlogpatternsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLogPatternSetsResponse](#schemalistlogpatternsetsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLogPatterns

<a id="opIdListLogPatterns"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListLogPatterns' \
  -d '{
    "ResourceGroupName": {},
    "PatternSetName": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns`

Lists the log patterns in the specific log <code>LogPatternSet</code>.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listlogpatterns-parameters">Parameters</h3>

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
|body|body|[ListLogPatternsRequest](#schemalistlogpatternsrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» PatternSetName|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListLogPatterns|

> Example responses

> 200 Response

```json
{
  "ResourceGroupName": {},
  "LogPatterns": {},
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

<h3 id="listlogpatterns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLogPatternsResponse](#schemalistlogpatternsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProblems

<a id="opIdListProblems"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListProblems' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListProblems' \
  -d '{
    "ResourceGroupName": {},
    "StartTime": {},
    "EndTime": {},
    "MaxResults": {},
    "NextToken": {},
    "ComponentName": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListProblems`

Lists the problems with your application.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "MaxResults": {},
  "NextToken": {},
  "ComponentName": {}
}
```

<h3 id="listproblems-parameters">Parameters</h3>

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
|body|body|[ListProblemsRequest](#schemalistproblemsrequest)|true|none|
|» ResourceGroupName|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» ComponentName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListProblems|

> Example responses

> 200 Response

```json
{
  "ProblemList": {},
  "NextToken": {},
  "ResourceGroupName": {}
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

<h3 id="listproblems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProblemsResponse](#schemalistproblemsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource`

Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

> Body parameter

```json
{
  "ResourceARN": {}
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
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.TagResource`

<p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
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
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.TagResource|

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
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.UntagResource`

Remove one or more tags (keys and values) from a specified application.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
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
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.UntagResource|

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
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApplication

<a id="opIdUpdateApplication"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.UpdateApplication' \
  -d '{
    "ResourceGroupName": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "OpsItemSNSTopicArn": {},
    "RemoveSNSTopic": {},
    "AutoConfigEnabled": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication`

Updates the application.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "OpsCenterEnabled": {},
  "CWEMonitorEnabled": {},
  "OpsItemSNSTopicArn": {},
  "RemoveSNSTopic": {},
  "AutoConfigEnabled": {}
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

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
|body|body|[UpdateApplicationRequest](#schemaupdateapplicationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» OpsCenterEnabled|body|object|false|none|
|» CWEMonitorEnabled|body|object|false|none|
|» OpsItemSNSTopicArn|body|object|false|none|
|» RemoveSNSTopic|body|object|false|none|
|» AutoConfigEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.UpdateApplication|

> Example responses

> 200 Response

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
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

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApplicationResponse](#schemaupdateapplicationresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateComponent

<a id="opIdUpdateComponent"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.UpdateComponent' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {},
    "NewComponentName": {},
    "ResourceList": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent`

Updates the custom component name and/or the list of resources that make up the component.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "NewComponentName": {},
  "ResourceList": {}
}
```

<h3 id="updatecomponent-parameters">Parameters</h3>

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
|body|body|[UpdateComponentRequest](#schemaupdatecomponentrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|
|» NewComponentName|body|object|false|none|
|» ResourceList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.UpdateComponent|

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

<h3 id="updatecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateComponentResponse](#schemaupdatecomponentresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateComponentConfiguration

<a id="opIdUpdateComponentConfiguration"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.UpdateComponentConfiguration' \
  -d '{
    "ResourceGroupName": {},
    "ComponentName": {},
    "Monitor": {},
    "Tier": {},
    "ComponentConfiguration": {},
    "AutoConfigEnabled": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration`

Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 

> Body parameter

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "Monitor": {},
  "Tier": {},
  "ComponentConfiguration": {},
  "AutoConfigEnabled": {}
}
```

<h3 id="updatecomponentconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateComponentConfigurationRequest](#schemaupdatecomponentconfigurationrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» ComponentName|body|object|true|none|
|» Monitor|body|object|false|none|
|» Tier|body|object|false|none|
|» ComponentConfiguration|body|object|false|none|
|» AutoConfigEnabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.UpdateComponentConfiguration|

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

<h3 id="updatecomponentconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateComponentConfigurationResponse](#schemaupdatecomponentconfigurationresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLogPattern

<a id="opIdUpdateLogPattern"></a>

> Code samples

```bash
curl 'https://application-insights.us-east-1.amazonaws.com/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: EC2WindowsBarleyService.UpdateLogPattern' \
  -d '{
    "ResourceGroupName": {},
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  }'
```

`POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern`

Adds a log pattern to a <code>LogPatternSet</code>.

> Body parameter

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {},
  "Pattern": {},
  "Rank": {}
}
```

<h3 id="updatelogpattern-parameters">Parameters</h3>

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
|body|body|[UpdateLogPatternRequest](#schemaupdatelogpatternrequest)|true|none|
|» ResourceGroupName|body|object|true|none|
|» PatternSetName|body|object|true|none|
|» PatternName|body|object|true|none|
|» Pattern|body|object|false|none|
|» Rank|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|EC2WindowsBarleyService.UpdateLogPattern|

> Example responses

> 200 Response

```json
{
  "ResourceGroupName": {},
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
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

<h3 id="updatelogpattern-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLogPatternResponse](#schemaupdatelogpatternresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateApplicationResponse">CreateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationresponse"></a>
<a id="schema_CreateApplicationResponse"></a>
<a id="tocScreateapplicationresponse"></a>
<a id="tocscreateapplicationresponse"></a>

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationInfo|object|false|none|none|

<h2 id="tocS_CreateApplicationRequest">CreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapplicationrequest"></a>
<a id="schema_CreateApplicationRequest"></a>
<a id="tocScreateapplicationrequest"></a>
<a id="tocscreateapplicationrequest"></a>

```json
{
  "ResourceGroupName": {},
  "OpsCenterEnabled": {},
  "CWEMonitorEnabled": {},
  "OpsItemSNSTopicArn": {},
  "Tags": {},
  "AutoConfigEnabled": {},
  "AutoCreate": {},
  "GroupingType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|OpsCenterEnabled|object|false|none|none|
|CWEMonitorEnabled|object|false|none|none|
|OpsItemSNSTopicArn|object|false|none|none|
|Tags|object|false|none|none|
|AutoConfigEnabled|object|false|none|none|
|AutoCreate|object|false|none|none|
|GroupingType|object|false|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

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

<h2 id="tocS_TagsAlreadyExistException">TagsAlreadyExistException</h2>
<!-- backwards compatibility -->
<a id="schematagsalreadyexistexception"></a>
<a id="schema_TagsAlreadyExistException"></a>
<a id="tocStagsalreadyexistexception"></a>
<a id="tocstagsalreadyexistexception"></a>

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

<h2 id="tocS_CreateComponentResponse">CreateComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentresponse"></a>
<a id="schema_CreateComponentResponse"></a>
<a id="tocScreatecomponentresponse"></a>
<a id="tocscreatecomponentresponse"></a>

```json
{}
```

<h2 id="tocS_CreateComponentRequest">CreateComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentrequest"></a>
<a id="schema_CreateComponentRequest"></a>
<a id="tocScreatecomponentrequest"></a>
<a id="tocscreatecomponentrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "ResourceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|
|ResourceList|object|true|none|none|

<h2 id="tocS_CreateLogPatternResponse">CreateLogPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogpatternresponse"></a>
<a id="schema_CreateLogPatternResponse"></a>
<a id="tocScreatelogpatternresponse"></a>
<a id="tocscreatelogpatternresponse"></a>

```json
{
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  },
  "ResourceGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogPattern|object|false|none|none|
|ResourceGroupName|object|false|none|none|

<h2 id="tocS_CreateLogPatternRequest">CreateLogPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelogpatternrequest"></a>
<a id="schema_CreateLogPatternRequest"></a>
<a id="tocScreatelogpatternrequest"></a>
<a id="tocscreatelogpatternrequest"></a>

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {},
  "Pattern": {},
  "Rank": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|PatternSetName|object|true|none|none|
|PatternName|object|true|none|none|
|Pattern|object|true|none|none|
|Rank|object|true|none|none|

<h2 id="tocS_DeleteApplicationResponse">DeleteApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationresponse"></a>
<a id="schema_DeleteApplicationResponse"></a>
<a id="tocSdeleteapplicationresponse"></a>
<a id="tocsdeleteapplicationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteApplicationRequest">DeleteApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapplicationrequest"></a>
<a id="schema_DeleteApplicationRequest"></a>
<a id="tocSdeleteapplicationrequest"></a>
<a id="tocsdeleteapplicationrequest"></a>

```json
{
  "ResourceGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_DeleteComponentResponse">DeleteComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentresponse"></a>
<a id="schema_DeleteComponentResponse"></a>
<a id="tocSdeletecomponentresponse"></a>
<a id="tocsdeletecomponentresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteComponentRequest">DeleteComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentrequest"></a>
<a id="schema_DeleteComponentRequest"></a>
<a id="tocSdeletecomponentrequest"></a>
<a id="tocsdeletecomponentrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|

<h2 id="tocS_DeleteLogPatternResponse">DeleteLogPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelogpatternresponse"></a>
<a id="schema_DeleteLogPatternResponse"></a>
<a id="tocSdeletelogpatternresponse"></a>
<a id="tocsdeletelogpatternresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLogPatternRequest">DeleteLogPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelogpatternrequest"></a>
<a id="schema_DeleteLogPatternRequest"></a>
<a id="tocSdeletelogpatternrequest"></a>
<a id="tocsdeletelogpatternrequest"></a>

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|PatternSetName|object|true|none|none|
|PatternName|object|true|none|none|

<h2 id="tocS_DescribeApplicationResponse">DescribeApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationresponse"></a>
<a id="schema_DescribeApplicationResponse"></a>
<a id="tocSdescribeapplicationresponse"></a>
<a id="tocsdescribeapplicationresponse"></a>

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationInfo|object|false|none|none|

<h2 id="tocS_DescribeApplicationRequest">DescribeApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeapplicationrequest"></a>
<a id="schema_DescribeApplicationRequest"></a>
<a id="tocSdescribeapplicationrequest"></a>
<a id="tocsdescribeapplicationrequest"></a>

```json
{
  "ResourceGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|

<h2 id="tocS_DescribeComponentResponse">DescribeComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentresponse"></a>
<a id="schema_DescribeComponentResponse"></a>
<a id="tocSdescribecomponentresponse"></a>
<a id="tocsdescribecomponentresponse"></a>

```json
{
  "ApplicationComponent": {
    "ComponentName": {},
    "ComponentRemarks": {},
    "ResourceType": {},
    "OsType": {},
    "Tier": {},
    "Monitor": {},
    "DetectedWorkload": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "ResourceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationComponent|[ApplicationComponent](#schemaapplicationcomponent)|false|none|Describes a standalone resource or similarly grouped resources that the application is made up of.|
|ResourceList|object|false|none|none|

<h2 id="tocS_DescribeComponentRequest">DescribeComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentrequest"></a>
<a id="schema_DescribeComponentRequest"></a>
<a id="tocSdescribecomponentrequest"></a>
<a id="tocsdescribecomponentrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|

<h2 id="tocS_DescribeComponentConfigurationResponse">DescribeComponentConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentconfigurationresponse"></a>
<a id="schema_DescribeComponentConfigurationResponse"></a>
<a id="tocSdescribecomponentconfigurationresponse"></a>
<a id="tocsdescribecomponentconfigurationresponse"></a>

```json
{
  "Monitor": {},
  "Tier": {},
  "ComponentConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Monitor|object|false|none|none|
|Tier|object|false|none|none|
|ComponentConfiguration|object|false|none|none|

<h2 id="tocS_DescribeComponentConfigurationRequest">DescribeComponentConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentconfigurationrequest"></a>
<a id="schema_DescribeComponentConfigurationRequest"></a>
<a id="tocSdescribecomponentconfigurationrequest"></a>
<a id="tocsdescribecomponentconfigurationrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|

<h2 id="tocS_DescribeComponentConfigurationRecommendationResponse">DescribeComponentConfigurationRecommendationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentconfigurationrecommendationresponse"></a>
<a id="schema_DescribeComponentConfigurationRecommendationResponse"></a>
<a id="tocSdescribecomponentconfigurationrecommendationresponse"></a>
<a id="tocsdescribecomponentconfigurationrecommendationresponse"></a>

```json
{
  "ComponentConfiguration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComponentConfiguration|object|false|none|none|

<h2 id="tocS_DescribeComponentConfigurationRecommendationRequest">DescribeComponentConfigurationRecommendationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomponentconfigurationrecommendationrequest"></a>
<a id="schema_DescribeComponentConfigurationRecommendationRequest"></a>
<a id="tocSdescribecomponentconfigurationrecommendationrequest"></a>
<a id="tocsdescribecomponentconfigurationrecommendationrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "Tier": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|
|Tier|object|true|none|none|

<h2 id="tocS_DescribeLogPatternResponse">DescribeLogPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribelogpatternresponse"></a>
<a id="schema_DescribeLogPatternResponse"></a>
<a id="tocSdescribelogpatternresponse"></a>
<a id="tocsdescribelogpatternresponse"></a>

```json
{
  "ResourceGroupName": {},
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|LogPattern|object|false|none|none|

<h2 id="tocS_DescribeLogPatternRequest">DescribeLogPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribelogpatternrequest"></a>
<a id="schema_DescribeLogPatternRequest"></a>
<a id="tocSdescribelogpatternrequest"></a>
<a id="tocsdescribelogpatternrequest"></a>

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|PatternSetName|object|true|none|none|
|PatternName|object|true|none|none|

<h2 id="tocS_DescribeObservationResponse">DescribeObservationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobservationresponse"></a>
<a id="schema_DescribeObservationResponse"></a>
<a id="tocSdescribeobservationresponse"></a>
<a id="tocsdescribeobservationresponse"></a>

```json
{
  "Observation": {
    "Id": {},
    "StartTime": {},
    "EndTime": {},
    "SourceType": {},
    "SourceARN": {},
    "LogGroup": {},
    "LineTime": {},
    "LogText": {},
    "LogFilter": {},
    "MetricNamespace": {},
    "MetricName": {},
    "Unit": {},
    "Value": {},
    "CloudWatchEventId": {},
    "CloudWatchEventSource": {},
    "CloudWatchEventDetailType": {},
    "HealthEventArn": {},
    "HealthService": {},
    "HealthEventTypeCode": {},
    "HealthEventTypeCategory": {},
    "HealthEventDescription": {},
    "CodeDeployDeploymentId": {},
    "CodeDeployDeploymentGroup": {},
    "CodeDeployState": {},
    "CodeDeployApplication": {},
    "CodeDeployInstanceGroupId": {},
    "Ec2State": {},
    "RdsEventCategories": {},
    "RdsEventMessage": {},
    "S3EventName": {},
    "StatesExecutionArn": {},
    "StatesArn": {},
    "StatesStatus": {},
    "StatesInput": {},
    "EbsEvent": {},
    "EbsResult": {},
    "EbsCause": {},
    "EbsRequestId": {},
    "XRayFaultPercent": {},
    "XRayThrottlePercent": {},
    "XRayErrorPercent": {},
    "XRayRequestCount": {},
    "XRayRequestAverageLatency": {},
    "XRayNodeName": {},
    "XRayNodeType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Observation|object|false|none|none|

<h2 id="tocS_DescribeObservationRequest">DescribeObservationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobservationrequest"></a>
<a id="schema_DescribeObservationRequest"></a>
<a id="tocSdescribeobservationrequest"></a>
<a id="tocsdescribeobservationrequest"></a>

```json
{
  "ObservationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservationId|object|true|none|none|

<h2 id="tocS_DescribeProblemResponse">DescribeProblemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproblemresponse"></a>
<a id="schema_DescribeProblemResponse"></a>
<a id="tocSdescribeproblemresponse"></a>
<a id="tocsdescribeproblemresponse"></a>

```json
{
  "Problem": {
    "Id": {},
    "Title": {},
    "Insights": {},
    "Status": {},
    "AffectedResource": {},
    "StartTime": {},
    "EndTime": {},
    "SeverityLevel": {},
    "ResourceGroupName": {},
    "Feedback": {
      "property1": "NOT_SPECIFIED",
      "property2": "NOT_SPECIFIED"
    },
    "RecurringCount": {},
    "LastRecurrenceTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Problem|object|false|none|none|

<h2 id="tocS_DescribeProblemRequest">DescribeProblemRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproblemrequest"></a>
<a id="schema_DescribeProblemRequest"></a>
<a id="tocSdescribeproblemrequest"></a>
<a id="tocsdescribeproblemrequest"></a>

```json
{
  "ProblemId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProblemId|object|true|none|none|

<h2 id="tocS_DescribeProblemObservationsResponse">DescribeProblemObservationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproblemobservationsresponse"></a>
<a id="schema_DescribeProblemObservationsResponse"></a>
<a id="tocSdescribeproblemobservationsresponse"></a>
<a id="tocsdescribeproblemobservationsresponse"></a>

```json
{
  "RelatedObservations": {
    "ObservationList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RelatedObservations|object|false|none|none|

<h2 id="tocS_DescribeProblemObservationsRequest">DescribeProblemObservationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproblemobservationsrequest"></a>
<a id="schema_DescribeProblemObservationsRequest"></a>
<a id="tocSdescribeproblemobservationsrequest"></a>
<a id="tocsdescribeproblemobservationsrequest"></a>

```json
{
  "ProblemId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProblemId|object|true|none|none|

<h2 id="tocS_ListApplicationsResponse">ListApplicationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsresponse"></a>
<a id="schema_ListApplicationsResponse"></a>
<a id="tocSlistapplicationsresponse"></a>
<a id="tocslistapplicationsresponse"></a>

```json
{
  "ApplicationInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListApplicationsRequest">ListApplicationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistapplicationsrequest"></a>
<a id="schema_ListApplicationsRequest"></a>
<a id="tocSlistapplicationsrequest"></a>
<a id="tocslistapplicationsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComponentsResponse">ListComponentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsresponse"></a>
<a id="schema_ListComponentsResponse"></a>
<a id="tocSlistcomponentsresponse"></a>
<a id="tocslistcomponentsresponse"></a>

```json
{
  "ApplicationComponentList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationComponentList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComponentsRequest">ListComponentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsrequest"></a>
<a id="schema_ListComponentsRequest"></a>
<a id="tocSlistcomponentsrequest"></a>
<a id="tocslistcomponentsrequest"></a>

```json
{
  "ResourceGroupName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConfigurationHistoryResponse">ListConfigurationHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationhistoryresponse"></a>
<a id="schema_ListConfigurationHistoryResponse"></a>
<a id="tocSlistconfigurationhistoryresponse"></a>
<a id="tocslistconfigurationhistoryresponse"></a>

```json
{
  "EventList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConfigurationHistoryRequest">ListConfigurationHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationhistoryrequest"></a>
<a id="schema_ListConfigurationHistoryRequest"></a>
<a id="tocSlistconfigurationhistoryrequest"></a>
<a id="tocslistconfigurationhistoryrequest"></a>

```json
{
  "ResourceGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "EventStatus": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|EventStatus|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLogPatternSetsResponse">ListLogPatternSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogpatternsetsresponse"></a>
<a id="schema_ListLogPatternSetsResponse"></a>
<a id="tocSlistlogpatternsetsresponse"></a>
<a id="tocslistlogpatternsetsresponse"></a>

```json
{
  "ResourceGroupName": {},
  "LogPatternSets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|LogPatternSets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLogPatternSetsRequest">ListLogPatternSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlogpatternsetsrequest"></a>
<a id="schema_ListLogPatternSetsRequest"></a>
<a id="tocSlistlogpatternsetsrequest"></a>
<a id="tocslistlogpatternsetsrequest"></a>

```json
{
  "ResourceGroupName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLogPatternsResponse">ListLogPatternsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogpatternsresponse"></a>
<a id="schema_ListLogPatternsResponse"></a>
<a id="tocSlistlogpatternsresponse"></a>
<a id="tocslistlogpatternsresponse"></a>

```json
{
  "ResourceGroupName": {},
  "LogPatterns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|LogPatterns|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLogPatternsRequest">ListLogPatternsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlogpatternsrequest"></a>
<a id="schema_ListLogPatternsRequest"></a>
<a id="tocSlistlogpatternsrequest"></a>
<a id="tocslistlogpatternsrequest"></a>

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|PatternSetName|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListProblemsResponse">ListProblemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproblemsresponse"></a>
<a id="schema_ListProblemsResponse"></a>
<a id="tocSlistproblemsresponse"></a>
<a id="tocslistproblemsresponse"></a>

```json
{
  "ProblemList": {},
  "NextToken": {},
  "ResourceGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProblemList|object|false|none|none|
|NextToken|object|false|none|none|
|ResourceGroupName|object|false|none|none|

<h2 id="tocS_ListProblemsRequest">ListProblemsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistproblemsrequest"></a>
<a id="schema_ListProblemsRequest"></a>
<a id="tocSlistproblemsrequest"></a>
<a id="tocslistproblemsrequest"></a>

```json
{
  "ResourceGroupName": {},
  "StartTime": {},
  "EndTime": {},
  "MaxResults": {},
  "NextToken": {},
  "ComponentName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|ComponentName|object|false|none|none|

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
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

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
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

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
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateApplicationResponse">UpdateApplicationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationresponse"></a>
<a id="schema_UpdateApplicationResponse"></a>
<a id="tocSupdateapplicationresponse"></a>
<a id="tocsupdateapplicationresponse"></a>

```json
{
  "ApplicationInfo": {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApplicationInfo|object|false|none|none|

<h2 id="tocS_UpdateApplicationRequest">UpdateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapplicationrequest"></a>
<a id="schema_UpdateApplicationRequest"></a>
<a id="tocSupdateapplicationrequest"></a>
<a id="tocsupdateapplicationrequest"></a>

```json
{
  "ResourceGroupName": {},
  "OpsCenterEnabled": {},
  "CWEMonitorEnabled": {},
  "OpsItemSNSTopicArn": {},
  "RemoveSNSTopic": {},
  "AutoConfigEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|OpsCenterEnabled|object|false|none|none|
|CWEMonitorEnabled|object|false|none|none|
|OpsItemSNSTopicArn|object|false|none|none|
|RemoveSNSTopic|object|false|none|none|
|AutoConfigEnabled|object|false|none|none|

<h2 id="tocS_UpdateComponentResponse">UpdateComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentresponse"></a>
<a id="schema_UpdateComponentResponse"></a>
<a id="tocSupdatecomponentresponse"></a>
<a id="tocsupdatecomponentresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateComponentRequest">UpdateComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentrequest"></a>
<a id="schema_UpdateComponentRequest"></a>
<a id="tocSupdatecomponentrequest"></a>
<a id="tocsupdatecomponentrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "NewComponentName": {},
  "ResourceList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|
|NewComponentName|object|false|none|none|
|ResourceList|object|false|none|none|

<h2 id="tocS_UpdateComponentConfigurationResponse">UpdateComponentConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentconfigurationresponse"></a>
<a id="schema_UpdateComponentConfigurationResponse"></a>
<a id="tocSupdatecomponentconfigurationresponse"></a>
<a id="tocsupdatecomponentconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateComponentConfigurationRequest">UpdateComponentConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecomponentconfigurationrequest"></a>
<a id="schema_UpdateComponentConfigurationRequest"></a>
<a id="tocSupdatecomponentconfigurationrequest"></a>
<a id="tocsupdatecomponentconfigurationrequest"></a>

```json
{
  "ResourceGroupName": {},
  "ComponentName": {},
  "Monitor": {},
  "Tier": {},
  "ComponentConfiguration": {},
  "AutoConfigEnabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|ComponentName|object|true|none|none|
|Monitor|object|false|none|none|
|Tier|object|false|none|none|
|ComponentConfiguration|object|false|none|none|
|AutoConfigEnabled|object|false|none|none|

<h2 id="tocS_UpdateLogPatternResponse">UpdateLogPatternResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelogpatternresponse"></a>
<a id="schema_UpdateLogPatternResponse"></a>
<a id="tocSupdatelogpatternresponse"></a>
<a id="tocsupdatelogpatternresponse"></a>

```json
{
  "ResourceGroupName": {},
  "LogPattern": {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|LogPattern|object|false|none|none|

<h2 id="tocS_UpdateLogPatternRequest">UpdateLogPatternRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelogpatternrequest"></a>
<a id="schema_UpdateLogPatternRequest"></a>
<a id="tocSupdatelogpatternrequest"></a>
<a id="tocsupdatelogpatternrequest"></a>

```json
{
  "ResourceGroupName": {},
  "PatternSetName": {},
  "PatternName": {},
  "Pattern": {},
  "Rank": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|true|none|none|
|PatternSetName|object|true|none|none|
|PatternName|object|true|none|none|
|Pattern|object|false|none|none|
|Rank|object|false|none|none|

<h2 id="tocS_AffectedResource">AffectedResource</h2>
<!-- backwards compatibility -->
<a id="schemaaffectedresource"></a>
<a id="schema_AffectedResource"></a>
<a id="tocSaffectedresource"></a>
<a id="tocsaffectedresource"></a>

```json
"string"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_ComponentName">ComponentName</h2>
<!-- backwards compatibility -->
<a id="schemacomponentname"></a>
<a id="schema_ComponentName"></a>
<a id="tocScomponentname"></a>
<a id="tocscomponentname"></a>

```json
"string"
```

<h2 id="tocS_Remarks">Remarks</h2>
<!-- backwards compatibility -->
<a id="schemaremarks"></a>
<a id="schema_Remarks"></a>
<a id="tocSremarks"></a>
<a id="tocsremarks"></a>

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

<h2 id="tocS_OsType">OsType</h2>
<!-- backwards compatibility -->
<a id="schemaostype"></a>
<a id="schema_OsType"></a>
<a id="tocSostype"></a>
<a id="tocsostype"></a>

```json
"WINDOWS"
```

<h2 id="tocS_Tier">Tier</h2>
<!-- backwards compatibility -->
<a id="schematier"></a>
<a id="schema_Tier"></a>
<a id="tocStier"></a>
<a id="tocstier"></a>

```json
"CUSTOM"
```

<h2 id="tocS_Monitor">Monitor</h2>
<!-- backwards compatibility -->
<a id="schemamonitor"></a>
<a id="schema_Monitor"></a>
<a id="tocSmonitor"></a>
<a id="tocsmonitor"></a>

```json
true
```

<h2 id="tocS_DetectedWorkload">DetectedWorkload</h2>
<!-- backwards compatibility -->
<a id="schemadetectedworkload"></a>
<a id="schema_DetectedWorkload"></a>
<a id="tocSdetectedworkload"></a>
<a id="tocsdetectedworkload"></a>

```json
{
  "property1": {
    "property1": "string",
    "property2": "string"
  },
  "property2": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[WorkloadMetaData](#schemaworkloadmetadata)|false|none|none|

<h2 id="tocS_ApplicationComponent">ApplicationComponent</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcomponent"></a>
<a id="schema_ApplicationComponent"></a>
<a id="tocSapplicationcomponent"></a>
<a id="tocsapplicationcomponent"></a>

```json
{
  "ComponentName": {},
  "ComponentRemarks": {},
  "ResourceType": {},
  "OsType": {},
  "Tier": {},
  "Monitor": {},
  "DetectedWorkload": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Describes a standalone resource or similarly grouped resources that the application is made up of.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComponentName|object|false|none|none|
|ComponentRemarks|object|false|none|none|
|ResourceType|object|false|none|none|
|OsType|object|false|none|none|
|Tier|object|false|none|none|
|Monitor|object|false|none|none|
|DetectedWorkload|object|false|none|none|

<h2 id="tocS_ApplicationComponentList">ApplicationComponentList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcomponentlist"></a>
<a id="schema_ApplicationComponentList"></a>
<a id="tocSapplicationcomponentlist"></a>
<a id="tocsapplicationcomponentlist"></a>

```json
[
  {
    "ComponentName": {},
    "ComponentRemarks": {},
    "ResourceType": {},
    "OsType": {},
    "Tier": {},
    "Monitor": {},
    "DetectedWorkload": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
]
```

<h2 id="tocS_ResourceGroupName">ResourceGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcegroupname"></a>
<a id="schema_ResourceGroupName"></a>
<a id="tocSresourcegroupname"></a>
<a id="tocsresourcegroupname"></a>

```json
"string"
```

<h2 id="tocS_LifeCycle">LifeCycle</h2>
<!-- backwards compatibility -->
<a id="schemalifecycle"></a>
<a id="schema_LifeCycle"></a>
<a id="tocSlifecycle"></a>
<a id="tocslifecycle"></a>

```json
"string"
```

<h2 id="tocS_OpsItemSNSTopicArn">OpsItemSNSTopicArn</h2>
<!-- backwards compatibility -->
<a id="schemaopsitemsnstopicarn"></a>
<a id="schema_OpsItemSNSTopicArn"></a>
<a id="tocSopsitemsnstopicarn"></a>
<a id="tocsopsitemsnstopicarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_OpsCenterEnabled">OpsCenterEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaopscenterenabled"></a>
<a id="schema_OpsCenterEnabled"></a>
<a id="tocSopscenterenabled"></a>
<a id="tocsopscenterenabled"></a>

```json
true
```

<h2 id="tocS_CWEMonitorEnabled">CWEMonitorEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacwemonitorenabled"></a>
<a id="schema_CWEMonitorEnabled"></a>
<a id="tocScwemonitorenabled"></a>
<a id="tocscwemonitorenabled"></a>

```json
true
```

<h2 id="tocS_AutoConfigEnabled">AutoConfigEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaautoconfigenabled"></a>
<a id="schema_AutoConfigEnabled"></a>
<a id="tocSautoconfigenabled"></a>
<a id="tocsautoconfigenabled"></a>

```json
true
```

<h2 id="tocS_DiscoveryType">DiscoveryType</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverytype"></a>
<a id="schema_DiscoveryType"></a>
<a id="tocSdiscoverytype"></a>
<a id="tocsdiscoverytype"></a>

```json
"RESOURCE_GROUP_BASED"
```

<h2 id="tocS_ApplicationInfo">ApplicationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfo"></a>
<a id="schema_ApplicationInfo"></a>
<a id="tocSapplicationinfo"></a>
<a id="tocsapplicationinfo"></a>

```json
{
  "ResourceGroupName": {},
  "LifeCycle": {},
  "OpsItemSNSTopicArn": {},
  "OpsCenterEnabled": {},
  "CWEMonitorEnabled": {},
  "Remarks": {},
  "AutoConfigEnabled": {},
  "DiscoveryType": {}
}
```

Describes the status of the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceGroupName|object|false|none|none|
|LifeCycle|object|false|none|none|
|OpsItemSNSTopicArn|object|false|none|none|
|OpsCenterEnabled|object|false|none|none|
|CWEMonitorEnabled|object|false|none|none|
|Remarks|object|false|none|none|
|AutoConfigEnabled|object|false|none|none|
|DiscoveryType|object|false|none|none|

<h2 id="tocS_ApplicationInfoList">ApplicationInfoList</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationinfolist"></a>
<a id="schema_ApplicationInfoList"></a>
<a id="tocSapplicationinfolist"></a>
<a id="tocsapplicationinfolist"></a>

```json
[
  {
    "ResourceGroupName": {},
    "LifeCycle": {},
    "OpsItemSNSTopicArn": {},
    "OpsCenterEnabled": {},
    "CWEMonitorEnabled": {},
    "Remarks": {},
    "AutoConfigEnabled": {},
    "DiscoveryType": {}
  }
]
```

<h2 id="tocS_AutoCreate">AutoCreate</h2>
<!-- backwards compatibility -->
<a id="schemaautocreate"></a>
<a id="schema_AutoCreate"></a>
<a id="tocSautocreate"></a>
<a id="tocsautocreate"></a>

```json
true
```

<h2 id="tocS_CloudWatchEventDetailType">CloudWatchEventDetailType</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatcheventdetailtype"></a>
<a id="schema_CloudWatchEventDetailType"></a>
<a id="tocScloudwatcheventdetailtype"></a>
<a id="tocscloudwatcheventdetailtype"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchEventId">CloudWatchEventId</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatcheventid"></a>
<a id="schema_CloudWatchEventId"></a>
<a id="tocScloudwatcheventid"></a>
<a id="tocscloudwatcheventid"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchEventSource">CloudWatchEventSource</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatcheventsource"></a>
<a id="schema_CloudWatchEventSource"></a>
<a id="tocScloudwatcheventsource"></a>
<a id="tocscloudwatcheventsource"></a>

```json
"EC2"
```

<h2 id="tocS_CodeDeployApplication">CodeDeployApplication</h2>
<!-- backwards compatibility -->
<a id="schemacodedeployapplication"></a>
<a id="schema_CodeDeployApplication"></a>
<a id="tocScodedeployapplication"></a>
<a id="tocscodedeployapplication"></a>

```json
"string"
```

<h2 id="tocS_CodeDeployDeploymentGroup">CodeDeployDeploymentGroup</h2>
<!-- backwards compatibility -->
<a id="schemacodedeploydeploymentgroup"></a>
<a id="schema_CodeDeployDeploymentGroup"></a>
<a id="tocScodedeploydeploymentgroup"></a>
<a id="tocscodedeploydeploymentgroup"></a>

```json
"string"
```

<h2 id="tocS_CodeDeployDeploymentId">CodeDeployDeploymentId</h2>
<!-- backwards compatibility -->
<a id="schemacodedeploydeploymentid"></a>
<a id="schema_CodeDeployDeploymentId"></a>
<a id="tocScodedeploydeploymentid"></a>
<a id="tocscodedeploydeploymentid"></a>

```json
"string"
```

<h2 id="tocS_CodeDeployInstanceGroupId">CodeDeployInstanceGroupId</h2>
<!-- backwards compatibility -->
<a id="schemacodedeployinstancegroupid"></a>
<a id="schema_CodeDeployInstanceGroupId"></a>
<a id="tocScodedeployinstancegroupid"></a>
<a id="tocscodedeployinstancegroupid"></a>

```json
"string"
```

<h2 id="tocS_CodeDeployState">CodeDeployState</h2>
<!-- backwards compatibility -->
<a id="schemacodedeploystate"></a>
<a id="schema_CodeDeployState"></a>
<a id="tocScodedeploystate"></a>
<a id="tocscodedeploystate"></a>

```json
"string"
```

<h2 id="tocS_ComponentConfiguration">ComponentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfiguration"></a>
<a id="schema_ComponentConfiguration"></a>
<a id="tocScomponentconfiguration"></a>
<a id="tocscomponentconfiguration"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationEventMonitoredResourceARN">ConfigurationEventMonitoredResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventmonitoredresourcearn"></a>
<a id="schema_ConfigurationEventMonitoredResourceARN"></a>
<a id="tocSconfigurationeventmonitoredresourcearn"></a>
<a id="tocsconfigurationeventmonitoredresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationEventStatus">ConfigurationEventStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventstatus"></a>
<a id="schema_ConfigurationEventStatus"></a>
<a id="tocSconfigurationeventstatus"></a>
<a id="tocsconfigurationeventstatus"></a>

```json
"INFO"
```

<h2 id="tocS_ConfigurationEventResourceType">ConfigurationEventResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventresourcetype"></a>
<a id="schema_ConfigurationEventResourceType"></a>
<a id="tocSconfigurationeventresourcetype"></a>
<a id="tocsconfigurationeventresourcetype"></a>

```json
"CLOUDWATCH_ALARM"
```

<h2 id="tocS_ConfigurationEventTime">ConfigurationEventTime</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventtime"></a>
<a id="schema_ConfigurationEventTime"></a>
<a id="tocSconfigurationeventtime"></a>
<a id="tocsconfigurationeventtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ConfigurationEventDetail">ConfigurationEventDetail</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventdetail"></a>
<a id="schema_ConfigurationEventDetail"></a>
<a id="tocSconfigurationeventdetail"></a>
<a id="tocsconfigurationeventdetail"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationEventResourceName">ConfigurationEventResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventresourcename"></a>
<a id="schema_ConfigurationEventResourceName"></a>
<a id="tocSconfigurationeventresourcename"></a>
<a id="tocsconfigurationeventresourcename"></a>

```json
"string"
```

<h2 id="tocS_ConfigurationEvent">ConfigurationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationevent"></a>
<a id="schema_ConfigurationEvent"></a>
<a id="tocSconfigurationevent"></a>
<a id="tocsconfigurationevent"></a>

```json
{
  "MonitoredResourceARN": {},
  "EventStatus": {},
  "EventResourceType": {},
  "EventTime": {},
  "EventDetail": {},
  "EventResourceName": {}
}
```

 The event information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoredResourceARN|object|false|none|none|
|EventStatus|object|false|none|none|
|EventResourceType|object|false|none|none|
|EventTime|object|false|none|none|
|EventDetail|object|false|none|none|
|EventResourceName|object|false|none|none|

<h2 id="tocS_ConfigurationEventList">ConfigurationEventList</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationeventlist"></a>
<a id="schema_ConfigurationEventList"></a>
<a id="tocSconfigurationeventlist"></a>
<a id="tocsconfigurationeventlist"></a>

```json
[
  {
    "MonitoredResourceARN": {},
    "EventStatus": {},
    "EventResourceType": {},
    "EventTime": {},
    "EventDetail": {},
    "EventResourceName": {}
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
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_GroupingType">GroupingType</h2>
<!-- backwards compatibility -->
<a id="schemagroupingtype"></a>
<a id="schema_GroupingType"></a>
<a id="tocSgroupingtype"></a>
<a id="tocsgroupingtype"></a>

```json
"ACCOUNT_BASED"
```

<h2 id="tocS_CustomComponentName">CustomComponentName</h2>
<!-- backwards compatibility -->
<a id="schemacustomcomponentname"></a>
<a id="schema_CustomComponentName"></a>
<a id="tocScustomcomponentname"></a>
<a id="tocscustomcomponentname"></a>

```json
"string"
```

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LogPatternSetName">LogPatternSetName</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternsetname"></a>
<a id="schema_LogPatternSetName"></a>
<a id="tocSlogpatternsetname"></a>
<a id="tocslogpatternsetname"></a>

```json
"string"
```

<h2 id="tocS_LogPatternName">LogPatternName</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternname"></a>
<a id="schema_LogPatternName"></a>
<a id="tocSlogpatternname"></a>
<a id="tocslogpatternname"></a>

```json
"string"
```

<h2 id="tocS_LogPatternRegex">LogPatternRegex</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternregex"></a>
<a id="schema_LogPatternRegex"></a>
<a id="tocSlogpatternregex"></a>
<a id="tocslogpatternregex"></a>

```json
"string"
```

<h2 id="tocS_LogPatternRank">LogPatternRank</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternrank"></a>
<a id="schema_LogPatternRank"></a>
<a id="tocSlogpatternrank"></a>
<a id="tocslogpatternrank"></a>

```json
0
```

<h2 id="tocS_LogPattern">LogPattern</h2>
<!-- backwards compatibility -->
<a id="schemalogpattern"></a>
<a id="schema_LogPattern"></a>
<a id="tocSlogpattern"></a>
<a id="tocslogpattern"></a>

```json
{
  "PatternSetName": {},
  "PatternName": {},
  "Pattern": {},
  "Rank": {}
}
```

An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PatternSetName|object|false|none|none|
|PatternName|object|false|none|none|
|Pattern|object|false|none|none|
|Rank|object|false|none|none|

<h2 id="tocS_ObservationId">ObservationId</h2>
<!-- backwards compatibility -->
<a id="schemaobservationid"></a>
<a id="schema_ObservationId"></a>
<a id="tocSobservationid"></a>
<a id="tocsobservationid"></a>

```json
"stringstringstringstringstringstringst"
```

<h2 id="tocS_Observation">Observation</h2>
<!-- backwards compatibility -->
<a id="schemaobservation"></a>
<a id="schema_Observation"></a>
<a id="tocSobservation"></a>
<a id="tocsobservation"></a>

```json
{
  "Id": {},
  "StartTime": {},
  "EndTime": {},
  "SourceType": {},
  "SourceARN": {},
  "LogGroup": {},
  "LineTime": {},
  "LogText": {},
  "LogFilter": {},
  "MetricNamespace": {},
  "MetricName": {},
  "Unit": {},
  "Value": {},
  "CloudWatchEventId": {},
  "CloudWatchEventSource": {},
  "CloudWatchEventDetailType": {},
  "HealthEventArn": {},
  "HealthService": {},
  "HealthEventTypeCode": {},
  "HealthEventTypeCategory": {},
  "HealthEventDescription": {},
  "CodeDeployDeploymentId": {},
  "CodeDeployDeploymentGroup": {},
  "CodeDeployState": {},
  "CodeDeployApplication": {},
  "CodeDeployInstanceGroupId": {},
  "Ec2State": {},
  "RdsEventCategories": {},
  "RdsEventMessage": {},
  "S3EventName": {},
  "StatesExecutionArn": {},
  "StatesArn": {},
  "StatesStatus": {},
  "StatesInput": {},
  "EbsEvent": {},
  "EbsResult": {},
  "EbsCause": {},
  "EbsRequestId": {},
  "XRayFaultPercent": {},
  "XRayThrottlePercent": {},
  "XRayErrorPercent": {},
  "XRayRequestCount": {},
  "XRayRequestAverageLatency": {},
  "XRayNodeName": {},
  "XRayNodeType": {}
}
```

Describes an anomaly or error with the application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|SourceType|object|false|none|none|
|SourceARN|object|false|none|none|
|LogGroup|object|false|none|none|
|LineTime|object|false|none|none|
|LogText|object|false|none|none|
|LogFilter|object|false|none|none|
|MetricNamespace|object|false|none|none|
|MetricName|object|false|none|none|
|Unit|object|false|none|none|
|Value|object|false|none|none|
|CloudWatchEventId|object|false|none|none|
|CloudWatchEventSource|object|false|none|none|
|CloudWatchEventDetailType|object|false|none|none|
|HealthEventArn|object|false|none|none|
|HealthService|object|false|none|none|
|HealthEventTypeCode|object|false|none|none|
|HealthEventTypeCategory|object|false|none|none|
|HealthEventDescription|object|false|none|none|
|CodeDeployDeploymentId|object|false|none|none|
|CodeDeployDeploymentGroup|object|false|none|none|
|CodeDeployState|object|false|none|none|
|CodeDeployApplication|object|false|none|none|
|CodeDeployInstanceGroupId|object|false|none|none|
|Ec2State|object|false|none|none|
|RdsEventCategories|object|false|none|none|
|RdsEventMessage|object|false|none|none|
|S3EventName|object|false|none|none|
|StatesExecutionArn|object|false|none|none|
|StatesArn|object|false|none|none|
|StatesStatus|object|false|none|none|
|StatesInput|object|false|none|none|
|EbsEvent|object|false|none|none|
|EbsResult|object|false|none|none|
|EbsCause|object|false|none|none|
|EbsRequestId|object|false|none|none|
|XRayFaultPercent|object|false|none|none|
|XRayThrottlePercent|object|false|none|none|
|XRayErrorPercent|object|false|none|none|
|XRayRequestCount|object|false|none|none|
|XRayRequestAverageLatency|object|false|none|none|
|XRayNodeName|object|false|none|none|
|XRayNodeType|object|false|none|none|

<h2 id="tocS_ProblemId">ProblemId</h2>
<!-- backwards compatibility -->
<a id="schemaproblemid"></a>
<a id="schema_ProblemId"></a>
<a id="tocSproblemid"></a>
<a id="tocsproblemid"></a>

```json
"stringstringstringstringstringstringst"
```

<h2 id="tocS_RelatedObservations">RelatedObservations</h2>
<!-- backwards compatibility -->
<a id="schemarelatedobservations"></a>
<a id="schema_RelatedObservations"></a>
<a id="tocSrelatedobservations"></a>
<a id="tocsrelatedobservations"></a>

```json
{
  "ObservationList": {}
}
```

Describes observations related to the problem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservationList|object|false|none|none|

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "Id": {},
  "Title": {},
  "Insights": {},
  "Status": {},
  "AffectedResource": {},
  "StartTime": {},
  "EndTime": {},
  "SeverityLevel": {},
  "ResourceGroupName": {},
  "Feedback": {
    "property1": "NOT_SPECIFIED",
    "property2": "NOT_SPECIFIED"
  },
  "RecurringCount": {},
  "LastRecurrenceTime": {}
}
```

Describes a problem that is detected by correlating observations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Title|object|false|none|none|
|Insights|object|false|none|none|
|Status|object|false|none|none|
|AffectedResource|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|SeverityLevel|object|false|none|none|
|ResourceGroupName|object|false|none|none|
|Feedback|object|false|none|none|
|RecurringCount|object|false|none|none|
|LastRecurrenceTime|object|false|none|none|

<h2 id="tocS_WorkloadMetaData">WorkloadMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaworkloadmetadata"></a>
<a id="schema_WorkloadMetaData"></a>
<a id="tocSworkloadmetadata"></a>
<a id="tocsworkloadmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetaDataValue](#schemametadatavalue)|false|none|none|

<h2 id="tocS_EbsCause">EbsCause</h2>
<!-- backwards compatibility -->
<a id="schemaebscause"></a>
<a id="schema_EbsCause"></a>
<a id="tocSebscause"></a>
<a id="tocsebscause"></a>

```json
"string"
```

<h2 id="tocS_EbsEvent">EbsEvent</h2>
<!-- backwards compatibility -->
<a id="schemaebsevent"></a>
<a id="schema_EbsEvent"></a>
<a id="tocSebsevent"></a>
<a id="tocsebsevent"></a>

```json
"string"
```

<h2 id="tocS_EbsRequestId">EbsRequestId</h2>
<!-- backwards compatibility -->
<a id="schemaebsrequestid"></a>
<a id="schema_EbsRequestId"></a>
<a id="tocSebsrequestid"></a>
<a id="tocsebsrequestid"></a>

```json
"string"
```

<h2 id="tocS_EbsResult">EbsResult</h2>
<!-- backwards compatibility -->
<a id="schemaebsresult"></a>
<a id="schema_EbsResult"></a>
<a id="tocSebsresult"></a>
<a id="tocsebsresult"></a>

```json
"string"
```

<h2 id="tocS_Ec2State">Ec2State</h2>
<!-- backwards compatibility -->
<a id="schemaec2state"></a>
<a id="schema_Ec2State"></a>
<a id="tocSec2state"></a>
<a id="tocsec2state"></a>

```json
"string"
```

<h2 id="tocS_EndTime">EndTime</h2>
<!-- backwards compatibility -->
<a id="schemaendtime"></a>
<a id="schema_EndTime"></a>
<a id="tocSendtime"></a>
<a id="tocsendtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FeedbackValue">FeedbackValue</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackvalue"></a>
<a id="schema_FeedbackValue"></a>
<a id="tocSfeedbackvalue"></a>
<a id="tocsfeedbackvalue"></a>

```json
"NOT_SPECIFIED"
```

<h2 id="tocS_Feedback">Feedback</h2>
<!-- backwards compatibility -->
<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
{
  "property1": "NOT_SPECIFIED",
  "property2": "NOT_SPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FeedbackValue](#schemafeedbackvalue)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|NOT_SPECIFIED|
|**additionalProperties**|USEFUL|
|**additionalProperties**|NOT_USEFUL|

<h2 id="tocS_FeedbackKey">FeedbackKey</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackkey"></a>
<a id="schema_FeedbackKey"></a>
<a id="tocSfeedbackkey"></a>
<a id="tocsfeedbackkey"></a>

```json
"INSIGHTS_FEEDBACK"
```

<h2 id="tocS_HealthEventArn">HealthEventArn</h2>
<!-- backwards compatibility -->
<a id="schemahealtheventarn"></a>
<a id="schema_HealthEventArn"></a>
<a id="tocShealtheventarn"></a>
<a id="tocshealtheventarn"></a>

```json
"string"
```

<h2 id="tocS_HealthEventDescription">HealthEventDescription</h2>
<!-- backwards compatibility -->
<a id="schemahealtheventdescription"></a>
<a id="schema_HealthEventDescription"></a>
<a id="tocShealtheventdescription"></a>
<a id="tocshealtheventdescription"></a>

```json
"string"
```

<h2 id="tocS_HealthEventTypeCategory">HealthEventTypeCategory</h2>
<!-- backwards compatibility -->
<a id="schemahealtheventtypecategory"></a>
<a id="schema_HealthEventTypeCategory"></a>
<a id="tocShealtheventtypecategory"></a>
<a id="tocshealtheventtypecategory"></a>

```json
"string"
```

<h2 id="tocS_HealthEventTypeCode">HealthEventTypeCode</h2>
<!-- backwards compatibility -->
<a id="schemahealtheventtypecode"></a>
<a id="schema_HealthEventTypeCode"></a>
<a id="tocShealtheventtypecode"></a>
<a id="tocshealtheventtypecode"></a>

```json
"string"
```

<h2 id="tocS_HealthService">HealthService</h2>
<!-- backwards compatibility -->
<a id="schemahealthservice"></a>
<a id="schema_HealthService"></a>
<a id="tocShealthservice"></a>
<a id="tocshealthservice"></a>

```json
"string"
```

<h2 id="tocS_Insights">Insights</h2>
<!-- backwards compatibility -->
<a id="schemainsights"></a>
<a id="schema_Insights"></a>
<a id="tocSinsights"></a>
<a id="tocsinsights"></a>

```json
"string"
```

<h2 id="tocS_LastRecurrenceTime">LastRecurrenceTime</h2>
<!-- backwards compatibility -->
<a id="schemalastrecurrencetime"></a>
<a id="schema_LastRecurrenceTime"></a>
<a id="tocSlastrecurrencetime"></a>
<a id="tocslastrecurrencetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LineTime">LineTime</h2>
<!-- backwards compatibility -->
<a id="schemalinetime"></a>
<a id="schema_LineTime"></a>
<a id="tocSlinetime"></a>
<a id="tocslinetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_MaxEntities">MaxEntities</h2>
<!-- backwards compatibility -->
<a id="schemamaxentities"></a>
<a id="schema_MaxEntities"></a>
<a id="tocSmaxentities"></a>
<a id="tocsmaxentities"></a>

```json
1
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_StartTime">StartTime</h2>
<!-- backwards compatibility -->
<a id="schemastarttime"></a>
<a id="schema_StartTime"></a>
<a id="tocSstarttime"></a>
<a id="tocsstarttime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LogPatternSetList">LogPatternSetList</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternsetlist"></a>
<a id="schema_LogPatternSetList"></a>
<a id="tocSlogpatternsetlist"></a>
<a id="tocslogpatternsetlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LogPatternList">LogPatternList</h2>
<!-- backwards compatibility -->
<a id="schemalogpatternlist"></a>
<a id="schema_LogPatternList"></a>
<a id="tocSlogpatternlist"></a>
<a id="tocslogpatternlist"></a>

```json
[
  {
    "PatternSetName": {},
    "PatternName": {},
    "Pattern": {},
    "Rank": {}
  }
]
```

<h2 id="tocS_ProblemList">ProblemList</h2>
<!-- backwards compatibility -->
<a id="schemaproblemlist"></a>
<a id="schema_ProblemList"></a>
<a id="tocSproblemlist"></a>
<a id="tocsproblemlist"></a>

```json
[
  {
    "Id": {},
    "Title": {},
    "Insights": {},
    "Status": {},
    "AffectedResource": {},
    "StartTime": {},
    "EndTime": {},
    "SeverityLevel": {},
    "ResourceGroupName": {},
    "Feedback": {
      "property1": "NOT_SPECIFIED",
      "property2": "NOT_SPECIFIED"
    },
    "RecurringCount": {},
    "LastRecurrenceTime": {}
  }
]
```

<h2 id="tocS_LogFilter">LogFilter</h2>
<!-- backwards compatibility -->
<a id="schemalogfilter"></a>
<a id="schema_LogFilter"></a>
<a id="tocSlogfilter"></a>
<a id="tocslogfilter"></a>

```json
"ERROR"
```

<h2 id="tocS_LogGroup">LogGroup</h2>
<!-- backwards compatibility -->
<a id="schemaloggroup"></a>
<a id="schema_LogGroup"></a>
<a id="tocSloggroup"></a>
<a id="tocsloggroup"></a>

```json
"string"
```

<h2 id="tocS_LogText">LogText</h2>
<!-- backwards compatibility -->
<a id="schemalogtext"></a>
<a id="schema_LogText"></a>
<a id="tocSlogtext"></a>
<a id="tocslogtext"></a>

```json
"string"
```

<h2 id="tocS_MetaDataKey">MetaDataKey</h2>
<!-- backwards compatibility -->
<a id="schemametadatakey"></a>
<a id="schema_MetaDataKey"></a>
<a id="tocSmetadatakey"></a>
<a id="tocsmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_MetaDataValue">MetaDataValue</h2>
<!-- backwards compatibility -->
<a id="schemametadatavalue"></a>
<a id="schema_MetaDataValue"></a>
<a id="tocSmetadatavalue"></a>
<a id="tocsmetadatavalue"></a>

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

<h2 id="tocS_MetricNamespace">MetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemametricnamespace"></a>
<a id="schema_MetricNamespace"></a>
<a id="tocSmetricnamespace"></a>
<a id="tocsmetricnamespace"></a>

```json
"string"
```

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"string"
```

<h2 id="tocS_SourceARN">SourceARN</h2>
<!-- backwards compatibility -->
<a id="schemasourcearn"></a>
<a id="schema_SourceARN"></a>
<a id="tocSsourcearn"></a>
<a id="tocssourcearn"></a>

```json
"string"
```

<h2 id="tocS_Unit">Unit</h2>
<!-- backwards compatibility -->
<a id="schemaunit"></a>
<a id="schema_Unit"></a>
<a id="tocSunit"></a>
<a id="tocsunit"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
0
```

<h2 id="tocS_RdsEventCategories">RdsEventCategories</h2>
<!-- backwards compatibility -->
<a id="schemardseventcategories"></a>
<a id="schema_RdsEventCategories"></a>
<a id="tocSrdseventcategories"></a>
<a id="tocsrdseventcategories"></a>

```json
"string"
```

<h2 id="tocS_RdsEventMessage">RdsEventMessage</h2>
<!-- backwards compatibility -->
<a id="schemardseventmessage"></a>
<a id="schema_RdsEventMessage"></a>
<a id="tocSrdseventmessage"></a>
<a id="tocsrdseventmessage"></a>

```json
"string"
```

<h2 id="tocS_S3EventName">S3EventName</h2>
<!-- backwards compatibility -->
<a id="schemas3eventname"></a>
<a id="schema_S3EventName"></a>
<a id="tocSs3eventname"></a>
<a id="tocss3eventname"></a>

```json
"string"
```

<h2 id="tocS_StatesExecutionArn">StatesExecutionArn</h2>
<!-- backwards compatibility -->
<a id="schemastatesexecutionarn"></a>
<a id="schema_StatesExecutionArn"></a>
<a id="tocSstatesexecutionarn"></a>
<a id="tocsstatesexecutionarn"></a>

```json
"string"
```

<h2 id="tocS_StatesArn">StatesArn</h2>
<!-- backwards compatibility -->
<a id="schemastatesarn"></a>
<a id="schema_StatesArn"></a>
<a id="tocSstatesarn"></a>
<a id="tocsstatesarn"></a>

```json
"string"
```

<h2 id="tocS_StatesStatus">StatesStatus</h2>
<!-- backwards compatibility -->
<a id="schemastatesstatus"></a>
<a id="schema_StatesStatus"></a>
<a id="tocSstatesstatus"></a>
<a id="tocsstatesstatus"></a>

```json
"string"
```

<h2 id="tocS_StatesInput">StatesInput</h2>
<!-- backwards compatibility -->
<a id="schemastatesinput"></a>
<a id="schema_StatesInput"></a>
<a id="tocSstatesinput"></a>
<a id="tocsstatesinput"></a>

```json
"string"
```

<h2 id="tocS_XRayFaultPercent">XRayFaultPercent</h2>
<!-- backwards compatibility -->
<a id="schemaxrayfaultpercent"></a>
<a id="schema_XRayFaultPercent"></a>
<a id="tocSxrayfaultpercent"></a>
<a id="tocsxrayfaultpercent"></a>

```json
0
```

<h2 id="tocS_XRayThrottlePercent">XRayThrottlePercent</h2>
<!-- backwards compatibility -->
<a id="schemaxraythrottlepercent"></a>
<a id="schema_XRayThrottlePercent"></a>
<a id="tocSxraythrottlepercent"></a>
<a id="tocsxraythrottlepercent"></a>

```json
0
```

<h2 id="tocS_XRayErrorPercent">XRayErrorPercent</h2>
<!-- backwards compatibility -->
<a id="schemaxrayerrorpercent"></a>
<a id="schema_XRayErrorPercent"></a>
<a id="tocSxrayerrorpercent"></a>
<a id="tocsxrayerrorpercent"></a>

```json
0
```

<h2 id="tocS_XRayRequestCount">XRayRequestCount</h2>
<!-- backwards compatibility -->
<a id="schemaxrayrequestcount"></a>
<a id="schema_XRayRequestCount"></a>
<a id="tocSxrayrequestcount"></a>
<a id="tocsxrayrequestcount"></a>

```json
0
```

<h2 id="tocS_XRayRequestAverageLatency">XRayRequestAverageLatency</h2>
<!-- backwards compatibility -->
<a id="schemaxrayrequestaveragelatency"></a>
<a id="schema_XRayRequestAverageLatency"></a>
<a id="tocSxrayrequestaveragelatency"></a>
<a id="tocsxrayrequestaveragelatency"></a>

```json
0
```

<h2 id="tocS_XRayNodeName">XRayNodeName</h2>
<!-- backwards compatibility -->
<a id="schemaxraynodename"></a>
<a id="schema_XRayNodeName"></a>
<a id="tocSxraynodename"></a>
<a id="tocsxraynodename"></a>

```json
"string"
```

<h2 id="tocS_XRayNodeType">XRayNodeType</h2>
<!-- backwards compatibility -->
<a id="schemaxraynodetype"></a>
<a id="schema_XRayNodeType"></a>
<a id="tocSxraynodetype"></a>
<a id="tocsxraynodetype"></a>

```json
"string"
```

<h2 id="tocS_ObservationList">ObservationList</h2>
<!-- backwards compatibility -->
<a id="schemaobservationlist"></a>
<a id="schema_ObservationList"></a>
<a id="tocSobservationlist"></a>
<a id="tocsobservationlist"></a>

```json
[
  {
    "Id": {},
    "StartTime": {},
    "EndTime": {},
    "SourceType": {},
    "SourceARN": {},
    "LogGroup": {},
    "LineTime": {},
    "LogText": {},
    "LogFilter": {},
    "MetricNamespace": {},
    "MetricName": {},
    "Unit": {},
    "Value": {},
    "CloudWatchEventId": {},
    "CloudWatchEventSource": {},
    "CloudWatchEventDetailType": {},
    "HealthEventArn": {},
    "HealthService": {},
    "HealthEventTypeCode": {},
    "HealthEventTypeCategory": {},
    "HealthEventDescription": {},
    "CodeDeployDeploymentId": {},
    "CodeDeployDeploymentGroup": {},
    "CodeDeployState": {},
    "CodeDeployApplication": {},
    "CodeDeployInstanceGroupId": {},
    "Ec2State": {},
    "RdsEventCategories": {},
    "RdsEventMessage": {},
    "S3EventName": {},
    "StatesExecutionArn": {},
    "StatesArn": {},
    "StatesStatus": {},
    "StatesInput": {},
    "EbsEvent": {},
    "EbsResult": {},
    "EbsCause": {},
    "EbsRequestId": {},
    "XRayFaultPercent": {},
    "XRayThrottlePercent": {},
    "XRayErrorPercent": {},
    "XRayRequestCount": {},
    "XRayRequestAverageLatency": {},
    "XRayNodeName": {},
    "XRayNodeType": {}
  }
]
```

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
"string"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"IGNORE"
```

<h2 id="tocS_SeverityLevel">SeverityLevel</h2>
<!-- backwards compatibility -->
<a id="schemaseveritylevel"></a>
<a id="schema_SeverityLevel"></a>
<a id="tocSseveritylevel"></a>
<a id="tocsseveritylevel"></a>

```json
"Informative"
```

<h2 id="tocS_RecurringCount">RecurringCount</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcount"></a>
<a id="schema_RecurringCount"></a>
<a id="tocSrecurringcount"></a>
<a id="tocsrecurringcount"></a>

```json
0
```

<h2 id="tocS_RemoveSNSTopic">RemoveSNSTopic</h2>
<!-- backwards compatibility -->
<a id="schemaremovesnstopic"></a>
<a id="schema_RemoveSNSTopic"></a>
<a id="tocSremovesnstopic"></a>
<a id="tocsremovesnstopic"></a>

```json
true
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

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

<p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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
