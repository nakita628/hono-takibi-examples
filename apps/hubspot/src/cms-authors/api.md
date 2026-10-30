<h1 id="authors">Authors v2026-09</h1>

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

<h1 id="authors-basic">Basic</h1>

## Get all Blog Authors

<a id="opIdget-/cms/blogs/2026-09/authors_getPage"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/authors`

Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.


<h3 id="get-all-blog-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|createdAfter|query|string(date-time)|false|Filter authors created after the specified date and time.|
|createdAt|query|string(date-time)|false|Filter authors by the exact creation date and time.|
|createdBefore|query|string(date-time)|false|Filter authors created before the specified date and time.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|property|query|string|false|Specify which properties of the authors to include in the response.|
|sort|query|[string]|false|An array of fields to sort the results by.|
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

<h3 id="get-all-blog-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalBlogAuthorForwardPaging](#schemacollectionresponsewithtotalblogauthorforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new Blog Author

<a id="opIdpost-/cms/blogs/2026-09/authors_create"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors`

Create a new Blog Author.

> Body parameter

```json
null
```

<h3 id="create-a-new-blog-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogAuthor](#schemablogauthor)|true|none|
|» avatar|body|string|true|URL to the blog author's avatar, if supplying a custom one.|
|» bio|body|string|true|A short biography of the blog author.|
|» created|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was created.|
|» deletedAt|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was deleted.|
|» displayName|body|string|true|The full name of the Blog Author to be displayed.|
|» email|body|string|true|Email address of the Blog Author.|
|» facebook|body|string|true|URL to the Blog Author's Facebook page.|
|» fullName|body|string|true|The full, unabbreviated name of the blog author, typically their first and last name combined.|
|» id|body|string|true|The unique ID of the Blog Author.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the blog author.|
|» linkedin|body|string|true|URL to the blog author's LinkedIn page.|
|» name|body|string|true|The name field for the blog author. (This appears to be a shorter or alternative name field compared to fullName.)|
|» slug|body|string|true|A URL-friendly identifier for the blog author that can be used to reference the author in URLs. Typically generated from the author's name and contains lowercase letters, hyphens, and underscores.|
|» translatedFromId|body|integer(int64)|true|ID of the primary blog author this object was translated from.|
|» twitter|body|string|true|URL or username of the Twitter account associated with the Blog Author. This will be normalized into the Twitter url for said user.|
|» updated|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was updated.|
|» website|body|string|true|URL to the website of the Blog Author.|

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

<h3 id="create-a-new-blog-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BlogAuthor](#schemablogauthor)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a Blog Author

<a id="opIdget-/cms/blogs/2026-09/authors/{objectId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/authors/{objectId}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/blogs/2026-09/authors/{objectId}`

Retrieve the Blog Author object identified by the id in the path.

<h3 id="retrieve-a-blog-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog author to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|property|query|string|false|A specific property of the blog author to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-blog-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogAuthor](#schemablogauthor)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a Blog Author

<a id="opIddelete-/cms/blogs/2026-09/authors/{objectId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/authors/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/blogs/2026-09/authors/{objectId}`

Delete the Blog Author object identified by the id in the path.

<h3 id="delete-a-blog-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog author to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-blog-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a Blog Author

<a id="opIdpatch-/cms/blogs/2026-09/authors/{objectId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/blogs/2026-09/authors/{objectId}' \
  -X PATCH \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /cms/blogs/2026-09/authors/{objectId}`

Sparse updates a single Blog Author object identified by the id in the path.
All the column values need not be specified. Only the that need to be modified can be specified.


> Body parameter

```json
null
```

<h3 id="update-a-blog-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the blog author to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BlogAuthor](#schemablogauthor)|true|none|
|» avatar|body|string|true|URL to the blog author's avatar, if supplying a custom one.|
|» bio|body|string|true|A short biography of the blog author.|
|» created|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was created.|
|» deletedAt|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was deleted.|
|» displayName|body|string|true|The full name of the Blog Author to be displayed.|
|» email|body|string|true|Email address of the Blog Author.|
|» facebook|body|string|true|URL to the Blog Author's Facebook page.|
|» fullName|body|string|true|The full, unabbreviated name of the blog author, typically their first and last name combined.|
|» id|body|string|true|The unique ID of the Blog Author.|
|» language|body|string|true|The explicitly defined ISO 639 language code of the blog author.|
|» linkedin|body|string|true|URL to the blog author's LinkedIn page.|
|» name|body|string|true|The name field for the blog author. (This appears to be a shorter or alternative name field compared to fullName.)|
|» slug|body|string|true|A URL-friendly identifier for the blog author that can be used to reference the author in URLs. Typically generated from the author's name and contains lowercase letters, hyphens, and underscores.|
|» translatedFromId|body|integer(int64)|true|ID of the primary blog author this object was translated from.|
|» twitter|body|string|true|URL or username of the Twitter account associated with the Blog Author. This will be normalized into the Twitter url for said user.|
|» updated|body|string(date-time)|true|The timestamp (ISO8601 format) when this Blog Author was updated.|
|» website|body|string|true|URL to the website of the Blog Author.|

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

