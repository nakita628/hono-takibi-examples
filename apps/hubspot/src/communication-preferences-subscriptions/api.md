<h1 id="communication-preferences-subscriptions">Communication Preferences Subscriptions v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|communication_preferences.read_write||
|communication_preferences.statuses.batch.read||
|communication_preferences.statuses.batch.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="communication-preferences-subscriptions-batch">Batch</h1>

## Batch retrieve subscription statuses

<a id="opIdpost-/communication-preferences/2026-09/statuses/batch/read"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/batch/read?channel=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/statuses/batch/read`

Batch retrieve subscription statuses for a set of contacts.

> Body parameter

```json
null
```

<h3 id="batch-retrieve-subscription-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|A required string specifying the communication channel. Currently, only 'EMAIL' is supported.|
|businessUnitId|query|integer(int64)|false|An optional integer representing the business unit ID. This parameter helps in filtering the results based on a specific business unit.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|A list of strings representing the inputs for batch operations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-retrieve-subscription-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicStatusBulkResponse](#schemabatchresponsepublicstatusbulkresponse)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicStatusBulkResponseWithErrors](#schemabatchresponsepublicstatusbulkresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.statuses.batch.read )
</aside>

## Batch unsubscribe contacts from all subscriptions

<a id="opIdpost-/communication-preferences/2026-09/statuses/batch/unsubscribe-all"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/batch/unsubscribe-all?channel=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/statuses/batch/unsubscribe-all`

Unsubscribe a set of contacts from all email subscriptions.

> Body parameter

```json
null
```

