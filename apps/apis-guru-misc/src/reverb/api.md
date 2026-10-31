<h1 id="reverb">reverb v3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

reverb

Base URLs:

* <a href="https://api.reverb.com/api">https://api.reverb.com/api</a>

<a href="https://reverb.com/page/terms">Terms of service</a>
Email: <a href="mailto:integrations@reverb.com">Reverb API</a> 
Web: <a href="https://www.reverb-api.com">Reverb API</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://dev.reverb.com/">External documentation</a>

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://reverb.com/oauth/token](https://reverb.com/oauth/token)

|Scope|Scope Description|
|---|---|
|public||
|read_feedback|*Originally missing*|
|read_listings|*Originally missing*|
|read_lists|*Originally missing*|
|read_messages|*Originally missing*|
|read_offers|*Originally missing*|
|read_orders|*Originally missing*|
|read_payouts|*Originally missing*|
|read_profile|*Originally missing*|
|write_feedback|*Originally missing*|
|write_listings|*Originally missing*|
|write_listings_for_others|*Originally missing*|
|write_lists|*Originally missing*|
|write_messages|*Originally missing*|
|write_offers|*Originally missing*|
|write_orders|*Originally missing*|
|write_profile|*Originally missing*|
|write_reviews|*Originally missing*|

<h1 id="reverb-articles">articles</h1>

## get/articles

> Code samples

```bash
curl https://example.com/articles
```

`GET /articles`

<h3 id="getarticles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|
|query|query|string|false|What's being searched for|
|exclude_featured|query|integer|false|Number of featured articles to exclude|

<h3 id="getarticles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of all article categories

> Code samples

```bash
curl https://example.com/articles/categories
```

`GET /articles/categories`

List of all article categories

<h3 id="list-of-all-article-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-categories">categories</h1>

## List of supported product categories

> Code samples

```bash
curl https://example.com/categories
```

`GET /categories`

List of supported product categories

<h3 id="list-of-supported-product-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/categories/flat

> Code samples

```bash
curl https://example.com/categories/flat
```

`GET /categories/flat`

<h3 id="getcategoriesflat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Full taxonomy tree of categories including middle categories

> Code samples

```bash
curl https://example.com/categories/taxonomy
```

`GET /categories/taxonomy`

Full taxonomy tree of categories including middle categories

<h3 id="full-taxonomy-tree-of-categories-including-middle-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get subcategory details

> Code samples

```bash
curl https://example.com/categories/string/string
```

`GET /categories/{product_type}/{category}`

Get subcategory details

<h3 id="get-subcategory-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_type|path|string|true|none|
|category|path|string|true|none|

<h3 id="get-subcategory-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get category details

> Code samples

```bash
curl https://example.com/categories/string
```

`GET /categories/{uuid}`

Get category details

<h3 id="get-category-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|

<h3 id="get-category-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-comparisonshoppingpages">comparison_shopping_pages</h1>

## Returns a set of comparison shopping pages based on the current params

> Code samples

```bash
curl https://example.com/comparison_shopping_pages
```

`GET /comparison_shopping_pages`

Returns a set of comparison shopping pages based on the current params

<h3 id="returns-a-set-of-comparison-shopping-pages-based-on-the-current-params-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show comparison shopping page

> Code samples

```bash
curl https://example.com/comparison_shopping_pages/find
```

`GET /comparison_shopping_pages/find`

Show comparison shopping page

<h3 id="show-comparison-shopping-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|ID of the comparison shopping page|
|slug|query|string|false|Slug of the comparison shopping page|

<h3 id="show-comparison-shopping-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/comparison_shopping_pages/{id}

> Code samples

```bash
curl https://example.com/comparison_shopping_pages/string
```

`GET /comparison_shopping_pages/{id}`

<h3 id="getcomparisonshoppingpagesid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getcomparisonshoppingpagesid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return new or used listings for a comparison shopping page

> Code samples

```bash
curl 'https://example.com/comparison_shopping_pages/string/listings?condition=string'
```

`GET /comparison_shopping_pages/{id}/listings`

Return new or used listings for a comparison shopping page

<h3 id="return-new-or-used-listings-for-a-comparison-shopping-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|condition|query|string|true|Condition of the listing|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="return-new-or-used-listings-for-a-comparison-shopping-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## View reviews of a comparison shopping page

> Code samples

```bash
curl https://example.com/comparison_shopping_pages/string/reviews
```

`GET /comparison_shopping_pages/{id}/reviews`

View reviews of a comparison shopping page

<h3 id="view-reviews-of-a-comparison-shopping-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="view-reviews-of-a-comparison-shopping-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-conversations">conversations</h1>

## Make an offer to the other participant in the conversation

> Code samples

```bash
curl https://example.com/conversations/string/offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "country_code": "string",
    "layaway_terms_slug": "string",
    "message": "string",
    "offer_items": [
      {
        "listing_id": "string",
        "price": "string",
        "shipping_price": "string"
      }
    ],
    "price": {
      "amount": "string",
      "currency": "USD"
    },
    "quantity": "string",
    "recipient_id": "string",
    "region_code": "string",
    "shipping_price": {
      "amount": "string",
      "currency": "USD"
    }
  }'
```

`POST /conversations/{conversation_id}/offer`

Make an offer to the other participant in the conversation

> Body parameter

```json
{
  "country_code": "string",
  "layaway_terms_slug": "string",
  "message": "string",
  "offer_items": [
    {
      "listing_id": "string",
      "price": "string",
      "shipping_price": "string"
    }
  ],
  "price": {
    "amount": "string",
    "currency": "USD"
  },
  "quantity": "string",
  "recipient_id": "string",
  "region_code": "string",
  "shipping_price": {
    "amount": "string",
    "currency": "USD"
  }
}
```

<h3 id="make-an-offer-to-the-other-participant-in-the-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|none|
|body|body|object|false|the content of the request|
|» country_code|body|string|false|none|
|» layaway_terms_slug|body|string|false|none|
|» message|body|string|false|Message to include with counter offer|
|» offer_items|body|[object]|false|none|
|» » listing_id|body|string|true|none|
|» » price|body|string|true|none|
|» » shipping_price|body|string|true|none|
|» price|body|object|false|none|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|
|» quantity|body|string|false|none|
|» recipient_id|body|string|false|ID of the recipient of the offer. Required if you are the seller pushing an offer to a buyer.|
|» region_code|body|string|false|none|
|» shipping_price|body|object|false|Shipping price (sellers only)|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|

<h3 id="make-an-offer-to-the-other-participant-in-the-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

## Make an offer to the other participant in the conversation

> Code samples

```bash
curl https://example.com/conversations/string/offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string",
    "price": "string",
    "shipping_price": "string"
  }'
```

`POST /conversations/{id}/offer`

Make an offer to the other participant in the conversation

> Body parameter

```json
{
  "message": "string",
  "price": "string",
  "shipping_price": "string"
}
```

<h3 id="make-an-offer-to-the-other-participant-in-the-conversation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» message|body|string|false|Message to include with counter offer|
|» price|body|string|true|Offer price|
|» shipping_price|body|string|false|Shipping price (sellers only)|

<h3 id="make-an-offer-to-the-other-participant-in-the-conversation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

<h1 id="reverb-countries">countries</h1>

## Retrieve a list of country codes with corresponding subregions

> Code samples

```bash
curl https://example.com/countries
```

`GET /countries`

Retrieve a list of country codes with corresponding subregions

<h3 id="retrieve-a-list-of-country-codes-with-corresponding-subregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-csps">csps</h1>

## Returns a set of comparison shopping pages based on the current params

> Code samples

```bash
curl https://example.com/csps
```

`GET /csps`

Returns a set of comparison shopping pages based on the current params

<h3 id="returns-a-set-of-comparison-shopping-pages-based-on-the-current-params-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/csps/categories

> Code samples

```bash
curl https://example.com/csps/categories
```

`GET /csps/categories`

<h3 id="getcspscategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show comparison shopping page

> Code samples

```bash
curl https://example.com/csps/find
```

`GET /csps/find`

Show comparison shopping page

<h3 id="show-comparison-shopping-page-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|ID of the comparison shopping page|
|slug|query|string|false|Slug of the comparison shopping page|

<h3 id="show-comparison-shopping-page-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/csps/{id}

> Code samples

```bash
curl https://example.com/csps/string
```

`GET /csps/{id}`

<h3 id="getcspsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="getcspsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-curatedsets">curated_sets</h1>

## get/curated_sets/{slug}

> Code samples

```bash
curl https://example.com/curated_sets/string
```

`GET /curated_sets/{slug}`

<h3 id="getcuratedsetsslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="getcuratedsetsslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-currencies">currencies</h1>

## List of supported display currencies for browsing listings

> Code samples

```bash
curl https://example.com/currencies/display
```

`GET /currencies/display`

List of supported display currencies for browsing listings

<h3 id="list-of-supported-display-currencies-for-browsing-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of supported listing currencies for shops

> Code samples

```bash
curl https://example.com/currencies/listing
```

`GET /currencies/listing`

List of supported listing currencies for shops

<h3 id="list-of-supported-listing-currencies-for-shops-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-feedback">feedback</h1>

## Feedback details

> Code samples

```bash
curl https://example.com/feedback/string
```

`GET /feedback/{feedback_id}`

Feedback details

<h3 id="feedback-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feedback_id|path|string|true|none|

<h3 id="feedback-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-handpicked">handpicked</h1>

## Get results from a handpicked collection

> Code samples

```bash
curl https://example.com/handpicked/string
```

`GET /handpicked/{slug}`

Get results from a handpicked collection

<h3 id="get-results-from-a-handpicked-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|query|query|string|false|Search query.|
|auction_price_max|query|number(float)|false|Maximum current auction price|
|category|query|string|false|Category slug from /api/categories|
|product_type|query|string|false|Product type slug from /api/categories|
|conditions|query|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|decade|query|string|false|Decade: e.g. 1970s, early 70s|
|finish|query|string|false|Visual finish of the item, common for guitars|
|handmade|query|boolean|false|Handmade items only|
|item_city|query|string|false|City where item is located|
|item_country|query|string|false|DEPRECATED - Country code where item is located|
|item_region|query|string|false|Country code where item is located|
|item_state|query|string|false|State or region code where item is located|
|make|query|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|model|query|string|false|Model of item (e.g. Stratocaster)|
|must_not|query|string|false|Search term negation. If you want to exclude a term, add it here|
|price_max|query|number(float)|false|Maximum price of search results (USD)|
|price_min|query|number(float)|false|Minimum price of search results (USD)|
|currency|query|string|false|The currency to be used for the price filters|
|year_max|query|integer|false|Maximum year of manufacture|
|year_min|query|integer|false|Minumum year of manufacture|
|accepts_gift_cards|query|boolean|false|If true, include only items that accept gift cards|
|preferred_seller|query|boolean|false|If true, include only items by Reverb Preferred Sellers|
|shop|query|string|false|Slug of shop to search|
|shop_id|query|string|false|ID of shop to search|
|listing_type|query|string|false|Type of listing: auctions,offers|
|ships_to|query|string|false|Limit search to items that ship to this country code|
|exclude_auctions|query|boolean|false|If true, exclude auctions|
|accepts_payment_plans|query|boolean|false|If true, only show items that can be purchased with a payment plan|
|watchers_count_min|query|integer|false|Minimum number of watchers (used to find popular items)|
|not_ids|query|[string]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|local_pickup|query|boolean|false|Only items that offer local pickup|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="get-results-from-a-handpicked-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-listingconditions">listing_conditions</h1>

