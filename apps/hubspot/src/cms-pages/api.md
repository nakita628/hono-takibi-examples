<h1 id="pages">Pages v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|content||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="pages-ab-tests">A/B tests</h1>

## Create a new A/B test variation

<a id="opIdpost-/cms/pages/2026-09/landing-pages/ab-test/create-variation_createABTestVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/ab-test/create-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/ab-test/create-variation`

Create a new A/B test variation based on the information provided in the request body.


> Body parameter

```json
null
```

<h3 id="create-a-new-ab-test-variation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestCreateRequestVNext](#schemaabtestcreaterequestvnext)|true|none|
|» contentId|body|string|true|ID of the object to test.|
|» variationName|body|string|true|Name of A/B test variation.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-ab-test-variation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## End an active A/B test

<a id="opIdpost-/cms/pages/2026-09/landing-pages/ab-test/end_endActiveABTest"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/ab-test/end \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/ab-test/end`

End an active A/B test and designate a winner.

> Body parameter

```json
null
```

<h3 id="end-an-active-ab-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestEndRequestVNext](#schemaabtestendrequestvnext)|true|none|
|» abTestId|body|string|true|ID of the test to end.|
|» winnerId|body|string|true|ID of the object to designate as the test winner.|

> Example responses

> default Response

```json
null
```

<h3 id="end-an-active-ab-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Rerun a previous A/B test

<a id="opIdpost-/cms/pages/2026-09/landing-pages/ab-test/rerun_rerunPreviousABTest"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/ab-test/rerun \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/ab-test/rerun`

Rerun a previous A/B test.

> Body parameter

```json
null
```

<h3 id="rerun-a-previous-ab-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestRerunRequestVNext](#schemaabtestrerunrequestvnext)|true|none|
|» abTestId|body|string|true|ID of the test to rerun.|
|» variationId|body|string|true|ID of the object to reactivate as a test variation.|

> Example responses

> default Response

```json
null
```

<h3 id="rerun-a-previous-ab-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new A/B test variation

<a id="opIdpost-/cms/pages/2026-09/site-pages/ab-test/create-variation_createABTestVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/ab-test/create-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/ab-test/create-variation`

Create a new A/B test variation based on the information provided in the request body.


> Body parameter

```json
null
```

<h3 id="create-a-new-ab-test-variation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestCreateRequestVNext](#schemaabtestcreaterequestvnext)|true|none|
|» contentId|body|string|true|ID of the object to test.|
|» variationName|body|string|true|Name of A/B test variation.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-ab-test-variation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## End an active A/B test

<a id="opIdpost-/cms/pages/2026-09/site-pages/ab-test/end_endActiveABTest"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/ab-test/end \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/ab-test/end`

End an active A/B test and designate a winner.

> Body parameter

```json
null
```

<h3 id="end-an-active-ab-test-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestEndRequestVNext](#schemaabtestendrequestvnext)|true|none|
|» abTestId|body|string|true|ID of the test to end.|
|» winnerId|body|string|true|ID of the object to designate as the test winner.|

> Example responses

> default Response

```json
null
```

<h3 id="end-an-active-ab-test-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Rerun a previous A/B test

<a id="opIdpost-/cms/pages/2026-09/site-pages/ab-test/rerun_rerunPreviousABTest"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/ab-test/rerun \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/ab-test/rerun`

Rerun a previous A/B test.

> Body parameter

```json
null
```

<h3 id="rerun-a-previous-ab-test-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestRerunRequestVNext](#schemaabtestrerunrequestvnext)|true|none|
|» abTestId|body|string|true|ID of the test to rerun.|
|» variationId|body|string|true|ID of the object to reactivate as a test variation.|

> Example responses

> default Response

```json
null
```

<h3 id="rerun-a-previous-ab-test-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-advanced">Advanced</h1>

## Retrieve all previous versions of a landing page

<a id="opIdget-/cms/pages/2026-09/landing-pages/{objectId}/revisions_getPreviousVersions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/revisions' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/{objectId}/revisions`

Retrieve all the previous versions of a landing page, specified by page ID.

<h3 id="retrieve-all-previous-versions-of-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page for which to retrieve revisions.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token for pagination, indicating the start of the page of results to return.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-previous-versions-of-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPageVersion](#schemacollectionresponsewithtotalpageversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a previous version of a landing page

<a id="opIdget-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}_getPreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}`

Retrieve a previous version of a landing page, specified by page ID and revision ID.

