<h1 id="report-webhooks">Report webhooks v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adyen sends webhooks to inform your system that reports were generated and are ready to be downloaded.

You can download reports programmatically by making an HTTP GET request, or manually from your [Balance Platform Customer Area](https://balanceplatform-test.adyen.com/balanceplatform).

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="report-webhooks-webhooks">Webhooks</h1>

## Report generated

<a id="opIdpost-balancePlatform.report.created"></a>

`POST balancePlatform.report.created`

Adyen sends this webhook after a report is generated and ready to be downloaded. The webhook contains the URL at which the report can be downloaded.

Before you download reports, ask your Adyen contact for your report credentials. You must use your credentials to authenticate your GET request.

> Body parameter

```json
{
  "data": {
    "balancePlatform": "YOUR_BALANCE_PLATFORM",
    "creationDate": "2024-07-02T02:01:08+02:00",
    "id": "balanceplatform_accounting_report_2024_07_01.csv",
    "downloadUrl": "https://balanceplatform-test.adyen.com/balanceplatform/.../.../.../balanceplatform_accounting_report_2024_07_01.csv",
    "fileName": "balanceplatform_accounting_report_2024_07_01.csv",
    "reportType": "balanceplatform_accounting_report"
  },
  "environment": "test",
  "timestamp": "2024-07-02T02:01:05+02:00",
  "type": "balancePlatform.report.created"
}
```

<h3 id="report-generated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReportNotificationRequest](#schemareportnotificationrequest)|false|none|
|» data|body|[ReportNotificationData](#schemareportnotificationdata)|true|Contains event details.|
|» environment|body|string|true|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|» timestamp|body|string(date-time)|false|When the event was queued.|
|» type|body|string|true|Type of webhook.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|balancePlatform.report.created|

> Example responses

> 200 Response

```json
{
  "notificationResponse": "[accepted]"
}
```

<h3 id="report-generated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BalancePlatformNotificationResponse](#schemabalanceplatformnotificationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_BalancePlatformNotificationResponse">BalancePlatformNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceplatformnotificationresponse"></a>
<a id="schema_BalancePlatformNotificationResponse"></a>
<a id="tocSbalanceplatformnotificationresponse"></a>
<a id="tocsbalanceplatformnotificationresponse"></a>

```json
{
  "notificationResponse": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationResponse|string|false|none|Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).|

<h2 id="tocS_ReportNotificationData">ReportNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemareportnotificationdata"></a>
<a id="schema_ReportNotificationData"></a>
<a id="tocSreportnotificationdata"></a>
<a id="tocsreportnotificationdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "downloadUrl": "string",
  "fileName": "string",
  "id": "string",
  "reportType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The account holder related to the report.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|The balance account related to the report.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|downloadUrl|string|true|none|The URL at which you can download the report. To download, you must authenticate your GET request with your [API credentials](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/overview).|
|fileName|string|true|none|The filename of the report.|
|id|string|false|none|The ID of the resource.|
|reportType|string|true|none|The type of report. Possible values:<br><br>- `balanceplatform_accounting_interactive_report`<br>- `balanceplatform_accounting_report`<br>- `balanceplatform_balance_report`<br>- `balanceplatform_fee_report`<br>- `balanceplatform_payment_instrument_report`<br>- `balanceplatform_payout_report`<br>- `balanceplatform_statement_report`<br><br>|

<h2 id="tocS_ReportNotificationRequest">ReportNotificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportnotificationrequest"></a>
<a id="schema_ReportNotificationRequest"></a>
<a id="tocSreportnotificationrequest"></a>
<a id="tocsreportnotificationrequest"></a>

```json
{
  "data": {
    "accountHolder": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balanceAccount": {
      "description": "string",
      "id": "string",
      "reference": "string"
    },
    "balancePlatform": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "downloadUrl": "string",
    "fileName": "string",
    "id": "string",
    "reportType": "string"
  },
  "environment": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "balancePlatform.report.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ReportNotificationData](#schemareportnotificationdata)|true|none|Contains event details.|
|environment|string|true|none|The environment from which the webhook originated.<br><br>Possible values: **test**, **live**.|
|timestamp|string(date-time)|false|none|When the event was queued.|
|type|string|true|none|Type of webhook.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|balancePlatform.report.created|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "balancePlatform": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|id|string|false|none|The ID of the resource.|

<h2 id="tocS_ResourceReference">ResourceReference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcereference"></a>
<a id="schema_ResourceReference"></a>
<a id="tocSresourcereference"></a>
<a id="tocsresourcereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|
