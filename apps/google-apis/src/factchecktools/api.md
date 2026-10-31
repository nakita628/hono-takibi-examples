<h1 id="fact-check-tools-api">Fact Check Tools API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://factchecktools.googleapis.com/">https://factchecktools.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/fact-check/tools/api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

<h1 id="fact-check-tools-api-claims">claims</h1>

## factchecktools.claims.search

<a id="opIdfactchecktools.claims.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/claims:search \
  -H 'Accept: application/json'
```

`GET /v1alpha1/claims:search`

Search through fact-checked claims.

<h3 id="factchecktoolsclaimssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.|
|maxAgeDays|query|integer|false|The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.|
|offset|query|integer|false|An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.|
|pageSize|query|integer|false|The pagination size. We will return up to that many results. Defaults to 10 if not set.|
|pageToken|query|string|false|The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.|
|query|query|string|false|Textual query string. Required unless `review_publisher_site_filter` is specified.|
|reviewPublisherSiteFilter|query|string|false|The review publisher site to filter results by, e.g. nytimes.com.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "claims": [
    {
      "claimDate": "string",
      "claimReview": [
        {
          "languageCode": "string",
          "publisher": {
            "name": "string",
            "site": "string"
          },
          "reviewDate": "string",
          "textualRating": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "claimant": "string",
      "text": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="factchecktoolsclaimssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse](#schemagooglefactcheckingfactchecktoolsv1alpha1factcheckedclaimsearchresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fact-check-tools-api-pages">pages</h1>

## factchecktools.pages.list

<a id="opIdfactchecktools.pages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/pages`

List the `ClaimReview` markup pages for a specific URL or for an organization.

<h3 id="factchecktoolspageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.|
|organization|query|string|false|The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.|
|pageSize|query|integer|false|The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.|
|pageToken|query|string|false|The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.|
|url|query|string|false|The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "claimReviewMarkupPages": [
    {
      "claimReviewAuthor": {
        "imageUrl": "string",
        "name": "string"
      },
      "claimReviewMarkups": [
        {
          "claimAppearances": [
            "string"
          ],
          "claimAuthor": {
            "imageUrl": "string",
            "jobTitle": "string",
            "name": "string",
            "sameAs": "string"
          },
          "claimDate": "string",
          "claimFirstAppearance": "string",
          "claimLocation": "string",
          "claimReviewed": "string",
          "rating": {
            "bestRating": 0,
            "imageUrl": "string",
            "ratingExplanation": "string",
            "ratingValue": 0,
            "textualRating": "string",
            "worstRating": 0
          },
          "url": "string"
        }
      ],
      "name": "string",
      "pageUrl": "string",
      "publishDate": "string",
      "versionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="factchecktoolspageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse](#schemagooglefactcheckingfactchecktoolsv1alpha1listclaimreviewmarkuppagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## factchecktools.pages.create

<a id="opIdfactchecktools.pages.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/pages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "claimReviewAuthor": {
      "imageUrl": "string",
      "name": "string"
    },
    "claimReviewMarkups": [
      {
        "claimAppearances": [
          "string"
        ],
        "claimAuthor": {
          "imageUrl": "string",
          "jobTitle": "string",
          "name": "string",
          "sameAs": "string"
        },
        "claimDate": "string",
        "claimFirstAppearance": "string",
        "claimLocation": "string",
        "claimReviewed": "string",
        "rating": {
          "bestRating": 0,
          "imageUrl": "string",
          "ratingExplanation": "string",
          "ratingValue": 0,
          "textualRating": "string",
          "worstRating": 0
        },
        "url": "string"
      }
    ],
    "name": "string",
    "pageUrl": "string",
    "publishDate": "string",
    "versionId": "string"
  }'
```

`POST /v1alpha1/pages`

Create `ClaimReview` markup on a page.

> Body parameter

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

<h3 id="factchecktoolspagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)|false|none|
|» claimReviewAuthor|body|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor)|false|Info about the author of this claim review. Similar to the above, semantically these are page-level fields, and each `ClaimReview` on this page will contain the same values.|
|» claimReviewMarkups|body|[[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup)]|false|A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.|
|» name|body|string|false|The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.|
|» pageUrl|body|string|false|The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`|
|» publishDate|body|string|false|The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`|
|» versionId|body|string|false|The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

<h3 id="factchecktoolspagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## factchecktools.pages.get

<a id="opIdfactchecktools.pages.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Get all `ClaimReview` markup on a page.

<h3 id="factchecktoolspagesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the resource to get, in the form of `pages/{page_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

<h3 id="factchecktoolspagesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## factchecktools.pages.update

<a id="opIdfactchecktools.pages.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "claimReviewAuthor": {
      "imageUrl": "string",
      "name": "string"
    },
    "claimReviewMarkups": [
      {
        "claimAppearances": [
          "string"
        ],
        "claimAuthor": {
          "imageUrl": "string",
          "jobTitle": "string",
          "name": "string",
          "sameAs": "string"
        },
        "claimDate": "string",
        "claimFirstAppearance": "string",
        "claimLocation": "string",
        "claimReviewed": "string",
        "rating": {
          "bestRating": 0,
          "imageUrl": "string",
          "ratingExplanation": "string",
          "ratingValue": 0,
          "textualRating": "string",
          "worstRating": 0
        },
        "url": "string"
      }
    ],
    "name": "string",
    "pageUrl": "string",
    "publishDate": "string",
    "versionId": "string"
  }'
