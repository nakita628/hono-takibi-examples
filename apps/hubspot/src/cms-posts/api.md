<h1 id="posts">Posts v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

vNext REST API for Public Blog services

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

<h1 id="posts-basic">Basic</h1>

## List Authors

<a id="opIdget-/cms/blogs/2026-09/authors/cursor_/cms/blogs/v3/authors/cursor"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/cursor \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/authors/cursor`

Retrieve a list of blog authors using various query parameters to filter and sort the results. This endpoint supports pagination and can return archived authors if specified.

<h3 id="list-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter authors created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter authors by the exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter authors created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify a property to include in the response.|
|sort|query|[string]|false|Specify the order in which to sort the results. Accepts an array of fields.|
|updatedAfter|query|string(date-time)|false|Filter authors updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter authors by the exact update date and time.|
|updatedBefore|query|string(date-time)|false|Filter authors updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultBlogAuthorLong](#schemacursorpagedresultblogauthorlong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Query authors

<a id="opIdget-/cms/blogs/2026-09/authors/cursor/query_/cms/blogs/v3/authors/cursor/query"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/cursor/query \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/authors/cursor/query`

Retrieve a list of blog authors with optional filters for creation and update timestamps. This endpoint supports pagination and sorting, allowing you to efficiently manage large datasets of authors.

<h3 id="query-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter authors created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter authors by the exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter authors created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify which properties of the authors to include in the response.|
|sort|query|[string]|false|Specify the order of results using a list of fields to sort by.|
|updatedAfter|query|string(date-time)|false|Filter authors updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter authors by the exact last update date and time.|
|updatedBefore|query|string(date-time)|false|Filter authors updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="query-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultBlogAuthorLong](#schemacursorpagedresultblogauthorlong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Get all posts

<a id="opIdget-/cms/blogs/2026-09/posts_getPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts`

Retrieve all blog posts, with paging and filtering options. This method would be useful for an integration that ingests posts and suggests edits.