## List of supported product conditions

> Code samples

```bash
curl https://example.com/listing_conditions
```

`GET /listing_conditions`

List of supported product conditions

<h3 id="list-of-supported-product-conditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-listings">listings</h1>

## Default search of listings includes only used &amp; handmade. Add a filter to view all listings or use the /listings/all endpoint.

> Code samples

```bash
curl https://example.com/listings
```

`GET /listings`

Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.

<h3 id="default-search-of-listings-includes-only-used-handmade-add-a-filter-to-view-all-listings-or-use-the-listingsall-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search query.|
|auction_price_max|query|number(float)|false|Maximum current auction price|
|category|query|string|false|Category slug from /api/categories|
|product_type|query|string|false|Product type slug from /api/categories|
|conditions|query|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|decade|query|string|false|Decade: e.g. 1970s, early 70s|
|finish|query|string|false|Visual finish of the item, common for guitars|
|handmade|query|boolean|false|Handmade items only|
|item_city|query|string|false|City where item is located|
|item_country|query|string|false|DEPRECATED - Country code where item is located|
|item_region|query|string|false|Country code where item is located|
|item_state|query|string|false|State or region code where item is located|
|make|query|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|model|query|string|false|Model of item (e.g. Stratocaster)|
|must_not|query|string|false|Search term negation. If you want to exclude a term, add it here|
|price_max|query|number(float)|false|Maximum price of search results (USD)|
|price_min|query|number(float)|false|Minimum price of search results (USD)|
|currency|query|string|false|The currency to be used for the price filters|
|year_max|query|integer|false|Maximum year of manufacture|
|year_min|query|integer|false|Minumum year of manufacture|
|accepts_gift_cards|query|boolean|false|If true, include only items that accept gift cards|
|preferred_seller|query|boolean|false|If true, include only items by Reverb Preferred Sellers|
|shop|query|string|false|Slug of shop to search|
|shop_id|query|string|false|ID of shop to search|
|listing_type|query|string|false|Type of listing: auctions,offers|
|ships_to|query|string|false|Limit search to items that ship to this country code|
|exclude_auctions|query|boolean|false|If true, exclude auctions|
|accepts_payment_plans|query|boolean|false|If true, only show items that can be purchased with a payment plan|
|watchers_count_min|query|integer|false|Minimum number of watchers (used to find popular items)|
|not_ids|query|[string]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|local_pickup|query|boolean|false|Only items that offer local pickup|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="default-search-of-listings-includes-only-used-handmade-add-a-filter-to-view-all-listings-or-use-the-listingsall-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a listing

> Code samples

```bash
curl https://example.com/listings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      {
        "uuid": "string"
      }
    ],
    "condition": {
      "uuid": "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
    },
    "description": "string",
    "exclusive_channel": "seller_site",
    "finish": "string",
    "has_inventory": true,
    "inventory": 0,
    "location": {
      "country_code": "string",
      "locality": "string",
      "region": "string"
    },
    "make": "string",
    "model": "string",
    "multi_item": true,
    "offers_enabled": true,
    "origin_country_code": "string",
    "photos": [
      "string"
    ],
    "preorder_info": {
      "lead_time": 0,
      "lead_time_unit": "days",
      "ship_date": "string"
    },
    "price": {
      "amount": "string",
      "currency": "USD"
    },
    "prop_65_warning": "string",
    "publish": true,
    "seller": {
      "paypal_email": "string"
    },
    "seller_cost": "string",
    "shipping": {
      "local": true,
      "rates": [
        {
          "rate": {
            "amount": "string",
            "currency": "USD"
          },
          "region_code": "string"
        }
      ]
    },
    "shipping_profile_id": "string",
    "shipping_profile_name": "string",
    "sku": "string",
    "sold_as_is": true,
    "storage_location": "string",
    "tax_exempt": true,
    "title": "string",
    "upc": "string",
    "upc_does_not_apply": true,
    "videos": [
      {
        "link": "string"
      }
    ],
    "year": "string"
  }'
```

`POST /listings`

Create a listing

> Body parameter

```json
{
  "categories": [
    {
      "uuid": "string"
    }
  ],
  "condition": {
    "uuid": "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
  },
  "description": "string",
  "exclusive_channel": "seller_site",
  "finish": "string",
  "has_inventory": true,
  "inventory": 0,
  "location": {
    "country_code": "string",
    "locality": "string",
    "region": "string"
  },
  "make": "string",
  "model": "string",
  "multi_item": true,
  "offers_enabled": true,
  "origin_country_code": "string",
  "photos": [
    "string"
  ],
  "preorder_info": {
    "lead_time": 0,
    "lead_time_unit": "days",
    "ship_date": "string"
  },
  "price": {
    "amount": "string",
    "currency": "USD"
  },
  "prop_65_warning": "string",
  "publish": true,
  "seller": {
    "paypal_email": "string"
  },
  "seller_cost": "string",
  "shipping": {
    "local": true,
    "rates": [
      {
        "rate": {
          "amount": "string",
          "currency": "USD"
        },
        "region_code": "string"
      }
    ]
  },
  "shipping_profile_id": "string",
  "shipping_profile_name": "string",
  "sku": "string",
  "sold_as_is": true,
  "storage_location": "string",
  "tax_exempt": true,
  "title": "string",
  "upc": "string",
  "upc_does_not_apply": true,
  "videos": [
    {
      "link": "string"
    }
  ],
  "year": "string"
}
```

<h3 id="create-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» categories|body|[object]|false|none|
|» » uuid|body|string|false|UUID of the category for this listing.|
|» condition|body|object|false|Condition|
|» » uuid|body|string|true|Condition UUID|
|» description|body|string|false|Product description. Please keep formatting to a minimum.|
|» exclusive_channel|body|string|false|Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'|
|» finish|body|string|false|Finish, e.g. 'Sunburst'|
|» has_inventory|body|boolean|false|Set true if selling more than one|
|» inventory|body|integer|false|Number of items available for sale. Reverb will increment and decrement automatically.|
|» location|body|object|false|none|
|» » country_code|body|string|false|Ex: US|
|» » locality|body|string|false|Ex: Chicago|
|» » region|body|string|false|Ex: IL|
|» make|body|string|false|ex: Fender, Gibson|
|» model|body|string|false|ex: Stratocaster, SG|
|» multi_item|body|boolean|false|Specifies if the listing is a bundle of multiple individual items|
|» offers_enabled|body|boolean|false|Whether the listing accepts negotiated offers (default: true)|
|» origin_country_code|body|string|false|Country of origin/manufacture, ISO code (e.g: US)|
|» photos|body|[string]|false|An array of image URLs. Ex: ['http://my.site.com/image.jpg']|
|» preorder_info|body|object|false|Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.|
|» » lead_time|body|integer|false|The amount of time before the item will be ready to ship. When lead_time is submitted it is converted into days and added to the current date to produce `estimated_ship_date` in the response body of the request.|
|» » lead_time_unit|body|string|true|The unit of time which lead_time is measured in|
|» » ship_date|body|string|false|The date the item will be available to ship. In the response body of the request, `estimated_ship_date`, will be the same as ship_date. Date must be ISO8601 format - e.g: 2015-04-09T10:52:23-00:00.|
|» price|body|object|false|none|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|
|» prop_65_warning|body|string|false|If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings|
|» publish|body|boolean|false|Publish your listing if draft|
|» seller|body|object|false|none|
|» » paypal_email|body|string|false|none|
|» seller_cost|body|string|false|Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)|
|» shipping|body|object|false|none|
|» » local|body|boolean|false|True if you offer local pickup|
|» » rates|body|[object]|false|List of shipping rates. Set to null to clear rates.|
|» » » rate|body|object|false|none|
|» » » » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » » » currency|body|string|true|The currency the money will be expressed in|
|» » » region_code|body|string|false|Country code or subregion/superregion code. Full list of codes at /api/shipping/regions|
|» shipping_profile_id|body|string|false|id of a shop's shipping profile|
|» shipping_profile_name|body|string|false|DEPRECATED, please use shipping_profile_id. Name of a shipping profile|
|» sku|body|string|false|Unique identifier for product|
|» sold_as_is|body|boolean|false|This item is sold As-Is and cannot be returned|
|» storage_location|body|string|false|Internal note used by sellers to back reference their catalog system when entering a listing|
|» tax_exempt|body|boolean|false|Listing is exempt from taxes / VAT|
|» title|body|string|false|Title of your listing|
|» upc|body|string|false|Valid UPC code|
|» upc_does_not_apply|body|boolean|false|True if a brand new product has no UPC code, ie for a handmade or custom item|
|» videos|body|[object]|false|List of YouTube video urls. Note: ONLY ONE ALLOWED|
|» » link|body|string|true|Valid YouTube url|
|» year|body|string|false|Supports many formats. Ex: 1979, mid-70s, late 90s|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » uuid|fbf35668-96a0-4baa-bcde-ab18d6b1b329|
|» » uuid|6a9dfcad-600b-46c8-9e08-ce6e5057921e|
|» » uuid|98777886-76d0-44c8-865e-bb40e669e934|
|» » uuid|f7a3f48c-972a-44c6-b01a-0cd27488d3f6|
|» » uuid|ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d|
|» » uuid|df268ad1-c462-4ba6-b6db-e007e23922ea|
|» » uuid|ac5b9c1e-dc78-466d-b0b3-7cf712967a48|
|» » uuid|6db7df88-293b-4017-a1c1-cdb5e599fa1a|
|» » uuid|9225283f-60c2-4413-ad18-1f5eba7a856f|
|» » uuid|7c3f45de-2ae0-4c81-8400-fdb6b1d74890|
|» exclusive_channel|seller_site|
|» exclusive_channel|reverb|
|» exclusive_channel|none|
|» » lead_time_unit|days|
|» » lead_time_unit|weeks|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|
|» » » » currency|USD|
|» » » » currency|CAD|
|» » » » currency|EUR|
|» » » » currency|GBP|
|» » » » currency|AUD|
|» » » » currency|JPY|
|» » » » currency|NZD|
|» » » » currency|MXN|

<h3 id="create-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings write_listings_for_others )
</aside>

## All listings including used, handmade, and brand new

> Code samples

```bash
curl https://example.com/listings/all
```

`GET /listings/all`

All listings including used, handmade, and brand new

