<h1 id="gmail-postmaster-tools-api">Gmail Postmaster Tools API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.

Base URLs:

* <a href="https://gmailpostmastertools.googleapis.com/">https://gmailpostmastertools.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/gmail/postmaster">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/postmaster.readonly|See email traffic metrics for the domains you have registered in Gmail Postmaster Tools|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/postmaster.readonly|See email traffic metrics for the domains you have registered in Gmail Postmaster Tools|

<h1 id="gmail-postmaster-tools-api-domains">domains</h1>

## gmailpostmastertools.domains.list

<a id="opIdgmailpostmastertools.domains.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/domains`

Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.

<h3 id="gmailpostmastertoolsdomainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.|
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
  "domains": [
    {
      "createTime": "string",
      "name": "string",
      "permission": "PERMISSION_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="gmailpostmastertoolsdomainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDomainsResponse](#schemalistdomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/postmaster.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/postmaster.readonly )
</aside>

## gmailpostmastertools.domains.trafficStats.get

<a id="opIdgmailpostmastertools.domains.trafficStats.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

<h3 id="gmailpostmastertoolsdomainstrafficstatsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.|
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
  "deliveryErrors": [
    {
      "errorClass": "DELIVERY_ERROR_CLASS_UNSPECIFIED",
      "errorRatio": 0,
      "errorType": "DELIVERY_ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "dkimSuccessRatio": 0,
  "dmarcSuccessRatio": 0,
  "domainReputation": "REPUTATION_CATEGORY_UNSPECIFIED",
  "inboundEncryptionRatio": 0,
  "ipReputations": [
    {
      "ipCount": "string",
      "numIps": "string",
      "reputation": "REPUTATION_CATEGORY_UNSPECIFIED",
      "sampleIps": [
        "string"
      ]
    }
  ],
  "name": "string",
  "outboundEncryptionRatio": 0,
  "spammyFeedbackLoops": [
    {
      "id": "string",
      "spamRatio": 0
    }
  ],
  "spfSuccessRatio": 0,
  "userReportedSpamRatio": 0
}
```

<h3 id="gmailpostmastertoolsdomainstrafficstatsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TrafficStats](#schematrafficstats)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/postmaster.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/postmaster.readonly )
</aside>

## gmailpostmastertools.domains.trafficStats.list

<a id="opIdgmailpostmastertools.domains.trafficStats.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/trafficStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/trafficStats`

List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

<h3 id="gmailpostmastertoolsdomainstrafficstatslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.|
|endDate.day|query|integer|false|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|endDate.month|query|integer|false|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|endDate.year|query|integer|false|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
|pageSize|query|integer|false|Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.|
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
  "nextPageToken": "string",
  "trafficStats": [
    {
      "deliveryErrors": [
        {
          "errorClass": "DELIVERY_ERROR_CLASS_UNSPECIFIED",
          "errorRatio": 0,
          "errorType": "DELIVERY_ERROR_TYPE_UNSPECIFIED"
        }
      ],
      "dkimSuccessRatio": 0,
      "dmarcSuccessRatio": 0,
      "domainReputation": "REPUTATION_CATEGORY_UNSPECIFIED",
      "inboundEncryptionRatio": 0,
      "ipReputations": [
        {
          "ipCount": "string",
          "numIps": "string",
          "reputation": "REPUTATION_CATEGORY_UNSPECIFIED",
          "sampleIps": [
            "string"
          ]
        }
      ],
      "name": "string",
      "outboundEncryptionRatio": 0,
      "spammyFeedbackLoops": [
        {
          "id": "string",
          "spamRatio": 0
        }
      ],
      "spfSuccessRatio": 0,
      "userReportedSpamRatio": 0
    }
  ]
}
```

<h3 id="gmailpostmastertoolsdomainstrafficstatslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTrafficStatsResponse](#schemalisttrafficstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/postmaster.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/postmaster.readonly )
</aside>

# Schemas

<h2 id="tocS_DeliveryError">DeliveryError</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryerror"></a>
<a id="schema_DeliveryError"></a>
<a id="tocSdeliveryerror"></a>
<a id="tocsdeliveryerror"></a>

```json
{
  "errorClass": "DELIVERY_ERROR_CLASS_UNSPECIFIED",
  "errorRatio": 0,
  "errorType": "DELIVERY_ERROR_TYPE_UNSPECIFIED"
}
```

Metric on a particular delivery error type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorClass|string|false|none|The class of delivery error.|
|errorRatio|number(double)|false|none|The ratio of messages where the error occurred vs all authenticated traffic.|
|errorType|string|false|none|The type of delivery error.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorClass|DELIVERY_ERROR_CLASS_UNSPECIFIED|
|errorClass|PERMANENT_ERROR|
|errorClass|TEMPORARY_ERROR|
|errorType|DELIVERY_ERROR_TYPE_UNSPECIFIED|
|errorType|RATE_LIMIT_EXCEEDED|
|errorType|SUSPECTED_SPAM|
|errorType|CONTENT_SPAMMY|
|errorType|BAD_ATTACHMENT|
|errorType|BAD_DMARC_POLICY|
|errorType|LOW_IP_REPUTATION|
|errorType|LOW_DOMAIN_REPUTATION|
|errorType|IP_IN_RBL|
|errorType|DOMAIN_IN_RBL|
|errorType|BAD_PTR_RECORD|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "permission": "PERMISSION_UNSPECIFIED"
}
```

A registered domain resource in the Postmaster API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when the user registered this domain. Assigned by the server.|
|name|string|false|none|The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).|
|permission|string|false|none|User’s permission for this domain. Assigned by the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|PERMISSION_UNSPECIFIED|
|permission|OWNER|
|permission|READER|
|permission|NONE|

<h2 id="tocS_FeedbackLoop">FeedbackLoop</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackloop"></a>
<a id="schema_FeedbackLoop"></a>
<a id="tocSfeedbackloop"></a>
<a id="tocsfeedbackloop"></a>

```json
{
  "id": "string",
  "spamRatio": 0
}
```

[Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Feedback loop identifier that uniquely identifies individual campaigns.|
|spamRatio|number(double)|false|none|The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier.|

<h2 id="tocS_IpReputation">IpReputation</h2>
<!-- backwards compatibility -->
<a id="schemaipreputation"></a>
<a id="schema_IpReputation"></a>
<a id="tocSipreputation"></a>
<a id="tocsipreputation"></a>

```json
{
  "ipCount": "string",
  "numIps": "string",
  "reputation": "REPUTATION_CATEGORY_UNSPECIFIED",
  "sampleIps": [
    "string"
  ]
}
```

IP Reputation information for a set of IPs in a specific reputation category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipCount|string(int64)|false|none|Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).|
|numIps|string(int64)|false|none|Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). Deprecated to be complied with ApiLinter for Quantities. Use ip_count instead.|
|reputation|string|false|none|The reputation category this IP reputation represents.|
|sampleIps|[string]|false|none|A sample of IPs in this reputation category.|

