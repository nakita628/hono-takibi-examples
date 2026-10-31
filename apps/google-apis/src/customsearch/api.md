<h1 id="custom-search-api">Custom Search API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Searches over a website or collection of websites

Base URLs:

* <a href="https://customsearch.googleapis.com/">https://customsearch.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/custom-search/v1/introduction">External documentation</a>

<h1 id="custom-search-api-cse">cse</h1>

## search.cse.list

<a id="opIdsearch.cse.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/customsearch/v1 \
  -H 'Accept: application/json'
```

`GET /customsearch/v1`

Returns metadata about the search performed, metadata about the engine used for the search, and the search results.

<h3 id="searchcselist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|c2coff|query|string|false|Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)|
|cr|query|string|false|Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.|
|cx|query|string|false|The Programmable Search Engine ID to use for this request.|
|dateRestrict|query|string|false|Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.|
|exactTerms|query|string|false|Identifies a phrase that all documents in the search results must contain.|
|excludeTerms|query|string|false|Identifies a word or phrase that should not appear in any documents in the search results.|
|fileType|query|string|false|Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).|
|filter|query|string|false|Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.|
|gl|query|string|false|Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.|
|googlehost|query|string|false|**Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.|
|highRange|query|string|false|Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.|
|hl|query|string|false|Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.|
|hq|query|string|false|Appends the specified query terms to the query, as if they were combined with a logical AND operator.|
|imgColorType|query|string|false|Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background|
|imgDominantColor|query|string|false|Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`|
|imgSize|query|string|false|Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`|
|imgType|query|string|false|Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`|
|linkSite|query|string|false|Specifies that all search results should contain a link to a particular URL.|
|lowRange|query|string|false|Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.|
|lr|query|string|false|Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)|
|num|query|integer|false|Number of search results to return. * Valid values are integers between 1 and 10, inclusive.|
|orTerms|query|string|false|Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.|
|q|query|string|false|Query|
|relatedSite|query|string|false|Specifies that all search results should be pages that are related to the specified URL.|
|rights|query|string|false|Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).|
|safe|query|string|false|Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)|
|searchType|query|string|false|Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.|
|siteSearch|query|string|false|Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).|
|siteSearchFilter|query|string|false|Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include|
|sort|query|string|false|The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).|
|start|query|integer|false|The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.|
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
|imgColorType|imgColorTypeUndefined|
|imgColorType|mono|
|imgColorType|gray|
|imgColorType|color|
|imgColorType|trans|
|imgDominantColor|imgDominantColorUndefined|
|imgDominantColor|black|
|imgDominantColor|blue|
|imgDominantColor|brown|
|imgDominantColor|gray|
|imgDominantColor|green|
|imgDominantColor|orange|
|imgDominantColor|pink|
|imgDominantColor|purple|
|imgDominantColor|red|
|imgDominantColor|teal|
|imgDominantColor|white|
|imgDominantColor|yellow|
|imgSize|imgSizeUndefined|
|imgSize|HUGE|
|imgSize|ICON|
|imgSize|LARGE|
|imgSize|MEDIUM|
|imgSize|SMALL|
|imgSize|XLARGE|
|imgSize|XXLARGE|
|imgType|imgTypeUndefined|
|imgType|clipart|
|imgType|face|
|imgType|lineart|
|imgType|stock|
|imgType|photo|
|imgType|animated|
|safe|safeUndefined|
|safe|active|
|safe|high|
|safe|medium|
|safe|off|
|searchType|searchTypeUndefined|
|searchType|image|
|siteSearchFilter|siteSearchFilterUndefined|
|siteSearchFilter|e|
|siteSearchFilter|i|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "items": [
    {
      "cacheId": "string",
      "displayLink": "string",
      "fileFormat": "string",
      "formattedUrl": "string",
      "htmlFormattedUrl": "string",
      "htmlSnippet": "string",
      "htmlTitle": "string",
      "image": {
        "byteSize": 0,
        "contextLink": "string",
        "height": 0,
        "thumbnailHeight": 0,
        "thumbnailLink": "string",
        "thumbnailWidth": 0,
        "width": 0
      },
      "kind": "string",
      "labels": [
        {
          "displayName": "string",
          "label_with_op": "string",
          "name": "string"
        }
      ],
      "link": "string",
      "mime": "string",
      "pagemap": {
        "property1": null,
        "property2": null
      },
      "snippet": "string",
      "title": "string"
    }
  ],
  "kind": "string",
  "promotions": [
    {
      "bodyLines": [
        {
          "htmlTitle": "string",
          "link": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "displayLink": "string",
      "htmlTitle": "string",
      "image": {
        "height": 0,
        "source": "string",
        "width": 0
      },
      "link": "string",
      "title": "string"
    }
  ],
  "queries": {
    "nextPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "previousPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "request": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ]
  },
  "searchInformation": {
    "formattedSearchTime": "string",
    "formattedTotalResults": "string",
    "searchTime": 0,
    "totalResults": "string"
  },
  "spelling": {
    "correctedQuery": "string",
    "htmlCorrectedQuery": "string"
  },
  "url": {
    "template": "string",
    "type": "string"
  }
}
```

<h3 id="searchcselist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Search](#schemasearch)|

<aside class="success">
This operation does not require authentication
</aside>

## search.cse.siterestrict.list

<a id="opIdsearch.cse.siterestrict.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/customsearch/v1/siterestrict \
  -H 'Accept: application/json'
```

