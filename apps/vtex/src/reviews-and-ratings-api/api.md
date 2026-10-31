<h1 id="reviews-and-ratings-api">Reviews and Ratings API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


Reviews & Ratings is a [VTEX IO native solution](https://developers.vtex.com/vtex-developer-docs/docs/vtex-reviews-and-ratings) that allows shoppers to submit reviews and ratings for products, as well as see them while navigating the store.

## Rating

- [Get Product Rating](https://developers.vtex.com/vtex-rest-api/reference/getproductrating)

## Review

- [Get Review by Review ID](https://developers.vtex.com/vtex-rest-api/reference/getreviewbyreviewid)
- [Delete Review](https://developers.vtex.com/vtex-rest-api/reference/deletereview)
- [Update a Review](https://developers.vtex.com/vtex-rest-api/reference/editreview)
- [Get a list of Reviews](https://developers.vtex.com/vtex-rest-api/reference/getalistofreviews)
- [Create Multiple Reviews](https://developers.vtex.com/vtex-rest-api/reference/savemultiplereviews)
- [Delete Multiple Reviews](https://developers.vtex.com/vtex-rest-api/reference/deletemultiplereviews)
- [Create a Review](https://developers.vtex.com/vtex-rest-api/reference/savereview)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.myvtex.com/reviews-and-ratings/api">https://{accountName}.myvtex.com/reviews-and-ratings/api</a> - VTEX server URL

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="reviews-and-ratings-api-rating">Rating</h1>

## Get Product Rating

<a id="opIdGetProductRating"></a>

> Code samples

```bash
curl https://example.com/rating/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /rating/{productId}`

Retrieves the rating of a specific product.

<h3 id="get-product-rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|Product ID.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "average": 3.86,
  "totalCount": 7
}
```

<h3 id="get-product-rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-product-rating-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average|number|false|none|Avarage rating of the product.|
|totalCount|number|false|none|Total amount of ranting of the product.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="reviews-and-ratings-api-review">Review</h1>

## Create a Review

<a id="opIdSaveReview"></a>

> Code samples

```bash
curl https://example.com/review \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "productId": "65444",
    "rating": 5,
    "reviewerName": "Arturo",
    "text": "It is the best product that I have seen",
    "title": "Good Product"
  }'
```

`POST /review`

Creates a single review

> Body parameter

```json
{
  "productId": "65444",
  "rating": 5,
  "reviewerName": "Arturo",
  "text": "It is the best product that I have seen",
  "title": "Good Product"
}
```

<h3 id="create-a-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[SaveReviewRequest](#schemasavereviewrequest)|true|none|
|» productId|body|string|true|Product ID.|
|» rating|body|integer(int32)|true|Customer rating.|
|» reviewerName|body|string|true|Reviewer name.|
|» text|body|string|true|Review's text.|
|» title|body|string|true|Review's title.|

> Example responses

> 200 Response

```json
{
  "approved": false,
  "id": "5323fdaa-c012-11ec-835d-0ebee58edbb3",
  "locale": "en-US",
  "location": null,
  "pastReviews": null,
  "productId": "65444",
  "rating": 5,
  "reviewDateTime": "04/19/2022 18:55:58",
  "reviewerName": "Arturo",
  "searchDate": "2022-04-19T18:55:58Z",
  "shopperId": "user@email.com",
  "sku": "2",
  "text": "It is the best product that I have seen",
  "title": "Good Product",
  "verifiedPurchaser": false
}
```

<h3 id="create-a-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-a-review-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|false|none|If the review was approved (`true`) or not (`false`).|
|id|string|false|none|Review ID.|
|locale|string \| null|false|none|Review's locale.|
|location|string \| null|false|none|Review's origin location.|
|pastReviews|string \| null|false|none|Past reviews of the same product.|
|productId|string|false|none|Product ID.|
|rating|number|false|none|Customer rating.|
|reviewDateTime|string|false|none|Review's date and time.|
|reviewerName|string|false|none|Reviewer name.|
|searchDate|string|false|none|Review's search date.|
|shopperId|string|false|none|Shopper email.|
|sku|string \| null|false|none|SKU ID.|
|text|string|false|none|Review's text.|
|title|string|false|none|Review's title.|
|verifiedPurchaser|boolean|false|none|If the reviewer is a verified purchaser (`true`) or not (`false`).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Review by Review ID

<a id="opIdGetReviewbyReviewId"></a>

> Code samples

```bash
curl https://example.com/review/1 \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /review/{reviewId}`

Retrieves information of a product review by its ID.

<h3 id="get-review-by-review-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|Review ID.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "approved": false,
  "id": "5323fdaa-c012-11ec-835d-0ebee58edbb3",
  "locale": "en-US",
  "location": null,
  "pastReviews": null,
  "productId": "1",
  "rating": 5,
  "reviewDateTime": "04/19/2022 18:55:58",
  "reviewerName": "Arturo",
  "searchDate": "2022-04-19T18:55:58Z",
  "shopperId": "user@email.com",
  "sku": "2",
  "text": "Great product.",
  "title": "Great product",
  "verifiedPurchaser": false
}
```

<h3 id="get-review-by-review-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-review-by-review-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|false|none|If the review was approved (`true`) or not (`false`).|
|id|string|false|none|Review ID.|
|locale|string \| null|false|none|Review's locale.|
|location|string \| null|false|none|Review's origin location.|
|pastReviews|string \| null|false|none|Past reviews of the same product.|
|productId|string|false|none|Product ID.|
|rating|number|false|none|Customer rating.|
|reviewDateTime|string|false|none|Review's date and time.|
|reviewerName|string|false|none|Reviewer name.|
|searchDate|string|false|none|Review's search date.|
|shopperId|string|false|none|Shopper email.|
|sku|string \| null|false|none|SKU ID.|
|text|string|false|none|Review's text.|
|title|string|false|none|Review's title.|
|verifiedPurchaser|boolean|false|none|If the reviewer is a verified purchaser (`true`) or not (`false`).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Review

<a id="opIdDeleteReview"></a>

> Code samples

```bash
curl https://example.com/review/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /review/{reviewId}`

Deletes an existing review.

<h3 id="delete-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|Review ID.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
true
```

<h3 id="delete-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update a Review

<a id="opIdEditReview"></a>

> Code samples

```bash
curl https://example.com/review/5323fdaa-c012-11ec-835d-0ebee58edbb3 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "locale": "en-US",
    "productId": "1",
    "rating": 5,
    "reviewerName": "Arturo",
    "shopperId": "user@email.com",
    "text": "Great product.",
    "title": "Great product",
    "verifiedPurchaser": false
  }'
```

`PATCH /review/{reviewId}`

Updates the information of a review.

> Body parameter

```json
{
  "locale": "en-US",
  "productId": "1",
  "rating": 5,
  "reviewerName": "Arturo",
  "shopperId": "user@email.com",
  "text": "Great product.",
  "title": "Great product",
  "verifiedPurchaser": false
}
```

<h3 id="update-a-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|Review ID.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|object|true|none|
|» locale|body|string \| null|false|Review's locale.|
|» productId|body|string|true|Product ID.|
|» rating|body|number|true|Customer rating.|
|» reviewerName|body|string|true|Reviewer name.|
|» shopperId|body|string|false|Shopper email.|
|» text|body|string|true|Review's text.|
|» title|body|string|true|Review's title.|
|» verifiedPurchaser|body|boolean|false|If the reviewer is a verified purchaser (`true`) or not (`false`).|

> Example responses

> 200 Response

```json
{
  "approved": false,
  "id": "5323fdaa-c012-11ec-835d-0ebee58edbb3",
  "locale": "en-US",
  "location": null,
  "pastReviews": null,
  "productId": "1",
  "rating": 5,
  "reviewDateTime": "04/19/2022 18:55:58",
  "reviewerName": "Arturo",
  "searchDate": "2022-04-19T18:55:58Z",
  "shopperId": "user@email.com",
  "sku": "2",
  "text": "Great product.",
  "title": "Great product",
  "verifiedPurchaser": false
}
```

<h3 id="update-a-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="update-a-review-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|false|none|If the review was approved (`true`) or not (`false`).|
|id|string|false|none|Review ID.|
|locale|string \| null|false|none|Review's locale.|
|location|string \| null|false|none|Review's origin location.|
|pastReviews|string \| null|false|none|Past reviews of the same product.|
|productId|string|false|none|Product ID.|
|rating|number|false|none|Customer rating.|
|reviewDateTime|string|false|none|Review's date and time.|
|reviewerName|string|false|none|Reviewer name.|
|searchDate|string|false|none|Review's search date.|
|shopperId|string|false|none|Shopper email.|
|sku|string \| null|false|none|SKU ID.|
|text|string|false|none|Review's text.|
|title|string|false|none|Review's title.|
|verifiedPurchaser|boolean|false|none|If the reviewer is a verified purchaser (`true`) or not (`false`).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get a list of Reviews

<a id="opIdGetalistofReviews"></a>

> Code samples

```bash
curl 'https://example.com/reviews?search_term=search_term&from=0&to=3&order_by=%3Aasc&status=true&product_id=1' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /reviews`

Retrieves a list of reviews.

<h3 id="get-a-list-of-reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search_term|query|string|true|Returns Reviews that contain the search term in `productId`, `sku`, `shopperId`, or `reviewerName`.|
|from|query|string|true|Zero base starting record number, `0` is the default value.|
|to|query|string|true|Zero base ending record number, `3` is the default value.|
|order_by|query|string|true|Case-sensitive fieldName to order records (optionally add `:asc` or `:desc`).|
|status|query|boolean|true|Status of the review, approved (`true`) or not (`false`).|
|product_id|query|string|true|Filter the reviews by product ID.|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "approved": true,
      "id": "1",
      "locale": null,
      "location": "",
      "pastReviews": null,
      "productId": "880035",
      "rating": 3,
      "reviewDateTime": "06/02/2021 20:58:43",
      "reviewerName": "anon",
      "searchDate": "2021-06-02T20:58:43Z",
      "shopperId": "anon@email.com",
      "sku": null,
      "text": "anon",
      "title": "anon",
      "verifiedPurchaser": false
    },
    {
      "approved": true,
      "id": "2",
      "locale": null,
      "location": "",
      "pastReviews": null,
      "productId": "880035",
      "rating": 5,
      "reviewDateTime": "06/02/2021 21:00:00",
      "reviewerName": "Brian",
      "searchDate": "2021-06-02T21:00:00Z",
      "shopperId": "brian@email.com.br",
      "sku": null,
      "text": "it's cool",
      "title": "logged in",
      "verifiedPurchaser": false
    },
    {
      "approved": true,
      "id": "c66d8bc0-787c-11ec-82ac-028dd4526e77",
      "locale": "ko-KR",
      "location": null,
      "pastReviews": null,
      "productId": "880035",
      "rating": 3,
      "reviewDateTime": "01/18/2022 16:36:33",
      "reviewerName": "ko-KR",
      "searchDate": "2022-01-18T16:36:33Z",
      "shopperId": "user@email.com",
      "sku": null,
      "text": "ko-KR",
      "title": "Korean",
      "verifiedPurchaser": false
    }
  ],
  "range": {
    "from": 0,
    "to": 3,
    "total": 26
  }
}
```

<h3 id="get-a-list-of-reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-list-of-reviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array of reviews.|
|» approved|boolean|false|none|If the review was approved (`true`) or not (`false`).|
|» id|string|false|none|Review ID.|
|» locale|string \| null|false|none|Review's locale.|
|» location|string \| null|false|none|Review's origin location.|
|» pastReviews|string \| null|false|none|Past reviews of the same product.|
|» productId|string|false|none|Product ID.|
|» rating|number|false|none|Customer rating.|
|» reviewDateTime|string|false|none|Review's date and time.|
|» reviewerName|string|false|none|Reviewer name.|
|» searchDate|string|false|none|Review's search date.|
|» shopperId|string|false|none|Shopper email.|
|» sku|string \| null|false|none|SKU ID.|
|» text|string|false|none|Review's text.|
|» title|string|false|none|Review's title.|
|» verifiedPurchaser|boolean|false|none|If the reviewer is a verified purchaser (`true`) or not (`false`).|
|range|object|false|none|Range of the review's list.|
|» from|number|false|none|Zero base starting record number.|
|» to|number|false|none|Zero base ending record number.|
|» total|number|false|none|Total number of reviews on the list.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Multiple Reviews

<a id="opIdSaveMultipleReviews"></a>

> Code samples

```bash
curl https://example.com/reviews \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    {
      "approved": false,
      "productId": "1",
      "rating": 4,
      "reviewerName": "Arturo",
      "text": "test multiple reviews",
      "title": "test multiple reviews",
      "verifiedPurchaser": false
    },
    {
      "approved": false,
      "productId": "2",
      "rating": 4,
      "reviewerName": "Arturo",
      "text": "test review 2 multiple reviews",
      "title": "test review 2 multiple reviews",
      "verifiedPurchaser": false
    }
  ]'
```

`POST /reviews`

Creates multiple reviews.

> Body parameter

```json
[
  {
    "approved": false,
    "productId": "1",
    "rating": 4,
    "reviewerName": "Arturo",
    "text": "test multiple reviews",
    "title": "test multiple reviews",
    "verifiedPurchaser": false
  },
  {
    "approved": false,
    "productId": "2",
    "rating": 4,
    "reviewerName": "Arturo",
    "text": "test review 2 multiple reviews",
    "title": "test review 2 multiple reviews",
    "verifiedPurchaser": false
  }
]
```

<h3 id="create-multiple-reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[[SaveMultipleReviewsRequest](#schemasavemultiplereviewsrequest)]|true|none|

> Example responses

> 200 Response

```json
[
  "8e1a5e11-c0c9-11ec-835d-0a591b8a3ec1",
  "9257c203-c0c9-11ec-835d-0e02dd207951"
]
```

<h3 id="create-multiple-reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-multiple-reviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Delete Multiple Reviews

<a id="opIdDeleteMultipleReviews"></a>

> Code samples

```bash
curl https://example.com/reviews \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    "babefcf4-e0f7-11ec-835d-16c4e59c4351",
    "qweqweee-e0f7-11ec-835d-16c4e59c4351",
    "asdffggg-e0f7-11ec-835d-16c4e59c4351"
  ]'
```

`DELETE /reviews`

Deletes multiple reviews at once.

> Body parameter

```json
[
  "babefcf4-e0f7-11ec-835d-16c4e59c4351",
  "qweqweee-e0f7-11ec-835d-16c4e59c4351",
  "asdffggg-e0f7-11ec-835d-16c4e59c4351"
]
```

<h3 id="delete-multiple-reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.|
|body|body|[string]|false|none|

> Example responses

> 200 Response

```json
true
```

<h3 id="delete-multiple-reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_SaveMultipleReviewsRequest">SaveMultipleReviewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasavemultiplereviewsrequest"></a>
<a id="schema_SaveMultipleReviewsRequest"></a>
<a id="tocSsavemultiplereviewsrequest"></a>
<a id="tocssavemultiplereviewsrequest"></a>

```json
{
  "approved": false,
  "productId": "1",
  "rating": 4,
  "reviewerName": "Arturo",
  "text": "Great product!",
  "title": "Great product",
  "verifiedPurchaser": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|true|none|If the review was approved (`true`) or not (`false`).|
|id|string|false|none|Review ID.|
|productId|string|true|none|Product ID.|
|rating|number|true|none|Customer rating.|
|reviewerName|string|true|none|Reviewer name.|
|text|string|true|none|Review's text.|
|title|string|true|none|Review's title.|
|verifiedPurchaser|boolean|true|none|If the reviewer is a verified purchaser (`true`) or not (`false`).|

<h2 id="tocS_SaveReviewRequest">SaveReviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemasavereviewrequest"></a>
<a id="schema_SaveReviewRequest"></a>
<a id="tocSsavereviewrequest"></a>
<a id="tocssavereviewrequest"></a>

```json
{
  "productId": "65444",
  "rating": 5,
  "reviewerName": "Arturo",
  "text": "It is the best product that I have seen",
  "title": "Good Product"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|productId|string|true|none|Product ID.|
|rating|integer(int32)|true|none|Customer rating.|
|reviewerName|string|true|none|Reviewer name.|
|text|string|true|none|Review's text.|
|title|string|true|none|Review's title.|
