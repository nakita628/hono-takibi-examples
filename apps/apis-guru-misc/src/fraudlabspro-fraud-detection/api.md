<h1 id="fraudlabs-pro-fraud-detection">FraudLabs Pro Fraud Detection v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.

Base URLs:

* <a href="https://api.fraudlabspro.com">https://api.fraudlabspro.com</a> - FraudLabs Pro

* <a href="https://virtserver.swaggerhub.com/fraudlabspro/fraudlabspro/1.0">https://virtserver.swaggerhub.com/fraudlabspro/fraudlabspro/1.0</a> - SwaggerHub API Auto Mocking

<h1 id="fraudlabs-pro-fraud-detection-default">Default</h1>

## post/v1/order/feedback

> Code samples

```bash
curl 'https://example.com/v1/order/feedback?id=string&key=string&action=APPROVE' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/order/feedback`

Feedback the status of an order transaction.

<h3 id="postv1orderfeedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|key|query|string|true|none|
|format|query|string|false|none|
|action|query|string|true|none|
|notes|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|action|APPROVE|
|action|REJECT|
|action|REJECT_BLACKLIST|

> Example responses

> 200 Response

```json
"{\"fraudlabspro_error_code\":\"\",\"fraudlabspro_message\":\"\"}"
```

<h3 id="postv1orderfeedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feedback order response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## post/v1/order/screen

> Code samples

```bash
curl 'https://example.com/v1/order/screen?ip=string&key=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v1/order/screen`

Screen order for payment fraud.

<h3 id="postv1orderscreen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|query|string|true|none|
|key|query|string|true|none|
|format|query|string|false|none|
|last_name|query|string|false|none|
|first_name|query|string|false|none|
|bill_addr|query|string|false|none|
|bill_city|query|string|false|none|
|bill_state|query|string|false|none|
|bill_country|query|string|false|none|
|bill_zip_code|query|string|false|none|
|ship_addr|query|string|false|none|
|ship_city|query|string|false|none|
|ship_state|query|string|false|none|
|ship_country|query|string|false|none|
|ship_zip_code|query|string|false|none|
|email_domain|query|string|false|none|
|user_phone|query|string|false|none|
|email|query|string|false|none|
|email_hash|query|string|false|none|
|username_hash|query|string|false|none|
|password_hash|query|string|false|none|
|bin_no|query|string|false|none|
|card_hash|query|string|false|none|
|avs_result|query|string|false|none|
|cvv_result|query|string|false|none|
|user_order_id|query|string|false|none|
|user_order_memo|query|string|false|none|
|amount|query|number|false|none|
|quantity|query|integer|false|none|
|currency|query|string|false|none|
|department|query|string|false|none|
|payment_mode|query|string|false|none|
|flp_checksum|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
"{\"is_country_match\":\"\",\"is_high_risk_country\":\"\",\"distance_in_km\":\"-\",\"distance_in_mile\":\"-\",\"ip_country\":\"\",\"ip_continent\":\"\",\"ip_region\":\"\",\"ip_city\":\"\",\"ip_latitude\":\"\",\"ip_longitude\":\"\",\"ip_timezone\":\"\",\"ip_elevation\":\"\",\"ip_domain\":\"\",\"ip_mobile_mnc\":\"\",\"ip_mobile_mcc\":\"\",\"ip_mobile_brand\":\"\",\"ip_netspeed\":\"\",\"ip_isp_name\":\"\",\"ip_usage_type\":\"\",\"is_free_email\":\"\",\"is_new_domain_name\":\"\",\"is_domain_exists\":\"\",\"is_proxy_ip_address\":\"\",\"is_bin_found\":\"\",\"is_bin_country_match\":\"\",\"is_bin_name_match\":\"\",\"is_bin_phone_match\":\"\",\"is_bin_prepaid\":\"\",\"is_address_ship_forward\":\"NA\",\"is_bill_ship_city_match\":\"\",\"is_bill_ship_state_match\":\"\",\"is_bill_ship_country_match\":\"\",\"is_bill_ship_postal_match\":\"\",\"is_ship_address_blacklist\":\"\",\"is_phone_blacklist\":\"\",\"is_ip_blacklist\":\"\",\"is_email_blacklist\":\"\",\"is_credit_card_blacklist\":\"\",\"is_device_blacklist\":\"\",\"is_user_blacklist\":\"\",\"is_high_risk_username_password\":\"\",\"is_export_controlled_country\":\"\",\"is_malware_exploit\":\"\",\"user_order_id\":\"\",\"user_order_memo\":\"\",\"fraudlabspro_score\":0,\"fraudlabspro_distribution\":0,\"fraudlabspro_status\":\"\",\"fraudlabspro_id\":\"NA\",\"fraudlabspro_version\":\"1.5.0\",\"fraudlabspro_error_code\":\"\",\"fraudlabspro_message\":\"\",\"fraudlabspro_credits\":\"0\"}"
```

<h3 id="postv1orderscreen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Screen order response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