<h3 id="all-listings-including-used-handmade-and-brand-new-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search query.|
|auction_price_max|query|number(float)|false|Maximum current auction price|
|category|query|string|false|Category slug from /api/categories|
|product_type|query|string|false|Product type slug from /api/categories|
|conditions|query|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|decade|query|string|false|Decade: e.g. 1970s, early 70s|
|finish|query|string|false|Visual finish of the item, common for guitars|
|handmade|query|boolean|false|Handmade items only|
|item_city|query|string|false|City where item is located|
|item_country|query|string|false|DEPRECATED - Country code where item is located|
|item_region|query|string|false|Country code where item is located|
|item_state|query|string|false|State or region code where item is located|
|make|query|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|model|query|string|false|Model of item (e.g. Stratocaster)|
|must_not|query|string|false|Search term negation. If you want to exclude a term, add it here|
|price_max|query|number(float)|false|Maximum price of search results (USD)|
|price_min|query|number(float)|false|Minimum price of search results (USD)|
|currency|query|string|false|The currency to be used for the price filters|
|year_max|query|integer|false|Maximum year of manufacture|
|year_min|query|integer|false|Minumum year of manufacture|
|accepts_gift_cards|query|boolean|false|If true, include only items that accept gift cards|
|preferred_seller|query|boolean|false|If true, include only items by Reverb Preferred Sellers|
|shop|query|string|false|Slug of shop to search|
|shop_id|query|string|false|ID of shop to search|
|listing_type|query|string|false|Type of listing: auctions,offers|
|ships_to|query|string|false|Limit search to items that ship to this country code|
|exclude_auctions|query|boolean|false|If true, exclude auctions|
|accepts_payment_plans|query|boolean|false|If true, only show items that can be purchased with a payment plan|
|watchers_count_min|query|integer|false|Minimum number of watchers (used to find popular items)|
|not_ids|query|[string]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|local_pickup|query|boolean|false|Only items that offer local pickup|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="all-listings-including-used-handmade-and-brand-new-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Individual facets

> Code samples

```bash
curl https://example.com/listings/facets/seller_location
```

`GET /listings/facets/seller_location`

Individual facets

<h3 id="individual-facets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the latest negotiation for the requesting user given a listing id

> Code samples

```bash
curl https://example.com/listings/string/negotiation \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /listings/{id}/negotiation`

Returns the latest negotiation for the requesting user given a listing id

<h3 id="returns-the-latest-negotiation-for-the-requesting-user-given-a-listing-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="returns-the-latest-negotiation-for-the-requesting-user-given-a-listing-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_offers )
</aside>

## Make an offer to the seller of a listing

> Code samples

```bash
curl https://example.com/listings/string/offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string",
    "price": "string",
    "shipping_price": "string"
  }'
```

`POST /listings/{id}/offer`

Make an offer to the seller of a listing

> Body parameter

```json
{
  "message": "string",
  "price": "string",
  "shipping_price": "string"
}
```

<h3 id="make-an-offer-to-the-seller-of-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» message|body|string|false|Message to include with counter offer|
|» price|body|string|true|Offer price|
|» shipping_price|body|string|false|Shipping price (sellers only)|

<h3 id="make-an-offer-to-the-seller-of-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

## View available bump tiers and stats for a listing

> Code samples

```bash
curl https://example.com/listings/string/bump \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /listings/{listing_id}/bump`

View available bump tiers and stats for a listing

<h3 id="view-available-bump-tiers-and-stats-for-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|

<h3 id="view-available-bump-tiers-and-stats-for-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## Bump a listing

> Code samples

```bash
curl https://example.com/listings/string/bump/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /listings/{listing_id}/bump/{budget_type}`

Bump a listing

<h3 id="bump-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|
|budget_type|path|string|true|none|

<h3 id="bump-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Start a conversation with a seller

> Code samples

```bash
curl https://example.com/listings/string/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /listings/{listing_id}/conversations`

Start a conversation with a seller

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="start-a-conversation-with-a-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|
|body|body|object|false|the content of the request|
|» body|body|string|true|none|

<h3 id="start-a-conversation-with-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_messages )
</aside>

## View the images associated with a particular listing

> Code samples

```bash
curl https://example.com/listings/string/images \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /listings/{listing_id}/images`

View the images associated with a particular listing

<h3 id="view-the-images-associated-with-a-particular-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|

<h3 id="view-the-images-associated-with-a-particular-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## Delete an image from a listing

> Code samples

```bash
curl https://example.com/listings/string/images/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /listings/{listing_id}/images/{image_id}`

Delete an image from a listing

<h3 id="delete-an-image-from-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|
|image_id|path|string|true|none|

<h3 id="delete-an-image-from-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## See all sales that include a listing.

> Code samples

```bash
curl https://example.com/listings/string/sales
```

`GET /listings/{listing_id}/sales`

See all sales that include a listing.

<h3 id="see-all-sales-that-include-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listing_id|path|string|true|none|

<h3 id="see-all-sales-that-include-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Listing details

> Code samples

```bash
curl https://example.com/listings/string
```

`GET /listings/{slug}`

Listing details

<h3 id="listing-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="listing-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a listing

> Code samples

```bash
curl https://example.com/listings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      {
        "uuid": "string"
      }
    ],
    "condition": {
      "uuid": "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
    },
    "description": "string",
    "exclusive_channel": "seller_site",
    "finish": "string",
    "has_inventory": true,
    "inventory": 0,
    "location": {
      "country_code": "string",
      "locality": "string",
      "region": "string"
    },
    "make": "string",
    "model": "string",
    "multi_item": true,
    "offers_enabled": true,
    "origin_country_code": "string",
    "photos": [
      "string"
    ],
    "preorder_info": {
      "lead_time": 0,
      "lead_time_unit": "days",
      "ship_date": "string"
    },
    "price": {
      "amount": "string",
      "currency": "USD"
    },
    "prop_65_warning": "string",
    "publish": true,
    "seller": {
      "paypal_email": "string"
    },
    "seller_cost": "string",
    "shipping": {
      "local": true,
      "rates": [
        {
          "rate": {
            "amount": "string",
            "currency": "USD"
          },
          "region_code": "string"
        }
      ]
    },
    "shipping_profile_id": "string",
    "shipping_profile_name": "string",
    "sku": "string",
    "sold_as_is": true,
    "storage_location": "string",
    "tax_exempt": true,
    "title": "string",
    "upc": "string",
    "upc_does_not_apply": true,
    "videos": [
      {
        "link": "string"
      }
    ],
    "year": "string"
  }'
```

`PUT /listings/{slug}`

Update a listing

> Body parameter

```json
{
  "categories": [
    {
      "uuid": "string"
    }
  ],
  "condition": {
    "uuid": "fbf35668-96a0-4baa-bcde-ab18d6b1b329"
  },
  "description": "string",
  "exclusive_channel": "seller_site",
  "finish": "string",
  "has_inventory": true,
  "inventory": 0,
  "location": {
    "country_code": "string",
    "locality": "string",
    "region": "string"
  },
  "make": "string",
  "model": "string",
  "multi_item": true,
  "offers_enabled": true,
  "origin_country_code": "string",
  "photos": [
    "string"
  ],
  "preorder_info": {
    "lead_time": 0,
    "lead_time_unit": "days",
    "ship_date": "string"
  },
  "price": {
    "amount": "string",
    "currency": "USD"
  },
  "prop_65_warning": "string",
  "publish": true,
  "seller": {
    "paypal_email": "string"
  },
  "seller_cost": "string",
  "shipping": {
    "local": true,
    "rates": [
      {
        "rate": {
          "amount": "string",
          "currency": "USD"
        },
        "region_code": "string"
      }
    ]
  },
  "shipping_profile_id": "string",
  "shipping_profile_name": "string",
  "sku": "string",
  "sold_as_is": true,
  "storage_location": "string",
  "tax_exempt": true,
  "title": "string",
  "upc": "string",
  "upc_does_not_apply": true,
  "videos": [
    {
      "link": "string"
    }
  ],
  "year": "string"
}
```

<h3 id="update-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|body|body|object|false|the content of the request|
|» categories|body|[object]|false|none|
|» » uuid|body|string|false|UUID of the category for this listing.|
|» condition|body|object|false|Condition|
|» » uuid|body|string|true|Condition UUID|
|» description|body|string|false|Product description. Please keep formatting to a minimum.|
|» exclusive_channel|body|string|false|Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'|
|» finish|body|string|false|Finish, e.g. 'Sunburst'|
|» has_inventory|body|boolean|false|Set true if selling more than one|
|» inventory|body|integer|false|Number of items available for sale. Reverb will increment and decrement automatically.|
|» location|body|object|false|none|
|» » country_code|body|string|false|Ex: US|
|» » locality|body|string|false|Ex: Chicago|
|» » region|body|string|false|Ex: IL|
|» make|body|string|false|ex: Fender, Gibson|
|» model|body|string|false|ex: Stratocaster, SG|
|» multi_item|body|boolean|false|Specifies if the listing is a bundle of multiple individual items|
|» offers_enabled|body|boolean|false|Whether the listing accepts negotiated offers (default: true)|
|» origin_country_code|body|string|false|Country of origin/manufacture, ISO code (e.g: US)|
|» photos|body|[string]|false|An array of image URLs. Ex: ['http://my.site.com/image.jpg']|
|» preorder_info|body|object|false|Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.|
|» » lead_time|body|integer|false|The amount of time before the item will be ready to ship. When lead_time is submitted it is converted into days and added to the current date to produce `estimated_ship_date` in the response body of the request.|
|» » lead_time_unit|body|string|true|The unit of time which lead_time is measured in|
|» » ship_date|body|string|false|The date the item will be available to ship. In the response body of the request, `estimated_ship_date`, will be the same as ship_date. Date must be ISO8601 format - e.g: 2015-04-09T10:52:23-00:00.|
|» price|body|object|false|none|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|
|» prop_65_warning|body|string|false|If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings|
|» publish|body|boolean|false|Publish your listing if draft|
|» seller|body|object|false|none|
|» » paypal_email|body|string|false|none|
|» seller_cost|body|string|false|Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)|
|» shipping|body|object|false|none|
|» » local|body|boolean|false|True if you offer local pickup|
|» » rates|body|[object]|false|List of shipping rates. Set to null to clear rates.|
|» » » rate|body|object|false|none|
|» » » » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » » » currency|body|string|true|The currency the money will be expressed in|
|» » » region_code|body|string|false|Country code or subregion/superregion code. Full list of codes at /api/shipping/regions|
|» shipping_profile_id|body|string|false|id of a shop's shipping profile|
|» shipping_profile_name|body|string|false|DEPRECATED, please use shipping_profile_id. Name of a shipping profile|
|» sku|body|string|false|Unique identifier for product|
|» sold_as_is|body|boolean|false|This item is sold As-Is and cannot be returned|
|» storage_location|body|string|false|Internal note used by sellers to back reference their catalog system when entering a listing|
|» tax_exempt|body|boolean|false|Listing is exempt from taxes / VAT|
|» title|body|string|false|Title of your listing|
|» upc|body|string|false|Valid UPC code|
|» upc_does_not_apply|body|boolean|false|True if a brand new product has no UPC code, ie for a handmade or custom item|
|» videos|body|[object]|false|List of YouTube video urls. Note: ONLY ONE ALLOWED|
|» » link|body|string|true|Valid YouTube url|
|» year|body|string|false|Supports many formats. Ex: 1979, mid-70s, late 90s|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » uuid|fbf35668-96a0-4baa-bcde-ab18d6b1b329|
|» » uuid|6a9dfcad-600b-46c8-9e08-ce6e5057921e|
|» » uuid|98777886-76d0-44c8-865e-bb40e669e934|
|» » uuid|f7a3f48c-972a-44c6-b01a-0cd27488d3f6|
|» » uuid|ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d|
|» » uuid|df268ad1-c462-4ba6-b6db-e007e23922ea|
|» » uuid|ac5b9c1e-dc78-466d-b0b3-7cf712967a48|
|» » uuid|6db7df88-293b-4017-a1c1-cdb5e599fa1a|
|» » uuid|9225283f-60c2-4413-ad18-1f5eba7a856f|
|» » uuid|7c3f45de-2ae0-4c81-8400-fdb6b1d74890|
|» exclusive_channel|seller_site|
|» exclusive_channel|reverb|
|» exclusive_channel|none|
|» » lead_time_unit|days|
|» » lead_time_unit|weeks|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|
|» » » » currency|USD|
|» » » » currency|CAD|
|» » » » currency|EUR|
|» » » » currency|GBP|
|» » » » currency|AUD|
|» » » » currency|JPY|
|» » » » currency|NZD|
|» » » » currency|MXN|

