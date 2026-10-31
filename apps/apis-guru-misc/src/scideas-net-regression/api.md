<h1 id="regression-analysis-api">Regression analysis api v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This data processing api uses regression analysis to allow you to find out which contributing variables have the most effect on an outcome. For example does buyer location or price most effect sales ?

Base URLs:

* <a href="https://services.scideas.net">https://services.scideas.net</a>

<a href="https://scideas.net/terms">Terms of service</a>
Email: <a href="mailto:software@scideas.net">scideas software</a> 
Web: <a href="https://scideas.net">scideas software</a> 

<a href="https://services.scideas.net/regression">External documentation</a>

<h1 id="regression-analysis-api-default">Default</h1>

## Returns regression analysis.

> Code samples

```bash
curl https://example.com/regression/api \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "convert_date_to": "month",
    "data": [
      "25,female,30.2,0,yes,southwest,33900.65",
      "19,female,20.6,0,no,southwest,1731.677"
    ],
    "ignore_variables": [
      "VAT",
      "post code"
    ],
    "key": "abc123",
    "outcome_variable": "sales"
  }'
```

`POST /regression/api`

> Body parameter

```json
{
  "convert_date_to": "month",
  "data": [
    "25,female,30.2,0,yes,southwest,33900.65",
    "19,female,20.6,0,no,southwest,1731.677"
  ],
  "ignore_variables": [
    "VAT",
    "post code"
  ],
  "key": "abc123",
  "outcome_variable": "sales"
}
```

<h3 id="returns-regression-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[regression_api_body](#schemaregression_api_body)|true|none|
|» convert_date_to|body|string|false|convert dates to either month (1-12) or week (1-52)|
|» data|body|[object(string)]|true|none|
|» ignore_variables|body|[object(string)]|false|none|
|» key|body|string|true|api key|
|» outcome_variable|body|string|true|name of the desired outcome variable|

> Example responses

> 200 Response

```json
{
  "calls\"": {
    "limit": 100,
    "limit_reached": false,
    "this_month": 47
  },
  "data_count": 9500,
  "dates_converted_to": "week",
  "footer": "acme products ltd",
  "header": "sales regression analysis",
  "number_observations": 9000,
  "number_tests": 500,
  "outcome_variable": "sales",
  "paid": "true",
  "pdf": "https://scideas.net/services/regression/api/pdf/abc123-1641901999.9268.pdf",
  "prediction_mean_accuracy": 106,
  "standardized_coefficients": [
    {
      "coefficient": 0,
      "variable": "state"
    },
    {
      "coefficient": 2,
      "variable": "discount"
    }
  ],
  "summary": [
    "state has a negligible (0) influence.",
    "discount has a small (2) influence. More discount makes sales higher"
  ],
  "tested_variables": [
    "state",
    "date",
    "discount"
  ]
}
```

<h3 id="returns-regression-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON array of data|[inline_response_200](#schemainline_response_200)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "invalid key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|an error description|

<h2 id="tocS_inline_response_200">inline_response_200</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_200"></a>
<a id="schema_inline_response_200"></a>
<a id="tocSinline_response_200"></a>
<a id="tocsinline_response_200"></a>