`GET /customsearch/v1/siterestrict`

Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

<h3 id="searchcsesiterestrictlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|c2coff|query|string|false|Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)|
|cr|query|string|false|Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.|
|cx|query|string|false|The Programmable Search Engine ID to use for this request.|
|dateRestrict|query|string|false|Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.|
|exactTerms|query|string|false|Identifies a phrase that all documents in the search results must contain.|
|excludeTerms|query|string|false|Identifies a word or phrase that should not appear in any documents in the search results.|
|fileType|query|string|false|Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).|
|filter|query|string|false|Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.|
|gl|query|string|false|Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.|
|googlehost|query|string|false|**Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.|
|highRange|query|string|false|Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.|
|hl|query|string|false|Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.|
|hq|query|string|false|Appends the specified query terms to the query, as if they were combined with a logical AND operator.|
|imgColorType|query|string|false|Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background|
|imgDominantColor|query|string|false|Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`|
|imgSize|query|string|false|Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`|
|imgType|query|string|false|Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`|
|linkSite|query|string|false|Specifies that all search results should contain a link to a particular URL.|
|lowRange|query|string|false|Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.|
|lr|query|string|false|Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)|
|num|query|integer|false|Number of search results to return. * Valid values are integers between 1 and 10, inclusive.|
|orTerms|query|string|false|Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.|
|q|query|string|false|Query|
|relatedSite|query|string|false|Specifies that all search results should be pages that are related to the specified URL.|
|rights|query|string|false|Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).|
|safe|query|string|false|Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)|
|searchType|query|string|false|Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.|
|siteSearch|query|string|false|Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).|
|siteSearchFilter|query|string|false|Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include|
|sort|query|string|false|The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).|
|start|query|integer|false|The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.|
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
|imgColorType|imgColorTypeUndefined|
|imgColorType|mono|
|imgColorType|gray|
|imgColorType|color|
|imgColorType|trans|
|imgDominantColor|imgDominantColorUndefined|
|imgDominantColor|black|
|imgDominantColor|blue|
|imgDominantColor|brown|
|imgDominantColor|gray|
|imgDominantColor|green|
|imgDominantColor|orange|
|imgDominantColor|pink|
|imgDominantColor|purple|
|imgDominantColor|red|
|imgDominantColor|teal|
|imgDominantColor|white|
|imgDominantColor|yellow|
|imgSize|imgSizeUndefined|
|imgSize|HUGE|
|imgSize|ICON|
|imgSize|LARGE|
|imgSize|MEDIUM|
|imgSize|SMALL|
|imgSize|XLARGE|
|imgSize|XXLARGE|
|imgType|imgTypeUndefined|
|imgType|clipart|
|imgType|face|
|imgType|lineart|
|imgType|stock|
|imgType|photo|
|imgType|animated|
|safe|safeUndefined|
|safe|active|
|safe|high|
|safe|medium|
|safe|off|
|searchType|searchTypeUndefined|
|searchType|image|
|siteSearchFilter|siteSearchFilterUndefined|
|siteSearchFilter|e|
|siteSearchFilter|i|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "items": [
    {
      "cacheId": "string",
      "displayLink": "string",
      "fileFormat": "string",
      "formattedUrl": "string",
      "htmlFormattedUrl": "string",
      "htmlSnippet": "string",
      "htmlTitle": "string",
      "image": {
        "byteSize": 0,
        "contextLink": "string",
        "height": 0,
        "thumbnailHeight": 0,
        "thumbnailLink": "string",
        "thumbnailWidth": 0,
        "width": 0
      },
      "kind": "string",
      "labels": [
        {
          "displayName": "string",
          "label_with_op": "string",
          "name": "string"
        }
      ],
      "link": "string",
      "mime": "string",
      "pagemap": {
        "property1": null,
        "property2": null
      },
      "snippet": "string",
      "title": "string"
    }
  ],
  "kind": "string",
  "promotions": [
    {
      "bodyLines": [
        {
          "htmlTitle": "string",
          "link": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "displayLink": "string",
      "htmlTitle": "string",
      "image": {
        "height": 0,
        "source": "string",
        "width": 0
      },
      "link": "string",
      "title": "string"
    }
  ],
  "queries": {
    "nextPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "previousPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "request": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ]
  },
  "searchInformation": {
    "formattedSearchTime": "string",
    "formattedTotalResults": "string",
    "searchTime": 0,
    "totalResults": "string"
  },
  "spelling": {
    "correctedQuery": "string",
    "htmlCorrectedQuery": "string"
  },
  "url": {
    "template": "string",
    "type": "string"
  }
}
```