<h3 id="update-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Delete a draft listing. Cannot be used on non-drafts.

> Code samples

```bash
curl https://example.com/listings/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /listings/{slug}`

Delete a draft listing. Cannot be used on non-drafts.

<h3 id="delete-a-draft-listing-cannot-be-used-on-non-drafts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="delete-a-draft-listing-cannot-be-used-on-non-drafts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Edit listing.

> Code samples

```bash
curl https://example.com/listings/string/edit \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /listings/{slug}/edit`

Edit listing.

<h3 id="edit-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="edit-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Flag a listing for inappropriate content or fraud

> Code samples

```bash
curl https://example.com/listings/string/flag \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "description": "string",
    "reason": "string"
  }'
```

`POST /listings/{slug}/flag`

Flag a listing for inappropriate content or fraud

> Body parameter

```json
{
  "description": "string",
  "reason": "string"
}
```

<h3 id="flag-a-listing-for-inappropriate-content-or-fraud-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|body|body|object|false|the content of the request|
|» description|body|string|false|User input description specifying what is flag-worthy about this listing|
|» reason|body|string|true|Valid reasons: 'Sexuality/nudity', 'Hateful or inappropriate speech', 'Item not as described or potential fraud', 'Trademark infringement', 'Other'|

<h3 id="flag-a-listing-for-inappropriate-content-or-fraud-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## View reviews of a listing

> Code samples

```bash
curl https://example.com/listings/string/reviews
```

`GET /listings/{slug}/reviews`

View reviews of a listing

<h3 id="view-reviews-of-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="view-reviews-of-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a review for a listing

> Code samples

```bash
curl https://example.com/listings/string/reviews \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /listings/{slug}/reviews`

Create a review for a listing

<h3 id="create-a-review-for-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="create-a-review-for-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_reviews )
</aside>

## Listing details

> Code samples

```bash
curl https://example.com/listings/string/similar_listings
```

`GET /listings/{slug}/similar_listings`

Listing details

<h3 id="listing-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="listing-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-my">my</h1>

## Get account details

> Code samples

```bash
curl https://example.com/my/account \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/account`

Get account details

<h3 id="get-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Update account details

> Code samples

```bash
curl https://example.com/my/account \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currency": "string",
    "first_name": "string",
    "last_name": "string",
    "locale_code": "string",
    "shipping_region_code": "string",
    "third_party_ad_data_consent": true
  }'
```

`PUT /my/account`

Update account details

> Body parameter

```json
{
  "currency": "string",
  "first_name": "string",
  "last_name": "string",
  "locale_code": "string",
  "shipping_region_code": "string",
  "third_party_ad_data_consent": true
}
```

<h3 id="update-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» currency|body|string|false|The currency preference for the account|
|» first_name|body|string|false|The first name of the account holder|
|» last_name|body|string|false|The last name of the account holder|
|» locale_code|body|string|false|The locale code for the account|
|» shipping_region_code|body|string|false|The shipping region preference for the account|
|» third_party_ad_data_consent|body|boolean|false|The privacy setting preference for the account|

<h3 id="update-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## See all addresses in your address book

> Code samples

```bash
curl https://example.com/my/addresses \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/addresses`

See all addresses in your address book

<h3 id="see-all-addresses-in-your-address-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Create a new address in your address book

> Code samples

```bash
curl https://example.com/my/addresses \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/addresses`

Create a new address in your address book

<h3 id="create-a-new-address-in-your-address-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## Update an existing address in your address book

> Code samples

```bash
curl https://example.com/my/addresses/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /my/addresses/{address_id}`

Update an existing address in your address book

<h3 id="update-an-existing-address-in-your-address-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address_id|path|string|true|none|

<h3 id="update-an-existing-address-in-your-address-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## Delete an existing address in your address book

> Code samples

```bash
curl https://example.com/my/addresses/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/addresses/{address_id}`

Delete an existing address in your address book

<h3 id="delete-an-existing-address-in-your-address-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address_id|path|string|true|none|

<h3 id="delete-an-existing-address-in-your-address-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## Get a list of your conversations

> Code samples

```bash
curl https://example.com/my/conversations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/conversations`

Get a list of your conversations

<h3 id="get-a-list-of-your-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Query string to search conversations by|
|unread_only|query|boolean|false|Show unread conversations only|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="get-a-list-of-your-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_messages )
</aside>

## Start a conversation

> Code samples

```bash
curl https://example.com/my/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string",
    "cloudinary_photos": [
      "string"
    ],
    "listing_id": 0,
    "recipient_id": 0,
    "recipient_uuid": "string",
    "shop_id": "string"
  }'
```

`POST /my/conversations`

Start a conversation

> Body parameter

```json
{
  "body": "string",
  "cloudinary_photos": [
    "string"
  ],
  "listing_id": 0,
  "recipient_id": 0,
  "recipient_uuid": "string",
  "shop_id": "string"
}
```

<h3 id="start-a-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» body|body|string|true|The body of the message|
|» cloudinary_photos|body|[string]|false|An array of cloudinary data hashes (Reverb internal use only).|
|» listing_id|body|integer|false|The id of the listing being discussed|
|» recipient_id|body|integer|false|The id of the user you are trying to contact|
|» recipient_uuid|body|string|false|The uuid of the user you are trying to contact|
|» shop_id|body|string|false|The id of the shop you are trying to contact|

<h3 id="start-a-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_messages )
</aside>

## Send a message

> Code samples

```bash
curl https://example.com/my/conversations/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /my/conversations/{conversation_id}/messages`

Send a message

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="send-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|none|
|body|body|object|false|the content of the request|
|» body|body|string|true|none|

<h3 id="send-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_messages )
</aside>

## Display conversation details with messages in natural time order (oldest to newest)

> Code samples

```bash
curl https://example.com/my/conversations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/conversations/{id}`

Display conversation details with messages in natural time order (oldest to newest)

<h3 id="display-conversation-details-with-messages-in-natural-time-order-oldest-to-newest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="display-conversation-details-with-messages-in-natural-time-order-oldest-to-newest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_messages )
</aside>

## Mark a conversation read/unread

> Code samples

```bash
curl https://example.com/my/conversations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "read": true
  }'
```

`PUT /my/conversations/{id}`

Mark a conversation read/unread

> Body parameter

```json
{
  "read": true
}
```

<h3 id="mark-a-conversation-readunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» read|body|boolean|false|Should the conversation be marked as read|

<h3 id="mark-a-conversation-readunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_messages )
</aside>

## Get your actionable status counts

> Code samples

```bash
curl https://example.com/my/counts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/counts`

Get your actionable status counts

<h3 id="get-your-actionable-status-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## post/my/curated_set/product/{product_id}

> Code samples

```bash
curl https://example.com/my/curated_set/product/string \
  -X POST
```

`POST /my/curated_set/product/{product_id}`

<h3 id="postmycuratedsetproductproductid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|path|string|true|none|

<h3 id="postmycuratedsetproductproductid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/my/curated_set/product/{product_id}

> Code samples

```bash
curl https://example.com/my/curated_set/product/string \
  -X DELETE
```

`DELETE /my/curated_set/product/{product_id}`

<h3 id="deletemycuratedsetproductproductid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product_id|path|string|true|none|

<h3 id="deletemycuratedsetproductproductid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get listings from your feed

> Code samples

```bash
curl https://example.com/my/feed \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/feed`

Get listings from your feed

<h3 id="get-listings-from-your-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## get your feed customization options

> Code samples

```bash
curl https://example.com/my/feed/customize \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/feed/customize`

get your feed customization options

<h3 id="get-your-feed-customization-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## get your feed

> Code samples

```bash
curl https://example.com/my/feed/grid \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/feed/grid`

get your feed

<h3 id="get-your-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## List of received feedback

> Code samples

```bash
curl https://example.com/my/feedback/received \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/feedback/received`

List of received feedback

<h3 id="list-of-received-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_feedback )
</aside>

## List of sent feedback

> Code samples

```bash
curl https://example.com/my/feedback/sent \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/feedback/sent`

List of sent feedback

<h3 id="list-of-sent-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_feedback )
</aside>

## See what the user is following

> Code samples

```bash
curl https://example.com/my/follows \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows`

See what the user is following

<h3 id="see-what-the-user-is-following-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Returns a user's ArticleCategoryFollows

> Code samples

```bash
curl https://example.com/my/follows/articles \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/articles`

Returns a user's ArticleCategoryFollows

<h3 id="returns-a-users-articlecategoryfollows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Set a user's ArticleCategoryFollows

> Code samples

```bash
curl https://example.com/my/follows/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "category_uuids": "string"
  }'
```

`POST /my/follows/articles`

Set a user's ArticleCategoryFollows

> Body parameter

```json
{
  "category_uuids": "string"
}
```

<h3 id="set-a-users-articlecategoryfollows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» category_uuids|body|string|true|none|

<h3 id="set-a-users-articlecategoryfollows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a brand

> Code samples

```bash
curl https://example.com/my/follows/brands/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/brands/{slug}`

Follow status for a brand

<h3 id="follow-status-for-a-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-status-for-a-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a brand

> Code samples

```bash
curl https://example.com/my/follows/brands/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/brands/{slug}`

Follow a brand

<h3 id="follow-a-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-a-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a brand

> Code samples

```bash
curl https://example.com/my/follows/brands/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/brands/{slug}`

Unfollow a brand

<h3 id="unfollow-a-brand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="unfollow-a-brand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a subcategory

> Code samples

```bash
curl https://example.com/my/follows/categories/string/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/categories/{category}/{subcategory}`

Follow status for a subcategory

<h3 id="follow-status-for-a-subcategory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|
|subcategory|path|string|true|none|

<h3 id="follow-status-for-a-subcategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a subcategory

> Code samples

```bash
curl https://example.com/my/follows/categories/string/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/categories/{category}/{subcategory}`

Follow a subcategory

<h3 id="follow-a-subcategory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|
|subcategory|path|string|true|none|

<h3 id="follow-a-subcategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a subcategory

> Code samples

```bash
curl https://example.com/my/follows/categories/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/categories/{category}/{subcategory}`

Unfollow a subcategory

<h3 id="unfollow-a-subcategory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|
|subcategory|path|string|true|none|

<h3 id="unfollow-a-subcategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a category

> Code samples

```bash
curl https://example.com/my/follows/categories/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/categories/{identifier}`

