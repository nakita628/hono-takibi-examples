<h1 id="transactional-single-send">Transactional Single Send v2026-09</h1>

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
|transactional-email||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="transactional-single-send-send-transactional-email">Send transactional email</h1>

## Send a single send transactional email asynchronously.

<a id="opIdpost-/marketing/transactional/2026-09/single-email/send_sendEmail"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/transactional/2026-09/single-email/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/transactional/2026-09/single-email/send`

Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.

> Body parameter

```json
null
```

<h3 id="send-a-single-send-transactional-email-asynchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicSingleSendRequestEgg](#schemapublicsinglesendrequestegg)|true|none|
|» contactProperties|body|object|true|The contactProperties field is a map of contact property values. Each contact property value contains a name and value property. Each property will get set on the contact record and will be visible in the template under {{ contact.NAME }}. Use these properties when you want to set a contact property while you’re sending the email. For example, when sending a reciept you may want to set a last_paid_date property, as the sending of the receipt will have information about the last payment.|
|» » **additionalProperties**|body|string|false|none|
|» customProperties|body|object|true|The customProperties field is a map of property values. Each property value contains a name and value property. Each property will be visible in the template under {{ custom.NAME }}.<br>Note: Custom properties do not currently support arrays. To provide a listing in an email, one workaround is to build an HTML list (either with tables or ul) and specify it as a custom property.|
|» » **additionalProperties**|body|object|false|none|
|» emailId|body|integer(int64)|true|The content ID for the transactional email, which can be found in email tool UI.|
|» message|body|[PublicSingleSendEmail](#schemapublicsinglesendemail)|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="send-a-single-send-transactional-email-asynchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EmailSendStatusView](#schemaemailsendstatusview)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

<h1 id="transactional-single-send-smtp-tokens">SMTP Tokens</h1>

## Query SMTP API tokens by campaign name or an emailCampaignId.

<a id="opIdget-/marketing/transactional/2026-09/smtp-tokens_getTokensPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/transactional/2026-09/smtp-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/transactional/2026-09/smtp-tokens`

Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.

<h3 id="query-smtp-api-tokens-by-campaign-name-or-an-emailcampaignid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|campaignName|query|string|false|Filter the results by the name of the campaign. This is a string parameter.|
|emailCampaignId|query|string|false|Filter the results by the unique identifier of the email campaign. This is a string parameter.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="query-smtp-api-tokens-by-campaign-name-or-an-emailcampaignid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseSmtpApiTokenViewForwardPaging](#schemacollectionresponsesmtpapitokenviewforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

## Create a SMTP API token.

<a id="opIdpost-/marketing/transactional/2026-09/smtp-tokens_createToken"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/transactional/2026-09/smtp-tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/transactional/2026-09/smtp-tokens`

Create a SMTP API token.

> Body parameter

```json
null
```

<h3 id="create-a-smtp-api-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SmtpApiTokenRequestEgg](#schemasmtpapitokenrequestegg)|true|none|
|» campaignName|body|string|true|A name for the campaign tied to the SMTP API token.|
|» createContact|body|boolean|true|Indicates whether a contact should be created for email recipients.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-smtp-api-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[SmtpApiTokenView](#schemasmtpapitokenview)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

## Query a single token by ID.

<a id="opIdget-/marketing/transactional/2026-09/smtp-tokens/{tokenId}_getTokenById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/transactional/2026-09/smtp-tokens/{tokenId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/transactional/2026-09/smtp-tokens/{tokenId}`

Query a single token by ID.

