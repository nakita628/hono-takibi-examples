<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<strong>GoDaddy Abuse API Terms of Use:</strong><p>GoDaddy’s Abuse API is provided to simplify and standardize the abuse reporting experience. To help us streamline the review of abuse reports, you acknowledge and agree that your use of GoDaddy’s Abuse API is subject to the following quality metrics and terms of use.</p><p>GoDaddy may, in its sole and absolute discretion, change or modify these terms, and such changes or modifications shall be effective immediately upon notice to you. Your use of GoDaddy’s Abuse API after such changes or modifications shall constitute your acceptance of these terms as last revised. If you do not agree to be bound by these terms as last revised, do not use (or continue to use) our Abuse API.</p><p>As an Abuse API user, you must only submit abuse reports via the API portal and cease all email submissions, including but not limited, to phishing@godaddy.com, netabuse@godaddy.com, malware@godaddy.com, or spam@godaddy.com, etc.  Any additional or duplicate submission outside of the API portal will be deprioritized for review. Submissions related to trademark, copyright or content issues may still be sent to trademarkclaims@godaddy.com, coyprightclaims@godaddy.com, and contentcomplaints@godaddy.com, respectively. Our [Front of Site](https://supportcenter.godaddy.com/AbuseReport) also describes other scenarios not covered by the API.</p><p>When you submit abuse reports via GoDaddy’s Abuse API, you must ensure that you accurately categorize the abuse type of each report to match our definitions in the API documentations provided to you. Any submission that fails to match our definitions or is miscategorized will be marked as a false positive. Examples include, but are not limited to, submissions of trademark complaints marked as phishing or malware, or submissions of copyright complaints marked as phishing or malware, etc.</p><p>If, at any time, the false positive rate of submissions exceeds 40% of your total submissions, as determined by GoDaddy, GoDaddy may in its sole discretion deprioritize any subsequent reports submitted by you and/or your organization.</p><p>You acknowledge and agree that submitting every URL for a single domain is not necessary and will not expedite the review process. If your submissions exceed five (5) URLs for a single domain, your report will be marked as a duplicate submission taking into account that the final outcome of such submissions would yield the same result as the original report. GoDaddy may in its sole discretion deprioritize reports submitted by you and/or your organization in the event more than 20% of your submissions are classified as duplicate submissions.</p><p>You further acknowledge and agree that our Customer Support lines are not intended to address abuse reporting matters or your use of GoDaddy’s Abuse API. Contacting Customer Support will not expedite the review process and may result in abuse reports being deprioritized, to be determined in our sole discretion.</p><p>Should you have any questions about GoDaddy’s Abuse API or any of the terms and conditions set forth above, please contact abuseapisupport@godaddy.com.</p>

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## List all abuse tickets ids that match user provided filters

<a id="opIdgetTickets"></a>

> Code samples

```bash
curl https://example.com/v1/abuse/tickets
```

`GET /v1/abuse/tickets`

<h3 id="list-all-abuse-tickets-ids-that-match-user-provided-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|The type of abuse.|
|closed|query|boolean|false|Is this abuse ticket closed?|
|sourceDomainOrIp|query|string(host-name-or-ip-address)|false|The domain name or ip address the abuse originated from|
|target|query|string|false|The brand/company the abuse is targeting. ie: brand name/bank name|
|createdStart|query|string(iso-datetime)|false|The earliest abuse ticket creation date to pull abuse tickets for|
|createdEnd|query|string(iso-datetime)|false|The latest abuse ticket creation date to pull abuse tickets for|
|limit|query|integer(integer-positive)|false|Number of abuse ticket numbers to return.|
|offset|query|integer(integer-positive)|false|The earliest result set record number to pull abuse tickets for|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|A_RECORD|
|type|CHILD_ABUSE|
|type|CONTENT|
|type|FRAUD_WIRE|
|type|IP_BLOCK|
|type|MALWARE|
|type|NETWORK_ABUSE|
|type|PHISHING|
|type|SPAM|

<h3 id="list-all-abuse-tickets-ids-that-match-user-provided-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AbuseTicketList](#schemaabuseticketlist)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new abuse ticket

<a id="opIdcreateTicket"></a>

> Code samples

```bash
curl https://example.com/v1/abuse/tickets \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "info": "string",
    "infoUrl": "http://example.com",
    "intentional": false,
    "proxy": "string",
    "source": "string",
    "target": "string",
    "type": "A_RECORD"
  }'
```

`POST /v1/abuse/tickets`

> Body parameter

```json
{
  "info": "string",
  "infoUrl": "http://example.com",
  "intentional": false,
  "proxy": "string",
  "source": "string",
  "target": "string",
  "type": "A_RECORD"
}
```

<h3 id="create-a-new-abuse-ticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbuseTicketCreate](#schemaabuseticketcreate)|true|The endpoint which allows the Reporter to create a new abuse ticket|
|» info|body|string|false|Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM|
|» infoUrl|body|string(url)|false|Reporter URL if housing additional information that may assist the abuse investigator|
|» intentional|body|boolean|false|Do you believe this is intentional abuse by the domain holder?|
|» proxy|body|string|false|The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from|
|» source|body|string|false|The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php|
|» target|body|string|false|The brand/company the abuse is targeting. ie: brand name/bank name|
|» type|body|string|false|The type of abuse being reported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|A_RECORD|
|» type|CHILD_ABUSE|
|» type|CONTENT|
|» type|FRAUD_WIRE|
|» type|IP_BLOCK|
|» type|MALWARE|
|» type|NETWORK_ABUSE|
|» type|PHISHING|
|» type|SPAM|

<h3 id="create-a-new-abuse-ticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|
|201|Created|Success|[AbuseTicketId](#schemaabuseticketid)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the abuse ticket data for a given ticket id

<a id="opIdgetTicketInfo"></a>

> Code samples

```bash
curl https://example.com/v1/abuse/tickets/string
```

`GET /v1/abuse/tickets/{ticketId}`

<h3 id="return-the-abuse-ticket-data-for-a-given-ticket-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticketId|path|string|true|A unique abuse ticket identifier|

<h3 id="return-the-abuse-ticket-data-for-a-given-ticket-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AbuseTicket](#schemaabuseticket)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Invalid ticket id provided|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AbuseTicket">AbuseTicket</h2>
<!-- backwards compatibility -->
<a id="schemaabuseticket"></a>
<a id="schema_AbuseTicket"></a>
<a id="tocSabuseticket"></a>
<a id="tocsabuseticket"></a>

```json
{
  "closed": false,
  "closedAt": "string",
  "createdAt": "string",
  "domainIp": "string",
  "reporter": "string",
  "source": "string",
  "target": "string",
  "ticketId": "string",
  "type": "A_RECORD"
}
```

The associated fields returned, given a unique abuse ticket id

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|boolean|true|none|Is this abuse ticket closed?|
|closedAt|string(iso-datetime)|true|none|The date the abuse ticket was closed|
|createdAt|string(iso-datetime)|true|none|The date the abuse ticket was created|
|domainIp|string|true|none|The domain or IP the suspected abuse was reported against|
|reporter|string|true|none|The shopper id of the person who reported the suspected abuse|
|source|string|true|none|The single URL or IP the suspected abuse was reported against|
|target|string|true|none|The company the suspected abuse is targeting|
|ticketId|string|true|none|Abuse ticket ID|
|type|string|true|none|The type of abuse being reported|

#### Enumerated Values

|Property|Value|
|---|---|
|type|A_RECORD|
|type|CHILD_ABUSE|
|type|CONTENT|
|type|FRAUD_WIRE|
|type|IP_BLOCK|
|type|MALWARE|
|type|NETWORK_ABUSE|
|type|PHISHING|
|type|SPAM|

<h2 id="tocS_AbuseTicketCreate">AbuseTicketCreate</h2>
<!-- backwards compatibility -->
<a id="schemaabuseticketcreate"></a>
<a id="schema_AbuseTicketCreate"></a>
<a id="tocSabuseticketcreate"></a>
<a id="tocsabuseticketcreate"></a>

```json
{
  "info": "string",
  "infoUrl": "http://example.com",
  "intentional": false,
  "proxy": "string",
  "source": "string",
  "target": "string",
  "type": "A_RECORD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|string|false|none|Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM|
|infoUrl|string(url)|false|none|Reporter URL if housing additional information that may assist the abuse investigator|
|intentional|boolean|false|none|Do you believe this is intentional abuse by the domain holder?|
|proxy|string|false|none|The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from|
|source|string|false|none|The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php|
|target|string|false|none|The brand/company the abuse is targeting. ie: brand name/bank name|
|type|string|false|none|The type of abuse being reported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|A_RECORD|
|type|CHILD_ABUSE|
|type|CONTENT|
|type|FRAUD_WIRE|
|type|IP_BLOCK|
|type|MALWARE|
|type|NETWORK_ABUSE|
|type|PHISHING|
|type|SPAM|

<h2 id="tocS_AbuseTicketId">AbuseTicketId</h2>
<!-- backwards compatibility -->
<a id="schemaabuseticketid"></a>
<a id="schema_AbuseTicketId"></a>
<a id="tocSabuseticketid"></a>
<a id="tocsabuseticketid"></a>

```json
{
  "u_number": "string"
}
```

The primary key of a newly created abuse ticket

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|u_number|string|false|none|Abuse ticket ID|

<h2 id="tocS_AbuseTicketList">AbuseTicketList</h2>
<!-- backwards compatibility -->
<a id="schemaabuseticketlist"></a>
<a id="schema_AbuseTicketList"></a>
<a id="tocSabuseticketlist"></a>
<a id="tocsabuseticketlist"></a>

```json
{
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  },
  "ticketIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|ticketIds|[string]|true|none|A list of abuse ticket ids originated by this reporter.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|stack|[string]|false|none|Stack trace indicating where the error occurred.<br/><br>NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.<br>However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems.|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|1) JSONPath referring to the field within the data containing an error<br/>or<br/>2) JSONPath referring to an object containing an error|
|pathRelated|string(json-path)|false|none|JSONPath referring to the field on the object referenced by `path` containing an error|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "previous": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|Optional link to first list of results|
|last|string|false|none|Optional link to last list of results|
|next|string|false|none|Optional link to next list of results|
|previous|string|false|none|Optional link to previous list of results|
|total|integer|false|none|Number of records available|
