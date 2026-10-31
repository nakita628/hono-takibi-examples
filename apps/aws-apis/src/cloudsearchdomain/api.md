<h1 id="amazon-cloudsearch-domain">Amazon CloudSearch Domain v2013-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p> <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p> <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>

Base URLs:

* <a href="http://cloudsearchdomain.us-east-1.amazonaws.com">http://cloudsearchdomain.us-east-1.amazonaws.com</a> - The Amazon CloudSearch Domain multi-region endpoint

* <a href="https://cloudsearchdomain.us-east-1.amazonaws.com">https://cloudsearchdomain.us-east-1.amazonaws.com</a> - The Amazon CloudSearch Domain multi-region endpoint

* <a href="http://cloudsearchdomain.cn-north-1.amazonaws.com.cn">http://cloudsearchdomain.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudSearch Domain endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudsearchdomain.cn-north-1.amazonaws.com.cn">https://cloudsearchdomain.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudSearch Domain endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudsearchdomain/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudsearch-domain-default">Default</h1>

## Search

<a id="opIdSearch"></a>

> Code samples

```bash
curl 'https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/search#format=sdk&pretty=true&q?q=string&format=sdk&pretty=true' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-01-01/search#format=sdk&pretty=true&q`

<p>Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:</p> <ul> <li><code>simple</code>: search all <code>text</code> and <code>text-array</code> fields for the specified string. Search for phrases, individual terms, and prefixes. </li> <li><code>structured</code>: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.</li> <li><code>lucene</code>: specify search criteria using the Apache Lucene query parser syntax.</li> <li><code>dismax</code>: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p> <p>The endpoint for submitting <code>Search</code> requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|<p>Retrieves a cursor value you can use to page through large result sets. Use the <code>size</code> parameter to control the number of hits to include in each response. You can specify either the <code>cursor</code> or <code>start</code> parameter in a request; they are mutually exclusive. To get the first cursor, set the cursor value to <code>initial</code>. In subsequent requests, specify the cursor value returned in the hits section of the response. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html">Paginating Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|expr|query|string|false|<p>Defines one or more numeric expressions that can be used to sort results or specify search or filter criteria. You can also specify expressions as return fields. </p> <p>You specify the expressions in JSON using the form <code>{"EXPRESSIONNAME":"EXPRESSION"}</code>. You can define and use multiple expressions in a search request. For example:</p> <p><code> {"expression1":"_score*rating", "expression2":"(1/rank)*year"} </code> </p> <p>For information about the variables, operators, and functions you can use in expressions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html#writing-expressions">Writing Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|facet|query|string|false|<p>Specifies one or more fields for which to get facet information, and options that control how the facet information is returned. Each specified field must be facet-enabled in the domain configuration. The fields and options are specified in JSON using the form <code>{"FIELD":{"OPTION":VALUE,"OPTION:"STRING"},"FIELD":{"OPTION":VALUE,"OPTION":"STRING"}}</code>.</p> <p>You can specify the following faceting options:</p> <ul> <li> <p><code>buckets</code> specifies an array of the facet values or ranges to count. Ranges are specified using the same syntax that you use to search for a range of values. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-ranges.html"> Searching for a Range of Values</a> in the <i>Amazon CloudSearch Developer Guide</i>. Buckets are returned in the order they are specified in the request. The <code>sort</code> and <code>size</code> options are not valid if you specify <code>buckets</code>.</p> </li> <li> <p><code>size</code> specifies the maximum number of facets to include in the results. By default, Amazon CloudSearch returns counts for the top 10. The <code>size</code> parameter is only valid when you specify the <code>sort</code> option; it cannot be used in conjunction with <code>buckets</code>.</p> </li> <li> <p><code>sort</code> specifies how you want to sort the facets in the results: <code>bucket</code> or <code>count</code>. Specify <code>bucket</code> to sort alphabetically or numerically by facet value (in ascending order). Specify <code>count</code> to sort by the facet counts computed for each facet value (in descending order). To retrieve facet counts for particular values or ranges of values, use the <code>buckets</code> option instead of <code>sort</code>. </p> </li> </ul> <p>If no facet options are specified, facet counts are computed for all field values, the facets are sorted by facet count, and the top 10 facets are returned in the results.</p> <p>To count particular buckets of values, use the <code>buckets</code> option. For example, the following request uses the <code>buckets</code> option to calculate and return facet counts by decade.</p> <p><code> {"year":{"buckets":["[1970,1979]","[1980,1989]","[1990,1999]","[2000,2009]","[2010,}"]}} </code></p> <p>To sort facets by facet count, use the <code>count</code> option. For example, the following request sets the <code>sort</code> option to <code>count</code> to sort the facet values by facet count, with the facet values that have the most matching documents listed first. Setting the <code>size</code> option to 3 returns only the top three facet values.</p> <p><code> {"year":{"sort":"count","size":3}} </code></p> <p>To sort the facets by value, use the <code>bucket</code> option. For example, the following request sets the <code>sort</code> option to <code>bucket</code> to sort the facet values numerically by year, with earliest year listed first. </p> <p><code> {"year":{"sort":"bucket"}} </code></p> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/faceting.html">Getting and Using Facet Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|fq|query|string|false|<p>Specifies a structured query that filters the results of a search without affecting how the results are scored and sorted. You use <code>filterQuery</code> in conjunction with the <code>query</code> parameter to filter the documents that match the constraints specified in the <code>query</code> parameter. Specifying a filter controls only which matching documents are included in the results, it has no effect on how they are scored and sorted. The <code>filterQuery</code> parameter supports the full structured query syntax. </p> <p>For more information about using filters, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/filtering-results.html">Filtering Matching Documents</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|highlight|query|string|false|<p>Retrieves highlights for matches in the specified <code>text</code> or <code>text-array</code> fields. Each specified field must be highlight enabled in the domain configuration. The fields and options are specified in JSON using the form <code>{"FIELD":{"OPTION":VALUE,"OPTION:"STRING"},"FIELD":{"OPTION":VALUE,"OPTION":"STRING"}}</code>.</p> <p>You can specify the following highlight options:</p> <ul> <li> <code>format</code>: specifies the format of the data in the text field: <code>text</code> or <code>html</code>. When data is returned as HTML, all non-alphanumeric characters are encoded. The default is <code>html</code>. </li> <li> <code>max_phrases</code>: specifies the maximum number of occurrences of the search term(s) you want to highlight. By default, the first occurrence is highlighted. </li> <li> <code>pre_tag</code>: specifies the string to prepend to an occurrence of a search term. The default for HTML highlights is <code>&amp;lt;em&amp;gt;</code>. The default for text highlights is <code>*</code>. </li> <li> <code>post_tag</code>: specifies the string to append to an occurrence of a search term. The default for HTML highlights is <code>&amp;lt;/em&amp;gt;</code>. The default for text highlights is <code>*</code>. </li> </ul> <p>If no highlight options are specified for a field, the returned field text is treated as HTML and the first match is highlighted with emphasis tags: <code>&amp;lt;em&gt;search-term&amp;lt;/em&amp;gt;</code>.</p> <p>For example, the following request retrieves highlights for the <code>actors</code> and <code>title</code> fields.</p> <p> <code>{ "actors": {}, "title": {"format": "text","max_phrases": 2,"pre_tag": "<b>","post_tag": "</b>"} }</code></p>|
|partial|query|boolean|false|Enables partial results to be returned if one or more index partitions are unavailable. When your search index is partitioned across multiple search instances, by default Amazon CloudSearch only returns results if every partition can be queried. This means that the failure of a single search instance can result in 5xx (internal server) errors. When you enable partial results, Amazon CloudSearch returns whatever results are available and includes the percentage of documents searched in the search results (percent-searched). This enables you to more gracefully degrade your users' search experience. For example, rather than displaying no results, you could display the partial results and a message indicating that the results might be incomplete due to a temporary system outage.|
|q|query|string|true|<p>Specifies the search criteria for the request. How you specify the search criteria depends on the query parser used for the request and the parser options specified in the <code>queryOptions</code> parameter. By default, the <code>simple</code> query parser is used to process requests. To use the <code>structured</code>, <code>lucene</code>, or <code>dismax</code> query parser, you must also specify the <code>queryParser</code> parameter. </p> <p>For more information about specifying search criteria, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html">Searching Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|q.options|query|string|false|<p>Configures options for the query parser specified in the <code>queryParser</code> parameter. You specify the options in JSON using the following form <code>{"OPTION1":"VALUE1","OPTION2":VALUE2"..."OPTIONN":"VALUEN"}.</code></p> <p>The options you can configure vary according to which parser you use:</p> <ul> <li><code>defaultOperator</code>: The default operator used to combine individual terms in the search string. For example: <code>defaultOperator: 'or'</code>. For the <code>dismax</code> parser, you specify a percentage that represents the percentage of terms in the search string (rounded down) that must match, rather than a default operator. A value of <code>0%</code> is the equivalent to OR, and a value of <code>100%</code> is equivalent to AND. The percentage must be specified as a value in the range 0-100 followed by the percent (%) symbol. For example, <code>defaultOperator: 50%</code>. Valid values: <code>and</code>, <code>or</code>, a percentage in the range 0%-100% (<code>dismax</code>). Default: <code>and</code> (<code>simple</code>, <code>structured</code>, <code>lucene</code>) or <code>100</code> (<code>dismax</code>). Valid for: <code>simple</code>, <code>structured</code>, <code>lucene</code>, and <code>dismax</code>.</li> <li><code>fields</code>: An array of the fields to search when no fields are specified in a search. If no fields are specified in a search and this option is not specified, all text and text-array fields are searched. You can specify a weight for each field to control the relative importance of each field when Amazon CloudSearch calculates relevance scores. To specify a field weight, append a caret (<code>^</code>) symbol and the weight to the field name. For example, to boost the importance of the <code>title</code> field over the <code>description</code> field you could specify: <code>"fields":["title^5","description"]</code>. Valid values: The name of any configured field and an optional numeric value greater than zero. Default: All <code>text</code> and <code>text-array</code> fields. Valid for: <code>simple</code>, <code>structured</code>, <code>lucene</code>, and <code>dismax</code>.</li> <li><code>operators</code>: An array of the operators or special characters you want to disable for the simple query parser. If you disable the <code>and</code>, <code>or</code>, or <code>not</code> operators, the corresponding operators (<code>+</code>, <code>\|</code>, <code>-</code>) have no special meaning and are dropped from the search string. Similarly, disabling <code>prefix</code> disables the wildcard operator (<code>*</code>) and disabling <code>phrase</code> disables the ability to search for phrases by enclosing phrases in double quotes. Disabling precedence disables the ability to control order of precedence using parentheses. Disabling <code>near</code> disables the ability to use the ~ operator to perform a sloppy phrase search. Disabling the <code>fuzzy</code> operator disables the ability to use the ~ operator to perform a fuzzy search. <code>escape</code> disables the ability to use a backslash (<code>\</code>) to escape special characters within the search string. Disabling whitespace is an advanced option that prevents the parser from tokenizing on whitespace, which can be useful for Vietnamese. (It prevents Vietnamese words from being split incorrectly.) For example, you could disable all operators other than the phrase operator to support just simple term and phrase queries: <code>"operators":["and","not","or", "prefix"]</code>. Valid values: <code>and</code>, <code>escape</code>, <code>fuzzy</code>, <code>near</code>, <code>not</code>, <code>or</code>, <code>phrase</code>, <code>precedence</code>, <code>prefix</code>, <code>whitespace</code>. Default: All operators and special characters are enabled. Valid for: <code>simple</code>.</li> <li><code>phraseFields</code>: An array of the <code>text</code> or <code>text-array</code> fields you want to use for phrase searches. When the terms in the search string appear in close proximity within a field, the field scores higher. You can specify a weight for each field to boost that score. The <code>phraseSlop</code> option controls how much the matches can deviate from the search string and still be boosted. To specify a field weight, append a caret (<code>^</code>) symbol and the weight to the field name. For example, to boost phrase matches in the <code>title</code> field over the <code>abstract</code> field, you could specify: <code>"phraseFields":["title^3", "plot"]</code> Valid values: The name of any <code>text</code> or <code>text-array</code> field and an optional numeric value greater than zero. Default: No fields. If you don't specify any fields with <code>phraseFields</code>, proximity scoring is disabled even if <code>phraseSlop</code> is specified. Valid for: <code>dismax</code>.</li> <li><code>phraseSlop</code>: An integer value that specifies how much matches can deviate from the search phrase and still be boosted according to the weights specified in the <code>phraseFields</code> option; for example, <code>phraseSlop: 2</code>. You must also specify <code>phraseFields</code> to enable proximity scoring. Valid values: positive integers. Default: 0. Valid for: <code>dismax</code>.</li> <li><code>explicitPhraseSlop</code>: An integer value that specifies how much a match can deviate from the search phrase when the phrase is enclosed in double quotes in the search string. (Phrases that exceed this proximity distance are not considered a match.) For example, to specify a slop of three for dismax phrase queries, you would specify <code>"explicitPhraseSlop":3</code>. Valid values: positive integers. Default: 0. Valid for: <code>dismax</code>.</li> <li><code>tieBreaker</code>: When a term in the search string is found in a document's field, a score is calculated for that field based on how common the word is in that field compared to other documents. If the term occurs in multiple fields within a document, by default only the highest scoring field contributes to the document's overall score. You can specify a <code>tieBreaker</code> value to enable the matches in lower-scoring fields to contribute to the document's score. That way, if two documents have the same max field score for a particular term, the score for the document that has matches in more fields will be higher. The formula for calculating the score with a tieBreaker is <code>(max field score) + (tieBreaker) * (sum of the scores for the rest of the matching fields)</code>. Set <code>tieBreaker</code> to 0 to disregard all but the highest scoring field (pure max): <code>"tieBreaker":0</code>. Set to 1 to sum the scores from all fields (pure sum): <code>"tieBreaker":1</code>. Valid values: 0.0 to 1.0. Default: 0.0. Valid for: <code>dismax</code>. </li> </ul>|
|q.parser|query|string|false|<p>Specifies which query parser to use to process the request. If <code>queryParser</code> is not specified, Amazon CloudSearch uses the <code>simple</code> query parser. </p> <p>Amazon CloudSearch supports four query parsers:</p> <ul> <li> <code>simple</code>: perform simple searches of <code>text</code> and <code>text-array</code> fields. By default, the <code>simple</code> query parser searches all <code>text</code> and <code>text-array</code> fields. You can specify which fields to search by with the <code>queryOptions</code> parameter. If you prefix a search term with a plus sign (+) documents must contain the term to be considered a match. (This is the default, unless you configure the default operator with the <code>queryOptions</code> parameter.) You can use the <code>-</code> (NOT), <code>\|</code> (OR), and <code>*</code> (wildcard) operators to exclude particular terms, find results that match any of the specified terms, or search for a prefix. To search for a phrase rather than individual terms, enclose the phrase in double quotes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-text.html">Searching for Text</a> in the <i>Amazon CloudSearch Developer Guide</i>. </li> <li> <code>structured</code>: perform advanced searches by combining multiple expressions to define the search criteria. You can also search within particular fields, search for values and ranges of values, and use advanced options such as term boosting, <code>matchall</code>, and <code>near</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-compound-queries.html">Constructing Compound Queries</a> in the <i>Amazon CloudSearch Developer Guide</i>. </li> <li> <code>lucene</code>: search using the Apache Lucene query parser syntax. For more information, see <a href="http://lucene.apache.org/core/4_6_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description">Apache Lucene Query Parser Syntax</a>. </li> <li> <code>dismax</code>: search using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser. For more information, see <a href="http://wiki.apache.org/solr/DisMaxQParserPlugin#Query_Syntax">DisMax Query Parser Syntax</a>. </li> </ul>|
|return|query|string|false|Specifies the field and expression values to include in the response. Multiple fields or expressions are specified as a comma-separated list. By default, a search response includes all return enabled fields (<code>_all_fields</code>). To return only the document IDs for the matching documents, specify <code>_no_fields</code>. To retrieve the relevance score calculated for each document, specify <code>_score</code>. |
|size|query|integer|false|Specifies the maximum number of search hits to include in the response. |
|sort|query|string|false|<p>Specifies the fields or custom expressions to use to sort the search results. Multiple fields or expressions are specified as a comma-separated list. You must specify the sort direction (<code>asc</code> or <code>desc</code>) for each field; for example, <code>year desc,title asc</code>. To use a field to sort results, the field must be sort-enabled in the domain configuration. Array type fields cannot be used for sorting. If no <code>sort</code> parameter is specified, results are sorted by their default relevance scores in descending order: <code>_score desc</code>. You can also sort by document ID (<code>_id asc</code>) and version (<code>_version desc</code>).</p> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/sorting-results.html">Sorting Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|start|query|integer|false|<p>Specifies the offset of the first search hit you want to return. Note that the result set is zero-based; the first result is at index 0. You can specify either the <code>start</code> or <code>cursor</code> parameter in a request, they are mutually exclusive. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html">Paginating Results</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>|
|stats|query|string|false|<p>Specifies one or more fields for which to get statistics information. Each specified field must be facet-enabled in the domain configuration. The fields are specified in JSON using the form:</p> <code>{"FIELD-A":{},"FIELD-B":{}}</code> <p>There are currently no options supported for statistics.</p>|
|format|query|string|true|none|
|pretty|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|q.parser|simple|
|q.parser|structured|
|q.parser|lucene|
|q.parser|dismax|
|format|sdk|
|pretty|true|

> Example responses

> 200 Response

```json
{
  "status": {
    "timems": {},
    "rid": {}
  },
  "hits": {
    "found": {},
    "start": {},
    "cursor": {},
    "hit": {}
  },
  "facets": {
    "property1": {
      "buckets": {}
    },
    "property2": {
      "buckets": {}
    }
  },
  "stats": {
    "property1": {
      "min": {},
      "max": {},
      "count": {},
      "missing": {},
      "sum": {},
      "sumOfSquares": {},
      "mean": {},
      "stddev": {}
    },
    "property2": {
      "min": {},
      "max": {},
      "count": {},
      "missing": {},
      "sum": {},
      "sumOfSquares": {},
      "mean": {},
      "stddev": {}
    }
  }
}
```

> 480 Response

```json
{
  "message": {}
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchResponse](#schemasearchresponse)|
|480|480|SearchException|[SearchException](#schemasearchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## Suggest

<a id="opIdSuggest"></a>

> Code samples

```bash
curl 'https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/suggest#format=sdk&pretty=true&q&suggester?q=string&suggester=string&format=sdk&pretty=true' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-01-01/suggest#format=sdk&pretty=true&q&suggester`

<p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p> <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p> <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>

<h3 id="suggest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Specifies the string for which you want to get suggestions.|
|suggester|query|string|true|Specifies the name of the suggester to use to find suggested matches.|
|size|query|integer|false|Specifies the maximum number of suggestions to return. |
|format|query|string|true|none|
|pretty|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|sdk|
|pretty|true|

> Example responses

> 200 Response

```json
{
  "status": {
    "timems": {},
    "rid": {}
  },
  "suggest": {
    "query": {},
    "found": {},
    "suggestions": {}
  }
}
```

> 480 Response

```json
{
  "message": {}
}
```

<h3 id="suggest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SuggestResponse](#schemasuggestresponse)|
|480|480|SearchException|[SearchException](#schemasearchexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadDocuments

<a id="opIdUploadDocuments"></a>

> Code samples

```bash
curl 'https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/documents/batch#format=sdk&Content-Type?format=sdk' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "documents": "string"
  }'
```

`POST /2013-01-01/documents/batch#format=sdk&Content-Type`

<p>Posts a batch of documents to a search domain for indexing. A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service. </p> <p>The endpoint for submitting <code>UploadDocuments</code> requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p> <p>For more information about formatting your data for Amazon CloudSearch, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/preparing-data.html">Preparing Your Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. For more information about uploading data for indexing, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/uploading-data.html">Uploading Data</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>

> Body parameter

```json
{
  "documents": "string"
}
```

<h3 id="uploaddocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|<p>The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:</p> <ul> <li>application/json</li> <li>application/xml</li> </ul>|
|format|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» documents|body|string|true|A batch of documents formatted in JSON or HTML.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Type|application/json|
|Content-Type|application/xml|
|format|sdk|

> Example responses

> 200 Response

```json
{
  "status": {},
  "adds": {},
  "deletes": {},
  "warnings": {}
}
```

> 480 Response

```json
{
  "status": {},
  "message": {}
}
```

<h3 id="uploaddocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UploadDocumentsResponse](#schemauploaddocumentsresponse)|
|480|480|DocumentServiceException|[DocumentServiceException](#schemadocumentserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_SearchResponse">SearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponse"></a>
<a id="schema_SearchResponse"></a>
<a id="tocSsearchresponse"></a>
<a id="tocssearchresponse"></a>

```json
{
  "status": {
    "timems": {},
    "rid": {}
  },
  "hits": {
    "found": {},
    "start": {},
    "cursor": {},
    "hit": {}
  },
  "facets": {
    "property1": {
      "buckets": {}
    },
    "property2": {
      "buckets": {}
    }
  },
  "stats": {
    "property1": {
      "min": {},
      "max": {},
      "count": {},
      "missing": {},
      "sum": {},
      "sumOfSquares": {},
      "mean": {},
      "stddev": {}
    },
    "property2": {
      "min": {},
      "max": {},
      "count": {},
      "missing": {},
      "sum": {},
      "sumOfSquares": {},
      "mean": {},
      "stddev": {}
    }
  }
}
```

The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|hits|object|false|none|none|
|facets|object|false|none|none|
|stats|object|false|none|none|

<h2 id="tocS_SearchException">SearchException</h2>
<!-- backwards compatibility -->
<a id="schemasearchexception"></a>
<a id="schema_SearchException"></a>
<a id="tocSsearchexception"></a>
<a id="tocssearchexception"></a>

```json
{
  "message": {}
}
```

Information about any problems encountered while processing a search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|

<h2 id="tocS_SuggestResponse">SuggestResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuggestresponse"></a>
<a id="schema_SuggestResponse"></a>
<a id="tocSsuggestresponse"></a>
<a id="tocssuggestresponse"></a>

```json
{
  "status": {
    "timems": {},
    "rid": {}
  },
  "suggest": {
    "query": {},
    "found": {},
    "suggestions": {}
  }
}
```

Contains the response to a <code>Suggest</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|suggest|object|false|none|none|

<h2 id="tocS_UploadDocumentsResponse">UploadDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploaddocumentsresponse"></a>
<a id="schema_UploadDocumentsResponse"></a>
<a id="tocSuploaddocumentsresponse"></a>
<a id="tocsuploaddocumentsresponse"></a>

```json
{
  "status": {},
  "adds": {},
  "deletes": {},
  "warnings": {}
}
```

Contains the response to an <code>UploadDocuments</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|adds|object|false|none|none|
|deletes|object|false|none|none|
|warnings|object|false|none|none|

<h2 id="tocS_DocumentServiceException">DocumentServiceException</h2>
<!-- backwards compatibility -->
<a id="schemadocumentserviceexception"></a>
<a id="schema_DocumentServiceException"></a>
<a id="tocSdocumentserviceexception"></a>
<a id="tocsdocumentserviceexception"></a>

```json
{
  "status": {},
  "message": {}
}
```

Information about any problems encountered while processing an upload request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|message|object|false|none|none|

<h2 id="tocS_Adds">Adds</h2>
<!-- backwards compatibility -->
<a id="schemaadds"></a>
<a id="schema_Adds"></a>
<a id="tocSadds"></a>
<a id="tocsadds"></a>

```json
0
```

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_Bucket">Bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_Bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "value": {},
  "count": {}
}
```

A container for facet information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|count|object|false|none|none|

<h2 id="tocS_BucketList">BucketList</h2>
<!-- backwards compatibility -->
<a id="schemabucketlist"></a>
<a id="schema_BucketList"></a>
<a id="tocSbucketlist"></a>
<a id="tocsbucketlist"></a>

```json
[
  {
    "value": {},
    "count": {}
  }
]
```

<h2 id="tocS_BucketInfo">BucketInfo</h2>
<!-- backwards compatibility -->
<a id="schemabucketinfo"></a>
<a id="schema_BucketInfo"></a>
<a id="tocSbucketinfo"></a>
<a id="tocsbucketinfo"></a>

```json
{
  "buckets": {}
}
```

A container for the calculated facet values and counts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|object|false|none|none|

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"application/json"
```

<h2 id="tocS_Cursor">Cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_Cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
"string"
```

<h2 id="tocS_Deletes">Deletes</h2>
<!-- backwards compatibility -->
<a id="schemadeletes"></a>
<a id="schema_Deletes"></a>
<a id="tocSdeletes"></a>
<a id="tocsdeletes"></a>

```json
0
```

<h2 id="tocS_DocumentServiceWarning">DocumentServiceWarning</h2>
<!-- backwards compatibility -->
<a id="schemadocumentservicewarning"></a>
<a id="schema_DocumentServiceWarning"></a>
<a id="tocSdocumentservicewarning"></a>
<a id="tocsdocumentservicewarning"></a>

```json
{
  "message": {}
}
```

A warning returned by the document service when an issue is discovered while processing an upload request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|

<h2 id="tocS_DocumentServiceWarnings">DocumentServiceWarnings</h2>
<!-- backwards compatibility -->
<a id="schemadocumentservicewarnings"></a>
<a id="schema_DocumentServiceWarnings"></a>
<a id="tocSdocumentservicewarnings"></a>
<a id="tocsdocumentservicewarnings"></a>

```json
[
  {
    "message": {}
  }
]
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
"string"
```

<h2 id="tocS_Exprs">Exprs</h2>
<!-- backwards compatibility -->
<a id="schemaexprs"></a>
<a id="schema_Exprs"></a>
<a id="tocSexprs"></a>
<a id="tocsexprs"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_Facet">Facet</h2>
<!-- backwards compatibility -->
<a id="schemafacet"></a>
<a id="schema_Facet"></a>
<a id="tocSfacet"></a>
<a id="tocsfacet"></a>

```json
"string"
```

<h2 id="tocS_Facets">Facets</h2>
<!-- backwards compatibility -->
<a id="schemafacets"></a>
<a id="schema_Facets"></a>
<a id="tocSfacets"></a>
<a id="tocsfacets"></a>

```json
{
  "property1": {
    "buckets": {}
  },
  "property2": {
    "buckets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[BucketInfo](#schemabucketinfo)|false|none|A container for the calculated facet values and counts.|

<h2 id="tocS_FieldStats">FieldStats</h2>
<!-- backwards compatibility -->
<a id="schemafieldstats"></a>
<a id="schema_FieldStats"></a>
<a id="tocSfieldstats"></a>
<a id="tocsfieldstats"></a>

```json
{
  "min": {},
  "max": {},
  "count": {},
  "missing": {},
  "sum": {},
  "sumOfSquares": {},
  "mean": {},
  "stddev": {}
}
```

The statistics for a field calculated in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|object|false|none|none|
|max|object|false|none|none|
|count|object|false|none|none|
|missing|object|false|none|none|
|sum|object|false|none|none|
|sumOfSquares|object|false|none|none|
|mean|object|false|none|none|
|stddev|object|false|none|none|

<h2 id="tocS_FieldValue">FieldValue</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalue"></a>
<a id="schema_FieldValue"></a>
<a id="tocSfieldvalue"></a>
<a id="tocsfieldvalue"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FieldValue](#schemafieldvalue)|false|none|none|

<h2 id="tocS_FilterQuery">FilterQuery</h2>
<!-- backwards compatibility -->
<a id="schemafilterquery"></a>
<a id="schema_FilterQuery"></a>
<a id="tocSfilterquery"></a>
<a id="tocsfilterquery"></a>

```json
"string"
```

<h2 id="tocS_Highlight">Highlight</h2>
<!-- backwards compatibility -->
<a id="schemahighlight"></a>
<a id="schema_Highlight"></a>
<a id="tocShighlight"></a>
<a id="tocshighlight"></a>

```json
"string"
```

<h2 id="tocS_Highlights">Highlights</h2>
<!-- backwards compatibility -->
<a id="schemahighlights"></a>
<a id="schema_Highlights"></a>
<a id="tocShighlights"></a>
<a id="tocshighlights"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_Hit">Hit</h2>
<!-- backwards compatibility -->
<a id="schemahit"></a>
<a id="schema_Hit"></a>
<a id="tocShit"></a>
<a id="tocshit"></a>

```json
{
  "id": {},
  "fields": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "exprs": {
    "property1": "string",
    "property2": "string"
  },
  "highlights": {
    "property1": "string",
    "property2": "string"
  }
}
```

Information about a document that matches the search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|none|
|fields|object|false|none|none|
|exprs|object|false|none|none|
|highlights|object|false|none|none|

<h2 id="tocS_HitList">HitList</h2>
<!-- backwards compatibility -->
<a id="schemahitlist"></a>
<a id="schema_HitList"></a>
<a id="tocShitlist"></a>
<a id="tocshitlist"></a>

```json
[
  {
    "id": {},
    "fields": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "exprs": {
      "property1": "string",
      "property2": "string"
    },
    "highlights": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_Hits">Hits</h2>
<!-- backwards compatibility -->
<a id="schemahits"></a>
<a id="schema_Hits"></a>
<a id="tocShits"></a>
<a id="tocshits"></a>

```json
{
  "found": {},
  "start": {},
  "cursor": {},
  "hit": {}
}
```

The collection of documents that match the search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|found|object|false|none|none|
|start|object|false|none|none|
|cursor|object|false|none|none|
|hit|object|false|none|none|

<h2 id="tocS_Partial">Partial</h2>
<!-- backwards compatibility -->
<a id="schemapartial"></a>
<a id="schema_Partial"></a>
<a id="tocSpartial"></a>
<a id="tocspartial"></a>

```json
true
```

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
"string"
```

<h2 id="tocS_QueryOptions">QueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoptions"></a>
<a id="schema_QueryOptions"></a>
<a id="tocSqueryoptions"></a>
<a id="tocsqueryoptions"></a>

```json
"string"
```

<h2 id="tocS_QueryParser">QueryParser</h2>
<!-- backwards compatibility -->
<a id="schemaqueryparser"></a>
<a id="schema_QueryParser"></a>
<a id="tocSqueryparser"></a>
<a id="tocsqueryparser"></a>

```json
"simple"
```

<h2 id="tocS_Return">Return</h2>
<!-- backwards compatibility -->
<a id="schemareturn"></a>
<a id="schema_Return"></a>
<a id="tocSreturn"></a>
<a id="tocsreturn"></a>

```json
"string"
```

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
"string"
```

<h2 id="tocS_Start">Start</h2>
<!-- backwards compatibility -->
<a id="schemastart"></a>
<a id="schema_Start"></a>
<a id="tocSstart"></a>
<a id="tocsstart"></a>

```json
0
```

<h2 id="tocS_Stat">Stat</h2>
<!-- backwards compatibility -->
<a id="schemastat"></a>
<a id="schema_Stat"></a>
<a id="tocSstat"></a>
<a id="tocsstat"></a>

```json
"string"
```

<h2 id="tocS_SearchRequest">SearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_SearchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{}
```

Container for the parameters to the <code>Search</code> request.

<h2 id="tocS_SearchStatus">SearchStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchstatus"></a>
<a id="schema_SearchStatus"></a>
<a id="tocSsearchstatus"></a>
<a id="tocssearchstatus"></a>

```json
{
  "timems": {},
  "rid": {}
}
```

Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timems|object|false|none|none|
|rid|object|false|none|none|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "property1": {
    "min": {},
    "max": {},
    "count": {},
    "missing": {},
    "sum": {},
    "sumOfSquares": {},
    "mean": {},
    "stddev": {}
  },
  "property2": {
    "min": {},
    "max": {},
    "count": {},
    "missing": {},
    "sum": {},
    "sumOfSquares": {},
    "mean": {},
    "stddev": {}
  }
}
```

The statistics calculated in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FieldStats](#schemafieldstats)|false|none|The statistics for a field calculated in the request.|

<h2 id="tocS_Suggestions">Suggestions</h2>
<!-- backwards compatibility -->
<a id="schemasuggestions"></a>
<a id="schema_Suggestions"></a>
<a id="tocSsuggestions"></a>
<a id="tocssuggestions"></a>

```json
[
  {
    "suggestion": {},
    "score": {},
    "id": {}
  }
]
```

<h2 id="tocS_SuggestModel">SuggestModel</h2>
<!-- backwards compatibility -->
<a id="schemasuggestmodel"></a>
<a id="schema_SuggestModel"></a>
<a id="tocSsuggestmodel"></a>
<a id="tocssuggestmodel"></a>

```json
{
  "query": {},
  "found": {},
  "suggestions": {}
}
```

Container for the suggestion information returned in a <code>SuggestResponse</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|false|none|none|
|found|object|false|none|none|
|suggestions|object|false|none|none|

<h2 id="tocS_Suggester">Suggester</h2>
<!-- backwards compatibility -->
<a id="schemasuggester"></a>
<a id="schema_Suggester"></a>
<a id="tocSsuggester"></a>
<a id="tocssuggester"></a>

```json
"string"
```

<h2 id="tocS_SuggestionsSize">SuggestionsSize</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionssize"></a>
<a id="schema_SuggestionsSize"></a>
<a id="tocSsuggestionssize"></a>
<a id="tocssuggestionssize"></a>

```json
0
```

<h2 id="tocS_SuggestRequest">SuggestRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuggestrequest"></a>
<a id="schema_SuggestRequest"></a>
<a id="tocSsuggestrequest"></a>
<a id="tocssuggestrequest"></a>

```json
{}
```

Container for the parameters to the <code>Suggest</code> request.

<h2 id="tocS_SuggestStatus">SuggestStatus</h2>
<!-- backwards compatibility -->
<a id="schemasuggeststatus"></a>
<a id="schema_SuggestStatus"></a>
<a id="tocSsuggeststatus"></a>
<a id="tocssuggeststatus"></a>

```json
{
  "timems": {},
  "rid": {}
}
```

Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timems|object|false|none|none|
|rid|object|false|none|none|

<h2 id="tocS_SuggestionMatch">SuggestionMatch</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionmatch"></a>
<a id="schema_SuggestionMatch"></a>
<a id="tocSsuggestionmatch"></a>
<a id="tocssuggestionmatch"></a>

```json
{
  "suggestion": {},
  "score": {},
  "id": {}
}
```

An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestion|object|false|none|none|
|score|object|false|none|none|
|id|object|false|none|none|

<h2 id="tocS_UploadDocumentsRequest">UploadDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploaddocumentsrequest"></a>
<a id="schema_UploadDocumentsRequest"></a>
<a id="tocSuploaddocumentsrequest"></a>
<a id="tocsuploaddocumentsrequest"></a>

```json
{
  "documents": {}
}
```

Container for the parameters to the <code>UploadDocuments</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|object|true|none|none|