Follow status for a category

<h3 id="follow-status-for-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|none|

<h3 id="follow-status-for-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a category

> Code samples

```bash
curl https://example.com/my/follows/categories/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/categories/{identifier}`

Follow a category

<h3 id="follow-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|none|

<h3 id="follow-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a category

> Code samples

```bash
curl https://example.com/my/follows/categories/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/categories/{identifier}`

Unfollow a category

<h3 id="unfollow-a-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|none|

<h3 id="unfollow-a-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow a category

> Code samples

```bash
curl https://example.com/my/follows/categories/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/categories/{uuid}`

Follow a category

<h3 id="follow-a-category-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|

<h3 id="follow-a-category-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a collection

> Code samples

```bash
curl https://example.com/my/follows/collections/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/collections/{slug}`

Follow status for a collection

<h3 id="follow-status-for-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-status-for-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a collection

> Code samples

```bash
curl https://example.com/my/follows/collections/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/collections/{slug}`

Follow a collection

<h3 id="follow-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a collection

> Code samples

```bash
curl https://example.com/my/follows/collections/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/collections/{slug}`

Unfollow a collection

<h3 id="unfollow-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="unfollow-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a handpicked collection

> Code samples

```bash
curl https://example.com/my/follows/handpicked/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/handpicked/{slug}`

Follow status for a handpicked collection

<h3 id="follow-status-for-a-handpicked-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-status-for-a-handpicked-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a handpicked collection

> Code samples

```bash
curl https://example.com/my/follows/handpicked/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/handpicked/{slug}`

Follow a handpicked collection

<h3 id="follow-a-handpicked-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-a-handpicked-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a handpicked collection

> Code samples

```bash
curl https://example.com/my/follows/handpicked/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/handpicked/{slug}`

Unfollow a handpicked collection

<h3 id="unfollow-a-handpicked-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="unfollow-a-handpicked-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a search

> Code samples

```bash
curl https://example.com/my/follows/search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/search`

Follow status for a search

<h3 id="follow-status-for-a-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a search

> Code samples

```bash
curl https://example.com/my/follows/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accepts_gift_cards": true,
    "accepts_payment_plans": true,
    "auction_price_max": 0,
    "category": "string",
    "conditions": "all",
    "currency": "USD",
    "decade": "string",
    "exclude_auctions": true,
    "finish": "string",
    "handmade": true,
    "item_city": "string",
    "item_country": "string",
    "item_region": "string",
    "item_state": "string",
    "listing_type": "auctions",
    "local_pickup": true,
    "make": [
      "string"
    ],
    "model": "string",
    "must_not": "string",
    "not_ids": [
      0
    ],
    "preferred_seller": true,
    "price_max": 0,
    "price_min": 0,
    "product_type": "string",
    "query": "string",
    "ships_to": "string",
    "shop": "string",
    "shop_id": "string",
    "watchers_count_min": 0,
    "year_max": 0,
    "year_min": 0
  }'
```

`POST /my/follows/search`

Follow a search

> Body parameter

```json
{
  "accepts_gift_cards": true,
  "accepts_payment_plans": true,
  "auction_price_max": 0,
  "category": "string",
  "conditions": "all",
  "currency": "USD",
  "decade": "string",
  "exclude_auctions": true,
  "finish": "string",
  "handmade": true,
  "item_city": "string",
  "item_country": "string",
  "item_region": "string",
  "item_state": "string",
  "listing_type": "auctions",
  "local_pickup": true,
  "make": [
    "string"
  ],
  "model": "string",
  "must_not": "string",
  "not_ids": [
    0
  ],
  "preferred_seller": true,
  "price_max": 0,
  "price_min": 0,
  "product_type": "string",
  "query": "string",
  "ships_to": "string",
  "shop": "string",
  "shop_id": "string",
  "watchers_count_min": 0,
  "year_max": 0,
  "year_min": 0
}
```

<h3 id="follow-a-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» accepts_gift_cards|body|boolean|false|If true, include only items that accept gift cards|
|» accepts_payment_plans|body|boolean|false|If true, only show items that can be purchased with a payment plan|
|» auction_price_max|body|number(float)|false|Maximum current auction price|
|» category|body|string|false|Category slug from /api/categories|
|» conditions|body|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|» currency|body|string|false|The currency to be used for the price filters|
|» decade|body|string|false|Decade: e.g. 1970s, early 70s|
|» exclude_auctions|body|boolean|false|If true, exclude auctions|
|» finish|body|string|false|Visual finish of the item, common for guitars|
|» handmade|body|boolean|false|Handmade items only|
|» item_city|body|string|false|City where item is located|
|» item_country|body|string|false|DEPRECATED - Country code where item is located|
|» item_region|body|string|false|Country code where item is located|
|» item_state|body|string|false|State or region code where item is located|
|» listing_type|body|string|false|Type of listing: auctions,offers|
|» local_pickup|body|boolean|false|Only items that offer local pickup|
|» make|body|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|» model|body|string|false|Model of item (e.g. Stratocaster)|
|» must_not|body|string|false|Search term negation. If you want to exclude a term, add it here|
|» not_ids|body|[integer]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|» preferred_seller|body|boolean|false|If true, include only items by Reverb Preferred Sellers|
|» price_max|body|number(float)|false|Maximum price of search results (USD)|
|» price_min|body|number(float)|false|Minimum price of search results (USD)|
|» product_type|body|string|false|Product type slug from /api/categories|
|» query|body|string|false|Search query.|
|» ships_to|body|string|false|Limit search to items that ship to this country code|
|» shop|body|string|false|Slug of shop to search|
|» shop_id|body|string|false|ID of shop to search|
|» watchers_count_min|body|integer|false|Minimum number of watchers (used to find popular items)|
|» year_max|body|integer|false|Maximum year of manufacture|
|» year_min|body|integer|false|Minumum year of manufacture|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conditions|all|
|» conditions|new|
|» conditions|b-stock|
|» conditions|used|
|» conditions|non-functioning|
|» conditions|all-but-new|
|» conditions|poor|
|» conditions|fair|
|» conditions|good|
|» conditions|very-good|
|» conditions|excellent|
|» conditions|mint|
|» currency|USD|
|» currency|CAD|
|» currency|EUR|
|» currency|GBP|
|» currency|AUD|
|» currency|JPY|
|» currency|NZD|
|» currency|MXN|
|» currency|DKK|
|» currency|SEK|
|» currency|CHF|
|» currency|ARS|
|» currency|BRL|
|» currency|HKD|
|» currency|NOK|
|» currency|PHP|
|» currency|PLN|
|» currency|RUB|
|» listing_type|auctions|
|» listing_type|offers|

<h3 id="follow-a-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Follow status for a shop

> Code samples

```bash
curl https://example.com/my/follows/shops/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/follows/shops/{slug}`

Follow status for a shop

<h3 id="follow-status-for-a-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-status-for-a-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Follow a shop

> Code samples

```bash
curl https://example.com/my/follows/shops/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/follows/shops/{slug}`

Follow a shop

<h3 id="follow-a-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="follow-a-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unfollow a shop

> Code samples

```bash
curl https://example.com/my/follows/shops/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/shops/{slug}`

Unfollow a shop

<h3 id="unfollow-a-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="unfollow-a-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Delete a follow

> Code samples

```bash
curl https://example.com/my/follows/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/follows/{follow_id}`

Delete a follow

<h3 id="delete-a-follow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|follow_id|path|string|true|none|

<h3 id="delete-a-follow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## post/my/follows/{follow_id}/alert

> Code samples

```bash
curl https://example.com/my/follows/string/alert \
  -X POST
```

`POST /my/follows/{follow_id}/alert`

<h3 id="postmyfollowsfollowidalert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|follow_id|path|string|true|none|

<h3 id="postmyfollowsfollowidalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete/my/follows/{follow_id}/alert

> Code samples

```bash
curl https://example.com/my/follows/string/alert \
  -X DELETE
```

`DELETE /my/follows/{follow_id}/alert`

<h3 id="deletemyfollowsfollowidalert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|follow_id|path|string|true|none|

<h3 id="deletemyfollowsfollowidalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a list of live listings for the seller. To search all listings specify state=all

> Code samples

```bash
curl https://example.com/my/listings \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/listings`

Retrieve a list of live listings for the seller. To search all listings specify state=all

<h3 id="retrieve-a-list-of-live-listings-for-the-seller-to-search-all-listings-specify-stateall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search query.|
|auction_price_max|query|number(float)|false|Maximum current auction price|
|category|query|string|false|Category slug from /api/categories|
|product_type|query|string|false|Product type slug from /api/categories|
|conditions|query|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|decade|query|string|false|Decade: e.g. 1970s, early 70s|
|finish|query|string|false|Visual finish of the item, common for guitars|
|handmade|query|boolean|false|Handmade items only|
|item_city|query|string|false|City where item is located|
|item_country|query|string|false|DEPRECATED - Country code where item is located|
|item_region|query|string|false|Country code where item is located|
|item_state|query|string|false|State or region code where item is located|
|make|query|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|model|query|string|false|Model of item (e.g. Stratocaster)|
|must_not|query|string|false|Search term negation. If you want to exclude a term, add it here|
|price_max|query|number(float)|false|Maximum price of search results (USD)|
|price_min|query|number(float)|false|Minimum price of search results (USD)|
|currency|query|string|false|The currency to be used for the price filters|
|year_max|query|integer|false|Maximum year of manufacture|
|year_min|query|integer|false|Minumum year of manufacture|
|accepts_gift_cards|query|boolean|false|If true, include only items that accept gift cards|
|preferred_seller|query|boolean|false|If true, include only items by Reverb Preferred Sellers|
|shop|query|string|false|Slug of shop to search|
|shop_id|query|string|false|ID of shop to search|
|listing_type|query|string|false|Type of listing: auctions,offers|
|ships_to|query|string|false|Limit search to items that ship to this country code|
|exclude_auctions|query|boolean|false|If true, exclude auctions|
|accepts_payment_plans|query|boolean|false|If true, only show items that can be purchased with a payment plan|
|watchers_count_min|query|integer|false|Minimum number of watchers (used to find popular items)|
|not_ids|query|[string]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|local_pickup|query|boolean|false|Only items that offer local pickup|
|state|query|string|false|Available: ["all", "draft", "ended", "live", "ordered", "sold_out", "suspended", "seller_unavailable"]. Defaults to 'live'|
|sku|query|string|false|Find a listing by sku|

<h3 id="retrieve-a-list-of-live-listings-for-the-seller-to-search-all-listings-specify-stateall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## Retrieve a list your draft listings

> Code samples

```bash
curl https://example.com/my/listings/drafts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/listings/drafts`

Retrieve a list your draft listings

