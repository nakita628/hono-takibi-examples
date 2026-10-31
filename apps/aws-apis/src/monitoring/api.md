<h1 id="amazon-cloudwatch">Amazon CloudWatch v2010-08-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications.</p> <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances. Then, use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.</p> <p>In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor your own custom metrics. With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.</p>

Base URLs:

* <a href="http://monitoring.us-east-1.amazonaws.com">http://monitoring.us-east-1.amazonaws.com</a> - The CloudWatch multi-region endpoint

* <a href="https://monitoring.us-east-1.amazonaws.com">https://monitoring.us-east-1.amazonaws.com</a> - The CloudWatch multi-region endpoint

* <a href="http://monitoring.cn-north-1.amazonaws.com.cn">http://monitoring.cn-north-1.amazonaws.com.cn</a> - The CloudWatch endpoint for China (Beijing) and China (Ningxia)

* <a href="https://monitoring.cn-north-1.amazonaws.com.cn">https://monitoring.cn-north-1.amazonaws.com.cn</a> - The CloudWatch endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/monitoring/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudwatch-default">Default</h1>

## GET_DeleteAlarms

<a id="opIdGET_DeleteAlarms"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteAlarms?AlarmNames=string&Action=DeleteAlarms&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteAlarms`

<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>

<h3 id="getdeletealarms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmNames|query|[[AlarmName](#schemaalarmname)]|true|The alarms to be deleted. Do not enclose the alarm names in quote marks.|
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
|Action|DeleteAlarms|
|Version|2010-08-01|

<h3 id="getdeletealarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteAlarms

<a id="opIdPOST_DeleteAlarms"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteAlarms?Action=DeleteAlarms&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmNames":{}}'
```

`POST /#Action=DeleteAlarms`

<p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> If you specify an incorrect alarm name or make any other error in the operation, no alarms are deleted. To confirm that alarms were deleted successfully, you can use the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html">DescribeAlarms</a> operation after using <code>DeleteAlarms</code>.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>

> Body parameter

```json
{
  "AlarmNames": {}
}
```

<h3 id="postdeletealarms-parameters">Parameters</h3>

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
|body|body|[DeleteAlarmsInput](#schemadeletealarmsinput)|false|none|
|» AlarmNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAlarms|
|Version|2010-08-01|

<h3 id="postdeletealarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteAnomalyDetector

<a id="opIdGET_DeleteAnomalyDetector"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteAnomalyDetector?Action=DeleteAnomalyDetector&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteAnomalyDetector`

 Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. 

<h3 id="getdeleteanomalydetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Namespace|query|string|false|The namespace associated with the anomaly detection model to delete.|
|MetricName|query|string|false|The metric name associated with the anomaly detection model to delete.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|The metric dimensions associated with the anomaly detection model to delete.|
|Stat|query|string|false|The statistic associated with the anomaly detection model to delete.|
|SingleMetricAnomalyDetector|query|object|false|<p>A single metric anomaly detector to be deleted.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMathAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the <code>SingleMetricAnomalyDetector</code> property.</p>|
|MetricMathAnomalyDetector|query|object|false|<p>The metric math anomaly detector to be deleted.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code>,</p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>DeleteAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the <code>MetricMathAnomalyDetector</code> property.</p>|
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
|Action|DeleteAnomalyDetector|
|Version|2010-08-01|

<h3 id="getdeleteanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnomalyDetectorOutput](#schemadeleteanomalydetectoroutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteAnomalyDetector

<a id="opIdPOST_DeleteAnomalyDetector"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteAnomalyDetector?Action=DeleteAnomalyDetector&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Namespace":{},"MetricName":{},"Dimensions":{},"Stat":{},"SingleMetricAnomalyDetector":{"Namespace":{},"MetricName":{},"Dimensions":{},"Stat":{}},"MetricMathAnomalyDetector":{"MetricDataQueries":{}}}'
```

`POST /#Action=DeleteAnomalyDetector`

 Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a> in the <i>CloudWatch User Guide</i>. 

> Body parameter

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {},
  "SingleMetricAnomalyDetector": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {}
  },
  "MetricMathAnomalyDetector": {
    "MetricDataQueries": {}
  }
}
```

<h3 id="postdeleteanomalydetector-parameters">Parameters</h3>

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
|body|body|[DeleteAnomalyDetectorInput](#schemadeleteanomalydetectorinput)|false|none|
|» Namespace|body|object|false|none|
|» MetricName|body|object|false|none|
|» Dimensions|body|object|false|none|
|» Stat|body|object|false|none|
|» SingleMetricAnomalyDetector|body|object|false|none|
|» » Namespace|body|object|false|none|
|» » MetricName|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » Stat|body|object|false|none|
|» MetricMathAnomalyDetector|body|object|false|none|
|» » MetricDataQueries|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAnomalyDetector|
|Version|2010-08-01|

<h3 id="postdeleteanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnomalyDetectorOutput](#schemadeleteanomalydetectoroutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDashboards

<a id="opIdGET_DeleteDashboards"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteDashboards?DashboardNames=string&Action=DeleteDashboards&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDashboards`

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

<h3 id="getdeletedashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DashboardNames|query|[[DashboardName](#schemadashboardname)]|true|The dashboards to be deleted. This parameter is required.|
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
|Action|DeleteDashboards|
|Version|2010-08-01|

<h3 id="getdeletedashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDashboardsOutput](#schemadeletedashboardsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|DashboardNotFoundError|[DashboardNotFoundError](#schemadashboardnotfounderror)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDashboards

<a id="opIdPOST_DeleteDashboards"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteDashboards?Action=DeleteDashboards&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DashboardNames":{}}'
```

`POST /#Action=DeleteDashboards`

Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.

> Body parameter

```json
{
  "DashboardNames": {}
}
```

<h3 id="postdeletedashboards-parameters">Parameters</h3>

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
|body|body|[DeleteDashboardsInput](#schemadeletedashboardsinput)|false|none|
|» DashboardNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDashboards|
|Version|2010-08-01|

<h3 id="postdeletedashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDashboardsOutput](#schemadeletedashboardsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|DashboardNotFoundError|[DashboardNotFoundError](#schemadashboardnotfounderror)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteInsightRules

<a id="opIdGET_DeleteInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteInsightRules?RuleNames=string&Action=DeleteInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteInsightRules`

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

<h3 id="getdeleteinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleNames|query|[[InsightRuleName](#schemainsightrulename)]|true|An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.|
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
|Action|DeleteInsightRules|
|Version|2010-08-01|

<h3 id="getdeleteinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInsightRulesOutput](#schemadeleteinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteInsightRules

<a id="opIdPOST_DeleteInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteInsightRules?Action=DeleteInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleNames":{}}'
```

`POST /#Action=DeleteInsightRules`

<p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

> Body parameter

```json
{
  "RuleNames": {}
}
```