<h3 id="searchcsesiterestrictlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Search](#schemasearch)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Promotion">Promotion</h2>
<!-- backwards compatibility -->
<a id="schemapromotion"></a>
<a id="schema_Promotion"></a>
<a id="tocSpromotion"></a>
<a id="tocspromotion"></a>

```json
{
  "bodyLines": [
    {
      "htmlTitle": "string",
      "link": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "displayLink": "string",
  "htmlTitle": "string",
  "image": {
    "height": 0,
    "source": "string",
    "width": 0
  },
  "link": "string",
  "title": "string"
}
```

Promotion result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyLines|[object]|false|none|An array of block objects for this promotion.|
|displayLink|string|false|none|An abridged version of this search's result URL, e.g. www.example.com.|
|htmlTitle|string|false|none|The title of the promotion, in HTML.|
|image|object|false|none|Image belonging to a promotion.|
|link|string|false|none|The URL of the promotion.|
|title|string|false|none|The title of the promotion.|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "cacheId": "string",
  "displayLink": "string",
  "fileFormat": "string",
  "formattedUrl": "string",
  "htmlFormattedUrl": "string",
  "htmlSnippet": "string",
  "htmlTitle": "string",
  "image": {
    "byteSize": 0,
    "contextLink": "string",
    "height": 0,
    "thumbnailHeight": 0,
    "thumbnailLink": "string",
    "thumbnailWidth": 0,
    "width": 0
  },
  "kind": "string",
  "labels": [
    {
      "displayName": "string",
      "label_with_op": "string",
      "name": "string"
    }
  ],
  "link": "string",
  "mime": "string",
  "pagemap": {
    "property1": null,
    "property2": null
  },
  "snippet": "string",
  "title": "string"
}
```

A custom search result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheId|string|false|none|Indicates the ID of Google's cached version of the search result.|
|displayLink|string|false|none|An abridged version of this search result’s URL, e.g. www.example.com.|
|fileFormat|string|false|none|The file format of the search result.|
|formattedUrl|string|false|none|The URL displayed after the snippet for each search result.|
|htmlFormattedUrl|string|false|none|The HTML-formatted URL displayed after the snippet for each search result.|
|htmlSnippet|string|false|none|The snippet of the search result, in HTML.|
|htmlTitle|string|false|none|The title of the search result, in HTML.|
|image|object|false|none|Image belonging to a custom search result.|
|kind|string|false|none|A unique identifier for the type of current object. For this API, it is `customsearch#result.`|
|labels|[object]|false|none|Encapsulates all information about refinement labels.|
|link|string|false|none|The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.|
|mime|string|false|none|The MIME type of the search result.|
|pagemap|object|false|none|Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result.|
|snippet|string|false|none|The snippet of the search result, in plain text.|
|title|string|false|none|The title of the search result, in plain text.|