<h3 id="batch-unsubscribe-contacts-from-all-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|The communication channel from which to unsubscribe all subscribers. This parameter is required and currently supports only 'EMAIL'.|
|businessUnitId|query|integer(int64)|false|The ID of the business unit for which the operation is being performed. This is an optional parameter.|
|verbose|query|boolean|false|A boolean flag indicating whether to include detailed information in the response. Defaults to false.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|A list of strings representing the inputs for batch operations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-unsubscribe-contacts-from-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicBulkOptOutFromAllResponse](#schemabatchresponsepublicbulkoptoutfromallresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.statuses.batch.write )
</aside>

## Batch retrieve contacts who have opted out of all communications

<a id="opIdpost-/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/batch/unsubscribe-all/read?channel=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/statuses/batch/unsubscribe-all/read`

Checks whether a set of contacts have opted out of all communications.

> Body parameter

```json
null
```

<h3 id="batch-retrieve-contacts-who-have-opted-out-of-all-communications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|A required string specifying the communication channel. Currently, only 'EMAIL' is supported.|
|businessUnitId|query|integer(int64)|false|An optional integer representing the business unit ID to filter the results.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|A list of strings representing the inputs for batch operations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-retrieve-contacts-who-have-opted-out-of-all-communications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicWideStatusBulkResponse](#schemabatchresponsepublicwidestatusbulkresponse)|
|207|Multi-Status|multiple statuses|[BatchResponsePublicWideStatusBulkResponseWithErrors](#schemabatchresponsepublicwidestatusbulkresponsewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.statuses.batch.read )
</aside>

## Batch update subscription status

<a id="opIdpost-/communication-preferences/2026-09/statuses/batch/write"></a>

> Code samples

```bash
curl https://api.hubapi.com/communication-preferences/2026-09/statuses/batch/write \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/statuses/batch/write`

Update the subscription status for a set of contacts.

> Body parameter

```json
null
```

<h3 id="batch-update-subscription-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicStatusRequest](#schemabatchinputpublicstatusrequest)|true|none|
|» inputs|body|[[PublicStatusRequest](#schemapublicstatusrequest)]|true|An array of PublicStatusRequest objects, each representing a subscription status update request. This property is required.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-update-subscription-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicStatus](#schemabatchresponsepublicstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.statuses.batch.write )
</aside>

<h1 id="communication-preferences-subscriptions-definitions">Definitions</h1>

## Retrieve all subscription status definitions

<a id="opIdget-/communication-preferences/2026-09/definitions"></a>

> Code samples

```bash
curl https://api.hubapi.com/communication-preferences/2026-09/definitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /communication-preferences/2026-09/definitions`

Get a list of subscription status definitions from the account.

<h3 id="retrieve-all-subscription-status-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|businessUnitId|query|integer(int64)|false|An integer representing the unique identifier of the business unit for which to retrieve communication preferences definitions.|
|includeTranslations|query|boolean|false|A boolean indicating whether to include translations for the subscription definitions. Defaults to false if not specified.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-subscription-status-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithResultsSubscriptionDefinition](#schemaactionresponsewithresultssubscriptiondefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

## Unsubscribe a contact from all subscriptions

<a id="opIdpost-/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all?channel=' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

Unsubscribe a contact from all email subscriptions.

<h3 id="unsubscribe-a-contact-from-all-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriberIdString|path|string|true|The unique identifier of the subscriber to unsubscribe.|
|channel|query|string|true|The communication channel to unsubscribe from. Must be 'EMAIL'.|
|businessUnitId|query|integer(int64)|false|An optional integer representing the business unit ID.|
|verbose|query|boolean|false|An optional boolean to include detailed information in the response. Defaults to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="unsubscribe-a-contact-from-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithResultsPublicStatus](#schemaactionresponsewithresultspublicstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

<h1 id="communication-preferences-subscriptions-status">Status</h1>

## Generate subscription links

<a id="opIdpost-/communication-preferences/2026-09/links/generate_/communication-preferences/v4/links/generate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/links/generate?channel=' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/links/generate`

Generate communication preference links for a subscriber. This endpoint allows you to create URLs for managing preferences and unsubscribing, tailored to a specific subscriber. It is useful for integrating communication preference management into your applications.

> Body parameter

```json
null
```

<h3 id="generate-subscription-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel|query|string|true|The communication channel for which the links are generated. Currently, only 'EMAIL' is supported.|
|businessUnitId|query|integer(int64)|false|The ID of the business unit for which the links are generated. It is an optional parameter and defaults to 0.|
|body|body|[LinkGenerationRequest](#schemalinkgenerationrequest)|true|none|
|» language|body|string|false|The language in which the generated link should be presented, represented as a string.|
|» subscriberIdString|body|string|true|A string representing the unique identifier of the subscriber. This property is required.|
|» subscriptionId|body|integer(int64)|false|The unique identifier for the subscription, represented as an integer in int64 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="generate-subscription-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[LinkGenerationResponse](#schemalinkgenerationresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

## Get subscription preferences for a specific contact

<a id="opIdget-/communication-preferences/2026-09/statuses/{subscriberIdString}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/{subscriberIdString}?channel=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /communication-preferences/2026-09/statuses/{subscriberIdString}`

Retrieve a contact's current email subscription preferences.

<h3 id="get-subscription-preferences-for-a-specific-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriberIdString|path|string|true|The unique identifier of the subscriber whose communication preferences status is being retrieved.|
|channel|query|string|true|The communication channel for which the subscription status is being retrieved. Must be 'EMAIL'.|
|businessUnitId|query|integer(int64)|false|The ID of the business unit to filter the subscription status. This is an optional parameter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-subscription-preferences-for-a-specific-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithResultsPublicStatus](#schemaactionresponsewithresultspublicstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

## Update a contact's subscription status

<a id="opIdpost-/communication-preferences/2026-09/statuses/{subscriberIdString}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/{subscriberIdString}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /communication-preferences/2026-09/statuses/{subscriberIdString}`

Set the subscription status of a specific contact.

> Body parameter

```json
null
```

<h3 id="update-a-contacts-subscription-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriberIdString|path|string|true|The unique identifier of the subscriber whose communication preferences status is to be updated.|
|body|body|[PartialPublicStatusRequest](#schemapartialpublicstatusrequest)|true|none|
|» channel|body|string|true|The type of communication channel, with 'EMAIL' as the only supported option.|
|» legalBasis|body|string|false|The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.|
|» legalBasisExplanation|body|string|false|An explanation for the legal basis used for communication.|
|» statusState|body|string|true|The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.|
|» subscriptionId|body|integer(int64)|true|The unique identifier of the subscription to be updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|EMAIL|
|» legalBasis|CONSENT_WITH_NOTICE|
|» legalBasis|LEGITIMATE_INTEREST_CLIENT|
|» legalBasis|LEGITIMATE_INTEREST_OTHER|
|» legalBasis|LEGITIMATE_INTEREST_PQL|
|» legalBasis|NON_GDPR|
|» legalBasis|PERFORMANCE_OF_CONTRACT|
|» legalBasis|PROCESS_AND_STORE|
|» statusState|NOT_SPECIFIED|
|» statusState|SUBSCRIBED|
|» statusState|UNSUBSCRIBED|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-contacts-subscription-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithResultsPublicStatus](#schemaactionresponsewithresultspublicstatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

## Retrieve a contact's unsubscribed status

<a id="opIdget-/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all?channel=' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /communication-preferences/2026-09/statuses/{subscriberIdString}/unsubscribe-all`

Check whether a contact has unsubscribed from all email subscriptions. If a contact has not opted out of all communications, the response `results` array will be empty.

<h3 id="retrieve-a-contacts-unsubscribed-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriberIdString|path|string|true|The unique identifier of the subscriber whose unsubscribe status is being retrieved.|
|channel|query|string|true|The communication channel for which the unsubscribe status is being checked. Must be 'EMAIL'.|
|businessUnitId|query|integer(int64)|false|An optional integer representing the business unit ID.|
|verbose|query|boolean|false|A boolean indicating whether to include detailed information. Defaults to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-contacts-unsubscribed-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponseWithResultsPublicWideStatus](#schemaactionresponsewithresultspublicwidestatus)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: communication_preferences.read_write )
</aside>

# Schemas

<h2 id="tocS_ActionResponseWithResultsPublicStatus">ActionResponseWithResultsPublicStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponsewithresultspublicstatus"></a>
<a id="schema_ActionResponseWithResultsPublicStatus"></a>
<a id="tocSactionresponsewithresultspublicstatus"></a>
<a id="tocsactionresponsewithresultspublicstatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|A list of errors that occurred during the operation.|
|links|object|false|none|Contains URLs related to the response, such as documentation or resources.|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the operation.|
|requestedAt|string(date-time)|false|none|The date and time when the request was made.|
|results|[[PublicStatus](#schemapublicstatus)]|true|none|An array of results from the operation.|
|startedAt|string(date-time)|true|none|The date and time when the operation started.|
|status|string|true|none|Indicates the current status of the operation, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_ActionResponseWithResultsPublicWideStatus">ActionResponseWithResultsPublicWideStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponsewithresultspublicwidestatus"></a>
<a id="schema_ActionResponseWithResultsPublicWideStatus"></a>
<a id="tocSactionresponsewithresultspublicwidestatus"></a>
<a id="tocsactionresponsewithresultspublicwidestatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing any issues encountered during the operation.|
|links|object|false|none|An object containing related links, where each key is a link name and each value is a URL.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the operation.|
|requestedAt|string(date-time)|false|none|The date and time when the request was made.|
|results|[[PublicWideStatus](#schemapublicwidestatus)]|true|none|An array containing the results of the operation.|
|startedAt|string(date-time)|true|none|The date and time when the operation started.|
|status|string|true|none|The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_ActionResponseWithResultsSubscriptionDefinition">ActionResponseWithResultsSubscriptionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponsewithresultssubscriptiondefinition"></a>
<a id="schema_ActionResponseWithResultsSubscriptionDefinition"></a>
<a id="tocSactionresponsewithresultssubscriptiondefinition"></a>
<a id="tocsactionresponsewithresultssubscriptiondefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors that occurred during the operation.|
|links|object|false|none|A collection of related links associated with the operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the operation.|
|requestedAt|string(date-time)|false|none|The date and time when the operation was requested.|
|results|[[SubscriptionDefinition](#schemasubscriptiondefinition)]|true|none|An array containing the results of the operation.|
|startedAt|string(date-time)|true|none|The date and time when the operation started.|
|status|string|true|none|The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchInputPublicStatusRequest">BatchInputPublicStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpublicstatusrequest"></a>
<a id="schema_BatchInputPublicStatusRequest"></a>
<a id="tocSbatchinputpublicstatusrequest"></a>
<a id="tocsbatchinputpublicstatusrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicStatusRequest](#schemapublicstatusrequest)]|true|none|An array of PublicStatusRequest objects, each representing a subscription status update request. This property is required.|

<h2 id="tocS_BatchInputString">BatchInputString</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputstring"></a>
<a id="schema_BatchInputString"></a>
<a id="tocSbatchinputstring"></a>
<a id="tocsbatchinputstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[string]|true|none|A list of strings representing the inputs for batch operations.|

<h2 id="tocS_BatchResponsePublicBulkOptOutFromAllResponse">BatchResponsePublicBulkOptOutFromAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicbulkoptoutfromallresponse"></a>
<a id="schema_BatchResponsePublicBulkOptOutFromAllResponse"></a>
<a id="tocSbatchresponsepublicbulkoptoutfromallresponse"></a>
<a id="tocsbatchresponsepublicbulkoptoutfromallresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the bulk opt-out operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing any issues encountered during the bulk opt-out operation.|
|links|object|false|none|A collection of URLs linking to related resources or documentation.|
|numErrors|integer(int32)|false|none|The total number of errors encountered during the bulk opt-out operation.|
|requestedAt|string(date-time)|false|none|The date and time when the bulk opt-out request was made.|
|results|[[PublicBulkOptOutFromAllResponse](#schemapublicbulkoptoutfromallresponse)]|true|none|An array containing the results of the bulk opt-out from all communications operation.|
|startedAt|string(date-time)|true|none|The date and time when the bulk opt-out operation began.|
|status|string|true|none|The current status of the bulk opt-out operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicStatus">BatchResponsePublicStatus</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicstatus"></a>
<a id="schema_BatchResponsePublicStatus"></a>
<a id="tocSbatchresponsepublicstatus"></a>
<a id="tocsbatchresponsepublicstatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing any issues encountered.|
|links|object|false|none|URLs linking to related resources or documentation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the request was made.|
|results|[[PublicStatus](#schemapublicstatus)]|true|none|An array containing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started.|
|status|string|true|none|The current status of the batch operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicStatusBulkResponse">BatchResponsePublicStatusBulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicstatusbulkresponse"></a>
<a id="schema_BatchResponsePublicStatusBulkResponse"></a>
<a id="tocSbatchresponsepublicstatusbulkresponse"></a>
<a id="tocsbatchresponsepublicstatusbulkresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch process was completed.|
|links|object|false|none|A collection of related links associated with the batch response.|
|requestedAt|string(date-time)|false|none|The date and time when the batch request was made.|
|results|[[PublicStatusBulkResponse](#schemapublicstatusbulkresponse)]|true|none|The array of results from the batch process, each containing subscription status information.|
|startedAt|string(date-time)|true|none|The date and time when the batch process began.|
|status|string|true|none|The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicStatusBulkResponseWithErrors">BatchResponsePublicStatusBulkResponseWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicstatusbulkresponsewitherrors"></a>
<a id="schema_BatchResponsePublicStatusBulkResponseWithErrors"></a>
<a id="tocSbatchresponsepublicstatusbulkresponsewitherrors"></a>
<a id="tocsbatchresponsepublicstatusbulkresponsewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing any issues encountered during the operation.|
|links|object|false|none|An object containing related links, where each key is a link name and each value is a URL.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the operation.|
|requestedAt|string(date-time)|false|none|The date and time when the request was made.|
|results|[[PublicStatusBulkResponse](#schemapublicstatusbulkresponse)]|true|none|An array containing the results of the operation.|
|startedAt|string(date-time)|true|none|The date and time when the operation started.|
|status|string|true|none|The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicWideStatusBulkResponse">BatchResponsePublicWideStatusBulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicwidestatusbulkresponse"></a>
<a id="schema_BatchResponsePublicWideStatusBulkResponse"></a>
<a id="tocSbatchresponsepublicwidestatusbulkresponse"></a>
<a id="tocsbatchresponsepublicwidestatusbulkresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch process was completed.|
|links|object|false|none|A collection of related links associated with the batch response.|
|requestedAt|string(date-time)|false|none|The date and time when the batch request was made.|
|results|[[PublicWideStatusBulkResponse](#schemapublicwidestatusbulkresponse)]|true|none|The array of results from the batch process, each containing subscription status information.|
|startedAt|string(date-time)|true|none|The date and time when the batch process began.|
|status|string|true|none|The current status of the batch process, with possible values: PENDING, PROCESSING, CANCELED, COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePublicWideStatusBulkResponseWithErrors">BatchResponsePublicWideStatusBulkResponseWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicwidestatusbulkresponsewitherrors"></a>
<a id="schema_BatchResponsePublicWideStatusBulkResponseWithErrors"></a>
<a id="tocSbatchresponsepublicwidestatusbulkresponsewitherrors"></a>
<a id="tocsbatchresponsepublicwidestatusbulkresponsewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the operation was completed.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of error objects detailing any issues encountered during the operation.|
|links|object|false|none|An object containing related links, where each key is a link name and each value is a URL.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the operation.|
|requestedAt|string(date-time)|false|none|The date and time when the operation was requested.|
|results|[[PublicWideStatusBulkResponse](#schemapublicwidestatusbulkresponse)]|true|none|An array containing the results of the operation.|
|startedAt|string(date-time)|true|none|The date and time when the operation started.|
|status|string|true|none|The current status of the operation, which can be PENDING, PROCESSING, CANCELED, or COMPLETE.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_LinkGenerationRequest">LinkGenerationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalinkgenerationrequest"></a>
<a id="schema_LinkGenerationRequest"></a>
<a id="tocSlinkgenerationrequest"></a>
<a id="tocslinkgenerationrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|The language in which the generated link should be presented, represented as a string.|
|subscriberIdString|string|true|none|A string representing the unique identifier of the subscriber. This property is required.|
|subscriptionId|integer(int64)|false|none|The unique identifier for the subscription, represented as an integer in int64 format.|

<h2 id="tocS_LinkGenerationResponse">LinkGenerationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalinkgenerationresponse"></a>
<a id="schema_LinkGenerationResponse"></a>
<a id="tocSlinkgenerationresponse"></a>
<a id="tocslinkgenerationresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managePreferencesUrl|string|true|none|The URL where the subscriber can manage their communication preferences.|
|subscriberIdString|string|true|none|A string representing the unique identifier of the subscriber.|
|unsubscribeAllUrl|string|true|none|A string containing the URL for unsubscribing the subscriber from all communications.|
|unsubscribeSingleUrl|string|false|none|A string containing the URL to unsubscribe the subscriber from a single communication.|

<h2 id="tocS_PartialPublicStatusRequest">PartialPublicStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartialpublicstatusrequest"></a>
<a id="schema_PartialPublicStatusRequest"></a>
<a id="tocSpartialpublicstatusrequest"></a>
<a id="tocspartialpublicstatusrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The type of communication channel, with 'EMAIL' as the only supported option.|
|legalBasis|string|false|none|The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.|
|legalBasisExplanation|string|false|none|An explanation for the legal basis used for communication.|
|statusState|string|true|none|The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.|
|subscriptionId|integer(int64)|true|none|The unique identifier of the subscription to be updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|EMAIL|
|legalBasis|CONSENT_WITH_NOTICE|
|legalBasis|LEGITIMATE_INTEREST_CLIENT|
|legalBasis|LEGITIMATE_INTEREST_OTHER|
|legalBasis|LEGITIMATE_INTEREST_PQL|
|legalBasis|NON_GDPR|
|legalBasis|PERFORMANCE_OF_CONTRACT|
|legalBasis|PROCESS_AND_STORE|
|statusState|NOT_SPECIFIED|
|statusState|SUBSCRIBED|
|statusState|UNSUBSCRIBED|

<h2 id="tocS_PublicBulkOptOutFromAllResponse">PublicBulkOptOutFromAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicbulkoptoutfromallresponse"></a>
<a id="schema_PublicBulkOptOutFromAllResponse"></a>
<a id="tocSpublicbulkoptoutfromallresponse"></a>
<a id="tocspublicbulkoptoutfromallresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|[[PublicStatus](#schemapublicstatus)]|false|none|An array of subscription status objects for the contact.|
|subscriberIdString|string|true|none|The email address of the contact.|

<h2 id="tocS_PublicStatus">PublicStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublicstatus"></a>
<a id="schema_PublicStatus"></a>
<a id="tocSpublicstatus"></a>
<a id="tocspublicstatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessUnitId|integer(int64)|false|none|The ID of the business unit associated with the subscription.|
|channel|string|true|none|The type of communication channel, with 'EMAIL' as the only supported option.|
|legalBasis|string|false|none|The legal basis for communication, with options including 'LEGITIMATE_INTEREST_PQL', 'LEGITIMATE_INTEREST_CLIENT', 'PERFORMANCE_OF_CONTRACT', 'CONSENT_WITH_NOTICE', 'NON_GDPR', 'PROCESS_AND_STORE', and 'LEGITIMATE_INTEREST_OTHER'.|
|legalBasisExplanation|string|false|none|An explanation for the legal basis used for communication.|
|setStatusSuccessReason|string|false|none|The reason for the successful change in subscription status, such as 'RESUBSCRIBE_OCCURRED' or 'NO_STATUS_CHANGE'.|
|source|string|true|none|The origin or method through which the subscription status was set.|
|status|string|true|none|The current subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.|
|subscriberIdString|string|true|none|The contact's email address.|
|subscriptionId|integer(int64)|true|none|The unique identifier of the subscription.|
|subscriptionName|string|false|none|The name of the subscription.|
|timestamp|string(date-time)|true|none|The date and time when the subscription status was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|EMAIL|
|legalBasis|CONSENT_WITH_NOTICE|
|legalBasis|LEGITIMATE_INTEREST_CLIENT|
|legalBasis|LEGITIMATE_INTEREST_OTHER|
|legalBasis|LEGITIMATE_INTEREST_PQL|
|legalBasis|NON_GDPR|
|legalBasis|PERFORMANCE_OF_CONTRACT|
|legalBasis|PROCESS_AND_STORE|
|setStatusSuccessReason|NO_STATUS_CHANGE|
|setStatusSuccessReason|REQUESTED_CHANGE_OCCURRED|
|setStatusSuccessReason|RESUBSCRIBE_OCCURRED|
|setStatusSuccessReason|UNSUBSCRIBE_FROM_ALL_OCCURRED|
|status|NOT_SPECIFIED|
|status|SUBSCRIBED|
|status|UNSUBSCRIBED|

<h2 id="tocS_PublicStatusBulkResponse">PublicStatusBulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicstatusbulkresponse"></a>
<a id="schema_PublicStatusBulkResponse"></a>
<a id="tocSpublicstatusbulkresponse"></a>
<a id="tocspublicstatusbulkresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|[[PublicStatus](#schemapublicstatus)]|true|none|An array of subscription status objects for the contact.|
|subscriberIdString|string|true|none|The email address of the contact.|

<h2 id="tocS_PublicStatusRequest">PublicStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicstatusrequest"></a>
<a id="schema_PublicStatusRequest"></a>
<a id="tocSpublicstatusrequest"></a>
<a id="tocspublicstatusrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|true|none|The type of communication channel. Currently, only `EMAIL` is supported.|
|legalBasis|string|false|none|The legal basis for communication.|
|legalBasisExplanation|string|false|none|The explanation for the legal basis.|
|statusState|string|true|none|The status of the contact's subscription.|
|subscriberIdString|string|true|none|The contact's email address.|
|subscriptionId|integer(int64)|true|none|The ID of the subscription to update.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|EMAIL|
|legalBasis|CONSENT_WITH_NOTICE|
|legalBasis|LEGITIMATE_INTEREST_CLIENT|
|legalBasis|LEGITIMATE_INTEREST_OTHER|
|legalBasis|LEGITIMATE_INTEREST_PQL|
|legalBasis|NON_GDPR|
|legalBasis|PERFORMANCE_OF_CONTRACT|
|legalBasis|PROCESS_AND_STORE|
|statusState|NOT_SPECIFIED|
|statusState|SUBSCRIBED|
|statusState|UNSUBSCRIBED|

<h2 id="tocS_PublicSubscriptionTranslation">PublicSubscriptionTranslation</h2>
<!-- backwards compatibility -->
<a id="schemapublicsubscriptiontranslation"></a>
<a id="schema_PublicSubscriptionTranslation"></a>
<a id="tocSpublicsubscriptiontranslation"></a>
<a id="tocspublicsubscriptiontranslation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|integer(int64)|true|none|The timestamp indicating when the subscription translation was created.|
|description|string|true|none|A text description of the subscription translation.|
|languageCode|string|true|none|The code representing the language of the subscription translation.|
|name|string|true|none|The name of the subscription translation.|
|subscriptionId|integer(int64)|true|none|The unique identifier for the subscription associated with the translation.|
|updatedAt|integer(int64)|true|none|The timestamp indicating when the subscription translation was last updated.|

<h2 id="tocS_PublicWideStatus">PublicWideStatus</h2>
<!-- backwards compatibility -->
<a id="schemapublicwidestatus"></a>
<a id="schema_PublicWideStatus"></a>
<a id="tocSpublicwidestatus"></a>
<a id="tocspublicwidestatus"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessUnitId|integer(int64)|false|none|The ID of the business unit associated with the status.|
|channel|string|true|none|The type of communication channel, with 'EMAIL' as the only supported option.|
|status|string|true|none|The subscription status of the contact, which can be 'SUBSCRIBED', 'UNSUBSCRIBED', or 'NOT_SPECIFIED'.|
|subscriberIdString|string|true|none|The email address of the contact.|
|timestamp|string(date-time)|true|none|The date and time when the status was recorded.|
|wideStatusType|string|true|none|The type of wide status, which can be 'PORTAL_WIDE' or 'BUSINESS_UNIT_WIDE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|EMAIL|
|status|NOT_SPECIFIED|
|status|SUBSCRIBED|
|status|UNSUBSCRIBED|
|wideStatusType|BUSINESS_UNIT_WIDE|
|wideStatusType|PORTAL_WIDE|

<h2 id="tocS_PublicWideStatusBulkResponse">PublicWideStatusBulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicwidestatusbulkresponse"></a>
<a id="schema_PublicWideStatusBulkResponse"></a>
<a id="tocSpublicwidestatusbulkresponse"></a>
<a id="tocspublicwidestatusbulkresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriberIdString|string|true|none|The contact's email address.|
|wideStatuses|[[PublicWideStatus](#schemapublicwidestatus)]|true|none|An array containing the wide status results for the operation.|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string that categorizes the type of error.|
|context|object|true|none|An object containing additional context about the error condition, with keys as context names and values as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string representing the unique identifier of the error.|
|links|object|true|none|An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific categorization of the error.|

<h2 id="tocS_SubscriptionDefinition">SubscriptionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondefinition"></a>
<a id="schema_SubscriptionDefinition"></a>
<a id="tocSsubscriptiondefinition"></a>
<a id="tocssubscriptiondefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessUnitId|integer(int64)|false|none|The ID of the business unit associated with the subscription.|
|communicationMethod|string|false|none|The method of communication for the subscription.|
|createdAt|string(date-time)|true|none|The date and time when the subscription was created.|
|description|string|true|none|A description of the subscription.|
|id|string|true|none|The unique identifier for the subscription.|
|isActive|boolean|true|none|Indicates whether the subscription is active.|
|isDefault|boolean|true|none|Indicates whether the subscription is the default option.|
|isInternal|boolean|true|none|Indicates whether the subscription is internal.|
|name|string|true|none|The name of the subscription.|
|purpose|string|false|none|The purpose of the subscription.|
|subscriptionTranslations|[[PublicSubscriptionTranslation](#schemapublicsubscriptiontranslation)]|false|none|A list of translations associated with the subscription.|
|updatedAt|string(date-time)|true|none|The date and time when the subscription was last updated.|