<h3 id="retrieve-a-list-your-draft-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search query.|
|auction_price_max|query|number(float)|false|Maximum current auction price|
|category|query|string|false|Category slug from /api/categories|
|product_type|query|string|false|Product type slug from /api/categories|
|conditions|query|[string]|false|Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint|
|decade|query|string|false|Decade: e.g. 1970s, early 70s|
|finish|query|string|false|Visual finish of the item, common for guitars|
|handmade|query|boolean|false|Handmade items only|
|item_city|query|string|false|City where item is located|
|item_country|query|string|false|DEPRECATED - Country code where item is located|
|item_region|query|string|false|Country code where item is located|
|item_state|query|string|false|State or region code where item is located|
|make|query|[string]|false|Make(s)/brand of item (e.g. Fender). Can take a single value or an array.|
|model|query|string|false|Model of item (e.g. Stratocaster)|
|must_not|query|string|false|Search term negation. If you want to exclude a term, add it here|
|price_max|query|number(float)|false|Maximum price of search results (USD)|
|price_min|query|number(float)|false|Minimum price of search results (USD)|
|currency|query|string|false|The currency to be used for the price filters|
|year_max|query|integer|false|Maximum year of manufacture|
|year_min|query|integer|false|Minumum year of manufacture|
|accepts_gift_cards|query|boolean|false|If true, include only items that accept gift cards|
|preferred_seller|query|boolean|false|If true, include only items by Reverb Preferred Sellers|
|shop|query|string|false|Slug of shop to search|
|shop_id|query|string|false|ID of shop to search|
|listing_type|query|string|false|Type of listing: auctions,offers|
|ships_to|query|string|false|Limit search to items that ship to this country code|
|exclude_auctions|query|boolean|false|If true, exclude auctions|
|accepts_payment_plans|query|boolean|false|If true, only show items that can be purchased with a payment plan|
|watchers_count_min|query|integer|false|Minimum number of watchers (used to find popular items)|
|not_ids|query|[string]|false|Listing ID negation. If you want to exclude a listing, add it here.|
|local_pickup|query|boolean|false|Only items that offer local pickup|

<h3 id="retrieve-a-list-your-draft-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## Get a list of active negotiations as a seller

> Code samples

```bash
curl https://example.com/my/listings/negotiations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/listings/negotiations`

Get a list of active negotiations as a seller

<h3 id="get-a-list-of-active-negotiations-as-a-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="get-a-list-of-active-negotiations-as-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_offers )
</aside>

## End a listing

> Code samples

```bash
curl https://example.com/my/listings/string/state/end \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "not_sold"
  }'
```

`PUT /my/listings/{slug}/state/end`

End a listing

> Body parameter

```json
{
  "reason": "not_sold"
}
```

<h3 id="end-a-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|body|body|object|false|the content of the request|
|» reason|body|string|true|The reason this listing is being ended. Valid reasons: ["not_sold", "reverb_sale"].|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reason|not_sold|
|» reason|reverb_sale|

<h3 id="end-a-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Get a list of your lists (wishlist, watch list, etc)

> Code samples

```bash
curl https://example.com/my/lists \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/lists`

Get a list of your lists (wishlist, watch list, etc)

<h3 id="get-a-list-of-your-lists-wishlist-watch-list-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Get a list of active negotiations as a buyer

> Code samples

```bash
curl https://example.com/my/negotiations/buying \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/negotiations/buying`

Get a list of active negotiations as a buyer

<h3 id="get-a-list-of-active-negotiations-as-a-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|

<h3 id="get-a-list-of-active-negotiations-as-a-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_offers )
</aside>

## Get offer details

> Code samples

```bash
curl https://example.com/my/negotiations/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/negotiations/{id}`

Get offer details

<h3 id="get-offer-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get-offer-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_offers )
</aside>

## Accept an offer

> Code samples

```bash
curl https://example.com/my/negotiations/string/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string"
  }'
```

`POST /my/negotiations/{id}/accept`

Accept an offer

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="accept-an-offer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» message|body|string|false|Message to include with accepted offer|

<h3 id="accept-an-offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

## Counter an offer

> Code samples

```bash
curl https://example.com/my/negotiations/string/counter \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "country_code": "string",
    "layaway_terms_slug": "string",
    "message": "string",
    "offer_items": [
      {
        "listing_id": "string",
        "price": "string",
        "shipping_price": "string"
      }
    ],
    "price": {
      "amount": "string",
      "currency": "USD"
    },
    "quantity": "string",
    "recipient_id": "string",
    "region_code": "string",
    "shipping_price": {
      "amount": "string",
      "currency": "USD"
    }
  }'
```

`POST /my/negotiations/{id}/counter`

Counter an offer

> Body parameter

```json
{
  "country_code": "string",
  "layaway_terms_slug": "string",
  "message": "string",
  "offer_items": [
    {
      "listing_id": "string",
      "price": "string",
      "shipping_price": "string"
    }
  ],
  "price": {
    "amount": "string",
    "currency": "USD"
  },
  "quantity": "string",
  "recipient_id": "string",
  "region_code": "string",
  "shipping_price": {
    "amount": "string",
    "currency": "USD"
  }
}
```

<h3 id="counter-an-offer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» country_code|body|string|false|none|
|» layaway_terms_slug|body|string|false|none|
|» message|body|string|false|Message to include with counter offer|
|» offer_items|body|[object]|false|none|
|» » listing_id|body|string|true|none|
|» » price|body|string|true|none|
|» » shipping_price|body|string|true|none|
|» price|body|object|false|none|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|
|» quantity|body|string|false|none|
|» recipient_id|body|string|false|ID of the recipient of the offer. Required if you are the seller pushing an offer to a buyer.|
|» region_code|body|string|false|none|
|» shipping_price|body|object|false|Shipping price (sellers only)|
|» » amount|body|string|true|The amount of money being expressed, as a POSIX-compliant decimal number|
|» » currency|body|string|true|The currency the money will be expressed in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|
|» » currency|USD|
|» » currency|CAD|
|» » currency|EUR|
|» » currency|GBP|
|» » currency|AUD|
|» » currency|JPY|
|» » currency|NZD|
|» » currency|MXN|

<h3 id="counter-an-offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

## Decline an offer

> Code samples

```bash
curl https://example.com/my/negotiations/string/decline \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/negotiations/{id}/decline`

Decline an offer

<h3 id="decline-an-offer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="decline-an-offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_offers )
</aside>

## List of orders that need feedback

> Code samples

```bash
curl https://example.com/my/orders/awaiting_feedback \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/awaiting_feedback`

List of orders that need feedback

<h3 id="list-of-orders-that-need-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_feedback )
</aside>

## Returns all orders, newest first.

> Code samples

```bash
curl https://example.com/my/orders/buying/all \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/buying/all`

Returns all orders, newest first.

<h3 id="returns-all-orders-newest-first-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## get/my/orders/buying/by_uuid/{uuid}

> Code samples

```bash
curl https://example.com/my/orders/buying/by_uuid/string
```

`GET /my/orders/buying/by_uuid/{uuid}`

<h3 id="getmyordersbuyingbyuuiduuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|

<h3 id="getmyordersbuyingbyuuiduuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns unpaid orders, newest first.

> Code samples

```bash
curl https://example.com/my/orders/buying/unpaid \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/buying/unpaid`

Returns unpaid orders, newest first.

<h3 id="returns-unpaid-orders-newest-first-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Returns order details for a buyer

> Code samples

```bash
curl https://example.com/my/orders/buying/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/buying/{id}`

Returns order details for a buyer

<h3 id="returns-order-details-for-a-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="returns-order-details-for-a-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Marks an order as received by the buyer

> Code samples

```bash
curl https://example.com/my/orders/buying/string/mark_received \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/orders/buying/{id}/mark_received`

Marks an order as received by the buyer

<h3 id="marks-an-order-as-received-by-the-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="marks-an-order-as-received-by-the-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_orders )
</aside>

## Get all seller orders, newest first.

> Code samples

```bash
curl https://example.com/my/orders/selling/all \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/selling/all`

Get all seller orders, newest first.

<h3 id="get-all-seller-orders-newest-first-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Get unpaid seller orders, newest first.

> Code samples

```bash
curl https://example.com/my/orders/selling/awaiting_shipment \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/selling/awaiting_shipment`

Get unpaid seller orders, newest first.

<h3 id="get-unpaid-seller-orders-newest-first-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## See previous orders from buyer

> Code samples

```bash
curl https://example.com/my/orders/selling/buyer_history/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/selling/buyer_history/{buyer_id}`

See previous orders from buyer

<h3 id="see-previous-orders-from-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|buyer_id|path|string|true|none|

<h3 id="see-previous-orders-from-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## get/my/orders/selling/by_uuid/{uuid}

> Code samples

```bash
curl https://example.com/my/orders/selling/by_uuid/string
```

`GET /my/orders/selling/by_uuid/{uuid}`

<h3 id="getmyorderssellingbyuuiduuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|none|

<h3 id="getmyorderssellingbyuuiduuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get unpaid seller orders, newest first.

> Code samples

```bash
curl https://example.com/my/orders/selling/unpaid \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/selling/unpaid`

Get unpaid seller orders, newest first.

<h3 id="get-unpaid-seller-orders-newest-first-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Returns order details for a seller

> Code samples

```bash
curl https://example.com/my/orders/selling/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/orders/selling/{id}`

Returns order details for a seller

<h3 id="returns-order-details-for-a-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="returns-order-details-for-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Marks an order as picked up

> Code samples

```bash
curl https://example.com/my/orders/selling/string/mark_picked_up \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "date": "string"
  }'
```

`POST /my/orders/selling/{id}/mark_picked_up`

Marks an order as picked up

> Body parameter

```json
{
  "date": "string"
}
```

<h3 id="marks-an-order-as-picked-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» date|body|string|false|Date the item was picked up.|

<h3 id="marks-an-order-as-picked-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_orders )
</aside>

## Marks an order as shipped

> Code samples

```bash
curl https://example.com/my/orders/selling/string/ship \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider": "string",
    "send_notification": true,
    "tracking_number": "string"
  }'
```

`POST /my/orders/selling/{id}/ship`

Marks an order as shipped

> Body parameter

```json
{
  "provider": "string",
  "send_notification": true,
  "tracking_number": "string"
}
```

<h3 id="marks-an-order-as-shipped-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» provider|body|string|true|Shipping provider: One of UPS, USPS, FedEx, DHL Deutschland, DHLExpress, DHLGlobalMail, DHL, Canada Post, CanPar, Royal Mail, PostNL, Australia Post, EMS, La Poste - Colissimo, China Post, GLS, Parcelforce, Purolator, Interlogistica, Correos España, Ukraine Post, DPD Germany, DPD UK, DPD France, Hermes, TNT, Other|
|» send_notification|body|boolean|true|Should we send an email notification to the buyer|
|» tracking_number|body|string|true|Tracking number provided by the shipping provider|

<h3 id="marks-an-order-as-shipped-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_orders )
</aside>

## Initiate a refund for a sold order

> Code samples

```bash
curl https://example.com/my/orders/selling/string/refund_requests \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /my/orders/selling/{order_id}/refund_requests`

Initiate a refund for a sold order

<h3 id="initiate-a-refund-for-a-sold-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|none|

<h3 id="initiate-a-refund-for-a-sold-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_orders )
</aside>

## Get payments

> Code samples

```bash
curl https://example.com/my/payments/selling \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/payments/selling`

Get payments

<h3 id="get-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|offset|query|integer|false|none|
|created_start_date|query|string|false|Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00|
|created_end_date|query|string|false|Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00|
|updated_start_date|query|string|false|Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00|
|updated_end_date|query|string|false|Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00|
|order_id|query|string|false|Look up payments by order id|

