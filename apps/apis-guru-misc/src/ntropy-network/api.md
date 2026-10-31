<h1 id="ntropy-transaction-api-v1">Ntropy Transaction API v1 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Ntropy Transaction API for transaction classification & management

Contact Support:
 Name: API Support
 Email: api@ntropy.network

Base URLs:

* <a href="https://api.ntropy.network">https://api.ntropy.network</a>

<h1 id="ntropy-transaction-api-v1-classifier">classifier</h1>

## Get a batch of business transaction classification results.

<a id="opIdgetABatchOfBusinessTransactionClassificationResults"></a>

> Code samples

```bash
curl https://example.com/classifier/business/batch/247ee045-3d04-4b3c-872b-a9160b810f33 \
  -H 'Accept: application/json'
```

`GET /classifier/business/batch/{id}`

Get a batch of business transaction classification results.

<h3 id="get-a-batch-of-business-transaction-classification-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|(Required) Batch id.|

> Example responses

> 200 Response

```json
{
  "id": "urn:uuid:d4b197a2-f2cf-8302-0ef8-566",
  "progress": 68497089,
  "results": [
    {
      "labels": [
        "Cloud computing",
        "Infrastructure"
      ],
      "logo": "https://logo.clearbit.com/aws.amazon.com",
      "merchant": "Amazon Web Services",
      "transaction_id": "xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x",
      "website": "https://aws.amazon.com/"
    },
    {
      "labels": [
        "Cloud computing",
        "Infrastructure"
      ],
      "logo": "https://logo.clearbit.com/aws.amazon.com",
      "merchant": "Amazon Web Services",
      "transaction_id": "xbx8YP14g565Xketw3tFmn4yp49x3tbj9mD8DB4fM8DDY6x",
      "website": "https://aws.amazon.com/"
    }
  ],
  "status": "finished",
  "updated_at": "1949-08-24T23:09:35.824Z"
}
```

> 404 Response

```text

```

> 500 Response

```text

```

<h3 id="get-a-batch-of-business-transaction-classification-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a batch of business transaction classification results.|Inline|
|404|Not Found|Not found.|None|
|500|Internal Server Error|Internal server error.|None|

<h3 id="get-a-batch-of-business-transaction-classification-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|progress|number|false|none|none|
|results|[object]|false|none|none|
|» labels|[string]|false|none|none|
|» logo|string|false|none|none|
|» merchant|string|false|none|none|
|» transaction_id|string|false|none|none|
|» website|string|false|none|none|
|status|string|false|none|none|
|updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a batch of consumer transaction classification results.

<a id="opIdgetABatchOfConsumerTransactionClassificationResults"></a>

> Code samples

```bash
curl https://example.com/classifier/consumer/batch/247ee045-3d04-4b3c-872b-a9160b810f33 \
  -H 'Accept: application/json'
```

`GET /classifier/consumer/batch/{id}`

Get a batch of consumer transaction classification results.

<h3 id="get-a-batch-of-consumer-transaction-classification-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|(Required) Batch id.|

> Example responses

> 200 Response

```json
{
  "id": "5d13df6c-6a20-59b6-9259-fb4f0ad90411",
  "progress": -62518197,
  "results": [
    {
      "contact": {
        "email": "hUkvsYKUamGpI@rWdfbzlEMyCxWD.ep",
        "phone": "exercitation esse sed nisi"
      },
      "labels": [
        "eu quis pr",
        "eu"
      ],
      "location": {
        "address": "pariatur esse officia cupidatat",
        "city": "fugiat tempor reprehenderit",
        "country": "ad ea ut id",
        "lat": -68164400.35857312,
        "lon": 85118979.13578662,
        "postal_code": "minim est"
      },
      "logo": "laborum fugiat",
      "merchant": "do enim ullamco irure",
      "person": "non",
      "rating": {
        "reviews": 49181631,
        "value": -18636660.679956168
      },
      "transaction_id": "proident occaecat",
      "website": ""
    },
    {
      "contact": {
        "email": "B2b9F6BqZI@dnlLjJGCVnHqEgVFyDwSWrcCVtCuR.wsx",
        "phone": "incididunt reprehenderit do cupidatat"
      },
      "labels": [
        "non cupidatat et esse",
        "nisi reprehenderit est conse"
      ],
      "location": {
        "address": "irure magna",
        "city": "deserunt ut in",
        "country": "dolore Excepteur aliqua do",
        "lat": -53232704.415080525,
        "lon": 24234387.569050018,
        "postal_code": "officia dolore dolor"
      },
      "logo": "est",
      "merchant": "laboris culpa Excepteur consequat consectetur",
      "person": "fugiat",
      "rating": {
        "reviews": 97241118,
        "value": -51476788.074969985
      },
      "transaction_id": "labore Ut",
      "website": "cillum laborum c"
    }
  ],
  "status": "error",
  "updated_at": "2014-05-05T08:09:39.758Z"
}
```

> 404 Response

```text

```

> 500 Response

```text

```

<h3 id="get-a-batch-of-consumer-transaction-classification-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a batch of consumer transaction classification results.|Inline|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal server error|None|

<h3 id="get-a-batch-of-consumer-transaction-classification-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|progress|number|false|none|none|
|results|[object]|false|none|none|
|» contact|object|false|none|none|
|» » email|string|false|none|none|
|» » phone|string|false|none|none|
|» labels|[string]|false|none|none|
|» location|object|false|none|none|
|» » address|string|false|none|none|
|» » city|string|false|none|none|
|» » country|string|false|none|none|
|» » lat|number|false|none|none|
|» » lon|number|false|none|none|
|» » postal_code|string|false|none|none|
|» logo|string|false|none|none|
|» merchant|string|false|none|none|
|» person|string|false|none|none|
|» rating|object|false|none|none|
|» » reviews|number|false|none|none|
|» » value|number|false|none|none|
|» transaction_id|string|false|none|none|
|» website|string|false|none|none|
|status|string|false|none|none|
|updated_at|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
