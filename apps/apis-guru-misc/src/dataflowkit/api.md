<h1 id="dataflow-kit-web-scraper">Dataflow Kit Web Scraper v1.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Render Javascript driven pages, while we internally manage Headless Chrome and proxies for you. 

- Build a custom web scraper with our Visual point-and-click toolkit.
- Scrape the most popular Search engines result pages (SERP).
- Convert web pages to PDF and capture screenshots.
***
### Authentication
Dataflow Kit API require you to sign up for an API key in order to use the API. 

The API key can be found in the [DFK Dashboard](https://account.dataflowkit.com) after _free registration_.

Pass a secret API Key to all API requests to the server as the `api_key` query parameter.

Base URLs:

* <a href="https://api.dataflowkit.com/v1">https://api.dataflowkit.com/v1</a> - Production server

<a href="https://dataflowkit.com/terms">Terms of service</a>
Web: <a href="https://dataflowkit.com/">https://dataflowkit.com/</a> 

<a href="https://dataflowkit.com/open-api">swagger-ui documentation</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **api_key**, in: query.

<h1 id="dataflow-kit-web-scraper-fetch">fetch</h1>

## Download web page content

<a id="opIdfetch"></a>

> Code samples

```bash
curl "https://example.com/fetch?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "actions": [
      {
        "waitFor": {
          "waitForSelector": ":root"
        }
      }
    ],
    "output": "buffer",
    "proxy": "country-any",
    "type": "base",
    "url": "https://ipapi.co/json/"
  }'
```

`POST /fetch`

Use fetch endpoint to download web pages.

> Body parameter

```json
{
  "actions": [
    {
      "waitFor": {
        "waitForSelector": ":root"
      }
    }
  ],
  "output": "buffer",
  "proxy": "country-any",
  "type": "base",
  "url": "https://ipapi.co/json/"
}
```

<h3 id="download-web-page-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[fetchrequest](#schemafetchrequest)|true|- _Base fetcher type_ is the right choice for fetching server-side rendered pages. It takes fewer resources and works faster than rendering HTML with _Chrome fetcher_<br>- But for rendering Angular, React, and Vue.js web sites, you should always specify _Chrome fetcher type_. In this case, headless chrome fetcher renders dynamic Javascript content in the same way as real web browsers would do it.<br><br>Generate ready-to-run code for your favorite language at [https://dataflowkit.com/render-web](https://dataflowkit.com/render-web)<br>|
|» actions|body|[[action](#schemaaction)]|false|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_|
|» ignoreHTTPStatusErrCodes|body|boolean|false|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|» initialCookies|body|[[initialCookie](#schemainitialcookie)]|false|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|» output|body|string|false|If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body.|
|» proxy|body|string|false|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|» type|body|string|true|If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.|
|» url|body|string|true|Specify URL to download.|
|» waitDelay|body|number|false|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» output|buffer|
|» output|file|
|» type|base|
|» type|chrome|

> Example responses

> 200 Response

```text
<html>
    <head></head>
    <body>{
    &#34;ip&#34;: &#34;178.171.21.156&#34;,
    &#34;city&#34;: &#34;Singapore&#34;,
    &#34;region&#34;: null,
    &#34;region_code&#34;: null,
    &#34;country&#34;: &#34;SG&#34;,
    &#34;country_code&#34;: &#34;SG&#34;,
    &#34;country_code_iso3&#34;: &#34;SGP&#34;,
    &#34;country_capital&#34;: &#34;Singapore&#34;,
    &#34;country_tld&#34;: &#34;.sg&#34;,
    &#34;country_name&#34;: &#34;Singapore&#34;,
    &#34;continent_code&#34;: &#34;AS&#34;,
    &#34;in_eu&#34;: false,
    &#34;postal&#34;: &#34;18&#34;,
    &#34;latitude&#34;: 1.2929,
    &#34;longitude&#34;: 103.8547,
    &#34;timezone&#34;: &#34;Asia/Singapore&#34;,
    &#34;utc_offset&#34;: &#34;+0800&#34;,
    &#34;country_calling_code&#34;: &#34;+65&#34;,
    &#34;currency&#34;: &#34;SGD&#34;,
    &#34;currency_name&#34;: &#34;Dollar&#34;,
    &#34;languages&#34;: &#34;cmn,en-SG,ms-SG,ta-SG,zh-SG&#34;,
    &#34;country_area&#34;: 692.7,
    &#34;country_population&#34;: 4701069.0,
    &#34;asn&#34;: &#34;AS9009&#34;,
    &#34;org&#34;: &#34;M247 Ltd&#34;
}</body>
</html>
```

> 400 Response

```text
Invalid request URL
```

> 401 Response

```text
No API Key provided
```

> 500 Response

```text
Process fetch failed.
```

<h3 id="download-web-page-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns utf8 encoded web page content.|None|
|400|Bad Request|Bad Request. Invalid payload specified.|None|
|401|Unauthorized|Unauthorized. `api_key` parameter is missed or incorrect|None|
|500|Internal Server Error|Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="dataflow-kit-web-scraper-serp">serp</h1>

## Collect search results from search engines

<a id="opIdserp"></a>

> Code samples

```bash
curl "https://example.com/serp?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "commonParent": "div[id].result",
    "fields": [
      {
        "attrs": [
          "href",
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "link",
        "selector": ".result__a",
        "type": 2
      },
      {
        "attrs": [
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "description",
        "selector": ".js-result-snippet",
        "type": 1
      }
    ],
    "format": "json",
    "name": "duckduckgo",
    "request": {
      "proxy": "country-any",
      "type": "chrome",
      "url": "https://duckduckgo.com/?q=Dataflow+kit&ia=web"
    }
  }'
```

`POST /serp`

To crawl search engine result pages, you can use `/serp` endpoint. SERP collection service extracts a list of organic results, news, images, and more.  Specify configuration parameters, such as country or languages, to customize output SERP data.
The following search engines are supported

- google
- google-image
- google-news
- google-shopping
- bing
- duckduckgo
- baidu
- yandex


Generate ready-to-run code for your favorite language at [https://dataflowkit.com/serp](https://dataflowkit.com/serp)

> Body parameter

```json
{
  "commonParent": "div[id].result",
  "fields": [
    {
      "attrs": [
        "href",
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "link",
      "selector": ".result__a",
      "type": 2
    },
    {
      "attrs": [
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "description",
      "selector": ".js-result-snippet",
      "type": 1
    }
  ],
  "format": "json",
  "name": "duckduckgo",
  "request": {
    "proxy": "country-any",
    "type": "chrome",
    "url": "https://duckduckgo.com/?q=Dataflow+kit&ia=web"
  }
}
```

<h3 id="collect-search-results-from-search-engines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[serprequest](#schemaserprequest)|true|<h2>Search parameters</h2><br><br>> In most cases, you don't need to customize parameters by hand. Use <a href="https://dataflowkit.com/serp" target="_blank">SERP extraction Code generator</a>. It is the easiest way to generate a payload for launching in the Dataflow kit cloud.<br><br><h3>URL GET parameters</h3><br><br>\|\|\|\|<br>\|-\|-\|-\|<br>\|q\| Parameter defines encoded search term. You can use anything that you would use in a regular Search engines search. (e.g. for Google, <ul> <li><code>link:dataflowkit.com</code>,</li> <li><code>site:twitter.com Bratislava</code>,</li><li><code>inurl:view/view.shtml</code>, etc.)</li></ul> See The Complete List of 42 Advanced <a href="https://ahrefs.com/blog/google-advanced-search-operators/" target="_blank">Google Search Operators</a>\|<ul> <li><code>q</code> parameter is used by google, Bing, DuckDuckGo.</li><li> <code>text</code> is used as query holder by Yandex SE.</li><li> Chineese Baidu uses <code>wd</code> for this purpose.</li></ul>\|<br>\|tbm\| <code>tbm</code> is a special Google parameter used to differentiate between search types\|  <ul> <li><code>tbm=isch</code> - Google Images,</li> <li> <code>tbm=nws</code> - Google News</li> <li><code>tbm=shop</code> - Google Shopping</li> </ul>\|<br>\|lr\|Restricts the search to documents written in a particular languages.\|<ul><li>Google uses <code>lang_{two-letter lang code}</code> to specify languages and <code>&#124;</code> as a delimiter. (e.g., <code>lang_sk&#124;lang_de</code> will only search Slovak and German pages). See the <a href="https://developers.google.com/custom-search/v1/cse/list">full list</a> of possible values for Google. </li><li>For Bing specify <code>setLang=en</code> parameter.</li><li> In Yandex use <code>lang=ca</code> parameter</li></ul>\|<br>\|gl\|Specify the country to search from. It's a two-letter country code. (e.g., <code>sk</code> for Slovakia, or <code>us</code> for the United States).\| For Google see the <a href="https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes">Country Codes</a> page for a list of valid values. For Bing <code>cc=at</code> parameter is used.\|<br>|
|» fields|body|[[field](#schemafield)]|false|Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.<br><br>Ready-to-use payloads for collecting search results from the most popular Search Engines are available. These payloads are customizable, though.<br>|
|» format|body|string|true|Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.|
|» name|body|string|true|Collection name.|
|» pageNum|body|integer|false|Specify number of pages to crawl.|
|» proxy|body|string|true|Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|» type|body|string|true|For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser|
|» url|body|string|true|url holds the link to a Search Engine to use, and other optional parameters like languages or country.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|csv|
|» format|json|
|» format|jsonl|
|» format|excel|
|» format|xml|

> Example responses

> 200 Response

```json
[
  {
    "description_text": "Dataflow kit visits the web on your behalf, processes Javascript driven pages in the cloud, return rendered HTML, capture screenshot or save as PDF. Dataflow Kit services. Headless Chrome as a service. We automate dynamic web content download using the Headless Chrome browser. ...",
    "link_href": "https://dataflowkit.com/",
    "link_text": "Turn Websites into structured data /Dataflow kit"
  },
  {
    "description_text": "Dataflow kit (\"DFK\") is a Web Scraping framework for Gophers. It extracts data from web pages, following the specified CSS Selectors. You can use it in many ways for data mining, data processing or archiving.",
    "link_href": "https://github.com/slotix/dataflowkit",
    "link_text": "GitHub - slotix/dataflowkit: Extract structured data from ..."
  },
  {
    "description_text": "The Department of Health - Abu Dhabi (DoH - Abu Dhabi) leverages the DataFlow Group's specialized Primary Source Verification (PSV) solutions to screen the credentials of professionals working within Abu Dhabi's healthcare sector. As the regulative body of the healthcare sector in Abu Dhabi, DoH - Abu Dhabi ensures excellence for the ...",
    "link_href": "https://corp.dataflowgroup.com/verification-services/start-your-verification/healthcare/department-of-health-abu-dhabi/",
    "link_text": "Department of Health - Abu Dhabi - Dataflow Group"
  },
  {
    "description_text": "Dataflow Kit was added by slotix in Apr 2020 and the latest update was made in May 2020. The list of alternatives was updated Apr 2020. It's possible to update the information on Dataflow Kit or report it as discontinued, duplicated or spam.",
    "link_href": "https://alternativeto.net/software/dataflow-kit/",
    "link_text": "Dataflow Kit Alternatives and Similar Websites and Apps ..."
  },
  {
    "description_text": "Dataflow Kit Reloaded. We are so excited to introduce a new, completely re-implemented Dataflow Kit. In particular, we supplement our legacy custom web scraper with more focused and more understandable web services for our users.",
    "link_href": "https://blog.dataflowkit.com/",
    "link_text": "Dataflow Kit Blog"
  },
  {
    "description_text": "The Dubai Health Authority (DHA) leverages the DataFlow Group's specialized Primary Source Verification (PSV) solutions to screen the credentials of professionals working within Dubai's healthcare sector. The DHA is led by a mission to ensure access to health services, maintain and enhance the quality of these services, improve the health ...",
    "link_href": "https://corp.dataflowgroup.com/verification-services/start-your-verification/healthcare/dubai-health-authority/",
    "link_text": "Dubai Health Authority - Dataflow Group"
  },
  {
    "description_text": "Dataflow Kit Reloaded. We are so excited to introduce a new, completely re-implemented Dataflow Kit. In particular, we supplement our legacy custom web scraper with more focused and more understandable web services for our users.",
    "link_href": "https://blog.dataflowkit.com/reloaded/",
    "link_text": "Dataflow Kit Reloaded."
  },
  {
    "description_text": "The Dataflow Kit API allows embedding free COVID-19 live statistics web widget into sites. Methods provide data for the USA, Spain, or the World. Developers can access live statistics data through the DFK COVID-19 API for free. They can build widgets, mobile apps, or integrate them into other applications.",
    "link_href": "https://www.programmableweb.com/api/dataflow-kit-rest-api-v1",
    "link_text": "Dataflow Kit REST API v1 | ProgrammableWeb"
  },
  {
    "description_text": "Description. Dataflow kit is a Scraping framework for Gophers. DFK extracts structured data from web pages, following the specified extractors. It can be used in many ways for data mining, data processing or archiving.",
    "link_href": "https://go.libhunt.com/dataflowkit-alternatives",
    "link_text": "Dataflow kit Alternatives - Go Text Processing | LibHunt"
  },
  {
    "description_text": "Point, click and extract. Work on any interactive site Scrape a website behind a login form Extract data from multiple pages. Scrape infinite scrolled pages. Crawl details; Extract and follow lin",
    "link_href": "https://www.startupranking.com/dataflow-kit",
    "link_text": "Dataflow Kit - Fast extraction of structured data from ..."
  }
]
```

> 400 Response

```text
Invalid request URL
```

> 401 Response

```text
No API Key provided
```

> 500 Response

```text
Process fetch failed.
```

<h3 id="collect-search-results-from-search-engines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML|Inline|
|400|Bad Request|Bad Request. Invalid payload specified.|None|
|401|Unauthorized|Unauthorized. `api_key` parameter is missed or incorrect|None|
|500|Internal Server Error|Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="dataflow-kit-web-scraper-parse">parse</h1>

## Extract structured data from web pages

<a id="opIdparse"></a>

> Code samples

```bash
curl "https://example.com/parse?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "fields": [
      {
        "attrs": [
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Number",
        "selector": ".badge-primary",
        "type": 1
      },
      {
        "attrs": [
          "href",
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Name",
        "selector": "#cards a",
        "type": 2
      },
      {
        "attrs": [
          "src",
          "alt"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Picture",
        "selector": ".card-img-top",
        "type": 0
      }
    ],
    "format": "json",
    "name": "test.dataflowkit.com",
    "paginator": {
      "nextPageSelector": ".page-item:nth-child(2) .page-link",
      "pageNum": 2
    },
    "path": false,
    "request": {
      "type": "chrome",
      "url": "https://test.dataflowkit.com/persons/page-0"
    }
  }'
```

`POST /parse`

Dataflow kit uses CSS selectors to find HTML elements in web pages for later data extraction.

Open [visual point-and-click toolkit](https://dataflowkit.com/dfk) and click desired elements on a page to specify extracting data. 


 Then you can send generated payload to `/parse` endpoint. We crawl web pages and extract data like text, links, or images for you following the specified rules. 


Extracted data is returned in CSV, MS Excel, JSON, JSON(Lines) or XML format.


> Body parameter

```json
{
  "fields": [
    {
      "attrs": [
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Number",
      "selector": ".badge-primary",
      "type": 1
    },
    {
      "attrs": [
        "href",
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Name",
      "selector": "#cards a",
      "type": 2
    },
    {
      "attrs": [
        "src",
        "alt"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Picture",
      "selector": ".card-img-top",
      "type": 0
    }
  ],
  "format": "json",
  "name": "test.dataflowkit.com",
  "paginator": {
    "nextPageSelector": ".page-item:nth-child(2) .page-link",
    "pageNum": 2
  },
  "path": false,
  "request": {
    "type": "chrome",
    "url": "https://test.dataflowkit.com/persons/page-0"
  }
}
```

<h3 id="extract-structured-data-from-web-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[parserequest](#schemaparserequest)|true|### Field types and attributes<br>  <br>- **Text**. Extract human-readable text from the selected element and all its child elements. HTML tags are stripped, and only text returned.<br>    <br>- **Link**. Capture link `href` attribute and link text. Or specify a special _Path_ option for website navigation. When Path option is true, all other selectors ignored, and no results from the current page returned.<br>    <br>- **Image**. Image type extracts `src` (URL) and `alt` attributes of an image<br><br><br>***<br>### Filters<br>Filters are used to manipulate text data when extracting.<br><br>Here is the list of available filters<br><br><br>- **Trim** removes leading and trailing white spaces from the _field text or attribute_<br><br>- **Normal** leaves the case and capitalization of text/ attribute exactly as is.<br><br>- **UPPERCASE** makes all of the letters in the Field's text/ attribute uppercase.<br><br>- **lowercase** makes all of the letters in the Field's text/ attribute lowercase.<br><br>- **Capitalize** capitalizes the first letter of each word in the Field's text/ attribute<br><br>- **Concatinate** joins text array element into a single string<br><br>***<br>### Regular Expressions<br><br>For more advanced text formatting regular expression can be used. Some useful examples are listed below<br><br><br>\| Input text \| Regex \| Result \|<br>\| ---------- \| ----- \| ------ \|<br>\| price- 10.99€ \| <code>[0-9]+\.[0-9]+</code> \| 10.99 \|<br>\| phone- 0 (944) 244-18-22 \| <code>\w+</code> \| 09442441822 \|<br><br><br>***<br>### Details. Chaining.<br>The Link field type serves as a navigation link to a details page containing more data.<br>A special _Path_ option is used for navigation only. When the Path option specified, no results from the current page returned. But grouped results from details pages will be pulled instead. You can use chaining functionality of Dataflow Kit scraper to retrieve all the detail page data at the same time.<br>|
|» commonParent|body|string|false|Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_|
|» fields|body|[[field](#schemafield)]|true|Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.<br>|
|» format|body|string|true|Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.|
|» name|body|string|true|Collection name.|
|» paginator|body|[Paginator](#schemapaginator)|false|Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.|
|» path|body|boolean|false|Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.|
|» request|body|[fetchrequest](#schemafetchrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|csv|
|» format|json|
|» format|jsonl|
|» format|excel|
|» format|xml|

> Example responses

> 200 Response

```json
[
  {
    "Name_href": "https://test.dataflowkit.com/persons/1",
    "Name_text": "Ethan Aguirre",
    "Number_text": "1",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-1.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/2",
    "Name_text": "Melodie Holder",
    "Number_text": "2",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-2.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/3",
    "Name_text": "Meghan Reyes",
    "Number_text": "3",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-3.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/4",
    "Name_text": "Lane Vinson",
    "Number_text": "4",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-4.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/5",
    "Name_text": "Philip Tillman",
    "Number_text": "5",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-5.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/6",
    "Name_text": "Theodore Mcclain",
    "Number_text": "6",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-6.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/7",
    "Name_text": "Neville Kane",
    "Number_text": "7",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-7.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/8",
    "Name_text": "Lila Vazquez",
    "Number_text": "8",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-8.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/9",
    "Name_text": "Ulysses Peters",
    "Number_text": "9",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-9.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/10",
    "Name_text": "Camden Young",
    "Number_text": "10",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-10.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/11",
    "Name_text": "Solomon Petty",
    "Number_text": "11",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-11.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/12",
    "Name_text": "Ahmed Robbins",
    "Number_text": "12",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-12.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/13",
    "Name_text": "William Olsen",
    "Number_text": "13",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-13.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/14",
    "Name_text": "Ahmed Vaughan",
    "Number_text": "14",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-14.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/15",
    "Name_text": "Howard Kemp",
    "Number_text": "15",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-15.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/16",
    "Name_text": "Channing Flores",
    "Number_text": "16",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-16.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/17",
    "Name_text": "Brandon Bauer",
    "Number_text": "17",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-17.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/18",
    "Name_text": "Colt Morrow",
    "Number_text": "18",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-18.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/19",
    "Name_text": "Kaye Garner",
    "Number_text": "19",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-19.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/20",
    "Name_text": "Clayton Justice",
    "Number_text": "20",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-20.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/21",
    "Name_text": "Hiroko Mills",
    "Number_text": "21",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-21.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/22",
    "Name_text": "Melvin Lloyd",
    "Number_text": "22",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-22.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/23",
    "Name_text": "Marshall Mayo",
    "Number_text": "23",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-23.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/24",
    "Name_text": "Rae Casey",
    "Number_text": "24",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-24.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/25",
    "Name_text": "Astra Snyder",
    "Number_text": "25",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-25.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/26",
    "Name_text": "Simon Mckinney",
    "Number_text": "26",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-26.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/27",
    "Name_text": "Graiden Riggs",
    "Number_text": "27",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-27.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/28",
    "Name_text": "Jaden Stewart",
    "Number_text": "28",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-28.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/29",
    "Name_text": "Christian Galloway",
    "Number_text": "29",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-29.svg"
  },
  {
    "Name_href": "https://test.dataflowkit.com/persons/30",
    "Name_text": "Signe Sykes",
    "Number_text": "30",
    "Picture_alt": "",
    "Picture_src": "https://test.dataflowkit.com/static/img/avataaars-30.svg"
  }
]
```

> 400 Response

```text
Invalid request URL
```

> 401 Response

```text
No API Key provided
```

> 500 Response

```text
Process fetch failed.
```

<h3 id="extract-structured-data-from-web-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML|Inline|
|400|Bad Request|Bad Request. Invalid payload specified.|None|
|401|Unauthorized|Unauthorized. `api_key` parameter is missed or incorrect|None|
|500|Internal Server Error|Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="dataflow-kit-web-scraper-url-to-pdf">url-to-pdf</h1>

## Save web page as PDF

<a id="opIdurl-to-pdf"></a>

> Code samples

```bash
curl "https://example.com/convert/url/pdf?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "landscape": false,
    "marginBottom": 0.4,
    "marginLeft": 0.4,
    "marginRight": 0.4,
    "marginTop": 0.4,
    "pageRanges": "",
    "paperSize": "A4",
    "printBackground": false,
    "printHeaderFooter": false,
    "scale": 1,
    "url": "https://dataflowkit.com",
    "waitDelay": 0.5
  }'
```

`POST /convert/url/pdf`

Automate URL to PDF Conversion right in your application.

Specify request parameters like URL, Proxy, and actions to render web pages to PDF using Headless Chrome.

Get resulted PDF even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.

Simulate real-world human interaction with the page. For example, before saving a web page to PDF, you may need to scroll it.

Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-pdf](https://dataflowkit.com/url-to-pdf)

> Body parameter

```json
{
  "landscape": false,
  "marginBottom": 0.4,
  "marginLeft": 0.4,
  "marginRight": 0.4,
  "marginTop": 0.4,
  "pageRanges": "",
  "paperSize": "A4",
  "printBackground": false,
  "printHeaderFooter": false,
  "scale": 1,
  "url": "https://dataflowkit.com",
  "waitDelay": 0.5
}
```

<h3 id="save-web-page-as-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[url2pdfrequest](#schemaurl2pdfrequest)|true|none|
|» actions|body|[[action](#schemaaction)]|false|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.|
|» ignoreHTTPStatusErrCodes|body|boolean|false|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|» initialCookies|body|[[initialCookie](#schemainitialcookie)]|false|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|» landscape|body|boolean|false|Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation.|
|» marginBottom|body|number|false|Bottom Margin of the PDF (in inches)|
|» marginLeft|body|number|false|Left Margin of the PDF (in inches)|
|» marginRight|body|number|false|Right Margin of the PDF (in inches)|
|» marginTop|body|number|false|Top Margin of the PDF (in inches)|
|» output|body|string|false|If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body.|
|» pageRanges|body|string|false|Specify page ranges to convert. Defaults to the empty value, which means convert all pages.|
|» paperSize|body|string|false|Page size parameter consists of the most popular page formats.|
|» printBackground|body|boolean|false|Print background graphics in the PDF.|
|» printHeaderFooter|body|boolean|false|printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing.|
|» proxy|body|string|false|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|» scale|body|number|false|By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering.|
|» url|body|string|true|The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF|
|» waitDelay|body|number|false|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» output|buffer|
|» output|file|
|» paperSize|A3|
|» paperSize|A4|
|» paperSize|A5|
|» paperSize|A6|
|» paperSize|Letter|
|» paperSize|Legal|
|» paperSize|Tabloid|

> Example responses

> 200 Response

```text
https://dfk-storage-ny3.nyc3.digitaloceanspaces.com/5e5d2864ebb755000188c2c5/url_pdf2020-05-06_20%3A00.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=KMGZH6JMEM75FTB4EEVL%2F20200506%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20200506T200046Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=737740ad471acf45120709a07de7440287e1daa17599a44b8668f6586030e6be
```

> 400 Response

```text
Invalid request URL
```

> 401 Response

```text
No API Key provided
```

> 500 Response

```text
Process fetch failed.
```

<h3 id="save-web-page-as-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A PDF file.|Inline|
|400|Bad Request|Bad Request. Invalid payload specified.|None|
|401|Unauthorized|Unauthorized. `api_key` parameter is missed or incorrect|None|
|500|Internal Server Error|Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="dataflow-kit-web-scraper-url-to-screenshot">url-to-screenshot</h1>

## Capture web page Screenshots.

<a id="opIdurl-to-screenshot"></a>

> Code samples

```bash
curl "https://example.com/convert/url/screenshot?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "format": "jpeg",
    "height": 1080,
    "quality": 80,
    "scale": 1,
    "url": "https://dataflowkit.com",
    "waitDelay": 0.5,
    "width": 1920
  }'
```

`POST /convert/url/screenshot`

Automate URL to Screenshot Conversion right in your application.

Specify request parameters like URL, Proxy, and actions to convert web pages to screenshots using Headless Chrome.

Get resulted pictures in JPG or PNG formats even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.

Simulate real-world human interaction with the page. For example, before capturing a web page, you may need to scroll it.

Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-screenshot](https://dataflowkit.com/url-to-screenshot)

> Body parameter

```json
{
  "format": "jpeg",
  "height": 1080,
  "quality": 80,
  "scale": 1,
  "url": "https://dataflowkit.com",
  "waitDelay": 0.5,
  "width": 1920
}
```

<h3 id="capture-web-page-screenshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[url2screenshotrequest](#schemaurl2screenshotrequest)|true|none|
|» actions|body|[[action](#schemaaction)]|false|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.|
|» clipSelector|body|string|false|Captures a screenshot of specified CSS element on a web page.|
|» format|body|string|false|Sets the Format of output image|
|» fullPage|body|boolean|false|takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values.|
|» height|body|integer|false|Rectangle height in device independent pixels (dip).|
|» ignoreHTTPStatusErrCodes|body|boolean|false|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|» initialCookies|body|[[initialCookie](#schemainitialcookie)]|false|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|» offsetx|body|integer|false|X offset in device independent pixels (dip).|
|» offsety|body|integer|false|Y offset in device independent pixels (dip).|
|» output|body|string|false|If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body.|
|» printBackground|body|boolean|false|Print background graphics in the PDF.|
|» proxy|body|string|false|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|» quality|body|integer|false|Sets the Quality of output image. Compression quality from range [0..100] (jpeg only).|
|» scale|body|number|false|Image scale factor. range [0.1 .. 3]|
|» url|body|string|true|The full URL address (including HTTP/HTTPS) of a web page that you want to capture|
|» waitDelay|body|number|false|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.|
|» width|body|integer|false|Rectangle width in device independent pixels (dip).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|png|
|» format|jpeg|
|» output|buffer|
|» output|file|

> Example responses

> 200 Response

```text
https://dfk-storage-ny3.nyc3.digitaloceanspaces.com/5e5d2864ebb755000188c2c5/url_screenshot2020-05-06_20%3A02.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=KMGZH6JMEM75FTB4EEVL%2F20200506%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20200506T200305Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1c1c39fab3e9b0a8806fc4fd6690b335758d12a926a635c08c7301f87ff9279b
```

> 400 Response

```text
Invalid request URL
```

> 401 Response

```text
No API Key provided
```

> 500 Response

```text
Process fetch failed.
```

<h3 id="capture-web-page-screenshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns jpg or png file.|Inline|
|400|Bad Request|Bad Request. Invalid payload specified.|None|
|401|Unauthorized|Unauthorized. `api_key` parameter is missed or incorrect|None|
|500|Internal Server Error|Internal Server Error is a very general HTTP status code that means something has gone wrong on the web site's server.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_Paginator">Paginator</h2>
<!-- backwards compatibility -->
<a id="schemapaginator"></a>
<a id="schema_Paginator"></a>
<a id="tocSpaginator"></a>
<a id="tocspaginator"></a>

```json
{
  "nextPageSelector": ".page-link",
  "pageNum": 10
}
```

Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageSelector|string|false|none|none|
|pageNum|integer|false|none|none|

<h2 id="tocS_action">action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "ignoreIfNotPresent": false,
  "selector": "#search-form-editbox",
  "value": "web scraper"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|Sets the value of an input field as if you had typed it in. You can also set the value of combo boxes, checkboxes, etc., using this action. In these cases, the value must be the value of the selected option, not visible text.|
|ignoreIfNotPresent|boolean|false|none|none|
|selector|string|false|none|Must be a valid CSS Selector|
|value|string|false|none|The value to input.|
|*anyOf*|object|false|none|The Send Keys action simulates real user input of key by key into a given string. It mimics real user behavior, such as the inability to type into invisible or read-only DOM elements. This action is useful for cases where explicit keystroke events are required, like auto-completing combo boxes. Unlike a similar 'input' action, which forces a specified value directly into an input selector, this action does not overwrite existing content.|
|ignoreIfNotPresent|boolean|false|none|none|
|selector|string|false|none|Must be a valid CSS Selector|
|value|string|false|none|Sequence of keys to send. Keys can include keystrokes such as ALT+A, ENTER, BACKSPACE, etc.|
|*anyOf*|object|false|none|Clicks on a target element (such as a link, button, checkbox, or radio button) with specified CSS Selector.|
|ignoreIfNotPresent|boolean|false|none|This optional parameter is useful when the target element occasionally may not be present in the DOM.|
|selector|string|false|none|Must be a valid CSS Selector|
|skipLastIteration|boolean|false|none|It is only used for click action inside a loop only. Skips the last iteration.|
|*anyOf*|object|false|none|Double clicks on a target element (such as a link, button, checkbox, or radio button) with specified CSS Selector.|
|ignoreIfNotPresent|boolean|false|none|This optional parameter is useful when the target element occasionally may not be present in the DOM.|
|selector|string|false|none|Must be a valid CSS Selector|
|skipLastIteration|boolean|false|none|It is only used for click action inside a loop only. Skips the last iteration.|
|*anyOf*|object|false|none|Click on an element with the specified CSS Selector. JS Click internally invokes a script (Javascript) that clicks the element.|
|ignoreIfNotPresent|boolean|false|none|This optional parameter is useful when the target element occasionally may not be present in the DOM.|
|selector|string|false|none|Must be a valid CSS Selector for the target element.|
|skipLastIteration|boolean|false|none|It is only used for click action inside a loop only. Skips the last iteration.|
|*anyOf*|object|false|none|Submit the specified form. This action is useful for forms without explicit submit buttons, such as single-input Search forms.|
|selector|string|false|none|Must be an any valid CSS Selector inside the parent form to submit.|
|*anyOf*|object|false|none|Wait for the target element to become visible on the page.|
|selector|string|false|none|Must be a valid CSS Selector for the target element.|
|*anyOf*|object|false|none|Wait for the target element to become invisible on the page.|
|selector|string|false|none|Must be a valid CSS Selector for the target element.|
|*anyOf*|object|false|none|Wait for the specified amount of time.|
|waitDelay|string|false|none|Wait time (in milliseconds).|
|*anyOf*|object|false|none|Executes the Javascript passes as 'script' parameter|
|script|string|false|none|The JavaScript snippet to run|
|*anyOf*|object|false|none|Loop action combines a set of actions and executes it as many times as specified in the "times" parameter.|
|actions|[[action](#schemaaction)]|false|none|list of actions combined in the loop are executed step-by-step|
|times|number|false|none|the number of times to execute the wrapped actions within the 'loop .. times' construction.|
|*anyOf*|object|false|none|Sometimes it is necessary to retrieve the HTML content of a web page multiple times in a single request. This action is for that.|
|skipLastIteration|boolean|false|none|It is only used for loop actions only. Skips the last iteration.|
|*anyOf*|object|false|none|Scroll a page down to load more content, simulating user interaction with infinite scrolled pages. Or specify the element's CSS Selector to click for loading more content.|
|scrollByPixels|number|false|none|Scrolls a web page by the number of pixels specified by 'scrollByPixels' parameter.|
|scrollingElementSelector|string|false|none|Optionally specify here a valid CSS Selector of scrolling element.|
|selector|string|false|none|Some websites require clicking 'More' button while scrolling a page. Put here 'More' button valid CSS Selector.|
|times|integer|false|none|The number of times to scroll down a web page.|

<h2 id="tocS_fetchrequest">fetchrequest</h2>
<!-- backwards compatibility -->
<a id="schemafetchrequest"></a>
<a id="schema_fetchrequest"></a>
<a id="tocSfetchrequest"></a>
<a id="tocsfetchrequest"></a>

```json
{
  "actions": [
    {
      "waitFor": {
        "waitForSelector": ":root"
      }
    }
  ],
  "output": "buffer",
  "proxy": "country-any",
  "type": "base",
  "url": "https://ipapi.co/json/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[action](#schemaaction)]|false|none|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_|
|ignoreHTTPStatusErrCodes|boolean|false|none|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|initialCookies|[[initialCookie](#schemainitialcookie)]|false|none|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|output|string|false|none|If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body.|
|proxy|string|false|none|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|type|string|true|none|If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.|
|url|string|true|none|Specify URL to download.|
|waitDelay|number|false|none|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_|

#### Enumerated Values

|Property|Value|
|---|---|
|output|buffer|
|output|file|
|type|base|
|type|chrome|

<h2 id="tocS_field">field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "attrs": [
    "text"
  ],
  "details": {
    "fields": [
      {
        "attrs": [
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Number",
        "selector": ".badge-primary",
        "type": 1
      },
      {
        "attrs": [
          "href",
          "text"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Name",
        "selector": "#cards a",
        "type": 2
      },
      {
        "attrs": [
          "src",
          "alt"
        ],
        "filters": [
          {
            "name": "trim"
          }
        ],
        "name": "Picture",
        "selector": ".card-img-top",
        "type": 0
      }
    ],
    "format": "json",
    "name": "test.dataflowkit.com",
    "paginator": {
      "nextPageSelector": ".page-item:nth-child(2) .page-link",
      "pageNum": 2
    },
    "path": false,
    "request": {
      "type": "chrome",
      "url": "https://test.dataflowkit.com/persons/page-0"
    }
  },
  "filters": [
    {
      "name": "trim"
    }
  ],
  "name": "string",
  "selector": "#cards a",
  "type": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attrs|[string]|true|none|A set of attributes to extract from a Field. Find more information about attributes|
|details|object|false|none|Details themself represent independent Parse request that extracts data from linked pages.|
|filters|[object]|false|none|Filters are used to pre-processing of text data when extracting.|
|name|string|true|none|Field name is used to aggregate results.|
|selector|string|true|none|Selector represents a CSS selector for data extraction within the given block.|
|type|integer|true|none|Selector type. ( 0 - image, 1 - text, 2 - link)|

#### Enumerated Values

|Property|Value|
|---|---|
|attrs|text|
|attrs|href|
|attrs|src|
|attrs|alt|
|type|0|
|type|1|
|type|2|

<h2 id="tocS_initialCookie">initialCookie</h2>
<!-- backwards compatibility -->
<a id="schemainitialcookie"></a>
<a id="schema_initialCookie"></a>
<a id="tocSinitialcookie"></a>
<a id="tocsinitialcookie"></a>

```json
{
  "domain": ".twitter.com",
  "expirationDate": 1762900726.409761,
  "hostOnly": false,
  "httpOnly": false,
  "id": 1,
  "name": "auth_token",
  "path": "/",
  "sameSite": "unspecified",
  "secure": true,
  "session": true,
  "storeID": "1",
  "value": "46fd9fed1ab8b0b0e231ac3f"
}
```

InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|expirationDate|number|false|none|none|
|hostOnly|boolean|false|none|none|
|httpOnly|boolean|false|none|none|
|id|number|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|sameSite|string|false|none|none|
|secure|boolean|false|none|none|
|session|boolean|false|none|none|
|storeID|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|sameSite|unspecified|
|sameSite|strict|
|sameSite|lax|
|sameSite|no_restriction|

<h2 id="tocS_parserequest">parserequest</h2>
<!-- backwards compatibility -->
<a id="schemaparserequest"></a>
<a id="schema_parserequest"></a>
<a id="tocSparserequest"></a>
<a id="tocsparserequest"></a>

```json
{
  "fields": [
    {
      "attrs": [
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Number",
      "selector": ".badge-primary",
      "type": 1
    },
    {
      "attrs": [
        "href",
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Name",
      "selector": "#cards a",
      "type": 2
    },
    {
      "attrs": [
        "src",
        "alt"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "Picture",
      "selector": ".card-img-top",
      "type": 0
    }
  ],
  "format": "json",
  "name": "test.dataflowkit.com",
  "paginator": {
    "nextPageSelector": ".page-item:nth-child(2) .page-link",
    "pageNum": 2
  },
  "path": false,
  "request": {
    "type": "chrome",
    "url": "https://test.dataflowkit.com/persons/page-0"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonParent|string|false|none|Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_|
|fields|[[field](#schemafield)]|true|none|Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.<br>|
|format|string|true|none|Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.|
|name|string|true|none|Collection name.|
|paginator|[Paginator](#schemapaginator)|false|none|Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.|
|path|boolean|false|none|Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.|
|request|[fetchrequest](#schemafetchrequest)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|format|json|
|format|jsonl|
|format|excel|
|format|xml|

<h2 id="tocS_serprequest">serprequest</h2>
<!-- backwards compatibility -->
<a id="schemaserprequest"></a>
<a id="schema_serprequest"></a>
<a id="tocSserprequest"></a>
<a id="tocsserprequest"></a>

```json
{
  "commonParent": "div[id].result",
  "fields": [
    {
      "attrs": [
        "href",
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "link",
      "selector": ".result__a",
      "type": 2
    },
    {
      "attrs": [
        "text"
      ],
      "filters": [
        {
          "name": "trim"
        }
      ],
      "name": "description",
      "selector": ".js-result-snippet",
      "type": 1
    }
  ],
  "format": "json",
  "name": "duckduckgo",
  "request": {
    "proxy": "country-any",
    "type": "chrome",
    "url": "https://duckduckgo.com/?q=Dataflow+kit&ia=web"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[field](#schemafield)]|false|none|Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.<br><br>Ready-to-use payloads for collecting search results from the most popular Search Engines are available. These payloads are customizable, though.<br>|
|format|string|true|none|Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.|
|name|string|true|none|Collection name.|
|pageNum|integer|false|none|Specify number of pages to crawl.|
|proxy|string|true|none|Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|type|string|true|none|For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser|
|url|string|true|none|url holds the link to a Search Engine to use, and other optional parameters like languages or country.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|csv|
|format|json|
|format|jsonl|
|format|excel|
|format|xml|

<h2 id="tocS_url2pdfrequest">url2pdfrequest</h2>
<!-- backwards compatibility -->
<a id="schemaurl2pdfrequest"></a>
<a id="schema_url2pdfrequest"></a>
<a id="tocSurl2pdfrequest"></a>
<a id="tocsurl2pdfrequest"></a>

```json
{
  "landscape": false,
  "marginBottom": 0.4,
  "marginLeft": 0.4,
  "marginRight": 0.4,
  "marginTop": 0.4,
  "pageRanges": "",
  "paperSize": "A4",
  "printBackground": false,
  "printHeaderFooter": false,
  "scale": 1,
  "url": "https://dataflowkit.com",
  "waitDelay": 0.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[action](#schemaaction)]|false|none|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.|
|ignoreHTTPStatusErrCodes|boolean|false|none|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|initialCookies|[[initialCookie](#schemainitialcookie)]|false|none|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|landscape|boolean|false|none|Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation.|
|marginBottom|number|false|none|Bottom Margin of the PDF (in inches)|
|marginLeft|number|false|none|Left Margin of the PDF (in inches)|
|marginRight|number|false|none|Right Margin of the PDF (in inches)|
|marginTop|number|false|none|Top Margin of the PDF (in inches)|
|output|string|false|none|If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body.|
|pageRanges|string|false|none|Specify page ranges to convert. Defaults to the empty value, which means convert all pages.|
|paperSize|string|false|none|Page size parameter consists of the most popular page formats.|
|printBackground|boolean|false|none|Print background graphics in the PDF.|
|printHeaderFooter|boolean|false|none|printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing.|
|proxy|string|false|none|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|scale|number|false|none|By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering.|
|url|string|true|none|The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF|
|waitDelay|number|false|none|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.|

#### Enumerated Values

|Property|Value|
|---|---|
|output|buffer|
|output|file|
|paperSize|A3|
|paperSize|A4|
|paperSize|A5|
|paperSize|A6|
|paperSize|Letter|
|paperSize|Legal|
|paperSize|Tabloid|

<h2 id="tocS_url2screenshotrequest">url2screenshotrequest</h2>
<!-- backwards compatibility -->
<a id="schemaurl2screenshotrequest"></a>
<a id="schema_url2screenshotrequest"></a>
<a id="tocSurl2screenshotrequest"></a>
<a id="tocsurl2screenshotrequest"></a>

```json
{
  "format": "jpeg",
  "height": 1080,
  "quality": 80,
  "scale": 1,
  "url": "https://dataflowkit.com",
  "waitDelay": 0.5,
  "width": 1920
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[action](#schemaaction)]|false|none|Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.|
|clipSelector|string|false|none|Captures a screenshot of specified CSS element on a web page.|
|format|string|false|none|Sets the Format of output image|
|fullPage|boolean|false|none|takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values.|
|height|integer|false|none|Rectangle height in device independent pixels (dip).|
|ignoreHTTPStatusErrCodes|boolean|false|none|The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."|
|initialCookies|[[initialCookie](#schemainitialcookie)]|false|none|The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.|
|offsetx|integer|false|none|X offset in device independent pixels (dip).|
|offsety|integer|false|none|Y offset in device independent pixels (dip).|
|output|string|false|none|If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body.|
|printBackground|boolean|false|none|Print background graphics in the PDF.|
|proxy|string|false|none|Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.|
|quality|integer|false|none|Sets the Quality of output image. Compression quality from range [0..100] (jpeg only).|
|scale|number|false|none|Image scale factor. range [0.1 .. 3]|
|url|string|true|none|The full URL address (including HTTP/HTTPS) of a web page that you want to capture|
|waitDelay|number|false|none|Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.|
|width|integer|false|none|Rectangle width in device independent pixels (dip).|

#### Enumerated Values

|Property|Value|
|---|---|
|format|png|
|format|jpeg|
|output|buffer|
|output|file|