<h3 id="get-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Get payment

> Code samples

```bash
curl https://example.com/my/payments/selling/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/payments/selling/{id}`

Get payment

<h3 id="get-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Get a list of payouts

> Code samples

```bash
curl https://example.com/my/payouts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/payouts`

Get a list of payouts

<h3 id="get-a-list-of-payouts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_payouts )
</aside>

## Read the line items of a payout

> Code samples

```bash
curl https://example.com/my/payouts/string/line_items \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/payouts/{id}/line_items`

Read the line items of a payout

<h3 id="read-the-line-items-of-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="read-the-line-items-of-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_payouts )
</aside>

## Get a list of refund requests as a seller

> Code samples

```bash
curl https://example.com/my/refund_requests/selling \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/refund_requests/selling`

Get a list of refund requests as a seller

<h3 id="get-a-list-of-refund-requests-as-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_orders )
</aside>

## Update a refund request for a sold order

> Code samples

```bash
curl https://example.com/my/refund_requests/selling/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /my/refund_requests/selling/{id}`

Update a refund request for a sold order

<h3 id="update-a-refund-request-for-a-sold-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="update-a-refund-request-for-a-sold-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_orders )
</aside>

## Get a list of your recently viewed listings.

> Code samples

```bash
curl https://example.com/my/viewed_listings \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/viewed_listings`

Get a list of your recently viewed listings.

<h3 id="get-a-list-of-your-recently-viewed-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Get a list of wishlisted items

> Code samples

```bash
curl https://example.com/my/wishlist \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /my/wishlist`

Get a list of wishlisted items

<h3 id="get-a-list-of-wishlisted-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Add a listing to your wishlist

> Code samples

```bash
curl https://example.com/my/wishlist/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /my/wishlist/{id}`

Add a listing to your wishlist

<h3 id="add-a-listing-to-your-wishlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="add-a-listing-to-your-wishlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Remove a listing from your wishlist

> Code samples

```bash
curl https://example.com/my/wishlist/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /my/wishlist/{id}`

Remove a listing from your wishlist

<h3 id="remove-a-listing-from-your-wishlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="remove-a-listing-from-your-wishlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

<h1 id="reverb-orders">orders</h1>

## Feedback details for an order's buyer

> Code samples

```bash
curl https://example.com/orders/string/feedback/buyer
```

`GET /orders/{order_id}/feedback/buyer`

Feedback details for an order's buyer

<h3 id="feedback-details-for-an-orders-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|none|

<h3 id="feedback-details-for-an-orders-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add feedback about an order's buyer

> Code samples

```bash
curl https://example.com/orders/string/feedback/buyer \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /orders/{order_id}/feedback/buyer`

Add feedback about an order's buyer

<h3 id="add-feedback-about-an-orders-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|none|

<h3 id="add-feedback-about-an-orders-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_feedback )
</aside>

## Feedback details for an order's seller

> Code samples

```bash
curl https://example.com/orders/string/feedback/seller
```

`GET /orders/{order_id}/feedback/seller`

Feedback details for an order's seller

<h3 id="feedback-details-for-an-orders-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|none|

<h3 id="feedback-details-for-an-orders-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add feedback about an order's seller

> Code samples

```bash
curl https://example.com/orders/string/feedback/seller \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /orders/{order_id}/feedback/seller`

Add feedback about an order's seller

<h3 id="add-feedback-about-an-orders-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order_id|path|string|true|none|

<h3 id="add-feedback-about-an-orders-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_feedback )
</aside>

<h1 id="reverb-paymentmethods">payment_methods</h1>

## Get list of payment methods

> Code samples

```bash
curl https://example.com/payment_methods
```

`GET /payment_methods`

Get list of payment methods

<h3 id="get-list-of-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-priceguide">priceguide</h1>

## Get a summary of transactions for a given price guide

> Code samples

```bash
curl https://example.com/priceguide/string/transactions/summary
```

`GET /priceguide/{id}/transactions/summary`

Get a summary of transactions for a given price guide

<h3 id="get-a-summary-of-transactions-for-a-given-price-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|number_of_months|query|integer|false|none|
|condition|query|string|false|none|

<h3 id="get-a-summary-of-transactions-for-a-given-price-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-products">products</h1>

## View a review

> Code samples

```bash
curl https://example.com/products/reviews/string
```

`GET /products/reviews/{id}`

View a review

<h3 id="view-a-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="view-a-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a review

> Code samples

```bash
curl https://example.com/products/reviews/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string",
    "rating": 0,
    "title": "string"
  }'
```

`PUT /products/reviews/{id}`

Update a review

> Body parameter

```json
{
  "body": "string",
  "rating": 0,
  "title": "string"
}
```

<h3 id="update-a-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|false|the content of the request|
|» body|body|string|false|Content of the review|
|» rating|body|integer|false|Rating from 1 to 5|
|» title|body|string|false|Title for the review|

<h3 id="update-a-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_reviews )
</aside>

## View reviews of a comparison shopping page

> Code samples

```bash
curl https://example.com/products/string/reviews
```

`GET /products/{slug}/reviews`

View reviews of a comparison shopping page

<h3 id="view-reviews-of-a-comparison-shopping-page-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="view-reviews-of-a-comparison-shopping-page-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create a review for a product

> Code samples

```bash
curl https://example.com/products/string/reviews \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /products/{slug}/reviews`

Create a review for a product

<h3 id="create-a-review-for-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="create-a-review-for-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_reviews )
</aside>

<h1 id="reverb-sales">sales</h1>

## View upcoming and live Reverb official sales.

> Code samples

```bash
curl https://example.com/sales/reverb \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales/reverb`

View upcoming and live Reverb official sales.

<h3 id="view-upcoming-and-live-reverb-official-sales-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## View your created sales.

> Code samples

```bash
curl https://example.com/sales/seller \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales/seller`

View your created sales.

<h3 id="view-your-created-sales-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_listings )
</aside>

## Add listings to a sale

> Code samples

```bash
curl https://example.com/sales/string/listings \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sales/{sale_id}/listings`

Add listings to a sale

<h3 id="add-listings-to-a-sale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sale_id|path|string|true|none|

<h3 id="add-listings-to-a-sale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## Remove a listing from a sale

> Code samples

```bash
curl https://example.com/sales/string/listings \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sales/{sale_id}/listings`

Remove a listing from a sale

<h3 id="remove-a-listing-from-a-sale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sale_id|path|string|true|none|

<h3 id="remove-a-listing-from-a-sale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_listings )
</aside>

## get/sales/{slug}

> Code samples

```bash
curl https://example.com/sales/string
```

`GET /sales/{slug}`

<h3 id="getsalesslug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="getsalesslug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-shipping">shipping</h1>

## List of supported shipping providers

> Code samples

```bash
curl https://example.com/shipping/providers
```

`GET /shipping/providers`

List of supported shipping providers

<h3 id="list-of-supported-shipping-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/shipping/regions

> Code samples

```bash
curl https://example.com/shipping/regions
```

`GET /shipping/regions`

<h3 id="getshippingregions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-shop">shop</h1>

## Get your own shop details

> Code samples

```bash
curl https://example.com/shop \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shop`

Get your own shop details

<h3 id="get-your-own-shop-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Update your shop profile

> Code samples

```bash
curl https://example.com/shop \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "country_code": "string",
      "extended_address": "string",
      "locality": "string",
      "name": "string",
      "phone": "string",
      "postal_code": "string",
      "region": "string",
      "street_address": "string"
    },
    "currency": "USD",
    "description": "string",
    "legal_country_code": "AD",
    "legal_country_code_confirmed": true,
    "name": "string",
    "payment_policy": "string",
    "return_policy": "string",
    "shipping_policy": "string",
    "shop_type": "individual",
    "website": "string"
  }'
```

`PUT /shop`

Update your shop profile

> Body parameter

```json
{
  "address": {
    "country_code": "string",
    "extended_address": "string",
    "locality": "string",
    "name": "string",
    "phone": "string",
    "postal_code": "string",
    "region": "string",
    "street_address": "string"
  },
  "currency": "USD",
  "description": "string",
  "legal_country_code": "AD",
  "legal_country_code_confirmed": true,
  "name": "string",
  "payment_policy": "string",
  "return_policy": "string",
  "shipping_policy": "string",
  "shop_type": "individual",
  "website": "string"
}
```

