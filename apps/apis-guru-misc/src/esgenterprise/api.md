<h1 id="esg-rating-data">ESG Rating Data v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization">https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization</a>

License: MIT

# Authentication

* API Key (api_key)
    - Parameter Name: **token**, in: query.

<h1 id="esg-rating-data-rating">rating</h1>

## List all company ESG Ratings

> Code samples

```bash
curl "https://example.com/search?q=string&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /search`

<h3 id="list-all-company-esg-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Company name or stock symbol|

> Example responses

> 200 Response

```json
{
  "company_name": "string",
  "environment_score": 0,
  "governance_score": 0,
  "last_processing_date": "1970-01-01",
  "social_score": 0,
  "total": 0
}
```

<h3 id="list-all-company-esg-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of ESG Ratings|Inline|

<h3 id="list-all-company-esg-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|none|
|environment_score|number(double)|false|none|none|
|governance_score|number(double)|false|none|none|
|last_processing_date|string(date)|false|none|none|
|social_score|number(double)|false|none|none|
|total|number(double)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-next|string||ESG ratings|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>