```json
{
  "calls\"": {
    "limit": 100,
    "limit_reached": false,
    "this_month": 47
  },
  "data_count": 9500,
  "dates_converted_to": "week",
  "footer": "acme products ltd",
  "header": "sales regression analysis",
  "number_observations": 9000,
  "number_tests": 500,
  "outcome_variable": "sales",
  "paid": "true",
  "pdf": "https://scideas.net/services/regression/api/pdf/abc123-1641901999.9268.pdf",
  "prediction_mean_accuracy": 106,
  "standardized_coefficients": [
    {
      "coefficient": 0,
      "variable": "state"
    },
    {
      "coefficient": 2,
      "variable": "discount"
    }
  ],
  "summary": [
    "state has a negligible (0) influence.",
    "discount has a small (2) influence. More discount makes sales higher"
  ],
  "tested_variables": [
    "state",
    "date",
    "discount"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[result](#schemaresult)|false|none|none|
|*oneOf*|[error](#schemaerror)|false|none|none|

<h2 id="tocS_regression_api_body">regression_api_body</h2>
<!-- backwards compatibility -->
<a id="schemaregression_api_body"></a>
<a id="schema_regression_api_body"></a>
<a id="tocSregression_api_body"></a>
<a id="tocsregression_api_body"></a>

```json
{
  "convert_date_to": "month",
  "data": [
    "25,female,30.2,0,yes,southwest,33900.65",
    "19,female,20.6,0,no,southwest,1731.677"
  ],
  "ignore_variables": [
    "VAT",
    "post code"
  ],
  "key": "abc123",
  "outcome_variable": "sales"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convert_date_to|string|false|none|convert dates to either month (1-12) or week (1-52)|
|data|[object(string)]|true|none|none|
|ignore_variables|[object(string)]|false|none|none|
|key|string|true|none|api key|
|outcome_variable|string|true|none|name of the desired outcome variable|

<h2 id="tocS_result">result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "calls\"": {
    "limit": 100,
    "limit_reached": false,
    "this_month": 47
  },
  "data_count": 9500,
  "dates_converted_to": "week",
  "footer": "acme products ltd",
  "header": "sales regression analysis",
  "number_observations": 9000,
  "number_tests": 500,
  "outcome_variable": "sales",
  "paid": "true",
  "pdf": "https://scideas.net/services/regression/api/pdf/abc123-1641901999.9268.pdf",
  "prediction_mean_accuracy": 106,
  "standardized_coefficients": [
    {
      "coefficient": 0,
      "variable": "state"
    },
    {
      "coefficient": 2,
      "variable": "discount"
    }
  ],
  "summary": [
    "state has a negligible (0) influence.",
    "discount has a small (2) influence. More discount makes sales higher"
  ],
  "tested_variables": [
    "state",
    "date",
    "discount"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calls"|[result_calls](#schemaresult_calls)|false|none|none|
|data_count|integer|false|none|number of data rows processed|
|dates_converted_to|string|false|none|either month or week|
|footer|string|false|none|text for pdf footer|
|header|string|false|none|text for pdf header|
|number_observations|integer|false|none|number of data rows used for analysis|
|number_tests|integer|false|none|number of data rows used to test model accuracy|
|outcome_variable|string|false|none|the name of the variable processed as the outcome|
|paid|string|false|none|yes if paid subscriber, otherwise no|
|pdf|string|false|none|url of pdf summary|
|prediction_mean_accuracy|integer|false|none|percentage accuracy of model created|
|standardized_coefficients|[[result_standardized_coefficients](#schemaresult_standardized_coefficients)]|false|none|none|
|summary|[object(string)]|false|none|none|
|tested_variables|[string]|false|none|none|

<h2 id="tocS_result_calls">result_calls</h2>
<!-- backwards compatibility -->
<a id="schemaresult_calls"></a>
<a id="schema_result_calls"></a>
<a id="tocSresult_calls"></a>
<a id="tocsresult_calls"></a>

```json
{
  "limit": 100,
  "limit_reached": false,
  "this_month": 47
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer|false|none|number of api calls allowed per month|
|limit_reached|boolean|false|none|true if monthly limit has been reached|
|this_month|integer|false|none|number of api calls this month|

<h2 id="tocS_result_standardized_coefficients">result_standardized_coefficients</h2>
<!-- backwards compatibility -->
<a id="schemaresult_standardized_coefficients"></a>
<a id="schema_result_standardized_coefficients"></a>
<a id="tocSresult_standardized_coefficients"></a>
<a id="tocsresult_standardized_coefficients"></a>

```json
{
  "coefficient": 0,
  "variable": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coefficient|integer|false|none|standardized regression coefficient for variable|
|variable|string|false|none|name of variable|
