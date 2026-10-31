<h1 id="amazon-cloudsearch">Amazon CloudSearch v2013-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

Base URLs:

* <a href="http://cloudsearch.us-east-1.amazonaws.com">http://cloudsearch.us-east-1.amazonaws.com</a> - The Amazon CloudSearch multi-region endpoint

* <a href="https://cloudsearch.us-east-1.amazonaws.com">https://cloudsearch.us-east-1.amazonaws.com</a> - The Amazon CloudSearch multi-region endpoint

* <a href="http://cloudsearch.cn-north-1.amazonaws.com.cn">http://cloudsearch.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudSearch endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudsearch.cn-north-1.amazonaws.com.cn">https://cloudsearch.cn-north-1.amazonaws.com.cn</a> - The Amazon CloudSearch endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudsearch/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudsearch-default">Default</h1>

## GET_BuildSuggesters

<a id="opIdGET_BuildSuggesters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=BuildSuggesters?DomainName=string&Action=BuildSuggesters&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=BuildSuggesters`

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getbuildsuggesters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|BuildSuggesters|
|Version|2013-01-01|

<h3 id="getbuildsuggesters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BuildSuggestersResponse](#schemabuildsuggestersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_BuildSuggesters

<a id="opIdPOST_BuildSuggesters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=BuildSuggesters?Action=BuildSuggesters&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string"}'
```

`POST /#Action=BuildSuggesters`

Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string"
}
```

<h3 id="postbuildsuggesters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[BuildSuggestersRequest](#schemabuildsuggestersrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|BuildSuggesters|
|Version|2013-01-01|

<h3 id="postbuildsuggesters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BuildSuggestersResponse](#schemabuildsuggestersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_CreateDomain

<a id="opIdGET_CreateDomain"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=CreateDomain?DomainName=string&Action=CreateDomain&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=CreateDomain`

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getcreatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|CreateDomain|
|Version|2013-01-01|

<h3 id="getcreatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainResponse](#schemacreatedomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_CreateDomain

<a id="opIdPOST_CreateDomain"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=CreateDomain?Action=CreateDomain&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{}}'
```

`POST /#Action=CreateDomain`

Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="postcreatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDomainRequest](#schemacreatedomainrequest)|false|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|CreateDomain|
|Version|2013-01-01|

<h3 id="postcreatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDomainResponse](#schemacreatedomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DefineAnalysisScheme

<a id="opIdGET_DefineAnalysisScheme"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineAnalysisScheme?DomainName=string&AnalysisSchemeName=string&AnalysisSchemeLanguage=ar&AnalysisOptions=%7B%22Synonyms%22%3A%7B%7D%2C%22Stopwords%22%3A%7B%7D%2C%22StemmingDictionary%22%3A%7B%7D%2C%22JapaneseTokenizationDictionary%22%3A%7B%7D%2C%22AlgorithmicStemming%22%3A%7B%7D%7D&Action=DefineAnalysisScheme&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DefineAnalysisScheme`

Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdefineanalysisscheme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|AnalysisScheme|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DefineAnalysisScheme|
|Version|2013-01-01|

<h3 id="getdefineanalysisscheme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineAnalysisSchemeResponse](#schemadefineanalysisschemeresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DefineAnalysisScheme

<a id="opIdPOST_DefineAnalysisScheme"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineAnalysisScheme?Action=DefineAnalysisScheme&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","AnalysisScheme":{"AnalysisSchemeName":"string","AnalysisSchemeLanguage":"ar","AnalysisOptions":{"Synonyms":{},"Stopwords":{},"StemmingDictionary":{},"JapaneseTokenizationDictionary":{},"AlgorithmicStemming":{}}}}'
```

`POST /#Action=DefineAnalysisScheme`

Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "AnalysisScheme": {
    "AnalysisSchemeName": "string",
    "AnalysisSchemeLanguage": "ar",
    "AnalysisOptions": {
      "Synonyms": {},
      "Stopwords": {},
      "StemmingDictionary": {},
      "JapaneseTokenizationDictionary": {},
      "AlgorithmicStemming": {}
    }
  }
}
```

<h3 id="postdefineanalysisscheme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DefineAnalysisSchemeRequest](#schemadefineanalysisschemerequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» AnalysisScheme|body|[AnalysisScheme](#schemaanalysisscheme)|true|Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DefineAnalysisScheme|
|Version|2013-01-01|

<h3 id="postdefineanalysisscheme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineAnalysisSchemeResponse](#schemadefineanalysisschemeresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DefineExpression

<a id="opIdGET_DefineExpression"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineExpression?DomainName=string&ExpressionName=string&ExpressionValue=string&Action=DefineExpression&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DefineExpression`

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdefineexpression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|Expression|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DefineExpression|
|Version|2013-01-01|

<h3 id="getdefineexpression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineExpressionResponse](#schemadefineexpressionresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DefineExpression

<a id="opIdPOST_DefineExpression"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineExpression?Action=DefineExpression&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","Expression":{"ExpressionName":"string","ExpressionValue":"string"}}'
```

`POST /#Action=DefineExpression`

Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "Expression": {
    "ExpressionName": "string",
    "ExpressionValue": "string"
  }
}
```

<h3 id="postdefineexpression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DefineExpressionRequest](#schemadefineexpressionrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» Expression|body|[Expression](#schemaexpression)|true|A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DefineExpression|
|Version|2013-01-01|

<h3 id="postdefineexpression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineExpressionResponse](#schemadefineexpressionresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DefineIndexField

<a id="opIdGET_DefineIndexField"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineIndexField?DomainName=string&IndexFieldName=%7B%7D&IndexFieldType=int&IntOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%7D&DoubleOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%7D&LiteralOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%22string%22%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%7D&TextOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%22string%22%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%2C%22HighlightEnabled%22%3A%7B%7D%2C%22AnalysisScheme%22%3A%7B%7D%7D&DateOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%22string%22%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%7D&LatLonOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceField%22%3A%22string%22%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22SortEnabled%22%3A%7B%7D%7D&IntArrayOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceFields%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%7D&DoubleArrayOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceFields%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%7D&LiteralArrayOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceFields%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%7D&TextArrayOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceFields%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%2C%22HighlightEnabled%22%3A%7B%7D%2C%22AnalysisScheme%22%3A%7B%7D%7D&DateArrayOptions=%7B%22DefaultValue%22%3A%7B%7D%2C%22SourceFields%22%3A%7B%7D%2C%22FacetEnabled%22%3A%7B%7D%2C%22SearchEnabled%22%3A%7B%7D%2C%22ReturnEnabled%22%3A%7B%7D%7D&Action=DefineIndexField&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DefineIndexField`

Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

<h3 id="getdefineindexfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|IndexField|query|object|true|The index field and field options you want to configure. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DefineIndexField|
|Version|2013-01-01|

<h3 id="getdefineindexfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineIndexFieldResponse](#schemadefineindexfieldresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DefineIndexField

<a id="opIdPOST_DefineIndexField"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineIndexField?Action=DefineIndexField&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","IndexField":{"IndexFieldName":{},"IndexFieldType":"int","IntOptions":{"DefaultValue":{},"SourceField":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{},"SortEnabled":{}},"DoubleOptions":{"DefaultValue":{},"SourceField":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{},"SortEnabled":{}},"LiteralOptions":{"DefaultValue":{},"SourceField":"string","FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{},"SortEnabled":{}},"TextOptions":{"DefaultValue":{},"SourceField":"string","ReturnEnabled":{},"SortEnabled":{},"HighlightEnabled":{},"AnalysisScheme":{}},"DateOptions":{"DefaultValue":{},"SourceField":"string","FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{},"SortEnabled":{}},"LatLonOptions":{"DefaultValue":{},"SourceField":"string","FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{},"SortEnabled":{}},"IntArrayOptions":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{}},"DoubleArrayOptions":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{}},"LiteralArrayOptions":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{}},"TextArrayOptions":{"DefaultValue":{},"SourceFields":{},"ReturnEnabled":{},"HighlightEnabled":{},"AnalysisScheme":{}},"DateArrayOptions":{"DefaultValue":{},"SourceFields":{},"FacetEnabled":{},"SearchEnabled":{},"ReturnEnabled":{}}}}'
```

`POST /#Action=DefineIndexField`

Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

> Body parameter

```json
{
  "DomainName": "string",
  "IndexField": {
    "IndexFieldName": {},
    "IndexFieldType": "int",
    "IntOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "DoubleOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LiteralOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "TextOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "ReturnEnabled": {},
      "SortEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LatLonOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "IntArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "DoubleArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "LiteralArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "TextArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "ReturnEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    }
  }
}
```

