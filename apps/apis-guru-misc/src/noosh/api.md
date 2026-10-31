<h1 id="noosh-api-application">Noosh API application v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Full description of Noosh API

Base URLs:

* <a href="http://example.com:80/v1">http://example.com:80/v1</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="noosh-api-application-contact">Contact</h1>

## List Billing Recipients

<a id="opIdgetBillingRecipients"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/billingRecipients \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/billingRecipients`

List Billing Recipients

<h3 id="list-billing-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "address": "sample address",
      "company_name": "sample company_name",
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "primary_phone": "sample primary_phone",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-billing-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ContactsListVO](#schemacontactslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the contacts

<a id="opIdgetContactList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/contacts \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/contacts`

List the contacts

<h3 id="list-the-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "address": "sample address",
      "company_name": "sample company_name",
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "primary_phone": "sample primary_phone",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ContactsListVO](#schemacontactslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Contact Info

<a id="opIdgetContactUserInfo"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/contacts/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/contacts/{user_id}`

Contact Info

<h3 id="contact-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "address": null,
    "company_name": "sample company_name",
    "email": "sample email",
    "fax_number": "sample fax_number",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "locale": "sample locale",
    "middle_name": "sample middle_name",
    "organization": "sample organization",
    "phone_number": "sample phone_number",
    "time_zone": "sample time_zone",
    "title": "sample title",
    "user_id": "1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="contact-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[UserDetailsExpandVO](#schemauserdetailsexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-country">Country</h1>

## List all countries

<a id="opIdgetCountryList"></a>

> Code samples

```bash
curl https://example.com/v1/countries \
  -H 'Accept: application/json'
```

`GET /v1/countries`

List all countries

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "constant_token": "sample constant_token",
      "country": "sample country",
      "country_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-all-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[CountryListVO](#schemacountrylistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-deactivation-reason">Deactivation Reason</h1>

## List all deactivation reasons

<a id="opIdgetDeactivationReasonList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/deactivationReasons \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/deactivationReasons`

List all deactivation reasons

<h3 id="list-all-deactivation-reasons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "deactivation_reason_id": "1",
      "deactivation_reason_name": "sample deactivation_reason_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-all-deactivation-reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[DeactivationReasonListVO](#schemadeactivationreasonlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-estimate">Estimate</h1>

## List the Estimates

<a id="opIdgetEstimateList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/estimates \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/estimates`

List the Estimates

<h3 id="list-the-estimates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "create_date": "1970-01-01",
      "currency": "sample currency",
      "estimate_id": "1",
      "estimate_title": "sample estimate_title",
      "expiration_date": "1970-01-01",
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "rfe": {
        "rfe_due_date": "1970-01-01",
        "rfe_id": "1",
        "rfe_title": "sample rfe_title",
        "status": "sample status"
      },
      "status": "sample status",
      "submit_date": "1970-01-01",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-estimates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[EstimateListExpandVO](#schemaestimatelistexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Estimate

<a id="opIdpostEstimate"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/estimates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comments": "sample comments",
    "description": "sample description",
    "estimate_items": [
      {
        "paper_items": [
          {
            "min_uom_qty": "1",
            "paper_id": "1",
            "price_1": null,
            "price_2": null,
            "price_3": null,
            "price_4": null,
            "price_5": null,
            "price_per_tonne": null,
            "qty_uom": "sample qty_uom",
            "quantity_1": "1",
            "quantity_2": "1",
            "quantity_3": "1",
            "quantity_4": "1",
            "quantity_5": "1",
            "size": "sample size",
            "sku": "sample sku",
            "unit_price_1": null,
            "unit_price_2": null,
            "unit_price_3": null,
            "unit_price_4": null,
            "unit_price_5": null
          }
        ],
        "quantity_1_price": null,
        "quantity_1_shipping": null,
        "quantity_1_tax": null,
        "quantity_2_price": null,
        "quantity_2_shipping": null,
        "quantity_2_tax": null,
        "quantity_3_price": null,
        "quantity_3_shipping": null,
        "quantity_3_tax": null,
        "quantity_4_price": null,
        "quantity_4_shipping": null,
        "quantity_4_tax": null,
        "quantity_5_price": null,
        "quantity_5_shipping": null,
        "quantity_5_tax": null,
        "rfe_item_id": "1"
      }
    ],
    "estimate_title": "sample estimate_title",
    "expiration_date": "1970-01-01",
    "owner_reference": "sample owner_reference",
    "rfe_id": "1"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/estimates`

Create a Estimate

> Body parameter

```json
{
  "comments": "sample comments",
  "description": "sample description",
  "estimate_items": [
    {
      "paper_items": [
        {
          "min_uom_qty": "1",
          "paper_id": "1",
          "price_1": null,
          "price_2": null,
          "price_3": null,
          "price_4": null,
          "price_5": null,
          "price_per_tonne": null,
          "qty_uom": "sample qty_uom",
          "quantity_1": "1",
          "quantity_2": "1",
          "quantity_3": "1",
          "quantity_4": "1",
          "quantity_5": "1",
          "size": "sample size",
          "sku": "sample sku",
          "unit_price_1": null,
          "unit_price_2": null,
          "unit_price_3": null,
          "unit_price_4": null,
          "unit_price_5": null
        }
      ],
      "quantity_1_price": null,
      "quantity_1_shipping": null,
      "quantity_1_tax": null,
      "quantity_2_price": null,
      "quantity_2_shipping": null,
      "quantity_2_tax": null,
      "quantity_3_price": null,
      "quantity_3_shipping": null,
      "quantity_3_tax": null,
      "quantity_4_price": null,
      "quantity_4_shipping": null,
      "quantity_4_tax": null,
      "quantity_5_price": null,
      "quantity_5_shipping": null,
      "quantity_5_tax": null,
      "rfe_item_id": "1"
    }
  ],
  "estimate_title": "sample estimate_title",
  "expiration_date": "1970-01-01",
  "owner_reference": "sample owner_reference",
  "rfe_id": "1"
}
```

<h3 id="create-a-estimate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[EstimatePO](#schemaestimatepo)|false|none|
|» comments|body|string|false|none|
|» description|body|string|false|none|
|» estimate_items|body|[[EstimateItemPO](#schemaestimateitempo)]|false|none|
|» estimate_title|body|string|false|none|
|» expiration_date|body|string(date)|false|none|
|» owner_reference|body|string|false|none|
|» rfe_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "comments": "sample comments",
  "description": "sample description",
  "estimate_items": [
    {
      "paper_items": [
        {
          "min_uom_qty": "1",
          "paper_id": "1",
          "price_1": null,
          "price_2": null,
          "price_3": null,
          "price_4": null,
          "price_5": null,
          "price_per_tonne": null,
          "qty_uom": "sample qty_uom",
          "quantity_1": "1",
          "quantity_2": "1",
          "quantity_3": "1",
          "quantity_4": "1",
          "quantity_5": "1",
          "size": "sample size",
          "sku": "sample sku",
          "unit_price_1": null,
          "unit_price_2": null,
          "unit_price_3": null,
          "unit_price_4": null,
          "unit_price_5": null
        }
      ],
      "quantity_1_price": null,
      "quantity_1_shipping": null,
      "quantity_1_tax": null,
      "quantity_2_price": null,
      "quantity_2_shipping": null,
      "quantity_2_tax": null,
      "quantity_3_price": null,
      "quantity_3_shipping": null,
      "quantity_3_tax": null,
      "quantity_4_price": null,
      "quantity_4_shipping": null,
      "quantity_4_tax": null,
      "quantity_5_price": null,
      "quantity_5_shipping": null,
      "quantity_5_tax": null,
      "rfe_item_id": "1"
    }
  ],
  "estimate_title": "sample estimate_title",
  "expiration_date": "1970-01-01",
  "owner_reference": "sample owner_reference",
  "rfe_id": "1"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-estimate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful create|[EstimatePO](#schemaestimatepo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific estimate of project

<a id="opIdgetEstimate"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/estimates/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/estimates/{estimate_id}`

Get a specific estimate of project

<h3 id="get-a-specific-estimate-of-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|estimate_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "description": "sample description",
    "estimate_id": "1",
    "estimate_title": "sample estimate_title",
    "expiration_date": "1970-01-01",
    "items": [
      {
        "comments": "sample comments",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "estimate_item_id": "1",
        "option_prices": [
          {
            "add_price": null,
            "breakouts": [
              {
                "breakout_id": "1",
                "breakout_name": "sample breakout_name",
                "breakout_pre_markup": null,
                "breakout_price": null,
                "transactional_breakout_pre_markup": null,
                "transactional_breakout_price": null
              }
            ],
            "em_estimate_item_price_id": "1",
            "item_option": {
              "item_option_id": "1",
              "quantity": "sample quantity"
            },
            "price": null,
            "shipping": null,
            "tax": null,
            "total_price": null,
            "transactional_add_price": null,
            "transactional_price": null,
            "transactional_shipping": null,
            "transactional_tax": null,
            "transactional_total_price": null
          }
        ],
        "pc_job_id": "1",
        "spec_name": "sample spec_name",
        "spec_reference": "sample spec_reference",
        "spec_reference_id": "1"
      }
    ],
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "reference_number": "sample reference_number",
    "rfe": {
      "rfe_due_date": "1970-01-01",
      "rfe_id": "1",
      "rfe_title": "sample rfe_title",
      "status": "sample status"
    },
    "status": "sample status",
    "submit_date": "1970-01-01",
    "submitted_by": "sample submitted_by",
    "submitted_by_user_id": "1",
    "supplier_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "transactional_currency": "sample transactional_currency"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-estimate-of-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[EstimateExpandVO](#schemaestimateexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-exchange-rate">Exchange Rate</h1>

## Get Exchange Rate List

<a id="opIdgetExchangeRateList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/exchangeRate \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/exchangeRate`

Get Exchange Rate List

<h3 id="get-exchange-rate-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-exchange-rate-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[MultiExchangeRateListVO](#schemamultiexchangeratelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Exchange Rates

<a id="opIdpostExchangeRate"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/exchangeRate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "exchange_rates": [
      {
        "activate_date": "1970-01-01",
        "buClientWorkgroupId": "1",
        "currency": "sample currency",
        "rate": null,
        "target": "sample target"
      }
    ]
  }'
```

`POST /v1/workgroups/{workgroup_id}/exchangeRate`

Create Exchange Rates

> Body parameter

```json
{
  "exchange_rates": [
    {
      "activate_date": "1970-01-01",
      "buClientWorkgroupId": "1",
      "currency": "sample currency",
      "rate": null,
      "target": "sample target"
    }
  ]
}
```

<h3 id="create-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|body|body|[MultiExchangeRatePersistListVO](#schemamultiexchangeratepersistlistvo)|false|none|
|» exchange_rates|body|[[MultiExchangeRatePersisitVO](#schemamultiexchangeratepersisitvo)]|false|none|

> Example responses

> 200 Response

```json
null
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[HTTPStatus](#schemahttpstatus)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-file">File</h1>

## List Tags from Workgroup and Project.

<a id="opIdgetFileTags"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/fileTags \
  -H 'Accept: application/json'
```

`GET /1.1/workgroups/{workgroup_id}/projects/{project_id}/fileTags`

List Tags from Workgroup and Project.

<h3 id="list-tags-from-workgroup-and-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "isSpec": "false",
      "tagId": "1",
      "tagName": "sample tagName"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-tags-from-workgroup-and-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[FileTagResponseVO](#schemafiletagresponsevo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List Files from Project. Works for Regular and Remote Files

<a id="opIdgetFiles"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/files \
  -H 'Accept: application/json'
```

`GET /1.1/workgroups/{workgroup_id}/projects/{project_id}/files`

List Files from Project.  Works for Regular and Remote Files

<h3 id="list-files-from-project-works-for-regular-and-remote-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "description": "sample description",
    "download_link": "sample download_link",
    "file_id": "1",
    "file_name": "sample file_name",
    "file_size": null,
    "file_type": "sample file_type",
    "is_remote": "false",
    "modified_date": "sample modified_date",
    "tagList": [
      {
        "isSpec": "false",
        "tagId": "1",
        "tagName": "sample tagName"
      }
    ],
    "upload_date": "sample upload_date",
    "uploaded_by": "sample uploaded_by"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-files-from-project-works-for-regular-and-remote-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[FileResponseVO](#schemafileresponsevo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload File to Project. A multipart/form-data request with a name &quot;file&quot;

<a id="opIduploadFile"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/files \
  -X POST \
  -H 'Accept: application/json'
```

`POST /1.1/workgroups/{workgroup_id}/projects/{project_id}/files`

Upload File to Project.  A multipart/form-data request with a name "file"

<h3 id="upload-file-to-project-a-multipartform-data-request-with-a-name-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "description": "sample description",
    "download_link": "sample download_link",
    "file_id": "1",
    "file_name": "sample file_name",
    "file_size": null,
    "file_type": "sample file_type",
    "is_remote": "false",
    "modified_date": "sample modified_date",
    "tagList": [
      {
        "isSpec": "false",
        "tagId": "1",
        "tagName": "sample tagName"
      }
    ],
    "upload_date": "sample upload_date",
    "uploaded_by": "sample uploaded_by"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="upload-file-to-project-a-multipartform-data-request-with-a-name-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[FileResponseVO](#schemafileresponsevo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get File from Project. Works for Regular and Remote Files

<a id="opIdgetFile"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/files/string \
  -H 'Accept: application/json'
```

`GET /1.1/workgroups/{workgroup_id}/projects/{project_id}/files/{file_id}`

Get File from Project.  Works for Regular and Remote Files

<h3 id="get-file-from-project-works-for-regular-and-remote-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|file_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "description": "sample description",
    "download_link": "sample download_link",
    "file_id": "1",
    "file_name": "sample file_name",
    "file_size": null,
    "file_type": "sample file_type",
    "is_remote": "false",
    "modified_date": "sample modified_date",
    "tagList": [
      {
        "isSpec": "false",
        "tagId": "1",
        "tagName": "sample tagName"
      }
    ],
    "upload_date": "sample upload_date",
    "uploaded_by": "sample uploaded_by"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-file-from-project-works-for-regular-and-remote-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[FileResponseVO](#schemafileresponsevo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-invoice">Invoice</h1>

## List invoices by a specific order

<a id="opIdgetInvoices"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/invoices/orders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/orders/{order_id}`

List invoices by a specific order

<h3 id="list-invoices-by-a-specific-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "comments": "sample comments",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "invoice_date": "1970-01-01",
      "invoice_due_date": "1970-01-01",
      "invoice_id": "1",
      "invoice_number": "sample invoice_number",
      "invoice_to": "sample invoice_to",
      "is_final": "1",
      "is_nonBillable": "1",
      "items": [
        {
          "custom_fields": [
            {
              "date_value": "1970-01-01",
              "number_value": null,
              "param_id": "1",
              "param_name": "sample param_name",
              "property_attribute_id": "1",
              "string_value": "sample string_value"
            }
          ],
          "invoice_item_id": "1",
          "item_cost": null,
          "item_quantity": "1",
          "item_shipping": null,
          "item_sub_total": null,
          "item_tax": null,
          "job_id": "1",
          "spec_name": "sample spec_name",
          "transactional_item_cost": null,
          "transactional_item_shipping": null,
          "transactional_item_sub_total": null,
          "transactional_item_tax": null
        }
      ],
      "order_reference": "sample order_reference",
      "order_title": "sample order_title",
      "payment_method": "sample payment_method",
      "prepared_by": "sample prepared_by",
      "project_number": "1",
      "reference_number": "sample reference_number",
      "shipping": null,
      "status": "sample status",
      "sub_total": null,
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_shipping": null,
      "transactional_sub_total": null,
      "transactional_tax": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-invoices-by-a-specific-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[InvoiceDetailListExpandVO](#schemainvoicedetaillistexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List a specific invoice of project Level

<a id="opIdgetInvoice"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/invoices/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}`

List a specific invoice of project Level

<h3 id="list-a-specific-invoice-of-project-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|invoice_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "comments": "sample comments",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "grand_total": null,
    "invoice_date": "1970-01-01",
    "invoice_due_date": "1970-01-01",
    "invoice_id": "1",
    "invoice_number": "sample invoice_number",
    "invoice_to": "sample invoice_to",
    "is_final": "1",
    "is_nonBillable": "1",
    "items": [
      {
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "invoice_item_id": "1",
        "item_cost": null,
        "item_quantity": "1",
        "item_shipping": null,
        "item_sub_total": null,
        "item_tax": null,
        "job_id": "1",
        "shipment_id": "1",
        "spec_name": "sample spec_name",
        "transactional_item_cost": null,
        "transactional_item_shipping": null,
        "transactional_item_sub_total": null,
        "transactional_item_tax": null
      }
    ],
    "order_reference": "sample order_reference",
    "order_title": "sample order_title",
    "payment_method": "sample payment_method",
    "prepared_by": "sample prepared_by",
    "project_number": "1",
    "reference_number": "sample reference_number",
    "shipping": null,
    "status": "sample status",
    "sub_total": null,
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_shipping": null,
    "transactional_sub_total": null,
    "transactional_tax": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-a-specific-invoice-of-project-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[InvoiceExpandVO](#schemainvoiceexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List files of invoice Level

<a id="opIdgetInvoiceFiles"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/invoices/string/files \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}/files`

List files of invoice Level

<h3 id="list-files-of-invoice-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|invoice_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "description": "sample description",
      "download_link": "sample download_link",
      "file_id": "1",
      "file_name": "sample file_name",
      "file_size": null,
      "file_type": "sample file_type",
      "is_remote": "false",
      "modified_date": "sample modified_date",
      "tagList": [
        {
          "isSpec": "false",
          "tagId": "1",
          "tagName": "sample tagName"
        }
      ],
      "upload_date": "sample upload_date",
      "uploaded_by": "sample uploaded_by"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-files-of-invoice-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[FileListResponseVO](#schemafilelistresponsevo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-my-info">My Info</h1>

## List current user's automatic invitations info

<a id="opIdgetAutomaticInvitationList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/automaticInvitations \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/automaticInvitations`

List current user's automatic invitations info 

<h3 id="list-current-users-automatic-invitations-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "automatic_invitation_type_name": "sample automatic_invitation_type_name",
      "team_template": {
        "team_template_id": "1",
        "team_template_name": "sample team_template_name"
      }
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-current-users-automatic-invitations-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[AutomaticInvitationsListVO](#schemaautomaticinvitationslistvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Upload Profile Image. A multipart/form-data request with a name &quot;file&quot;

<a id="opIduploadProfileImage"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/profileImage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"string"'
```

`POST /v1/workgroups/{workgroup_id}/profileImage`

Upload Profile Image.  A multipart/form-data request with a name "file"

<h3 id="upload-profile-image-a-multipartform-data-request-with-a-name-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "profileImgUrl": "sample profileImgUrl",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="upload-profile-image-a-multipartform-data-request-with-a-name-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful|[ProfileImageVO](#schemaprofileimagevo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List current user's team templates info

<a id="opIdgetTeamTemplateList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/teamTemplates \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/teamTemplates`

List current user's team templates info 

<h3 id="list-current-users-team-templates-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "team_template_id": "1",
      "team_template_name": "sample team_template_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-current-users-team-templates-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamTemplateListVO](#schemateamtemplatelistvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get current user's team template detal info

<a id="opIdgetTeamTemplateDetail"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/teamTemplates/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/teamTemplates/{team_template_id}`

Get current user's team template detal info 

<h3 id="get-current-users-team-template-detal-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|team_template_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": {
    "team_teample_item": [
      {
        "role": {
          "role_id": "1",
          "role_name": "sample role_name"
        },
        "user": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        }
      }
    ],
    "team_template_id": "1",
    "team_template_name": "sample team_template_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-current-users-team-template-detal-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamTemplateExpandVO](#schemateamtemplateexpandvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-order">Order</h1>

## List the buy orders of workgroup

<a id="opIdgetBuyOrderListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/buyOrders \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/buyOrders`

List the buy orders of workgroup

<h3 id="list-the-buy-orders-of-workgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-buy-orders-of-workgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderWorkgroupLevelListVO](#schemaorderworkgrouplevellistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific buy order of workgroup

<a id="opIdgetBuyOrderOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/buyOrders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/buyOrders/{order_id}`

Get a specific buy order of workgroup

<h3 id="get-a-specific-buy-order-of-workgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "accepted_date": "1970-01-01",
    "annulled_date": "1970-01-01",
    "approved_date": "1970-01-01",
    "awarded_date": "1970-01-01",
    "budget_type": "sample budget_type",
    "buyer": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "buyer_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "classification": "sample classification",
    "closed_date": "1970-01-01",
    "closing_change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "creator_user_id": "1",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "grand_total": null,
    "grand_total_with_changes": null,
    "item_count": "1",
    "last_activity_date": "1970-01-01",
    "last_changed": "1970-01-01",
    "last_status_change": "1970-01-01",
    "misc_cost": "1.1",
    "order_id": "1",
    "order_items": [
      {
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "item_id": "1",
        "item_price": "1.1",
        "quantity": "1.1",
        "shipping": null,
        "spec": {
          "job_id": "1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        },
        "tax": null,
        "transactional_item_price": "1.1",
        "transactional_shipping": null,
        "transactional_tax": null,
        "transactional_unit_price": null,
        "unit_description": "sample unit_description",
        "unit_price": null
      }
    ],
    "order_number": "sample order_number",
    "order_title": "sample order_title",
    "order_total": null,
    "overs_percent": "1.1",
    "parent_order_id": "1",
    "payment_reference": "sample payment_reference",
    "print_order_ids": [
      "1"
    ],
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "quote_id": "1",
    "shipping": null,
    "status": "sample status",
    "status_comments": "sample status_comments",
    "supplier": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "supplier_reference": "sample supplier_reference",
    "supplier_selection_reason": "sample supplier_selection_reason",
    "supplier_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_grand_total_with_changes": null,
    "transactional_order_total": null,
    "transactional_shipping": null,
    "transactional_tax": null,
    "unders_percent": "1.1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-buy-order-of-workgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderExpandWorkgroupLevelVO](#schemaorderexpandworkgrouplevelvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the buy orders

<a id="opIdgetBuyOrderList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/buyOrders \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders`

List the buy orders

<h3 id="list-the-buy-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-buy-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderListVO](#schemaorderlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a quick buy order

<a id="opIdpostBuyOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/buyOrders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "buyer_user_id": "1",
    "comments": "sample comments",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "invoice_or_billing_recipient": "1",
    "order_completion_date": "1970-01-01",
    "order_items": [
      {
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_name": "sample param_name",
            "string_value": "sample string_value"
          }
        ],
        "ex_tax_value_calculated": null,
        "notes": "sample notes",
        "per": "1",
        "price": null,
        "quantity": null,
        "shipping": null,
        "spec_id": "1",
        "spec_reference_id": "1",
        "tax": "sample tax"
      }
    ],
    "other_selection_reason": "sample other_selection_reason",
    "payment_method_id": "1",
    "payment_reference_no": "sample payment_reference_no",
    "sellOrder": "false",
    "shipping": null,
    "supplier_reference": "sample supplier_reference",
    "supplier_selection_reason_id": "1",
    "supplier_user_id": "1",
    "tax": "sample tax",
    "title": "sample title"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders`

Create a quick buy order

> Body parameter

```json
{
  "buyer_user_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "invoice_or_billing_recipient": "1",
  "order_completion_date": "1970-01-01",
  "order_items": [
    {
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_name": "sample param_name",
          "string_value": "sample string_value"
        }
      ],
      "ex_tax_value_calculated": null,
      "notes": "sample notes",
      "per": "1",
      "price": null,
      "quantity": null,
      "shipping": null,
      "spec_id": "1",
      "spec_reference_id": "1",
      "tax": "sample tax"
    }
  ],
  "other_selection_reason": "sample other_selection_reason",
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "sellOrder": "false",
  "shipping": null,
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason_id": "1",
  "supplier_user_id": "1",
  "tax": "sample tax",
  "title": "sample title"
}
```

<h3 id="create-a-quick-buy-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[OrderPO](#schemaorderpo)|false|none|
|» buyer_user_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» invoice_or_billing_recipient|body|integer(int64)|false|none|
|» order_completion_date|body|string(date)|false|none|
|» order_items|body|[[OrderItemPersistVO](#schemaorderitempersistvo)]|false|none|
|» other_selection_reason|body|string|false|none|
|» payment_method_id|body|integer(int64)|false|none|
|» payment_reference_no|body|string|false|none|
|» sellOrder|body|boolean|false|none|
|» shipping|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|
|» supplier_reference|body|string|false|none|
|» supplier_selection_reason_id|body|integer(int64)|false|none|
|» supplier_user_id|body|integer(int64)|false|none|
|» tax|body|string|false|none|
|» title|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "buyer_user_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "invoice_or_billing_recipient": "1",
  "order_completion_date": "1970-01-01",
  "order_items": [
    {
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_name": "sample param_name",
          "string_value": "sample string_value"
        }
      ],
      "ex_tax_value_calculated": null,
      "notes": "sample notes",
      "per": "1",
      "price": null,
      "quantity": null,
      "shipping": null,
      "spec_id": "1",
      "spec_reference_id": "1",
      "tax": "sample tax"
    }
  ],
  "other_selection_reason": "sample other_selection_reason",
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "sellOrder": "false",
  "shipping": null,
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason_id": "1",
  "supplier_user_id": "1",
  "tax": "sample tax",
  "title": "sample title"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-quick-buy-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[OrderPO](#schemaorderpo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific buy order

<a id="opIdgetBuyOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/buyOrders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders/{order_id}`

Get a specific buy order

<h3 id="get-a-specific-buy-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-buy-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderDetailVO](#schemaorderdetailvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific buy order

<a id="opIdputBuyOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/buyOrders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "sample action",
    "budget_type_field_id": "1",
    "comments": "sample comments",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "order_completion_date": "1970-01-01",
    "order_id": "1",
    "other_selection_reason": "sample other_selection_reason",
    "overs_percent": null,
    "payment_method_id": "1",
    "payment_reference_no": "sample payment_reference_no",
    "reject_reason": "sample reject_reason",
    "supplier_selection_reason_id": "1",
    "unders_percent": null
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}/buyOrders/{order_id}`

Update a specific buy order

> Body parameter

```json
{
  "action": "sample action",
  "budget_type_field_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "order_completion_date": "1970-01-01",
  "order_id": "1",
  "other_selection_reason": "sample other_selection_reason",
  "overs_percent": null,
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "reject_reason": "sample reject_reason",
  "supplier_selection_reason_id": "1",
  "unders_percent": null
}
```

<h3 id="update-a-specific-buy-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|
|body|body|[OrderUpdPersistVO](#schemaorderupdpersistvo)|false|none|
|» action|body|string|false|accept or reject|
|» budget_type_field_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» order_completion_date|body|string(date)|false|none|
|» order_id|body|integer(int64)|false|none|
|» other_selection_reason|body|string|false|none|
|» overs_percent|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|
|» payment_method_id|body|integer(int64)|false|none|
|» payment_reference_no|body|string|false|none|
|» reject_reason|body|string|false|none|
|» supplier_selection_reason_id|body|integer(int64)|false|none|
|» unders_percent|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|

> Example responses

> 200 Response

```json
{
  "order_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-buy-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[OrderVO](#schemaordervo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific buy/sell order

<a id="opIdgetOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/orders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/orders/{order_id}`

Get a specific buy/sell order

<h3 id="get-a-specific-buysell-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "is_sell_order": "false",
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-buysell-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderDetailWithIndicatorVO](#schemaorderdetailwithindicatorvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the sell orders

<a id="opIdgetSellOrderList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/sellOrders \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders`

List the sell orders

<h3 id="list-the-sell-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-sell-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderListVO](#schemaorderlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific sell order

<a id="opIdgetSellOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/sellOrders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders/{order_id}`

Get a specific sell order

<h3 id="get-a-specific-sell-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-sell-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderDetailVO](#schemaorderdetailvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update / Accept or Reject a specific sell order

<a id="opIdputSellOrder"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/sellOrders/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "sample action",
    "budget_type_field_id": "1",
    "comments": "sample comments",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "order_completion_date": "1970-01-01",
    "order_id": "1",
    "other_selection_reason": "sample other_selection_reason",
    "overs_percent": null,
    "payment_method_id": "1",
    "payment_reference_no": "sample payment_reference_no",
    "reject_reason": "sample reject_reason",
    "supplier_selection_reason_id": "1",
    "unders_percent": null
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}/sellOrders/{order_id}`

Update / Accept or Reject a specific sell order

> Body parameter

```json
{
  "action": "sample action",
  "budget_type_field_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "order_completion_date": "1970-01-01",
  "order_id": "1",
  "other_selection_reason": "sample other_selection_reason",
  "overs_percent": null,
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "reject_reason": "sample reject_reason",
  "supplier_selection_reason_id": "1",
  "unders_percent": null
}
```

<h3 id="update-accept-or-reject-a-specific-sell-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|order_id|path|string|true|none|
|body|body|[OrderUpdPersistVO](#schemaorderupdpersistvo)|false|none|
|» action|body|string|false|accept or reject|
|» budget_type_field_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» order_completion_date|body|string(date)|false|none|
|» order_id|body|integer(int64)|false|none|
|» other_selection_reason|body|string|false|none|
|» overs_percent|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|
|» payment_method_id|body|integer(int64)|false|none|
|» payment_reference_no|body|string|false|none|
|» reject_reason|body|string|false|none|
|» supplier_selection_reason_id|body|integer(int64)|false|none|
|» unders_percent|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|

> Example responses

> 200 Response

```json
{
  "order_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-accept-or-reject-a-specific-sell-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[OrderVO](#schemaordervo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the sell orders of workgrop

<a id="opIdgetSellOrderListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/sellOrders \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/sellOrders`

List the sell orders of workgrop

<h3 id="list-the-sell-orders-of-workgrop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-sell-orders-of-workgrop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderWorkgroupLevelListVO](#schemaorderworkgrouplevellistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific sell order

<a id="opIdgetSellOrderOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/sellOrders/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/sellOrders/{order_id}`

Get a specific sell order

<h3 id="get-a-specific-sell-order-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|order_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "accepted_date": "1970-01-01",
    "annulled_date": "1970-01-01",
    "approved_date": "1970-01-01",
    "awarded_date": "1970-01-01",
    "budget_type": "sample budget_type",
    "buyer": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "buyer_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "classification": "sample classification",
    "closed_date": "1970-01-01",
    "closing_change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "creator_user_id": "1",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "grand_total": null,
    "grand_total_with_changes": null,
    "item_count": "1",
    "last_activity_date": "1970-01-01",
    "last_changed": "1970-01-01",
    "last_status_change": "1970-01-01",
    "misc_cost": "1.1",
    "order_id": "1",
    "order_items": [
      {
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "item_id": "1",
        "item_price": "1.1",
        "quantity": "1.1",
        "shipping": null,
        "spec": {
          "job_id": "1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        },
        "tax": null,
        "transactional_item_price": "1.1",
        "transactional_shipping": null,
        "transactional_tax": null,
        "transactional_unit_price": null,
        "unit_description": "sample unit_description",
        "unit_price": null
      }
    ],
    "order_number": "sample order_number",
    "order_title": "sample order_title",
    "order_total": null,
    "overs_percent": "1.1",
    "parent_order_id": "1",
    "payment_reference": "sample payment_reference",
    "print_order_ids": [
      "1"
    ],
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "quote_id": "1",
    "shipping": null,
    "status": "sample status",
    "status_comments": "sample status_comments",
    "supplier": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "supplier_reference": "sample supplier_reference",
    "supplier_selection_reason": "sample supplier_selection_reason",
    "supplier_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_grand_total_with_changes": null,
    "transactional_order_total": null,
    "transactional_shipping": null,
    "transactional_tax": null,
    "unders_percent": "1.1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-sell-order-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[OrderExpandWorkgroupLevelVO](#schemaorderexpandworkgrouplevelvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-project">Project</h1>

## List the projects

<a id="opIdgetProjectList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects`

List the projects

<h3 id="list-the-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "client_account": "sample client_account",
      "client_workgroup_id": "1",
      "completion_date": "1970-01-01",
      "is_active": "false",
      "is_hot": "false",
      "last_spec_update": "1970-01-01",
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number",
      "project_status": "sample project_status"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectListVO](#schemaprojectlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Project

<a id="opIdpostProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_account": "sample client_account",
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "deactivation_reason_id": "1",
    "is_active": "false",
    "is_hot": "false",
    "is_paper_direct": "false",
    "project_category_id": "1",
    "project_description": "sample project_description",
    "project_name": "sample project_name",
    "project_number": "sample project_number",
    "project_owner_user_id": "1",
    "project_status_id": "1"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects`

Create a Project

> Body parameter

```json
{
  "client_account": "sample client_account",
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason_id": "1",
  "is_active": "false",
  "is_hot": "false",
  "is_paper_direct": "false",
  "project_category_id": "1",
  "project_description": "sample project_description",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_owner_user_id": "1",
  "project_status_id": "1"
}
```

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|body|body|[ProjectPersistVO](#schemaprojectpersistvo)|false|none|
|» client_account|body|string|false|none|
|» client_user_id|body|integer(int64)|false|none|
|» client_workgroup_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» completion_date|body|string(date)|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» deactivation_reason_id|body|integer(int64)|false|none|
|» is_active|body|boolean|false|none|
|» is_hot|body|boolean|false|none|
|» is_paper_direct|body|boolean|false|none|
|» project_category_id|body|integer(int64)|false|none|
|» project_description|body|string|false|none|
|» project_name|body|string|false|none|
|» project_number|body|string|false|none|
|» project_owner_user_id|body|integer(int64)|false|none|
|» project_status_id|body|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "project_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[ProjectVO](#schemaprojectvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Project

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}`

Get a specific Project

<h3 id="get-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "category": "sample category",
    "client_account": "sample client_account",
    "client_user": "sample client_user",
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "deactivation_reason": "sample deactivation_reason",
    "is_active": "false",
    "is_hot": "false",
    "last_spec_update": "1970-01-01",
    "mod_date": "1970-01-01",
    "owner_workgroup": "sample owner_workgroup",
    "parent_project": {
      "client_account": "sample client_account",
      "client_user": "sample client_user",
      "client_user_id": "1",
      "client_workgroup_id": "1",
      "comments": "sample comments",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "project_create_date": "1970-01-01",
      "project_description": "sample project_description",
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "project_create_date": "1970-01-01",
    "project_description": "sample project_description",
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number",
    "project_status": "sample project_status",
    "team_owners": "sample team_owners"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectExpandVO](#schemaprojectexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific Project

<a id="opIdputProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_account": "sample client_account",
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "deactivation_reason_id": "1",
    "is_active": "false",
    "is_hot": "false",
    "is_paper_direct": "false",
    "project_category_id": "1",
    "project_description": "sample project_description",
    "project_name": "sample project_name",
    "project_number": "sample project_number",
    "project_owner_user_id": "1",
    "project_status_id": "1"
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}`

Update a specific Project

> Body parameter

```json
{
  "client_account": "sample client_account",
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason_id": "1",
  "is_active": "false",
  "is_hot": "false",
  "is_paper_direct": "false",
  "project_category_id": "1",
  "project_description": "sample project_description",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_owner_user_id": "1",
  "project_status_id": "1"
}
```

<h3 id="update-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[ProjectPersistVO](#schemaprojectpersistvo)|false|none|
|» client_account|body|string|false|none|
|» client_user_id|body|integer(int64)|false|none|
|» client_workgroup_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» completion_date|body|string(date)|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» deactivation_reason_id|body|integer(int64)|false|none|
|» is_active|body|boolean|false|none|
|» is_hot|body|boolean|false|none|
|» is_paper_direct|body|boolean|false|none|
|» project_category_id|body|integer(int64)|false|none|
|» project_description|body|string|false|none|
|» project_name|body|string|false|none|
|» project_number|body|string|false|none|
|» project_owner_user_id|body|integer(int64)|false|none|
|» project_status_id|body|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Archieve a specific Project

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/workgroups/{workgroup_id}/projects/{project_id}`

Archieve a specific Project

<h3 id="archieve-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="archieve-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful archive|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch a specific Project

<a id="opIdpatchProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "deactivation_reason_id": "1",
    "is_active": "false",
    "is_hot": "false",
    "project_category_id": "1",
    "project_description": "sample project_description",
    "project_name": "sample project_name",
    "project_number": "sample project_number",
    "project_status_id": "1"
  }'
```

`PATCH /v1/workgroups/{workgroup_id}/projects/{project_id}`

Patch a specific Project

> Body parameter

```json
{
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason_id": "1",
  "is_active": "false",
  "is_hot": "false",
  "project_category_id": "1",
  "project_description": "sample project_description",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_status_id": "1"
}
```

<h3 id="patch-a-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[ProjectPatchPO](#schemaprojectpatchpo)|false|none|
|» client_user_id|body|integer(int64)|false|none|
|» client_workgroup_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» completion_date|body|string(date)|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» deactivation_reason_id|body|integer(int64)|false|none|
|» is_active|body|boolean|false|none|
|» is_hot|body|boolean|false|none|
|» project_category_id|body|integer(int64)|false|none|
|» project_description|body|string|false|none|
|» project_name|body|string|false|none|
|» project_number|body|string|false|none|
|» project_status_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="patch-a-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful patch|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Attach children projects to specific Project

<a id="opIdattachProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/children \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "childProjectIds": [
      "1"
    ]
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/children`

Attach children projects to specific Project

> Body parameter

```json
{
  "childProjectIds": [
    "1"
  ]
}
```

<h3 id="attach-children-projects-to-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[ProjectIdListVO](#schemaprojectidlistvo)|false|none|
|» childProjectIds|body|[integer(int64)]|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="attach-children-projects-to-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-project-category">Project Category</h1>

## List the project categories of client side

<a id="opIdgetProjectCategoryListOfClient"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/clientWorkgroups/string/projectCategory \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectCategory`

List the project categories of client side

<h3 id="list-the-project-categories-of-client-side-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|client_workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "project_category_id": "1",
      "project_category_name": "sample project_category_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-project-categories-of-client-side-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectCategoryListVO](#schemaprojectcategorylistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the project categories

<a id="opIdgetProjectCategoryList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projectCategory \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projectCategory`

List the project categories

<h3 id="list-the-project-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "project_category_id": "1",
      "project_category_name": "sample project_category_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-project-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectCategoryListVO](#schemaprojectcategorylistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-project-status">Project Status</h1>

## List the project status of client

<a id="opIdgetProjectStatusOfClient"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/clientWorkgroups/string/projectStatus \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectStatus`

List the project status of client

<h3 id="list-the-project-status-of-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|client_workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "project_status_id": "1",
      "project_status_name": "sample project_status_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-project-status-of-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectStatusListVO](#schemaprojectstatuslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the project status

<a id="opIdgetProjectStatus"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projectStatus \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projectStatus`

List the project status

<h3 id="list-the-project-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "project_status_id": "1",
      "project_status_name": "sample project_status_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-project-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectStatusListVO](#schemaprojectstatuslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-quote">Quote</h1>

## List the quotes

<a id="opIdgetQuoteList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/quotes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/quotes`

List the quotes

<h3 id="list-the-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|quote_state_id, use filters={"quote_state_id":111111}|query|string|false|Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "currency": "sample currency",
      "grand_total": null,
      "quote_id": "1",
      "quote_title": "sample quote_title",
      "rfq": {
        "received_date": "1970-01-01",
        "rfq_id": "1",
        "rfq_title": "sample rfq_title",
        "status": "sample status"
      },
      "status": "sample status",
      "submit_date": "1970-01-01",
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[QuoteListVO](#schemaquotelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific quote of project

<a id="opIdgetQuote"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/quotes/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}`

Get a specific quote of project

<h3 id="get-a-specific-quote-of-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|quote_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "client": "sample client",
    "client_user_id": "1",
    "comments": "sample comments",
    "creator_user_id": "1",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "description": "sample description",
    "grand_total": null,
    "is_show_supplier_information": "false",
    "last_update_by_user_id": "1",
    "proposed_order_completion_date": "1970-01-01",
    "quote_expiration_date": "1970-01-01",
    "quote_id": "1",
    "quote_items": [
      {
        "chosen_quantity": null,
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "item_id": "1",
        "item_prices": [
          {
            "breakouts": [
              {
                "breakout_id": "1",
                "breakout_name": "sample breakout_name",
                "breakout_pre_markup": null,
                "breakout_price": null,
                "transactional_breakout_pre_markup": null,
                "transactional_breakout_price": null
              }
            ],
            "cost": null,
            "custom_fields": [
              {
                "date_value": "1970-01-01",
                "number_value": null,
                "param_id": "1",
                "param_name": "sample param_name",
                "property_attribute_id": "1",
                "string_value": "sample string_value"
              }
            ],
            "fixed": null,
            "is_chosen": "false",
            "is_included": "false",
            "is_quoted": "false",
            "parent_price_id": "1",
            "price_id": "1",
            "quantity": null,
            "sell_price": null,
            "shipping": null,
            "source": null,
            "supplier": "sample supplier",
            "tax": null,
            "total": null,
            "transactional_cost": null,
            "transactional_fixed": null,
            "transactional_sell_price": null,
            "transactional_shipping": null,
            "transactional_tax": null,
            "transactional_total": null,
            "transactional_variable": null,
            "variable": null,
            "variable_percent": null
          }
        ],
        "item_shipping_total": null,
        "item_tax_total": null,
        "item_total": null,
        "reason_for_quote_selection": "sample reason_for_quote_selection",
        "show_cost_prices_and_markup": "false",
        "spec": {
          "job_id": "1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        },
        "transactional_item_shipping_total": null,
        "transactional_item_tax_total": null,
        "transactional_item_total": null,
        "vat_code": "sample vat_code",
        "vat_rate": null
      }
    ],
    "quote_items_total": null,
    "quote_title": "sample quote_title",
    "shipping": null,
    "status": "sample status",
    "submit_date": "1970-01-01",
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_quote_items_total": null,
    "transactional_shipping": null,
    "transactional_tax": null,
    "vat_code": "sample vat_code",
    "vat_rate": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-quote-of-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[QuoteExpandVO](#schemaquoteexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Accept / Reject a Quote

<a id="opIdputQuote"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/quotes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "sample action",
    "po_number": "sample po_number",
    "quote_id": "1",
    "state_change_comments": "sample state_change_comments"
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}`

Accept / Reject a Quote

> Body parameter

```json
{
  "action": "sample action",
  "po_number": "sample po_number",
  "quote_id": "1",
  "state_change_comments": "sample state_change_comments"
}
```

<h3 id="accept-reject-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|quote_id|path|string|true|none|
|body|body|[QuotePutPersistVO](#schemaquoteputpersistvo)|false|none|
|» action|body|string|false|none|
|» po_number|body|string|false|none|
|» quote_id|body|integer(int64)|false|none|
|» state_change_comments|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="accept-reject-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the quote states

<a id="opIdgetQuoteStateList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/quoteStates \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/quoteStates`

List the quote states

<h3 id="list-the-quote-states-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "object_state_id": "1",
      "object_state_name": "sample object_state_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-quote-states-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ObjectStateListVO](#schemaobjectstatelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List the quotes of workgroup level

> Code samples

```bash
curl https://example.com/v1/workgroups/string/quotes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/quotes`

List the quotes of workgroup level

<h3 id="list-the-quotes-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|quote_state_id, use filters={"quote_state_id":111111}|query|string|false|Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value|

> Example responses

> 200 Response

```json
{
  "currency": "sample currency",
  "grand_total": null,
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "quote_id": "1",
  "quote_title": "sample quote_title",
  "rfq": {
    "received_date": "1970-01-01",
    "rfq_id": "1",
    "rfq_title": "sample rfq_title",
    "status": "sample status"
  },
  "status": "sample status",
  "submit_date": "1970-01-01",
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-quotes-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[QuoteOfWgLevelSimpleVO](#schemaquoteofwglevelsimplevo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-rfe">RFE</h1>

## List the RFES

<a id="opIdgetRfeList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/rfes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/rfes`

List the RFES

<h3 id="list-the-rfes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "estimate_due_date": "1970-01-01",
      "rfe_id": "1",
      "rfe_items": [
        {
          "rfe_item_id": "1"
        }
      ],
      "rfe_title": "sample rfe_title",
      "supplier_estimates": [
        {
          "supplier_estimates": [
            {
              "estimate_id": "1",
              "estimate_title": "sample estimate_title"
            }
          ],
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        }
      ]
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-rfes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[RfeListVO](#schemarfelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a RFE

<a id="opIdpostRfe"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/rfes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "sample description",
    "details": "sample details",
    "estimate_due_date": "1970-01-01",
    "proposed_order_completion_date": "1970-01-01",
    "rfe_number": "sample rfe_number",
    "rfe_title": "sample rfe_title",
    "specs": [
      {
        "quantity_1": "1",
        "quantity_2": "1",
        "quantity_3": "1",
        "quantity_4": "1",
        "quantity_5": "1",
        "spec_id": "1"
      }
    ],
    "supplier_user_ids": [
      "1"
    ]
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/rfes`

Create a RFE

> Body parameter

```json
{
  "description": "sample description",
  "details": "sample details",
  "estimate_due_date": "1970-01-01",
  "proposed_order_completion_date": "1970-01-01",
  "rfe_number": "sample rfe_number",
  "rfe_title": "sample rfe_title",
  "specs": [
    {
      "quantity_1": "1",
      "quantity_2": "1",
      "quantity_3": "1",
      "quantity_4": "1",
      "quantity_5": "1",
      "spec_id": "1"
    }
  ],
  "supplier_user_ids": [
    "1"
  ]
}
```

<h3 id="create-a-rfe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[RfePO](#schemarfepo)|false|none|
|» description|body|string|false|none|
|» details|body|string|false|none|
|» estimate_due_date|body|string(date)|false|none|
|» proposed_order_completion_date|body|string(date)|false|none|
|» rfe_number|body|string|false|none|
|» rfe_title|body|string|false|none|
|» specs|body|[[RfeSpecPO](#schemarfespecpo)]|false|none|
|» supplier_user_ids|body|[integer(int64)]|false|none|

> Example responses

> 200 Response

```json
{
  "rfq_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-rfe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful update|[RfqVO](#schemarfqvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Rfe

<a id="opIdgetRfe"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/rfes/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/rfes/{rfe_id}`

Get a specific Rfe

<h3 id="get-a-specific-rfe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|rfe_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "description": "sample description",
    "details": "sample details",
    "estimate_due_date": "1970-01-01",
    "estimators": [
      "sample estimators"
    ],
    "itemized_tax_and_shipping": "1",
    "proposed_order_completion_date": "1970-01-01",
    "reference_number": "sample reference_number",
    "requestor": "sample requestor",
    "rfe_id": "1",
    "rfe_items": [
      {
        "job_id": "1",
        "rfe_item_id": "1",
        "rfe_item_options": [
          {
            "item_option_id": "1",
            "quantity": null,
            "quantity_index": "1"
          }
        ],
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    ],
    "status": "sample status",
    "submitted_date": "1970-01-01",
    "supplier_estimates": [
      {
        "supplier_estimates": [
          {
            "estimate_id": "1",
            "estimate_title": "sample estimate_title"
          }
        ],
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "title": "sample title"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-rfe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[RfeExpandVO](#schemarfeexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-rfq">Rfq</h1>

## List the rfqs

<a id="opIdgetRfqList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/rfqs \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/rfqs`

List the rfqs

<h3 id="list-the-rfqs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "quotes": [
        {
          "currency": "sample currency",
          "grand_total": null,
          "quote_id": "1",
          "quote_title": "sample quote_title",
          "status": "sample status",
          "submit_date": "1970-01-01",
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "received_date": "1970-01-01",
      "rfq_id": "1",
      "rfq_title": "sample rfq_title",
      "status": "sample status"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-rfqs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[RfqListVO](#schemarfqlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Rfq

<a id="opIdgetRfq"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/rfqs/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/rfqs/{rfq_id}`

Get a specific Rfq

<h3 id="get-a-specific-rfq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|rfq_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "comments": "sample comments",
    "description": "sample description",
    "proposed_completion_date": "1970-01-01",
    "quote_due_date": "1970-01-01",
    "quotes": [
      {
        "currency": "sample currency",
        "grand_total": null,
        "quote_id": "1",
        "quote_title": "sample quote_title",
        "status": "sample status",
        "submit_date": "1970-01-01",
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null
      }
    ],
    "received_date": "1970-01-01",
    "recipient_name": "sample recipient_name",
    "requestor_name": "sample requestor_name",
    "rfq_id": "1",
    "rfq_items": [
      {
        "job_id": "1",
        "rfq_item_id": "1",
        "spec": {
          "is_active": "1",
          "is_template": "1",
          "quantity_1": "1.1",
          "quantity_2": "1.1",
          "quantity_3": "1.1",
          "quantity_4": "1.1",
          "quantity_5": "1.1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        }
      }
    ],
    "rfq_title": "sample rfq_title",
    "status": "sample status"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-rfq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[RfqExpandVO](#schemarfqexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-shipment">Shipment</h1>

## List shipments of project

<a id="opIdgetShipmentList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/shipments \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/shipments`

List shipments of project

<h3 id="list-shipments-of-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "locations_count": "1",
      "qty_received": "1",
      "qty_requested": "1",
      "qty_shipped": "1",
      "received_date": "1970-01-01",
      "shipment_id": "1",
      "shipment_status": "sample shipment_status",
      "shipped_date": "1970-01-01",
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-shipments-of-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ShipmentListVO](#schemashipmentlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a shipment

<a id="opIdpostShipment"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/shipments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address_line1": "sample address_line1",
    "address_line2": "sample address_line2",
    "address_line3": "sample address_line3",
    "batch_label": "sample batch_label",
    "city": "sample city",
    "company_name": "sample company_name",
    "country_iso_code": "sample country_iso_code",
    "delivery_date": "1970-01-01",
    "description_or_title": "sample description_or_title",
    "email": "sample email",
    "first_name": "sample first_name",
    "inner_carton_label": "sample inner_carton_label",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "outer_carton_label": "sample outer_carton_label",
    "pallet_lablel": "sample pallet_lablel",
    "poof_type": "sample poof_type",
    "postal_code": "sample postal_code",
    "request_type": "sample request_type",
    "requested_quantity": "1",
    "shipment_custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "shipment_request_custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "shipping_carrier": "sample shipping_carrier",
    "shipping_instruction": "sample shipping_instruction",
    "shpping_method": "sample shpping_method",
    "spec_ids": "sample spec_ids",
    "state": "sample state",
    "work_phone_number": "sample work_phone_number",
    "workgroup_name": "sample workgroup_name"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/shipments`

Create a shipment

> Body parameter

```json
{
  "address_line1": "sample address_line1",
  "address_line2": "sample address_line2",
  "address_line3": "sample address_line3",
  "batch_label": "sample batch_label",
  "city": "sample city",
  "company_name": "sample company_name",
  "country_iso_code": "sample country_iso_code",
  "delivery_date": "1970-01-01",
  "description_or_title": "sample description_or_title",
  "email": "sample email",
  "first_name": "sample first_name",
  "inner_carton_label": "sample inner_carton_label",
  "last_name": "sample last_name",
  "middle_name": "sample middle_name",
  "outer_carton_label": "sample outer_carton_label",
  "pallet_lablel": "sample pallet_lablel",
  "poof_type": "sample poof_type",
  "postal_code": "sample postal_code",
  "request_type": "sample request_type",
  "requested_quantity": "1",
  "shipment_custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "shipment_request_custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "shipping_carrier": "sample shipping_carrier",
  "shipping_instruction": "sample shipping_instruction",
  "shpping_method": "sample shpping_method",
  "spec_ids": "sample spec_ids",
  "state": "sample state",
  "work_phone_number": "sample work_phone_number",
  "workgroup_name": "sample workgroup_name"
}
```

<h3 id="create-a-shipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[ShipmentLocationPostPersistVO](#schemashipmentlocationpostpersistvo)|false|none|
|» address_line1|body|string|false|none|
|» address_line2|body|string|false|none|
|» address_line3|body|string|false|none|
|» batch_label|body|string|false|none|
|» city|body|string|false|none|
|» company_name|body|string|false|none|
|» country_iso_code|body|string|false|none|
|» delivery_date|body|string(date)|false|none|
|» description_or_title|body|string|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» inner_carton_label|body|string|false|none|
|» last_name|body|string|false|none|
|» middle_name|body|string|false|none|
|» outer_carton_label|body|string|false|none|
|» pallet_lablel|body|string|false|none|
|» poof_type|body|string|false|none|
|» postal_code|body|string|false|none|
|» request_type|body|string|false|none|
|» requested_quantity|body|integer(int64)|false|none|
|» shipment_custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» shipment_request_custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» shipping_carrier|body|string|false|none|
|» shipping_instruction|body|string|false|none|
|» shpping_method|body|string|false|none|
|» spec_ids|body|string|false|none|
|» state|body|string|false|none|
|» work_phone_number|body|string|false|none|
|» workgroup_name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "location_id": "1",
      "shipment_id": "1",
      "spec_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-shipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[ShipmentLocationsPOSTResultVO](#schemashipmentlocationspostresultvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific shipment.

<a id="opIdgetShipment"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/shipments/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/shipments/{shipment_id}`

Get a specific shipment.

<h3 id="get-a-specific-shipment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|shipment_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "locations": [
      {
        "city": "sample city",
        "company_name": "sample company_name",
        "country": "sample country",
        "country_code": "sample country_code",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "description_or_title": "sample description_or_title",
        "due_date": "1970-01-01",
        "email": "sample email",
        "first_name": "sample first_name",
        "is_use_spec_packaging": "false",
        "last_name": "sample last_name",
        "line_1": "sample line_1",
        "line_2": "sample line_2",
        "line_3": "sample line_3",
        "location_id": "1",
        "middle_name": "sample middle_name",
        "postal": "sample postal",
        "proof_type": "sample proof_type",
        "qty_received": "1",
        "qty_requested": "1",
        "qty_shipped": "1",
        "received_comments": "sample received_comments",
        "received_date": "1970-01-01",
        "requested_shipping_carrier": "sample requested_shipping_carrier",
        "requested_shipping_method": "sample requested_shipping_method",
        "shipped_comments": "sample shipped_comments",
        "shipped_date": "1970-01-01",
        "shipped_in_units": "1",
        "shipped_in_uofm": "sample shipped_in_uofm",
        "shipped_shipping_carrier": "sample shipped_shipping_carrier",
        "shipped_shipping_method": "sample shipped_shipping_method",
        "shipping_cost": null,
        "shipping_instruction": "sample shipping_instruction",
        "state": "sample state",
        "tax": null,
        "tracking_number": "sample tracking_number",
        "type": "sample type",
        "weight": null,
        "weight_uofm": "sample weight_uofm",
        "work_phone_number": "sample work_phone_number",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "locations_count": "1",
    "qty_received": "1",
    "qty_requested": "1",
    "qty_shipped": "1",
    "received_date": "1970-01-01",
    "shipment_id": "1",
    "shipment_status": "sample shipment_status",
    "shipped_date": "1970-01-01",
    "spec": {
      "job_id": "1",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  },
  "resut": {
    "locations": [
      {
        "city": "sample city",
        "company_name": "sample company_name",
        "country": "sample country",
        "country_code": "sample country_code",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "description_or_title": "sample description_or_title",
        "due_date": "1970-01-01",
        "email": "sample email",
        "first_name": "sample first_name",
        "is_use_spec_packaging": "false",
        "last_name": "sample last_name",
        "line_1": "sample line_1",
        "line_2": "sample line_2",
        "line_3": "sample line_3",
        "location_id": "1",
        "middle_name": "sample middle_name",
        "postal": "sample postal",
        "proof_type": "sample proof_type",
        "qty_received": "1",
        "qty_requested": "1",
        "qty_shipped": "1",
        "received_comments": "sample received_comments",
        "received_date": "1970-01-01",
        "requested_shipping_carrier": "sample requested_shipping_carrier",
        "requested_shipping_method": "sample requested_shipping_method",
        "shipped_comments": "sample shipped_comments",
        "shipped_date": "1970-01-01",
        "shipped_in_units": "1",
        "shipped_in_uofm": "sample shipped_in_uofm",
        "shipped_shipping_carrier": "sample shipped_shipping_carrier",
        "shipped_shipping_method": "sample shipped_shipping_method",
        "shipping_cost": null,
        "shipping_instruction": "sample shipping_instruction",
        "state": "sample state",
        "tax": null,
        "tracking_number": "sample tracking_number",
        "type": "sample type",
        "weight": null,
        "weight_uofm": "sample weight_uofm",
        "work_phone_number": "sample work_phone_number",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "locations_count": "1",
    "qty_received": "1",
    "qty_requested": "1",
    "qty_shipped": "1",
    "received_date": "1970-01-01",
    "shipment_id": "1",
    "shipment_status": "sample shipment_status",
    "shipped_date": "1970-01-01",
    "spec": {
      "job_id": "1",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-shipment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ShipmentExpandVO](#schemashipmentexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific shipment location

<a id="opIdputShipmentLocation"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/shipments/string/locations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "due_date": "1970-01-01",
    "qty_received": "1",
    "qty_requested": "1",
    "qty_shipped": "1",
    "received_date": "1970-01-01",
    "shipped_date": "1970-01-01",
    "shipping_cost": null,
    "type": "sample type"
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}/shipments/{shipment_id}/locations/{location_id}`

Update a specific shipment location

> Body parameter

```json
{
  "due_date": "1970-01-01",
  "qty_received": "1",
  "qty_requested": "1",
  "qty_shipped": "1",
  "received_date": "1970-01-01",
  "shipped_date": "1970-01-01",
  "shipping_cost": null,
  "type": "sample type"
}
```

<h3 id="update-a-specific-shipment-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|shipment_id|path|string|true|none|
|location_id|path|string|true|none|
|body|body|[ShipmentLocationPersistVO](#schemashipmentlocationpersistvo)|false|none|
|» due_date|body|string(date)|false|none|
|» qty_received|body|integer(int64)|false|none|
|» qty_requested|body|integer(int64)|false|none|
|» qty_shipped|body|integer(int64)|false|none|
|» received_date|body|string(date)|false|none|
|» shipped_date|body|string(date)|false|none|
|» shipping_cost|body|[BigDecimal](#schemabigdecimal)|false|Java type: java.math.BigDecimal|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-shipment-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update successfully|[HTTPStatusVO](#schemahttpstatusvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-spec">Spec</h1>

## List a specific spec of project Level

<a id="opIdgetSpec"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/specs/string \
  -H 'Accept: application/json'
```

`GET /1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}`

List a specific spec of project Level

<h3 id="list-a-specific-spec-of-project-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|spec_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "client_status": "sample client_status",
    "create_date": "1970-01-01",
    "created_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "first_level_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "header_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "job_id": "1",
    "last_updated": "1970-01-01",
    "product_type": "sample product_type",
    "product_type_info": {
      "label": "sample label",
      "product_type_id": "1"
    },
    "quantity_1": "1",
    "quantity_2": "1",
    "quantity_3": "1",
    "quantity_4": "1",
    "quantity_5": "1",
    "reference_number": "sample reference_number",
    "second_level_custom_fields": [
      {
        "property_attributes": [
          {
            "attribute_id": "1",
            "attribute_value": null,
            "label": "sample label",
            "param_id": "1",
            "param_name": "sample param_name"
          }
        ],
        "property_id": "1",
        "property_name": "sample property_name"
      }
    ],
    "sku": "sample sku",
    "spec_id": "1",
    "spec_name": "sample spec_name",
    "spec_options": [
      {
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    ],
    "spec_options_complete": [
      {
        "client_status": "sample client_status",
        "create_date": "1970-01-01",
        "created_by": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name"
        },
        "job_id": "1",
        "last_updated": "1970-01-01",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name",
        "spec_options_complete": [
          {}
        ],
        "supplier_status": "sample supplier_status",
        "uofms": [
          {
            "is_default": "false",
            "uofm_id": "1",
            "uofm_name": "sample uofm_name"
          }
        ],
        "user_state": "sample user_state"
      }
    ],
    "spec_original": {
      "spec_id": "1",
      "spec_name": "sample spec_name"
    },
    "spec_type": {
      "spec_type_id": "1",
      "spec_type_name": "sample spec_type_name"
    },
    "supplier_status": "sample supplier_status",
    "uofms": [
      {
        "is_default": "false",
        "uofm_id": "1",
        "uofm_name": "sample uofm_name"
      }
    ],
    "user_state": "sample user_state"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-a-specific-spec-of-project-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[V1x1SpecExpandVO](#schemav1x1specexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific Spec

<a id="opIdputSpec"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/specs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "first_level_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "header_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "product_type_id": "1",
    "quantity_1": "1",
    "quantity_2": "1",
    "quantity_3": "1",
    "quantity_4": "1",
    "quantity_5": "1",
    "second_level_custom_fields": [
      {
        "property_attributes": [
          {
            "attribute_id": "1",
            "attribute_value": null,
            "label": "sample label",
            "param_id": "1",
            "param_name": "sample param_name"
          }
        ],
        "property_id": "1",
        "property_name": "sample property_name"
      }
    ],
    "sku": "sample sku",
    "spec_name": "sample spec_name",
    "spec_type_id": "1",
    "versions": [
      {
        "description": "sample description",
        "qty": "1"
      }
    ]
  }'
```

`PUT /1.1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}`

Update a specific Spec

> Body parameter

```json
{
  "first_level_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "header_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "second_level_custom_fields": [
    {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    }
  ],
  "sku": "sample sku",
  "spec_name": "sample spec_name",
  "spec_type_id": "1",
  "versions": [
    {
      "description": "sample description",
      "qty": "1"
    }
  ]
}
```

<h3 id="update-a-specific-spec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|spec_id|path|string|true|none|
|body|body|[V1X1SpecUpdatingPO](#schemav1x1specupdatingpo)|false|none|
|» first_level_custom_fields|body|[V1x1ProperyPO](#schemav1x1properypo)|false|Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO|
|» header_custom_fields|body|[V1x1ProperyPO](#schemav1x1properypo)|false|Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO|
|» product_type_id|body|integer(int64)|false|none|
|» quantity_1|body|integer(int64)|false|none|
|» quantity_2|body|integer(int64)|false|none|
|» quantity_3|body|integer(int64)|false|none|
|» quantity_4|body|integer(int64)|false|none|
|» quantity_5|body|integer(int64)|false|none|
|» second_level_custom_fields|body|[[V1x1ProperyPO](#schemav1x1properypo)]|false|none|
|» sku|body|string|false|none|
|» spec_name|body|string|false|none|
|» spec_type_id|body|integer(int64)|false|none|
|» versions|body|[[SpecVersionPersistVO](#schemaspecversionpersistvo)]|false|none|

> Example responses

> 200 Response

```json
{
  "spec_id": "1",
  "spec_name": "sample spec_name",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-spec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[SpecHTTPStatusVO](#schemaspechttpstatusvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Spec Type Fields

<a id="opIdgetSpecTypeFields"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/specTypes/string/specTypeFields \
  -H 'Accept: application/json'
```

`GET /1.1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields`

Get Spec Type Fields

<h3 id="get-spec-type-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|spec_type_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": null,
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-spec-type-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SpecTypeFieldsListVO](#schemaspectypefieldslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get product type of workgroup level

<a id="opIdgetProductTypeListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/productTypes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/productTypes`

Get product type of workgroup level

<h3 id="get-product-type-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "is_checked": "false",
      "label": "sample label",
      "product_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-product-type-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WorkgroupAttributeListVO](#schemaworkgroupattributelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get product type of spec level by workgroupId

<a id="opIdgetSpecProductTypeListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/productTypesOfSpecTypes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/productTypesOfSpecTypes`

Get product type of spec level by workgroupId

<h3 id="get-product-type-of-spec-level-by-workgroupid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "is_checked": "false",
      "label": "sample label",
      "product_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-product-type-of-spec-level-by-workgroupid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WorkgroupAttributeListVO](#schemaworkgroupattributelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Register product types for spec types

<a id="opIdpostSpecProductTypeListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/productTypesOfSpecTypes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "enableDifferentiatePrdTypePreference": "false",
    "spec_prdType_list": [
      {
        "prdType_labels": [
          "sample prdType_labels"
        ],
        "spec_type_id": "1"
      }
    ]
  }'
```

`POST /v1/workgroups/{workgroup_id}/productTypesOfSpecTypes`

Register product types for spec types

> Body parameter

```json
{
  "enableDifferentiatePrdTypePreference": "false",
  "spec_prdType_list": [
    {
      "prdType_labels": [
        "sample prdType_labels"
      ],
      "spec_type_id": "1"
    }
  ]
}
```

<h3 id="register-product-types-for-spec-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|body|body|[WgSpecPrdTypeRegPersistVO](#schemawgspecprdtyperegpersistvo)|false|none|
|» enableDifferentiatePrdTypePreference|body|boolean|false|none|
|» spec_prdType_list|body|[[SpecTypePersistVO](#schemaspectypepersistvo)]|false|none|

> Example responses

> 200 Response

```json
{
  "enableDifferentiatePrdTypePreference": "false",
  "spec_prdType_list": [
    {
      "prdType_labels": [
        "sample prdType_labels"
      ],
      "spec_type_id": "1"
    }
  ]
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="register-product-types-for-spec-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[WgSpecPrdTypeRegPersistVO](#schemawgspecprdtyperegpersistvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List specs of project Level

<a id="opIdgetSpecList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/specs \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/specs`

List specs of project Level

<h3 id="list-specs-of-project-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "client_status": "sample client_status",
      "create_date": "1970-01-01",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "job_id": "1",
      "last_updated": "1970-01-01",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name",
      "spec_options_complete": [
        {}
      ],
      "supplier_status": "sample supplier_status",
      "uofms": [
        {
          "is_default": "false",
          "uofm_id": "1",
          "uofm_name": "sample uofm_name"
        }
      ],
      "user_state": "sample user_state"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-specs-of-project-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SpecListVO](#schemaspeclistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Spec

<a id="opIdpostSpec"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/specs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "jsonBody": "false",
    "product_type_id": "1",
    "quantity_1": "1",
    "quantity_2": "1",
    "quantity_3": "1",
    "quantity_4": "1",
    "quantity_5": "1",
    "sku": "sample sku",
    "spec_name": "sample spec_name",
    "spec_template_id": "1",
    "spec_type_id": "1",
    "versions": [
      {
        "description": "sample description",
        "qty": "1"
      }
    ]
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/specs`

Create a Spec

> Body parameter

```json
{
  "jsonBody": "false",
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "sku": "sample sku",
  "spec_name": "sample spec_name",
  "spec_template_id": "1",
  "spec_type_id": "1",
  "versions": [
    {
      "description": "sample description",
      "qty": "1"
    }
  ]
}
```

<h3 id="create-a-spec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[SpecPersistVO](#schemaspecpersistvo)|false|none|
|» jsonBody|body|boolean|false|none|
|» product_type_id|body|integer(int64)|false|none|
|» quantity_1|body|integer(int64)|false|none|
|» quantity_2|body|integer(int64)|false|none|
|» quantity_3|body|integer(int64)|false|none|
|» quantity_4|body|integer(int64)|false|none|
|» quantity_5|body|integer(int64)|false|none|
|» sku|body|string|false|none|
|» spec_name|body|string|false|none|
|» spec_template_id|body|integer(int64)|false|none|
|» spec_type_id|body|integer(int64)|false|none|
|» versions|body|[[SpecVersionPersistVO](#schemaspecversionpersistvo)]|false|none|

> Example responses

> 200 Response

```json
{
  "spec_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-spec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[SpecVO](#schemaspecvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List a specific spec of project Level

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/specs/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}`

List a specific spec of project Level

<h3 id="list-a-specific-spec-of-project-level-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|spec_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "client_status": "sample client_status",
      "create_date": "1970-01-01",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "job_id": "1",
      "last_updated": "1970-01-01",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name",
      "spec_options_complete": [
        {}
      ],
      "supplier_status": "sample supplier_status",
      "uofms": [
        {
          "is_default": "false",
          "uofm_id": "1",
          "uofm_name": "sample uofm_name"
        }
      ],
      "user_state": "sample user_state"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-a-specific-spec-of-project-level-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SpecListVO](#schemaspeclistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific Spec

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/specs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "inks_and_paper": [
      {
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_name": "sample param_name",
            "string_value": "sample string_value"
          }
        ],
        "paper_id": "1"
      }
    ],
    "product_type_id": "1",
    "quantity_1": "1",
    "quantity_2": "1",
    "quantity_3": "1",
    "quantity_4": "1",
    "quantity_5": "1",
    "sku": "sample sku",
    "spec_name": "sample spec_name"
  }'
```

`PUT /v1/workgroups/{workgroup_id}/projects/{project_id}/specs/{spec_id}`

Update a specific Spec

> Body parameter

```json
{
  "inks_and_paper": [
    {
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_name": "sample param_name",
          "string_value": "sample string_value"
        }
      ],
      "paper_id": "1"
    }
  ],
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "sku": "sample sku",
  "spec_name": "sample spec_name"
}
```

<h3 id="update-a-specific-spec-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|spec_id|path|string|true|none|
|body|body|[SpecUpdatePersistVO](#schemaspecupdatepersistvo)|false|none|
|» inks_and_paper|body|[[PropertyPersistVO](#schemapropertypersistvo)]|false|none|
|» product_type_id|body|integer(int64)|false|none|
|» quantity_1|body|integer(int64)|false|none|
|» quantity_2|body|integer(int64)|false|none|
|» quantity_3|body|integer(int64)|false|none|
|» quantity_4|body|integer(int64)|false|none|
|» quantity_5|body|integer(int64)|false|none|
|» sku|body|string|false|none|
|» spec_name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "spec_id": "1",
  "spec_name": "sample spec_name",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-spec-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[SpecHTTPStatusVO](#schemaspechttpstatusvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Spec Type Fields

> Code samples

```bash
curl https://example.com/v1/workgroups/string/specTypes/string/specTypeFields \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/specTypes/{spec_type_id}/specTypeFields`

Get Spec Type Fields

<h3 id="get-spec-type-fields-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|spec_type_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "data_type": "sample data_type",
      "param_name": "sample param_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-spec-type-fields-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[PropertyParamListVO](#schemapropertyparamlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-spec-template">Spec Template</h1>

## List Spec Templates of Workgroup Level

<a id="opIdgetSpecTemplateList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/specTemplates \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/specTemplates`

List Spec Templates of Workgroup Level 

<h3 id="list-spec-templates-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "created_date": "1970-01-01",
      "is_active": "false",
      "is_externally_published": "false",
      "is_locked": "false",
      "last_updated_date": "1970-01-01",
      "spec_template_id": "1",
      "spec_template_name": "sample spec_template_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-spec-templates-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SpecTemplateListVO](#schemaspectemplatelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific Spec Template

<a id="opIdgetSpecTemplate"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/specTemplates/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/specTemplates/{spec_template_id}`

Get a specific Spec Template

<h3 id="get-a-specific-spec-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|spec_template_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "created_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "created_date": "1970-01-01",
    "is_active": "false",
    "is_externally_published": "false",
    "is_locked": "false",
    "last_updated_date": "1970-01-01",
    "product_type": "sample product_type",
    "product_type_info": {
      "label": "sample label",
      "product_type_id": "1"
    },
    "spec_template_id": "1",
    "spec_template_name": "sample spec_template_name",
    "spec_type": {
      "spec_type_id": "1",
      "spec_type_name": "sample spec_type_name"
    }
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-spec-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SpecTemplateExpandVO](#schemaspectemplateexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-task">Task</h1>

## Get custom task status of workgroup level

<a id="opIdgetWgTaskStatusListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/customTaskStatus \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/customTaskStatus`

Get custom task status of workgroup level

<h3 id="get-custom-task-status-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "description": "sample description",
      "is_active": "false",
      "is_default": "false",
      "task_status_name": "sample task_status_name",
      "tasks_status_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-custom-task-status-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WgTaskStatusListVO](#schemawgtaskstatuslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get custom task types of workgroup level

<a id="opIdgetCustomTaskTypesOfWg"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/customTaskTypes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/customTaskTypes`

Get custom task types of workgroup level

<h3 id="get-custom-task-types-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "task_type": "sample task_type",
      "task_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-custom-task-types-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskTypeListVO](#schematasktypelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get default task priority list

<a id="opIdTaskPriorityList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/defaultTaskPriority \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/defaultTaskPriority`

Get default task priority list

<h3 id="get-default-task-priority-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "task_priority_id": "1",
      "task_priority_name": "sample task_priority_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-default-task-priority-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskPriorityListVO](#schemataskprioritylistvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get default task status list

<a id="opIdgetDefaultTaskStatusList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/defaultTaskStatus \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/defaultTaskStatus`

Get default task status list

<h3 id="get-default-task-status-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "task_status_id": "1",
      "task_status_name": "sample task_status_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-default-task-status-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskStatusListVO](#schemataskstatuslistvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get task list of project level

<a id="opIdgetTaskListOfProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/tasks \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/tasks`

Get task list of project level

<h3 id="get-task-list-of-project-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "actual_end": "1970-01-01",
      "actual_hours": null,
      "actual_start": "1970-01-01",
      "assign_to": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "baseline_duration": null,
      "baseline_end_date": "1970-01-01",
      "baseline_start_date": "1970-01-01",
      "current_duration": null,
      "is_milestone": "false",
      "mod_date": "1970-01-01",
      "plan_end": "1970-01-01",
      "plan_start": "1970-01-01",
      "priority": "sample priority",
      "schedule_code": "sample schedule_code",
      "status": "sample status",
      "task_id": "1",
      "task_name": "sample task_name",
      "task_type": "sample task_type"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-task-list-of-project-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskListVO](#schematasklistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new task

<a id="opIdpostTaskForProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "actual_duration": "1.1",
    "actual_duration_hour": "1.1",
    "actual_end_date": "1970-01-01",
    "actual_start_date": "1970-01-01",
    "assign_to_user_id": "1",
    "comments": "sample comments",
    "contributors": "sample contributors",
    "custom_status_id": "1",
    "description": "sample description",
    "name": "sample name",
    "percentage_complete": "1",
    "priority": "1",
    "revised_duration": "1.1",
    "revised_duration_hour": "1.1",
    "revised_end_date": "1970-01-01",
    "revised_start_date": "1970-01-01",
    "status_id": "1",
    "task_id": "1",
    "task_type_id": "1"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/tasks`

Create a new task

> Body parameter

```json
{
  "actual_duration": "1.1",
  "actual_duration_hour": "1.1",
  "actual_end_date": "1970-01-01",
  "actual_start_date": "1970-01-01",
  "assign_to_user_id": "1",
  "comments": "sample comments",
  "contributors": "sample contributors",
  "custom_status_id": "1",
  "description": "sample description",
  "name": "sample name",
  "percentage_complete": "1",
  "priority": "1",
  "revised_duration": "1.1",
  "revised_duration_hour": "1.1",
  "revised_end_date": "1970-01-01",
  "revised_start_date": "1970-01-01",
  "status_id": "1",
  "task_id": "1",
  "task_type_id": "1"
}
```

<h3 id="create-a-new-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[TaskPersistVO](#schemataskpersistvo)|false|none|
|» actual_duration|body|number(double)|false|none|
|» actual_duration_hour|body|number(double)|false|none|
|» actual_end_date|body|string(date)|false|none|
|» actual_start_date|body|string(date)|false|none|
|» assign_to_user_id|body|integer(int64)|false|none|
|» comments|body|string|false|none|
|» contributors|body|string|false|none|
|» custom_status_id|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» percentage_complete|body|integer(int64)|false|none|
|» priority|body|integer(int64)|false|none|
|» revised_duration|body|number(double)|false|none|
|» revised_duration_hour|body|number(double)|false|none|
|» revised_end_date|body|string(date)|false|none|
|» revised_start_date|body|string(date)|false|none|
|» status_id|body|integer(int64)|false|none|
|» task_id|body|integer(int64)|false|none|
|» task_type_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "task_id": "1"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="create-a-new-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful created|[TaskCreatedVO](#schemataskcreatedvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a sepcific task of project level

<a id="opIdgetTaskOfProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/tasks/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/tasks/{task_id}`

Get a sepcific task of project level

<h3 id="get-a-sepcific-task-of-project-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|task_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "actual_duration": null,
    "actual_end": "1970-01-01",
    "actual_hours": null,
    "actual_start": "1970-01-01",
    "assign_to": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "baseline_duration": null,
    "baseline_end_date": "1970-01-01",
    "baseline_start_date": "1970-01-01",
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "creator_workgroup_name": "sample creator_workgroup_name",
    "current_duration": null,
    "description": "sample description",
    "is_milestone": "false",
    "last_updated_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "mod_date": "1970-01-01",
    "percent_complete": "1",
    "plan_duration": null,
    "plan_end": "1970-01-01",
    "plan_start": "1970-01-01",
    "priority": "sample priority",
    "requested_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "schedule_code": "sample schedule_code",
    "status": "sample status",
    "task_id": "1",
    "task_name": "sample task_name",
    "task_type": "sample task_type"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-sepcific-task-of-project-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskExpandVO](#schemataskexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get task types of workgroup level

<a id="opIdgetTaskTypesOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/taskTypes \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/taskTypes`

Get task types of workgroup level

<h3 id="get-task-types-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "task_type": "sample task_type",
      "task_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-task-types-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskTypeListVO](#schematasktypelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get task list of workgroup level

<a id="opIdgetTaskListOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/tasks \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/tasks`

Get task list of workgroup level

<h3 id="get-task-list-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "actual_end": "1970-01-01",
      "actual_hours": null,
      "actual_start": "1970-01-01",
      "assign_to": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "baseline_duration": null,
      "baseline_end_date": "1970-01-01",
      "baseline_start_date": "1970-01-01",
      "current_duration": null,
      "is_milestone": "false",
      "mod_date": "1970-01-01",
      "plan_end": "1970-01-01",
      "plan_start": "1970-01-01",
      "priority": "sample priority",
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "schedule_code": "sample schedule_code",
      "status": "sample status",
      "task_id": "1",
      "task_name": "sample task_name",
      "task_type": "sample task_type"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-task-list-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskWorkgroupLevelListVO](#schemataskworkgrouplevellistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a sepcific task of workgroup level

<a id="opIdgetTaskOfWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/tasks/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/tasks/{task_id}`

Get a sepcific task of workgroup level

<h3 id="get-a-sepcific-task-of-workgroup-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|task_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "actual_duration": null,
    "actual_end": "1970-01-01",
    "actual_hours": null,
    "actual_start": "1970-01-01",
    "assign_to": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "baseline_duration": null,
    "baseline_end_date": "1970-01-01",
    "baseline_start_date": "1970-01-01",
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "creator_workgroup_name": "sample creator_workgroup_name",
    "current_duration": null,
    "description": "sample description",
    "is_milestone": "false",
    "last_updated_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "mod_date": "1970-01-01",
    "percent_complete": "1",
    "plan_duration": null,
    "plan_end": "1970-01-01",
    "plan_start": "1970-01-01",
    "priority": "sample priority",
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "requested_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "schedule_code": "sample schedule_code",
    "status": "sample status",
    "task_id": "1",
    "task_name": "sample task_name",
    "task_type": "sample task_type"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-sepcific-task-of-workgroup-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TaskExpandWorkgroupLevelVO](#schemataskexpandworkgrouplevelvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-team-member">Team Member</h1>

## Invite a team member or all the members of team template for the specific project.

<a id="opIdpostTeamMemberOfProject"></a>

> Code samples

```bash
curl https://example.com/1.1/workgroups/string/projects/string/teammembers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role_id": "1",
    "team_template_id": "1",
    "user_id": "1"
  }'
```

`POST /1.1/workgroups/{workgroup_id}/projects/{project_id}/teammembers`

Invite a team member or all the members of team template for the specific project.

> Body parameter

```json
{
  "role_id": "1",
  "team_template_id": "1",
  "user_id": "1"
}
```

<h3 id="invite-a-team-member-or-all-the-members-of-team-template-for-the-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[TeamMemberPO](#schemateammemberpo)|false|none|
|» role_id|body|integer(int64)|false|none|
|» team_template_id|body|integer(int64)|false|none|
|» user_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "role": {
        "role_id": "1",
        "role_name": "sample role_name"
      },
      "team_member_id": "1",
      "user": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "was_invited_before": "false"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="invite-a-team-member-or-all-the-members-of-team-template-for-the-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[V1x1InvitedTeamMemberResultsVO](#schemav1x1invitedteammemberresultsvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List team member of client project side.

<a id="opIdgetTeamMemberListOfClientProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/teamMembersOfClientProject \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/teamMembersOfClientProject`

List team member of client project side.

<h3 id="list-team-member-of-client-project-side-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "company_name": "sample company_name",
      "name": "sample name",
      "phone": "sample phone",
      "role": "sample role",
      "teammember_id": "1",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-team-member-of-client-project-side-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamMemberListVO](#schemateammemberlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List team member of project.

<a id="opIdgetTeamMemberListOfProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/teammembers \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers`

List team member of project.

<h3 id="list-team-member-of-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "company_name": "sample company_name",
      "name": "sample name",
      "phone": "sample phone",
      "role": "sample role",
      "teammember_id": "1",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-team-member-of-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamMemberListVO](#schemateammemberlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Deprecated, please use 1.1 Version

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/teammembers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role_id": "1",
    "user_id": "1"
  }'
```

`POST /v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers`

Deprecated, please use 1.1 Version

> Body parameter

```json
{
  "role_id": "1",
  "user_id": "1"
}
```

<h3 id="deprecated-please-use-11-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|body|body|[ContactUserVO](#schemacontactuservo)|false|none|
|» role_id|body|integer(int64)|true|none|
|» user_id|body|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "teammember_id": "1"
}
```

> 422 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="deprecated-please-use-11-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamMemberBaseInfVO](#schemateammemberbaseinfvo)|
|422|Unprocessable Entity|Invalid data|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a team member for the specific project.

<a id="opIddeleteTeamMemberOfProject"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/teammembers/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/workgroups/{workgroup_id}/projects/{project_id}/teammembers/{teammember_id}`

Delete a team member for the specific project.

<h3 id="delete-a-team-member-for-the-specific-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|teammember_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "teammember_id": "1"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="delete-a-team-member-for-the-specific-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TeamMemberBaseInfVO](#schemateammemberbaseinfvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-team-member-role">Team Member Role</h1>

## List all the role options for the user

<a id="opIdgetMemberRoles"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projects/string/memberroles/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projects/{project_id}/memberroles/{user_id}`

List all the role options for the user

<h3 id="list-all-the-role-options-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|project_id|path|string|true|none|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "role_id": "1",
      "role_name": "sample role_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-all-the-role-options-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[RoleListVO](#schemarolelistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-time-card">Time Card</h1>

## List my time cards

<a id="opIdgetMyTimeCardList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/myTimeCards \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/myTimeCards`

List my time cards

<h3 id="list-my-time-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "is_submit": "false",
      "last_updated_date": "1970-01-01",
      "no_of_workdays": "1",
      "submit_date": "1970-01-01",
      "timecard_id": "1",
      "total_hours": null,
      "week_beginning": "1970-01-01"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-my-time-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TimeCardListVO](#schematimecardlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific my time cards

<a id="opIdgetMyTimeCard"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/myTimeCards/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/myTimeCards/{timeCard_id}`

Get a specific my time cards

<h3 id="get-a-specific-my-time-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|timeCard_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "billable_hours": null,
  "is_submit": "false",
  "last_updated_date": "1970-01-01",
  "no_of_workdays": "1",
  "nonbillable_hours": null,
  "submit_date": "1970-01-01",
  "time_card_line": [
    {
      "activity_name": "sample activity_name",
      "day1_hours_spent": null,
      "day2_hours_spent": null,
      "day3_hours_spent": null,
      "day4_hours_spent": null,
      "day5_hours_spent": null,
      "day6_hours_spent": null,
      "day7_hours_spent": null,
      "project": {
        "project_id": "1",
        "project_name": "sample project_name"
      },
      "task": {
        "task_id": "1",
        "task_name": "sample task_name"
      },
      "time_card_line_id": "1",
      "total_hours_spent": null
    }
  ],
  "timecard_id": "1",
  "total_hours": null,
  "week_beginning": "1970-01-01"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-my-time-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TimeCardDetailVO](#schematimecarddetailvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List received time cards

<a id="opIdgetReceivedTimeCardList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/receivedTimeCards \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/receivedTimeCards`

List received time cards

<h3 id="list-received-time-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "is_submit": "false",
      "last_updated_date": "1970-01-01",
      "no_of_workdays": "1",
      "submit_date": "1970-01-01",
      "timecard_id": "1",
      "total_hours": null,
      "week_beginning": "1970-01-01"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-received-time-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TimeCardListVO](#schematimecardlistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List a specific received time cards

<a id="opIdgetReceivedTimeCard"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/receivedTimeCards/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/receivedTimeCards/{timeCard_id}`

List a specific received time cards

<h3 id="list-a-specific-received-time-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|timeCard_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "billable_hours": null,
  "is_submit": "false",
  "last_updated_date": "1970-01-01",
  "no_of_workdays": "1",
  "nonbillable_hours": null,
  "owner": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "submit_date": "1970-01-01",
  "time_card_line": [
    {
      "activity_name": "sample activity_name",
      "day1_hours_spent": null,
      "day2_hours_spent": null,
      "day3_hours_spent": null,
      "day4_hours_spent": null,
      "day5_hours_spent": null,
      "day6_hours_spent": null,
      "day7_hours_spent": null,
      "project": {
        "project_id": "1",
        "project_name": "sample project_name"
      },
      "task": {
        "task_id": "1",
        "task_name": "sample task_name"
      },
      "time_card_line_id": "1",
      "total_hours_spent": null
    }
  ],
  "timecard_id": "1",
  "total_hours": null,
  "week_beginning": "1970-01-01"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-a-specific-received-time-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[TimeCardReceivedDetailVO](#schematimecardreceiveddetailvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-user-fields">User Fields</h1>

## List projec home user fields of client workgroup

<a id="opIdgetProjectHomeUserFieldListOfClient"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/clientWorkgroups/string/projectHomeUserFields \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}/projectHomeUserFields`

List projec home user fields of client workgroup

<h3 id="list-projec-home-user-fields-of-client-workgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|client_workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "is_required": "false",
      "label": "sample label",
      "ordinal_number": "1",
      "param_name": "sample param_name",
      "type": "sample type",
      "user_field_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-projec-home-user-fields-of-client-workgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectHomeUserFieldsListVO](#schemaprojecthomeuserfieldslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List projec home user fields

<a id="opIdgetProjectHomeUserFieldsList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/projectHomeUserFields \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/projectHomeUserFields`

List projec home user fields

<h3 id="list-projec-home-user-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "is_required": "false",
      "label": "sample label",
      "ordinal_number": "1",
      "param_name": "sample param_name",
      "type": "sample type",
      "user_field_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-projec-home-user-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ProjectHomeUserFieldsListVO](#schemaprojecthomeuserfieldslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-workgroup">Workgroup</h1>

## List the workgroups

<a id="opIdgetWorkgroupList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups \
  -H 'Accept: application/json'
```

`GET /v1/workgroups`

List the workgroups

<h3 id="list-the-workgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_name|query|string|false|Workgroup Name|
|workgroup_types|query|[string]|false|1000001 for Buyer, 1000002 for supplier, 1000003 for agent, 1000004 for Broker/Outsourcer and 1000005 for Partner|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "is_default": "false",
      "parent_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-workgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WorkgroupListVO](#schemaworkgrouplistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List client workgroups

<a id="opIdgetClientWorkgroupList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/clientWorkgroups \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/clientWorkgroups`

List client workgroups

<h3 id="list-client-workgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "client_ac_workgroup_id": "1",
      "client_workgroup_id": "1",
      "client_workgroup_name": "sample client_workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-client-workgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ClientWorkgroupListVO](#schemaclientworkgrouplistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific client workgroups

<a id="opIdgetSpecificClientWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/clientWorkgroups/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/clientWorkgroups/{client_workgroup_id}`

Get a specific client workgroups

<h3 id="get-a-specific-client-workgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|client_workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "client_ac_workgroup_id": "1",
    "client_workgroup_id": "1",
    "client_workgroup_name": "sample client_workgroup_name",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "margin_percent": null,
    "markup": null,
    "markup_percent": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-a-specific-client-workgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[ClientWorkgroupExpandVO](#schemaclientworkgroupexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Detail workgroup info

<a id="opIdgetWorkgroupDetail"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/detail \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/detail`

Detail workgroup info

<h3 id="detail-workgroup-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "address_line1": "sample address_line1",
    "address_line2": "sample address_line2",
    "address_line3": "sample address_line3",
    "city": "sample city",
    "country": "sample country",
    "country_code": "sample country_code",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "default_currency": "sample default_currency",
    "portal": "sample portal",
    "postal": "sample postal",
    "state": "sample state",
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="detail-workgroup-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WorkgroupExpandVO](#schemaworkgroupexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a specific Workgroup

<a id="opIdputWorkgroup"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/detail \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address_line1": "sample address_line1",
    "address_line2": "sample address_line2",
    "address_line3": "sample address_line3",
    "city": "sample city",
    "country": "sample country",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_name": "sample param_name",
        "string_value": "sample string_value"
      }
    ],
    "decimal_places": "1",
    "postal": "sample postal",
    "state": "sample state",
    "workgroup_name": "sample workgroup_name"
  }'
```

`PUT /v1/workgroups/{workgroup_id}/detail`

Update a specific Workgroup

> Body parameter

```json
{
  "address_line1": "sample address_line1",
  "address_line2": "sample address_line2",
  "address_line3": "sample address_line3",
  "city": "sample city",
  "country": "sample country",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "decimal_places": "1",
  "postal": "sample postal",
  "state": "sample state",
  "workgroup_name": "sample workgroup_name"
}
```

<h3 id="update-a-specific-workgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|body|body|[WorkgroupUpdPersistVO](#schemaworkgroupupdpersistvo)|false|none|
|» address_line1|body|string|false|none|
|» address_line2|body|string|false|none|
|» address_line3|body|string|false|none|
|» city|body|string|false|none|
|» country|body|string|false|none|
|» custom_fields|body|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|
|» decimal_places|body|integer(int64)|false|none|
|» postal|body|string|false|none|
|» state|body|string|false|none|
|» workgroup_name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="update-a-specific-workgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful updated|[WorkgroupHTTPStatusVO](#schemaworkgrouphttpstatusvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## List supplier workgroups

<a id="opIdgetSupplierWorkgroupList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/supplierWorkgroups \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/supplierWorkgroups`

List supplier workgroups

<h3 id="list-supplier-workgroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "bu_supplier_workgroup_id": "1",
      "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
      "client_workgroup_id": "1",
      "client_workgroup_name": "sample client_workgroup_name",
      "is_approved": "false",
      "supplier_code": "sample supplier_code",
      "supplier_workgroup_id": "1",
      "supplier_workgroup_name": "sample supplier_workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-supplier-workgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SupplierWorkgroupListVO](#schemasupplierworkgrouplistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the specific supplier of My Group

<a id="opIdgetSupplierWorkgroupDetail"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/supplierWorkgroups/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/supplierWorkgroups/{bu_supplier_workgroup_id}`

Get the specific supplier of My Group

<h3 id="get-the-specific-supplier-of-my-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|bu_supplier_workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "additional_workgroups_contain_same_supplier": [
      {
        "bu_supplier_workgroup_id": "1",
        "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name"
      }
    ],
    "bu_supplier_workgroup_id": "1",
    "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
    "client_workgroup_id": "1",
    "client_workgroup_name": "sample client_workgroup_name",
    "is_approved": "false",
    "supplier_code": "sample supplier_code",
    "supplier_workgroup_id": "1",
    "supplier_workgroup_name": "sample supplier_workgroup_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="get-the-specific-supplier-of-my-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[SupplierWorkgroupExpandVO](#schemasupplierworkgroupexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="noosh-api-application-workgroup-members">Workgroup Members</h1>

## List the workgroup members

<a id="opIdgetWorkgroupMemberList"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/workgroupMembers \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/workgroupMembers`

List the workgroup members

<h3 id="list-the-workgroup-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "user_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="list-the-workgroup-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[WorkgroupMembersListVO](#schemaworkgroupmemberslistvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

## Workgroup Member Info

<a id="opIdgetWorkgroupMemberInfo"></a>

> Code samples

```bash
curl https://example.com/v1/workgroups/string/workgroupMembers/string \
  -H 'Accept: application/json'
```

`GET /v1/workgroups/{workgroup_id}/workgroupMembers/{user_id}`

Workgroup Member Info

<h3 id="workgroup-member-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workgroup_id|path|string|true|none|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "address": null,
    "company_name": "sample company_name",
    "email": "sample email",
    "fax_number": "sample fax_number",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "locale": "sample locale",
    "middle_name": "sample middle_name",
    "organization": "sample organization",
    "phone_number": "sample phone_number",
    "time_zone": "sample time_zone",
    "title": "sample title",
    "user_id": "1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 404 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

> 500 Response

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

<h3 id="workgroup-member-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful retrieval|[UserDetailsExpandVO](#schemauserdetailsexpandvo)|
|404|Not Found|There are not any result matching your search condition|[HTTPStatusVO](#schemahttpstatusvo)|
|500|Internal Server Error|Internal server error|[HTTPStatusVO](#schemahttpstatusvo)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AutomaticInvitationVO">AutomaticInvitationVO</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticinvitationvo"></a>
<a id="schema_AutomaticInvitationVO"></a>
<a id="tocSautomaticinvitationvo"></a>
<a id="tocsautomaticinvitationvo"></a>

```json
{
  "automatic_invitation_type_name": "sample automatic_invitation_type_name",
  "team_template": {
    "team_template_id": "1",
    "team_template_name": "sample team_template_name"
  }
}
```

Java type: com.noosh.nooshapi.vo.AutomaticInvitationVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automatic_invitation_type_name|string|false|none|none|
|team_template|[TeamTemplateSimpleVO](#schemateamtemplatesimplevo)|false|none|Java type: com.noosh.nooshapi.vo.TeamTemplateSimpleVO|

<h2 id="tocS_AutomaticInvitationsListVO">AutomaticInvitationsListVO</h2>
<!-- backwards compatibility -->
<a id="schemaautomaticinvitationslistvo"></a>
<a id="schema_AutomaticInvitationsListVO"></a>
<a id="tocSautomaticinvitationslistvo"></a>
<a id="tocsautomaticinvitationslistvo"></a>

```json
{
  "results": [
    {
      "automatic_invitation_type_name": "sample automatic_invitation_type_name",
      "team_template": {
        "team_template_id": "1",
        "team_template_name": "sample team_template_name"
      }
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.AutomaticInvitationsListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[AutomaticInvitationVO](#schemaautomaticinvitationvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_BigDecimal">BigDecimal</h2>
<!-- backwards compatibility -->
<a id="schemabigdecimal"></a>
<a id="schema_BigDecimal"></a>
<a id="tocSbigdecimal"></a>
<a id="tocsbigdecimal"></a>

```json
null
```

Java type: java.math.BigDecimal

<h2 id="tocS_BreakoutVO">BreakoutVO</h2>
<!-- backwards compatibility -->
<a id="schemabreakoutvo"></a>
<a id="schema_BreakoutVO"></a>
<a id="tocSbreakoutvo"></a>
<a id="tocsbreakoutvo"></a>

```json
{
  "breakout_id": "1",
  "breakout_name": "sample breakout_name",
  "breakout_pre_markup": null,
  "breakout_price": null,
  "transactional_breakout_pre_markup": null,
  "transactional_breakout_price": null
}
```

Java type: com.noosh.nooshapi.vo.BreakoutVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakout_id|integer(int64)|false|none|none|
|breakout_name|string|false|none|none|
|breakout_pre_markup|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|breakout_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_breakout_pre_markup|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_breakout_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_ClientWorkgroupDetailVO">ClientWorkgroupDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaclientworkgroupdetailvo"></a>
<a id="schema_ClientWorkgroupDetailVO"></a>
<a id="tocSclientworkgroupdetailvo"></a>
<a id="tocsclientworkgroupdetailvo"></a>

```json
{
  "client_ac_workgroup_id": "1",
  "client_workgroup_id": "1",
  "client_workgroup_name": "sample client_workgroup_name",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "margin_percent": null,
  "markup": null,
  "markup_percent": null
}
```

Java type: com.noosh.nooshapi.vo.ClientWorkgroupDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ac_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_name|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|margin_percent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|markup|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|markup_percent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_ClientWorkgroupExpandVO">ClientWorkgroupExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaclientworkgroupexpandvo"></a>
<a id="schema_ClientWorkgroupExpandVO"></a>
<a id="tocSclientworkgroupexpandvo"></a>
<a id="tocsclientworkgroupexpandvo"></a>

```json
{
  "result": {
    "client_ac_workgroup_id": "1",
    "client_workgroup_id": "1",
    "client_workgroup_name": "sample client_workgroup_name",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "margin_percent": null,
    "markup": null,
    "markup_percent": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ClientWorkgroupExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[ClientWorkgroupDetailVO](#schemaclientworkgroupdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.ClientWorkgroupDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ClientWorkgroupListVO">ClientWorkgroupListVO</h2>
<!-- backwards compatibility -->
<a id="schemaclientworkgrouplistvo"></a>
<a id="schema_ClientWorkgroupListVO"></a>
<a id="tocSclientworkgrouplistvo"></a>
<a id="tocsclientworkgrouplistvo"></a>

```json
{
  "results": [
    {
      "client_ac_workgroup_id": "1",
      "client_workgroup_id": "1",
      "client_workgroup_name": "sample client_workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ClientWorkgroupListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ClientWorkgroupSimpleVO](#schemaclientworkgroupsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ClientWorkgroupSimpleVO">ClientWorkgroupSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaclientworkgroupsimplevo"></a>
<a id="schema_ClientWorkgroupSimpleVO"></a>
<a id="tocSclientworkgroupsimplevo"></a>
<a id="tocsclientworkgroupsimplevo"></a>

```json
{
  "client_ac_workgroup_id": "1",
  "client_workgroup_id": "1",
  "client_workgroup_name": "sample client_workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.ClientWorkgroupSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ac_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_name|string|false|none|none|

<h2 id="tocS_ContactUserVO">ContactUserVO</h2>
<!-- backwards compatibility -->
<a id="schemacontactuservo"></a>
<a id="schema_ContactUserVO"></a>
<a id="tocScontactuservo"></a>
<a id="tocscontactuservo"></a>

```json
{
  "role_id": "1",
  "user_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.ContactUserVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_id|integer(int64)|true|none|none|
|user_id|integer(int64)|true|none|none|

<h2 id="tocS_ContactsListVO">ContactsListVO</h2>
<!-- backwards compatibility -->
<a id="schemacontactslistvo"></a>
<a id="schema_ContactsListVO"></a>
<a id="tocScontactslistvo"></a>
<a id="tocscontactslistvo"></a>

```json
{
  "results": [
    {
      "address": "sample address",
      "company_name": "sample company_name",
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "primary_phone": "sample primary_phone",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ContactsListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ContactsSimpleVO](#schemacontactssimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ContactsSimpleVO">ContactsSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemacontactssimplevo"></a>
<a id="schema_ContactsSimpleVO"></a>
<a id="tocScontactssimplevo"></a>
<a id="tocscontactssimplevo"></a>

```json
{
  "address": "sample address",
  "company_name": "sample company_name",
  "email": "sample email",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "primary_phone": "sample primary_phone",
  "user_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.ContactsSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|company_name|string|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|primary_phone|string|false|none|none|
|user_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_CountryListVO">CountryListVO</h2>
<!-- backwards compatibility -->
<a id="schemacountrylistvo"></a>
<a id="schema_CountryListVO"></a>
<a id="tocScountrylistvo"></a>
<a id="tocscountrylistvo"></a>

```json
{
  "result": [
    {
      "constant_token": "sample constant_token",
      "country": "sample country",
      "country_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.CountryListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[CountryVO](#schemacountryvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_CountryVO">CountryVO</h2>
<!-- backwards compatibility -->
<a id="schemacountryvo"></a>
<a id="schema_CountryVO"></a>
<a id="tocScountryvo"></a>
<a id="tocscountryvo"></a>

```json
{
  "constant_token": "sample constant_token",
  "country": "sample country",
  "country_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.CountryVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constant_token|string|false|none|none|
|country|string|false|none|none|
|country_id|integer(int64)|false|none|none|

<h2 id="tocS_CustomFieldPersistVO">CustomFieldPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldpersistvo"></a>
<a id="schema_CustomFieldPersistVO"></a>
<a id="tocScustomfieldpersistvo"></a>
<a id="tocscustomfieldpersistvo"></a>

```json
{
  "date_value": "1970-01-01",
  "number_value": null,
  "param_name": "sample param_name",
  "string_value": "sample string_value"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.CustomFieldPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_value|string(date)|false|none|none|
|number_value|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|param_name|string|false|none|none|
|string_value|string|false|none|none|

<h2 id="tocS_DeactivationReasonListVO">DeactivationReasonListVO</h2>
<!-- backwards compatibility -->
<a id="schemadeactivationreasonlistvo"></a>
<a id="schema_DeactivationReasonListVO"></a>
<a id="tocSdeactivationreasonlistvo"></a>
<a id="tocsdeactivationreasonlistvo"></a>

```json
{
  "results": [
    {
      "deactivation_reason_id": "1",
      "deactivation_reason_name": "sample deactivation_reason_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.DeactivationReasonListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DeactivationReasonVO](#schemadeactivationreasonvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_DeactivationReasonVO">DeactivationReasonVO</h2>
<!-- backwards compatibility -->
<a id="schemadeactivationreasonvo"></a>
<a id="schema_DeactivationReasonVO"></a>
<a id="tocSdeactivationreasonvo"></a>
<a id="tocsdeactivationreasonvo"></a>

```json
{
  "deactivation_reason_id": "1",
  "deactivation_reason_name": "sample deactivation_reason_name"
}
```

Java type: com.noosh.nooshapi.vo.DeactivationReasonVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deactivation_reason_id|integer(int64)|false|none|none|
|deactivation_reason_name|string|false|none|none|

<h2 id="tocS_ErgoSpecSimpleVO">ErgoSpecSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaergospecsimplevo"></a>
<a id="schema_ErgoSpecSimpleVO"></a>
<a id="tocSergospecsimplevo"></a>
<a id="tocsergospecsimplevo"></a>

```json
{
  "is_active": "1",
  "is_template": "1",
  "quantity_1": "1.1",
  "quantity_2": "1.1",
  "quantity_3": "1.1",
  "quantity_4": "1.1",
  "quantity_5": "1.1",
  "reference_number": "sample reference_number",
  "spec_id": "1",
  "spec_name": "sample spec_name"
}
```

Java type: com.noosh.nooshapi.vo.ergo.ErgoSpecSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_active|integer(int32)|false|none|none|
|is_template|integer(int32)|false|none|none|
|quantity_1|number(double)|false|none|none|
|quantity_2|number(double)|false|none|none|
|quantity_3|number(double)|false|none|none|
|quantity_4|number(double)|false|none|none|
|quantity_5|number(double)|false|none|none|
|reference_number|string|false|none|none|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|

<h2 id="tocS_EstimateBaseVO">EstimateBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimatebasevo"></a>
<a id="schema_EstimateBaseVO"></a>
<a id="tocSestimatebasevo"></a>
<a id="tocsestimatebasevo"></a>

```json
{
  "create_date": "1970-01-01",
  "currency": "sample currency",
  "estimate_id": "1",
  "estimate_title": "sample estimate_title",
  "expiration_date": "1970-01-01",
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "rfe": {
    "rfe_due_date": "1970-01-01",
    "rfe_id": "1",
    "rfe_title": "sample rfe_title",
    "status": "sample status"
  },
  "status": "sample status",
  "submit_date": "1970-01-01",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "transactional_currency": "sample transactional_currency"
}
```

Java type: com.noosh.nooshapi.vo.EstimateBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_date|string(date)|false|none|none|
|currency|string|false|none|none|
|estimate_id|integer(int64)|false|none|none|
|estimate_title|string|false|none|none|
|expiration_date|string(date)|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|rfe|[RfeBaseVO](#schemarfebasevo)|false|none|Java type: com.noosh.nooshapi.vo.RfeBaseVO|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|transactional_currency|string|false|none|none|

<h2 id="tocS_EstimateDetailsVO">EstimateDetailsVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimatedetailsvo"></a>
<a id="schema_EstimateDetailsVO"></a>
<a id="tocSestimatedetailsvo"></a>
<a id="tocsestimatedetailsvo"></a>

```json
{
  "comments": "sample comments",
  "create_date": "1970-01-01",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "description": "sample description",
  "estimate_id": "1",
  "estimate_title": "sample estimate_title",
  "expiration_date": "1970-01-01",
  "items": [
    {
      "comments": "sample comments",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "estimate_item_id": "1",
      "option_prices": [
        {
          "add_price": null,
          "breakouts": [
            {
              "breakout_id": "1",
              "breakout_name": "sample breakout_name",
              "breakout_pre_markup": null,
              "breakout_price": null,
              "transactional_breakout_pre_markup": null,
              "transactional_breakout_price": null
            }
          ],
          "em_estimate_item_price_id": "1",
          "item_option": {
            "item_option_id": "1",
            "quantity": "sample quantity"
          },
          "price": null,
          "shipping": null,
          "tax": null,
          "total_price": null,
          "transactional_add_price": null,
          "transactional_price": null,
          "transactional_shipping": null,
          "transactional_tax": null,
          "transactional_total_price": null
        }
      ],
      "pc_job_id": "1",
      "spec_name": "sample spec_name",
      "spec_reference": "sample spec_reference",
      "spec_reference_id": "1"
    }
  ],
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "reference_number": "sample reference_number",
  "rfe": {
    "rfe_due_date": "1970-01-01",
    "rfe_id": "1",
    "rfe_title": "sample rfe_title",
    "status": "sample status"
  },
  "status": "sample status",
  "submit_date": "1970-01-01",
  "submitted_by": "sample submitted_by",
  "submitted_by_user_id": "1",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "transactional_currency": "sample transactional_currency"
}
```

Java type: com.noosh.nooshapi.vo.EstimateDetailsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|create_date|string(date)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|description|string|false|none|none|
|estimate_id|integer(int64)|false|none|none|
|estimate_title|string|false|none|none|
|expiration_date|string(date)|false|none|none|
|items|[[EstimateItemDetailsVO](#schemaestimateitemdetailsvo)]|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|reference_number|string|false|none|none|
|rfe|[RfeBaseVO](#schemarfebasevo)|false|none|Java type: com.noosh.nooshapi.vo.RfeBaseVO|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|submitted_by|string|false|none|none|
|submitted_by_user_id|integer(int64)|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|transactional_currency|string|false|none|none|

<h2 id="tocS_EstimateExpandVO">EstimateExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimateexpandvo"></a>
<a id="schema_EstimateExpandVO"></a>
<a id="tocSestimateexpandvo"></a>
<a id="tocsestimateexpandvo"></a>

```json
{
  "result": {
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "description": "sample description",
    "estimate_id": "1",
    "estimate_title": "sample estimate_title",
    "expiration_date": "1970-01-01",
    "items": [
      {
        "comments": "sample comments",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "estimate_item_id": "1",
        "option_prices": [
          {
            "add_price": null,
            "breakouts": [
              {
                "breakout_id": "1",
                "breakout_name": "sample breakout_name",
                "breakout_pre_markup": null,
                "breakout_price": null,
                "transactional_breakout_pre_markup": null,
                "transactional_breakout_price": null
              }
            ],
            "em_estimate_item_price_id": "1",
            "item_option": {
              "item_option_id": "1",
              "quantity": "sample quantity"
            },
            "price": null,
            "shipping": null,
            "tax": null,
            "total_price": null,
            "transactional_add_price": null,
            "transactional_price": null,
            "transactional_shipping": null,
            "transactional_tax": null,
            "transactional_total_price": null
          }
        ],
        "pc_job_id": "1",
        "spec_name": "sample spec_name",
        "spec_reference": "sample spec_reference",
        "spec_reference_id": "1"
      }
    ],
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "reference_number": "sample reference_number",
    "rfe": {
      "rfe_due_date": "1970-01-01",
      "rfe_id": "1",
      "rfe_title": "sample rfe_title",
      "status": "sample status"
    },
    "status": "sample status",
    "submit_date": "1970-01-01",
    "submitted_by": "sample submitted_by",
    "submitted_by_user_id": "1",
    "supplier_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "transactional_currency": "sample transactional_currency"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.EstimateExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[EstimateDetailsVO](#schemaestimatedetailsvo)|false|none|Java type: com.noosh.nooshapi.vo.EstimateDetailsVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_EstimateItemDetailsVO">EstimateItemDetailsVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimateitemdetailsvo"></a>
<a id="schema_EstimateItemDetailsVO"></a>
<a id="tocSestimateitemdetailsvo"></a>
<a id="tocsestimateitemdetailsvo"></a>

```json
{
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "estimate_item_id": "1",
  "option_prices": [
    {
      "add_price": null,
      "breakouts": [
        {
          "breakout_id": "1",
          "breakout_name": "sample breakout_name",
          "breakout_pre_markup": null,
          "breakout_price": null,
          "transactional_breakout_pre_markup": null,
          "transactional_breakout_price": null
        }
      ],
      "em_estimate_item_price_id": "1",
      "item_option": {
        "item_option_id": "1",
        "quantity": "sample quantity"
      },
      "price": null,
      "shipping": null,
      "tax": null,
      "total_price": null,
      "transactional_add_price": null,
      "transactional_price": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_total_price": null
    }
  ],
  "pc_job_id": "1",
  "spec_name": "sample spec_name",
  "spec_reference": "sample spec_reference",
  "spec_reference_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.EstimateItemDetailsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|estimate_item_id|integer(int64)|false|none|none|
|option_prices|[[EstimateItemPriceVO](#schemaestimateitempricevo)]|false|none|none|
|pc_job_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|spec_reference|string|false|none|none|
|spec_reference_id|integer(int64)|false|none|none|

<h2 id="tocS_EstimateItemPO">EstimateItemPO</h2>
<!-- backwards compatibility -->
<a id="schemaestimateitempo"></a>
<a id="schema_EstimateItemPO"></a>
<a id="tocSestimateitempo"></a>
<a id="tocsestimateitempo"></a>

```json
{
  "paper_items": [
    {
      "min_uom_qty": "1",
      "paper_id": "1",
      "price_1": null,
      "price_2": null,
      "price_3": null,
      "price_4": null,
      "price_5": null,
      "price_per_tonne": null,
      "qty_uom": "sample qty_uom",
      "quantity_1": "1",
      "quantity_2": "1",
      "quantity_3": "1",
      "quantity_4": "1",
      "quantity_5": "1",
      "size": "sample size",
      "sku": "sample sku",
      "unit_price_1": null,
      "unit_price_2": null,
      "unit_price_3": null,
      "unit_price_4": null,
      "unit_price_5": null
    }
  ],
  "quantity_1_price": null,
  "quantity_1_shipping": null,
  "quantity_1_tax": null,
  "quantity_2_price": null,
  "quantity_2_shipping": null,
  "quantity_2_tax": null,
  "quantity_3_price": null,
  "quantity_3_shipping": null,
  "quantity_3_tax": null,
  "quantity_4_price": null,
  "quantity_4_shipping": null,
  "quantity_4_tax": null,
  "quantity_5_price": null,
  "quantity_5_shipping": null,
  "quantity_5_tax": null,
  "rfe_item_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.EstimateItemPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paper_items|[[PaperItemPO](#schemapaperitempo)]|false|none|none|
|quantity_1_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_1_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_1_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_2_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_2_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_2_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_3_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_3_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_3_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_4_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_4_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_4_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_5_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_5_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_5_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|rfe_item_id|integer(int64)|false|none|none|

<h2 id="tocS_EstimateItemPriceVO">EstimateItemPriceVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimateitempricevo"></a>
<a id="schema_EstimateItemPriceVO"></a>
<a id="tocSestimateitempricevo"></a>
<a id="tocsestimateitempricevo"></a>

```json
{
  "add_price": null,
  "breakouts": [
    {
      "breakout_id": "1",
      "breakout_name": "sample breakout_name",
      "breakout_pre_markup": null,
      "breakout_price": null,
      "transactional_breakout_pre_markup": null,
      "transactional_breakout_price": null
    }
  ],
  "em_estimate_item_price_id": "1",
  "item_option": {
    "item_option_id": "1",
    "quantity": "sample quantity"
  },
  "price": null,
  "shipping": null,
  "tax": null,
  "total_price": null,
  "transactional_add_price": null,
  "transactional_price": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "transactional_total_price": null
}
```

Java type: com.noosh.nooshapi.vo.EstimateItemPriceVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|breakouts|[[BreakoutVO](#schemabreakoutvo)]|false|none|none|
|em_estimate_item_price_id|integer(int64)|false|none|none|
|item_option|[ItemOptionVO](#schemaitemoptionvo)|false|none|Java type: com.noosh.nooshapi.vo.ItemOptionVO|
|price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|total_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_add_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_total_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_EstimateListExpandVO">EstimateListExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimatelistexpandvo"></a>
<a id="schema_EstimateListExpandVO"></a>
<a id="tocSestimatelistexpandvo"></a>
<a id="tocsestimatelistexpandvo"></a>

```json
{
  "result": [
    {
      "create_date": "1970-01-01",
      "currency": "sample currency",
      "estimate_id": "1",
      "estimate_title": "sample estimate_title",
      "expiration_date": "1970-01-01",
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "rfe": {
        "rfe_due_date": "1970-01-01",
        "rfe_id": "1",
        "rfe_title": "sample rfe_title",
        "status": "sample status"
      },
      "status": "sample status",
      "submit_date": "1970-01-01",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.EstimateListExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[EstimateBaseVO](#schemaestimatebasevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_EstimatePO">EstimatePO</h2>
<!-- backwards compatibility -->
<a id="schemaestimatepo"></a>
<a id="schema_EstimatePO"></a>
<a id="tocSestimatepo"></a>
<a id="tocsestimatepo"></a>

```json
{
  "comments": "sample comments",
  "description": "sample description",
  "estimate_items": [
    {
      "paper_items": [
        {
          "min_uom_qty": "1",
          "paper_id": "1",
          "price_1": null,
          "price_2": null,
          "price_3": null,
          "price_4": null,
          "price_5": null,
          "price_per_tonne": null,
          "qty_uom": "sample qty_uom",
          "quantity_1": "1",
          "quantity_2": "1",
          "quantity_3": "1",
          "quantity_4": "1",
          "quantity_5": "1",
          "size": "sample size",
          "sku": "sample sku",
          "unit_price_1": null,
          "unit_price_2": null,
          "unit_price_3": null,
          "unit_price_4": null,
          "unit_price_5": null
        }
      ],
      "quantity_1_price": null,
      "quantity_1_shipping": null,
      "quantity_1_tax": null,
      "quantity_2_price": null,
      "quantity_2_shipping": null,
      "quantity_2_tax": null,
      "quantity_3_price": null,
      "quantity_3_shipping": null,
      "quantity_3_tax": null,
      "quantity_4_price": null,
      "quantity_4_shipping": null,
      "quantity_4_tax": null,
      "quantity_5_price": null,
      "quantity_5_shipping": null,
      "quantity_5_tax": null,
      "rfe_item_id": "1"
    }
  ],
  "estimate_title": "sample estimate_title",
  "expiration_date": "1970-01-01",
  "owner_reference": "sample owner_reference",
  "rfe_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.EstimatePO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|description|string|false|none|none|
|estimate_items|[[EstimateItemPO](#schemaestimateitempo)]|false|none|none|
|estimate_title|string|false|none|none|
|expiration_date|string(date)|false|none|none|
|owner_reference|string|false|none|none|
|rfe_id|integer(int64)|false|none|none|

<h2 id="tocS_EstimateSimpleVO">EstimateSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaestimatesimplevo"></a>
<a id="schema_EstimateSimpleVO"></a>
<a id="tocSestimatesimplevo"></a>
<a id="tocsestimatesimplevo"></a>

```json
{
  "estimate_id": "1",
  "estimate_title": "sample estimate_title"
}
```

Java type: com.noosh.nooshapi.vo.EstimateSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimate_id|integer(int64)|false|none|none|
|estimate_title|string|false|none|none|

<h2 id="tocS_FileListResponseVO">FileListResponseVO</h2>
<!-- backwards compatibility -->
<a id="schemafilelistresponsevo"></a>
<a id="schema_FileListResponseVO"></a>
<a id="tocSfilelistresponsevo"></a>
<a id="tocsfilelistresponsevo"></a>

```json
{
  "result": [
    {
      "description": "sample description",
      "download_link": "sample download_link",
      "file_id": "1",
      "file_name": "sample file_name",
      "file_size": null,
      "file_type": "sample file_type",
      "is_remote": "false",
      "modified_date": "sample modified_date",
      "tagList": [
        {
          "isSpec": "false",
          "tagId": "1",
          "tagName": "sample tagName"
        }
      ],
      "upload_date": "sample upload_date",
      "uploaded_by": "sample uploaded_by"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.file.FileListResponseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[FileVO](#schemafilevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_FileResponseVO">FileResponseVO</h2>
<!-- backwards compatibility -->
<a id="schemafileresponsevo"></a>
<a id="schema_FileResponseVO"></a>
<a id="tocSfileresponsevo"></a>
<a id="tocsfileresponsevo"></a>

```json
{
  "result": {
    "description": "sample description",
    "download_link": "sample download_link",
    "file_id": "1",
    "file_name": "sample file_name",
    "file_size": null,
    "file_type": "sample file_type",
    "is_remote": "false",
    "modified_date": "sample modified_date",
    "tagList": [
      {
        "isSpec": "false",
        "tagId": "1",
        "tagName": "sample tagName"
      }
    ],
    "upload_date": "sample upload_date",
    "uploaded_by": "sample uploaded_by"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.file.FileResponseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[FileVO](#schemafilevo)|false|none|Java type: com.noosh.nooshapi.vo.file.FileVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_FileTagResponseVO">FileTagResponseVO</h2>
<!-- backwards compatibility -->
<a id="schemafiletagresponsevo"></a>
<a id="schema_FileTagResponseVO"></a>
<a id="tocSfiletagresponsevo"></a>
<a id="tocsfiletagresponsevo"></a>

```json
{
  "result": [
    {
      "isSpec": "false",
      "tagId": "1",
      "tagName": "sample tagName"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.file.FileTagResponseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[TagRepoVO](#schematagrepovo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_FileVO">FileVO</h2>
<!-- backwards compatibility -->
<a id="schemafilevo"></a>
<a id="schema_FileVO"></a>
<a id="tocSfilevo"></a>
<a id="tocsfilevo"></a>

```json
{
  "description": "sample description",
  "download_link": "sample download_link",
  "file_id": "1",
  "file_name": "sample file_name",
  "file_size": null,
  "file_type": "sample file_type",
  "is_remote": "false",
  "modified_date": "sample modified_date",
  "tagList": [
    {
      "isSpec": "false",
      "tagId": "1",
      "tagName": "sample tagName"
    }
  ],
  "upload_date": "sample upload_date",
  "uploaded_by": "sample uploaded_by"
}
```

Java type: com.noosh.nooshapi.vo.file.FileVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|download_link|string|false|none|none|
|file_id|integer(int64)|false|none|none|
|file_name|string|false|none|none|
|file_size|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|file_type|string|false|none|none|
|is_remote|boolean|false|none|none|
|modified_date|string|false|none|none|
|tagList|[[TagVO](#schematagvo)]|false|none|none|
|upload_date|string|false|none|none|
|uploaded_by|string|false|none|none|

<h2 id="tocS_HTTPStatus">HTTPStatus</h2>
<!-- backwards compatibility -->
<a id="schemahttpstatus"></a>
<a id="schema_HTTPStatus"></a>
<a id="tocShttpstatus"></a>
<a id="tocshttpstatus"></a>

```json
null
```

Java type: com.noosh.domain.constant.HTTPStatus

<h2 id="tocS_HTTPStatusVO">HTTPStatusVO</h2>
<!-- backwards compatibility -->
<a id="schemahttpstatusvo"></a>
<a id="schema_HTTPStatusVO"></a>
<a id="tocShttpstatusvo"></a>
<a id="tocshttpstatusvo"></a>

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.core.vo.HTTPStatusVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_InvoiceDetailListExpandVO">InvoiceDetailListExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedetaillistexpandvo"></a>
<a id="schema_InvoiceDetailListExpandVO"></a>
<a id="tocSinvoicedetaillistexpandvo"></a>
<a id="tocsinvoicedetaillistexpandvo"></a>

```json
{
  "result": [
    {
      "comments": "sample comments",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "invoice_date": "1970-01-01",
      "invoice_due_date": "1970-01-01",
      "invoice_id": "1",
      "invoice_number": "sample invoice_number",
      "invoice_to": "sample invoice_to",
      "is_final": "1",
      "is_nonBillable": "1",
      "items": [
        {
          "custom_fields": [
            {
              "date_value": "1970-01-01",
              "number_value": null,
              "param_id": "1",
              "param_name": "sample param_name",
              "property_attribute_id": "1",
              "string_value": "sample string_value"
            }
          ],
          "invoice_item_id": "1",
          "item_cost": null,
          "item_quantity": "1",
          "item_shipping": null,
          "item_sub_total": null,
          "item_tax": null,
          "job_id": "1",
          "spec_name": "sample spec_name",
          "transactional_item_cost": null,
          "transactional_item_shipping": null,
          "transactional_item_sub_total": null,
          "transactional_item_tax": null
        }
      ],
      "order_reference": "sample order_reference",
      "order_title": "sample order_title",
      "payment_method": "sample payment_method",
      "prepared_by": "sample prepared_by",
      "project_number": "1",
      "reference_number": "sample reference_number",
      "shipping": null,
      "status": "sample status",
      "sub_total": null,
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_shipping": null,
      "transactional_sub_total": null,
      "transactional_tax": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.InvoiceDetailListExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[InvoiceSimpleVO](#schemainvoicesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_InvoiceDetailVO">InvoiceDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedetailvo"></a>
<a id="schema_InvoiceDetailVO"></a>
<a id="tocSinvoicedetailvo"></a>
<a id="tocsinvoicedetailvo"></a>

```json
{
  "comments": "sample comments",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "invoice_date": "1970-01-01",
  "invoice_due_date": "1970-01-01",
  "invoice_id": "1",
  "invoice_number": "sample invoice_number",
  "invoice_to": "sample invoice_to",
  "is_final": "1",
  "is_nonBillable": "1",
  "items": [
    {
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "invoice_item_id": "1",
      "item_cost": null,
      "item_quantity": "1",
      "item_shipping": null,
      "item_sub_total": null,
      "item_tax": null,
      "job_id": "1",
      "shipment_id": "1",
      "spec_name": "sample spec_name",
      "transactional_item_cost": null,
      "transactional_item_shipping": null,
      "transactional_item_sub_total": null,
      "transactional_item_tax": null
    }
  ],
  "order_reference": "sample order_reference",
  "order_title": "sample order_title",
  "payment_method": "sample payment_method",
  "prepared_by": "sample prepared_by",
  "project_number": "1",
  "reference_number": "sample reference_number",
  "shipping": null,
  "status": "sample status",
  "sub_total": null,
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_shipping": null,
  "transactional_sub_total": null,
  "transactional_tax": null
}
```

Java type: com.noosh.nooshapi.vo.InvoiceDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|invoice_date|string(date)|false|none|none|
|invoice_due_date|string(date)|false|none|none|
|invoice_id|integer(int64)|false|none|none|
|invoice_number|string|false|none|none|
|invoice_to|string|false|none|none|
|is_final|integer(int32)|false|none|none|
|is_nonBillable|integer(int32)|false|none|none|
|items|[[InvoiceItemDetailVO](#schemainvoiceitemdetailvo)]|false|none|none|
|order_reference|string|false|none|none|
|order_title|string|false|none|none|
|payment_method|string|false|none|none|
|prepared_by|string|false|none|none|
|project_number|integer(int64)|false|none|none|
|reference_number|string|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_InvoiceExpandVO">InvoiceExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceexpandvo"></a>
<a id="schema_InvoiceExpandVO"></a>
<a id="tocSinvoiceexpandvo"></a>
<a id="tocsinvoiceexpandvo"></a>

```json
{
  "result": {
    "comments": "sample comments",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "grand_total": null,
    "invoice_date": "1970-01-01",
    "invoice_due_date": "1970-01-01",
    "invoice_id": "1",
    "invoice_number": "sample invoice_number",
    "invoice_to": "sample invoice_to",
    "is_final": "1",
    "is_nonBillable": "1",
    "items": [
      {
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "invoice_item_id": "1",
        "item_cost": null,
        "item_quantity": "1",
        "item_shipping": null,
        "item_sub_total": null,
        "item_tax": null,
        "job_id": "1",
        "shipment_id": "1",
        "spec_name": "sample spec_name",
        "transactional_item_cost": null,
        "transactional_item_shipping": null,
        "transactional_item_sub_total": null,
        "transactional_item_tax": null
      }
    ],
    "order_reference": "sample order_reference",
    "order_title": "sample order_title",
    "payment_method": "sample payment_method",
    "prepared_by": "sample prepared_by",
    "project_number": "1",
    "reference_number": "sample reference_number",
    "shipping": null,
    "status": "sample status",
    "sub_total": null,
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_shipping": null,
    "transactional_sub_total": null,
    "transactional_tax": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.InvoiceExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[InvoiceDetailVO](#schemainvoicedetailvo)|false|none|Java type: com.noosh.nooshapi.vo.InvoiceDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_InvoiceItemDetailVO">InvoiceItemDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemdetailvo"></a>
<a id="schema_InvoiceItemDetailVO"></a>
<a id="tocSinvoiceitemdetailvo"></a>
<a id="tocsinvoiceitemdetailvo"></a>

```json
{
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "invoice_item_id": "1",
  "item_cost": null,
  "item_quantity": "1",
  "item_shipping": null,
  "item_sub_total": null,
  "item_tax": null,
  "job_id": "1",
  "shipment_id": "1",
  "spec_name": "sample spec_name",
  "transactional_item_cost": null,
  "transactional_item_shipping": null,
  "transactional_item_sub_total": null,
  "transactional_item_tax": null
}
```

Java type: com.noosh.nooshapi.vo.InvoiceItemDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|invoice_item_id|integer(int64)|false|none|none|
|item_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_quantity|integer(int64)|false|none|none|
|item_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|job_id|integer(int64)|false|none|none|
|shipment_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|transactional_item_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_InvoiceItemSimpleVO">InvoiceItemSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemsimplevo"></a>
<a id="schema_InvoiceItemSimpleVO"></a>
<a id="tocSinvoiceitemsimplevo"></a>
<a id="tocsinvoiceitemsimplevo"></a>

```json
{
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "invoice_item_id": "1",
  "item_cost": null,
  "item_quantity": "1",
  "item_shipping": null,
  "item_sub_total": null,
  "item_tax": null,
  "job_id": "1",
  "spec_name": "sample spec_name",
  "transactional_item_cost": null,
  "transactional_item_shipping": null,
  "transactional_item_sub_total": null,
  "transactional_item_tax": null
}
```

Java type: com.noosh.nooshapi.vo.InvoiceItemSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|invoice_item_id|integer(int64)|false|none|none|
|item_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_quantity|integer(int64)|false|none|none|
|item_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|job_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|transactional_item_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_InvoiceSimpleVO">InvoiceSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesimplevo"></a>
<a id="schema_InvoiceSimpleVO"></a>
<a id="tocSinvoicesimplevo"></a>
<a id="tocsinvoicesimplevo"></a>

```json
{
  "comments": "sample comments",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "invoice_date": "1970-01-01",
  "invoice_due_date": "1970-01-01",
  "invoice_id": "1",
  "invoice_number": "sample invoice_number",
  "invoice_to": "sample invoice_to",
  "is_final": "1",
  "is_nonBillable": "1",
  "items": [
    {
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "invoice_item_id": "1",
      "item_cost": null,
      "item_quantity": "1",
      "item_shipping": null,
      "item_sub_total": null,
      "item_tax": null,
      "job_id": "1",
      "spec_name": "sample spec_name",
      "transactional_item_cost": null,
      "transactional_item_shipping": null,
      "transactional_item_sub_total": null,
      "transactional_item_tax": null
    }
  ],
  "order_reference": "sample order_reference",
  "order_title": "sample order_title",
  "payment_method": "sample payment_method",
  "prepared_by": "sample prepared_by",
  "project_number": "1",
  "reference_number": "sample reference_number",
  "shipping": null,
  "status": "sample status",
  "sub_total": null,
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_shipping": null,
  "transactional_sub_total": null,
  "transactional_tax": null
}
```

Java type: com.noosh.nooshapi.vo.InvoiceSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|invoice_date|string(date)|false|none|none|
|invoice_due_date|string(date)|false|none|none|
|invoice_id|integer(int64)|false|none|none|
|invoice_number|string|false|none|none|
|invoice_to|string|false|none|none|
|is_final|integer(int32)|false|none|none|
|is_nonBillable|integer(int32)|false|none|none|
|items|[[InvoiceItemSimpleVO](#schemainvoiceitemsimplevo)]|false|none|none|
|order_reference|string|false|none|none|
|order_title|string|false|none|none|
|payment_method|string|false|none|none|
|prepared_by|string|false|none|none|
|project_number|integer(int64)|false|none|none|
|reference_number|string|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_sub_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_ItemOptionVO">ItemOptionVO</h2>
<!-- backwards compatibility -->
<a id="schemaitemoptionvo"></a>
<a id="schema_ItemOptionVO"></a>
<a id="tocSitemoptionvo"></a>
<a id="tocsitemoptionvo"></a>

```json
{
  "item_option_id": "1",
  "quantity": "sample quantity"
}
```

Java type: com.noosh.nooshapi.vo.ItemOptionVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_option_id|integer(int64)|false|none|none|
|quantity|string|false|none|none|

<h2 id="tocS_Map">Map</h2>
<!-- backwards compatibility -->
<a id="schemamap"></a>
<a id="schema_Map"></a>
<a id="tocSmap"></a>
<a id="tocsmap"></a>

```json
null
```

Java type: java.util.Map

<h2 id="tocS_MultiExchangeRateListVO">MultiExchangeRateListVO</h2>
<!-- backwards compatibility -->
<a id="schemamultiexchangeratelistvo"></a>
<a id="schema_MultiExchangeRateListVO"></a>
<a id="tocSmultiexchangeratelistvo"></a>
<a id="tocsmultiexchangeratelistvo"></a>

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.MultiExchangeRateListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_MultiExchangeRatePersisitVO">MultiExchangeRatePersisitVO</h2>
<!-- backwards compatibility -->
<a id="schemamultiexchangeratepersisitvo"></a>
<a id="schema_MultiExchangeRatePersisitVO"></a>
<a id="tocSmultiexchangeratepersisitvo"></a>
<a id="tocsmultiexchangeratepersisitvo"></a>

```json
{
  "activate_date": "1970-01-01",
  "buClientWorkgroupId": "1",
  "currency": "sample currency",
  "rate": null,
  "target": "sample target"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.MultiExchangeRatePersisitVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activate_date|string(date)|false|none|none|
|buClientWorkgroupId|integer(int64)|false|none|none|
|currency|string|false|none|none|
|rate|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|target|string|false|none|none|

<h2 id="tocS_MultiExchangeRatePersistListVO">MultiExchangeRatePersistListVO</h2>
<!-- backwards compatibility -->
<a id="schemamultiexchangeratepersistlistvo"></a>
<a id="schema_MultiExchangeRatePersistListVO"></a>
<a id="tocSmultiexchangeratepersistlistvo"></a>
<a id="tocsmultiexchangeratepersistlistvo"></a>

```json
{
  "exchange_rates": [
    {
      "activate_date": "1970-01-01",
      "buClientWorkgroupId": "1",
      "currency": "sample currency",
      "rate": null,
      "target": "sample target"
    }
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.MultiExchangeRatePersistListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exchange_rates|[[MultiExchangeRatePersisitVO](#schemamultiexchangeratepersisitvo)]|false|none|none|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
null
```

Java type: java.lang.Object

<h2 id="tocS_ObjectStateListVO">ObjectStateListVO</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstatelistvo"></a>
<a id="schema_ObjectStateListVO"></a>
<a id="tocSobjectstatelistvo"></a>
<a id="tocsobjectstatelistvo"></a>

```json
{
  "results": [
    {
      "object_state_id": "1",
      "object_state_name": "sample object_state_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ObjectStateListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ObjectStateSimpleVO](#schemaobjectstatesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ObjectStateSimpleVO">ObjectStateSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaobjectstatesimplevo"></a>
<a id="schema_ObjectStateSimpleVO"></a>
<a id="tocSobjectstatesimplevo"></a>
<a id="tocsobjectstatesimplevo"></a>

```json
{
  "object_state_id": "1",
  "object_state_name": "sample object_state_name"
}
```

Java type: com.noosh.nooshapi.vo.ObjectStateSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object_state_id|integer(int64)|false|none|none|
|object_state_name|string|false|none|none|

<h2 id="tocS_OrderDetailBaseVO">OrderDetailBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetailbasevo"></a>
<a id="schema_OrderDetailBaseVO"></a>
<a id="tocSorderdetailbasevo"></a>
<a id="tocsorderdetailbasevo"></a>

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

Java type: com.noosh.nooshapi.vo.OrderDetailBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_date|string(date)|false|none|none|
|annulled_date|string(date)|false|none|none|
|approved_date|string(date)|false|none|none|
|awarded_date|string(date)|false|none|none|
|budget_type|string|false|none|none|
|buyer|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|classification|string|false|none|none|
|closed_date|string(date)|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|creator_user_id|integer(int64)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_count|integer(int32)|false|none|none|
|last_activity_date|string(date)|false|none|none|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|misc_cost|number(double)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|overs_percent|number(double)|false|none|none|
|parent_order_id|integer(int64)|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|quote_id|integer(int64)|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|supplier_reference|string|false|none|none|
|supplier_selection_reason|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unders_percent|number(double)|false|none|none|

<h2 id="tocS_OrderDetailVO">OrderDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetailvo"></a>
<a id="schema_OrderDetailVO"></a>
<a id="tocSorderdetailvo"></a>
<a id="tocsorderdetailvo"></a>

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

Java type: com.noosh.nooshapi.vo.OrderDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_date|string(date)|false|none|none|
|annulled_date|string(date)|false|none|none|
|approved_date|string(date)|false|none|none|
|awarded_date|string(date)|false|none|none|
|budget_type|string|false|none|none|
|buyer|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|classification|string|false|none|none|
|closed_date|string(date)|false|none|none|
|closing_change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|creator_user_id|integer(int64)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_count|integer(int32)|false|none|none|
|last_activity_date|string(date)|false|none|none|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|misc_cost|number(double)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_items|[[OrderItemSimpleVO](#schemaorderitemsimplevo)]|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|overs_percent|number(double)|false|none|none|
|parent_order_id|integer(int64)|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|quote_id|integer(int64)|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|supplier_reference|string|false|none|none|
|supplier_selection_reason|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unders_percent|number(double)|false|none|none|

<h2 id="tocS_OrderDetailWithIndicatorVO">OrderDetailWithIndicatorVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetailwithindicatorvo"></a>
<a id="schema_OrderDetailWithIndicatorVO"></a>
<a id="tocSorderdetailwithindicatorvo"></a>
<a id="tocsorderdetailwithindicatorvo"></a>

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "is_sell_order": "false",
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

Java type: com.noosh.nooshapi.vo.OrderDetailWithIndicatorVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_date|string(date)|false|none|none|
|annulled_date|string(date)|false|none|none|
|approved_date|string(date)|false|none|none|
|awarded_date|string(date)|false|none|none|
|budget_type|string|false|none|none|
|buyer|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|classification|string|false|none|none|
|closed_date|string(date)|false|none|none|
|closing_change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|creator_user_id|integer(int64)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_sell_order|boolean|false|none|none|
|item_count|integer(int32)|false|none|none|
|last_activity_date|string(date)|false|none|none|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|misc_cost|number(double)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_items|[[OrderItemSimpleVO](#schemaorderitemsimplevo)]|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|overs_percent|number(double)|false|none|none|
|parent_order_id|integer(int64)|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|quote_id|integer(int64)|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|supplier_reference|string|false|none|none|
|supplier_selection_reason|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unders_percent|number(double)|false|none|none|

<h2 id="tocS_OrderDetailWorkgroupLevelVO">OrderDetailWorkgroupLevelVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetailworkgrouplevelvo"></a>
<a id="schema_OrderDetailWorkgroupLevelVO"></a>
<a id="tocSorderdetailworkgrouplevelvo"></a>
<a id="tocsorderdetailworkgrouplevelvo"></a>

```json
{
  "accepted_date": "1970-01-01",
  "annulled_date": "1970-01-01",
  "approved_date": "1970-01-01",
  "awarded_date": "1970-01-01",
  "budget_type": "sample budget_type",
  "buyer": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "classification": "sample classification",
  "closed_date": "1970-01-01",
  "closing_change_orders": [
    {
      "accepted_date": "1970-01-01",
      "annulled_date": "1970-01-01",
      "approved_date": "1970-01-01",
      "awarded_date": "1970-01-01",
      "budget_type": "sample budget_type",
      "buyer": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "classification": "sample classification",
      "closed_date": "1970-01-01",
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "creator_user_id": "1",
      "currency": "sample currency",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "grand_total": null,
      "item_count": "1",
      "last_activity_date": "1970-01-01",
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "misc_cost": "1.1",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "order_total": null,
      "overs_percent": "1.1",
      "parent_order_id": "1",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "quote_id": "1",
      "shipping": null,
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "supplier_reference": "sample supplier_reference",
      "supplier_selection_reason": "sample supplier_selection_reason",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "tax": null,
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_order_total": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "unders_percent": "1.1"
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "grand_total": null,
  "grand_total_with_changes": null,
  "item_count": "1",
  "last_activity_date": "1970-01-01",
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "misc_cost": "1.1",
  "order_id": "1",
  "order_items": [
    {
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_price": "1.1",
      "quantity": "1.1",
      "shipping": null,
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "tax": null,
      "transactional_item_price": "1.1",
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_unit_price": null,
      "unit_description": "sample unit_description",
      "unit_price": null
    }
  ],
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "order_total": null,
  "overs_percent": "1.1",
  "parent_order_id": "1",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "quote_id": "1",
  "shipping": null,
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason": "sample supplier_selection_reason",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null,
  "transactional_order_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "unders_percent": "1.1"
}
```

Java type: com.noosh.nooshapi.vo.OrderDetailWorkgroupLevelVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted_date|string(date)|false|none|none|
|annulled_date|string(date)|false|none|none|
|approved_date|string(date)|false|none|none|
|awarded_date|string(date)|false|none|none|
|budget_type|string|false|none|none|
|buyer|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|classification|string|false|none|none|
|closed_date|string(date)|false|none|none|
|closing_change_orders|[[OrderDetailBaseVO](#schemaorderdetailbasevo)]|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|creator_user_id|integer(int64)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_count|integer(int32)|false|none|none|
|last_activity_date|string(date)|false|none|none|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|misc_cost|number(double)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_items|[[OrderItemSimpleVO](#schemaorderitemsimplevo)]|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|overs_percent|number(double)|false|none|none|
|parent_order_id|integer(int64)|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|quote_id|integer(int64)|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier|[UserVO](#schemauservo)|false|none|Java type: com.noosh.nooshapi.vo.UserVO|
|supplier_reference|string|false|none|none|
|supplier_selection_reason|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_order_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unders_percent|number(double)|false|none|none|

<h2 id="tocS_OrderExpandWorkgroupLevelVO">OrderExpandWorkgroupLevelVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderexpandworkgrouplevelvo"></a>
<a id="schema_OrderExpandWorkgroupLevelVO"></a>
<a id="tocSorderexpandworkgrouplevelvo"></a>
<a id="tocsorderexpandworkgrouplevelvo"></a>

```json
{
  "result": {
    "accepted_date": "1970-01-01",
    "annulled_date": "1970-01-01",
    "approved_date": "1970-01-01",
    "awarded_date": "1970-01-01",
    "budget_type": "sample budget_type",
    "buyer": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "buyer_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "classification": "sample classification",
    "closed_date": "1970-01-01",
    "closing_change_orders": [
      {
        "accepted_date": "1970-01-01",
        "annulled_date": "1970-01-01",
        "approved_date": "1970-01-01",
        "awarded_date": "1970-01-01",
        "budget_type": "sample budget_type",
        "buyer": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "buyer_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "classification": "sample classification",
        "closed_date": "1970-01-01",
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "creator_user_id": "1",
        "currency": "sample currency",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "grand_total": null,
        "item_count": "1",
        "last_activity_date": "1970-01-01",
        "last_changed": "1970-01-01",
        "last_status_change": "1970-01-01",
        "misc_cost": "1.1",
        "order_id": "1",
        "order_number": "sample order_number",
        "order_title": "sample order_title",
        "order_total": null,
        "overs_percent": "1.1",
        "parent_order_id": "1",
        "payment_reference": "sample payment_reference",
        "print_order_ids": [
          "1"
        ],
        "quote_id": "1",
        "shipping": null,
        "status": "sample status",
        "status_comments": "sample status_comments",
        "supplier": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        },
        "supplier_reference": "sample supplier_reference",
        "supplier_selection_reason": "sample supplier_selection_reason",
        "supplier_workgroup": {
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        },
        "tax": null,
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null,
        "transactional_order_total": null,
        "transactional_shipping": null,
        "transactional_tax": null,
        "unders_percent": "1.1"
      }
    ],
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "creator_user_id": "1",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "grand_total": null,
    "grand_total_with_changes": null,
    "item_count": "1",
    "last_activity_date": "1970-01-01",
    "last_changed": "1970-01-01",
    "last_status_change": "1970-01-01",
    "misc_cost": "1.1",
    "order_id": "1",
    "order_items": [
      {
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "item_id": "1",
        "item_price": "1.1",
        "quantity": "1.1",
        "shipping": null,
        "spec": {
          "job_id": "1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        },
        "tax": null,
        "transactional_item_price": "1.1",
        "transactional_shipping": null,
        "transactional_tax": null,
        "transactional_unit_price": null,
        "unit_description": "sample unit_description",
        "unit_price": null
      }
    ],
    "order_number": "sample order_number",
    "order_title": "sample order_title",
    "order_total": null,
    "overs_percent": "1.1",
    "parent_order_id": "1",
    "payment_reference": "sample payment_reference",
    "print_order_ids": [
      "1"
    ],
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "quote_id": "1",
    "shipping": null,
    "status": "sample status",
    "status_comments": "sample status_comments",
    "supplier": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name",
      "user_id": "1"
    },
    "supplier_reference": "sample supplier_reference",
    "supplier_selection_reason": "sample supplier_selection_reason",
    "supplier_workgroup": {
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    },
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_grand_total_with_changes": null,
    "transactional_order_total": null,
    "transactional_shipping": null,
    "transactional_tax": null,
    "unders_percent": "1.1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.OrderExpandWorkgroupLevelVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[OrderDetailWorkgroupLevelVO](#schemaorderdetailworkgrouplevelvo)|false|none|Java type: com.noosh.nooshapi.vo.OrderDetailWorkgroupLevelVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_OrderItemPersistVO">OrderItemPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderitempersistvo"></a>
<a id="schema_OrderItemPersistVO"></a>
<a id="tocSorderitempersistvo"></a>
<a id="tocsorderitempersistvo"></a>

```json
{
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "ex_tax_value_calculated": null,
  "notes": "sample notes",
  "per": "1",
  "price": null,
  "quantity": null,
  "shipping": null,
  "spec_id": "1",
  "spec_reference_id": "1",
  "tax": "sample tax"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.OrderItemPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_date|string(date)|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|ex_tax_value_calculated|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|notes|string|false|none|none|
|per|integer(int64)|false|none|none|
|price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|spec_id|integer(int64)|false|none|none|
|spec_reference_id|integer(int64)|false|none|none|
|tax|string|false|none|none|

<h2 id="tocS_OrderItemSimpleVO">OrderItemSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderitemsimplevo"></a>
<a id="schema_OrderItemSimpleVO"></a>
<a id="tocSorderitemsimplevo"></a>
<a id="tocsorderitemsimplevo"></a>

```json
{
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "item_id": "1",
  "item_price": "1.1",
  "quantity": "1.1",
  "shipping": null,
  "spec": {
    "job_id": "1",
    "reference_number": "sample reference_number",
    "spec_id": "1",
    "spec_name": "sample spec_name"
  },
  "tax": null,
  "transactional_item_price": "1.1",
  "transactional_shipping": null,
  "transactional_tax": null,
  "transactional_unit_price": null,
  "unit_description": "sample unit_description",
  "unit_price": null
}
```

Java type: com.noosh.nooshapi.vo.OrderItemSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|item_id|integer(int64)|false|none|none|
|item_price|number(double)|false|none|none|
|quantity|number(double)|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|spec|[SpecBaseVO](#schemaspecbasevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecBaseVO|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_price|number(double)|false|none|none|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_unit_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unit_description|string|false|none|none|
|unit_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_OrderListVO">OrderListVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderlistvo"></a>
<a id="schema_OrderListVO"></a>
<a id="tocSorderlistvo"></a>
<a id="tocsorderlistvo"></a>

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.OrderListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[OrderSimpleVO](#schemaordersimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_OrderPO">OrderPO</h2>
<!-- backwards compatibility -->
<a id="schemaorderpo"></a>
<a id="schema_OrderPO"></a>
<a id="tocSorderpo"></a>
<a id="tocsorderpo"></a>

```json
{
  "buyer_user_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "invoice_or_billing_recipient": "1",
  "order_completion_date": "1970-01-01",
  "order_items": [
    {
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_name": "sample param_name",
          "string_value": "sample string_value"
        }
      ],
      "ex_tax_value_calculated": null,
      "notes": "sample notes",
      "per": "1",
      "price": null,
      "quantity": null,
      "shipping": null,
      "spec_id": "1",
      "spec_reference_id": "1",
      "tax": "sample tax"
    }
  ],
  "other_selection_reason": "sample other_selection_reason",
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "sellOrder": "false",
  "shipping": null,
  "supplier_reference": "sample supplier_reference",
  "supplier_selection_reason_id": "1",
  "supplier_user_id": "1",
  "tax": "sample tax",
  "title": "sample title"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.OrderPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_user_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|invoice_or_billing_recipient|integer(int64)|false|none|none|
|order_completion_date|string(date)|false|none|none|
|order_items|[[OrderItemPersistVO](#schemaorderitempersistvo)]|false|none|none|
|other_selection_reason|string|false|none|none|
|payment_method_id|integer(int64)|false|none|none|
|payment_reference_no|string|false|none|none|
|sellOrder|boolean|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|supplier_reference|string|false|none|none|
|supplier_selection_reason_id|integer(int64)|false|none|none|
|supplier_user_id|integer(int64)|false|none|none|
|tax|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_OrderSimpleBaseVO">OrderSimpleBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaordersimplebasevo"></a>
<a id="schema_OrderSimpleBaseVO"></a>
<a id="tocSordersimplebasevo"></a>
<a id="tocsordersimplebasevo"></a>

```json
{
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "currency": "sample currency",
  "grand_total": null,
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "order_id": "1",
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier_reference": "sample supplier_reference",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null
}
```

Java type: com.noosh.nooshapi.vo.OrderSimpleBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier_reference|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_OrderSimpleVO">OrderSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaordersimplevo"></a>
<a id="schema_OrderSimpleVO"></a>
<a id="tocSordersimplevo"></a>
<a id="tocsordersimplevo"></a>

```json
{
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "closing_change_orders": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "currency": "sample currency",
  "grand_total": null,
  "grand_total_with_changes": null,
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "order_id": "1",
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier_reference": "sample supplier_reference",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null
}
```

Java type: com.noosh.nooshapi.vo.OrderSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|change_orders|[[OrderSimpleBaseVO](#schemaordersimplebasevo)]|false|none|none|
|closing_change_orders|[[OrderSimpleBaseVO](#schemaordersimplebasevo)]|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier_reference|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_OrderUpdPersistVO">OrderUpdPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderupdpersistvo"></a>
<a id="schema_OrderUpdPersistVO"></a>
<a id="tocSorderupdpersistvo"></a>
<a id="tocsorderupdpersistvo"></a>

```json
{
  "action": "sample action",
  "budget_type_field_id": "1",
  "comments": "sample comments",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "order_completion_date": "1970-01-01",
  "order_id": "1",
  "other_selection_reason": "sample other_selection_reason",
  "overs_percent": null,
  "payment_method_id": "1",
  "payment_reference_no": "sample payment_reference_no",
  "reject_reason": "sample reject_reason",
  "supplier_selection_reason_id": "1",
  "unders_percent": null
}
```

Java type: com.noosh.nooshapi.vo.OrderUpdPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|accept or reject|
|budget_type_field_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|order_completion_date|string(date)|false|none|none|
|order_id|integer(int64)|false|none|none|
|other_selection_reason|string|false|none|none|
|overs_percent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|payment_method_id|integer(int64)|false|none|none|
|payment_reference_no|string|false|none|none|
|reject_reason|string|false|none|none|
|supplier_selection_reason_id|integer(int64)|false|none|none|
|unders_percent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_OrderVO">OrderVO</h2>
<!-- backwards compatibility -->
<a id="schemaordervo"></a>
<a id="schema_OrderVO"></a>
<a id="tocSordervo"></a>
<a id="tocsordervo"></a>

```json
{
  "order_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.OrderVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_id|integer(int64)|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_OrderWorkgroupLevelListVO">OrderWorkgroupLevelListVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderworkgrouplevellistvo"></a>
<a id="schema_OrderWorkgroupLevelListVO"></a>
<a id="tocSorderworkgrouplevellistvo"></a>
<a id="tocsorderworkgrouplevellistvo"></a>

```json
{
  "results": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "closing_change_orders": [
        {
          "buyer_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "comments": "sample comments",
          "completion_date": "1970-01-01",
          "currency": "sample currency",
          "grand_total": null,
          "last_changed": "1970-01-01",
          "last_status_change": "1970-01-01",
          "order_id": "1",
          "order_number": "sample order_number",
          "order_title": "sample order_title",
          "payment_reference": "sample payment_reference",
          "print_order_ids": [
            "1"
          ],
          "status": "sample status",
          "status_comments": "sample status_comments",
          "supplier_reference": "sample supplier_reference",
          "supplier_workgroup": {
            "workgroup_id": "1",
            "workgroup_name": "sample workgroup_name"
          },
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "grand_total_with_changes": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null,
      "transactional_grand_total_with_changes": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[OrderWorkgroupLevelSimpleVO](#schemaorderworkgrouplevelsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_OrderWorkgroupLevelSimpleVO">OrderWorkgroupLevelSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaorderworkgrouplevelsimplevo"></a>
<a id="schema_OrderWorkgroupLevelSimpleVO"></a>
<a id="tocSorderworkgrouplevelsimplevo"></a>
<a id="tocsorderworkgrouplevelsimplevo"></a>

```json
{
  "buyer_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "change_orders": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "closing_change_orders": [
    {
      "buyer_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "currency": "sample currency",
      "grand_total": null,
      "last_changed": "1970-01-01",
      "last_status_change": "1970-01-01",
      "order_id": "1",
      "order_number": "sample order_number",
      "order_title": "sample order_title",
      "payment_reference": "sample payment_reference",
      "print_order_ids": [
        "1"
      ],
      "status": "sample status",
      "status_comments": "sample status_comments",
      "supplier_reference": "sample supplier_reference",
      "supplier_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "currency": "sample currency",
  "grand_total": null,
  "grand_total_with_changes": null,
  "last_changed": "1970-01-01",
  "last_status_change": "1970-01-01",
  "order_id": "1",
  "order_number": "sample order_number",
  "order_title": "sample order_title",
  "payment_reference": "sample payment_reference",
  "print_order_ids": [
    "1"
  ],
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "status": "sample status",
  "status_comments": "sample status_comments",
  "supplier_reference": "sample supplier_reference",
  "supplier_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_grand_total_with_changes": null
}
```

Java type: com.noosh.nooshapi.vo.OrderWorkgroupLevelSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|change_orders|[[OrderSimpleBaseVO](#schemaordersimplebasevo)]|false|none|none|
|closing_change_orders|[[OrderSimpleBaseVO](#schemaordersimplebasevo)]|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|last_changed|string(date)|false|none|none|
|last_status_change|string(date)|false|none|none|
|order_id|integer(int64)|false|none|none|
|order_number|string|false|none|none|
|order_title|string|false|none|none|
|payment_reference|string|false|none|none|
|print_order_ids|[integer(int64)]|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|status|string|false|none|none|
|status_comments|string|false|none|none|
|supplier_reference|string|false|none|none|
|supplier_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_grand_total_with_changes|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_PaperItemPO">PaperItemPO</h2>
<!-- backwards compatibility -->
<a id="schemapaperitempo"></a>
<a id="schema_PaperItemPO"></a>
<a id="tocSpaperitempo"></a>
<a id="tocspaperitempo"></a>

```json
{
  "min_uom_qty": "1",
  "paper_id": "1",
  "price_1": null,
  "price_2": null,
  "price_3": null,
  "price_4": null,
  "price_5": null,
  "price_per_tonne": null,
  "qty_uom": "sample qty_uom",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "size": "sample size",
  "sku": "sample sku",
  "unit_price_1": null,
  "unit_price_2": null,
  "unit_price_3": null,
  "unit_price_4": null,
  "unit_price_5": null
}
```

Java type: com.noosh.domain.nooshapi.persist.po.PaperItemPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_uom_qty|integer(int64)|false|none|none|
|paper_id|integer(int64)|false|none|none|
|price_1|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|price_2|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|price_3|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|price_4|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|price_5|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|price_per_tonne|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|qty_uom|string|false|none|none|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|size|string|false|none|none|
|sku|string|false|none|none|
|unit_price_1|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unit_price_2|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unit_price_3|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unit_price_4|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|unit_price_5|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_PersonVO">PersonVO</h2>
<!-- backwards compatibility -->
<a id="schemapersonvo"></a>
<a id="schema_PersonVO"></a>
<a id="tocSpersonvo"></a>
<a id="tocspersonvo"></a>

```json
{
  "email": "sample email",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "middle_name": "sample middle_name"
}
```

Java type: com.noosh.nooshapi.vo.PersonVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|middle_name|string|false|none|none|

<h2 id="tocS_ProductTypeVO">ProductTypeVO</h2>
<!-- backwards compatibility -->
<a id="schemaproducttypevo"></a>
<a id="schema_ProductTypeVO"></a>
<a id="tocSproducttypevo"></a>
<a id="tocsproducttypevo"></a>

```json
{
  "label": "sample label",
  "product_type_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.ProductTypeVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|product_type_id|integer(int64)|false|none|none|

<h2 id="tocS_ProfileImageVO">ProfileImageVO</h2>
<!-- backwards compatibility -->
<a id="schemaprofileimagevo"></a>
<a id="schema_ProfileImageVO"></a>
<a id="tocSprofileimagevo"></a>
<a id="tocsprofileimagevo"></a>

```json
{
  "profileImgUrl": "sample profileImgUrl",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProfileImageVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileImgUrl|string|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectBaseVO">ProjectBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectbasevo"></a>
<a id="schema_ProjectBaseVO"></a>
<a id="tocSprojectbasevo"></a>
<a id="tocsprojectbasevo"></a>

```json
{
  "project_id": "1",
  "project_name": "sample project_name",
  "project_number": "sample project_number"
}
```

Java type: com.noosh.nooshapi.vo.ProjectBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|integer(int64)|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|

<h2 id="tocS_ProjectCategoryListVO">ProjectCategoryListVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcategorylistvo"></a>
<a id="schema_ProjectCategoryListVO"></a>
<a id="tocSprojectcategorylistvo"></a>
<a id="tocsprojectcategorylistvo"></a>

```json
{
  "results": [
    {
      "project_category_id": "1",
      "project_category_name": "sample project_category_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectCategoryListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ProjectCategorySimpleVO](#schemaprojectcategorysimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectCategorySimpleVO">ProjectCategorySimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcategorysimplevo"></a>
<a id="schema_ProjectCategorySimpleVO"></a>
<a id="tocSprojectcategorysimplevo"></a>
<a id="tocsprojectcategorysimplevo"></a>

```json
{
  "project_category_id": "1",
  "project_category_name": "sample project_category_name"
}
```

Java type: com.noosh.nooshapi.vo.ProjectCategorySimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_category_id|integer(int64)|false|none|none|
|project_category_name|string|false|none|none|

<h2 id="tocS_ProjectDetailVO">ProjectDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdetailvo"></a>
<a id="schema_ProjectDetailVO"></a>
<a id="tocSprojectdetailvo"></a>
<a id="tocsprojectdetailvo"></a>

```json
{
  "category": "sample category",
  "client_account": "sample client_account",
  "client_user": "sample client_user",
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason": "sample deactivation_reason",
  "is_active": "false",
  "is_hot": "false",
  "last_spec_update": "1970-01-01",
  "mod_date": "1970-01-01",
  "owner_workgroup": "sample owner_workgroup",
  "parent_project": {
    "client_account": "sample client_account",
    "client_user": "sample client_user",
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "created_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "project_create_date": "1970-01-01",
    "project_description": "sample project_description",
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "project_create_date": "1970-01-01",
  "project_description": "sample project_description",
  "project_id": "1",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_status": "sample project_status",
  "team_owners": "sample team_owners"
}
```

Java type: com.noosh.nooshapi.vo.ProjectDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|client_account|string|false|none|none|
|client_user|string|false|none|none|
|client_user_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|deactivation_reason|string|false|none|none|
|is_active|boolean|false|none|none|
|is_hot|boolean|false|none|none|
|last_spec_update|string(date)|false|none|none|
|mod_date|string(date)|false|none|none|
|owner_workgroup|string|false|none|none|
|parent_project|[ProjectParentVO](#schemaprojectparentvo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectParentVO|
|project_create_date|string(date)|false|none|none|
|project_description|string|false|none|none|
|project_id|integer(int64)|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|
|project_status|string|false|none|none|
|team_owners|string|false|none|none|

<h2 id="tocS_ProjectExpandVO">ProjectExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectexpandvo"></a>
<a id="schema_ProjectExpandVO"></a>
<a id="tocSprojectexpandvo"></a>
<a id="tocsprojectexpandvo"></a>

```json
{
  "result": {
    "category": "sample category",
    "client_account": "sample client_account",
    "client_user": "sample client_user",
    "client_user_id": "1",
    "client_workgroup_id": "1",
    "comments": "sample comments",
    "completion_date": "1970-01-01",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "deactivation_reason": "sample deactivation_reason",
    "is_active": "false",
    "is_hot": "false",
    "last_spec_update": "1970-01-01",
    "mod_date": "1970-01-01",
    "owner_workgroup": "sample owner_workgroup",
    "parent_project": {
      "client_account": "sample client_account",
      "client_user": "sample client_user",
      "client_user_id": "1",
      "client_workgroup_id": "1",
      "comments": "sample comments",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "project_create_date": "1970-01-01",
      "project_description": "sample project_description",
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "project_create_date": "1970-01-01",
    "project_description": "sample project_description",
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number",
    "project_status": "sample project_status",
    "team_owners": "sample team_owners"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[ProjectDetailVO](#schemaprojectdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectHomeUserFieldsListVO">ProjectHomeUserFieldsListVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojecthomeuserfieldslistvo"></a>
<a id="schema_ProjectHomeUserFieldsListVO"></a>
<a id="tocSprojecthomeuserfieldslistvo"></a>
<a id="tocsprojecthomeuserfieldslistvo"></a>

```json
{
  "results": [
    {
      "is_required": "false",
      "label": "sample label",
      "ordinal_number": "1",
      "param_name": "sample param_name",
      "type": "sample type",
      "user_field_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectHomeUserFieldsListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[UserFieldsSimpleVO](#schemauserfieldssimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectIdListVO">ProjectIdListVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectidlistvo"></a>
<a id="schema_ProjectIdListVO"></a>
<a id="tocSprojectidlistvo"></a>
<a id="tocsprojectidlistvo"></a>

```json
{
  "childProjectIds": [
    "1"
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.ProjectIdListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childProjectIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ProjectListVO">ProjectListVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlistvo"></a>
<a id="schema_ProjectListVO"></a>
<a id="tocSprojectlistvo"></a>
<a id="tocsprojectlistvo"></a>

```json
{
  "results": [
    {
      "client_account": "sample client_account",
      "client_workgroup_id": "1",
      "completion_date": "1970-01-01",
      "is_active": "false",
      "is_hot": "false",
      "last_spec_update": "1970-01-01",
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number",
      "project_status": "sample project_status"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ProjectSimpleVO](#schemaprojectsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectParentVO">ProjectParentVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectparentvo"></a>
<a id="schema_ProjectParentVO"></a>
<a id="tocSprojectparentvo"></a>
<a id="tocsprojectparentvo"></a>

```json
{
  "client_account": "sample client_account",
  "client_user": "sample client_user",
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "created_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "project_create_date": "1970-01-01",
  "project_description": "sample project_description",
  "project_id": "1",
  "project_name": "sample project_name",
  "project_number": "sample project_number"
}
```

Java type: com.noosh.nooshapi.vo.ProjectParentVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_account|string|false|none|none|
|client_user|string|false|none|none|
|client_user_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|created_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|project_create_date|string(date)|false|none|none|
|project_description|string|false|none|none|
|project_id|integer(int64)|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|

<h2 id="tocS_ProjectPatchPO">ProjectPatchPO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpatchpo"></a>
<a id="schema_ProjectPatchPO"></a>
<a id="tocSprojectpatchpo"></a>
<a id="tocsprojectpatchpo"></a>

```json
{
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason_id": "1",
  "is_active": "false",
  "is_hot": "false",
  "project_category_id": "1",
  "project_description": "sample project_description",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_status_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.ProjectPatchPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_user_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|deactivation_reason_id|integer(int64)|false|none|none|
|is_active|boolean|false|none|none|
|is_hot|boolean|false|none|none|
|project_category_id|integer(int64)|false|none|none|
|project_description|string|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|
|project_status_id|integer(int64)|false|none|none|

<h2 id="tocS_ProjectPersistVO">ProjectPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpersistvo"></a>
<a id="schema_ProjectPersistVO"></a>
<a id="tocSprojectpersistvo"></a>
<a id="tocsprojectpersistvo"></a>

```json
{
  "client_account": "sample client_account",
  "client_user_id": "1",
  "client_workgroup_id": "1",
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "deactivation_reason_id": "1",
  "is_active": "false",
  "is_hot": "false",
  "is_paper_direct": "false",
  "project_category_id": "1",
  "project_description": "sample project_description",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_owner_user_id": "1",
  "project_status_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.ProjectPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_account|string|false|none|none|
|client_user_id|integer(int64)|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|deactivation_reason_id|integer(int64)|false|none|none|
|is_active|boolean|false|none|none|
|is_hot|boolean|false|none|none|
|is_paper_direct|boolean|false|none|none|
|project_category_id|integer(int64)|false|none|none|
|project_description|string|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|
|project_owner_user_id|integer(int64)|false|none|none|
|project_status_id|integer(int64)|true|none|none|

<h2 id="tocS_ProjectSimpleVO">ProjectSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsimplevo"></a>
<a id="schema_ProjectSimpleVO"></a>
<a id="tocSprojectsimplevo"></a>
<a id="tocsprojectsimplevo"></a>

```json
{
  "client_account": "sample client_account",
  "client_workgroup_id": "1",
  "completion_date": "1970-01-01",
  "is_active": "false",
  "is_hot": "false",
  "last_spec_update": "1970-01-01",
  "project_id": "1",
  "project_name": "sample project_name",
  "project_number": "sample project_number",
  "project_status": "sample project_status"
}
```

Java type: com.noosh.nooshapi.vo.ProjectSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_account|string|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|completion_date|string(date)|false|none|none|
|is_active|boolean|false|none|none|
|is_hot|boolean|false|none|none|
|last_spec_update|string(date)|false|none|none|
|project_id|integer(int64)|false|none|none|
|project_name|string|false|none|none|
|project_number|string|false|none|none|
|project_status|string|false|none|none|

<h2 id="tocS_ProjectStatusListVO">ProjectStatusListVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatuslistvo"></a>
<a id="schema_ProjectStatusListVO"></a>
<a id="tocSprojectstatuslistvo"></a>
<a id="tocsprojectstatuslistvo"></a>

```json
{
  "results": [
    {
      "project_status_id": "1",
      "project_status_name": "sample project_status_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectStatusListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ProjectStatusSimpleVO](#schemaprojectstatussimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ProjectStatusSimpleVO">ProjectStatusSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatussimplevo"></a>
<a id="schema_ProjectStatusSimpleVO"></a>
<a id="tocSprojectstatussimplevo"></a>
<a id="tocsprojectstatussimplevo"></a>

```json
{
  "project_status_id": "1",
  "project_status_name": "sample project_status_name"
}
```

Java type: com.noosh.nooshapi.vo.ProjectStatusSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_status_id|integer(int64)|false|none|none|
|project_status_name|string|false|none|none|

<h2 id="tocS_ProjectTimeCardVO">ProjectTimeCardVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojecttimecardvo"></a>
<a id="schema_ProjectTimeCardVO"></a>
<a id="tocSprojecttimecardvo"></a>
<a id="tocsprojecttimecardvo"></a>

```json
{
  "project_id": "1",
  "project_name": "sample project_name"
}
```

Java type: com.noosh.nooshapi.vo.ProjectTimeCardVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|integer(int64)|false|none|none|
|project_name|string|false|none|none|

<h2 id="tocS_ProjectVO">ProjectVO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectvo"></a>
<a id="schema_ProjectVO"></a>
<a id="tocSprojectvo"></a>
<a id="tocsprojectvo"></a>

```json
{
  "project_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ProjectVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|integer(int64)|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_PropertyPaAndAttVO">PropertyPaAndAttVO</h2>
<!-- backwards compatibility -->
<a id="schemapropertypaandattvo"></a>
<a id="schema_PropertyPaAndAttVO"></a>
<a id="tocSpropertypaandattvo"></a>
<a id="tocspropertypaandattvo"></a>

```json
{
  "date_value": "1970-01-01",
  "number_value": null,
  "param_id": "1",
  "param_name": "sample param_name",
  "property_attribute_id": "1",
  "string_value": "sample string_value"
}
```

Java type: com.noosh.nooshapi.vo.PropertyPaAndAttVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_value|string(date)|false|none|none|
|number_value|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|param_id|integer(int64)|false|none|none|
|param_name|string|false|none|none|
|property_attribute_id|integer(int64)|false|none|none|
|string_value|string|false|none|none|

<h2 id="tocS_PropertyParamListVO">PropertyParamListVO</h2>
<!-- backwards compatibility -->
<a id="schemapropertyparamlistvo"></a>
<a id="schema_PropertyParamListVO"></a>
<a id="tocSpropertyparamlistvo"></a>
<a id="tocspropertyparamlistvo"></a>

```json
{
  "result": [
    {
      "data_type": "sample data_type",
      "param_name": "sample param_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.PropertyParamListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[PropertyParamSimpleVO](#schemapropertyparamsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_PropertyParamSimpleVO">PropertyParamSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemapropertyparamsimplevo"></a>
<a id="schema_PropertyParamSimpleVO"></a>
<a id="tocSpropertyparamsimplevo"></a>
<a id="tocspropertyparamsimplevo"></a>

```json
{
  "data_type": "sample data_type",
  "param_name": "sample param_name"
}
```

Java type: com.noosh.nooshapi.vo.PropertyParamSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_type|string|false|none|none|
|param_name|string|false|none|none|

<h2 id="tocS_PropertyPersistVO">PropertyPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemapropertypersistvo"></a>
<a id="schema_PropertyPersistVO"></a>
<a id="tocSpropertypersistvo"></a>
<a id="tocspropertypersistvo"></a>

```json
{
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "paper_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.PropertyPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|paper_id|integer(int64)|false|none|none|

<h2 id="tocS_QuoteBaseVO">QuoteBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotebasevo"></a>
<a id="schema_QuoteBaseVO"></a>
<a id="tocSquotebasevo"></a>
<a id="tocsquotebasevo"></a>

```json
{
  "currency": "sample currency",
  "grand_total": null,
  "quote_id": "1",
  "quote_title": "sample quote_title",
  "status": "sample status",
  "submit_date": "1970-01-01",
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null
}
```

Java type: com.noosh.nooshapi.vo.QuoteBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quote_id|integer(int64)|false|none|none|
|quote_title|string|false|none|none|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_QuoteDetailVO">QuoteDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotedetailvo"></a>
<a id="schema_QuoteDetailVO"></a>
<a id="tocSquotedetailvo"></a>
<a id="tocsquotedetailvo"></a>

```json
{
  "client": "sample client",
  "client_user_id": "1",
  "comments": "sample comments",
  "creator_user_id": "1",
  "currency": "sample currency",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "description": "sample description",
  "grand_total": null,
  "is_show_supplier_information": "false",
  "last_update_by_user_id": "1",
  "proposed_order_completion_date": "1970-01-01",
  "quote_expiration_date": "1970-01-01",
  "quote_id": "1",
  "quote_items": [
    {
      "chosen_quantity": null,
      "comments": "sample comments",
      "completion_date": "1970-01-01",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "item_id": "1",
      "item_prices": [
        {
          "breakouts": [
            {
              "breakout_id": "1",
              "breakout_name": "sample breakout_name",
              "breakout_pre_markup": null,
              "breakout_price": null,
              "transactional_breakout_pre_markup": null,
              "transactional_breakout_price": null
            }
          ],
          "cost": null,
          "custom_fields": [
            {
              "date_value": "1970-01-01",
              "number_value": null,
              "param_id": "1",
              "param_name": "sample param_name",
              "property_attribute_id": "1",
              "string_value": "sample string_value"
            }
          ],
          "fixed": null,
          "is_chosen": "false",
          "is_included": "false",
          "is_quoted": "false",
          "parent_price_id": "1",
          "price_id": "1",
          "quantity": null,
          "sell_price": null,
          "shipping": null,
          "source": null,
          "supplier": "sample supplier",
          "tax": null,
          "total": null,
          "transactional_cost": null,
          "transactional_fixed": null,
          "transactional_sell_price": null,
          "transactional_shipping": null,
          "transactional_tax": null,
          "transactional_total": null,
          "transactional_variable": null,
          "variable": null,
          "variable_percent": null
        }
      ],
      "item_shipping_total": null,
      "item_tax_total": null,
      "item_total": null,
      "reason_for_quote_selection": "sample reason_for_quote_selection",
      "show_cost_prices_and_markup": "false",
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      },
      "transactional_item_shipping_total": null,
      "transactional_item_tax_total": null,
      "transactional_item_total": null,
      "vat_code": "sample vat_code",
      "vat_rate": null
    }
  ],
  "quote_items_total": null,
  "quote_title": "sample quote_title",
  "shipping": null,
  "status": "sample status",
  "submit_date": "1970-01-01",
  "tax": null,
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null,
  "transactional_quote_items_total": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "vat_code": "sample vat_code",
  "vat_rate": null
}
```

Java type: com.noosh.nooshapi.vo.QuoteDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|string|false|none|none|
|client_user_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|creator_user_id|integer(int64)|false|none|none|
|currency|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|description|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_show_supplier_information|boolean|false|none|none|
|last_update_by_user_id|integer(int64)|false|none|none|
|proposed_order_completion_date|string(date)|false|none|none|
|quote_expiration_date|string(date)|false|none|none|
|quote_id|integer(int64)|false|none|none|
|quote_items|[[QuoteItemDetailVO](#schemaquoteitemdetailvo)]|false|none|none|
|quote_items_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quote_title|string|false|none|none|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_quote_items_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|vat_code|string|false|none|none|
|vat_rate|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_QuoteExpandVO">QuoteExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaquoteexpandvo"></a>
<a id="schema_QuoteExpandVO"></a>
<a id="tocSquoteexpandvo"></a>
<a id="tocsquoteexpandvo"></a>

```json
{
  "result": {
    "client": "sample client",
    "client_user_id": "1",
    "comments": "sample comments",
    "creator_user_id": "1",
    "currency": "sample currency",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "description": "sample description",
    "grand_total": null,
    "is_show_supplier_information": "false",
    "last_update_by_user_id": "1",
    "proposed_order_completion_date": "1970-01-01",
    "quote_expiration_date": "1970-01-01",
    "quote_id": "1",
    "quote_items": [
      {
        "chosen_quantity": null,
        "comments": "sample comments",
        "completion_date": "1970-01-01",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "item_id": "1",
        "item_prices": [
          {
            "breakouts": [
              {
                "breakout_id": "1",
                "breakout_name": "sample breakout_name",
                "breakout_pre_markup": null,
                "breakout_price": null,
                "transactional_breakout_pre_markup": null,
                "transactional_breakout_price": null
              }
            ],
            "cost": null,
            "custom_fields": [
              {
                "date_value": "1970-01-01",
                "number_value": null,
                "param_id": "1",
                "param_name": "sample param_name",
                "property_attribute_id": "1",
                "string_value": "sample string_value"
              }
            ],
            "fixed": null,
            "is_chosen": "false",
            "is_included": "false",
            "is_quoted": "false",
            "parent_price_id": "1",
            "price_id": "1",
            "quantity": null,
            "sell_price": null,
            "shipping": null,
            "source": null,
            "supplier": "sample supplier",
            "tax": null,
            "total": null,
            "transactional_cost": null,
            "transactional_fixed": null,
            "transactional_sell_price": null,
            "transactional_shipping": null,
            "transactional_tax": null,
            "transactional_total": null,
            "transactional_variable": null,
            "variable": null,
            "variable_percent": null
          }
        ],
        "item_shipping_total": null,
        "item_tax_total": null,
        "item_total": null,
        "reason_for_quote_selection": "sample reason_for_quote_selection",
        "show_cost_prices_and_markup": "false",
        "spec": {
          "job_id": "1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        },
        "transactional_item_shipping_total": null,
        "transactional_item_tax_total": null,
        "transactional_item_total": null,
        "vat_code": "sample vat_code",
        "vat_rate": null
      }
    ],
    "quote_items_total": null,
    "quote_title": "sample quote_title",
    "shipping": null,
    "status": "sample status",
    "submit_date": "1970-01-01",
    "tax": null,
    "transactional_currency": "sample transactional_currency",
    "transactional_grand_total": null,
    "transactional_quote_items_total": null,
    "transactional_shipping": null,
    "transactional_tax": null,
    "vat_code": "sample vat_code",
    "vat_rate": null
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.QuoteExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[QuoteDetailVO](#schemaquotedetailvo)|false|none|Java type: com.noosh.nooshapi.vo.QuoteDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_QuoteItemDetailVO">QuoteItemDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaquoteitemdetailvo"></a>
<a id="schema_QuoteItemDetailVO"></a>
<a id="tocSquoteitemdetailvo"></a>
<a id="tocsquoteitemdetailvo"></a>

```json
{
  "chosen_quantity": null,
  "comments": "sample comments",
  "completion_date": "1970-01-01",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "item_id": "1",
  "item_prices": [
    {
      "breakouts": [
        {
          "breakout_id": "1",
          "breakout_name": "sample breakout_name",
          "breakout_pre_markup": null,
          "breakout_price": null,
          "transactional_breakout_pre_markup": null,
          "transactional_breakout_price": null
        }
      ],
      "cost": null,
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "fixed": null,
      "is_chosen": "false",
      "is_included": "false",
      "is_quoted": "false",
      "parent_price_id": "1",
      "price_id": "1",
      "quantity": null,
      "sell_price": null,
      "shipping": null,
      "source": null,
      "supplier": "sample supplier",
      "tax": null,
      "total": null,
      "transactional_cost": null,
      "transactional_fixed": null,
      "transactional_sell_price": null,
      "transactional_shipping": null,
      "transactional_tax": null,
      "transactional_total": null,
      "transactional_variable": null,
      "variable": null,
      "variable_percent": null
    }
  ],
  "item_shipping_total": null,
  "item_tax_total": null,
  "item_total": null,
  "reason_for_quote_selection": "sample reason_for_quote_selection",
  "show_cost_prices_and_markup": "false",
  "spec": {
    "job_id": "1",
    "reference_number": "sample reference_number",
    "spec_id": "1",
    "spec_name": "sample spec_name"
  },
  "transactional_item_shipping_total": null,
  "transactional_item_tax_total": null,
  "transactional_item_total": null,
  "vat_code": "sample vat_code",
  "vat_rate": null
}
```

Java type: com.noosh.nooshapi.vo.QuoteItemDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chosen_quantity|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|comments|string|false|none|none|
|completion_date|string(date)|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|item_id|integer(int64)|false|none|none|
|item_prices|[[QuotePriceDetailVO](#schemaquotepricedetailvo)]|false|none|none|
|item_shipping_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_tax_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|item_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|reason_for_quote_selection|string|false|none|none|
|show_cost_prices_and_markup|boolean|false|none|none|
|spec|[SpecBaseVO](#schemaspecbasevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecBaseVO|
|transactional_item_shipping_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_tax_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_item_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|vat_code|string|false|none|none|
|vat_rate|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_QuoteListVO">QuoteListVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotelistvo"></a>
<a id="schema_QuoteListVO"></a>
<a id="tocSquotelistvo"></a>
<a id="tocsquotelistvo"></a>

```json
{
  "result": [
    {
      "currency": "sample currency",
      "grand_total": null,
      "quote_id": "1",
      "quote_title": "sample quote_title",
      "rfq": {
        "received_date": "1970-01-01",
        "rfq_id": "1",
        "rfq_title": "sample rfq_title",
        "status": "sample status"
      },
      "status": "sample status",
      "submit_date": "1970-01-01",
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.QuoteListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[QuoteSimpleVO](#schemaquotesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_QuoteOfWgLevelSimpleVO">QuoteOfWgLevelSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaquoteofwglevelsimplevo"></a>
<a id="schema_QuoteOfWgLevelSimpleVO"></a>
<a id="tocSquoteofwglevelsimplevo"></a>
<a id="tocsquoteofwglevelsimplevo"></a>

```json
{
  "currency": "sample currency",
  "grand_total": null,
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "quote_id": "1",
  "quote_title": "sample quote_title",
  "rfq": {
    "received_date": "1970-01-01",
    "rfq_id": "1",
    "rfq_title": "sample rfq_title",
    "status": "sample status"
  },
  "status": "sample status",
  "submit_date": "1970-01-01",
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null
}
```

Java type: com.noosh.nooshapi.vo.QuoteOfWgLevelSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|quote_id|integer(int64)|false|none|none|
|quote_title|string|false|none|none|
|rfq|[RfqBaseVO](#schemarfqbasevo)|false|none|Java type: com.noosh.nooshapi.vo.RfqBaseVO|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_QuotePriceDetailVO">QuotePriceDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotepricedetailvo"></a>
<a id="schema_QuotePriceDetailVO"></a>
<a id="tocSquotepricedetailvo"></a>
<a id="tocsquotepricedetailvo"></a>

```json
{
  "breakouts": [
    {
      "breakout_id": "1",
      "breakout_name": "sample breakout_name",
      "breakout_pre_markup": null,
      "breakout_price": null,
      "transactional_breakout_pre_markup": null,
      "transactional_breakout_price": null
    }
  ],
  "cost": null,
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "fixed": null,
  "is_chosen": "false",
  "is_included": "false",
  "is_quoted": "false",
  "parent_price_id": "1",
  "price_id": "1",
  "quantity": null,
  "sell_price": null,
  "shipping": null,
  "source": null,
  "supplier": "sample supplier",
  "tax": null,
  "total": null,
  "transactional_cost": null,
  "transactional_fixed": null,
  "transactional_sell_price": null,
  "transactional_shipping": null,
  "transactional_tax": null,
  "transactional_total": null,
  "transactional_variable": null,
  "variable": null,
  "variable_percent": null
}
```

Java type: com.noosh.nooshapi.vo.QuotePriceDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|breakouts|[[BreakoutVO](#schemabreakoutvo)]|false|none|none|
|cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|fixed|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_chosen|boolean|false|none|none|
|is_included|boolean|false|none|none|
|is_quoted|boolean|false|none|none|
|parent_price_id|integer(int64)|false|none|none|
|price_id|integer(int64)|false|none|none|
|quantity|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|sell_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|source|[QuotePriceSourceVO](#schemaquotepricesourcevo)|false|none|Java type: com.noosh.nooshapi.vo.QuotePriceSourceVO|
|supplier|string|false|none|none|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_fixed|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_sell_price|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_shipping|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|transactional_variable|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|variable|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|variable_percent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_QuotePriceSourceVO">QuotePriceSourceVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotepricesourcevo"></a>
<a id="schema_QuotePriceSourceVO"></a>
<a id="tocSquotepricesourcevo"></a>
<a id="tocsquotepricesourcevo"></a>

```json
null
```

Java type: com.noosh.nooshapi.vo.QuotePriceSourceVO

<h2 id="tocS_QuotePutPersistVO">QuotePutPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaquoteputpersistvo"></a>
<a id="schema_QuotePutPersistVO"></a>
<a id="tocSquoteputpersistvo"></a>
<a id="tocsquoteputpersistvo"></a>

```json
{
  "action": "sample action",
  "po_number": "sample po_number",
  "quote_id": "1",
  "state_change_comments": "sample state_change_comments"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.QuotePutPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|po_number|string|false|none|none|
|quote_id|integer(int64)|false|none|none|
|state_change_comments|string|false|none|none|

<h2 id="tocS_QuoteSimpleVO">QuoteSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaquotesimplevo"></a>
<a id="schema_QuoteSimpleVO"></a>
<a id="tocSquotesimplevo"></a>
<a id="tocsquotesimplevo"></a>

```json
{
  "currency": "sample currency",
  "grand_total": null,
  "quote_id": "1",
  "quote_title": "sample quote_title",
  "rfq": {
    "received_date": "1970-01-01",
    "rfq_id": "1",
    "rfq_title": "sample rfq_title",
    "status": "sample status"
  },
  "status": "sample status",
  "submit_date": "1970-01-01",
  "transactional_currency": "sample transactional_currency",
  "transactional_grand_total": null
}
```

Java type: com.noosh.nooshapi.vo.QuoteSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quote_id|integer(int64)|false|none|none|
|quote_title|string|false|none|none|
|rfq|[RfqBaseVO](#schemarfqbasevo)|false|none|Java type: com.noosh.nooshapi.vo.RfqBaseVO|
|status|string|false|none|none|
|submit_date|string(date)|false|none|none|
|transactional_currency|string|false|none|none|
|transactional_grand_total|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_RfeBaseVO">RfeBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemarfebasevo"></a>
<a id="schema_RfeBaseVO"></a>
<a id="tocSrfebasevo"></a>
<a id="tocsrfebasevo"></a>

```json
{
  "rfe_due_date": "1970-01-01",
  "rfe_id": "1",
  "rfe_title": "sample rfe_title",
  "status": "sample status"
}
```

Java type: com.noosh.nooshapi.vo.RfeBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rfe_due_date|string(date)|false|none|none|
|rfe_id|integer(int64)|false|none|none|
|rfe_title|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_RfeDetailsVO">RfeDetailsVO</h2>
<!-- backwards compatibility -->
<a id="schemarfedetailsvo"></a>
<a id="schema_RfeDetailsVO"></a>
<a id="tocSrfedetailsvo"></a>
<a id="tocsrfedetailsvo"></a>

```json
{
  "description": "sample description",
  "details": "sample details",
  "estimate_due_date": "1970-01-01",
  "estimators": [
    "sample estimators"
  ],
  "itemized_tax_and_shipping": "1",
  "proposed_order_completion_date": "1970-01-01",
  "reference_number": "sample reference_number",
  "requestor": "sample requestor",
  "rfe_id": "1",
  "rfe_items": [
    {
      "job_id": "1",
      "rfe_item_id": "1",
      "rfe_item_options": [
        {
          "item_option_id": "1",
          "quantity": null,
          "quantity_index": "1"
        }
      ],
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  ],
  "status": "sample status",
  "submitted_date": "1970-01-01",
  "supplier_estimates": [
    {
      "supplier_estimates": [
        {
          "estimate_id": "1",
          "estimate_title": "sample estimate_title"
        }
      ],
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "title": "sample title"
}
```

Java type: com.noosh.nooshapi.vo.RfeDetailsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|details|string|false|none|none|
|estimate_due_date|string(date)|false|none|none|
|estimators|[string]|false|none|none|
|itemized_tax_and_shipping|integer(int32)|false|none|none|
|proposed_order_completion_date|string(date)|false|none|none|
|reference_number|string|false|none|none|
|requestor|string|false|none|none|
|rfe_id|integer(int64)|false|none|none|
|rfe_items|[[RfeItemSimpleEXTVO](#schemarfeitemsimpleextvo)]|false|none|none|
|status|string|false|none|none|
|submitted_date|string(date)|false|none|none|
|supplier_estimates|[[RfeSuEstimateSimpleVO](#schemarfesuestimatesimplevo)]|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_RfeExpandVO">RfeExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemarfeexpandvo"></a>
<a id="schema_RfeExpandVO"></a>
<a id="tocSrfeexpandvo"></a>
<a id="tocsrfeexpandvo"></a>

```json
{
  "result": {
    "description": "sample description",
    "details": "sample details",
    "estimate_due_date": "1970-01-01",
    "estimators": [
      "sample estimators"
    ],
    "itemized_tax_and_shipping": "1",
    "proposed_order_completion_date": "1970-01-01",
    "reference_number": "sample reference_number",
    "requestor": "sample requestor",
    "rfe_id": "1",
    "rfe_items": [
      {
        "job_id": "1",
        "rfe_item_id": "1",
        "rfe_item_options": [
          {
            "item_option_id": "1",
            "quantity": null,
            "quantity_index": "1"
          }
        ],
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    ],
    "status": "sample status",
    "submitted_date": "1970-01-01",
    "supplier_estimates": [
      {
        "supplier_estimates": [
          {
            "estimate_id": "1",
            "estimate_title": "sample estimate_title"
          }
        ],
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "title": "sample title"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RfeExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[RfeDetailsVO](#schemarfedetailsvo)|false|none|Java type: com.noosh.nooshapi.vo.RfeDetailsVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RfeItemOptionVO">RfeItemOptionVO</h2>
<!-- backwards compatibility -->
<a id="schemarfeitemoptionvo"></a>
<a id="schema_RfeItemOptionVO"></a>
<a id="tocSrfeitemoptionvo"></a>
<a id="tocsrfeitemoptionvo"></a>

```json
{
  "item_option_id": "1",
  "quantity": null,
  "quantity_index": "1"
}
```

Java type: com.noosh.nooshapi.vo.RfeItemOptionVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_option_id|integer(int64)|false|none|none|
|quantity|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|quantity_index|integer(int32)|false|none|none|

<h2 id="tocS_RfeItemSimpleEXTVO">RfeItemSimpleEXTVO</h2>
<!-- backwards compatibility -->
<a id="schemarfeitemsimpleextvo"></a>
<a id="schema_RfeItemSimpleEXTVO"></a>
<a id="tocSrfeitemsimpleextvo"></a>
<a id="tocsrfeitemsimpleextvo"></a>

```json
{
  "job_id": "1",
  "rfe_item_id": "1",
  "rfe_item_options": [
    {
      "item_option_id": "1",
      "quantity": null,
      "quantity_index": "1"
    }
  ],
  "spec_id": "1",
  "spec_name": "sample spec_name"
}
```

Java type: com.noosh.nooshapi.vo.RfeItemSimpleEXTVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|integer(int64)|false|none|none|
|rfe_item_id|integer(int64)|false|none|none|
|rfe_item_options|[[RfeItemOptionVO](#schemarfeitemoptionvo)]|false|none|none|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|

<h2 id="tocS_RfeItemSimpleVO">RfeItemSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemarfeitemsimplevo"></a>
<a id="schema_RfeItemSimpleVO"></a>
<a id="tocSrfeitemsimplevo"></a>
<a id="tocsrfeitemsimplevo"></a>

```json
{
  "rfe_item_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.RfeItemSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rfe_item_id|integer(int64)|false|none|none|

<h2 id="tocS_RfeListVO">RfeListVO</h2>
<!-- backwards compatibility -->
<a id="schemarfelistvo"></a>
<a id="schema_RfeListVO"></a>
<a id="tocSrfelistvo"></a>
<a id="tocsrfelistvo"></a>

```json
{
  "results": [
    {
      "estimate_due_date": "1970-01-01",
      "rfe_id": "1",
      "rfe_items": [
        {
          "rfe_item_id": "1"
        }
      ],
      "rfe_title": "sample rfe_title",
      "supplier_estimates": [
        {
          "supplier_estimates": [
            {
              "estimate_id": "1",
              "estimate_title": "sample estimate_title"
            }
          ],
          "workgroup_id": "1",
          "workgroup_name": "sample workgroup_name"
        }
      ]
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RfeListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[RfeSimpleVO](#schemarfesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RfePO">RfePO</h2>
<!-- backwards compatibility -->
<a id="schemarfepo"></a>
<a id="schema_RfePO"></a>
<a id="tocSrfepo"></a>
<a id="tocsrfepo"></a>

```json
{
  "description": "sample description",
  "details": "sample details",
  "estimate_due_date": "1970-01-01",
  "proposed_order_completion_date": "1970-01-01",
  "rfe_number": "sample rfe_number",
  "rfe_title": "sample rfe_title",
  "specs": [
    {
      "quantity_1": "1",
      "quantity_2": "1",
      "quantity_3": "1",
      "quantity_4": "1",
      "quantity_5": "1",
      "spec_id": "1"
    }
  ],
  "supplier_user_ids": [
    "1"
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.po.RfePO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|details|string|false|none|none|
|estimate_due_date|string(date)|false|none|none|
|proposed_order_completion_date|string(date)|false|none|none|
|rfe_number|string|false|none|none|
|rfe_title|string|false|none|none|
|specs|[[RfeSpecPO](#schemarfespecpo)]|false|none|none|
|supplier_user_ids|[integer(int64)]|false|none|none|

<h2 id="tocS_RfeSimpleVO">RfeSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemarfesimplevo"></a>
<a id="schema_RfeSimpleVO"></a>
<a id="tocSrfesimplevo"></a>
<a id="tocsrfesimplevo"></a>

```json
{
  "estimate_due_date": "1970-01-01",
  "rfe_id": "1",
  "rfe_items": [
    {
      "rfe_item_id": "1"
    }
  ],
  "rfe_title": "sample rfe_title",
  "supplier_estimates": [
    {
      "supplier_estimates": [
        {
          "estimate_id": "1",
          "estimate_title": "sample estimate_title"
        }
      ],
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ]
}
```

Java type: com.noosh.nooshapi.vo.RfeSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimate_due_date|string(date)|false|none|none|
|rfe_id|integer(int64)|false|none|none|
|rfe_items|[[RfeItemSimpleVO](#schemarfeitemsimplevo)]|false|none|none|
|rfe_title|string|false|none|none|
|supplier_estimates|[[RfeSuEstimateSimpleVO](#schemarfesuestimatesimplevo)]|false|none|none|

<h2 id="tocS_RfeSpecPO">RfeSpecPO</h2>
<!-- backwards compatibility -->
<a id="schemarfespecpo"></a>
<a id="schema_RfeSpecPO"></a>
<a id="tocSrfespecpo"></a>
<a id="tocsrfespecpo"></a>

```json
{
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "spec_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.RfeSpecPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|spec_id|integer(int64)|false|none|none|

<h2 id="tocS_RfeSuEstimateSimpleVO">RfeSuEstimateSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemarfesuestimatesimplevo"></a>
<a id="schema_RfeSuEstimateSimpleVO"></a>
<a id="tocSrfesuestimatesimplevo"></a>
<a id="tocsrfesuestimatesimplevo"></a>

```json
{
  "supplier_estimates": [
    {
      "estimate_id": "1",
      "estimate_title": "sample estimate_title"
    }
  ],
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.RfeSuEstimateSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supplier_estimates|[[EstimateSimpleVO](#schemaestimatesimplevo)]|false|none|none|
|workgroup_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_RfqBaseVO">RfqBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqbasevo"></a>
<a id="schema_RfqBaseVO"></a>
<a id="tocSrfqbasevo"></a>
<a id="tocsrfqbasevo"></a>

```json
{
  "received_date": "1970-01-01",
  "rfq_id": "1",
  "rfq_title": "sample rfq_title",
  "status": "sample status"
}
```

Java type: com.noosh.nooshapi.vo.RfqBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|received_date|string(date)|false|none|none|
|rfq_id|integer(int64)|false|none|none|
|rfq_title|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_RfqDetailsVO">RfqDetailsVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqdetailsvo"></a>
<a id="schema_RfqDetailsVO"></a>
<a id="tocSrfqdetailsvo"></a>
<a id="tocsrfqdetailsvo"></a>

```json
{
  "comments": "sample comments",
  "description": "sample description",
  "proposed_completion_date": "1970-01-01",
  "quote_due_date": "1970-01-01",
  "quotes": [
    {
      "currency": "sample currency",
      "grand_total": null,
      "quote_id": "1",
      "quote_title": "sample quote_title",
      "status": "sample status",
      "submit_date": "1970-01-01",
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "received_date": "1970-01-01",
  "recipient_name": "sample recipient_name",
  "requestor_name": "sample requestor_name",
  "rfq_id": "1",
  "rfq_items": [
    {
      "job_id": "1",
      "rfq_item_id": "1",
      "spec": {
        "is_active": "1",
        "is_template": "1",
        "quantity_1": "1.1",
        "quantity_2": "1.1",
        "quantity_3": "1.1",
        "quantity_4": "1.1",
        "quantity_5": "1.1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    }
  ],
  "rfq_title": "sample rfq_title",
  "status": "sample status"
}
```

Java type: com.noosh.nooshapi.vo.RfqDetailsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|none|
|description|string|false|none|none|
|proposed_completion_date|string(date)|false|none|none|
|quote_due_date|string(date)|false|none|none|
|quotes|[[QuoteBaseVO](#schemaquotebasevo)]|false|none|none|
|received_date|string(date)|false|none|none|
|recipient_name|string|false|none|none|
|requestor_name|string|false|none|none|
|rfq_id|integer(int64)|false|none|none|
|rfq_items|[[RfqItemBaseVO](#schemarfqitembasevo)]|false|none|none|
|rfq_title|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_RfqExpandVO">RfqExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqexpandvo"></a>
<a id="schema_RfqExpandVO"></a>
<a id="tocSrfqexpandvo"></a>
<a id="tocsrfqexpandvo"></a>

```json
{
  "result": {
    "comments": "sample comments",
    "description": "sample description",
    "proposed_completion_date": "1970-01-01",
    "quote_due_date": "1970-01-01",
    "quotes": [
      {
        "currency": "sample currency",
        "grand_total": null,
        "quote_id": "1",
        "quote_title": "sample quote_title",
        "status": "sample status",
        "submit_date": "1970-01-01",
        "transactional_currency": "sample transactional_currency",
        "transactional_grand_total": null
      }
    ],
    "received_date": "1970-01-01",
    "recipient_name": "sample recipient_name",
    "requestor_name": "sample requestor_name",
    "rfq_id": "1",
    "rfq_items": [
      {
        "job_id": "1",
        "rfq_item_id": "1",
        "spec": {
          "is_active": "1",
          "is_template": "1",
          "quantity_1": "1.1",
          "quantity_2": "1.1",
          "quantity_3": "1.1",
          "quantity_4": "1.1",
          "quantity_5": "1.1",
          "reference_number": "sample reference_number",
          "spec_id": "1",
          "spec_name": "sample spec_name"
        }
      }
    ],
    "rfq_title": "sample rfq_title",
    "status": "sample status"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RfqExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[RfqDetailsVO](#schemarfqdetailsvo)|false|none|Java type: com.noosh.nooshapi.vo.RfqDetailsVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RfqItemBaseVO">RfqItemBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqitembasevo"></a>
<a id="schema_RfqItemBaseVO"></a>
<a id="tocSrfqitembasevo"></a>
<a id="tocsrfqitembasevo"></a>

```json
{
  "job_id": "1",
  "rfq_item_id": "1",
  "spec": {
    "is_active": "1",
    "is_template": "1",
    "quantity_1": "1.1",
    "quantity_2": "1.1",
    "quantity_3": "1.1",
    "quantity_4": "1.1",
    "quantity_5": "1.1",
    "reference_number": "sample reference_number",
    "spec_id": "1",
    "spec_name": "sample spec_name"
  }
}
```

Java type: com.noosh.nooshapi.vo.RfqItemBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|integer(int64)|false|none|none|
|rfq_item_id|integer(int64)|false|none|none|
|spec|[ErgoSpecSimpleVO](#schemaergospecsimplevo)|false|none|Java type: com.noosh.nooshapi.vo.ergo.ErgoSpecSimpleVO|

<h2 id="tocS_RfqListVO">RfqListVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqlistvo"></a>
<a id="schema_RfqListVO"></a>
<a id="tocSrfqlistvo"></a>
<a id="tocsrfqlistvo"></a>

```json
{
  "result": [
    {
      "quotes": [
        {
          "currency": "sample currency",
          "grand_total": null,
          "quote_id": "1",
          "quote_title": "sample quote_title",
          "status": "sample status",
          "submit_date": "1970-01-01",
          "transactional_currency": "sample transactional_currency",
          "transactional_grand_total": null
        }
      ],
      "received_date": "1970-01-01",
      "rfq_id": "1",
      "rfq_title": "sample rfq_title",
      "status": "sample status"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RfqListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[RfqSimpleVO](#schemarfqsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RfqSimpleVO">RfqSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqsimplevo"></a>
<a id="schema_RfqSimpleVO"></a>
<a id="tocSrfqsimplevo"></a>
<a id="tocsrfqsimplevo"></a>

```json
{
  "quotes": [
    {
      "currency": "sample currency",
      "grand_total": null,
      "quote_id": "1",
      "quote_title": "sample quote_title",
      "status": "sample status",
      "submit_date": "1970-01-01",
      "transactional_currency": "sample transactional_currency",
      "transactional_grand_total": null
    }
  ],
  "received_date": "1970-01-01",
  "rfq_id": "1",
  "rfq_title": "sample rfq_title",
  "status": "sample status"
}
```

Java type: com.noosh.nooshapi.vo.RfqSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotes|[[QuoteBaseVO](#schemaquotebasevo)]|false|none|none|
|received_date|string(date)|false|none|none|
|rfq_id|integer(int64)|false|none|none|
|rfq_title|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_RfqVO">RfqVO</h2>
<!-- backwards compatibility -->
<a id="schemarfqvo"></a>
<a id="schema_RfqVO"></a>
<a id="tocSrfqvo"></a>
<a id="tocsrfqvo"></a>

```json
{
  "rfq_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RfqVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rfq_id|integer(int64)|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RoleListVO">RoleListVO</h2>
<!-- backwards compatibility -->
<a id="schemarolelistvo"></a>
<a id="schema_RoleListVO"></a>
<a id="tocSrolelistvo"></a>
<a id="tocsrolelistvo"></a>

```json
{
  "result": [
    {
      "role_id": "1",
      "role_name": "sample role_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.RoleListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[RoleSimpleVO](#schemarolesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_RoleSimpleVO">RoleSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemarolesimplevo"></a>
<a id="schema_RoleSimpleVO"></a>
<a id="tocSrolesimplevo"></a>
<a id="tocsrolesimplevo"></a>

```json
{
  "role_id": "1",
  "role_name": "sample role_name"
}
```

Java type: com.noosh.nooshapi.vo.RoleSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_id|integer(int64)|false|none|none|
|role_name|string|false|none|none|

<h2 id="tocS_ShipmentDetailVO">ShipmentDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentdetailvo"></a>
<a id="schema_ShipmentDetailVO"></a>
<a id="tocSshipmentdetailvo"></a>
<a id="tocsshipmentdetailvo"></a>

```json
{
  "locations": [
    {
      "city": "sample city",
      "company_name": "sample company_name",
      "country": "sample country",
      "country_code": "sample country_code",
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_id": "1",
          "param_name": "sample param_name",
          "property_attribute_id": "1",
          "string_value": "sample string_value"
        }
      ],
      "description_or_title": "sample description_or_title",
      "due_date": "1970-01-01",
      "email": "sample email",
      "first_name": "sample first_name",
      "is_use_spec_packaging": "false",
      "last_name": "sample last_name",
      "line_1": "sample line_1",
      "line_2": "sample line_2",
      "line_3": "sample line_3",
      "location_id": "1",
      "middle_name": "sample middle_name",
      "postal": "sample postal",
      "proof_type": "sample proof_type",
      "qty_received": "1",
      "qty_requested": "1",
      "qty_shipped": "1",
      "received_comments": "sample received_comments",
      "received_date": "1970-01-01",
      "requested_shipping_carrier": "sample requested_shipping_carrier",
      "requested_shipping_method": "sample requested_shipping_method",
      "shipped_comments": "sample shipped_comments",
      "shipped_date": "1970-01-01",
      "shipped_in_units": "1",
      "shipped_in_uofm": "sample shipped_in_uofm",
      "shipped_shipping_carrier": "sample shipped_shipping_carrier",
      "shipped_shipping_method": "sample shipped_shipping_method",
      "shipping_cost": null,
      "shipping_instruction": "sample shipping_instruction",
      "state": "sample state",
      "tax": null,
      "tracking_number": "sample tracking_number",
      "type": "sample type",
      "weight": null,
      "weight_uofm": "sample weight_uofm",
      "work_phone_number": "sample work_phone_number",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "locations_count": "1",
  "qty_received": "1",
  "qty_requested": "1",
  "qty_shipped": "1",
  "received_date": "1970-01-01",
  "shipment_id": "1",
  "shipment_status": "sample shipment_status",
  "shipped_date": "1970-01-01",
  "spec": {
    "job_id": "1",
    "reference_number": "sample reference_number",
    "spec_id": "1",
    "spec_name": "sample spec_name"
  }
}
```

Java type: com.noosh.nooshapi.vo.ShipmentDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[ShipmentRequestBaseVO](#schemashipmentrequestbasevo)]|false|none|none|
|locations_count|integer(int64)|false|none|none|
|qty_received|integer(int64)|false|none|none|
|qty_requested|integer(int64)|false|none|none|
|qty_shipped|integer(int64)|false|none|none|
|received_date|string(date)|false|none|none|
|shipment_id|integer(int64)|false|none|none|
|shipment_status|string|false|none|none|
|shipped_date|string(date)|false|none|none|
|spec|[SpecBaseVO](#schemaspecbasevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecBaseVO|

<h2 id="tocS_ShipmentExpandVO">ShipmentExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentexpandvo"></a>
<a id="schema_ShipmentExpandVO"></a>
<a id="tocSshipmentexpandvo"></a>
<a id="tocsshipmentexpandvo"></a>

```json
{
  "result": {
    "locations": [
      {
        "city": "sample city",
        "company_name": "sample company_name",
        "country": "sample country",
        "country_code": "sample country_code",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "description_or_title": "sample description_or_title",
        "due_date": "1970-01-01",
        "email": "sample email",
        "first_name": "sample first_name",
        "is_use_spec_packaging": "false",
        "last_name": "sample last_name",
        "line_1": "sample line_1",
        "line_2": "sample line_2",
        "line_3": "sample line_3",
        "location_id": "1",
        "middle_name": "sample middle_name",
        "postal": "sample postal",
        "proof_type": "sample proof_type",
        "qty_received": "1",
        "qty_requested": "1",
        "qty_shipped": "1",
        "received_comments": "sample received_comments",
        "received_date": "1970-01-01",
        "requested_shipping_carrier": "sample requested_shipping_carrier",
        "requested_shipping_method": "sample requested_shipping_method",
        "shipped_comments": "sample shipped_comments",
        "shipped_date": "1970-01-01",
        "shipped_in_units": "1",
        "shipped_in_uofm": "sample shipped_in_uofm",
        "shipped_shipping_carrier": "sample shipped_shipping_carrier",
        "shipped_shipping_method": "sample shipped_shipping_method",
        "shipping_cost": null,
        "shipping_instruction": "sample shipping_instruction",
        "state": "sample state",
        "tax": null,
        "tracking_number": "sample tracking_number",
        "type": "sample type",
        "weight": null,
        "weight_uofm": "sample weight_uofm",
        "work_phone_number": "sample work_phone_number",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "locations_count": "1",
    "qty_received": "1",
    "qty_requested": "1",
    "qty_shipped": "1",
    "received_date": "1970-01-01",
    "shipment_id": "1",
    "shipment_status": "sample shipment_status",
    "shipped_date": "1970-01-01",
    "spec": {
      "job_id": "1",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  },
  "resut": {
    "locations": [
      {
        "city": "sample city",
        "company_name": "sample company_name",
        "country": "sample country",
        "country_code": "sample country_code",
        "custom_fields": [
          {
            "date_value": "1970-01-01",
            "number_value": null,
            "param_id": "1",
            "param_name": "sample param_name",
            "property_attribute_id": "1",
            "string_value": "sample string_value"
          }
        ],
        "description_or_title": "sample description_or_title",
        "due_date": "1970-01-01",
        "email": "sample email",
        "first_name": "sample first_name",
        "is_use_spec_packaging": "false",
        "last_name": "sample last_name",
        "line_1": "sample line_1",
        "line_2": "sample line_2",
        "line_3": "sample line_3",
        "location_id": "1",
        "middle_name": "sample middle_name",
        "postal": "sample postal",
        "proof_type": "sample proof_type",
        "qty_received": "1",
        "qty_requested": "1",
        "qty_shipped": "1",
        "received_comments": "sample received_comments",
        "received_date": "1970-01-01",
        "requested_shipping_carrier": "sample requested_shipping_carrier",
        "requested_shipping_method": "sample requested_shipping_method",
        "shipped_comments": "sample shipped_comments",
        "shipped_date": "1970-01-01",
        "shipped_in_units": "1",
        "shipped_in_uofm": "sample shipped_in_uofm",
        "shipped_shipping_carrier": "sample shipped_shipping_carrier",
        "shipped_shipping_method": "sample shipped_shipping_method",
        "shipping_cost": null,
        "shipping_instruction": "sample shipping_instruction",
        "state": "sample state",
        "tax": null,
        "tracking_number": "sample tracking_number",
        "type": "sample type",
        "weight": null,
        "weight_uofm": "sample weight_uofm",
        "work_phone_number": "sample work_phone_number",
        "workgroup_name": "sample workgroup_name"
      }
    ],
    "locations_count": "1",
    "qty_received": "1",
    "qty_requested": "1",
    "qty_shipped": "1",
    "received_date": "1970-01-01",
    "shipment_id": "1",
    "shipment_status": "sample shipment_status",
    "shipped_date": "1970-01-01",
    "spec": {
      "job_id": "1",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ShipmentExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[ShipmentDetailVO](#schemashipmentdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.ShipmentDetailVO|
|resut|[ShipmentDetailVO](#schemashipmentdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.ShipmentDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ShipmentListVO">ShipmentListVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentlistvo"></a>
<a id="schema_ShipmentListVO"></a>
<a id="tocSshipmentlistvo"></a>
<a id="tocsshipmentlistvo"></a>

```json
{
  "result": [
    {
      "locations_count": "1",
      "qty_received": "1",
      "qty_requested": "1",
      "qty_shipped": "1",
      "received_date": "1970-01-01",
      "shipment_id": "1",
      "shipment_status": "sample shipment_status",
      "shipped_date": "1970-01-01",
      "spec": {
        "job_id": "1",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ShipmentListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[ShipmentSimpleVO](#schemashipmentsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ShipmentLocationPersistVO">ShipmentLocationPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentlocationpersistvo"></a>
<a id="schema_ShipmentLocationPersistVO"></a>
<a id="tocSshipmentlocationpersistvo"></a>
<a id="tocsshipmentlocationpersistvo"></a>

```json
{
  "due_date": "1970-01-01",
  "qty_received": "1",
  "qty_requested": "1",
  "qty_shipped": "1",
  "received_date": "1970-01-01",
  "shipped_date": "1970-01-01",
  "shipping_cost": null,
  "type": "sample type"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|due_date|string(date)|false|none|none|
|qty_received|integer(int64)|false|none|none|
|qty_requested|integer(int64)|false|none|none|
|qty_shipped|integer(int64)|false|none|none|
|received_date|string(date)|false|none|none|
|shipped_date|string(date)|false|none|none|
|shipping_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|type|string|false|none|none|

<h2 id="tocS_ShipmentLocationPostPersistVO">ShipmentLocationPostPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentlocationpostpersistvo"></a>
<a id="schema_ShipmentLocationPostPersistVO"></a>
<a id="tocSshipmentlocationpostpersistvo"></a>
<a id="tocsshipmentlocationpostpersistvo"></a>

```json
{
  "address_line1": "sample address_line1",
  "address_line2": "sample address_line2",
  "address_line3": "sample address_line3",
  "batch_label": "sample batch_label",
  "city": "sample city",
  "company_name": "sample company_name",
  "country_iso_code": "sample country_iso_code",
  "delivery_date": "1970-01-01",
  "description_or_title": "sample description_or_title",
  "email": "sample email",
  "first_name": "sample first_name",
  "inner_carton_label": "sample inner_carton_label",
  "last_name": "sample last_name",
  "middle_name": "sample middle_name",
  "outer_carton_label": "sample outer_carton_label",
  "pallet_lablel": "sample pallet_lablel",
  "poof_type": "sample poof_type",
  "postal_code": "sample postal_code",
  "request_type": "sample request_type",
  "requested_quantity": "1",
  "shipment_custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "shipment_request_custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "shipping_carrier": "sample shipping_carrier",
  "shipping_instruction": "sample shipping_instruction",
  "shpping_method": "sample shpping_method",
  "spec_ids": "sample spec_ids",
  "state": "sample state",
  "work_phone_number": "sample work_phone_number",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.ShipmentLocationPostPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|false|none|none|
|address_line2|string|false|none|none|
|address_line3|string|false|none|none|
|batch_label|string|false|none|none|
|city|string|false|none|none|
|company_name|string|false|none|none|
|country_iso_code|string|false|none|none|
|delivery_date|string(date)|false|none|none|
|description_or_title|string|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|inner_carton_label|string|false|none|none|
|last_name|string|false|none|none|
|middle_name|string|false|none|none|
|outer_carton_label|string|false|none|none|
|pallet_lablel|string|false|none|none|
|poof_type|string|false|none|none|
|postal_code|string|false|none|none|
|request_type|string|false|none|none|
|requested_quantity|integer(int64)|false|none|none|
|shipment_custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|shipment_request_custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|shipping_carrier|string|false|none|none|
|shipping_instruction|string|false|none|none|
|shpping_method|string|false|none|none|
|spec_ids|string|false|none|none|
|state|string|false|none|none|
|work_phone_number|string|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_ShipmentLocationsPOSTResultVO">ShipmentLocationsPOSTResultVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentlocationspostresultvo"></a>
<a id="schema_ShipmentLocationsPOSTResultVO"></a>
<a id="tocSshipmentlocationspostresultvo"></a>
<a id="tocsshipmentlocationspostresultvo"></a>

```json
{
  "results": [
    {
      "location_id": "1",
      "shipment_id": "1",
      "spec_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTResultVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ShipmentLocationsPOSTVO](#schemashipmentlocationspostvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_ShipmentLocationsPOSTVO">ShipmentLocationsPOSTVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentlocationspostvo"></a>
<a id="schema_ShipmentLocationsPOSTVO"></a>
<a id="tocSshipmentlocationspostvo"></a>
<a id="tocsshipmentlocationspostvo"></a>

```json
{
  "location_id": "1",
  "shipment_id": "1",
  "spec_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.ShipmentLocationsPOSTVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location_id|integer(int64)|false|none|none|
|shipment_id|integer(int64)|false|none|none|
|spec_id|integer(int64)|false|none|none|

<h2 id="tocS_ShipmentRequestBaseVO">ShipmentRequestBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentrequestbasevo"></a>
<a id="schema_ShipmentRequestBaseVO"></a>
<a id="tocSshipmentrequestbasevo"></a>
<a id="tocsshipmentrequestbasevo"></a>

```json
{
  "city": "sample city",
  "company_name": "sample company_name",
  "country": "sample country",
  "country_code": "sample country_code",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "description_or_title": "sample description_or_title",
  "due_date": "1970-01-01",
  "email": "sample email",
  "first_name": "sample first_name",
  "is_use_spec_packaging": "false",
  "last_name": "sample last_name",
  "line_1": "sample line_1",
  "line_2": "sample line_2",
  "line_3": "sample line_3",
  "location_id": "1",
  "middle_name": "sample middle_name",
  "postal": "sample postal",
  "proof_type": "sample proof_type",
  "qty_received": "1",
  "qty_requested": "1",
  "qty_shipped": "1",
  "received_comments": "sample received_comments",
  "received_date": "1970-01-01",
  "requested_shipping_carrier": "sample requested_shipping_carrier",
  "requested_shipping_method": "sample requested_shipping_method",
  "shipped_comments": "sample shipped_comments",
  "shipped_date": "1970-01-01",
  "shipped_in_units": "1",
  "shipped_in_uofm": "sample shipped_in_uofm",
  "shipped_shipping_carrier": "sample shipped_shipping_carrier",
  "shipped_shipping_method": "sample shipped_shipping_method",
  "shipping_cost": null,
  "shipping_instruction": "sample shipping_instruction",
  "state": "sample state",
  "tax": null,
  "tracking_number": "sample tracking_number",
  "type": "sample type",
  "weight": null,
  "weight_uofm": "sample weight_uofm",
  "work_phone_number": "sample work_phone_number",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.ShipmentRequestBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|company_name|string|false|none|none|
|country|string|false|none|none|
|country_code|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|description_or_title|string|false|none|none|
|due_date|string(date)|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|is_use_spec_packaging|boolean|false|none|none|
|last_name|string|false|none|none|
|line_1|string|false|none|none|
|line_2|string|false|none|none|
|line_3|string|false|none|none|
|location_id|integer(int64)|false|none|none|
|middle_name|string|false|none|none|
|postal|string|false|none|none|
|proof_type|string|false|none|none|
|qty_received|integer(int64)|false|none|none|
|qty_requested|integer(int64)|false|none|none|
|qty_shipped|integer(int64)|false|none|none|
|received_comments|string|false|none|none|
|received_date|string(date)|false|none|none|
|requested_shipping_carrier|string|false|none|none|
|requested_shipping_method|string|false|none|none|
|shipped_comments|string|false|none|none|
|shipped_date|string(date)|false|none|none|
|shipped_in_units|integer(int64)|false|none|none|
|shipped_in_uofm|string|false|none|none|
|shipped_shipping_carrier|string|false|none|none|
|shipped_shipping_method|string|false|none|none|
|shipping_cost|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|shipping_instruction|string|false|none|none|
|state|string|false|none|none|
|tax|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|tracking_number|string|false|none|none|
|type|string|false|none|none|
|weight|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|weight_uofm|string|false|none|none|
|work_phone_number|string|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_ShipmentSimpleVO">ShipmentSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemashipmentsimplevo"></a>
<a id="schema_ShipmentSimpleVO"></a>
<a id="tocSshipmentsimplevo"></a>
<a id="tocsshipmentsimplevo"></a>

```json
{
  "locations_count": "1",
  "qty_received": "1",
  "qty_requested": "1",
  "qty_shipped": "1",
  "received_date": "1970-01-01",
  "shipment_id": "1",
  "shipment_status": "sample shipment_status",
  "shipped_date": "1970-01-01",
  "spec": {
    "job_id": "1",
    "reference_number": "sample reference_number",
    "spec_id": "1",
    "spec_name": "sample spec_name"
  }
}
```

Java type: com.noosh.nooshapi.vo.ShipmentSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations_count|integer(int64)|false|none|none|
|qty_received|integer(int64)|false|none|none|
|qty_requested|integer(int64)|false|none|none|
|qty_shipped|integer(int64)|false|none|none|
|received_date|string(date)|false|none|none|
|shipment_id|integer(int64)|false|none|none|
|shipment_status|string|false|none|none|
|shipped_date|string(date)|false|none|none|
|spec|[SpecBaseVO](#schemaspecbasevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecBaseVO|

<h2 id="tocS_SpecBaseVO">SpecBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecbasevo"></a>
<a id="schema_SpecBaseVO"></a>
<a id="tocSspecbasevo"></a>
<a id="tocsspecbasevo"></a>

```json
{
  "job_id": "1",
  "reference_number": "sample reference_number",
  "spec_id": "1",
  "spec_name": "sample spec_name"
}
```

Java type: com.noosh.nooshapi.vo.SpecBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|integer(int64)|false|none|none|
|reference_number|string|false|none|none|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|

<h2 id="tocS_SpecHTTPStatusVO">SpecHTTPStatusVO</h2>
<!-- backwards compatibility -->
<a id="schemaspechttpstatusvo"></a>
<a id="schema_SpecHTTPStatusVO"></a>
<a id="tocSspechttpstatusvo"></a>
<a id="tocsspechttpstatusvo"></a>

```json
{
  "spec_id": "1",
  "spec_name": "sample spec_name",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SpecHTTPStatusVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecListVO">SpecListVO</h2>
<!-- backwards compatibility -->
<a id="schemaspeclistvo"></a>
<a id="schema_SpecListVO"></a>
<a id="tocSspeclistvo"></a>
<a id="tocsspeclistvo"></a>

```json
{
  "results": [
    {
      "client_status": "sample client_status",
      "create_date": "1970-01-01",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "job_id": "1",
      "last_updated": "1970-01-01",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name",
      "spec_options_complete": [
        {}
      ],
      "supplier_status": "sample supplier_status",
      "uofms": [
        {
          "is_default": "false",
          "uofm_id": "1",
          "uofm_name": "sample uofm_name"
        }
      ],
      "user_state": "sample user_state"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SpecListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SpecSimpleVO](#schemaspecsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecPersistVO">SpecPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecpersistvo"></a>
<a id="schema_SpecPersistVO"></a>
<a id="tocSspecpersistvo"></a>
<a id="tocsspecpersistvo"></a>

```json
{
  "jsonBody": "false",
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "sku": "sample sku",
  "spec_name": "sample spec_name",
  "spec_template_id": "1",
  "spec_type_id": "1",
  "versions": [
    {
      "description": "sample description",
      "qty": "1"
    }
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.SpecPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonBody|boolean|false|none|none|
|product_type_id|integer(int64)|false|none|none|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|sku|string|false|none|none|
|spec_name|string|false|none|none|
|spec_template_id|integer(int64)|false|none|none|
|spec_type_id|integer(int64)|false|none|none|
|versions|[[SpecVersionPersistVO](#schemaspecversionpersistvo)]|false|none|none|

<h2 id="tocS_SpecSimpleVO">SpecSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecsimplevo"></a>
<a id="schema_SpecSimpleVO"></a>
<a id="tocSspecsimplevo"></a>
<a id="tocsspecsimplevo"></a>

```json
{
  "client_status": "sample client_status",
  "create_date": "1970-01-01",
  "created_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "job_id": "1",
  "last_updated": "1970-01-01",
  "reference_number": "sample reference_number",
  "spec_id": "1",
  "spec_name": "sample spec_name",
  "spec_options_complete": [
    {
      "client_status": "sample client_status",
      "create_date": "1970-01-01",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "job_id": "1",
      "last_updated": "1970-01-01",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name",
      "spec_options_complete": [
        {}
      ],
      "supplier_status": "sample supplier_status",
      "uofms": [
        {
          "is_default": "false",
          "uofm_id": "1",
          "uofm_name": "sample uofm_name"
        }
      ],
      "user_state": "sample user_state"
    }
  ],
  "supplier_status": "sample supplier_status",
  "uofms": [
    {
      "is_default": "false",
      "uofm_id": "1",
      "uofm_name": "sample uofm_name"
    }
  ],
  "user_state": "sample user_state"
}
```

Java type: com.noosh.nooshapi.vo.SpecSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_status|string|false|none|none|
|create_date|string(date)|false|none|none|
|created_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|job_id|integer(int64)|false|none|none|
|last_updated|string(date)|false|none|none|
|reference_number|string|false|none|none|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|spec_options_complete|[[SpecSimpleVO](#schemaspecsimplevo)]|false|none|none|
|supplier_status|string|false|none|none|
|uofms|[[UofmSimpleVO](#schemauofmsimplevo)]|false|none|none|
|user_state|string|false|none|none|

<h2 id="tocS_SpecSimplestVO">SpecSimplestVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecsimplestvo"></a>
<a id="schema_SpecSimplestVO"></a>
<a id="tocSspecsimplestvo"></a>
<a id="tocsspecsimplestvo"></a>

```json
{
  "spec_id": "1",
  "spec_name": "sample spec_name"
}
```

Java type: com.noosh.nooshapi.vo.SpecSimplestVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|

<h2 id="tocS_SpecTemplateDetailVO">SpecTemplateDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectemplatedetailvo"></a>
<a id="schema_SpecTemplateDetailVO"></a>
<a id="tocSspectemplatedetailvo"></a>
<a id="tocsspectemplatedetailvo"></a>

```json
{
  "created_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "created_date": "1970-01-01",
  "is_active": "false",
  "is_externally_published": "false",
  "is_locked": "false",
  "last_updated_date": "1970-01-01",
  "product_type": "sample product_type",
  "product_type_info": {
    "label": "sample label",
    "product_type_id": "1"
  },
  "spec_template_id": "1",
  "spec_template_name": "sample spec_template_name",
  "spec_type": {
    "spec_type_id": "1",
    "spec_type_name": "sample spec_type_name"
  }
}
```

Java type: com.noosh.nooshapi.vo.SpecTemplateDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|created_date|string(date)|false|none|none|
|is_active|boolean|false|none|none|
|is_externally_published|boolean|false|none|none|
|is_locked|boolean|false|none|none|
|last_updated_date|string(date)|false|none|none|
|product_type|string|false|none|none|
|product_type_info|[ProductTypeVO](#schemaproducttypevo)|false|none|Java type: com.noosh.nooshapi.vo.ProductTypeVO|
|spec_template_id|integer(int64)|false|none|none|
|spec_template_name|string|false|none|none|
|spec_type|[SpecTypeVO](#schemaspectypevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecTypeVO|

<h2 id="tocS_SpecTemplateExpandVO">SpecTemplateExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectemplateexpandvo"></a>
<a id="schema_SpecTemplateExpandVO"></a>
<a id="tocSspectemplateexpandvo"></a>
<a id="tocsspectemplateexpandvo"></a>

```json
{
  "result": {
    "created_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "created_date": "1970-01-01",
    "is_active": "false",
    "is_externally_published": "false",
    "is_locked": "false",
    "last_updated_date": "1970-01-01",
    "product_type": "sample product_type",
    "product_type_info": {
      "label": "sample label",
      "product_type_id": "1"
    },
    "spec_template_id": "1",
    "spec_template_name": "sample spec_template_name",
    "spec_type": {
      "spec_type_id": "1",
      "spec_type_name": "sample spec_type_name"
    }
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SpecTemplateExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[SpecTemplateDetailVO](#schemaspectemplatedetailvo)|false|none|Java type: com.noosh.nooshapi.vo.SpecTemplateDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecTemplateListVO">SpecTemplateListVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectemplatelistvo"></a>
<a id="schema_SpecTemplateListVO"></a>
<a id="tocSspectemplatelistvo"></a>
<a id="tocsspectemplatelistvo"></a>

```json
{
  "results": [
    {
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "created_date": "1970-01-01",
      "is_active": "false",
      "is_externally_published": "false",
      "is_locked": "false",
      "last_updated_date": "1970-01-01",
      "spec_template_id": "1",
      "spec_template_name": "sample spec_template_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SpecTemplateListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SpecTemplateSimpleVO](#schemaspectemplatesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecTemplateSimpleVO">SpecTemplateSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectemplatesimplevo"></a>
<a id="schema_SpecTemplateSimpleVO"></a>
<a id="tocSspectemplatesimplevo"></a>
<a id="tocsspectemplatesimplevo"></a>

```json
{
  "created_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "created_date": "1970-01-01",
  "is_active": "false",
  "is_externally_published": "false",
  "is_locked": "false",
  "last_updated_date": "1970-01-01",
  "spec_template_id": "1",
  "spec_template_name": "sample spec_template_name"
}
```

Java type: com.noosh.nooshapi.vo.SpecTemplateSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|created_date|string(date)|false|none|none|
|is_active|boolean|false|none|none|
|is_externally_published|boolean|false|none|none|
|is_locked|boolean|false|none|none|
|last_updated_date|string(date)|false|none|none|
|spec_template_id|integer(int64)|false|none|none|
|spec_template_name|string|false|none|none|

<h2 id="tocS_SpecTypeFieldsListVO">SpecTypeFieldsListVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectypefieldslistvo"></a>
<a id="schema_SpecTypeFieldsListVO"></a>
<a id="tocSspectypefieldslistvo"></a>
<a id="tocsspectypefieldslistvo"></a>

```json
{
  "result": null,
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.SpecTypeFieldsListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[SpecTypeFieldsVO](#schemaspectypefieldsvo)|false|none|Java type: com.noosh.nooshapi.vo.v1x1.SpecTypeFieldsVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecTypeFieldsVO">SpecTypeFieldsVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectypefieldsvo"></a>
<a id="schema_SpecTypeFieldsVO"></a>
<a id="tocSspectypefieldsvo"></a>
<a id="tocsspectypefieldsvo"></a>

```json
null
```

Java type: com.noosh.nooshapi.vo.v1x1.SpecTypeFieldsVO

<h2 id="tocS_SpecTypePersistVO">SpecTypePersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectypepersistvo"></a>
<a id="schema_SpecTypePersistVO"></a>
<a id="tocSspectypepersistvo"></a>
<a id="tocsspectypepersistvo"></a>

```json
{
  "prdType_labels": [
    "sample prdType_labels"
  ],
  "spec_type_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.SpecTypePersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prdType_labels|[string]|false|none|none|
|spec_type_id|integer(int64)|false|none|none|

<h2 id="tocS_SpecTypeVO">SpecTypeVO</h2>
<!-- backwards compatibility -->
<a id="schemaspectypevo"></a>
<a id="schema_SpecTypeVO"></a>
<a id="tocSspectypevo"></a>
<a id="tocsspectypevo"></a>

```json
{
  "spec_type_id": "1",
  "spec_type_name": "sample spec_type_name"
}
```

Java type: com.noosh.nooshapi.vo.SpecTypeVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_type_id|integer(int64)|false|none|none|
|spec_type_name|string|false|none|none|

<h2 id="tocS_SpecUpdatePersistVO">SpecUpdatePersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecupdatepersistvo"></a>
<a id="schema_SpecUpdatePersistVO"></a>
<a id="tocSspecupdatepersistvo"></a>
<a id="tocsspecupdatepersistvo"></a>

```json
{
  "inks_and_paper": [
    {
      "custom_fields": [
        {
          "date_value": "1970-01-01",
          "number_value": null,
          "param_name": "sample param_name",
          "string_value": "sample string_value"
        }
      ],
      "paper_id": "1"
    }
  ],
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "sku": "sample sku",
  "spec_name": "sample spec_name"
}
```

Java type: com.noosh.nooshapi.vo.SpecUpdatePersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inks_and_paper|[[PropertyPersistVO](#schemapropertypersistvo)]|false|none|none|
|product_type_id|integer(int64)|false|none|none|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|sku|string|false|none|none|
|spec_name|string|false|none|none|

<h2 id="tocS_SpecVO">SpecVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecvo"></a>
<a id="schema_SpecVO"></a>
<a id="tocSspecvo"></a>
<a id="tocsspecvo"></a>

```json
{
  "spec_id": "1",
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SpecVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer(int64)|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SpecVersionPersistVO">SpecVersionPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaspecversionpersistvo"></a>
<a id="schema_SpecVersionPersistVO"></a>
<a id="tocSspecversionpersistvo"></a>
<a id="tocsspecversionpersistvo"></a>

```json
{
  "description": "sample description",
  "qty": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.SpecVersionPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|qty|integer(int64)|false|none|none|

<h2 id="tocS_SupplierWorkgroupBasicVO">SupplierWorkgroupBasicVO</h2>
<!-- backwards compatibility -->
<a id="schemasupplierworkgroupbasicvo"></a>
<a id="schema_SupplierWorkgroupBasicVO"></a>
<a id="tocSsupplierworkgroupbasicvo"></a>
<a id="tocssupplierworkgroupbasicvo"></a>

```json
{
  "bu_supplier_workgroup_id": "1",
  "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.SupplierWorkgroupBasicVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bu_supplier_workgroup_id|integer(int64)|false|none|none|
|bu_supplier_workgroup_name|string|false|none|none|

<h2 id="tocS_SupplierWorkgroupDetailVO">SupplierWorkgroupDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemasupplierworkgroupdetailvo"></a>
<a id="schema_SupplierWorkgroupDetailVO"></a>
<a id="tocSsupplierworkgroupdetailvo"></a>
<a id="tocssupplierworkgroupdetailvo"></a>

```json
{
  "additional_workgroups_contain_same_supplier": [
    {
      "bu_supplier_workgroup_id": "1",
      "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name"
    }
  ],
  "bu_supplier_workgroup_id": "1",
  "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
  "client_workgroup_id": "1",
  "client_workgroup_name": "sample client_workgroup_name",
  "is_approved": "false",
  "supplier_code": "sample supplier_code",
  "supplier_workgroup_id": "1",
  "supplier_workgroup_name": "sample supplier_workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.SupplierWorkgroupDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_workgroups_contain_same_supplier|[[SupplierWorkgroupBasicVO](#schemasupplierworkgroupbasicvo)]|false|none|none|
|bu_supplier_workgroup_id|integer(int64)|false|none|none|
|bu_supplier_workgroup_name|string|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_name|string|false|none|none|
|is_approved|boolean|false|none|none|
|supplier_code|string|false|none|none|
|supplier_workgroup_id|integer(int64)|false|none|none|
|supplier_workgroup_name|string|false|none|none|

<h2 id="tocS_SupplierWorkgroupExpandVO">SupplierWorkgroupExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemasupplierworkgroupexpandvo"></a>
<a id="schema_SupplierWorkgroupExpandVO"></a>
<a id="tocSsupplierworkgroupexpandvo"></a>
<a id="tocssupplierworkgroupexpandvo"></a>

```json
{
  "result": {
    "additional_workgroups_contain_same_supplier": [
      {
        "bu_supplier_workgroup_id": "1",
        "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name"
      }
    ],
    "bu_supplier_workgroup_id": "1",
    "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
    "client_workgroup_id": "1",
    "client_workgroup_name": "sample client_workgroup_name",
    "is_approved": "false",
    "supplier_code": "sample supplier_code",
    "supplier_workgroup_id": "1",
    "supplier_workgroup_name": "sample supplier_workgroup_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SupplierWorkgroupExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[SupplierWorkgroupDetailVO](#schemasupplierworkgroupdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.SupplierWorkgroupDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SupplierWorkgroupListVO">SupplierWorkgroupListVO</h2>
<!-- backwards compatibility -->
<a id="schemasupplierworkgrouplistvo"></a>
<a id="schema_SupplierWorkgroupListVO"></a>
<a id="tocSsupplierworkgrouplistvo"></a>
<a id="tocssupplierworkgrouplistvo"></a>

```json
{
  "result": [
    {
      "bu_supplier_workgroup_id": "1",
      "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
      "client_workgroup_id": "1",
      "client_workgroup_name": "sample client_workgroup_name",
      "is_approved": "false",
      "supplier_code": "sample supplier_code",
      "supplier_workgroup_id": "1",
      "supplier_workgroup_name": "sample supplier_workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.SupplierWorkgroupListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[SupplierWorkgroupSimpleVO](#schemasupplierworkgroupsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_SupplierWorkgroupSimpleVO">SupplierWorkgroupSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemasupplierworkgroupsimplevo"></a>
<a id="schema_SupplierWorkgroupSimpleVO"></a>
<a id="tocSsupplierworkgroupsimplevo"></a>
<a id="tocssupplierworkgroupsimplevo"></a>

```json
{
  "bu_supplier_workgroup_id": "1",
  "bu_supplier_workgroup_name": "sample bu_supplier_workgroup_name",
  "client_workgroup_id": "1",
  "client_workgroup_name": "sample client_workgroup_name",
  "is_approved": "false",
  "supplier_code": "sample supplier_code",
  "supplier_workgroup_id": "1",
  "supplier_workgroup_name": "sample supplier_workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.SupplierWorkgroupSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bu_supplier_workgroup_id|integer(int64)|false|none|none|
|bu_supplier_workgroup_name|string|false|none|none|
|client_workgroup_id|integer(int64)|false|none|none|
|client_workgroup_name|string|false|none|none|
|is_approved|boolean|false|none|none|
|supplier_code|string|false|none|none|
|supplier_workgroup_id|integer(int64)|false|none|none|
|supplier_workgroup_name|string|false|none|none|

<h2 id="tocS_TagRepoVO">TagRepoVO</h2>
<!-- backwards compatibility -->
<a id="schematagrepovo"></a>
<a id="schema_TagRepoVO"></a>
<a id="tocStagrepovo"></a>
<a id="tocstagrepovo"></a>

```json
{
  "isSpec": "false",
  "tagId": "1",
  "tagName": "sample tagName"
}
```

Java type: com.noosh.domain.collaboration.vo.TagRepoVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSpec|boolean|false|none|none|
|tagId|integer(int64)|false|none|none|
|tagName|string|false|none|none|

<h2 id="tocS_TagVO">TagVO</h2>
<!-- backwards compatibility -->
<a id="schematagvo"></a>
<a id="schema_TagVO"></a>
<a id="tocStagvo"></a>
<a id="tocstagvo"></a>

```json
{
  "isSpec": "false",
  "tagId": "1",
  "tagName": "sample tagName"
}
```

Java type: com.noosh.domain.collaboration.vo.TagVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSpec|boolean|false|none|none|
|tagId|integer(int64)|false|none|none|
|tagName|string|false|none|none|

<h2 id="tocS_TaskCreatedVO">TaskCreatedVO</h2>
<!-- backwards compatibility -->
<a id="schemataskcreatedvo"></a>
<a id="schema_TaskCreatedVO"></a>
<a id="tocStaskcreatedvo"></a>
<a id="tocstaskcreatedvo"></a>

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "task_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.ne.TaskCreatedVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|
|task_id|integer(int64)|false|none|none|

<h2 id="tocS_TaskDetailVO">TaskDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemataskdetailvo"></a>
<a id="schema_TaskDetailVO"></a>
<a id="tocStaskdetailvo"></a>
<a id="tocstaskdetailvo"></a>

```json
{
  "actual_duration": null,
  "actual_end": "1970-01-01",
  "actual_hours": null,
  "actual_start": "1970-01-01",
  "assign_to": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "baseline_duration": null,
  "baseline_end_date": "1970-01-01",
  "baseline_start_date": "1970-01-01",
  "comments": "sample comments",
  "create_date": "1970-01-01",
  "creator_workgroup_name": "sample creator_workgroup_name",
  "current_duration": null,
  "description": "sample description",
  "is_milestone": "false",
  "last_updated_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "mod_date": "1970-01-01",
  "percent_complete": "1",
  "plan_duration": null,
  "plan_end": "1970-01-01",
  "plan_start": "1970-01-01",
  "priority": "sample priority",
  "requested_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "schedule_code": "sample schedule_code",
  "status": "sample status",
  "task_id": "1",
  "task_name": "sample task_name",
  "task_type": "sample task_type"
}
```

Java type: com.noosh.nooshapi.vo.TaskDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_end|string(date)|false|none|none|
|actual_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_start|string(date)|false|none|none|
|assign_to|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|baseline_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|baseline_end_date|string(date)|false|none|none|
|baseline_start_date|string(date)|false|none|none|
|comments|string|false|none|none|
|create_date|string(date)|false|none|none|
|creator_workgroup_name|string|false|none|none|
|current_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|description|string|false|none|none|
|is_milestone|boolean|false|none|none|
|last_updated_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|mod_date|string(date)|false|none|none|
|percent_complete|integer(int32)|false|none|none|
|plan_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|plan_end|string(date)|false|none|none|
|plan_start|string(date)|false|none|none|
|priority|string|false|none|none|
|requested_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|schedule_code|string|false|none|none|
|status|string|false|none|none|
|task_id|integer(int64)|false|none|none|
|task_name|string|false|none|none|
|task_type|string|false|none|none|

<h2 id="tocS_TaskDetailWorkgroupLevelVO">TaskDetailWorkgroupLevelVO</h2>
<!-- backwards compatibility -->
<a id="schemataskdetailworkgrouplevelvo"></a>
<a id="schema_TaskDetailWorkgroupLevelVO"></a>
<a id="tocStaskdetailworkgrouplevelvo"></a>
<a id="tocstaskdetailworkgrouplevelvo"></a>

```json
{
  "actual_duration": null,
  "actual_end": "1970-01-01",
  "actual_hours": null,
  "actual_start": "1970-01-01",
  "assign_to": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "baseline_duration": null,
  "baseline_end_date": "1970-01-01",
  "baseline_start_date": "1970-01-01",
  "comments": "sample comments",
  "create_date": "1970-01-01",
  "creator_workgroup_name": "sample creator_workgroup_name",
  "current_duration": null,
  "description": "sample description",
  "is_milestone": "false",
  "last_updated_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "mod_date": "1970-01-01",
  "percent_complete": "1",
  "plan_duration": null,
  "plan_end": "1970-01-01",
  "plan_start": "1970-01-01",
  "priority": "sample priority",
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "requested_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "schedule_code": "sample schedule_code",
  "status": "sample status",
  "task_id": "1",
  "task_name": "sample task_name",
  "task_type": "sample task_type"
}
```

Java type: com.noosh.nooshapi.vo.TaskDetailWorkgroupLevelVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_end|string(date)|false|none|none|
|actual_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_start|string(date)|false|none|none|
|assign_to|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|baseline_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|baseline_end_date|string(date)|false|none|none|
|baseline_start_date|string(date)|false|none|none|
|comments|string|false|none|none|
|create_date|string(date)|false|none|none|
|creator_workgroup_name|string|false|none|none|
|current_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|description|string|false|none|none|
|is_milestone|boolean|false|none|none|
|last_updated_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|mod_date|string(date)|false|none|none|
|percent_complete|integer(int32)|false|none|none|
|plan_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|plan_end|string(date)|false|none|none|
|plan_start|string(date)|false|none|none|
|priority|string|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|requested_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|schedule_code|string|false|none|none|
|status|string|false|none|none|
|task_id|integer(int64)|false|none|none|
|task_name|string|false|none|none|
|task_type|string|false|none|none|

<h2 id="tocS_TaskExpandVO">TaskExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemataskexpandvo"></a>
<a id="schema_TaskExpandVO"></a>
<a id="tocStaskexpandvo"></a>
<a id="tocstaskexpandvo"></a>

```json
{
  "result": {
    "actual_duration": null,
    "actual_end": "1970-01-01",
    "actual_hours": null,
    "actual_start": "1970-01-01",
    "assign_to": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "baseline_duration": null,
    "baseline_end_date": "1970-01-01",
    "baseline_start_date": "1970-01-01",
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "creator_workgroup_name": "sample creator_workgroup_name",
    "current_duration": null,
    "description": "sample description",
    "is_milestone": "false",
    "last_updated_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "mod_date": "1970-01-01",
    "percent_complete": "1",
    "plan_duration": null,
    "plan_end": "1970-01-01",
    "plan_start": "1970-01-01",
    "priority": "sample priority",
    "requested_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "schedule_code": "sample schedule_code",
    "status": "sample status",
    "task_id": "1",
    "task_name": "sample task_name",
    "task_type": "sample task_type"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[TaskDetailVO](#schemataskdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.TaskDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskExpandWorkgroupLevelVO">TaskExpandWorkgroupLevelVO</h2>
<!-- backwards compatibility -->
<a id="schemataskexpandworkgrouplevelvo"></a>
<a id="schema_TaskExpandWorkgroupLevelVO"></a>
<a id="tocStaskexpandworkgrouplevelvo"></a>
<a id="tocstaskexpandworkgrouplevelvo"></a>

```json
{
  "result": {
    "actual_duration": null,
    "actual_end": "1970-01-01",
    "actual_hours": null,
    "actual_start": "1970-01-01",
    "assign_to": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "baseline_duration": null,
    "baseline_end_date": "1970-01-01",
    "baseline_start_date": "1970-01-01",
    "comments": "sample comments",
    "create_date": "1970-01-01",
    "creator_workgroup_name": "sample creator_workgroup_name",
    "current_duration": null,
    "description": "sample description",
    "is_milestone": "false",
    "last_updated_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "mod_date": "1970-01-01",
    "percent_complete": "1",
    "plan_duration": null,
    "plan_end": "1970-01-01",
    "plan_start": "1970-01-01",
    "priority": "sample priority",
    "project": {
      "project_id": "1",
      "project_name": "sample project_name",
      "project_number": "sample project_number"
    },
    "requested_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "schedule_code": "sample schedule_code",
    "status": "sample status",
    "task_id": "1",
    "task_name": "sample task_name",
    "task_type": "sample task_type"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskExpandWorkgroupLevelVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[TaskDetailWorkgroupLevelVO](#schemataskdetailworkgrouplevelvo)|false|none|Java type: com.noosh.nooshapi.vo.TaskDetailWorkgroupLevelVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskListVO">TaskListVO</h2>
<!-- backwards compatibility -->
<a id="schematasklistvo"></a>
<a id="schema_TaskListVO"></a>
<a id="tocStasklistvo"></a>
<a id="tocstasklistvo"></a>

```json
{
  "results": [
    {
      "actual_end": "1970-01-01",
      "actual_hours": null,
      "actual_start": "1970-01-01",
      "assign_to": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "baseline_duration": null,
      "baseline_end_date": "1970-01-01",
      "baseline_start_date": "1970-01-01",
      "current_duration": null,
      "is_milestone": "false",
      "mod_date": "1970-01-01",
      "plan_end": "1970-01-01",
      "plan_start": "1970-01-01",
      "priority": "sample priority",
      "schedule_code": "sample schedule_code",
      "status": "sample status",
      "task_id": "1",
      "task_name": "sample task_name",
      "task_type": "sample task_type"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskSimpleVO](#schematasksimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskPersistVO">TaskPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemataskpersistvo"></a>
<a id="schema_TaskPersistVO"></a>
<a id="tocStaskpersistvo"></a>
<a id="tocstaskpersistvo"></a>

```json
{
  "actual_duration": "1.1",
  "actual_duration_hour": "1.1",
  "actual_end_date": "1970-01-01",
  "actual_start_date": "1970-01-01",
  "assign_to_user_id": "1",
  "comments": "sample comments",
  "contributors": "sample contributors",
  "custom_status_id": "1",
  "description": "sample description",
  "name": "sample name",
  "percentage_complete": "1",
  "priority": "1",
  "revised_duration": "1.1",
  "revised_duration_hour": "1.1",
  "revised_end_date": "1970-01-01",
  "revised_start_date": "1970-01-01",
  "status_id": "1",
  "task_id": "1",
  "task_type_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.TaskPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_duration|number(double)|false|none|none|
|actual_duration_hour|number(double)|false|none|none|
|actual_end_date|string(date)|false|none|none|
|actual_start_date|string(date)|false|none|none|
|assign_to_user_id|integer(int64)|false|none|none|
|comments|string|false|none|none|
|contributors|string|false|none|none|
|custom_status_id|integer(int64)|false|none|none|
|description|string|false|none|none|
|name|string|false|none|none|
|percentage_complete|integer(int64)|false|none|none|
|priority|integer(int64)|false|none|none|
|revised_duration|number(double)|false|none|none|
|revised_duration_hour|number(double)|false|none|none|
|revised_end_date|string(date)|false|none|none|
|revised_start_date|string(date)|false|none|none|
|status_id|integer(int64)|false|none|none|
|task_id|integer(int64)|false|none|none|
|task_type_id|integer(int64)|false|none|none|

<h2 id="tocS_TaskPriorityListVO">TaskPriorityListVO</h2>
<!-- backwards compatibility -->
<a id="schemataskprioritylistvo"></a>
<a id="schema_TaskPriorityListVO"></a>
<a id="tocStaskprioritylistvo"></a>
<a id="tocstaskprioritylistvo"></a>

```json
{
  "results": [
    {
      "task_priority_id": "1",
      "task_priority_name": "sample task_priority_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskPriorityListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskPriorityVO](#schemataskpriorityvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskPriorityVO">TaskPriorityVO</h2>
<!-- backwards compatibility -->
<a id="schemataskpriorityvo"></a>
<a id="schema_TaskPriorityVO"></a>
<a id="tocStaskpriorityvo"></a>
<a id="tocstaskpriorityvo"></a>

```json
{
  "task_priority_id": "1",
  "task_priority_name": "sample task_priority_name"
}
```

Java type: com.noosh.nooshapi.vo.TaskPriorityVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_priority_id|integer(int64)|false|none|none|
|task_priority_name|string|false|none|none|

<h2 id="tocS_TaskSimpleVO">TaskSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schematasksimplevo"></a>
<a id="schema_TaskSimpleVO"></a>
<a id="tocStasksimplevo"></a>
<a id="tocstasksimplevo"></a>

```json
{
  "actual_end": "1970-01-01",
  "actual_hours": null,
  "actual_start": "1970-01-01",
  "assign_to": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "baseline_duration": null,
  "baseline_end_date": "1970-01-01",
  "baseline_start_date": "1970-01-01",
  "current_duration": null,
  "is_milestone": "false",
  "mod_date": "1970-01-01",
  "plan_end": "1970-01-01",
  "plan_start": "1970-01-01",
  "priority": "sample priority",
  "schedule_code": "sample schedule_code",
  "status": "sample status",
  "task_id": "1",
  "task_name": "sample task_name",
  "task_type": "sample task_type"
}
```

Java type: com.noosh.nooshapi.vo.TaskSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_end|string(date)|false|none|none|
|actual_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_start|string(date)|false|none|none|
|assign_to|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|baseline_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|baseline_end_date|string(date)|false|none|none|
|baseline_start_date|string(date)|false|none|none|
|current_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_milestone|boolean|false|none|none|
|mod_date|string(date)|false|none|none|
|plan_end|string(date)|false|none|none|
|plan_start|string(date)|false|none|none|
|priority|string|false|none|none|
|schedule_code|string|false|none|none|
|status|string|false|none|none|
|task_id|integer(int64)|false|none|none|
|task_name|string|false|none|none|
|task_type|string|false|none|none|

<h2 id="tocS_TaskStatusListVO">TaskStatusListVO</h2>
<!-- backwards compatibility -->
<a id="schemataskstatuslistvo"></a>
<a id="schema_TaskStatusListVO"></a>
<a id="tocStaskstatuslistvo"></a>
<a id="tocstaskstatuslistvo"></a>

```json
{
  "results": [
    {
      "task_status_id": "1",
      "task_status_name": "sample task_status_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskStatusListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskStatusVO](#schemataskstatusvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskStatusVO">TaskStatusVO</h2>
<!-- backwards compatibility -->
<a id="schemataskstatusvo"></a>
<a id="schema_TaskStatusVO"></a>
<a id="tocStaskstatusvo"></a>
<a id="tocstaskstatusvo"></a>

```json
{
  "task_status_id": "1",
  "task_status_name": "sample task_status_name"
}
```

Java type: com.noosh.nooshapi.vo.TaskStatusVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_status_id|integer(int64)|false|none|none|
|task_status_name|string|false|none|none|

<h2 id="tocS_TaskTimeCardVO">TaskTimeCardVO</h2>
<!-- backwards compatibility -->
<a id="schematasktimecardvo"></a>
<a id="schema_TaskTimeCardVO"></a>
<a id="tocStasktimecardvo"></a>
<a id="tocstasktimecardvo"></a>

```json
{
  "task_id": "1",
  "task_name": "sample task_name"
}
```

Java type: com.noosh.nooshapi.vo.TaskTimeCardVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|integer(int64)|false|none|none|
|task_name|string|false|none|none|

<h2 id="tocS_TaskTypeListVO">TaskTypeListVO</h2>
<!-- backwards compatibility -->
<a id="schematasktypelistvo"></a>
<a id="schema_TaskTypeListVO"></a>
<a id="tocStasktypelistvo"></a>
<a id="tocstasktypelistvo"></a>

```json
{
  "results": [
    {
      "task_type": "sample task_type",
      "task_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskTypeListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskTypeSimpleVO](#schematasktypesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskTypeSimpleVO">TaskTypeSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schematasktypesimplevo"></a>
<a id="schema_TaskTypeSimpleVO"></a>
<a id="tocStasktypesimplevo"></a>
<a id="tocstasktypesimplevo"></a>

```json
{
  "task_type": "sample task_type",
  "task_type_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.TaskTypeSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_type|string|false|none|none|
|task_type_id|integer(int64)|false|none|none|

<h2 id="tocS_TaskWorkgroupLevelListVO">TaskWorkgroupLevelListVO</h2>
<!-- backwards compatibility -->
<a id="schemataskworkgrouplevellistvo"></a>
<a id="schema_TaskWorkgroupLevelListVO"></a>
<a id="tocStaskworkgrouplevellistvo"></a>
<a id="tocstaskworkgrouplevellistvo"></a>

```json
{
  "results": [
    {
      "actual_end": "1970-01-01",
      "actual_hours": null,
      "actual_start": "1970-01-01",
      "assign_to": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "baseline_duration": null,
      "baseline_end_date": "1970-01-01",
      "baseline_start_date": "1970-01-01",
      "current_duration": null,
      "is_milestone": "false",
      "mod_date": "1970-01-01",
      "plan_end": "1970-01-01",
      "plan_start": "1970-01-01",
      "priority": "sample priority",
      "project": {
        "project_id": "1",
        "project_name": "sample project_name",
        "project_number": "sample project_number"
      },
      "schedule_code": "sample schedule_code",
      "status": "sample status",
      "task_id": "1",
      "task_name": "sample task_name",
      "task_type": "sample task_type"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskWorkgroupLevelSimpleVO](#schemataskworkgrouplevelsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TaskWorkgroupLevelSimpleVO">TaskWorkgroupLevelSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemataskworkgrouplevelsimplevo"></a>
<a id="schema_TaskWorkgroupLevelSimpleVO"></a>
<a id="tocStaskworkgrouplevelsimplevo"></a>
<a id="tocstaskworkgrouplevelsimplevo"></a>

```json
{
  "actual_end": "1970-01-01",
  "actual_hours": null,
  "actual_start": "1970-01-01",
  "assign_to": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "baseline_duration": null,
  "baseline_end_date": "1970-01-01",
  "baseline_start_date": "1970-01-01",
  "current_duration": null,
  "is_milestone": "false",
  "mod_date": "1970-01-01",
  "plan_end": "1970-01-01",
  "plan_start": "1970-01-01",
  "priority": "sample priority",
  "project": {
    "project_id": "1",
    "project_name": "sample project_name",
    "project_number": "sample project_number"
  },
  "schedule_code": "sample schedule_code",
  "status": "sample status",
  "task_id": "1",
  "task_name": "sample task_name",
  "task_type": "sample task_type"
}
```

Java type: com.noosh.nooshapi.vo.TaskWorkgroupLevelSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_end|string(date)|false|none|none|
|actual_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|actual_start|string(date)|false|none|none|
|assign_to|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|baseline_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|baseline_end_date|string(date)|false|none|none|
|baseline_start_date|string(date)|false|none|none|
|current_duration|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_milestone|boolean|false|none|none|
|mod_date|string(date)|false|none|none|
|plan_end|string(date)|false|none|none|
|plan_start|string(date)|false|none|none|
|priority|string|false|none|none|
|project|[ProjectBaseVO](#schemaprojectbasevo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectBaseVO|
|schedule_code|string|false|none|none|
|status|string|false|none|none|
|task_id|integer(int64)|false|none|none|
|task_name|string|false|none|none|
|task_type|string|false|none|none|

<h2 id="tocS_TeamMemberBaseInfVO">TeamMemberBaseInfVO</h2>
<!-- backwards compatibility -->
<a id="schemateammemberbaseinfvo"></a>
<a id="schema_TeamMemberBaseInfVO"></a>
<a id="tocSteammemberbaseinfvo"></a>
<a id="tocsteammemberbaseinfvo"></a>

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "teammember_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.TeamMemberBaseInfVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|
|teammember_id|integer(int64)|false|none|none|

<h2 id="tocS_TeamMemberListVO">TeamMemberListVO</h2>
<!-- backwards compatibility -->
<a id="schemateammemberlistvo"></a>
<a id="schema_TeamMemberListVO"></a>
<a id="tocSteammemberlistvo"></a>
<a id="tocsteammemberlistvo"></a>

```json
{
  "results": [
    {
      "company_name": "sample company_name",
      "name": "sample name",
      "phone": "sample phone",
      "role": "sample role",
      "teammember_id": "1",
      "user_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TeamMemberListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TeamMemberSimpleVO](#schemateammembersimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TeamMemberPO">TeamMemberPO</h2>
<!-- backwards compatibility -->
<a id="schemateammemberpo"></a>
<a id="schema_TeamMemberPO"></a>
<a id="tocSteammemberpo"></a>
<a id="tocsteammemberpo"></a>

```json
{
  "role_id": "1",
  "team_template_id": "1",
  "user_id": "1"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.TeamMemberPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role_id|integer(int64)|false|none|none|
|team_template_id|integer(int64)|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_TeamMemberSimpleVO">TeamMemberSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemateammembersimplevo"></a>
<a id="schema_TeamMemberSimpleVO"></a>
<a id="tocSteammembersimplevo"></a>
<a id="tocsteammembersimplevo"></a>

```json
{
  "company_name": "sample company_name",
  "name": "sample name",
  "phone": "sample phone",
  "role": "sample role",
  "teammember_id": "1",
  "user_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.TeamMemberSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|none|
|name|string|false|none|none|
|phone|string|false|none|none|
|role|string|false|none|none|
|teammember_id|integer(int64)|false|none|none|
|user_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_TeamTemplateDetailVO">TeamTemplateDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemateamtemplatedetailvo"></a>
<a id="schema_TeamTemplateDetailVO"></a>
<a id="tocSteamtemplatedetailvo"></a>
<a id="tocsteamtemplatedetailvo"></a>

```json
{
  "team_teample_item": [
    {
      "role": {
        "role_id": "1",
        "role_name": "sample role_name"
      },
      "user": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      }
    }
  ],
  "team_template_id": "1",
  "team_template_name": "sample team_template_name"
}
```

Java type: com.noosh.nooshapi.vo.TeamTemplateDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_teample_item|[[TeamTemplateItemVO](#schemateamtemplateitemvo)]|false|none|none|
|team_template_id|integer(int64)|false|none|none|
|team_template_name|string|false|none|none|

<h2 id="tocS_TeamTemplateExpandVO">TeamTemplateExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemateamtemplateexpandvo"></a>
<a id="schema_TeamTemplateExpandVO"></a>
<a id="tocSteamtemplateexpandvo"></a>
<a id="tocsteamtemplateexpandvo"></a>

```json
{
  "results": {
    "team_teample_item": [
      {
        "role": {
          "role_id": "1",
          "role_name": "sample role_name"
        },
        "user": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name",
          "user_id": "1"
        }
      }
    ],
    "team_template_id": "1",
    "team_template_name": "sample team_template_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TeamTemplateExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[TeamTemplateDetailVO](#schemateamtemplatedetailvo)|false|none|Java type: com.noosh.nooshapi.vo.TeamTemplateDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TeamTemplateItemVO">TeamTemplateItemVO</h2>
<!-- backwards compatibility -->
<a id="schemateamtemplateitemvo"></a>
<a id="schema_TeamTemplateItemVO"></a>
<a id="tocSteamtemplateitemvo"></a>
<a id="tocsteamtemplateitemvo"></a>

```json
{
  "role": {
    "role_id": "1",
    "role_name": "sample role_name"
  },
  "user": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  }
}
```

Java type: com.noosh.nooshapi.vo.TeamTemplateItemVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[RoleSimpleVO](#schemarolesimplevo)|false|none|Java type: com.noosh.nooshapi.vo.RoleSimpleVO|
|user|[UserPersonVO](#schemauserpersonvo)|false|none|Java type: com.noosh.nooshapi.vo.UserPersonVO|

<h2 id="tocS_TeamTemplateListVO">TeamTemplateListVO</h2>
<!-- backwards compatibility -->
<a id="schemateamtemplatelistvo"></a>
<a id="schema_TeamTemplateListVO"></a>
<a id="tocSteamtemplatelistvo"></a>
<a id="tocsteamtemplatelistvo"></a>

```json
{
  "results": [
    {
      "team_template_id": "1",
      "team_template_name": "sample team_template_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TeamTemplateListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TeamTemplateSimpleVO](#schemateamtemplatesimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TeamTemplateSimpleVO">TeamTemplateSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemateamtemplatesimplevo"></a>
<a id="schema_TeamTemplateSimpleVO"></a>
<a id="tocSteamtemplatesimplevo"></a>
<a id="tocsteamtemplatesimplevo"></a>

```json
{
  "team_template_id": "1",
  "team_template_name": "sample team_template_name"
}
```

Java type: com.noosh.nooshapi.vo.TeamTemplateSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_template_id|integer(int64)|false|none|none|
|team_template_name|string|false|none|none|

<h2 id="tocS_TimeCardDetailVO">TimeCardDetailVO</h2>
<!-- backwards compatibility -->
<a id="schematimecarddetailvo"></a>
<a id="schema_TimeCardDetailVO"></a>
<a id="tocStimecarddetailvo"></a>
<a id="tocstimecarddetailvo"></a>

```json
{
  "billable_hours": null,
  "is_submit": "false",
  "last_updated_date": "1970-01-01",
  "no_of_workdays": "1",
  "nonbillable_hours": null,
  "submit_date": "1970-01-01",
  "time_card_line": [
    {
      "activity_name": "sample activity_name",
      "day1_hours_spent": null,
      "day2_hours_spent": null,
      "day3_hours_spent": null,
      "day4_hours_spent": null,
      "day5_hours_spent": null,
      "day6_hours_spent": null,
      "day7_hours_spent": null,
      "project": {
        "project_id": "1",
        "project_name": "sample project_name"
      },
      "task": {
        "task_id": "1",
        "task_name": "sample task_name"
      },
      "time_card_line_id": "1",
      "total_hours_spent": null
    }
  ],
  "timecard_id": "1",
  "total_hours": null,
  "week_beginning": "1970-01-01"
}
```

Java type: com.noosh.nooshapi.vo.TimeCardDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billable_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_submit|boolean|false|none|none|
|last_updated_date|string(date)|false|none|none|
|no_of_workdays|integer(int32)|false|none|none|
|nonbillable_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|submit_date|string(date)|false|none|none|
|time_card_line|[[TimeCardLineVO](#schematimecardlinevo)]|false|none|none|
|timecard_id|integer(int64)|false|none|none|
|total_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|week_beginning|string(date)|false|none|none|

<h2 id="tocS_TimeCardLineVO">TimeCardLineVO</h2>
<!-- backwards compatibility -->
<a id="schematimecardlinevo"></a>
<a id="schema_TimeCardLineVO"></a>
<a id="tocStimecardlinevo"></a>
<a id="tocstimecardlinevo"></a>

```json
{
  "activity_name": "sample activity_name",
  "day1_hours_spent": null,
  "day2_hours_spent": null,
  "day3_hours_spent": null,
  "day4_hours_spent": null,
  "day5_hours_spent": null,
  "day6_hours_spent": null,
  "day7_hours_spent": null,
  "project": {
    "project_id": "1",
    "project_name": "sample project_name"
  },
  "task": {
    "task_id": "1",
    "task_name": "sample task_name"
  },
  "time_card_line_id": "1",
  "total_hours_spent": null
}
```

Java type: com.noosh.nooshapi.vo.TimeCardLineVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_name|string|false|none|none|
|day1_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day2_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day3_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day4_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day5_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day6_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|day7_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|project|[ProjectTimeCardVO](#schemaprojecttimecardvo)|false|none|Java type: com.noosh.nooshapi.vo.ProjectTimeCardVO|
|task|[TaskTimeCardVO](#schematasktimecardvo)|false|none|Java type: com.noosh.nooshapi.vo.TaskTimeCardVO|
|time_card_line_id|integer(int64)|false|none|none|
|total_hours_spent|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|

<h2 id="tocS_TimeCardListVO">TimeCardListVO</h2>
<!-- backwards compatibility -->
<a id="schematimecardlistvo"></a>
<a id="schema_TimeCardListVO"></a>
<a id="tocStimecardlistvo"></a>
<a id="tocstimecardlistvo"></a>

```json
{
  "results": [
    {
      "is_submit": "false",
      "last_updated_date": "1970-01-01",
      "no_of_workdays": "1",
      "submit_date": "1970-01-01",
      "timecard_id": "1",
      "total_hours": null,
      "week_beginning": "1970-01-01"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.TimeCardListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TimeCardSimpleVO](#schematimecardsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_TimeCardReceivedDetailVO">TimeCardReceivedDetailVO</h2>
<!-- backwards compatibility -->
<a id="schematimecardreceiveddetailvo"></a>
<a id="schema_TimeCardReceivedDetailVO"></a>
<a id="tocStimecardreceiveddetailvo"></a>
<a id="tocstimecardreceiveddetailvo"></a>

```json
{
  "billable_hours": null,
  "is_submit": "false",
  "last_updated_date": "1970-01-01",
  "no_of_workdays": "1",
  "nonbillable_hours": null,
  "owner": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "submit_date": "1970-01-01",
  "time_card_line": [
    {
      "activity_name": "sample activity_name",
      "day1_hours_spent": null,
      "day2_hours_spent": null,
      "day3_hours_spent": null,
      "day4_hours_spent": null,
      "day5_hours_spent": null,
      "day6_hours_spent": null,
      "day7_hours_spent": null,
      "project": {
        "project_id": "1",
        "project_name": "sample project_name"
      },
      "task": {
        "task_id": "1",
        "task_name": "sample task_name"
      },
      "time_card_line_id": "1",
      "total_hours_spent": null
    }
  ],
  "timecard_id": "1",
  "total_hours": null,
  "week_beginning": "1970-01-01"
}
```

Java type: com.noosh.nooshapi.vo.TimeCardReceivedDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billable_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|is_submit|boolean|false|none|none|
|last_updated_date|string(date)|false|none|none|
|no_of_workdays|integer(int32)|false|none|none|
|nonbillable_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|owner|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|submit_date|string(date)|false|none|none|
|time_card_line|[[TimeCardLineVO](#schematimecardlinevo)]|false|none|none|
|timecard_id|integer(int64)|false|none|none|
|total_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|week_beginning|string(date)|false|none|none|

<h2 id="tocS_TimeCardSimpleVO">TimeCardSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schematimecardsimplevo"></a>
<a id="schema_TimeCardSimpleVO"></a>
<a id="tocStimecardsimplevo"></a>
<a id="tocstimecardsimplevo"></a>

```json
{
  "is_submit": "false",
  "last_updated_date": "1970-01-01",
  "no_of_workdays": "1",
  "submit_date": "1970-01-01",
  "timecard_id": "1",
  "total_hours": null,
  "week_beginning": "1970-01-01"
}
```

Java type: com.noosh.nooshapi.vo.TimeCardSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_submit|boolean|false|none|none|
|last_updated_date|string(date)|false|none|none|
|no_of_workdays|integer(int32)|false|none|none|
|submit_date|string(date)|false|none|none|
|timecard_id|integer(int64)|false|none|none|
|total_hours|[BigDecimal](#schemabigdecimal)|false|none|Java type: java.math.BigDecimal|
|week_beginning|string(date)|false|none|none|

<h2 id="tocS_UofmSimpleVO">UofmSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemauofmsimplevo"></a>
<a id="schema_UofmSimpleVO"></a>
<a id="tocSuofmsimplevo"></a>
<a id="tocsuofmsimplevo"></a>

```json
{
  "is_default": "false",
  "uofm_id": "1",
  "uofm_name": "sample uofm_name"
}
```

Java type: com.noosh.nooshapi.vo.UofmSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_default|boolean|false|none|none|
|uofm_id|integer(int64)|false|none|none|
|uofm_name|string|false|none|none|

<h2 id="tocS_UserDetailsExpandVO">UserDetailsExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsexpandvo"></a>
<a id="schema_UserDetailsExpandVO"></a>
<a id="tocSuserdetailsexpandvo"></a>
<a id="tocsuserdetailsexpandvo"></a>

```json
{
  "result": {
    "address": null,
    "company_name": "sample company_name",
    "email": "sample email",
    "fax_number": "sample fax_number",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "locale": "sample locale",
    "middle_name": "sample middle_name",
    "organization": "sample organization",
    "phone_number": "sample phone_number",
    "time_zone": "sample time_zone",
    "title": "sample title",
    "user_id": "1"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.UserDetailsExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[UserDetailsVO](#schemauserdetailsvo)|false|none|Java type: com.noosh.nooshapi.vo.UserDetailsVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_UserDetailsVO">UserDetailsVO</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsvo"></a>
<a id="schema_UserDetailsVO"></a>
<a id="tocSuserdetailsvo"></a>
<a id="tocsuserdetailsvo"></a>

```json
{
  "address": null,
  "company_name": "sample company_name",
  "email": "sample email",
  "fax_number": "sample fax_number",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "locale": "sample locale",
  "middle_name": "sample middle_name",
  "organization": "sample organization",
  "phone_number": "sample phone_number",
  "time_zone": "sample time_zone",
  "title": "sample title",
  "user_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.UserDetailsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Map](#schemamap)|false|none|Java type: java.util.Map|
|company_name|string|false|none|none|
|email|string|false|none|none|
|fax_number|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|locale|string|false|none|none|
|middle_name|string|false|none|none|
|organization|string|false|none|none|
|phone_number|string|false|none|none|
|time_zone|string|false|none|none|
|title|string|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_UserFieldsSimpleVO">UserFieldsSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemauserfieldssimplevo"></a>
<a id="schema_UserFieldsSimpleVO"></a>
<a id="tocSuserfieldssimplevo"></a>
<a id="tocsuserfieldssimplevo"></a>

```json
{
  "is_required": "false",
  "label": "sample label",
  "ordinal_number": "1",
  "param_name": "sample param_name",
  "type": "sample type",
  "user_field_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.UserFieldsSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_required|boolean|false|none|none|
|label|string|false|none|none|
|ordinal_number|integer(int64)|false|none|none|
|param_name|string|false|none|none|
|type|string|false|none|none|
|user_field_id|integer(int64)|false|none|none|

<h2 id="tocS_UserPersonVO">UserPersonVO</h2>
<!-- backwards compatibility -->
<a id="schemauserpersonvo"></a>
<a id="schema_UserPersonVO"></a>
<a id="tocSuserpersonvo"></a>
<a id="tocsuserpersonvo"></a>

```json
{
  "email": "sample email",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "middle_name": "sample middle_name",
  "user_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.UserPersonVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|middle_name|string|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_UserVO">UserVO</h2>
<!-- backwards compatibility -->
<a id="schemauservo"></a>
<a id="schema_UserVO"></a>
<a id="tocSuservo"></a>
<a id="tocsuservo"></a>

```json
{
  "email": "sample email",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "middle_name": "sample middle_name",
  "user_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.UserVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|middle_name|string|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_V1X1SpecUpdatingPO">V1X1SpecUpdatingPO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1specupdatingpo"></a>
<a id="schema_V1X1SpecUpdatingPO"></a>
<a id="tocSv1x1specupdatingpo"></a>
<a id="tocsv1x1specupdatingpo"></a>

```json
{
  "first_level_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "header_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "product_type_id": "1",
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "second_level_custom_fields": [
    {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    }
  ],
  "sku": "sample sku",
  "spec_name": "sample spec_name",
  "spec_type_id": "1",
  "versions": [
    {
      "description": "sample description",
      "qty": "1"
    }
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1X1SpecUpdatingPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_level_custom_fields|[V1x1ProperyPO](#schemav1x1properypo)|false|none|Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO|
|header_custom_fields|[V1x1ProperyPO](#schemav1x1properypo)|false|none|Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO|
|product_type_id|integer(int64)|false|none|none|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|second_level_custom_fields|[[V1x1ProperyPO](#schemav1x1properypo)]|false|none|none|
|sku|string|false|none|none|
|spec_name|string|false|none|none|
|spec_type_id|integer(int64)|false|none|none|
|versions|[[SpecVersionPersistVO](#schemaspecversionpersistvo)]|false|none|none|

<h2 id="tocS_V1x1InvitedTeamMemberResultsVO">V1x1InvitedTeamMemberResultsVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1invitedteammemberresultsvo"></a>
<a id="schema_V1x1InvitedTeamMemberResultsVO"></a>
<a id="tocSv1x1invitedteammemberresultsvo"></a>
<a id="tocsv1x1invitedteammemberresultsvo"></a>

```json
{
  "results": [
    {
      "role": {
        "role_id": "1",
        "role_name": "sample role_name"
      },
      "team_member_id": "1",
      "user": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name",
        "user_id": "1"
      },
      "was_invited_before": "false"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberResultsVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[V1x1InvitedTeamMemberVO](#schemav1x1invitedteammembervo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_V1x1InvitedTeamMemberVO">V1x1InvitedTeamMemberVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1invitedteammembervo"></a>
<a id="schema_V1x1InvitedTeamMemberVO"></a>
<a id="tocSv1x1invitedteammembervo"></a>
<a id="tocsv1x1invitedteammembervo"></a>

```json
{
  "role": {
    "role_id": "1",
    "role_name": "sample role_name"
  },
  "team_member_id": "1",
  "user": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name",
    "user_id": "1"
  },
  "was_invited_before": "false"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1InvitedTeamMemberVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[RoleSimpleVO](#schemarolesimplevo)|false|none|Java type: com.noosh.nooshapi.vo.RoleSimpleVO|
|team_member_id|integer(int64)|false|none|none|
|user|[UserPersonVO](#schemauserpersonvo)|false|none|Java type: com.noosh.nooshapi.vo.UserPersonVO|
|was_invited_before|boolean|false|none|none|

<h2 id="tocS_V1x1ProperyPO">V1x1ProperyPO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1properypo"></a>
<a id="schema_V1x1ProperyPO"></a>
<a id="tocSv1x1properypo"></a>
<a id="tocsv1x1properypo"></a>

```json
{
  "property_attributes": [
    {
      "attribute_id": "1",
      "attribute_value": null,
      "label": "sample label",
      "param_id": "1",
      "param_name": "sample param_name"
    }
  ],
  "property_id": "1",
  "property_name": "sample property_name"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1ProperyPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property_attributes|[[V1x1SpecPamAndAttPO](#schemav1x1specpamandattpo)]|false|none|none|
|property_id|integer(int64)|false|none|none|
|property_name|string|false|none|none|

<h2 id="tocS_V1x1ProperyVO">V1x1ProperyVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1properyvo"></a>
<a id="schema_V1x1ProperyVO"></a>
<a id="tocSv1x1properyvo"></a>
<a id="tocsv1x1properyvo"></a>

```json
{
  "property_attributes": [
    {
      "attribute_id": "1",
      "attribute_value": null,
      "label": "sample label",
      "param_id": "1",
      "param_name": "sample param_name"
    }
  ],
  "property_id": "1",
  "property_name": "sample property_name"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property_attributes|[[V1x1SpecPamAndAttVO](#schemav1x1specpamandattvo)]|false|none|none|
|property_id|integer(int64)|false|none|none|
|property_name|string|false|none|none|

<h2 id="tocS_V1x1SpecDetailVO">V1x1SpecDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1specdetailvo"></a>
<a id="schema_V1x1SpecDetailVO"></a>
<a id="tocSv1x1specdetailvo"></a>
<a id="tocsv1x1specdetailvo"></a>

```json
{
  "client_status": "sample client_status",
  "create_date": "1970-01-01",
  "created_by": {
    "email": "sample email",
    "first_name": "sample first_name",
    "last_name": "sample last_name",
    "middle_name": "sample middle_name"
  },
  "first_level_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "header_custom_fields": {
    "property_attributes": [
      {
        "attribute_id": "1",
        "attribute_value": null,
        "label": "sample label",
        "param_id": "1",
        "param_name": "sample param_name"
      }
    ],
    "property_id": "1",
    "property_name": "sample property_name"
  },
  "job_id": "1",
  "last_updated": "1970-01-01",
  "product_type": "sample product_type",
  "product_type_info": {
    "label": "sample label",
    "product_type_id": "1"
  },
  "quantity_1": "1",
  "quantity_2": "1",
  "quantity_3": "1",
  "quantity_4": "1",
  "quantity_5": "1",
  "reference_number": "sample reference_number",
  "second_level_custom_fields": [
    {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    }
  ],
  "sku": "sample sku",
  "spec_id": "1",
  "spec_name": "sample spec_name",
  "spec_options": [
    {
      "spec_id": "1",
      "spec_name": "sample spec_name"
    }
  ],
  "spec_options_complete": [
    {
      "client_status": "sample client_status",
      "create_date": "1970-01-01",
      "created_by": {
        "email": "sample email",
        "first_name": "sample first_name",
        "last_name": "sample last_name",
        "middle_name": "sample middle_name"
      },
      "job_id": "1",
      "last_updated": "1970-01-01",
      "reference_number": "sample reference_number",
      "spec_id": "1",
      "spec_name": "sample spec_name",
      "spec_options_complete": [
        {}
      ],
      "supplier_status": "sample supplier_status",
      "uofms": [
        {
          "is_default": "false",
          "uofm_id": "1",
          "uofm_name": "sample uofm_name"
        }
      ],
      "user_state": "sample user_state"
    }
  ],
  "spec_original": {
    "spec_id": "1",
    "spec_name": "sample spec_name"
  },
  "spec_type": {
    "spec_type_id": "1",
    "spec_type_name": "sample spec_type_name"
  },
  "supplier_status": "sample supplier_status",
  "uofms": [
    {
      "is_default": "false",
      "uofm_id": "1",
      "uofm_name": "sample uofm_name"
    }
  ],
  "user_state": "sample user_state"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_status|string|false|none|none|
|create_date|string(date)|false|none|none|
|created_by|[PersonVO](#schemapersonvo)|false|none|Java type: com.noosh.nooshapi.vo.PersonVO|
|first_level_custom_fields|[V1x1ProperyVO](#schemav1x1properyvo)|false|none|Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO|
|header_custom_fields|[V1x1ProperyVO](#schemav1x1properyvo)|false|none|Java type: com.noosh.nooshapi.vo.v1x1.V1x1ProperyVO|
|job_id|integer(int64)|false|none|none|
|last_updated|string(date)|false|none|none|
|product_type|string|false|none|none|
|product_type_info|[ProductTypeVO](#schemaproducttypevo)|false|none|Java type: com.noosh.nooshapi.vo.ProductTypeVO|
|quantity_1|integer(int64)|false|none|none|
|quantity_2|integer(int64)|false|none|none|
|quantity_3|integer(int64)|false|none|none|
|quantity_4|integer(int64)|false|none|none|
|quantity_5|integer(int64)|false|none|none|
|reference_number|string|false|none|none|
|second_level_custom_fields|[[V1x1ProperyVO](#schemav1x1properyvo)]|false|none|none|
|sku|string|false|none|none|
|spec_id|integer(int64)|false|none|none|
|spec_name|string|false|none|none|
|spec_options|[[SpecSimplestVO](#schemaspecsimplestvo)]|false|none|none|
|spec_options_complete|[[SpecSimpleVO](#schemaspecsimplevo)]|false|none|none|
|spec_original|[SpecSimplestVO](#schemaspecsimplestvo)|false|none|Java type: com.noosh.nooshapi.vo.SpecSimplestVO|
|spec_type|[SpecTypeVO](#schemaspectypevo)|false|none|Java type: com.noosh.nooshapi.vo.SpecTypeVO|
|supplier_status|string|false|none|none|
|uofms|[[UofmSimpleVO](#schemauofmsimplevo)]|false|none|none|
|user_state|string|false|none|none|

<h2 id="tocS_V1x1SpecExpandVO">V1x1SpecExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1specexpandvo"></a>
<a id="schema_V1x1SpecExpandVO"></a>
<a id="tocSv1x1specexpandvo"></a>
<a id="tocsv1x1specexpandvo"></a>

```json
{
  "result": {
    "client_status": "sample client_status",
    "create_date": "1970-01-01",
    "created_by": {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "middle_name": "sample middle_name"
    },
    "first_level_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "header_custom_fields": {
      "property_attributes": [
        {
          "attribute_id": "1",
          "attribute_value": null,
          "label": "sample label",
          "param_id": "1",
          "param_name": "sample param_name"
        }
      ],
      "property_id": "1",
      "property_name": "sample property_name"
    },
    "job_id": "1",
    "last_updated": "1970-01-01",
    "product_type": "sample product_type",
    "product_type_info": {
      "label": "sample label",
      "product_type_id": "1"
    },
    "quantity_1": "1",
    "quantity_2": "1",
    "quantity_3": "1",
    "quantity_4": "1",
    "quantity_5": "1",
    "reference_number": "sample reference_number",
    "second_level_custom_fields": [
      {
        "property_attributes": [
          {
            "attribute_id": "1",
            "attribute_value": null,
            "label": "sample label",
            "param_id": "1",
            "param_name": "sample param_name"
          }
        ],
        "property_id": "1",
        "property_name": "sample property_name"
      }
    ],
    "sku": "sample sku",
    "spec_id": "1",
    "spec_name": "sample spec_name",
    "spec_options": [
      {
        "spec_id": "1",
        "spec_name": "sample spec_name"
      }
    ],
    "spec_options_complete": [
      {
        "client_status": "sample client_status",
        "create_date": "1970-01-01",
        "created_by": {
          "email": "sample email",
          "first_name": "sample first_name",
          "last_name": "sample last_name",
          "middle_name": "sample middle_name"
        },
        "job_id": "1",
        "last_updated": "1970-01-01",
        "reference_number": "sample reference_number",
        "spec_id": "1",
        "spec_name": "sample spec_name",
        "spec_options_complete": [
          {}
        ],
        "supplier_status": "sample supplier_status",
        "uofms": [
          {
            "is_default": "false",
            "uofm_id": "1",
            "uofm_name": "sample uofm_name"
          }
        ],
        "user_state": "sample user_state"
      }
    ],
    "spec_original": {
      "spec_id": "1",
      "spec_name": "sample spec_name"
    },
    "spec_type": {
      "spec_type_id": "1",
      "spec_type_name": "sample spec_type_name"
    },
    "supplier_status": "sample supplier_status",
    "uofms": [
      {
        "is_default": "false",
        "uofm_id": "1",
        "uofm_name": "sample uofm_name"
      }
    ],
    "user_state": "sample user_state"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[V1x1SpecDetailVO](#schemav1x1specdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_V1x1SpecPamAndAttPO">V1x1SpecPamAndAttPO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1specpamandattpo"></a>
<a id="schema_V1x1SpecPamAndAttPO"></a>
<a id="tocSv1x1specpamandattpo"></a>
<a id="tocsv1x1specpamandattpo"></a>

```json
{
  "attribute_id": "1",
  "attribute_value": null,
  "label": "sample label",
  "param_id": "1",
  "param_name": "sample param_name"
}
```

Java type: com.noosh.domain.nooshapi.persist.po.v1x1.V1x1SpecPamAndAttPO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|integer(int64)|false|none|none|
|attribute_value|[Object](#schemaobject)|false|none|Java type: java.lang.Object|
|label|string|false|none|none|
|param_id|integer(int64)|false|none|none|
|param_name|string|false|none|none|

<h2 id="tocS_V1x1SpecPamAndAttVO">V1x1SpecPamAndAttVO</h2>
<!-- backwards compatibility -->
<a id="schemav1x1specpamandattvo"></a>
<a id="schema_V1x1SpecPamAndAttVO"></a>
<a id="tocSv1x1specpamandattvo"></a>
<a id="tocsv1x1specpamandattvo"></a>

```json
{
  "attribute_id": "1",
  "attribute_value": null,
  "label": "sample label",
  "param_id": "1",
  "param_name": "sample param_name"
}
```

Java type: com.noosh.nooshapi.vo.v1x1.V1x1SpecPamAndAttVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute_id|integer(int64)|false|none|none|
|attribute_value|[Object](#schemaobject)|false|none|Java type: java.lang.Object|
|label|string|false|none|none|
|param_id|integer(int64)|false|none|none|
|param_name|string|false|none|none|

<h2 id="tocS_WgSpecPrdTypeRegPersistVO">WgSpecPrdTypeRegPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemawgspecprdtyperegpersistvo"></a>
<a id="schema_WgSpecPrdTypeRegPersistVO"></a>
<a id="tocSwgspecprdtyperegpersistvo"></a>
<a id="tocswgspecprdtyperegpersistvo"></a>

```json
{
  "enableDifferentiatePrdTypePreference": "false",
  "spec_prdType_list": [
    {
      "prdType_labels": [
        "sample prdType_labels"
      ],
      "spec_type_id": "1"
    }
  ]
}
```

Java type: com.noosh.domain.nooshapi.persist.vo.WgSpecPrdTypeRegPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableDifferentiatePrdTypePreference|boolean|false|none|none|
|spec_prdType_list|[[SpecTypePersistVO](#schemaspectypepersistvo)]|false|none|none|

<h2 id="tocS_WgTaskStatusListVO">WgTaskStatusListVO</h2>
<!-- backwards compatibility -->
<a id="schemawgtaskstatuslistvo"></a>
<a id="schema_WgTaskStatusListVO"></a>
<a id="tocSwgtaskstatuslistvo"></a>
<a id="tocswgtaskstatuslistvo"></a>

```json
{
  "result": [
    {
      "description": "sample description",
      "is_active": "false",
      "is_default": "false",
      "task_status_name": "sample task_status_name",
      "tasks_status_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.WgTaskStatusListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[WgTaskStatusVO](#schemawgtaskstatusvo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_WgTaskStatusVO">WgTaskStatusVO</h2>
<!-- backwards compatibility -->
<a id="schemawgtaskstatusvo"></a>
<a id="schema_WgTaskStatusVO"></a>
<a id="tocSwgtaskstatusvo"></a>
<a id="tocswgtaskstatusvo"></a>

```json
{
  "description": "sample description",
  "is_active": "false",
  "is_default": "false",
  "task_status_name": "sample task_status_name",
  "tasks_status_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.WgTaskStatusVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|is_active|boolean|false|none|none|
|is_default|boolean|false|none|none|
|task_status_name|string|false|none|none|
|tasks_status_id|integer(int64)|false|none|none|

<h2 id="tocS_WorkgroupAttributeListVO">WorkgroupAttributeListVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupattributelistvo"></a>
<a id="schema_WorkgroupAttributeListVO"></a>
<a id="tocSworkgroupattributelistvo"></a>
<a id="tocsworkgroupattributelistvo"></a>

```json
{
  "result": [
    {
      "is_checked": "false",
      "label": "sample label",
      "product_type_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupAttributeListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[[WorkgroupAttributeVO](#schemaworkgroupattributevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_WorkgroupAttributeVO">WorkgroupAttributeVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupattributevo"></a>
<a id="schema_WorkgroupAttributeVO"></a>
<a id="tocSworkgroupattributevo"></a>
<a id="tocsworkgroupattributevo"></a>

```json
{
  "is_checked": "false",
  "label": "sample label",
  "product_type_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupAttributeVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_checked|boolean|false|none|none|
|label|string|false|none|none|
|product_type_id|integer(int64)|false|none|none|

<h2 id="tocS_WorkgroupBaseVO">WorkgroupBaseVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupbasevo"></a>
<a id="schema_WorkgroupBaseVO"></a>
<a id="tocSworkgroupbasevo"></a>
<a id="tocsworkgroupbasevo"></a>

```json
{
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workgroup_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_WorkgroupDetailVO">WorkgroupDetailVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupdetailvo"></a>
<a id="schema_WorkgroupDetailVO"></a>
<a id="tocSworkgroupdetailvo"></a>
<a id="tocsworkgroupdetailvo"></a>

```json
{
  "address_line1": "sample address_line1",
  "address_line2": "sample address_line2",
  "address_line3": "sample address_line3",
  "city": "sample city",
  "country": "sample country",
  "country_code": "sample country_code",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_id": "1",
      "param_name": "sample param_name",
      "property_attribute_id": "1",
      "string_value": "sample string_value"
    }
  ],
  "default_currency": "sample default_currency",
  "portal": "sample portal",
  "postal": "sample postal",
  "state": "sample state",
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupDetailVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|false|none|none|
|address_line2|string|false|none|none|
|address_line3|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|country_code|string|false|none|none|
|custom_fields|[[PropertyPaAndAttVO](#schemapropertypaandattvo)]|false|none|none|
|default_currency|string|false|none|none|
|portal|string|false|none|none|
|postal|string|false|none|none|
|state|string|false|none|none|
|workgroup_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_WorkgroupExpandVO">WorkgroupExpandVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupexpandvo"></a>
<a id="schema_WorkgroupExpandVO"></a>
<a id="tocSworkgroupexpandvo"></a>
<a id="tocsworkgroupexpandvo"></a>

```json
{
  "result": {
    "address_line1": "sample address_line1",
    "address_line2": "sample address_line2",
    "address_line3": "sample address_line3",
    "city": "sample city",
    "country": "sample country",
    "country_code": "sample country_code",
    "custom_fields": [
      {
        "date_value": "1970-01-01",
        "number_value": null,
        "param_id": "1",
        "param_name": "sample param_name",
        "property_attribute_id": "1",
        "string_value": "sample string_value"
      }
    ],
    "default_currency": "sample default_currency",
    "portal": "sample portal",
    "postal": "sample postal",
    "state": "sample state",
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupExpandVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[WorkgroupDetailVO](#schemaworkgroupdetailvo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupDetailVO|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_WorkgroupHTTPStatusVO">WorkgroupHTTPStatusVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgrouphttpstatusvo"></a>
<a id="schema_WorkgroupHTTPStatusVO"></a>
<a id="tocSworkgrouphttpstatusvo"></a>
<a id="tocsworkgrouphttpstatusvo"></a>

```json
{
  "status_code": "1",
  "status_reason": "sample status_reason",
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupHTTPStatusVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|
|workgroup_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_WorkgroupListVO">WorkgroupListVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgrouplistvo"></a>
<a id="schema_WorkgroupListVO"></a>
<a id="tocSworkgrouplistvo"></a>
<a id="tocsworkgrouplistvo"></a>

```json
{
  "results": [
    {
      "is_default": "false",
      "parent_workgroup": {
        "workgroup_id": "1",
        "workgroup_name": "sample workgroup_name"
      },
      "workgroup_id": "1",
      "workgroup_name": "sample workgroup_name"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[WorkgroupSimpleVO](#schemaworkgroupsimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_WorkgroupMembersListVO">WorkgroupMembersListVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupmemberslistvo"></a>
<a id="schema_WorkgroupMembersListVO"></a>
<a id="tocSworkgroupmemberslistvo"></a>
<a id="tocsworkgroupmemberslistvo"></a>

```json
{
  "results": [
    {
      "email": "sample email",
      "first_name": "sample first_name",
      "last_name": "sample last_name",
      "user_id": "1"
    }
  ],
  "status_code": "1",
  "status_reason": "sample status_reason"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupMembersListVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[WorkgroupMembersSimpleVO](#schemaworkgroupmemberssimplevo)]|false|none|none|
|status_code|integer(int32)|false|none|none|
|status_reason|string|false|none|none|

<h2 id="tocS_WorkgroupMembersSimpleVO">WorkgroupMembersSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupmemberssimplevo"></a>
<a id="schema_WorkgroupMembersSimpleVO"></a>
<a id="tocSworkgroupmemberssimplevo"></a>
<a id="tocsworkgroupmemberssimplevo"></a>

```json
{
  "email": "sample email",
  "first_name": "sample first_name",
  "last_name": "sample last_name",
  "user_id": "1"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupMembersSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|user_id|integer(int64)|false|none|none|

<h2 id="tocS_WorkgroupSimpleVO">WorkgroupSimpleVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupsimplevo"></a>
<a id="schema_WorkgroupSimpleVO"></a>
<a id="tocSworkgroupsimplevo"></a>
<a id="tocsworkgroupsimplevo"></a>

```json
{
  "is_default": "false",
  "parent_workgroup": {
    "workgroup_id": "1",
    "workgroup_name": "sample workgroup_name"
  },
  "workgroup_id": "1",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupSimpleVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_default|boolean|false|none|none|
|parent_workgroup|[WorkgroupBaseVO](#schemaworkgroupbasevo)|false|none|Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO|
|workgroup_id|integer(int64)|false|none|none|
|workgroup_name|string|false|none|none|

<h2 id="tocS_WorkgroupUpdPersistVO">WorkgroupUpdPersistVO</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupupdpersistvo"></a>
<a id="schema_WorkgroupUpdPersistVO"></a>
<a id="tocSworkgroupupdpersistvo"></a>
<a id="tocsworkgroupupdpersistvo"></a>

```json
{
  "address_line1": "sample address_line1",
  "address_line2": "sample address_line2",
  "address_line3": "sample address_line3",
  "city": "sample city",
  "country": "sample country",
  "custom_fields": [
    {
      "date_value": "1970-01-01",
      "number_value": null,
      "param_name": "sample param_name",
      "string_value": "sample string_value"
    }
  ],
  "decimal_places": "1",
  "postal": "sample postal",
  "state": "sample state",
  "workgroup_name": "sample workgroup_name"
}
```

Java type: com.noosh.nooshapi.vo.WorkgroupUpdPersistVO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string|false|none|none|
|address_line2|string|false|none|none|
|address_line3|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|custom_fields|[[CustomFieldPersistVO](#schemacustomfieldpersistvo)]|false|none|none|
|decimal_places|integer(int64)|false|none|none|
|postal|string|false|none|none|
|state|string|false|none|none|
|workgroup_name|string|false|none|none|
