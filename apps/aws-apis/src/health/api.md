<h1 id="aws-health-apis-and-notifications">AWS Health APIs and Notifications v2016-08-04</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Health</fullname> <p>The Health API provides programmatic access to the Health information that appears in the <a href="https://phd.aws.amazon.com/phd/home#/">Personal Health Dashboard</a>. You can use the API operations to get information about events that might affect your Amazon Web Services services and resources.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a <code>SubscriptionRequiredException</code> error.</p> </li> <li> <p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to call the Health API operations. Health supports a multi-Region application architecture and has two regional endpoints in an active-passive configuration. You can use the high availability endpoint example to determine which Amazon Web Services Region is active, so that you can get the latest information from the API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health API</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note> <p>For authentication of requests, Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.</p> <p>If your Amazon Web Services account is part of Organizations, you can use the Health organizational view feature. This feature provides a centralized view of Health events across all accounts in your organization. You can aggregate Health events in real time to identify accounts in your organization that are affected by an operational event or get notified of security vulnerabilities. Use the organizational view API operations to enable this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p> <note> <p>When you use the Health API operations to return Health events, see the following recommendations:</p> <ul> <li> <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return Health events that are public or account-specific.</p> </li> <li> <p>Use pagination to view all events from the response. For example, if you call the <code>DescribeEventsForOrganization</code> operation to get all events in your organization, you might receive several page results. Specify the <code>nextToken</code> in the next request to return more results.</p> </li> </ul> </note>

Base URLs:

* <a href="https://health.us-east-1.amazonaws.com">https://health.us-east-1.amazonaws.com</a> - The general AWSHealth multi-region endpoint

* <a href="http://health.cn-north-1.amazonaws.com.cn">http://health.cn-north-1.amazonaws.com.cn</a> - The AWSHealth endpoint for China (Beijing) and China (Ningxia)

* <a href="https://health.cn-north-1.amazonaws.com.cn">https://health.cn-north-1.amazonaws.com.cn</a> - The AWSHealth endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/health/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-health-apis-and-notifications-default">Default</h1>

## DescribeAffectedAccountsForOrganization

<a id="opIdDescribeAffectedAccountsForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeAffectedAccountsForOrganization' \
  -d '{
    "eventArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization`

<p>Returns a list of accounts in the organization from Organizations that are affected by the provided event. For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>

> Body parameter