<h3 id="postdefineindexfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DefineIndexFieldRequest](#schemadefineindexfieldrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» IndexField|body|object|true|none|
|» » IndexFieldName|body|object|true|none|
|» » IndexFieldType|body|[IndexFieldType](#schemaindexfieldtype)|true|The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.|
|» » IntOptions|body|[IntOptions](#schemaintoptions)|false|Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.|
|» » DoubleOptions|body|[DoubleOptions](#schemadoubleoptions)|false|Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.|
|» » LiteralOptions|body|[LiteralOptions](#schemaliteraloptions)|false|Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.|
|» » TextOptions|body|[TextOptions](#schematextoptions)|false|Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.|
|» » DateOptions|body|[DateOptions](#schemadateoptions)|false|Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.|
|» » LatLonOptions|body|[LatLonOptions](#schemalatlonoptions)|false|Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.|
|» » IntArrayOptions|body|[IntArrayOptions](#schemaintarrayoptions)|false|Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.|
|» » DoubleArrayOptions|body|[DoubleArrayOptions](#schemadoublearrayoptions)|false|Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.|
|» » LiteralArrayOptions|body|[LiteralArrayOptions](#schemaliteralarrayoptions)|false|Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.|
|» » TextArrayOptions|body|[TextArrayOptions](#schematextarrayoptions)|false|Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.|
|» » DateArrayOptions|body|[DateArrayOptions](#schemadatearrayoptions)|false|Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DefineIndexField|
|Version|2013-01-01|
|» » IndexFieldType|int|
|» » IndexFieldType|double|
|» » IndexFieldType|literal|
|» » IndexFieldType|text|
|» » IndexFieldType|date|
|» » IndexFieldType|latlon|
|» » IndexFieldType|int-array|
|» » IndexFieldType|double-array|
|» » IndexFieldType|literal-array|
|» » IndexFieldType|text-array|
|» » IndexFieldType|date-array|

<h3 id="postdefineindexfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineIndexFieldResponse](#schemadefineindexfieldresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DefineSuggester

<a id="opIdGET_DefineSuggester"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineSuggester?DomainName=string&SuggesterName=string&DocumentSuggesterOptions=%7B%22SourceField%22%3A%7B%7D%2C%22FuzzyMatching%22%3A%7B%7D%2C%22SortExpression%22%3A%7B%7D%7D&Action=DefineSuggester&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DefineSuggester`

Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdefinesuggester-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|Suggester|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DefineSuggester|
|Version|2013-01-01|

<h3 id="getdefinesuggester-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineSuggesterResponse](#schemadefinesuggesterresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DefineSuggester

<a id="opIdPOST_DefineSuggester"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DefineSuggester?Action=DefineSuggester&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","Suggester":{"SuggesterName":"string","DocumentSuggesterOptions":{"SourceField":{},"FuzzyMatching":{},"SortExpression":{}}}}'
```

`POST /#Action=DefineSuggester`

Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "Suggester": {
    "SuggesterName": "string",
    "DocumentSuggesterOptions": {
      "SourceField": {},
      "FuzzyMatching": {},
      "SortExpression": {}
    }
  }
}
```

<h3 id="postdefinesuggester-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DefineSuggesterRequest](#schemadefinesuggesterrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» Suggester|body|[Suggester](#schemasuggester)|true|Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DefineSuggester|
|Version|2013-01-01|

<h3 id="postdefinesuggester-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DefineSuggesterResponse](#schemadefinesuggesterresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteAnalysisScheme

<a id="opIdGET_DeleteAnalysisScheme"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteAnalysisScheme?DomainName=string&AnalysisSchemeName=string&Action=DeleteAnalysisScheme&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteAnalysisScheme`

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

<h3 id="getdeleteanalysisscheme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|AnalysisSchemeName|query|string|true|The name of the analysis scheme you want to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteAnalysisScheme|
|Version|2013-01-01|

<h3 id="getdeleteanalysisscheme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnalysisSchemeResponse](#schemadeleteanalysisschemeresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteAnalysisScheme

<a id="opIdPOST_DeleteAnalysisScheme"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteAnalysisScheme?Action=DeleteAnalysisScheme&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","AnalysisSchemeName":{}}'
```

`POST /#Action=DeleteAnalysisScheme`

Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

> Body parameter

```json
{
  "DomainName": "string",
  "AnalysisSchemeName": {}
}
```

<h3 id="postdeleteanalysisscheme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteAnalysisSchemeRequest](#schemadeleteanalysisschemerequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» AnalysisSchemeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteAnalysisScheme|
|Version|2013-01-01|

<h3 id="postdeleteanalysisscheme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAnalysisSchemeResponse](#schemadeleteanalysisschemeresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteDomain

<a id="opIdGET_DeleteDomain"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteDomain?DomainName=string&Action=DeleteDomain&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteDomain`

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

<h3 id="getdeletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to permanently delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteDomain|
|Version|2013-01-01|

<h3 id="getdeletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResponse](#schemadeletedomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteDomain

<a id="opIdPOST_DeleteDomain"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteDomain?Action=DeleteDomain&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{}}'
```

`POST /#Action=DeleteDomain`

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="postdeletedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDomainRequest](#schemadeletedomainrequest)|false|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteDomain|
|Version|2013-01-01|

<h3 id="postdeletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResponse](#schemadeletedomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteExpression

<a id="opIdGET_DeleteExpression"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteExpression?DomainName=string&ExpressionName=string&Action=DeleteExpression&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteExpression`

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdeleteexpression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|ExpressionName|query|string|true|The name of the <code><a>Expression</a></code> to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteExpression|
|Version|2013-01-01|

<h3 id="getdeleteexpression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteExpressionResponse](#schemadeleteexpressionresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteExpression

<a id="opIdPOST_DeleteExpression"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteExpression?Action=DeleteExpression&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","ExpressionName":{}}'
```

`POST /#Action=DeleteExpression`

Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "ExpressionName": {}
}
```

<h3 id="postdeleteexpression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteExpressionRequest](#schemadeleteexpressionrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» ExpressionName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteExpression|
|Version|2013-01-01|

<h3 id="postdeleteexpression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteExpressionResponse](#schemadeleteexpressionresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteIndexField

<a id="opIdGET_DeleteIndexField"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteIndexField?DomainName=string&IndexFieldName=string&Action=DeleteIndexField&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteIndexField`

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdeleteindexfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|IndexFieldName|query|string|true|The name of the index field your want to remove from the domain's indexing options.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteIndexField|
|Version|2013-01-01|

<h3 id="getdeleteindexfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIndexFieldResponse](#schemadeleteindexfieldresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteIndexField

<a id="opIdPOST_DeleteIndexField"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteIndexField?Action=DeleteIndexField&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","IndexFieldName":{}}'
```

`POST /#Action=DeleteIndexField`

Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "IndexFieldName": {}
}
```

<h3 id="postdeleteindexfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteIndexFieldRequest](#schemadeleteindexfieldrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» IndexFieldName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteIndexField|
|Version|2013-01-01|

<h3 id="postdeleteindexfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIndexFieldResponse](#schemadeleteindexfieldresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DeleteSuggester

<a id="opIdGET_DeleteSuggester"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteSuggester?DomainName=string&SuggesterName=string&Action=DeleteSuggester&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DeleteSuggester`

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdeletesuggester-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|SuggesterName|query|string|true|Specifies the name of the suggester you want to delete.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DeleteSuggester|
|Version|2013-01-01|

<h3 id="getdeletesuggester-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSuggesterResponse](#schemadeletesuggesterresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DeleteSuggester

<a id="opIdPOST_DeleteSuggester"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DeleteSuggester?Action=DeleteSuggester&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","SuggesterName":{}}'
```

`POST /#Action=DeleteSuggester`

Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "SuggesterName": {}
}
```

<h3 id="postdeletesuggester-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSuggesterRequest](#schemadeletesuggesterrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» SuggesterName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DeleteSuggester|
|Version|2013-01-01|

<h3 id="postdeletesuggester-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSuggesterResponse](#schemadeletesuggesterresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAnalysisSchemes

<a id="opIdGET_DescribeAnalysisSchemes"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeAnalysisSchemes?DomainName=string&Action=DescribeAnalysisSchemes&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAnalysisSchemes`

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribeanalysisschemes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|AnalysisSchemeNames|query|[[StandardName](#schemastandardname)]|false|The analysis schemes you want to describe.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAnalysisSchemes|
|Version|2013-01-01|

<h3 id="getdescribeanalysisschemes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnalysisSchemesResponse](#schemadescribeanalysisschemesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAnalysisSchemes

<a id="opIdPOST_DescribeAnalysisSchemes"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeAnalysisSchemes?Action=DescribeAnalysisSchemes&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"AnalysisSchemeNames":{},"Deployed":{}}'
```

`POST /#Action=DescribeAnalysisSchemes`

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "AnalysisSchemeNames": {},
  "Deployed": {}
}
```

<h3 id="postdescribeanalysisschemes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAnalysisSchemesRequest](#schemadescribeanalysisschemesrequest)|false|none|
|» DomainName|body|object|true|none|
|» AnalysisSchemeNames|body|object|false|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAnalysisSchemes|
|Version|2013-01-01|

<h3 id="postdescribeanalysisschemes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAnalysisSchemesResponse](#schemadescribeanalysisschemesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeAvailabilityOptions

<a id="opIdGET_DescribeAvailabilityOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeAvailabilityOptions?DomainName=string&Action=DescribeAvailabilityOptions&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeAvailabilityOptions`

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribeavailabilityoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeAvailabilityOptions|
|Version|2013-01-01|

<h3 id="getdescribeavailabilityoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAvailabilityOptionsResponse](#schemadescribeavailabilityoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeAvailabilityOptions

<a id="opIdPOST_DescribeAvailabilityOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeAvailabilityOptions?Action=DescribeAvailabilityOptions&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"Deployed":{}}'
```

`POST /#Action=DescribeAvailabilityOptions`

Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

<h3 id="postdescribeavailabilityoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeAvailabilityOptionsRequest](#schemadescribeavailabilityoptionsrequest)|false|none|
|» DomainName|body|object|true|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeAvailabilityOptions|
|Version|2013-01-01|

<h3 id="postdescribeavailabilityoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAvailabilityOptionsResponse](#schemadescribeavailabilityoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDomainEndpointOptions

<a id="opIdGET_DescribeDomainEndpointOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeDomainEndpointOptions?DomainName=string&Action=DescribeDomainEndpointOptions&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDomainEndpointOptions`

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribedomainendpointoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|A string that represents the name of a domain.|
|Deployed|query|boolean|false|Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeDomainEndpointOptions|
|Version|2013-01-01|

<h3 id="getdescribedomainendpointoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainEndpointOptionsResponse](#schemadescribedomainendpointoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDomainEndpointOptions

<a id="opIdPOST_DescribeDomainEndpointOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeDomainEndpointOptions?Action=DescribeDomainEndpointOptions&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"Deployed":{}}'
```

`POST /#Action=DescribeDomainEndpointOptions`

Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

<h3 id="postdescribedomainendpointoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDomainEndpointOptionsRequest](#schemadescribedomainendpointoptionsrequest)|false|none|
|» DomainName|body|object|true|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDomainEndpointOptions|
|Version|2013-01-01|

<h3 id="postdescribedomainendpointoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainEndpointOptionsResponse](#schemadescribedomainendpointoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeDomains

<a id="opIdGET_DescribeDomains"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeDomains?Action=DescribeDomains&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeDomains`

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribedomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainNames|query|[[DomainName](#schemadomainname)]|false|The names of the domains you want to include in the response.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeDomains|
|Version|2013-01-01|

<h3 id="getdescribedomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainsResponse](#schemadescribedomainsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeDomains

<a id="opIdPOST_DescribeDomains"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeDomains?Action=DescribeDomains&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainNames":{}}'
```

`POST /#Action=DescribeDomains`

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainNames": {}
}
```

<h3 id="postdescribedomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDomainsRequest](#schemadescribedomainsrequest)|false|none|
|» DomainNames|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeDomains|
|Version|2013-01-01|

<h3 id="postdescribedomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainsResponse](#schemadescribedomainsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeExpressions

<a id="opIdGET_DescribeExpressions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeExpressions?DomainName=string&Action=DescribeExpressions&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeExpressions`

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribeexpressions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|ExpressionNames|query|[[StandardName](#schemastandardname)]|false|Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeExpressions|
|Version|2013-01-01|

<h3 id="getdescribeexpressions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExpressionsResponse](#schemadescribeexpressionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeExpressions

<a id="opIdPOST_DescribeExpressions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeExpressions?Action=DescribeExpressions&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"ExpressionNames":{},"Deployed":{}}'
```

`POST /#Action=DescribeExpressions`

Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "ExpressionNames": {},
  "Deployed": {}
}
```

<h3 id="postdescribeexpressions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeExpressionsRequest](#schemadescribeexpressionsrequest)|false|none|
|» DomainName|body|object|true|none|
|» ExpressionNames|body|object|false|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeExpressions|
|Version|2013-01-01|

<h3 id="postdescribeexpressions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeExpressionsResponse](#schemadescribeexpressionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeIndexFields

<a id="opIdGET_DescribeIndexFields"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeIndexFields?DomainName=string&Action=DescribeIndexFields&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeIndexFields`

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribeindexfields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|FieldNames|query|[[DynamicFieldName](#schemadynamicfieldname)]|false|A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeIndexFields|
|Version|2013-01-01|

<h3 id="getdescribeindexfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIndexFieldsResponse](#schemadescribeindexfieldsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeIndexFields

<a id="opIdPOST_DescribeIndexFields"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeIndexFields?Action=DescribeIndexFields&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"FieldNames":{},"Deployed":{}}'
```

`POST /#Action=DescribeIndexFields`

Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "FieldNames": {},
  "Deployed": {}
}
```

<h3 id="postdescribeindexfields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeIndexFieldsRequest](#schemadescribeindexfieldsrequest)|false|none|
|» DomainName|body|object|true|none|
|» FieldNames|body|object|false|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeIndexFields|
|Version|2013-01-01|

<h3 id="postdescribeindexfields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIndexFieldsResponse](#schemadescribeindexfieldsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeScalingParameters

<a id="opIdGET_DescribeScalingParameters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeScalingParameters?DomainName=string&Action=DescribeScalingParameters&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeScalingParameters`

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribescalingparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeScalingParameters|
|Version|2013-01-01|

<h3 id="getdescribescalingparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingParametersResponse](#schemadescribescalingparametersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeScalingParameters

<a id="opIdPOST_DescribeScalingParameters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeScalingParameters?Action=DescribeScalingParameters&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string"}'
```

`POST /#Action=DescribeScalingParameters`

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string"
}
```

<h3 id="postdescribescalingparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeScalingParametersRequest](#schemadescribescalingparametersrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeScalingParameters|
|Version|2013-01-01|

<h3 id="postdescribescalingparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingParametersResponse](#schemadescribescalingparametersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeServiceAccessPolicies

<a id="opIdGET_DescribeServiceAccessPolicies"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeServiceAccessPolicies?DomainName=string&Action=DescribeServiceAccessPolicies&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeServiceAccessPolicies`

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribeserviceaccesspolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeServiceAccessPolicies|
|Version|2013-01-01|

<h3 id="getdescribeserviceaccesspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceAccessPoliciesResponse](#schemadescribeserviceaccesspoliciesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeServiceAccessPolicies

<a id="opIdPOST_DescribeServiceAccessPolicies"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeServiceAccessPolicies?Action=DescribeServiceAccessPolicies&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"Deployed":{}}'
```

`POST /#Action=DescribeServiceAccessPolicies`

Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

<h3 id="postdescribeserviceaccesspolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeServiceAccessPoliciesRequest](#schemadescribeserviceaccesspoliciesrequest)|false|none|
|» DomainName|body|object|true|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeServiceAccessPolicies|
|Version|2013-01-01|

<h3 id="postdescribeserviceaccesspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceAccessPoliciesResponse](#schemadescribeserviceaccesspoliciesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DescribeSuggesters

<a id="opIdGET_DescribeSuggesters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeSuggesters?DomainName=string&Action=DescribeSuggesters&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DescribeSuggesters`

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getdescribesuggesters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|The name of the domain you want to describe.|
|SuggesterNames|query|[[StandardName](#schemastandardname)]|false|The suggesters you want to describe.|
|Deployed|query|boolean|false|Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|DescribeSuggesters|
|Version|2013-01-01|

<h3 id="getdescribesuggesters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSuggestersResponse](#schemadescribesuggestersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DescribeSuggesters

<a id="opIdPOST_DescribeSuggesters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=DescribeSuggesters?Action=DescribeSuggesters&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"SuggesterNames":{},"Deployed":{}}'
```

`POST /#Action=DescribeSuggesters`

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "SuggesterNames": {},
  "Deployed": {}
}
```

<h3 id="postdescribesuggesters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeSuggestersRequest](#schemadescribesuggestersrequest)|false|none|
|» DomainName|body|object|true|none|
|» SuggesterNames|body|object|false|none|
|» Deployed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DescribeSuggesters|
|Version|2013-01-01|

<h3 id="postdescribesuggesters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeSuggestersResponse](#schemadescribesuggestersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_IndexDocuments

<a id="opIdGET_IndexDocuments"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=IndexDocuments?DomainName=string&Action=IndexDocuments&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=IndexDocuments`

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

<h3 id="getindexdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|IndexDocuments|
|Version|2013-01-01|

<h3 id="getindexdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IndexDocumentsResponse](#schemaindexdocumentsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_IndexDocuments

<a id="opIdPOST_IndexDocuments"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=IndexDocuments?Action=IndexDocuments&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string"}'
```

`POST /#Action=IndexDocuments`

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.

> Body parameter

```json
{
  "DomainName": "string"
}
```

<h3 id="postindexdocuments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[IndexDocumentsRequest](#schemaindexdocumentsrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|IndexDocuments|
|Version|2013-01-01|

<h3 id="postindexdocuments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IndexDocumentsResponse](#schemaindexdocumentsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_ListDomainNames

<a id="opIdGET_ListDomainNames"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=ListDomainNames?Action=ListDomainNames&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=ListDomainNames`

Lists all search domains owned by an account.

<h3 id="getlistdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListDomainNames|
|Version|2013-01-01|

<h3 id="getlistdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainNamesResponse](#schemalistdomainnamesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_ListDomainNames

<a id="opIdPOST_ListDomainNames"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=ListDomainNames?Action=ListDomainNames&Version=2013-01-01' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /#Action=ListDomainNames`

Lists all search domains owned by an account.

<h3 id="postlistdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|ListDomainNames|
|Version|2013-01-01|

<h3 id="postlistdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainNamesResponse](#schemalistdomainnamesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateAvailabilityOptions

<a id="opIdGET_UpdateAvailabilityOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateAvailabilityOptions?DomainName=string&MultiAZ=true&Action=UpdateAvailabilityOptions&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateAvailabilityOptions`

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getupdateavailabilityoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|MultiAZ|query|boolean|true|You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateAvailabilityOptions|
|Version|2013-01-01|

<h3 id="getupdateavailabilityoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAvailabilityOptionsResponse](#schemaupdateavailabilityoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateAvailabilityOptions

<a id="opIdPOST_UpdateAvailabilityOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateAvailabilityOptions?Action=UpdateAvailabilityOptions&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","MultiAZ":{}}'
```

`POST /#Action=UpdateAvailabilityOptions`

Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "MultiAZ": {}
}
```

<h3 id="postupdateavailabilityoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateAvailabilityOptionsRequest](#schemaupdateavailabilityoptionsrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» MultiAZ|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateAvailabilityOptions|
|Version|2013-01-01|

<h3 id="postupdateavailabilityoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAvailabilityOptionsResponse](#schemaupdateavailabilityoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateDomainEndpointOptions

<a id="opIdGET_UpdateDomainEndpointOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateDomainEndpointOptions?DomainName=string&EnforceHTTPS=%7B%7D&TLSSecurityPolicy=%7B%7D&Action=UpdateDomainEndpointOptions&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateDomainEndpointOptions`

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h3 id="getupdatedomainendpointoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|A string that represents the name of a domain.|
|DomainEndpointOptions|query|object|true|Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateDomainEndpointOptions|
|Version|2013-01-01|

<h3 id="getupdatedomainendpointoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainEndpointOptionsResponse](#schemaupdatedomainendpointoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateDomainEndpointOptions

<a id="opIdPOST_UpdateDomainEndpointOptions"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateDomainEndpointOptions?Action=UpdateDomainEndpointOptions&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":{},"DomainEndpointOptions":{"EnforceHTTPS":{},"TLSSecurityPolicy":{}}}'
```

`POST /#Action=UpdateDomainEndpointOptions`

Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": {},
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {}
  }
}
```

<h3 id="postupdatedomainendpointoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateDomainEndpointOptionsRequest](#schemaupdatedomainendpointoptionsrequest)|false|none|
|» DomainName|body|object|true|none|
|» DomainEndpointOptions|body|object|true|none|
|» » EnforceHTTPS|body|object|false|none|
|» » TLSSecurityPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateDomainEndpointOptions|
|Version|2013-01-01|

<h3 id="postupdatedomainendpointoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainEndpointOptionsResponse](#schemaupdatedomainendpointoptionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateScalingParameters

<a id="opIdGET_UpdateScalingParameters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateScalingParameters?DomainName=string&DesiredInstanceType=%7B%7D&DesiredReplicationCount=%7B%7D&DesiredPartitionCount=%7B%7D&Action=UpdateScalingParameters&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateScalingParameters`

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

<h3 id="getupdatescalingparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|ScalingParameters|query|object|true|none|
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateScalingParameters|
|Version|2013-01-01|

<h3 id="getupdatescalingparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateScalingParametersResponse](#schemaupdatescalingparametersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateScalingParameters

<a id="opIdPOST_UpdateScalingParameters"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateScalingParameters?Action=UpdateScalingParameters&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","ScalingParameters":{"DesiredInstanceType":{},"DesiredReplicationCount":{},"DesiredPartitionCount":{}}}'
```

`POST /#Action=UpdateScalingParameters`

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. 

> Body parameter

```json
{
  "DomainName": "string",
  "ScalingParameters": {
    "DesiredInstanceType": {},
    "DesiredReplicationCount": {},
    "DesiredPartitionCount": {}
  }
}
```

<h3 id="postupdatescalingparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateScalingParametersRequest](#schemaupdatescalingparametersrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» ScalingParameters|body|[ScalingParameters](#schemascalingparameters)|true|The desired instance type and desired number of replicas of each index partition.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateScalingParameters|
|Version|2013-01-01|

<h3 id="postupdatescalingparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateScalingParametersResponse](#schemaupdatescalingparametersresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_UpdateServiceAccessPolicies

<a id="opIdGET_UpdateServiceAccessPolicies"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateServiceAccessPolicies?DomainName=string&AccessPolicies=string&Action=UpdateServiceAccessPolicies&Version=2013-01-01' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=UpdateServiceAccessPolicies`

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

<h3 id="getupdateserviceaccesspolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|query|string|true|none|
|AccessPolicies|query|string|true|The access rules you want to configure. These rules replace any existing rules. |
|Action|query|string|true|none|
|Version|query|string|true|none|
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
|Action|UpdateServiceAccessPolicies|
|Version|2013-01-01|

<h3 id="getupdateserviceaccesspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceAccessPoliciesResponse](#schemaupdateserviceaccesspoliciesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_UpdateServiceAccessPolicies

<a id="opIdPOST_UpdateServiceAccessPolicies"></a>

> Code samples

```bash
curl 'https://cloudsearch.us-east-1.amazonaws.com/#Action=UpdateServiceAccessPolicies?Action=UpdateServiceAccessPolicies&Version=2013-01-01' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DomainName":"string","AccessPolicies":{}}'
```

`POST /#Action=UpdateServiceAccessPolicies`

Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.

> Body parameter

```json
{
  "DomainName": "string",
  "AccessPolicies": {}
}
```

<h3 id="postupdateserviceaccesspolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateServiceAccessPoliciesRequest](#schemaupdateserviceaccesspoliciesrequest)|false|none|
|» DomainName|body|[DomainName](#schemadomainname)|true|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» AccessPolicies|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|UpdateServiceAccessPolicies|
|Version|2013-01-01|

<h3 id="postupdateserviceaccesspolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceAccessPoliciesResponse](#schemaupdateserviceaccesspoliciesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BuildSuggestersResponse">BuildSuggestersResponse</h2>
<!-- backwards compatibility -->
<a id="schemabuildsuggestersresponse"></a>
<a id="schema_BuildSuggestersResponse"></a>
<a id="tocSbuildsuggestersresponse"></a>
<a id="tocsbuildsuggestersresponse"></a>

```json
{
  "FieldNames": [
    "string"
  ]
}
```

The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldNames|[FieldNameList](#schemafieldnamelist)|false|none|A list of field names.|

<h2 id="tocS_BaseException">BaseException</h2>
<!-- backwards compatibility -->
<a id="schemabaseexception"></a>
<a id="schema_BaseException"></a>
<a id="tocSbaseexception"></a>
<a id="tocsbaseexception"></a>

```json
null
```

<h2 id="tocS_InternalException">InternalException</h2>
<!-- backwards compatibility -->
<a id="schemainternalexception"></a>
<a id="schema_InternalException"></a>
<a id="tocSinternalexception"></a>
<a id="tocsinternalexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_CreateDomainResponse">CreateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainresponse"></a>
<a id="schema_CreateDomainResponse"></a>
<a id="tocScreatedomainresponse"></a>
<a id="tocscreatedomainresponse"></a>

```json
{
  "DomainStatus": {
    "DomainId": "string",
    "DomainName": "string",
    "ARN": "string",
    "Created": {},
    "Deleted": {},
    "DocService": {
      "Endpoint": "string"
    },
    "SearchService": {
      "Endpoint": "string"
    },
    "RequiresIndexDocuments": {},
    "Processing": {},
    "SearchInstanceType": {},
    "SearchPartitionCount": {},
    "SearchInstanceCount": {},
    "Limits": {
      "MaximumReplicationCount": 1,
      "MaximumPartitionCount": 1
    }
  }
}
```

The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatus|[DomainStatus](#schemadomainstatus)|false|none|The current status of the search domain.|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DefineAnalysisSchemeResponse">DefineAnalysisSchemeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefineanalysisschemeresponse"></a>
<a id="schema_DefineAnalysisSchemeResponse"></a>
<a id="tocSdefineanalysisschemeresponse"></a>
<a id="tocsdefineanalysisschemeresponse"></a>

```json
{
  "AnalysisScheme": {
    "Options": {
      "AnalysisSchemeName": "string",
      "AnalysisSchemeLanguage": "ar",
      "AnalysisOptions": {
        "Synonyms": {},
        "Stopwords": {},
        "StemmingDictionary": {},
        "JapaneseTokenizationDictionary": {},
        "AlgorithmicStemming": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalysisScheme|[AnalysisSchemeStatus](#schemaanalysisschemestatus)|true|none|The status and configuration of an <code>AnalysisScheme</code>.|

<h2 id="tocS_StandardName">StandardName</h2>
<!-- backwards compatibility -->
<a id="schemastandardname"></a>
<a id="schema_StandardName"></a>
<a id="tocSstandardname"></a>
<a id="tocsstandardname"></a>

```json
"string"
```

Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).

<h2 id="tocS_AnalysisSchemeLanguage">AnalysisSchemeLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisschemelanguage"></a>
<a id="schema_AnalysisSchemeLanguage"></a>
<a id="tocSanalysisschemelanguage"></a>
<a id="tocsanalysisschemelanguage"></a>

```json
"ar"
```

An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.

<h2 id="tocS_AnalysisOptions">AnalysisOptions</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisoptions"></a>
<a id="schema_AnalysisOptions"></a>
<a id="tocSanalysisoptions"></a>
<a id="tocsanalysisoptions"></a>

```json
{
  "Synonyms": {},
  "Stopwords": {},
  "StemmingDictionary": {},
  "JapaneseTokenizationDictionary": {},
  "AlgorithmicStemming": {}
}
```

Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Synonyms|object|false|none|none|
|Stopwords|object|false|none|none|
|StemmingDictionary|object|false|none|none|
|JapaneseTokenizationDictionary|object|false|none|none|
|AlgorithmicStemming|object|false|none|none|

<h2 id="tocS_InvalidTypeException">InvalidTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtypeexception"></a>
<a id="schema_InvalidTypeException"></a>
<a id="tocSinvalidtypeexception"></a>
<a id="tocsinvalidtypeexception"></a>

```json
null
```

<h2 id="tocS_DefineExpressionResponse">DefineExpressionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefineexpressionresponse"></a>
<a id="schema_DefineExpressionResponse"></a>
<a id="tocSdefineexpressionresponse"></a>
<a id="tocsdefineexpressionresponse"></a>

```json
{
  "Expression": {
    "Options": {
      "ExpressionName": "string",
      "ExpressionValue": "string"
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|[ExpressionStatus](#schemaexpressionstatus)|true|none|The value of an <code>Expression</code> and its current status.|

<h2 id="tocS_ExpressionValue">ExpressionValue</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionvalue"></a>
<a id="schema_ExpressionValue"></a>
<a id="tocSexpressionvalue"></a>
<a id="tocsexpressionvalue"></a>

```json
"string"
```

The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h2 id="tocS_DefineIndexFieldResponse">DefineIndexFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefineindexfieldresponse"></a>
<a id="schema_DefineIndexFieldResponse"></a>
<a id="tocSdefineindexfieldresponse"></a>
<a id="tocsdefineindexfieldresponse"></a>

```json
{
  "IndexField": {
    "Options": {
      "IndexFieldName": {},
      "IndexFieldType": "int",
      "IntOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "DoubleOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LiteralOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "TextOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "ReturnEnabled": {},
        "SortEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LatLonOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "IntArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "DoubleArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "LiteralArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "TextArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "ReturnEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexField|[IndexFieldStatus](#schemaindexfieldstatus)|true|none|The value of an <code>IndexField</code> and its current status.|

<h2 id="tocS_DynamicFieldName">DynamicFieldName</h2>
<!-- backwards compatibility -->
<a id="schemadynamicfieldname"></a>
<a id="schema_DynamicFieldName"></a>
<a id="tocSdynamicfieldname"></a>
<a id="tocsdynamicfieldname"></a>

```json
"string"
```

<h2 id="tocS_IndexFieldType">IndexFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaindexfieldtype"></a>
<a id="schema_IndexFieldType"></a>
<a id="tocSindexfieldtype"></a>
<a id="tocsindexfieldtype"></a>

```json
"int"
```

The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

<h2 id="tocS_IntOptions">IntOptions</h2>
<!-- backwards compatibility -->
<a id="schemaintoptions"></a>
<a id="schema_IntOptions"></a>
<a id="tocSintoptions"></a>
<a id="tocsintoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {},
  "SortEnabled": {}
}
```

Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|

<h2 id="tocS_DoubleOptions">DoubleOptions</h2>
<!-- backwards compatibility -->
<a id="schemadoubleoptions"></a>
<a id="schema_DoubleOptions"></a>
<a id="tocSdoubleoptions"></a>
<a id="tocsdoubleoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {},
  "SortEnabled": {}
}
```

Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|

<h2 id="tocS_LiteralOptions">LiteralOptions</h2>
<!-- backwards compatibility -->
<a id="schemaliteraloptions"></a>
<a id="schema_LiteralOptions"></a>
<a id="tocSliteraloptions"></a>
<a id="tocsliteraloptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": "string",
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {},
  "SortEnabled": {}
}
```

Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|[FieldName](#schemafieldname)|false|none|<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|

<h2 id="tocS_TextOptions">TextOptions</h2>
<!-- backwards compatibility -->
<a id="schematextoptions"></a>
<a id="schema_TextOptions"></a>
<a id="tocStextoptions"></a>
<a id="tocstextoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": "string",
  "ReturnEnabled": {},
  "SortEnabled": {},
  "HighlightEnabled": {},
  "AnalysisScheme": {}
}
```

Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|[FieldName](#schemafieldname)|false|none|<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|
|HighlightEnabled|object|false|none|none|
|AnalysisScheme|object|false|none|none|

<h2 id="tocS_DateOptions">DateOptions</h2>
<!-- backwards compatibility -->
<a id="schemadateoptions"></a>
<a id="schema_DateOptions"></a>
<a id="tocSdateoptions"></a>
<a id="tocsdateoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": "string",
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {},
  "SortEnabled": {}
}
```

Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|[FieldName](#schemafieldname)|false|none|<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|

<h2 id="tocS_LatLonOptions">LatLonOptions</h2>
<!-- backwards compatibility -->
<a id="schemalatlonoptions"></a>
<a id="schema_LatLonOptions"></a>
<a id="tocSlatlonoptions"></a>
<a id="tocslatlonoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceField": "string",
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {},
  "SortEnabled": {}
}
```

Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceField|[FieldName](#schemafieldname)|false|none|<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|SortEnabled|object|false|none|none|

<h2 id="tocS_IntArrayOptions">IntArrayOptions</h2>
<!-- backwards compatibility -->
<a id="schemaintarrayoptions"></a>
<a id="schema_IntArrayOptions"></a>
<a id="tocSintarrayoptions"></a>
<a id="tocsintarrayoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceFields": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {}
}
```

Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceFields|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|

<h2 id="tocS_DoubleArrayOptions">DoubleArrayOptions</h2>
<!-- backwards compatibility -->
<a id="schemadoublearrayoptions"></a>
<a id="schema_DoubleArrayOptions"></a>
<a id="tocSdoublearrayoptions"></a>
<a id="tocsdoublearrayoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceFields": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {}
}
```

Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceFields|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|

<h2 id="tocS_LiteralArrayOptions">LiteralArrayOptions</h2>
<!-- backwards compatibility -->
<a id="schemaliteralarrayoptions"></a>
<a id="schema_LiteralArrayOptions"></a>
<a id="tocSliteralarrayoptions"></a>
<a id="tocsliteralarrayoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceFields": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {}
}
```

Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceFields|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|

<h2 id="tocS_TextArrayOptions">TextArrayOptions</h2>
<!-- backwards compatibility -->
<a id="schematextarrayoptions"></a>
<a id="schema_TextArrayOptions"></a>
<a id="tocStextarrayoptions"></a>
<a id="tocstextarrayoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceFields": {},
  "ReturnEnabled": {},
  "HighlightEnabled": {},
  "AnalysisScheme": {}
}
```

Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceFields|object|false|none|none|
|ReturnEnabled|object|false|none|none|
|HighlightEnabled|object|false|none|none|
|AnalysisScheme|object|false|none|none|

<h2 id="tocS_DateArrayOptions">DateArrayOptions</h2>
<!-- backwards compatibility -->
<a id="schemadatearrayoptions"></a>
<a id="schema_DateArrayOptions"></a>
<a id="tocSdatearrayoptions"></a>
<a id="tocsdatearrayoptions"></a>

```json
{
  "DefaultValue": {},
  "SourceFields": {},
  "FacetEnabled": {},
  "SearchEnabled": {},
  "ReturnEnabled": {}
}
```

Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultValue|object|false|none|none|
|SourceFields|object|false|none|none|
|FacetEnabled|object|false|none|none|
|SearchEnabled|object|false|none|none|
|ReturnEnabled|object|false|none|none|

<h2 id="tocS_DefineSuggesterResponse">DefineSuggesterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadefinesuggesterresponse"></a>
<a id="schema_DefineSuggesterResponse"></a>
<a id="tocSdefinesuggesterresponse"></a>
<a id="tocsdefinesuggesterresponse"></a>

```json
{
  "Suggester": {
    "Options": {
      "SuggesterName": "string",
      "DocumentSuggesterOptions": {
        "SourceField": {},
        "FuzzyMatching": {},
        "SortExpression": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Suggester|[SuggesterStatus](#schemasuggesterstatus)|true|none|The value of a <code>Suggester</code> and its current status.|

<h2 id="tocS_DocumentSuggesterOptions">DocumentSuggesterOptions</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsuggesteroptions"></a>
<a id="schema_DocumentSuggesterOptions"></a>
<a id="tocSdocumentsuggesteroptions"></a>
<a id="tocsdocumentsuggesteroptions"></a>

```json
{
  "SourceField": {},
  "FuzzyMatching": {},
  "SortExpression": {}
}
```

Options for a search suggester.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceField|object|true|none|none|
|FuzzyMatching|object|false|none|none|
|SortExpression|object|false|none|none|

<h2 id="tocS_DeleteAnalysisSchemeResponse">DeleteAnalysisSchemeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanalysisschemeresponse"></a>
<a id="schema_DeleteAnalysisSchemeResponse"></a>
<a id="tocSdeleteanalysisschemeresponse"></a>
<a id="tocsdeleteanalysisschemeresponse"></a>

```json
{
  "AnalysisScheme": {
    "Options": {
      "AnalysisSchemeName": "string",
      "AnalysisSchemeLanguage": "ar",
      "AnalysisOptions": {
        "Synonyms": {},
        "Stopwords": {},
        "StemmingDictionary": {},
        "JapaneseTokenizationDictionary": {},
        "AlgorithmicStemming": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalysisScheme|object|true|none|none|

<h2 id="tocS_DeleteDomainResponse">DeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresponse"></a>
<a id="schema_DeleteDomainResponse"></a>
<a id="tocSdeletedomainresponse"></a>
<a id="tocsdeletedomainresponse"></a>

```json
{
  "DomainStatus": {
    "DomainId": "string",
    "DomainName": "string",
    "ARN": "string",
    "Created": {},
    "Deleted": {},
    "DocService": {
      "Endpoint": "string"
    },
    "SearchService": {
      "Endpoint": "string"
    },
    "RequiresIndexDocuments": {},
    "Processing": {},
    "SearchInstanceType": {},
    "SearchPartitionCount": {},
    "SearchInstanceCount": {},
    "Limits": {
      "MaximumReplicationCount": 1,
      "MaximumPartitionCount": 1
    }
  }
}
```

The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatus|[DomainStatus](#schemadomainstatus)|false|none|The current status of the search domain.|

<h2 id="tocS_DeleteExpressionResponse">DeleteExpressionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexpressionresponse"></a>
<a id="schema_DeleteExpressionResponse"></a>
<a id="tocSdeleteexpressionresponse"></a>
<a id="tocsdeleteexpressionresponse"></a>

```json
{
  "Expression": {
    "Options": {
      "ExpressionName": "string",
      "ExpressionValue": "string"
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|object|true|none|none|

<h2 id="tocS_DeleteIndexFieldResponse">DeleteIndexFieldResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteindexfieldresponse"></a>
<a id="schema_DeleteIndexFieldResponse"></a>
<a id="tocSdeleteindexfieldresponse"></a>
<a id="tocsdeleteindexfieldresponse"></a>

```json
{
  "IndexField": {
    "Options": {
      "IndexFieldName": {},
      "IndexFieldType": "int",
      "IntOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "DoubleOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LiteralOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "TextOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "ReturnEnabled": {},
        "SortEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LatLonOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "IntArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "DoubleArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "LiteralArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "TextArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "ReturnEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code><a>DeleteIndexField</a></code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexField|object|true|none|none|

<h2 id="tocS_DeleteSuggesterResponse">DeleteSuggesterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuggesterresponse"></a>
<a id="schema_DeleteSuggesterResponse"></a>
<a id="tocSdeletesuggesterresponse"></a>
<a id="tocsdeletesuggesterresponse"></a>

```json
{
  "Suggester": {
    "Options": {
      "SuggesterName": "string",
      "DocumentSuggesterOptions": {
        "SourceField": {},
        "FuzzyMatching": {},
        "SortExpression": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Suggester|object|true|none|none|

<h2 id="tocS_DescribeAnalysisSchemesResponse">DescribeAnalysisSchemesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanalysisschemesresponse"></a>
<a id="schema_DescribeAnalysisSchemesResponse"></a>
<a id="tocSdescribeanalysisschemesresponse"></a>
<a id="tocsdescribeanalysisschemesresponse"></a>

```json
{
  "AnalysisSchemes": {}
}
```

The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalysisSchemes|object|true|none|none|

<h2 id="tocS_DescribeAvailabilityOptionsResponse">DescribeAvailabilityOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailabilityoptionsresponse"></a>
<a id="schema_DescribeAvailabilityOptionsResponse"></a>
<a id="tocSdescribeavailabilityoptionsresponse"></a>
<a id="tocsdescribeavailabilityoptionsresponse"></a>

```json
{
  "AvailabilityOptions": {
    "Options": {},
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityOptions|object|false|none|none|

<h2 id="tocS_DisabledOperationException">DisabledOperationException</h2>
<!-- backwards compatibility -->
<a id="schemadisabledoperationexception"></a>
<a id="schema_DisabledOperationException"></a>
<a id="tocSdisabledoperationexception"></a>
<a id="tocsdisabledoperationexception"></a>

```json
null
```

<h2 id="tocS_DescribeDomainEndpointOptionsResponse">DescribeDomainEndpointOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainendpointoptionsresponse"></a>
<a id="schema_DescribeDomainEndpointOptionsResponse"></a>
<a id="tocSdescribedomainendpointoptionsresponse"></a>
<a id="tocsdescribedomainendpointoptionsresponse"></a>

```json
{
  "DomainEndpointOptions": {
    "Options": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainEndpointOptions|object|false|none|none|

<h2 id="tocS_DescribeDomainsResponse">DescribeDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainsresponse"></a>
<a id="schema_DescribeDomainsResponse"></a>
<a id="tocSdescribedomainsresponse"></a>
<a id="tocsdescribedomainsresponse"></a>

```json
{
  "DomainStatusList": [
    {
      "DomainId": "string",
      "DomainName": "string",
      "ARN": "string",
      "Created": {},
      "Deleted": {},
      "DocService": {
        "Endpoint": "string"
      },
      "SearchService": {
        "Endpoint": "string"
      },
      "RequiresIndexDocuments": {},
      "Processing": {},
      "SearchInstanceType": {},
      "SearchPartitionCount": {},
      "SearchInstanceCount": {},
      "Limits": {
        "MaximumReplicationCount": 1,
        "MaximumPartitionCount": 1
      }
    }
  ]
}
```

The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatusList|[DomainStatusList](#schemadomainstatuslist)|true|none|A list that contains the status of each requested domain.|

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

<h2 id="tocS_DescribeExpressionsResponse">DescribeExpressionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexpressionsresponse"></a>
<a id="schema_DescribeExpressionsResponse"></a>
<a id="tocSdescribeexpressionsresponse"></a>
<a id="tocsdescribeexpressionsresponse"></a>

```json
{
  "Expressions": {}
}
```

The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expressions|object|true|none|none|

<h2 id="tocS_DescribeIndexFieldsResponse">DescribeIndexFieldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexfieldsresponse"></a>
<a id="schema_DescribeIndexFieldsResponse"></a>
<a id="tocSdescribeindexfieldsresponse"></a>
<a id="tocsdescribeindexfieldsresponse"></a>

```json
{
  "IndexFields": {}
}
```

The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexFields|object|true|none|none|

<h2 id="tocS_DescribeScalingParametersResponse">DescribeScalingParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingparametersresponse"></a>
<a id="schema_DescribeScalingParametersResponse"></a>
<a id="tocSdescribescalingparametersresponse"></a>
<a id="tocsdescribescalingparametersresponse"></a>

```json
{
  "ScalingParameters": {
    "Options": {
      "DesiredInstanceType": {},
      "DesiredReplicationCount": {},
      "DesiredPartitionCount": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingParameters|[ScalingParametersStatus](#schemascalingparametersstatus)|true|none|The status and configuration of a search domain's scaling parameters. |

<h2 id="tocS_DescribeServiceAccessPoliciesResponse">DescribeServiceAccessPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceaccesspoliciesresponse"></a>
<a id="schema_DescribeServiceAccessPoliciesResponse"></a>
<a id="tocSdescribeserviceaccesspoliciesresponse"></a>
<a id="tocsdescribeserviceaccesspoliciesresponse"></a>

```json
{
  "AccessPolicies": {
    "Options": "string",
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>DescribeServiceAccessPolicies</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPolicies|object|true|none|none|

<h2 id="tocS_DescribeSuggestersResponse">DescribeSuggestersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribesuggestersresponse"></a>
<a id="schema_DescribeSuggestersResponse"></a>
<a id="tocSdescribesuggestersresponse"></a>
<a id="tocsdescribesuggestersresponse"></a>

```json
{
  "Suggesters": {}
}
```

The result of a <code>DescribeSuggesters</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Suggesters|object|true|none|none|

<h2 id="tocS_IndexDocumentsResponse">IndexDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaindexdocumentsresponse"></a>
<a id="schema_IndexDocumentsResponse"></a>
<a id="tocSindexdocumentsresponse"></a>
<a id="tocsindexdocumentsresponse"></a>

```json
{
  "FieldNames": {}
}
```

The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldNames|object|false|none|none|

<h2 id="tocS_ListDomainNamesResponse">ListDomainNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainnamesresponse"></a>
<a id="schema_ListDomainNamesResponse"></a>
<a id="tocSlistdomainnamesresponse"></a>
<a id="tocslistdomainnamesresponse"></a>

```json
{
  "DomainNames": {
    "property1": "string",
    "property2": "string"
  }
}
```

The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNames|object|false|none|none|

<h2 id="tocS_UpdateAvailabilityOptionsResponse">UpdateAvailabilityOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityoptionsresponse"></a>
<a id="schema_UpdateAvailabilityOptionsResponse"></a>
<a id="tocSupdateavailabilityoptionsresponse"></a>
<a id="tocsupdateavailabilityoptionsresponse"></a>

```json
{
  "AvailabilityOptions": {
    "Options": {},
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityOptions|object|false|none|none|

<h2 id="tocS_UpdateDomainEndpointOptionsResponse">UpdateDomainEndpointOptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainendpointoptionsresponse"></a>
<a id="schema_UpdateDomainEndpointOptionsResponse"></a>
<a id="tocSupdatedomainendpointoptionsresponse"></a>
<a id="tocsupdatedomainendpointoptionsresponse"></a>

```json
{
  "DomainEndpointOptions": {
    "Options": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainEndpointOptions|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_TLSSecurityPolicy">TLSSecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schematlssecuritypolicy"></a>
<a id="schema_TLSSecurityPolicy"></a>
<a id="tocStlssecuritypolicy"></a>
<a id="tocstlssecuritypolicy"></a>

```json
"Policy-Min-TLS-1-0-2019-07"
```

The minimum required TLS version.

<h2 id="tocS_UpdateScalingParametersResponse">UpdateScalingParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescalingparametersresponse"></a>
<a id="schema_UpdateScalingParametersResponse"></a>
<a id="tocSupdatescalingparametersresponse"></a>
<a id="tocsupdatescalingparametersresponse"></a>

```json
{
  "ScalingParameters": {
    "Options": {
      "DesiredInstanceType": {},
      "DesiredReplicationCount": {},
      "DesiredPartitionCount": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingParameters|[ScalingParametersStatus](#schemascalingparametersstatus)|true|none|The status and configuration of a search domain's scaling parameters. |

<h2 id="tocS_PartitionInstanceType">PartitionInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemapartitioninstancetype"></a>
<a id="schema_PartitionInstanceType"></a>
<a id="tocSpartitioninstancetype"></a>
<a id="tocspartitioninstancetype"></a>

```json
"search.m1.small"
```

The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted.

<h2 id="tocS_UIntValue">UIntValue</h2>
<!-- backwards compatibility -->
<a id="schemauintvalue"></a>
<a id="schema_UIntValue"></a>
<a id="tocSuintvalue"></a>
<a id="tocsuintvalue"></a>

```json
0
```

<h2 id="tocS_UpdateServiceAccessPoliciesResponse">UpdateServiceAccessPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceaccesspoliciesresponse"></a>
<a id="schema_UpdateServiceAccessPoliciesResponse"></a>
<a id="tocSupdateserviceaccesspoliciesresponse"></a>
<a id="tocsupdateserviceaccesspoliciesresponse"></a>

```json
{
  "AccessPolicies": {
    "Options": "string",
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
}
```

The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPolicies|object|true|none|none|

<h2 id="tocS_APIVersion">APIVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_APIVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
"string"
```

The Amazon CloudSearch API version for a domain: 2011-02-01 or 2013-01-01.

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.

<h2 id="tocS_OptionStatus">OptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoptionstatus"></a>
<a id="schema_OptionStatus"></a>
<a id="tocSoptionstatus"></a>
<a id="tocsoptionstatus"></a>

```json
{
  "CreationDate": {},
  "UpdateDate": {},
  "UpdateVersion": {},
  "State": {},
  "PendingDeletion": {}
}
```

The status of domain configuration option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|true|none|none|
|UpdateDate|object|true|none|none|
|UpdateVersion|object|false|none|none|
|State|object|true|none|none|
|PendingDeletion|object|false|none|none|

<h2 id="tocS_AccessPoliciesStatus">AccessPoliciesStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspoliciesstatus"></a>
<a id="schema_AccessPoliciesStatus"></a>
<a id="tocSaccesspoliciesstatus"></a>
<a id="tocsaccesspoliciesstatus"></a>

```json
{
  "Options": "string",
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The configured access rules for the domain's document and search endpoints, and the current status of those rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[PolicyDocument](#schemapolicydocument)|true|none|Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_AlgorithmicStemming">AlgorithmicStemming</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithmicstemming"></a>
<a id="schema_AlgorithmicStemming"></a>
<a id="tocSalgorithmicstemming"></a>
<a id="tocsalgorithmicstemming"></a>

```json
"none"
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

<h2 id="tocS_AnalysisScheme">AnalysisScheme</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisscheme"></a>
<a id="schema_AnalysisScheme"></a>
<a id="tocSanalysisscheme"></a>
<a id="tocsanalysisscheme"></a>

```json
{
  "AnalysisSchemeName": "string",
  "AnalysisSchemeLanguage": "ar",
  "AnalysisOptions": {
    "Synonyms": {},
    "Stopwords": {},
    "StemmingDictionary": {},
    "JapaneseTokenizationDictionary": {},
    "AlgorithmicStemming": {}
  }
}
```

Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnalysisSchemeName|[StandardName](#schemastandardname)|true|none|Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).|
|AnalysisSchemeLanguage|[AnalysisSchemeLanguage](#schemaanalysisschemelanguage)|true|none|An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.|
|AnalysisOptions|[AnalysisOptions](#schemaanalysisoptions)|false|none|Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.|

#### Enumerated Values

|Property|Value|
|---|---|
|AnalysisSchemeLanguage|ar|
|AnalysisSchemeLanguage|bg|
|AnalysisSchemeLanguage|ca|
|AnalysisSchemeLanguage|cs|
|AnalysisSchemeLanguage|da|
|AnalysisSchemeLanguage|de|
|AnalysisSchemeLanguage|el|
|AnalysisSchemeLanguage|en|
|AnalysisSchemeLanguage|es|
|AnalysisSchemeLanguage|eu|
|AnalysisSchemeLanguage|fa|
|AnalysisSchemeLanguage|fi|
|AnalysisSchemeLanguage|fr|
|AnalysisSchemeLanguage|ga|
|AnalysisSchemeLanguage|gl|
|AnalysisSchemeLanguage|he|
|AnalysisSchemeLanguage|hi|
|AnalysisSchemeLanguage|hu|
|AnalysisSchemeLanguage|hy|
|AnalysisSchemeLanguage|id|
|AnalysisSchemeLanguage|it|
|AnalysisSchemeLanguage|ja|
|AnalysisSchemeLanguage|ko|
|AnalysisSchemeLanguage|lv|
|AnalysisSchemeLanguage|mul|
|AnalysisSchemeLanguage|nl|
|AnalysisSchemeLanguage|no|
|AnalysisSchemeLanguage|pt|
|AnalysisSchemeLanguage|ro|
|AnalysisSchemeLanguage|ru|
|AnalysisSchemeLanguage|sv|
|AnalysisSchemeLanguage|th|
|AnalysisSchemeLanguage|tr|
|AnalysisSchemeLanguage|zh-Hans|
|AnalysisSchemeLanguage|zh-Hant|

<h2 id="tocS_AnalysisSchemeStatus">AnalysisSchemeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisschemestatus"></a>
<a id="schema_AnalysisSchemeStatus"></a>
<a id="tocSanalysisschemestatus"></a>
<a id="tocsanalysisschemestatus"></a>

```json
{
  "Options": {
    "AnalysisSchemeName": "string",
    "AnalysisSchemeLanguage": "ar",
    "AnalysisOptions": {
      "Synonyms": {},
      "Stopwords": {},
      "StemmingDictionary": {},
      "JapaneseTokenizationDictionary": {},
      "AlgorithmicStemming": {}
    }
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The status and configuration of an <code>AnalysisScheme</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[AnalysisScheme](#schemaanalysisscheme)|true|none|Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_AnalysisSchemeStatusList">AnalysisSchemeStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisschemestatuslist"></a>
<a id="schema_AnalysisSchemeStatusList"></a>
<a id="tocSanalysisschemestatuslist"></a>
<a id="tocsanalysisschemestatuslist"></a>

```json
[
  {
    "Options": {
      "AnalysisSchemeName": "string",
      "AnalysisSchemeLanguage": "ar",
      "AnalysisOptions": {
        "Synonyms": {},
        "Stopwords": {},
        "StemmingDictionary": {},
        "JapaneseTokenizationDictionary": {},
        "AlgorithmicStemming": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
]
```

A list of the analysis schemes configured for a domain.

<h2 id="tocS_MultiAZ">MultiAZ</h2>
<!-- backwards compatibility -->
<a id="schemamultiaz"></a>
<a id="schema_MultiAZ"></a>
<a id="tocSmultiaz"></a>
<a id="tocsmultiaz"></a>

```json
true
```

<h2 id="tocS_AvailabilityOptionsStatus">AvailabilityOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaavailabilityoptionsstatus"></a>
<a id="schema_AvailabilityOptionsStatus"></a>
<a id="tocSavailabilityoptionsstatus"></a>
<a id="tocsavailabilityoptionsstatus"></a>

```json
{
  "Options": {},
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The status and configuration of the domain's availability options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_BuildSuggestersRequest">BuildSuggestersRequest</h2>
<!-- backwards compatibility -->
<a id="schemabuildsuggestersrequest"></a>
<a id="schema_BuildSuggestersRequest"></a>
<a id="tocSbuildsuggestersrequest"></a>
<a id="tocsbuildsuggestersrequest"></a>

```json
{
  "DomainName": "string"
}
```

Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

<h2 id="tocS_FieldNameList">FieldNameList</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamelist"></a>
<a id="schema_FieldNameList"></a>
<a id="tocSfieldnamelist"></a>
<a id="tocsfieldnamelist"></a>

```json
[
  "string"
]
```

A list of field names.

<h2 id="tocS_CreateDomainRequest">CreateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedomainrequest"></a>
<a id="schema_CreateDomainRequest"></a>
<a id="tocScreatedomainrequest"></a>
<a id="tocscreatedomainrequest"></a>

```json
{
  "DomainName": {}
}
```

Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
{
  "DomainId": "string",
  "DomainName": "string",
  "ARN": "string",
  "Created": {},
  "Deleted": {},
  "DocService": {
    "Endpoint": "string"
  },
  "SearchService": {
    "Endpoint": "string"
  },
  "RequiresIndexDocuments": {},
  "Processing": {},
  "SearchInstanceType": {},
  "SearchPartitionCount": {},
  "SearchInstanceCount": {},
  "Limits": {
    "MaximumReplicationCount": 1,
    "MaximumPartitionCount": 1
  }
}
```

The current status of the search domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainId|[DomainId](#schemadomainid)|true|none|An internally generated unique identifier for a domain.|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|ARN|[ARN](#schemaarn)|false|none|The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.|
|Created|object|false|none|none|
|Deleted|object|false|none|none|
|DocService|object|false|none|none|
|SearchService|object|false|none|none|
|RequiresIndexDocuments|object|true|none|none|
|Processing|object|false|none|none|
|SearchInstanceType|object|false|none|none|
|SearchPartitionCount|object|false|none|none|
|SearchInstanceCount|object|false|none|none|
|Limits|[Limits](#schemalimits)|false|none|none|

<h2 id="tocS_FieldValue">FieldValue</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalue"></a>
<a id="schema_FieldValue"></a>
<a id="tocSfieldvalue"></a>
<a id="tocsfieldvalue"></a>

```json
"string"
```

The value of a field attribute.

<h2 id="tocS_FieldNameCommaList">FieldNameCommaList</h2>
<!-- backwards compatibility -->
<a id="schemafieldnamecommalist"></a>
<a id="schema_FieldNameCommaList"></a>
<a id="tocSfieldnamecommalist"></a>
<a id="tocsfieldnamecommalist"></a>

```json
"string"
```

<h2 id="tocS_FieldName">FieldName</h2>
<!-- backwards compatibility -->
<a id="schemafieldname"></a>
<a id="schema_FieldName"></a>
<a id="tocSfieldname"></a>
<a id="tocsfieldname"></a>

```json
"string"
```

<p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>

<h2 id="tocS_DefineAnalysisSchemeRequest">DefineAnalysisSchemeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefineanalysisschemerequest"></a>
<a id="schema_DefineAnalysisSchemeRequest"></a>
<a id="tocSdefineanalysisschemerequest"></a>
<a id="tocsdefineanalysisschemerequest"></a>

```json
{
  "DomainName": "string",
  "AnalysisScheme": {
    "AnalysisSchemeName": "string",
    "AnalysisSchemeLanguage": "ar",
    "AnalysisOptions": {
      "Synonyms": {},
      "Stopwords": {},
      "StemmingDictionary": {},
      "JapaneseTokenizationDictionary": {},
      "AlgorithmicStemming": {}
    }
  }
}
```

Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|AnalysisScheme|[AnalysisScheme](#schemaanalysisscheme)|true|none|Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.|

<h2 id="tocS_Expression">Expression</h2>
<!-- backwards compatibility -->
<a id="schemaexpression"></a>
<a id="schema_Expression"></a>
<a id="tocSexpression"></a>
<a id="tocsexpression"></a>

```json
{
  "ExpressionName": "string",
  "ExpressionValue": "string"
}
```

A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpressionName|[StandardName](#schemastandardname)|true|none|Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).|
|ExpressionValue|[ExpressionValue](#schemaexpressionvalue)|true|none|The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.|

<h2 id="tocS_DefineExpressionRequest">DefineExpressionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefineexpressionrequest"></a>
<a id="schema_DefineExpressionRequest"></a>
<a id="tocSdefineexpressionrequest"></a>
<a id="tocsdefineexpressionrequest"></a>

```json
{
  "DomainName": "string",
  "Expression": {
    "ExpressionName": "string",
    "ExpressionValue": "string"
  }
}
```

Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|Expression|[Expression](#schemaexpression)|true|none|A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. |

<h2 id="tocS_ExpressionStatus">ExpressionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionstatus"></a>
<a id="schema_ExpressionStatus"></a>
<a id="tocSexpressionstatus"></a>
<a id="tocsexpressionstatus"></a>

```json
{
  "Options": {
    "ExpressionName": "string",
    "ExpressionValue": "string"
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The value of an <code>Expression</code> and its current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_IndexField">IndexField</h2>
<!-- backwards compatibility -->
<a id="schemaindexfield"></a>
<a id="schema_IndexField"></a>
<a id="tocSindexfield"></a>
<a id="tocsindexfield"></a>

```json
{
  "IndexFieldName": {},
  "IndexFieldType": "int",
  "IntOptions": {
    "DefaultValue": {},
    "SourceField": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {},
    "SortEnabled": {}
  },
  "DoubleOptions": {
    "DefaultValue": {},
    "SourceField": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {},
    "SortEnabled": {}
  },
  "LiteralOptions": {
    "DefaultValue": {},
    "SourceField": "string",
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {},
    "SortEnabled": {}
  },
  "TextOptions": {
    "DefaultValue": {},
    "SourceField": "string",
    "ReturnEnabled": {},
    "SortEnabled": {},
    "HighlightEnabled": {},
    "AnalysisScheme": {}
  },
  "DateOptions": {
    "DefaultValue": {},
    "SourceField": "string",
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {},
    "SortEnabled": {}
  },
  "LatLonOptions": {
    "DefaultValue": {},
    "SourceField": "string",
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {},
    "SortEnabled": {}
  },
  "IntArrayOptions": {
    "DefaultValue": {},
    "SourceFields": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {}
  },
  "DoubleArrayOptions": {
    "DefaultValue": {},
    "SourceFields": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {}
  },
  "LiteralArrayOptions": {
    "DefaultValue": {},
    "SourceFields": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {}
  },
  "TextArrayOptions": {
    "DefaultValue": {},
    "SourceFields": {},
    "ReturnEnabled": {},
    "HighlightEnabled": {},
    "AnalysisScheme": {}
  },
  "DateArrayOptions": {
    "DefaultValue": {},
    "SourceFields": {},
    "FacetEnabled": {},
    "SearchEnabled": {},
    "ReturnEnabled": {}
  }
}
```

Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexFieldName|object|true|none|none|
|IndexFieldType|[IndexFieldType](#schemaindexfieldtype)|true|none|The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.|
|IntOptions|[IntOptions](#schemaintoptions)|false|none|Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.|
|DoubleOptions|[DoubleOptions](#schemadoubleoptions)|false|none|Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.|
|LiteralOptions|[LiteralOptions](#schemaliteraloptions)|false|none|Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.|
|TextOptions|[TextOptions](#schematextoptions)|false|none|Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.|
|DateOptions|[DateOptions](#schemadateoptions)|false|none|Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.|
|LatLonOptions|[LatLonOptions](#schemalatlonoptions)|false|none|Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.|
|IntArrayOptions|[IntArrayOptions](#schemaintarrayoptions)|false|none|Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.|
|DoubleArrayOptions|[DoubleArrayOptions](#schemadoublearrayoptions)|false|none|Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.|
|LiteralArrayOptions|[LiteralArrayOptions](#schemaliteralarrayoptions)|false|none|Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.|
|TextArrayOptions|[TextArrayOptions](#schematextarrayoptions)|false|none|Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.|
|DateArrayOptions|[DateArrayOptions](#schemadatearrayoptions)|false|none|Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|IndexFieldType|int|
|IndexFieldType|double|
|IndexFieldType|literal|
|IndexFieldType|text|
|IndexFieldType|date|
|IndexFieldType|latlon|
|IndexFieldType|int-array|
|IndexFieldType|double-array|
|IndexFieldType|literal-array|
|IndexFieldType|text-array|
|IndexFieldType|date-array|

<h2 id="tocS_DefineIndexFieldRequest">DefineIndexFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefineindexfieldrequest"></a>
<a id="schema_DefineIndexFieldRequest"></a>
<a id="tocSdefineindexfieldrequest"></a>
<a id="tocsdefineindexfieldrequest"></a>

```json
{
  "DomainName": "string",
  "IndexField": {
    "IndexFieldName": {},
    "IndexFieldType": "int",
    "IntOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "DoubleOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LiteralOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "TextOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "ReturnEnabled": {},
      "SortEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LatLonOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "IntArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "DoubleArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "LiteralArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "TextArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "ReturnEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    }
  }
}
```

Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|IndexField|object|true|none|none|

<h2 id="tocS_IndexFieldStatus">IndexFieldStatus</h2>
<!-- backwards compatibility -->
<a id="schemaindexfieldstatus"></a>
<a id="schema_IndexFieldStatus"></a>
<a id="tocSindexfieldstatus"></a>
<a id="tocsindexfieldstatus"></a>

```json
{
  "Options": {
    "IndexFieldName": {},
    "IndexFieldType": "int",
    "IntOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "DoubleOptions": {
      "DefaultValue": {},
      "SourceField": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LiteralOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "TextOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "ReturnEnabled": {},
      "SortEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "LatLonOptions": {
      "DefaultValue": {},
      "SourceField": "string",
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {},
      "SortEnabled": {}
    },
    "IntArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "DoubleArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "LiteralArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    },
    "TextArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "ReturnEnabled": {},
      "HighlightEnabled": {},
      "AnalysisScheme": {}
    },
    "DateArrayOptions": {
      "DefaultValue": {},
      "SourceFields": {},
      "FacetEnabled": {},
      "SearchEnabled": {},
      "ReturnEnabled": {}
    }
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The value of an <code>IndexField</code> and its current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[IndexField](#schemaindexfield)|true|none|Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_Suggester">Suggester</h2>
<!-- backwards compatibility -->
<a id="schemasuggester"></a>
<a id="schema_Suggester"></a>
<a id="tocSsuggester"></a>
<a id="tocssuggester"></a>

```json
{
  "SuggesterName": "string",
  "DocumentSuggesterOptions": {
    "SourceField": {},
    "FuzzyMatching": {},
    "SortExpression": {}
  }
}
```

Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuggesterName|[StandardName](#schemastandardname)|true|none|Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).|
|DocumentSuggesterOptions|[DocumentSuggesterOptions](#schemadocumentsuggesteroptions)|true|none|Options for a search suggester.|

<h2 id="tocS_DefineSuggesterRequest">DefineSuggesterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadefinesuggesterrequest"></a>
<a id="schema_DefineSuggesterRequest"></a>
<a id="tocSdefinesuggesterrequest"></a>
<a id="tocsdefinesuggesterrequest"></a>

```json
{
  "DomainName": "string",
  "Suggester": {
    "SuggesterName": "string",
    "DocumentSuggesterOptions": {
      "SourceField": {},
      "FuzzyMatching": {},
      "SortExpression": {}
    }
  }
}
```

Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|Suggester|[Suggester](#schemasuggester)|true|none|Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. |

<h2 id="tocS_SuggesterStatus">SuggesterStatus</h2>
<!-- backwards compatibility -->
<a id="schemasuggesterstatus"></a>
<a id="schema_SuggesterStatus"></a>
<a id="tocSsuggesterstatus"></a>
<a id="tocssuggesterstatus"></a>

```json
{
  "Options": {
    "SuggesterName": "string",
    "DocumentSuggesterOptions": {
      "SourceField": {},
      "FuzzyMatching": {},
      "SortExpression": {}
    }
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The value of a <code>Suggester</code> and its current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[Suggester](#schemasuggester)|true|none|Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. |
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_DeleteAnalysisSchemeRequest">DeleteAnalysisSchemeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteanalysisschemerequest"></a>
<a id="schema_DeleteAnalysisSchemeRequest"></a>
<a id="tocSdeleteanalysisschemerequest"></a>
<a id="tocsdeleteanalysisschemerequest"></a>

```json
{
  "DomainName": "string",
  "AnalysisSchemeName": {}
}
```

Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|AnalysisSchemeName|object|true|none|none|

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{
  "DomainName": {}
}
```

Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DeleteExpressionRequest">DeleteExpressionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteexpressionrequest"></a>
<a id="schema_DeleteExpressionRequest"></a>
<a id="tocSdeleteexpressionrequest"></a>
<a id="tocsdeleteexpressionrequest"></a>

```json
{
  "DomainName": "string",
  "ExpressionName": {}
}
```

Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|ExpressionName|object|true|none|none|

<h2 id="tocS_DeleteIndexFieldRequest">DeleteIndexFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteindexfieldrequest"></a>
<a id="schema_DeleteIndexFieldRequest"></a>
<a id="tocSdeleteindexfieldrequest"></a>
<a id="tocsdeleteindexfieldrequest"></a>

```json
{
  "DomainName": "string",
  "IndexFieldName": {}
}
```

Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|IndexFieldName|object|true|none|none|

<h2 id="tocS_DeleteSuggesterRequest">DeleteSuggesterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuggesterrequest"></a>
<a id="schema_DeleteSuggesterRequest"></a>
<a id="tocSdeletesuggesterrequest"></a>
<a id="tocsdeletesuggesterrequest"></a>

```json
{
  "DomainName": "string",
  "SuggesterName": {}
}
```

Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|SuggesterName|object|true|none|none|

<h2 id="tocS_StandardNameList">StandardNameList</h2>
<!-- backwards compatibility -->
<a id="schemastandardnamelist"></a>
<a id="schema_StandardNameList"></a>
<a id="tocSstandardnamelist"></a>
<a id="tocsstandardnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeAnalysisSchemesRequest">DescribeAnalysisSchemesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeanalysisschemesrequest"></a>
<a id="schema_DescribeAnalysisSchemesRequest"></a>
<a id="tocSdescribeanalysisschemesrequest"></a>
<a id="tocsdescribeanalysisschemesrequest"></a>

```json
{
  "DomainName": {},
  "AnalysisSchemeNames": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|AnalysisSchemeNames|object|false|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_DescribeAvailabilityOptionsRequest">DescribeAvailabilityOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeavailabilityoptionsrequest"></a>
<a id="schema_DescribeAvailabilityOptionsRequest"></a>
<a id="tocSdescribeavailabilityoptionsrequest"></a>
<a id="tocsdescribeavailabilityoptionsrequest"></a>

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_DescribeDomainEndpointOptionsRequest">DescribeDomainEndpointOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainendpointoptionsrequest"></a>
<a id="schema_DescribeDomainEndpointOptionsRequest"></a>
<a id="tocSdescribedomainendpointoptionsrequest"></a>
<a id="tocsdescribedomainendpointoptionsrequest"></a>

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_DomainEndpointOptionsStatus">DomainEndpointOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainendpointoptionsstatus"></a>
<a id="schema_DomainEndpointOptionsStatus"></a>
<a id="tocSdomainendpointoptionsstatus"></a>
<a id="tocsdomainendpointoptionsstatus"></a>

```json
{
  "Options": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The configuration and status of the domain's endpoint options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_DomainNameList">DomainNameList</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamelist"></a>
<a id="schema_DomainNameList"></a>
<a id="tocSdomainnamelist"></a>
<a id="tocsdomainnamelist"></a>

```json
[
  "string"
]
```

A list of domain names.

<h2 id="tocS_DescribeDomainsRequest">DescribeDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainsrequest"></a>
<a id="schema_DescribeDomainsRequest"></a>
<a id="tocSdescribedomainsrequest"></a>
<a id="tocsdescribedomainsrequest"></a>

```json
{
  "DomainNames": {}
}
```

Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNames|object|false|none|none|

<h2 id="tocS_DomainStatusList">DomainStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatuslist"></a>
<a id="schema_DomainStatusList"></a>
<a id="tocSdomainstatuslist"></a>
<a id="tocsdomainstatuslist"></a>

```json
[
  {
    "DomainId": "string",
    "DomainName": "string",
    "ARN": "string",
    "Created": {},
    "Deleted": {},
    "DocService": {
      "Endpoint": "string"
    },
    "SearchService": {
      "Endpoint": "string"
    },
    "RequiresIndexDocuments": {},
    "Processing": {},
    "SearchInstanceType": {},
    "SearchPartitionCount": {},
    "SearchInstanceCount": {},
    "Limits": {
      "MaximumReplicationCount": 1,
      "MaximumPartitionCount": 1
    }
  }
]
```

A list that contains the status of each requested domain.

<h2 id="tocS_DescribeExpressionsRequest">DescribeExpressionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeexpressionsrequest"></a>
<a id="schema_DescribeExpressionsRequest"></a>
<a id="tocSdescribeexpressionsrequest"></a>
<a id="tocsdescribeexpressionsrequest"></a>

```json
{
  "DomainName": {},
  "ExpressionNames": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ExpressionNames|object|false|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_ExpressionStatusList">ExpressionStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaexpressionstatuslist"></a>
<a id="schema_ExpressionStatusList"></a>
<a id="tocSexpressionstatuslist"></a>
<a id="tocsexpressionstatuslist"></a>

```json
[
  {
    "Options": {
      "ExpressionName": "string",
      "ExpressionValue": "string"
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
]
```

Contains the status of multiple expressions.

<h2 id="tocS_DynamicFieldNameList">DynamicFieldNameList</h2>
<!-- backwards compatibility -->
<a id="schemadynamicfieldnamelist"></a>
<a id="schema_DynamicFieldNameList"></a>
<a id="tocSdynamicfieldnamelist"></a>
<a id="tocsdynamicfieldnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeIndexFieldsRequest">DescribeIndexFieldsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeindexfieldsrequest"></a>
<a id="schema_DescribeIndexFieldsRequest"></a>
<a id="tocSdescribeindexfieldsrequest"></a>
<a id="tocsdescribeindexfieldsrequest"></a>

```json
{
  "DomainName": {},
  "FieldNames": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|FieldNames|object|false|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_IndexFieldStatusList">IndexFieldStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaindexfieldstatuslist"></a>
<a id="schema_IndexFieldStatusList"></a>
<a id="tocSindexfieldstatuslist"></a>
<a id="tocsindexfieldstatuslist"></a>

```json
[
  {
    "Options": {
      "IndexFieldName": {},
      "IndexFieldType": "int",
      "IntOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "DoubleOptions": {
        "DefaultValue": {},
        "SourceField": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LiteralOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "TextOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "ReturnEnabled": {},
        "SortEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "LatLonOptions": {
        "DefaultValue": {},
        "SourceField": "string",
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {},
        "SortEnabled": {}
      },
      "IntArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "DoubleArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "LiteralArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      },
      "TextArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "ReturnEnabled": {},
        "HighlightEnabled": {},
        "AnalysisScheme": {}
      },
      "DateArrayOptions": {
        "DefaultValue": {},
        "SourceFields": {},
        "FacetEnabled": {},
        "SearchEnabled": {},
        "ReturnEnabled": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
]
```

Contains the status of multiple index fields.

<h2 id="tocS_DescribeScalingParametersRequest">DescribeScalingParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingparametersrequest"></a>
<a id="schema_DescribeScalingParametersRequest"></a>
<a id="tocSdescribescalingparametersrequest"></a>
<a id="tocsdescribescalingparametersrequest"></a>

```json
{
  "DomainName": "string"
}
```

Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

<h2 id="tocS_ScalingParametersStatus">ScalingParametersStatus</h2>
<!-- backwards compatibility -->
<a id="schemascalingparametersstatus"></a>
<a id="schema_ScalingParametersStatus"></a>
<a id="tocSscalingparametersstatus"></a>
<a id="tocsscalingparametersstatus"></a>

```json
{
  "Options": {
    "DesiredInstanceType": {},
    "DesiredReplicationCount": {},
    "DesiredPartitionCount": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The status and configuration of a search domain's scaling parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|[ScalingParameters](#schemascalingparameters)|true|none|The desired instance type and desired number of replicas of each index partition.|
|Status|[OptionStatus](#schemaoptionstatus)|true|none|The status of domain configuration option.|

<h2 id="tocS_DescribeServiceAccessPoliciesRequest">DescribeServiceAccessPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceaccesspoliciesrequest"></a>
<a id="schema_DescribeServiceAccessPoliciesRequest"></a>
<a id="tocSdescribeserviceaccesspoliciesrequest"></a>
<a id="tocsdescribeserviceaccesspoliciesrequest"></a>

```json
{
  "DomainName": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_DescribeSuggestersRequest">DescribeSuggestersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribesuggestersrequest"></a>
<a id="schema_DescribeSuggestersRequest"></a>
<a id="tocSdescribesuggestersrequest"></a>
<a id="tocsdescribesuggestersrequest"></a>

```json
{
  "DomainName": {},
  "SuggesterNames": {},
  "Deployed": {}
}
```

Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|SuggesterNames|object|false|none|none|
|Deployed|object|false|none|none|

<h2 id="tocS_SuggesterStatusList">SuggesterStatusList</h2>
<!-- backwards compatibility -->
<a id="schemasuggesterstatuslist"></a>
<a id="schema_SuggesterStatusList"></a>
<a id="tocSsuggesterstatuslist"></a>
<a id="tocssuggesterstatuslist"></a>

```json
[
  {
    "Options": {
      "SuggesterName": "string",
      "DocumentSuggesterOptions": {
        "SourceField": {},
        "FuzzyMatching": {},
        "SortExpression": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  }
]
```

Contains the status of multiple suggesters.

<h2 id="tocS_SuggesterFuzzyMatching">SuggesterFuzzyMatching</h2>
<!-- backwards compatibility -->
<a id="schemasuggesterfuzzymatching"></a>
<a id="schema_SuggesterFuzzyMatching"></a>
<a id="tocSsuggesterfuzzymatching"></a>
<a id="tocssuggesterfuzzymatching"></a>

```json
"none"
```

<h2 id="tocS_DomainEndpointOptions">DomainEndpointOptions</h2>
<!-- backwards compatibility -->
<a id="schemadomainendpointoptions"></a>
<a id="schema_DomainEndpointOptions"></a>
<a id="tocSdomainendpointoptions"></a>
<a id="tocsdomainendpointoptions"></a>

```json
{
  "EnforceHTTPS": {},
  "TLSSecurityPolicy": {}
}
```

The domain's endpoint options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnforceHTTPS|object|false|none|none|
|TLSSecurityPolicy|object|false|none|none|

<h2 id="tocS_DomainId">DomainId</h2>
<!-- backwards compatibility -->
<a id="schemadomainid"></a>
<a id="schema_DomainId"></a>
<a id="tocSdomainid"></a>
<a id="tocsdomainid"></a>

```json
"string"
```

An internally generated unique identifier for a domain.

<h2 id="tocS_DomainNameMap">DomainNameMap</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamemap"></a>
<a id="schema_DomainNameMap"></a>
<a id="tocSdomainnamemap"></a>
<a id="tocsdomainnamemap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A collection of domain names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[APIVersion](#schemaapiversion)|false|none|The Amazon CloudSearch API version for a domain: 2011-02-01 or 2013-01-01.|

<h2 id="tocS_ServiceEndpoint">ServiceEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaserviceendpoint"></a>
<a id="schema_ServiceEndpoint"></a>
<a id="tocSserviceendpoint"></a>
<a id="tocsserviceendpoint"></a>

```json
{
  "Endpoint": "string"
}
```

The endpoint to which service requests can be submitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|[ServiceUrl](#schemaserviceurl)|false|none|The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.|

<h2 id="tocS_SearchInstanceType">SearchInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemasearchinstancetype"></a>
<a id="schema_SearchInstanceType"></a>
<a id="tocSsearchinstancetype"></a>
<a id="tocssearchinstancetype"></a>

```json
"string"
```

The instance type (such as <code>search.m1.small</code>) that is being used to process search requests.

<h2 id="tocS_PartitionCount">PartitionCount</h2>
<!-- backwards compatibility -->
<a id="schemapartitioncount"></a>
<a id="schema_PartitionCount"></a>
<a id="tocSpartitioncount"></a>
<a id="tocspartitioncount"></a>

```json
1
```

The number of partitions used to hold the domain's index.

<h2 id="tocS_InstanceCount">InstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancecount"></a>
<a id="schema_InstanceCount"></a>
<a id="tocSinstancecount"></a>
<a id="tocsinstancecount"></a>

```json
1
```

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
{
  "MaximumReplicationCount": 1,
  "MaximumPartitionCount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumReplicationCount|[MaximumReplicationCount](#schemamaximumreplicationcount)|true|none|none|
|MaximumPartitionCount|[MaximumPartitionCount](#schemamaximumpartitioncount)|true|none|none|

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_IndexDocumentsRequest">IndexDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaindexdocumentsrequest"></a>
<a id="schema_IndexDocumentsRequest"></a>
<a id="tocSindexdocumentsrequest"></a>
<a id="tocsindexdocumentsrequest"></a>

```json
{
  "DomainName": "string"
}
```

Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_MaximumReplicationCount">MaximumReplicationCount</h2>
<!-- backwards compatibility -->
<a id="schemamaximumreplicationcount"></a>
<a id="schema_MaximumReplicationCount"></a>
<a id="tocSmaximumreplicationcount"></a>
<a id="tocsmaximumreplicationcount"></a>

```json
1
```

<h2 id="tocS_MaximumPartitionCount">MaximumPartitionCount</h2>
<!-- backwards compatibility -->
<a id="schemamaximumpartitioncount"></a>
<a id="schema_MaximumPartitionCount"></a>
<a id="tocSmaximumpartitioncount"></a>
<a id="tocsmaximumpartitioncount"></a>

```json
1
```

<h2 id="tocS_OptionState">OptionState</h2>
<!-- backwards compatibility -->
<a id="schemaoptionstate"></a>
<a id="schema_OptionState"></a>
<a id="tocSoptionstate"></a>
<a id="tocsoptionstate"></a>

```json
"RequiresIndexDocuments"
```

<p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>

<h2 id="tocS_UpdateTimestamp">UpdateTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimestamp"></a>
<a id="schema_UpdateTimestamp"></a>
<a id="tocSupdatetimestamp"></a>
<a id="tocsupdatetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ScalingParameters">ScalingParameters</h2>
<!-- backwards compatibility -->
<a id="schemascalingparameters"></a>
<a id="schema_ScalingParameters"></a>
<a id="tocSscalingparameters"></a>
<a id="tocsscalingparameters"></a>

```json
{
  "DesiredInstanceType": {},
  "DesiredReplicationCount": {},
  "DesiredPartitionCount": {}
}
```

The desired instance type and desired number of replicas of each index partition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredInstanceType|object|false|none|none|
|DesiredReplicationCount|object|false|none|none|
|DesiredPartitionCount|object|false|none|none|

<h2 id="tocS_ServiceUrl">ServiceUrl</h2>
<!-- backwards compatibility -->
<a id="schemaserviceurl"></a>
<a id="schema_ServiceUrl"></a>
<a id="tocSserviceurl"></a>
<a id="tocsserviceurl"></a>

```json
"string"
```

The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.

<h2 id="tocS_Word">Word</h2>
<!-- backwards compatibility -->
<a id="schemaword"></a>
<a id="schema_Word"></a>
<a id="tocSword"></a>
<a id="tocsword"></a>

```json
"string"
```

<h2 id="tocS_UpdateAvailabilityOptionsRequest">UpdateAvailabilityOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateavailabilityoptionsrequest"></a>
<a id="schema_UpdateAvailabilityOptionsRequest"></a>
<a id="tocSupdateavailabilityoptionsrequest"></a>
<a id="tocsupdateavailabilityoptionsrequest"></a>

```json
{
  "DomainName": "string",
  "MultiAZ": {}
}
```

Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|MultiAZ|object|true|none|none|

<h2 id="tocS_UpdateDomainEndpointOptionsRequest">UpdateDomainEndpointOptionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainendpointoptionsrequest"></a>
<a id="schema_UpdateDomainEndpointOptionsRequest"></a>
<a id="tocSupdatedomainendpointoptionsrequest"></a>
<a id="tocsupdatedomainendpointoptionsrequest"></a>

```json
{
  "DomainName": {},
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {}
  }
}
```

Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DomainEndpointOptions|object|true|none|none|

<h2 id="tocS_UpdateScalingParametersRequest">UpdateScalingParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescalingparametersrequest"></a>
<a id="schema_UpdateScalingParametersRequest"></a>
<a id="tocSupdatescalingparametersrequest"></a>
<a id="tocsupdatescalingparametersrequest"></a>

```json
{
  "DomainName": "string",
  "ScalingParameters": {
    "DesiredInstanceType": {},
    "DesiredReplicationCount": {},
    "DesiredPartitionCount": {}
  }
}
```

Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|ScalingParameters|[ScalingParameters](#schemascalingparameters)|true|none|The desired instance type and desired number of replicas of each index partition.|

<h2 id="tocS_UpdateServiceAccessPoliciesRequest">UpdateServiceAccessPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceaccesspoliciesrequest"></a>
<a id="schema_UpdateServiceAccessPoliciesRequest"></a>
<a id="tocSupdateserviceaccesspoliciesrequest"></a>
<a id="tocsupdateserviceaccesspoliciesrequest"></a>

```json
{
  "DomainName": "string",
  "AccessPolicies": {}
}
```

Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|AccessPolicies|object|true|none|none|