<h3 id="update-a-blog-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlogAuthor](#schemablogauthor)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="authors-batch">Batch</h1>

## Delete a batch of Blog Authors

<a id="opIdpost-/cms/blogs/2026-09/authors/batch/archive_archiveBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/batch/archive \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/batch/archive`

Delete the Blog Author objects identified in the request body.

> Body parameter

```json
null
```

<h3 id="delete-a-batch-of-blog-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputString](#schemabatchinputstring)|true|none|
|» inputs|body|[string]|true|Strings to input.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-batch-of-blog-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a batch of Blog Authors

<a id="opIdpost-/cms/blogs/2026-09/authors/batch/create_createBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/batch/create \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/batch/create`

Create the Blog Author objects detailed in the request body.

> Body parameter

```json
null
```

<h3 id="create-a-batch-of-blog-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputBlogAuthor](#schemabatchinputblogauthor)|true|none|
|» inputs|body|[[BlogAuthor](#schemablogauthor)]|true|Blog authors to input.|

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

<h3 id="create-a-batch-of-blog-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseBlogAuthor](#schemabatchresponseblogauthor)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogAuthorWithErrors](#schemabatchresponseblogauthorwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Retrieve a batch of Blog Authors

<a id="opIdpost-/cms/blogs/2026-09/authors/batch/read_readBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/batch/read \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/batch/read`

Retrieve the Blog Author objects identified in the request body.

> Body parameter

```json
null
```

<h3 id="retrieve-a-batch-of-blog-authors-parameters">Parameters</h3>

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

<h3 id="retrieve-a-batch-of-blog-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseBlogAuthor](#schemabatchresponseblogauthor)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogAuthorWithErrors](#schemabatchresponseblogauthorwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Update a batch of Blog Authors

<a id="opIdpost-/cms/blogs/2026-09/authors/batch/update_updateBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/batch/update \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/batch/update`

Update the Blog Author objects identified in the request body.

> Body parameter

```json
null
```

<h3 id="update-a-batch-of-blog-authors-parameters">Parameters</h3>

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

<h3 id="update-a-batch-of-blog-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseBlogAuthor](#schemabatchresponseblogauthor)|
|207|Multi-Status|multiple statuses|[BatchResponseBlogAuthorWithErrors](#schemabatchresponseblogauthorwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="authors-multi-language">Multi-language</h1>

## Attach a Blog Author to a multi-language group

<a id="opIdpost-/cms/blogs/2026-09/authors/multi-language/attach-to-lang-group_attachToLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/multi-language/attach-to-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/multi-language/attach-to-lang-group`

Attach a Blog Author to a multi-language group.

> Body parameter

```json
null
```

<h3 id="attach-a-blog-author-to-a-multi-language-group-parameters">Parameters</h3>

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

<h3 id="attach-a-blog-author-to-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a new language variation

<a id="opIdpost-/cms/blogs/2026-09/authors/multi-language/create-language-variation_createLangVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/multi-language/create-language-variation \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/multi-language/create-language-variation`

Create a new language variation from an existing Blog Author.

> Body parameter

```json
null
```

<h3 id="create-a-new-language-variation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogAuthorCloneRequestVNext](#schemablogauthorclonerequestvnext)|true|none|
|» blogAuthor|body|[BlogAuthor](#schemablogauthor)|true|none|
|» id|body|string|true|ID of the object to be cloned.|
|» language|body|string|false|Language of newly cloned object.|
|» primaryLanguage|body|string|false|Primary language in multi-language group.|
|» usePublished|body|boolean|false|Specifies whether to use the published version of the blog author for cloning. This is a boolean.|

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
|200|OK|successful operation|[BlogAuthor](#schemablogauthor)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Detach a Blog Author from a multi-language group

<a id="opIdpost-/cms/blogs/2026-09/authors/multi-language/detach-from-lang-group_detachFromLangGroup"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/multi-language/detach-from-lang-group \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/multi-language/detach-from-lang-group`

Detach a Blog Author from a multi-language group.

> Body parameter

```json
null
```

<h3 id="detach-a-blog-author-from-a-multi-language-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DetachFromLangGroupRequestVNext](#schemadetachfromlanggrouprequestvnext)|true|none|
|» id|body|string|true|ID of the object to remove from a multi-language group.|

> Example responses

> default Response

```json
null
```

<h3 id="detach-a-blog-author-from-a-multi-language-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Set a new primary language

<a id="opIdput-/cms/blogs/2026-09/authors/multi-language/set-new-lang-primary_setLangPrimary"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/multi-language/set-new-lang-primary \
  -X PUT \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cms/blogs/2026-09/authors/multi-language/set-new-lang-primary`

Set a Blog Author as the primary language of a multi-language group.

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

<a id="opIdpost-/cms/blogs/2026-09/authors/multi-language/update-languages_updateLangs"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/blogs/2026-09/authors/multi-language/update-languages \
  -X POST \
  -H 'Content-Type: */*' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/blogs/2026-09/authors/multi-language/update-languages`

Explicitly set new languages for each Blog Author in a multi-language group.

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

# Schemas

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

<h2 id="tocS_BatchInputBlogAuthor">BatchInputBlogAuthor</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputblogauthor"></a>
<a id="schema_BatchInputBlogAuthor"></a>
<a id="tocSbatchinputblogauthor"></a>
<a id="tocsbatchinputblogauthor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[BlogAuthor](#schemablogauthor)]|true|none|Blog authors to input.|

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

<h2 id="tocS_BatchResponseBlogAuthor">BatchResponseBlogAuthor</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseblogauthor"></a>
<a id="schema_BatchResponseBlogAuthor"></a>
<a id="tocSbatchresponseblogauthor"></a>
<a id="tocsbatchresponseblogauthor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|Time of batch operation completion.|
|links|object|false|none|Links associated with batch operation.|
|requestedAt|string(date-time)|false|none|Time of batch operation request.|
|results|[[BlogAuthor](#schemablogauthor)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseBlogAuthorWithErrors">BatchResponseBlogAuthorWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseblogauthorwitherrors"></a>
<a id="schema_BatchResponseBlogAuthorWithErrors"></a>
<a id="tocSbatchresponseblogauthorwitherrors"></a>
<a id="tocsbatchresponseblogauthorwitherrors"></a>

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
|results|[[BlogAuthor](#schemablogauthor)]|true|none|Results of batch operation.|
|startedAt|string(date-time)|true|none|Time of batch operation start.|
|status|string|true|none|Status of batch operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BlogAuthor">BlogAuthor</h2>
<!-- backwards compatibility -->
<a id="schemablogauthor"></a>
<a id="schema_BlogAuthor"></a>
<a id="tocSblogauthor"></a>
<a id="tocsblogauthor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|true|none|URL to the blog author's avatar, if supplying a custom one.|
|bio|string|true|none|A short biography of the blog author.|
|created|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Author was created.|
|deletedAt|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Author was deleted.|
|displayName|string|true|none|The full name of the Blog Author to be displayed.|
|email|string|true|none|Email address of the Blog Author.|
|facebook|string|true|none|URL to the Blog Author's Facebook page.|
|fullName|string|true|none|The full, unabbreviated name of the blog author, typically their first and last name combined.|
|id|string|true|none|The unique ID of the Blog Author.|
|language|string|true|none|The explicitly defined ISO 639 language code of the blog author.|
|linkedin|string|true|none|URL to the blog author's LinkedIn page.|
|name|string|true|none|The name field for the blog author. (This appears to be a shorter or alternative name field compared to fullName.)|
|slug|string|true|none|A URL-friendly identifier for the blog author that can be used to reference the author in URLs. Typically generated from the author's name and contains lowercase letters, hyphens, and underscores.|
|translatedFromId|integer(int64)|true|none|ID of the primary blog author this object was translated from.|
|twitter|string|true|none|URL or username of the Twitter account associated with the Blog Author. This will be normalized into the Twitter url for said user.|
|updated|string(date-time)|true|none|The timestamp (ISO8601 format) when this Blog Author was updated.|
|website|string|true|none|URL to the website of the Blog Author.|

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

<h2 id="tocS_BlogAuthorCloneRequestVNext">BlogAuthorCloneRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemablogauthorclonerequestvnext"></a>
<a id="schema_BlogAuthorCloneRequestVNext"></a>
<a id="tocSblogauthorclonerequestvnext"></a>
<a id="tocsblogauthorclonerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogAuthor|[BlogAuthor](#schemablogauthor)|true|none|none|
|id|string|true|none|ID of the object to be cloned.|
|language|string|false|none|Language of newly cloned object.|
|primaryLanguage|string|false|none|Primary language in multi-language group.|
|usePublished|boolean|false|none|Specifies whether to use the published version of the blog author for cloning. This is a boolean.|

<h2 id="tocS_CollectionResponseWithTotalBlogAuthorForwardPaging">CollectionResponseWithTotalBlogAuthorForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalblogauthorforwardpaging"></a>
<a id="schema_CollectionResponseWithTotalBlogAuthorForwardPaging"></a>
<a id="tocScollectionresponsewithtotalblogauthorforwardpaging"></a>
<a id="tocscollectionresponsewithtotalblogauthorforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[BlogAuthor](#schemablogauthor)]|true|none|Collection of blog authors.|
|total|integer(int32)|true|none|Total number of blog authors.|

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
|after|string|true|none|A string token representing the paging cursor of the last successfully read resource. This token is used to fetch the next page of results.|
|link|string|false|none|A URL string that provides the link to the next page of results.|

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