<h3 id="get-all-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter posts created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter posts by their creation date and time.|
|createdBefore|query|string(date-time)|false|Filter posts created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify which properties to include in the response.|
|sort|query|[string]|false|Specify the order in which to sort the results. Accepts an array of field names.|
|updatedAfter|query|string(date-time)|false|Filter posts updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter posts by their last update date and time.|
|updatedBefore|query|string(date-time)|false|Filter posts updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalBlogPostForwardPaging](#schemacollectionresponsewithtotalblogpostforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new post

<a id="opIdpost-/cms/blogs/2026-09/posts_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts`

Create a new blog post, specifying its content in the request body.

> Body parameter

```json
null
```

<h3 id="create-a-new-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogPost](#schemablogpost)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this blog post, if applicable<br><br>Available options: automated_loser_variant, automated_master, automated_variant, loser_variant, mab_master, mab_variant, master, variant|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|integer(int64)|true|The timestamp (ISO8601 format) when this Blog Post was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the post will not show up in your dashboard, although the post could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this Blog Post.|
|» blogAuthorId|body|string|true|The ID of the Blog Author associated with this Blog Post.|
|» campaign|body|string|true|The GUID of the marketing campaign this Blog Post is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|The ID of the parent Blog this Blog Post is associated with.|
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should always be BLOG_POST.|
|» created|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was created.|
|» createdById|body|string|true|The ID of the user that created this Blog Post.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this Blog Post. Should always match state.|
|» currentlyPublished|body|boolean|true|Whether the post is published (true or false)|
|» domain|body|string|true|The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this Blog Post references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableGoogleAmpOutputOverride|body|boolean|true|Boolean to allow overriding the AMP settings for the blog.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this Blog Post.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|Unique identifier of associated folder|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this Blog Post.|
|» id|body|string|true|The unique ID of the Blog Post.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the blog post.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|Unique identifier of the MAB Experiment|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the Blog Post.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this blog post should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this blog post.|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this blog post's url should redirect to once this blog post expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this blog post's url should redirect to once it expires. Should only set this or pageExpiryRedirectId.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» postBody|body|string|true|The HTML of the main post body.|
|» postSummary|body|string|true|The summary of the blog post that will appear on the main listing page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the blog post is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» publishedAt|body|string(date-time)|true|The date and time when the blog post was published, in ISO 8601 format.|
|» rssBody|body|string|true|The contents of the RSS body for this Blog Post.|
|» rssSummary|body|string|true|The contents of the RSS summary for this Blog Post.|
|» slug|body|string|true|The path of the this blog post. This field is appended to the domain to construct the url of this post.|
|» state|body|string|true|An ENUM descibing the current state of this Blog Post.|
|» tagIds|body|[integer(int64)]|true|List of IDs for the tags associated with this Blog Post.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the blog post.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary blog post this object was translated from.|
|» translations|body|object|true|A map of translations for the blog post, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was updated.|
|» updatedById|body|string|true|The ID of the user that updated this Blog Post.|
|» url|body|string|true|A generated field representing the URL of this blog post.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this post should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.|
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

<h3 id="create-a-new-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Clone a blog post

<a id="opIdpost-/cms/blogs/2026-09/posts/clone_clone"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/clone \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/clone`

Clone a blog post, making a copy of it in a new blog post.

> Body parameter

```json
null
```

<h3 id="clone-a-blog-post-parameters">Parameters</h3>

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

<h3 id="clone-a-blog-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## List posts

<a id="opIdget-/cms/blogs/2026-09/posts/cursor_/cms/blogs/v3/posts/cursor"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/cursor \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/cursor`

Retrieve a list of blog posts with optional filtering and sorting capabilities. This endpoint supports pagination and allows you to specify date ranges for creation and update times, as well as sorting preferences. It is useful for obtaining an overview of blog posts, including archived ones if desired.

<h3 id="list-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter posts created after a specific date and time.|
|createdAt|query|string(date-time)|false|Filter posts by their creation date and time.|
|createdBefore|query|string(date-time)|false|Filter posts created before a specific date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify properties to include in the response.|
|sort|query|[string]|false|Specify the sorting order of the results. Accepts an array of field names.|
|updatedAfter|query|string(date-time)|false|Filter posts updated after a specific date and time.|
|updatedAt|query|string(date-time)|false|Filter posts by their last update date and time.|
|updatedBefore|query|string(date-time)|false|Filter posts updated before a specific date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultBlogPostLong](#schemacursorpagedresultblogpostlong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Query Posts

<a id="opIdget-/cms/blogs/2026-09/posts/cursor/query_/cms/blogs/v3/posts/cursor/query"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/cursor/query \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/cursor/query`

Retrieve blog posts from the HubSpot CMS using various query parameters to filter and sort the results. This endpoint supports pagination and allows you to specify date ranges for creation and updates, as well as sorting options. It is useful for fetching a list of posts with specific criteria, such as posts created after a certain date or posts that have been archived.

<h3 id="query-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter posts created after the specified date-time.|
|createdAt|query|string(date-time)|false|Filter posts by their exact creation date. The format is date-time.|
|createdBefore|query|string(date-time)|false|Filter posts created before the specified date-time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify properties to include in the response.|
|sort|query|[string]|false|Specify the sorting order of the results. Accepts an array of strings.|
|updatedAfter|query|string(date-time)|false|Filter posts updated after the specified date-time.|
|updatedAt|query|string(date-time)|false|Filter posts by their exact update date. The format is date-time.|
|updatedBefore|query|string(date-time)|false|Filter posts updated before the specified date-time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="query-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultBlogPostLong](#schemacursorpagedresultblogpostlong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Schedule a post to be published

<a id="opIdpost-/cms/blogs/2026-09/posts/schedule_schedule"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/schedule \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/schedule`

Schedule a blog post to be published at a specified time.

> Body parameter

```json
null
```

<h3 id="schedule-a-post-to-be-published-parameters">Parameters</h3>

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

<h3 id="schedule-a-post-to-be-published-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a blog post

<a id="opIdget-/cms/blogs/2026-09/posts/{objectId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/{objectId}`

Retrieve a blog post by the post ID.

<h3 id="retrieve-a-blog-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|property|query|string|false|A specific property of the blog post to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-blog-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a blog post

<a id="opIddelete-/cms/blogs/2026-09/posts/{objectId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/blogs/2026-09/posts/{objectId}`

Delete a blog post by ID.

<h3 id="delete-a-blog-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-blog-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a post

<a id="opIdpatch-/cms/blogs/2026-09/posts/{objectId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/blogs/2026-09/posts/{objectId}`

Partially updates a single blog post by ID. You only need to specify the values that you want to update.

> Body parameter

```json
null
```

<h3 id="update-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BlogPost](#schemablogpost)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this blog post, if applicable<br><br>Available options: automated_loser_variant, automated_master, automated_variant, loser_variant, mab_master, mab_variant, master, variant|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|integer(int64)|true|The timestamp (ISO8601 format) when this Blog Post was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the post will not show up in your dashboard, although the post could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this Blog Post.|
|» blogAuthorId|body|string|true|The ID of the Blog Author associated with this Blog Post.|
|» campaign|body|string|true|The GUID of the marketing campaign this Blog Post is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|The ID of the parent Blog this Blog Post is associated with.|
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should always be BLOG_POST.|
|» created|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was created.|
|» createdById|body|string|true|The ID of the user that created this Blog Post.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this Blog Post. Should always match state.|
|» currentlyPublished|body|boolean|true|Whether the post is published (true or false)|
|» domain|body|string|true|The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this Blog Post references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableGoogleAmpOutputOverride|body|boolean|true|Boolean to allow overriding the AMP settings for the blog.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this Blog Post.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|Unique identifier of associated folder|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this Blog Post.|
|» id|body|string|true|The unique ID of the Blog Post.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the blog post.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|Unique identifier of the MAB Experiment|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the Blog Post.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this blog post should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this blog post.|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this blog post's url should redirect to once this blog post expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this blog post's url should redirect to once it expires. Should only set this or pageExpiryRedirectId.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» postBody|body|string|true|The HTML of the main post body.|
|» postSummary|body|string|true|The summary of the blog post that will appear on the main listing page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the blog post is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» publishedAt|body|string(date-time)|true|The date and time when the blog post was published, in ISO 8601 format.|
|» rssBody|body|string|true|The contents of the RSS body for this Blog Post.|
|» rssSummary|body|string|true|The contents of the RSS summary for this Blog Post.|
|» slug|body|string|true|The path of the this blog post. This field is appended to the domain to construct the url of this post.|
|» state|body|string|true|An ENUM descibing the current state of this Blog Post.|
|» tagIds|body|[integer(int64)]|true|List of IDs for the tags associated with this Blog Post.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the blog post.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary blog post this object was translated from.|
|» translations|body|object|true|A map of translations for the blog post, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was updated.|
|» updatedById|body|string|true|The ID of the user that updated this Blog Post.|
|» url|body|string|true|A generated field representing the URL of this blog post.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this post should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.|
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

<h3 id="update-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve the full draft version of the Blog Post

<a id="opIdget-/cms/blogs/2026-09/posts/{objectId}/draft_getDraftById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/draft' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/{objectId}/draft`

Retrieve the full draft version of a blog post.

<h3 id="retrieve-the-full-draft-version-of-the-blog-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post whose draft version is to be retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-full-draft-version-of-the-blog-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update the draft of a post

<a id="opIdpatch-/cms/blogs/2026-09/posts/{objectId}/draft_updateDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/draft' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/blogs/2026-09/posts/{objectId}/draft`

Partially updates the draft version of a single blog post by ID. You only need to specify the values that you want to update.

> Body parameter

```json
null
```

<h3 id="update-the-draft-of-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post draft to update.|
|body|body|[BlogPost](#schemablogpost)|true|none|
|» abStatus|body|string|true|The status of the AB test associated with this blog post, if applicable<br><br>Available options: automated_loser_variant, automated_master, automated_variant, loser_variant, mab_master, mab_variant, master, variant|
|» abTestId|body|string|true|The ID of the AB test associated with this page, if applicable|
|» archivedAt|body|integer(int64)|true|The timestamp (ISO8601 format) when this Blog Post was deleted.|
|» archivedInDashboard|body|boolean|true|If True, the post will not show up in your dashboard, although the post could still be live.|
|» attachedStylesheets|body|[object]|true|List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|» » **additionalProperties**|body|object|false|none|
|» authorName|body|string|true|The name of the user that updated this Blog Post.|
|» blogAuthorId|body|string|true|The ID of the Blog Author associated with this Blog Post.|
|» campaign|body|string|true|The GUID of the marketing campaign this Blog Post is a part of.|
|» categoryId|body|integer(int32)|true|ID of the type of object this is. Should always .|
|» contentGroupId|body|string|true|The ID of the parent Blog this Blog Post is associated with.|
|» contentTypeCategory|body|string|true|An ENUM descibing the type of this object. Should always be BLOG_POST.|
|» created|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was created.|
|» createdById|body|string|true|The ID of the user that created this Blog Post.|
|» currentState|body|string|true|A generated ENUM descibing the current state of this Blog Post. Should always match state.|
|» currentlyPublished|body|boolean|true|Whether the post is published (true or false)|
|» domain|body|string|true|The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.|
|» dynamicPageDataSourceId|body|string|true|The identifier for the data source used by the dynamic page.|
|» dynamicPageDataSourceType|body|integer(int32)|true|The type of data source used by the dynamic page.|
|» dynamicPageHubDbTableId|body|string|true|The ID of the HubDB table this Blog Post references, if applicable|
|» enableDomainStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» enableGoogleAmpOutputOverride|body|boolean|true|Boolean to allow overriding the AMP settings for the blog.|
|» enableLayoutStylesheets|body|boolean|true|Boolean to determine whether or not the styles from the template should be applied.|
|» featuredImage|body|string|true|The featuredImage of this Blog Post.|
|» featuredImageAltText|body|string|true|Alt Text of the featuredImage.|
|» folderId|body|string|true|Unique identifier of associated folder|
|» footerHtml|body|string|true|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|» headHtml|body|string|true|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|» htmlTitle|body|string|true|The html title of this Blog Post.|
|» id|body|string|true|The unique ID of the Blog Post.|
|» includeDefaultCustomCss|body|boolean|true|Boolean to determine whether or not the Primary CSS Files should be applied.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.|
|» layoutSections|body|object|true|A structure detailing the layout sections of the blog post.|
|» » **additionalProperties**|body|[LayoutSection](#schemalayoutsection)|false|none|
|» linkRelCanonicalUrl|body|string|true|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|» mabExperimentId|body|string|true|Unique identifier of the MAB Experiment|
|» metaDescription|body|string|true|A description that goes in <meta> tag on the page.|
|» name|body|string|true|The internal name of the Blog Post.|
|» pageExpiryDate|body|integer(int64)|true|The date at which this blog post should expire and begin redirecting to another url or page.|
|» pageExpiryEnabled|body|boolean|true|Boolean describing if the page expiration feature is enabled for this blog post.|
|» pageExpiryRedirectId|body|integer(int64)|true|The ID of another page this blog post's url should redirect to once this blog post expires. Should only set this or pageExpiryRedirectUrl.|
|» pageExpiryRedirectUrl|body|string|true|The URL this blog post's url should redirect to once it expires. Should only set this or pageExpiryRedirectId.|
|» password|body|string|true|Set this to create a password protected page. Entering the password will be required to view the page.|
|» postBody|body|string|true|The HTML of the main post body.|
|» postSummary|body|string|true|The summary of the blog post that will appear on the main listing page.|
|» publicAccessRules|body|[[PublicAccessRule](#schemapublicaccessrule)]|true|Rules for require member registration to access private content.|
|» publicAccessRulesEnabled|body|boolean|true|Boolean to determine whether or not to respect publicAccessRules.|
|» publishDate|body|string(date-time)|true|The date (ISO8601 format) the blog post is to be published at.|
|» publishImmediately|body|boolean|true|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|» publishedAt|body|string(date-time)|true|The date and time when the blog post was published, in ISO 8601 format.|
|» rssBody|body|string|true|The contents of the RSS body for this Blog Post.|
|» rssSummary|body|string|true|The contents of the RSS summary for this Blog Post.|
|» slug|body|string|true|The path of the this blog post. This field is appended to the domain to construct the url of this post.|
|» state|body|string|true|An ENUM descibing the current state of this Blog Post.|
|» tagIds|body|[integer(int64)]|true|List of IDs for the tags associated with this Blog Post.|
|» themeSettingsValues|body|object|true|A collection of settings specific to the theme applied to the blog post.|
|» » **additionalProperties**|body|object|false|none|
|» translatedFromId|body|string|true|ID of the primary blog post this object was translated from.|
|» translations|body|object|true|A map of translations for the blog post, each associated with a specific language variation.|
|» » **additionalProperties**|body|[ContentLanguageVariation](#schemacontentlanguagevariation)|false|none|
|» updated|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Post was updated.|
|» updatedById|body|string|true|The ID of the user that updated this Blog Post.|
|» url|body|string|true|A generated field representing the URL of this blog post.|
|» useFeaturedImage|body|boolean|true|Boolean to determine if this post should use a featuredImage.|
|» widgetContainers|body|object|true|A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.|
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

<h3 id="update-the-draft-of-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Publish blog post draft

<a id="opIdpost-/cms/blogs/2026-09/posts/{objectId}/draft/push-live_pushLive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/draft/push-live' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/{objectId}/draft/push-live`

Publish the draft version of the blog post, sending its content to the live page.

<h3 id="publish-blog-post-draft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post draft to be published.|

> Example responses

> default Response

```json
null
```

<h3 id="publish-blog-post-draft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Reset post draft to the live version

<a id="opIdpost-/cms/blogs/2026-09/posts/{objectId}/draft/reset_resetDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/draft/reset' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/{objectId}/draft/reset`

Discard all drafted content, resetting the draft to contain the content in the currently published version.

<h3 id="reset-post-draft-to-the-live-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post whose draft is to be reset.|

> Example responses

> default Response

```json
null
```

<h3 id="reset-post-draft-to-the-live-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## List tags

<a id="opIdget-/cms/blogs/2026-09/tags/cursor_/cms/blogs/v3/tags/cursor"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/tags/cursor \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/tags/cursor`

Retrieve a list of blog tags from your HubSpot account. This endpoint supports pagination and filtering based on creation and update timestamps. It is useful for managing and organizing your blog content by tags.

<h3 id="list-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter results to include only those created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter results by the exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter results to include only those created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify which properties to include in the response.|
|sort|query|[string]|false|Specify the order of results. Accepts an array of field names to sort by.|
|updatedAfter|query|string(date-time)|false|Filter results to include only those updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter results by the exact update date and time.|
|updatedBefore|query|string(date-time)|false|Filter results to include only those updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultTagLong](#schemacursorpagedresulttaglong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Query Tags

<a id="opIdget-/cms/blogs/2026-09/tags/cursor/query_/cms/blogs/v3/tags/cursor/query"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/tags/cursor/query \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/tags/cursor/query`

Retrieve a list of blog tags using various filters and sorting options. This endpoint supports pagination and allows you to filter tags based on creation and update timestamps. It is useful for managing and organizing blog content by tags.

<h3 id="query-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter tags created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter tags by their exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter tags created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify a property to include in the response.|
|sort|query|[string]|false|Specify the sort order of the results. Accepts an array of fields to sort by.|
|updatedAfter|query|string(date-time)|false|Filter tags updated after the specified date and time.|
|updatedAt|query|string(date-time)|false|Filter tags by their exact update date and time.|
|updatedBefore|query|string(date-time)|false|Filter tags updated before the specified date and time.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="query-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CursorPagedResultTagLong](#schemacursorpagedresulttaglong)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="posts-batch">Batch</h1>

## Delete a batch of blog posts

<a id="opIdpost-/cms/blogs/2026-09/posts/batch/archive_archive"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/batch/archive \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/batch/archive`

Delete a blog post by ID. 
Note: This is not the same as the in-app `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.

> Body parameter

```json
null
```

<h3 id="delete-a-batch-of-blog-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-batch-of-blog-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a batch of blog posts

<a id="opIdpost-/cms/blogs/2026-09/posts/batch/create_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/batch/create \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/batch/create`

Create a batch of blog posts, specifying their content in the request body.

> Body parameter

```json
null
```

<h3 id="create-a-batch-of-blog-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputBlogPost](#schemabatchinputblogpost)|true|none|
|» inputs|body|[[BlogPost](#schemablogpost)]|true|Blog posts to input.|

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

<h3 id="create-a-batch-of-blog-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseBlogPost](#schemabatchresponseblogpost)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogPostWithErrors](#schemabatchresponseblogpostwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a batch of Blog Posts

<a id="opIdpost-/cms/blogs/2026-09/posts/batch/read_read"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/batch/read \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/batch/read`

Retrieve a batch of blog posts by ID. identified in the request body.

> Body parameter

```json
null
```

<h3 id="retrieve-a-batch-of-blog-posts-parameters">Parameters</h3>

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

<h3 id="retrieve-a-batch-of-blog-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseBlogPost](#schemabatchresponseblogpost)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogPostWithErrors](#schemabatchresponseblogpostwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a batch of Blog Posts

<a id="opIdpost-/cms/blogs/2026-09/posts/batch/update_update"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/batch/update \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/batch/update`

Update a batch of blog posts.

> Body parameter

```json
null
```

<h3 id="update-a-batch-of-blog-posts-parameters">Parameters</h3>

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

<h3 id="update-a-batch-of-blog-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseBlogPost](#schemabatchresponseblogpost)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogPostWithErrors](#schemabatchresponseblogpostwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="posts-multi-language">Multi-language</h1>

## Attach post to a multi-language group

<a id="opIdpost-/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group_attachToLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/multi-language/attach-to-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/multi-language/attach-to-lang-group`

Attach a blog post to a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).

> Body parameter

```json
null
```

<h3 id="attach-post-to-a-multi-language-group-parameters">Parameters</h3>

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

<h3 id="attach-post-to-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a language variation

<a id="opIdpost-/cms/blogs/2026-09/posts/multi-language/create-language-variation_createLangVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/multi-language/create-language-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/multi-language/create-language-variation`

Create a new language variation from an existing blog post

> Body parameter

```json
null
```

<h3 id="create-a-language-variation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogPostLanguageCloneRequestVNext](#schemablogpostlanguageclonerequestvnext)|true|none|
|» id|body|string|true|ID of blog post to clone.|
|» language|body|string|false|Target language of new variant.|
|» usePublished|body|boolean|false|A boolean indicating whether the published version of the blog post should be used for cloning. If true, the published version is used; otherwise, the draft version is used.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-language-variation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Detach post from a multi-language group

<a id="opIdpost-/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group_detachFromLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/multi-language/detach-from-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/multi-language/detach-from-lang-group`

Detach a blog post from a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).

> Body parameter

```json
null
```

<h3 id="detach-post-from-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DetachFromLangGroupRequestVNext](#schemadetachfromlanggrouprequestvnext)|true|none|
|» id|body|string|true|ID of the object to remove from a multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="detach-post-from-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Set a new primary language

<a id="opIdput-/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary_setLangPrimary"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/multi-language/set-new-lang-primary \
  -X PUT \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cms/blogs/2026-09/posts/multi-language/set-new-lang-primary`

Set the primary language of a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content) to the language of the provided post (specified as an ID in the request body)

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

<a id="opIdpost-/cms/blogs/2026-09/posts/multi-language/update-languages_updateLangs"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/posts/multi-language/update-languages \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/multi-language/update-languages`

Explicitly set new languages for each post in a [multi-language group](https://developers.hubspot.com/docs/guides/cms/content/multi-language-content).

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

<h1 id="posts-revisions">Revisions</h1>

## Retrieves all previous versions of a post

<a id="opIdget-/cms/blogs/2026-09/posts/{objectId}/revisions_getPreviousVersions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/revisions' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/{objectId}/revisions`

Retrieve all the previous versions of a blog post.

<h3 id="retrieves-all-previous-versions-of-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post for which revisions are being retrieved.|
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

<h3 id="retrieves-all-previous-versions-of-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalBlogPostVersion](#schemacollectionresponsewithtotalblogpostversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a previous version of a blog post

<a id="opIdget-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}_getPreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}`

Retrieve a previous version of a blog post.

<h3 id="retrieve-a-previous-version-of-a-blog-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post.|
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

<h3 id="retrieve-a-previous-version-of-a-blog-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPostVersion](#schemablogpostversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a previous version

<a id="opIdpost-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore`

Restores a blog post to one of its previous versions.

<h3 id="restore-a-previous-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post for which the revision is to be restored.|
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

<h3 id="restore-a-previous-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Restore a draft to a previous version

<a id="opIdpost-/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore-to-draft' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/posts/{objectId}/revisions/{revisionId}/restore-to-draft`

Takes a specified version of a blog post, sets it as the new draft version of the blog post.

<h3 id="restore-a-draft-to-a-previous-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog post whose revision is being restored.|
|revisionId|path|integer(int64)|true|The unique identifier of the revision to restore to draft. It is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-draft-to-a-previous-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogPost](#schemablogpost)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

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

<h2 id="tocS_BatchInputBlogPost">BatchInputBlogPost</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputblogpost"></a>
<a id="schema_BatchInputBlogPost"></a>
<a id="tocSbatchinputblogpost"></a>
<a id="tocsbatchinputblogpost"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[BlogPost](#schemablogpost)]|true|none|Blog posts to input.|

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

<h2 id="tocS_BatchResponseBlogPost">BatchResponseBlogPost</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseblogpost"></a>
<a id="schema_BatchResponseBlogPost"></a>
<a id="tocSbatchresponseblogpost"></a>
<a id="tocsbatchresponseblogpost"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|links|object|false|none|Links associated with batch operation.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[BlogPost](#schemablogpost)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseBlogPostWithErrors">BatchResponseBlogPostWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseblogpostwitherrors"></a>
<a id="schema_BatchResponseBlogPostWithErrors"></a>
<a id="tocSbatchresponseblogpostwitherrors"></a>
<a id="tocsbatchresponseblogpostwitherrors"></a>

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
|results|[[BlogPost](#schemablogpost)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BlogPost">BlogPost</h2>
<!-- backwards compatibility -->
<a id="schemablogpost"></a>
<a id="schema_BlogPost"></a>
<a id="tocSblogpost"></a>
<a id="tocsblogpost"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abStatus|string|true|none|The status of the AB test associated with this blog post, if applicable<br><br>Available options: automated_loser_variant, automated_master, automated_variant, loser_variant, mab_master, mab_variant, master, variant|
|abTestId|string|true|none|The ID of the AB test associated with this page, if applicable|
|archivedAt|integer(int64)|true|none|The timestamp (ISO8601 format) when this Blog Post was deleted.|
|archivedInDashboard|boolean|true|none|If True, the post will not show up in your dashboard, although the post could still be live.|
|attachedStylesheets|[object]|true|none|List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.|
|authorName|string|true|none|The name of the user that updated this Blog Post.|
|blogAuthorId|string|true|none|The ID of the Blog Author associated with this Blog Post.|
|campaign|string|true|none|The GUID of the marketing campaign this Blog Post is a part of.|
|categoryId|integer(int32)|true|none|ID of the type of object this is. Should always .|
|contentGroupId|string|true|none|The ID of the parent Blog this Blog Post is associated with.|
|contentTypeCategory|string|true|none|An ENUM descibing the type of this object. Should always be BLOG_POST.|
|created|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Post was created.|
|createdById|string|true|none|The ID of the user that created this Blog Post.|
|currentState|string|true|none|A generated ENUM descibing the current state of this Blog Post. Should always match state.|
|currentlyPublished|boolean|true|none|Whether the post is published (true or false)|
|domain|string|true|none|The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.|
|dynamicPageDataSourceId|string|true|none|The identifier for the data source used by the dynamic page.|
|dynamicPageDataSourceType|integer(int32)|true|none|The type of data source used by the dynamic page.|
|dynamicPageHubDbTableId|string|true|none|The ID of the HubDB table this Blog Post references, if applicable|
|enableDomainStylesheets|boolean|true|none|Boolean to determine whether or not the styles from the template should be applied.|
|enableGoogleAmpOutputOverride|boolean|true|none|Boolean to allow overriding the AMP settings for the blog.|
|enableLayoutStylesheets|boolean|true|none|Boolean to determine whether or not the styles from the template should be applied.|
|featuredImage|string|true|none|The featuredImage of this Blog Post.|
|featuredImageAltText|string|true|none|Alt Text of the featuredImage.|
|folderId|string|true|none|Unique identifier of associated folder|
|footerHtml|string|true|none|Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.|
|headHtml|string|true|none|Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.|
|htmlTitle|string|true|none|The html title of this Blog Post.|
|id|string|true|none|The unique ID of the Blog Post.|
|includeDefaultCustomCss|boolean|true|none|Boolean to determine whether or not the Primary CSS Files should be applied.|
|language|string|true|none|The explicitly defined ISO 639 language code of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.|
|layoutSections|object|true|none|A structure detailing the layout sections of the blog post.|
|linkRelCanonicalUrl|string|true|none|Optional override to set the URL to be used in the rel=canonical link tag on the page.|
|mabExperimentId|string|true|none|Unique identifier of the MAB Experiment|
|metaDescription|string|true|none|A description that goes in <meta> tag on the page.|
|name|string|true|none|The internal name of the Blog Post.|
|pageExpiryDate|integer(int64)|true|none|The date at which this blog post should expire and begin redirecting to another url or page.|
|pageExpiryEnabled|boolean|true|none|Boolean describing if the page expiration feature is enabled for this blog post.|
|pageExpiryRedirectId|integer(int64)|true|none|The ID of another page this blog post's url should redirect to once this blog post expires. Should only set this or pageExpiryRedirectUrl.|
|pageExpiryRedirectUrl|string|true|none|The URL this blog post's url should redirect to once it expires. Should only set this or pageExpiryRedirectId.|
|password|string|true|none|Set this to create a password protected page. Entering the password will be required to view the page.|
|postBody|string|true|none|The HTML of the main post body.|
|postSummary|string|true|none|The summary of the blog post that will appear on the main listing page.|
|publicAccessRules|[[PublicAccessRule](#schemapublicaccessrule)]|true|none|Rules for require member registration to access private content.|
|publicAccessRulesEnabled|boolean|true|none|Boolean to determine whether or not to respect publicAccessRules.|
|publishDate|string(date-time)|true|none|The date (ISO8601 format) the blog post is to be published at.|
|publishImmediately|boolean|true|none|Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.|
|publishedAt|string(date-time)|true|none|The date and time when the blog post was published, in ISO 8601 format.|
|rssBody|string|true|none|The contents of the RSS body for this Blog Post.|
|rssSummary|string|true|none|The contents of the RSS summary for this Blog Post.|
|slug|string|true|none|The path of the this blog post. This field is appended to the domain to construct the url of this post.|
|state|string|true|none|An ENUM descibing the current state of this Blog Post.|
|tagIds|[integer(int64)]|true|none|List of IDs for the tags associated with this Blog Post.|
|themeSettingsValues|object|true|none|A collection of settings specific to the theme applied to the blog post.|
|translatedFromId|string|true|none|ID of the primary blog post this object was translated from.|
|translations|object|true|none|A map of translations for the blog post, each associated with a specific language variation.|
|updated|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Post was updated.|
|updatedById|string|true|none|The ID of the user that updated this Blog Post.|
|url|string|true|none|A generated field representing the URL of this blog post.|
|useFeaturedImage|boolean|true|none|Boolean to determine if this post should use a featuredImage.|
|widgetContainers|object|true|none|A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.|
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

<h2 id="tocS_BlogPostLanguageCloneRequestVNext">BlogPostLanguageCloneRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemablogpostlanguageclonerequestvnext"></a>
<a id="schema_BlogPostLanguageCloneRequestVNext"></a>
<a id="tocSblogpostlanguageclonerequestvnext"></a>
<a id="tocsblogpostlanguageclonerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of blog post to clone.|
|language|string|false|none|Target language of new variant.|
|usePublished|boolean|false|none|A boolean indicating whether the published version of the blog post should be used for cloning. If true, the published version is used; otherwise, the draft version is used.|

<h2 id="tocS_BlogPostVersion">BlogPostVersion</h2>
<!-- backwards compatibility -->
<a id="schemablogpostversion"></a>
<a id="schema_BlogPostVersion"></a>
<a id="tocSblogpostversion"></a>
<a id="tocsblogpostversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this specific version of the blog post.|
|object|[BlogPost](#schemablogpost)|true|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this version of the blog post was last updated, in ISO 8601 format.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

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
|hidden|boolean|true|none|Boolean indicating if the breakpoint is visible.|
|margin|[Margin](#schemamargin)|true|none|none|
|padding|[Padding](#schemapadding)|true|none|none|

<h2 id="tocS_CollectionResponseWithTotalBlogPostForwardPaging">CollectionResponseWithTotalBlogPostForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalblogpostforwardpaging"></a>
<a id="schema_CollectionResponseWithTotalBlogPostForwardPaging"></a>
<a id="tocScollectionresponsewithtotalblogpostforwardpaging"></a>
<a id="tocscollectionresponsewithtotalblogpostforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[BlogPost](#schemablogpost)]|true|none|Collection of blog posts.|
|total|integer(int32)|true|none|Total number of blog posts.|

<h2 id="tocS_CollectionResponseWithTotalBlogPostVersion">CollectionResponseWithTotalBlogPostVersion</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalblogpostversion"></a>
<a id="schema_CollectionResponseWithTotalBlogPostVersion"></a>
<a id="tocScollectionresponsewithtotalblogpostversion"></a>
<a id="tocscollectionresponsewithtotalblogpostversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[VersionBlogPost](#schemaversionblogpost)]|true|none|An array containing the individual blog post versions. Each item in the array represents a specific version of a blog post.|
|total|integer(int32)|true|none|The total number of blog post versions available. This is an integer value.|

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
|archivedInDashboard|boolean|true|none|If True, the variant will not show up in your dashboard, although the post could still be live.|
|authorName|string|true|none|The name of the user who last published the blog post. For posts that haven't been published yet, this property will reflect the user who initially created the draft.|
|campaign|string|true|none|The GUID of the marketing campaign this page is a part of.|
|campaignName|string|true|none|Name of the associated marketing campaign.|
|created|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Post was created.|
|id|integer(int64)|true|none|ID of object to set as primary in multi-language group.|
|name|string|true|none|The internal name of the content language variation.|
|password|string|true|none|Set this to create a password protected page. Entering the password will be required to view the page.|
|publicAccessRules|[[PublicAccessRule](#schemapublicaccessrule)]|true|none|The set of rules governing public access to this language variation.|
|publicAccessRulesEnabled|boolean|true|none|Boolean to determine whether or not to respect publicAccessRules.|
|publishDate|string(date-time)|true|none|The date (ISO8601 format) the page is to be published at.|
|slug|string|true|none|The path of the this page. This field is appended to the domain to construct the url of this page.|
|state|string|true|none|An ENUM describing the current state of this page.<br><br>Maximum string length: 25|
|tagIds|[integer(int64)]|false|none|An array of tag identifiers associated with this language variation.|
|updated|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Post was updated.|

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

<h2 id="tocS_CursorPagedResultBlogAuthorLong">CursorPagedResultBlogAuthorLong</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagedresultblogauthorlong"></a>
<a id="schema_CursorPagedResultBlogAuthorLong"></a>
<a id="tocScursorpagedresultblogauthorlong"></a>
<a id="tocscursorpagedresultblogauthorlong"></a>

```json
null
```

<h2 id="tocS_CursorPagedResultBlogPostLong">CursorPagedResultBlogPostLong</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagedresultblogpostlong"></a>
<a id="schema_CursorPagedResultBlogPostLong"></a>
<a id="tocScursorpagedresultblogpostlong"></a>
<a id="tocscursorpagedresultblogpostlong"></a>

```json
null
```

<h2 id="tocS_CursorPagedResultTagLong">CursorPagedResultTagLong</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagedresulttaglong"></a>
<a id="schema_CursorPagedResultTagLong"></a>
<a id="tocScursorpagedresulttaglong"></a>
<a id="tocscursorpagedresulttaglong"></a>

```json
null
```

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
|colors|[[ColorStop](#schemacolorstop)]|true|none|An array of colors used in the gradient. Each color is represented as an RGBA value, defining the color stops in the gradient effect.|
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
|cells|[[LayoutSection](#schemalayoutsection)]|true|none|The cells contained within the layout section, defining its structure.|
|cssClass|string|true|none|The CSS class applied to the layout section.|
|cssId|string|true|none|The CSS ID applied to the layout section.|
|cssStyle|string|true|none|Custom CSS styles applied to the layout section.|
|label|string|true|none|The label for the layout section.|
|name|string|true|none|The name assigned to the layout section.|
|params|object|true|none|Additional parameters for the layout section, typically used for configuration.|
|rowMetaData|[[RowMetaData](#schemarowmetadata)]|true|none|Metadata associated with the rows in the layout section.|
|rows|[object]|true|none|The number of rows in the layout section.|
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
|after|string|true|none|A string token representing the paging cursor of the last successfully read resource. This token is used to fetch the next set of results in a paged response.|
|link|string|false|none|A string URL that provides the link to the next page of results in a paged response.|

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
|before|string|true|none|A string token that represents the cursor for the previous page of results.|
|link|string|false|none|A URL string that provides the link to access the previous page of results.|

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
|cssClass|string|true|none|The CSS class applied to the row.|
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
|units|string|true|none|A string indicating the unit of measurement for the size. Valid values include 'CM', 'MM', 'Q', 'IN', 'PC', 'PT', 'PX', 'EM', 'EX', 'CH', 'REM', 'LH', 'VW', 'VH', 'VMIN', 'VMAX', and 'PERCENTAGE'.|
|value|number|true|none|A numeric value representing the magnitude of the size.|

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
|breakpointStyles|object|false|none|Breakpoint CSS styles for margin, padding, etc...|
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

<h2 id="tocS_VersionBlogPost">VersionBlogPost</h2>
<!-- backwards compatibility -->
<a id="schemaversionblogpost"></a>
<a id="schema_VersionBlogPost"></a>
<a id="tocSversionblogpost"></a>
<a id="tocsversionblogpost"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id of the version.|
|object|[BlogPost](#schemablogpost)|true|none|none|
|updatedAt|string(date-time)|true|none|The timestamp (ISO8601 format) when this version of the Blog Post was updated.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

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
|email|string|true|none|The email address of the user.|
|fullName|string|true|none|The first and last name of the User.|
|id|string|true|none|The unique ID of the User.|