#### Enumerated Values

|Property|Value|
|---|---|
|reputation|REPUTATION_CATEGORY_UNSPECIFIED|
|reputation|HIGH|
|reputation|MEDIUM|
|reputation|LOW|
|reputation|BAD|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "domains": [
    {
      "createTime": "string",
      "name": "string",
      "permission": "PERMISSION_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListDomains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[Domain](#schemadomain)]|false|none|The list of domains.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListTrafficStatsResponse">ListTrafficStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficstatsresponse"></a>
<a id="schema_ListTrafficStatsResponse"></a>
<a id="tocSlisttrafficstatsresponse"></a>
<a id="tocslisttrafficstatsresponse"></a>

```json
{
  "nextPageToken": "string",
  "trafficStats": [
    {
      "deliveryErrors": [
        {
          "errorClass": "DELIVERY_ERROR_CLASS_UNSPECIFIED",
          "errorRatio": 0,
          "errorType": "DELIVERY_ERROR_TYPE_UNSPECIFIED"
        }
      ],
      "dkimSuccessRatio": 0,
      "dmarcSuccessRatio": 0,
      "domainReputation": "REPUTATION_CATEGORY_UNSPECIFIED",
      "inboundEncryptionRatio": 0,
      "ipReputations": [
        {
          "ipCount": "string",
          "numIps": "string",
          "reputation": "REPUTATION_CATEGORY_UNSPECIFIED",
          "sampleIps": [
            "string"
          ]
        }
      ],
      "name": "string",
      "outboundEncryptionRatio": 0,
      "spammyFeedbackLoops": [
        {
          "id": "string",
          "spamRatio": 0
        }
      ],
      "spfSuccessRatio": 0,
      "userReportedSpamRatio": 0
    }
  ]
}
```

Response message for ListTrafficStats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|trafficStats|[[TrafficStats](#schematrafficstats)]|false|none|The list of TrafficStats.|

<h2 id="tocS_TrafficStats">TrafficStats</h2>
<!-- backwards compatibility -->
<a id="schematrafficstats"></a>
<a id="schema_TrafficStats"></a>
<a id="tocStrafficstats"></a>
<a id="tocstrafficstats"></a>

```json
{
  "deliveryErrors": [
    {
      "errorClass": "DELIVERY_ERROR_CLASS_UNSPECIFIED",
      "errorRatio": 0,
      "errorType": "DELIVERY_ERROR_TYPE_UNSPECIFIED"
    }
  ],
  "dkimSuccessRatio": 0,
  "dmarcSuccessRatio": 0,
  "domainReputation": "REPUTATION_CATEGORY_UNSPECIFIED",
  "inboundEncryptionRatio": 0,
  "ipReputations": [
    {
      "ipCount": "string",
      "numIps": "string",
      "reputation": "REPUTATION_CATEGORY_UNSPECIFIED",
      "sampleIps": [
        "string"
      ]
    }
  ],
  "name": "string",
  "outboundEncryptionRatio": 0,
  "spammyFeedbackLoops": [
    {
      "id": "string",
      "spamRatio": 0
    }
  ],
  "spfSuccessRatio": 0,
  "userReportedSpamRatio": 0
}
```

Email traffic statistics pertaining to a specific date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryErrors|[[DeliveryError](#schemadeliveryerror)]|false|none|Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).|
|dkimSuccessRatio|number(double)|false|none|The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded.|
|dmarcSuccessRatio|number(double)|false|none|The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).|
|domainReputation|string|false|none|Reputation of the domain.|
|inboundEncryptionRatio|number(double)|false|none|The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).|
|ipReputations|[[IpReputation](#schemaipreputation)]|false|none|Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED.|
|name|string|false|none|The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807|
|outboundEncryptionRatio|number(double)|false|none|The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS).|
|spammyFeedbackLoops|[[FeedbackLoop](#schemafeedbackloop)]|false|none|Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/).|
|spfSuccessRatio|number(double)|false|none|The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded.|
|userReportedSpamRatio|number(double)|false|none|The ratio of user-report spam vs. email that was sent to the inbox. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/).|

#### Enumerated Values

|Property|Value|
|---|---|
|domainReputation|REPUTATION_CATEGORY_UNSPECIFIED|
|domainReputation|HIGH|
|domainReputation|MEDIUM|
|domainReputation|LOW|
|domainReputation|BAD|
