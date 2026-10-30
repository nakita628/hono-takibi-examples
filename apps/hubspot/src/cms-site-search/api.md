<h1 id="site-search">Site Search v2026-09</h1>

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

<h1 id="site-search-basic">Basic</h1>

## Get indexed properties

<a id="opIdget-/cms/site-search/2026-09/indexed-data/{contentId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/site-search/2026-09/indexed-data/{contentId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/site-search/2026-09/indexed-data/{contentId}`

Return all indexed data for an asset (e.g., page, blog post, HubDB table), specified by ID. This is useful when debugging why a particular asset is not returned from a custom search.

<h3 id="get-indexed-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contentId|path|string|true|The unique identifier of the content whose indexed data is being retrieved.|
|type|query|string|false|The type of content to retrieve indexed data for. It can include types like LANDING_PAGE, BLOG_POST, SITE_PAGE, KNOWLEDGE_ARTICLE, LISTING_PAGE, or STRUCTURED_CONTENT.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-indexed-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IndexedData](#schemaindexeddata)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="site-search-search">Search</h1>

## Search your site

<a id="opIdget-/cms/site-search/2026-09/search_/cms/site-search/2026-09/search"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/site-search/2026-09/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/site-search/2026-09/search`

Returns any website content matching the given search criteria for a given HubSpot account. Searches can be filtered by content type, domain, or URL path. Includes options for weighing results by recency and popularity, along with language support.

<h3 id="search-your-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|analytics|query|boolean|false|none|
|autocomplete|query|boolean|false|none|
|boostLimit|query|number|false|none|
|boostRecent|query|string|false|none|
|domain|query|[string]|false|none|
|groupId|query|[integer(int64)]|false|none|
|hubdbQuery|query|string|false|none|
|language|query|string|false|none|
|length|query|string|false|none|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|matchPrefix|query|boolean|false|none|
|offset|query|integer(int32)|false|none|
|pathPrefix|query|[string]|false|none|
|popularityBoost|query|number|false|none|
|property|query|[string]|false|none|
|q|query|string|false|none|
|tableId|query|integer(int64)|false|none|
|type|query|[string]|false|none|
|types|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
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
|length|LONG|
|length|SHORT|
|types|LANDING_PAGE|
|types|BLOG_POST|
|types|SITE_PAGE|
|types|KNOWLEDGE_ARTICLE|
|types|LISTING_PAGE|
|types|STRUCTURED_CONTENT|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-your-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicSearchResults](#schemapublicsearchresults)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

<h2 id="tocS_ContentSearchResult">ContentSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemacontentsearchresult"></a>
<a id="schema_ContentSearchResult"></a>
<a id="tocScontentsearchresult"></a>
<a id="tocscontentsearchresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorFullName|string|false|none|Name of the author.|
|category|string|false|none|The error category|
|combinedId|string|false|none|The ID of the document in HubSpot.|
|contentType|string|false|none|The content type, which provides additional information about the nature of the content.|
|description|string|false|none|The result's description. The content will be determined by the value of `length` in the request.|
|domain|string|true|none|The domain the document is hosted on.|
|featuredImageUrl|string|false|none|URL of the featured image.|
|id|integer(int64)|true|none|The ID of the content.|
|inBeta|boolean|false|none|A boolean indicating whether the content is in beta.|
|isPrivate|boolean|false|none|A boolean indicating whether the content is private.|
|language|string|false|none|The document's language.|
|publishedDate|integer(int64)|false|none|The date the content was published.|
|rowId|integer(int64)|false|none|If a dynamic page, the row ID in the HubDB table.|
|score|number|true|none|The matching score of the document.|
|subcategory|string|false|none|For knowledge articles, the subcategory of the article.|
|tableId|integer(int64)|false|none|If a dynamic page, the ID of the HubDB table.|
|tags|[string]|false|none|If a blog post, the tags associated with it.|
|title|string|false|none|The title of the returned document.|
|type|string|true|none|The type of document. Can be `SITE_PAGE`, `LANDING_PAGE`, `BLOG_POST`, `LISTING_PAGE`, or `KNOWLEDGE_ARTICLE`.|
|url|string|true|none|The url of the document.|

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
|type|BLOG_POST|
|type|KNOWLEDGE_ARTICLE|
|type|LANDING_PAGE|
|type|LISTING_PAGE|
|type|SITE_PAGE|
|type|STRUCTURED_CONTENT|

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

<h2 id="tocS_IndexedData">IndexedData</h2>
<!-- backwards compatibility -->
<a id="schemaindexeddata"></a>
<a id="schema_IndexedData"></a>
<a id="tocSindexeddata"></a>
<a id="tocsindexeddata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|true|none|The indexed fields in HubSpot.|
|id|string|true|none|The ID of the document in HubSpot.|
|type|string|true|none|The type of document. Can be `SITE_PAGE`, `LANDING_PAGE`, `BLOG_POST`, `LISTING_PAGE`, or `KNOWLEDGE_ARTICLE`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BLOG_POST|
|type|KNOWLEDGE_ARTICLE|
|type|LANDING_PAGE|
|type|LISTING_PAGE|
|type|SITE_PAGE|
|type|STRUCTURED_CONTENT|

<h2 id="tocS_IndexedField">IndexedField</h2>
<!-- backwards compatibility -->
<a id="schemaindexedfield"></a>
<a id="schema_IndexedField"></a>
<a id="tocSindexedfield"></a>
<a id="tocsindexedfield"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadataField|boolean|true|none|Indicates whether the field is a metadata field.|
|name|string|true|none|The name of the indexed field.|
|value|object|true|none|The primary value of the indexed field.|
|values|[object]|true|none|An array of objects representing multiple values for the indexed field.|

<h2 id="tocS_PublicSearchResults">PublicSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemapublicsearchresults"></a>
<a id="schema_PublicSearchResults"></a>
<a id="tocSpublicsearchresults"></a>
<a id="tocspublicsearchresults"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int32)|true|none|The number of results returned in a single response.|
|offset|integer(int32)|true|none|The starting point for the next set of results in pagination.|
|page|integer(int32)|true|none|The current page number in the paginated results.|
|results|[[ContentSearchResult](#schemacontentsearchresult)]|true|none|An array of search results, each represented by a ContentSearchResult object.|
|searchTerm|string|false|none|The term used in the search query.|
|total|integer(int64)|true|none|The total number of results found for the search term.|