<h3 id="retrieve-a-previous-version-of-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page whose revision is being retrieved.|
|revisionId|path|string|true|The unique identifier of the specific revision to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-previous-version-of-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PageVersion](#schemapageversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous version of a landing page

<a id="opIdpost-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore`

Restores a previous version of a landing page, specified by page ID and revision ID.

<h3 id="restore-a-previous-version-of-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page whose revision is to be restored.|
|revisionId|path|string|true|The unique identifier of the revision to restore.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-previous-version-of-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous version of a landing page

<a id="opIdpost-/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/{objectId}/revisions/{revisionId}/restore-to-draft`

Specify a previous version of a landing page to set as the page draft.

<h3 id="restore-a-previous-version-of-a-landing-page-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page to restore.|
|revisionId|path|integer(int64)|true|The unique identifier of the revision to restore to draft.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-previous-version-of-a-landing-page-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous version of a website page

<a id="opIdpost-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore`

Restores a website page to a previous version, specified by page ID and version ID.

<h3 id="restore-a-previous-version-of-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page whose revision is to be restored.|
|revisionId|path|string|true|The unique identifier of the revision to restore.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-previous-version-of-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-basic">Basic</h1>

## Reset the draft of a website page

<a id="opIdpost-/cms/pages/2026-09/site-pages/{objectId}/draft/reset_resetDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/draft/reset' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/{objectId}/draft/reset`

Discards any edits and resets the draft to match the live version.

<h3 id="reset-the-draft-of-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page whose draft is to be reset.|

> Example responses

> default Response

```json
null
```

<h3 id="reset-the-draft-of-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve all previous versions of a website page

<a id="opIdget-/cms/pages/2026-09/site-pages/{objectId}/revisions_getPreviousVersions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/revisions' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/site-pages/{objectId}/revisions`

Retrieves all the previous versions of a website page, specified by page ID.

<h3 id="retrieve-all-previous-versions-of-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page for which to retrieve revisions.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token to retrieve results before a specific point in the list.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-previous-versions-of-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPageVersion](#schemacollectionresponsewithtotalpageversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a previous version of a website page

<a id="opIdget-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}_getPreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}`

Retrieve a previous version of a website page by the revision ID.

<h3 id="retrieve-a-previous-version-of-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page whose revision is to be retrieved.|
|revisionId|path|string|true|The unique identifier of the specific revision of the site page to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-previous-version-of-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PageVersion](#schemapageversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous draft of a website page

<a id="opIdpost-/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/{objectId}/revisions/{revisionId}/restore-to-draft`

Takes a specified version of a website page and sets it as the new draft version of the page.

<h3 id="restore-a-previous-draft-of-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page to restore.|
|revisionId|path|integer(int64)|true|The unique identifier of the revision to restore to draft. Must be an integer.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-previous-draft-of-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-batch">Batch</h1>

## Delete landing pages

<a id="opIdpost-/cms/pages/2026-09/landing-pages/batch/archive_archiveBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/batch/archive \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/batch/archive`

Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.

> Body parameter

```json
null
```

<h3 id="delete-landing-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-landing-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create landing pages

<a id="opIdpost-/cms/pages/2026-09/landing-pages/batch/create_createBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/batch/create \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/batch/create`

Create a batch of landing pages as detailed in the request body.

> Body parameter

```json
null
```

<h3 id="create-landing-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPage](#schemabatchinputpage)|true|none|
|» inputs|body|[[Page](#schemapage)]|true|Pages to input.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-landing-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve landing pages

<a id="opIdpost-/cms/pages/2026-09/landing-pages/batch/read_readBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/batch/read \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/batch/read`

Retrieve a batch of landing pages as specified in the request body.

> Body parameter

```json
null
```

<h3 id="retrieve-landing-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-landing-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update landing pages

<a id="opIdpost-/cms/pages/2026-09/landing-pages/batch/update_updateBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/batch/update \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/batch/update`

Update a batch of landing pages as specified in the request body.

> Body parameter

```json
null
```

<h3 id="update-landing-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputJsonNode](#schemabatchinputjsonnode)|true|none|
|» inputs|body|[object]|true|JSON nodes to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-landing-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete folders

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders/batch/archive_archiveFolders"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/batch/archive \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders/batch/archive`

Delete a batch of folders as specified in the request body.

> Body parameter

```json
null
```

<h3 id="delete-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create folders

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders/batch/create_createFolders"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/batch/create \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders/batch/create`

Create a batch of folders as detailed in the request body.

> Body parameter

```json
null
```

<h3 id="create-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputContentFolder](#schemabatchinputcontentfolder)|true|none|
|» inputs|body|[[ContentFolder](#schemacontentfolder)]|true|Content folders to input.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseContentFolder](#schemabatchresponsecontentfolder)|
|207|Multi-Status|multiple statuses|[BatchResponseContentFolderWithErrors](#schemabatchresponsecontentfolderwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update folders

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders/batch/update_updateFolders"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/batch/update \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders/batch/update`

Update a batch of landing page folders as specified in the request body.

> Body parameter

```json
null
```

<h3 id="update-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputJsonNode](#schemabatchinputjsonnode)|true|none|
|» inputs|body|[object]|true|JSON nodes to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseContentFolder](#schemabatchresponsecontentfolder)|
|207|Multi-Status|multiple statuses|[BatchResponseContentFolderWithErrors](#schemabatchresponsecontentfolderwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete website pages

<a id="opIdpost-/cms/pages/2026-09/site-pages/batch/archive_archiveBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/batch/archive \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/batch/archive`

Delete a batch of website pages as specified in the request body. Note that this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.

> Body parameter

```json
null
```

<h3 id="delete-website-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-website-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create website pages

<a id="opIdpost-/cms/pages/2026-09/site-pages/batch/create_createBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/batch/create \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/batch/create`

Create a batch of website pages as specified in the request body.

> Body parameter

```json
null
```

<h3 id="create-website-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPage](#schemabatchinputpage)|true|none|
|» inputs|body|[[Page](#schemapage)]|true|Pages to input.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-website-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve website pages

<a id="opIdpost-/cms/pages/2026-09/site-pages/batch/read_readBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/batch/read \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/batch/read`

Retrieve a batch of website pages as specified in the request body.

> Body parameter

```json
null
```

<h3 id="retrieve-website-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-website-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update website pages

<a id="opIdpost-/cms/pages/2026-09/site-pages/batch/update_updateBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/batch/update \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/batch/update`

Update a batch of website pages as specified in the request body.

> Body parameter

```json
null
```

<h3 id="update-website-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputJsonNode](#schemabatchinputjsonnode)|true|none|
|» inputs|body|[object]|true|JSON nodes to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-website-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePage](#schemabatchresponsepage)|
|207|Multi-Status|multiple statuses|[BatchResponsePageWithErrors](#schemabatchresponsepagewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-folders">Folders</h1>

## Get all landing page folders

<a id="opIdget-/cms/pages/2026-09/landing-pages/folders_getFoldersPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/folders`

Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.


<h3 id="get-all-landing-page-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter folders created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter folders by the exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter folders created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify properties to include in the response.|
|sort|query|[string]|false|Specify the order of results. Accepts an array of strings.|
|updatedAfter|query|string(date-time)|false|Filter folders updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter folders by the exact update date and time.|
|updatedBefore|query|string(date-time)|false|Filter folders updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-landing-page-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalContentFolderForwardPaging](#schemacollectionresponsewithtotalcontentfolderforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a landing page folder

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders_createFolder"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders`

Create a new folder for landing pages.

> Body parameter

```json
null
```

<h3 id="create-a-landing-page-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentFolder](#schemacontentfolder)|true|none|
|» category|body|integer(int32)|true|The type of object this folder applies to. Should always be LANDING_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the content folder was created.|
|» deletedAt|body|string(date-time)|true|The timestamp (ISO8601 format) when this content folder was deleted.|
|» id|body|string|true|The unique ID of the content folder.|
|» name|body|string|true|The name of the folder which will show up in the app dashboard|
|» parentFolderId|body|integer(int64)|true|The ID of the content folder this folder is nested under|
|» updated|body|string(date-time)|true|The timestamp indicating when the content folder was last updated.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-landing-page-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ContentFolder](#schemacontentfolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve folders

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders/batch/read_readFolders"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/batch/read \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders/batch/read`

Retrieve a batch of landing page folders as identified in the request body.

> Body parameter

```json
null
```

<h3 id="retrieve-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseContentFolder](#schemabatchresponsecontentfolder)|
|207|Multi-Status|multiple statuses|[BatchResponseContentFolderWithErrors](#schemabatchresponsecontentfolderwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a landing page folder

<a id="opIdget-/cms/pages/2026-09/landing-pages/folders/{objectId}_getFolderById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/folders/{objectId}`

Retrieve a landing page folder, specified by its ID.

<h3 id="retrieve-a-landing-page-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the folder to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|property|query|string|false|A specific property to include in the response. This parameter allows you to filter the properties returned for the folder.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-landing-page-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContentFolder](#schemacontentfolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a landing page folder

<a id="opIddelete-/cms/pages/2026-09/landing-pages/folders/{objectId}_archiveFolder"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/pages/2026-09/landing-pages/folders/{objectId}`

Delete a landing page folder, specified by its ID.

<h3 id="delete-a-landing-page-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the folder to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-landing-page-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a landing page folder

<a id="opIdpatch-/cms/pages/2026-09/landing-pages/folders/{objectId}_updateFolder"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/pages/2026-09/landing-pages/folders/{objectId}`

Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying.


> Body parameter

```json
null
```

<h3 id="update-a-landing-page-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the folder to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[ContentFolder](#schemacontentfolder)|true|none|
|» category|body|integer(int32)|true|The type of object this folder applies to. Should always be LANDING_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the content folder was created.|
|» deletedAt|body|string(date-time)|true|The timestamp (ISO8601 format) when this content folder was deleted.|
|» id|body|string|true|The unique ID of the content folder.|
|» name|body|string|true|The name of the folder which will show up in the app dashboard|
|» parentFolderId|body|integer(int64)|true|The ID of the content folder this folder is nested under|
|» updated|body|string(date-time)|true|The timestamp indicating when the content folder was last updated.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-landing-page-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContentFolder](#schemacontentfolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieves previous versions of a folder

<a id="opIdget-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions_getFolderPreviousVersions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/folders/{objectId}/revisions`

Retrieves all the previous versions of a landing page folder.

<h3 id="retrieves-previous-versions-of-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page folder to retrieve revisions for.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token to retrieve results before a specific point in time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieves-previous-versions-of-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalContentFolderVersion](#schemacollectionresponsewithtotalcontentfolderversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a previous version of a folder

<a id="opIdget-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}_getFolderPreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}`

Retrieve a previous version of a folder, specified by the folder ID and revision ID.

<h3 id="retrieve-a-previous-version-of-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page folder.|
|revisionId|path|string|true|The unique identifier of the revision to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-previous-version-of-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContentFolderVersion](#schemacontentfolderversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous version of a folder

<a id="opIdpost-/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}/restore_restoreFolderPreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}/restore' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/folders/{objectId}/revisions/{revisionId}/restore`

Takes a specified version of a landing page folder and restores it.

<h3 id="restore-a-previous-version-of-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page folder to restore.|
|revisionId|path|string|true|The unique identifier of the revision to restore.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-previous-version-of-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ContentFolder](#schemacontentfolder)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-landing-pages">Landing pages</h1>

## Get all landing pages

<a id="opIdget-/cms/pages/2026-09/landing-pages_getPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages`

Retrieve a list of landing pages in your HubSpot account. This endpoint allows you to filter landing pages based on creation and update timestamps, sort them, and paginate through results. You can also choose to include archived pages or specify certain properties to be included in the response.

<h3 id="get-all-landing-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter landing pages that were created after a specific date. The format should be a date-time string.|
|createdAt|query|string(date-time)|false|Filter landing pages by their exact creation date. The format should be a date-time string.|
|createdBefore|query|string(date-time)|false|Filter landing pages that were created before a specific date. The format should be a date-time string.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify additional properties to include in the response for each landing page.|
|sort|query|[string]|false|Specify the sorting order of the results. This should be an array of strings indicating the fields to sort by.|
|updatedAfter|query|string(date-time)|false|Filter landing pages that were updated after a specific date. The format should be a date-time string.|
|updatedAt|query|string(date-time)|false|Filter landing pages by their exact update date. The format should be a date-time string.|
|updatedBefore|query|string(date-time)|false|Filter landing pages that were updated before a specific date. The format should be a date-time string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-landing-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPageForwardPaging](#schemacollectionresponsewithtotalpageforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a landing page

<a id="opIdpost-/cms/pages/2026-09/landing-pages_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages`

Create a new landing page.

> Body parameter

```json
null
```

<h3 id="create-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Clone a landing page

<a id="opIdpost-/cms/pages/2026-09/landing-pages/clone_clone"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/clone \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/clone`

Create a copy of an existing landing page.

> Body parameter

```json
null
```

<h3 id="clone-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentCloneRequestVNext](#schemacontentclonerequestvnext)|true|none|
|» cloneName|body|string|false|Name of the cloned object.|
|» id|body|string|true|ID of the object to be cloned.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="clone-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Schedule landing page publishing

<a id="opIdpost-/cms/pages/2026-09/landing-pages/schedule_schedule"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/schedule \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/schedule`

Schedule a landing page to be published.

> Body parameter

```json
null
```

<h3 id="schedule-landing-page-publishing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentScheduleRequestVNext](#schemacontentschedulerequestvnext)|true|none|
|» id|body|string|true|The ID of the object to be scheduled.|
|» publishDate|body|string(date-time)|true|The date the object should transition from scheduled to published.|

> Example responses

> default Response

```json
null
```

<h3 id="schedule-landing-page-publishing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a landing page

<a id="opIdget-/cms/pages/2026-09/landing-pages/{objectId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/{objectId}`

Retrieve a landing page, specified by its ID.

<h3 id="retrieve-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|property|query|string|false|A specific property to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a landing page

<a id="opIddelete-/cms/pages/2026-09/landing-pages/{objectId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/pages/2026-09/landing-pages/{objectId}`

Delete a landing page, specified by its ID.

<h3 id="delete-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a landing page

<a id="opIdpatch-/cms/pages/2026-09/landing-pages/{objectId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/pages/2026-09/landing-pages/{objectId}`

Sparse updates a single Landing Page object identified by the id in the path.
You only need to specify the column values that you are modifying.

> Body parameter

```json
null
```

<h3 id="update-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a landing page draft

<a id="opIdget-/cms/pages/2026-09/landing-pages/{objectId}/draft_getDraftById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/draft' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/landing-pages/{objectId}/draft`

Retrieve the full draft version of a landing page, specified by page ID.

<h3 id="retrieve-a-landing-page-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page whose draft version is to be retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-landing-page-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update the draft of a landing page

<a id="opIdpatch-/cms/pages/2026-09/landing-pages/{objectId}/draft_updateDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/draft' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/pages/2026-09/landing-pages/{objectId}/draft`

Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying.


> Body parameter

```json
null
```

<h3 id="update-the-draft-of-a-landing-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page whose draft is to be updated.|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-the-draft-of-a-landing-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Push Landing Page draft edits live

<a id="opIdpost-/cms/pages/2026-09/landing-pages/{objectId}/draft/push-live_pushLive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/draft/push-live' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/{objectId}/draft/push-live`

Take any changes from the draft version of the Landing Page and apply them to the live version.

<h3 id="push-landing-page-draft-edits-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page draft to be published live.|

> Example responses

> default Response

```json
null
```

<h3 id="push-landing-page-draft-edits-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Reset a landing page draft

<a id="opIdpost-/cms/pages/2026-09/landing-pages/{objectId}/draft/reset_resetDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/landing-pages/{objectId}/draft/reset' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/{objectId}/draft/reset`

Discards any edits and resets the draft to match the live version.

<h3 id="reset-a-landing-page-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the landing page whose draft is to be reset.|

> Example responses

> default Response

```json
null
```

<h3 id="reset-a-landing-page-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-multi-language">Multi-language</h1>

## Add a landing page to a multi-language group

<a id="opIdpost-/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/multi-language/attach-to-lang-group`

Attach a landing page to a multi-language group.

> Body parameter

```json
null
```

<h3 id="add-a-landing-page-to-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttachToLangPrimaryRequestVNext](#schemaattachtolangprimaryrequestvnext)|true|none|
|» id|body|string|true|ID of the object to add to a multi-language group.|
|» language|body|string|true|Designated language of the object to add to a multi-language group.|
|» primaryId|body|string|true|ID of primary language object in multi-language group.|
|» primaryLanguage|body|string|false|Primary language of the multi-language group.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|
|» primaryLanguage|aa|
|» primaryLanguage|ab|
|» primaryLanguage|ae|
|» primaryLanguage|af|
|» primaryLanguage|af-na|
|» primaryLanguage|af-za|
|» primaryLanguage|agq|
|» primaryLanguage|agq-cm|
|» primaryLanguage|ak|
|» primaryLanguage|ak-gh|
|» primaryLanguage|am|
|» primaryLanguage|am-et|
|» primaryLanguage|an|
|» primaryLanguage|ann|
|» primaryLanguage|ann-ng|
|» primaryLanguage|ar|
|» primaryLanguage|ar-001|
|» primaryLanguage|ar-ae|
|» primaryLanguage|ar-bh|
|» primaryLanguage|ar-dj|
|» primaryLanguage|ar-dz|
|» primaryLanguage|ar-eg|
|» primaryLanguage|ar-eh|
|» primaryLanguage|ar-er|
|» primaryLanguage|ar-il|
|» primaryLanguage|ar-iq|
|» primaryLanguage|ar-jo|
|» primaryLanguage|ar-km|
|» primaryLanguage|ar-kw|
|» primaryLanguage|ar-lb|
|» primaryLanguage|ar-ly|
|» primaryLanguage|ar-ma|
|» primaryLanguage|ar-mr|
|» primaryLanguage|ar-om|
|» primaryLanguage|ar-ps|
|» primaryLanguage|ar-qa|
|» primaryLanguage|ar-sa|
|» primaryLanguage|ar-sd|
|» primaryLanguage|ar-so|
|» primaryLanguage|ar-ss|
|» primaryLanguage|ar-sy|
|» primaryLanguage|ar-td|
|» primaryLanguage|ar-tn|
|» primaryLanguage|ar-ye|
|» primaryLanguage|as|
|» primaryLanguage|as-in|
|» primaryLanguage|asa|
|» primaryLanguage|asa-tz|
|» primaryLanguage|ast|
|» primaryLanguage|ast-es|
|» primaryLanguage|av|
|» primaryLanguage|ay|
|» primaryLanguage|az|
|» primaryLanguage|az-az|
|» primaryLanguage|ba|
|» primaryLanguage|bal|
|» primaryLanguage|bal-pk|
|» primaryLanguage|bas|
|» primaryLanguage|bas-cm|
|» primaryLanguage|be|
|» primaryLanguage|be-by|
|» primaryLanguage|bem|
|» primaryLanguage|bem-zm|
|» primaryLanguage|bez|
|» primaryLanguage|bez-tz|
|» primaryLanguage|bg|
|» primaryLanguage|bg-bg|
|» primaryLanguage|bgc|
|» primaryLanguage|bgc-in|
|» primaryLanguage|bho|
|» primaryLanguage|bho-in|
|» primaryLanguage|bi|
|» primaryLanguage|blo|
|» primaryLanguage|blo-bj|
|» primaryLanguage|bm|
|» primaryLanguage|bm-ml|
|» primaryLanguage|bn|
|» primaryLanguage|bn-bd|
|» primaryLanguage|bn-in|
|» primaryLanguage|bo|
|» primaryLanguage|bo-cn|
|» primaryLanguage|bo-in|
|» primaryLanguage|br|
|» primaryLanguage|br-fr|
|» primaryLanguage|brx|
|» primaryLanguage|brx-in|
|» primaryLanguage|bs|
|» primaryLanguage|bs-ba|
|» primaryLanguage|ca|
|» primaryLanguage|ca-ad|
|» primaryLanguage|ca-es|
|» primaryLanguage|ca-fr|
|» primaryLanguage|ca-it|
|» primaryLanguage|ccp|
|» primaryLanguage|ccp-bd|
|» primaryLanguage|ccp-in|
|» primaryLanguage|ce|
|» primaryLanguage|ce-ru|
|» primaryLanguage|ceb|
|» primaryLanguage|ceb-ph|
|» primaryLanguage|cgg|
|» primaryLanguage|cgg-ug|
|» primaryLanguage|ch|
|» primaryLanguage|chr|
|» primaryLanguage|chr-us|
|» primaryLanguage|ckb|
|» primaryLanguage|ckb-iq|
|» primaryLanguage|ckb-ir|
|» primaryLanguage|co|
|» primaryLanguage|cr|
|» primaryLanguage|cs|
|» primaryLanguage|cs-cz|
|» primaryLanguage|csw|
|» primaryLanguage|csw-ca|
|» primaryLanguage|cu|
|» primaryLanguage|cu-ru|
|» primaryLanguage|cv|
|» primaryLanguage|cv-ru|
|» primaryLanguage|cy|
|» primaryLanguage|cy-gb|
|» primaryLanguage|da|
|» primaryLanguage|da-dk|
|» primaryLanguage|da-gl|
|» primaryLanguage|dav|
|» primaryLanguage|dav-ke|
|» primaryLanguage|de|
|» primaryLanguage|de-at|
|» primaryLanguage|de-be|
|» primaryLanguage|de-ch|
|» primaryLanguage|de-de|
|» primaryLanguage|de-gr|
|» primaryLanguage|de-it|
|» primaryLanguage|de-li|
|» primaryLanguage|de-lu|
|» primaryLanguage|dje|
|» primaryLanguage|dje-ne|
|» primaryLanguage|doi|
|» primaryLanguage|doi-in|
|» primaryLanguage|dsb|
|» primaryLanguage|dsb-de|
|» primaryLanguage|dua|
|» primaryLanguage|dua-cm|
|» primaryLanguage|dv|
|» primaryLanguage|dyo|
|» primaryLanguage|dyo-sn|
|» primaryLanguage|dz|
|» primaryLanguage|dz-bt|
|» primaryLanguage|ebu|
|» primaryLanguage|ebu-ke|
|» primaryLanguage|ee|
|» primaryLanguage|ee-gh|
|» primaryLanguage|ee-tg|
|» primaryLanguage|el|
|» primaryLanguage|el-cy|
|» primaryLanguage|el-gr|
|» primaryLanguage|en|
|» primaryLanguage|en-001|
|» primaryLanguage|en-150|
|» primaryLanguage|en-ae|
|» primaryLanguage|en-ag|
|» primaryLanguage|en-ai|
|» primaryLanguage|en-as|
|» primaryLanguage|en-at|
|» primaryLanguage|en-au|
|» primaryLanguage|en-bb|
|» primaryLanguage|en-be|
|» primaryLanguage|en-bi|
|» primaryLanguage|en-bm|
|» primaryLanguage|en-bs|
|» primaryLanguage|en-bw|
|» primaryLanguage|en-bz|
|» primaryLanguage|en-ca|
|» primaryLanguage|en-cc|
|» primaryLanguage|en-ch|
|» primaryLanguage|en-ck|
|» primaryLanguage|en-cm|
|» primaryLanguage|en-cn|
|» primaryLanguage|en-cx|
|» primaryLanguage|en-cy|
|» primaryLanguage|en-cz|
|» primaryLanguage|en-de|
|» primaryLanguage|en-dg|
|» primaryLanguage|en-dk|
|» primaryLanguage|en-dm|
|» primaryLanguage|en-ee|
|» primaryLanguage|en-eg|
|» primaryLanguage|en-er|
|» primaryLanguage|en-es|
|» primaryLanguage|en-fi|
|» primaryLanguage|en-fj|
|» primaryLanguage|en-fk|
|» primaryLanguage|en-fm|
|» primaryLanguage|en-fr|
|» primaryLanguage|en-gb|
|» primaryLanguage|en-gd|
|» primaryLanguage|en-gg|
|» primaryLanguage|en-gh|
|» primaryLanguage|en-gi|
|» primaryLanguage|en-gm|
|» primaryLanguage|en-gs|
|» primaryLanguage|en-gu|
|» primaryLanguage|en-gy|
|» primaryLanguage|en-hk|
|» primaryLanguage|en-hu|
|» primaryLanguage|en-id|
|» primaryLanguage|en-ie|
|» primaryLanguage|en-il|
|» primaryLanguage|en-im|
|» primaryLanguage|en-in|
|» primaryLanguage|en-io|
|» primaryLanguage|en-it|
|» primaryLanguage|en-je|
|» primaryLanguage|en-jm|
|» primaryLanguage|en-ke|
|» primaryLanguage|en-ki|
|» primaryLanguage|en-kn|
|» primaryLanguage|en-ky|
|» primaryLanguage|en-lc|
|» primaryLanguage|en-lr|
|» primaryLanguage|en-ls|
|» primaryLanguage|en-lu|
|» primaryLanguage|en-mg|
|» primaryLanguage|en-mh|
|» primaryLanguage|en-mo|
|» primaryLanguage|en-mp|
|» primaryLanguage|en-ms|
|» primaryLanguage|en-mt|
|» primaryLanguage|en-mu|
|» primaryLanguage|en-mv|
|» primaryLanguage|en-mw|
|» primaryLanguage|en-mx|
|» primaryLanguage|en-my|
|» primaryLanguage|en-na|
|» primaryLanguage|en-nf|
|» primaryLanguage|en-ng|
|» primaryLanguage|en-nl|
|» primaryLanguage|en-no|
|» primaryLanguage|en-nr|
|» primaryLanguage|en-nu|
|» primaryLanguage|en-nz|
|» primaryLanguage|en-pg|
|» primaryLanguage|en-ph|
|» primaryLanguage|en-pk|
|» primaryLanguage|en-pl|
|» primaryLanguage|en-pn|
|» primaryLanguage|en-pr|
|» primaryLanguage|en-pt|
|» primaryLanguage|en-pw|
|» primaryLanguage|en-ro|
|» primaryLanguage|en-rw|
|» primaryLanguage|en-sb|
|» primaryLanguage|en-sc|
|» primaryLanguage|en-sd|
|» primaryLanguage|en-se|
|» primaryLanguage|en-sg|
|» primaryLanguage|en-sh|
|» primaryLanguage|en-si|
|» primaryLanguage|en-sk|
|» primaryLanguage|en-sl|
|» primaryLanguage|en-ss|
|» primaryLanguage|en-sx|
|» primaryLanguage|en-sz|
|» primaryLanguage|en-tc|
|» primaryLanguage|en-th|
|» primaryLanguage|en-tk|
|» primaryLanguage|en-tn|
|» primaryLanguage|en-to|
|» primaryLanguage|en-tt|
|» primaryLanguage|en-tv|
|» primaryLanguage|en-tz|
|» primaryLanguage|en-ug|
|» primaryLanguage|en-um|
|» primaryLanguage|en-us|
|» primaryLanguage|en-vc|
|» primaryLanguage|en-vg|
|» primaryLanguage|en-vi|
|» primaryLanguage|en-vn|
|» primaryLanguage|en-vu|
|» primaryLanguage|en-ws|
|» primaryLanguage|en-za|
|» primaryLanguage|en-zm|
|» primaryLanguage|en-zw|
|» primaryLanguage|eo|
|» primaryLanguage|eo-001|
|» primaryLanguage|es|
|» primaryLanguage|es-419|
|» primaryLanguage|es-ar|
|» primaryLanguage|es-bo|
|» primaryLanguage|es-br|
|» primaryLanguage|es-bz|
|» primaryLanguage|es-cl|
|» primaryLanguage|es-co|
|» primaryLanguage|es-cr|
|» primaryLanguage|es-cu|
|» primaryLanguage|es-do|
|» primaryLanguage|es-ea|
|» primaryLanguage|es-ec|
|» primaryLanguage|es-es|
|» primaryLanguage|es-gq|
|» primaryLanguage|es-gt|
|» primaryLanguage|es-hn|
|» primaryLanguage|es-ic|
|» primaryLanguage|es-mx|
|» primaryLanguage|es-ni|
|» primaryLanguage|es-pa|
|» primaryLanguage|es-pe|
|» primaryLanguage|es-ph|
|» primaryLanguage|es-pr|
|» primaryLanguage|es-py|
|» primaryLanguage|es-sv|
|» primaryLanguage|es-us|
|» primaryLanguage|es-uy|
|» primaryLanguage|es-ve|
|» primaryLanguage|et|
|» primaryLanguage|et-ee|
|» primaryLanguage|eu|
|» primaryLanguage|eu-es|
|» primaryLanguage|ewo|
|» primaryLanguage|ewo-cm|
|» primaryLanguage|fa|
|» primaryLanguage|fa-af|
|» primaryLanguage|fa-ir|
|» primaryLanguage|ff|
|» primaryLanguage|ff-bf|
|» primaryLanguage|ff-cm|
|» primaryLanguage|ff-gh|
|» primaryLanguage|ff-gm|
|» primaryLanguage|ff-gn|
|» primaryLanguage|ff-gw|
|» primaryLanguage|ff-lr|
|» primaryLanguage|ff-mr|
|» primaryLanguage|ff-ne|
|» primaryLanguage|ff-ng|
|» primaryLanguage|ff-sl|
|» primaryLanguage|ff-sn|
|» primaryLanguage|fi|
|» primaryLanguage|fi-fi|
|» primaryLanguage|fil|
|» primaryLanguage|fil-ph|
|» primaryLanguage|fj|
|» primaryLanguage|fo|
|» primaryLanguage|fo-dk|
|» primaryLanguage|fo-fo|
|» primaryLanguage|fr|
|» primaryLanguage|fr-be|
|» primaryLanguage|fr-bf|
|» primaryLanguage|fr-bi|
|» primaryLanguage|fr-bj|
|» primaryLanguage|fr-bl|
|» primaryLanguage|fr-ca|
|» primaryLanguage|fr-cd|
|» primaryLanguage|fr-cf|
|» primaryLanguage|fr-cg|
|» primaryLanguage|fr-ch|
|» primaryLanguage|fr-ci|
|» primaryLanguage|fr-cm|
|» primaryLanguage|fr-dj|
|» primaryLanguage|fr-dz|
|» primaryLanguage|fr-fr|
|» primaryLanguage|fr-ga|
|» primaryLanguage|fr-gf|
|» primaryLanguage|fr-gn|
|» primaryLanguage|fr-gp|
|» primaryLanguage|fr-gq|
|» primaryLanguage|fr-ht|
|» primaryLanguage|fr-km|
|» primaryLanguage|fr-lu|
|» primaryLanguage|fr-ma|
|» primaryLanguage|fr-mc|
|» primaryLanguage|fr-mf|
|» primaryLanguage|fr-mg|
|» primaryLanguage|fr-ml|
|» primaryLanguage|fr-mq|
|» primaryLanguage|fr-mr|
|» primaryLanguage|fr-mu|
|» primaryLanguage|fr-nc|
|» primaryLanguage|fr-ne|
|» primaryLanguage|fr-pf|
|» primaryLanguage|fr-pm|
|» primaryLanguage|fr-re|
|» primaryLanguage|fr-rw|
|» primaryLanguage|fr-sc|
|» primaryLanguage|fr-sn|
|» primaryLanguage|fr-sy|
|» primaryLanguage|fr-td|
|» primaryLanguage|fr-tg|
|» primaryLanguage|fr-tn|
|» primaryLanguage|fr-vu|
|» primaryLanguage|fr-wf|
|» primaryLanguage|fr-yt|
|» primaryLanguage|frr|
|» primaryLanguage|frr-de|
|» primaryLanguage|fur|
|» primaryLanguage|fur-it|
|» primaryLanguage|fy|
|» primaryLanguage|fy-nl|
|» primaryLanguage|ga|
|» primaryLanguage|ga-gb|
|» primaryLanguage|ga-ie|
|» primaryLanguage|gaa|
|» primaryLanguage|gaa-gh|
|» primaryLanguage|gd|
|» primaryLanguage|gd-gb|
|» primaryLanguage|gl|
|» primaryLanguage|gl-es|
|» primaryLanguage|gn|
|» primaryLanguage|gsw|
|» primaryLanguage|gsw-ch|
|» primaryLanguage|gsw-fr|
|» primaryLanguage|gsw-li|
|» primaryLanguage|gu|
|» primaryLanguage|gu-in|
|» primaryLanguage|guz|
|» primaryLanguage|guz-ke|
|» primaryLanguage|gv|
|» primaryLanguage|gv-im|
|» primaryLanguage|ha|
|» primaryLanguage|ha-gh|
|» primaryLanguage|ha-ne|
|» primaryLanguage|ha-ng|
|» primaryLanguage|haw|
|» primaryLanguage|haw-us|
|» primaryLanguage|he|
|» primaryLanguage|he-il|
|» primaryLanguage|hi|
|» primaryLanguage|hi-in|
|» primaryLanguage|hmn|
|» primaryLanguage|ho|
|» primaryLanguage|hr|
|» primaryLanguage|hr-ba|
|» primaryLanguage|hr-hr|
|» primaryLanguage|hsb|
|» primaryLanguage|hsb-de|
|» primaryLanguage|ht|
|» primaryLanguage|ht-ht|
|» primaryLanguage|hu|
|» primaryLanguage|hu-hu|
|» primaryLanguage|hy|
|» primaryLanguage|hy-am|
|» primaryLanguage|hz|
|» primaryLanguage|ia|
|» primaryLanguage|ia-001|
|» primaryLanguage|id|
|» primaryLanguage|id-id|
|» primaryLanguage|ie|
|» primaryLanguage|ie-ee|
|» primaryLanguage|ig|
|» primaryLanguage|ig-ng|
|» primaryLanguage|ii|
|» primaryLanguage|ii-cn|
|» primaryLanguage|ik|
|» primaryLanguage|io|
|» primaryLanguage|is|
|» primaryLanguage|is-is|
|» primaryLanguage|it|
|» primaryLanguage|it-ch|
|» primaryLanguage|it-it|
|» primaryLanguage|it-sm|
|» primaryLanguage|it-va|
|» primaryLanguage|iu|
|» primaryLanguage|ja|
|» primaryLanguage|ja-jp|
|» primaryLanguage|jgo|
|» primaryLanguage|jgo-cm|
|» primaryLanguage|jmc|
|» primaryLanguage|jmc-tz|
|» primaryLanguage|jv|
|» primaryLanguage|jv-id|
|» primaryLanguage|ka|
|» primaryLanguage|ka-ge|
|» primaryLanguage|kab|
|» primaryLanguage|kab-dz|
|» primaryLanguage|kam|
|» primaryLanguage|kam-ke|
|» primaryLanguage|kar|
|» primaryLanguage|kde|
|» primaryLanguage|kde-tz|
|» primaryLanguage|kea|
|» primaryLanguage|kea-cv|
|» primaryLanguage|kg|
|» primaryLanguage|kgp|
|» primaryLanguage|kgp-br|
|» primaryLanguage|kh|
|» primaryLanguage|khq|
|» primaryLanguage|khq-ml|
|» primaryLanguage|ki|
|» primaryLanguage|ki-ke|
|» primaryLanguage|kj|
|» primaryLanguage|kk|
|» primaryLanguage|kk-kz|
|» primaryLanguage|kkj|
|» primaryLanguage|kkj-cm|
|» primaryLanguage|kl|
|» primaryLanguage|kl-gl|
|» primaryLanguage|kln|
|» primaryLanguage|kln-ke|
|» primaryLanguage|km|
|» primaryLanguage|km-kh|
|» primaryLanguage|kn|
|» primaryLanguage|kn-in|
|» primaryLanguage|ko|
|» primaryLanguage|ko-cn|
|» primaryLanguage|ko-kp|
|» primaryLanguage|ko-kr|
|» primaryLanguage|kok|
|» primaryLanguage|kok-in|
|» primaryLanguage|kr|
|» primaryLanguage|ks|
|» primaryLanguage|ks-in|
|» primaryLanguage|ksb|
|» primaryLanguage|ksb-tz|
|» primaryLanguage|ksf|
|» primaryLanguage|ksf-cm|
|» primaryLanguage|ksh|
|» primaryLanguage|ksh-de|
|» primaryLanguage|ku|
|» primaryLanguage|ku-tr|
|» primaryLanguage|kv|
|» primaryLanguage|kw|
|» primaryLanguage|kw-gb|
|» primaryLanguage|kxv|
|» primaryLanguage|kxv-in|
|» primaryLanguage|ky|
|» primaryLanguage|ky-kg|
|» primaryLanguage|la|
|» primaryLanguage|lag|
|» primaryLanguage|lag-tz|
|» primaryLanguage|lb|
|» primaryLanguage|lb-lu|
|» primaryLanguage|lg|
|» primaryLanguage|lg-ug|
|» primaryLanguage|li|
|» primaryLanguage|lij|
|» primaryLanguage|lij-it|
|» primaryLanguage|lkt|
|» primaryLanguage|lkt-us|
|» primaryLanguage|lmo|
|» primaryLanguage|lmo-it|
|» primaryLanguage|ln|
|» primaryLanguage|ln-ao|
|» primaryLanguage|ln-cd|
|» primaryLanguage|ln-cf|
|» primaryLanguage|ln-cg|
|» primaryLanguage|lo|
|» primaryLanguage|lo-la|
|» primaryLanguage|lrc|
|» primaryLanguage|lrc-iq|
|» primaryLanguage|lrc-ir|
|» primaryLanguage|lt|
|» primaryLanguage|lt-lt|
|» primaryLanguage|lu|
|» primaryLanguage|lu-cd|
|» primaryLanguage|luo|
|» primaryLanguage|luo-ke|
|» primaryLanguage|luy|
|» primaryLanguage|luy-ke|
|» primaryLanguage|lv|
|» primaryLanguage|lv-lv|
|» primaryLanguage|mai|
|» primaryLanguage|mai-in|
|» primaryLanguage|mas|
|» primaryLanguage|mas-ke|
|» primaryLanguage|mas-tz|
|» primaryLanguage|mdf|
|» primaryLanguage|mdf-ru|
|» primaryLanguage|mer|
|» primaryLanguage|mer-ke|
|» primaryLanguage|mfe|
|» primaryLanguage|mfe-mu|
|» primaryLanguage|mg|
|» primaryLanguage|mg-mg|
|» primaryLanguage|mgh|
|» primaryLanguage|mgh-mz|
|» primaryLanguage|mgo|
|» primaryLanguage|mgo-cm|
|» primaryLanguage|mh|
|» primaryLanguage|mi|
|» primaryLanguage|mi-nz|
|» primaryLanguage|mk|
|» primaryLanguage|mk-mk|
|» primaryLanguage|ml|
|» primaryLanguage|ml-in|
|» primaryLanguage|mn|
|» primaryLanguage|mn-mn|
|» primaryLanguage|mni|
|» primaryLanguage|mni-in|
|» primaryLanguage|mr|
|» primaryLanguage|mr-in|
|» primaryLanguage|ms|
|» primaryLanguage|ms-bn|
|» primaryLanguage|ms-id|
|» primaryLanguage|ms-my|
|» primaryLanguage|ms-sg|
|» primaryLanguage|mt|
|» primaryLanguage|mt-mt|
|» primaryLanguage|mua|
|» primaryLanguage|mua-cm|
|» primaryLanguage|my|
|» primaryLanguage|my-mm|
|» primaryLanguage|mzn|
|» primaryLanguage|mzn-ir|
|» primaryLanguage|na|
|» primaryLanguage|naq|
|» primaryLanguage|naq-na|
|» primaryLanguage|nb|
|» primaryLanguage|nb-no|
|» primaryLanguage|nb-sj|
|» primaryLanguage|nd|
|» primaryLanguage|nd-zw|
|» primaryLanguage|nds|
|» primaryLanguage|nds-de|
|» primaryLanguage|nds-nl|
|» primaryLanguage|ne|
|» primaryLanguage|ne-in|
|» primaryLanguage|ne-np|
|» primaryLanguage|ng|
|» primaryLanguage|nl|
|» primaryLanguage|nl-aw|
|» primaryLanguage|nl-be|
|» primaryLanguage|nl-bq|
|» primaryLanguage|nl-ch|
|» primaryLanguage|nl-cw|
|» primaryLanguage|nl-lu|
|» primaryLanguage|nl-nl|
|» primaryLanguage|nl-sr|
|» primaryLanguage|nl-sx|
|» primaryLanguage|nmg|
|» primaryLanguage|nmg-cm|
|» primaryLanguage|nn|
|» primaryLanguage|nn-no|
|» primaryLanguage|nnh|
|» primaryLanguage|nnh-cm|
|» primaryLanguage|no|
|» primaryLanguage|no-no|
|» primaryLanguage|nqo|
|» primaryLanguage|nqo-gn|
|» primaryLanguage|nr|
|» primaryLanguage|nso|
|» primaryLanguage|nso-za|
|» primaryLanguage|nus|
|» primaryLanguage|nus-ss|
|» primaryLanguage|nv|
|» primaryLanguage|ny|
|» primaryLanguage|nyn|
|» primaryLanguage|nyn-ug|
|» primaryLanguage|oc|
|» primaryLanguage|oc-es|
|» primaryLanguage|oc-fr|
|» primaryLanguage|oj|
|» primaryLanguage|om|
|» primaryLanguage|om-et|
|» primaryLanguage|om-ke|
|» primaryLanguage|or|
|» primaryLanguage|or-in|
|» primaryLanguage|os|
|» primaryLanguage|os-ge|
|» primaryLanguage|os-ru|
|» primaryLanguage|pa|
|» primaryLanguage|pa-in|
|» primaryLanguage|pa-pk|
|» primaryLanguage|pcm|
|» primaryLanguage|pcm-ng|
|» primaryLanguage|pi|
|» primaryLanguage|pis|
|» primaryLanguage|pis-sb|
|» primaryLanguage|pl|
|» primaryLanguage|pl-pl|
|» primaryLanguage|prg|
|» primaryLanguage|prg-001|
|» primaryLanguage|ps|
|» primaryLanguage|ps-af|
|» primaryLanguage|ps-pk|
|» primaryLanguage|pt|
|» primaryLanguage|pt-ao|
|» primaryLanguage|pt-br|
|» primaryLanguage|pt-ch|
|» primaryLanguage|pt-cv|
|» primaryLanguage|pt-gq|
|» primaryLanguage|pt-gw|
|» primaryLanguage|pt-lu|
|» primaryLanguage|pt-mo|
|» primaryLanguage|pt-mz|
|» primaryLanguage|pt-pt|
|» primaryLanguage|pt-st|
|» primaryLanguage|pt-tl|
|» primaryLanguage|qu|
|» primaryLanguage|qu-bo|
|» primaryLanguage|qu-ec|
|» primaryLanguage|qu-pe|
|» primaryLanguage|raj|
|» primaryLanguage|raj-in|
|» primaryLanguage|rm|
|» primaryLanguage|rm-ch|
|» primaryLanguage|rn|
|» primaryLanguage|rn-bi|
|» primaryLanguage|ro|
|» primaryLanguage|ro-md|
|» primaryLanguage|ro-ro|
|» primaryLanguage|rof|
|» primaryLanguage|rof-tz|
|» primaryLanguage|ru|
|» primaryLanguage|ru-by|
|» primaryLanguage|ru-kg|
|» primaryLanguage|ru-kz|
|» primaryLanguage|ru-md|
|» primaryLanguage|ru-ru|
|» primaryLanguage|ru-ua|
|» primaryLanguage|rw|
|» primaryLanguage|rw-rw|
|» primaryLanguage|rwk|
|» primaryLanguage|rwk-tz|
|» primaryLanguage|sa|
|» primaryLanguage|sa-in|
|» primaryLanguage|sah|
|» primaryLanguage|sah-ru|
|» primaryLanguage|saq|
|» primaryLanguage|saq-ke|
|» primaryLanguage|sat|
|» primaryLanguage|sat-in|
|» primaryLanguage|sbp|
|» primaryLanguage|sbp-tz|
|» primaryLanguage|sc|
|» primaryLanguage|sc-it|
|» primaryLanguage|sd|
|» primaryLanguage|sd-in|
|» primaryLanguage|sd-pk|
|» primaryLanguage|se|
|» primaryLanguage|se-fi|
|» primaryLanguage|se-no|
|» primaryLanguage|se-se|
|» primaryLanguage|seh|
|» primaryLanguage|seh-mz|
|» primaryLanguage|ses|
|» primaryLanguage|ses-ml|
|» primaryLanguage|sg|
|» primaryLanguage|sg-cf|
|» primaryLanguage|shi|
|» primaryLanguage|shi-ma|
|» primaryLanguage|si|
|» primaryLanguage|si-lk|
|» primaryLanguage|sk|
|» primaryLanguage|sk-sk|
|» primaryLanguage|sl|
|» primaryLanguage|sl-si|
|» primaryLanguage|sm|
|» primaryLanguage|smn|
|» primaryLanguage|smn-fi|
|» primaryLanguage|sms|
|» primaryLanguage|sms-fi|
|» primaryLanguage|sn|
|» primaryLanguage|sn-zw|
|» primaryLanguage|so|
|» primaryLanguage|so-dj|
|» primaryLanguage|so-et|
|» primaryLanguage|so-ke|
|» primaryLanguage|so-so|
|» primaryLanguage|sq|
|» primaryLanguage|sq-al|
|» primaryLanguage|sq-mk|
|» primaryLanguage|sq-xk|
|» primaryLanguage|sr|
|» primaryLanguage|sr-ba|
|» primaryLanguage|sr-cs|
|» primaryLanguage|sr-me|
|» primaryLanguage|sr-rs|
|» primaryLanguage|sr-xk|
|» primaryLanguage|ss|
|» primaryLanguage|st|
|» primaryLanguage|st-ls|
|» primaryLanguage|st-za|
|» primaryLanguage|su|
|» primaryLanguage|su-id|
|» primaryLanguage|sv|
|» primaryLanguage|sv-ax|
|» primaryLanguage|sv-fi|
|» primaryLanguage|sv-se|
|» primaryLanguage|sw|
|» primaryLanguage|sw-cd|
|» primaryLanguage|sw-ke|
|» primaryLanguage|sw-tz|
|» primaryLanguage|sw-ug|
|» primaryLanguage|sy|
|» primaryLanguage|syr|
|» primaryLanguage|syr-iq|
|» primaryLanguage|syr-sy|
|» primaryLanguage|szl|
|» primaryLanguage|szl-pl|
|» primaryLanguage|ta|
|» primaryLanguage|ta-in|
|» primaryLanguage|ta-lk|
|» primaryLanguage|ta-my|
|» primaryLanguage|ta-sg|
|» primaryLanguage|te|
|» primaryLanguage|te-in|
|» primaryLanguage|teo|
|» primaryLanguage|teo-ke|
|» primaryLanguage|teo-ug|
|» primaryLanguage|tg|
|» primaryLanguage|tg-tj|
|» primaryLanguage|th|
|» primaryLanguage|th-th|
|» primaryLanguage|ti|
|» primaryLanguage|ti-er|
|» primaryLanguage|ti-et|
|» primaryLanguage|tk|
|» primaryLanguage|tk-tm|
|» primaryLanguage|tl|
|» primaryLanguage|tn|
|» primaryLanguage|tn-bw|
|» primaryLanguage|tn-za|
|» primaryLanguage|to|
|» primaryLanguage|to-to|
|» primaryLanguage|tok|
|» primaryLanguage|tok-001|
|» primaryLanguage|tr|
|» primaryLanguage|tr-cy|
|» primaryLanguage|tr-tr|
|» primaryLanguage|ts|
|» primaryLanguage|tt|
|» primaryLanguage|tt-ru|
|» primaryLanguage|tw|
|» primaryLanguage|twq|
|» primaryLanguage|twq-ne|
|» primaryLanguage|ty|
|» primaryLanguage|tzm|
|» primaryLanguage|tzm-ma|
|» primaryLanguage|ug|
|» primaryLanguage|ug-cn|
|» primaryLanguage|uk|
|» primaryLanguage|uk-ua|
|» primaryLanguage|ur|
|» primaryLanguage|ur-in|
|» primaryLanguage|ur-pk|
|» primaryLanguage|uz|
|» primaryLanguage|uz-af|
|» primaryLanguage|uz-uz|
|» primaryLanguage|vai|
|» primaryLanguage|vai-lr|
|» primaryLanguage|ve|
|» primaryLanguage|vec|
|» primaryLanguage|vec-it|
|» primaryLanguage|vi|
|» primaryLanguage|vi-vn|
|» primaryLanguage|vmw|
|» primaryLanguage|vmw-mz|
|» primaryLanguage|vo|
|» primaryLanguage|vo-001|
|» primaryLanguage|vun|
|» primaryLanguage|vun-tz|
|» primaryLanguage|wa|
|» primaryLanguage|wae|
|» primaryLanguage|wae-ch|
|» primaryLanguage|wo|
|» primaryLanguage|wo-sn|
|» primaryLanguage|xh|
|» primaryLanguage|xh-za|
|» primaryLanguage|xnr|
|» primaryLanguage|xnr-in|
|» primaryLanguage|xog|
|» primaryLanguage|xog-ug|
|» primaryLanguage|yav|
|» primaryLanguage|yav-cm|
|» primaryLanguage|yi|
|» primaryLanguage|yi-001|
|» primaryLanguage|yi-ua|
|» primaryLanguage|yo|
|» primaryLanguage|yo-bj|
|» primaryLanguage|yo-ng|
|» primaryLanguage|yrl|
|» primaryLanguage|yrl-br|
|» primaryLanguage|yrl-co|
|» primaryLanguage|yrl-ve|
|» primaryLanguage|yue|
|» primaryLanguage|yue-cn|
|» primaryLanguage|yue-hk|
|» primaryLanguage|yue-mo|
|» primaryLanguage|za|
|» primaryLanguage|za-cn|
|» primaryLanguage|zgh|
|» primaryLanguage|zgh-ma|
|» primaryLanguage|zh|
|» primaryLanguage|zh-cn|
|» primaryLanguage|zh-hans|
|» primaryLanguage|zh-hant|
|» primaryLanguage|zh-hk|
|» primaryLanguage|zh-mo|
|» primaryLanguage|zh-my|
|» primaryLanguage|zh-sg|
|» primaryLanguage|zh-tw|
|» primaryLanguage|zu|
|» primaryLanguage|zu-za|

> Example responses

> default Response

```json
null
```

<h3 id="add-a-landing-page-to-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new language variation

<a id="opIdpost-/cms/pages/2026-09/landing-pages/multi-language/create-language-variation_createLangVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/multi-language/create-language-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/multi-language/create-language-variation`

Create a new language variation from an existing landing page. The variation will be a copy of the draft state of the source page. To preview the content, you can [retrieve the draft of the source landing page](/api-reference/latest/cms/pages/landing-pages/drafts/get-landing-page-draft).

> Body parameter

```json
null
```

<h3 id="create-a-new-language-variation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentLanguageCloneRequestVNext](#schemacontentlanguageclonerequestvnext)|true|none|
|» id|body|string|true|ID of content to clone.|
|» language|body|string|false|Target language of new variant.|
|» primaryLanguage|body|string|false|Language of primary content to clone.|
|» usePublished|body|boolean|false|A boolean indicating whether the published version of the page should be used for creating the language variation. If true, the published version is used; otherwise, the draft version is used.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-language-variation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Remove a landing page from a multi-language group

<a id="opIdpost-/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/multi-language/detach-from-lang-group`

Detach a landing page from a multi-language group.

> Body parameter

```json
null
```

<h3 id="remove-a-landing-page-from-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DetachFromLangGroupRequestVNext](#schemadetachfromlanggrouprequestvnext)|true|none|
|» id|body|string|true|ID of the object to remove from a multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="remove-a-landing-page-from-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update languages of multi-language group

<a id="opIdpost-/cms/pages/2026-09/landing-pages/multi-language/update-languages_updateLangs"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/multi-language/update-languages \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/landing-pages/multi-language/update-languages`

Explicitly set new languages for each landing page in a multi-language group.

> Body parameter

```json
null
```

<h3 id="update-languages-of-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateLanguagesRequestVNext](#schemaupdatelanguagesrequestvnext)|true|none|
|» languages|body|object|true|Map of object IDs to associated languages of object in the multi-language group.|
|» » **additionalProperties**|body|string|false|none|
|» primaryId|body|string|true|ID of the primary object in the multi-language group.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » **additionalProperties**|aa|
|» » **additionalProperties**|ab|
|» » **additionalProperties**|ae|
|» » **additionalProperties**|af|
|» » **additionalProperties**|af-na|
|» » **additionalProperties**|af-za|
|» » **additionalProperties**|agq|
|» » **additionalProperties**|agq-cm|
|» » **additionalProperties**|ak|
|» » **additionalProperties**|ak-gh|
|» » **additionalProperties**|am|
|» » **additionalProperties**|am-et|
|» » **additionalProperties**|an|
|» » **additionalProperties**|ann|
|» » **additionalProperties**|ann-ng|
|» » **additionalProperties**|ar|
|» » **additionalProperties**|ar-001|
|» » **additionalProperties**|ar-ae|
|» » **additionalProperties**|ar-bh|
|» » **additionalProperties**|ar-dj|
|» » **additionalProperties**|ar-dz|
|» » **additionalProperties**|ar-eg|
|» » **additionalProperties**|ar-eh|
|» » **additionalProperties**|ar-er|
|» » **additionalProperties**|ar-il|
|» » **additionalProperties**|ar-iq|
|» » **additionalProperties**|ar-jo|
|» » **additionalProperties**|ar-km|
|» » **additionalProperties**|ar-kw|
|» » **additionalProperties**|ar-lb|
|» » **additionalProperties**|ar-ly|
|» » **additionalProperties**|ar-ma|
|» » **additionalProperties**|ar-mr|
|» » **additionalProperties**|ar-om|
|» » **additionalProperties**|ar-ps|
|» » **additionalProperties**|ar-qa|
|» » **additionalProperties**|ar-sa|
|» » **additionalProperties**|ar-sd|
|» » **additionalProperties**|ar-so|
|» » **additionalProperties**|ar-ss|
|» » **additionalProperties**|ar-sy|
|» » **additionalProperties**|ar-td|
|» » **additionalProperties**|ar-tn|
|» » **additionalProperties**|ar-ye|
|» » **additionalProperties**|as|
|» » **additionalProperties**|asa|
|» » **additionalProperties**|asa-tz|
|» » **additionalProperties**|ast|
|» » **additionalProperties**|ast-es|
|» » **additionalProperties**|as-in|
|» » **additionalProperties**|av|
|» » **additionalProperties**|ay|
|» » **additionalProperties**|az|
|» » **additionalProperties**|az-az|
|» » **additionalProperties**|ba|
|» » **additionalProperties**|bal|
|» » **additionalProperties**|bal-pk|
|» » **additionalProperties**|bas|
|» » **additionalProperties**|bas-cm|
|» » **additionalProperties**|be|
|» » **additionalProperties**|bem|
|» » **additionalProperties**|bem-zm|
|» » **additionalProperties**|bez|
|» » **additionalProperties**|bez-tz|
|» » **additionalProperties**|be-by|
|» » **additionalProperties**|bg|
|» » **additionalProperties**|bgc|
|» » **additionalProperties**|bgc-in|
|» » **additionalProperties**|bg-bg|
|» » **additionalProperties**|bi|
|» » **additionalProperties**|bho|
|» » **additionalProperties**|bho-in|
|» » **additionalProperties**|blo|
|» » **additionalProperties**|blo-bj|
|» » **additionalProperties**|bm|
|» » **additionalProperties**|bm-ml|
|» » **additionalProperties**|bn|
|» » **additionalProperties**|bn-bd|
|» » **additionalProperties**|bn-in|
|» » **additionalProperties**|bo|
|» » **additionalProperties**|bo-cn|
|» » **additionalProperties**|bo-in|
|» » **additionalProperties**|br|
|» » **additionalProperties**|brx|
|» » **additionalProperties**|brx-in|
|» » **additionalProperties**|br-fr|
|» » **additionalProperties**|bs|
|» » **additionalProperties**|bs-ba|
|» » **additionalProperties**|ca|
|» » **additionalProperties**|ca-ad|
|» » **additionalProperties**|ca-es|
|» » **additionalProperties**|ca-fr|
|» » **additionalProperties**|ca-it|
|» » **additionalProperties**|ccp|
|» » **additionalProperties**|ccp-bd|
|» » **additionalProperties**|ccp-in|
|» » **additionalProperties**|ce|
|» » **additionalProperties**|ceb|
|» » **additionalProperties**|ceb-ph|
|» » **additionalProperties**|ce-ru|
|» » **additionalProperties**|ch|
|» » **additionalProperties**|cgg|
|» » **additionalProperties**|cgg-ug|
|» » **additionalProperties**|chr|
|» » **additionalProperties**|chr-us|
|» » **additionalProperties**|ckb|
|» » **additionalProperties**|ckb-iq|
|» » **additionalProperties**|ckb-ir|
|» » **additionalProperties**|co|
|» » **additionalProperties**|cr|
|» » **additionalProperties**|cs|
|» » **additionalProperties**|cs-cz|
|» » **additionalProperties**|csw|
|» » **additionalProperties**|csw-ca|
|» » **additionalProperties**|cu|
|» » **additionalProperties**|cu-ru|
|» » **additionalProperties**|cv|
|» » **additionalProperties**|cv-ru|
|» » **additionalProperties**|cy|
|» » **additionalProperties**|cy-gb|
|» » **additionalProperties**|da|
|» » **additionalProperties**|dav|
|» » **additionalProperties**|dav-ke|
|» » **additionalProperties**|da-dk|
|» » **additionalProperties**|da-gl|
|» » **additionalProperties**|de|
|» » **additionalProperties**|de-at|
|» » **additionalProperties**|de-be|
|» » **additionalProperties**|de-ch|
|» » **additionalProperties**|de-de|
|» » **additionalProperties**|de-gr|
|» » **additionalProperties**|de-it|
|» » **additionalProperties**|de-li|
|» » **additionalProperties**|de-lu|
|» » **additionalProperties**|dje|
|» » **additionalProperties**|dje-ne|
|» » **additionalProperties**|doi|
|» » **additionalProperties**|doi-in|
|» » **additionalProperties**|dsb|
|» » **additionalProperties**|dsb-de|
|» » **additionalProperties**|dua|
|» » **additionalProperties**|dua-cm|
|» » **additionalProperties**|dyo|
|» » **additionalProperties**|dyo-sn|
|» » **additionalProperties**|dv|
|» » **additionalProperties**|dz|
|» » **additionalProperties**|dz-bt|
|» » **additionalProperties**|ebu|
|» » **additionalProperties**|ebu-ke|
|» » **additionalProperties**|ee|
|» » **additionalProperties**|ee-gh|
|» » **additionalProperties**|ee-tg|
|» » **additionalProperties**|el|
|» » **additionalProperties**|el-cy|
|» » **additionalProperties**|el-gr|
|» » **additionalProperties**|en|
|» » **additionalProperties**|en-001|
|» » **additionalProperties**|en-150|
|» » **additionalProperties**|en-ae|
|» » **additionalProperties**|en-ag|
|» » **additionalProperties**|en-ai|
|» » **additionalProperties**|en-as|
|» » **additionalProperties**|en-at|
|» » **additionalProperties**|en-au|
|» » **additionalProperties**|en-bb|
|» » **additionalProperties**|en-be|
|» » **additionalProperties**|en-bi|
|» » **additionalProperties**|en-bm|
|» » **additionalProperties**|en-bs|
|» » **additionalProperties**|en-bw|
|» » **additionalProperties**|en-bz|
|» » **additionalProperties**|en-ca|
|» » **additionalProperties**|en-cc|
|» » **additionalProperties**|en-ch|
|» » **additionalProperties**|en-ck|
|» » **additionalProperties**|en-cm|
|» » **additionalProperties**|en-cn|
|» » **additionalProperties**|en-cx|
|» » **additionalProperties**|en-cy|
|» » **additionalProperties**|en-cz|
|» » **additionalProperties**|en-de|
|» » **additionalProperties**|en-dg|
|» » **additionalProperties**|en-dk|
|» » **additionalProperties**|en-dm|
|» » **additionalProperties**|en-ee|
|» » **additionalProperties**|en-eg|
|» » **additionalProperties**|en-er|
|» » **additionalProperties**|en-es|
|» » **additionalProperties**|en-fi|
|» » **additionalProperties**|en-fj|
|» » **additionalProperties**|en-fk|
|» » **additionalProperties**|en-fm|
|» » **additionalProperties**|en-fr|
|» » **additionalProperties**|en-gb|
|» » **additionalProperties**|en-gd|
|» » **additionalProperties**|en-gg|
|» » **additionalProperties**|en-gh|
|» » **additionalProperties**|en-gi|
|» » **additionalProperties**|en-gm|
|» » **additionalProperties**|en-gs|
|» » **additionalProperties**|en-gu|
|» » **additionalProperties**|en-gy|
|» » **additionalProperties**|en-hk|
|» » **additionalProperties**|en-hu|
|» » **additionalProperties**|en-id|
|» » **additionalProperties**|en-ie|
|» » **additionalProperties**|en-il|
|» » **additionalProperties**|en-im|
|» » **additionalProperties**|en-in|
|» » **additionalProperties**|en-io|
|» » **additionalProperties**|en-it|
|» » **additionalProperties**|en-je|
|» » **additionalProperties**|en-jm|
|» » **additionalProperties**|en-ke|
|» » **additionalProperties**|en-ki|
|» » **additionalProperties**|en-kn|
|» » **additionalProperties**|en-ky|
|» » **additionalProperties**|en-lc|
|» » **additionalProperties**|en-lr|
|» » **additionalProperties**|en-ls|
|» » **additionalProperties**|en-lu|
|» » **additionalProperties**|en-mg|
|» » **additionalProperties**|en-mh|
|» » **additionalProperties**|en-mo|
|» » **additionalProperties**|en-mp|
|» » **additionalProperties**|en-ms|
|» » **additionalProperties**|en-mt|
|» » **additionalProperties**|en-mu|
|» » **additionalProperties**|en-mv|
|» » **additionalProperties**|en-mw|
|» » **additionalProperties**|en-mx|
|» » **additionalProperties**|en-my|
|» » **additionalProperties**|en-na|
|» » **additionalProperties**|en-nf|
|» » **additionalProperties**|en-ng|
|» » **additionalProperties**|en-nl|
|» » **additionalProperties**|en-no|
|» » **additionalProperties**|en-nr|
|» » **additionalProperties**|en-nu|
|» » **additionalProperties**|en-nz|
|» » **additionalProperties**|en-pg|
|» » **additionalProperties**|en-ph|
|» » **additionalProperties**|en-pk|
|» » **additionalProperties**|en-pl|
|» » **additionalProperties**|en-pn|
|» » **additionalProperties**|en-pr|
|» » **additionalProperties**|en-pt|
|» » **additionalProperties**|en-pw|
|» » **additionalProperties**|en-ro|
|» » **additionalProperties**|en-rw|
|» » **additionalProperties**|en-sb|
|» » **additionalProperties**|en-sc|
|» » **additionalProperties**|en-sd|
|» » **additionalProperties**|en-se|
|» » **additionalProperties**|en-sg|
|» » **additionalProperties**|en-sh|
|» » **additionalProperties**|en-si|
|» » **additionalProperties**|en-sk|
|» » **additionalProperties**|en-sl|
|» » **additionalProperties**|en-ss|
|» » **additionalProperties**|en-sx|
|» » **additionalProperties**|en-sz|
|» » **additionalProperties**|en-tc|
|» » **additionalProperties**|en-th|
|» » **additionalProperties**|en-tk|
|» » **additionalProperties**|en-tn|
|» » **additionalProperties**|en-to|
|» » **additionalProperties**|en-tt|
|» » **additionalProperties**|en-tv|
|» » **additionalProperties**|en-tz|
|» » **additionalProperties**|en-ug|
|» » **additionalProperties**|en-um|
|» » **additionalProperties**|en-us|
|» » **additionalProperties**|en-vc|
|» » **additionalProperties**|en-vg|
|» » **additionalProperties**|en-vi|
|» » **additionalProperties**|en-vn|
|» » **additionalProperties**|en-vu|
|» » **additionalProperties**|en-ws|
|» » **additionalProperties**|en-za|
|» » **additionalProperties**|en-zm|
|» » **additionalProperties**|en-zw|
|» » **additionalProperties**|eo|
|» » **additionalProperties**|eo-001|
|» » **additionalProperties**|es|
|» » **additionalProperties**|es-419|
|» » **additionalProperties**|es-ar|
|» » **additionalProperties**|es-bo|
|» » **additionalProperties**|es-br|
|» » **additionalProperties**|es-bz|
|» » **additionalProperties**|es-cl|
|» » **additionalProperties**|es-co|
|» » **additionalProperties**|es-cr|
|» » **additionalProperties**|es-cu|
|» » **additionalProperties**|es-do|
|» » **additionalProperties**|es-ea|
|» » **additionalProperties**|es-ec|
|» » **additionalProperties**|es-es|
|» » **additionalProperties**|es-gq|
|» » **additionalProperties**|es-gt|
|» » **additionalProperties**|es-hn|
|» » **additionalProperties**|es-ic|
|» » **additionalProperties**|es-mx|
|» » **additionalProperties**|es-ni|
|» » **additionalProperties**|es-pa|
|» » **additionalProperties**|es-pe|
|» » **additionalProperties**|es-ph|
|» » **additionalProperties**|es-pr|
|» » **additionalProperties**|es-py|
|» » **additionalProperties**|es-sv|
|» » **additionalProperties**|es-us|
|» » **additionalProperties**|es-uy|
|» » **additionalProperties**|es-ve|
|» » **additionalProperties**|et|
|» » **additionalProperties**|et-ee|
|» » **additionalProperties**|eu|
|» » **additionalProperties**|eu-es|
|» » **additionalProperties**|ewo|
|» » **additionalProperties**|ewo-cm|
|» » **additionalProperties**|fa|
|» » **additionalProperties**|fa-af|
|» » **additionalProperties**|fa-ir|
|» » **additionalProperties**|ff|
|» » **additionalProperties**|ff-bf|
|» » **additionalProperties**|ff-cm|
|» » **additionalProperties**|ff-gh|
|» » **additionalProperties**|ff-gm|
|» » **additionalProperties**|ff-gn|
|» » **additionalProperties**|ff-gw|
|» » **additionalProperties**|ff-lr|
|» » **additionalProperties**|ff-mr|
|» » **additionalProperties**|ff-ne|
|» » **additionalProperties**|ff-ng|
|» » **additionalProperties**|ff-sl|
|» » **additionalProperties**|ff-sn|
|» » **additionalProperties**|fi|
|» » **additionalProperties**|fil|
|» » **additionalProperties**|fil-ph|
|» » **additionalProperties**|fi-fi|
|» » **additionalProperties**|fj|
|» » **additionalProperties**|fo|
|» » **additionalProperties**|fo-dk|
|» » **additionalProperties**|fo-fo|
|» » **additionalProperties**|fr|
|» » **additionalProperties**|frr|
|» » **additionalProperties**|frr-de|
|» » **additionalProperties**|fr-be|
|» » **additionalProperties**|fr-bf|
|» » **additionalProperties**|fr-bi|
|» » **additionalProperties**|fr-bj|
|» » **additionalProperties**|fr-bl|
|» » **additionalProperties**|fr-ca|
|» » **additionalProperties**|fr-cd|
|» » **additionalProperties**|fr-cf|
|» » **additionalProperties**|fr-cg|
|» » **additionalProperties**|fr-ch|
|» » **additionalProperties**|fr-ci|
|» » **additionalProperties**|fr-cm|
|» » **additionalProperties**|fr-dj|
|» » **additionalProperties**|fr-dz|
|» » **additionalProperties**|fr-fr|
|» » **additionalProperties**|fr-ga|
|» » **additionalProperties**|fr-gf|
|» » **additionalProperties**|fr-gn|
|» » **additionalProperties**|fr-gp|
|» » **additionalProperties**|fr-gq|
|» » **additionalProperties**|fr-ht|
|» » **additionalProperties**|fr-km|
|» » **additionalProperties**|fr-lu|
|» » **additionalProperties**|fr-ma|
|» » **additionalProperties**|fr-mc|
|» » **additionalProperties**|fr-mf|
|» » **additionalProperties**|fr-mg|
|» » **additionalProperties**|fr-ml|
|» » **additionalProperties**|fr-mq|
|» » **additionalProperties**|fr-mr|
|» » **additionalProperties**|fr-mu|
|» » **additionalProperties**|fr-nc|
|» » **additionalProperties**|fr-ne|
|» » **additionalProperties**|fr-pf|
|» » **additionalProperties**|fr-pm|
|» » **additionalProperties**|fr-re|
|» » **additionalProperties**|fr-rw|
|» » **additionalProperties**|fr-sc|
|» » **additionalProperties**|fr-sn|
|» » **additionalProperties**|fr-sy|
|» » **additionalProperties**|fr-td|
|» » **additionalProperties**|fr-tg|
|» » **additionalProperties**|fr-tn|
|» » **additionalProperties**|fr-vu|
|» » **additionalProperties**|fr-wf|
|» » **additionalProperties**|fr-yt|
|» » **additionalProperties**|fur|
|» » **additionalProperties**|fur-it|
|» » **additionalProperties**|fy|
|» » **additionalProperties**|fy-nl|
|» » **additionalProperties**|ga|
|» » **additionalProperties**|ga-gb|
|» » **additionalProperties**|ga-ie|
|» » **additionalProperties**|gaa|
|» » **additionalProperties**|gaa-gh|
|» » **additionalProperties**|gd|
|» » **additionalProperties**|gd-gb|
|» » **additionalProperties**|gl|
|» » **additionalProperties**|gl-es|
|» » **additionalProperties**|gn|
|» » **additionalProperties**|gsw|
|» » **additionalProperties**|gsw-ch|
|» » **additionalProperties**|gsw-fr|
|» » **additionalProperties**|gsw-li|
|» » **additionalProperties**|gu|
|» » **additionalProperties**|guz|
|» » **additionalProperties**|guz-ke|
|» » **additionalProperties**|gu-in|
|» » **additionalProperties**|gv|
|» » **additionalProperties**|gv-im|
|» » **additionalProperties**|ha|
|» » **additionalProperties**|haw|
|» » **additionalProperties**|haw-us|
|» » **additionalProperties**|ha-gh|
|» » **additionalProperties**|ha-ne|
|» » **additionalProperties**|ha-ng|
|» » **additionalProperties**|he|
|» » **additionalProperties**|he-il|
|» » **additionalProperties**|hi|
|» » **additionalProperties**|hi-in|
|» » **additionalProperties**|hmn|
|» » **additionalProperties**|ho|
|» » **additionalProperties**|hr|
|» » **additionalProperties**|hr-ba|
|» » **additionalProperties**|hr-hr|
|» » **additionalProperties**|ht|
|» » **additionalProperties**|ht-ht|
|» » **additionalProperties**|hsb|
|» » **additionalProperties**|hsb-de|
|» » **additionalProperties**|hu|
|» » **additionalProperties**|hu-hu|
|» » **additionalProperties**|hy|
|» » **additionalProperties**|hy-am|
|» » **additionalProperties**|hz|
|» » **additionalProperties**|ia|
|» » **additionalProperties**|ia-001|
|» » **additionalProperties**|id|
|» » **additionalProperties**|ie|
|» » **additionalProperties**|ie-ee|
|» » **additionalProperties**|ig|
|» » **additionalProperties**|ig-ng|
|» » **additionalProperties**|ii|
|» » **additionalProperties**|ii-cn|
|» » **additionalProperties**|ik|
|» » **additionalProperties**|io|
|» » **additionalProperties**|id-id|
|» » **additionalProperties**|is|
|» » **additionalProperties**|is-is|
|» » **additionalProperties**|it|
|» » **additionalProperties**|it-ch|
|» » **additionalProperties**|it-it|
|» » **additionalProperties**|it-sm|
|» » **additionalProperties**|it-va|
|» » **additionalProperties**|iu|
|» » **additionalProperties**|ja|
|» » **additionalProperties**|ja-jp|
|» » **additionalProperties**|jgo|
|» » **additionalProperties**|jgo-cm|
|» » **additionalProperties**|yi|
|» » **additionalProperties**|yi-001|
|» » **additionalProperties**|jmc|
|» » **additionalProperties**|jmc-tz|
|» » **additionalProperties**|jv|
|» » **additionalProperties**|jv-id|
|» » **additionalProperties**|ka|
|» » **additionalProperties**|kab|
|» » **additionalProperties**|kab-dz|
|» » **additionalProperties**|kam|
|» » **additionalProperties**|kam-ke|
|» » **additionalProperties**|kar|
|» » **additionalProperties**|ka-ge|
|» » **additionalProperties**|kde|
|» » **additionalProperties**|kde-tz|
|» » **additionalProperties**|kea|
|» » **additionalProperties**|kea-cv|
|» » **additionalProperties**|kgp|
|» » **additionalProperties**|kgp-br|
|» » **additionalProperties**|kg|
|» » **additionalProperties**|kh|
|» » **additionalProperties**|khq|
|» » **additionalProperties**|khq-ml|
|» » **additionalProperties**|ki|
|» » **additionalProperties**|ki-ke|
|» » **additionalProperties**|kj|
|» » **additionalProperties**|kk|
|» » **additionalProperties**|kkj|
|» » **additionalProperties**|kkj-cm|
|» » **additionalProperties**|kk-kz|
|» » **additionalProperties**|kl|
|» » **additionalProperties**|kln|
|» » **additionalProperties**|kln-ke|
|» » **additionalProperties**|kl-gl|
|» » **additionalProperties**|km|
|» » **additionalProperties**|km-kh|
|» » **additionalProperties**|kn|
|» » **additionalProperties**|kn-in|
|» » **additionalProperties**|ko|
|» » **additionalProperties**|ko-cn|
|» » **additionalProperties**|kok|
|» » **additionalProperties**|kok-in|
|» » **additionalProperties**|ko-kp|
|» » **additionalProperties**|ko-kr|
|» » **additionalProperties**|kr|
|» » **additionalProperties**|ks|
|» » **additionalProperties**|ksb|
|» » **additionalProperties**|ksb-tz|
|» » **additionalProperties**|ksf|
|» » **additionalProperties**|ksf-cm|
|» » **additionalProperties**|ksh|
|» » **additionalProperties**|ksh-de|
|» » **additionalProperties**|ks-in|
|» » **additionalProperties**|ku|
|» » **additionalProperties**|ku-tr|
|» » **additionalProperties**|kv|
|» » **additionalProperties**|kw|
|» » **additionalProperties**|kw-gb|
|» » **additionalProperties**|kxv|
|» » **additionalProperties**|kxv-in|
|» » **additionalProperties**|ky|
|» » **additionalProperties**|ky-kg|
|» » **additionalProperties**|lag|
|» » **additionalProperties**|lag-tz|
|» » **additionalProperties**|la|
|» » **additionalProperties**|lb|
|» » **additionalProperties**|lb-lu|
|» » **additionalProperties**|lg|
|» » **additionalProperties**|lg-ug|
|» » **additionalProperties**|lkt|
|» » **additionalProperties**|lkt-us|
|» » **additionalProperties**|li|
|» » **additionalProperties**|lij|
|» » **additionalProperties**|lij-it|
|» » **additionalProperties**|lmo|
|» » **additionalProperties**|lmo-it|
|» » **additionalProperties**|ln|
|» » **additionalProperties**|ln-ao|
|» » **additionalProperties**|ln-cd|
|» » **additionalProperties**|ln-cf|
|» » **additionalProperties**|ln-cg|
|» » **additionalProperties**|lo|
|» » **additionalProperties**|lo-la|
|» » **additionalProperties**|lrc|
|» » **additionalProperties**|lrc-iq|
|» » **additionalProperties**|lrc-ir|
|» » **additionalProperties**|lt|
|» » **additionalProperties**|lt-lt|
|» » **additionalProperties**|lu|
|» » **additionalProperties**|luo|
|» » **additionalProperties**|luo-ke|
|» » **additionalProperties**|luy|
|» » **additionalProperties**|luy-ke|
|» » **additionalProperties**|lu-cd|
|» » **additionalProperties**|lv|
|» » **additionalProperties**|lv-lv|
|» » **additionalProperties**|mai|
|» » **additionalProperties**|mai-in|
|» » **additionalProperties**|mas|
|» » **additionalProperties**|mas-ke|
|» » **additionalProperties**|mas-tz|
|» » **additionalProperties**|mdf|
|» » **additionalProperties**|mdf-ru|
|» » **additionalProperties**|mer|
|» » **additionalProperties**|mer-ke|
|» » **additionalProperties**|mfe|
|» » **additionalProperties**|mfe-mu|
|» » **additionalProperties**|mg|
|» » **additionalProperties**|mgh|
|» » **additionalProperties**|mgh-mz|
|» » **additionalProperties**|mgo|
|» » **additionalProperties**|mgo-cm|
|» » **additionalProperties**|mg-mg|
|» » **additionalProperties**|mh|
|» » **additionalProperties**|mi|
|» » **additionalProperties**|mi-nz|
|» » **additionalProperties**|mk|
|» » **additionalProperties**|mk-mk|
|» » **additionalProperties**|ml|
|» » **additionalProperties**|ml-in|
|» » **additionalProperties**|mn|
|» » **additionalProperties**|mni|
|» » **additionalProperties**|mni-in|
|» » **additionalProperties**|mn-mn|
|» » **additionalProperties**|mr|
|» » **additionalProperties**|mr-in|
|» » **additionalProperties**|ms|
|» » **additionalProperties**|ms-bn|
|» » **additionalProperties**|ms-id|
|» » **additionalProperties**|ms-my|
|» » **additionalProperties**|ms-sg|
|» » **additionalProperties**|mt|
|» » **additionalProperties**|mt-mt|
|» » **additionalProperties**|mua|
|» » **additionalProperties**|mua-cm|
|» » **additionalProperties**|my|
|» » **additionalProperties**|my-mm|
|» » **additionalProperties**|mzn|
|» » **additionalProperties**|mzn-ir|
|» » **additionalProperties**|naq|
|» » **additionalProperties**|naq-na|
|» » **additionalProperties**|na|
|» » **additionalProperties**|nb|
|» » **additionalProperties**|nb-no|
|» » **additionalProperties**|nb-sj|
|» » **additionalProperties**|nd|
|» » **additionalProperties**|nds|
|» » **additionalProperties**|nds-de|
|» » **additionalProperties**|nds-nl|
|» » **additionalProperties**|nd-zw|
|» » **additionalProperties**|ne|
|» » **additionalProperties**|ne-in|
|» » **additionalProperties**|ne-np|
|» » **additionalProperties**|ng|
|» » **additionalProperties**|nl|
|» » **additionalProperties**|nl-aw|
|» » **additionalProperties**|nl-be|
|» » **additionalProperties**|nl-bq|
|» » **additionalProperties**|nl-ch|
|» » **additionalProperties**|nl-cw|
|» » **additionalProperties**|nl-lu|
|» » **additionalProperties**|nl-nl|
|» » **additionalProperties**|nl-sr|
|» » **additionalProperties**|nl-sx|
|» » **additionalProperties**|nmg|
|» » **additionalProperties**|nmg-cm|
|» » **additionalProperties**|nn|
|» » **additionalProperties**|nnh|
|» » **additionalProperties**|nnh-cm|
|» » **additionalProperties**|nn-no|
|» » **additionalProperties**|nqo|
|» » **additionalProperties**|nqo-gn|
|» » **additionalProperties**|nr|
|» » **additionalProperties**|nso|
|» » **additionalProperties**|nso-za|
|» » **additionalProperties**|nv|
|» » **additionalProperties**|ny|
|» » **additionalProperties**|no|
|» » **additionalProperties**|no-no|
|» » **additionalProperties**|nus|
|» » **additionalProperties**|nus-ss|
|» » **additionalProperties**|nyn|
|» » **additionalProperties**|nyn-ug|
|» » **additionalProperties**|oc|
|» » **additionalProperties**|oc-es|
|» » **additionalProperties**|oc-fr|
|» » **additionalProperties**|oj|
|» » **additionalProperties**|om|
|» » **additionalProperties**|om-et|
|» » **additionalProperties**|om-ke|
|» » **additionalProperties**|or|
|» » **additionalProperties**|or-in|
|» » **additionalProperties**|os|
|» » **additionalProperties**|os-ge|
|» » **additionalProperties**|os-ru|
|» » **additionalProperties**|pa|
|» » **additionalProperties**|pa-in|
|» » **additionalProperties**|pa-pk|
|» » **additionalProperties**|pcm|
|» » **additionalProperties**|pcm-ng|
|» » **additionalProperties**|pis|
|» » **additionalProperties**|pis-sb|
|» » **additionalProperties**|pi|
|» » **additionalProperties**|pl|
|» » **additionalProperties**|pl-pl|
|» » **additionalProperties**|prg|
|» » **additionalProperties**|prg-001|
|» » **additionalProperties**|ps|
|» » **additionalProperties**|ps-af|
|» » **additionalProperties**|ps-pk|
|» » **additionalProperties**|pt|
|» » **additionalProperties**|pt-ao|
|» » **additionalProperties**|pt-br|
|» » **additionalProperties**|pt-ch|
|» » **additionalProperties**|pt-cv|
|» » **additionalProperties**|pt-gq|
|» » **additionalProperties**|pt-gw|
|» » **additionalProperties**|pt-lu|
|» » **additionalProperties**|pt-mo|
|» » **additionalProperties**|pt-mz|
|» » **additionalProperties**|pt-pt|
|» » **additionalProperties**|pt-st|
|» » **additionalProperties**|pt-tl|
|» » **additionalProperties**|qu|
|» » **additionalProperties**|qu-bo|
|» » **additionalProperties**|qu-ec|
|» » **additionalProperties**|qu-pe|
|» » **additionalProperties**|raj|
|» » **additionalProperties**|raj-in|
|» » **additionalProperties**|rm|
|» » **additionalProperties**|rm-ch|
|» » **additionalProperties**|rn|
|» » **additionalProperties**|rn-bi|
|» » **additionalProperties**|ro|
|» » **additionalProperties**|rof|
|» » **additionalProperties**|rof-tz|
|» » **additionalProperties**|ro-md|
|» » **additionalProperties**|ro-ro|
|» » **additionalProperties**|ru|
|» » **additionalProperties**|ru-by|
|» » **additionalProperties**|ru-kg|
|» » **additionalProperties**|ru-kz|
|» » **additionalProperties**|ru-md|
|» » **additionalProperties**|ru-ru|
|» » **additionalProperties**|ru-ua|
|» » **additionalProperties**|rw|
|» » **additionalProperties**|rwk|
|» » **additionalProperties**|rwk-tz|
|» » **additionalProperties**|rw-rw|
|» » **additionalProperties**|sa|
|» » **additionalProperties**|sah|
|» » **additionalProperties**|sah-ru|
|» » **additionalProperties**|saq|
|» » **additionalProperties**|saq-ke|
|» » **additionalProperties**|sat|
|» » **additionalProperties**|sat-in|
|» » **additionalProperties**|sa-in|
|» » **additionalProperties**|sbp|
|» » **additionalProperties**|sbp-tz|
|» » **additionalProperties**|sc|
|» » **additionalProperties**|sc-it|
|» » **additionalProperties**|sd|
|» » **additionalProperties**|sd-in|
|» » **additionalProperties**|sd-pk|
|» » **additionalProperties**|se|
|» » **additionalProperties**|seh|
|» » **additionalProperties**|seh-mz|
|» » **additionalProperties**|ses|
|» » **additionalProperties**|ses-ml|
|» » **additionalProperties**|se-fi|
|» » **additionalProperties**|se-no|
|» » **additionalProperties**|se-se|
|» » **additionalProperties**|sg|
|» » **additionalProperties**|sg-cf|
|» » **additionalProperties**|shi|
|» » **additionalProperties**|shi-ma|
|» » **additionalProperties**|si|
|» » **additionalProperties**|si-lk|
|» » **additionalProperties**|sk|
|» » **additionalProperties**|sk-sk|
|» » **additionalProperties**|sl|
|» » **additionalProperties**|sl-si|
|» » **additionalProperties**|sm|
|» » **additionalProperties**|smn|
|» » **additionalProperties**|smn-fi|
|» » **additionalProperties**|sms|
|» » **additionalProperties**|sms-fi|
|» » **additionalProperties**|sn|
|» » **additionalProperties**|sn-zw|
|» » **additionalProperties**|so|
|» » **additionalProperties**|so-dj|
|» » **additionalProperties**|so-et|
|» » **additionalProperties**|so-ke|
|» » **additionalProperties**|so-so|
|» » **additionalProperties**|sq|
|» » **additionalProperties**|sq-al|
|» » **additionalProperties**|sq-mk|
|» » **additionalProperties**|sq-xk|
|» » **additionalProperties**|sr|
|» » **additionalProperties**|sr-ba|
|» » **additionalProperties**|sr-cs|
|» » **additionalProperties**|sr-me|
|» » **additionalProperties**|sr-rs|
|» » **additionalProperties**|sr-xk|
|» » **additionalProperties**|ss|
|» » **additionalProperties**|st|
|» » **additionalProperties**|st-ls|
|» » **additionalProperties**|st-za|
|» » **additionalProperties**|su|
|» » **additionalProperties**|su-id|
|» » **additionalProperties**|sv|
|» » **additionalProperties**|sv-ax|
|» » **additionalProperties**|sv-fi|
|» » **additionalProperties**|sv-se|
|» » **additionalProperties**|sw|
|» » **additionalProperties**|sw-cd|
|» » **additionalProperties**|sw-ke|
|» » **additionalProperties**|sw-tz|
|» » **additionalProperties**|sw-ug|
|» » **additionalProperties**|sy|
|» » **additionalProperties**|syr|
|» » **additionalProperties**|syr-iq|
|» » **additionalProperties**|syr-sy|
|» » **additionalProperties**|szl|
|» » **additionalProperties**|szl-pl|
|» » **additionalProperties**|ta|
|» » **additionalProperties**|ta-in|
|» » **additionalProperties**|ta-lk|
|» » **additionalProperties**|ta-my|
|» » **additionalProperties**|ta-sg|
|» » **additionalProperties**|te|
|» » **additionalProperties**|teo|
|» » **additionalProperties**|teo-ke|
|» » **additionalProperties**|teo-ug|
|» » **additionalProperties**|te-in|
|» » **additionalProperties**|tg|
|» » **additionalProperties**|tg-tj|
|» » **additionalProperties**|th|
|» » **additionalProperties**|th-th|
|» » **additionalProperties**|ti|
|» » **additionalProperties**|ti-er|
|» » **additionalProperties**|ti-et|
|» » **additionalProperties**|tk|
|» » **additionalProperties**|tk-tm|
|» » **additionalProperties**|tl|
|» » **additionalProperties**|tn|
|» » **additionalProperties**|tn-bw|
|» » **additionalProperties**|tn-za|
|» » **additionalProperties**|to|
|» » **additionalProperties**|tok|
|» » **additionalProperties**|tok-001|
|» » **additionalProperties**|to-to|
|» » **additionalProperties**|ts|
|» » **additionalProperties**|tr|
|» » **additionalProperties**|tr-cy|
|» » **additionalProperties**|tr-tr|
|» » **additionalProperties**|tt|
|» » **additionalProperties**|tt-ru|
|» » **additionalProperties**|tw|
|» » **additionalProperties**|ty|
|» » **additionalProperties**|twq|
|» » **additionalProperties**|twq-ne|
|» » **additionalProperties**|tzm|
|» » **additionalProperties**|tzm-ma|
|» » **additionalProperties**|ug|
|» » **additionalProperties**|ug-cn|
|» » **additionalProperties**|uk|
|» » **additionalProperties**|uk-ua|
|» » **additionalProperties**|ur|
|» » **additionalProperties**|ur-in|
|» » **additionalProperties**|ur-pk|
|» » **additionalProperties**|uz|
|» » **additionalProperties**|uz-af|
|» » **additionalProperties**|uz-uz|
|» » **additionalProperties**|vai|
|» » **additionalProperties**|vai-lr|
|» » **additionalProperties**|ve|
|» » **additionalProperties**|vec|
|» » **additionalProperties**|vec-it|
|» » **additionalProperties**|vi|
|» » **additionalProperties**|vi-vn|
|» » **additionalProperties**|vmw|
|» » **additionalProperties**|vmw-mz|
|» » **additionalProperties**|vo|
|» » **additionalProperties**|vo-001|
|» » **additionalProperties**|vun|
|» » **additionalProperties**|vun-tz|
|» » **additionalProperties**|wa|
|» » **additionalProperties**|wae|
|» » **additionalProperties**|wae-ch|
|» » **additionalProperties**|wo|
|» » **additionalProperties**|wo-sn|
|» » **additionalProperties**|xh|
|» » **additionalProperties**|xh-za|
|» » **additionalProperties**|xnr|
|» » **additionalProperties**|xnr-in|
|» » **additionalProperties**|xog|
|» » **additionalProperties**|xog-ug|
|» » **additionalProperties**|yav|
|» » **additionalProperties**|yav-cm|
|» » **additionalProperties**|yi-ua|
|» » **additionalProperties**|yo|
|» » **additionalProperties**|yo-bj|
|» » **additionalProperties**|yo-ng|
|» » **additionalProperties**|yrl|
|» » **additionalProperties**|yrl-br|
|» » **additionalProperties**|yrl-co|
|» » **additionalProperties**|yrl-ve|
|» » **additionalProperties**|yue|
|» » **additionalProperties**|yue-cn|
|» » **additionalProperties**|yue-hk|
|» » **additionalProperties**|yue-mo|
|» » **additionalProperties**|zgh|
|» » **additionalProperties**|zgh-ma|
|» » **additionalProperties**|za|
|» » **additionalProperties**|za-cn|
|» » **additionalProperties**|zh|
|» » **additionalProperties**|zh-cn|
|» » **additionalProperties**|zh-hans|
|» » **additionalProperties**|zh-hant|
|» » **additionalProperties**|zh-hk|
|» » **additionalProperties**|zh-mo|
|» » **additionalProperties**|zh-my|
|» » **additionalProperties**|zh-sg|
|» » **additionalProperties**|zh-tw|
|» » **additionalProperties**|zu|
|» » **additionalProperties**|zu-za|

> Example responses

> default Response

```json
null
```

<h3 id="update-languages-of-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Add a website page to a multi-language group

<a id="opIdpost-/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group_attachToLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/multi-language/attach-to-lang-group`

Attach a site page to a multi-language group.

> Body parameter

```json
null
```

<h3 id="add-a-website-page-to-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttachToLangPrimaryRequestVNext](#schemaattachtolangprimaryrequestvnext)|true|none|
|» id|body|string|true|ID of the object to add to a multi-language group.|
|» language|body|string|true|Designated language of the object to add to a multi-language group.|
|» primaryId|body|string|true|ID of primary language object in multi-language group.|
|» primaryLanguage|body|string|false|Primary language of the multi-language group.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|
|» primaryLanguage|aa|
|» primaryLanguage|ab|
|» primaryLanguage|ae|
|» primaryLanguage|af|
|» primaryLanguage|af-na|
|» primaryLanguage|af-za|
|» primaryLanguage|agq|
|» primaryLanguage|agq-cm|
|» primaryLanguage|ak|
|» primaryLanguage|ak-gh|
|» primaryLanguage|am|
|» primaryLanguage|am-et|
|» primaryLanguage|an|
|» primaryLanguage|ann|
|» primaryLanguage|ann-ng|
|» primaryLanguage|ar|
|» primaryLanguage|ar-001|
|» primaryLanguage|ar-ae|
|» primaryLanguage|ar-bh|
|» primaryLanguage|ar-dj|
|» primaryLanguage|ar-dz|
|» primaryLanguage|ar-eg|
|» primaryLanguage|ar-eh|
|» primaryLanguage|ar-er|
|» primaryLanguage|ar-il|
|» primaryLanguage|ar-iq|
|» primaryLanguage|ar-jo|
|» primaryLanguage|ar-km|
|» primaryLanguage|ar-kw|
|» primaryLanguage|ar-lb|
|» primaryLanguage|ar-ly|
|» primaryLanguage|ar-ma|
|» primaryLanguage|ar-mr|
|» primaryLanguage|ar-om|
|» primaryLanguage|ar-ps|
|» primaryLanguage|ar-qa|
|» primaryLanguage|ar-sa|
|» primaryLanguage|ar-sd|
|» primaryLanguage|ar-so|
|» primaryLanguage|ar-ss|
|» primaryLanguage|ar-sy|
|» primaryLanguage|ar-td|
|» primaryLanguage|ar-tn|
|» primaryLanguage|ar-ye|
|» primaryLanguage|as|
|» primaryLanguage|as-in|
|» primaryLanguage|asa|
|» primaryLanguage|asa-tz|
|» primaryLanguage|ast|
|» primaryLanguage|ast-es|
|» primaryLanguage|av|
|» primaryLanguage|ay|
|» primaryLanguage|az|
|» primaryLanguage|az-az|
|» primaryLanguage|ba|
|» primaryLanguage|bal|
|» primaryLanguage|bal-pk|
|» primaryLanguage|bas|
|» primaryLanguage|bas-cm|
|» primaryLanguage|be|
|» primaryLanguage|be-by|
|» primaryLanguage|bem|
|» primaryLanguage|bem-zm|
|» primaryLanguage|bez|
|» primaryLanguage|bez-tz|
|» primaryLanguage|bg|
|» primaryLanguage|bg-bg|
|» primaryLanguage|bgc|
|» primaryLanguage|bgc-in|
|» primaryLanguage|bho|
|» primaryLanguage|bho-in|
|» primaryLanguage|bi|
|» primaryLanguage|blo|
|» primaryLanguage|blo-bj|
|» primaryLanguage|bm|
|» primaryLanguage|bm-ml|
|» primaryLanguage|bn|
|» primaryLanguage|bn-bd|
|» primaryLanguage|bn-in|
|» primaryLanguage|bo|
|» primaryLanguage|bo-cn|
|» primaryLanguage|bo-in|
|» primaryLanguage|br|
|» primaryLanguage|br-fr|
|» primaryLanguage|brx|
|» primaryLanguage|brx-in|
|» primaryLanguage|bs|
|» primaryLanguage|bs-ba|
|» primaryLanguage|ca|
|» primaryLanguage|ca-ad|
|» primaryLanguage|ca-es|
|» primaryLanguage|ca-fr|
|» primaryLanguage|ca-it|
|» primaryLanguage|ccp|
|» primaryLanguage|ccp-bd|
|» primaryLanguage|ccp-in|
|» primaryLanguage|ce|
|» primaryLanguage|ce-ru|
|» primaryLanguage|ceb|
|» primaryLanguage|ceb-ph|
|» primaryLanguage|cgg|
|» primaryLanguage|cgg-ug|
|» primaryLanguage|ch|
|» primaryLanguage|chr|
|» primaryLanguage|chr-us|
|» primaryLanguage|ckb|
|» primaryLanguage|ckb-iq|
|» primaryLanguage|ckb-ir|
|» primaryLanguage|co|
|» primaryLanguage|cr|
|» primaryLanguage|cs|
|» primaryLanguage|cs-cz|
|» primaryLanguage|csw|
|» primaryLanguage|csw-ca|
|» primaryLanguage|cu|
|» primaryLanguage|cu-ru|
|» primaryLanguage|cv|
|» primaryLanguage|cv-ru|
|» primaryLanguage|cy|
|» primaryLanguage|cy-gb|
|» primaryLanguage|da|
|» primaryLanguage|da-dk|
|» primaryLanguage|da-gl|
|» primaryLanguage|dav|
|» primaryLanguage|dav-ke|
|» primaryLanguage|de|
|» primaryLanguage|de-at|
|» primaryLanguage|de-be|
|» primaryLanguage|de-ch|
|» primaryLanguage|de-de|
|» primaryLanguage|de-gr|
|» primaryLanguage|de-it|
|» primaryLanguage|de-li|
|» primaryLanguage|de-lu|
|» primaryLanguage|dje|
|» primaryLanguage|dje-ne|
|» primaryLanguage|doi|
|» primaryLanguage|doi-in|
|» primaryLanguage|dsb|
|» primaryLanguage|dsb-de|
|» primaryLanguage|dua|
|» primaryLanguage|dua-cm|
|» primaryLanguage|dv|
|» primaryLanguage|dyo|
|» primaryLanguage|dyo-sn|
|» primaryLanguage|dz|
|» primaryLanguage|dz-bt|
|» primaryLanguage|ebu|
|» primaryLanguage|ebu-ke|
|» primaryLanguage|ee|
|» primaryLanguage|ee-gh|
|» primaryLanguage|ee-tg|
|» primaryLanguage|el|
|» primaryLanguage|el-cy|
|» primaryLanguage|el-gr|
|» primaryLanguage|en|
|» primaryLanguage|en-001|
|» primaryLanguage|en-150|
|» primaryLanguage|en-ae|
|» primaryLanguage|en-ag|
|» primaryLanguage|en-ai|
|» primaryLanguage|en-as|
|» primaryLanguage|en-at|
|» primaryLanguage|en-au|
|» primaryLanguage|en-bb|
|» primaryLanguage|en-be|
|» primaryLanguage|en-bi|
|» primaryLanguage|en-bm|
|» primaryLanguage|en-bs|
|» primaryLanguage|en-bw|
|» primaryLanguage|en-bz|
|» primaryLanguage|en-ca|
|» primaryLanguage|en-cc|
|» primaryLanguage|en-ch|
|» primaryLanguage|en-ck|
|» primaryLanguage|en-cm|
|» primaryLanguage|en-cn|
|» primaryLanguage|en-cx|
|» primaryLanguage|en-cy|
|» primaryLanguage|en-cz|
|» primaryLanguage|en-de|
|» primaryLanguage|en-dg|
|» primaryLanguage|en-dk|
|» primaryLanguage|en-dm|
|» primaryLanguage|en-ee|
|» primaryLanguage|en-eg|
|» primaryLanguage|en-er|
|» primaryLanguage|en-es|
|» primaryLanguage|en-fi|
|» primaryLanguage|en-fj|
|» primaryLanguage|en-fk|
|» primaryLanguage|en-fm|
|» primaryLanguage|en-fr|
|» primaryLanguage|en-gb|
|» primaryLanguage|en-gd|
|» primaryLanguage|en-gg|
|» primaryLanguage|en-gh|
|» primaryLanguage|en-gi|
|» primaryLanguage|en-gm|
|» primaryLanguage|en-gs|
|» primaryLanguage|en-gu|
|» primaryLanguage|en-gy|
|» primaryLanguage|en-hk|
|» primaryLanguage|en-hu|
|» primaryLanguage|en-id|
|» primaryLanguage|en-ie|
|» primaryLanguage|en-il|
|» primaryLanguage|en-im|
|» primaryLanguage|en-in|
|» primaryLanguage|en-io|
|» primaryLanguage|en-it|
|» primaryLanguage|en-je|
|» primaryLanguage|en-jm|
|» primaryLanguage|en-ke|
|» primaryLanguage|en-ki|
|» primaryLanguage|en-kn|
|» primaryLanguage|en-ky|
|» primaryLanguage|en-lc|
|» primaryLanguage|en-lr|
|» primaryLanguage|en-ls|
|» primaryLanguage|en-lu|
|» primaryLanguage|en-mg|
|» primaryLanguage|en-mh|
|» primaryLanguage|en-mo|
|» primaryLanguage|en-mp|
|» primaryLanguage|en-ms|
|» primaryLanguage|en-mt|
|» primaryLanguage|en-mu|
|» primaryLanguage|en-mv|
|» primaryLanguage|en-mw|
|» primaryLanguage|en-mx|
|» primaryLanguage|en-my|
|» primaryLanguage|en-na|
|» primaryLanguage|en-nf|
|» primaryLanguage|en-ng|
|» primaryLanguage|en-nl|
|» primaryLanguage|en-no|
|» primaryLanguage|en-nr|
|» primaryLanguage|en-nu|
|» primaryLanguage|en-nz|
|» primaryLanguage|en-pg|
|» primaryLanguage|en-ph|
|» primaryLanguage|en-pk|
|» primaryLanguage|en-pl|
|» primaryLanguage|en-pn|
|» primaryLanguage|en-pr|
|» primaryLanguage|en-pt|
|» primaryLanguage|en-pw|
|» primaryLanguage|en-ro|
|» primaryLanguage|en-rw|
|» primaryLanguage|en-sb|
|» primaryLanguage|en-sc|
|» primaryLanguage|en-sd|
|» primaryLanguage|en-se|
|» primaryLanguage|en-sg|
|» primaryLanguage|en-sh|
|» primaryLanguage|en-si|
|» primaryLanguage|en-sk|
|» primaryLanguage|en-sl|
|» primaryLanguage|en-ss|
|» primaryLanguage|en-sx|
|» primaryLanguage|en-sz|
|» primaryLanguage|en-tc|
|» primaryLanguage|en-th|
|» primaryLanguage|en-tk|
|» primaryLanguage|en-tn|
|» primaryLanguage|en-to|
|» primaryLanguage|en-tt|
|» primaryLanguage|en-tv|
|» primaryLanguage|en-tz|
|» primaryLanguage|en-ug|
|» primaryLanguage|en-um|
|» primaryLanguage|en-us|
|» primaryLanguage|en-vc|
|» primaryLanguage|en-vg|
|» primaryLanguage|en-vi|
|» primaryLanguage|en-vn|
|» primaryLanguage|en-vu|
|» primaryLanguage|en-ws|
|» primaryLanguage|en-za|
|» primaryLanguage|en-zm|
|» primaryLanguage|en-zw|
|» primaryLanguage|eo|
|» primaryLanguage|eo-001|
|» primaryLanguage|es|
|» primaryLanguage|es-419|
|» primaryLanguage|es-ar|
|» primaryLanguage|es-bo|
|» primaryLanguage|es-br|
|» primaryLanguage|es-bz|
|» primaryLanguage|es-cl|
|» primaryLanguage|es-co|
|» primaryLanguage|es-cr|
|» primaryLanguage|es-cu|
|» primaryLanguage|es-do|
|» primaryLanguage|es-ea|
|» primaryLanguage|es-ec|
|» primaryLanguage|es-es|
|» primaryLanguage|es-gq|
|» primaryLanguage|es-gt|
|» primaryLanguage|es-hn|
|» primaryLanguage|es-ic|
|» primaryLanguage|es-mx|
|» primaryLanguage|es-ni|
|» primaryLanguage|es-pa|
|» primaryLanguage|es-pe|
|» primaryLanguage|es-ph|
|» primaryLanguage|es-pr|
|» primaryLanguage|es-py|
|» primaryLanguage|es-sv|
|» primaryLanguage|es-us|
|» primaryLanguage|es-uy|
|» primaryLanguage|es-ve|
|» primaryLanguage|et|
|» primaryLanguage|et-ee|
|» primaryLanguage|eu|
|» primaryLanguage|eu-es|
|» primaryLanguage|ewo|
|» primaryLanguage|ewo-cm|
|» primaryLanguage|fa|
|» primaryLanguage|fa-af|
|» primaryLanguage|fa-ir|
|» primaryLanguage|ff|
|» primaryLanguage|ff-bf|
|» primaryLanguage|ff-cm|
|» primaryLanguage|ff-gh|
|» primaryLanguage|ff-gm|
|» primaryLanguage|ff-gn|
|» primaryLanguage|ff-gw|
|» primaryLanguage|ff-lr|
|» primaryLanguage|ff-mr|
|» primaryLanguage|ff-ne|
|» primaryLanguage|ff-ng|
|» primaryLanguage|ff-sl|
|» primaryLanguage|ff-sn|
|» primaryLanguage|fi|
|» primaryLanguage|fi-fi|
|» primaryLanguage|fil|
|» primaryLanguage|fil-ph|
|» primaryLanguage|fj|
|» primaryLanguage|fo|
|» primaryLanguage|fo-dk|
|» primaryLanguage|fo-fo|
|» primaryLanguage|fr|
|» primaryLanguage|fr-be|
|» primaryLanguage|fr-bf|
|» primaryLanguage|fr-bi|
|» primaryLanguage|fr-bj|
|» primaryLanguage|fr-bl|
|» primaryLanguage|fr-ca|
|» primaryLanguage|fr-cd|
|» primaryLanguage|fr-cf|
|» primaryLanguage|fr-cg|
|» primaryLanguage|fr-ch|
|» primaryLanguage|fr-ci|
|» primaryLanguage|fr-cm|
|» primaryLanguage|fr-dj|
|» primaryLanguage|fr-dz|
|» primaryLanguage|fr-fr|
|» primaryLanguage|fr-ga|
|» primaryLanguage|fr-gf|
|» primaryLanguage|fr-gn|
|» primaryLanguage|fr-gp|
|» primaryLanguage|fr-gq|
|» primaryLanguage|fr-ht|
|» primaryLanguage|fr-km|
|» primaryLanguage|fr-lu|
|» primaryLanguage|fr-ma|
|» primaryLanguage|fr-mc|
|» primaryLanguage|fr-mf|
|» primaryLanguage|fr-mg|
|» primaryLanguage|fr-ml|
|» primaryLanguage|fr-mq|
|» primaryLanguage|fr-mr|
|» primaryLanguage|fr-mu|
|» primaryLanguage|fr-nc|
|» primaryLanguage|fr-ne|
|» primaryLanguage|fr-pf|
|» primaryLanguage|fr-pm|
|» primaryLanguage|fr-re|
|» primaryLanguage|fr-rw|
|» primaryLanguage|fr-sc|
|» primaryLanguage|fr-sn|
|» primaryLanguage|fr-sy|
|» primaryLanguage|fr-td|
|» primaryLanguage|fr-tg|
|» primaryLanguage|fr-tn|
|» primaryLanguage|fr-vu|
|» primaryLanguage|fr-wf|
|» primaryLanguage|fr-yt|
|» primaryLanguage|frr|
|» primaryLanguage|frr-de|
|» primaryLanguage|fur|
|» primaryLanguage|fur-it|
|» primaryLanguage|fy|
|» primaryLanguage|fy-nl|
|» primaryLanguage|ga|
|» primaryLanguage|ga-gb|
|» primaryLanguage|ga-ie|
|» primaryLanguage|gaa|
|» primaryLanguage|gaa-gh|
|» primaryLanguage|gd|
|» primaryLanguage|gd-gb|
|» primaryLanguage|gl|
|» primaryLanguage|gl-es|
|» primaryLanguage|gn|
|» primaryLanguage|gsw|
|» primaryLanguage|gsw-ch|
|» primaryLanguage|gsw-fr|
|» primaryLanguage|gsw-li|
|» primaryLanguage|gu|
|» primaryLanguage|gu-in|
|» primaryLanguage|guz|
|» primaryLanguage|guz-ke|
|» primaryLanguage|gv|
|» primaryLanguage|gv-im|
|» primaryLanguage|ha|
|» primaryLanguage|ha-gh|
|» primaryLanguage|ha-ne|
|» primaryLanguage|ha-ng|
|» primaryLanguage|haw|
|» primaryLanguage|haw-us|
|» primaryLanguage|he|
|» primaryLanguage|he-il|
|» primaryLanguage|hi|
|» primaryLanguage|hi-in|
|» primaryLanguage|hmn|
|» primaryLanguage|ho|
|» primaryLanguage|hr|
|» primaryLanguage|hr-ba|
|» primaryLanguage|hr-hr|
|» primaryLanguage|hsb|
|» primaryLanguage|hsb-de|
|» primaryLanguage|ht|
|» primaryLanguage|ht-ht|
|» primaryLanguage|hu|
|» primaryLanguage|hu-hu|
|» primaryLanguage|hy|
|» primaryLanguage|hy-am|
|» primaryLanguage|hz|
|» primaryLanguage|ia|
|» primaryLanguage|ia-001|
|» primaryLanguage|id|
|» primaryLanguage|id-id|
|» primaryLanguage|ie|
|» primaryLanguage|ie-ee|
|» primaryLanguage|ig|
|» primaryLanguage|ig-ng|
|» primaryLanguage|ii|
|» primaryLanguage|ii-cn|
|» primaryLanguage|ik|
|» primaryLanguage|io|
|» primaryLanguage|is|
|» primaryLanguage|is-is|
|» primaryLanguage|it|
|» primaryLanguage|it-ch|
|» primaryLanguage|it-it|
|» primaryLanguage|it-sm|
|» primaryLanguage|it-va|
|» primaryLanguage|iu|
|» primaryLanguage|ja|
|» primaryLanguage|ja-jp|
|» primaryLanguage|jgo|
|» primaryLanguage|jgo-cm|
|» primaryLanguage|jmc|
|» primaryLanguage|jmc-tz|
|» primaryLanguage|jv|
|» primaryLanguage|jv-id|
|» primaryLanguage|ka|
|» primaryLanguage|ka-ge|
|» primaryLanguage|kab|
|» primaryLanguage|kab-dz|
|» primaryLanguage|kam|
|» primaryLanguage|kam-ke|
|» primaryLanguage|kar|
|» primaryLanguage|kde|
|» primaryLanguage|kde-tz|
|» primaryLanguage|kea|
|» primaryLanguage|kea-cv|
|» primaryLanguage|kg|
|» primaryLanguage|kgp|
|» primaryLanguage|kgp-br|
|» primaryLanguage|kh|
|» primaryLanguage|khq|
|» primaryLanguage|khq-ml|
|» primaryLanguage|ki|
|» primaryLanguage|ki-ke|
|» primaryLanguage|kj|
|» primaryLanguage|kk|
|» primaryLanguage|kk-kz|
|» primaryLanguage|kkj|
|» primaryLanguage|kkj-cm|
|» primaryLanguage|kl|
|» primaryLanguage|kl-gl|
|» primaryLanguage|kln|
|» primaryLanguage|kln-ke|
|» primaryLanguage|km|
|» primaryLanguage|km-kh|
|» primaryLanguage|kn|
|» primaryLanguage|kn-in|
|» primaryLanguage|ko|
|» primaryLanguage|ko-cn|
|» primaryLanguage|ko-kp|
|» primaryLanguage|ko-kr|
|» primaryLanguage|kok|
|» primaryLanguage|kok-in|
|» primaryLanguage|kr|
|» primaryLanguage|ks|
|» primaryLanguage|ks-in|
|» primaryLanguage|ksb|
|» primaryLanguage|ksb-tz|
|» primaryLanguage|ksf|
|» primaryLanguage|ksf-cm|
|» primaryLanguage|ksh|
|» primaryLanguage|ksh-de|
|» primaryLanguage|ku|
|» primaryLanguage|ku-tr|
|» primaryLanguage|kv|
|» primaryLanguage|kw|
|» primaryLanguage|kw-gb|
|» primaryLanguage|kxv|
|» primaryLanguage|kxv-in|
|» primaryLanguage|ky|
|» primaryLanguage|ky-kg|
|» primaryLanguage|la|
|» primaryLanguage|lag|
|» primaryLanguage|lag-tz|
|» primaryLanguage|lb|
|» primaryLanguage|lb-lu|
|» primaryLanguage|lg|
|» primaryLanguage|lg-ug|
|» primaryLanguage|li|
|» primaryLanguage|lij|
|» primaryLanguage|lij-it|
|» primaryLanguage|lkt|
|» primaryLanguage|lkt-us|
|» primaryLanguage|lmo|
|» primaryLanguage|lmo-it|
|» primaryLanguage|ln|
|» primaryLanguage|ln-ao|
|» primaryLanguage|ln-cd|
|» primaryLanguage|ln-cf|
|» primaryLanguage|ln-cg|
|» primaryLanguage|lo|
|» primaryLanguage|lo-la|
|» primaryLanguage|lrc|
|» primaryLanguage|lrc-iq|
|» primaryLanguage|lrc-ir|
|» primaryLanguage|lt|
|» primaryLanguage|lt-lt|
|» primaryLanguage|lu|
|» primaryLanguage|lu-cd|
|» primaryLanguage|luo|
|» primaryLanguage|luo-ke|
|» primaryLanguage|luy|
|» primaryLanguage|luy-ke|
|» primaryLanguage|lv|
|» primaryLanguage|lv-lv|
|» primaryLanguage|mai|
|» primaryLanguage|mai-in|
|» primaryLanguage|mas|
|» primaryLanguage|mas-ke|
|» primaryLanguage|mas-tz|
|» primaryLanguage|mdf|
|» primaryLanguage|mdf-ru|
|» primaryLanguage|mer|
|» primaryLanguage|mer-ke|
|» primaryLanguage|mfe|
|» primaryLanguage|mfe-mu|
|» primaryLanguage|mg|
|» primaryLanguage|mg-mg|
|» primaryLanguage|mgh|
|» primaryLanguage|mgh-mz|
|» primaryLanguage|mgo|
|» primaryLanguage|mgo-cm|
|» primaryLanguage|mh|
|» primaryLanguage|mi|
|» primaryLanguage|mi-nz|
|» primaryLanguage|mk|
|» primaryLanguage|mk-mk|
|» primaryLanguage|ml|
|» primaryLanguage|ml-in|
|» primaryLanguage|mn|
|» primaryLanguage|mn-mn|
|» primaryLanguage|mni|
|» primaryLanguage|mni-in|
|» primaryLanguage|mr|
|» primaryLanguage|mr-in|
|» primaryLanguage|ms|
|» primaryLanguage|ms-bn|
|» primaryLanguage|ms-id|
|» primaryLanguage|ms-my|
|» primaryLanguage|ms-sg|
|» primaryLanguage|mt|
|» primaryLanguage|mt-mt|
|» primaryLanguage|mua|
|» primaryLanguage|mua-cm|
|» primaryLanguage|my|
|» primaryLanguage|my-mm|
|» primaryLanguage|mzn|
|» primaryLanguage|mzn-ir|
|» primaryLanguage|na|
|» primaryLanguage|naq|
|» primaryLanguage|naq-na|
|» primaryLanguage|nb|
|» primaryLanguage|nb-no|
|» primaryLanguage|nb-sj|
|» primaryLanguage|nd|
|» primaryLanguage|nd-zw|
|» primaryLanguage|nds|
|» primaryLanguage|nds-de|
|» primaryLanguage|nds-nl|
|» primaryLanguage|ne|
|» primaryLanguage|ne-in|
|» primaryLanguage|ne-np|
|» primaryLanguage|ng|
|» primaryLanguage|nl|
|» primaryLanguage|nl-aw|
|» primaryLanguage|nl-be|
|» primaryLanguage|nl-bq|
|» primaryLanguage|nl-ch|
|» primaryLanguage|nl-cw|
|» primaryLanguage|nl-lu|
|» primaryLanguage|nl-nl|
|» primaryLanguage|nl-sr|
|» primaryLanguage|nl-sx|
|» primaryLanguage|nmg|
|» primaryLanguage|nmg-cm|
|» primaryLanguage|nn|
|» primaryLanguage|nn-no|
|» primaryLanguage|nnh|
|» primaryLanguage|nnh-cm|
|» primaryLanguage|no|
|» primaryLanguage|no-no|
|» primaryLanguage|nqo|
|» primaryLanguage|nqo-gn|
|» primaryLanguage|nr|
|» primaryLanguage|nso|
|» primaryLanguage|nso-za|
|» primaryLanguage|nus|
|» primaryLanguage|nus-ss|
|» primaryLanguage|nv|
|» primaryLanguage|ny|
|» primaryLanguage|nyn|
|» primaryLanguage|nyn-ug|
|» primaryLanguage|oc|
|» primaryLanguage|oc-es|
|» primaryLanguage|oc-fr|
|» primaryLanguage|oj|
|» primaryLanguage|om|
|» primaryLanguage|om-et|
|» primaryLanguage|om-ke|
|» primaryLanguage|or|
|» primaryLanguage|or-in|
|» primaryLanguage|os|
|» primaryLanguage|os-ge|
|» primaryLanguage|os-ru|
|» primaryLanguage|pa|
|» primaryLanguage|pa-in|
|» primaryLanguage|pa-pk|
|» primaryLanguage|pcm|
|» primaryLanguage|pcm-ng|
|» primaryLanguage|pi|
|» primaryLanguage|pis|
|» primaryLanguage|pis-sb|
|» primaryLanguage|pl|
|» primaryLanguage|pl-pl|
|» primaryLanguage|prg|
|» primaryLanguage|prg-001|
|» primaryLanguage|ps|
|» primaryLanguage|ps-af|
|» primaryLanguage|ps-pk|
|» primaryLanguage|pt|
|» primaryLanguage|pt-ao|
|» primaryLanguage|pt-br|
|» primaryLanguage|pt-ch|
|» primaryLanguage|pt-cv|
|» primaryLanguage|pt-gq|
|» primaryLanguage|pt-gw|
|» primaryLanguage|pt-lu|
|» primaryLanguage|pt-mo|
|» primaryLanguage|pt-mz|
|» primaryLanguage|pt-pt|
|» primaryLanguage|pt-st|
|» primaryLanguage|pt-tl|
|» primaryLanguage|qu|
|» primaryLanguage|qu-bo|
|» primaryLanguage|qu-ec|
|» primaryLanguage|qu-pe|
|» primaryLanguage|raj|
|» primaryLanguage|raj-in|
|» primaryLanguage|rm|
|» primaryLanguage|rm-ch|
|» primaryLanguage|rn|
|» primaryLanguage|rn-bi|
|» primaryLanguage|ro|
|» primaryLanguage|ro-md|
|» primaryLanguage|ro-ro|
|» primaryLanguage|rof|
|» primaryLanguage|rof-tz|
|» primaryLanguage|ru|
|» primaryLanguage|ru-by|
|» primaryLanguage|ru-kg|
|» primaryLanguage|ru-kz|
|» primaryLanguage|ru-md|
|» primaryLanguage|ru-ru|
|» primaryLanguage|ru-ua|
|» primaryLanguage|rw|
|» primaryLanguage|rw-rw|
|» primaryLanguage|rwk|
|» primaryLanguage|rwk-tz|
|» primaryLanguage|sa|
|» primaryLanguage|sa-in|
|» primaryLanguage|sah|
|» primaryLanguage|sah-ru|
|» primaryLanguage|saq|
|» primaryLanguage|saq-ke|
|» primaryLanguage|sat|
|» primaryLanguage|sat-in|
|» primaryLanguage|sbp|
|» primaryLanguage|sbp-tz|
|» primaryLanguage|sc|
|» primaryLanguage|sc-it|
|» primaryLanguage|sd|
|» primaryLanguage|sd-in|
|» primaryLanguage|sd-pk|
|» primaryLanguage|se|
|» primaryLanguage|se-fi|
|» primaryLanguage|se-no|
|» primaryLanguage|se-se|
|» primaryLanguage|seh|
|» primaryLanguage|seh-mz|
|» primaryLanguage|ses|
|» primaryLanguage|ses-ml|
|» primaryLanguage|sg|
|» primaryLanguage|sg-cf|
|» primaryLanguage|shi|
|» primaryLanguage|shi-ma|
|» primaryLanguage|si|
|» primaryLanguage|si-lk|
|» primaryLanguage|sk|
|» primaryLanguage|sk-sk|
|» primaryLanguage|sl|
|» primaryLanguage|sl-si|
|» primaryLanguage|sm|
|» primaryLanguage|smn|
|» primaryLanguage|smn-fi|
|» primaryLanguage|sms|
|» primaryLanguage|sms-fi|
|» primaryLanguage|sn|
|» primaryLanguage|sn-zw|
|» primaryLanguage|so|
|» primaryLanguage|so-dj|
|» primaryLanguage|so-et|
|» primaryLanguage|so-ke|
|» primaryLanguage|so-so|
|» primaryLanguage|sq|
|» primaryLanguage|sq-al|
|» primaryLanguage|sq-mk|
|» primaryLanguage|sq-xk|
|» primaryLanguage|sr|
|» primaryLanguage|sr-ba|
|» primaryLanguage|sr-cs|
|» primaryLanguage|sr-me|
|» primaryLanguage|sr-rs|
|» primaryLanguage|sr-xk|
|» primaryLanguage|ss|
|» primaryLanguage|st|
|» primaryLanguage|st-ls|
|» primaryLanguage|st-za|
|» primaryLanguage|su|
|» primaryLanguage|su-id|
|» primaryLanguage|sv|
|» primaryLanguage|sv-ax|
|» primaryLanguage|sv-fi|
|» primaryLanguage|sv-se|
|» primaryLanguage|sw|
|» primaryLanguage|sw-cd|
|» primaryLanguage|sw-ke|
|» primaryLanguage|sw-tz|
|» primaryLanguage|sw-ug|
|» primaryLanguage|sy|
|» primaryLanguage|syr|
|» primaryLanguage|syr-iq|
|» primaryLanguage|syr-sy|
|» primaryLanguage|szl|
|» primaryLanguage|szl-pl|
|» primaryLanguage|ta|
|» primaryLanguage|ta-in|
|» primaryLanguage|ta-lk|
|» primaryLanguage|ta-my|
|» primaryLanguage|ta-sg|
|» primaryLanguage|te|
|» primaryLanguage|te-in|
|» primaryLanguage|teo|
|» primaryLanguage|teo-ke|
|» primaryLanguage|teo-ug|
|» primaryLanguage|tg|
|» primaryLanguage|tg-tj|
|» primaryLanguage|th|
|» primaryLanguage|th-th|
|» primaryLanguage|ti|
|» primaryLanguage|ti-er|
|» primaryLanguage|ti-et|
|» primaryLanguage|tk|
|» primaryLanguage|tk-tm|
|» primaryLanguage|tl|
|» primaryLanguage|tn|
|» primaryLanguage|tn-bw|
|» primaryLanguage|tn-za|
|» primaryLanguage|to|
|» primaryLanguage|to-to|
|» primaryLanguage|tok|
|» primaryLanguage|tok-001|
|» primaryLanguage|tr|
|» primaryLanguage|tr-cy|
|» primaryLanguage|tr-tr|
|» primaryLanguage|ts|
|» primaryLanguage|tt|
|» primaryLanguage|tt-ru|
|» primaryLanguage|tw|
|» primaryLanguage|twq|
|» primaryLanguage|twq-ne|
|» primaryLanguage|ty|
|» primaryLanguage|tzm|
|» primaryLanguage|tzm-ma|
|» primaryLanguage|ug|
|» primaryLanguage|ug-cn|
|» primaryLanguage|uk|
|» primaryLanguage|uk-ua|
|» primaryLanguage|ur|
|» primaryLanguage|ur-in|
|» primaryLanguage|ur-pk|
|» primaryLanguage|uz|
|» primaryLanguage|uz-af|
|» primaryLanguage|uz-uz|
|» primaryLanguage|vai|
|» primaryLanguage|vai-lr|
|» primaryLanguage|ve|
|» primaryLanguage|vec|
|» primaryLanguage|vec-it|
|» primaryLanguage|vi|
|» primaryLanguage|vi-vn|
|» primaryLanguage|vmw|
|» primaryLanguage|vmw-mz|
|» primaryLanguage|vo|
|» primaryLanguage|vo-001|
|» primaryLanguage|vun|
|» primaryLanguage|vun-tz|
|» primaryLanguage|wa|
|» primaryLanguage|wae|
|» primaryLanguage|wae-ch|
|» primaryLanguage|wo|
|» primaryLanguage|wo-sn|
|» primaryLanguage|xh|
|» primaryLanguage|xh-za|
|» primaryLanguage|xnr|
|» primaryLanguage|xnr-in|
|» primaryLanguage|xog|
|» primaryLanguage|xog-ug|
|» primaryLanguage|yav|
|» primaryLanguage|yav-cm|
|» primaryLanguage|yi|
|» primaryLanguage|yi-001|
|» primaryLanguage|yi-ua|
|» primaryLanguage|yo|
|» primaryLanguage|yo-bj|
|» primaryLanguage|yo-ng|
|» primaryLanguage|yrl|
|» primaryLanguage|yrl-br|
|» primaryLanguage|yrl-co|
|» primaryLanguage|yrl-ve|
|» primaryLanguage|yue|
|» primaryLanguage|yue-cn|
|» primaryLanguage|yue-hk|
|» primaryLanguage|yue-mo|
|» primaryLanguage|za|
|» primaryLanguage|za-cn|
|» primaryLanguage|zgh|
|» primaryLanguage|zgh-ma|
|» primaryLanguage|zh|
|» primaryLanguage|zh-cn|
|» primaryLanguage|zh-hans|
|» primaryLanguage|zh-hant|
|» primaryLanguage|zh-hk|
|» primaryLanguage|zh-mo|
|» primaryLanguage|zh-my|
|» primaryLanguage|zh-sg|
|» primaryLanguage|zh-tw|
|» primaryLanguage|zu|
|» primaryLanguage|zu-za|

> Example responses

> default Response

```json
null
```

<h3 id="add-a-website-page-to-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new language variation

<a id="opIdpost-/cms/pages/2026-09/site-pages/multi-language/create-language-variation_createLangVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/multi-language/create-language-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/multi-language/create-language-variation`

Create a new language variation from an existing website page. The variation will be a copy of the draft state of the source page. To preview the content, you can [retrieve the draft of the source website page](/api-reference/latest/cms/pages/website-pages/drafts/get-website-page-draft).

> Body parameter

```json
null
```

<h3 id="create-a-new-language-variation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentLanguageCloneRequestVNext](#schemacontentlanguageclonerequestvnext)|true|none|
|» id|body|string|true|ID of content to clone.|
|» language|body|string|false|Target language of new variant.|
|» primaryLanguage|body|string|false|Language of primary content to clone.|
|» usePublished|body|boolean|false|A boolean indicating whether the published version of the page should be used for creating the language variation. If true, the published version is used; otherwise, the draft version is used.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-language-variation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Remove a website page from a multi-language group

<a id="opIdpost-/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/multi-language/detach-from-lang-group`

Detach a website page from a multi-language group.

> Body parameter

```json
null
```

<h3 id="remove-a-website-page-from-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DetachFromLangGroupRequestVNext](#schemadetachfromlanggrouprequestvnext)|true|none|
|» id|body|string|true|ID of the object to remove from a multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="remove-a-website-page-from-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Set a new primary language

<a id="opIdput-/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary_setLangPrimary"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary \
  -X PUT \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cms/pages/2026-09/site-pages/multi-language/set-new-lang-primary`

Set a site page as the primary language of a multi-language group.

> Body parameter

```json
null
```

<h3 id="set-a-new-primary-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetNewLanguagePrimaryRequestVNext](#schemasetnewlanguageprimaryrequestvnext)|true|none|
|» id|body|string|true|ID of object to set as primary in multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="set-a-new-primary-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update languages of multi-language group

<a id="opIdpost-/cms/pages/2026-09/site-pages/multi-language/update-languages_updateLangs"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/multi-language/update-languages \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/multi-language/update-languages`

Explicitly set new languages for each site page in a multi-language group.

> Body parameter

```json
null
```

<h3 id="update-languages-of-multi-language-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateLanguagesRequestVNext](#schemaupdatelanguagesrequestvnext)|true|none|
|» languages|body|object|true|Map of object IDs to associated languages of object in the multi-language group.|
|» » **additionalProperties**|body|string|false|none|
|» primaryId|body|string|true|ID of the primary object in the multi-language group.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » **additionalProperties**|aa|
|» » **additionalProperties**|ab|
|» » **additionalProperties**|ae|
|» » **additionalProperties**|af|
|» » **additionalProperties**|af-na|
|» » **additionalProperties**|af-za|
|» » **additionalProperties**|agq|
|» » **additionalProperties**|agq-cm|
|» » **additionalProperties**|ak|
|» » **additionalProperties**|ak-gh|
|» » **additionalProperties**|am|
|» » **additionalProperties**|am-et|
|» » **additionalProperties**|an|
|» » **additionalProperties**|ann|
|» » **additionalProperties**|ann-ng|
|» » **additionalProperties**|ar|
|» » **additionalProperties**|ar-001|
|» » **additionalProperties**|ar-ae|
|» » **additionalProperties**|ar-bh|
|» » **additionalProperties**|ar-dj|
|» » **additionalProperties**|ar-dz|
|» » **additionalProperties**|ar-eg|
|» » **additionalProperties**|ar-eh|
|» » **additionalProperties**|ar-er|
|» » **additionalProperties**|ar-il|
|» » **additionalProperties**|ar-iq|
|» » **additionalProperties**|ar-jo|
|» » **additionalProperties**|ar-km|
|» » **additionalProperties**|ar-kw|
|» » **additionalProperties**|ar-lb|
|» » **additionalProperties**|ar-ly|
|» » **additionalProperties**|ar-ma|
|» » **additionalProperties**|ar-mr|
|» » **additionalProperties**|ar-om|
|» » **additionalProperties**|ar-ps|
|» » **additionalProperties**|ar-qa|
|» » **additionalProperties**|ar-sa|
|» » **additionalProperties**|ar-sd|
|» » **additionalProperties**|ar-so|
|» » **additionalProperties**|ar-ss|
|» » **additionalProperties**|ar-sy|
|» » **additionalProperties**|ar-td|
|» » **additionalProperties**|ar-tn|
|» » **additionalProperties**|ar-ye|
|» » **additionalProperties**|as|
|» » **additionalProperties**|asa|
|» » **additionalProperties**|asa-tz|
|» » **additionalProperties**|ast|
|» » **additionalProperties**|ast-es|
|» » **additionalProperties**|as-in|
|» » **additionalProperties**|av|
|» » **additionalProperties**|ay|
|» » **additionalProperties**|az|
|» » **additionalProperties**|az-az|
|» » **additionalProperties**|ba|
|» » **additionalProperties**|bal|
|» » **additionalProperties**|bal-pk|
|» » **additionalProperties**|bas|
|» » **additionalProperties**|bas-cm|
|» » **additionalProperties**|be|
|» » **additionalProperties**|bem|
|» » **additionalProperties**|bem-zm|
|» » **additionalProperties**|bez|
|» » **additionalProperties**|bez-tz|
|» » **additionalProperties**|be-by|
|» » **additionalProperties**|bg|
|» » **additionalProperties**|bgc|
|» » **additionalProperties**|bgc-in|
|» » **additionalProperties**|bg-bg|
|» » **additionalProperties**|bi|
|» » **additionalProperties**|bho|
|» » **additionalProperties**|bho-in|
|» » **additionalProperties**|blo|
|» » **additionalProperties**|blo-bj|
|» » **additionalProperties**|bm|
|» » **additionalProperties**|bm-ml|
|» » **additionalProperties**|bn|
|» » **additionalProperties**|bn-bd|
|» » **additionalProperties**|bn-in|
|» » **additionalProperties**|bo|
|» » **additionalProperties**|bo-cn|
|» » **additionalProperties**|bo-in|
|» » **additionalProperties**|br|
|» » **additionalProperties**|brx|
|» » **additionalProperties**|brx-in|
|» » **additionalProperties**|br-fr|
|» » **additionalProperties**|bs|
|» » **additionalProperties**|bs-ba|
|» » **additionalProperties**|ca|
|» » **additionalProperties**|ca-ad|
|» » **additionalProperties**|ca-es|
|» » **additionalProperties**|ca-fr|
|» » **additionalProperties**|ca-it|
|» » **additionalProperties**|ccp|
|» » **additionalProperties**|ccp-bd|
|» » **additionalProperties**|ccp-in|
|» » **additionalProperties**|ce|
|» » **additionalProperties**|ceb|
|» » **additionalProperties**|ceb-ph|
|» » **additionalProperties**|ce-ru|
|» » **additionalProperties**|ch|
|» » **additionalProperties**|cgg|
|» » **additionalProperties**|cgg-ug|
|» » **additionalProperties**|chr|
|» » **additionalProperties**|chr-us|
|» » **additionalProperties**|ckb|
|» » **additionalProperties**|ckb-iq|
|» » **additionalProperties**|ckb-ir|
|» » **additionalProperties**|co|
|» » **additionalProperties**|cr|
|» » **additionalProperties**|cs|
|» » **additionalProperties**|cs-cz|
|» » **additionalProperties**|csw|
|» » **additionalProperties**|csw-ca|
|» » **additionalProperties**|cu|
|» » **additionalProperties**|cu-ru|
|» » **additionalProperties**|cv|
|» » **additionalProperties**|cv-ru|
|» » **additionalProperties**|cy|
|» » **additionalProperties**|cy-gb|
|» » **additionalProperties**|da|
|» » **additionalProperties**|dav|
|» » **additionalProperties**|dav-ke|
|» » **additionalProperties**|da-dk|
|» » **additionalProperties**|da-gl|
|» » **additionalProperties**|de|
|» » **additionalProperties**|de-at|
|» » **additionalProperties**|de-be|
|» » **additionalProperties**|de-ch|
|» » **additionalProperties**|de-de|
|» » **additionalProperties**|de-gr|
|» » **additionalProperties**|de-it|
|» » **additionalProperties**|de-li|
|» » **additionalProperties**|de-lu|
|» » **additionalProperties**|dje|
|» » **additionalProperties**|dje-ne|
|» » **additionalProperties**|doi|
|» » **additionalProperties**|doi-in|
|» » **additionalProperties**|dsb|
|» » **additionalProperties**|dsb-de|
|» » **additionalProperties**|dua|
|» » **additionalProperties**|dua-cm|
|» » **additionalProperties**|dyo|
|» » **additionalProperties**|dyo-sn|
|» » **additionalProperties**|dv|
|» » **additionalProperties**|dz|
|» » **additionalProperties**|dz-bt|
|» » **additionalProperties**|ebu|
|» » **additionalProperties**|ebu-ke|
|» » **additionalProperties**|ee|
|» » **additionalProperties**|ee-gh|
|» » **additionalProperties**|ee-tg|
|» » **additionalProperties**|el|
|» » **additionalProperties**|el-cy|
|» » **additionalProperties**|el-gr|
|» » **additionalProperties**|en|
|» » **additionalProperties**|en-001|
|» » **additionalProperties**|en-150|
|» » **additionalProperties**|en-ae|
|» » **additionalProperties**|en-ag|
|» » **additionalProperties**|en-ai|
|» » **additionalProperties**|en-as|
|» » **additionalProperties**|en-at|
|» » **additionalProperties**|en-au|
|» » **additionalProperties**|en-bb|
|» » **additionalProperties**|en-be|
|» » **additionalProperties**|en-bi|
|» » **additionalProperties**|en-bm|
|» » **additionalProperties**|en-bs|
|» » **additionalProperties**|en-bw|
|» » **additionalProperties**|en-bz|
|» » **additionalProperties**|en-ca|
|» » **additionalProperties**|en-cc|
|» » **additionalProperties**|en-ch|
|» » **additionalProperties**|en-ck|
|» » **additionalProperties**|en-cm|
|» » **additionalProperties**|en-cn|
|» » **additionalProperties**|en-cx|
|» » **additionalProperties**|en-cy|
|» » **additionalProperties**|en-cz|
|» » **additionalProperties**|en-de|
|» » **additionalProperties**|en-dg|
|» » **additionalProperties**|en-dk|
|» » **additionalProperties**|en-dm|
|» » **additionalProperties**|en-ee|
|» » **additionalProperties**|en-eg|
|» » **additionalProperties**|en-er|
|» » **additionalProperties**|en-es|
|» » **additionalProperties**|en-fi|
|» » **additionalProperties**|en-fj|
|» » **additionalProperties**|en-fk|
|» » **additionalProperties**|en-fm|
|» » **additionalProperties**|en-fr|
|» » **additionalProperties**|en-gb|
|» » **additionalProperties**|en-gd|
|» » **additionalProperties**|en-gg|
|» » **additionalProperties**|en-gh|
|» » **additionalProperties**|en-gi|
|» » **additionalProperties**|en-gm|
|» » **additionalProperties**|en-gs|
|» » **additionalProperties**|en-gu|
|» » **additionalProperties**|en-gy|
|» » **additionalProperties**|en-hk|
|» » **additionalProperties**|en-hu|
|» » **additionalProperties**|en-id|
|» » **additionalProperties**|en-ie|
|» » **additionalProperties**|en-il|
|» » **additionalProperties**|en-im|
|» » **additionalProperties**|en-in|
|» » **additionalProperties**|en-io|
|» » **additionalProperties**|en-it|
|» » **additionalProperties**|en-je|
|» » **additionalProperties**|en-jm|
|» » **additionalProperties**|en-ke|
|» » **additionalProperties**|en-ki|
|» » **additionalProperties**|en-kn|
|» » **additionalProperties**|en-ky|
|» » **additionalProperties**|en-lc|
|» » **additionalProperties**|en-lr|
|» » **additionalProperties**|en-ls|
|» » **additionalProperties**|en-lu|
|» » **additionalProperties**|en-mg|
|» » **additionalProperties**|en-mh|
|» » **additionalProperties**|en-mo|
|» » **additionalProperties**|en-mp|
|» » **additionalProperties**|en-ms|
|» » **additionalProperties**|en-mt|
|» » **additionalProperties**|en-mu|
|» » **additionalProperties**|en-mv|
|» » **additionalProperties**|en-mw|
|» » **additionalProperties**|en-mx|
|» » **additionalProperties**|en-my|
|» » **additionalProperties**|en-na|
|» » **additionalProperties**|en-nf|
|» » **additionalProperties**|en-ng|
|» » **additionalProperties**|en-nl|
|» » **additionalProperties**|en-no|
|» » **additionalProperties**|en-nr|
|» » **additionalProperties**|en-nu|
|» » **additionalProperties**|en-nz|
|» » **additionalProperties**|en-pg|
|» » **additionalProperties**|en-ph|
|» » **additionalProperties**|en-pk|
|» » **additionalProperties**|en-pl|
|» » **additionalProperties**|en-pn|
|» » **additionalProperties**|en-pr|
|» » **additionalProperties**|en-pt|
|» » **additionalProperties**|en-pw|
|» » **additionalProperties**|en-ro|
|» » **additionalProperties**|en-rw|
|» » **additionalProperties**|en-sb|
|» » **additionalProperties**|en-sc|
|» » **additionalProperties**|en-sd|
|» » **additionalProperties**|en-se|
|» » **additionalProperties**|en-sg|
|» » **additionalProperties**|en-sh|
|» » **additionalProperties**|en-si|
|» » **additionalProperties**|en-sk|
|» » **additionalProperties**|en-sl|
|» » **additionalProperties**|en-ss|
|» » **additionalProperties**|en-sx|
|» » **additionalProperties**|en-sz|
|» » **additionalProperties**|en-tc|
|» » **additionalProperties**|en-th|
|» » **additionalProperties**|en-tk|
|» » **additionalProperties**|en-tn|
|» » **additionalProperties**|en-to|
|» » **additionalProperties**|en-tt|
|» » **additionalProperties**|en-tv|
|» » **additionalProperties**|en-tz|
|» » **additionalProperties**|en-ug|
|» » **additionalProperties**|en-um|
|» » **additionalProperties**|en-us|
|» » **additionalProperties**|en-vc|
|» » **additionalProperties**|en-vg|
|» » **additionalProperties**|en-vi|
|» » **additionalProperties**|en-vn|
|» » **additionalProperties**|en-vu|
|» » **additionalProperties**|en-ws|
|» » **additionalProperties**|en-za|
|» » **additionalProperties**|en-zm|
|» » **additionalProperties**|en-zw|
|» » **additionalProperties**|eo|
|» » **additionalProperties**|eo-001|
|» » **additionalProperties**|es|
|» » **additionalProperties**|es-419|
|» » **additionalProperties**|es-ar|
|» » **additionalProperties**|es-bo|
|» » **additionalProperties**|es-br|
|» » **additionalProperties**|es-bz|
|» » **additionalProperties**|es-cl|
|» » **additionalProperties**|es-co|
|» » **additionalProperties**|es-cr|
|» » **additionalProperties**|es-cu|
|» » **additionalProperties**|es-do|
|» » **additionalProperties**|es-ea|
|» » **additionalProperties**|es-ec|
|» » **additionalProperties**|es-es|
|» » **additionalProperties**|es-gq|
|» » **additionalProperties**|es-gt|
|» » **additionalProperties**|es-hn|
|» » **additionalProperties**|es-ic|
|» » **additionalProperties**|es-mx|
|» » **additionalProperties**|es-ni|
|» » **additionalProperties**|es-pa|
|» » **additionalProperties**|es-pe|
|» » **additionalProperties**|es-ph|
|» » **additionalProperties**|es-pr|
|» » **additionalProperties**|es-py|
|» » **additionalProperties**|es-sv|
|» » **additionalProperties**|es-us|
|» » **additionalProperties**|es-uy|
|» » **additionalProperties**|es-ve|
|» » **additionalProperties**|et|
|» » **additionalProperties**|et-ee|
|» » **additionalProperties**|eu|
|» » **additionalProperties**|eu-es|
|» » **additionalProperties**|ewo|
|» » **additionalProperties**|ewo-cm|
|» » **additionalProperties**|fa|
|» » **additionalProperties**|fa-af|
|» » **additionalProperties**|fa-ir|
|» » **additionalProperties**|ff|
|» » **additionalProperties**|ff-bf|
|» » **additionalProperties**|ff-cm|
|» » **additionalProperties**|ff-gh|
|» » **additionalProperties**|ff-gm|
|» » **additionalProperties**|ff-gn|
|» » **additionalProperties**|ff-gw|
|» » **additionalProperties**|ff-lr|
|» » **additionalProperties**|ff-mr|
|» » **additionalProperties**|ff-ne|
|» » **additionalProperties**|ff-ng|
|» » **additionalProperties**|ff-sl|
|» » **additionalProperties**|ff-sn|
|» » **additionalProperties**|fi|
|» » **additionalProperties**|fil|
|» » **additionalProperties**|fil-ph|
|» » **additionalProperties**|fi-fi|
|» » **additionalProperties**|fj|
|» » **additionalProperties**|fo|
|» » **additionalProperties**|fo-dk|
|» » **additionalProperties**|fo-fo|
|» » **additionalProperties**|fr|
|» » **additionalProperties**|frr|
|» » **additionalProperties**|frr-de|
|» » **additionalProperties**|fr-be|
|» » **additionalProperties**|fr-bf|
|» » **additionalProperties**|fr-bi|
|» » **additionalProperties**|fr-bj|
|» » **additionalProperties**|fr-bl|
|» » **additionalProperties**|fr-ca|
|» » **additionalProperties**|fr-cd|
|» » **additionalProperties**|fr-cf|
|» » **additionalProperties**|fr-cg|
|» » **additionalProperties**|fr-ch|
|» » **additionalProperties**|fr-ci|
|» » **additionalProperties**|fr-cm|
|» » **additionalProperties**|fr-dj|
|» » **additionalProperties**|fr-dz|
|» » **additionalProperties**|fr-fr|
|» » **additionalProperties**|fr-ga|
|» » **additionalProperties**|fr-gf|
|» » **additionalProperties**|fr-gn|
|» » **additionalProperties**|fr-gp|
|» » **additionalProperties**|fr-gq|
|» » **additionalProperties**|fr-ht|
|» » **additionalProperties**|fr-km|
|» » **additionalProperties**|fr-lu|
|» » **additionalProperties**|fr-ma|
|» » **additionalProperties**|fr-mc|
|» » **additionalProperties**|fr-mf|
|» » **additionalProperties**|fr-mg|
|» » **additionalProperties**|fr-ml|
|» » **additionalProperties**|fr-mq|
|» » **additionalProperties**|fr-mr|
|» » **additionalProperties**|fr-mu|
|» » **additionalProperties**|fr-nc|
|» » **additionalProperties**|fr-ne|
|» » **additionalProperties**|fr-pf|
|» » **additionalProperties**|fr-pm|
|» » **additionalProperties**|fr-re|
|» » **additionalProperties**|fr-rw|
|» » **additionalProperties**|fr-sc|
|» » **additionalProperties**|fr-sn|
|» » **additionalProperties**|fr-sy|
|» » **additionalProperties**|fr-td|
|» » **additionalProperties**|fr-tg|
|» » **additionalProperties**|fr-tn|
|» » **additionalProperties**|fr-vu|
|» » **additionalProperties**|fr-wf|
|» » **additionalProperties**|fr-yt|
|» » **additionalProperties**|fur|
|» » **additionalProperties**|fur-it|
|» » **additionalProperties**|fy|
|» » **additionalProperties**|fy-nl|
|» » **additionalProperties**|ga|
|» » **additionalProperties**|ga-gb|
|» » **additionalProperties**|ga-ie|
|» » **additionalProperties**|gaa|
|» » **additionalProperties**|gaa-gh|
|» » **additionalProperties**|gd|
|» » **additionalProperties**|gd-gb|
|» » **additionalProperties**|gl|
|» » **additionalProperties**|gl-es|
|» » **additionalProperties**|gn|
|» » **additionalProperties**|gsw|
|» » **additionalProperties**|gsw-ch|
|» » **additionalProperties**|gsw-fr|
|» » **additionalProperties**|gsw-li|
|» » **additionalProperties**|gu|
|» » **additionalProperties**|guz|
|» » **additionalProperties**|guz-ke|
|» » **additionalProperties**|gu-in|
|» » **additionalProperties**|gv|
|» » **additionalProperties**|gv-im|
|» » **additionalProperties**|ha|
|» » **additionalProperties**|haw|
|» » **additionalProperties**|haw-us|
|» » **additionalProperties**|ha-gh|
|» » **additionalProperties**|ha-ne|
|» » **additionalProperties**|ha-ng|
|» » **additionalProperties**|he|
|» » **additionalProperties**|he-il|
|» » **additionalProperties**|hi|
|» » **additionalProperties**|hi-in|
|» » **additionalProperties**|hmn|
|» » **additionalProperties**|ho|
|» » **additionalProperties**|hr|
|» » **additionalProperties**|hr-ba|
|» » **additionalProperties**|hr-hr|
|» » **additionalProperties**|ht|
|» » **additionalProperties**|ht-ht|
|» » **additionalProperties**|hsb|
|» » **additionalProperties**|hsb-de|
|» » **additionalProperties**|hu|
|» » **additionalProperties**|hu-hu|
|» » **additionalProperties**|hy|
|» » **additionalProperties**|hy-am|
|» » **additionalProperties**|hz|
|» » **additionalProperties**|ia|
|» » **additionalProperties**|ia-001|
|» » **additionalProperties**|id|
|» » **additionalProperties**|ie|
|» » **additionalProperties**|ie-ee|
|» » **additionalProperties**|ig|
|» » **additionalProperties**|ig-ng|
|» » **additionalProperties**|ii|
|» » **additionalProperties**|ii-cn|
|» » **additionalProperties**|ik|
|» » **additionalProperties**|io|
|» » **additionalProperties**|id-id|
|» » **additionalProperties**|is|
|» » **additionalProperties**|is-is|
|» » **additionalProperties**|it|
|» » **additionalProperties**|it-ch|
|» » **additionalProperties**|it-it|
|» » **additionalProperties**|it-sm|
|» » **additionalProperties**|it-va|
|» » **additionalProperties**|iu|
|» » **additionalProperties**|ja|
|» » **additionalProperties**|ja-jp|
|» » **additionalProperties**|jgo|
|» » **additionalProperties**|jgo-cm|
|» » **additionalProperties**|yi|
|» » **additionalProperties**|yi-001|
|» » **additionalProperties**|jmc|
|» » **additionalProperties**|jmc-tz|
|» » **additionalProperties**|jv|
|» » **additionalProperties**|jv-id|
|» » **additionalProperties**|ka|
|» » **additionalProperties**|kab|
|» » **additionalProperties**|kab-dz|
|» » **additionalProperties**|kam|
|» » **additionalProperties**|kam-ke|
|» » **additionalProperties**|kar|
|» » **additionalProperties**|ka-ge|
|» » **additionalProperties**|kde|
|» » **additionalProperties**|kde-tz|
|» » **additionalProperties**|kea|
|» » **additionalProperties**|kea-cv|
|» » **additionalProperties**|kgp|
|» » **additionalProperties**|kgp-br|
|» » **additionalProperties**|kg|
|» » **additionalProperties**|kh|
|» » **additionalProperties**|khq|
|» » **additionalProperties**|khq-ml|
|» » **additionalProperties**|ki|
|» » **additionalProperties**|ki-ke|
|» » **additionalProperties**|kj|
|» » **additionalProperties**|kk|
|» » **additionalProperties**|kkj|
|» » **additionalProperties**|kkj-cm|
|» » **additionalProperties**|kk-kz|
|» » **additionalProperties**|kl|
|» » **additionalProperties**|kln|
|» » **additionalProperties**|kln-ke|
|» » **additionalProperties**|kl-gl|
|» » **additionalProperties**|km|
|» » **additionalProperties**|km-kh|
|» » **additionalProperties**|kn|
|» » **additionalProperties**|kn-in|
|» » **additionalProperties**|ko|
|» » **additionalProperties**|ko-cn|
|» » **additionalProperties**|kok|
|» » **additionalProperties**|kok-in|
|» » **additionalProperties**|ko-kp|
|» » **additionalProperties**|ko-kr|
|» » **additionalProperties**|kr|
|» » **additionalProperties**|ks|
|» » **additionalProperties**|ksb|
|» » **additionalProperties**|ksb-tz|
|» » **additionalProperties**|ksf|
|» » **additionalProperties**|ksf-cm|
|» » **additionalProperties**|ksh|
|» » **additionalProperties**|ksh-de|
|» » **additionalProperties**|ks-in|
|» » **additionalProperties**|ku|
|» » **additionalProperties**|ku-tr|
|» » **additionalProperties**|kv|
|» » **additionalProperties**|kw|
|» » **additionalProperties**|kw-gb|
|» » **additionalProperties**|kxv|
|» » **additionalProperties**|kxv-in|
|» » **additionalProperties**|ky|
|» » **additionalProperties**|ky-kg|
|» » **additionalProperties**|lag|
|» » **additionalProperties**|lag-tz|
|» » **additionalProperties**|la|
|» » **additionalProperties**|lb|
|» » **additionalProperties**|lb-lu|
|» » **additionalProperties**|lg|
|» » **additionalProperties**|lg-ug|
|» » **additionalProperties**|lkt|
|» » **additionalProperties**|lkt-us|
|» » **additionalProperties**|li|
|» » **additionalProperties**|lij|
|» » **additionalProperties**|lij-it|
|» » **additionalProperties**|lmo|
|» » **additionalProperties**|lmo-it|
|» » **additionalProperties**|ln|
|» » **additionalProperties**|ln-ao|
|» » **additionalProperties**|ln-cd|
|» » **additionalProperties**|ln-cf|
|» » **additionalProperties**|ln-cg|
|» » **additionalProperties**|lo|
|» » **additionalProperties**|lo-la|
|» » **additionalProperties**|lrc|
|» » **additionalProperties**|lrc-iq|
|» » **additionalProperties**|lrc-ir|
|» » **additionalProperties**|lt|
|» » **additionalProperties**|lt-lt|
|» » **additionalProperties**|lu|
|» » **additionalProperties**|luo|
|» » **additionalProperties**|luo-ke|
|» » **additionalProperties**|luy|
|» » **additionalProperties**|luy-ke|
|» » **additionalProperties**|lu-cd|
|» » **additionalProperties**|lv|
|» » **additionalProperties**|lv-lv|
|» » **additionalProperties**|mai|
|» » **additionalProperties**|mai-in|
|» » **additionalProperties**|mas|
|» » **additionalProperties**|mas-ke|
|» » **additionalProperties**|mas-tz|
|» » **additionalProperties**|mdf|
|» » **additionalProperties**|mdf-ru|
|» » **additionalProperties**|mer|
|» » **additionalProperties**|mer-ke|
|» » **additionalProperties**|mfe|
|» » **additionalProperties**|mfe-mu|
|» » **additionalProperties**|mg|
|» » **additionalProperties**|mgh|
|» » **additionalProperties**|mgh-mz|
|» » **additionalProperties**|mgo|
|» » **additionalProperties**|mgo-cm|
|» » **additionalProperties**|mg-mg|
|» » **additionalProperties**|mh|
|» » **additionalProperties**|mi|
|» » **additionalProperties**|mi-nz|
|» » **additionalProperties**|mk|
|» » **additionalProperties**|mk-mk|
|» » **additionalProperties**|ml|
|» » **additionalProperties**|ml-in|
|» » **additionalProperties**|mn|
|» » **additionalProperties**|mni|
|» » **additionalProperties**|mni-in|
|» » **additionalProperties**|mn-mn|
|» » **additionalProperties**|mr|
|» » **additionalProperties**|mr-in|
|» » **additionalProperties**|ms|
|» » **additionalProperties**|ms-bn|
|» » **additionalProperties**|ms-id|
|» » **additionalProperties**|ms-my|
|» » **additionalProperties**|ms-sg|
|» » **additionalProperties**|mt|
|» » **additionalProperties**|mt-mt|
|» » **additionalProperties**|mua|
|» » **additionalProperties**|mua-cm|
|» » **additionalProperties**|my|
|» » **additionalProperties**|my-mm|
|» » **additionalProperties**|mzn|
|» » **additionalProperties**|mzn-ir|
|» » **additionalProperties**|naq|
|» » **additionalProperties**|naq-na|
|» » **additionalProperties**|na|
|» » **additionalProperties**|nb|
|» » **additionalProperties**|nb-no|
|» » **additionalProperties**|nb-sj|
|» » **additionalProperties**|nd|
|» » **additionalProperties**|nds|
|» » **additionalProperties**|nds-de|
|» » **additionalProperties**|nds-nl|
|» » **additionalProperties**|nd-zw|
|» » **additionalProperties**|ne|
|» » **additionalProperties**|ne-in|
|» » **additionalProperties**|ne-np|
|» » **additionalProperties**|ng|
|» » **additionalProperties**|nl|
|» » **additionalProperties**|nl-aw|
|» » **additionalProperties**|nl-be|
|» » **additionalProperties**|nl-bq|
|» » **additionalProperties**|nl-ch|
|» » **additionalProperties**|nl-cw|
|» » **additionalProperties**|nl-lu|
|» » **additionalProperties**|nl-nl|
|» » **additionalProperties**|nl-sr|
|» » **additionalProperties**|nl-sx|
|» » **additionalProperties**|nmg|
|» » **additionalProperties**|nmg-cm|
|» » **additionalProperties**|nn|
|» » **additionalProperties**|nnh|
|» » **additionalProperties**|nnh-cm|
|» » **additionalProperties**|nn-no|
|» » **additionalProperties**|nqo|
|» » **additionalProperties**|nqo-gn|
|» » **additionalProperties**|nr|
|» » **additionalProperties**|nso|
|» » **additionalProperties**|nso-za|
|» » **additionalProperties**|nv|
|» » **additionalProperties**|ny|
|» » **additionalProperties**|no|
|» » **additionalProperties**|no-no|
|» » **additionalProperties**|nus|
|» » **additionalProperties**|nus-ss|
|» » **additionalProperties**|nyn|
|» » **additionalProperties**|nyn-ug|
|» » **additionalProperties**|oc|
|» » **additionalProperties**|oc-es|
|» » **additionalProperties**|oc-fr|
|» » **additionalProperties**|oj|
|» » **additionalProperties**|om|
|» » **additionalProperties**|om-et|
|» » **additionalProperties**|om-ke|
|» » **additionalProperties**|or|
|» » **additionalProperties**|or-in|
|» » **additionalProperties**|os|
|» » **additionalProperties**|os-ge|
|» » **additionalProperties**|os-ru|
|» » **additionalProperties**|pa|
|» » **additionalProperties**|pa-in|
|» » **additionalProperties**|pa-pk|
|» » **additionalProperties**|pcm|
|» » **additionalProperties**|pcm-ng|
|» » **additionalProperties**|pis|
|» » **additionalProperties**|pis-sb|
|» » **additionalProperties**|pi|
|» » **additionalProperties**|pl|
|» » **additionalProperties**|pl-pl|
|» » **additionalProperties**|prg|
|» » **additionalProperties**|prg-001|
|» » **additionalProperties**|ps|
|» » **additionalProperties**|ps-af|
|» » **additionalProperties**|ps-pk|
|» » **additionalProperties**|pt|
|» » **additionalProperties**|pt-ao|
|» » **additionalProperties**|pt-br|
|» » **additionalProperties**|pt-ch|
|» » **additionalProperties**|pt-cv|
|» » **additionalProperties**|pt-gq|
|» » **additionalProperties**|pt-gw|
|» » **additionalProperties**|pt-lu|
|» » **additionalProperties**|pt-mo|
|» » **additionalProperties**|pt-mz|
|» » **additionalProperties**|pt-pt|
|» » **additionalProperties**|pt-st|
|» » **additionalProperties**|pt-tl|
|» » **additionalProperties**|qu|
|» » **additionalProperties**|qu-bo|
|» » **additionalProperties**|qu-ec|
|» » **additionalProperties**|qu-pe|
|» » **additionalProperties**|raj|
|» » **additionalProperties**|raj-in|
|» » **additionalProperties**|rm|
|» » **additionalProperties**|rm-ch|
|» » **additionalProperties**|rn|
|» » **additionalProperties**|rn-bi|
|» » **additionalProperties**|ro|
|» » **additionalProperties**|rof|
|» » **additionalProperties**|rof-tz|
|» » **additionalProperties**|ro-md|
|» » **additionalProperties**|ro-ro|
|» » **additionalProperties**|ru|
|» » **additionalProperties**|ru-by|
|» » **additionalProperties**|ru-kg|
|» » **additionalProperties**|ru-kz|
|» » **additionalProperties**|ru-md|
|» » **additionalProperties**|ru-ru|
|» » **additionalProperties**|ru-ua|
|» » **additionalProperties**|rw|
|» » **additionalProperties**|rwk|
|» » **additionalProperties**|rwk-tz|
|» » **additionalProperties**|rw-rw|
|» » **additionalProperties**|sa|
|» » **additionalProperties**|sah|
|» » **additionalProperties**|sah-ru|
|» » **additionalProperties**|saq|
|» » **additionalProperties**|saq-ke|
|» » **additionalProperties**|sat|
|» » **additionalProperties**|sat-in|
|» » **additionalProperties**|sa-in|
|» » **additionalProperties**|sbp|
|» » **additionalProperties**|sbp-tz|
|» » **additionalProperties**|sc|
|» » **additionalProperties**|sc-it|
|» » **additionalProperties**|sd|
|» » **additionalProperties**|sd-in|
|» » **additionalProperties**|sd-pk|
|» » **additionalProperties**|se|
|» » **additionalProperties**|seh|
|» » **additionalProperties**|seh-mz|
|» » **additionalProperties**|ses|
|» » **additionalProperties**|ses-ml|
|» » **additionalProperties**|se-fi|
|» » **additionalProperties**|se-no|
|» » **additionalProperties**|se-se|
|» » **additionalProperties**|sg|
|» » **additionalProperties**|sg-cf|
|» » **additionalProperties**|shi|
|» » **additionalProperties**|shi-ma|
|» » **additionalProperties**|si|
|» » **additionalProperties**|si-lk|
|» » **additionalProperties**|sk|
|» » **additionalProperties**|sk-sk|
|» » **additionalProperties**|sl|
|» » **additionalProperties**|sl-si|
|» » **additionalProperties**|sm|
|» » **additionalProperties**|smn|
|» » **additionalProperties**|smn-fi|
|» » **additionalProperties**|sms|
|» » **additionalProperties**|sms-fi|
|» » **additionalProperties**|sn|
|» » **additionalProperties**|sn-zw|
|» » **additionalProperties**|so|
|» » **additionalProperties**|so-dj|
|» » **additionalProperties**|so-et|
|» » **additionalProperties**|so-ke|
|» » **additionalProperties**|so-so|
|» » **additionalProperties**|sq|
|» » **additionalProperties**|sq-al|
|» » **additionalProperties**|sq-mk|
|» » **additionalProperties**|sq-xk|
|» » **additionalProperties**|sr|
|» » **additionalProperties**|sr-ba|
|» » **additionalProperties**|sr-cs|
|» » **additionalProperties**|sr-me|
|» » **additionalProperties**|sr-rs|
|» » **additionalProperties**|sr-xk|
|» » **additionalProperties**|ss|
|» » **additionalProperties**|st|
|» » **additionalProperties**|st-ls|
|» » **additionalProperties**|st-za|
|» » **additionalProperties**|su|
|» » **additionalProperties**|su-id|
|» » **additionalProperties**|sv|
|» » **additionalProperties**|sv-ax|
|» » **additionalProperties**|sv-fi|
|» » **additionalProperties**|sv-se|
|» » **additionalProperties**|sw|
|» » **additionalProperties**|sw-cd|
|» » **additionalProperties**|sw-ke|
|» » **additionalProperties**|sw-tz|
|» » **additionalProperties**|sw-ug|
|» » **additionalProperties**|sy|
|» » **additionalProperties**|syr|
|» » **additionalProperties**|syr-iq|
|» » **additionalProperties**|syr-sy|
|» » **additionalProperties**|szl|
|» » **additionalProperties**|szl-pl|
|» » **additionalProperties**|ta|
|» » **additionalProperties**|ta-in|
|» » **additionalProperties**|ta-lk|
|» » **additionalProperties**|ta-my|
|» » **additionalProperties**|ta-sg|
|» » **additionalProperties**|te|
|» » **additionalProperties**|teo|
|» » **additionalProperties**|teo-ke|
|» » **additionalProperties**|teo-ug|
|» » **additionalProperties**|te-in|
|» » **additionalProperties**|tg|
|» » **additionalProperties**|tg-tj|
|» » **additionalProperties**|th|
|» » **additionalProperties**|th-th|
|» » **additionalProperties**|ti|
|» » **additionalProperties**|ti-er|
|» » **additionalProperties**|ti-et|
|» » **additionalProperties**|tk|
|» » **additionalProperties**|tk-tm|
|» » **additionalProperties**|tl|
|» » **additionalProperties**|tn|
|» » **additionalProperties**|tn-bw|
|» » **additionalProperties**|tn-za|
|» » **additionalProperties**|to|
|» » **additionalProperties**|tok|
|» » **additionalProperties**|tok-001|
|» » **additionalProperties**|to-to|
|» » **additionalProperties**|ts|
|» » **additionalProperties**|tr|
|» » **additionalProperties**|tr-cy|
|» » **additionalProperties**|tr-tr|
|» » **additionalProperties**|tt|
|» » **additionalProperties**|tt-ru|
|» » **additionalProperties**|tw|
|» » **additionalProperties**|ty|
|» » **additionalProperties**|twq|
|» » **additionalProperties**|twq-ne|
|» » **additionalProperties**|tzm|
|» » **additionalProperties**|tzm-ma|
|» » **additionalProperties**|ug|
|» » **additionalProperties**|ug-cn|
|» » **additionalProperties**|uk|
|» » **additionalProperties**|uk-ua|
|» » **additionalProperties**|ur|
|» » **additionalProperties**|ur-in|
|» » **additionalProperties**|ur-pk|
|» » **additionalProperties**|uz|
|» » **additionalProperties**|uz-af|
|» » **additionalProperties**|uz-uz|
|» » **additionalProperties**|vai|
|» » **additionalProperties**|vai-lr|
|» » **additionalProperties**|ve|
|» » **additionalProperties**|vec|
|» » **additionalProperties**|vec-it|
|» » **additionalProperties**|vi|
|» » **additionalProperties**|vi-vn|
|» » **additionalProperties**|vmw|
|» » **additionalProperties**|vmw-mz|
|» » **additionalProperties**|vo|
|» » **additionalProperties**|vo-001|
|» » **additionalProperties**|vun|
|» » **additionalProperties**|vun-tz|
|» » **additionalProperties**|wa|
|» » **additionalProperties**|wae|
|» » **additionalProperties**|wae-ch|
|» » **additionalProperties**|wo|
|» » **additionalProperties**|wo-sn|
|» » **additionalProperties**|xh|
|» » **additionalProperties**|xh-za|
|» » **additionalProperties**|xnr|
|» » **additionalProperties**|xnr-in|
|» » **additionalProperties**|xog|
|» » **additionalProperties**|xog-ug|
|» » **additionalProperties**|yav|
|» » **additionalProperties**|yav-cm|
|» » **additionalProperties**|yi-ua|
|» » **additionalProperties**|yo|
|» » **additionalProperties**|yo-bj|
|» » **additionalProperties**|yo-ng|
|» » **additionalProperties**|yrl|
|» » **additionalProperties**|yrl-br|
|» » **additionalProperties**|yrl-co|
|» » **additionalProperties**|yrl-ve|
|» » **additionalProperties**|yue|
|» » **additionalProperties**|yue-cn|
|» » **additionalProperties**|yue-hk|
|» » **additionalProperties**|yue-mo|
|» » **additionalProperties**|zgh|
|» » **additionalProperties**|zgh-ma|
|» » **additionalProperties**|za|
|» » **additionalProperties**|za-cn|
|» » **additionalProperties**|zh|
|» » **additionalProperties**|zh-cn|
|» » **additionalProperties**|zh-hans|
|» » **additionalProperties**|zh-hant|
|» » **additionalProperties**|zh-hk|
|» » **additionalProperties**|zh-mo|
|» » **additionalProperties**|zh-my|
|» » **additionalProperties**|zh-sg|
|» » **additionalProperties**|zh-tw|
|» » **additionalProperties**|zu|
|» » **additionalProperties**|zu-za|

> Example responses

> default Response

```json
null
```

<h3 id="update-languages-of-multi-language-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="pages-website-pages">Website pages</h1>

## Set a new primary language

<a id="opIdput-/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary_setLangPrimary"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary \
  -X PUT \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cms/pages/2026-09/landing-pages/multi-language/set-new-lang-primary`

Set a landing page as the primary language of a multi-language group.

> Body parameter

```json
null
```

<h3 id="set-a-new-primary-language-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetNewLanguagePrimaryRequestVNext](#schemasetnewlanguageprimaryrequestvnext)|true|none|
|» id|body|string|true|ID of object to set as primary in multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="set-a-new-primary-language-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve all website pages

<a id="opIdget-/cms/pages/2026-09/site-pages_getPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/site-pages`

Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.

<h3 id="retrieve-all-website-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter pages created after the specified date-time.|
|createdAt|query|string(date-time)|false|Filter pages by their exact creation timestamp. Format should be date-time.|
|createdBefore|query|string(date-time)|false|Filter pages created before the specified date-time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify which properties to include in the response.|
|sort|query|[string]|false|Specify the order of the results. Accepts an array of strings.|
|updatedAfter|query|string(date-time)|false|Filter pages updated after the specified date-time.|
|updatedAt|query|string(date-time)|false|Filter pages by their exact update timestamp. Format should be date-time.|
|updatedBefore|query|string(date-time)|false|Filter pages updated before the specified date-time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-all-website-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPageForwardPaging](#schemacollectionresponsewithtotalpageforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a website page

<a id="opIdpost-/cms/pages/2026-09/site-pages_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages`

Create a new website page.

> Body parameter

```json
null
```

<h3 id="create-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Clone a website page

<a id="opIdpost-/cms/pages/2026-09/site-pages/clone_clone"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/clone \
  -X POST \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/clone`

Create a copy of an existing website page.

> Body parameter

```json
null
```

<h3 id="clone-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentCloneRequestVNext](#schemacontentclonerequestvnext)|true|none|
|» cloneName|body|string|false|Name of the cloned object.|
|» id|body|string|true|ID of the object to be cloned.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="clone-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Schedule a website page to be published

<a id="opIdpost-/cms/pages/2026-09/site-pages/schedule_schedule"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/pages/2026-09/site-pages/schedule \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/schedule`

Schedule a website page to published at a future time.

> Body parameter

```json
null
```

<h3 id="schedule-a-website-page-to-be-published-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentScheduleRequestVNext](#schemacontentschedulerequestvnext)|true|none|
|» id|body|string|true|The ID of the object to be scheduled.|
|» publishDate|body|string(date-time)|true|The date the object should transition from scheduled to published.|

> Example responses

> default Response

```json
null
```

<h3 id="schedule-a-website-page-to-be-published-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a website page

<a id="opIdget-/cms/pages/2026-09/site-pages/{objectId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/site-pages/{objectId}`

Retrieve a website page by its ID.

<h3 id="retrieve-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|property|query|string|false|A specific property to include in the response. Use a comma-separated list for multiple properties.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a website page

<a id="opIddelete-/cms/pages/2026-09/site-pages/{objectId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/pages/2026-09/site-pages/{objectId}`

Delete a website page, specified by its ID.

<h3 id="delete-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a website page

<a id="opIdpatch-/cms/pages/2026-09/site-pages/{objectId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/pages/2026-09/site-pages/{objectId}`

Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying.


> Body parameter

```json
null
```

<h3 id="update-a-website-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-website-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a website page draft

<a id="opIdget-/cms/pages/2026-09/site-pages/{objectId}/draft_getDraftById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/draft' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/pages/2026-09/site-pages/{objectId}/draft`

Retrieve the full draft version of a website page, specified by its ID.

<h3 id="retrieve-a-website-page-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page whose draft version is to be retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-website-page-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a website page draft

<a id="opIdpatch-/cms/pages/2026-09/site-pages/{objectId}/draft_updateDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/draft' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/pages/2026-09/site-pages/{objectId}/draft`

Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you're modifying.

> Body parameter

```json
null
```

<h3 id="update-a-website-page-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page draft to update.|
|body|body|[Page](#schemapage)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this page, if applicable|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|string(date-time)|true|The timestamp when this page was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the page will not show up in your dashboard, although the page could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this page.|
|» campaign|body|string|true|The GUID of the marketing campaign this page is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|» created|body|string(date-time)|true|The timestamp indicating when the page was created.|
|» createdById|body|string|true|The ID of the user that created this page.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this page.|
|» currentlyPublished|body|boolean|true|Indicates whether the page is currently published.|
|» domain|body|string|true|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this page references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this page.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|The ID of the associated folder this landing page is organized under in the app dashboard.|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this page.|
|» id|body|string|true|The unique ID of the page.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the page.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the page.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this page should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this page|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|» pageRedirected|body|boolean|true|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the page is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» slug|body|string|true|The path of the this page. This field is appended to the domain to construct the url of this page.|
|» state|body|string|true|An ENUM descibing the current state of this page.|
|» subcategory|body|string|true|Details the type of page this is. Should always be landing_page or site_page|
|» templatePath|body|string|true|String detailing the path of the template used for this page.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the page.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary page this object was translated from.|
|» translations|body|object|true|A map of translations for the page, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp indicating when the page was last updated.|
|» updatedById|body|string|true|The ID of the user that updated this page.|
|» url|body|string|true|A generated field representing the URL of this page.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this page should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|» » **additionalProperties**|body|object|false|none|
|» widgets|body|object|true|A data structure containing the data for all the modules for this page.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» abStatus|automated_loser_variant|
|» abStatus|automated_master|
|» abStatus|automated_variant|
|» abStatus|loser_variant|
|» abStatus|mab_master|
|» abStatus|mab_variant|
|» abStatus|master|
|» abStatus|variant|
|» contentTypeCategory|0|
|» contentTypeCategory|1|
|» contentTypeCategory|10|
|» contentTypeCategory|11|
|» contentTypeCategory|12|
|» contentTypeCategory|13|
|» contentTypeCategory|14|
|» contentTypeCategory|15|
|» contentTypeCategory|16|
|» contentTypeCategory|17|
|» contentTypeCategory|18|
|» contentTypeCategory|19|
|» contentTypeCategory|2|
|» contentTypeCategory|20|
|» contentTypeCategory|21|
|» contentTypeCategory|22|
|» contentTypeCategory|3|
|» contentTypeCategory|4|
|» contentTypeCategory|5|
|» contentTypeCategory|6|
|» contentTypeCategory|7|
|» contentTypeCategory|8|
|» contentTypeCategory|9|
|» currentState|AGENT_GENERATED|
|» currentState|AUTOMATED|
|» currentState|AUTOMATED_AB|
|» currentState|AUTOMATED_AB_VARIANT|
|» currentState|AUTOMATED_DRAFT|
|» currentState|AUTOMATED_DRAFT_AB|
|» currentState|AUTOMATED_DRAFT_ABVARIANT|
|» currentState|AUTOMATED_FOR_FORM|
|» currentState|AUTOMATED_FOR_FORM_BUFFER|
|» currentState|AUTOMATED_FOR_FORM_DRAFT|
|» currentState|AUTOMATED_FOR_FORM_LEGACY|
|» currentState|AUTOMATED_LOSER_ABVARIANT|
|» currentState|AUTOMATED_SENDING|
|» currentState|BLOG_EMAIL_DRAFT|
|» currentState|BLOG_EMAIL_PUBLISHED|
|» currentState|DRAFT|
|» currentState|DRAFT_AB|
|» currentState|DRAFT_AB_VARIANT|
|» currentState|ERROR|
|» currentState|LOSER_AB_VARIANT|
|» currentState|PAGE_STUB|
|» currentState|PRE_PROCESSING|
|» currentState|PROCESSING|
|» currentState|PUBLISHED|
|» currentState|PUBLISHED_AB|
|» currentState|PUBLISHED_AB_VARIANT|
|» currentState|PUBLISHED_OR_SCHEDULED|
|» currentState|RSS_TO_EMAIL_DRAFT|
|» currentState|RSS_TO_EMAIL_PUBLISHED|
|» currentState|SCHEDULED|
|» currentState|SCHEDULED_AB|
|» currentState|SCHEDULED_OR_PUBLISHED|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-website-page-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Page](#schemapage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Publish website page draft

<a id="opIdpost-/cms/pages/2026-09/site-pages/{objectId}/draft/push-live_pushLive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/pages/2026-09/site-pages/{objectId}/draft/push-live' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/pages/2026-09/site-pages/{objectId}/draft/push-live`

Take any changes from the draft version of the website page and apply them to the live version.

<h3 id="publish-website-page-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the site page whose draft version is to be pushed live.|

> Example responses

> default Response

```json
null
```

<h3 id="publish-website-page-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

<h2 id="tocS_AbTestCreateRequestVNext">AbTestCreateRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaabtestcreaterequestvnext"></a>
<a id="schema_AbTestCreateRequestVNext"></a>
<a id="tocSabtestcreaterequestvnext"></a>
<a id="tocsabtestcreaterequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|true|none|ID of the object to test.|
|variationName|string|true|none|Name of A/B test variation.|

<h2 id="tocS_AbTestEndRequestVNext">AbTestEndRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaabtestendrequestvnext"></a>
<a id="schema_AbTestEndRequestVNext"></a>
<a id="tocSabtestendrequestvnext"></a>
<a id="tocsabtestendrequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestId|string|true|none|ID of the test to end.|
|winnerId|string|true|none|ID of the object to designate as the test winner.|

<h2 id="tocS_AbTestRerunRequestVNext">AbTestRerunRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaabtestrerunrequestvnext"></a>
<a id="schema_AbTestRerunRequestVNext"></a>
<a id="tocSabtestrerunrequestvnext"></a>
<a id="tocsabtestrerunrequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abTestId|string|true|none|ID of the test to rerun.|
|variationId|string|true|none|ID of the object to reactivate as a test variation.|

<h2 id="tocS_Angle">Angle</h2>
<!-- backwards compatibility -->
<a id="schemaangle"></a>
<a id="schema_Angle"></a>
<a id="tocSangle"></a>
<a id="tocsangle"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|string|true|none|The unit of measurement for the angle.|
|value|number|true|none|The numerical representation of the angle.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|DEGREES|
|units|GRADIANS|
|units|RADIANS|
|units|TURNS|

<h2 id="tocS_AttachToLangPrimaryRequestVNext">AttachToLangPrimaryRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaattachtolangprimaryrequestvnext"></a>
<a id="schema_AttachToLangPrimaryRequestVNext"></a>
<a id="tocSattachtolangprimaryrequestvnext"></a>
<a id="tocsattachtolangprimaryrequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the object to add to a multi-language group.|
|language|string|true|none|Designated language of the object to add to a multi-language group.|
|primaryId|string|true|none|ID of primary language object in multi-language group.|
|primaryLanguage|string|false|none|Primary language of the multi-language group.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|aa|
|language|ab|
|language|ae|
|language|af|
|language|af-na|
|language|af-za|
|language|agq|
|language|agq-cm|
|language|ak|
|language|ak-gh|
|language|am|
|language|am-et|
|language|an|
|language|ann|
|language|ann-ng|
|language|ar|
|language|ar-001|
|language|ar-ae|
|language|ar-bh|
|language|ar-dj|
|language|ar-dz|
|language|ar-eg|
|language|ar-eh|
|language|ar-er|
|language|ar-il|
|language|ar-iq|
|language|ar-jo|
|language|ar-km|
|language|ar-kw|
|language|ar-lb|
|language|ar-ly|
|language|ar-ma|
|language|ar-mr|
|language|ar-om|
|language|ar-ps|
|language|ar-qa|
|language|ar-sa|
|language|ar-sd|
|language|ar-so|
|language|ar-ss|
|language|ar-sy|
|language|ar-td|
|language|ar-tn|
|language|ar-ye|
|language|as|
|language|as-in|
|language|asa|
|language|asa-tz|
|language|ast|
|language|ast-es|
|language|av|
|language|ay|
|language|az|
|language|az-az|
|language|ba|
|language|bal|
|language|bal-pk|
|language|bas|
|language|bas-cm|
|language|be|
|language|be-by|
|language|bem|
|language|bem-zm|
|language|bez|
|language|bez-tz|
|language|bg|
|language|bg-bg|
|language|bgc|
|language|bgc-in|
|language|bho|
|language|bho-in|
|language|bi|
|language|blo|
|language|blo-bj|
|language|bm|
|language|bm-ml|
|language|bn|
|language|bn-bd|
|language|bn-in|
|language|bo|
|language|bo-cn|
|language|bo-in|
|language|br|
|language|br-fr|
|language|brx|
|language|brx-in|
|language|bs|
|language|bs-ba|
|language|ca|
|language|ca-ad|
|language|ca-es|
|language|ca-fr|
|language|ca-it|
|language|ccp|
|language|ccp-bd|
|language|ccp-in|
|language|ce|
|language|ce-ru|
|language|ceb|
|language|ceb-ph|
|language|cgg|
|language|cgg-ug|
|language|ch|
|language|chr|
|language|chr-us|
|language|ckb|
|language|ckb-iq|
|language|ckb-ir|
|language|co|
|language|cr|
|language|cs|
|language|cs-cz|
|language|csw|
|language|csw-ca|
|language|cu|
|language|cu-ru|
|language|cv|
|language|cv-ru|
|language|cy|
|language|cy-gb|
|language|da|
|language|da-dk|
|language|da-gl|
|language|dav|
|language|dav-ke|
|language|de|
|language|de-at|
|language|de-be|
|language|de-ch|
|language|de-de|
|language|de-gr|
|language|de-it|
|language|de-li|
|language|de-lu|
|language|dje|
|language|dje-ne|
|language|doi|
|language|doi-in|
|language|dsb|
|language|dsb-de|
|language|dua|
|language|dua-cm|
|language|dv|
|language|dyo|
|language|dyo-sn|
|language|dz|
|language|dz-bt|
|language|ebu|
|language|ebu-ke|
|language|ee|
|language|ee-gh|
|language|ee-tg|
|language|el|
|language|el-cy|
|language|el-gr|
|language|en|
|language|en-001|
|language|en-150|
|language|en-ae|
|language|en-ag|
|language|en-ai|
|language|en-as|
|language|en-at|
|language|en-au|
|language|en-bb|
|language|en-be|
|language|en-bi|
|language|en-bm|
|language|en-bs|
|language|en-bw|
|language|en-bz|
|language|en-ca|
|language|en-cc|
|language|en-ch|
|language|en-ck|
|language|en-cm|
|language|en-cn|
|language|en-cx|
|language|en-cy|
|language|en-cz|
|language|en-de|
|language|en-dg|
|language|en-dk|
|language|en-dm|
|language|en-ee|
|language|en-eg|
|language|en-er|
|language|en-es|
|language|en-fi|
|language|en-fj|
|language|en-fk|
|language|en-fm|
|language|en-fr|
|language|en-gb|
|language|en-gd|
|language|en-gg|
|language|en-gh|
|language|en-gi|
|language|en-gm|
|language|en-gs|
|language|en-gu|
|language|en-gy|
|language|en-hk|
|language|en-hu|
|language|en-id|
|language|en-ie|
|language|en-il|
|language|en-im|
|language|en-in|
|language|en-io|
|language|en-it|
|language|en-je|
|language|en-jm|
|language|en-ke|
|language|en-ki|
|language|en-kn|
|language|en-ky|
|language|en-lc|
|language|en-lr|
|language|en-ls|
|language|en-lu|
|language|en-mg|
|language|en-mh|
|language|en-mo|
|language|en-mp|
|language|en-ms|
|language|en-mt|
|language|en-mu|
|language|en-mv|
|language|en-mw|
|language|en-mx|
|language|en-my|
|language|en-na|
|language|en-nf|
|language|en-ng|
|language|en-nl|
|language|en-no|
|language|en-nr|
|language|en-nu|
|language|en-nz|
|language|en-pg|
|language|en-ph|
|language|en-pk|
|language|en-pl|
|language|en-pn|
|language|en-pr|
|language|en-pt|
|language|en-pw|
|language|en-ro|
|language|en-rw|
|language|en-sb|
|language|en-sc|
|language|en-sd|
|language|en-se|
|language|en-sg|
|language|en-sh|
|language|en-si|
|language|en-sk|
|language|en-sl|
|language|en-ss|
|language|en-sx|
|language|en-sz|
|language|en-tc|
|language|en-th|
|language|en-tk|
|language|en-tn|
|language|en-to|
|language|en-tt|
|language|en-tv|
|language|en-tz|
|language|en-ug|
|language|en-um|
|language|en-us|
|language|en-vc|
|language|en-vg|
|language|en-vi|
|language|en-vn|
|language|en-vu|
|language|en-ws|
|language|en-za|
|language|en-zm|
|language|en-zw|
|language|eo|
|language|eo-001|
|language|es|
|language|es-419|
|language|es-ar|
|language|es-bo|
|language|es-br|
|language|es-bz|
|language|es-cl|
|language|es-co|
|language|es-cr|
|language|es-cu|
|language|es-do|
|language|es-ea|
|language|es-ec|
|language|es-es|
|language|es-gq|
|language|es-gt|
|language|es-hn|
|language|es-ic|
|language|es-mx|
|language|es-ni|
|language|es-pa|
|language|es-pe|
|language|es-ph|
|language|es-pr|
|language|es-py|
|language|es-sv|
|language|es-us|
|language|es-uy|
|language|es-ve|
|language|et|
|language|et-ee|
|language|eu|
|language|eu-es|
|language|ewo|
|language|ewo-cm|
|language|fa|
|language|fa-af|
|language|fa-ir|
|language|ff|
|language|ff-bf|
|language|ff-cm|
|language|ff-gh|
|language|ff-gm|
|language|ff-gn|
|language|ff-gw|
|language|ff-lr|
|language|ff-mr|
|language|ff-ne|
|language|ff-ng|
|language|ff-sl|
|language|ff-sn|
|language|fi|
|language|fi-fi|
|language|fil|
|language|fil-ph|
|language|fj|
|language|fo|
|language|fo-dk|
|language|fo-fo|
|language|fr|
|language|fr-be|
|language|fr-bf|
|language|fr-bi|
|language|fr-bj|
|language|fr-bl|
|language|fr-ca|
|language|fr-cd|
|language|fr-cf|
|language|fr-cg|
|language|fr-ch|
|language|fr-ci|
|language|fr-cm|
|language|fr-dj|
|language|fr-dz|
|language|fr-fr|
|language|fr-ga|
|language|fr-gf|
|language|fr-gn|
|language|fr-gp|
|language|fr-gq|
|language|fr-ht|
|language|fr-km|
|language|fr-lu|
|language|fr-ma|
|language|fr-mc|
|language|fr-mf|
|language|fr-mg|
|language|fr-ml|
|language|fr-mq|
|language|fr-mr|
|language|fr-mu|
|language|fr-nc|
|language|fr-ne|
|language|fr-pf|
|language|fr-pm|
|language|fr-re|
|language|fr-rw|
|language|fr-sc|
|language|fr-sn|
|language|fr-sy|
|language|fr-td|
|language|fr-tg|
|language|fr-tn|
|language|fr-vu|
|language|fr-wf|
|language|fr-yt|
|language|frr|
|language|frr-de|
|language|fur|
|language|fur-it|
|language|fy|
|language|fy-nl|
|language|ga|
|language|ga-gb|
|language|ga-ie|
|language|gaa|
|language|gaa-gh|
|language|gd|
|language|gd-gb|
|language|gl|
|language|gl-es|
|language|gn|
|language|gsw|
|language|gsw-ch|
|language|gsw-fr|
|language|gsw-li|
|language|gu|
|language|gu-in|
|language|guz|
|language|guz-ke|
|language|gv|
|language|gv-im|
|language|ha|
|language|ha-gh|
|language|ha-ne|
|language|ha-ng|
|language|haw|
|language|haw-us|
|language|he|
|language|he-il|
|language|he-il|
|language|hi|
|language|hi-in|
|language|hmn|
|language|ho|
|language|hr|
|language|hr-ba|
|language|hr-hr|
|language|hsb|
|language|hsb-de|
|language|ht|
|language|ht-ht|
|language|hu|
|language|hu-hu|
|language|hy|
|language|hy-am|
|language|hz|
|language|ia|
|language|ia-001|
|language|id|
|language|id-id|
|language|ie|
|language|ie-ee|
|language|ig|
|language|ig-ng|
|language|ii|
|language|ii-cn|
|language|ik|
|language|io|
|language|is|
|language|is-is|
|language|it|
|language|it-ch|
|language|it-it|
|language|it-sm|
|language|it-va|
|language|iu|
|language|ja|
|language|ja-jp|
|language|jgo|
|language|jgo-cm|
|language|jmc|
|language|jmc-tz|
|language|jv|
|language|jv-id|
|language|ka|
|language|ka-ge|
|language|kab|
|language|kab-dz|
|language|kam|
|language|kam-ke|
|language|kar|
|language|kde|
|language|kde-tz|
|language|kea|
|language|kea-cv|
|language|kg|
|language|kgp|
|language|kgp-br|
|language|kh|
|language|khq|
|language|khq-ml|
|language|ki|
|language|ki-ke|
|language|kj|
|language|kk|
|language|kk-kz|
|language|kkj|
|language|kkj-cm|
|language|kl|
|language|kl-gl|
|language|kln|
|language|kln-ke|
|language|km|
|language|km-kh|
|language|kn|
|language|kn-in|
|language|ko|
|language|ko-cn|
|language|ko-kp|
|language|ko-kr|
|language|kok|
|language|kok-in|
|language|kr|
|language|ks|
|language|ks-in|
|language|ksb|
|language|ksb-tz|
|language|ksf|
|language|ksf-cm|
|language|ksh|
|language|ksh-de|
|language|ku|
|language|ku-tr|
|language|kv|
|language|kw|
|language|kw-gb|
|language|kxv|
|language|kxv-in|
|language|ky|
|language|ky-kg|
|language|la|
|language|lag|
|language|lag-tz|
|language|lb|
|language|lb-lu|
|language|lg|
|language|lg-ug|
|language|li|
|language|lij|
|language|lij-it|
|language|lkt|
|language|lkt-us|
|language|lmo|
|language|lmo-it|
|language|ln|
|language|ln-ao|
|language|ln-cd|
|language|ln-cf|
|language|ln-cg|
|language|lo|
|language|lo-la|
|language|lrc|
|language|lrc-iq|
|language|lrc-ir|
|language|lt|
|language|lt-lt|
|language|lu|
|language|lu-cd|
|language|luo|
|language|luo-ke|
|language|luy|
|language|luy-ke|
|language|lv|
|language|lv-lv|
|language|mai|
|language|mai-in|
|language|mas|
|language|mas-ke|
|language|mas-tz|
|language|mdf|
|language|mdf-ru|
|language|mer|
|language|mer-ke|
|language|mfe|
|language|mfe-mu|
|language|mg|
|language|mg-mg|
|language|mgh|
|language|mgh-mz|
|language|mgo|
|language|mgo-cm|
|language|mh|
|language|mi|
|language|mi-nz|
|language|mk|
|language|mk-mk|
|language|ml|
|language|ml-in|
|language|mn|
|language|mn-mn|
|language|mni|
|language|mni-in|
|language|mr|
|language|mr-in|
|language|ms|
|language|ms-bn|
|language|ms-id|
|language|ms-my|
|language|ms-sg|
|language|mt|
|language|mt-mt|
|language|mua|
|language|mua-cm|
|language|my|
|language|my-mm|
|language|mzn|
|language|mzn-ir|
|language|na|
|language|naq|
|language|naq-na|
|language|nb|
|language|nb-no|
|language|nb-sj|
|language|nd|
|language|nd-zw|
|language|nds|
|language|nds-de|
|language|nds-nl|
|language|ne|
|language|ne-in|
|language|ne-np|
|language|ng|
|language|nl|
|language|nl-aw|
|language|nl-be|
|language|nl-bq|
|language|nl-ch|
|language|nl-cw|
|language|nl-lu|
|language|nl-nl|
|language|nl-sr|
|language|nl-sx|
|language|nmg|
|language|nmg-cm|
|language|nn|
|language|nn-no|
|language|nnh|
|language|nnh-cm|
|language|no|
|language|no-no|
|language|nqo|
|language|nqo-gn|
|language|nr|
|language|nso|
|language|nso-za|
|language|nus|
|language|nus-ss|
|language|nv|
|language|ny|
|language|nyn|
|language|nyn-ug|
|language|oc|
|language|oc-es|
|language|oc-fr|
|language|oj|
|language|om|
|language|om-et|
|language|om-ke|
|language|or|
|language|or-in|
|language|os|
|language|os-ge|
|language|os-ru|
|language|pa|
|language|pa-in|
|language|pa-pk|
|language|pcm|
|language|pcm-ng|
|language|pi|
|language|pis|
|language|pis-sb|
|language|pl|
|language|pl-pl|
|language|prg|
|language|prg-001|
|language|ps|
|language|ps-af|
|language|ps-pk|
|language|pt|
|language|pt-ao|
|language|pt-br|
|language|pt-ch|
|language|pt-cv|
|language|pt-gq|
|language|pt-gw|
|language|pt-lu|
|language|pt-mo|
|language|pt-mz|
|language|pt-pt|
|language|pt-st|
|language|pt-tl|
|language|qu|
|language|qu-bo|
|language|qu-ec|
|language|qu-pe|
|language|raj|
|language|raj-in|
|language|rm|
|language|rm-ch|
|language|rn|
|language|rn-bi|
|language|ro|
|language|ro-md|
|language|ro-ro|
|language|rof|
|language|rof-tz|
|language|ru|
|language|ru-by|
|language|ru-kg|
|language|ru-kz|
|language|ru-md|
|language|ru-ru|
|language|ru-ua|
|language|rw|
|language|rw-rw|
|language|rwk|
|language|rwk-tz|
|language|sa|
|language|sa-in|
|language|sah|
|language|sah-ru|
|language|saq|
|language|saq-ke|
|language|sat|
|language|sat-in|
|language|sbp|
|language|sbp-tz|
|language|sc|
|language|sc-it|
|language|sd|
|language|sd-in|
|language|sd-pk|
|language|se|
|language|se-fi|
|language|se-no|
|language|se-se|
|language|seh|
|language|seh-mz|
|language|ses|
|language|ses-ml|
|language|sg|
|language|sg-cf|
|language|shi|
|language|shi-ma|
|language|si|
|language|si-lk|
|language|sk|
|language|sk-sk|
|language|sl|
|language|sl-si|
|language|sm|
|language|smn|
|language|smn-fi|
|language|sms|
|language|sms-fi|
|language|sn|
|language|sn-zw|
|language|so|
|language|so-dj|
|language|so-et|
|language|so-ke|
|language|so-so|
|language|sq|
|language|sq-al|
|language|sq-mk|
|language|sq-xk|
|language|sr|
|language|sr-ba|
|language|sr-cs|
|language|sr-me|
|language|sr-rs|
|language|sr-xk|
|language|ss|
|language|st|
|language|st-ls|
|language|st-za|
|language|su|
|language|su-id|
|language|sv|
|language|sv-ax|
|language|sv-fi|
|language|sv-se|
|language|sw|
|language|sw-cd|
|language|sw-ke|
|language|sw-tz|
|language|sw-ug|
|language|sy|
|language|syr|
|language|syr-iq|
|language|syr-sy|
|language|szl|
|language|szl-pl|
|language|ta|
|language|ta-in|
|language|ta-lk|
|language|ta-my|
|language|ta-sg|
|language|te|
|language|te-in|
|language|teo|
|language|teo-ke|
|language|teo-ug|
|language|tg|
|language|tg-tj|
|language|th|
|language|th-th|
|language|ti|
|language|ti-er|
|language|ti-et|
|language|tk|
|language|tk-tm|
|language|tl|
|language|tn|
|language|tn-bw|
|language|tn-za|
|language|to|
|language|to-to|
|language|tok|
|language|tok-001|
|language|tr|
|language|tr-cy|
|language|tr-tr|
|language|ts|
|language|tt|
|language|tt-ru|
|language|tw|
|language|twq|
|language|twq-ne|
|language|ty|
|language|tzm|
|language|tzm-ma|
|language|ug|
|language|ug-cn|
|language|uk|
|language|uk-ua|
|language|ur|
|language|ur-in|
|language|ur-pk|
|language|uz|
|language|uz-af|
|language|uz-uz|
|language|vai|
|language|vai-lr|
|language|ve|
|language|vec|
|language|vec-it|
|language|vi|
|language|vi-vn|
|language|vmw|
|language|vmw-mz|
|language|vo|
|language|vo-001|
|language|vun|
|language|vun-tz|
|language|wa|
|language|wae|
|language|wae-ch|
|language|wo|
|language|wo-sn|
|language|xh|
|language|xh-za|
|language|xnr|
|language|xnr-in|
|language|xog|
|language|xog-ug|
|language|yav|
|language|yav-cm|
|language|yi|
|language|yi|
|language|yi-001|
|language|yi-ua|
|language|yo|
|language|yo-bj|
|language|yo-ng|
|language|yrl|
|language|yrl-br|
|language|yrl-co|
|language|yrl-ve|
|language|yue|
|language|yue-cn|
|language|yue-hk|
|language|yue-mo|
|language|za|
|language|za-cn|
|language|zgh|
|language|zgh-ma|
|language|zh|
|language|zh-cn|
|language|zh-hans|
|language|zh-hant|
|language|zh-hk|
|language|zh-mo|
|language|zh-my|
|language|zh-sg|
|language|zh-tw|
|language|zu|
|language|zu-za|
|primaryLanguage|aa|
|primaryLanguage|ab|
|primaryLanguage|ae|
|primaryLanguage|af|
|primaryLanguage|af-na|
|primaryLanguage|af-za|
|primaryLanguage|agq|
|primaryLanguage|agq-cm|
|primaryLanguage|ak|
|primaryLanguage|ak-gh|
|primaryLanguage|am|
|primaryLanguage|am-et|
|primaryLanguage|an|
|primaryLanguage|ann|
|primaryLanguage|ann-ng|
|primaryLanguage|ar|
|primaryLanguage|ar-001|
|primaryLanguage|ar-ae|
|primaryLanguage|ar-bh|
|primaryLanguage|ar-dj|
|primaryLanguage|ar-dz|
|primaryLanguage|ar-eg|
|primaryLanguage|ar-eh|
|primaryLanguage|ar-er|
|primaryLanguage|ar-il|
|primaryLanguage|ar-iq|
|primaryLanguage|ar-jo|
|primaryLanguage|ar-km|
|primaryLanguage|ar-kw|
|primaryLanguage|ar-lb|
|primaryLanguage|ar-ly|
|primaryLanguage|ar-ma|
|primaryLanguage|ar-mr|
|primaryLanguage|ar-om|
|primaryLanguage|ar-ps|
|primaryLanguage|ar-qa|
|primaryLanguage|ar-sa|
|primaryLanguage|ar-sd|
|primaryLanguage|ar-so|
|primaryLanguage|ar-ss|
|primaryLanguage|ar-sy|
|primaryLanguage|ar-td|
|primaryLanguage|ar-tn|
|primaryLanguage|ar-ye|
|primaryLanguage|as|
|primaryLanguage|as-in|
|primaryLanguage|asa|
|primaryLanguage|asa-tz|
|primaryLanguage|ast|
|primaryLanguage|ast-es|
|primaryLanguage|av|
|primaryLanguage|ay|
|primaryLanguage|az|
|primaryLanguage|az-az|
|primaryLanguage|ba|
|primaryLanguage|bal|
|primaryLanguage|bal-pk|
|primaryLanguage|bas|
|primaryLanguage|bas-cm|
|primaryLanguage|be|
|primaryLanguage|be-by|
|primaryLanguage|bem|
|primaryLanguage|bem-zm|
|primaryLanguage|bez|
|primaryLanguage|bez-tz|
|primaryLanguage|bg|
|primaryLanguage|bg-bg|
|primaryLanguage|bgc|
|primaryLanguage|bgc-in|
|primaryLanguage|bho|
|primaryLanguage|bho-in|
|primaryLanguage|bi|
|primaryLanguage|blo|
|primaryLanguage|blo-bj|
|primaryLanguage|bm|
|primaryLanguage|bm-ml|
|primaryLanguage|bn|
|primaryLanguage|bn-bd|
|primaryLanguage|bn-in|
|primaryLanguage|bo|
|primaryLanguage|bo-cn|
|primaryLanguage|bo-in|
|primaryLanguage|br|
|primaryLanguage|br-fr|
|primaryLanguage|brx|
|primaryLanguage|brx-in|
|primaryLanguage|bs|
|primaryLanguage|bs-ba|
|primaryLanguage|ca|
|primaryLanguage|ca-ad|
|primaryLanguage|ca-es|
|primaryLanguage|ca-fr|
|primaryLanguage|ca-it|
|primaryLanguage|ccp|
|primaryLanguage|ccp-bd|
|primaryLanguage|ccp-in|
|primaryLanguage|ce|
|primaryLanguage|ce-ru|
|primaryLanguage|ceb|
|primaryLanguage|ceb-ph|
|primaryLanguage|cgg|
|primaryLanguage|cgg-ug|
|primaryLanguage|ch|
|primaryLanguage|chr|
|primaryLanguage|chr-us|
|primaryLanguage|ckb|
|primaryLanguage|ckb-iq|
|primaryLanguage|ckb-ir|
|primaryLanguage|co|
|primaryLanguage|cr|
|primaryLanguage|cs|
|primaryLanguage|cs-cz|
|primaryLanguage|csw|
|primaryLanguage|csw-ca|
|primaryLanguage|cu|
|primaryLanguage|cu-ru|
|primaryLanguage|cv|
|primaryLanguage|cv-ru|
|primaryLanguage|cy|
|primaryLanguage|cy-gb|
|primaryLanguage|da|
|primaryLanguage|da-dk|
|primaryLanguage|da-gl|
|primaryLanguage|dav|
|primaryLanguage|dav-ke|
|primaryLanguage|de|
|primaryLanguage|de-at|
|primaryLanguage|de-be|
|primaryLanguage|de-ch|
|primaryLanguage|de-de|
|primaryLanguage|de-gr|
|primaryLanguage|de-it|
|primaryLanguage|de-li|
|primaryLanguage|de-lu|
|primaryLanguage|dje|
|primaryLanguage|dje-ne|
|primaryLanguage|doi|
|primaryLanguage|doi-in|
|primaryLanguage|dsb|
|primaryLanguage|dsb-de|
|primaryLanguage|dua|
|primaryLanguage|dua-cm|
|primaryLanguage|dv|
|primaryLanguage|dyo|
|primaryLanguage|dyo-sn|
|primaryLanguage|dz|
|primaryLanguage|dz-bt|
|primaryLanguage|ebu|
|primaryLanguage|ebu-ke|
|primaryLanguage|ee|
|primaryLanguage|ee-gh|
|primaryLanguage|ee-tg|
|primaryLanguage|el|
|primaryLanguage|el-cy|
|primaryLanguage|el-gr|
|primaryLanguage|en|
|primaryLanguage|en-001|
|primaryLanguage|en-150|
|primaryLanguage|en-ae|
|primaryLanguage|en-ag|
|primaryLanguage|en-ai|
|primaryLanguage|en-as|
|primaryLanguage|en-at|
|primaryLanguage|en-au|
|primaryLanguage|en-bb|
|primaryLanguage|en-be|
|primaryLanguage|en-bi|
|primaryLanguage|en-bm|
|primaryLanguage|en-bs|
|primaryLanguage|en-bw|
|primaryLanguage|en-bz|
|primaryLanguage|en-ca|
|primaryLanguage|en-cc|
|primaryLanguage|en-ch|
|primaryLanguage|en-ck|
|primaryLanguage|en-cm|
|primaryLanguage|en-cn|
|primaryLanguage|en-cx|
|primaryLanguage|en-cy|
|primaryLanguage|en-cz|
|primaryLanguage|en-de|
|primaryLanguage|en-dg|
|primaryLanguage|en-dk|
|primaryLanguage|en-dm|
|primaryLanguage|en-ee|
|primaryLanguage|en-eg|
|primaryLanguage|en-er|
|primaryLanguage|en-es|
|primaryLanguage|en-fi|
|primaryLanguage|en-fj|
|primaryLanguage|en-fk|
|primaryLanguage|en-fm|
|primaryLanguage|en-fr|
|primaryLanguage|en-gb|
|primaryLanguage|en-gd|
|primaryLanguage|en-gg|
|primaryLanguage|en-gh|
|primaryLanguage|en-gi|
|primaryLanguage|en-gm|
|primaryLanguage|en-gs|
|primaryLanguage|en-gu|
|primaryLanguage|en-gy|
|primaryLanguage|en-hk|
|primaryLanguage|en-hu|
|primaryLanguage|en-id|
|primaryLanguage|en-ie|
|primaryLanguage|en-il|
|primaryLanguage|en-im|
|primaryLanguage|en-in|
|primaryLanguage|en-io|
|primaryLanguage|en-it|
|primaryLanguage|en-je|
|primaryLanguage|en-jm|
|primaryLanguage|en-ke|
|primaryLanguage|en-ki|
|primaryLanguage|en-kn|
|primaryLanguage|en-ky|
|primaryLanguage|en-lc|
|primaryLanguage|en-lr|
|primaryLanguage|en-ls|
|primaryLanguage|en-lu|
|primaryLanguage|en-mg|
|primaryLanguage|en-mh|
|primaryLanguage|en-mo|
|primaryLanguage|en-mp|
|primaryLanguage|en-ms|
|primaryLanguage|en-mt|
|primaryLanguage|en-mu|
|primaryLanguage|en-mv|
|primaryLanguage|en-mw|
|primaryLanguage|en-mx|
|primaryLanguage|en-my|
|primaryLanguage|en-na|
|primaryLanguage|en-nf|
|primaryLanguage|en-ng|
|primaryLanguage|en-nl|
|primaryLanguage|en-no|
|primaryLanguage|en-nr|
|primaryLanguage|en-nu|
|primaryLanguage|en-nz|
|primaryLanguage|en-pg|
|primaryLanguage|en-ph|
|primaryLanguage|en-pk|
|primaryLanguage|en-pl|
|primaryLanguage|en-pn|
|primaryLanguage|en-pr|
|primaryLanguage|en-pt|
|primaryLanguage|en-pw|
|primaryLanguage|en-ro|
|primaryLanguage|en-rw|
|primaryLanguage|en-sb|
|primaryLanguage|en-sc|
|primaryLanguage|en-sd|
|primaryLanguage|en-se|
|primaryLanguage|en-sg|
|primaryLanguage|en-sh|
|primaryLanguage|en-si|
|primaryLanguage|en-sk|
|primaryLanguage|en-sl|
|primaryLanguage|en-ss|
|primaryLanguage|en-sx|
|primaryLanguage|en-sz|
|primaryLanguage|en-tc|
|primaryLanguage|en-th|
|primaryLanguage|en-tk|
|primaryLanguage|en-tn|
|primaryLanguage|en-to|
|primaryLanguage|en-tt|
|primaryLanguage|en-tv|
|primaryLanguage|en-tz|
|primaryLanguage|en-ug|
|primaryLanguage|en-um|
|primaryLanguage|en-us|
|primaryLanguage|en-vc|
|primaryLanguage|en-vg|
|primaryLanguage|en-vi|
|primaryLanguage|en-vn|
|primaryLanguage|en-vu|
|primaryLanguage|en-ws|
|primaryLanguage|en-za|
|primaryLanguage|en-zm|
|primaryLanguage|en-zw|
|primaryLanguage|eo|
|primaryLanguage|eo-001|
|primaryLanguage|es|
|primaryLanguage|es-419|
|primaryLanguage|es-ar|
|primaryLanguage|es-bo|
|primaryLanguage|es-br|
|primaryLanguage|es-bz|
|primaryLanguage|es-cl|
|primaryLanguage|es-co|
|primaryLanguage|es-cr|
|primaryLanguage|es-cu|
|primaryLanguage|es-do|
|primaryLanguage|es-ea|
|primaryLanguage|es-ec|
|primaryLanguage|es-es|
|primaryLanguage|es-gq|
|primaryLanguage|es-gt|
|primaryLanguage|es-hn|
|primaryLanguage|es-ic|
|primaryLanguage|es-mx|
|primaryLanguage|es-ni|
|primaryLanguage|es-pa|
|primaryLanguage|es-pe|
|primaryLanguage|es-ph|
|primaryLanguage|es-pr|
|primaryLanguage|es-py|
|primaryLanguage|es-sv|
|primaryLanguage|es-us|
|primaryLanguage|es-uy|
|primaryLanguage|es-ve|
|primaryLanguage|et|
|primaryLanguage|et-ee|
|primaryLanguage|eu|
|primaryLanguage|eu-es|
|primaryLanguage|ewo|
|primaryLanguage|ewo-cm|
|primaryLanguage|fa|
|primaryLanguage|fa-af|
|primaryLanguage|fa-ir|
|primaryLanguage|ff|
|primaryLanguage|ff-bf|
|primaryLanguage|ff-cm|
|primaryLanguage|ff-gh|
|primaryLanguage|ff-gm|
|primaryLanguage|ff-gn|
|primaryLanguage|ff-gw|
|primaryLanguage|ff-lr|
|primaryLanguage|ff-mr|
|primaryLanguage|ff-ne|
|primaryLanguage|ff-ng|
|primaryLanguage|ff-sl|
|primaryLanguage|ff-sn|
|primaryLanguage|fi|
|primaryLanguage|fi-fi|
|primaryLanguage|fil|
|primaryLanguage|fil-ph|
|primaryLanguage|fj|
|primaryLanguage|fo|
|primaryLanguage|fo-dk|
|primaryLanguage|fo-fo|
|primaryLanguage|fr|
|primaryLanguage|fr-be|
|primaryLanguage|fr-bf|
|primaryLanguage|fr-bi|
|primaryLanguage|fr-bj|
|primaryLanguage|fr-bl|
|primaryLanguage|fr-ca|
|primaryLanguage|fr-cd|
|primaryLanguage|fr-cf|
|primaryLanguage|fr-cg|
|primaryLanguage|fr-ch|
|primaryLanguage|fr-ci|
|primaryLanguage|fr-cm|
|primaryLanguage|fr-dj|
|primaryLanguage|fr-dz|
|primaryLanguage|fr-fr|
|primaryLanguage|fr-ga|
|primaryLanguage|fr-gf|
|primaryLanguage|fr-gn|
|primaryLanguage|fr-gp|
|primaryLanguage|fr-gq|
|primaryLanguage|fr-ht|
|primaryLanguage|fr-km|
|primaryLanguage|fr-lu|
|primaryLanguage|fr-ma|
|primaryLanguage|fr-mc|
|primaryLanguage|fr-mf|
|primaryLanguage|fr-mg|
|primaryLanguage|fr-ml|
|primaryLanguage|fr-mq|
|primaryLanguage|fr-mr|
|primaryLanguage|fr-mu|
|primaryLanguage|fr-nc|
|primaryLanguage|fr-ne|
|primaryLanguage|fr-pf|
|primaryLanguage|fr-pm|
|primaryLanguage|fr-re|
|primaryLanguage|fr-rw|
|primaryLanguage|fr-sc|
|primaryLanguage|fr-sn|
|primaryLanguage|fr-sy|
|primaryLanguage|fr-td|
|primaryLanguage|fr-tg|
|primaryLanguage|fr-tn|
|primaryLanguage|fr-vu|
|primaryLanguage|fr-wf|
|primaryLanguage|fr-yt|
|primaryLanguage|frr|
|primaryLanguage|frr-de|
|primaryLanguage|fur|
|primaryLanguage|fur-it|
|primaryLanguage|fy|
|primaryLanguage|fy-nl|
|primaryLanguage|ga|
|primaryLanguage|ga-gb|
|primaryLanguage|ga-ie|
|primaryLanguage|gaa|
|primaryLanguage|gaa-gh|
|primaryLanguage|gd|
|primaryLanguage|gd-gb|
|primaryLanguage|gl|
|primaryLanguage|gl-es|
|primaryLanguage|gn|
|primaryLanguage|gsw|
|primaryLanguage|gsw-ch|
|primaryLanguage|gsw-fr|
|primaryLanguage|gsw-li|
|primaryLanguage|gu|
|primaryLanguage|gu-in|
|primaryLanguage|guz|
|primaryLanguage|guz-ke|
|primaryLanguage|gv|
|primaryLanguage|gv-im|
|primaryLanguage|ha|
|primaryLanguage|ha-gh|
|primaryLanguage|ha-ne|
|primaryLanguage|ha-ng|
|primaryLanguage|haw|
|primaryLanguage|haw-us|
|primaryLanguage|he|
|primaryLanguage|he-il|
|primaryLanguage|hi|
|primaryLanguage|hi-in|
|primaryLanguage|hmn|
|primaryLanguage|ho|
|primaryLanguage|hr|
|primaryLanguage|hr-ba|
|primaryLanguage|hr-hr|
|primaryLanguage|hsb|
|primaryLanguage|hsb-de|
|primaryLanguage|ht|
|primaryLanguage|ht-ht|
|primaryLanguage|hu|
|primaryLanguage|hu-hu|
|primaryLanguage|hy|
|primaryLanguage|hy-am|
|primaryLanguage|hz|
|primaryLanguage|ia|
|primaryLanguage|ia-001|
|primaryLanguage|id|
|primaryLanguage|id-id|
|primaryLanguage|ie|
|primaryLanguage|ie-ee|
|primaryLanguage|ig|
|primaryLanguage|ig-ng|
|primaryLanguage|ii|
|primaryLanguage|ii-cn|
|primaryLanguage|ik|
|primaryLanguage|io|
|primaryLanguage|is|
|primaryLanguage|is-is|
|primaryLanguage|it|
|primaryLanguage|it-ch|
|primaryLanguage|it-it|
|primaryLanguage|it-sm|
|primaryLanguage|it-va|
|primaryLanguage|iu|
|primaryLanguage|ja|
|primaryLanguage|ja-jp|
|primaryLanguage|jgo|
|primaryLanguage|jgo-cm|
|primaryLanguage|jmc|
|primaryLanguage|jmc-tz|
|primaryLanguage|jv|
|primaryLanguage|jv-id|
|primaryLanguage|ka|
|primaryLanguage|ka-ge|
|primaryLanguage|kab|
|primaryLanguage|kab-dz|
|primaryLanguage|kam|
|primaryLanguage|kam-ke|
|primaryLanguage|kar|
|primaryLanguage|kde|
|primaryLanguage|kde-tz|
|primaryLanguage|kea|
|primaryLanguage|kea-cv|
|primaryLanguage|kg|
|primaryLanguage|kgp|
|primaryLanguage|kgp-br|
|primaryLanguage|kh|
|primaryLanguage|khq|
|primaryLanguage|khq-ml|
|primaryLanguage|ki|
|primaryLanguage|ki-ke|
|primaryLanguage|kj|
|primaryLanguage|kk|
|primaryLanguage|kk-kz|
|primaryLanguage|kkj|
|primaryLanguage|kkj-cm|
|primaryLanguage|kl|
|primaryLanguage|kl-gl|
|primaryLanguage|kln|
|primaryLanguage|kln-ke|
|primaryLanguage|km|
|primaryLanguage|km-kh|
|primaryLanguage|kn|
|primaryLanguage|kn-in|
|primaryLanguage|ko|
|primaryLanguage|ko-cn|
|primaryLanguage|ko-kp|
|primaryLanguage|ko-kr|
|primaryLanguage|kok|
|primaryLanguage|kok-in|
|primaryLanguage|kr|
|primaryLanguage|ks|
|primaryLanguage|ks-in|
|primaryLanguage|ksb|
|primaryLanguage|ksb-tz|
|primaryLanguage|ksf|
|primaryLanguage|ksf-cm|
|primaryLanguage|ksh|
|primaryLanguage|ksh-de|
|primaryLanguage|ku|
|primaryLanguage|ku-tr|
|primaryLanguage|kv|
|primaryLanguage|kw|
|primaryLanguage|kw-gb|
|primaryLanguage|kxv|
|primaryLanguage|kxv-in|
|primaryLanguage|ky|
|primaryLanguage|ky-kg|
|primaryLanguage|la|
|primaryLanguage|lag|
|primaryLanguage|lag-tz|
|primaryLanguage|lb|
|primaryLanguage|lb-lu|
|primaryLanguage|lg|
|primaryLanguage|lg-ug|
|primaryLanguage|li|
|primaryLanguage|lij|
|primaryLanguage|lij-it|
|primaryLanguage|lkt|
|primaryLanguage|lkt-us|
|primaryLanguage|lmo|
|primaryLanguage|lmo-it|
|primaryLanguage|ln|
|primaryLanguage|ln-ao|
|primaryLanguage|ln-cd|
|primaryLanguage|ln-cf|
|primaryLanguage|ln-cg|
|primaryLanguage|lo|
|primaryLanguage|lo-la|
|primaryLanguage|lrc|
|primaryLanguage|lrc-iq|
|primaryLanguage|lrc-ir|
|primaryLanguage|lt|
|primaryLanguage|lt-lt|
|primaryLanguage|lu|
|primaryLanguage|lu-cd|
|primaryLanguage|luo|
|primaryLanguage|luo-ke|
|primaryLanguage|luy|
|primaryLanguage|luy-ke|
|primaryLanguage|lv|
|primaryLanguage|lv-lv|
|primaryLanguage|mai|
|primaryLanguage|mai-in|
|primaryLanguage|mas|
|primaryLanguage|mas-ke|
|primaryLanguage|mas-tz|
|primaryLanguage|mdf|
|primaryLanguage|mdf-ru|
|primaryLanguage|mer|
|primaryLanguage|mer-ke|
|primaryLanguage|mfe|
|primaryLanguage|mfe-mu|
|primaryLanguage|mg|
|primaryLanguage|mg-mg|
|primaryLanguage|mgh|
|primaryLanguage|mgh-mz|
|primaryLanguage|mgo|
|primaryLanguage|mgo-cm|
|primaryLanguage|mh|
|primaryLanguage|mi|
|primaryLanguage|mi-nz|
|primaryLanguage|mk|
|primaryLanguage|mk-mk|
|primaryLanguage|ml|
|primaryLanguage|ml-in|
|primaryLanguage|mn|
|primaryLanguage|mn-mn|
|primaryLanguage|mni|
|primaryLanguage|mni-in|
|primaryLanguage|mr|
|primaryLanguage|mr-in|
|primaryLanguage|ms|
|primaryLanguage|ms-bn|
|primaryLanguage|ms-id|
|primaryLanguage|ms-my|
|primaryLanguage|ms-sg|
|primaryLanguage|mt|
|primaryLanguage|mt-mt|
|primaryLanguage|mua|
|primaryLanguage|mua-cm|
|primaryLanguage|my|
|primaryLanguage|my-mm|
|primaryLanguage|mzn|
|primaryLanguage|mzn-ir|
|primaryLanguage|na|
|primaryLanguage|naq|
|primaryLanguage|naq-na|
|primaryLanguage|nb|
|primaryLanguage|nb-no|
|primaryLanguage|nb-sj|
|primaryLanguage|nd|
|primaryLanguage|nd-zw|
|primaryLanguage|nds|
|primaryLanguage|nds-de|
|primaryLanguage|nds-nl|
|primaryLanguage|ne|
|primaryLanguage|ne-in|
|primaryLanguage|ne-np|
|primaryLanguage|ng|
|primaryLanguage|nl|
|primaryLanguage|nl-aw|
|primaryLanguage|nl-be|
|primaryLanguage|nl-bq|
|primaryLanguage|nl-ch|
|primaryLanguage|nl-cw|
|primaryLanguage|nl-lu|
|primaryLanguage|nl-nl|
|primaryLanguage|nl-sr|
|primaryLanguage|nl-sx|
|primaryLanguage|nmg|
|primaryLanguage|nmg-cm|
|primaryLanguage|nn|
|primaryLanguage|nn-no|
|primaryLanguage|nnh|
|primaryLanguage|nnh-cm|
|primaryLanguage|no|
|primaryLanguage|no-no|
|primaryLanguage|nqo|
|primaryLanguage|nqo-gn|
|primaryLanguage|nr|
|primaryLanguage|nso|
|primaryLanguage|nso-za|
|primaryLanguage|nus|
|primaryLanguage|nus-ss|
|primaryLanguage|nv|
|primaryLanguage|ny|
|primaryLanguage|nyn|
|primaryLanguage|nyn-ug|
|primaryLanguage|oc|
|primaryLanguage|oc-es|
|primaryLanguage|oc-fr|
|primaryLanguage|oj|
|primaryLanguage|om|
|primaryLanguage|om-et|
|primaryLanguage|om-ke|
|primaryLanguage|or|
|primaryLanguage|or-in|
|primaryLanguage|os|
|primaryLanguage|os-ge|
|primaryLanguage|os-ru|
|primaryLanguage|pa|
|primaryLanguage|pa-in|
|primaryLanguage|pa-pk|
|primaryLanguage|pcm|
|primaryLanguage|pcm-ng|
|primaryLanguage|pi|
|primaryLanguage|pis|
|primaryLanguage|pis-sb|
|primaryLanguage|pl|
|primaryLanguage|pl-pl|
|primaryLanguage|prg|
|primaryLanguage|prg-001|
|primaryLanguage|ps|
|primaryLanguage|ps-af|
|primaryLanguage|ps-pk|
|primaryLanguage|pt|
|primaryLanguage|pt-ao|
|primaryLanguage|pt-br|
|primaryLanguage|pt-ch|
|primaryLanguage|pt-cv|
|primaryLanguage|pt-gq|
|primaryLanguage|pt-gw|
|primaryLanguage|pt-lu|
|primaryLanguage|pt-mo|
|primaryLanguage|pt-mz|
|primaryLanguage|pt-pt|
|primaryLanguage|pt-st|
|primaryLanguage|pt-tl|
|primaryLanguage|qu|
|primaryLanguage|qu-bo|
|primaryLanguage|qu-ec|
|primaryLanguage|qu-pe|
|primaryLanguage|raj|
|primaryLanguage|raj-in|
|primaryLanguage|rm|
|primaryLanguage|rm-ch|
|primaryLanguage|rn|
|primaryLanguage|rn-bi|
|primaryLanguage|ro|
|primaryLanguage|ro-md|
|primaryLanguage|ro-ro|
|primaryLanguage|rof|
|primaryLanguage|rof-tz|
|primaryLanguage|ru|
|primaryLanguage|ru-by|
|primaryLanguage|ru-kg|
|primaryLanguage|ru-kz|
|primaryLanguage|ru-md|
|primaryLanguage|ru-ru|
|primaryLanguage|ru-ua|
|primaryLanguage|rw|
|primaryLanguage|rw-rw|
|primaryLanguage|rwk|
|primaryLanguage|rwk-tz|
|primaryLanguage|sa|
|primaryLanguage|sa-in|
|primaryLanguage|sah|
|primaryLanguage|sah-ru|
|primaryLanguage|saq|
|primaryLanguage|saq-ke|
|primaryLanguage|sat|
|primaryLanguage|sat-in|
|primaryLanguage|sbp|
|primaryLanguage|sbp-tz|
|primaryLanguage|sc|
|primaryLanguage|sc-it|
|primaryLanguage|sd|
|primaryLanguage|sd-in|
|primaryLanguage|sd-pk|
|primaryLanguage|se|
|primaryLanguage|se-fi|
|primaryLanguage|se-no|
|primaryLanguage|se-se|
|primaryLanguage|seh|
|primaryLanguage|seh-mz|
|primaryLanguage|ses|
|primaryLanguage|ses-ml|
|primaryLanguage|sg|
|primaryLanguage|sg-cf|
|primaryLanguage|shi|
|primaryLanguage|shi-ma|
|primaryLanguage|si|
|primaryLanguage|si-lk|
|primaryLanguage|sk|
|primaryLanguage|sk-sk|
|primaryLanguage|sl|
|primaryLanguage|sl-si|
|primaryLanguage|sm|
|primaryLanguage|smn|
|primaryLanguage|smn-fi|
|primaryLanguage|sms|
|primaryLanguage|sms-fi|
|primaryLanguage|sn|
|primaryLanguage|sn-zw|
|primaryLanguage|so|
|primaryLanguage|so-dj|
|primaryLanguage|so-et|
|primaryLanguage|so-ke|
|primaryLanguage|so-so|
|primaryLanguage|sq|
|primaryLanguage|sq-al|
|primaryLanguage|sq-mk|
|primaryLanguage|sq-xk|
|primaryLanguage|sr|
|primaryLanguage|sr-ba|
|primaryLanguage|sr-cs|
|primaryLanguage|sr-me|
|primaryLanguage|sr-rs|
|primaryLanguage|sr-xk|
|primaryLanguage|ss|
|primaryLanguage|st|
|primaryLanguage|st-ls|
|primaryLanguage|st-za|
|primaryLanguage|su|
|primaryLanguage|su-id|
|primaryLanguage|sv|
|primaryLanguage|sv-ax|
|primaryLanguage|sv-fi|
|primaryLanguage|sv-se|
|primaryLanguage|sw|
|primaryLanguage|sw-cd|
|primaryLanguage|sw-ke|
|primaryLanguage|sw-tz|
|primaryLanguage|sw-ug|
|primaryLanguage|sy|
|primaryLanguage|syr|
|primaryLanguage|syr-iq|
|primaryLanguage|syr-sy|
|primaryLanguage|szl|
|primaryLanguage|szl-pl|
|primaryLanguage|ta|
|primaryLanguage|ta-in|
|primaryLanguage|ta-lk|
|primaryLanguage|ta-my|
|primaryLanguage|ta-sg|
|primaryLanguage|te|
|primaryLanguage|te-in|
|primaryLanguage|teo|
|primaryLanguage|teo-ke|
|primaryLanguage|teo-ug|
|primaryLanguage|tg|
|primaryLanguage|tg-tj|
|primaryLanguage|th|
|primaryLanguage|th-th|
|primaryLanguage|ti|
|primaryLanguage|ti-er|
|primaryLanguage|ti-et|
|primaryLanguage|tk|
|primaryLanguage|tk-tm|
|primaryLanguage|tl|
|primaryLanguage|tn|
|primaryLanguage|tn-bw|
|primaryLanguage|tn-za|
|primaryLanguage|to|
|primaryLanguage|to-to|
|primaryLanguage|tok|
|primaryLanguage|tok-001|
|primaryLanguage|tr|
|primaryLanguage|tr-cy|
|primaryLanguage|tr-tr|
|primaryLanguage|ts|
|primaryLanguage|tt|
|primaryLanguage|tt-ru|
|primaryLanguage|tw|
|primaryLanguage|twq|
|primaryLanguage|twq-ne|
|primaryLanguage|ty|
|primaryLanguage|tzm|
|primaryLanguage|tzm-ma|
|primaryLanguage|ug|
|primaryLanguage|ug-cn|
|primaryLanguage|uk|
|primaryLanguage|uk-ua|
|primaryLanguage|ur|
|primaryLanguage|ur-in|
|primaryLanguage|ur-pk|
|primaryLanguage|uz|
|primaryLanguage|uz-af|
|primaryLanguage|uz-uz|
|primaryLanguage|vai|
|primaryLanguage|vai-lr|
|primaryLanguage|ve|
|primaryLanguage|vec|
|primaryLanguage|vec-it|
|primaryLanguage|vi|
|primaryLanguage|vi-vn|
|primaryLanguage|vmw|
|primaryLanguage|vmw-mz|
|primaryLanguage|vo|
|primaryLanguage|vo-001|
|primaryLanguage|vun|
|primaryLanguage|vun-tz|
|primaryLanguage|wa|
|primaryLanguage|wae|
|primaryLanguage|wae-ch|
|primaryLanguage|wo|
|primaryLanguage|wo-sn|
|primaryLanguage|xh|
|primaryLanguage|xh-za|
|primaryLanguage|xnr|
|primaryLanguage|xnr-in|
|primaryLanguage|xog|
|primaryLanguage|xog-ug|
|primaryLanguage|yav|
|primaryLanguage|yav-cm|
|primaryLanguage|yi|
|primaryLanguage|yi-001|
|primaryLanguage|yi-ua|
|primaryLanguage|yo|
|primaryLanguage|yo-bj|
|primaryLanguage|yo-ng|
|primaryLanguage|yrl|
|primaryLanguage|yrl-br|
|primaryLanguage|yrl-co|
|primaryLanguage|yrl-ve|
|primaryLanguage|yue|
|primaryLanguage|yue-cn|
|primaryLanguage|yue-hk|
|primaryLanguage|yue-mo|
|primaryLanguage|za|
|primaryLanguage|za-cn|
|primaryLanguage|zgh|
|primaryLanguage|zgh-ma|
|primaryLanguage|zh|
|primaryLanguage|zh-cn|
|primaryLanguage|zh-hans|
|primaryLanguage|zh-hant|
|primaryLanguage|zh-hk|
|primaryLanguage|zh-mo|
|primaryLanguage|zh-my|
|primaryLanguage|zh-sg|
|primaryLanguage|zh-tw|
|primaryLanguage|zu|
|primaryLanguage|zu-za|

<h2 id="tocS_BackgroundImage">BackgroundImage</h2>
<!-- backwards compatibility -->
<a id="schemabackgroundimage"></a>
<a id="schema_BackgroundImage"></a>
<a id="tocSbackgroundimage"></a>
<a id="tocsbackgroundimage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundPosition|string|true|none|Defines the position of the background image.|
|backgroundSize|string|true|none|Specifies the size of the background image.|
|imageUrl|string|true|none|The URL of the background image.|

<h2 id="tocS_BatchInputContentFolder">BatchInputContentFolder</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputcontentfolder"></a>
<a id="schema_BatchInputContentFolder"></a>
<a id="tocSbatchinputcontentfolder"></a>
<a id="tocsbatchinputcontentfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ContentFolder](#schemacontentfolder)]|true|none|Content folders to input.|

<h2 id="tocS_BatchInputJsonNode">BatchInputJsonNode</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputjsonnode"></a>
<a id="schema_BatchInputJsonNode"></a>
<a id="tocSbatchinputjsonnode"></a>
<a id="tocsbatchinputjsonnode"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[object]|true|none|JSON nodes to input.|

<h2 id="tocS_BatchInputPage">BatchInputPage</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpage"></a>
<a id="schema_BatchInputPage"></a>
<a id="tocSbatchinputpage"></a>
<a id="tocsbatchinputpage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[Page](#schemapage)]|true|none|Pages to input.|

<h2 id="tocS_BatchInputString">BatchInputString</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputstring"></a>
<a id="schema_BatchInputString"></a>
<a id="tocSbatchinputstring"></a>
<a id="tocsbatchinputstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[string]|true|none|Strings to input.|

<h2 id="tocS_BatchResponseContentFolder">BatchResponseContentFolder</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsecontentfolder"></a>
<a id="schema_BatchResponseContentFolder"></a>
<a id="tocSbatchresponsecontentfolder"></a>
<a id="tocsbatchresponsecontentfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|links|object|false|none|Links associated with batch operation.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[ContentFolder](#schemacontentfolder)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseContentFolderWithErrors">BatchResponseContentFolderWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsecontentfolderwitherrors"></a>
<a id="schema_BatchResponseContentFolderWithErrors"></a>
<a id="tocSbatchresponsecontentfolderwitherrors"></a>
<a id="tocsbatchresponsecontentfolderwitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|errors|[[StandardError](#schemastandarderror)]|false|none|Errors in batch operation.|
|links|object|false|none|Links associated with batch operation.|
|numErrors|integer(int32)|false|none|Number of errors.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[ContentFolder](#schemacontentfolder)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePage">BatchResponsePage</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepage"></a>
<a id="schema_BatchResponsePage"></a>
<a id="tocSbatchresponsepage"></a>
<a id="tocsbatchresponsepage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|links|object|false|none|Links associated with batch operation.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[Page](#schemapage)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePageWithErrors">BatchResponsePageWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepagewitherrors"></a>
<a id="schema_BatchResponsePageWithErrors"></a>
<a id="tocSbatchresponsepagewitherrors"></a>
<a id="tocsbatchresponsepagewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|errors|[[StandardError](#schemastandarderror)]|false|none|Errors in batch operation.|
|links|object|false|none|Links associated with batch operation.|
|numErrors|integer(int32)|false|none|Number of errors.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[Page](#schemapage)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BreakpointStyles">BreakpointStyles</h2>
<!-- backwards compatibility -->
<a id="schemabreakpointstyles"></a>
<a id="schema_BreakpointStyles"></a>
<a id="tocSbreakpointstyles"></a>
<a id="tocsbreakpointstyles"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hidden|boolean|true|none|A boolean indicating whether the element should be hidden at this breakpoint. A value of true means the element is not visible.|
|margin|[Margin](#schemamargin)|true|none|none|
|padding|[Padding](#schemapadding)|true|none|none|

<h2 id="tocS_CollectionResponseWithTotalContentFolderForwardPaging">CollectionResponseWithTotalContentFolderForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalcontentfolderforwardpaging"></a>
<a id="schema_CollectionResponseWithTotalContentFolderForwardPaging"></a>
<a id="tocScollectionresponsewithtotalcontentfolderforwardpaging"></a>
<a id="tocscollectionresponsewithtotalcontentfolderforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[ContentFolder](#schemacontentfolder)]|true|none|Collection of content folders.|
|total|integer(int32)|true|none|Total number of content folders.|

<h2 id="tocS_CollectionResponseWithTotalContentFolderVersion">CollectionResponseWithTotalContentFolderVersion</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalcontentfolderversion"></a>
<a id="schema_CollectionResponseWithTotalContentFolderVersion"></a>
<a id="tocScollectionresponsewithtotalcontentfolderversion"></a>
<a id="tocscollectionresponsewithtotalcontentfolderversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[ContentFolderVersion](#schemacontentfolderversion)]|true|none|An array containing the content folder version objects returned in the current response.|
|total|integer(int32)|true|none|An integer representing the total number of content folder versions available.|

<h2 id="tocS_CollectionResponseWithTotalPageForwardPaging">CollectionResponseWithTotalPageForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpageforwardpaging"></a>
<a id="schema_CollectionResponseWithTotalPageForwardPaging"></a>
<a id="tocScollectionresponsewithtotalpageforwardpaging"></a>
<a id="tocscollectionresponsewithtotalpageforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[Page](#schemapage)]|true|none|Collection of pages.|
|total|integer(int32)|true|none|Total number of pages.|

<h2 id="tocS_CollectionResponseWithTotalPageVersion">CollectionResponseWithTotalPageVersion</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpageversion"></a>
<a id="schema_CollectionResponseWithTotalPageVersion"></a>
<a id="tocScollectionresponsewithtotalpageversion"></a>
<a id="tocscollectionresponsewithtotalpageversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PageVersion](#schemapageversion)]|true|none|An array containing the individual items or results of the collection.|
|total|integer(int32)|true|none|An integer representing the total number of items in the collection.|

<h2 id="tocS_ColorStop">ColorStop</h2>
<!-- backwards compatibility -->
<a id="schemacolorstop"></a>
<a id="schema_ColorStop"></a>
<a id="tocScolorstop"></a>
<a id="tocscolorstop"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[RGBAColor](#schemargbacolor)|true|none|none|

<h2 id="tocS_ContentCloneRequestVNext">ContentCloneRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemacontentclonerequestvnext"></a>
<a id="schema_ContentCloneRequestVNext"></a>
<a id="tocScontentclonerequestvnext"></a>
<a id="tocscontentclonerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneName|string|false|none|Name of the cloned object.|
|id|string|true|none|ID of the object to be cloned.|

<h2 id="tocS_ContentFolder">ContentFolder</h2>
<!-- backwards compatibility -->
<a id="schemacontentfolder"></a>
<a id="schema_ContentFolder"></a>
<a id="tocScontentfolder"></a>
<a id="tocscontentfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|integer(int32)|true|none|The type of object this folder applies to. Should always be LANDING_PAGE.|
|created|string(date-time)|true|none|The timestamp indicating when the content folder was created.|
|deletedAt|string(date-time)|true|none|The timestamp (ISO8601 format) when this content folder was deleted.|
|id|string|true|none|The unique ID of the content folder.|
|name|string|true|none|The name of the folder which will show up in the app dashboard|
|parentFolderId|integer(int64)|true|none|The ID of the content folder this folder is nested under|
|updated|string(date-time)|true|none|The timestamp indicating when the content folder was last updated.|

<h2 id="tocS_ContentFolderVersion">ContentFolderVersion</h2>
<!-- backwards compatibility -->
<a id="schemacontentfolderversion"></a>
<a id="schema_ContentFolderVersion"></a>
<a id="tocScontentfolderversion"></a>
<a id="tocscontentfolderversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this version of the content folder.|
|object|[ContentFolder](#schemacontentfolder)|true|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this version was last updated, in ISO 8601 format.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

<h2 id="tocS_ContentLanguageCloneRequestVNext">ContentLanguageCloneRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemacontentlanguageclonerequestvnext"></a>
<a id="schema_ContentLanguageCloneRequestVNext"></a>
<a id="tocScontentlanguageclonerequestvnext"></a>
<a id="tocscontentlanguageclonerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of content to clone.|
|language|string|false|none|Target language of new variant.|
|primaryLanguage|string|false|none|Language of primary content to clone.|
|usePublished|boolean|false|none|A boolean indicating whether the published version of the page should be used for creating the language variation. If true, the published version is used; otherwise, the draft version is used.|

<h2 id="tocS_ContentLanguageVariation">ContentLanguageVariation</h2>
<!-- backwards compatibility -->
<a id="schemacontentlanguagevariation"></a>
<a id="schema_ContentLanguageVariation"></a>
<a id="tocScontentlanguagevariation"></a>
<a id="tocscontentlanguagevariation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivedInDashboard|boolean|true|none|Indicates if the page is hidden from the dashboard, though it may still be live.|
|authorName|string|true|none|The name of the user that updated this page.|
|campaign|string|true|none|The GUID of the marketing campaign this page is a part of.|
|campaignName|string|true|none|The name of the campaign associated with this language variation.|
|created|string(date-time)|true|none|The date and time when the content language variation was created.|
|id|integer(int64)|true|none|ID of object to set as primary in multi-language group.|
|name|string|true|none|The internal name of the page.|
|password|string|true|none|A password required to view the page, if set.|
|publicAccessRules|[[PublicAccessRule](#schemapublicaccessrule)]|true|none|A list of rules defining public access permissions for this language variation.|
|publicAccessRulesEnabled|boolean|true|none|Determines if public access rules should be respected.|
|publishDate|string(date-time)|true|none|The date and time when the page is scheduled to be published.|
|slug|string|true|none|The path of this page, appended to the domain to construct the URL.|
|state|string|true|none|An ENUM descibing the current state of this page.|
|tagIds|[integer(int64)]|false|none|A list of tag IDs associated with this language variation.|
|updated|string(date-time)|true|none|The date and time when the content language variation was last updated.|

<h2 id="tocS_ContentScheduleRequestVNext">ContentScheduleRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemacontentschedulerequestvnext"></a>
<a id="schema_ContentScheduleRequestVNext"></a>
<a id="tocScontentschedulerequestvnext"></a>
<a id="tocscontentschedulerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the object to be scheduled.|
|publishDate|string(date-time)|true|none|The date the object should transition from scheduled to published.|

<h2 id="tocS_DetachFromLangGroupRequestVNext">DetachFromLangGroupRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemadetachfromlanggrouprequestvnext"></a>
<a id="schema_DetachFromLangGroupRequestVNext"></a>
<a id="tocSdetachfromlanggrouprequestvnext"></a>
<a id="tocsdetachfromlanggrouprequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the object to remove from a multi-language group.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_Gradient">Gradient</h2>
<!-- backwards compatibility -->
<a id="schemagradient"></a>
<a id="schema_Gradient"></a>
<a id="tocSgradient"></a>
<a id="tocsgradient"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angle|[Angle](#schemaangle)|true|none|none|
|colors|[[ColorStop](#schemacolorstop)]|true|none|An array of color values that make up the gradient. Each color is applied in sequence to create the gradient effect.|
|sideOrCorner|[SideOrCorner](#schemasideorcorner)|true|none|none|

<h2 id="tocS_LayoutSection">LayoutSection</h2>
<!-- backwards compatibility -->
<a id="schemalayoutsection"></a>
<a id="schema_LayoutSection"></a>
<a id="tocSlayoutsection"></a>
<a id="tocslayoutsection"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[LayoutSection](#schemalayoutsection)]|true|none|The individual cells within the section, each representing a distinct area for content placement.|
|cssClass|string|true|none|The CSS class applied to the layout section.|
|cssId|string|true|none|The CSS ID applied to the layout section.|
|cssStyle|string|true|none|Custom CSS styles applied to the layout section.|
|label|string|true|none|The label for the layout section.|
|name|string|true|none|The internal name of the page.|
|params|object|true|none|Parameters associated with the layout section.|
|rowMetaData|[[RowMetaData](#schemarowmetadata)]|true|none|Metadata about the rows within the section, such as styling or configuration details.|
|rows|[object]|true|none|The number of rows contained within the section, used to organize content vertically.|
|styles|[Styles](#schemastyles)|true|none|none|
|type|string|true|none|The type of the layout section.|
|w|integer(int32)|true|none|The width of the layout section.|
|x|integer(int32)|true|none|The x-coordinate position of the layout section.|

<h2 id="tocS_Margin">Margin</h2>
<!-- backwards compatibility -->
<a id="schemamargin"></a>
<a id="schema_Margin"></a>
<a id="tocSmargin"></a>
<a id="tocsmargin"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|[Size](#schemasize)|true|none|none|
|top|[Size](#schemasize)|true|none|none|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A string that serves as the paging cursor token, indicating the position after the last successfully read resource. It is used to fetch the next set of results in a paginated response.|
|link|string|false|none|A string containing the URL link to the next page of results in a paginated response.|

<h2 id="tocS_Padding">Padding</h2>
<!-- backwards compatibility -->
<a id="schemapadding"></a>
<a id="schema_Padding"></a>
<a id="tocSpadding"></a>
<a id="tocspadding"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|[Size](#schemasize)|true|none|none|
|left|[Size](#schemasize)|true|none|none|
|right|[Size](#schemasize)|true|none|none|
|top|[Size](#schemasize)|true|none|none|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abStatus|string|true|none|The status of the AB test associated with this page, if applicable|
|abTestId|string|true|none|The ID of the AB test associated with this page, if applicable|
|archivedAt|string(date-time)|true|none|The timestamp when this page was deleted.|
|archivedInDashboard|boolean|true|none|If True, the page will not show up in your dashboard, although the page could still be live.|
|attachedStylesheets|[object]|true|none|List of stylesheets to attach to this page. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|authorName|string|true|none|The name of the user that updated this page.|
|campaign|string|true|none|The GUID of the marketing campaign this page is a part of.|
|categoryId|integer(int32)|true|none|ID of the type of object this is. Should always .|
|contentGroupId|string|true|none|Required when creating or cloning blog posts. The unique identifier for the content group associated with the blog. |
|contentTypeCategory|string|true|none|An ENUM descibing the type of this object. Should be either LANDING_PAGE or SITE_PAGE.|
|created|string(date-time)|true|none|The timestamp indicating when the page was created.|
|createdById|string|true|none|The ID of the user that created this page.|
|currentState|string|true|none|A generated ENUM descibing the current state of this page.|
|currentlyPublished|boolean|true|none|Indicates whether the page is currently published.|
|domain|string|true|none|The domain this page will resolve to. If null, the page will default to the primary domain for this content type.|
|dynamicPageDataSourceId|string|true|none|The identifier for the data source used by the dynamic page.|
|dynamicPageDataSourceType|integer(int32)|true|none|The type of data source used by the dynamic page.|
|dynamicPageHubDbTableId|string|true|none|The ID of the HubDB table this page references, if applicable|
|enableDomainStylesheets|boolean|true|none|Boolean to determine whether or not the styles from the template should be applied.|
|enableLayoutStylesheets|boolean|true|none|Boolean to determine whether or not the styles from the template should be applied.|
|featuredImage|string|true|none|The featuredImage of this page.|
|featuredImageAltText|string|true|none|Alt Text of the featuredImage.|
|folderId|string|true|none|The ID of the associated folder this landing page is organized under in the app dashboard.|
|footerHtml|string|true|none|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|headHtml|string|true|none|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|htmlTitle|string|true|none|The html title of this page.|
|id|string|true|none|The unique ID of the page.|
|includeDefaultCustomCss|boolean|true|none|Boolean to determine whether or not the Primary CSS Files should be applied.|
|language|string|true|none|The explicitly defined ISO 639 language code of the page. If null, the page will default to the language of the Domain.|
|layoutSections|object|true|none|A structure detailing the layout sections of the page.|
|linkRelCanonicalUrl|string|true|none|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|mabExperimentId|string|true|none|The ID of the MAB test (or dynamic test) associated with this page, if applicable|
|metaDescription|string|true|none|A description that goes in <meta> tag on the page.|
|name|string|true|none|The internal name of the page.|
|pageExpiryDate|integer(int64)|true|none|The date at which this page should expire and begin redirecting to another url or page.|
|pageExpiryEnabled|boolean|true|none|Boolean describing if the page expiration feature is enabled for this page|
|pageExpiryRedirectId|integer(int64)|true|none|The ID of another page this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectUrl.|
|pageExpiryRedirectUrl|string|true|none|The URL this page's url should redirect to once this page expires. Should only set this or pageExpiryRedirectId.|
|pageRedirected|boolean|true|none|A generated Boolean describing whether or not this page is currently expired and being redirected.|
|password|string|true|none|Set this to create a password protected page. Entering the password will be required to view the page.|
|publicAccessRules|[[PublicAccessRule](#schemapublicaccessrule)]|true|none|Rules for require member registration to access private content.|
|publicAccessRulesEnabled|boolean|true|none|Boolean to determine whether or not to respect publicAccessRules.|
|publishDate|string(date-time)|true|none|The date (ISO8601 format) the page is to be published at.|
|publishImmediately|boolean|true|none|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|slug|string|true|none|The path of the this page. This field is appended to the domain to construct the url of this page.|
|state|string|true|none|An ENUM descibing the current state of this page.|
|subcategory|string|true|none|Details the type of page this is. Should always be landing_page or site_page|
|templatePath|string|true|none|String detailing the path of the template used for this page.|
|themeSettingsValues|object|true|none|A collection of settings specific to the theme applied to the page.|
|translatedFromId|string|true|none|ID of the primary page this object was translated from.|
|translations|object|true|none|A map of translations for the page, each associated with a specific language variation.|
|updated|string(date-time)|true|none|The timestamp indicating when the page was last updated.|
|updatedById|string|true|none|The ID of the user that updated this page.|
|url|string|true|none|A generated field representing the URL of this page.|
|useFeaturedImage|boolean|true|none|Boolean to determine if this page should use a featuredImage.|
|widgetContainers|object|true|none|A data structure containing the data for all the modules inside the containers for this page. This will only be populated if the page has widget containers.|
|widgets|object|true|none|A data structure containing the data for all the modules for this page.|

#### Enumerated Values

|Property|Value|
|---|---|
|abStatus|automated_loser_variant|
|abStatus|automated_master|
|abStatus|automated_variant|
|abStatus|loser_variant|
|abStatus|mab_master|
|abStatus|mab_variant|
|abStatus|master|
|abStatus|variant|
|contentTypeCategory|0|
|contentTypeCategory|1|
|contentTypeCategory|10|
|contentTypeCategory|11|
|contentTypeCategory|12|
|contentTypeCategory|13|
|contentTypeCategory|14|
|contentTypeCategory|15|
|contentTypeCategory|16|
|contentTypeCategory|17|
|contentTypeCategory|18|
|contentTypeCategory|19|
|contentTypeCategory|2|
|contentTypeCategory|20|
|contentTypeCategory|21|
|contentTypeCategory|22|
|contentTypeCategory|3|
|contentTypeCategory|4|
|contentTypeCategory|5|
|contentTypeCategory|6|
|contentTypeCategory|7|
|contentTypeCategory|8|
|contentTypeCategory|9|
|currentState|AGENT_GENERATED|
|currentState|AUTOMATED|
|currentState|AUTOMATED_AB|
|currentState|AUTOMATED_AB_VARIANT|
|currentState|AUTOMATED_DRAFT|
|currentState|AUTOMATED_DRAFT_AB|
|currentState|AUTOMATED_DRAFT_ABVARIANT|
|currentState|AUTOMATED_FOR_FORM|
|currentState|AUTOMATED_FOR_FORM_BUFFER|
|currentState|AUTOMATED_FOR_FORM_DRAFT|
|currentState|AUTOMATED_FOR_FORM_LEGACY|
|currentState|AUTOMATED_LOSER_ABVARIANT|
|currentState|AUTOMATED_SENDING|
|currentState|BLOG_EMAIL_DRAFT|
|currentState|BLOG_EMAIL_PUBLISHED|
|currentState|DRAFT|
|currentState|DRAFT_AB|
|currentState|DRAFT_AB_VARIANT|
|currentState|ERROR|
|currentState|LOSER_AB_VARIANT|
|currentState|PAGE_STUB|
|currentState|PRE_PROCESSING|
|currentState|PROCESSING|
|currentState|PUBLISHED|
|currentState|PUBLISHED_AB|
|currentState|PUBLISHED_AB_VARIANT|
|currentState|PUBLISHED_OR_SCHEDULED|
|currentState|RSS_TO_EMAIL_DRAFT|
|currentState|RSS_TO_EMAIL_PUBLISHED|
|currentState|SCHEDULED|
|currentState|SCHEDULED_AB|
|currentState|SCHEDULED_OR_PUBLISHED|
|language|aa|
|language|ab|
|language|ae|
|language|af|
|language|af-na|
|language|af-za|
|language|agq|
|language|agq-cm|
|language|ak|
|language|ak-gh|
|language|am|
|language|am-et|
|language|an|
|language|ann|
|language|ann-ng|
|language|ar|
|language|ar-001|
|language|ar-ae|
|language|ar-bh|
|language|ar-dj|
|language|ar-dz|
|language|ar-eg|
|language|ar-eh|
|language|ar-er|
|language|ar-il|
|language|ar-iq|
|language|ar-jo|
|language|ar-km|
|language|ar-kw|
|language|ar-lb|
|language|ar-ly|
|language|ar-ma|
|language|ar-mr|
|language|ar-om|
|language|ar-ps|
|language|ar-qa|
|language|ar-sa|
|language|ar-sd|
|language|ar-so|
|language|ar-ss|
|language|ar-sy|
|language|ar-td|
|language|ar-tn|
|language|ar-ye|
|language|as|
|language|as-in|
|language|asa|
|language|asa-tz|
|language|ast|
|language|ast-es|
|language|av|
|language|ay|
|language|az|
|language|az-az|
|language|ba|
|language|bal|
|language|bal-pk|
|language|bas|
|language|bas-cm|
|language|be|
|language|be-by|
|language|bem|
|language|bem-zm|
|language|bez|
|language|bez-tz|
|language|bg|
|language|bg-bg|
|language|bgc|
|language|bgc-in|
|language|bho|
|language|bho-in|
|language|bi|
|language|blo|
|language|blo-bj|
|language|bm|
|language|bm-ml|
|language|bn|
|language|bn-bd|
|language|bn-in|
|language|bo|
|language|bo-cn|
|language|bo-in|
|language|br|
|language|br-fr|
|language|brx|
|language|brx-in|
|language|bs|
|language|bs-ba|
|language|ca|
|language|ca-ad|
|language|ca-es|
|language|ca-fr|
|language|ca-it|
|language|ccp|
|language|ccp-bd|
|language|ccp-in|
|language|ce|
|language|ce-ru|
|language|ceb|
|language|ceb-ph|
|language|cgg|
|language|cgg-ug|
|language|ch|
|language|chr|
|language|chr-us|
|language|ckb|
|language|ckb-iq|
|language|ckb-ir|
|language|co|
|language|cr|
|language|cs|
|language|cs-cz|
|language|csw|
|language|csw-ca|
|language|cu|
|language|cu-ru|
|language|cv|
|language|cv-ru|
|language|cy|
|language|cy-gb|
|language|da|
|language|da-dk|
|language|da-gl|
|language|dav|
|language|dav-ke|
|language|de|
|language|de-at|
|language|de-be|
|language|de-ch|
|language|de-de|
|language|de-gr|
|language|de-it|
|language|de-li|
|language|de-lu|
|language|dje|
|language|dje-ne|
|language|doi|
|language|doi-in|
|language|dsb|
|language|dsb-de|
|language|dua|
|language|dua-cm|
|language|dv|
|language|dyo|
|language|dyo-sn|
|language|dz|
|language|dz-bt|
|language|ebu|
|language|ebu-ke|
|language|ee|
|language|ee-gh|
|language|ee-tg|
|language|el|
|language|el-cy|
|language|el-gr|
|language|en|
|language|en-001|
|language|en-150|
|language|en-ae|
|language|en-ag|
|language|en-ai|
|language|en-as|
|language|en-at|
|language|en-au|
|language|en-bb|
|language|en-be|
|language|en-bi|
|language|en-bm|
|language|en-bs|
|language|en-bw|
|language|en-bz|
|language|en-ca|
|language|en-cc|
|language|en-ch|
|language|en-ck|
|language|en-cm|
|language|en-cn|
|language|en-cx|
|language|en-cy|
|language|en-cz|
|language|en-de|
|language|en-dg|
|language|en-dk|
|language|en-dm|
|language|en-ee|
|language|en-eg|
|language|en-er|
|language|en-es|
|language|en-fi|
|language|en-fj|
|language|en-fk|
|language|en-fm|
|language|en-fr|
|language|en-gb|
|language|en-gd|
|language|en-gg|
|language|en-gh|
|language|en-gi|
|language|en-gm|
|language|en-gs|
|language|en-gu|
|language|en-gy|
|language|en-hk|
|language|en-hu|
|language|en-id|
|language|en-ie|
|language|en-il|
|language|en-im|
|language|en-in|
|language|en-io|
|language|en-it|
|language|en-je|
|language|en-jm|
|language|en-ke|
|language|en-ki|
|language|en-kn|
|language|en-ky|
|language|en-lc|
|language|en-lr|
|language|en-ls|
|language|en-lu|
|language|en-mg|
|language|en-mh|
|language|en-mo|
|language|en-mp|
|language|en-ms|
|language|en-mt|
|language|en-mu|
|language|en-mv|
|language|en-mw|
|language|en-mx|
|language|en-my|
|language|en-na|
|language|en-nf|
|language|en-ng|
|language|en-nl|
|language|en-no|
|language|en-nr|
|language|en-nu|
|language|en-nz|
|language|en-pg|
|language|en-ph|
|language|en-pk|
|language|en-pl|
|language|en-pn|
|language|en-pr|
|language|en-pt|
|language|en-pw|
|language|en-ro|
|language|en-rw|
|language|en-sb|
|language|en-sc|
|language|en-sd|
|language|en-se|
|language|en-sg|
|language|en-sh|
|language|en-si|
|language|en-sk|
|language|en-sl|
|language|en-ss|
|language|en-sx|
|language|en-sz|
|language|en-tc|
|language|en-th|
|language|en-tk|
|language|en-tn|
|language|en-to|
|language|en-tt|
|language|en-tv|
|language|en-tz|
|language|en-ug|
|language|en-um|
|language|en-us|
|language|en-vc|
|language|en-vg|
|language|en-vi|
|language|en-vn|
|language|en-vu|
|language|en-ws|
|language|en-za|
|language|en-zm|
|language|en-zw|
|language|eo|
|language|eo-001|
|language|es|
|language|es-419|
|language|es-ar|
|language|es-bo|
|language|es-br|
|language|es-bz|
|language|es-cl|
|language|es-co|
|language|es-cr|
|language|es-cu|
|language|es-do|
|language|es-ea|
|language|es-ec|
|language|es-es|
|language|es-gq|
|language|es-gt|
|language|es-hn|
|language|es-ic|
|language|es-mx|
|language|es-ni|
|language|es-pa|
|language|es-pe|
|language|es-ph|
|language|es-pr|
|language|es-py|
|language|es-sv|
|language|es-us|
|language|es-uy|
|language|es-ve|
|language|et|
|language|et-ee|
|language|eu|
|language|eu-es|
|language|ewo|
|language|ewo-cm|
|language|fa|
|language|fa-af|
|language|fa-ir|
|language|ff|
|language|ff-bf|
|language|ff-cm|
|language|ff-gh|
|language|ff-gm|
|language|ff-gn|
|language|ff-gw|
|language|ff-lr|
|language|ff-mr|
|language|ff-ne|
|language|ff-ng|
|language|ff-sl|
|language|ff-sn|
|language|fi|
|language|fi-fi|
|language|fil|
|language|fil-ph|
|language|fj|
|language|fo|
|language|fo-dk|
|language|fo-fo|
|language|fr|
|language|fr-be|
|language|fr-bf|
|language|fr-bi|
|language|fr-bj|
|language|fr-bl|
|language|fr-ca|
|language|fr-cd|
|language|fr-cf|
|language|fr-cg|
|language|fr-ch|
|language|fr-ci|
|language|fr-cm|
|language|fr-dj|
|language|fr-dz|
|language|fr-fr|
|language|fr-ga|
|language|fr-gf|
|language|fr-gn|
|language|fr-gp|
|language|fr-gq|
|language|fr-ht|
|language|fr-km|
|language|fr-lu|
|language|fr-ma|
|language|fr-mc|
|language|fr-mf|
|language|fr-mg|
|language|fr-ml|
|language|fr-mq|
|language|fr-mr|
|language|fr-mu|
|language|fr-nc|
|language|fr-ne|
|language|fr-pf|
|language|fr-pm|
|language|fr-re|
|language|fr-rw|
|language|fr-sc|
|language|fr-sn|
|language|fr-sy|
|language|fr-td|
|language|fr-tg|
|language|fr-tn|
|language|fr-vu|
|language|fr-wf|
|language|fr-yt|
|language|frr|
|language|frr-de|
|language|fur|
|language|fur-it|
|language|fy|
|language|fy-nl|
|language|ga|
|language|ga-gb|
|language|ga-ie|
|language|gaa|
|language|gaa-gh|
|language|gd|
|language|gd-gb|
|language|gl|
|language|gl-es|
|language|gn|
|language|gsw|
|language|gsw-ch|
|language|gsw-fr|
|language|gsw-li|
|language|gu|
|language|gu-in|
|language|guz|
|language|guz-ke|
|language|gv|
|language|gv-im|
|language|ha|
|language|ha-gh|
|language|ha-ne|
|language|ha-ng|
|language|haw|
|language|haw-us|
|language|he|
|language|he-il|
|language|hi|
|language|hi-in|
|language|hmn|
|language|ho|
|language|hr|
|language|hr-ba|
|language|hr-hr|
|language|hsb|
|language|hsb-de|
|language|ht|
|language|ht-ht|
|language|hu|
|language|hu-hu|
|language|hy|
|language|hy-am|
|language|hz|
|language|ia|
|language|ia-001|
|language|id|
|language|id-id|
|language|ie|
|language|ie-ee|
|language|ig|
|language|ig-ng|
|language|ii|
|language|ii-cn|
|language|ik|
|language|io|
|language|is|
|language|is-is|
|language|it|
|language|it-ch|
|language|it-it|
|language|it-sm|
|language|it-va|
|language|iu|
|language|ja|
|language|ja-jp|
|language|jgo|
|language|jgo-cm|
|language|jmc|
|language|jmc-tz|
|language|jv|
|language|jv-id|
|language|ka|
|language|ka-ge|
|language|kab|
|language|kab-dz|
|language|kam|
|language|kam-ke|
|language|kar|
|language|kde|
|language|kde-tz|
|language|kea|
|language|kea-cv|
|language|kg|
|language|kgp|
|language|kgp-br|
|language|kh|
|language|khq|
|language|khq-ml|
|language|ki|
|language|ki-ke|
|language|kj|
|language|kk|
|language|kk-kz|
|language|kkj|
|language|kkj-cm|
|language|kl|
|language|kl-gl|
|language|kln|
|language|kln-ke|
|language|km|
|language|km-kh|
|language|kn|
|language|kn-in|
|language|ko|
|language|ko-cn|
|language|ko-kp|
|language|ko-kr|
|language|kok|
|language|kok-in|
|language|kr|
|language|ks|
|language|ks-in|
|language|ksb|
|language|ksb-tz|
|language|ksf|
|language|ksf-cm|
|language|ksh|
|language|ksh-de|
|language|ku|
|language|ku-tr|
|language|kv|
|language|kw|
|language|kw-gb|
|language|kxv|
|language|kxv-in|
|language|ky|
|language|ky-kg|
|language|la|
|language|lag|
|language|lag-tz|
|language|lb|
|language|lb-lu|
|language|lg|
|language|lg-ug|
|language|li|
|language|lij|
|language|lij-it|
|language|lkt|
|language|lkt-us|
|language|lmo|
|language|lmo-it|
|language|ln|
|language|ln-ao|
|language|ln-cd|
|language|ln-cf|
|language|ln-cg|
|language|lo|
|language|lo-la|
|language|lrc|
|language|lrc-iq|
|language|lrc-ir|
|language|lt|
|language|lt-lt|
|language|lu|
|language|lu-cd|
|language|luo|
|language|luo-ke|
|language|luy|
|language|luy-ke|
|language|lv|
|language|lv-lv|
|language|mai|
|language|mai-in|
|language|mas|
|language|mas-ke|
|language|mas-tz|
|language|mdf|
|language|mdf-ru|
|language|mer|
|language|mer-ke|
|language|mfe|
|language|mfe-mu|
|language|mg|
|language|mg-mg|
|language|mgh|
|language|mgh-mz|
|language|mgo|
|language|mgo-cm|
|language|mh|
|language|mi|
|language|mi-nz|
|language|mk|
|language|mk-mk|
|language|ml|
|language|ml-in|
|language|mn|
|language|mn-mn|
|language|mni|
|language|mni-in|
|language|mr|
|language|mr-in|
|language|ms|
|language|ms-bn|
|language|ms-id|
|language|ms-my|
|language|ms-sg|
|language|mt|
|language|mt-mt|
|language|mua|
|language|mua-cm|
|language|my|
|language|my-mm|
|language|mzn|
|language|mzn-ir|
|language|na|
|language|naq|
|language|naq-na|
|language|nb|
|language|nb-no|
|language|nb-sj|
|language|nd|
|language|nd-zw|
|language|nds|
|language|nds-de|
|language|nds-nl|
|language|ne|
|language|ne-in|
|language|ne-np|
|language|ng|
|language|nl|
|language|nl-aw|
|language|nl-be|
|language|nl-bq|
|language|nl-ch|
|language|nl-cw|
|language|nl-lu|
|language|nl-nl|
|language|nl-sr|
|language|nl-sx|
|language|nmg|
|language|nmg-cm|
|language|nn|
|language|nn-no|
|language|nnh|
|language|nnh-cm|
|language|no|
|language|no-no|
|language|nqo|
|language|nqo-gn|
|language|nr|
|language|nso|
|language|nso-za|
|language|nus|
|language|nus-ss|
|language|nv|
|language|ny|
|language|nyn|
|language|nyn-ug|
|language|oc|
|language|oc-es|
|language|oc-fr|
|language|oj|
|language|om|
|language|om-et|
|language|om-ke|
|language|or|
|language|or-in|
|language|os|
|language|os-ge|
|language|os-ru|
|language|pa|
|language|pa-in|
|language|pa-pk|
|language|pcm|
|language|pcm-ng|
|language|pi|
|language|pis|
|language|pis-sb|
|language|pl|
|language|pl-pl|
|language|prg|
|language|prg-001|
|language|ps|
|language|ps-af|
|language|ps-pk|
|language|pt|
|language|pt-ao|
|language|pt-br|
|language|pt-ch|
|language|pt-cv|
|language|pt-gq|
|language|pt-gw|
|language|pt-lu|
|language|pt-mo|
|language|pt-mz|
|language|pt-pt|
|language|pt-st|
|language|pt-tl|
|language|qu|
|language|qu-bo|
|language|qu-ec|
|language|qu-pe|
|language|raj|
|language|raj-in|
|language|rm|
|language|rm-ch|
|language|rn|
|language|rn-bi|
|language|ro|
|language|ro-md|
|language|ro-ro|
|language|rof|
|language|rof-tz|
|language|ru|
|language|ru-by|
|language|ru-kg|
|language|ru-kz|
|language|ru-md|
|language|ru-ru|
|language|ru-ua|
|language|rw|
|language|rw-rw|
|language|rwk|
|language|rwk-tz|
|language|sa|
|language|sa-in|
|language|sah|
|language|sah-ru|
|language|saq|
|language|saq-ke|
|language|sat|
|language|sat-in|
|language|sbp|
|language|sbp-tz|
|language|sc|
|language|sc-it|
|language|sd|
|language|sd-in|
|language|sd-pk|
|language|se|
|language|se-fi|
|language|se-no|
|language|se-se|
|language|seh|
|language|seh-mz|
|language|ses|
|language|ses-ml|
|language|sg|
|language|sg-cf|
|language|shi|
|language|shi-ma|
|language|si|
|language|si-lk|
|language|sk|
|language|sk-sk|
|language|sl|
|language|sl-si|
|language|sm|
|language|smn|
|language|smn-fi|
|language|sms|
|language|sms-fi|
|language|sn|
|language|sn-zw|
|language|so|
|language|so-dj|
|language|so-et|
|language|so-ke|
|language|so-so|
|language|sq|
|language|sq-al|
|language|sq-mk|
|language|sq-xk|
|language|sr|
|language|sr-ba|
|language|sr-cs|
|language|sr-me|
|language|sr-rs|
|language|sr-xk|
|language|ss|
|language|st|
|language|st-ls|
|language|st-za|
|language|su|
|language|su-id|
|language|sv|
|language|sv-ax|
|language|sv-fi|
|language|sv-se|
|language|sw|
|language|sw-cd|
|language|sw-ke|
|language|sw-tz|
|language|sw-ug|
|language|sy|
|language|syr|
|language|syr-iq|
|language|syr-sy|
|language|szl|
|language|szl-pl|
|language|ta|
|language|ta-in|
|language|ta-lk|
|language|ta-my|
|language|ta-sg|
|language|te|
|language|te-in|
|language|teo|
|language|teo-ke|
|language|teo-ug|
|language|tg|
|language|tg-tj|
|language|th|
|language|th-th|
|language|ti|
|language|ti-er|
|language|ti-et|
|language|tk|
|language|tk-tm|
|language|tl|
|language|tn|
|language|tn-bw|
|language|tn-za|
|language|to|
|language|to-to|
|language|tok|
|language|tok-001|
|language|tr|
|language|tr-cy|
|language|tr-tr|
|language|ts|
|language|tt|
|language|tt-ru|
|language|tw|
|language|twq|
|language|twq-ne|
|language|ty|
|language|tzm|
|language|tzm-ma|
|language|ug|
|language|ug-cn|
|language|uk|
|language|uk-ua|
|language|ur|
|language|ur-in|
|language|ur-pk|
|language|uz|
|language|uz-af|
|language|uz-uz|
|language|vai|
|language|vai-lr|
|language|ve|
|language|vec|
|language|vec-it|
|language|vi|
|language|vi-vn|
|language|vmw|
|language|vmw-mz|
|language|vo|
|language|vo-001|
|language|vun|
|language|vun-tz|
|language|wa|
|language|wae|
|language|wae-ch|
|language|wo|
|language|wo-sn|
|language|xh|
|language|xh-za|
|language|xnr|
|language|xnr-in|
|language|xog|
|language|xog-ug|
|language|yav|
|language|yav-cm|
|language|yi|
|language|yi-001|
|language|yi-ua|
|language|yo|
|language|yo-bj|
|language|yo-ng|
|language|yrl|
|language|yrl-br|
|language|yrl-co|
|language|yrl-ve|
|language|yue|
|language|yue-cn|
|language|yue-hk|
|language|yue-mo|
|language|za|
|language|za-cn|
|language|zgh|
|language|zgh-ma|
|language|zh|
|language|zh-cn|
|language|zh-hans|
|language|zh-hant|
|language|zh-hk|
|language|zh-mo|
|language|zh-my|
|language|zh-sg|
|language|zh-tw|
|language|zu|
|language|zu-za|

<h2 id="tocS_PageVersion">PageVersion</h2>
<!-- backwards compatibility -->
<a id="schemapageversion"></a>
<a id="schema_PageVersion"></a>
<a id="tocSpageversion"></a>
<a id="tocspageversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this specific version of the page.|
|object|[Page](#schemapage)|true|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this version was last updated, in ISO 8601 format.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A string token used as a cursor to retrieve the previous set of results in a paginated response.|
|link|string|false|none|A URL that provides access to the previous page of results in a paginated response.|

<h2 id="tocS_PublicAccessRule">PublicAccessRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccessrule"></a>
<a id="schema_PublicAccessRule"></a>
<a id="tocSpublicaccessrule"></a>
<a id="tocspublicaccessrule"></a>

```json
null
```

<h2 id="tocS_RGBAColor">RGBAColor</h2>
<!-- backwards compatibility -->
<a id="schemargbacolor"></a>
<a id="schema_RGBAColor"></a>
<a id="tocSrgbacolor"></a>
<a id="tocsrgbacolor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|a|number|true|none|Alpha.|
|b|integer(int32)|true|none|Blue.|
|g|integer(int32)|true|none|Green.|
|r|integer(int32)|true|none|Red.|

<h2 id="tocS_RowMetaData">RowMetaData</h2>
<!-- backwards compatibility -->
<a id="schemarowmetadata"></a>
<a id="schema_RowMetaData"></a>
<a id="tocSrowmetadata"></a>
<a id="tocsrowmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cssClass|string|true|none|The CSS class applied to the row metadata.|
|styles|[Styles](#schemastyles)|true|none|none|

<h2 id="tocS_SetNewLanguagePrimaryRequestVNext">SetNewLanguagePrimaryRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemasetnewlanguageprimaryrequestvnext"></a>
<a id="schema_SetNewLanguagePrimaryRequestVNext"></a>
<a id="tocSsetnewlanguageprimaryrequestvnext"></a>
<a id="tocssetnewlanguageprimaryrequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of object to set as primary in multi-language group.|

<h2 id="tocS_SideOrCorner">SideOrCorner</h2>
<!-- backwards compatibility -->
<a id="schemasideorcorner"></a>
<a id="schema_SideOrCorner"></a>
<a id="tocSsideorcorner"></a>
<a id="tocssideorcorner"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|horizontalSide|string|true|none|Specifies the horizontal side of an element.|
|verticalSide|string|true|none|Specifies the vertical side of an element.|

#### Enumerated Values

|Property|Value|
|---|---|
|horizontalSide|CENTER|
|horizontalSide|LEFT|
|horizontalSide|RIGHT|
|verticalSide|BOTTOM|
|verticalSide|MIDDLE|
|verticalSide|TOP|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|string|true|none|A string indicating the unit of measurement for the size value, such as 'pixels', 'inches', or 'centimeters'.|
|value|number|true|none|A numerical value representing the size dimension of the object. The data type is a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|CH|
|units|CM|
|units|EM|
|units|EX|
|units|IN|
|units|LH|
|units|MM|
|units|PC|
|units|PERCENTAGE|
|units|PT|
|units|PX|
|units|Q|
|units|REM|
|units|VH|
|units|VMAX|
|units|VMIN|
|units|VW|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|Error category.|
|context|object|true|none|Error context.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|List of error details.|
|id|string|false|none|Error ID.|
|links|object|true|none|Error links.|
|message|string|true|none|Error message.|
|status|string|true|none|Error status.|
|subCategory|object|false|none|Error subcategory.|

<h2 id="tocS_Styles">Styles</h2>
<!-- backwards compatibility -->
<a id="schemastyles"></a>
<a id="schema_Styles"></a>
<a id="tocSstyles"></a>
<a id="tocsstyles"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|[RGBAColor](#schemargbacolor)|true|none|none|
|backgroundGradient|[Gradient](#schemagradient)|true|none|none|
|backgroundImage|[BackgroundImage](#schemabackgroundimage)|true|none|none|
|breakpointStyles|object|false|none|Contains style settings specific to different breakpoints. This property allows for responsive design adjustments based on screen size.|
|flexboxPositioning|string|true|none|Indicates whether flexbox positioning is enabled for the section.|
|forceFullWidthSection|boolean|true|none|Determines if the section should be forced to full width.|
|maxWidthSectionCentering|integer(int32)|true|none|Defines the maximum width for centering the section.|
|verticalAlignment|string|true|none|Specifies the vertical alignment of elements within the section.|

#### Enumerated Values

|Property|Value|
|---|---|
|flexboxPositioning|BOTTOM_CENTER|
|flexboxPositioning|BOTTOM_LEFT|
|flexboxPositioning|BOTTOM_RIGHT|
|flexboxPositioning|MIDDLE_CENTER|
|flexboxPositioning|MIDDLE_LEFT|
|flexboxPositioning|MIDDLE_RIGHT|
|flexboxPositioning|TOP_CENTER|
|flexboxPositioning|TOP_LEFT|
|flexboxPositioning|TOP_RIGHT|
|verticalAlignment|BOTTOM|
|verticalAlignment|MIDDLE|
|verticalAlignment|TOP|

<h2 id="tocS_UpdateLanguagesRequestVNext">UpdateLanguagesRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelanguagesrequestvnext"></a>
<a id="schema_UpdateLanguagesRequestVNext"></a>
<a id="tocSupdatelanguagesrequestvnext"></a>
<a id="tocsupdatelanguagesrequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languages|object|true|none|Map of object IDs to associated languages of object in the multi-language group.|
|primaryId|string|true|none|ID of the primary object in the multi-language group.|

<h2 id="tocS_VersionUser">VersionUser</h2>
<!-- backwards compatibility -->
<a id="schemaversionuser"></a>
<a id="schema_VersionUser"></a>
<a id="tocSversionuser"></a>
<a id="tocsversionuser"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the user.|
|fullName|string|true|none|First and last name of the user.|
|id|string|true|none|ID of the user.|