```json
{
  "eventArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeaffectedaccountsfororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAffectedAccountsForOrganizationRequest](#schemadescribeaffectedaccountsfororganizationrequest)|true|none|
|» eventArn|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeAffectedAccountsForOrganization|

> Example responses

> 200 Response

```json
{
  "affectedAccounts": {},
  "eventScopeCode": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeaffectedaccountsfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAffectedAccountsForOrganizationResponse](#schemadescribeaffectedaccountsfororganizationresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAffectedEntities

<a id="opIdDescribeAffectedEntities"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeAffectedEntities' \
  -d '{
    "filter": {
      "eventArns": {},
      "entityArns": {},
      "entityValues": {},
      "lastUpdatedTimes": {},
      "tags": {},
      "statusCodes": {}
    },
    "locale": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities`

<p>Returns a list of entities that have been affected by the specified events, based on the specified filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service. Events that have impact beyond that of the affected entities, or where the extent of impact is unknown, include at least one entity indicating this.</p> <p>At least one event ARN is required.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "filter": {
    "eventArns": {},
    "entityArns": {},
    "entityValues": {},
    "lastUpdatedTimes": {},
    "tags": {},
    "statusCodes": {}
  },
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeaffectedentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAffectedEntitiesRequest](#schemadescribeaffectedentitiesrequest)|true|none|
|» filter|body|object|true|none|
|» » eventArns|body|object|true|none|
|» » entityArns|body|object|false|none|
|» » entityValues|body|object|false|none|
|» » lastUpdatedTimes|body|object|false|none|
|» » tags|body|object|false|none|
|» » statusCodes|body|object|false|none|
|» locale|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeAffectedEntities|

> Example responses

> 200 Response

```json
{
  "entities": {},
  "nextToken": {}
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

<h3 id="describeaffectedentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAffectedEntitiesResponse](#schemadescribeaffectedentitiesresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|481|481|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAffectedEntitiesForOrganization

<a id="opIdDescribeAffectedEntitiesForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeAffectedEntitiesForOrganization' \
  -d '{
    "organizationEntityFilters": {},
    "locale": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization`

<p>Returns a list of entities that have been affected by one or more events for one or more accounts in your organization in Organizations, based on the filter criteria. Entities can refer to individual customer resources, groups of customer resources, or any other construct, depending on the Amazon Web Services service.</p> <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <ul> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> <li> <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </li> </ul> </note>

> Body parameter

```json
{
  "organizationEntityFilters": {},
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeaffectedentitiesfororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAffectedEntitiesForOrganizationRequest](#schemadescribeaffectedentitiesfororganizationrequest)|true|none|
|» organizationEntityFilters|body|object|true|none|
|» locale|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeAffectedEntitiesForOrganization|

> Example responses

> 200 Response

```json
{
  "entities": {},
  "failedSet": {},
  "nextToken": {}
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

<h3 id="describeaffectedentitiesfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAffectedEntitiesForOrganizationResponse](#schemadescribeaffectedentitiesfororganizationresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|481|481|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEntityAggregates

<a id="opIdDescribeEntityAggregates"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEntityAggregates' \
  -d '{
    "eventArns": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates`

Returns the number of entities that are affected by each of the specified events.

> Body parameter

```json
{
  "eventArns": {}
}
```

<h3 id="describeentityaggregates-parameters">Parameters</h3>

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
|body|body|[DescribeEntityAggregatesRequest](#schemadescribeentityaggregatesrequest)|true|none|
|» eventArns|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEntityAggregates|

> Example responses

> 200 Response

```json
{
  "entityAggregates": {}
}
```

<h3 id="describeentityaggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEntityAggregatesResponse](#schemadescribeentityaggregatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventAggregates

<a id="opIdDescribeEventAggregates"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEventAggregates' \
  -d '{
    "filter": {
      "eventArns": {},
      "eventTypeCodes": {},
      "services": {},
      "regions": {},
      "availabilityZones": {},
      "startTimes": {},
      "endTimes": {},
      "lastUpdatedTimes": {},
      "entityArns": {},
      "entityValues": {},
      "eventTypeCategories": {},
      "tags": {},
      "eventStatusCodes": {}
    },
    "aggregateField": {},
    "maxResults": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates`

<p>Returns the number of events of each event type (issue, scheduled change, and account notification). If no filter is specified, the counts of all events in each category are returned.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>

> Body parameter

```json
{
  "filter": {
    "eventArns": {},
    "eventTypeCodes": {},
    "services": {},
    "regions": {},
    "availabilityZones": {},
    "startTimes": {},
    "endTimes": {},
    "lastUpdatedTimes": {},
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "tags": {},
    "eventStatusCodes": {}
  },
  "aggregateField": {},
  "maxResults": {},
  "nextToken": {}
}
```

<h3 id="describeeventaggregates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventAggregatesRequest](#schemadescribeeventaggregatesrequest)|true|none|
|» filter|body|object|false|none|
|» » eventArns|body|object|false|none|
|» » eventTypeCodes|body|object|false|none|
|» » services|body|object|false|none|
|» » regions|body|object|false|none|
|» » availabilityZones|body|object|false|none|
|» » startTimes|body|object|false|none|
|» » endTimes|body|object|false|none|
|» » lastUpdatedTimes|body|object|false|none|
|» » entityArns|body|object|false|none|
|» » entityValues|body|object|false|none|
|» » eventTypeCategories|body|object|false|none|
|» » tags|body|object|false|none|
|» » eventStatusCodes|body|object|false|none|
|» aggregateField|body|object|true|none|
|» maxResults|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEventAggregates|

> Example responses

> 200 Response

```json
{
  "eventAggregates": {},
  "nextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeeventaggregates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventAggregatesResponse](#schemadescribeeventaggregatesresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventDetails

<a id="opIdDescribeEventDetails"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEventDetails' \
  -d '{
    "eventArns": {},
    "locale": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails`

<p>Returns detailed information about one or more specified events. Information includes standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included. To retrieve the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p> <p>If a specified event can't be retrieved, an error message is returned for that event.</p> <note> <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>

> Body parameter

```json
{
  "eventArns": {},
  "locale": {}
}
```

<h3 id="describeeventdetails-parameters">Parameters</h3>

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
|body|body|[DescribeEventDetailsRequest](#schemadescribeeventdetailsrequest)|true|none|
|» eventArns|body|object|true|none|
|» locale|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEventDetails|

> Example responses

> 200 Response

```json
{
  "successfulSet": {},
  "failedSet": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeeventdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventDetailsResponse](#schemadescribeeventdetailsresponse)|
|480|480|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventDetailsForOrganization

<a id="opIdDescribeEventDetailsForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEventDetailsForOrganization' \
  -d '{
    "organizationEventDetailFilters": {},
    "locale": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization`

<p>Returns detailed information about one or more specified events for one or more Amazon Web Services accounts in your organization. This information includes standard event data (such as the Amazon Web Services Region and service), an event description, and (depending on the event) possible metadata. This operation doesn't return affected entities, such as the resources related to the event. To return affected entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation.</p> <note> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> </note> <p>When you call the <code>DescribeEventDetailsForOrganization</code> operation, specify the <code>organizationEventDetailFilters</code> object in the request. Depending on the Health event type, note the following differences:</p> <ul> <li> <p>To return event details for a public event, you must specify a null value for the <code>awsAccountId</code> parameter. If you specify an account ID for a public event, Health returns an error message because public events aren't specific to an account.</p> </li> <li> <p>To return event details for an event that is specific to an account in your organization, you must specify the <code>awsAccountId</code> parameter in the request. If you don't specify an account ID, Health returns an error message because the event is specific to an account in your organization. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <note> <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p> </note>

> Body parameter

```json
{
  "organizationEventDetailFilters": {},
  "locale": {}
}
```

<h3 id="describeeventdetailsfororganization-parameters">Parameters</h3>

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
|body|body|[DescribeEventDetailsForOrganizationRequest](#schemadescribeeventdetailsfororganizationrequest)|true|none|
|» organizationEventDetailFilters|body|object|true|none|
|» locale|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEventDetailsForOrganization|

> Example responses

> 200 Response

```json
{
  "successfulSet": {},
  "failedSet": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeeventdetailsfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventDetailsForOrganizationResponse](#schemadescribeeventdetailsfororganizationresponse)|
|480|480|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventTypes

<a id="opIdDescribeEventTypes"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEventTypes' \
  -d '{
    "filter": {
      "eventTypeCodes": {},
      "services": {},
      "eventTypeCategories": {}
    },
    "locale": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes`

<p>Returns the event types that meet the specified filter criteria. You can use this API operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p> <p>If you don't specify a filter criteria, the API operation returns all event types, in no particular order. </p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>

> Body parameter

```json
{
  "filter": {
    "eventTypeCodes": {},
    "services": {},
    "eventTypeCategories": {}
  },
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeeventtypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventTypesRequest](#schemadescribeeventtypesrequest)|true|none|
|» filter|body|object|false|none|
|» » eventTypeCodes|body|object|false|none|
|» » services|body|object|false|none|
|» » eventTypeCategories|body|object|false|none|
|» locale|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEventTypes|

> Example responses

> 200 Response

```json
{
  "eventTypes": {},
  "nextToken": {}
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

<h3 id="describeeventtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventTypesResponse](#schemadescribeeventtypesresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|481|481|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEvents

<a id="opIdDescribeEvents"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEvents' \
  -d '{
    "filter": {
      "eventArns": {},
      "eventTypeCodes": {},
      "services": {},
      "regions": {},
      "availabilityZones": {},
      "startTimes": {},
      "endTimes": {},
      "lastUpdatedTimes": {},
      "entityArns": {},
      "entityValues": {},
      "eventTypeCategories": {},
      "tags": {},
      "eventStatusCodes": {}
    },
    "nextToken": {},
    "maxResults": {},
    "locale": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEvents`

<p> Returns information about events that meet the specified filter criteria. Events are returned in a summary form and do not include the detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p> <p>If no filter criteria are specified, all events are returned. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event.</p> <note> <ul> <li> <p>When you call the <code>DescribeEvents</code> operation and specify an entity for the <code>entityValues</code> parameter, Health might return public events that aren't specific to that resource. For example, if you call <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2) instance, Health might return events that aren't specific to that resource or service. To get events that are specific to a service, use the <code>services</code> parameter in the <code>filter</code> object. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> </li> <li> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </li> </ul> </note>

> Body parameter

```json
{
  "filter": {
    "eventArns": {},
    "eventTypeCodes": {},
    "services": {},
    "regions": {},
    "availabilityZones": {},
    "startTimes": {},
    "endTimes": {},
    "lastUpdatedTimes": {},
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "tags": {},
    "eventStatusCodes": {}
  },
  "nextToken": {},
  "maxResults": {},
  "locale": {}
}
```

<h3 id="describeevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventsRequest](#schemadescribeeventsrequest)|true|none|
|» filter|body|object|false|none|
|» » eventArns|body|object|false|none|
|» » eventTypeCodes|body|object|false|none|
|» » services|body|object|false|none|
|» » regions|body|object|false|none|
|» » availabilityZones|body|object|false|none|
|» » startTimes|body|object|false|none|
|» » endTimes|body|object|false|none|
|» » lastUpdatedTimes|body|object|false|none|
|» » entityArns|body|object|false|none|
|» » entityValues|body|object|false|none|
|» » eventTypeCategories|body|object|false|none|
|» » tags|body|object|false|none|
|» » eventStatusCodes|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» locale|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEvents|

> Example responses

> 200 Response

```json
{
  "events": {},
  "nextToken": {}
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

<h3 id="describeevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsResponse](#schemadescribeeventsresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|481|481|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEventsForOrganization

<a id="opIdDescribeEventsForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeEventsForOrganization' \
  -d '{
    "filter": {
      "eventTypeCodes": {},
      "awsAccountIds": {},
      "services": {},
      "regions": {},
      "startTime": {
        "from": {},
        "to": {}
      },
      "endTime": {
        "from": {},
        "to": {}
      },
      "lastUpdatedTime": {
        "from": {},
        "to": {}
      },
      "entityArns": {},
      "entityValues": {},
      "eventTypeCategories": {},
      "eventStatusCodes": {}
    },
    "nextToken": {},
    "maxResults": {},
    "locale": {}
  }'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization`

<p>Returns information about events across your organization in Organizations. You can use the<code>filters</code> parameter to specify the events that you want to return. Events are returned in a summary form and don't include the affected accounts, detailed description, any additional metadata that depends on the event type, or any affected resources. To retrieve that information, use the following operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> </p> </li> </ul> <p>If you don't specify a <code>filter</code>, the <code>DescribeEventsForOrganizations</code> returns all events across your organization. Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p> <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p> <p>Before you can call this operation, you must first enable Health to work with Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's management account.</p> <note> <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p> </note>

> Body parameter

```json
{
  "filter": {
    "eventTypeCodes": {},
    "awsAccountIds": {},
    "services": {},
    "regions": {},
    "startTime": {
      "from": {},
      "to": {}
    },
    "endTime": {
      "from": {},
      "to": {}
    },
    "lastUpdatedTime": {
      "from": {},
      "to": {}
    },
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "eventStatusCodes": {}
  },
  "nextToken": {},
  "maxResults": {},
  "locale": {}
}
```

<h3 id="describeeventsfororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEventsForOrganizationRequest](#schemadescribeeventsfororganizationrequest)|true|none|
|» filter|body|object|false|none|
|» » eventTypeCodes|body|object|false|none|
|» » awsAccountIds|body|object|false|none|
|» » services|body|object|false|none|
|» » regions|body|object|false|none|
|» » startTime|body|[DateTimeRange](#schemadatetimerange)|false|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|» » endTime|body|[DateTimeRange](#schemadatetimerange)|false|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|» » lastUpdatedTime|body|[DateTimeRange](#schemadatetimerange)|false|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|» » entityArns|body|object|false|none|
|» » entityValues|body|object|false|none|
|» » eventTypeCategories|body|object|false|none|
|» » eventStatusCodes|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» locale|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeEventsForOrganization|

> Example responses

> 200 Response

```json
{
  "events": {},
  "nextToken": {}
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

<h3 id="describeeventsfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEventsForOrganizationResponse](#schemadescribeeventsfororganizationresponse)|
|480|480|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|481|481|UnsupportedLocale|[UnsupportedLocale](#schemaunsupportedlocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeHealthServiceStatusForOrganization

<a id="opIdDescribeHealthServiceStatusForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization`

This operation provides status information on enabling or disabling Health to work with your organization. To call this operation, you must sign in as an IAM user, assume an IAM role, or sign in as the root user (not recommended) in the organization's management account.

<h3 id="describehealthservicestatusfororganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DescribeHealthServiceStatusForOrganization|

> Example responses

> 200 Response

```json
{
  "healthServiceAccessStatusForOrganization": {}
}
```

<h3 id="describehealthservicestatusfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHealthServiceStatusForOrganizationResponse](#schemadescribehealthservicestatusfororganizationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableHealthServiceAccessForOrganization

<a id="opIdDisableHealthServiceAccessForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.DisableHealthServiceAccessForOrganization'
```

`POST /#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization`

<p>Disables Health from working with Organizations. To call this operation, you must sign in as an Identity and Access Management (IAM) user, assume an IAM role, or sign in as the root user (not recommended) in the organization's management account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p> <p>This operation doesn't remove the service-linked role from the management account in your organization. You must use the IAM console, API, or Command Line Interface (CLI) to remove the service-linked role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html#delete-service-linked-role">Deleting a Service-Linked Role</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can also disable the organizational feature by using the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html">DisableAWSServiceAccess</a> API operation. After you call this operation, Health stops aggregating events for all other Amazon Web Services accounts in your organization. If you call the Health API operations for organizational view, Health returns an error. Health continues to aggregate health events for your Amazon Web Services account.</p> </note>

<h3 id="disablehealthserviceaccessfororganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.DisableHealthServiceAccessForOrganization|

> Example responses

> 480 Response

```json
null
```

<h3 id="disablehealthserviceaccessfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableHealthServiceAccessForOrganization

<a id="opIdEnableHealthServiceAccessForOrganization"></a>

> Code samples

```bash
curl 'https://health.us-east-1.amazonaws.com/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSHealth_20160804.EnableHealthServiceAccessForOrganization'
```

`POST /#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization`

<p>Enables Health to work with Organizations. You can use the organizational view feature to aggregate events from all Amazon Web Services accounts in your organization in a centralized location. </p> <p>This operation also creates a service-linked role for the management account in the organization. </p> <note> <p>To call this operation, you must meet the following requirements:</p> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health API. If you call the Health API from an Amazon Web Services account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a <code>SubscriptionRequiredException</code> error.</p> </li> <li> <p>You must have permission to call this operation from the organization's management account. For example IAM policies, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html">Health identity-based policy examples</a>.</p> </li> </ul> </note> <p>If you don't have the required support plan, you can instead use the Health console to enable the organizational view feature. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating Health events</a> in the <i>Health User Guide</i>.</p>

<h3 id="enablehealthserviceaccessfororganization-parameters">Parameters</h3>

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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSHealth_20160804.EnableHealthServiceAccessForOrganization|

> Example responses

> 480 Response

```json
null
```

<h3 id="enablehealthserviceaccessfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_DescribeAffectedAccountsForOrganizationResponse">DescribeAffectedAccountsForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedaccountsfororganizationresponse"></a>
<a id="schema_DescribeAffectedAccountsForOrganizationResponse"></a>
<a id="tocSdescribeaffectedaccountsfororganizationresponse"></a>
<a id="tocsdescribeaffectedaccountsfororganizationresponse"></a>

```json
{
  "affectedAccounts": {},
  "eventScopeCode": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedAccounts|object|false|none|none|
|eventScopeCode|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeAffectedAccountsForOrganizationRequest">DescribeAffectedAccountsForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedaccountsfororganizationrequest"></a>
<a id="schema_DescribeAffectedAccountsForOrganizationRequest"></a>
<a id="tocSdescribeaffectedaccountsfororganizationrequest"></a>
<a id="tocsdescribeaffectedaccountsfororganizationrequest"></a>

```json
{
  "eventArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArn|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidPaginationToken">InvalidPaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtoken"></a>
<a id="schema_InvalidPaginationToken"></a>
<a id="tocSinvalidpaginationtoken"></a>
<a id="tocsinvalidpaginationtoken"></a>

```json
null
```

<h2 id="tocS_DescribeAffectedEntitiesResponse">DescribeAffectedEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedentitiesresponse"></a>
<a id="schema_DescribeAffectedEntitiesResponse"></a>
<a id="tocSdescribeaffectedentitiesresponse"></a>
<a id="tocsdescribeaffectedentitiesresponse"></a>

```json
{
  "entities": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeAffectedEntitiesRequest">DescribeAffectedEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedentitiesrequest"></a>
<a id="schema_DescribeAffectedEntitiesRequest"></a>
<a id="tocSdescribeaffectedentitiesrequest"></a>
<a id="tocsdescribeaffectedentitiesrequest"></a>

```json
{
  "filter": {
    "eventArns": {},
    "entityArns": {},
    "entityValues": {},
    "lastUpdatedTimes": {},
    "tags": {},
    "statusCodes": {}
  },
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|true|none|none|
|locale|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_UnsupportedLocale">UnsupportedLocale</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedlocale"></a>
<a id="schema_UnsupportedLocale"></a>
<a id="tocSunsupportedlocale"></a>
<a id="tocsunsupportedlocale"></a>

```json
null
```

<h2 id="tocS_DescribeAffectedEntitiesForOrganizationResponse">DescribeAffectedEntitiesForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedentitiesfororganizationresponse"></a>
<a id="schema_DescribeAffectedEntitiesForOrganizationResponse"></a>
<a id="tocSdescribeaffectedentitiesfororganizationresponse"></a>
<a id="tocsdescribeaffectedentitiesfororganizationresponse"></a>

```json
{
  "entities": {},
  "failedSet": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|object|false|none|none|
|failedSet|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeAffectedEntitiesForOrganizationRequest">DescribeAffectedEntitiesForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedentitiesfororganizationrequest"></a>
<a id="schema_DescribeAffectedEntitiesForOrganizationRequest"></a>
<a id="tocSdescribeaffectedentitiesfororganizationrequest"></a>
<a id="tocsdescribeaffectedentitiesfororganizationrequest"></a>

```json
{
  "organizationEntityFilters": {},
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationEntityFilters|object|true|none|none|
|locale|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeEntityAggregatesResponse">DescribeEntityAggregatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityaggregatesresponse"></a>
<a id="schema_DescribeEntityAggregatesResponse"></a>
<a id="tocSdescribeentityaggregatesresponse"></a>
<a id="tocsdescribeentityaggregatesresponse"></a>

```json
{
  "entityAggregates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityAggregates|object|false|none|none|

<h2 id="tocS_DescribeEntityAggregatesRequest">DescribeEntityAggregatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeentityaggregatesrequest"></a>
<a id="schema_DescribeEntityAggregatesRequest"></a>
<a id="tocSdescribeentityaggregatesrequest"></a>
<a id="tocsdescribeentityaggregatesrequest"></a>

```json
{
  "eventArns": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArns|object|false|none|none|

<h2 id="tocS_DescribeEventAggregatesResponse">DescribeEventAggregatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventaggregatesresponse"></a>
<a id="schema_DescribeEventAggregatesResponse"></a>
<a id="tocSdescribeeventaggregatesresponse"></a>
<a id="tocsdescribeeventaggregatesresponse"></a>

```json
{
  "eventAggregates": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventAggregates|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEventAggregatesRequest">DescribeEventAggregatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventaggregatesrequest"></a>
<a id="schema_DescribeEventAggregatesRequest"></a>
<a id="tocSdescribeeventaggregatesrequest"></a>
<a id="tocsdescribeeventaggregatesrequest"></a>

```json
{
  "filter": {
    "eventArns": {},
    "eventTypeCodes": {},
    "services": {},
    "regions": {},
    "availabilityZones": {},
    "startTimes": {},
    "endTimes": {},
    "lastUpdatedTimes": {},
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "tags": {},
    "eventStatusCodes": {}
  },
  "aggregateField": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|aggregateField|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsResponse">DescribeEventDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsresponse"></a>
<a id="schema_DescribeEventDetailsResponse"></a>
<a id="tocSdescribeeventdetailsresponse"></a>
<a id="tocsdescribeeventdetailsresponse"></a>

```json
{
  "successfulSet": {},
  "failedSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulSet|object|false|none|none|
|failedSet|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsRequest">DescribeEventDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsrequest"></a>
<a id="schema_DescribeEventDetailsRequest"></a>
<a id="tocSdescribeeventdetailsrequest"></a>
<a id="tocsdescribeeventdetailsrequest"></a>

```json
{
  "eventArns": {},
  "locale": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArns|object|true|none|none|
|locale|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsForOrganizationResponse">DescribeEventDetailsForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsfororganizationresponse"></a>
<a id="schema_DescribeEventDetailsForOrganizationResponse"></a>
<a id="tocSdescribeeventdetailsfororganizationresponse"></a>
<a id="tocsdescribeeventdetailsfororganizationresponse"></a>

```json
{
  "successfulSet": {},
  "failedSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulSet|object|false|none|none|
|failedSet|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsForOrganizationRequest">DescribeEventDetailsForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsfororganizationrequest"></a>
<a id="schema_DescribeEventDetailsForOrganizationRequest"></a>
<a id="tocSdescribeeventdetailsfororganizationrequest"></a>
<a id="tocsdescribeeventdetailsfororganizationrequest"></a>

```json
{
  "organizationEventDetailFilters": {},
  "locale": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationEventDetailFilters|object|true|none|none|
|locale|object|false|none|none|

<h2 id="tocS_DescribeEventTypesResponse">DescribeEventTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtypesresponse"></a>
<a id="schema_DescribeEventTypesResponse"></a>
<a id="tocSdescribeeventtypesresponse"></a>
<a id="tocsdescribeeventtypesresponse"></a>

```json
{
  "eventTypes": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypes|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEventTypesRequest">DescribeEventTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventtypesrequest"></a>
<a id="schema_DescribeEventTypesRequest"></a>
<a id="tocSdescribeeventtypesrequest"></a>
<a id="tocsdescribeeventtypesrequest"></a>

```json
{
  "filter": {
    "eventTypeCodes": {},
    "services": {},
    "eventTypeCategories": {}
  },
  "locale": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|locale|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeEventsResponse">DescribeEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsresponse"></a>
<a id="schema_DescribeEventsResponse"></a>
<a id="tocSdescribeeventsresponse"></a>
<a id="tocsdescribeeventsresponse"></a>

```json
{
  "events": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEventsRequest">DescribeEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsrequest"></a>
<a id="schema_DescribeEventsRequest"></a>
<a id="tocSdescribeeventsrequest"></a>
<a id="tocsdescribeeventsrequest"></a>

```json
{
  "filter": {
    "eventArns": {},
    "eventTypeCodes": {},
    "services": {},
    "regions": {},
    "availabilityZones": {},
    "startTimes": {},
    "endTimes": {},
    "lastUpdatedTimes": {},
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "tags": {},
    "eventStatusCodes": {}
  },
  "nextToken": {},
  "maxResults": {},
  "locale": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|locale|object|false|none|none|

<h2 id="tocS_DescribeEventsForOrganizationResponse">DescribeEventsForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsfororganizationresponse"></a>
<a id="schema_DescribeEventsForOrganizationResponse"></a>
<a id="tocSdescribeeventsfororganizationresponse"></a>
<a id="tocsdescribeeventsfororganizationresponse"></a>

```json
{
  "events": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeEventsForOrganizationRequest">DescribeEventsForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventsfororganizationrequest"></a>
<a id="schema_DescribeEventsForOrganizationRequest"></a>
<a id="tocSdescribeeventsfororganizationrequest"></a>
<a id="tocsdescribeeventsfororganizationrequest"></a>

```json
{
  "filter": {
    "eventTypeCodes": {},
    "awsAccountIds": {},
    "services": {},
    "regions": {},
    "startTime": {
      "from": {},
      "to": {}
    },
    "endTime": {
      "from": {},
      "to": {}
    },
    "lastUpdatedTime": {
      "from": {},
      "to": {}
    },
    "entityArns": {},
    "entityValues": {},
    "eventTypeCategories": {},
    "eventStatusCodes": {}
  },
  "nextToken": {},
  "maxResults": {},
  "locale": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|locale|object|false|none|none|

<h2 id="tocS_DescribeHealthServiceStatusForOrganizationResponse">DescribeHealthServiceStatusForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribehealthservicestatusfororganizationresponse"></a>
<a id="schema_DescribeHealthServiceStatusForOrganizationResponse"></a>
<a id="tocSdescribehealthservicestatusfororganizationresponse"></a>
<a id="tocsdescribehealthservicestatusfororganizationresponse"></a>

```json
{
  "healthServiceAccessStatusForOrganization": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthServiceAccessStatusForOrganization|object|false|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_entityArn">entityArn</h2>
<!-- backwards compatibility -->
<a id="schemaentityarn"></a>
<a id="schema_entityArn"></a>
<a id="tocSentityarn"></a>
<a id="tocsentityarn"></a>

```json
"string"
```

<h2 id="tocS_eventArn">eventArn</h2>
<!-- backwards compatibility -->
<a id="schemaeventarn"></a>
<a id="schema_eventArn"></a>
<a id="tocSeventarn"></a>
<a id="tocseventarn"></a>

```json
"string"
```

<h2 id="tocS_entityValue">entityValue</h2>
<!-- backwards compatibility -->
<a id="schemaentityvalue"></a>
<a id="schema_entityValue"></a>
<a id="tocSentityvalue"></a>
<a id="tocsentityvalue"></a>

```json
"string"
```

<h2 id="tocS_entityUrl">entityUrl</h2>
<!-- backwards compatibility -->
<a id="schemaentityurl"></a>
<a id="schema_entityUrl"></a>
<a id="tocSentityurl"></a>
<a id="tocsentityurl"></a>

```json
"string"
```

<h2 id="tocS_accountId">accountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_accountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
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

<h2 id="tocS_entityStatusCode">entityStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaentitystatuscode"></a>
<a id="schema_entityStatusCode"></a>
<a id="tocSentitystatuscode"></a>
<a id="tocsentitystatuscode"></a>

```json
"IMPAIRED"
```

<h2 id="tocS_tagSet">tagSet</h2>
<!-- backwards compatibility -->
<a id="schematagset"></a>
<a id="schema_tagSet"></a>
<a id="tocStagset"></a>
<a id="tocstagset"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[tagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_AffectedEntity">AffectedEntity</h2>
<!-- backwards compatibility -->
<a id="schemaaffectedentity"></a>
<a id="schema_AffectedEntity"></a>
<a id="tocSaffectedentity"></a>
<a id="tocsaffectedentity"></a>

```json
{
  "entityArn": {},
  "eventArn": {},
  "entityValue": {},
  "entityUrl": {},
  "awsAccountId": {},
  "lastUpdatedTime": {},
  "statusCode": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about an entity that is affected by a Health event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityArn|object|false|none|none|
|eventArn|object|false|none|none|
|entityValue|object|false|none|none|
|entityUrl|object|false|none|none|
|awsAccountId|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|statusCode|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_DateTimeRange">DateTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerange"></a>
<a id="schema_DateTimeRange"></a>
<a id="tocSdatetimerange"></a>
<a id="tocsdatetimerange"></a>

```json
{
  "from": {},
  "to": {}
}
```

A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|object|false|none|none|
|to|object|false|none|none|

<h2 id="tocS_nextToken">nextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_nextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_maxResults">maxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_maxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
10
```

<h2 id="tocS_affectedAccountsList">affectedAccountsList</h2>
<!-- backwards compatibility -->
<a id="schemaaffectedaccountslist"></a>
<a id="schema_affectedAccountsList"></a>
<a id="tocSaffectedaccountslist"></a>
<a id="tocsaffectedaccountslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_eventScopeCode">eventScopeCode</h2>
<!-- backwards compatibility -->
<a id="schemaeventscopecode"></a>
<a id="schema_eventScopeCode"></a>
<a id="tocSeventscopecode"></a>
<a id="tocseventscopecode"></a>

```json
"PUBLIC"
```

<h2 id="tocS_OrganizationAffectedEntitiesErrorItem">OrganizationAffectedEntitiesErrorItem</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationaffectedentitieserroritem"></a>
<a id="schema_OrganizationAffectedEntitiesErrorItem"></a>
<a id="tocSorganizationaffectedentitieserroritem"></a>
<a id="tocsorganizationaffectedentitieserroritem"></a>

```json
{
  "awsAccountId": {},
  "eventArn": {},
  "errorName": {},
  "errorMessage": {}
}
```

Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can't find or process a specific entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountId|object|false|none|none|
|eventArn|object|false|none|none|
|errorName|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_DescribeAffectedEntitiesForOrganizationFailedSet">DescribeAffectedEntitiesForOrganizationFailedSet</h2>
<!-- backwards compatibility -->
<a id="schemadescribeaffectedentitiesfororganizationfailedset"></a>
<a id="schema_DescribeAffectedEntitiesForOrganizationFailedSet"></a>
<a id="tocSdescribeaffectedentitiesfororganizationfailedset"></a>
<a id="tocsdescribeaffectedentitiesfororganizationfailedset"></a>

```json
[
  {
    "awsAccountId": {},
    "eventArn": {},
    "errorName": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_OrganizationEntityFiltersList">OrganizationEntityFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationentityfilterslist"></a>
<a id="schema_OrganizationEntityFiltersList"></a>
<a id="tocSorganizationentityfilterslist"></a>
<a id="tocsorganizationentityfilterslist"></a>

```json
[
  {
    "eventArn": {},
    "awsAccountId": {}
  }
]
```

<h2 id="tocS_locale">locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"string"
```

<h2 id="tocS_maxResultsLowerRange">maxResultsLowerRange</h2>
<!-- backwards compatibility -->
<a id="schemamaxresultslowerrange"></a>
<a id="schema_maxResultsLowerRange"></a>
<a id="tocSmaxresultslowerrange"></a>
<a id="tocsmaxresultslowerrange"></a>

```json
1
```

<h2 id="tocS_EntityList">EntityList</h2>
<!-- backwards compatibility -->
<a id="schemaentitylist"></a>
<a id="schema_EntityList"></a>
<a id="tocSentitylist"></a>
<a id="tocsentitylist"></a>

```json
[
  {
    "entityArn": {},
    "eventArn": {},
    "entityValue": {},
    "entityUrl": {},
    "awsAccountId": {},
    "lastUpdatedTime": {},
    "statusCode": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_EntityFilter">EntityFilter</h2>
<!-- backwards compatibility -->
<a id="schemaentityfilter"></a>
<a id="schema_EntityFilter"></a>
<a id="tocSentityfilter"></a>
<a id="tocsentityfilter"></a>

```json
{
  "eventArns": {},
  "entityArns": {},
  "entityValues": {},
  "lastUpdatedTimes": {},
  "tags": {},
  "statusCodes": {}
}
```

The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArns|object|true|none|none|
|entityArns|object|false|none|none|
|entityValues|object|false|none|none|
|lastUpdatedTimes|object|false|none|none|
|tags|object|false|none|none|
|statusCodes|object|false|none|none|

<h2 id="tocS_EventArnsList">EventArnsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventarnslist"></a>
<a id="schema_EventArnsList"></a>
<a id="tocSeventarnslist"></a>
<a id="tocseventarnslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_EntityAggregateList">EntityAggregateList</h2>
<!-- backwards compatibility -->
<a id="schemaentityaggregatelist"></a>
<a id="schema_EntityAggregateList"></a>
<a id="tocSentityaggregatelist"></a>
<a id="tocsentityaggregatelist"></a>

```json
[
  {
    "eventArn": {},
    "count": {}
  }
]
```

<h2 id="tocS_EventFilter">EventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventfilter"></a>
<a id="schema_EventFilter"></a>
<a id="tocSeventfilter"></a>
<a id="tocseventfilter"></a>

```json
{
  "eventArns": {},
  "eventTypeCodes": {},
  "services": {},
  "regions": {},
  "availabilityZones": {},
  "startTimes": {},
  "endTimes": {},
  "lastUpdatedTimes": {},
  "entityArns": {},
  "entityValues": {},
  "eventTypeCategories": {},
  "tags": {},
  "eventStatusCodes": {}
}
```

The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArns|object|false|none|none|
|eventTypeCodes|object|false|none|none|
|services|object|false|none|none|
|regions|object|false|none|none|
|availabilityZones|object|false|none|none|
|startTimes|object|false|none|none|
|endTimes|object|false|none|none|
|lastUpdatedTimes|object|false|none|none|
|entityArns|object|false|none|none|
|entityValues|object|false|none|none|
|eventTypeCategories|object|false|none|none|
|tags|object|false|none|none|
|eventStatusCodes|object|false|none|none|

<h2 id="tocS_eventAggregateField">eventAggregateField</h2>
<!-- backwards compatibility -->
<a id="schemaeventaggregatefield"></a>
<a id="schema_eventAggregateField"></a>
<a id="tocSeventaggregatefield"></a>
<a id="tocseventaggregatefield"></a>

```json
"eventTypeCategory"
```

<h2 id="tocS_EventAggregateList">EventAggregateList</h2>
<!-- backwards compatibility -->
<a id="schemaeventaggregatelist"></a>
<a id="schema_EventAggregateList"></a>
<a id="tocSeventaggregatelist"></a>
<a id="tocseventaggregatelist"></a>

```json
[
  {
    "aggregateValue": {},
    "count": {}
  }
]
```

<h2 id="tocS_EventDetailsErrorItem">EventDetailsErrorItem</h2>
<!-- backwards compatibility -->
<a id="schemaeventdetailserroritem"></a>
<a id="schema_EventDetailsErrorItem"></a>
<a id="tocSeventdetailserroritem"></a>
<a id="tocseventdetailserroritem"></a>

```json
{
  "eventArn": {},
  "errorName": {},
  "errorMessage": {}
}
```

Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can't find a specified event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArn|object|false|none|none|
|errorName|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsFailedSet">DescribeEventDetailsFailedSet</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsfailedset"></a>
<a id="schema_DescribeEventDetailsFailedSet"></a>
<a id="tocSdescribeeventdetailsfailedset"></a>
<a id="tocsdescribeeventdetailsfailedset"></a>

```json
[
  {
    "eventArn": {},
    "errorName": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_OrganizationEventDetailsErrorItem">OrganizationEventDetailsErrorItem</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationeventdetailserroritem"></a>
<a id="schema_OrganizationEventDetailsErrorItem"></a>
<a id="tocSorganizationeventdetailserroritem"></a>
<a id="tocsorganizationeventdetailserroritem"></a>

```json
{
  "awsAccountId": {},
  "eventArn": {},
  "errorName": {},
  "errorMessage": {}
}
```

Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountId|object|false|none|none|
|eventArn|object|false|none|none|
|errorName|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_DescribeEventDetailsForOrganizationFailedSet">DescribeEventDetailsForOrganizationFailedSet</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsfororganizationfailedset"></a>
<a id="schema_DescribeEventDetailsForOrganizationFailedSet"></a>
<a id="tocSdescribeeventdetailsfororganizationfailedset"></a>
<a id="tocsdescribeeventdetailsfororganizationfailedset"></a>

```json
[
  {
    "awsAccountId": {},
    "eventArn": {},
    "errorName": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_OrganizationEventDetailFiltersList">OrganizationEventDetailFiltersList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationeventdetailfilterslist"></a>
<a id="schema_OrganizationEventDetailFiltersList"></a>
<a id="tocSorganizationeventdetailfilterslist"></a>
<a id="tocsorganizationeventdetailfilterslist"></a>

```json
[
  {
    "eventArn": {},
    "awsAccountId": {}
  }
]
```

<h2 id="tocS_DescribeEventDetailsForOrganizationSuccessfulSet">DescribeEventDetailsForOrganizationSuccessfulSet</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailsfororganizationsuccessfulset"></a>
<a id="schema_DescribeEventDetailsForOrganizationSuccessfulSet"></a>
<a id="tocSdescribeeventdetailsfororganizationsuccessfulset"></a>
<a id="tocsdescribeeventdetailsfororganizationsuccessfulset"></a>

```json
[
  {
    "awsAccountId": {},
    "event": {
      "arn": {},
      "service": {},
      "eventTypeCode": {},
      "eventTypeCategory": {},
      "region": {},
      "availabilityZone": {},
      "startTime": {},
      "endTime": {},
      "lastUpdatedTime": {},
      "statusCode": {},
      "eventScopeCode": {}
    },
    "eventDescription": {
      "latestDescription": {}
    },
    "eventMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_OrganizationEventDetails">OrganizationEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationeventdetails"></a>
<a id="schema_OrganizationEventDetails"></a>
<a id="tocSorganizationeventdetails"></a>
<a id="tocsorganizationeventdetails"></a>

```json
{
  "awsAccountId": {},
  "event": {
    "arn": {},
    "service": {},
    "eventTypeCode": {},
    "eventTypeCategory": {},
    "region": {},
    "availabilityZone": {},
    "startTime": {},
    "endTime": {},
    "lastUpdatedTime": {},
    "statusCode": {},
    "eventScopeCode": {}
  },
  "eventDescription": {
    "latestDescription": {}
  },
  "eventMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountId|object|false|none|none|
|event|[Event](#schemaevent)|false|none|<p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>|
|eventDescription|[EventDescription](#schemaeventdescription-1)|false|none|The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.|
|eventMetadata|object|false|none|none|

<h2 id="tocS_eventArnList">eventArnList</h2>
<!-- backwards compatibility -->
<a id="schemaeventarnlist"></a>
<a id="schema_eventArnList"></a>
<a id="tocSeventarnlist"></a>
<a id="tocseventarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeEventDetailsSuccessfulSet">DescribeEventDetailsSuccessfulSet</h2>
<!-- backwards compatibility -->
<a id="schemadescribeeventdetailssuccessfulset"></a>
<a id="schema_DescribeEventDetailsSuccessfulSet"></a>
<a id="tocSdescribeeventdetailssuccessfulset"></a>
<a id="tocsdescribeeventdetailssuccessfulset"></a>

```json
[
  {
    "event": {
      "arn": {},
      "service": {},
      "eventTypeCode": {},
      "eventTypeCategory": {},
      "region": {},
      "availabilityZone": {},
      "startTime": {},
      "endTime": {},
      "lastUpdatedTime": {},
      "statusCode": {},
      "eventScopeCode": {}
    },
    "eventDescription": {
      "latestDescription": {}
    },
    "eventMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_EventDetails">EventDetails</h2>
<!-- backwards compatibility -->
<a id="schemaeventdetails"></a>
<a id="schema_EventDetails"></a>
<a id="tocSeventdetails"></a>
<a id="tocseventdetails"></a>

```json
{
  "event": {
    "arn": {},
    "service": {},
    "eventTypeCode": {},
    "eventTypeCategory": {},
    "region": {},
    "availabilityZone": {},
    "startTime": {},
    "endTime": {},
    "lastUpdatedTime": {},
    "statusCode": {},
    "eventScopeCode": {}
  },
  "eventDescription": {
    "latestDescription": {}
  },
  "eventMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|
|eventDescription|object|false|none|none|
|eventMetadata|object|false|none|none|

<h2 id="tocS_EventTypeFilter">EventTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypefilter"></a>
<a id="schema_EventTypeFilter"></a>
<a id="tocSeventtypefilter"></a>
<a id="tocseventtypefilter"></a>

```json
{
  "eventTypeCodes": {},
  "services": {},
  "eventTypeCategories": {}
}
```

The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeCodes|object|false|none|none|
|services|object|false|none|none|
|eventTypeCategories|object|false|none|none|

<h2 id="tocS_EventTypeList">EventTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypelist"></a>
<a id="schema_EventTypeList"></a>
<a id="tocSeventtypelist"></a>
<a id="tocseventtypelist"></a>

```json
[
  {
    "service": {},
    "code": {},
    "category": {}
  }
]
```

<h2 id="tocS_OrganizationEventFilter">OrganizationEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationeventfilter"></a>
<a id="schema_OrganizationEventFilter"></a>
<a id="tocSorganizationeventfilter"></a>
<a id="tocsorganizationeventfilter"></a>

```json
{
  "eventTypeCodes": {},
  "awsAccountIds": {},
  "services": {},
  "regions": {},
  "startTime": {
    "from": {},
    "to": {}
  },
  "endTime": {
    "from": {},
    "to": {}
  },
  "lastUpdatedTime": {
    "from": {},
    "to": {}
  },
  "entityArns": {},
  "entityValues": {},
  "eventTypeCategories": {},
  "eventStatusCodes": {}
}
```

The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeCodes|object|false|none|none|
|awsAccountIds|object|false|none|none|
|services|object|false|none|none|
|regions|object|false|none|none|
|startTime|[DateTimeRange](#schemadatetimerange)|false|none|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|endTime|[DateTimeRange](#schemadatetimerange)|false|none|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|lastUpdatedTime|[DateTimeRange](#schemadatetimerange)|false|none|A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code> inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set and <code>to</code> is set: match items where the timestamp value is equal to or before <code>to</code>.|
|entityArns|object|false|none|none|
|entityValues|object|false|none|none|
|eventTypeCategories|object|false|none|none|
|eventStatusCodes|object|false|none|none|

<h2 id="tocS_OrganizationEventList">OrganizationEventList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationeventlist"></a>
<a id="schema_OrganizationEventList"></a>
<a id="tocSorganizationeventlist"></a>
<a id="tocsorganizationeventlist"></a>

```json
[
  {
    "arn": {},
    "service": {},
    "eventTypeCode": {},
    "eventTypeCategory": {},
    "eventScopeCode": {},
    "region": {},
    "startTime": {},
    "endTime": {},
    "lastUpdatedTime": {},
    "statusCode": {}
  }
]
```

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  {
    "arn": {},
    "service": {},
    "eventTypeCode": {},
    "eventTypeCategory": {},
    "region": {},
    "availabilityZone": {},
    "startTime": {},
    "endTime": {},
    "lastUpdatedTime": {},
    "statusCode": {},
    "eventScopeCode": {}
  }
]
```

<h2 id="tocS_healthServiceAccessStatusForOrganization">healthServiceAccessStatusForOrganization</h2>
<!-- backwards compatibility -->
<a id="schemahealthserviceaccessstatusfororganization"></a>
<a id="schema_healthServiceAccessStatusForOrganization"></a>
<a id="tocShealthserviceaccessstatusfororganization"></a>
<a id="tocshealthserviceaccessstatusfororganization"></a>

```json
"string"
```

<h2 id="tocS_count">count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

<h2 id="tocS_EntityAggregate">EntityAggregate</h2>
<!-- backwards compatibility -->
<a id="schemaentityaggregate"></a>
<a id="schema_EntityAggregate"></a>
<a id="tocSentityaggregate"></a>
<a id="tocsentityaggregate"></a>

```json
{
  "eventArn": {},
  "count": {}
}
```

The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArn|object|false|none|none|
|count|object|false|none|none|

<h2 id="tocS_entityArnList">entityArnList</h2>
<!-- backwards compatibility -->
<a id="schemaentityarnlist"></a>
<a id="schema_entityArnList"></a>
<a id="tocSentityarnlist"></a>
<a id="tocsentityarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_entityValueList">entityValueList</h2>
<!-- backwards compatibility -->
<a id="schemaentityvaluelist"></a>
<a id="schema_entityValueList"></a>
<a id="tocSentityvaluelist"></a>
<a id="tocsentityvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_dateTimeRangeList">dateTimeRangeList</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerangelist"></a>
<a id="schema_dateTimeRangeList"></a>
<a id="tocSdatetimerangelist"></a>
<a id="tocsdatetimerangelist"></a>

```json
[
  {
    "from": {},
    "to": {}
  }
]
```

<h2 id="tocS_tagFilter">tagFilter</h2>
<!-- backwards compatibility -->
<a id="schematagfilter"></a>
<a id="schema_tagFilter"></a>
<a id="tocStagfilter"></a>
<a id="tocstagfilter"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_entityStatusCodeList">entityStatusCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaentitystatuscodelist"></a>
<a id="schema_entityStatusCodeList"></a>
<a id="tocSentitystatuscodelist"></a>
<a id="tocsentitystatuscodelist"></a>

```json
[
  "IMPAIRED"
]
```

<h2 id="tocS_service">service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
"string"
```

<h2 id="tocS_eventTypeCode">eventTypeCode</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecode"></a>
<a id="schema_eventTypeCode"></a>
<a id="tocSeventtypecode"></a>
<a id="tocseventtypecode"></a>

```json
"string"
```

<h2 id="tocS_eventTypeCategory">eventTypeCategory</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecategory"></a>
<a id="schema_eventTypeCategory"></a>
<a id="tocSeventtypecategory"></a>
<a id="tocseventtypecategory"></a>

```json
"issue"
```

<h2 id="tocS_region">region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_availabilityZone">availabilityZone</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzone"></a>
<a id="schema_availabilityZone"></a>
<a id="tocSavailabilityzone"></a>
<a id="tocsavailabilityzone"></a>

```json
"string"
```

<h2 id="tocS_eventStatusCode">eventStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatuscode"></a>
<a id="schema_eventStatusCode"></a>
<a id="tocSeventstatuscode"></a>
<a id="tocseventstatuscode"></a>

```json
"open"
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "arn": {},
  "service": {},
  "eventTypeCode": {},
  "eventTypeCategory": {},
  "region": {},
  "availabilityZone": {},
  "startTime": {},
  "endTime": {},
  "lastUpdatedTime": {},
  "statusCode": {},
  "eventScopeCode": {}
}
```

<p>Summary information about an Health event.</p> <p>Health events can be public or account-specific:</p> <ul> <li> <p> <i>Public events</i> might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.</p> </li> <li> <p> <i>Account-specific</i> events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.</p> </li> </ul> <p>You can determine if an event is public or account-specific by using the <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|service|object|false|none|none|
|eventTypeCode|object|false|none|none|
|eventTypeCategory|object|false|none|none|
|region|object|false|none|none|
|availabilityZone|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|statusCode|object|false|none|none|
|eventScopeCode|object|false|none|none|

<h2 id="tocS_EventAccountFilter">EventAccountFilter</h2>
<!-- backwards compatibility -->
<a id="schemaeventaccountfilter"></a>
<a id="schema_EventAccountFilter"></a>
<a id="tocSeventaccountfilter"></a>
<a id="tocseventaccountfilter"></a>

```json
{
  "eventArn": {},
  "awsAccountId": {}
}
```

The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventArn|object|true|none|none|
|awsAccountId|object|false|none|none|

<h2 id="tocS_aggregateValue">aggregateValue</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatevalue"></a>
<a id="schema_aggregateValue"></a>
<a id="tocSaggregatevalue"></a>
<a id="tocsaggregatevalue"></a>

```json
"string"
```

<h2 id="tocS_EventAggregate">EventAggregate</h2>
<!-- backwards compatibility -->
<a id="schemaeventaggregate"></a>
<a id="schema_EventAggregate"></a>
<a id="tocSeventaggregate"></a>
<a id="tocseventaggregate"></a>

```json
{
  "aggregateValue": {},
  "count": {}
}
```

The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateValue|object|false|none|none|
|count|object|false|none|none|

<h2 id="tocS_eventDescription">eventDescription</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescription"></a>
<a id="schema_eventDescription"></a>
<a id="tocSeventdescription"></a>
<a id="tocseventdescription"></a>

```json
"string"
```

<h2 id="tocS_EventDescription">EventDescription</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescription-1"></a>
<a id="schema_EventDescription"></a>
<a id="tocSeventdescription-1"></a>
<a id="tocseventdescription-1"></a>

```json
{
  "latestDescription": {}
}
```

The detailed description of the event. Included in the information returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestDescription|object|false|none|none|

<h2 id="tocS_eventMetadata">eventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaeventmetadata"></a>
<a id="schema_eventMetadata"></a>
<a id="tocSeventmetadata"></a>
<a id="tocseventmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[metadataValue](#schemametadatavalue)|false|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_eventTypeList">eventTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypelist-1"></a>
<a id="schema_eventTypeList"></a>
<a id="tocSeventtypelist-1"></a>
<a id="tocseventtypelist-1"></a>

```json
[
  "string"
]
```

<h2 id="tocS_serviceList">serviceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_serviceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_regionList">regionList</h2>
<!-- backwards compatibility -->
<a id="schemaregionlist"></a>
<a id="schema_regionList"></a>
<a id="tocSregionlist"></a>
<a id="tocsregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_availabilityZones">availabilityZones</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityzones"></a>
<a id="schema_availabilityZones"></a>
<a id="tocSavailabilityzones"></a>
<a id="tocsavailabilityzones"></a>

```json
[
  "string"
]
```

<h2 id="tocS_eventTypeCategoryList">eventTypeCategoryList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecategorylist"></a>
<a id="schema_eventTypeCategoryList"></a>
<a id="tocSeventtypecategorylist"></a>
<a id="tocseventtypecategorylist"></a>

```json
[
  "issue"
]
```

<h2 id="tocS_eventStatusCodeList">eventStatusCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatuscodelist"></a>
<a id="schema_eventStatusCodeList"></a>
<a id="tocSeventstatuscodelist"></a>
<a id="tocseventstatuscodelist"></a>

```json
[
  "open"
]
```

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
{
  "service": {},
  "code": {},
  "category": {}
}
```

<p>Contains the metadata about a type of event that is reported by Health. The <code>EventType</code> shows the category, service, and the event type code of the event. For example, an <code>issue</code> might be the category, <code>EC2</code> the service, and <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code> the event type code.</p> <p>You can use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> API operation to return this information about an event.</p> <p>You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or take action when Health delivers a specific event to your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html">Monitor for Health events with Amazon CloudWatch Events</a> in the <i>Health User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|false|none|none|
|code|object|false|none|none|
|category|object|false|none|none|

<h2 id="tocS_EventTypeCategoryList">EventTypeCategoryList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecategorylist-1"></a>
<a id="schema_EventTypeCategoryList"></a>
<a id="tocSeventtypecategorylist-1"></a>
<a id="tocseventtypecategorylist-1"></a>

```json
[
  "issue"
]
```

<h2 id="tocS_EventTypeCodeList">EventTypeCodeList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypecodelist"></a>
<a id="schema_EventTypeCodeList"></a>
<a id="tocSeventtypecodelist"></a>
<a id="tocseventtypecodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationEvent">OrganizationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationevent"></a>
<a id="schema_OrganizationEvent"></a>
<a id="tocSorganizationevent"></a>
<a id="tocsorganizationevent"></a>

```json
{
  "arn": {},
  "service": {},
  "eventTypeCode": {},
  "eventTypeCategory": {},
  "eventScopeCode": {},
  "region": {},
  "startTime": {},
  "endTime": {},
  "lastUpdatedTime": {},
  "statusCode": {}
}
```

Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|service|object|false|none|none|
|eventTypeCode|object|false|none|none|
|eventTypeCategory|object|false|none|none|
|eventScopeCode|object|false|none|none|
|region|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|lastUpdatedTime|object|false|none|none|
|statusCode|object|false|none|none|

<h2 id="tocS_awsAccountIdsList">awsAccountIdsList</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountidslist"></a>
<a id="schema_awsAccountIdsList"></a>
<a id="tocSawsaccountidslist"></a>
<a id="tocsawsaccountidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_metadataValue">metadataValue</h2>
<!-- backwards compatibility -->
<a id="schemametadatavalue"></a>
<a id="schema_metadataValue"></a>
<a id="tocSmetadatavalue"></a>
<a id="tocsmetadatavalue"></a>

```json
"string"
```

<h2 id="tocS_eventType">eventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype-1"></a>
<a id="schema_eventType"></a>
<a id="tocSeventtype-1"></a>
<a id="tocseventtype-1"></a>

```json
"string"
```

<h2 id="tocS_metadataKey">metadataKey</h2>
<!-- backwards compatibility -->
<a id="schemametadatakey"></a>
<a id="schema_metadataKey"></a>
<a id="tocSmetadatakey"></a>
<a id="tocsmetadatakey"></a>

```json
"string"
```

<h2 id="tocS_tagKey">tagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_tagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_tagValue">tagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_tagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```