<h3 id="query-a-single-token-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|The unique identifier of the SMTP API token to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="query-a-single-token-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SmtpApiTokenView](#schemasmtpapitokenview)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

## Delete a single token by ID.

<a id="opIddelete-/marketing/transactional/2026-09/smtp-tokens/{tokenId}_archiveToken"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/transactional/2026-09/smtp-tokens/{tokenId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/transactional/2026-09/smtp-tokens/{tokenId}`

Delete a single token by ID.

<h3 id="delete-a-single-token-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|The unique identifier of the SMTP token to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-single-token-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

## Reset the password of an existing token.

<a id="opIdpost-/marketing/transactional/2026-09/smtp-tokens/{tokenId}/password-reset_resetPassword"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/transactional/2026-09/smtp-tokens/{tokenId}/password-reset' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/transactional/2026-09/smtp-tokens/{tokenId}/password-reset`

Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.

<h3 id="reset-the-password-of-an-existing-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|The unique identifier of the SMTP token for which the password is being reset.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="reset-the-password-of-an-existing-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SmtpApiTokenView](#schemasmtpapitokenview)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: transactional-email )
</aside>

# Schemas

<h2 id="tocS_CollectionResponseSmtpApiTokenViewForwardPaging">CollectionResponseSmtpApiTokenViewForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsesmtpapitokenviewforwardpaging"></a>
<a id="schema_CollectionResponseSmtpApiTokenViewForwardPaging"></a>
<a id="tocScollectionresponsesmtpapitokenviewforwardpaging"></a>
<a id="tocscollectionresponsesmtpapitokenviewforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[SmtpApiTokenView](#schemasmtpapitokenview)]|true|none|An array of SMTP API token objects, each representing a token with its associated details.|

<h2 id="tocS_EmailSendStatusView">EmailSendStatusView</h2>
<!-- backwards compatibility -->
<a id="schemaemailsendstatusview"></a>
<a id="schema_EmailSendStatusView"></a>
<a id="tocSemailsendstatusview"></a>
<a id="tocsemailsendstatusview"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|false|none|Time when the send was completed.|
|eventId|[EventIdView](#schemaeventidview)|false|none|none|
|message|string|false|none|A human readable message describing the error along with remediation steps where appropriate|
|requestedAt|string(date-time)|false|none|Time when the send was requested.|
|sendResult|string|false|none|Result of the send.|
|startedAt|string(date-time)|false|none|Time when the send began processing.|
|status|string|true|none|Status of the send request.|
|statusId|string|true|none|Identifier used to query the status of the send.|

#### Enumerated Values

|Property|Value|
|---|---|
|sendResult|ADDRESS_LIST_BOMBED|
|sendResult|ADDRESS_ONLY_ACCEPTED_ON_PROD|
|sendResult|ADDRESS_OPTED_OUT|
|sendResult|ATTACHMENT_DOWNLOAD_QUEUE_FULL|
|sendResult|BLOCKED_ADDRESS|
|sendResult|BLOCKED_DOMAIN|
|sendResult|BRAND_RECIPIENT_FATIGUE_SUPPRESSED|
|sendResult|CAMPAIGN_CANCELLED|
|sendResult|CANCELLED_ABUSE|
|sendResult|CONTACT_VIEW_PERMISSION|
|sendResult|CORRUPT_INPUT|
|sendResult|EMAIL_DISABLED|
|sendResult|EMAIL_UNCONFIRMED|
|sendResult|GDPR_DOI_ENABLED|
|sendResult|GRAYMAIL_SUPPRESSED|
|sendResult|HUBL_LIMIT_EXCEEDED|
|sendResult|IDEMPOTENT_FAIL|
|sendResult|IDEMPOTENT_IGNORE|
|sendResult|INVALID_APP_ID_ATTRIBUTION|
|sendResult|INVALID_FROM_ADDRESS|
|sendResult|INVALID_TO_ADDRESS|
|sendResult|LOW_CONTACT_QUALITY_SCORE|
|sendResult|MARKETING_ACTIVATION_DISALLOWED|
|sendResult|MISSING_CONTENT|
|sendResult|MISSING_REQUIRED_PARAMETER|
|sendResult|MISSING_TEMPLATE_PROPERTIES|
|sendResult|MTA_IGNORE|
|sendResult|NON_MARKETABLE_CONTACT|
|sendResult|PORTAL_AUTHENTICATION_FAILURE|
|sendResult|PORTAL_EXPIRED|
|sendResult|PORTAL_MISSING_MARKETING_SCOPE|
|sendResult|PORTAL_NOT_AUTHORIZED_FOR_APPLICATION|
|sendResult|PORTAL_OVER_LIMIT|
|sendResult|PORTAL_SUSPENDED|
|sendResult|PREVIOUS_SPAM|
|sendResult|PREVIOUSLY_BOUNCED|
|sendResult|PREVIOUSLY_UNSUBSCRIBED_BRAND|
|sendResult|PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT|
|sendResult|PREVIOUSLY_UNSUBSCRIBED_MESSAGE|
|sendResult|PREVIOUSLY_UNSUBSCRIBED_PORTAL|
|sendResult|QUARANTINED_ADDRESS|
|sendResult|QUEUED|
|sendResult|RECIPIENT_FATIGUE_SUPPRESSED|
|sendResult|SENT|
|sendResult|TEMPLATE_RENDER_EXCEPTION|
|sendResult|THROTTLED|
|sendResult|TOO_MANY_RECIPIENTS|
|sendResult|UBB_GOVERNANCE_MISSING|
|sendResult|UNCONFIGURED_SENDING_DOMAIN|
|sendResult|UNDELIVERABLE|
|sendResult|VALIDATION_FAILED|
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

<h2 id="tocS_EventIdView">EventIdView</h2>
<!-- backwards compatibility -->
<a id="schemaeventidview"></a>
<a id="schema_EventIdView"></a>
<a id="tocSeventidview"></a>
<a id="tocseventidview"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|Time of event creation.|
|id|string(uuid)|true|none|Identifier of event.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string token used to retrieve the next page of results. It indicates the position after the last item on the current page.|
|link|string|false|none|A string containing the URL link to the next page of results.|

<h2 id="tocS_PublicSingleSendEmail">PublicSingleSendEmail</h2>
<!-- backwards compatibility -->
<a id="schemapublicsinglesendemail"></a>
<a id="schema_PublicSingleSendEmail"></a>
<a id="tocSpublicsinglesendemail"></a>
<a id="tocspublicsinglesendemail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bcc|[string]|true|none|List of email addresses to send as Bcc.|
|cc|[string]|true|none|List of email addresses to send as Cc.|
|from|string|false|none|The From header for the email.|
|replyTo|[string]|true|none|List of Reply-To header values for the email.|
|sendId|string|false|none|ID for a particular send. No more than one email will be sent per sendId.|
|to|string|false|none|The recipient of the email.|

<h2 id="tocS_PublicSingleSendRequestEgg">PublicSingleSendRequestEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicsinglesendrequestegg"></a>
<a id="schema_PublicSingleSendRequestEgg"></a>
<a id="tocSpublicsinglesendrequestegg"></a>
<a id="tocspublicsinglesendrequestegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactProperties|object|true|none|The contactProperties field is a map of contact property values. Each contact property value contains a name and value property. Each property will get set on the contact record and will be visible in the template under {{ contact.NAME }}. Use these properties when you want to set a contact property while you’re sending the email. For example, when sending a reciept you may want to set a last_paid_date property, as the sending of the receipt will have information about the last payment.|
|customProperties|object|true|none|The customProperties field is a map of property values. Each property value contains a name and value property. Each property will be visible in the template under {{ custom.NAME }}.<br>Note: Custom properties do not currently support arrays. To provide a listing in an email, one workaround is to build an HTML list (either with tables or ul) and specify it as a custom property.|
|emailId|integer(int64)|true|none|The content ID for the transactional email, which can be found in email tool UI.|
|message|[PublicSingleSendEmail](#schemapublicsinglesendemail)|true|none|none|

<h2 id="tocS_SmtpApiTokenRequestEgg">SmtpApiTokenRequestEgg</h2>
<!-- backwards compatibility -->
<a id="schemasmtpapitokenrequestegg"></a>
<a id="schema_SmtpApiTokenRequestEgg"></a>
<a id="tocSsmtpapitokenrequestegg"></a>
<a id="tocssmtpapitokenrequestegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignName|string|true|none|A name for the campaign tied to the SMTP API token.|
|createContact|boolean|true|none|Indicates whether a contact should be created for email recipients.|

<h2 id="tocS_SmtpApiTokenView">SmtpApiTokenView</h2>
<!-- backwards compatibility -->
<a id="schemasmtpapitokenview"></a>
<a id="schema_SmtpApiTokenView"></a>
<a id="tocSsmtpapitokenview"></a>
<a id="tocssmtpapitokenview"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaignName|string|true|none|A name for the campaign tied to the token.|
|createContact|boolean|true|none|Indicates whether a contact should be created for email recipients.|
|createdAt|string(date-time)|true|none|Timestamp generated when a token is created.|
|createdBy|string|true|none|Email address of the user that sent the token creation request.|
|emailCampaignId|string|true|none|Identifier assigned to the campaign provided in the token creation request.|
|id|string|true|none|User name to log into the HubSpot SMTP server.|
|password|string|false|none|Password used to log into the HubSpot SMTP server.|