<h3 id="update-your-shop-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» address|body|object|false|none|
|» » country_code|body|string|false|none|
|» » extended_address|body|string|false|none|
|» » locality|body|string|false|none|
|» » name|body|string|false|none|
|» » phone|body|string|false|none|
|» » postal_code|body|string|false|none|
|» » region|body|string|false|none|
|» » street_address|body|string|false|none|
|» currency|body|string|false|none|
|» description|body|string|false|none|
|» legal_country_code|body|string|false|none|
|» legal_country_code_confirmed|body|boolean|false|none|
|» name|body|string|false|none|
|» payment_policy|body|string|false|none|
|» return_policy|body|string|false|none|
|» shipping_policy|body|string|false|none|
|» shop_type|body|string|false|none|
|» website|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|USD|
|» currency|CAD|
|» currency|EUR|
|» currency|GBP|
|» currency|AUD|
|» currency|JPY|
|» currency|NZD|
|» currency|MXN|
|» legal_country_code|AD|
|» legal_country_code|AE|
|» legal_country_code|AF|
|» legal_country_code|AG|
|» legal_country_code|AI|
|» legal_country_code|AL|
|» legal_country_code|AM|
|» legal_country_code|AO|
|» legal_country_code|AR|
|» legal_country_code|AS|
|» legal_country_code|AT|
|» legal_country_code|AU|
|» legal_country_code|AW|
|» legal_country_code|AX|
|» legal_country_code|AZ|
|» legal_country_code|BA|
|» legal_country_code|BB|
|» legal_country_code|BD|
|» legal_country_code|BE|
|» legal_country_code|BF|
|» legal_country_code|BG|
|» legal_country_code|BH|
|» legal_country_code|BI|
|» legal_country_code|BJ|
|» legal_country_code|BL|
|» legal_country_code|BM|
|» legal_country_code|BN|
|» legal_country_code|BO|
|» legal_country_code|BQ|
|» legal_country_code|BR|
|» legal_country_code|BS|
|» legal_country_code|BT|
|» legal_country_code|BV|
|» legal_country_code|BW|
|» legal_country_code|BY|
|» legal_country_code|BZ|
|» legal_country_code|CA|
|» legal_country_code|CC|
|» legal_country_code|CD|
|» legal_country_code|CF|
|» legal_country_code|CG|
|» legal_country_code|CH|
|» legal_country_code|CI|
|» legal_country_code|CK|
|» legal_country_code|CL|
|» legal_country_code|CM|
|» legal_country_code|CN|
|» legal_country_code|CO|
|» legal_country_code|CR|
|» legal_country_code|CV|
|» legal_country_code|CW|
|» legal_country_code|CX|
|» legal_country_code|CY|
|» legal_country_code|CZ|
|» legal_country_code|DE|
|» legal_country_code|DJ|
|» legal_country_code|DK|
|» legal_country_code|DM|
|» legal_country_code|DO|
|» legal_country_code|DZ|
|» legal_country_code|EC|
|» legal_country_code|EE|
|» legal_country_code|EG|
|» legal_country_code|EH|
|» legal_country_code|ER|
|» legal_country_code|ES|
|» legal_country_code|ET|
|» legal_country_code|FI|
|» legal_country_code|FJ|
|» legal_country_code|FK|
|» legal_country_code|FM|
|» legal_country_code|FO|
|» legal_country_code|FR|
|» legal_country_code|GA|
|» legal_country_code|GB|
|» legal_country_code|GD|
|» legal_country_code|GE|
|» legal_country_code|GF|
|» legal_country_code|GG|
|» legal_country_code|GH|
|» legal_country_code|GI|
|» legal_country_code|GL|
|» legal_country_code|GM|
|» legal_country_code|GN|
|» legal_country_code|GP|
|» legal_country_code|GQ|
|» legal_country_code|GR|
|» legal_country_code|GS|
|» legal_country_code|GT|
|» legal_country_code|GU|
|» legal_country_code|GW|
|» legal_country_code|GY|
|» legal_country_code|HK|
|» legal_country_code|HM|
|» legal_country_code|HN|
|» legal_country_code|HR|
|» legal_country_code|HT|
|» legal_country_code|HU|
|» legal_country_code|ID|
|» legal_country_code|IE|
|» legal_country_code|IL|
|» legal_country_code|IM|
|» legal_country_code|IN|
|» legal_country_code|IO|
|» legal_country_code|IQ|
|» legal_country_code|IS|
|» legal_country_code|IT|
|» legal_country_code|JE|
|» legal_country_code|JM|
|» legal_country_code|JO|
|» legal_country_code|JP|
|» legal_country_code|KE|
|» legal_country_code|KG|
|» legal_country_code|KH|
|» legal_country_code|KI|
|» legal_country_code|KM|
|» legal_country_code|KN|
|» legal_country_code|KR|
|» legal_country_code|KW|
|» legal_country_code|KY|
|» legal_country_code|KZ|
|» legal_country_code|LA|
|» legal_country_code|LB|
|» legal_country_code|LC|
|» legal_country_code|LI|
|» legal_country_code|LK|
|» legal_country_code|LR|
|» legal_country_code|LS|
|» legal_country_code|LT|
|» legal_country_code|LU|
|» legal_country_code|LV|
|» legal_country_code|LY|
|» legal_country_code|MA|
|» legal_country_code|MC|
|» legal_country_code|MD|
|» legal_country_code|ME|
|» legal_country_code|MF|
|» legal_country_code|MG|
|» legal_country_code|MH|
|» legal_country_code|MK|
|» legal_country_code|ML|
|» legal_country_code|MM|
|» legal_country_code|MN|
|» legal_country_code|MO|
|» legal_country_code|MP|
|» legal_country_code|MQ|
|» legal_country_code|MR|
|» legal_country_code|MS|
|» legal_country_code|MT|
|» legal_country_code|MU|
|» legal_country_code|MV|
|» legal_country_code|MW|
|» legal_country_code|MX|
|» legal_country_code|MY|
|» legal_country_code|MZ|
|» legal_country_code|NA|
|» legal_country_code|NC|
|» legal_country_code|NE|
|» legal_country_code|NF|
|» legal_country_code|NG|
|» legal_country_code|NI|
|» legal_country_code|NL|
|» legal_country_code|NO|
|» legal_country_code|NP|
|» legal_country_code|NR|
|» legal_country_code|NU|
|» legal_country_code|NZ|
|» legal_country_code|OM|
|» legal_country_code|PA|
|» legal_country_code|PE|
|» legal_country_code|PF|
|» legal_country_code|PG|
|» legal_country_code|PH|
|» legal_country_code|PK|
|» legal_country_code|PL|
|» legal_country_code|PM|
|» legal_country_code|PN|
|» legal_country_code|PS|
|» legal_country_code|PT|
|» legal_country_code|PW|
|» legal_country_code|PY|
|» legal_country_code|QA|
|» legal_country_code|RE|
|» legal_country_code|RO|
|» legal_country_code|RS|
|» legal_country_code|RU|
|» legal_country_code|RW|
|» legal_country_code|SA|
|» legal_country_code|SB|
|» legal_country_code|SC|
|» legal_country_code|SE|
|» legal_country_code|SG|
|» legal_country_code|SH|
|» legal_country_code|SI|
|» legal_country_code|SJ|
|» legal_country_code|SK|
|» legal_country_code|SL|
|» legal_country_code|SM|
|» legal_country_code|SN|
|» legal_country_code|SO|
|» legal_country_code|SR|
|» legal_country_code|SS|
|» legal_country_code|ST|
|» legal_country_code|SV|
|» legal_country_code|SX|
|» legal_country_code|SZ|
|» legal_country_code|TC|
|» legal_country_code|TD|
|» legal_country_code|TF|
|» legal_country_code|TG|
|» legal_country_code|TH|
|» legal_country_code|TJ|
|» legal_country_code|TK|
|» legal_country_code|TL|
|» legal_country_code|TM|
|» legal_country_code|TN|
|» legal_country_code|TO|
|» legal_country_code|TR|
|» legal_country_code|TT|
|» legal_country_code|TV|
|» legal_country_code|TW|
|» legal_country_code|TZ|
|» legal_country_code|UA|
|» legal_country_code|UG|
|» legal_country_code|UM|
|» legal_country_code|US|
|» legal_country_code|UY|
|» legal_country_code|UZ|
|» legal_country_code|VA|
|» legal_country_code|VC|
|» legal_country_code|VE|
|» legal_country_code|VG|
|» legal_country_code|VI|
|» legal_country_code|VN|
|» legal_country_code|VU|
|» legal_country_code|WF|
|» legal_country_code|WS|
|» legal_country_code|YE|
|» legal_country_code|YT|
|» legal_country_code|ZA|
|» legal_country_code|ZM|
|» legal_country_code|ZW|
|» legal_country_code_confirmed|true|
|» shop_type|individual|
|» shop_type|business|

<h3 id="update-your-shop-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## List of supported product conditions

> Code samples

```bash
curl https://example.com/shop/listing_conditions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shop/listing_conditions`

List of supported product conditions

<h3 id="list-of-supported-product-conditions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Get accepted payment methods

> Code samples

```bash
curl https://example.com/shop/payment_methods \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shop/payment_methods`

Get accepted payment methods

<h3 id="get-accepted-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Returns shop vacation status

> Code samples

```bash
curl https://example.com/shop/vacation \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shop/vacation`

Returns shop vacation status

<h3 id="returns-shop-vacation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Enable vacation mode. All listings will be unavailable until vacation mode is turned off.

> Code samples

```bash
curl https://example.com/shop/vacation \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /shop/vacation`

Enable vacation mode. All listings will be unavailable until vacation mode is turned off.

<h3 id="enable-vacation-mode-all-listings-will-be-unavailable-until-vacation-mode-is-turned-off-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

## Disable vacation mode. All listings will be re-enabled.

> Code samples

```bash
curl https://example.com/shop/vacation \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /shop/vacation`

Disable vacation mode. All listings will be re-enabled.

<h3 id="disable-vacation-mode-all-listings-will-be-re-enabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_profile )
</aside>

<h1 id="reverb-shops">shops</h1>

## Get storefront details on a shop.

> Code samples

```bash
curl https://example.com/shops/string/storefronts
```

`GET /shops/{id}/storefronts`

Get storefront details on a shop.

<h3 id="get-storefront-details-on-a-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get-storefront-details-on-a-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of shipping profiles for your shop

> Code samples

```bash
curl https://example.com/shops/string/shipping_profiles \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /shops/{shop_id}/shipping_profiles`

List of shipping profiles for your shop

<h3 id="list-of-shipping-profiles-for-your-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shop_id|path|string|true|none|

<h3 id="list-of-shipping-profiles-for-your-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_profile )
</aside>

## Get details on a shop.

> Code samples

```bash
curl https://example.com/shops/string
```

`GET /shops/{slug}`

Get details on a shop.

<h3 id="get-details-on-a-shop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|
|include_listing_count|query|boolean|false|Include the live listing count in the response.|

<h3 id="get-details-on-a-shop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get seller's feedback

> Code samples

```bash
curl https://example.com/shops/string/feedback
```

`GET /shops/{slug}/feedback`

Get seller's feedback

<h3 id="get-sellers-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="get-sellers-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get seller's feedback as a buyer

> Code samples

```bash
curl https://example.com/shops/string/feedback/buyer
```

`GET /shops/{slug}/feedback/buyer`

Get seller's feedback as a buyer

<h3 id="get-sellers-feedback-as-a-buyer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="get-sellers-feedback-as-a-buyer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get seller's feedback as a seller

> Code samples

```bash
curl https://example.com/shops/string/feedback/seller
```

`GET /shops/{slug}/feedback/seller`

Get seller's feedback as a seller

<h3 id="get-sellers-feedback-as-a-seller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|path|string|true|none|

<h3 id="get-sellers-feedback-as-a-seller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="reverb-wants">wants</h1>

## A list of wanted items by the user

> Code samples

```bash
curl https://example.com/wants \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /wants`

A list of wanted items by the user

<h3 id="a-list-of-wanted-items-by-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: read_lists )
</aside>

## Mark an item wanted. Returns 200 on success or 422 on failure.

> Code samples

```bash
curl https://example.com/wants/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /wants/{id}`

Mark an item wanted. Returns 200 on success or 422 on failure.

<h3 id="mark-an-item-wanted-returns-200-on-success-or-422-on-failure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="mark-an-item-wanted-returns-200-on-success-or-422-on-failure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

## Unmark an item wanted.

> Code samples

```bash
curl https://example.com/wants/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /wants/{id}`

Unmark an item wanted.

<h3 id="unmark-an-item-wanted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="unmark-an-item-wanted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write_lists )
</aside>

<h1 id="reverb-webhooks">webhooks</h1>

## Get webhook registrations

> Code samples

```bash
curl https://example.com/webhooks/registrations
```

`GET /webhooks/registrations`

Get webhook registrations

<h3 id="get-webhook-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Register a webhook

> Code samples

```bash
curl https://example.com/webhooks/registrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "topic": "listings/update",
    "url": "string"
  }'
```

`POST /webhooks/registrations`

Register a webhook

> Body parameter

```json
{
  "topic": "listings/update",
  "url": "string"
}
```

<h3 id="register-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|the content of the request|
|» topic|body|string|true|Valid values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled|
|» url|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» topic|listings/update|
|» topic|listings/publish|
|» topic|listings/bumps-ran-out|
|» topic|orders/create|
|» topic|orders/update|
|» topic|payments/create|
|» topic|payments/update|
|» topic|app/uninstalled|

<h3 id="register-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get details of a webhook registration

> Code samples

```bash
curl https://example.com/webhooks/registrations/string
```

`GET /webhooks/registrations/{id}`

Get details of a webhook registration

<h3 id="get-details-of-a-webhook-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get-details-of-a-webhook-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a webhook

> Code samples

```bash
curl https://example.com/webhooks/registrations/string \
  -X DELETE
```

`DELETE /webhooks/registrations/{id}`

Remove a webhook

<h3 id="remove-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="remove-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>