```

`PUT /v1alpha1/{name}`

Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

> Body parameter

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

<h3 id="factchecktoolspagesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)|false|none|
|» claimReviewAuthor|body|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor)|false|Info about the author of this claim review. Similar to the above, semantically these are page-level fields, and each `ClaimReview` on this page will contain the same values.|
|» claimReviewMarkups|body|[[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup)]|false|A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.|
|» name|body|string|false|The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.|
|» pageUrl|body|string|false|The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`|
|» publishDate|body|string|false|The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`|
|» versionId|body|string|false|The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

<h3 id="factchecktoolspagesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## factchecktools.pages.delete

<a id="opIdfactchecktools.pages.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Delete all `ClaimReview` markup on a page.

<h3 id="factchecktoolspagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the resource to delete, in the form of `pages/{page_id}`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="factchecktoolspagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

# Schemas

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1Claim">GoogleFactcheckingFactchecktoolsV1alpha1Claim</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claim"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1Claim"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claim"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claim"></a>

```json
{
  "claimDate": "string",
  "claimReview": [
    {
      "languageCode": "string",
      "publisher": {
        "name": "string",
        "site": "string"
      },
      "reviewDate": "string",
      "textualRating": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "claimant": "string",
  "text": "string"
}
```

Information about the claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claimDate|string(google-datetime)|false|none|The date that the claim was made.|
|claimReview|[[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreview)]|false|none|One or more reviews of this claim (namely, a fact-checking article).|
|claimant|string|false|none|A person or organization stating the claim. For instance, "John Doe".|
|text|string|false|none|The claim text. For instance, "Crime has doubled in the last 2 years."|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor">GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimauthor"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimauthor"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimauthor"></a>

```json
{
  "imageUrl": "string",
  "jobTitle": "string",
  "name": "string",
  "sameAs": "string"
}
```

Information about the claim author.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string|false|none|Corresponds to `ClaimReview.itemReviewed.author.image`.|
|jobTitle|string|false|none|Corresponds to `ClaimReview.itemReviewed.author.jobTitle`.|
|name|string|false|none|A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`.|
|sameAs|string|false|none|Corresponds to `ClaimReview.itemReviewed.author.sameAs`.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating">GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimrating"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimrating"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimrating"></a>

```json
{
  "bestRating": 0,
  "imageUrl": "string",
  "ratingExplanation": "string",
  "ratingValue": 0,
  "textualRating": "string",
  "worstRating": 0
}
```

Information about the claim rating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestRating|integer(int32)|false|none|For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.|
|imageUrl|string|false|none|Corresponds to `ClaimReview.reviewRating.image`.|
|ratingExplanation|string|false|none|Corresponds to `ClaimReview.reviewRating.ratingExplanation`.|
|ratingValue|integer(int32)|false|none|A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.|
|textualRating|string|false|none|The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`.|
|worstRating|integer(int32)|false|none|For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview">GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimreview"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimreview"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimreview"></a>

```json
{
  "languageCode": "string",
  "publisher": {
    "name": "string",
    "site": "string"
  },
  "reviewDate": "string",
  "textualRating": "string",
  "title": "string",
  "url": "string"
}
```

Information about a claim review.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The language this review was written in. For instance, "en" or "de".|
|publisher|[GoogleFactcheckingFactchecktoolsV1alpha1Publisher](#schemagooglefactcheckingfactchecktoolsv1alpha1publisher)|false|none|The publisher of this claim review.|
|reviewDate|string(google-datetime)|false|none|The date the claim was reviewed.|
|textualRating|string|false|none|Textual rating. For instance, "Mostly false".|
|title|string|false|none|The title of this claim review, if it can be determined.|
|url|string|false|none|The URL of this claim review.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor">GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor"></a>

```json
{
  "imageUrl": "string",
  "name": "string"
}
```

Information about the claim review author.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageUrl|string|false|none|Corresponds to `ClaimReview.author.image`.|
|name|string|false|none|Name of the organization that is publishing the fact check. Corresponds to `ClaimReview.author.name`.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup">GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup"></a>

```json
{
  "claimAppearances": [
    "string"
  ],
  "claimAuthor": {
    "imageUrl": "string",
    "jobTitle": "string",
    "name": "string",
    "sameAs": "string"
  },
  "claimDate": "string",
  "claimFirstAppearance": "string",
  "claimLocation": "string",
  "claimReviewed": "string",
  "rating": {
    "bestRating": 0,
    "imageUrl": "string",
    "ratingExplanation": "string",
    "ratingValue": 0,
    "textualRating": "string",
    "worstRating": 0
  },
  "url": "string"
}
```

Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claimAppearances|[string]|false|none|A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`. Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.|
|claimAuthor|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor](#schemagooglefactcheckingfactchecktoolsv1alpha1claimauthor)|false|none|Info about the author of this claim.|
|claimDate|string|false|none|The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`.|
|claimFirstAppearance|string|false|none|A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.|
|claimLocation|string|false|none|The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`.|
|claimReviewed|string|false|none|A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`.|
|rating|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating](#schemagooglefactcheckingfactchecktoolsv1alpha1claimrating)|false|none|Info about the rating of this claim review.|
|url|string|false|none|This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url`|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage">GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage"></a>

```json
{
  "claimReviewAuthor": {
    "imageUrl": "string",
    "name": "string"
  },
  "claimReviewMarkups": [
    {
      "claimAppearances": [
        "string"
      ],
      "claimAuthor": {
        "imageUrl": "string",
        "jobTitle": "string",
        "name": "string",
        "sameAs": "string"
      },
      "claimDate": "string",
      "claimFirstAppearance": "string",
      "claimLocation": "string",
      "claimReviewed": "string",
      "rating": {
        "bestRating": 0,
        "imageUrl": "string",
        "ratingExplanation": "string",
        "ratingValue": 0,
        "textualRating": "string",
        "worstRating": 0
      },
      "url": "string"
    }
  ],
  "name": "string",
  "pageUrl": "string",
  "publishDate": "string",
  "versionId": "string"
}
```

Holds one or more instances of `ClaimReview` markup for a webpage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claimReviewAuthor|[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewauthor)|false|none|Info about the author of this claim review. Similar to the above, semantically these are page-level fields, and each `ClaimReview` on this page will contain the same values.|
|claimReviewMarkups|[[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkup)]|false|none|A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element.|
|name|string|false|none|The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.|
|pageUrl|string|false|none|The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url`|
|publishDate|string|false|none|The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished`|
|versionId|string|false|none|The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse">GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1factcheckedclaimsearchresponse"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1factcheckedclaimsearchresponse"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1factcheckedclaimsearchresponse"></a>

```json
{
  "claims": [
    {
      "claimDate": "string",
      "claimReview": [
        {
          "languageCode": "string",
          "publisher": {
            "name": "string",
            "site": "string"
          },
          "reviewDate": "string",
          "textualRating": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "claimant": "string",
      "text": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response from searching fact-checked claims.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claims|[[GoogleFactcheckingFactchecktoolsV1alpha1Claim](#schemagooglefactcheckingfactchecktoolsv1alpha1claim)]|false|none|The list of claims and all of their associated information.|
|nextPageToken|string|false|none|The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse">GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1listclaimreviewmarkuppagesresponse"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1listclaimreviewmarkuppagesresponse"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1listclaimreviewmarkuppagesresponse"></a>

```json
{
  "claimReviewMarkupPages": [
    {
      "claimReviewAuthor": {
        "imageUrl": "string",
        "name": "string"
      },
      "claimReviewMarkups": [
        {
          "claimAppearances": [
            "string"
          ],
          "claimAuthor": {
            "imageUrl": "string",
            "jobTitle": "string",
            "name": "string",
            "sameAs": "string"
          },
          "claimDate": "string",
          "claimFirstAppearance": "string",
          "claimLocation": "string",
          "claimReviewed": "string",
          "rating": {
            "bestRating": 0,
            "imageUrl": "string",
            "ratingExplanation": "string",
            "ratingValue": 0,
            "textualRating": "string",
            "worstRating": 0
          },
          "url": "string"
        }
      ],
      "name": "string",
      "pageUrl": "string",
      "publishDate": "string",
      "versionId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response from listing `ClaimReview` markup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claimReviewMarkupPages|[[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage](#schemagooglefactcheckingfactchecktoolsv1alpha1claimreviewmarkuppage)]|false|none|The result list of pages of `ClaimReview` markup.|
|nextPageToken|string|false|none|The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results.|

<h2 id="tocS_GoogleFactcheckingFactchecktoolsV1alpha1Publisher">GoogleFactcheckingFactchecktoolsV1alpha1Publisher</h2>
<!-- backwards compatibility -->
<a id="schemagooglefactcheckingfactchecktoolsv1alpha1publisher"></a>
<a id="schema_GoogleFactcheckingFactchecktoolsV1alpha1Publisher"></a>
<a id="tocSgooglefactcheckingfactchecktoolsv1alpha1publisher"></a>
<a id="tocsgooglefactcheckingfactchecktoolsv1alpha1publisher"></a>

```json
{
  "name": "string",
  "site": "string"
}
```

Information about the publisher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of this publisher. For instance, "Awesome Fact Checks".|
|site|string|false|none|Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