<h3 id="postdeleteinsightrules-parameters">Parameters</h3>

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
|body|body|[DeleteInsightRulesInput](#schemadeleteinsightrulesinput)|false|none|
|» RuleNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteInsightRules|
|Version|2010-08-01|

<h3 id="postdeleteinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInsightRulesOutput](#schemadeleteinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteMetricStream

<a id="opIdGET_DeleteMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteMetricStream?Name=string&Action=DeleteMetricStream&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteMetricStream`

Permanently deletes the metric stream that you specify.

<h3 id="getdeletemetricstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|The name of the metric stream to delete.|
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
|Action|DeleteMetricStream|
|Version|2010-08-01|

<h3 id="getdeletemetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMetricStreamOutput](#schemadeletemetricstreamoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteMetricStream

<a id="opIdPOST_DeleteMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DeleteMetricStream?Action=DeleteMetricStream&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{}}'
```

`POST /#Action=DeleteMetricStream`

Permanently deletes the metric stream that you specify.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="postdeletemetricstream-parameters">Parameters</h3>

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
|body|body|[DeleteMetricStreamInput](#schemadeletemetricstreaminput)|false|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteMetricStream|
|Version|2010-08-01|

<h3 id="postdeletemetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMetricStreamOutput](#schemadeletemetricstreamoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAlarmHistory

<a id="opIdGET_DescribeAlarmHistory"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarmHistory?Action=DescribeAlarmHistory&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAlarmHistory`

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

<h3 id="getdescribealarmhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmName|query|string|false|The name of the alarm.|
|AlarmTypes|query|[[AlarmType](#schemaalarmtype)]|false|Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.|
|HistoryItemType|query|string|false|The type of alarm histories to retrieve.|
|StartDate|query|string(date-time)|false|The starting date to retrieve alarm history.|
|EndDate|query|string(date-time)|false|The ending date to retrieve alarm history.|
|MaxRecords|query|integer|false|The maximum number of alarm history records to retrieve.|
|NextToken|query|string|false|The token returned by a previous call to indicate that there is more data available.|
|ScanBy|query|string|false|Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.|
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
|AlarmTypes|CompositeAlarm|
|AlarmTypes|MetricAlarm|
|HistoryItemType|ConfigurationUpdate|
|HistoryItemType|StateUpdate|
|HistoryItemType|Action|
|ScanBy|TimestampDescending|
|ScanBy|TimestampAscending|
|Action|DescribeAlarmHistory|
|Version|2010-08-01|

<h3 id="getdescribealarmhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmHistoryOutput](#schemadescribealarmhistoryoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAlarmHistory

<a id="opIdPOST_DescribeAlarmHistory"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarmHistory?Action=DescribeAlarmHistory&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmName":{},"AlarmTypes":{},"HistoryItemType":{},"StartDate":{},"EndDate":{},"MaxRecords":{},"NextToken":{},"ScanBy":{}}'
```

`POST /#Action=DescribeAlarmHistory`

<p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p> <p>To use this operation and return information about a composite alarm, you must be signed on with the <code>cloudwatch:DescribeAlarmHistory</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarmHistory</code> permission has a narrower scope.</p>

> Body parameter

```json
{
  "AlarmName": {},
  "AlarmTypes": {},
  "HistoryItemType": {},
  "StartDate": {},
  "EndDate": {},
  "MaxRecords": {},
  "NextToken": {},
  "ScanBy": {}
}
```

<h3 id="postdescribealarmhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
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
|body|body|[DescribeAlarmHistoryInput](#schemadescribealarmhistoryinput)|false|none|
|» AlarmName|body|object|false|none|
|» AlarmTypes|body|object|false|none|
|» HistoryItemType|body|object|false|none|
|» StartDate|body|object|false|none|
|» EndDate|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|
|» ScanBy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAlarmHistory|
|Version|2010-08-01|

<h3 id="postdescribealarmhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmHistoryOutput](#schemadescribealarmhistoryoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAlarms

<a id="opIdGET_DescribeAlarms"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarms?Action=DescribeAlarms&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAlarms`

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

<h3 id="getdescribealarms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmNames|query|[[AlarmName](#schemaalarmname)]|false|The names of the alarms to retrieve information about.|
|AlarmNamePrefix|query|string|false|<p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix.</p> <p>If this parameter is specified, you cannot specify <code>AlarmNames</code>.</p>|
|AlarmTypes|query|[[AlarmType](#schemaalarmtype)]|false|Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.|
|ChildrenOfAlarmName|query|string|false|<p>If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the <code>AlarmRule</code> field of the composite alarm that you specify in <code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in <code>ChildrenOfAlarmName</code> is not returned.</p> <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code> information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>|
|ParentsOfAlarmName|query|string|false|<p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code> parameters that reference the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in <code>ParentsOfAlarmName</code> is not returned.</p> <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you receive a validation error.</p> <note> <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>|
|StateValue|query|string|false|Specify this parameter to receive information only about alarms that are currently in the state that you specify.|
|ActionPrefix|query|string|false|Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic.|
|MaxRecords|query|integer|false|The maximum number of alarm descriptions to retrieve.|
|NextToken|query|string|false|The token returned by a previous call to indicate that there is more data available.|
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
|AlarmTypes|CompositeAlarm|
|AlarmTypes|MetricAlarm|
|StateValue|OK|
|StateValue|ALARM|
|StateValue|INSUFFICIENT_DATA|
|Action|DescribeAlarms|
|Version|2010-08-01|

<h3 id="getdescribealarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmsOutput](#schemadescribealarmsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAlarms

<a id="opIdPOST_DescribeAlarms"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarms?Action=DescribeAlarms&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmNames":{},"AlarmNamePrefix":{},"AlarmTypes":{},"ChildrenOfAlarmName":{},"ParentsOfAlarmName":{},"StateValue":{},"ActionPrefix":{},"MaxRecords":{},"NextToken":{}}'
```

`POST /#Action=DescribeAlarms`

<p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm name, the alarm state, or a prefix for any action.</p> <p>To use this operation and return information about composite alarms, you must be signed on with the <code>cloudwatch:DescribeAlarms</code> permission that is scoped to <code>*</code>. You can't return information about composite alarms if your <code>cloudwatch:DescribeAlarms</code> permission has a narrower scope.</p>

> Body parameter

```json
{
  "AlarmNames": {},
  "AlarmNamePrefix": {},
  "AlarmTypes": {},
  "ChildrenOfAlarmName": {},
  "ParentsOfAlarmName": {},
  "StateValue": {},
  "ActionPrefix": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

<h3 id="postdescribealarms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxRecords|query|string|false|Pagination limit|
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
|body|body|[DescribeAlarmsInput](#schemadescribealarmsinput)|false|none|
|» AlarmNames|body|object|false|none|
|» AlarmNamePrefix|body|object|false|none|
|» AlarmTypes|body|object|false|none|
|» ChildrenOfAlarmName|body|object|false|none|
|» ParentsOfAlarmName|body|object|false|none|
|» StateValue|body|object|false|none|
|» ActionPrefix|body|object|false|none|
|» MaxRecords|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAlarms|
|Version|2010-08-01|

<h3 id="postdescribealarms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmsOutput](#schemadescribealarmsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAlarmsForMetric

<a id="opIdGET_DescribeAlarmsForMetric"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarmsForMetric?MetricName=string&Namespace=string&Action=DescribeAlarmsForMetric&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAlarmsForMetric`

<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>

<h3 id="getdescribealarmsformetric-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MetricName|query|string|true|The name of the metric.|
|Namespace|query|string|true|The namespace of the metric.|
|Statistic|query|string|false|The statistic for the metric, other than percentiles. For percentile statistics, use <code>ExtendedStatistics</code>.|
|ExtendedStatistic|query|string|false|The percentile statistic for the metric. Specify a value between p0.0 and p100.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.|
|Period|query|integer|false|The period, in seconds, over which the statistic is applied.|
|Unit|query|string|false|The unit for the metric.|
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
|Statistic|SampleCount|
|Statistic|Average|
|Statistic|Sum|
|Statistic|Minimum|
|Statistic|Maximum|
|Unit|Seconds|
|Unit|Microseconds|
|Unit|Milliseconds|
|Unit|Bytes|
|Unit|Kilobytes|
|Unit|Megabytes|
|Unit|Gigabytes|
|Unit|Terabytes|
|Unit|Bits|
|Unit|Kilobits|
|Unit|Megabits|
|Unit|Gigabits|
|Unit|Terabits|
|Unit|Percent|
|Unit|Count|
|Unit|Bytes/Second|
|Unit|Kilobytes/Second|
|Unit|Megabytes/Second|
|Unit|Gigabytes/Second|
|Unit|Terabytes/Second|
|Unit|Bits/Second|
|Unit|Kilobits/Second|
|Unit|Megabits/Second|
|Unit|Gigabits/Second|
|Unit|Terabits/Second|
|Unit|Count/Second|
|Unit|None|
|Action|DescribeAlarmsForMetric|
|Version|2010-08-01|

<h3 id="getdescribealarmsformetric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmsForMetricOutput](#schemadescribealarmsformetricoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAlarmsForMetric

<a id="opIdPOST_DescribeAlarmsForMetric"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAlarmsForMetric?Action=DescribeAlarmsForMetric&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MetricName":{},"Namespace":{},"Statistic":{},"ExtendedStatistic":{},"Dimensions":{},"Period":{},"Unit":{}}'
```

`POST /#Action=DescribeAlarmsForMetric`

<p>Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.</p> <p>This operation retrieves only standard alarms that are based on the specified metric. It does not return alarms based on math expressions that use the specified metric, or composite alarms that use the specified metric.</p>

> Body parameter

```json
{
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "ExtendedStatistic": {},
  "Dimensions": {},
  "Period": {},
  "Unit": {}
}
```

<h3 id="postdescribealarmsformetric-parameters">Parameters</h3>

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
|body|body|[DescribeAlarmsForMetricInput](#schemadescribealarmsformetricinput)|false|none|
|» MetricName|body|object|true|none|
|» Namespace|body|object|true|none|
|» Statistic|body|object|false|none|
|» ExtendedStatistic|body|object|false|none|
|» Dimensions|body|object|false|none|
|» Period|body|object|false|none|
|» Unit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAlarmsForMetric|
|Version|2010-08-01|

<h3 id="postdescribealarmsformetric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAlarmsForMetricOutput](#schemadescribealarmsformetricoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAnomalyDetectors

<a id="opIdGET_DescribeAnomalyDetectors"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAnomalyDetectors?Action=DescribeAnomalyDetectors&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAnomalyDetectors`

Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.

<h3 id="getdescribeanomalydetectors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Use the token returned by the previous operation to request the next page of results.|
|MaxResults|query|integer|false|<p>The maximum number of results to return in one operation. The maximum value that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>|
|Namespace|query|string|false|Limits the results to only the anomaly detection models that are associated with the specified namespace.|
|MetricName|query|string|false|Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.|
|AnomalyDetectorTypes|query|[[AnomalyDetectorType](#schemaanomalydetectortype)]|false|The anomaly detector types to request when using <code>DescribeAnomalyDetectorsInput</code>. If empty, defaults to <code>SINGLE_METRIC</code>.|
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
|AnomalyDetectorTypes|SINGLE_METRIC|
|AnomalyDetectorTypes|METRIC_MATH|
|Action|DescribeAnomalyDetectors|
|Version|2010-08-01|

<h3 id="getdescribeanomalydetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnomalyDetectorsOutput](#schemadescribeanomalydetectorsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAnomalyDetectors

<a id="opIdPOST_DescribeAnomalyDetectors"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeAnomalyDetectors?Action=DescribeAnomalyDetectors&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{},"Namespace":{},"MetricName":{},"Dimensions":{},"AnomalyDetectorTypes":{}}'
```

`POST /#Action=DescribeAnomalyDetectors`

Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will return all metric math anomaly detectors in your account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "AnomalyDetectorTypes": {}
}
```

<h3 id="postdescribeanomalydetectors-parameters">Parameters</h3>

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
|body|body|[DescribeAnomalyDetectorsInput](#schemadescribeanomalydetectorsinput)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Namespace|body|object|false|none|
|» MetricName|body|object|false|none|
|» Dimensions|body|object|false|none|
|» AnomalyDetectorTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAnomalyDetectors|
|Version|2010-08-01|

<h3 id="postdescribeanomalydetectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnomalyDetectorsOutput](#schemadescribeanomalydetectorsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeInsightRules

<a id="opIdGET_DescribeInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeInsightRules?Action=DescribeInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeInsightRules`

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

<h3 id="getdescribeinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Include this value, if it was returned by the previous operation, to get the next set of rules.|
|MaxResults|query|integer|false|The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used.|
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
|Action|DescribeInsightRules|
|Version|2010-08-01|

<h3 id="getdescribeinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInsightRulesOutput](#schemadescribeinsightrulesoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeInsightRules

<a id="opIdPOST_DescribeInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DescribeInsightRules?Action=DescribeInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=DescribeInsightRules`

<p>Returns a list of all the Contributor Insights rules in your account.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postdescribeinsightrules-parameters">Parameters</h3>

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
|body|body|[DescribeInsightRulesInput](#schemadescribeinsightrulesinput)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeInsightRules|
|Version|2010-08-01|

<h3 id="postdescribeinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInsightRulesOutput](#schemadescribeinsightrulesoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisableAlarmActions

<a id="opIdGET_DisableAlarmActions"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DisableAlarmActions?AlarmNames=string&Action=DisableAlarmActions&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisableAlarmActions`

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

<h3 id="getdisablealarmactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmNames|query|[[AlarmName](#schemaalarmname)]|true|The names of the alarms.|
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
|Action|DisableAlarmActions|
|Version|2010-08-01|

<h3 id="getdisablealarmactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisableAlarmActions

<a id="opIdPOST_DisableAlarmActions"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DisableAlarmActions?Action=DisableAlarmActions&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmNames":{}}'
```

`POST /#Action=DisableAlarmActions`

Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.

> Body parameter

```json
{
  "AlarmNames": {}
}
```

<h3 id="postdisablealarmactions-parameters">Parameters</h3>

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
|body|body|[DisableAlarmActionsInput](#schemadisablealarmactionsinput)|false|none|
|» AlarmNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisableAlarmActions|
|Version|2010-08-01|

<h3 id="postdisablealarmactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DisableInsightRules

<a id="opIdGET_DisableInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DisableInsightRules?RuleNames=string&Action=DisableInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DisableInsightRules`

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

<h3 id="getdisableinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleNames|query|[[InsightRuleName](#schemainsightrulename)]|true|An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.|
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
|Action|DisableInsightRules|
|Version|2010-08-01|

<h3 id="getdisableinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableInsightRulesOutput](#schemadisableinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DisableInsightRules

<a id="opIdPOST_DisableInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=DisableInsightRules?Action=DisableInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleNames":{}}'
```

`POST /#Action=DisableInsightRules`

Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.

> Body parameter

```json
{
  "RuleNames": {}
}
```

<h3 id="postdisableinsightrules-parameters">Parameters</h3>

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
|body|body|[DisableInsightRulesInput](#schemadisableinsightrulesinput)|false|none|
|» RuleNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DisableInsightRules|
|Version|2010-08-01|

<h3 id="postdisableinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableInsightRulesOutput](#schemadisableinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EnableAlarmActions

<a id="opIdGET_EnableAlarmActions"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=EnableAlarmActions?AlarmNames=string&Action=EnableAlarmActions&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EnableAlarmActions`

Enables the actions for the specified alarms.

<h3 id="getenablealarmactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmNames|query|[[AlarmName](#schemaalarmname)]|true|The names of the alarms.|
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
|Action|EnableAlarmActions|
|Version|2010-08-01|

<h3 id="getenablealarmactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EnableAlarmActions

<a id="opIdPOST_EnableAlarmActions"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=EnableAlarmActions?Action=EnableAlarmActions&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmNames":{}}'
```

`POST /#Action=EnableAlarmActions`

Enables the actions for the specified alarms.

> Body parameter

```json
{
  "AlarmNames": {}
}
```

<h3 id="postenablealarmactions-parameters">Parameters</h3>

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
|body|body|[EnableAlarmActionsInput](#schemaenablealarmactionsinput)|false|none|
|» AlarmNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EnableAlarmActions|
|Version|2010-08-01|

<h3 id="postenablealarmactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_EnableInsightRules

<a id="opIdGET_EnableInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=EnableInsightRules?RuleNames=string&Action=EnableInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=EnableInsightRules`

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

<h3 id="getenableinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleNames|query|[[InsightRuleName](#schemainsightrulename)]|true|An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.|
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
|Action|EnableInsightRules|
|Version|2010-08-01|

<h3 id="getenableinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableInsightRulesOutput](#schemaenableinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_EnableInsightRules

<a id="opIdPOST_EnableInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=EnableInsightRules?Action=EnableInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleNames":{}}'
```

`POST /#Action=EnableInsightRules`

Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.

> Body parameter

```json
{
  "RuleNames": {}
}
```

<h3 id="postenableinsightrules-parameters">Parameters</h3>

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
|body|body|[EnableInsightRulesInput](#schemaenableinsightrulesinput)|false|none|
|» RuleNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|EnableInsightRules|
|Version|2010-08-01|

<h3 id="postenableinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableInsightRulesOutput](#schemaenableinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetDashboard

<a id="opIdGET_GetDashboard"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetDashboard?DashboardName=string&Action=GetDashboard&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetDashboard`

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

<h3 id="getgetdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DashboardName|query|string|true|The name of the dashboard to be described.|
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
|Action|GetDashboard|
|Version|2010-08-01|

<h3 id="getgetdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDashboardOutput](#schemagetdashboardoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|DashboardNotFoundError|[DashboardNotFoundError](#schemadashboardnotfounderror)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetDashboard

<a id="opIdPOST_GetDashboard"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetDashboard?Action=GetDashboard&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DashboardName":{}}'
```

`POST /#Action=GetDashboard`

<p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>

> Body parameter

```json
{
  "DashboardName": {}
}
```

<h3 id="postgetdashboard-parameters">Parameters</h3>

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
|body|body|[GetDashboardInput](#schemagetdashboardinput)|false|none|
|» DashboardName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetDashboard|
|Version|2010-08-01|

<h3 id="postgetdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDashboardOutput](#schemagetdashboardoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|DashboardNotFoundError|[DashboardNotFoundError](#schemadashboardnotfounderror)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetInsightRuleReport

<a id="opIdGET_GetInsightRuleReport"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetInsightRuleReport?RuleName=string&StartTime=1970-01-01T00%3A00%3A00Z&EndTime=1970-01-01T00%3A00%3A00Z&Period=1&Action=GetInsightRuleReport&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetInsightRuleReport`

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

<h3 id="getgetinsightrulereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleName|query|string|true|The name of the rule that you want to see data from.|
|StartTime|query|string(date-time)|true|The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.|
|EndTime|query|string(date-time)|true|The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.|
|Period|query|integer|true|The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.|
|MaxContributorCount|query|integer|false|The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.|
|Metrics|query|[[InsightRuleMetricName](#schemainsightrulemetricname)]|false|<p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>|
|OrderBy|query|string|false|Determines what statistic to use to rank the contributors. Valid values are SUM and MAXIMUM.|
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
|Action|GetInsightRuleReport|
|Version|2010-08-01|

<h3 id="getgetinsightrulereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightRuleReportOutput](#schemagetinsightrulereportoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetInsightRuleReport

<a id="opIdPOST_GetInsightRuleReport"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetInsightRuleReport?Action=GetInsightRuleReport&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleName":{},"StartTime":{},"EndTime":{},"Period":{},"MaxContributorCount":{},"Metrics":{},"OrderBy":{}}'
```

`POST /#Action=GetInsightRuleReport`

<p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>

> Body parameter

```json
{
  "RuleName": {},
  "StartTime": {},
  "EndTime": {},
  "Period": {},
  "MaxContributorCount": {},
  "Metrics": {},
  "OrderBy": {}
}
```

<h3 id="postgetinsightrulereport-parameters">Parameters</h3>

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
|body|body|[GetInsightRuleReportInput](#schemagetinsightrulereportinput)|false|none|
|» RuleName|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» Period|body|object|true|none|
|» MaxContributorCount|body|object|false|none|
|» Metrics|body|object|false|none|
|» OrderBy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetInsightRuleReport|
|Version|2010-08-01|

<h3 id="postgetinsightrulereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInsightRuleReportOutput](#schemagetinsightrulereportoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetMetricData

<a id="opIdGET_GetMetricData"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricData?MetricDataQueries=%7B%22Id%22%3A%7B%7D%2C%22MetricStat%22%3A%7B%22Metric%22%3A%7B%22Namespace%22%3A%7B%7D%2C%22MetricName%22%3A%7B%7D%2C%22Dimensions%22%3A%7B%7D%7D%2C%22Period%22%3A%7B%7D%2C%22Stat%22%3A%7B%7D%2C%22Unit%22%3A%7B%7D%7D%2C%22Expression%22%3A%7B%7D%2C%22Label%22%3A%7B%7D%2C%22ReturnData%22%3A%7B%7D%2C%22Period%22%3A%7B%7D%2C%22AccountId%22%3A%7B%7D%7D&StartTime=1970-01-01T00%3A00%3A00Z&EndTime=1970-01-01T00%3A00%3A00Z&Action=GetMetricData&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetMetricData`

<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>

<h3 id="getgetmetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MetricDataQueries|query|[[MetricDataQuery](#schemametricdataquery)]|true|The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 500 <code>MetricDataQuery</code> structures. Each of these structures can specify either a metric to retrieve, a Metrics Insights query, or a math expression to perform on retrieved data. |
|StartTime|query|string(date-time)|true|<p>The time stamp indicating the earliest data to be returned.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. </p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>|
|EndTime|query|string(date-time)|true|<p>The time stamp indicating the latest data to be returned.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>|
|NextToken|query|string|false|Include this value, if it was returned by the previous <code>GetMetricData</code> operation, to get the next set of data points.|
|ScanBy|query|string|false|The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates when the <code>MaxDatapoints</code> limit is reached.|
|MaxDatapoints|query|integer|false|The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.|
|LabelOptions|query|object|false|This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels of returned data display the correct time for your time zone. |
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
|ScanBy|TimestampDescending|
|ScanBy|TimestampAscending|
|Action|GetMetricData|
|Version|2010-08-01|

<h3 id="getgetmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricDataOutput](#schemagetmetricdataoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetMetricData

<a id="opIdPOST_GetMetricData"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricData?Action=GetMetricData&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MetricDataQueries":{},"StartTime":{},"EndTime":{},"NextToken":{},"ScanBy":{},"MaxDatapoints":{},"LabelOptions":{"Timezone":{}}}'
```

`POST /#Action=GetMetricData`

<p>You can use the <code>GetMetricData</code> API to retrieve CloudWatch metric values. The operation can also include a CloudWatch Metrics Insights query, and one or more metric math functions.</p> <p>A <code>GetMetricData</code> operation that does not include a query can retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform metric math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>If you include a Metrics Insights query, each <code>GetMetricData</code> operation can include only one query. But the same <code>GetMetricData</code> operation can also retrieve other metrics. Metrics Insights queries can query only the most recent three hours of metric data. For more information about Metrics Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/query_with_cloudwatch-metrics-insights.html">Query your metrics with CloudWatch Metrics Insights</a>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p> <p> <b>Using Metrics Insights queries with metric math</b> </p> <p>You can't mix a Metric Insights query and metric math syntax in the same expression, but you can reference results from a Metrics Insights query within other Metric math expressions. A Metrics Insights query without a <b>GROUP BY</b> clause returns a single time-series (TS), and can be used as input for a metric math expression that expects a single time series. A Metrics Insights query with a <b>GROUP BY</b> clause returns an array of time-series (TS[]), and can be used as input for a metric math expression that expects an array of time series. </p>

> Body parameter

```json
{
  "MetricDataQueries": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "ScanBy": {},
  "MaxDatapoints": {},
  "LabelOptions": {
    "Timezone": {}
  }
}
```

<h3 id="postgetmetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxDatapoints|query|string|false|Pagination limit|
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
|body|body|[GetMetricDataInput](#schemagetmetricdatainput)|false|none|
|» MetricDataQueries|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» NextToken|body|object|false|none|
|» ScanBy|body|object|false|none|
|» MaxDatapoints|body|object|false|none|
|» LabelOptions|body|object|false|none|
|» » Timezone|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetMetricData|
|Version|2010-08-01|

<h3 id="postgetmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricDataOutput](#schemagetmetricdataoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetMetricStatistics

<a id="opIdGET_GetMetricStatistics"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricStatistics?Namespace=string&MetricName=string&StartTime=1970-01-01T00%3A00%3A00Z&EndTime=1970-01-01T00%3A00%3A00Z&Period=1&Action=GetMetricStatistics&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetMetricStatistics`

<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

<h3 id="getgetmetricstatistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Namespace|query|string|true|The namespace of the metric, with or without spaces.|
|MetricName|query|string|true|The name of the metric, with or without spaces.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can't retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.|
|StartTime|query|string(date-time)|true|<p>The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p>|
|EndTime|query|string(date-time)|true|<p>The time stamp that determines the last data point to return.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>|
|Period|query|integer|true|<p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>|
|Statistics|query|[[Statistic](#schemastatistic)]|false|The metric statistics, other than percentile. For percentile statistics, use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.|
|ExtendedStatistics|query|[[ExtendedStatistic](#schemaextendedstatistic)]|false|The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.|
|Unit|query|string|false|The unit for a given metric. If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.|
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
|Statistics|SampleCount|
|Statistics|Average|
|Statistics|Sum|
|Statistics|Minimum|
|Statistics|Maximum|
|Unit|Seconds|
|Unit|Microseconds|
|Unit|Milliseconds|
|Unit|Bytes|
|Unit|Kilobytes|
|Unit|Megabytes|
|Unit|Gigabytes|
|Unit|Terabytes|
|Unit|Bits|
|Unit|Kilobits|
|Unit|Megabits|
|Unit|Gigabits|
|Unit|Terabits|
|Unit|Percent|
|Unit|Count|
|Unit|Bytes/Second|
|Unit|Kilobytes/Second|
|Unit|Megabytes/Second|
|Unit|Gigabytes/Second|
|Unit|Terabytes/Second|
|Unit|Bits/Second|
|Unit|Kilobits/Second|
|Unit|Megabits/Second|
|Unit|Gigabits/Second|
|Unit|Terabits/Second|
|Unit|Count/Second|
|Unit|None|
|Action|GetMetricStatistics|
|Version|2010-08-01|

<h3 id="getgetmetricstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricStatisticsOutput](#schemagetmetricstatisticsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetMetricStatistics

<a id="opIdPOST_GetMetricStatistics"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricStatistics?Action=GetMetricStatistics&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Namespace":{},"MetricName":{},"Dimensions":{},"StartTime":{},"EndTime":{},"Period":{},"Statistics":{},"ExtendedStatistics":{},"Unit":{}}'
```

`POST /#Action=GetMetricStatistics`

<p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by Amazon Web Services services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>

> Body parameter

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "StartTime": {},
  "EndTime": {},
  "Period": {},
  "Statistics": {},
  "ExtendedStatistics": {},
  "Unit": {}
}
```

<h3 id="postgetmetricstatistics-parameters">Parameters</h3>

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
|body|body|[GetMetricStatisticsInput](#schemagetmetricstatisticsinput)|false|none|
|» Namespace|body|object|true|none|
|» MetricName|body|object|true|none|
|» Dimensions|body|object|false|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» Period|body|object|true|none|
|» Statistics|body|object|false|none|
|» ExtendedStatistics|body|object|false|none|
|» Unit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetMetricStatistics|
|Version|2010-08-01|

<h3 id="postgetmetricstatistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricStatisticsOutput](#schemagetmetricstatisticsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetMetricStream

<a id="opIdGET_GetMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricStream?Name=string&Action=GetMetricStream&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetMetricStream`

Returns information about the metric stream that you specify.

<h3 id="getgetmetricstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|The name of the metric stream to retrieve information about.|
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
|Action|GetMetricStream|
|Version|2010-08-01|

<h3 id="getgetmetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricStreamOutput](#schemagetmetricstreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetMetricStream

<a id="opIdPOST_GetMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricStream?Action=GetMetricStream&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{}}'
```

`POST /#Action=GetMetricStream`

Returns information about the metric stream that you specify.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="postgetmetricstream-parameters">Parameters</h3>

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
|body|body|[GetMetricStreamInput](#schemagetmetricstreaminput)|false|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetMetricStream|
|Version|2010-08-01|

<h3 id="postgetmetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricStreamOutput](#schemagetmetricstreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetMetricWidgetImage

<a id="opIdGET_GetMetricWidgetImage"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricWidgetImage?MetricWidget=string&Action=GetMetricWidgetImage&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetMetricWidgetImage`

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

<h3 id="getgetmetricwidgetimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MetricWidget|query|string|true|<p>A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p> <p>For more information about the syntax of <code>MetricWidget</code> see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p> <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.</p>|
|OutputFormat|query|string|false|<p>The format of the resulting image. Only PNG images are supported.</p> <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code> field. For example:</p> <p> <code> &lt;GetMetricWidgetImageResponse xmlns=&lt;URLstring&gt;&gt;</code> </p> <p> <code> &lt;GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;MetricWidgetImage&gt;</code> </p> <p> <code> iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code> </p> <p> <code> &lt;/MetricWidgetImage&gt;</code> </p> <p> <code> &lt;/GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;ResponseMetadata&gt;</code> </p> <p> <code> &lt;RequestId&gt;6f0d4192-4d42-11e8-82c1-f539a07e0e3b&lt;/RequestId&gt;</code> </p> <p> <code> &lt;/ResponseMetadata&gt;</code> </p> <p> <code>&lt;/GetMetricWidgetImageResponse&gt;</code> </p> <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most use cases, and all actions using an Amazon Web Services SDK, you should use <code>png</code>. If you specify <code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>, and the body of the response is a PNG image. </p>|
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
|Action|GetMetricWidgetImage|
|Version|2010-08-01|

<h3 id="getgetmetricwidgetimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricWidgetImageOutput](#schemagetmetricwidgetimageoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetMetricWidgetImage

<a id="opIdPOST_GetMetricWidgetImage"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=GetMetricWidgetImage?Action=GetMetricWidgetImage&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MetricWidget":{},"OutputFormat":{}}'
```

`POST /#Action=GetMetricWidgetImage`

<p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>

> Body parameter

```json
{
  "MetricWidget": {},
  "OutputFormat": {}
}
```

<h3 id="postgetmetricwidgetimage-parameters">Parameters</h3>

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
|body|body|[GetMetricWidgetImageInput](#schemagetmetricwidgetimageinput)|false|none|
|» MetricWidget|body|object|true|none|
|» OutputFormat|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetMetricWidgetImage|
|Version|2010-08-01|

<h3 id="postgetmetricwidgetimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricWidgetImageOutput](#schemagetmetricwidgetimageoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListDashboards

<a id="opIdGET_ListDashboards"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListDashboards?Action=ListDashboards&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListDashboards`

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

<h3 id="getlistdashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DashboardNamePrefix|query|string|false|If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_". |
|NextToken|query|string|false|The token returned by a previous call to indicate that there is more data available.|
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
|Action|ListDashboards|
|Version|2010-08-01|

<h3 id="getlistdashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDashboardsOutput](#schemalistdashboardsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListDashboards

<a id="opIdPOST_ListDashboards"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListDashboards?Action=ListDashboards&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DashboardNamePrefix":{},"NextToken":{}}'
```

`POST /#Action=ListDashboards`

<p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>

> Body parameter

```json
{
  "DashboardNamePrefix": {},
  "NextToken": {}
}
```

<h3 id="postlistdashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListDashboardsInput](#schemalistdashboardsinput)|false|none|
|» DashboardNamePrefix|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListDashboards|
|Version|2010-08-01|

<h3 id="postlistdashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDashboardsOutput](#schemalistdashboardsoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListManagedInsightRules

<a id="opIdGET_ListManagedInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListManagedInsightRules?ResourceARN=string&Action=ListManagedInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListManagedInsightRules`

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

<h3 id="getlistmanagedinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceARN|query|string|true| The ARN of an Amazon Web Services resource that has managed Contributor Insights rules. |
|NextToken|query|string|false| Include this value to get the next set of rules if the value was returned by the previous operation. |
|MaxResults|query|integer|false| The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is <code>100</code>. |
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
|Action|ListManagedInsightRules|
|Version|2010-08-01|

<h3 id="getlistmanagedinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedInsightRulesOutput](#schemalistmanagedinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListManagedInsightRules

<a id="opIdPOST_ListManagedInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListManagedInsightRules?Action=ListManagedInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceARN":{},"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListManagedInsightRules`

 Returns a list that contains the number of managed Contributor Insights rules in your account. 

> Body parameter

```json
{
  "ResourceARN": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistmanagedinsightrules-parameters">Parameters</h3>

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
|body|body|[ListManagedInsightRulesInput](#schemalistmanagedinsightrulesinput)|false|none|
|» ResourceARN|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListManagedInsightRules|
|Version|2010-08-01|

<h3 id="postlistmanagedinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListManagedInsightRulesOutput](#schemalistmanagedinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListMetricStreams

<a id="opIdGET_ListMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListMetricStreams?Action=ListMetricStreams&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListMetricStreams`

Returns a list of metric streams in this account.

<h3 id="getlistmetricstreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Include this value, if it was returned by the previous call, to get the next set of metric streams.|
|MaxResults|query|integer|false|The maximum number of results to return in one operation.|
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
|Action|ListMetricStreams|
|Version|2010-08-01|

<h3 id="getlistmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricStreamsOutput](#schemalistmetricstreamsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListMetricStreams

<a id="opIdPOST_ListMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListMetricStreams?Action=ListMetricStreams&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"NextToken":{},"MaxResults":{}}'
```

`POST /#Action=ListMetricStreams`

Returns a list of metric streams in this account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="postlistmetricstreams-parameters">Parameters</h3>

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
|body|body|[ListMetricStreamsInput](#schemalistmetricstreamsinput)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListMetricStreams|
|Version|2010-08-01|

<h3 id="postlistmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricStreamsOutput](#schemalistmetricstreamsoutput)|
|480|480|InvalidNextToken|[InvalidNextToken](#schemainvalidnexttoken)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListMetrics

<a id="opIdGET_ListMetrics"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListMetrics?Action=ListMetrics&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListMetrics`

<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>

<h3 id="getlistmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Namespace|query|string|false|The metric namespace to filter against. Only the namespace that matches exactly will be returned.|
|MetricName|query|string|false|The name of the metric to filter against. Only the metrics with names that match exactly will be returned.|
|Dimensions|query|[[DimensionFilter](#schemadimensionfilter)]|false|The dimensions to filter against. Only the dimensions that match exactly will be returned.|
|NextToken|query|string|false|The token returned by a previous call to indicate that there is more data available.|
|RecentlyActive|query|string|false|<p>To filter the results to show only metrics that have had data points published in the past three hours, specify this parameter with a value of <code>PT3H</code>. This is the only valid value for this parameter.</p> <p>The results that are returned are an approximation of the value you specify. There is a low probability that the returned results include metrics with last published data as much as 40 minutes more than the specified time interval.</p>|
|IncludeLinkedAccounts|query|boolean|false|<p>If you are using this operation in a monitoring account, specify <code>true</code> to include metrics from source accounts in the returned data.</p> <p>The default is <code>false</code>.</p>|
|OwningAccount|query|string|false|When you use this operation in a monitoring account, use this field to return metrics only from one source account. To do so, specify that source account ID in this field, and also specify <code>true</code> for <code>IncludeLinkedAccounts</code>.|
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
|RecentlyActive|PT3H|
|Action|ListMetrics|
|Version|2010-08-01|

<h3 id="getlistmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricsOutput](#schemalistmetricsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListMetrics

<a id="opIdPOST_ListMetrics"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListMetrics?Action=ListMetrics&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Namespace":{},"MetricName":{},"Dimensions":{},"NextToken":{},"RecentlyActive":{},"IncludeLinkedAccounts":{},"OwningAccount":{}}'
```

`POST /#Action=ListMetrics`

<p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view metrics from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p> <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>

> Body parameter

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "NextToken": {},
  "RecentlyActive": {},
  "IncludeLinkedAccounts": {},
  "OwningAccount": {}
}
```

<h3 id="postlistmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[ListMetricsInput](#schemalistmetricsinput)|false|none|
|» Namespace|body|object|false|none|
|» MetricName|body|object|false|none|
|» Dimensions|body|object|false|none|
|» NextToken|body|object|false|none|
|» RecentlyActive|body|object|false|none|
|» IncludeLinkedAccounts|body|object|false|none|
|» OwningAccount|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListMetrics|
|Version|2010-08-01|

<h3 id="postlistmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMetricsOutput](#schemalistmetricsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListTagsForResource

<a id="opIdGET_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListTagsForResource?ResourceARN=string&Action=ListTagsForResource&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListTagsForResource`

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

<h3 id="getlisttagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceARN|query|string|true|<p>The ARN of the CloudWatch resource that you want to view tags for.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>|
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
|Action|ListTagsForResource|
|Version|2010-08-01|

<h3 id="getlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListTagsForResource

<a id="opIdPOST_ListTagsForResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=ListTagsForResource?Action=ListTagsForResource&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceARN":{}}'
```

`POST /#Action=ListTagsForResource`

Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="postlisttagsforresource-parameters">Parameters</h3>

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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|false|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|ListTagsForResource|
|Version|2010-08-01|

<h3 id="postlisttagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutAnomalyDetector

<a id="opIdGET_PutAnomalyDetector"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutAnomalyDetector?Action=PutAnomalyDetector&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutAnomalyDetector`

<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>

<h3 id="getputanomalydetector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Namespace|query|string|false|The namespace of the metric to create the anomaly detection model for.|
|MetricName|query|string|false|The name of the metric to create the anomaly detection model for.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|The metric dimensions to create the anomaly detection model for.|
|Stat|query|string|false|The statistic to use for the metric and the anomaly detection model.|
|Configuration|query|object|false|<p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.</p> <p>The configuration can also include the time zone to use for the metric.</p>|
|SingleMetricAnomalyDetector|query|object|false|<p>A single metric anomaly detector to be created.</p> <p>When using <code>SingleMetricAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>MetricMatchAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the single metric anomaly detector attributes as part of the property <code>SingleMetricAnomalyDetector</code>.</p>|
|MetricMathAnomalyDetector|query|object|false|<p>The metric math anomaly detector to be created.</p> <p>When using <code>MetricMathAnomalyDetector</code>, you cannot include the following parameters in the same operation:</p> <ul> <li> <p> <code>Dimensions</code> </p> </li> <li> <p> <code>MetricName</code> </p> </li> <li> <p> <code>Namespace</code> </p> </li> <li> <p> <code>Stat</code> </p> </li> <li> <p>the <code>SingleMetricAnomalyDetector</code> parameters of <code>PutAnomalyDetectorInput</code> </p> </li> </ul> <p>Instead, specify the metric math anomaly detector attributes as part of the property <code>MetricMathAnomalyDetector</code>.</p>|
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
|Action|PutAnomalyDetector|
|Version|2010-08-01|

<h3 id="getputanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAnomalyDetectorOutput](#schemaputanomalydetectoroutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutAnomalyDetector

<a id="opIdPOST_PutAnomalyDetector"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutAnomalyDetector?Action=PutAnomalyDetector&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Namespace":{},"MetricName":{},"Dimensions":{},"Stat":{},"Configuration":{"ExcludedTimeRanges":{},"MetricTimezone":{}},"SingleMetricAnomalyDetector":{"Namespace":{},"MetricName":{},"Dimensions":{},"Stat":{}},"MetricMathAnomalyDetector":{"MetricDataQueries":{}}}'
```

`POST /#Action=PutAnomalyDetector`

<p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>

> Body parameter

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {},
  "Configuration": {
    "ExcludedTimeRanges": {},
    "MetricTimezone": {}
  },
  "SingleMetricAnomalyDetector": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {}
  },
  "MetricMathAnomalyDetector": {
    "MetricDataQueries": {}
  }
}
```

<h3 id="postputanomalydetector-parameters">Parameters</h3>

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
|body|body|[PutAnomalyDetectorInput](#schemaputanomalydetectorinput)|false|none|
|» Namespace|body|object|false|none|
|» MetricName|body|object|false|none|
|» Dimensions|body|object|false|none|
|» Stat|body|object|false|none|
|» Configuration|body|object|false|none|
|» » ExcludedTimeRanges|body|object|false|none|
|» » MetricTimezone|body|object|false|none|
|» SingleMetricAnomalyDetector|body|object|false|none|
|» » Namespace|body|object|false|none|
|» » MetricName|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » Stat|body|object|false|none|
|» MetricMathAnomalyDetector|body|object|false|none|
|» » MetricDataQueries|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutAnomalyDetector|
|Version|2010-08-01|

<h3 id="postputanomalydetector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutAnomalyDetectorOutput](#schemaputanomalydetectoroutput)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutCompositeAlarm

<a id="opIdGET_PutCompositeAlarm"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutCompositeAlarm?AlarmName=string&AlarmRule=string&Action=PutCompositeAlarm&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutCompositeAlarm`

<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>

<h3 id="getputcompositealarm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ActionsEnabled|query|boolean|false|Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is <code>TRUE</code>.|
|AlarmActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> \| <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i> </code> </p>|
|AlarmDescription|query|string|false|The description for the composite alarm.|
|AlarmName|query|string|true|The name for the composite alarm. This name must be unique within the Region.|
|AlarmRule|query|string|true|<p>An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.</p> <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p> <p>Functions can include the following:</p> <ul> <li> <p> <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in ALARM state.</p> </li> <li> <p> <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in OK state.</p> </li> <li> <p> <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in INSUFFICIENT_DATA state.</p> </li> <li> <p> <code>TRUE</code> always evaluates to TRUE.</p> </li> <li> <p> <code>FALSE</code> always evaluates to FALSE.</p> </li> </ul> <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and for testing your alarm actions.</p> <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p> <p>The following are some examples of <code>AlarmRule</code>:</p> <ul> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p> </li> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code> specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.</p> </li> <li> <p> <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.</p> </li> </ul> <p>The <code>AlarmRule</code> can specify as many as 100 "children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses.</p>|
|InsufficientDataActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>|
|OKActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p>|
|ActionsSuppressor|query|string|false| Actions will be suppressed if the suppressor alarm is in the <code>ALARM</code> state. <code>ActionsSuppressor</code> can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. |
|ActionsSuppressorWaitPeriod|query|integer|false|<p> The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>WaitPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>|
|ActionsSuppressorExtensionPeriod|query|integer|false|<p> The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the <code>ALARM</code> state. After this time, the composite alarm performs its actions. </p> <important> <p> <code>ExtensionPeriod</code> is required only when <code>ActionsSuppressor</code> is specified. </p> </important>|
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
|Action|PutCompositeAlarm|
|Version|2010-08-01|

<h3 id="getputcompositealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutCompositeAlarm

<a id="opIdPOST_PutCompositeAlarm"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutCompositeAlarm?Action=PutCompositeAlarm&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ActionsEnabled":{},"AlarmActions":{},"AlarmDescription":{},"AlarmName":{},"AlarmRule":{},"InsufficientDataActions":{},"OKActions":{},"Tags":{},"ActionsSuppressor":{},"ActionsSuppressorWaitPeriod":{},"ActionsSuppressorExtensionPeriod":{}}'
```

`POST /#Action=PutCompositeAlarm`

<p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms. The rule expression of a composite alarm can include as many as 100 underlying alarms. Any single alarm can be included in the rule expressions of as many as 150 composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>false</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>To use this operation, you must be signed on with the <code>cloudwatch:PutCompositeAlarm</code> permission that is scoped to <code>*</code>. You can't create a composite alarms if your <code>cloudwatch:PutCompositeAlarm</code> permission has a narrower scope.</p> <p>If you are an IAM user, you must have <code>iam:CreateServiceLinkedRole</code> to create a composite alarm that has Systems Manager OpsItem actions.</p>

> Body parameter

```json
{
  "ActionsEnabled": {},
  "AlarmActions": {},
  "AlarmDescription": {},
  "AlarmName": {},
  "AlarmRule": {},
  "InsufficientDataActions": {},
  "OKActions": {},
  "Tags": {},
  "ActionsSuppressor": {},
  "ActionsSuppressorWaitPeriod": {},
  "ActionsSuppressorExtensionPeriod": {}
}
```

<h3 id="postputcompositealarm-parameters">Parameters</h3>

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
|body|body|[PutCompositeAlarmInput](#schemaputcompositealarminput)|false|none|
|» ActionsEnabled|body|object|false|none|
|» AlarmActions|body|object|false|none|
|» AlarmDescription|body|object|false|none|
|» AlarmName|body|object|true|none|
|» AlarmRule|body|object|true|none|
|» InsufficientDataActions|body|object|false|none|
|» OKActions|body|object|false|none|
|» Tags|body|object|false|none|
|» ActionsSuppressor|body|object|false|none|
|» ActionsSuppressorWaitPeriod|body|object|false|none|
|» ActionsSuppressorExtensionPeriod|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutCompositeAlarm|
|Version|2010-08-01|

<h3 id="postputcompositealarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutDashboard

<a id="opIdGET_PutDashboard"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutDashboard?DashboardName=string&DashboardBody=string&Action=PutDashboard&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutDashboard`

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

<h3 id="getputdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DashboardName|query|string|true|The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.|
|DashboardBody|query|string|true|<p>The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.</p> <p>For more information about the syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>|
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
|Action|PutDashboard|
|Version|2010-08-01|

<h3 id="getputdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDashboardOutput](#schemaputdashboardoutput)|
|480|480|DashboardInvalidInputError|[DashboardInvalidInputError](#schemadashboardinvalidinputerror)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutDashboard

<a id="opIdPOST_PutDashboard"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutDashboard?Action=PutDashboard&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DashboardName":{},"DashboardBody":{}}'
```

`POST /#Action=PutDashboard`

<p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>

> Body parameter

```json
{
  "DashboardName": {},
  "DashboardBody": {}
}
```

<h3 id="postputdashboard-parameters">Parameters</h3>

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
|body|body|[PutDashboardInput](#schemaputdashboardinput)|false|none|
|» DashboardName|body|object|true|none|
|» DashboardBody|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutDashboard|
|Version|2010-08-01|

<h3 id="postputdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutDashboardOutput](#schemaputdashboardoutput)|
|480|480|DashboardInvalidInputError|[DashboardInvalidInputError](#schemadashboardinvalidinputerror)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutInsightRule

<a id="opIdGET_PutInsightRule"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutInsightRule?RuleName=string&RuleDefinition=string&Action=PutInsightRule&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutInsightRule`

<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

<h3 id="getputinsightrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RuleName|query|string|true|A unique name for the rule.|
|RuleState|query|string|false|The state of the rule. Valid values are ENABLED and DISABLED.|
|RuleDefinition|query|string|true|The definition of the rule, as a JSON object. For details on the valid syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights Rule Syntax</a>.|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code> permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p> <p>If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>|
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
|Action|PutInsightRule|
|Version|2010-08-01|

<h3 id="getputinsightrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInsightRuleOutput](#schemaputinsightruleoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutInsightRule

<a id="opIdPOST_PutInsightRule"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutInsightRule?Action=PutInsightRule&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RuleName":{},"RuleState":{},"RuleDefinition":{},"Tags":{}}'
```

`POST /#Action=PutInsightRule`

<p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created might not be available.</p>

> Body parameter

```json
{
  "RuleName": {},
  "RuleState": {},
  "RuleDefinition": {},
  "Tags": {}
}
```

<h3 id="postputinsightrule-parameters">Parameters</h3>

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
|body|body|[PutInsightRuleInput](#schemaputinsightruleinput)|false|none|
|» RuleName|body|object|true|none|
|» RuleState|body|object|false|none|
|» RuleDefinition|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutInsightRule|
|Version|2010-08-01|

<h3 id="postputinsightrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInsightRuleOutput](#schemaputinsightruleoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutManagedInsightRules

<a id="opIdGET_PutManagedInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutManagedInsightRules?ManagedRules=%7B%22TemplateName%22%3A%7B%7D%2C%22ResourceARN%22%3A%7B%7D%2C%22Tags%22%3A%7B%7D%7D&Action=PutManagedInsightRules&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutManagedInsightRules`

 Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. 

<h3 id="getputmanagedinsightrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ManagedRules|query|[[ManagedRule](#schemamanagedrule)]|true| A list of <code>ManagedRules</code> to enable. |
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
|Action|PutManagedInsightRules|
|Version|2010-08-01|

<h3 id="getputmanagedinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutManagedInsightRulesOutput](#schemaputmanagedinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutManagedInsightRules

<a id="opIdPOST_PutManagedInsightRules"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutManagedInsightRules?Action=PutManagedInsightRules&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ManagedRules":{}}'
```

`POST /#Action=PutManagedInsightRules`

 Creates a managed Contributor Insights rule for a specified Amazon Web Services resource. When you enable a managed rule, you create a Contributor Insights rule that collects data from Amazon Web Services services. You cannot edit these rules with <code>PutInsightRule</code>. The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>. If a previously created managed rule is currently disabled, a subsequent call to this API will re-enable it. Use <code>ListManagedInsightRules</code> to describe all available rules. 

> Body parameter

```json
{
  "ManagedRules": {}
}
```

<h3 id="postputmanagedinsightrules-parameters">Parameters</h3>

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
|body|body|[PutManagedInsightRulesInput](#schemaputmanagedinsightrulesinput)|false|none|
|» ManagedRules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutManagedInsightRules|
|Version|2010-08-01|

<h3 id="postputmanagedinsightrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutManagedInsightRulesOutput](#schemaputmanagedinsightrulesoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutMetricAlarm

<a id="opIdGET_PutMetricAlarm"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricAlarm?AlarmName=string&EvaluationPeriods=1&ComparisonOperator=GreaterThanOrEqualToThreshold&Action=PutMetricAlarm&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutMetricAlarm`

<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p>Each <code>PutMetricAlarm</code> action has a maximum uncompressed payload of 120 KB.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>

<h3 id="getputmetricalarm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmName|query|string|true|<p>The name for the alarm. This name must be unique within the Region.</p> <p>The name must contain only UTF-8 characters, and can't contain ASCII control characters</p>|
|AlarmDescription|query|string|false|The description for the alarm.|
|ActionsEnabled|query|boolean|false|Indicates whether actions should be executed during any changes to the alarm state. The default is <code>TRUE</code>.|
|OKActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>|
|AlarmActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>|
|InsufficientDataActions|query|[[ResourceName](#schemaresourcename)]|false|<p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values:</p> <p> <b>EC2 actions:</b> </p> <ul> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:stop</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> </p> </li> <li> <p> <code>arn:aws:automate:<i>region</i>:ec2:recover</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p> </li> <li> <p> <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Recover/1.0</code> </p> </li> </ul> <p> <b>Autoscaling action:</b> </p> <ul> <li> <p> <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SNS notification action:</b> </p> <ul> <li> <p> <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> </li> </ul> <p> <b>SSM integration actions:</b> </p> <ul> <li> <p> <code>arn:aws:ssm:<i>region</i>:<i>account-id</i>:opsitem:<i>severity</i>#CATEGORY=<i>category-name</i> </code> </p> </li> <li> <p> <code>arn:aws:ssm-incidents::<i>account-id</i>:responseplan/<i>response-plan-name</i> </code> </p> </li> </ul>|
|MetricName|query|string|false|<p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify all this information in the <code>Metrics</code> array.</p>|
|Namespace|query|string|false|The namespace for the metric associated specified in <code>MetricName</code>.|
|Statistic|query|string|false|The statistic for the metric specified in <code>MetricName</code>, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.|
|ExtendedStatistic|query|string|false|The percentile statistic for the metric specified in <code>MetricName</code>. Specify a value between p0.0 and p100. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.|
|Dimensions|query|[[Dimension](#schemadimension)]|false|The dimensions for the metric specified in <code>MetricName</code>.|
|Period|query|integer|false|<p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is evaluated. Valid values are 10, 30, and any multiple of 60.</p> <p> <code>Period</code> is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the <code>Metrics</code> array.</p> <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a <code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>An alarm's total current evaluation period can be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>|
|Unit|query|string|false|<p>The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately.</p> <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended.</p> <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably.</p> <p>We recommend omitting <code>Unit</code> so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>|
|EvaluationPeriods|query|integer|true|<p>The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N.</p> <p>An alarm's total current evaluation period can be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>|
|DatapointsToAlarm|query|integer|false|The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the <i>Amazon CloudWatch User Guide</i>.|
|Threshold|query|number(double)|false|<p>The value against which the specified statistic is compared.</p> <p>This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.</p>|
|ComparisonOperator|query|string|true|<p> The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.</p> <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>, <code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code> are used only for alarms based on anomaly detection models.</p>|
|TreatMissingData|query|string|false|<p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>Valid Values: <code>breaching \| notBreaching \| ignore \| missing</code> </p> <note> <p>Alarms that evaluate metrics in the <code>AWS/DynamoDB</code> namespace always <code>ignore</code> missing data even if you choose a different option for <code>TreatMissingData</code>. When an <code>AWS/DynamoDB</code> metric has missing data, alarms that evaluate that metric remain in their current state.</p> </note>|
|EvaluateLowSampleCountPercentile|query|string|false|<p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p> <p>Valid Values: <code>evaluate \| ignore</code> </p>|
|Metrics|query|[[MetricDataQuery](#schemametricdataquery)]|false|<p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a metric math expression. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p> <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression by setting <code>ReturnData</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p> <p>If you use the <code>Metrics</code> parameter, you cannot include the <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>|
|ThresholdMetricId|query|string|false|<p>If this is an alarm based on an anomaly detection model, make this value match the ID of the <code>ANOMALY_DETECTION_BAND</code> function.</p> <p>For an example of how to use this parameter, see the <b>Anomaly Detection Model Alarm</b> example on this page.</p> <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>|
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
|Statistic|SampleCount|
|Statistic|Average|
|Statistic|Sum|
|Statistic|Minimum|
|Statistic|Maximum|
|Unit|Seconds|
|Unit|Microseconds|
|Unit|Milliseconds|
|Unit|Bytes|
|Unit|Kilobytes|
|Unit|Megabytes|
|Unit|Gigabytes|
|Unit|Terabytes|
|Unit|Bits|
|Unit|Kilobits|
|Unit|Megabits|
|Unit|Gigabits|
|Unit|Terabits|
|Unit|Percent|
|Unit|Count|
|Unit|Bytes/Second|
|Unit|Kilobytes/Second|
|Unit|Megabytes/Second|
|Unit|Gigabytes/Second|
|Unit|Terabytes/Second|
|Unit|Bits/Second|
|Unit|Kilobits/Second|
|Unit|Megabits/Second|
|Unit|Gigabits/Second|
|Unit|Terabits/Second|
|Unit|Count/Second|
|Unit|None|
|ComparisonOperator|GreaterThanOrEqualToThreshold|
|ComparisonOperator|GreaterThanThreshold|
|ComparisonOperator|LessThanThreshold|
|ComparisonOperator|LessThanOrEqualToThreshold|
|ComparisonOperator|LessThanLowerOrGreaterThanUpperThreshold|
|ComparisonOperator|LessThanLowerThreshold|
|ComparisonOperator|GreaterThanUpperThreshold|
|Action|PutMetricAlarm|
|Version|2010-08-01|

<h3 id="getputmetricalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutMetricAlarm

<a id="opIdPOST_PutMetricAlarm"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricAlarm?Action=PutMetricAlarm&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmName":{},"AlarmDescription":{},"ActionsEnabled":{},"OKActions":{},"AlarmActions":{},"InsufficientDataActions":{},"MetricName":{},"Namespace":{},"Statistic":{},"ExtendedStatistic":{},"Dimensions":{},"Period":{},"Unit":{},"EvaluationPeriods":{},"DatapointsToAlarm":{},"Threshold":{},"ComparisonOperator":{},"TreatMissingData":{},"EvaluateLowSampleCountPercentile":{},"Metrics":{},"Tags":{},"ThresholdMetricId":{}}'
```

`POST /#Action=PutMetricAlarm`

<p>Creates or updates an alarm and associates it with the specified metric, metric math expression, anomaly detection model, or Metrics Insights query. For more information about using a Metrics Insights query for an alarm, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Metrics_Insights_Alarm.html">Create alarms on Metrics Insights queries</a>.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permission for all alarms with EC2 actions</p> </li> <li> <p>The <code>iam:CreateServiceLinkedRole</code> permissions to create an alarm with Systems Manager OpsItem or response plan actions.</p> </li> </ul> <p>The first time you create an alarm in the Amazon Web Services Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked roles are called <code>AWSServiceRoleForCloudWatchEvents</code> and <code>AWSServiceRoleForCloudWatchAlarms_ActionSSM</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Amazon Web Services service-linked role</a>.</p> <p>Each <code>PutMetricAlarm</code> action has a maximum uncompressed payload of 120 KB.</p> <p> <b>Cross-account alarms</b> </p> <p>You can set an alarm on metrics in the current account, or in another account. To create a cross-account alarm that watches a metric in a different account, you must have completed the following pre-requisites:</p> <ul> <li> <p>The account where the metrics are located (the <i>sharing account</i>) must already have a sharing role named <b>CloudWatch-CrossAccountSharingRole</b>. If it does not already have this role, you must create it using the instructions in <b>Set up a sharing account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>. The policy for that role must grant access to the ID of the account where you are creating the alarm. </p> </li> <li> <p>The account where you are creating the alarm (the <i>monitoring account</i>) must already have a service-linked role named <b>AWSServiceRoleForCloudWatchCrossAccount</b> to allow CloudWatch to assume the sharing role in the sharing account. If it does not, you must create it following the directions in <b>Set up a monitoring account</b> in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html#enable-cross-account-cross-Region"> Cross-account cross-Region CloudWatch console</a>.</p> </li> </ul>

> Body parameter

```json
{
  "AlarmName": {},
  "AlarmDescription": {},
  "ActionsEnabled": {},
  "OKActions": {},
  "AlarmActions": {},
  "InsufficientDataActions": {},
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "ExtendedStatistic": {},
  "Dimensions": {},
  "Period": {},
  "Unit": {},
  "EvaluationPeriods": {},
  "DatapointsToAlarm": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "TreatMissingData": {},
  "EvaluateLowSampleCountPercentile": {},
  "Metrics": {},
  "Tags": {},
  "ThresholdMetricId": {}
}
```

<h3 id="postputmetricalarm-parameters">Parameters</h3>

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
|body|body|[PutMetricAlarmInput](#schemaputmetricalarminput)|false|none|
|» AlarmName|body|object|true|none|
|» AlarmDescription|body|object|false|none|
|» ActionsEnabled|body|object|false|none|
|» OKActions|body|object|false|none|
|» AlarmActions|body|object|false|none|
|» InsufficientDataActions|body|object|false|none|
|» MetricName|body|object|false|none|
|» Namespace|body|object|false|none|
|» Statistic|body|object|false|none|
|» ExtendedStatistic|body|object|false|none|
|» Dimensions|body|object|false|none|
|» Period|body|object|false|none|
|» Unit|body|object|false|none|
|» EvaluationPeriods|body|object|true|none|
|» DatapointsToAlarm|body|object|false|none|
|» Threshold|body|object|false|none|
|» ComparisonOperator|body|object|true|none|
|» TreatMissingData|body|object|false|none|
|» EvaluateLowSampleCountPercentile|body|object|false|none|
|» Metrics|body|object|false|none|
|» Tags|body|object|false|none|
|» ThresholdMetricId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutMetricAlarm|
|Version|2010-08-01|

<h3 id="postputmetricalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|LimitExceededFault|[LimitExceededFault](#schemalimitexceededfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutMetricData

<a id="opIdGET_PutMetricData"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricData?Namespace=string&MetricData=%7B%22MetricName%22%3A%7B%7D%2C%22Dimensions%22%3A%7B%7D%2C%22Timestamp%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%2C%22StatisticValues%22%3A%7B%22SampleCount%22%3A%7B%7D%2C%22Sum%22%3A%7B%7D%2C%22Minimum%22%3A%7B%7D%2C%22Maximum%22%3A%7B%7D%7D%2C%22Values%22%3A%7B%7D%2C%22Counts%22%3A%7B%7D%2C%22Unit%22%3A%7B%7D%2C%22StorageResolution%22%3A%7B%7D%7D&Action=PutMetricData&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutMetricData`

<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>

<h3 id="getputmetricdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Namespace|query|string|true|<p>The namespace for the metric data. You can use ASCII characters for the namespace, except for control characters which are not supported.</p> <p>To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with <code>AWS/</code> </p>|
|MetricData|query|[[MetricDatum](#schemametricdatum)]|true|The data for the metric. The array can include no more than 1000 metrics per call.|
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
|Action|PutMetricData|
|Version|2010-08-01|

<h3 id="getputmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutMetricData

<a id="opIdPOST_PutMetricData"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricData?Action=PutMetricData&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Namespace":{},"MetricData":{}}'
```

`POST /#Action=PutMetricData`

<p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 1 MB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 1000 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 30 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>You specify the time stamp to be associated with each data point. You can specify time stamps that are as much as two weeks before the current date, and as much as 2 hours after the current day and time.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>

> Body parameter

```json
{
  "Namespace": {},
  "MetricData": {}
}
```

<h3 id="postputmetricdata-parameters">Parameters</h3>

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
|body|body|[PutMetricDataInput](#schemaputmetricdatainput)|false|none|
|» Namespace|body|object|true|none|
|» MetricData|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutMetricData|
|Version|2010-08-01|

<h3 id="postputmetricdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|482|482|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_PutMetricStream

<a id="opIdGET_PutMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricStream?Name=string&FirehoseArn=string&RoleArn=string&OutputFormat=json&Action=PutMetricStream&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=PutMetricStream`

<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

<h3 id="getputmetricstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|<p>If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.</p> <p>If you are updating a metric stream, specify the name of that stream here.</p> <p>Valid characters are A-Z, a-z, 0-9, "-" and "_".</p>|
|IncludeFilters|query|[[MetricStreamFilter](#schemametricstreamfilter)]|false|<p>If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.</p> <p>You cannot include <code>IncludeFilters</code> and <code>ExcludeFilters</code> in the same operation.</p>|
|ExcludeFilters|query|[[MetricStreamFilter](#schemametricstreamfilter)]|false|<p>If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.</p> <p>You cannot include <code>ExcludeFilters</code> and <code>IncludeFilters</code> in the same operation.</p>|
|FirehoseArn|query|string|true|The ARN of the Amazon Kinesis Data Firehose delivery stream to use for this metric stream. This Amazon Kinesis Data Firehose delivery stream must already exist and must be in the same account as the metric stream.|
|RoleArn|query|string|true|<p>The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Data Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the following permissions:</p> <ul> <li> <p>firehose:PutRecord</p> </li> <li> <p>firehose:PutRecordBatch</p> </li> </ul>|
|OutputFormat|query|string|true|The output format for the stream. Valid values are <code>json</code> and <code>opentelemetry0.7</code>. For more information about metric stream output formats, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html"> Metric streams output formats</a>.|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of key-value pairs to associate with the metric stream. You can associate as many as 50 tags with a metric stream.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use this parameter only when you are creating a new metric stream. If you are using this operation to update an existing metric stream, any tags you specify in this parameter are ignored. To change the tags of an existing metric stream, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>|
|StatisticsConfigurations|query|[[MetricStreamStatisticsConfiguration](#schemametricstreamstatisticsconfiguration)]|false|<p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.</p> <p>For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's <code>OutputFormat</code>. If the <code>OutputFormat</code> is <code>json</code>, you can stream any additional statistic that is supported by CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>. If the <code>OutputFormat</code> is <code>opentelemetry0.7</code>, you can stream percentile statistics such as p95, p99.9, and so on.</p>|
|IncludeLinkedAccountsMetrics|query|boolean|false|If you are creating a metric stream in a monitoring account, specify <code>true</code> to include metrics from source accounts in the metric stream.|
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
|OutputFormat|json|
|OutputFormat|opentelemetry0.7|
|Action|PutMetricStream|
|Version|2010-08-01|

<h3 id="getputmetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMetricStreamOutput](#schemaputmetricstreamoutput)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_PutMetricStream

<a id="opIdPOST_PutMetricStream"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=PutMetricStream?Action=PutMetricStream&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"IncludeFilters":{},"ExcludeFilters":{},"FirehoseArn":{},"RoleArn":{},"OutputFormat":{},"Tags":{},"StatisticsConfigurations":{},"IncludeLinkedAccountsMetrics":{}}'
```

`POST /#Action=PutMetricStream`

<p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using Metric Streams</a>.</p> <p>To create a metric stream, you must be signed in to an account that has the <code>iam:PassRole</code> permission and either the <code>CloudWatchFullAccess</code> policy or the <code>cloudwatch:PutMetricStream</code> permission.</p> <p>When you create or update a metric stream, you choose one of the following:</p> <ul> <li> <p>Stream metrics from all metric namespaces in the account.</p> </li> <li> <p>Stream metrics from all metric namespaces in the account, except for the namespaces that you list in <code>ExcludeFilters</code>.</p> </li> <li> <p>Stream metrics from only the metric namespaces that you list in <code>IncludeFilters</code>.</p> </li> </ul> <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p> <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is created in the <code>running</code> state. If you use it to update an existing stream, the state of the stream is not changed.</p> <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "IncludeFilters": {},
  "ExcludeFilters": {},
  "FirehoseArn": {},
  "RoleArn": {},
  "OutputFormat": {},
  "Tags": {},
  "StatisticsConfigurations": {},
  "IncludeLinkedAccountsMetrics": {}
}
```

<h3 id="postputmetricstream-parameters">Parameters</h3>

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
|body|body|[PutMetricStreamInput](#schemaputmetricstreaminput)|false|none|
|» Name|body|object|true|none|
|» IncludeFilters|body|object|false|none|
|» ExcludeFilters|body|object|false|none|
|» FirehoseArn|body|object|true|none|
|» RoleArn|body|object|true|none|
|» OutputFormat|body|object|true|none|
|» Tags|body|object|false|none|
|» StatisticsConfigurations|body|object|false|none|
|» IncludeLinkedAccountsMetrics|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|PutMetricStream|
|Version|2010-08-01|

<h3 id="postputmetricstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMetricStreamOutput](#schemaputmetricstreamoutput)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|482|482|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|483|483|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|
|484|484|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_SetAlarmState

<a id="opIdGET_SetAlarmState"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=SetAlarmState?AlarmName=string&StateValue=OK&StateReason=string&Action=SetAlarmState&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=SetAlarmState`

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

<h3 id="getsetalarmstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AlarmName|query|string|true|The name of the alarm.|
|StateValue|query|string|true|The value of the state.|
|StateReason|query|string|true|The reason that this alarm is set to this specific state, in text format.|
|StateReasonData|query|string|false|<p>The reason that this alarm is set to this specific state, in JSON format.</p> <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>|
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
|StateValue|OK|
|StateValue|ALARM|
|StateValue|INSUFFICIENT_DATA|
|Action|SetAlarmState|
|Version|2010-08-01|

<h3 id="getsetalarmstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|481|481|InvalidFormatFault|[InvalidFormatFault](#schemainvalidformatfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_SetAlarmState

<a id="opIdPOST_SetAlarmState"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=SetAlarmState?Action=SetAlarmState&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AlarmName":{},"StateValue":{},"StateReason":{},"StateReasonData":{}}'
```

`POST /#Action=SetAlarmState`

<p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It returns to its actual state only once any of its children alarms change state. It is also reevaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>

> Body parameter

```json
{
  "AlarmName": {},
  "StateValue": {},
  "StateReason": {},
  "StateReasonData": {}
}
```

<h3 id="postsetalarmstate-parameters">Parameters</h3>

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
|body|body|[SetAlarmStateInput](#schemasetalarmstateinput)|false|none|
|» AlarmName|body|object|true|none|
|» StateValue|body|object|true|none|
|» StateReason|body|object|true|none|
|» StateReasonData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|SetAlarmState|
|Version|2010-08-01|

<h3 id="postsetalarmstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ResourceNotFound|[ResourceNotFound](#schemaresourcenotfound)|
|481|481|InvalidFormatFault|[InvalidFormatFault](#schemainvalidformatfault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StartMetricStreams

<a id="opIdGET_StartMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=StartMetricStreams?Names=string&Action=StartMetricStreams&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StartMetricStreams`

Starts the streaming of metrics for one or more of your metric streams.

<h3 id="getstartmetricstreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Names|query|[[MetricStreamName](#schemametricstreamname)]|true|<p>The array of the names of metric streams to start streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will start streaming.</p>|
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
|Action|StartMetricStreams|
|Version|2010-08-01|

<h3 id="getstartmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMetricStreamsOutput](#schemastartmetricstreamsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StartMetricStreams

<a id="opIdPOST_StartMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=StartMetricStreams?Action=StartMetricStreams&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Names":{}}'
```

`POST /#Action=StartMetricStreams`

Starts the streaming of metrics for one or more of your metric streams.

> Body parameter

```json
{
  "Names": {}
}
```

<h3 id="poststartmetricstreams-parameters">Parameters</h3>

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
|body|body|[StartMetricStreamsInput](#schemastartmetricstreamsinput)|false|none|
|» Names|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StartMetricStreams|
|Version|2010-08-01|

<h3 id="poststartmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMetricStreamsOutput](#schemastartmetricstreamsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_StopMetricStreams

<a id="opIdGET_StopMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=StopMetricStreams?Names=string&Action=StopMetricStreams&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=StopMetricStreams`

Stops the streaming of metrics for one or more of your metric streams.

<h3 id="getstopmetricstreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Names|query|[[MetricStreamName](#schemametricstreamname)]|true|<p>The array of the names of metric streams to stop streaming.</p> <p>This is an "all or nothing" operation. If you do not have permission to access all of the metric streams that you list here, then none of the streams that you list in the operation will stop streaming.</p>|
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
|Action|StopMetricStreams|
|Version|2010-08-01|

<h3 id="getstopmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopMetricStreamsOutput](#schemastopmetricstreamsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_StopMetricStreams

<a id="opIdPOST_StopMetricStreams"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=StopMetricStreams?Action=StopMetricStreams&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Names":{}}'
```

`POST /#Action=StopMetricStreams`

Stops the streaming of metrics for one or more of your metric streams.

> Body parameter

```json
{
  "Names": {}
}
```

<h3 id="poststopmetricstreams-parameters">Parameters</h3>

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
|body|body|[StopMetricStreamsInput](#schemastopmetricstreamsinput)|false|none|
|» Names|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|StopMetricStreams|
|Version|2010-08-01|

<h3 id="poststopmetricstreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopMetricStreamsOutput](#schemastopmetricstreamsoutput)|
|480|480|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|MissingRequiredParameterException|[MissingRequiredParameterException](#schemamissingrequiredparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_TagResource

<a id="opIdGET_TagResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=TagResource?ResourceARN=string&Tags=%7B%22Key%22%3A%7B%7D%2C%22Value%22%3A%7B%7D%7D&Action=TagResource&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=TagResource`

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>

<h3 id="gettagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceARN|query|string|true|<p>The ARN of the CloudWatch resource that you're adding tags to.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>|
|Tags|query|[[Tag](#schematag)]|true|The list of key-value pairs to associate with the alarm.|
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
|Action|TagResource|
|Version|2010-08-01|

<h3 id="gettagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_TagResource

<a id="opIdPOST_TagResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=TagResource?Action=TagResource&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceARN":{},"Tags":{}}'
```

`POST /#Action=TagResource`

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="posttagresource-parameters">Parameters</h3>

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
|body|body|[TagResourceInput](#schematagresourceinput)|false|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|TagResource|
|Version|2010-08-01|

<h3 id="posttagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UntagResource

<a id="opIdGET_UntagResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=UntagResource?ResourceARN=string&TagKeys=string&Action=UntagResource&Version=2010-08-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UntagResource`

Removes one or more tags from the specified resource.

<h3 id="getuntagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceARN|query|string|true|<p>The ARN of the CloudWatch resource that you're removing tags from.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>|
|TagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove from the resource.|
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
|Action|UntagResource|
|Version|2010-08-01|

<h3 id="getuntagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UntagResource

<a id="opIdPOST_UntagResource"></a>

> Code samples

```bash
curl 'https://monitoring.us-east-1.amazonaws.com/#Action=UntagResource?Action=UntagResource&Version=2010-08-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceARN":{},"TagKeys":{}}'
```

`POST /#Action=UntagResource`

Removes one or more tags from the specified resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="postuntagresource-parameters">Parameters</h3>

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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|false|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UntagResource|
|Version|2010-08-01|

<h3 id="postuntagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InternalServiceFault|[InternalServiceFault](#schemainternalservicefault)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AlarmName">AlarmName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmname"></a>
<a id="schema_AlarmName"></a>
<a id="tocSalarmname"></a>
<a id="tocsalarmname"></a>

```json
"string"
```

<h2 id="tocS_ResourceNotFound">ResourceNotFound</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfound"></a>
<a id="schema_ResourceNotFound"></a>
<a id="tocSresourcenotfound"></a>
<a id="tocsresourcenotfound"></a>

```json
null
```

<h2 id="tocS_DeleteAnomalyDetectorOutput">DeleteAnomalyDetectorOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalydetectoroutput"></a>
<a id="schema_DeleteAnomalyDetectorOutput"></a>
<a id="tocSdeleteanomalydetectoroutput"></a>
<a id="tocsdeleteanomalydetectoroutput"></a>

```json
{}
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

<p>A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish <code>InstanceId</code> as a dimension name, and the actual instance ID as the value for that dimension.</p> <p>You can assign up to 30 dimensions to a metric.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

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

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_AnomalyDetectorMetricStat">AnomalyDetectorMetricStat</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectormetricstat"></a>
<a id="schema_AnomalyDetectorMetricStat"></a>
<a id="tocSanomalydetectormetricstat"></a>
<a id="tocsanomalydetectormetricstat"></a>

```json
"string"
```

<h2 id="tocS_MetricDataQueries">MetricDataQueries</h2>
<!-- backwards compatibility -->
<a id="schemametricdataqueries"></a>
<a id="schema_MetricDataQueries"></a>
<a id="tocSmetricdataqueries"></a>
<a id="tocsmetricdataqueries"></a>

```json
[
  {
    "Id": {},
    "MetricStat": {
      "Metric": {
        "Namespace": {},
        "MetricName": {},
        "Dimensions": {}
      },
      "Period": {},
      "Stat": {},
      "Unit": {}
    },
    "Expression": {},
    "Label": {},
    "ReturnData": {},
    "Period": {},
    "AccountId": {}
  }
]
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

<h2 id="tocS_InternalServiceFault">InternalServiceFault</h2>
<!-- backwards compatibility -->
<a id="schemainternalservicefault"></a>
<a id="schema_InternalServiceFault"></a>
<a id="tocSinternalservicefault"></a>
<a id="tocsinternalservicefault"></a>

```json
null
```

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_MissingRequiredParameterException">MissingRequiredParameterException</h2>
<!-- backwards compatibility -->
<a id="schemamissingrequiredparameterexception"></a>
<a id="schema_MissingRequiredParameterException"></a>
<a id="tocSmissingrequiredparameterexception"></a>
<a id="tocsmissingrequiredparameterexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterCombinationException">InvalidParameterCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametercombinationexception"></a>
<a id="schema_InvalidParameterCombinationException"></a>
<a id="tocSinvalidparametercombinationexception"></a>
<a id="tocsinvalidparametercombinationexception"></a>

```json
null
```

<h2 id="tocS_DeleteDashboardsOutput">DeleteDashboardsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedashboardsoutput"></a>
<a id="schema_DeleteDashboardsOutput"></a>
<a id="tocSdeletedashboardsoutput"></a>
<a id="tocsdeletedashboardsoutput"></a>

```json
{}
```

<h2 id="tocS_DashboardName">DashboardName</h2>
<!-- backwards compatibility -->
<a id="schemadashboardname"></a>
<a id="schema_DashboardName"></a>
<a id="tocSdashboardname"></a>
<a id="tocsdashboardname"></a>

```json
"string"
```

<h2 id="tocS_DashboardNotFoundError">DashboardNotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemadashboardnotfounderror"></a>
<a id="schema_DashboardNotFoundError"></a>
<a id="tocSdashboardnotfounderror"></a>
<a id="tocsdashboardnotfounderror"></a>

```json
null
```

<h2 id="tocS_DeleteInsightRulesOutput">DeleteInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinsightrulesoutput"></a>
<a id="schema_DeleteInsightRulesOutput"></a>
<a id="tocSdeleteinsightrulesoutput"></a>
<a id="tocsdeleteinsightrulesoutput"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_InsightRuleName">InsightRuleName</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulename"></a>
<a id="schema_InsightRuleName"></a>
<a id="tocSinsightrulename"></a>
<a id="tocsinsightrulename"></a>

```json
"string"
```

<h2 id="tocS_DeleteMetricStreamOutput">DeleteMetricStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricstreamoutput"></a>
<a id="schema_DeleteMetricStreamOutput"></a>
<a id="tocSdeletemetricstreamoutput"></a>
<a id="tocsdeletemetricstreamoutput"></a>

```json
{}
```

<h2 id="tocS_DescribeAlarmHistoryOutput">DescribeAlarmHistoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmhistoryoutput"></a>
<a id="schema_DescribeAlarmHistoryOutput"></a>
<a id="tocSdescribealarmhistoryoutput"></a>
<a id="tocsdescribealarmhistoryoutput"></a>

```json
{
  "AlarmHistoryItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmHistoryItems|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AlarmType">AlarmType</h2>
<!-- backwards compatibility -->
<a id="schemaalarmtype"></a>
<a id="schema_AlarmType"></a>
<a id="tocSalarmtype"></a>
<a id="tocsalarmtype"></a>

```json
"CompositeAlarm"
```

<h2 id="tocS_InvalidNextToken">InvalidNextToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttoken"></a>
<a id="schema_InvalidNextToken"></a>
<a id="tocSinvalidnexttoken"></a>
<a id="tocsinvalidnexttoken"></a>

```json
null
```

<h2 id="tocS_DescribeAlarmsOutput">DescribeAlarmsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmsoutput"></a>
<a id="schema_DescribeAlarmsOutput"></a>
<a id="tocSdescribealarmsoutput"></a>
<a id="tocsdescribealarmsoutput"></a>

```json
{
  "CompositeAlarms": {},
  "MetricAlarms": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompositeAlarms|object|false|none|none|
|MetricAlarms|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeAlarmsForMetricOutput">DescribeAlarmsForMetricOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmsformetricoutput"></a>
<a id="schema_DescribeAlarmsForMetricOutput"></a>
<a id="tocSdescribealarmsformetricoutput"></a>
<a id="tocsdescribealarmsformetricoutput"></a>

```json
{
  "MetricAlarms": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricAlarms|object|false|none|none|

<h2 id="tocS_DescribeAnomalyDetectorsOutput">DescribeAnomalyDetectorsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectorsoutput"></a>
<a id="schema_DescribeAnomalyDetectorsOutput"></a>
<a id="tocSdescribeanomalydetectorsoutput"></a>
<a id="tocsdescribeanomalydetectorsoutput"></a>

```json
{
  "AnomalyDetectors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnomalyDetectors|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_AnomalyDetectorType">AnomalyDetectorType</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectortype"></a>
<a id="schema_AnomalyDetectorType"></a>
<a id="tocSanomalydetectortype"></a>
<a id="tocsanomalydetectortype"></a>

```json
"SINGLE_METRIC"
```

<h2 id="tocS_DescribeInsightRulesOutput">DescribeInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinsightrulesoutput"></a>
<a id="schema_DescribeInsightRulesOutput"></a>
<a id="tocSdescribeinsightrulesoutput"></a>
<a id="tocsdescribeinsightrulesoutput"></a>

```json
{
  "NextToken": {},
  "InsightRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|InsightRules|object|false|none|none|

<h2 id="tocS_DisableInsightRulesOutput">DisableInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisableinsightrulesoutput"></a>
<a id="schema_DisableInsightRulesOutput"></a>
<a id="tocSdisableinsightrulesoutput"></a>
<a id="tocsdisableinsightrulesoutput"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_EnableInsightRulesOutput">EnableInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaenableinsightrulesoutput"></a>
<a id="schema_EnableInsightRulesOutput"></a>
<a id="tocSenableinsightrulesoutput"></a>
<a id="tocsenableinsightrulesoutput"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_GetDashboardOutput">GetDashboardOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdashboardoutput"></a>
<a id="schema_GetDashboardOutput"></a>
<a id="tocSgetdashboardoutput"></a>
<a id="tocsgetdashboardoutput"></a>

```json
{
  "DashboardArn": {},
  "DashboardBody": {},
  "DashboardName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardArn|object|false|none|none|
|DashboardBody|object|false|none|none|
|DashboardName|object|false|none|none|

<h2 id="tocS_GetInsightRuleReportOutput">GetInsightRuleReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightrulereportoutput"></a>
<a id="schema_GetInsightRuleReportOutput"></a>
<a id="tocSgetinsightrulereportoutput"></a>
<a id="tocsgetinsightrulereportoutput"></a>

```json
{
  "KeyLabels": {},
  "AggregationStatistic": {},
  "AggregateValue": {},
  "ApproximateUniqueCount": {},
  "Contributors": {},
  "MetricDatapoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyLabels|object|false|none|none|
|AggregationStatistic|object|false|none|none|
|AggregateValue|object|false|none|none|
|ApproximateUniqueCount|object|false|none|none|
|Contributors|object|false|none|none|
|MetricDatapoints|object|false|none|none|

<h2 id="tocS_InsightRuleMetricName">InsightRuleMetricName</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulemetricname"></a>
<a id="schema_InsightRuleMetricName"></a>
<a id="tocSinsightrulemetricname"></a>
<a id="tocsinsightrulemetricname"></a>

```json
"string"
```

<h2 id="tocS_GetMetricDataOutput">GetMetricDataOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdataoutput"></a>
<a id="schema_GetMetricDataOutput"></a>
<a id="tocSgetmetricdataoutput"></a>
<a id="tocsgetmetricdataoutput"></a>

```json
{
  "MetricDataResults": {},
  "NextToken": {},
  "Messages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataResults|object|false|none|none|
|NextToken|object|false|none|none|
|Messages|object|false|none|none|

<h2 id="tocS_MetricDataQuery">MetricDataQuery</h2>
<!-- backwards compatibility -->
<a id="schemametricdataquery"></a>
<a id="schema_MetricDataQuery"></a>
<a id="tocSmetricdataquery"></a>
<a id="tocsmetricdataquery"></a>

```json
{
  "Id": {},
  "MetricStat": {
    "Metric": {
      "Namespace": {},
      "MetricName": {},
      "Dimensions": {}
    },
    "Period": {},
    "Stat": {},
    "Unit": {}
  },
  "Expression": {},
  "Label": {},
  "ReturnData": {},
  "Period": {},
  "AccountId": {}
}
```

<p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>true</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|MetricStat|object|false|none|none|
|Expression|object|false|none|none|
|Label|object|false|none|none|
|ReturnData|object|false|none|none|
|Period|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_GetMetricDataLabelTimezone">GetMetricDataLabelTimezone</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatalabeltimezone"></a>
<a id="schema_GetMetricDataLabelTimezone"></a>
<a id="tocSgetmetricdatalabeltimezone"></a>
<a id="tocsgetmetricdatalabeltimezone"></a>

```json
"string"
```

<h2 id="tocS_GetMetricStatisticsOutput">GetMetricStatisticsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricstatisticsoutput"></a>
<a id="schema_GetMetricStatisticsOutput"></a>
<a id="tocSgetmetricstatisticsoutput"></a>
<a id="tocsgetmetricstatisticsoutput"></a>

```json
{
  "Label": {},
  "Datapoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Label|object|false|none|none|
|Datapoints|object|false|none|none|

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
"SampleCount"
```

<h2 id="tocS_ExtendedStatistic">ExtendedStatistic</h2>
<!-- backwards compatibility -->
<a id="schemaextendedstatistic"></a>
<a id="schema_ExtendedStatistic"></a>
<a id="tocSextendedstatistic"></a>
<a id="tocsextendedstatistic"></a>

```json
"string"
```

<h2 id="tocS_GetMetricStreamOutput">GetMetricStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricstreamoutput"></a>
<a id="schema_GetMetricStreamOutput"></a>
<a id="tocSgetmetricstreamoutput"></a>
<a id="tocsgetmetricstreamoutput"></a>

```json
{
  "Arn": {},
  "Name": {},
  "IncludeFilters": {},
  "ExcludeFilters": {},
  "FirehoseArn": {},
  "RoleArn": {},
  "State": {},
  "CreationDate": {},
  "LastUpdateDate": {},
  "OutputFormat": {},
  "StatisticsConfigurations": {},
  "IncludeLinkedAccountsMetrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|IncludeFilters|object|false|none|none|
|ExcludeFilters|object|false|none|none|
|FirehoseArn|object|false|none|none|
|RoleArn|object|false|none|none|
|State|object|false|none|none|
|CreationDate|object|false|none|none|
|LastUpdateDate|object|false|none|none|
|OutputFormat|object|false|none|none|
|StatisticsConfigurations|object|false|none|none|
|IncludeLinkedAccountsMetrics|object|false|none|none|

<h2 id="tocS_GetMetricWidgetImageOutput">GetMetricWidgetImageOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricwidgetimageoutput"></a>
<a id="schema_GetMetricWidgetImageOutput"></a>
<a id="tocSgetmetricwidgetimageoutput"></a>
<a id="tocsgetmetricwidgetimageoutput"></a>

```json
{
  "MetricWidgetImage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricWidgetImage|object|false|none|none|

<h2 id="tocS_ListDashboardsOutput">ListDashboardsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdashboardsoutput"></a>
<a id="schema_ListDashboardsOutput"></a>
<a id="tocSlistdashboardsoutput"></a>
<a id="tocslistdashboardsoutput"></a>

```json
{
  "DashboardEntries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardEntries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListManagedInsightRulesOutput">ListManagedInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedinsightrulesoutput"></a>
<a id="schema_ListManagedInsightRulesOutput"></a>
<a id="tocSlistmanagedinsightrulesoutput"></a>
<a id="tocslistmanagedinsightrulesoutput"></a>

```json
{
  "ManagedRules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedRules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMetricStreamsOutput">ListMetricStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricstreamsoutput"></a>
<a id="schema_ListMetricStreamsOutput"></a>
<a id="tocSlistmetricstreamsoutput"></a>
<a id="tocslistmetricstreamsoutput"></a>

```json
{
  "NextToken": {},
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Entries|object|false|none|none|

<h2 id="tocS_ListMetricsOutput">ListMetricsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricsoutput"></a>
<a id="schema_ListMetricsOutput"></a>
<a id="tocSlistmetricsoutput"></a>
<a id="tocslistmetricsoutput"></a>

```json
{
  "Metrics": {},
  "NextToken": {},
  "OwningAccounts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metrics|object|false|none|none|
|NextToken|object|false|none|none|
|OwningAccounts|object|false|none|none|

<h2 id="tocS_DimensionFilter">DimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilter"></a>
<a id="schema_DimensionFilter"></a>
<a id="tocSdimensionfilter"></a>
<a id="tocsdimensionfilter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Represents filters for a dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_PutAnomalyDetectorOutput">PutAnomalyDetectorOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputanomalydetectoroutput"></a>
<a id="schema_PutAnomalyDetectorOutput"></a>
<a id="tocSputanomalydetectoroutput"></a>
<a id="tocsputanomalydetectoroutput"></a>

```json
{}
```

<h2 id="tocS_AnomalyDetectorExcludedTimeRanges">AnomalyDetectorExcludedTimeRanges</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorexcludedtimeranges"></a>
<a id="schema_AnomalyDetectorExcludedTimeRanges"></a>
<a id="tocSanomalydetectorexcludedtimeranges"></a>
<a id="tocsanomalydetectorexcludedtimeranges"></a>

```json
[
  {
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_AnomalyDetectorMetricTimezone">AnomalyDetectorMetricTimezone</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectormetrictimezone"></a>
<a id="schema_AnomalyDetectorMetricTimezone"></a>
<a id="tocSanomalydetectormetrictimezone"></a>
<a id="tocsanomalydetectormetrictimezone"></a>

```json
"string"
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

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

A key-value pair associated with a CloudWatch resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_LimitExceededFault">LimitExceededFault</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededfault"></a>
<a id="schema_LimitExceededFault"></a>
<a id="tocSlimitexceededfault"></a>
<a id="tocslimitexceededfault"></a>

```json
null
```

<h2 id="tocS_PutDashboardOutput">PutDashboardOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputdashboardoutput"></a>
<a id="schema_PutDashboardOutput"></a>
<a id="tocSputdashboardoutput"></a>
<a id="tocsputdashboardoutput"></a>

```json
{
  "DashboardValidationMessages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardValidationMessages|object|false|none|none|

<h2 id="tocS_DashboardInvalidInputError">DashboardInvalidInputError</h2>
<!-- backwards compatibility -->
<a id="schemadashboardinvalidinputerror"></a>
<a id="schema_DashboardInvalidInputError"></a>
<a id="tocSdashboardinvalidinputerror"></a>
<a id="tocsdashboardinvalidinputerror"></a>

```json
null
```

<h2 id="tocS_PutInsightRuleOutput">PutInsightRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputinsightruleoutput"></a>
<a id="schema_PutInsightRuleOutput"></a>
<a id="tocSputinsightruleoutput"></a>
<a id="tocsputinsightruleoutput"></a>

```json
{}
```

<h2 id="tocS_PutManagedInsightRulesOutput">PutManagedInsightRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedinsightrulesoutput"></a>
<a id="schema_PutManagedInsightRulesOutput"></a>
<a id="tocSputmanagedinsightrulesoutput"></a>
<a id="tocsputmanagedinsightrulesoutput"></a>

```json
{
  "Failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Failures|object|false|none|none|

<h2 id="tocS_ManagedRule">ManagedRule</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrule"></a>
<a id="schema_ManagedRule"></a>
<a id="tocSmanagedrule"></a>
<a id="tocsmanagedrule"></a>

```json
{
  "TemplateName": {},
  "ResourceARN": {},
  "Tags": {}
}
```

 Contains the information that's required to enable a managed Contributor Insights rule for an Amazon Web Services resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|true|none|none|
|ResourceARN|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MetricDatum">MetricDatum</h2>
<!-- backwards compatibility -->
<a id="schemametricdatum"></a>
<a id="schema_MetricDatum"></a>
<a id="tocSmetricdatum"></a>
<a id="tocsmetricdatum"></a>

```json
{
  "MetricName": {},
  "Dimensions": {},
  "Timestamp": {},
  "Value": {},
  "StatisticValues": {
    "SampleCount": {},
    "Sum": {},
    "Minimum": {},
    "Maximum": {}
  },
  "Values": {},
  "Counts": {},
  "Unit": {},
  "StorageResolution": {}
}
```

Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|true|none|none|
|Dimensions|object|false|none|none|
|Timestamp|object|false|none|none|
|Value|object|false|none|none|
|StatisticValues|object|false|none|none|
|Values|object|false|none|none|
|Counts|object|false|none|none|
|Unit|object|false|none|none|
|StorageResolution|object|false|none|none|

<h2 id="tocS_PutMetricStreamOutput">PutMetricStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricstreamoutput"></a>
<a id="schema_PutMetricStreamOutput"></a>
<a id="tocSputmetricstreamoutput"></a>
<a id="tocsputmetricstreamoutput"></a>

```json
{
  "Arn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|

<h2 id="tocS_MetricStreamFilter">MetricStreamFilter</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamfilter"></a>
<a id="schema_MetricStreamFilter"></a>
<a id="tocSmetricstreamfilter"></a>
<a id="tocsmetricstreamfilter"></a>

```json
{
  "Namespace": {},
  "MetricNames": {}
}
```

<p>This structure contains a metric namespace and optionally, a list of metric names, to either include in a metric stream or exclude from a metric stream.</p> <p>A metric stream's filters can include up to 1000 total names. This limit applies to the sum of namespace names and metric names in the filters. For example, this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters with 49 metrics specified in each filter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricNames|object|false|none|none|

<h2 id="tocS_MetricStreamStatisticsConfiguration">MetricStreamStatisticsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatisticsconfiguration"></a>
<a id="schema_MetricStreamStatisticsConfiguration"></a>
<a id="tocSmetricstreamstatisticsconfiguration"></a>
<a id="tocsmetricstreamstatisticsconfiguration"></a>

```json
{
  "IncludeMetrics": {},
  "AdditionalStatistics": {}
}
```

By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is streamed. This structure contains information for one metric that includes additional statistics in the stream. For more information about statistics, see CloudWatch, listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html"> CloudWatch statistics definitions</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IncludeMetrics|object|true|none|none|
|AdditionalStatistics|object|true|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_InvalidFormatFault">InvalidFormatFault</h2>
<!-- backwards compatibility -->
<a id="schemainvalidformatfault"></a>
<a id="schema_InvalidFormatFault"></a>
<a id="tocSinvalidformatfault"></a>
<a id="tocsinvalidformatfault"></a>

```json
null
```

<h2 id="tocS_StartMetricStreamsOutput">StartMetricStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartmetricstreamsoutput"></a>
<a id="schema_StartMetricStreamsOutput"></a>
<a id="tocSstartmetricstreamsoutput"></a>
<a id="tocsstartmetricstreamsoutput"></a>

```json
{}
```

<h2 id="tocS_MetricStreamName">MetricStreamName</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamname"></a>
<a id="schema_MetricStreamName"></a>
<a id="tocSmetricstreamname"></a>
<a id="tocsmetricstreamname"></a>

```json
"string"
```

<h2 id="tocS_StopMetricStreamsOutput">StopMetricStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopmetricstreamsoutput"></a>
<a id="schema_StopMetricStreamsOutput"></a>
<a id="tocSstopmetricstreamsoutput"></a>
<a id="tocsstopmetricstreamsoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

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

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_ActionPrefix">ActionPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaactionprefix"></a>
<a id="schema_ActionPrefix"></a>
<a id="tocSactionprefix"></a>
<a id="tocsactionprefix"></a>

```json
"string"
```

<h2 id="tocS_ActionsEnabled">ActionsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaactionsenabled"></a>
<a id="schema_ActionsEnabled"></a>
<a id="tocSactionsenabled"></a>
<a id="tocsactionsenabled"></a>

```json
true
```

<h2 id="tocS_ActionsSuppressedBy">ActionsSuppressedBy</h2>
<!-- backwards compatibility -->
<a id="schemaactionssuppressedby"></a>
<a id="schema_ActionsSuppressedBy"></a>
<a id="tocSactionssuppressedby"></a>
<a id="tocsactionssuppressedby"></a>

```json
"WaitPeriod"
```

<h2 id="tocS_ActionsSuppressedReason">ActionsSuppressedReason</h2>
<!-- backwards compatibility -->
<a id="schemaactionssuppressedreason"></a>
<a id="schema_ActionsSuppressedReason"></a>
<a id="tocSactionssuppressedreason"></a>
<a id="tocsactionssuppressedreason"></a>

```json
"string"
```

<h2 id="tocS_AlarmArn">AlarmArn</h2>
<!-- backwards compatibility -->
<a id="schemaalarmarn"></a>
<a id="schema_AlarmArn"></a>
<a id="tocSalarmarn"></a>
<a id="tocsalarmarn"></a>

```json
"string"
```

<h2 id="tocS_AlarmDescription">AlarmDescription</h2>
<!-- backwards compatibility -->
<a id="schemaalarmdescription"></a>
<a id="schema_AlarmDescription"></a>
<a id="tocSalarmdescription"></a>
<a id="tocsalarmdescription"></a>

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

<h2 id="tocS_HistoryItemType">HistoryItemType</h2>
<!-- backwards compatibility -->
<a id="schemahistoryitemtype"></a>
<a id="schema_HistoryItemType"></a>
<a id="tocShistoryitemtype"></a>
<a id="tocshistoryitemtype"></a>

```json
"ConfigurationUpdate"
```

<h2 id="tocS_HistorySummary">HistorySummary</h2>
<!-- backwards compatibility -->
<a id="schemahistorysummary"></a>
<a id="schema_HistorySummary"></a>
<a id="tocShistorysummary"></a>
<a id="tocshistorysummary"></a>

```json
"string"
```

<h2 id="tocS_HistoryData">HistoryData</h2>
<!-- backwards compatibility -->
<a id="schemahistorydata"></a>
<a id="schema_HistoryData"></a>
<a id="tocShistorydata"></a>
<a id="tocshistorydata"></a>

```json
"string"
```

<h2 id="tocS_AlarmHistoryItem">AlarmHistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemaalarmhistoryitem"></a>
<a id="schema_AlarmHistoryItem"></a>
<a id="tocSalarmhistoryitem"></a>
<a id="tocsalarmhistoryitem"></a>

```json
{
  "AlarmName": {},
  "AlarmType": {},
  "Timestamp": {},
  "HistoryItemType": {},
  "HistorySummary": {},
  "HistoryData": {}
}
```

Represents the history of a specific alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|false|none|none|
|AlarmType|object|false|none|none|
|Timestamp|object|false|none|none|
|HistoryItemType|object|false|none|none|
|HistorySummary|object|false|none|none|
|HistoryData|object|false|none|none|

<h2 id="tocS_AlarmHistoryItems">AlarmHistoryItems</h2>
<!-- backwards compatibility -->
<a id="schemaalarmhistoryitems"></a>
<a id="schema_AlarmHistoryItems"></a>
<a id="tocSalarmhistoryitems"></a>
<a id="tocsalarmhistoryitems"></a>

```json
[
  {
    "AlarmName": {},
    "AlarmType": {},
    "Timestamp": {},
    "HistoryItemType": {},
    "HistorySummary": {},
    "HistoryData": {}
  }
]
```

<h2 id="tocS_AlarmNamePrefix">AlarmNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemaalarmnameprefix"></a>
<a id="schema_AlarmNamePrefix"></a>
<a id="tocSalarmnameprefix"></a>
<a id="tocsalarmnameprefix"></a>

```json
"string"
```

<h2 id="tocS_AlarmNames">AlarmNames</h2>
<!-- backwards compatibility -->
<a id="schemaalarmnames"></a>
<a id="schema_AlarmNames"></a>
<a id="tocSalarmnames"></a>
<a id="tocsalarmnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AlarmRule">AlarmRule</h2>
<!-- backwards compatibility -->
<a id="schemaalarmrule"></a>
<a id="schema_AlarmRule"></a>
<a id="tocSalarmrule"></a>
<a id="tocsalarmrule"></a>

```json
"string"
```

<h2 id="tocS_AlarmTypes">AlarmTypes</h2>
<!-- backwards compatibility -->
<a id="schemaalarmtypes"></a>
<a id="schema_AlarmTypes"></a>
<a id="tocSalarmtypes"></a>
<a id="tocsalarmtypes"></a>

```json
[
  "CompositeAlarm"
]
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

<h2 id="tocS_AnomalyDetectorConfiguration">AnomalyDetectorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorconfiguration"></a>
<a id="schema_AnomalyDetectorConfiguration"></a>
<a id="tocSanomalydetectorconfiguration"></a>
<a id="tocsanomalydetectorconfiguration"></a>

```json
{
  "ExcludedTimeRanges": {},
  "MetricTimezone": {}
}
```

The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExcludedTimeRanges|object|false|none|none|
|MetricTimezone|object|false|none|none|

<h2 id="tocS_AnomalyDetectorStateValue">AnomalyDetectorStateValue</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectorstatevalue"></a>
<a id="schema_AnomalyDetectorStateValue"></a>
<a id="tocSanomalydetectorstatevalue"></a>
<a id="tocsanomalydetectorstatevalue"></a>

```json
"PENDING_TRAINING"
```

<h2 id="tocS_SingleMetricAnomalyDetector">SingleMetricAnomalyDetector</h2>
<!-- backwards compatibility -->
<a id="schemasinglemetricanomalydetector"></a>
<a id="schema_SingleMetricAnomalyDetector"></a>
<a id="tocSsinglemetricanomalydetector"></a>
<a id="tocssinglemetricanomalydetector"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {}
}
```

Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|Stat|object|false|none|none|

<h2 id="tocS_MetricMathAnomalyDetector">MetricMathAnomalyDetector</h2>
<!-- backwards compatibility -->
<a id="schemametricmathanomalydetector"></a>
<a id="schema_MetricMathAnomalyDetector"></a>
<a id="tocSmetricmathanomalydetector"></a>
<a id="tocsmetricmathanomalydetector"></a>

```json
{
  "MetricDataQueries": {}
}
```

Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input. The designated math expression must return a single time series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataQueries|object|false|none|none|

<h2 id="tocS_AnomalyDetector">AnomalyDetector</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetector"></a>
<a id="schema_AnomalyDetector"></a>
<a id="tocSanomalydetector"></a>
<a id="tocsanomalydetector"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {},
  "Configuration": {
    "ExcludedTimeRanges": {},
    "MetricTimezone": {}
  },
  "StateValue": {},
  "SingleMetricAnomalyDetector": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {}
  },
  "MetricMathAnomalyDetector": {
    "MetricDataQueries": {}
  }
}
```

An anomaly detection model associated with a particular CloudWatch metric, statistic, or metric math expression. You can use the model to display a band of expected, normal values when the metric is graphed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|Stat|object|false|none|none|
|Configuration|object|false|none|none|
|StateValue|object|false|none|none|
|SingleMetricAnomalyDetector|object|false|none|none|
|MetricMathAnomalyDetector|object|false|none|none|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

Specifies one range of days or times to exclude from use for training an anomaly detection model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_AnomalyDetectorTypes">AnomalyDetectorTypes</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectortypes"></a>
<a id="schema_AnomalyDetectorTypes"></a>
<a id="tocSanomalydetectortypes"></a>
<a id="tocsanomalydetectortypes"></a>

```json
[
  "SINGLE_METRIC"
]
```

<h2 id="tocS_AnomalyDetectors">AnomalyDetectors</h2>
<!-- backwards compatibility -->
<a id="schemaanomalydetectors"></a>
<a id="schema_AnomalyDetectors"></a>
<a id="tocSanomalydetectors"></a>
<a id="tocsanomalydetectors"></a>

```json
[
  {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {},
    "Configuration": {
      "ExcludedTimeRanges": {},
      "MetricTimezone": {}
    },
    "StateValue": {},
    "SingleMetricAnomalyDetector": {
      "Namespace": {},
      "MetricName": {},
      "Dimensions": {},
      "Stat": {}
    },
    "MetricMathAnomalyDetector": {
      "MetricDataQueries": {}
    }
  }
]
```

<h2 id="tocS_PartialFailure">PartialFailure</h2>
<!-- backwards compatibility -->
<a id="schemapartialfailure"></a>
<a id="schema_PartialFailure"></a>
<a id="tocSpartialfailure"></a>
<a id="tocspartialfailure"></a>

```json
{
  "FailureResource": {},
  "ExceptionType": {},
  "FailureCode": {},
  "FailureDescription": {}
}
```

This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureResource|object|false|none|none|
|ExceptionType|object|false|none|none|
|FailureCode|object|false|none|none|
|FailureDescription|object|false|none|none|

<h2 id="tocS_BatchFailures">BatchFailures</h2>
<!-- backwards compatibility -->
<a id="schemabatchfailures"></a>
<a id="schema_BatchFailures"></a>
<a id="tocSbatchfailures"></a>
<a id="tocsbatchfailures"></a>

```json
[
  {
    "FailureResource": {},
    "ExceptionType": {},
    "FailureCode": {},
    "FailureDescription": {}
  }
]
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GreaterThanOrEqualToThreshold"
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

<h2 id="tocS_StateReason">StateReason</h2>
<!-- backwards compatibility -->
<a id="schemastatereason"></a>
<a id="schema_StateReason"></a>
<a id="tocSstatereason"></a>
<a id="tocsstatereason"></a>

```json
"string"
```

<h2 id="tocS_StateReasonData">StateReasonData</h2>
<!-- backwards compatibility -->
<a id="schemastatereasondata"></a>
<a id="schema_StateReasonData"></a>
<a id="tocSstatereasondata"></a>
<a id="tocsstatereasondata"></a>

```json
"string"
```

<h2 id="tocS_StateValue">StateValue</h2>
<!-- backwards compatibility -->
<a id="schemastatevalue"></a>
<a id="schema_StateValue"></a>
<a id="tocSstatevalue"></a>
<a id="tocsstatevalue"></a>

```json
"OK"
```

<h2 id="tocS_SuppressorPeriod">SuppressorPeriod</h2>
<!-- backwards compatibility -->
<a id="schemasuppressorperiod"></a>
<a id="schema_SuppressorPeriod"></a>
<a id="tocSsuppressorperiod"></a>
<a id="tocssuppressorperiod"></a>

```json
0
```

<h2 id="tocS_CompositeAlarm">CompositeAlarm</h2>
<!-- backwards compatibility -->
<a id="schemacompositealarm"></a>
<a id="schema_CompositeAlarm"></a>
<a id="tocScompositealarm"></a>
<a id="tocscompositealarm"></a>

```json
{
  "ActionsEnabled": {},
  "AlarmActions": {},
  "AlarmArn": {},
  "AlarmConfigurationUpdatedTimestamp": {},
  "AlarmDescription": {},
  "AlarmName": {},
  "AlarmRule": {},
  "InsufficientDataActions": {},
  "OKActions": {},
  "StateReason": {},
  "StateReasonData": {},
  "StateUpdatedTimestamp": {},
  "StateValue": {},
  "StateTransitionedTimestamp": {},
  "ActionsSuppressedBy": {},
  "ActionsSuppressedReason": {},
  "ActionsSuppressor": {},
  "ActionsSuppressorWaitPeriod": {},
  "ActionsSuppressorExtensionPeriod": {}
}
```

The details about a composite alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionsEnabled|object|false|none|none|
|AlarmActions|object|false|none|none|
|AlarmArn|object|false|none|none|
|AlarmConfigurationUpdatedTimestamp|object|false|none|none|
|AlarmDescription|object|false|none|none|
|AlarmName|object|false|none|none|
|AlarmRule|object|false|none|none|
|InsufficientDataActions|object|false|none|none|
|OKActions|object|false|none|none|
|StateReason|object|false|none|none|
|StateReasonData|object|false|none|none|
|StateUpdatedTimestamp|object|false|none|none|
|StateValue|object|false|none|none|
|StateTransitionedTimestamp|object|false|none|none|
|ActionsSuppressedBy|object|false|none|none|
|ActionsSuppressedReason|object|false|none|none|
|ActionsSuppressor|object|false|none|none|
|ActionsSuppressorWaitPeriod|object|false|none|none|
|ActionsSuppressorExtensionPeriod|object|false|none|none|

<h2 id="tocS_CompositeAlarms">CompositeAlarms</h2>
<!-- backwards compatibility -->
<a id="schemacompositealarms"></a>
<a id="schema_CompositeAlarms"></a>
<a id="tocScompositealarms"></a>
<a id="tocscompositealarms"></a>

```json
[
  {
    "ActionsEnabled": {},
    "AlarmActions": {},
    "AlarmArn": {},
    "AlarmConfigurationUpdatedTimestamp": {},
    "AlarmDescription": {},
    "AlarmName": {},
    "AlarmRule": {},
    "InsufficientDataActions": {},
    "OKActions": {},
    "StateReason": {},
    "StateReasonData": {},
    "StateUpdatedTimestamp": {},
    "StateValue": {},
    "StateTransitionedTimestamp": {},
    "ActionsSuppressedBy": {},
    "ActionsSuppressedReason": {},
    "ActionsSuppressor": {},
    "ActionsSuppressorWaitPeriod": {},
    "ActionsSuppressorExtensionPeriod": {}
  }
]
```

<h2 id="tocS_DatapointValue">DatapointValue</h2>
<!-- backwards compatibility -->
<a id="schemadatapointvalue"></a>
<a id="schema_DatapointValue"></a>
<a id="tocSdatapointvalue"></a>
<a id="tocsdatapointvalue"></a>

```json
0
```

<h2 id="tocS_Counts">Counts</h2>
<!-- backwards compatibility -->
<a id="schemacounts"></a>
<a id="schema_Counts"></a>
<a id="tocScounts"></a>
<a id="tocscounts"></a>

```json
[
  0
]
```

<h2 id="tocS_DashboardArn">DashboardArn</h2>
<!-- backwards compatibility -->
<a id="schemadashboardarn"></a>
<a id="schema_DashboardArn"></a>
<a id="tocSdashboardarn"></a>
<a id="tocsdashboardarn"></a>

```json
"string"
```

<h2 id="tocS_DashboardBody">DashboardBody</h2>
<!-- backwards compatibility -->
<a id="schemadashboardbody"></a>
<a id="schema_DashboardBody"></a>
<a id="tocSdashboardbody"></a>
<a id="tocsdashboardbody"></a>

```json
"string"
```

<h2 id="tocS_DashboardEntry">DashboardEntry</h2>
<!-- backwards compatibility -->
<a id="schemadashboardentry"></a>
<a id="schema_DashboardEntry"></a>
<a id="tocSdashboardentry"></a>
<a id="tocsdashboardentry"></a>

```json
{
  "DashboardName": {},
  "DashboardArn": {},
  "LastModified": {},
  "Size": {}
}
```

Represents a specific dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardName|object|false|none|none|
|DashboardArn|object|false|none|none|
|LastModified|object|false|none|none|
|Size|object|false|none|none|

<h2 id="tocS_DashboardEntries">DashboardEntries</h2>
<!-- backwards compatibility -->
<a id="schemadashboardentries"></a>
<a id="schema_DashboardEntries"></a>
<a id="tocSdashboardentries"></a>
<a id="tocsdashboardentries"></a>

```json
[
  {
    "DashboardName": {},
    "DashboardArn": {},
    "LastModified": {},
    "Size": {}
  }
]
```

<h2 id="tocS_LastModified">LastModified</h2>
<!-- backwards compatibility -->
<a id="schemalastmodified"></a>
<a id="schema_LastModified"></a>
<a id="tocSlastmodified"></a>
<a id="tocslastmodified"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_DashboardNamePrefix">DashboardNamePrefix</h2>
<!-- backwards compatibility -->
<a id="schemadashboardnameprefix"></a>
<a id="schema_DashboardNamePrefix"></a>
<a id="tocSdashboardnameprefix"></a>
<a id="tocsdashboardnameprefix"></a>

```json
"string"
```

<h2 id="tocS_DashboardNames">DashboardNames</h2>
<!-- backwards compatibility -->
<a id="schemadashboardnames"></a>
<a id="schema_DashboardNames"></a>
<a id="tocSdashboardnames"></a>
<a id="tocsdashboardnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DataPath">DataPath</h2>
<!-- backwards compatibility -->
<a id="schemadatapath"></a>
<a id="schema_DataPath"></a>
<a id="tocSdatapath"></a>
<a id="tocsdatapath"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_DashboardValidationMessage">DashboardValidationMessage</h2>
<!-- backwards compatibility -->
<a id="schemadashboardvalidationmessage"></a>
<a id="schema_DashboardValidationMessage"></a>
<a id="tocSdashboardvalidationmessage"></a>
<a id="tocsdashboardvalidationmessage"></a>

```json
{
  "DataPath": {},
  "Message": {}
}
```

An error or warning for the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataPath|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_DashboardValidationMessages">DashboardValidationMessages</h2>
<!-- backwards compatibility -->
<a id="schemadashboardvalidationmessages"></a>
<a id="schema_DashboardValidationMessages"></a>
<a id="tocSdashboardvalidationmessages"></a>
<a id="tocsdashboardvalidationmessages"></a>

```json
[
  {
    "DataPath": {},
    "Message": {}
  }
]
```

<h2 id="tocS_StandardUnit">StandardUnit</h2>
<!-- backwards compatibility -->
<a id="schemastandardunit"></a>
<a id="schema_StandardUnit"></a>
<a id="tocSstandardunit"></a>
<a id="tocsstandardunit"></a>

```json
"Seconds"
```

<h2 id="tocS_DatapointValueMap">DatapointValueMap</h2>
<!-- backwards compatibility -->
<a id="schemadatapointvaluemap"></a>
<a id="schema_DatapointValueMap"></a>
<a id="tocSdatapointvaluemap"></a>
<a id="tocsdatapointvaluemap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatapointValue](#schemadatapointvalue)|false|none|none|

<h2 id="tocS_Datapoint">Datapoint</h2>
<!-- backwards compatibility -->
<a id="schemadatapoint"></a>
<a id="schema_Datapoint"></a>
<a id="tocSdatapoint"></a>
<a id="tocsdatapoint"></a>

```json
{
  "Timestamp": {},
  "SampleCount": {},
  "Average": {},
  "Sum": {},
  "Minimum": {},
  "Maximum": {},
  "Unit": {},
  "ExtendedStatistics": {
    "property1": 0,
    "property2": 0
  }
}
```

Encapsulates the statistical data that CloudWatch computes from metric data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|false|none|none|
|SampleCount|object|false|none|none|
|Average|object|false|none|none|
|Sum|object|false|none|none|
|Minimum|object|false|none|none|
|Maximum|object|false|none|none|
|Unit|object|false|none|none|
|ExtendedStatistics|object|false|none|none|

<h2 id="tocS_DatapointValues">DatapointValues</h2>
<!-- backwards compatibility -->
<a id="schemadatapointvalues"></a>
<a id="schema_DatapointValues"></a>
<a id="tocSdatapointvalues"></a>
<a id="tocsdatapointvalues"></a>

```json
[
  0
]
```

<h2 id="tocS_Datapoints">Datapoints</h2>
<!-- backwards compatibility -->
<a id="schemadatapoints"></a>
<a id="schema_Datapoints"></a>
<a id="tocSdatapoints"></a>
<a id="tocsdatapoints"></a>

```json
[
  {
    "Timestamp": {},
    "SampleCount": {},
    "Average": {},
    "Sum": {},
    "Minimum": {},
    "Maximum": {},
    "Unit": {},
    "ExtendedStatistics": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h2 id="tocS_DatapointsToAlarm">DatapointsToAlarm</h2>
<!-- backwards compatibility -->
<a id="schemadatapointstoalarm"></a>
<a id="schema_DatapointsToAlarm"></a>
<a id="tocSdatapointstoalarm"></a>
<a id="tocsdatapointstoalarm"></a>

```json
1
```

<h2 id="tocS_DeleteAlarmsInput">DeleteAlarmsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletealarmsinput"></a>
<a id="schema_DeleteAlarmsInput"></a>
<a id="tocSdeletealarmsinput"></a>
<a id="tocsdeletealarmsinput"></a>

```json
{
  "AlarmNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmNames|object|true|none|none|

<h2 id="tocS_DeleteAnomalyDetectorInput">DeleteAnomalyDetectorInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanomalydetectorinput"></a>
<a id="schema_DeleteAnomalyDetectorInput"></a>
<a id="tocSdeleteanomalydetectorinput"></a>
<a id="tocsdeleteanomalydetectorinput"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {},
  "SingleMetricAnomalyDetector": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {}
  },
  "MetricMathAnomalyDetector": {
    "MetricDataQueries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|Stat|object|false|none|none|
|SingleMetricAnomalyDetector|object|false|none|none|
|MetricMathAnomalyDetector|object|false|none|none|

<h2 id="tocS_DeleteDashboardsInput">DeleteDashboardsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedashboardsinput"></a>
<a id="schema_DeleteDashboardsInput"></a>
<a id="tocSdeletedashboardsinput"></a>
<a id="tocsdeletedashboardsinput"></a>

```json
{
  "DashboardNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardNames|object|true|none|none|

<h2 id="tocS_InsightRuleNames">InsightRuleNames</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulenames"></a>
<a id="schema_InsightRuleNames"></a>
<a id="tocSinsightrulenames"></a>
<a id="tocsinsightrulenames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DeleteInsightRulesInput">DeleteInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinsightrulesinput"></a>
<a id="schema_DeleteInsightRulesInput"></a>
<a id="tocSdeleteinsightrulesinput"></a>
<a id="tocsdeleteinsightrulesinput"></a>

```json
{
  "RuleNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleNames|object|true|none|none|

<h2 id="tocS_DeleteMetricStreamInput">DeleteMetricStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricstreaminput"></a>
<a id="schema_DeleteMetricStreamInput"></a>
<a id="tocSdeletemetricstreaminput"></a>
<a id="tocsdeletemetricstreaminput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_MaxRecords">MaxRecords</h2>
<!-- backwards compatibility -->
<a id="schemamaxrecords"></a>
<a id="schema_MaxRecords"></a>
<a id="tocSmaxrecords"></a>
<a id="tocsmaxrecords"></a>

```json
1
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

<h2 id="tocS_ScanBy">ScanBy</h2>
<!-- backwards compatibility -->
<a id="schemascanby"></a>
<a id="schema_ScanBy"></a>
<a id="tocSscanby"></a>
<a id="tocsscanby"></a>

```json
"TimestampDescending"
```

<h2 id="tocS_DescribeAlarmHistoryInput">DescribeAlarmHistoryInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmhistoryinput"></a>
<a id="schema_DescribeAlarmHistoryInput"></a>
<a id="tocSdescribealarmhistoryinput"></a>
<a id="tocsdescribealarmhistoryinput"></a>

```json
{
  "AlarmName": {},
  "AlarmTypes": {},
  "HistoryItemType": {},
  "StartDate": {},
  "EndDate": {},
  "MaxRecords": {},
  "NextToken": {},
  "ScanBy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|false|none|none|
|AlarmTypes|object|false|none|none|
|HistoryItemType|object|false|none|none|
|StartDate|object|false|none|none|
|EndDate|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|
|ScanBy|object|false|none|none|

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
1
```

<h2 id="tocS_DescribeAlarmsForMetricInput">DescribeAlarmsForMetricInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmsformetricinput"></a>
<a id="schema_DescribeAlarmsForMetricInput"></a>
<a id="tocSdescribealarmsformetricinput"></a>
<a id="tocsdescribealarmsformetricinput"></a>

```json
{
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "ExtendedStatistic": {},
  "Dimensions": {},
  "Period": {},
  "Unit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricName|object|true|none|none|
|Namespace|object|true|none|none|
|Statistic|object|false|none|none|
|ExtendedStatistic|object|false|none|none|
|Dimensions|object|false|none|none|
|Period|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_MetricAlarms">MetricAlarms</h2>
<!-- backwards compatibility -->
<a id="schemametricalarms"></a>
<a id="schema_MetricAlarms"></a>
<a id="tocSmetricalarms"></a>
<a id="tocsmetricalarms"></a>

```json
[
  {
    "AlarmName": {},
    "AlarmArn": {},
    "AlarmDescription": {},
    "AlarmConfigurationUpdatedTimestamp": {},
    "ActionsEnabled": {},
    "OKActions": {},
    "AlarmActions": {},
    "InsufficientDataActions": {},
    "StateValue": {},
    "StateReason": {},
    "StateReasonData": {},
    "StateUpdatedTimestamp": {},
    "MetricName": {},
    "Namespace": {},
    "Statistic": {},
    "ExtendedStatistic": {},
    "Dimensions": {},
    "Period": {},
    "Unit": {},
    "EvaluationPeriods": {},
    "DatapointsToAlarm": {},
    "Threshold": {},
    "ComparisonOperator": {},
    "TreatMissingData": {},
    "EvaluateLowSampleCountPercentile": {},
    "Metrics": {},
    "ThresholdMetricId": {},
    "EvaluationState": {},
    "StateTransitionedTimestamp": {}
  }
]
```

<h2 id="tocS_DescribeAlarmsInput">DescribeAlarmsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealarmsinput"></a>
<a id="schema_DescribeAlarmsInput"></a>
<a id="tocSdescribealarmsinput"></a>
<a id="tocsdescribealarmsinput"></a>

```json
{
  "AlarmNames": {},
  "AlarmNamePrefix": {},
  "AlarmTypes": {},
  "ChildrenOfAlarmName": {},
  "ParentsOfAlarmName": {},
  "StateValue": {},
  "ActionPrefix": {},
  "MaxRecords": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmNames|object|false|none|none|
|AlarmNamePrefix|object|false|none|none|
|AlarmTypes|object|false|none|none|
|ChildrenOfAlarmName|object|false|none|none|
|ParentsOfAlarmName|object|false|none|none|
|StateValue|object|false|none|none|
|ActionPrefix|object|false|none|none|
|MaxRecords|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_MaxReturnedResultsCount">MaxReturnedResultsCount</h2>
<!-- backwards compatibility -->
<a id="schemamaxreturnedresultscount"></a>
<a id="schema_MaxReturnedResultsCount"></a>
<a id="tocSmaxreturnedresultscount"></a>
<a id="tocsmaxreturnedresultscount"></a>

```json
1
```

<h2 id="tocS_DescribeAnomalyDetectorsInput">DescribeAnomalyDetectorsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanomalydetectorsinput"></a>
<a id="schema_DescribeAnomalyDetectorsInput"></a>
<a id="tocSdescribeanomalydetectorsinput"></a>
<a id="tocsdescribeanomalydetectorsinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "AnomalyDetectorTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|AnomalyDetectorTypes|object|false|none|none|

<h2 id="tocS_InsightRuleMaxResults">InsightRuleMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulemaxresults"></a>
<a id="schema_InsightRuleMaxResults"></a>
<a id="tocSinsightrulemaxresults"></a>
<a id="tocsinsightrulemaxresults"></a>

```json
1
```

<h2 id="tocS_DescribeInsightRulesInput">DescribeInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinsightrulesinput"></a>
<a id="schema_DescribeInsightRulesInput"></a>
<a id="tocSdescribeinsightrulesinput"></a>
<a id="tocsdescribeinsightrulesinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InsightRules">InsightRules</h2>
<!-- backwards compatibility -->
<a id="schemainsightrules"></a>
<a id="schema_InsightRules"></a>
<a id="tocSinsightrules"></a>
<a id="tocsinsightrules"></a>

```json
[
  {
    "Name": {},
    "State": {},
    "Schema": {},
    "Definition": {},
    "ManagedRule": {}
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

<h2 id="tocS_DimensionValue">DimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensionvalue"></a>
<a id="schema_DimensionValue"></a>
<a id="tocSdimensionvalue"></a>
<a id="tocsdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_DimensionFilters">DimensionFilters</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfilters"></a>
<a id="schema_DimensionFilters"></a>
<a id="tocSdimensionfilters"></a>
<a id="tocsdimensionfilters"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_DisableAlarmActionsInput">DisableAlarmActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemadisablealarmactionsinput"></a>
<a id="schema_DisableAlarmActionsInput"></a>
<a id="tocSdisablealarmactionsinput"></a>
<a id="tocsdisablealarmactionsinput"></a>

```json
{
  "AlarmNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmNames|object|true|none|none|

<h2 id="tocS_DisableInsightRulesInput">DisableInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemadisableinsightrulesinput"></a>
<a id="schema_DisableInsightRulesInput"></a>
<a id="tocSdisableinsightrulesinput"></a>
<a id="tocsdisableinsightrulesinput"></a>

```json
{
  "RuleNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleNames|object|true|none|none|

<h2 id="tocS_EnableAlarmActionsInput">EnableAlarmActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemaenablealarmactionsinput"></a>
<a id="schema_EnableAlarmActionsInput"></a>
<a id="tocSenablealarmactionsinput"></a>
<a id="tocsenablealarmactionsinput"></a>

```json
{
  "AlarmNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmNames|object|true|none|none|

<h2 id="tocS_EnableInsightRulesInput">EnableInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemaenableinsightrulesinput"></a>
<a id="schema_EnableInsightRulesInput"></a>
<a id="tocSenableinsightrulesinput"></a>
<a id="tocsenableinsightrulesinput"></a>

```json
{
  "RuleNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleNames|object|true|none|none|

<h2 id="tocS_EvaluateLowSampleCountPercentile">EvaluateLowSampleCountPercentile</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatelowsamplecountpercentile"></a>
<a id="schema_EvaluateLowSampleCountPercentile"></a>
<a id="tocSevaluatelowsamplecountpercentile"></a>
<a id="tocsevaluatelowsamplecountpercentile"></a>

```json
"string"
```

<h2 id="tocS_EvaluationPeriods">EvaluationPeriods</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationperiods"></a>
<a id="schema_EvaluationPeriods"></a>
<a id="tocSevaluationperiods"></a>
<a id="tocsevaluationperiods"></a>

```json
1
```

<h2 id="tocS_EvaluationState">EvaluationState</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationstate"></a>
<a id="schema_EvaluationState"></a>
<a id="tocSevaluationstate"></a>
<a id="tocsevaluationstate"></a>

```json
"PARTIAL_DATA"
```

<h2 id="tocS_ExceptionType">ExceptionType</h2>
<!-- backwards compatibility -->
<a id="schemaexceptiontype"></a>
<a id="schema_ExceptionType"></a>
<a id="tocSexceptiontype"></a>
<a id="tocsexceptiontype"></a>

```json
"string"
```

<h2 id="tocS_ExtendedStatistics">ExtendedStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaextendedstatistics"></a>
<a id="schema_ExtendedStatistics"></a>
<a id="tocSextendedstatistics"></a>
<a id="tocsextendedstatistics"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FailureCode">FailureCode</h2>
<!-- backwards compatibility -->
<a id="schemafailurecode"></a>
<a id="schema_FailureCode"></a>
<a id="tocSfailurecode"></a>
<a id="tocsfailurecode"></a>

```json
"string"
```

<h2 id="tocS_FailureDescription">FailureDescription</h2>
<!-- backwards compatibility -->
<a id="schemafailuredescription"></a>
<a id="schema_FailureDescription"></a>
<a id="tocSfailuredescription"></a>
<a id="tocsfailuredescription"></a>

```json
"string"
```

<h2 id="tocS_FailureResource">FailureResource</h2>
<!-- backwards compatibility -->
<a id="schemafailureresource"></a>
<a id="schema_FailureResource"></a>
<a id="tocSfailureresource"></a>
<a id="tocsfailureresource"></a>

```json
"string"
```

<h2 id="tocS_GetDashboardInput">GetDashboardInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdashboardinput"></a>
<a id="schema_GetDashboardInput"></a>
<a id="tocSgetdashboardinput"></a>
<a id="tocsgetdashboardinput"></a>

```json
{
  "DashboardName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardName|object|true|none|none|

<h2 id="tocS_InsightRuleUnboundInteger">InsightRuleUnboundInteger</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleunboundinteger"></a>
<a id="schema_InsightRuleUnboundInteger"></a>
<a id="tocSinsightruleunboundinteger"></a>
<a id="tocsinsightruleunboundinteger"></a>

```json
0
```

<h2 id="tocS_InsightRuleMetricList">InsightRuleMetricList</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulemetriclist"></a>
<a id="schema_InsightRuleMetricList"></a>
<a id="tocSinsightrulemetriclist"></a>
<a id="tocsinsightrulemetriclist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InsightRuleOrderBy">InsightRuleOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleorderby"></a>
<a id="schema_InsightRuleOrderBy"></a>
<a id="tocSinsightruleorderby"></a>
<a id="tocsinsightruleorderby"></a>

```json
"string"
```

<h2 id="tocS_GetInsightRuleReportInput">GetInsightRuleReportInput</h2>
<!-- backwards compatibility -->
<a id="schemagetinsightrulereportinput"></a>
<a id="schema_GetInsightRuleReportInput"></a>
<a id="tocSgetinsightrulereportinput"></a>
<a id="tocsgetinsightrulereportinput"></a>

```json
{
  "RuleName": {},
  "StartTime": {},
  "EndTime": {},
  "Period": {},
  "MaxContributorCount": {},
  "Metrics": {},
  "OrderBy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Period|object|true|none|none|
|MaxContributorCount|object|false|none|none|
|Metrics|object|false|none|none|
|OrderBy|object|false|none|none|

<h2 id="tocS_InsightRuleContributorKeyLabels">InsightRuleContributorKeyLabels</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributorkeylabels"></a>
<a id="schema_InsightRuleContributorKeyLabels"></a>
<a id="tocSinsightrulecontributorkeylabels"></a>
<a id="tocsinsightrulecontributorkeylabels"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InsightRuleAggregationStatistic">InsightRuleAggregationStatistic</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleaggregationstatistic"></a>
<a id="schema_InsightRuleAggregationStatistic"></a>
<a id="tocSinsightruleaggregationstatistic"></a>
<a id="tocsinsightruleaggregationstatistic"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleUnboundDouble">InsightRuleUnboundDouble</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleunbounddouble"></a>
<a id="schema_InsightRuleUnboundDouble"></a>
<a id="tocSinsightruleunbounddouble"></a>
<a id="tocsinsightruleunbounddouble"></a>

```json
0
```

<h2 id="tocS_InsightRuleUnboundLong">InsightRuleUnboundLong</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleunboundlong"></a>
<a id="schema_InsightRuleUnboundLong"></a>
<a id="tocSinsightruleunboundlong"></a>
<a id="tocsinsightruleunboundlong"></a>

```json
0
```

<h2 id="tocS_InsightRuleContributors">InsightRuleContributors</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributors"></a>
<a id="schema_InsightRuleContributors"></a>
<a id="tocSinsightrulecontributors"></a>
<a id="tocsinsightrulecontributors"></a>

```json
[
  {
    "Keys": {},
    "ApproximateAggregateValue": {},
    "Datapoints": {}
  }
]
```

<h2 id="tocS_InsightRuleMetricDatapoints">InsightRuleMetricDatapoints</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulemetricdatapoints"></a>
<a id="schema_InsightRuleMetricDatapoints"></a>
<a id="tocSinsightrulemetricdatapoints"></a>
<a id="tocsinsightrulemetricdatapoints"></a>

```json
[
  {
    "Timestamp": {},
    "UniqueContributors": {},
    "MaxContributorValue": {},
    "SampleCount": {},
    "Average": {},
    "Sum": {},
    "Minimum": {},
    "Maximum": {}
  }
]
```

<h2 id="tocS_GetMetricDataMaxDatapoints">GetMetricDataMaxDatapoints</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatamaxdatapoints"></a>
<a id="schema_GetMetricDataMaxDatapoints"></a>
<a id="tocSgetmetricdatamaxdatapoints"></a>
<a id="tocsgetmetricdatamaxdatapoints"></a>

```json
0
```

<h2 id="tocS_LabelOptions">LabelOptions</h2>
<!-- backwards compatibility -->
<a id="schemalabeloptions"></a>
<a id="schema_LabelOptions"></a>
<a id="tocSlabeloptions"></a>
<a id="tocslabeloptions"></a>

```json
{
  "Timezone": {}
}
```

<p>This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone. </p> <p>The <code>Timezone</code> value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timezone|object|false|none|none|

<h2 id="tocS_GetMetricDataInput">GetMetricDataInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricdatainput"></a>
<a id="schema_GetMetricDataInput"></a>
<a id="tocSgetmetricdatainput"></a>
<a id="tocsgetmetricdatainput"></a>

```json
{
  "MetricDataQueries": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "ScanBy": {},
  "MaxDatapoints": {},
  "LabelOptions": {
    "Timezone": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricDataQueries|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|NextToken|object|false|none|none|
|ScanBy|object|false|none|none|
|MaxDatapoints|object|false|none|none|
|LabelOptions|object|false|none|none|

<h2 id="tocS_MetricDataResults">MetricDataResults</h2>
<!-- backwards compatibility -->
<a id="schemametricdataresults"></a>
<a id="schema_MetricDataResults"></a>
<a id="tocSmetricdataresults"></a>
<a id="tocsmetricdataresults"></a>

```json
[
  {
    "Id": {},
    "Label": {},
    "Timestamps": {},
    "Values": {},
    "StatusCode": {},
    "Messages": {}
  }
]
```

<h2 id="tocS_MetricDataResultMessages">MetricDataResultMessages</h2>
<!-- backwards compatibility -->
<a id="schemametricdataresultmessages"></a>
<a id="schema_MetricDataResultMessages"></a>
<a id="tocSmetricdataresultmessages"></a>
<a id="tocsmetricdataresultmessages"></a>

```json
[
  {
    "Code": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Statistics">Statistics</h2>
<!-- backwards compatibility -->
<a id="schemastatistics"></a>
<a id="schema_Statistics"></a>
<a id="tocSstatistics"></a>
<a id="tocsstatistics"></a>

```json
[
  "SampleCount"
]
```

<h2 id="tocS_GetMetricStatisticsInput">GetMetricStatisticsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricstatisticsinput"></a>
<a id="schema_GetMetricStatisticsInput"></a>
<a id="tocSgetmetricstatisticsinput"></a>
<a id="tocsgetmetricstatisticsinput"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "StartTime": {},
  "EndTime": {},
  "Period": {},
  "Statistics": {},
  "ExtendedStatistics": {},
  "Unit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|true|none|none|
|MetricName|object|true|none|none|
|Dimensions|object|false|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Period|object|true|none|none|
|Statistics|object|false|none|none|
|ExtendedStatistics|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_MetricLabel">MetricLabel</h2>
<!-- backwards compatibility -->
<a id="schemametriclabel"></a>
<a id="schema_MetricLabel"></a>
<a id="tocSmetriclabel"></a>
<a id="tocsmetriclabel"></a>

```json
"string"
```

<h2 id="tocS_GetMetricStreamInput">GetMetricStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricstreaminput"></a>
<a id="schema_GetMetricStreamInput"></a>
<a id="tocSgetmetricstreaminput"></a>
<a id="tocsgetmetricstreaminput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_MetricStreamFilters">MetricStreamFilters</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamfilters"></a>
<a id="schema_MetricStreamFilters"></a>
<a id="tocSmetricstreamfilters"></a>
<a id="tocsmetricstreamfilters"></a>

```json
[
  {
    "Namespace": {},
    "MetricNames": {}
  }
]
```

<h2 id="tocS_MetricStreamState">MetricStreamState</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstate"></a>
<a id="schema_MetricStreamState"></a>
<a id="tocSmetricstreamstate"></a>
<a id="tocsmetricstreamstate"></a>

```json
"string"
```

<h2 id="tocS_MetricStreamOutputFormat">MetricStreamOutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamoutputformat"></a>
<a id="schema_MetricStreamOutputFormat"></a>
<a id="tocSmetricstreamoutputformat"></a>
<a id="tocsmetricstreamoutputformat"></a>

```json
"json"
```

<h2 id="tocS_MetricStreamStatisticsConfigurations">MetricStreamStatisticsConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatisticsconfigurations"></a>
<a id="schema_MetricStreamStatisticsConfigurations"></a>
<a id="tocSmetricstreamstatisticsconfigurations"></a>
<a id="tocsmetricstreamstatisticsconfigurations"></a>

```json
[
  {
    "IncludeMetrics": {},
    "AdditionalStatistics": {}
  }
]
```

<h2 id="tocS_IncludeLinkedAccountsMetrics">IncludeLinkedAccountsMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaincludelinkedaccountsmetrics"></a>
<a id="schema_IncludeLinkedAccountsMetrics"></a>
<a id="tocSincludelinkedaccountsmetrics"></a>
<a id="tocsincludelinkedaccountsmetrics"></a>

```json
true
```

<h2 id="tocS_MetricWidget">MetricWidget</h2>
<!-- backwards compatibility -->
<a id="schemametricwidget"></a>
<a id="schema_MetricWidget"></a>
<a id="tocSmetricwidget"></a>
<a id="tocsmetricwidget"></a>

```json
"string"
```

<h2 id="tocS_OutputFormat">OutputFormat</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformat"></a>
<a id="schema_OutputFormat"></a>
<a id="tocSoutputformat"></a>
<a id="tocsoutputformat"></a>

```json
"string"
```

<h2 id="tocS_GetMetricWidgetImageInput">GetMetricWidgetImageInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricwidgetimageinput"></a>
<a id="schema_GetMetricWidgetImageInput"></a>
<a id="tocSgetmetricwidgetimageinput"></a>
<a id="tocsgetmetricwidgetimageinput"></a>

```json
{
  "MetricWidget": {},
  "OutputFormat": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricWidget|object|true|none|none|
|OutputFormat|object|false|none|none|

<h2 id="tocS_MetricWidgetImage">MetricWidgetImage</h2>
<!-- backwards compatibility -->
<a id="schemametricwidgetimage"></a>
<a id="schema_MetricWidgetImage"></a>
<a id="tocSmetricwidgetimage"></a>
<a id="tocsmetricwidgetimage"></a>

```json
"string"
```

<h2 id="tocS_IncludeLinkedAccounts">IncludeLinkedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaincludelinkedaccounts"></a>
<a id="schema_IncludeLinkedAccounts"></a>
<a id="tocSincludelinkedaccounts"></a>
<a id="tocsincludelinkedaccounts"></a>

```json
true
```

<h2 id="tocS_InsightRuleState">InsightRuleState</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulestate"></a>
<a id="schema_InsightRuleState"></a>
<a id="tocSinsightrulestate"></a>
<a id="tocsinsightrulestate"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleSchema">InsightRuleSchema</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleschema"></a>
<a id="schema_InsightRuleSchema"></a>
<a id="tocSinsightruleschema"></a>
<a id="tocsinsightruleschema"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleDefinition">InsightRuleDefinition</h2>
<!-- backwards compatibility -->
<a id="schemainsightruledefinition"></a>
<a id="schema_InsightRuleDefinition"></a>
<a id="tocSinsightruledefinition"></a>
<a id="tocsinsightruledefinition"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleIsManaged">InsightRuleIsManaged</h2>
<!-- backwards compatibility -->
<a id="schemainsightruleismanaged"></a>
<a id="schema_InsightRuleIsManaged"></a>
<a id="tocSinsightruleismanaged"></a>
<a id="tocsinsightruleismanaged"></a>

```json
true
```

<h2 id="tocS_InsightRule">InsightRule</h2>
<!-- backwards compatibility -->
<a id="schemainsightrule"></a>
<a id="schema_InsightRule"></a>
<a id="tocSinsightrule"></a>
<a id="tocsinsightrule"></a>

```json
{
  "Name": {},
  "State": {},
  "Schema": {},
  "Definition": {},
  "ManagedRule": {}
}
```

This structure contains the definition for a Contributor Insights rule. For more information about this rule, see<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html"> Using Constributor Insights to analyze high-cardinality data</a> in the <i>Amazon CloudWatch User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|State|object|true|none|none|
|Schema|object|true|none|none|
|Definition|object|true|none|none|
|ManagedRule|object|false|none|none|

<h2 id="tocS_InsightRuleContributorKeys">InsightRuleContributorKeys</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributorkeys"></a>
<a id="schema_InsightRuleContributorKeys"></a>
<a id="tocSinsightrulecontributorkeys"></a>
<a id="tocsinsightrulecontributorkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InsightRuleContributorDatapoints">InsightRuleContributorDatapoints</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributordatapoints"></a>
<a id="schema_InsightRuleContributorDatapoints"></a>
<a id="tocSinsightrulecontributordatapoints"></a>
<a id="tocsinsightrulecontributordatapoints"></a>

```json
[
  {
    "Timestamp": {},
    "ApproximateValue": {}
  }
]
```

<h2 id="tocS_InsightRuleContributor">InsightRuleContributor</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributor"></a>
<a id="schema_InsightRuleContributor"></a>
<a id="tocSinsightrulecontributor"></a>
<a id="tocsinsightrulecontributor"></a>

```json
{
  "Keys": {},
  "ApproximateAggregateValue": {},
  "Datapoints": {}
}
```

<p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Keys|object|true|none|none|
|ApproximateAggregateValue|object|true|none|none|
|Datapoints|object|true|none|none|

<h2 id="tocS_InsightRuleContributorDatapoint">InsightRuleContributorDatapoint</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributordatapoint"></a>
<a id="schema_InsightRuleContributorDatapoint"></a>
<a id="tocSinsightrulecontributordatapoint"></a>
<a id="tocsinsightrulecontributordatapoint"></a>

```json
{
  "Timestamp": {},
  "ApproximateValue": {}
}
```

<p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|true|none|none|
|ApproximateValue|object|true|none|none|

<h2 id="tocS_InsightRuleContributorKey">InsightRuleContributorKey</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributorkey"></a>
<a id="schema_InsightRuleContributorKey"></a>
<a id="tocSinsightrulecontributorkey"></a>
<a id="tocsinsightrulecontributorkey"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleContributorKeyLabel">InsightRuleContributorKeyLabel</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulecontributorkeylabel"></a>
<a id="schema_InsightRuleContributorKeyLabel"></a>
<a id="tocSinsightrulecontributorkeylabel"></a>
<a id="tocsinsightrulecontributorkeylabel"></a>

```json
"string"
```

<h2 id="tocS_InsightRuleMetricDatapoint">InsightRuleMetricDatapoint</h2>
<!-- backwards compatibility -->
<a id="schemainsightrulemetricdatapoint"></a>
<a id="schema_InsightRuleMetricDatapoint"></a>
<a id="tocSinsightrulemetricdatapoint"></a>
<a id="tocsinsightrulemetricdatapoint"></a>

```json
{
  "Timestamp": {},
  "UniqueContributors": {},
  "MaxContributorValue": {},
  "SampleCount": {},
  "Average": {},
  "Sum": {},
  "Minimum": {},
  "Maximum": {}
}
```

<p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Timestamp|object|true|none|none|
|UniqueContributors|object|false|none|none|
|MaxContributorValue|object|false|none|none|
|SampleCount|object|false|none|none|
|Average|object|false|none|none|
|Sum|object|false|none|none|
|Minimum|object|false|none|none|
|Maximum|object|false|none|none|

<h2 id="tocS_ListDashboardsInput">ListDashboardsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdashboardsinput"></a>
<a id="schema_ListDashboardsInput"></a>
<a id="tocSlistdashboardsinput"></a>
<a id="tocslistdashboardsinput"></a>

```json
{
  "DashboardNamePrefix": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardNamePrefix|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListManagedInsightRulesInput">ListManagedInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmanagedinsightrulesinput"></a>
<a id="schema_ListManagedInsightRulesInput"></a>
<a id="tocSlistmanagedinsightrulesinput"></a>
<a id="tocslistmanagedinsightrulesinput"></a>

```json
{
  "ResourceARN": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ManagedRuleDescriptions">ManagedRuleDescriptions</h2>
<!-- backwards compatibility -->
<a id="schemamanagedruledescriptions"></a>
<a id="schema_ManagedRuleDescriptions"></a>
<a id="tocSmanagedruledescriptions"></a>
<a id="tocsmanagedruledescriptions"></a>

```json
[
  {
    "TemplateName": {},
    "ResourceARN": {},
    "RuleState": {
      "RuleName": {},
      "State": {}
    }
  }
]
```

<h2 id="tocS_ListMetricStreamsMaxResults">ListMetricStreamsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricstreamsmaxresults"></a>
<a id="schema_ListMetricStreamsMaxResults"></a>
<a id="tocSlistmetricstreamsmaxresults"></a>
<a id="tocslistmetricstreamsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListMetricStreamsInput">ListMetricStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricstreamsinput"></a>
<a id="schema_ListMetricStreamsInput"></a>
<a id="tocSlistmetricstreamsinput"></a>
<a id="tocslistmetricstreamsinput"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_MetricStreamEntries">MetricStreamEntries</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamentries"></a>
<a id="schema_MetricStreamEntries"></a>
<a id="tocSmetricstreamentries"></a>
<a id="tocsmetricstreamentries"></a>

```json
[
  {
    "Arn": {},
    "CreationDate": {},
    "LastUpdateDate": {},
    "Name": {},
    "FirehoseArn": {},
    "State": {},
    "OutputFormat": {}
  }
]
```

<h2 id="tocS_RecentlyActive">RecentlyActive</h2>
<!-- backwards compatibility -->
<a id="schemarecentlyactive"></a>
<a id="schema_RecentlyActive"></a>
<a id="tocSrecentlyactive"></a>
<a id="tocsrecentlyactive"></a>

```json
"PT3H"
```

<h2 id="tocS_ListMetricsInput">ListMetricsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistmetricsinput"></a>
<a id="schema_ListMetricsInput"></a>
<a id="tocSlistmetricsinput"></a>
<a id="tocslistmetricsinput"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "NextToken": {},
  "RecentlyActive": {},
  "IncludeLinkedAccounts": {},
  "OwningAccount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|NextToken|object|false|none|none|
|RecentlyActive|object|false|none|none|
|IncludeLinkedAccounts|object|false|none|none|
|OwningAccount|object|false|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
[
  {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {}
  }
]
```

<h2 id="tocS_OwningAccounts">OwningAccounts</h2>
<!-- backwards compatibility -->
<a id="schemaowningaccounts"></a>
<a id="schema_OwningAccounts"></a>
<a id="tocSowningaccounts"></a>
<a id="tocsowningaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

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

<h2 id="tocS_TemplateName">TemplateName</h2>
<!-- backwards compatibility -->
<a id="schematemplatename"></a>
<a id="schema_TemplateName"></a>
<a id="tocStemplatename"></a>
<a id="tocstemplatename"></a>

```json
"string"
```

<h2 id="tocS_ManagedRuleState">ManagedRuleState</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrulestate"></a>
<a id="schema_ManagedRuleState"></a>
<a id="tocSmanagedrulestate"></a>
<a id="tocsmanagedrulestate"></a>

```json
{
  "RuleName": {},
  "State": {}
}
```

 The status of a managed Contributor Insights rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS_ManagedRuleDescription">ManagedRuleDescription</h2>
<!-- backwards compatibility -->
<a id="schemamanagedruledescription"></a>
<a id="schema_ManagedRuleDescription"></a>
<a id="tocSmanagedruledescription"></a>
<a id="tocsmanagedruledescription"></a>

```json
{
  "TemplateName": {},
  "ResourceARN": {},
  "RuleState": {
    "RuleName": {},
    "State": {}
  }
}
```

 Contains information about managed Contributor Insights rules, as returned by <code>ListManagedInsightRules</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TemplateName|object|false|none|none|
|ResourceARN|object|false|none|none|
|RuleState|object|false|none|none|

<h2 id="tocS_ManagedRules">ManagedRules</h2>
<!-- backwards compatibility -->
<a id="schemamanagedrules"></a>
<a id="schema_ManagedRules"></a>
<a id="tocSmanagedrules"></a>
<a id="tocsmanagedrules"></a>

```json
[
  {
    "TemplateName": {},
    "ResourceARN": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_MessageDataCode">MessageDataCode</h2>
<!-- backwards compatibility -->
<a id="schemamessagedatacode"></a>
<a id="schema_MessageDataCode"></a>
<a id="tocSmessagedatacode"></a>
<a id="tocsmessagedatacode"></a>

```json
"string"
```

<h2 id="tocS_MessageDataValue">MessageDataValue</h2>
<!-- backwards compatibility -->
<a id="schemamessagedatavalue"></a>
<a id="schema_MessageDataValue"></a>
<a id="tocSmessagedatavalue"></a>
<a id="tocsmessagedatavalue"></a>

```json
"string"
```

<h2 id="tocS_MessageData">MessageData</h2>
<!-- backwards compatibility -->
<a id="schemamessagedata"></a>
<a id="schema_MessageData"></a>
<a id="tocSmessagedata"></a>
<a id="tocsmessagedata"></a>

```json
{
  "Code": {},
  "Value": {}
}
```

<p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p> <p>If a cross-Region <code>GetMetricData</code> operation fails with a code of <code>Forbidden</code> and a value of <code>Authentication too complex to retrieve cross region data</code>, you can correct the problem by running the <code>GetMetricData</code> operation in the same Region where the metric data is.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {}
}
```

Represents a specific metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
0
```

<h2 id="tocS_TreatMissingData">TreatMissingData</h2>
<!-- backwards compatibility -->
<a id="schematreatmissingdata"></a>
<a id="schema_TreatMissingData"></a>
<a id="tocStreatmissingdata"></a>
<a id="tocstreatmissingdata"></a>

```json
"string"
```

<h2 id="tocS_MetricId">MetricId</h2>
<!-- backwards compatibility -->
<a id="schemametricid"></a>
<a id="schema_MetricId"></a>
<a id="tocSmetricid"></a>
<a id="tocsmetricid"></a>

```json
"string"
```

<h2 id="tocS_MetricAlarm">MetricAlarm</h2>
<!-- backwards compatibility -->
<a id="schemametricalarm"></a>
<a id="schema_MetricAlarm"></a>
<a id="tocSmetricalarm"></a>
<a id="tocsmetricalarm"></a>

```json
{
  "AlarmName": {},
  "AlarmArn": {},
  "AlarmDescription": {},
  "AlarmConfigurationUpdatedTimestamp": {},
  "ActionsEnabled": {},
  "OKActions": {},
  "AlarmActions": {},
  "InsufficientDataActions": {},
  "StateValue": {},
  "StateReason": {},
  "StateReasonData": {},
  "StateUpdatedTimestamp": {},
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "ExtendedStatistic": {},
  "Dimensions": {},
  "Period": {},
  "Unit": {},
  "EvaluationPeriods": {},
  "DatapointsToAlarm": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "TreatMissingData": {},
  "EvaluateLowSampleCountPercentile": {},
  "Metrics": {},
  "ThresholdMetricId": {},
  "EvaluationState": {},
  "StateTransitionedTimestamp": {}
}
```

The details about a metric alarm.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|false|none|none|
|AlarmArn|object|false|none|none|
|AlarmDescription|object|false|none|none|
|AlarmConfigurationUpdatedTimestamp|object|false|none|none|
|ActionsEnabled|object|false|none|none|
|OKActions|object|false|none|none|
|AlarmActions|object|false|none|none|
|InsufficientDataActions|object|false|none|none|
|StateValue|object|false|none|none|
|StateReason|object|false|none|none|
|StateReasonData|object|false|none|none|
|StateUpdatedTimestamp|object|false|none|none|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|
|Statistic|object|false|none|none|
|ExtendedStatistic|object|false|none|none|
|Dimensions|object|false|none|none|
|Period|object|false|none|none|
|Unit|object|false|none|none|
|EvaluationPeriods|object|false|none|none|
|DatapointsToAlarm|object|false|none|none|
|Threshold|object|false|none|none|
|ComparisonOperator|object|false|none|none|
|TreatMissingData|object|false|none|none|
|EvaluateLowSampleCountPercentile|object|false|none|none|
|Metrics|object|false|none|none|
|ThresholdMetricId|object|false|none|none|
|EvaluationState|object|false|none|none|
|StateTransitionedTimestamp|object|false|none|none|

<h2 id="tocS_MetricData">MetricData</h2>
<!-- backwards compatibility -->
<a id="schemametricdata"></a>
<a id="schema_MetricData"></a>
<a id="tocSmetricdata"></a>
<a id="tocsmetricdata"></a>

```json
[
  {
    "MetricName": {},
    "Dimensions": {},
    "Timestamp": {},
    "Value": {},
    "StatisticValues": {
      "SampleCount": {},
      "Sum": {},
      "Minimum": {},
      "Maximum": {}
    },
    "Values": {},
    "Counts": {},
    "Unit": {},
    "StorageResolution": {}
  }
]
```

<h2 id="tocS_MetricStat">MetricStat</h2>
<!-- backwards compatibility -->
<a id="schemametricstat"></a>
<a id="schema_MetricStat"></a>
<a id="tocSmetricstat"></a>
<a id="tocsmetricstat"></a>

```json
{
  "Metric": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {}
  },
  "Period": {},
  "Stat": {},
  "Unit": {}
}
```

This structure defines the metric to be returned, along with the statistics, period, and units.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Metric|object|true|none|none|
|Period|object|true|none|none|
|Stat|object|true|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_MetricExpression">MetricExpression</h2>
<!-- backwards compatibility -->
<a id="schemametricexpression"></a>
<a id="schema_MetricExpression"></a>
<a id="tocSmetricexpression"></a>
<a id="tocsmetricexpression"></a>

```json
"string"
```

<h2 id="tocS_ReturnData">ReturnData</h2>
<!-- backwards compatibility -->
<a id="schemareturndata"></a>
<a id="schema_ReturnData"></a>
<a id="tocSreturndata"></a>
<a id="tocsreturndata"></a>

```json
true
```

<h2 id="tocS_Timestamps">Timestamps</h2>
<!-- backwards compatibility -->
<a id="schematimestamps"></a>
<a id="schema_Timestamps"></a>
<a id="tocStimestamps"></a>
<a id="tocstimestamps"></a>

```json
[
  "1970-01-01T00:00:00Z"
]
```

<h2 id="tocS_StatusCode">StatusCode</h2>
<!-- backwards compatibility -->
<a id="schemastatuscode"></a>
<a id="schema_StatusCode"></a>
<a id="tocSstatuscode"></a>
<a id="tocsstatuscode"></a>

```json
"Complete"
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
  "Label": {},
  "Timestamps": {},
  "Values": {},
  "StatusCode": {},
  "Messages": {}
}
```

A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Label|object|false|none|none|
|Timestamps|object|false|none|none|
|Values|object|false|none|none|
|StatusCode|object|false|none|none|
|Messages|object|false|none|none|

<h2 id="tocS_StatisticSet">StatisticSet</h2>
<!-- backwards compatibility -->
<a id="schemastatisticset"></a>
<a id="schema_StatisticSet"></a>
<a id="tocSstatisticset"></a>
<a id="tocsstatisticset"></a>

```json
{
  "SampleCount": {},
  "Sum": {},
  "Minimum": {},
  "Maximum": {}
}
```

Represents a set of statistics that describes a specific metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SampleCount|object|true|none|none|
|Sum|object|true|none|none|
|Minimum|object|true|none|none|
|Maximum|object|true|none|none|

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  0
]
```

<h2 id="tocS_StorageResolution">StorageResolution</h2>
<!-- backwards compatibility -->
<a id="schemastorageresolution"></a>
<a id="schema_StorageResolution"></a>
<a id="tocSstorageresolution"></a>
<a id="tocsstorageresolution"></a>

```json
1
```

<h2 id="tocS_Stat">Stat</h2>
<!-- backwards compatibility -->
<a id="schemastat"></a>
<a id="schema_Stat"></a>
<a id="tocSstat"></a>
<a id="tocsstat"></a>

```json
"string"
```

<h2 id="tocS_MetricStreamEntry">MetricStreamEntry</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamentry"></a>
<a id="schema_MetricStreamEntry"></a>
<a id="tocSmetricstreamentry"></a>
<a id="tocsmetricstreamentry"></a>

```json
{
  "Arn": {},
  "CreationDate": {},
  "LastUpdateDate": {},
  "Name": {},
  "FirehoseArn": {},
  "State": {},
  "OutputFormat": {}
}
```

This structure contains the configuration information about one metric stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationDate|object|false|none|none|
|LastUpdateDate|object|false|none|none|
|Name|object|false|none|none|
|FirehoseArn|object|false|none|none|
|State|object|false|none|none|
|OutputFormat|object|false|none|none|

<h2 id="tocS_MetricStreamFilterMetricNames">MetricStreamFilterMetricNames</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamfiltermetricnames"></a>
<a id="schema_MetricStreamFilterMetricNames"></a>
<a id="tocSmetricstreamfiltermetricnames"></a>
<a id="tocsmetricstreamfiltermetricnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricStreamNames">MetricStreamNames</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamnames"></a>
<a id="schema_MetricStreamNames"></a>
<a id="tocSmetricstreamnames"></a>
<a id="tocsmetricstreamnames"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricStreamStatistic">MetricStreamStatistic</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatistic"></a>
<a id="schema_MetricStreamStatistic"></a>
<a id="tocSmetricstreamstatistic"></a>
<a id="tocsmetricstreamstatistic"></a>

```json
"string"
```

<h2 id="tocS_MetricStreamStatisticsAdditionalStatistics">MetricStreamStatisticsAdditionalStatistics</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatisticsadditionalstatistics"></a>
<a id="schema_MetricStreamStatisticsAdditionalStatistics"></a>
<a id="tocSmetricstreamstatisticsadditionalstatistics"></a>
<a id="tocsmetricstreamstatisticsadditionalstatistics"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MetricStreamStatisticsIncludeMetrics">MetricStreamStatisticsIncludeMetrics</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatisticsincludemetrics"></a>
<a id="schema_MetricStreamStatisticsIncludeMetrics"></a>
<a id="tocSmetricstreamstatisticsincludemetrics"></a>
<a id="tocsmetricstreamstatisticsincludemetrics"></a>

```json
[
  {
    "Namespace": {},
    "MetricName": {}
  }
]
```

<h2 id="tocS_MetricStreamStatisticsMetric">MetricStreamStatisticsMetric</h2>
<!-- backwards compatibility -->
<a id="schemametricstreamstatisticsmetric"></a>
<a id="schema_MetricStreamStatisticsMetric"></a>
<a id="tocSmetricstreamstatisticsmetric"></a>
<a id="tocsmetricstreamstatisticsmetric"></a>

```json
{
  "Namespace": {},
  "MetricName": {}
}
```

This object contains the information for one metric that is to be streamed with additional statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|true|none|none|
|MetricName|object|true|none|none|

<h2 id="tocS_PutAnomalyDetectorInput">PutAnomalyDetectorInput</h2>
<!-- backwards compatibility -->
<a id="schemaputanomalydetectorinput"></a>
<a id="schema_PutAnomalyDetectorInput"></a>
<a id="tocSputanomalydetectorinput"></a>
<a id="tocsputanomalydetectorinput"></a>

```json
{
  "Namespace": {},
  "MetricName": {},
  "Dimensions": {},
  "Stat": {},
  "Configuration": {
    "ExcludedTimeRanges": {},
    "MetricTimezone": {}
  },
  "SingleMetricAnomalyDetector": {
    "Namespace": {},
    "MetricName": {},
    "Dimensions": {},
    "Stat": {}
  },
  "MetricMathAnomalyDetector": {
    "MetricDataQueries": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|false|none|none|
|MetricName|object|false|none|none|
|Dimensions|object|false|none|none|
|Stat|object|false|none|none|
|Configuration|object|false|none|none|
|SingleMetricAnomalyDetector|object|false|none|none|
|MetricMathAnomalyDetector|object|false|none|none|

<h2 id="tocS_PutCompositeAlarmInput">PutCompositeAlarmInput</h2>
<!-- backwards compatibility -->
<a id="schemaputcompositealarminput"></a>
<a id="schema_PutCompositeAlarmInput"></a>
<a id="tocSputcompositealarminput"></a>
<a id="tocsputcompositealarminput"></a>

```json
{
  "ActionsEnabled": {},
  "AlarmActions": {},
  "AlarmDescription": {},
  "AlarmName": {},
  "AlarmRule": {},
  "InsufficientDataActions": {},
  "OKActions": {},
  "Tags": {},
  "ActionsSuppressor": {},
  "ActionsSuppressorWaitPeriod": {},
  "ActionsSuppressorExtensionPeriod": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionsEnabled|object|false|none|none|
|AlarmActions|object|false|none|none|
|AlarmDescription|object|false|none|none|
|AlarmName|object|true|none|none|
|AlarmRule|object|true|none|none|
|InsufficientDataActions|object|false|none|none|
|OKActions|object|false|none|none|
|Tags|object|false|none|none|
|ActionsSuppressor|object|false|none|none|
|ActionsSuppressorWaitPeriod|object|false|none|none|
|ActionsSuppressorExtensionPeriod|object|false|none|none|

<h2 id="tocS_PutDashboardInput">PutDashboardInput</h2>
<!-- backwards compatibility -->
<a id="schemaputdashboardinput"></a>
<a id="schema_PutDashboardInput"></a>
<a id="tocSputdashboardinput"></a>
<a id="tocsputdashboardinput"></a>

```json
{
  "DashboardName": {},
  "DashboardBody": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashboardName|object|true|none|none|
|DashboardBody|object|true|none|none|

<h2 id="tocS_PutInsightRuleInput">PutInsightRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemaputinsightruleinput"></a>
<a id="schema_PutInsightRuleInput"></a>
<a id="tocSputinsightruleinput"></a>
<a id="tocsputinsightruleinput"></a>

```json
{
  "RuleName": {},
  "RuleState": {},
  "RuleDefinition": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleName|object|true|none|none|
|RuleState|object|false|none|none|
|RuleDefinition|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PutManagedInsightRulesInput">PutManagedInsightRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmanagedinsightrulesinput"></a>
<a id="schema_PutManagedInsightRulesInput"></a>
<a id="tocSputmanagedinsightrulesinput"></a>
<a id="tocsputmanagedinsightrulesinput"></a>

```json
{
  "ManagedRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedRules|object|true|none|none|

<h2 id="tocS_PutMetricAlarmInput">PutMetricAlarmInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricalarminput"></a>
<a id="schema_PutMetricAlarmInput"></a>
<a id="tocSputmetricalarminput"></a>
<a id="tocsputmetricalarminput"></a>

```json
{
  "AlarmName": {},
  "AlarmDescription": {},
  "ActionsEnabled": {},
  "OKActions": {},
  "AlarmActions": {},
  "InsufficientDataActions": {},
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "ExtendedStatistic": {},
  "Dimensions": {},
  "Period": {},
  "Unit": {},
  "EvaluationPeriods": {},
  "DatapointsToAlarm": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "TreatMissingData": {},
  "EvaluateLowSampleCountPercentile": {},
  "Metrics": {},
  "Tags": {},
  "ThresholdMetricId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|true|none|none|
|AlarmDescription|object|false|none|none|
|ActionsEnabled|object|false|none|none|
|OKActions|object|false|none|none|
|AlarmActions|object|false|none|none|
|InsufficientDataActions|object|false|none|none|
|MetricName|object|false|none|none|
|Namespace|object|false|none|none|
|Statistic|object|false|none|none|
|ExtendedStatistic|object|false|none|none|
|Dimensions|object|false|none|none|
|Period|object|false|none|none|
|Unit|object|false|none|none|
|EvaluationPeriods|object|true|none|none|
|DatapointsToAlarm|object|false|none|none|
|Threshold|object|false|none|none|
|ComparisonOperator|object|true|none|none|
|TreatMissingData|object|false|none|none|
|EvaluateLowSampleCountPercentile|object|false|none|none|
|Metrics|object|false|none|none|
|Tags|object|false|none|none|
|ThresholdMetricId|object|false|none|none|

<h2 id="tocS_PutMetricDataInput">PutMetricDataInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricdatainput"></a>
<a id="schema_PutMetricDataInput"></a>
<a id="tocSputmetricdatainput"></a>
<a id="tocsputmetricdatainput"></a>

```json
{
  "Namespace": {},
  "MetricData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Namespace|object|true|none|none|
|MetricData|object|true|none|none|

<h2 id="tocS_PutMetricStreamInput">PutMetricStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricstreaminput"></a>
<a id="schema_PutMetricStreamInput"></a>
<a id="tocSputmetricstreaminput"></a>
<a id="tocsputmetricstreaminput"></a>

```json
{
  "Name": {},
  "IncludeFilters": {},
  "ExcludeFilters": {},
  "FirehoseArn": {},
  "RoleArn": {},
  "OutputFormat": {},
  "Tags": {},
  "StatisticsConfigurations": {},
  "IncludeLinkedAccountsMetrics": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|IncludeFilters|object|false|none|none|
|ExcludeFilters|object|false|none|none|
|FirehoseArn|object|true|none|none|
|RoleArn|object|true|none|none|
|OutputFormat|object|true|none|none|
|Tags|object|false|none|none|
|StatisticsConfigurations|object|false|none|none|
|IncludeLinkedAccountsMetrics|object|false|none|none|

<h2 id="tocS_SetAlarmStateInput">SetAlarmStateInput</h2>
<!-- backwards compatibility -->
<a id="schemasetalarmstateinput"></a>
<a id="schema_SetAlarmStateInput"></a>
<a id="tocSsetalarmstateinput"></a>
<a id="tocssetalarmstateinput"></a>

```json
{
  "AlarmName": {},
  "StateValue": {},
  "StateReason": {},
  "StateReasonData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlarmName|object|true|none|none|
|StateValue|object|true|none|none|
|StateReason|object|true|none|none|
|StateReasonData|object|false|none|none|

<h2 id="tocS_StartMetricStreamsInput">StartMetricStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemastartmetricstreamsinput"></a>
<a id="schema_StartMetricStreamsInput"></a>
<a id="tocSstartmetricstreamsinput"></a>
<a id="tocsstartmetricstreamsinput"></a>

```json
{
  "Names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|true|none|none|

<h2 id="tocS_StopMetricStreamsInput">StopMetricStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemastopmetricstreamsinput"></a>
<a id="schema_StopMetricStreamsInput"></a>
<a id="tocSstopmetricstreamsinput"></a>
<a id="tocsstopmetricstreamsinput"></a>

```json
{
  "Names": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|true|none|none|

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

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

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

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

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
