<h1 id="local-services-api">Local Services API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://localservices.googleapis.com/">https://localservices.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://ads.google.com/local-services-ads/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adwords|See, edit, create, and delete your Google Ads accounts and data.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adwords|See, edit, create, and delete your Google Ads accounts and data.|

<h1 id="local-services-api-accountreports">accountReports</h1>

## localservices.accountReports.search

<a id="opIdlocalservices.accountReports.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/accountReports:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/accountReports:search`

Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

<h3 id="localservicesaccountreportssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|endDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|endDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|pageSize|query|integer|false|The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional.|
|query|query|string|false|A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: \| Query \| Description \| \|-------------------------\|-----------------------------------------------\| \| manager_customer_id:123 \| Get Account Report for Manager with id 123. \| Required.|
|startDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|startDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|startDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accountReports": [
    {
      "accountId": "string",
      "aggregatorInfo": {
        "aggregatorProviderId": "string"
      },
      "averageFiveStarRating": 0,
      "averageWeeklyBudget": 0,
      "businessName": "string",
      "currencyCode": "string",
      "currentPeriodChargedLeads": "string",
      "currentPeriodConnectedPhoneCalls": "string",
      "currentPeriodPhoneCalls": "string",
      "currentPeriodTotalCost": 0,
      "impressionsLastTwoDays": "string",
      "phoneLeadResponsiveness": 0,
      "previousPeriodChargedLeads": "string",
      "previousPeriodConnectedPhoneCalls": "string",
      "previousPeriodPhoneCalls": "string",
      "previousPeriodTotalCost": 0,
      "totalReview": 0
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="localservicesaccountreportssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse](#schemagoogleadshomeserviceslocalservicesv1searchaccountreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adwords ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adwords )
</aside>

<h1 id="local-services-api-detailedleadreports">detailedLeadReports</h1>

## localservices.detailedLeadReports.search

<a id="opIdlocalservices.detailedLeadReports.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/detailedLeadReports:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/detailedLeadReports:search`

Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

<h3 id="localservicesdetailedleadreportssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|endDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|endDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|pageSize|query|integer|false|The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.|
|pageToken|query|string|false|The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional.|
|query|query|string|false|A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: \| Query \| Description \| \|-------------------------\|-----------------------------------------------\| \| manager_customer_id:123 \| Get Detailed Lead Report for Manager with id \| \| \| 123. \| Required.|
|startDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|startDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|startDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "detailedLeadReports": [
    {
      "accountId": "string",
      "aggregatorInfo": {
        "aggregatorProviderId": "string"
      },
      "bookingLead": {
        "bookingAppointmentTimestamp": "string",
        "consumerEmail": "string",
        "consumerPhoneNumber": "string",
        "customerName": "string",
        "jobType": "string"
      },
      "businessName": "string",
      "chargeStatus": "CHARGE_STATUS_UNSPECIFIED",
      "currencyCode": "string",
      "disputeStatus": "string",
      "geo": "string",
      "leadCategory": "string",
      "leadCreationTimestamp": "string",
      "leadId": "string",
      "leadPrice": 0,
      "leadType": "LEAD_TYPE_UNSPECIFIED",
      "messageLead": {
        "consumerPhoneNumber": "string",
        "customerName": "string",
        "jobType": "string",
        "postalCode": "string"
      },
      "phoneLead": {
        "chargedCallTimestamp": "string",
        "chargedConnectedCallDurationSeconds": "string",
        "consumerPhoneNumber": "string"
      },
      "timezone": {
        "id": "string",
        "version": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="localservicesdetailedleadreportssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse](#schemagoogleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adwords ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adwords )
</aside>

# Schemas

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1AccountReport">GoogleAdsHomeservicesLocalservicesV1AccountReport</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1accountreport"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1AccountReport"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1accountreport"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1accountreport"></a>

```json
{
  "accountId": "string",
  "aggregatorInfo": {
    "aggregatorProviderId": "string"
  },
  "averageFiveStarRating": 0,
  "averageWeeklyBudget": 0,
  "businessName": "string",
  "currencyCode": "string",
  "currentPeriodChargedLeads": "string",
  "currentPeriodConnectedPhoneCalls": "string",
  "currentPeriodPhoneCalls": "string",
  "currentPeriodTotalCost": 0,
  "impressionsLastTwoDays": "string",
  "phoneLeadResponsiveness": 0,
  "previousPeriodChargedLeads": "string",
  "previousPeriodConnectedPhoneCalls": "string",
  "previousPeriodPhoneCalls": "string",
  "previousPeriodTotalCost": 0,
  "totalReview": 0
}
```

An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(int64)|false|none|Unique identifier of the GLS account.|
|aggregatorInfo|[GoogleAdsHomeservicesLocalservicesV1AggregatorInfo](#schemagoogleadshomeserviceslocalservicesv1aggregatorinfo)|false|none|Aggregator specific information related to the account.|
|averageFiveStarRating|number(double)|false|none|Average review rating score from 1-5 stars.|
|averageWeeklyBudget|number(double)|false|none|Average weekly budget in the currency code of the account.|
|businessName|string|false|none|Business name of the account.|
|currencyCode|string|false|none|Currency code of the account.|
|currentPeriodChargedLeads|string(int64)|false|none|Number of charged leads the account received in current specified period.|
|currentPeriodConnectedPhoneCalls|string(int64)|false|none|Number of connected phone calls (duration over 30s) in current specified period.|
|currentPeriodPhoneCalls|string(int64)|false|none|Number of phone calls in current specified period, including both connected and unconnected calls.|
|currentPeriodTotalCost|number(double)|false|none|Total cost of the account in current specified period in the account's specified currency.|
|impressionsLastTwoDays|string(int64)|false|none|Number of impressions that customers have had in the past 2 days.|
|phoneLeadResponsiveness|number(double)|false|none|Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received.|
|previousPeriodChargedLeads|string(int64)|false|none|Number of charged leads the account received in previous specified period.|
|previousPeriodConnectedPhoneCalls|string(int64)|false|none|Number of connected phone calls (duration over 30s) in previous specified period.|
|previousPeriodPhoneCalls|string(int64)|false|none|Number of phone calls in previous specified period, including both connected and unconnected calls.|
|previousPeriodTotalCost|number(double)|false|none|Total cost of the account in previous specified period in the account's specified currency.|
|totalReview|integer(int32)|false|none|Total number of reviews the account has up to current date.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1AggregatorInfo">GoogleAdsHomeservicesLocalservicesV1AggregatorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1aggregatorinfo"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1AggregatorInfo"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1aggregatorinfo"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1aggregatorinfo"></a>

```json
{
  "aggregatorProviderId": "string"
}
```

Conatiner for aggregator specific information if lead is for an aggregator GLS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregatorProviderId|string|false|none|Provider id (listed in aggregator system) which maps to a account id in GLS system.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1BookingLead">GoogleAdsHomeservicesLocalservicesV1BookingLead</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1bookinglead"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1BookingLead"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1bookinglead"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1bookinglead"></a>

```json
{
  "bookingAppointmentTimestamp": "string",
  "consumerEmail": "string",
  "consumerPhoneNumber": "string",
  "customerName": "string",
  "jobType": "string"
}
```

Container for booking lead specific information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookingAppointmentTimestamp|string(google-datetime)|false|none|Timestamp of when service is provided by advertiser.|
|consumerEmail|string|false|none|Consumer email associated with the booking lead.|
|consumerPhoneNumber|string|false|none|Consumer phone number associated with the booking lead.|
|customerName|string|false|none|Name of the customer who created the lead.|
|jobType|string|false|none|The job type of the specified lead.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport">GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1detailedleadreport"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1detailedleadreport"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1detailedleadreport"></a>

```json
{
  "accountId": "string",
  "aggregatorInfo": {
    "aggregatorProviderId": "string"
  },
  "bookingLead": {
    "bookingAppointmentTimestamp": "string",
    "consumerEmail": "string",
    "consumerPhoneNumber": "string",
    "customerName": "string",
    "jobType": "string"
  },
  "businessName": "string",
  "chargeStatus": "CHARGE_STATUS_UNSPECIFIED",
  "currencyCode": "string",
  "disputeStatus": "string",
  "geo": "string",
  "leadCategory": "string",
  "leadCreationTimestamp": "string",
  "leadId": "string",
  "leadPrice": 0,
  "leadType": "LEAD_TYPE_UNSPECIFIED",
  "messageLead": {
    "consumerPhoneNumber": "string",
    "customerName": "string",
    "jobType": "string",
    "postalCode": "string"
  },
  "phoneLead": {
    "chargedCallTimestamp": "string",
    "chargedConnectedCallDurationSeconds": "string",
    "consumerPhoneNumber": "string"
  },
  "timezone": {
    "id": "string",
    "version": "string"
  }
}
```

A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(int64)|false|none|Identifies account that received the lead.|
|aggregatorInfo|[GoogleAdsHomeservicesLocalservicesV1AggregatorInfo](#schemagoogleadshomeserviceslocalservicesv1aggregatorinfo)|false|none|Aggregator specific information related to the lead.|
|bookingLead|[GoogleAdsHomeservicesLocalservicesV1BookingLead](#schemagoogleadshomeserviceslocalservicesv1bookinglead)|false|none|More information associated to only booking leads.|
|businessName|string|false|none|Business name associated to the account.|
|chargeStatus|string|false|none|Whether the lead has been charged.|
|currencyCode|string|false|none|Currency code.|
|disputeStatus|string|false|none|Dispute status related to the lead.|
|geo|string|false|none|Location of the associated account's home city.|
|leadCategory|string|false|none|Lead category (e.g. hvac, plumber)|
|leadCreationTimestamp|string(google-datetime)|false|none|Timestamp of when the lead was created.|
|leadId|string(int64)|false|none|Unique identifier of a Detailed Lead Report.|
|leadPrice|number(double)|false|none|Price of the lead (available only after it has been charged).|
|leadType|string|false|none|Lead type.|
|messageLead|[GoogleAdsHomeservicesLocalservicesV1MessageLead](#schemagoogleadshomeserviceslocalservicesv1messagelead)|false|none|More information associated to only message leads.|
|phoneLead|[GoogleAdsHomeservicesLocalservicesV1PhoneLead](#schemagoogleadshomeserviceslocalservicesv1phonelead)|false|none|More information associated to only phone leads.|
|timezone|[GoogleTypeTimeZone](#schemagoogletypetimezone)|false|none|Timezone of the particular provider associated to a lead.|

#### Enumerated Values

|Property|Value|
|---|---|
|chargeStatus|CHARGE_STATUS_UNSPECIFIED|
|chargeStatus|CHARGED|
|chargeStatus|NOT_CHARGED|
|leadType|LEAD_TYPE_UNSPECIFIED|
|leadType|MESSAGE|
|leadType|PHONE_CALL|
|leadType|BOOKING|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1MessageLead">GoogleAdsHomeservicesLocalservicesV1MessageLead</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1messagelead"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1MessageLead"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1messagelead"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1messagelead"></a>

```json
{
  "consumerPhoneNumber": "string",
  "customerName": "string",
  "jobType": "string",
  "postalCode": "string"
}
```

Container for message lead specific information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerPhoneNumber|string|false|none|Consumer phone number associated with the message lead.|
|customerName|string|false|none|Name of the customer who created the lead.|
|jobType|string|false|none|The job type of the specified lead.|
|postalCode|string|false|none|The postal code of the customer who created the lead.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1PhoneLead">GoogleAdsHomeservicesLocalservicesV1PhoneLead</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1phonelead"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1PhoneLead"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1phonelead"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1phonelead"></a>

```json
{
  "chargedCallTimestamp": "string",
  "chargedConnectedCallDurationSeconds": "string",
  "consumerPhoneNumber": "string"
}
```

Container for phone lead specific information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chargedCallTimestamp|string(google-datetime)|false|none|Timestamp of the phone call which resulted in a charged phone lead.|
|chargedConnectedCallDurationSeconds|string(google-duration)|false|none|Duration of the charged phone call in seconds.|
|consumerPhoneNumber|string|false|none|Consumer phone number associated with the phone lead.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse">GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1searchaccountreportsresponse"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1searchaccountreportsresponse"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1searchaccountreportsresponse"></a>

```json
{
  "accountReports": [
    {
      "accountId": "string",
      "aggregatorInfo": {
        "aggregatorProviderId": "string"
      },
      "averageFiveStarRating": 0,
      "averageWeeklyBudget": 0,
      "businessName": "string",
      "currencyCode": "string",
      "currentPeriodChargedLeads": "string",
      "currentPeriodConnectedPhoneCalls": "string",
      "currentPeriodPhoneCalls": "string",
      "currentPeriodTotalCost": 0,
      "impressionsLastTwoDays": "string",
      "phoneLeadResponsiveness": 0,
      "previousPeriodChargedLeads": "string",
      "previousPeriodConnectedPhoneCalls": "string",
      "previousPeriodPhoneCalls": "string",
      "previousPeriodTotalCost": 0,
      "totalReview": 0
    }
  ],
  "nextPageToken": "string"
}
```

A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountReports|[[GoogleAdsHomeservicesLocalservicesV1AccountReport](#schemagoogleadshomeserviceslocalservicesv1accountreport)]|false|none|List of account reports which maps 1:1 to a particular linked GLS account.|
|nextPageToken|string|false|none|Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.|

<h2 id="tocS_GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse">GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse"></a>
<a id="schema_GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse"></a>
<a id="tocSgoogleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse"></a>
<a id="tocsgoogleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse"></a>

```json
{
  "detailedLeadReports": [
    {
      "accountId": "string",
      "aggregatorInfo": {
        "aggregatorProviderId": "string"
      },
      "bookingLead": {
        "bookingAppointmentTimestamp": "string",
        "consumerEmail": "string",
        "consumerPhoneNumber": "string",
        "customerName": "string",
        "jobType": "string"
      },
      "businessName": "string",
      "chargeStatus": "CHARGE_STATUS_UNSPECIFIED",
      "currencyCode": "string",
      "disputeStatus": "string",
      "geo": "string",
      "leadCategory": "string",
      "leadCreationTimestamp": "string",
      "leadId": "string",
      "leadPrice": 0,
      "leadType": "LEAD_TYPE_UNSPECIFIED",
      "messageLead": {
        "consumerPhoneNumber": "string",
        "customerName": "string",
        "jobType": "string",
        "postalCode": "string"
      },
      "phoneLead": {
        "chargedCallTimestamp": "string",
        "chargedConnectedCallDurationSeconds": "string",
        "consumerPhoneNumber": "string"
      },
      "timezone": {
        "id": "string",
        "version": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailedLeadReports|[[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport](#schemagoogleadshomeserviceslocalservicesv1detailedleadreport)]|false|none|List of detailed lead reports uniquely identified by external lead id.|
|nextPageToken|string|false|none|Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.|

<h2 id="tocS_GoogleTypeTimeZone">GoogleTypeTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypetimezone"></a>
<a id="schema_GoogleTypeTimeZone"></a>
<a id="tocSgoogletypetimezone"></a>
<a id="tocsgoogletypetimezone"></a>

```json
{
  "id": "string",
  "version": "string"
}
```

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|IANA Time Zone Database time zone, e.g. "America/New_York".|
|version|string|false|none|Optional. IANA Time Zone Database version number, e.g. "2019a".|
