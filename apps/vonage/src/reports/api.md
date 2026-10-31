<h1 id="reports-api">Reports API v2.2.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The [Reports API](/reports/overview) enables you to request a report of activity for your Vonage account.

Depending on your query pattern, you can choose from one of the two versions of the Reports API: asynchronous and synchronous. The asynchronous version is optimized for infrequent and large data queries (from several records to tens of millions). The synchronous version is optimized for frequent and periodic retrievals of small batches of data records (from one record to tens of thousand per query).

Only synchronous version supports retrival of data records by message/record ID.

Vonage recommends that you limit asynchronous queries to a maximum of 20 million records, by setting the start and end dates accordingly. On average, the asynchronous Reports API takes 5 - 10 minutes to generate 1 million records.

Base URLs:

* <a href="https://api.nexmo.com">https://api.nexmo.com</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="reports-api-default">Default</h1>

## List reports

<a id="opIdlist-reports"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/v2/reports?account_id=abcd1234&status=SUCCESS%2C%20FAILED' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/reports`

List reports created by the specified account based on filtered provided.

<h3 id="list-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|true|The account for which the list of reports will be queried.|
|status|query|string|true|A comma-separated list of report status values. Reports with any of the statuses specified are returned. The values in the comma-seperated list specified for `status` can be any of `PENDING`, `PROCESSING`, `SUCCESS`, `ABORTED`, `FAILED`, `TRUNCATED`.|
|date_from|query|string(date)|false|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date from which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.|
|date_to|query|string(date)|false|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date until which the list of reports will be queried. Format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`.|

> Example responses

> 200 Response

```json
{
  "items_count": 0,
  "reports": [
    {
      "_links": {
        "download_report": {
          "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
        },
        "self": {
          "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
        }
      },
      "account_id": "abcdef01",
      "callback_url": "https://requestb.in/12345",
      "date_end": "2018-01-01T00:00:00+00:00",
      "date_start": "2017-12-01T00:00:00+00:00",
      "include_subaccounts": "false",
      "items_count": 0,
      "product": "SMS",
      "receive_time": "2019-06-28T15:30:00+0000",
      "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
      "request_status": "SUCCESS",
      "start_time": "2019-06-28T15:30:00+0000",
      "account_ref": "stringstringstringstringstringstringstri",
      "client_ref": "stringstringstringstringstringstringstri",
      "direction": "outbound",
      "from": "441234567890",
      "include_message": "true",
      "network": "23415",
      "show_concatenated": "false",
      "status": "delivered",
      "to": "441234567890"
    }
  ],
  "self_link": "https://api.nexmo.com/v2/reports/"
}
```

> 400 Response

```json
{
  "detail": "Invalid request parameter.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Invalid request parameter",
  "type": "https://developer.nexmo.com/api-errors/reports#invalid-request-parameters"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

<h3 id="list-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-reports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items_count|integer|false|none|The number of reports in the list.|
|reports|[object]|false|none|The list of reports.|
|» *anyOf*|[sms_response_get_report](#schemasms_response_get_report)|false|none|SMS|
|» *anyOf*|[voice_call_response_get_report](#schemavoice_call_response_get_report)|false|none|Voice Call|
|» *anyOf*|[in_app_voice_response_get_report](#schemain_app_voice_response_get_report)|false|none|In App Voice|
|» *anyOf*|[websocket_call_response_get_report](#schemawebsocket_call_response_get_report)|false|none|WebSocket Call|
|» *anyOf*|[verify_api_response_get_report](#schemaverify_api_response_get_report)|false|none|Verify|
|» *anyOf*|[number_insight_response_get_report](#schemanumber_insight_response_get_report)|false|none|Number Insight|
|» *anyOf*|[messages_response_get_report](#schemamessages_response_get_report)|false|none|Messages|
|» *anyOf*|[conversations_response_get_report](#schemaconversations_response_get_report)|false|none|Conversations|
|» *anyOf*|[asr_response_get_report](#schemaasr_response_get_report)|false|none|ASR|
|self_link|string(uri)|false|none|URI of this search.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create an asynchronous report

<a id="opIdcreate-async-report"></a>

> Code samples

```bash
curl https://api.nexmo.com/v2/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "account_id": "abcdef01",
    "callback_url": "https://requestb.in/12345",
    "date_end": "2018-01-01T00:00:00+00:00",
    "date_start": "2017-12-01T00:00:00+00:00",
    "include_subaccounts": "false",
    "product": "SMS",
    "account_ref": "stringstringstringstringstringstringstri",
    "client_ref": "stringstringstringstringstringstringstri",
    "direction": "outbound",
    "from": "441234567890",
    "include_message": "true",
    "network": "23415",
    "show_concatenated": "false",
    "status": "delivered",
    "to": "441234567890"
  }'
```

`POST /v2/reports`

Request a report on your account activity

> Body parameter

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

<h3 id="create-an-asynchronous-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SMS](#schemasms) \| [VOICE-CALL](#schemavoice-call) \| [IN-APP-VOICE](#schemain-app-voice) \| [WEBSOCKET-CALL](#schemawebsocket-call) \| [VERIFY-API](#schemaverify-api) \| [NUMBER-INSIGHT](#schemanumber-insight) \| [MESSAGES](#schemamessages) \| [CONVERSATIONS](#schemaconversations) \| [ASR](#schemaasr)|false|The parameters of the JSON body will be used to create and filter the report.<br> The value of the `product` field will define which product the report will be created for and which parameters are accepted.<br>|
|» *oneOf*|body|[SMS](#schemasms)|false|SMS|
|» *oneOf*|body|[VOICE-CALL](#schemavoice-call)|false|Voice Call|
|» *oneOf*|body|[IN-APP-VOICE](#schemain-app-voice)|false|In App Voice|
|» *oneOf*|body|[WEBSOCKET-CALL](#schemawebsocket-call)|false|WebSocket Call|
|» *oneOf*|body|[VERIFY-API](#schemaverify-api)|false|Verify|
|» *oneOf*|body|[NUMBER-INSIGHT](#schemanumber-insight)|false|Number Insight|
|» *oneOf*|body|[MESSAGES](#schemamessages)|false|Messages|
|» *oneOf*|body|[CONVERSATIONS](#schemaconversations)|false|Conversations|
|» *oneOf*|body|[ASR](#schemaasr)|false|ASR|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

> 400 Response

```json
{
  "detail": "Malformed JSON payload.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Malformed JSON",
  "type": "https://developer.nexmo.com/api-errors#invalid-json"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 403 Response

```json
{
  "detail": "User not authorized to query the requested data.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Forbidden",
  "type": "https://developer.nexmo.com/api-errors#forbidden"
}
```

> 422 Response

```json
{
  "detail": "Unprocessable entity.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unprocessable entity",
  "type": "https://developer.nexmo.com/api-errors#not-found"
}
```

<h3 id="create-an-asynchronous-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable entity|Inline|

<h3 id="create-an-asynchronous-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[sms_response_create_report](#schemasms_response_create_report)|false|none|SMS|
|*oneOf*|[voice_call_response_create_report](#schemavoice_call_response_create_report)|false|none|Voice Call|
|*oneOf*|[in_app_voice_response_create_report](#schemain_app_voice_response_create_report)|false|none|In App Voice|
|*oneOf*|[websocket_call_response_create_report](#schemawebsocket_call_response_create_report)|false|none|WebSocket Call|
|*oneOf*|[verify_api_response_create_report](#schemaverify_api_response_create_report)|false|none|Verify|
|*oneOf*|[number_insight_response_create_report](#schemanumber_insight_response_create_report)|false|none|Number Insight|
|*oneOf*|[messages_response_create_report](#schemamessages_response_create_report)|false|none|Messages|
|*oneOf*|[conversations_response_create_report](#schemaconversations_response_create_report)|false|none|Conversations|
|*oneOf*|[asr_response_create_report](#schemaasr_response_create_report)|false|none|ASR|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Load records synchronously

<a id="opIdget-records"></a>

> Code samples

```bash
curl 'https://api.nexmo.com/v2/reports/records?account_id=abcd1234&product=SMS' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/reports/records`

Fetch usage data synchronously

<h3 id="load-records-synchronously-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|query|string|true|The account for which the list of reports will be queried.|
|product|query|string|true|The product to return records for|
|direction|query|string|false|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|id|query|string|false|The UUID of the message or call to be searched for. You can specify a comma-separated list of UUIDs. If UUIDs are not found they are listed in the response in the `ids_not_found` field.<br><br>If you specify `id`, you must not specify `status`, `date_start` or `date_end`.<br>|
|date_start|query|string(date)|false|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports should begin. <br><br>It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br><br>If you provide this, you must provide `date_end` and must not provide `id`.<br>|
|date_end|query|string(date)|false|**Must be no more than 24 hours later than `date_start`**<br><br>ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.<br><br>It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR.<br><br>If you provide this, you must provide `date_start` and must not provide `id`.<br>|
|include_message|query|boolean|false|Include the message contents in the records. Only applicable for use with products `SMS` and `MESSAGES`, where it is optional.|
|show_concatenated|query|boolean|false|Indicates whether the SMS was split up into multiple parts (due to its length).|
|status|query|string|false|The SMS status to search for. Optional where product is `SMS`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|VOICE-FAILED|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|ASR|
|product|CONVERSATIONS|
|product|REPORTS-USAGE|
|direction|inbound|
|direction|outbound|
|include_message|true|
|include_message|false|
|show_concatenated|true|
|show_concatenated|false|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|
|status|deleted|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/records?product=SMS&direction=outbound&date_start=2020-03-05T13%3A00%3A00Z&date_end=2020-03-05T14%0A00%3A00Z&account_id=abcdef01"
    }
  },
  "account_id": "abcdef01",
  "currency": "EUR",
  "ids_not_found": "7b10a0c2-1a05-11eb-bad9-38f9d331649,7b1091b8-1a05-11eb-bad9-38f9d331493",
  "price": "0.042",
  "received_at": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "direction": "outbound",
  "include_message": "true",
  "items_count": 1,
  "product": "SMS",
  "records": [
    {
      "account_id": "abcdef01",
      "client_ref": "stringstringstringstringstringstringstri",
      "concatenated": "true",
      "country": "FR",
      "country_name": "France",
      "currency": "EUR",
      "date_finalized": "2019-06-28T15:30:00+0000",
      "date_received": "2019-06-28T15:30:00+0000",
      "direction": "outbound",
      "error_code": "0",
      "error_code_description": "Delivered",
      "from": "441234567890",
      "latency": "42",
      "message_id": "0000000A",
      "network": "23415",
      "network_name": "Vodafone Limited",
      "status": "delivered",
      "to": "441234567890",
      "total_price": "0.042",
      "message_body": "This is a text message"
    }
  ],
  "show_concatenated": "false"
}
```

> 403 Response

```json
{
  "detail": "User not authorized to query the requested data",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Forbidden"
}
```

> 422 Response

```json
{
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "invalid_parameters": [
    {
      "name": "date_end",
      "reason": "Missing required parameter"
    }
  ],
  "title": "Unprocessable entity"
}
```

<h3 id="load-records-synchronously-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Unprocessable entity|Inline|
|422|Unprocessable Entity|Unprocessable entity|Inline|

<h3 id="load-records-synchronously-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|direction|string|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|include_message|boolean|false|none|Include the text of messages in the report.|
|items_count|integer|false|none|The number of returned records|
|product|[product_sms](#schemaproduct_sms)|false|none|Which product you wish to generate a report for.|
|records|[[json_sms_outbound_with_body](#schemajson_sms_outbound_with_body)]|false|none|Records in JSON format|
|show_concatenated|boolean|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|direction|string|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|include_message|boolean|false|none|Include the text of messages in the report.|
|items_count|integer|false|none|The number of returned records|
|product|[product_sms](#schemaproduct_sms)|false|none|Which product you wish to generate a report for.|
|records|[[json_sms_inbound_with_body](#schemajson_sms_inbound_with_body)]|false|none|Records in JSON format|
|show_concatenated|boolean|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|items_count|integer|false|none|The number of returned records|
|product|[product_voice](#schemaproduct_voice)|false|none|Which product you wish to generate a report for.|
|records|[[csv_voice](#schemacsv_voice)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_in_app_voice](#schemaproduct_in_app_voice)|false|none|Which product you wish to generate a report for.|
|records|[[csv_in_app_voice](#schemacsv_in_app_voice)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_websocket](#schemaproduct_websocket)|false|none|Which product you wish to generate a report for.|
|records|[[csv_websockets](#schemacsv_websockets)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_verify](#schemaproduct_verify)|false|none|Which product you wish to generate a report for.|
|records|[[csv_verify](#schemacsv_verify)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_ni](#schemaproduct_ni)|false|none|Which product you wish to generate a report for.|
|records|[[csv_ni](#schemacsv_ni)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|direction|string|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|include_message|boolean|false|none|Include the text of messages in the report.|
|items_count|integer|false|none|The number of returned records|
|product|[product_messages](#schemaproduct_messages)|false|none|Which product you wish to generate a report for.|
|records|[[csv_messages_outbound](#schemacsv_messages_outbound)]|false|none|Records in JSON format|
|show_concatenated|boolean|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|direction|string|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|include_message|boolean|false|none|Include the text of messages in the report.|
|items_count|integer|false|none|The number of returned records|
|product|[product_messages](#schemaproduct_messages)|false|none|Which product you wish to generate a report for.|
|records|[[csv_messages_inbound](#schemacsv_messages_inbound)]|false|none|Records in JSON format|
|show_concatenated|boolean|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_asr](#schemaproduct_asr)|false|none|Which product you wish to generate a report for.|
|records|[[csv_asr](#schemacsv_asr)]|false|none|Records in JSON format|
|*oneOf*|object|false|none|none|
|_links|object|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|items_count|integer|false|none|The number of returned records|
|product|[product_conversations](#schemaproduct_conversations)|false|none|Which product you wish to generate a report for.|
|records|[[csv_conversations](#schemacsv_conversations)]|false|none|Records in JSON format|

#### Enumerated Values

|Property|Value|
|---|---|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|[instance](#schemainstance)|false|none|none|
|title|string|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Missing parameter|
|instance|[instance](#schemainstance)|false|none|none|
|invalid_parameters|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|*oneOf*|object|false|none|Invalid Product|
|instance|[instance](#schemainstance)|false|none|none|
|invalid_parameters|[object]|false|none|none|
|» name|string|false|none|none|
|» reason|string|false|none|none|
|title|string|false|none|none|
|*oneOf*|object|false|none|Invalid filter|
|detail|string|false|none|none|
|instance|[instance](#schemainstance)|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get status of report

<a id="opIdget-report"></a>

> Code samples

```bash
curl https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/reports/{report_id}`

Retrieve status and metadata about a requested report.

<h3 id="get-status-of-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|UUID of the report request (`request_id` in response).|

> Example responses

> 200 Response

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "Report aaaaaaaa-bbbb-cccc-dddd-0123456789ab does not exist, or you do not have access.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Invalid report ID",
  "type": "https://developer.nexmo.com/api-errors#not-found"
}
```

<h3 id="get-status-of-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="get-status-of-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[sms_response_get_report](#schemasms_response_get_report)|false|none|SMS|
|*oneOf*|[voice_call_response_get_report](#schemavoice_call_response_get_report)|false|none|Voice Call|
|*oneOf*|[in_app_voice_response_get_report](#schemain_app_voice_response_get_report)|false|none|In App Voice|
|*oneOf*|[websocket_call_response_get_report](#schemawebsocket_call_response_get_report)|false|none|WebSocket Call|
|*oneOf*|[verify_api_response_get_report](#schemaverify_api_response_get_report)|false|none|Verify|
|*oneOf*|[number_insight_response_get_report](#schemanumber_insight_response_get_report)|false|none|Number Insight|
|*oneOf*|[messages_response_get_report](#schemamessages_response_get_report)|false|none|Messages|
|*oneOf*|[conversations_response_get_report](#schemaconversations_response_get_report)|false|none|Conversations|
|*oneOf*|[asr_response_get_report](#schemaasr_response_get_report)|false|none|ASR|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Cancel the execution of a report

<a id="opIdcancel-report"></a>

> Code samples

```bash
curl https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /v2/reports/{report_id}`

Cancel the execution of a pending or processing report.

<h3 id="cancel-the-execution-of-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_id|path|string|true|UUID of the report|

> Example responses

> 200 Response

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "Report aaaaaaaa-bbbb-cccc-dddd-0123456789ab does not exist, or you do not have access.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Invalid report ID",
  "type": "https://developer.nexmo.com/api-errors#not-found"
}
```

> 409 Response

```json
{
  "detail": "The job is already in a terminated state such as `SUCCESS`, `TRUNCATED`, `FAILED` or `ABORTED`.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Invalid Abort Operation",
  "type": "https://developer.nexmo.com/api-errors/reports#invalid-abort-operation"
}
```

<h3 id="cancel-the-execution-of-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|
|409|Conflict|Invalid Abort Operation|Inline|

<h3 id="cancel-the-execution-of-a-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[sms_response_get_report](#schemasms_response_get_report)|false|none|SMS|
|*oneOf*|[voice_call_response_get_report](#schemavoice_call_response_get_report)|false|none|Voice Call|
|*oneOf*|[in_app_voice_response_get_report](#schemain_app_voice_response_get_report)|false|none|In App Voice|
|*oneOf*|[websocket_call_response_get_report](#schemawebsocket_call_response_get_report)|false|none|WebSocket Call|
|*oneOf*|[verify_api_response_get_report](#schemaverify_api_response_get_report)|false|none|Verify|
|*oneOf*|[number_insight_response_get_report](#schemanumber_insight_response_get_report)|false|none|Number Insight|
|*oneOf*|[messages_response_get_report](#schemamessages_response_get_report)|false|none|Messages|
|*oneOf*|[conversations_response_get_report](#schemaconversations_response_get_report)|false|none|Conversations|
|*oneOf*|[asr_response_get_report](#schemaasr_response_get_report)|false|none|ASR|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get report data

<a id="opIddownload-report"></a>

> Code samples

```bash
curl https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v3/media/{file_id}`

Download a zipped archive of the rendered report. The file is available for download for 72 hours.<br> The zip file will be named `<PRODUCT>_<REPORT_ID>.zip`<br> The csv file in the zip archive will be named as `report_<PRODUCT>_<ACCOUNT_ID>_<DATE>.csv` the date will be formatted as `yyyyMMdd`.


<h3 id="get-report-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|UUID of the file.|

> Example responses

> 401 Response

```json
{
  "detail": "You did not provide correct credentials.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Unauthorized",
  "type": "https://developer.nexmo.com/api-errors#unauthorized"
}
```

> 404 Response

```json
{
  "detail": "Report aaaaaaaa-bbbb-cccc-dddd-0123456789ab does not exist, or you do not have access.",
  "instance": "f94b4e56604e07e5e5ad5a7228618f81",
  "title": "Invalid report ID",
  "type": "https://developer.nexmo.com/api-errors#not-found"
}
```

<h3 id="get-report-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Zip file containing CSV files|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="get-report-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|report|[object]|false|none|The report in CSV format inside the zip archive.|
|» *anyOf*|[csv_sms_outbound](#schemacsv_sms_outbound)|false|none|Outbound SMS|
|» *anyOf*|[csv_sms_inbound](#schemacsv_sms_inbound)|false|none|Inbound SMS|
|» *anyOf*|[csv_voice](#schemacsv_voice)|false|none|Voice Call|
|» *anyOf*|[csv_in_app_voice](#schemacsv_in_app_voice)|false|none|In App Voice|
|» *anyOf*|[csv_websockets](#schemacsv_websockets)|false|none|WebSocket Call|
|» *anyOf*|[csv_verify](#schemacsv_verify)|false|none|Verify|
|» *anyOf*|[csv_ni](#schemacsv_ni)|false|none|Number Insight|
|» *anyOf*|[csv_messages_outbound](#schemacsv_messages_outbound)|false|none|Outbound Messages|
|» *anyOf*|[csv_messages_inbound](#schemacsv_messages_inbound)|false|none|Inbound Messages|
|» *anyOf*|[csv_asr](#schemacsv_asr)|false|none|ASR|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|instance|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_ASR">ASR</h2>
<!-- backwards compatibility -->
<a id="schemaasr"></a>
<a id="schema_ASR"></a>
<a id="tocSasr"></a>
<a id="tocsasr"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "ASR",
  "direction": "outbound",
  "from": "441234567890",
  "status": "ok",
  "to": "441234567890"
}
```

ASR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|product|[product_asr](#schemaproduct_asr)|true|none|Which product you wish to generate a report for.|
|status|[asr_status](#schemaasr_status)|false|none|Search only for ASR with corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|ok|
|status|error|

<h2 id="tocS_CONVERSATIONS">CONVERSATIONS</h2>
<!-- backwards compatibility -->
<a id="schemaconversations"></a>
<a id="schema_CONVERSATIONS"></a>
<a id="tocSconversations"></a>
<a id="tocsconversations"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "CONVERSATIONS",
  "conversation_id": "CON-abc123",
  "status": "0"
}
```

Conversations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_conversations](#schemaproduct_conversations)|true|none|Which product you wish to generate a report for.|
|status|[status](#schemastatus)|false|none|Search only for conversation events with the specified event status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_IN-APP-VOICE">IN-APP-VOICE</h2>
<!-- backwards compatibility -->
<a id="schemain-app-voice"></a>
<a id="schema_IN-APP-VOICE"></a>
<a id="tocSin-app-voice"></a>
<a id="tocsin-app-voice"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "IN-APP-VOICE",
  "conversation_id": "CON-abc123"
}
```

In App Voice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|conversation_id|[call_conversation_id](#schemacall_conversation_id)|false|none|Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_in_app_voice](#schemaproduct_in_app_voice)|true|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_MESSAGES">MESSAGES</h2>
<!-- backwards compatibility -->
<a id="schemamessages"></a>
<a id="schema_MESSAGES"></a>
<a id="tocSmessages"></a>
<a id="tocsmessages"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "MESSAGES",
  "direction": "outbound",
  "from": "441234567890",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "include_message": "true",
  "to": "441234567890"
}
```

Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|id|[id](#schemaid)|false|none|Search only messages with the specified uuid.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|product|[product_messages](#schemaproduct_messages)|true|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_NUMBER-INSIGHT">NUMBER-INSIGHT</h2>
<!-- backwards compatibility -->
<a id="schemanumber-insight"></a>
<a id="schema_NUMBER-INSIGHT"></a>
<a id="tocSnumber-insight"></a>
<a id="tocsnumber-insight"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "NUMBER-INSIGHT",
  "network": "23415",
  "number": "441234567890"
}
```

Number Insight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|number|[number](#schemanumber)|false|none|Search only request for the target number.|
|product|[product_ni](#schemaproduct_ni)|true|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_SMS">SMS</h2>
<!-- backwards compatibility -->
<a id="schemasms"></a>
<a id="schema_SMS"></a>
<a id="tocSsms"></a>
<a id="tocssms"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|account_ref|[account_ref](#schemaaccount_ref)|false|none|Search for messages with this `account_ref`.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_sms](#schemaproduct_sms)|true|none|Which product you wish to generate a report for.|
|show_concatenated|[show_concatenated](#schemashow_concatenated)|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_VERIFY-API">VERIFY-API</h2>
<!-- backwards compatibility -->
<a id="schemaverify-api"></a>
<a id="schema_VERIFY-API"></a>
<a id="tocSverify-api"></a>
<a id="tocsverify-api"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "VERIFY-API",
  "network": "23415",
  "to": "441234567890"
}
```

Verify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_verify](#schemaproduct_verify)|true|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_VOICE-CALL">VOICE-CALL</h2>
<!-- backwards compatibility -->
<a id="schemavoice-call"></a>
<a id="schema_VOICE-CALL"></a>
<a id="tocSvoice-call"></a>
<a id="tocsvoice-call"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "VOICE-CALL",
  "direction": "outbound",
  "from": "441234567890",
  "network": "23415",
  "status": "started",
  "to": "441234567890"
}
```

Voice Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_voice](#schemaproduct_voice)|true|none|Which product you wish to generate a report for.|
|status|[voice_status](#schemavoice_status)|false|none|Search only for voice call with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|answered|
|status|machine|
|status|error|
|status|failed|

<h2 id="tocS_WEBSOCKET-CALL">WEBSOCKET-CALL</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket-call"></a>
<a id="schema_WEBSOCKET-CALL"></a>
<a id="tocSwebsocket-call"></a>
<a id="tocswebsocket-call"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "WEBSOCKET-CALL",
  "status": 200
}
```

WebSocket Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|product|[product_websocket](#schemaproduct_websocket)|true|none|Which product you wish to generate a report for.|
|status|[websocket_status](#schemawebsocket_status)|false|none|Search only for WebSocket call with corresponding status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS__links">_links</h2>
<!-- backwards compatibility -->
<a id="schema_links"></a>
<a id="schema__links"></a>
<a id="tocS_links"></a>
<a id="tocs_links"></a>

```json
{
  "download_report": {
    "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  },
  "self": {
    "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_report|object|false|none|none|
|self|object|false|none|none|

<h2 id="tocS__links_create_report">_links_create_report</h2>
<!-- backwards compatibility -->
<a id="schema_links_create_report"></a>
<a id="schema__links_create_report"></a>
<a id="tocS_links_create_report"></a>
<a id="tocs_links_create_report"></a>

```json
{
  "self": {
    "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|object|false|none|none|

<h2 id="tocS_account_id">account_id</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_id"></a>
<a id="schema_account_id"></a>
<a id="tocSaccount_id"></a>
<a id="tocsaccount_id"></a>

```json
"abcdef01"
```

The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.

<h2 id="tocS_account_ref">account_ref</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_ref"></a>
<a id="schema_account_ref"></a>
<a id="tocSaccount_ref"></a>
<a id="tocsaccount_ref"></a>

```json
"stringstringstringstringstringstringstri"
```

Search for messages with this `account_ref`.

<h2 id="tocS_application_id">application_id</h2>
<!-- backwards compatibility -->
<a id="schemaapplication_id"></a>
<a id="schema_application_id"></a>
<a id="tocSapplication_id"></a>
<a id="tocsapplication_id"></a>

```json
"string"
```

Search only for requests attached to a particular Application ID.

<h2 id="tocS_asr_fields">asr_fields</h2>
<!-- backwards compatibility -->
<a id="schemaasr_fields"></a>
<a id="schema_asr_fields"></a>
<a id="tocSasr_fields"></a>
<a id="tocsasr_fields"></a>

```json
{
  "direction": "outbound",
  "from": "441234567890",
  "product": "ASR",
  "status": "ok",
  "to": "441234567890"
}
```

ASR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|product|[product_asr](#schemaproduct_asr)|false|none|Which product you wish to generate a report for.|
|status|[asr_status](#schemaasr_status)|false|none|Search only for ASR with corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|ok|
|status|error|

<h2 id="tocS_asr_response_create_report">asr_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemaasr_response_create_report"></a>
<a id="schema_asr_response_create_report"></a>
<a id="tocSasr_response_create_report"></a>
<a id="tocsasr_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "ASR",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "status": "ok",
  "to": "441234567890"
}
```

ASR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|product|[product_asr](#schemaproduct_asr)|false|none|Which product you wish to generate a report for.|
|status|[asr_status](#schemaasr_status)|false|none|Search only for ASR with corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|ok|
|status|error|

<h2 id="tocS_asr_response_get_report">asr_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemaasr_response_get_report"></a>
<a id="schema_asr_response_get_report"></a>
<a id="tocSasr_response_get_report"></a>
<a id="tocsasr_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "ASR",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "status": "ok",
  "to": "441234567890"
}
```

ASR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|product|[product_asr](#schemaproduct_asr)|false|none|Which product you wish to generate a report for.|
|status|[asr_status](#schemaasr_status)|false|none|Search only for ASR with corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|ok|
|status|error|

<h2 id="tocS_asr_status">asr_status</h2>
<!-- backwards compatibility -->
<a id="schemaasr_status"></a>
<a id="schema_asr_status"></a>
<a id="tocSasr_status"></a>
<a id="tocsasr_status"></a>

```json
"ok"
```

Search only for ASR with corresponding status.

<h2 id="tocS_asr_status_description">asr_status_description</h2>
<!-- backwards compatibility -->
<a id="schemaasr_status_description"></a>
<a id="schema_asr_status_description"></a>
<a id="tocSasr_status_description"></a>
<a id="tocsasr_status_description"></a>

```json
""
```

ASR error message.

<h2 id="tocS_call_conversation_id">call_conversation_id</h2>
<!-- backwards compatibility -->
<a id="schemacall_conversation_id"></a>
<a id="schema_call_conversation_id"></a>
<a id="tocScall_conversation_id"></a>
<a id="tocscall_conversation_id"></a>

```json
"CON-abc123"
```

Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.

<h2 id="tocS_call_end_date">call_end_date</h2>
<!-- backwards compatibility -->
<a id="schemacall_end_date"></a>
<a id="schema_call_end_date"></a>
<a id="tocScall_end_date"></a>
<a id="tocscall_end_date"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date of the end of the call.

<h2 id="tocS_call_start_date">call_start_date</h2>
<!-- backwards compatibility -->
<a id="schemacall_start_date"></a>
<a id="schema_call_start_date"></a>
<a id="tocScall_start_date"></a>
<a id="tocscall_start_date"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date of the start of the call.

<h2 id="tocS_callback_url">callback_url</h2>
<!-- backwards compatibility -->
<a id="schemacallback_url"></a>
<a id="schema_callback_url"></a>
<a id="tocScallback_url"></a>
<a id="tocscallback_url"></a>

```json
"https://requestb.in/12345"
```

URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).

<h2 id="tocS_cdr_id">cdr_id</h2>
<!-- backwards compatibility -->
<a id="schemacdr_id"></a>
<a id="schema_cdr_id"></a>
<a id="tocScdr_id"></a>
<a id="tocscdr_id"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

Id of the related CDR.

<h2 id="tocS_client_ref">client_ref</h2>
<!-- backwards compatibility -->
<a id="schemaclient_ref"></a>
<a id="schema_client_ref"></a>
<a id="tocSclient_ref"></a>
<a id="tocsclient_ref"></a>

```json
"stringstringstringstringstringstringstri"
```

Search for messages with this `client_ref`.

<h2 id="tocS_concatenated">concatenated</h2>
<!-- backwards compatibility -->
<a id="schemaconcatenated"></a>
<a id="schema_concatenated"></a>
<a id="tocSconcatenated"></a>
<a id="tocsconcatenated"></a>

```json
"true"
```

Whether the SMS was split up into multiple parts (due to its length).

<h2 id="tocS_conversation_id">conversation_id</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_id"></a>
<a id="schema_conversation_id"></a>
<a id="tocSconversation_id"></a>
<a id="tocsconversation_id"></a>

```json
"CON-abc123"
```

Search only for events sent to this particular Conversation. This should include the "CON-" prefix.

<h2 id="tocS_conversation_user_id">conversation_user_id</h2>
<!-- backwards compatibility -->
<a id="schemaconversation_user_id"></a>
<a id="schema_conversation_user_id"></a>
<a id="tocSconversation_user_id"></a>
<a id="tocsconversation_user_id"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

User id in the conversation.

<h2 id="tocS_conversations_fields">conversations_fields</h2>
<!-- backwards compatibility -->
<a id="schemaconversations_fields"></a>
<a id="schema_conversations_fields"></a>
<a id="tocSconversations_fields"></a>
<a id="tocsconversations_fields"></a>

```json
{
  "conversation_id": "CON-abc123",
  "product": "CONVERSATIONS",
  "status": "0"
}
```

Conversations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_conversations](#schemaproduct_conversations)|false|none|Which product you wish to generate a report for.|
|status|[status](#schemastatus)|false|none|Search only for conversation events with the specified event status.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_conversations_response_create_report">conversations_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemaconversations_response_create_report"></a>
<a id="schema_conversations_response_create_report"></a>
<a id="tocSconversations_response_create_report"></a>
<a id="tocsconversations_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "CONVERSATIONS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "conversation_id": "CON-abc123",
  "status": "0"
}
```

Conversations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_conversations](#schemaproduct_conversations)|false|none|Which product you wish to generate a report for.|
|status|[status](#schemastatus)|false|none|Search only for conversation events with the specified event status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_conversations_response_get_report">conversations_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemaconversations_response_get_report"></a>
<a id="schema_conversations_response_get_report"></a>
<a id="tocSconversations_response_get_report"></a>
<a id="tocsconversations_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "CONVERSATIONS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "conversation_id": "CON-abc123",
  "status": "0"
}
```

Conversations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_conversations](#schemaproduct_conversations)|false|none|Which product you wish to generate a report for.|
|status|[status](#schemastatus)|false|none|Search only for conversation events with the specified event status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"FR"
```

Country where the request was sent.

<h2 id="tocS_country_name">country_name</h2>
<!-- backwards compatibility -->
<a id="schemacountry_name"></a>
<a id="schema_country_name"></a>
<a id="tocScountry_name"></a>
<a id="tocscountry_name"></a>

```json
"France"
```

Country name where the request was sent.

<h2 id="tocS_creation_date">creation_date</h2>
<!-- backwards compatibility -->
<a id="schemacreation_date"></a>
<a id="schema_creation_date"></a>
<a id="tocScreation_date"></a>
<a id="tocscreation_date"></a>

```json
"2021-11-18T18:49:16+00:00"
```

Date the event was created.

<h2 id="tocS_csv_asr">csv_asr</h2>
<!-- backwards compatibility -->
<a id="schemacsv_asr"></a>
<a id="schema_csv_asr"></a>
<a id="tocScsv_asr"></a>
<a id="tocscsv_asr"></a>

```json
{
  "account_id": "abcdef01",
  "call_date_start": "2019-06-28T15:30:00+0000",
  "call_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "currency": "EUR",
  "date_end": "2019-06-28T15:30:00+0000",
  "date_start": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "duration": "42",
  "from": "441234567890",
  "price": "0.042",
  "status": "ok",
  "status_description": "",
  "to": "441234567890",
  "total_price": "0.042"
}
```

ASR

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|call_date_start|[call_start_date](#schemacall_start_date)|false|none|Date of the start of the call.|
|call_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_end|[call_end_date](#schemacall_end_date)|false|none|Date of the end of the call.|
|date_start|[call_start_date](#schemacall_start_date)|false|none|Date of the start of the call.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|duration|[duration](#schemaduration)|false|none|Duration of the call in seconds.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|status|[asr_status](#schemaasr_status)|false|none|Search only for ASR with corresponding status.|
|status_description|[asr_status_description](#schemaasr_status_description)|false|none|ASR error message.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|status|ok|
|status|error|

<h2 id="tocS_csv_conversations">csv_conversations</h2>
<!-- backwards compatibility -->
<a id="schemacsv_conversations"></a>
<a id="schema_csv_conversations"></a>
<a id="tocScsv_conversations"></a>
<a id="tocscsv_conversations"></a>

```json
{
  "account_id": "abcdef01",
  "application_id": "string",
  "client_ref": "stringstringstringstringstringstringstri",
  "conversation_id": "CON-abc123",
  "creation_date": "2021-11-18T18:49:16+00:00",
  "currency": "EUR",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "price": "0.042",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "total_price": "0.042",
  "user_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

Conversations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|application_id|[application_id](#schemaapplication_id)|false|none|Search only for requests attached to a particular Application ID.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|creation_date|[creation_date](#schemacreation_date)|false|none|Date the event was created.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|id|[cdr_id](#schemacdr_id)|false|none|Id of the related CDR.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|
|user_id|[conversation_user_id](#schemaconversation_user_id)|false|none|User id in the conversation.|

<h2 id="tocS_csv_in_app_voice">csv_in_app_voice</h2>
<!-- backwards compatibility -->
<a id="schemacsv_in_app_voice"></a>
<a id="schema_csv_in_app_voice"></a>
<a id="tocScsv_in_app_voice"></a>
<a id="tocscsv_in_app_voice"></a>

```json
{
  "account_id": "abcdef01",
  "application_id": "string",
  "client_ref": "stringstringstringstringstringstringstri",
  "conversation_id": "CON-abc123",
  "currency": "EUR",
  "date_end": "2019-06-28T15:30:00+0000",
  "date_start": "2019-06-28T15:30:00+0000",
  "duration": "42",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "leg_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "price": "0.042",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": "200",
  "total_price": "0.042",
  "user_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

In App Voice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|application_id|[application_id](#schemaapplication_id)|false|none|Search only for requests attached to a particular Application ID.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|conversation_id|[conversation_id](#schemaconversation_id)|false|none|Search only for events sent to this particular Conversation. This should include the "CON-" prefix.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_end|[call_end_date](#schemacall_end_date)|false|none|Date of the end of the call.|
|date_start|[call_start_date](#schemacall_start_date)|false|none|Date of the start of the call.|
|duration|[duration](#schemaduration)|false|none|Duration of the call in seconds.|
|id|[cdr_id](#schemacdr_id)|false|none|Id of the related CDR.|
|leg_id|[ip_voice_leg_id](#schemaip_voice_leg_id)|false|none|Id of the call leg.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|status|[ip_voice_status](#schemaip_voice_status)|false|none|Status of the termination of the In-App call.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|
|user_id|[conversation_user_id](#schemaconversation_user_id)|false|none|User id in the conversation.|

<h2 id="tocS_csv_messages_inbound">csv_messages_inbound</h2>
<!-- backwards compatibility -->
<a id="schemacsv_messages_inbound"></a>
<a id="schema_csv_messages_inbound"></a>
<a id="tocScsv_messages_inbound"></a>
<a id="tocscsv_messages_inbound"></a>

```json
{
  "account_id": "abcdef01",
  "currency": "EUR",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "message_body": "This is a text message",
  "message_id": "0000000A",
  "provider": "whatsapp",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Inbound Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|provider|[messages_provider](#schemamessages_provider)|false|none|Provider of the message.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_csv_messages_outbound">csv_messages_outbound</h2>
<!-- backwards compatibility -->
<a id="schemacsv_messages_outbound"></a>
<a id="schema_csv_messages_outbound"></a>
<a id="tocScsv_messages_outbound"></a>
<a id="tocscsv_messages_outbound"></a>

```json
{
  "account_id": "abcdef01",
  "client_ref": "stringstringstringstringstringstringstri",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_finalized": "2019-06-28T15:30:00+0000",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "error_code": "1300",
  "from": "441234567890",
  "latency": "42",
  "message_body": "This is a text message",
  "message_id": "0000000A",
  "provider": "whatsapp",
  "status": "submitted",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Outbound Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_finalized|[date_finalized](#schemadate_finalized)|false|none|Date when the request was finalized.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|error_code|[messages_error_code](#schemamessages_error_code)|false|none|Error code of the message.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|latency|[latency](#schemalatency)|false|none|Latency of the request in ms.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|provider|[messages_provider](#schemamessages_provider)|false|none|Provider of the message.|
|status|[messages_status](#schemamessages_status)|false|none|Status of the message.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_csv_ni">csv_ni</h2>
<!-- backwards compatibility -->
<a id="schemacsv_ni"></a>
<a id="schema_csv_ni"></a>
<a id="tocScsv_ni"></a>
<a id="tocscsv_ni"></a>

```json
{
  "account_id": "abcdef01",
  "country": "mobile",
  "country_name": "mobile",
  "currency": "EUR",
  "date_received": "2019-06-28T15:30:00+0000",
  "first_name": "valid",
  "last_name": "valid",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "network_type": "mobile",
  "number": "HLR-LOOKUP",
  "ported": "ported",
  "product_type": "HLR-LOOKUP",
  "reachable": "reachable",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "response_code": "0",
  "status": "Success",
  "total_price": "0.042",
  "valid": "valid"
}
```

Number Insight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|country|[ni_country](#schemani_country)|false|none|Country of the looked up number.|
|country_name|[ni_country_name](#schemani_country_name)|false|none|Country name of the looked up number.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|first_name|[ni_first_name](#schemani_first_name)|false|none|First name of the owner of the looked up number.|
|last_name|[ni_last_name](#schemani_last_name)|false|none|Last name of the owner of the looked up number.|
|network|[ni_network](#schemani_network)|false|none|Network of the looked up number.|
|network_name|[ni_network_name](#schemani_network_name)|false|none|Network name of the looked up number.|
|network_type|[ni_network_type](#schemani_network_type)|false|none|Network type of the looked up number.|
|number|[ni_number](#schemani_number)|false|none|Number looked up for this request.|
|ported|[ni_ported](#schemani_ported)|false|none|Is the looked up number ported.|
|product_type|[ni_product_type](#schemani_product_type)|false|none|Type of Number Insight request.|
|reachable|[ni_reachable](#schemani_reachable)|false|none|Is the looked up number reachable.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|response_code|[ni_response_code](#schemani_response_code)|false|none|Response code of the Number Insight request.|
|status|[ni_status](#schemani_status)|false|none|Status of the Number Insight request.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|
|valid|[ni_valid](#schemani_valid)|false|none|Is the looked up number valid.|

<h2 id="tocS_csv_sms_inbound">csv_sms_inbound</h2>
<!-- backwards compatibility -->
<a id="schemacsv_sms_inbound"></a>
<a id="schema_csv_sms_inbound"></a>
<a id="tocScsv_sms_inbound"></a>
<a id="tocscsv_sms_inbound"></a>

```json
{
  "account_id": "abcdef01",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "message_body": "This is a text message",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Inbound SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|

<h2 id="tocS_csv_sms_outbound">csv_sms_outbound</h2>
<!-- backwards compatibility -->
<a id="schemacsv_sms_outbound"></a>
<a id="schema_csv_sms_outbound"></a>
<a id="tocScsv_sms_outbound"></a>
<a id="tocscsv_sms_outbound"></a>

```json
{
  "account_id": "abcdef01",
  "client_ref": "stringstringstringstringstringstringstri",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_finalized": "2019-06-28T15:30:00+0000",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "error_code": "0",
  "error_code_description": "Delivered",
  "from": "441234567890",
  "latency": "42",
  "message_body": "This is a text message",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "status": "delivered",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Outbound SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_finalized|[date_finalized](#schemadate_finalized)|false|none|Date when the request was finalized.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|error_code|[error_code](#schemaerror_code)|false|none|Error code of the request.|
|error_code_description|[error_code_description](#schemaerror_code_description)|false|none|Description of the error code of the request.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|latency|[latency](#schemalatency)|false|none|Latency of the request in ms.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_csv_verify">csv_verify</h2>
<!-- backwards compatibility -->
<a id="schemacsv_verify"></a>
<a id="schema_csv_verify"></a>
<a id="tocScsv_verify"></a>
<a id="tocscsv_verify"></a>

```json
{
  "account_id": "abcdef01",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_finalized": "2019-06-28T15:30:00+0000",
  "date_received": "2019-06-28T15:30:00+0000",
  "estimated_price": "0.042",
  "first_event_date": "2019-06-28T15:30:00+0000",
  "from": "441234567890",
  "last_event_date": "2019-06-28T15:30:00+0000",
  "locale": "en-gb",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "number_type": "MOBILE",
  "price": "0.042",
  "pricing_model": "0",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "sms_event_count": "1",
  "to": "441234567890",
  "tts_event_count": "1",
  "verify_status": "SUCCESS"
}
```

Verify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_finalized|[date_finalized](#schemadate_finalized)|false|none|Date when the request was finalized.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|estimated_price|[estimated_price](#schemaestimated_price)|false|none|Estimated price of the verify request.|
|first_event_date|[first_event_date](#schemafirst_event_date)|false|none|Date of the first verify event.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|last_event_date|[last_event_date](#schemalast_event_date)|false|none|Date of the last verify event.|
|locale|[locale](#schemalocale)|false|none|Locale used for the TTS.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|number_type|[number_type](#schemanumber_type)|false|none|Type of phone number to which requests are sent.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|pricing_model|[pricing_model](#schemapricing_model)|false|none|Pricing model used for this request.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|sms_event_count|[sms_event_count](#schemasms_event_count)|false|none|Number of sms sent for this verify request.|
|to|[to](#schemato)|false|none|Request to this number.|
|tts_event_count|[tts_event_count](#schematts_event_count)|false|none|Number of tts sent for this verify request.|
|verify_status|[verify_status](#schemaverify_status)|false|none|Status of the verify request.|

<h2 id="tocS_csv_voice">csv_voice</h2>
<!-- backwards compatibility -->
<a id="schemacsv_voice"></a>
<a id="schema_csv_voice"></a>
<a id="tocScsv_voice"></a>
<a id="tocscsv_voice"></a>

```json
{
  "account_id": "abcdef01",
  "call_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_end": "2019-06-28T15:30:00+0000",
  "date_start": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "duration": "42",
  "from": "441234567890",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "price": "0.042",
  "status": "started",
  "status_description": "The call was successful.",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Voice Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|call_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_end|[call_end_date](#schemacall_end_date)|false|none|Date of the end of the call.|
|date_start|[call_start_date](#schemacall_start_date)|false|none|Date of the start of the call.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|duration|[duration](#schemaduration)|false|none|Duration of the call in seconds.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|status|[voice_status](#schemavoice_status)|false|none|Search only for voice call with the corresponding status.|
|status_description|[voice_status_description](#schemavoice_status_description)|false|none|Description of the status of the call.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|status|answered|
|status|machine|
|status|error|
|status|failed|

<h2 id="tocS_csv_websockets">csv_websockets</h2>
<!-- backwards compatibility -->
<a id="schemacsv_websockets"></a>
<a id="schema_csv_websockets"></a>
<a id="tocScsv_websockets"></a>
<a id="tocscsv_websockets"></a>

```json
{
  "account_id": "abcdef01",
  "call_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "currency": "EUR",
  "date_end": "2019-06-28T15:30:00+0000",
  "date_start": "2019-06-28T15:30:00+0000",
  "duration": "42",
  "price": "0.042",
  "status": 200,
  "total_price": "0.042"
}
```

WebSocket Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|call_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_end|[call_end_date](#schemacall_end_date)|false|none|Date of the end of the call.|
|date_start|[call_start_date](#schemacall_start_date)|false|none|Date of the start of the call.|
|duration|[duration](#schemaduration)|false|none|Duration of the call in seconds.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|status|[websocket_status](#schemawebsocket_status)|false|none|Search only for WebSocket call with corresponding status.|
|total_price|[total_price](#schematotal_price)|false|none|Total price of the request.|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"EUR"
```

Currency of the price of the request.

<h2 id="tocS_date">date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date of the request.

<h2 id="tocS_date_end">date_end</h2>
<!-- backwards compatibility -->
<a id="schemadate_end"></a>
<a id="schema_date_end"></a>
<a id="tocSdate_end"></a>
<a id="tocsdate_end"></a>

```json
"2018-01-01T00:00:00+00:00"
```

ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.

<h2 id="tocS_date_finalized">date_finalized</h2>
<!-- backwards compatibility -->
<a id="schemadate_finalized"></a>
<a id="schema_date_finalized"></a>
<a id="tocSdate_finalized"></a>
<a id="tocsdate_finalized"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date when the request was finalized.

<h2 id="tocS_date_start">date_start</h2>
<!-- backwards compatibility -->
<a id="schemadate_start"></a>
<a id="schema_date_start"></a>
<a id="tocSdate_start"></a>
<a id="tocsdate_start"></a>

```json
"2017-12-01T00:00:00+00:00"
```

ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.

<h2 id="tocS_direction">direction</h2>
<!-- backwards compatibility -->
<a id="schemadirection"></a>
<a id="schema_direction"></a>
<a id="tocSdirection"></a>
<a id="tocsdirection"></a>

```json
"outbound"
```

Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.

<h2 id="tocS_duration">duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"42"
```

Duration of the call in seconds.

<h2 id="tocS_error_code">error_code</h2>
<!-- backwards compatibility -->
<a id="schemaerror_code"></a>
<a id="schema_error_code"></a>
<a id="tocSerror_code"></a>
<a id="tocserror_code"></a>

```json
"0"
```

Error code of the request.

<h2 id="tocS_error_code_description">error_code_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_code_description"></a>
<a id="schema_error_code_description"></a>
<a id="tocSerror_code_description"></a>
<a id="tocserror_code_description"></a>

```json
"Delivered"
```

Description of the error code of the request.

<h2 id="tocS_estimated_price">estimated_price</h2>
<!-- backwards compatibility -->
<a id="schemaestimated_price"></a>
<a id="schema_estimated_price"></a>
<a id="tocSestimated_price"></a>
<a id="tocsestimated_price"></a>

```json
"0.042"
```

Estimated price of the verify request.

<h2 id="tocS_file_id">file_id</h2>
<!-- backwards compatibility -->
<a id="schemafile_id"></a>
<a id="schema_file_id"></a>
<a id="tocSfile_id"></a>
<a id="tocsfile_id"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

Id of the generated report file.

<h2 id="tocS_first_event_date">first_event_date</h2>
<!-- backwards compatibility -->
<a id="schemafirst_event_date"></a>
<a id="schema_first_event_date"></a>
<a id="tocSfirst_event_date"></a>
<a id="tocsfirst_event_date"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date of the first verify event.

<h2 id="tocS_from">from</h2>
<!-- backwards compatibility -->
<a id="schemafrom"></a>
<a id="schema_from"></a>
<a id="tocSfrom"></a>
<a id="tocsfrom"></a>

```json
"441234567890"
```

Request from this number.

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

Search only messages with the specified uuid.

<h2 id="tocS_ids_not_found">ids_not_found</h2>
<!-- backwards compatibility -->
<a id="schemaids_not_found"></a>
<a id="schema_ids_not_found"></a>
<a id="tocSids_not_found"></a>
<a id="tocsids_not_found"></a>

```json
"7b10a0c2-1a05-11eb-bad9-38f9d331649,7b1091b8-1a05-11eb-bad9-38f9d331493"
```

If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.

<h2 id="tocS_in_app_voice_fields">in_app_voice_fields</h2>
<!-- backwards compatibility -->
<a id="schemain_app_voice_fields"></a>
<a id="schema_in_app_voice_fields"></a>
<a id="tocSin_app_voice_fields"></a>
<a id="tocsin_app_voice_fields"></a>

```json
{
  "conversation_id": "CON-abc123",
  "product": "IN-APP-VOICE"
}
```

In App Voice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_id|[call_conversation_id](#schemacall_conversation_id)|false|none|Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_in_app_voice](#schemaproduct_in_app_voice)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_in_app_voice_response_create_report">in_app_voice_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemain_app_voice_response_create_report"></a>
<a id="schema_in_app_voice_response_create_report"></a>
<a id="tocSin_app_voice_response_create_report"></a>
<a id="tocsin_app_voice_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "IN-APP-VOICE",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "conversation_id": "CON-abc123"
}
```

In App Voice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|conversation_id|[call_conversation_id](#schemacall_conversation_id)|false|none|Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_in_app_voice](#schemaproduct_in_app_voice)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_in_app_voice_response_get_report">in_app_voice_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemain_app_voice_response_get_report"></a>
<a id="schema_in_app_voice_response_get_report"></a>
<a id="tocSin_app_voice_response_get_report"></a>
<a id="tocsin_app_voice_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "IN-APP-VOICE",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "conversation_id": "CON-abc123"
}
```

In App Voice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|conversation_id|[call_conversation_id](#schemacall_conversation_id)|false|none|Search only for In App Voive calls attached to this particular Conversation. This should include the "CON-" prefix.|
|product|[product_in_app_voice](#schemaproduct_in_app_voice)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_include_message">include_message</h2>
<!-- backwards compatibility -->
<a id="schemainclude_message"></a>
<a id="schema_include_message"></a>
<a id="tocSinclude_message"></a>
<a id="tocsinclude_message"></a>

```json
"true"
```

Include the text of messages in the report.

<h2 id="tocS_include_subaccounts">include_subaccounts</h2>
<!-- backwards compatibility -->
<a id="schemainclude_subaccounts"></a>
<a id="schema_include_subaccounts"></a>
<a id="tocSinclude_subaccounts"></a>
<a id="tocsinclude_subaccounts"></a>

```json
"false"
```

Whether to include subaccounts or not.

<h2 id="tocS_instance">instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
"f94b4e56604e07e5e5ad5a7228618f81"
```

<h2 id="tocS_ip_voice_leg_id">ip_voice_leg_id</h2>
<!-- backwards compatibility -->
<a id="schemaip_voice_leg_id"></a>
<a id="schema_ip_voice_leg_id"></a>
<a id="tocSip_voice_leg_id"></a>
<a id="tocsip_voice_leg_id"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

Id of the call leg.

<h2 id="tocS_ip_voice_status">ip_voice_status</h2>
<!-- backwards compatibility -->
<a id="schemaip_voice_status"></a>
<a id="schema_ip_voice_status"></a>
<a id="tocSip_voice_status"></a>
<a id="tocsip_voice_status"></a>

```json
"200"
```

Status of the termination of the In-App call.

<h2 id="tocS_items_count">items_count</h2>
<!-- backwards compatibility -->
<a id="schemaitems_count"></a>
<a id="schema_items_count"></a>
<a id="tocSitems_count"></a>
<a id="tocsitems_count"></a>

```json
0
```

The number of rows in the resulting file (when report has been completed).

<h2 id="tocS_json_sms_inbound">json_sms_inbound</h2>
<!-- backwards compatibility -->
<a id="schemajson_sms_inbound"></a>
<a id="schema_json_sms_inbound"></a>
<a id="tocSjson_sms_inbound"></a>
<a id="tocsjson_sms_inbound"></a>

```json
{
  "account_id": "abcdef01",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": {},
  "from": "441234567890",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Inbound SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|object|false|none|none|
|from|[from](#schemafrom)|false|none|Request from this number.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|

<h2 id="tocS_json_sms_inbound_with_body">json_sms_inbound_with_body</h2>
<!-- backwards compatibility -->
<a id="schemajson_sms_inbound_with_body"></a>
<a id="schema_json_sms_inbound_with_body"></a>
<a id="tocSjson_sms_inbound_with_body"></a>
<a id="tocsjson_sms_inbound_with_body"></a>

```json
{
  "account_id": "abcdef01",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": {},
  "from": "441234567890",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "to": "441234567890",
  "total_price": "0.042",
  "message_body": "This is a text message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|object|false|none|none|
|from|[from](#schemafrom)|false|none|Request from this number.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|

<h2 id="tocS_json_sms_outbound">json_sms_outbound</h2>
<!-- backwards compatibility -->
<a id="schemajson_sms_outbound"></a>
<a id="schema_json_sms_outbound"></a>
<a id="tocSjson_sms_outbound"></a>
<a id="tocsjson_sms_outbound"></a>

```json
{
  "account_id": "abcdef01",
  "client_ref": "stringstringstringstringstringstringstri",
  "concatenated": "true",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_finalized": "2019-06-28T15:30:00+0000",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "error_code": "0",
  "error_code_description": "Delivered",
  "from": "441234567890",
  "latency": "42",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "status": "delivered",
  "to": "441234567890",
  "total_price": "0.042"
}
```

Outbound SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|concatenated|[concatenated](#schemaconcatenated)|false|none|Whether the SMS was split up into multiple parts (due to its length).|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_finalized|[date_finalized](#schemadate_finalized)|false|none|Date when the request was finalized.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|error_code|[error_code](#schemaerror_code)|false|none|Error code of the request.|
|error_code_description|[error_code_description](#schemaerror_code_description)|false|none|Description of the error code of the request.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|latency|[latency](#schemalatency)|false|none|Latency of the request in ms.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_json_sms_outbound_with_body">json_sms_outbound_with_body</h2>
<!-- backwards compatibility -->
<a id="schemajson_sms_outbound_with_body"></a>
<a id="schema_json_sms_outbound_with_body"></a>
<a id="tocSjson_sms_outbound_with_body"></a>
<a id="tocsjson_sms_outbound_with_body"></a>

```json
{
  "account_id": "abcdef01",
  "client_ref": "stringstringstringstringstringstringstri",
  "concatenated": "true",
  "country": "FR",
  "country_name": "France",
  "currency": "EUR",
  "date_finalized": "2019-06-28T15:30:00+0000",
  "date_received": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "error_code": "0",
  "error_code_description": "Delivered",
  "from": "441234567890",
  "latency": "42",
  "message_id": "0000000A",
  "network": "23415",
  "network_name": "Vodafone Limited",
  "status": "delivered",
  "to": "441234567890",
  "total_price": "0.042",
  "message_body": "This is a text message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|concatenated|[concatenated](#schemaconcatenated)|false|none|Whether the SMS was split up into multiple parts (due to its length).|
|country|[country](#schemacountry)|false|none|Country where the request was sent.|
|country_name|[country_name](#schemacountry_name)|false|none|Country name where the request was sent.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|date_finalized|[date_finalized](#schemadate_finalized)|false|none|Date when the request was finalized.|
|date_received|[date](#schemadate)|false|none|Date of the request.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|error_code|[error_code](#schemaerror_code)|false|none|Error code of the request.|
|error_code_description|[error_code_description](#schemaerror_code_description)|false|none|Description of the error code of the request.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|latency|[latency](#schemalatency)|false|none|Latency of the request in ms.|
|message_id|[message_id](#schemamessage_id)|false|none|Id of the request.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|network_name|[network_name](#schemanetwork_name)|false|none|Name of the network used to send the request.|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|
|total_price|[price](#schemaprice)|false|none|Price of the request.|
|message_body|[message_body](#schemamessage_body)|false|none|Body of the message sent. Only present if include_message parameter is set to true.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_last_event_date">last_event_date</h2>
<!-- backwards compatibility -->
<a id="schemalast_event_date"></a>
<a id="schema_last_event_date"></a>
<a id="tocSlast_event_date"></a>
<a id="tocslast_event_date"></a>

```json
"2019-06-28T15:30:00+0000"
```

Date of the last verify event.

<h2 id="tocS_latency">latency</h2>
<!-- backwards compatibility -->
<a id="schemalatency"></a>
<a id="schema_latency"></a>
<a id="tocSlatency"></a>
<a id="tocslatency"></a>

```json
"42"
```

Latency of the request in ms.

<h2 id="tocS_locale">locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"en-gb"
```

Locale used for the TTS.

<h2 id="tocS_message_body">message_body</h2>
<!-- backwards compatibility -->
<a id="schemamessage_body"></a>
<a id="schema_message_body"></a>
<a id="tocSmessage_body"></a>
<a id="tocsmessage_body"></a>

```json
"This is a text message"
```

Body of the message sent. Only present if include_message parameter is set to true.

<h2 id="tocS_message_id">message_id</h2>
<!-- backwards compatibility -->
<a id="schemamessage_id"></a>
<a id="schema_message_id"></a>
<a id="tocSmessage_id"></a>
<a id="tocsmessage_id"></a>

```json
"0000000A"
```

Id of the request.

<h2 id="tocS_messages_error_code">messages_error_code</h2>
<!-- backwards compatibility -->
<a id="schemamessages_error_code"></a>
<a id="schema_messages_error_code"></a>
<a id="tocSmessages_error_code"></a>
<a id="tocsmessages_error_code"></a>

```json
"1300"
```

Error code of the message.

<h2 id="tocS_messages_fields">messages_fields</h2>
<!-- backwards compatibility -->
<a id="schemamessages_fields"></a>
<a id="schema_messages_fields"></a>
<a id="tocSmessages_fields"></a>
<a id="tocsmessages_fields"></a>

```json
{
  "direction": "outbound",
  "from": "441234567890",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "include_message": "true",
  "product": "MESSAGES",
  "to": "441234567890"
}
```

Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|id|[id](#schemaid)|false|none|Search only messages with the specified uuid.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|product|[product_messages](#schemaproduct_messages)|true|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_messages_provider">messages_provider</h2>
<!-- backwards compatibility -->
<a id="schemamessages_provider"></a>
<a id="schema_messages_provider"></a>
<a id="tocSmessages_provider"></a>
<a id="tocsmessages_provider"></a>

```json
"whatsapp"
```

Provider of the message.

<h2 id="tocS_messages_response_create_report">messages_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemamessages_response_create_report"></a>
<a id="schema_messages_response_create_report"></a>
<a id="tocSmessages_response_create_report"></a>
<a id="tocsmessages_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "MESSAGES",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "include_message": "true",
  "to": "441234567890"
}
```

Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|id|[id](#schemaid)|false|none|Search only messages with the specified uuid.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|product|[product_messages](#schemaproduct_messages)|true|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_messages_response_get_report">messages_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemamessages_response_get_report"></a>
<a id="schema_messages_response_get_report"></a>
<a id="tocSmessages_response_get_report"></a>
<a id="tocsmessages_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "MESSAGES",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "include_message": "true",
  "to": "441234567890"
}
```

Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|id|[id](#schemaid)|false|none|Search only messages with the specified uuid.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|product|[product_messages](#schemaproduct_messages)|true|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_messages_status">messages_status</h2>
<!-- backwards compatibility -->
<a id="schemamessages_status"></a>
<a id="schema_messages_status"></a>
<a id="tocSmessages_status"></a>
<a id="tocsmessages_status"></a>

```json
"submitted"
```

Status of the message.

<h2 id="tocS_network">network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
"23415"
```

Network used to send the request.

<h2 id="tocS_network_name">network_name</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_name"></a>
<a id="schema_network_name"></a>
<a id="tocSnetwork_name"></a>
<a id="tocsnetwork_name"></a>

```json
"Vodafone Limited"
```

Name of the network used to send the request.

<h2 id="tocS_ni_country">ni_country</h2>
<!-- backwards compatibility -->
<a id="schemani_country"></a>
<a id="schema_ni_country"></a>
<a id="tocSni_country"></a>
<a id="tocsni_country"></a>

```json
"mobile"
```

Country of the looked up number.

<h2 id="tocS_ni_country_name">ni_country_name</h2>
<!-- backwards compatibility -->
<a id="schemani_country_name"></a>
<a id="schema_ni_country_name"></a>
<a id="tocSni_country_name"></a>
<a id="tocsni_country_name"></a>

```json
"mobile"
```

Country name of the looked up number.

<h2 id="tocS_ni_first_name">ni_first_name</h2>
<!-- backwards compatibility -->
<a id="schemani_first_name"></a>
<a id="schema_ni_first_name"></a>
<a id="tocSni_first_name"></a>
<a id="tocsni_first_name"></a>

```json
"valid"
```

First name of the owner of the looked up number.

<h2 id="tocS_ni_last_name">ni_last_name</h2>
<!-- backwards compatibility -->
<a id="schemani_last_name"></a>
<a id="schema_ni_last_name"></a>
<a id="tocSni_last_name"></a>
<a id="tocsni_last_name"></a>

```json
"valid"
```

Last name of the owner of the looked up number.

<h2 id="tocS_ni_network">ni_network</h2>
<!-- backwards compatibility -->
<a id="schemani_network"></a>
<a id="schema_ni_network"></a>
<a id="tocSni_network"></a>
<a id="tocsni_network"></a>

```json
"23415"
```

Network of the looked up number.

<h2 id="tocS_ni_network_name">ni_network_name</h2>
<!-- backwards compatibility -->
<a id="schemani_network_name"></a>
<a id="schema_ni_network_name"></a>
<a id="tocSni_network_name"></a>
<a id="tocsni_network_name"></a>

```json
"Vodafone Limited"
```

Network name of the looked up number.

<h2 id="tocS_ni_network_type">ni_network_type</h2>
<!-- backwards compatibility -->
<a id="schemani_network_type"></a>
<a id="schema_ni_network_type"></a>
<a id="tocSni_network_type"></a>
<a id="tocsni_network_type"></a>

```json
"mobile"
```

Network type of the looked up number.

<h2 id="tocS_ni_number">ni_number</h2>
<!-- backwards compatibility -->
<a id="schemani_number"></a>
<a id="schema_ni_number"></a>
<a id="tocSni_number"></a>
<a id="tocsni_number"></a>

```json
"HLR-LOOKUP"
```

Number looked up for this request.

<h2 id="tocS_ni_ported">ni_ported</h2>
<!-- backwards compatibility -->
<a id="schemani_ported"></a>
<a id="schema_ni_ported"></a>
<a id="tocSni_ported"></a>
<a id="tocsni_ported"></a>

```json
"ported"
```

Is the looked up number ported.

<h2 id="tocS_ni_product_type">ni_product_type</h2>
<!-- backwards compatibility -->
<a id="schemani_product_type"></a>
<a id="schema_ni_product_type"></a>
<a id="tocSni_product_type"></a>
<a id="tocsni_product_type"></a>

```json
"HLR-LOOKUP"
```

Type of Number Insight request.

<h2 id="tocS_ni_reachable">ni_reachable</h2>
<!-- backwards compatibility -->
<a id="schemani_reachable"></a>
<a id="schema_ni_reachable"></a>
<a id="tocSni_reachable"></a>
<a id="tocsni_reachable"></a>

```json
"reachable"
```

Is the looked up number reachable.

<h2 id="tocS_ni_response_code">ni_response_code</h2>
<!-- backwards compatibility -->
<a id="schemani_response_code"></a>
<a id="schema_ni_response_code"></a>
<a id="tocSni_response_code"></a>
<a id="tocsni_response_code"></a>

```json
"0"
```

Response code of the Number Insight request.

<h2 id="tocS_ni_status">ni_status</h2>
<!-- backwards compatibility -->
<a id="schemani_status"></a>
<a id="schema_ni_status"></a>
<a id="tocSni_status"></a>
<a id="tocsni_status"></a>

```json
"Success"
```

Status of the Number Insight request.

<h2 id="tocS_ni_valid">ni_valid</h2>
<!-- backwards compatibility -->
<a id="schemani_valid"></a>
<a id="schema_ni_valid"></a>
<a id="tocSni_valid"></a>
<a id="tocsni_valid"></a>

```json
"valid"
```

Is the looked up number valid.

<h2 id="tocS_number">number</h2>
<!-- backwards compatibility -->
<a id="schemanumber"></a>
<a id="schema_number"></a>
<a id="tocSnumber"></a>
<a id="tocsnumber"></a>

```json
"441234567890"
```

Search only request for the target number.

<h2 id="tocS_number_insight_fields">number_insight_fields</h2>
<!-- backwards compatibility -->
<a id="schemanumber_insight_fields"></a>
<a id="schema_number_insight_fields"></a>
<a id="tocSnumber_insight_fields"></a>
<a id="tocsnumber_insight_fields"></a>

```json
{
  "network": "23415",
  "number": "441234567890",
  "product": "NUMBER-INSIGHT"
}
```

Number Insight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|number|[number](#schemanumber)|false|none|Search only request for the target number.|
|product|[product_ni](#schemaproduct_ni)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_number_insight_response_create_report">number_insight_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemanumber_insight_response_create_report"></a>
<a id="schema_number_insight_response_create_report"></a>
<a id="tocSnumber_insight_response_create_report"></a>
<a id="tocsnumber_insight_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "NUMBER-INSIGHT",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "network": "23415",
  "number": "441234567890"
}
```

Number Insight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|number|[number](#schemanumber)|false|none|Search only request for the target number.|
|product|[product_ni](#schemaproduct_ni)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_number_insight_response_get_report">number_insight_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemanumber_insight_response_get_report"></a>
<a id="schema_number_insight_response_get_report"></a>
<a id="tocSnumber_insight_response_get_report"></a>
<a id="tocsnumber_insight_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "NUMBER-INSIGHT",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "network": "23415",
  "number": "441234567890"
}
```

Number Insight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|number|[number](#schemanumber)|false|none|Search only request for the target number.|
|product|[product_ni](#schemaproduct_ni)|false|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_number_type">number_type</h2>
<!-- backwards compatibility -->
<a id="schemanumber_type"></a>
<a id="schema_number_type"></a>
<a id="tocSnumber_type"></a>
<a id="tocsnumber_type"></a>

```json
"MOBILE"
```

Type of phone number to which requests are sent.

<h2 id="tocS_price">price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
"0.042"
```

Price of the request.

<h2 id="tocS_pricing_model">pricing_model</h2>
<!-- backwards compatibility -->
<a id="schemapricing_model"></a>
<a id="schema_pricing_model"></a>
<a id="tocSpricing_model"></a>
<a id="tocspricing_model"></a>

```json
"0"
```

Pricing model used for this request.

<h2 id="tocS_product">product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
"SMS"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_asr">product_asr</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_asr"></a>
<a id="schema_product_asr"></a>
<a id="tocSproduct_asr"></a>
<a id="tocsproduct_asr"></a>

```json
"ASR"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_conversations">product_conversations</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_conversations"></a>
<a id="schema_product_conversations"></a>
<a id="tocSproduct_conversations"></a>
<a id="tocsproduct_conversations"></a>

```json
"CONVERSATIONS"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_in_app_voice">product_in_app_voice</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_in_app_voice"></a>
<a id="schema_product_in_app_voice"></a>
<a id="tocSproduct_in_app_voice"></a>
<a id="tocsproduct_in_app_voice"></a>

```json
"IN-APP-VOICE"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_messages">product_messages</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_messages"></a>
<a id="schema_product_messages"></a>
<a id="tocSproduct_messages"></a>
<a id="tocsproduct_messages"></a>

```json
"MESSAGES"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_ni">product_ni</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_ni"></a>
<a id="schema_product_ni"></a>
<a id="tocSproduct_ni"></a>
<a id="tocsproduct_ni"></a>

```json
"NUMBER-INSIGHT"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_sms">product_sms</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_sms"></a>
<a id="schema_product_sms"></a>
<a id="tocSproduct_sms"></a>
<a id="tocsproduct_sms"></a>

```json
"SMS"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_verify">product_verify</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_verify"></a>
<a id="schema_product_verify"></a>
<a id="tocSproduct_verify"></a>
<a id="tocsproduct_verify"></a>

```json
"VERIFY-API"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_voice">product_voice</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_voice"></a>
<a id="schema_product_voice"></a>
<a id="tocSproduct_voice"></a>
<a id="tocsproduct_voice"></a>

```json
"VOICE-CALL"
```

Which product you wish to generate a report for.

<h2 id="tocS_product_websocket">product_websocket</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_websocket"></a>
<a id="schema_product_websocket"></a>
<a id="tocSproduct_websocket"></a>
<a id="tocsproduct_websocket"></a>

```json
"WEBSOCKET-CALL"
```

Which product you wish to generate a report for.

<h2 id="tocS_receive_time">receive_time</h2>
<!-- backwards compatibility -->
<a id="schemareceive_time"></a>
<a id="schema_receive_time"></a>
<a id="tocSreceive_time"></a>
<a id="tocsreceive_time"></a>

```json
"2019-06-28T15:30:00+0000"
```

Time at which the report request was received by the service.

<h2 id="tocS_report_request">report_request</h2>
<!-- backwards compatibility -->
<a id="schemareport_request"></a>
<a id="schema_report_request"></a>
<a id="tocSreport_request"></a>
<a id="tocsreport_request"></a>

```json
{
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_report_response">report_response</h2>
<!-- backwards compatibility -->
<a id="schemareport_response"></a>
<a id="schema_report_response"></a>
<a id="tocSreport_response"></a>
<a id="tocsreport_response"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|

<h2 id="tocS_report_response_create_report">report_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemareport_response_create_report"></a>
<a id="schema_report_response_create_report"></a>
<a id="tocSreport_response_create_report"></a>
<a id="tocsreport_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|

<h2 id="tocS_report_response_top_level">report_response_top_level</h2>
<!-- backwards compatibility -->
<a id="schemareport_response_top_level"></a>
<a id="schema_report_response_top_level"></a>
<a id="tocSreport_response_top_level"></a>
<a id="tocsreport_response_top_level"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/records?product=SMS&direction=outbound&date_start=2020-03-05T13%3A00%3A00Z&date_end=2020-03-05T14%0A00%3A00Z&account_id=abcdef01"
    }
  },
  "account_id": "abcdef01",
  "currency": "EUR",
  "ids_not_found": "7b10a0c2-1a05-11eb-bad9-38f9d331649,7b1091b8-1a05-11eb-bad9-38f9d331493",
  "price": "0.042",
  "received_at": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|currency|[currency](#schemacurrency)|false|none|Currency of the price of the request.|
|ids_not_found|[ids_not_found](#schemaids_not_found)|false|none|If you request multiple records using a comma-separated list of UUIDs, then the UUIDs of any records not found are listed in this field.|
|price|[price](#schemaprice)|false|none|Price of the request.|
|received_at|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|

<h2 id="tocS_request_id">request_id</h2>
<!-- backwards compatibility -->
<a id="schemarequest_id"></a>
<a id="schema_request_id"></a>
<a id="tocSrequest_id"></a>
<a id="tocsrequest_id"></a>

```json
"aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
```

UUID of the request.

<h2 id="tocS_request_status">request_status</h2>
<!-- backwards compatibility -->
<a id="schemarequest_status"></a>
<a id="schema_request_status"></a>
<a id="tocSrequest_status"></a>
<a id="tocsrequest_status"></a>

```json
"SUCCESS"
```

Status of the request.

<h2 id="tocS_request_status_create_report">request_status_create_report</h2>
<!-- backwards compatibility -->
<a id="schemarequest_status_create_report"></a>
<a id="schema_request_status_create_report"></a>
<a id="tocSrequest_status_create_report"></a>
<a id="tocsrequest_status_create_report"></a>

```json
"PENDING"
```

Status of the request.

<h2 id="tocS_show_concatenated">show_concatenated</h2>
<!-- backwards compatibility -->
<a id="schemashow_concatenated"></a>
<a id="schema_show_concatenated"></a>
<a id="tocSshow_concatenated"></a>
<a id="tocsshow_concatenated"></a>

```json
"false"
```

Indicates whether the SMS was split up into multiple parts (due to its length).

<h2 id="tocS_sms_event_count">sms_event_count</h2>
<!-- backwards compatibility -->
<a id="schemasms_event_count"></a>
<a id="schema_sms_event_count"></a>
<a id="tocSsms_event_count"></a>
<a id="tocssms_event_count"></a>

```json
"1"
```

Number of sms sent for this verify request.

<h2 id="tocS_sms_fields">sms_fields</h2>
<!-- backwards compatibility -->
<a id="schemasms_fields"></a>
<a id="schema_sms_fields"></a>
<a id="tocSsms_fields"></a>
<a id="tocssms_fields"></a>

```json
{
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "product": "SMS",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_ref|[account_ref](#schemaaccount_ref)|false|none|Search for messages with this `account_ref`.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_sms](#schemaproduct_sms)|true|none|Which product you wish to generate a report for.|
|show_concatenated|[show_concatenated](#schemashow_concatenated)|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_sms_response_create_report">sms_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemasms_response_create_report"></a>
<a id="schema_sms_response_create_report"></a>
<a id="tocSsms_response_create_report"></a>
<a id="tocssms_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|account_ref|[account_ref](#schemaaccount_ref)|false|none|Search for messages with this `account_ref`.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_sms](#schemaproduct_sms)|true|none|Which product you wish to generate a report for.|
|show_concatenated|[show_concatenated](#schemashow_concatenated)|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_sms_response_get_report">sms_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemasms_response_get_report"></a>
<a id="schema_sms_response_get_report"></a>
<a id="tocSsms_response_get_report"></a>
<a id="tocssms_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "SMS",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "account_ref": "stringstringstringstringstringstringstri",
  "client_ref": "stringstringstringstringstringstringstri",
  "direction": "outbound",
  "from": "441234567890",
  "include_message": "true",
  "network": "23415",
  "show_concatenated": "false",
  "status": "delivered",
  "to": "441234567890"
}
```

SMS

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|true|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|true|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|account_ref|[account_ref](#schemaaccount_ref)|false|none|Search for messages with this `account_ref`.|
|client_ref|[client_ref](#schemaclient_ref)|false|none|Search for messages with this `client_ref`.|
|direction|[direction](#schemadirection)|true|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|include_message|[include_message](#schemainclude_message)|false|none|Include the text of messages in the report.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_sms](#schemaproduct_sms)|true|none|Which product you wish to generate a report for.|
|show_concatenated|[show_concatenated](#schemashow_concatenated)|false|none|Indicates whether the SMS was split up into multiple parts (due to its length).|
|status|[sms_status](#schemasms_status)|false|none|Search only for sms with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|delivered|
|status|expired|
|status|failed|
|status|rejected|
|status|accepted|
|status|buffered|
|status|unknown|

<h2 id="tocS_sms_status">sms_status</h2>
<!-- backwards compatibility -->
<a id="schemasms_status"></a>
<a id="schema_sms_status"></a>
<a id="tocSsms_status"></a>
<a id="tocssms_status"></a>

```json
"delivered"
```

Search only for sms with the corresponding status.

<h2 id="tocS_start_time">start_time</h2>
<!-- backwards compatibility -->
<a id="schemastart_time"></a>
<a id="schema_start_time"></a>
<a id="tocSstart_time"></a>
<a id="tocsstart_time"></a>

```json
"2019-06-28T15:30:00+0000"
```

Time at which the report processing of the report has started.

<h2 id="tocS_status">status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"0"
```

Search only for conversation events with the specified event status.

<h2 id="tocS_to">to</h2>
<!-- backwards compatibility -->
<a id="schemato"></a>
<a id="schema_to"></a>
<a id="tocSto"></a>
<a id="tocsto"></a>

```json
"441234567890"
```

Request to this number.

<h2 id="tocS_total_price">total_price</h2>
<!-- backwards compatibility -->
<a id="schematotal_price"></a>
<a id="schema_total_price"></a>
<a id="tocStotal_price"></a>
<a id="tocstotal_price"></a>

```json
"0.042"
```

Total price of the request.

<h2 id="tocS_tts_event_count">tts_event_count</h2>
<!-- backwards compatibility -->
<a id="schematts_event_count"></a>
<a id="schema_tts_event_count"></a>
<a id="tocStts_event_count"></a>
<a id="tocstts_event_count"></a>

```json
"1"
```

Number of tts sent for this verify request.

<h2 id="tocS_verify_api_fields">verify_api_fields</h2>
<!-- backwards compatibility -->
<a id="schemaverify_api_fields"></a>
<a id="schema_verify_api_fields"></a>
<a id="tocSverify_api_fields"></a>
<a id="tocsverify_api_fields"></a>

```json
{
  "network": "23415",
  "product": "VERIFY-API",
  "to": "441234567890"
}
```

Verify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_verify](#schemaproduct_verify)|false|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_verify_api_response_create_report">verify_api_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemaverify_api_response_create_report"></a>
<a id="schema_verify_api_response_create_report"></a>
<a id="tocSverify_api_response_create_report"></a>
<a id="tocsverify_api_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "VERIFY-API",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "network": "23415",
  "to": "441234567890"
}
```

Verify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_verify](#schemaproduct_verify)|false|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_verify_api_response_get_report">verify_api_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemaverify_api_response_get_report"></a>
<a id="schema_verify_api_response_get_report"></a>
<a id="tocSverify_api_response_get_report"></a>
<a id="tocsverify_api_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "VERIFY-API",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "network": "23415",
  "to": "441234567890"
}
```

Verify

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_verify](#schemaproduct_verify)|false|none|Which product you wish to generate a report for.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_verify_status">verify_status</h2>
<!-- backwards compatibility -->
<a id="schemaverify_status"></a>
<a id="schema_verify_status"></a>
<a id="tocSverify_status"></a>
<a id="tocsverify_status"></a>

```json
"SUCCESS"
```

Status of the verify request.

<h2 id="tocS_voice_call_fields">voice_call_fields</h2>
<!-- backwards compatibility -->
<a id="schemavoice_call_fields"></a>
<a id="schema_voice_call_fields"></a>
<a id="tocSvoice_call_fields"></a>
<a id="tocsvoice_call_fields"></a>

```json
{
  "direction": "outbound",
  "from": "441234567890",
  "network": "23415",
  "product": "VOICE-CALL",
  "status": "started",
  "to": "441234567890"
}
```

Voice Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_voice](#schemaproduct_voice)|false|none|Which product you wish to generate a report for.|
|status|[voice_status](#schemavoice_status)|false|none|Search only for voice call with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|answered|
|status|machine|
|status|error|
|status|failed|

<h2 id="tocS_voice_call_response_create_report">voice_call_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemavoice_call_response_create_report"></a>
<a id="schema_voice_call_response_create_report"></a>
<a id="tocSvoice_call_response_create_report"></a>
<a id="tocsvoice_call_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "VOICE-CALL",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "network": "23415",
  "status": "started",
  "to": "441234567890"
}
```

Voice Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_voice](#schemaproduct_voice)|false|none|Which product you wish to generate a report for.|
|status|[voice_status](#schemavoice_status)|false|none|Search only for voice call with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|answered|
|status|machine|
|status|error|
|status|failed|

<h2 id="tocS_voice_call_response_get_report">voice_call_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemavoice_call_response_get_report"></a>
<a id="schema_voice_call_response_get_report"></a>
<a id="tocSvoice_call_response_get_report"></a>
<a id="tocsvoice_call_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "VOICE-CALL",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "direction": "outbound",
  "from": "441234567890",
  "network": "23415",
  "status": "started",
  "to": "441234567890"
}
```

Voice Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|direction|[direction](#schemadirection)|false|none|Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.|
|from|[from](#schemafrom)|false|none|Request from this number.|
|network|[network](#schemanetwork)|false|none|Network used to send the request.|
|product|[product_voice](#schemaproduct_voice)|false|none|Which product you wish to generate a report for.|
|status|[voice_status](#schemavoice_status)|false|none|Search only for voice call with the corresponding status.|
|to|[to](#schemato)|false|none|Request to this number.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|direction|inbound|
|direction|outbound|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|status|answered|
|status|machine|
|status|error|
|status|failed|

<h2 id="tocS_voice_status">voice_status</h2>
<!-- backwards compatibility -->
<a id="schemavoice_status"></a>
<a id="schema_voice_status"></a>
<a id="tocSvoice_status"></a>
<a id="tocsvoice_status"></a>

```json
"started"
```

Search only for voice call with the corresponding status.

<h2 id="tocS_voice_status_description">voice_status_description</h2>
<!-- backwards compatibility -->
<a id="schemavoice_status_description"></a>
<a id="schema_voice_status_description"></a>
<a id="tocSvoice_status_description"></a>
<a id="tocsvoice_status_description"></a>

```json
"The call was successful."
```

Description of the status of the call.

<h2 id="tocS_websocket_call_fields">websocket_call_fields</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket_call_fields"></a>
<a id="schema_websocket_call_fields"></a>
<a id="tocSwebsocket_call_fields"></a>
<a id="tocswebsocket_call_fields"></a>

```json
{
  "product": "WEBSOCKET-CALL",
  "status": 200
}
```

WebSocket Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|[product_websocket](#schemaproduct_websocket)|false|none|Which product you wish to generate a report for.|
|status|[websocket_status](#schemawebsocket_status)|false|none|Search only for WebSocket call with corresponding status.|

#### Enumerated Values

|Property|Value|
|---|---|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_websocket_call_response_create_report">websocket_call_response_create_report</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket_call_response_create_report"></a>
<a id="schema_websocket_call_response_create_report"></a>
<a id="tocSwebsocket_call_response_create_report"></a>
<a id="tocswebsocket_call_response_create_report"></a>

```json
{
  "_links": {
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "product": "WEBSOCKET-CALL",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "PENDING",
  "start_time": "2019-06-28T15:30:00+0000",
  "status": 200
}
```

WebSocket Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links_create_report](#schema_links_create_report)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status_create_report](#schemarequest_status_create_report)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|product|[product_websocket](#schemaproduct_websocket)|false|none|Which product you wish to generate a report for.|
|status|[websocket_status](#schemawebsocket_status)|false|none|Search only for WebSocket call with corresponding status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_websocket_call_response_get_report">websocket_call_response_get_report</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket_call_response_get_report"></a>
<a id="schema_websocket_call_response_get_report"></a>
<a id="tocSwebsocket_call_response_get_report"></a>
<a id="tocswebsocket_call_response_get_report"></a>

```json
{
  "_links": {
    "download_report": {
      "href": "https://api.nexmo.com/v3/media/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    },
    "self": {
      "href": "https://api.nexmo.com/v2/reports/aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
    }
  },
  "account_id": "abcdef01",
  "callback_url": "https://requestb.in/12345",
  "date_end": "2018-01-01T00:00:00+00:00",
  "date_start": "2017-12-01T00:00:00+00:00",
  "include_subaccounts": "false",
  "items_count": 0,
  "product": "WEBSOCKET-CALL",
  "receive_time": "2019-06-28T15:30:00+0000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_status": "SUCCESS",
  "start_time": "2019-06-28T15:30:00+0000",
  "status": 200
}
```

WebSocket Call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[_links](#schema_links)|false|none|none|
|account_id|[account_id](#schemaaccount_id)|false|none|The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.|
|callback_url|[callback_url](#schemacallback_url)|false|none|URL to send a callback upon completion of the report. This POST callback contains the same information as the response to [Get status of report](/api/reports#get-report).|
|date_end|[date_end](#schemadate_end)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when report should end.  It is exclusive, i.e. the provided value is strictly greater than the value in the field `date_received` in the CDR. <br>If unspecified, defaults to the current time.<br>|
|date_start|[date_start](#schemadate_start)|false|none|ISO-8601 extended time zone offset or ISO-8601 UTC zone offset formatted date (format `yyyy-mm-ddThh:mm:ss[.sss]±hh:mm` or `yyyy-mm-ddThh:mm:ss[.sss]Z`) for when reports  should begin. It filters on the time the API call was received by Vonage and corresponds to the field `date_received` (`date_start` for Voice) in the report file. It is inclusive, i.e. the provided value is less than or equal to the value in the field `date_received` (`date_start` for Voice) in the CDR.<br>If unspecified, defaults  to seven days ago.<br>|
|include_subaccounts|[include_subaccounts](#schemainclude_subaccounts)|false|none|Whether to include subaccounts or not.|
|items_count|[items_count](#schemaitems_count)|false|none|The number of rows in the resulting file (when report has been completed).|
|product|[product](#schemaproduct)|false|none|Which product you wish to generate a report for.|
|receive_time|[receive_time](#schemareceive_time)|false|none|Time at which the report request was received by the service.|
|request_id|[request_id](#schemarequest_id)|false|none|UUID of the request.|
|request_status|[request_status](#schemarequest_status)|false|none|Status of the request.|
|start_time|[start_time](#schemastart_time)|false|none|Time at which the report processing of the report has started.|
|product|[product_websocket](#schemaproduct_websocket)|false|none|Which product you wish to generate a report for.|
|status|[websocket_status](#schemawebsocket_status)|false|none|Search only for WebSocket call with corresponding status.|

#### Enumerated Values

|Property|Value|
|---|---|
|include_subaccounts|true|
|include_subaccounts|false|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|
|request_status|PENDING|
|request_status|PROCESSING|
|request_status|SUCCESS|
|request_status|ABORTED|
|request_status|FAILED|
|request_status|TRUNCATED|
|product|SMS|
|product|VOICE-CALL|
|product|IN-APP-VOICE|
|product|WEBSOCKET-CALL|
|product|VERIFY-API|
|product|NUMBER-INSIGHT|
|product|MESSAGES|
|product|CONVERSATIONS|
|product|ASR|

<h2 id="tocS_websocket_status">websocket_status</h2>
<!-- backwards compatibility -->
<a id="schemawebsocket_status"></a>
<a id="schema_websocket_status"></a>
<a id="tocSwebsocket_status"></a>
<a id="tocswebsocket_status"></a>

```json
200
```

Search only for WebSocket call with corresponding status.