<h2 id="tocS_Search">Search</h2>
<!-- backwards compatibility -->
<a id="schemasearch"></a>
<a id="schema_Search"></a>
<a id="tocSsearch"></a>
<a id="tocssearch"></a>

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "items": [
    {
      "cacheId": "string",
      "displayLink": "string",
      "fileFormat": "string",
      "formattedUrl": "string",
      "htmlFormattedUrl": "string",
      "htmlSnippet": "string",
      "htmlTitle": "string",
      "image": {
        "byteSize": 0,
        "contextLink": "string",
        "height": 0,
        "thumbnailHeight": 0,
        "thumbnailLink": "string",
        "thumbnailWidth": 0,
        "width": 0
      },
      "kind": "string",
      "labels": [
        {
          "displayName": "string",
          "label_with_op": "string",
          "name": "string"
        }
      ],
      "link": "string",
      "mime": "string",
      "pagemap": {
        "property1": null,
        "property2": null
      },
      "snippet": "string",
      "title": "string"
    }
  ],
  "kind": "string",
  "promotions": [
    {
      "bodyLines": [
        {
          "htmlTitle": "string",
          "link": "string",
          "title": "string",
          "url": "string"
        }
      ],
      "displayLink": "string",
      "htmlTitle": "string",
      "image": {
        "height": 0,
        "source": "string",
        "width": 0
      },
      "link": "string",
      "title": "string"
    }
  ],
  "queries": {
    "nextPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "previousPage": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ],
    "request": [
      {
        "count": 0,
        "cr": "string",
        "cx": "string",
        "dateRestrict": "string",
        "disableCnTwTranslation": "string",
        "exactTerms": "string",
        "excludeTerms": "string",
        "fileType": "string",
        "filter": "string",
        "gl": "string",
        "googleHost": "string",
        "highRange": "string",
        "hl": "string",
        "hq": "string",
        "imgColorType": "string",
        "imgDominantColor": "string",
        "imgSize": "string",
        "imgType": "string",
        "inputEncoding": "string",
        "language": "string",
        "linkSite": "string",
        "lowRange": "string",
        "orTerms": "string",
        "outputEncoding": "string",
        "relatedSite": "string",
        "rights": "string",
        "safe": "string",
        "searchTerms": "string",
        "searchType": "string",
        "siteSearch": "string",
        "siteSearchFilter": "string",
        "sort": "string",
        "startIndex": 0,
        "startPage": 0,
        "title": "string",
        "totalResults": "string"
      }
    ]
  },
  "searchInformation": {
    "formattedSearchTime": "string",
    "formattedTotalResults": "string",
    "searchTime": 0,
    "totalResults": "string"
  },
  "spelling": {
    "correctedQuery": "string",
    "htmlCorrectedQuery": "string"
  },
  "url": {
    "template": "string",
    "type": "string"
  }
}
```

Response to a custom search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search.|
|items|[[Result](#schemaresult)]|false|none|The current set of custom search results.|
|kind|string|false|none|Unique identifier for the type of current object. For this API, it is customsearch#search.|
|promotions|[[Promotion](#schemapromotion)]|false|none|The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query.|
|queries|object|false|none|Query metadata for the previous, current, and next pages of results.|
|searchInformation|object|false|none|Metadata about a search operation.|
|spelling|object|false|none|Spell correction information for a query.|
|url|object|false|none|OpenSearch template and URL.|
