<h1 id="bc-laws">BC Laws v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

BC Laws is an electronic library providing free public access to the laws of British Columbia. BC Laws is hosted by the Queen's Printer of British Columbia and published in partnership with the Ministry of Justice and the Law Clerk of the Legislative Assembly.BC Laws contains a comprehensive collection of BC legislation and related materials. It is available on the internet in two forms:First: The library is available as a web site in which users can browse and search the laws of British Columbia.Second: The library is available as a portal to legislation in raw XML data format, accessible via the BC Laws API2. This direct access to raw data is intended to enable third parties to build or add their own custom applications based on the structure of the data and all the associated search functionality inherent in that structure. The BC Laws website itself is an example of one such application. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

Base URLs:

* <a href="http://www.bclaws.ca/civix">http://www.bclaws.ca/civix</a>

* <a href="https://www.bclaws.ca/civix">https://www.bclaws.ca/civix</a>

<a href="http://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
License: <a href="http://www.bclaws.ca/standards/2014/QP-License_1.0.html">Queen's Printer License</a>

<a href="ttp://www.bclaws.ca/civix/template/complete/api/index.html">Additional API Documentation</a>

<h1 id="bc-laws-content">content</h1>

## Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library

> Code samples

```bash
curl https://example.com/content/complete
```

`GET /content/{aspectId}`

<h3 id="describes-the-documents-and-directories-available-within-a-specific-aspect-content-group-of-the-bclaws-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="describes-the-documents-and-directories-available-within-a-specific-aspect-content-group-of-the-bclaws-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Lists the metadata available for the specified index or directory from the BCLaws legislative respository

> Code samples

```bash
curl https://example.com/content/complete/statreg
```

`GET /content/{aspectId}/{civixDocumentId}`

<h3 id="lists-the-metadata-available-for-the-specified-index-or-directory-from-the-bclaws-legislative-respository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|civixDocumentId|path|string|true|The document identification code for an index or directory|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="lists-the-metadata-available-for-the-specified-index-or-directory-from-the-bclaws-legislative-respository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-laws-document">document</h1>

## Retrieves a specific document from the BCLaws legislative repository (HTML format)

> Code samples

```bash
curl https://example.com/document/id/complete/statreg/01009_01
```

`GET /document/id/{aspectId}/{civixIndexId}/{civixDocumentId}`

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-html-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|civixIndexId|path|string|true|Index identification code|
|civixDocumentId|path|string|true|The document identification code for an index or directory|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-html-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)

> Code samples

```bash
curl https://example.com/document/id/complete/statreg/01009_01/search/water
```

`GET /document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}`

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-with-search-text-highlighted-html-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|civixIndexId|path|string|true|Index identification code|
|civixDocumentId|path|string|true|The document identification code for an index or directory|
|searchString|path|string|true|The text to search for within the document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-with-search-text-highlighted-html-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a specific document from the BCLaws legislative repository (XML format)

> Code samples

```bash
curl https://example.com/document/id/complete/statreg/01009_01/xml
```

`GET /document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml`

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-xml-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|civixIndexId|path|string|true|Index identification code|
|civixDocumentId|path|string|true|The document identification code for an index or directory|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-xml-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

> Code samples

```bash
curl https://example.com/document/id/complete/statreg/01009_01/xml/search/water
```

`GET /document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}`

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-with-search-text-highlighted-xml-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|civixIndexId|path|string|true|Index identification code|
|civixDocumentId|path|string|true|The document identification code for an index or directory|
|searchString|path|string|true|The text to search for within the document|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="retrieves-a-specific-document-from-the-bclaws-legislative-repository-with-search-text-highlighted-xml-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List documents and directories within the aspect.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="bc-laws-search">search</h1>

## A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository

> Code samples

```bash
curl 'https://example.com/search/complete/fullsearch?q=water&s=0&e=20&nFrag=5&lFrag=100'
```

`GET /search/{aspectId}/fullsearch`

<h3 id="a-listing-of-metadata-available-for-the-specified-aspect-and-search-term-from-the-bclaws-legislative-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aspectId|path|string|true|The identifier of the 'aspect' (content group) to search|
|q|query|string|true|query term|
|s|query|string|true|first hit (start index)|
|e|query|integer|true|last hit (end index)|
|nFrag|query|integer|true|number of fragment snippets to return (< 10)|
|lFrag|query|integer|true|length of fragment snippets (< 200)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspectId|complete|
|aspectId|corpreg|
|aspectId|bcgaz1|
|aspectId|bcgaz2|
|aspectId|oic|
|aspectId|psl|
|aspectId|ecb|
|aspectId|hscr|
|aspectId|arch_oic|

<h3 id="a-listing-of-metadata-available-for-the-specified-aspect-and-search-term-from-the-bclaws-legislative-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of metadata available for the specified aspect and search term|None|

<aside class="success">
This operation does not require authentication
</aside>
