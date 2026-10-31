<h1 id="geodesystemscom443">geodesystems.com:443 v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Search for data in lots of places - manage your documents, photos and critical business knowledge - communicate and coordinate with blogs, interactive wikis, and data integration dashboards.

Base URLs:

* <a href="https://geodesystems.com:443/">https://geodesystems.com:443/</a>

# Authentication

- HTTP Authentication, scheme: basic Basic HTTP Authentication

<h1 id="geodesystemscom443-servicemediatabularextractsheet">service/media_tabular_extractsheet</h1>

 API for Extract sheets

## API for Extract sheets

<a id="opIdmedia_tabular_extractsheet"></a>

> Code samples

```bash
curl 'https://example.com/repository/entry/show?output=media_tabular_extractsheet&entryid=string'
```

`GET /repository/entry/show`

API to call: Extract sheets

<h3 id="api-for-extract-sheets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|output|query|string|true|Output type  -don't change|
|entryid|query|string|true|Entry ID|
|arg1|query|string|false|Sheets|

<h3 id="api-for-extract-sheets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-type2017boulderelectionexpenditures">type/2017_boulder_election_expenditures</h1>

Search API for '2017 Boulder Election Expenditures' entry type

## Search API for '2017 Boulder Election Expenditures' entry type

<a id="opIdsearch_2017_boulder_election_expenditures"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/2017_boulder_election_expenditures
```

`GET /repository/search/type/2017_boulder_election_expenditures`

API to search for entries of type 2017 Boulder Election Expenditures

<h3 id="search-api-for-2017-boulder-election-expenditures-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_2017_boulder_election_expenditures.committee|query|string|false|Committee|
|search.db_2017_boulder_election_expenditures.transaction_date|query|string|false|Transaction Date|
|search.db_2017_boulder_election_expenditures.name|query|string|false|Name|
|search.db_2017_boulder_election_expenditures.street|query|string|false|Street|
|search.db_2017_boulder_election_expenditures.city|query|string|false|City|
|search.db_2017_boulder_election_expenditures.state|query|string|false|State|
|search.db_2017_boulder_election_expenditures.zip|query|string|false|Zip|
|search.db_2017_boulder_election_expenditures.expenditure|query|number(double)|false|Expenditure|
|search.db_2017_boulder_election_expenditures.purpose|query|string|false|Purpose|

<h3 id="search-api-for-2017-boulder-election-expenditures-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeany">type/any</h1>

Search API for 'Any file type' entry type

## Search API for 'Any file type' entry type

<a id="opIdsearch_any"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/any
```

`GET /repository/search/type/any`

API to search for entries of type Any file type

<h3 id="search-api-for-any-file-type-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-any-file-type-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebeforeafter">type/beforeafter</h1>

Search API for 'Before and After Images' entry type

## Search API for 'Before and After Images' entry type

<a id="opIdsearch_beforeafter"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/beforeafter
```

`GET /repository/search/type/beforeafter`

API to search for entries of type Before and After Images

<h3 id="search-api-for-before-and-after-images-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-before-and-after-images-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiblio">type/biblio</h1>

Search API for 'Bibliographic Entry' entry type

## Search API for 'Bibliographic Entry' entry type

<a id="opIdsearch_biblio"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/biblio
```

`GET /repository/search/type/biblio`

API to search for entries of type Bibliographic Entry

<h3 id="search-api-for-bibliographic-entry-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.biblio.primary_author|query|string|false|Primary Author|
|search.biblio.type|query|string|false|Publication Type|
|search.biblio.institution|query|string|false|Institution|
|search.biblio.other_authors|query|string|false|Other Authors|
|search.biblio.publication|query|string|false|Publication|

<h3 id="search-api-for-bibliographic-entry-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiodicom">type/bio_dicom</h1>

Search API for 'DICOM File' entry type

## Search API for 'DICOM File' entry type

<a id="opIdsearch_bio_dicom"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_dicom
```

`GET /repository/search/type/bio_dicom`

API to search for entries of type DICOM File

<h3 id="search-api-for-dicom-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-dicom-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiodicomtest">type/bio_dicom_test</h1>

Search API for 'DICOM Test File' entry type

## Search API for 'DICOM Test File' entry type

<a id="opIdsearch_bio_dicom_test"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_dicom_test
```

`GET /repository/search/type/bio_dicom_test`

API to search for entries of type DICOM Test File

<h3 id="search-api-for-dicom-test-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.bio_dicom_test.PatientName|query|string|false|Patient Name|
|search.bio_dicom_test.PatientID|query|string|false|Patient ID|

<h3 id="search-api-for-dicom-test-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiofasta">type/bio_fasta</h1>

Search API for 'FASTA File' entry type

## Search API for 'FASTA File' entry type

<a id="opIdsearch_bio_fasta"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_fasta
```

`GET /repository/search/type/bio_fasta`

API to search for entries of type FASTA File

<h3 id="search-api-for-fasta-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-fasta-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiofastq">type/bio_fastq</h1>

Search API for 'FASTQ File' entry type

## Search API for 'FASTQ File' entry type

<a id="opIdsearch_bio_fastq"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_fastq
```

`GET /repository/search/type/bio_fastq`

API to search for entries of type FASTQ File

<h3 id="search-api-for-fastq-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-fastq-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiohmmerindex">type/bio_hmmer_index</h1>

Search API for 'HMMER Index File' entry type

## Search API for 'HMMER Index File' entry type

<a id="opIdsearch_bio_hmmer_index"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_hmmer_index
```

`GET /repository/search/type/bio_hmmer_index`

API to search for entries of type HMMER Index File

<h3 id="search-api-for-hmmer-index-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-hmmer-index-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioometiff">type/bio_ome_tiff</h1>

Search API for 'OME TIFF File' entry type

## Search API for 'OME TIFF File' entry type

<a id="opIdsearch_bio_ome_tiff"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ome_tiff
```

`GET /repository/search/type/bio_ome_tiff`

API to search for entries of type OME TIFF File

<h3 id="search-api-for-ome-tiff-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-ome-tiff-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologyassay">type/bio_ontology_assay</h1>

Search API for 'Assay' entry type

## Search API for 'Assay' entry type

<a id="opIdsearch_bio_ontology_assay"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_assay
```

`GET /repository/search/type/bio_ontology_assay`

API to search for entries of type Assay

<h3 id="search-api-for-assay-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-assay-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologycohort">type/bio_ontology_cohort</h1>

Search API for 'Cohort' entry type

## Search API for 'Cohort' entry type

<a id="opIdsearch_bio_ontology_cohort"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_cohort
```

`GET /repository/search/type/bio_ontology_cohort`

API to search for entries of type Cohort

<h3 id="search-api-for-cohort-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-cohort-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologyperson">type/bio_ontology_person</h1>

Search API for 'Person' entry type

## Search API for 'Person' entry type

<a id="opIdsearch_bio_ontology_person"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_person
```

`GET /repository/search/type/bio_ontology_person`

API to search for entries of type Person

<h3 id="search-api-for-person-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.bio_ontology_person.gender|query|string|false|Gender|

<h3 id="search-api-for-person-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologysample">type/bio_ontology_sample</h1>

Search API for 'Sample' entry type

## Search API for 'Sample' entry type

<a id="opIdsearch_bio_ontology_sample"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_sample
```

`GET /repository/search/type/bio_ontology_sample`

API to search for entries of type Sample

<h3 id="search-api-for-sample-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sample-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologyseries">type/bio_ontology_series</h1>

Search API for 'Series' entry type

## Search API for 'Series' entry type

<a id="opIdsearch_bio_ontology_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_series
```

`GET /repository/search/type/bio_ontology_series`

API to search for entries of type Series

<h3 id="search-api-for-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebioontologystudy">type/bio_ontology_study</h1>

Search API for 'Study' entry type

## Search API for 'Study' entry type

<a id="opIdsearch_bio_ontology_study"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_ontology_study
```

`GET /repository/search/type/bio_ontology_study`

API to search for entries of type Study

<h3 id="search-api-for-study-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-study-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiosam">type/bio_sam</h1>

Search API for 'SAM Data' entry type

## Search API for 'SAM Data' entry type

<a id="opIdsearch_bio_sam"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_sam
```

`GET /repository/search/type/bio_sam`

API to search for entries of type SAM Data

<h3 id="search-api-for-sam-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sam-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiosfpdb">type/bio_sf_pdb</h1>

Search API for 'PDB Protein File' entry type

## Search API for 'PDB Protein File' entry type

<a id="opIdsearch_bio_sf_pdb"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_sf_pdb
```

`GET /repository/search/type/bio_sf_pdb`

API to search for entries of type PDB Protein File

<h3 id="search-api-for-pdb-protein-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-pdb-protein-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiosra">type/bio_sra</h1>

Search API for 'Sequence Read Archive' entry type

## Search API for 'Sequence Read Archive' entry type

<a id="opIdsearch_bio_sra"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_sra
```

`GET /repository/search/type/bio_sra`

API to search for entries of type Sequence Read Archive

<h3 id="search-api-for-sequence-read-archive-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sequence-read-archive-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiostockholm">type/bio_stockholm</h1>

Search API for 'Stockholm File' entry type

## Search API for 'Stockholm File' entry type

<a id="opIdsearch_bio_stockholm"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_stockholm
```

`GET /repository/search/type/bio_stockholm`

API to search for entries of type Stockholm File

<h3 id="search-api-for-stockholm-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-stockholm-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebiotaxonomy">type/bio_taxonomy</h1>

Search API for 'Taxonomic Entry' entry type

## Search API for 'Taxonomic Entry' entry type

<a id="opIdsearch_bio_taxonomy"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bio_taxonomy
```

`GET /repository/search/type/bio_taxonomy`

API to search for entries of type Taxonomic Entry

<h3 id="search-api-for-taxonomic-entry-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.bio_taxonomy.rank|query|string|false|Rank|
|search.bio_taxonomy.embl_code|query|string|false|EMBL Code|
|search.bio_taxonomy.division|query|string|false|Divison|
|search.bio_taxonomy.inherited_div|query|boolean|false|Inheritied division|
|search.bio_taxonomy.aliases|query|string|false|Also known|

<h3 id="search-api-for-taxonomic-entry-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeblogentry">type/blogentry</h1>

Search API for 'Weblog Entry' entry type

## Search API for 'Weblog Entry' entry type

<a id="opIdsearch_blogentry"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/blogentry
```

`GET /repository/search/type/blogentry`

API to search for entries of type Weblog Entry

<h3 id="search-api-for-weblog-entry-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.blogentry.blogtext|query|string|false|Extra Text|

<h3 id="search-api-for-weblog-entry-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebolderrentalhousing">type/bolder_rental_housing</h1>

Search API for 'Boulder Rental Housing' entry type

## Search API for 'Boulder Rental Housing' entry type

<a id="opIdsearch_bolder_rental_housing"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bolder_rental_housing
```

`GET /repository/search/type/bolder_rental_housing`

API to search for entries of type Boulder Rental Housing

<h3 id="search-api-for-boulder-rental-housing-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_bolder_rental_housing.propaddr1|query|string|false|Property Address|
|search.db_bolder_rental_housing.rentaltype|query|string|false|Rental Type|
|search.db_bolder_rental_housing.bldgtype|query|string|false|Building Type|
|search.db_bolder_rental_housing.dwellunits|query|integer|false|Dwelling Units|
|search.db_bolder_rental_housing.roomunits|query|integer|false|Room Units|
|search.db_bolder_rental_housing.neighbrhd|query|string|false|Neighborhood|
|search.db_bolder_rental_housing.complexnm|query|string|false|Complex Name|
|search.db_bolder_rental_housing.name|query|string|false|Name|
|search.db_bolder_rental_housing.persontype|query|string|false|Person Type|
|search.db_bolder_rental_housing.company|query|string|false|Company|
|search.db_bolder_rental_housing.engcompl|query|string|false|Engcompl|
|search.db_bolder_rental_housing.licenseexp|query|string|false|Expiration Date|
|search.db_bolder_rental_housing.licensenum|query|string|false|Licensenum|
|search.db_bolder_rental_housing.ppl1_coname|query|string|false|Ppl1 Coname|
|search.db_bolder_rental_housing.person_1|query|string|false|Person 1|
|search.db_bolder_rental_housing.ppl1_role|query|string|false|Ppl1 Role|
|search.db_bolder_rental_housing.ppl2_coname|query|string|false|Ppl2 Coname|
|search.db_bolder_rental_housing.person_2|query|string|false|Person 2|
|search.db_bolder_rental_housing.ppl2_role|query|string|false|Ppl2 Role|
|search.db_bolder_rental_housing.location|query|string|false|Location|

<h3 id="search-api-for-boulder-rental-housing-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebookmarks">type/bookmarks</h1>

Search API for 'Bookmarks' entry type

## Search API for 'Bookmarks' entry type

<a id="opIdsearch_bookmarks"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/bookmarks
```

`GET /repository/search/type/bookmarks`

API to search for entries of type Bookmarks

<h3 id="search-api-for-bookmarks-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_bookmarks.title|query|string|false|Title|
|search.db_bookmarks.url|query|string|false|URL|
|search.db_bookmarks.category|query|string|false|Category|
|search.db_bookmarks.date|query|string|false|Date|

<h3 id="search-api-for-bookmarks-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebostoncrime">type/boston_crime</h1>

Search API for 'Boston Crime' entry type

## Search API for 'Boston Crime' entry type

<a id="opIdsearch_boston_crime"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boston_crime
```

`GET /repository/search/type/boston_crime`

API to search for entries of type Boston Crime

<h3 id="search-api-for-boston-crime-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boston_crime.offense|query|string|false|Offense|
|search.db_boston_crime.offense_code_group|query|string|false|Offense Code Group|
|search.db_boston_crime.offense_description|query|string|false|Offense Description|
|search.db_boston_crime.district|query|string|false|District|
|search.db_boston_crime.reporting_area|query|string|false|Reporting Area|
|search.db_boston_crime.shooting|query|string|false|Shooting|
|search.db_boston_crime.year|query|number(double)|false|Year|
|search.db_boston_crime.month|query|number(double)|false|Month|
|search.db_boston_crime.day_of_week|query|string|false|Day Of Week|
|search.db_boston_crime.hour|query|number(double)|false|Hour|
|search.db_boston_crime.street|query|string|false|Street|
|search.db_boston_crime.location|query|string|false|Location|

<h3 id="search-api-for-boston-crime-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeboulder2017electioncontributions">type/boulder_2017_election_contributions</h1>

Search API for 'Boulder 2017 Election Contributions' entry type

## Search API for 'Boulder 2017 Election Contributions' entry type

<a id="opIdsearch_boulder_2017_election_contributions"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_2017_election_contributions
```

`GET /repository/search/type/boulder_2017_election_contributions`

API to search for entries of type Boulder 2017 Election Contributions

<h3 id="search-api-for-boulder-2017-election-contributions-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_2017_election_contributions.committee|query|string|false|Committee|
|search.db_boulder_2017_election_contributions.last_name|query|string|false|Last Name|
|search.db_boulder_2017_election_contributions.first_name|query|string|false|First Name|
|search.db_boulder_2017_election_contributions.street|query|string|false|Street|
|search.db_boulder_2017_election_contributions.city|query|string|false|City|
|search.db_boulder_2017_election_contributions.state|query|string|false|State|
|search.db_boulder_2017_election_contributions.zip|query|string|false|Zip|
|search.db_boulder_2017_election_contributions.contribution_type|query|string|false|Contribution Type|
|search.db_boulder_2017_election_contributions.from_candidate|query|string|false|From Candidate|
|search.db_boulder_2017_election_contributions.date|query|string|false|Date|
|search.db_boulder_2017_election_contributions.amount|query|number(double)|false|Amount|
|search.db_boulder_2017_election_contributions.match_amount|query|number(double)|false|Match Amount|
|search.db_boulder_2017_election_contributions.ytd_amount|query|number(double)|false|Ytd Amount|
|search.db_boulder_2017_election_contributions.location|query|string|false|Location|

<h3 id="search-api-for-boulder-2017-election-contributions-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebouldercampaigncontributions">type/boulder_campaign_contributions</h1>

Search API for 'Boulder Campaign Contributions' entry type

## Search API for 'Boulder Campaign Contributions' entry type

<a id="opIdsearch_boulder_campaign_contributions"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_campaign_contributions
```

`GET /repository/search/type/boulder_campaign_contributions`

API to search for entries of type Boulder Campaign Contributions

<h3 id="search-api-for-boulder-campaign-contributions-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_campaign_contributions.committee|query|string|false|Committee|
|search.db_boulder_campaign_contributions.type|query|string|false|Type|
|search.db_boulder_campaign_contributions.committee_num|query|string|false|Committee Num|
|search.db_boulder_campaign_contributions.candidate|query|string|false|Candidate|
|search.db_boulder_campaign_contributions.filing_date|query|string|false|Filing Date|
|search.db_boulder_campaign_contributions.amended_date|query|string|false|Amended Date|
|search.db_boulder_campaign_contributions.official_filing|query|string|false|Official Filing|
|search.db_boulder_campaign_contributions.transaction_date|query|string|false|Transaction Date|
|search.db_boulder_campaign_contributions.last_name|query|string|false|Last Name|
|search.db_boulder_campaign_contributions.first_name|query|string|false|First Name|
|search.db_boulder_campaign_contributions.street|query|string|false|Street|
|search.db_boulder_campaign_contributions.city|query|string|false|City|
|search.db_boulder_campaign_contributions.state|query|string|false|State|
|search.db_boulder_campaign_contributions.zip|query|string|false|Zip|
|search.db_boulder_campaign_contributions.contribution|query|number(double)|false|Contribution|
|search.db_boulder_campaign_contributions.contribution_type|query|string|false|Contribution Type|
|search.db_boulder_campaign_contributions.anonymous|query|string|false|Anonymous|
|search.db_boulder_campaign_contributions.from_candidate|query|string|false|From Candidate|
|search.db_boulder_campaign_contributions.match|query|number(double)|false|Match|

<h3 id="search-api-for-boulder-campaign-contributions-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeboulderconsultingservices">type/boulder_consulting_services</h1>

Search API for 'Boulder Consulting Services Database' entry type

## Search API for 'Boulder Consulting Services Database' entry type

<a id="opIdsearch_boulder_consulting_services"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_consulting_services
```

`GET /repository/search/type/boulder_consulting_services`

API to search for entries of type Boulder Consulting Services Database

<h3 id="search-api-for-boulder-consulting-services-database-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_consulting_services.fund|query|string|false|Fund|
|search.db_boulder_consulting_services.department|query|string|false|Department|
|search.db_boulder_consulting_services.organization|query|string|false|Organization|
|search.db_boulder_consulting_services.object|query|string|false|Object|
|search.db_boulder_consulting_services.project|query|string|false|Project|
|search.db_boulder_consulting_services.account_description|query|string|false|Account Description|
|search.db_boulder_consulting_services.date|query|string|false|Date|
|search.db_boulder_consulting_services.amount|query|number(double)|false|Amount|
|search.db_boulder_consulting_services.purchase_order|query|string|false|Purchase Order|
|search.db_boulder_consulting_services.vendor_name|query|string|false|Vendor Name|
|search.db_boulder_consulting_services.comment|query|string|false|Comment|

<h3 id="search-api-for-boulder-consulting-services-database-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebouldercountyvoterdetails">type/boulder_county_voter_details</h1>

Search API for 'Boulder County Voter Details' entry type

## Search API for 'Boulder County Voter Details' entry type

<a id="opIdsearch_boulder_county_voter_details"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_county_voter_details
```

`GET /repository/search/type/boulder_county_voter_details`

API to search for entries of type Boulder County Voter Details

<h3 id="search-api-for-boulder-county-voter-details-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_county_voter_details.first_name|query|string|false|First Name|
|search.db_boulder_county_voter_details.last_name|query|string|false|Last Name|
|search.db_boulder_county_voter_details.registration_date|query|string|false|Registration Date|
|search.db_boulder_county_voter_details.last_updated_date|query|string|false|Last Updated Date|
|search.db_boulder_county_voter_details.residential_address|query|string|false|Residential Address|
|search.db_boulder_county_voter_details.residential_city|query|string|false|Residential City|
|search.db_boulder_county_voter_details.mailing_zip_code|query|string|false|Mailing Zip Code|
|search.db_boulder_county_voter_details.voter_status|query|string|false|Voter Status|
|search.db_boulder_county_voter_details.party|query|string|false|Party|
|search.db_boulder_county_voter_details.gender|query|string|false|Gender|
|search.db_boulder_county_voter_details.birth_year|query|integer|false|Birth Year|
|search.db_boulder_county_voter_details.precinct_code|query|string|false|Precinct Code|
|search.db_boulder_county_voter_details.congressional|query|string|false|Congressional|
|search.db_boulder_county_voter_details.state_senate|query|string|false|State Senate|
|search.db_boulder_county_voter_details.state_house|query|string|false|State House|
|search.db_boulder_county_voter_details.municipality|query|string|false|Municipality|
|search.db_boulder_county_voter_details.city_ward_district|query|string|false|City Ward/district|
|search.db_boulder_county_voter_details.school_district|query|string|false|School District|
|search.db_boulder_county_voter_details.location|query|string|false|Location|

<h3 id="search-api-for-boulder-county-voter-details-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typebouldercrimes">type/boulder_crimes</h1>

Search API for 'Boulder Crime Reports' entry type

## Search API for 'Boulder Crime Reports' entry type

<a id="opIdsearch_boulder_crimes"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_crimes
```

`GET /repository/search/type/boulder_crimes`

API to search for entries of type Boulder Crime Reports

<h3 id="search-api-for-boulder-crime-reports-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_crimes.offense|query|string|false|Offense|
|search.db_boulder_crimes.reportdate|query|string|false|Report Date|
|search.db_boulder_crimes.blockadd|query|string|false|Address|
|search.db_boulder_crimes.location|query|string|false|Location|

<h3 id="search-api-for-boulder-crime-reports-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeboulderemails">type/boulder_emails</h1>

Search API for 'Boulder Council Emails' entry type

## Search API for 'Boulder Council Emails' entry type

<a id="opIdsearch_boulder_emails"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_emails
```

`GET /repository/search/type/boulder_emails`

API to search for entries of type Boulder Council Emails

<h3 id="search-api-for-boulder-council-emails-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_emails.sent_from|query|string|false|Sent From|
|search.db_boulder_emails.sent_to|query|string|false|Sent To|
|search.db_boulder_emails.sent_cc|query|string|false|Sent Cc|
|search.db_boulder_emails.received_date|query|string|false|Received Date|
|search.db_boulder_emails.email_subject|query|string|false|Email Subject|
|search.db_boulder_emails.plain_text_body|query|string|false|Email Body|

<h3 id="search-api-for-boulder-council-emails-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeboulderemployeesalaries">type/boulder_employee_salaries</h1>

Search API for 'Boulder Employee Salaries' entry type

## Search API for 'Boulder Employee Salaries' entry type

<a id="opIdsearch_boulder_employee_salaries"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/boulder_employee_salaries
```

`GET /repository/search/type/boulder_employee_salaries`

API to search for entries of type Boulder Employee Salaries

<h3 id="search-api-for-boulder-employee-salaries-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_boulder_employee_salaries.position_description|query|string|false|Position Description|
|search.db_boulder_employee_salaries.department|query|string|false|Department|
|search.db_boulder_employee_salaries.employee_flsa_exempt_y_n|query|string|false|Employee Flsa Exempt Y N|
|search.db_boulder_employee_salaries.pay_range_min|query|number(double)|false|Pay Range Min|
|search.db_boulder_employee_salaries.pay_range_max|query|number(double)|false|Pay Range Max|
|search.db_boulder_employee_salaries.employee_hourly_pay_rate|query|number(double)|false|Employee Hourly Pay Rate|
|search.db_boulder_employee_salaries.employee_fte_in_this_position|query|number(double)|false|Employee Fte In This Position|
|search.db_boulder_employee_salaries.employee_annual_base_salary|query|number(double)|false|Employee Annual Base Salary|

<h3 id="search-api-for-boulder-employee-salaries-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecalendar">type/calendar</h1>

Search API for 'Calendar' entry type

## Search API for 'Calendar' entry type

<a id="opIdsearch_calendar"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/calendar
```

`GET /repository/search/type/calendar`

API to search for entries of type Calendar

<h3 id="search-api-for-calendar-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-calendar-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecampaigndonors">type/campaign_donors</h1>

Search API for 'Campaign Donors' entry type

## Search API for 'Campaign Donors' entry type

<a id="opIdsearch_campaign_donors"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/campaign_donors
```

`GET /repository/search/type/campaign_donors`

API to search for entries of type Campaign Donors

<h3 id="search-api-for-campaign-donors-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_campaign_donors.committee|query|string|false|Committee|
|search.db_campaign_donors.amount|query|number(double)|false|Amount|
|search.db_campaign_donors.party|query|string|false|Party|
|search.db_campaign_donors.donor|query|string|false|Donor|
|search.db_campaign_donors.gender|query|string|false|Gender|
|search.db_campaign_donors.city|query|string|false|City|
|search.db_campaign_donors.state|query|string|false|State|
|search.db_campaign_donors.zip_code|query|string|false|Zip Code|
|search.db_campaign_donors.employer|query|string|false|Employer|
|search.db_campaign_donors.occupation|query|string|false|Occupation|
|search.db_campaign_donors.date|query|string|false|Date|
|search.db_campaign_donors.location|query|string|false|Location|

<h3 id="search-api-for-campaign-donors-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecampaignexpenditures">type/campaign_expenditures</h1>

Search API for 'Campaign Expenditures' entry type

## Search API for 'Campaign Expenditures' entry type

<a id="opIdsearch_campaign_expenditures"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/campaign_expenditures
```

`GET /repository/search/type/campaign_expenditures`

API to search for entries of type Campaign Expenditures

<h3 id="search-api-for-campaign-expenditures-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_campaign_expenditures.committee|query|string|false|Committee|
|search.db_campaign_expenditures.amount|query|number(double)|false|Amount|
|search.db_campaign_expenditures.party|query|string|false|Party|
|search.db_campaign_expenditures.recipient|query|string|false|Recipient|
|search.db_campaign_expenditures.city|query|string|false|City|
|search.db_campaign_expenditures.state|query|string|false|State|
|search.db_campaign_expenditures.zip_code|query|string|false|Zip Code|
|search.db_campaign_expenditures.transaction_date|query|string|false|Transaction Date|
|search.db_campaign_expenditures.purpose|query|string|false|Purpose|
|search.db_campaign_expenditures.memo_text|query|string|false|Memo Text|
|search.db_campaign_expenditures.location|query|string|false|Location|

<h3 id="search-api-for-campaign-expenditures-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecataloglink">type/cataloglink</h1>

Search API for 'Catalog Link' entry type

## Search API for 'Catalog Link' entry type

<a id="opIdsearch_cataloglink"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/cataloglink
```

`GET /repository/search/type/cataloglink`

API to search for entries of type Catalog Link

<h3 id="search-api-for-catalog-link-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-catalog-link-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecdmgrid">type/cdm_grid</h1>

Search API for 'Gridded Data File' entry type

## Search API for 'Gridded Data File' entry type

<a id="opIdsearch_cdm_grid"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/cdm_grid
```

`GET /repository/search/type/cdm_grid`

API to search for entries of type Gridded Data File

<h3 id="search-api-for-gridded-data-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-gridded-data-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typechatroom">type/chatroom</h1>

Search API for 'Chat Room' entry type

## Search API for 'Chat Room' entry type

<a id="opIdsearch_chatroom"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/chatroom
```

`GET /repository/search/type/chatroom`

API to search for entries of type Chat Room

<h3 id="search-api-for-chat-room-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-chat-room-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecoloradowaterrights">type/colorado_water_rights</h1>

Search API for 'Colorado Water Rights' entry type

## Search API for 'Colorado Water Rights' entry type

<a id="opIdsearch_colorado_water_rights"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/colorado_water_rights
```

`GET /repository/search/type/colorado_water_rights`

API to search for entries of type Colorado Water Rights

<h3 id="search-api-for-colorado-water-rights-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_colorado_water_rights.structure_name|query|string|false|Structure Name|
|search.db_colorado_water_rights.structure_type|query|string|false|Structure Type|
|search.db_colorado_water_rights.water_source|query|string|false|Water Source|
|search.db_colorado_water_rights.county|query|string|false|County|
|search.db_colorado_water_rights.adjudication_date|query|string|false|Adjudication Date|
|search.db_colorado_water_rights.appropriation_date|query|string|false|Appropriation Date|
|search.db_colorado_water_rights.priority_no|query|string|false|Priority No|
|search.db_colorado_water_rights.decreed_uses|query|string|false|Decreed Uses|
|search.db_colorado_water_rights.net_absolute|query|number(double)|false|Net Absolute|
|search.db_colorado_water_rights.net_conditional|query|number(double)|false|Net Conditional|
|search.db_colorado_water_rights.net_apex_absolute|query|number(double)|false|Net Apex Absolute|
|search.db_colorado_water_rights.net_apex_conditional|query|number(double)|false|Net Apex Conditional|
|search.db_colorado_water_rights.decreed_units|query|string|false|Decreed Units|
|search.db_colorado_water_rights.seasonal_limits|query|string|false|Seasonal Limits|
|search.db_colorado_water_rights.comments|query|string|false|Comments|
|search.db_colorado_water_rights.more_information|query|string|false|More Information|
|search.db_colorado_water_rights.location|query|string|false|Location|

<h3 id="search-api-for-colorado-water-rights-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecommitteedonations">type/committee_donations</h1>

Search API for 'Committee Donations' entry type

## Search API for 'Committee Donations' entry type

<a id="opIdsearch_committee_donations"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/committee_donations
```

`GET /repository/search/type/committee_donations`

API to search for entries of type Committee Donations

<h3 id="search-api-for-committee-donations-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_committee_donations.committee|query|string|false|Committee|
|search.db_committee_donations.amount|query|number(double)|false|Amount|
|search.db_committee_donations.recipient|query|string|false|Recipient|
|search.db_committee_donations.date|query|string|false|Date|
|search.db_committee_donations.city|query|string|false|City|
|search.db_committee_donations.state|query|string|false|State|
|search.db_committee_donations.zip_code|query|string|false|Zip Code|
|search.db_committee_donations.employer|query|string|false|Employer|
|search.db_committee_donations.occupation|query|string|false|Occupation|
|search.db_committee_donations.location|query|string|false|Location|

<h3 id="search-api-for-committee-donations-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecommunitydatahub">type/community_datahub</h1>

Search API for 'Data Hub' entry type

## Search API for 'Data Hub' entry type

<a id="opIdsearch_community_datahub"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/community_datahub
```

`GET /repository/search/type/community_datahub`

API to search for entries of type Data Hub

<h3 id="search-api-for-data-hub-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-data-hub-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecommunityresource">type/community_resource</h1>

Search API for 'Facility' entry type

## Search API for 'Facility' entry type

<a id="opIdsearch_community_resource"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/community_resource
```

`GET /repository/search/type/community_resource`

API to search for entries of type Facility

<h3 id="search-api-for-facility-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.community_resource.resource_type|query|string|false|Type|
|search.community_resource.address|query|string|false|Address|
|search.community_resource.city|query|string|false|City|
|search.community_resource.state|query|string|false|State or Province|
|search.community_resource.zipcode|query|string|false|Zip Code|

<h3 id="search-api-for-facility-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeconstructionpermits">type/construction_permits</h1>

Search API for 'Construction Permits' entry type

## Search API for 'Construction Permits' entry type

<a id="opIdsearch_construction_permits"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/construction_permits
```

`GET /repository/search/type/construction_permits`

API to search for entries of type Construction Permits

<h3 id="search-api-for-construction-permits-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_construction_permits.address|query|string|false|Address|
|search.db_construction_permits.case_status|query|string|false|Case Status|
|search.db_construction_permits.category|query|string|false|Category|
|search.db_construction_permits.building_uses_and_work_scopes|query|string|false|Building Uses And Work Scopes|
|search.db_construction_permits.permit_types|query|string|false|Permit Types|
|search.db_construction_permits.total_project_value|query|number(double)|false|Total Project Value|
|search.db_construction_permits.total_subpermit_value|query|number(double)|false|Total Subpermit Value|
|search.db_construction_permits.applied|query|string|false|Applied|
|search.db_construction_permits.approved|query|string|false|Approved|
|search.db_construction_permits.issued|query|string|false|Issued|
|search.db_construction_permits.co_date|query|string|false|Co Date|
|search.db_construction_permits.completion_date|query|string|false|Completion Date|
|search.db_construction_permits.new_res_unit|query|integer|false|New Res Unit|
|search.db_construction_permits.existing_res_unit|query|integer|false|Existing Res Unit|
|search.db_construction_permits.affordable_hsg_unit|query|integer|false|Affordable Hsg Unit|
|search.db_construction_permits.new_sf|query|integer|false|New Sf|
|search.db_construction_permits.remodel_sf|query|integer|false|Remodel Sf|
|search.db_construction_permits.narrative_description|query|string|false|Narrative Description|
|search.db_construction_permits.primary_first_name|query|string|false|Primary First Name|
|search.db_construction_permits.primary_last_name|query|string|false|Primary Last Name|
|search.db_construction_permits.primary_company|query|string|false|Primary Company|
|search.db_construction_permits.contractor_first_name|query|string|false|Contractor First Name|
|search.db_construction_permits.contractor_last_name|query|string|false|Contractor Last Name|
|search.db_construction_permits.contractor_company|query|string|false|Contractor Company|
|search.db_construction_permits.owner1_first_name|query|string|false|Owner1 First Name|
|search.db_construction_permits.owner1_last_name|query|string|false|Owner1 Last Name|
|search.db_construction_permits.owner1_company|query|string|false|Owner1 Company|
|search.db_construction_permits.owner2_first_name|query|string|false|Owner2 First Name|
|search.db_construction_permits.owner2_last_name|query|string|false|Owner2 Last Name|
|search.db_construction_permits.owner2_company|query|string|false|Owner2 Company|

<h3 id="search-api-for-construction-permits-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typecontact">type/contact</h1>

Search API for 'Contact List' entry type

## Search API for 'Contact List' entry type

<a id="opIdsearch_contact"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/contact
```

`GET /repository/search/type/contact`

API to search for entries of type Contact List

<h3 id="search-api-for-contact-list-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_contact.name|query|string|false|Name|
|search.db_contact.institution|query|string|false|Institution|
|search.db_contact.email|query|string|false|Email|

<h3 id="search-api-for-contact-list-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typedbcoindicators">type/db_co_indicators</h1>

Search API for 'Colorado Health Indicators' entry type

## Search API for 'Colorado Health Indicators' entry type

<a id="opIdsearch_db_co_indicators"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/db_co_indicators
```

`GET /repository/search/type/db_co_indicators`

API to search for entries of type Colorado Health Indicators

<h3 id="search-api-for-colorado-health-indicators-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_db_co_indicators.geo_name|query|string|false|County|
|search.db_db_co_indicators.domain|query|string|false|Domain|
|search.db_db_co_indicators.subdomain|query|string|false|Subdomain|
|search.db_db_co_indicators.indicatorName|query|string|false|Indicator|
|search.db_db_co_indicators.description|query|string|false|Description|
|search.db_db_co_indicators.measure|query|number(double)|false|Measure|
|search.db_db_co_indicators.location|query|string|false|Location|

<h3 id="search-api-for-colorado-health-indicators-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeearthsatellitelandsat">type/earth_satellite_landsat</h1>

Search API for 'Landsat Satellite Data' entry type

## Search API for 'Landsat Satellite Data' entry type

<a id="opIdsearch_earth_satellite_landsat"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/earth_satellite_landsat
```

`GET /repository/search/type/earth_satellite_landsat`

API to search for entries of type Landsat Satellite Data

<h3 id="search-api-for-landsat-satellite-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.earth_satellite_landsat.sensor|query|string|false|Sensor|
|search.earth_satellite_landsat.satellite|query|string|false|Satellite|
|search.earth_satellite_landsat.wrs_path_number|query|integer|false|WRS Path|
|search.earth_satellite_landsat.wrs_row_number|query|integer|false|WRS Row|
|search.earth_satellite_landsat.ground_station|query|string|false|Ground Station|
|search.earth_satellite_landsat.archive_version_number|query|integer|false|Archive Version Number|

<h3 id="search-api-for-landsat-satellite-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefaq">type/faq</h1>

Search API for 'FAQ' entry type

## Search API for 'FAQ' entry type

<a id="opIdsearch_faq"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/faq
```

`GET /repository/search/type/faq`

API to search for entries of type FAQ

<h3 id="search-api-for-faq-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-faq-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefecpacs">type/fec_pacs</h1>

Search API for 'FEC PACs' entry type

## Search API for 'FEC PACs' entry type

<a id="opIdsearch_fec_pacs"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/fec_pacs
```

`GET /repository/search/type/fec_pacs`

API to search for entries of type FEC PACs

<h3 id="search-api-for-fec-pacs-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_fec_pacs.committee|query|string|false|Committee|
|search.db_fec_pacs.total_receipts|query|number(double)|false|Total Receipts|
|search.db_fec_pacs.beginning_cash|query|number(double)|false|Beginning Cash|
|search.db_fec_pacs.ending_cash|query|number(double)|false|Ending Cash|
|search.db_fec_pacs.contributions_from_individuals|query|number(double)|false|Contributions From Individuals|
|search.db_fec_pacs.contributions_from_other_committees|query|number(double)|false|Contributions From Other Committees|
|search.db_fec_pacs.trans_from_affiliates|query|number(double)|false|Trans From Affiliates|
|search.db_fec_pacs.contributions_to_other_committee|query|number(double)|false|Contributions To Other Committee|
|search.db_fec_pacs.contributions_from_candidate|query|number(double)|false|Contributions From Candidate|
|search.db_fec_pacs.loans_from_candidate|query|number(double)|false|Loans From Candidate|
|search.db_fec_pacs.total_loans_received|query|number(double)|false|Total Loans Received|
|search.db_fec_pacs.total_distributions|query|number(double)|false|Total Distributions|
|search.db_fec_pacs.transfers_to_affiliates|query|number(double)|false|Transfers To Affiliates|
|search.db_fec_pacs.refunds_to_individuals|query|number(double)|false|Refunds To Individuals|
|search.db_fec_pacs.refends_to_othercommittees|query|number(double)|false|Refends To Othercommittees|
|search.db_fec_pacs.candidate_loan_repayments|query|number(double)|false|Candidate Loan Repayments|
|search.db_fec_pacs.loan_repayments|query|number(double)|false|Loan Repayments|

<h3 id="search-api-for-fec-pacs-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefeccandidates">type/feccandidates</h1>

Search API for 'Candidates' entry type

## Search API for 'Candidates' entry type

<a id="opIdsearch_feccandidates"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/feccandidates
```

`GET /repository/search/type/feccandidates`

API to search for entries of type Candidates

<h3 id="search-api-for-candidates-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_feccandidates.name|query|string|false|Name|
|search.db_feccandidates.party|query|string|false|Party|
|search.db_feccandidates.state|query|string|false|State|
|search.db_feccandidates.district|query|string|false|District|
|search.db_feccandidates.gender|query|string|false|Gender|
|search.db_feccandidates.beginning_cash|query|number(double)|false|Beginning Cash|
|search.db_feccandidates.ending_cash|query|number(double)|false|Ending Cash|
|search.db_feccandidates.total_receipts|query|number(double)|false|Total Receipts|
|search.db_feccandidates.total_indivual_contributions|query|number(double)|false|Total Indivual Contributions|
|search.db_feccandidates.transfers_from_committees|query|number(double)|false|Transfers From Committees|
|search.db_feccandidates.transfers_to_committees|query|number(double)|false|Transfers To Committees|
|search.db_feccandidates.total_disbursements|query|number(double)|false|Total Disbursements|
|search.db_feccandidates.contributions_from_candidate|query|number(double)|false|Contributions From Candidate|
|search.db_feccandidates.loans_from_candidates|query|number(double)|false|Loans From Candidates|
|search.db_feccandidates.other_loans|query|number(double)|false|Other Loans|
|search.db_feccandidates.candidate_loan_repayments|query|number(double)|false|Candidate Loan Repayments|
|search.db_feccandidates.other_loan_repayments|query|number(double)|false|Other Loan Repayments|
|search.db_feccandidates.debts_owed_by|query|number(double)|false|Debts Owed By|
|search.db_feccandidates.contributions_from_other_committees|query|number(double)|false|Contributions From Other Committees|
|search.db_feccandidates.contributions_from_party_committees|query|number(double)|false|Contributions From Party Committees|
|search.db_feccandidates.coverage_end_date|query|string|false|Coverage End Date|
|search.db_feccandidates.individual_refunds|query|number(double)|false|Individual Refunds|
|search.db_feccandidates.committee_refunds|query|number(double)|false|Committee Refunds|

<h3 id="search-api-for-candidates-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefeed">type/feed</h1>

Search API for 'RSS/ATOM Feed' entry type

## Search API for 'RSS/ATOM Feed' entry type

<a id="opIdsearch_feed"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/feed
```

`GET /repository/search/type/feed`

API to search for entries of type RSS/ATOM Feed

<h3 id="search-api-for-rssatom-feed-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-rssatom-feed-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefile">type/file</h1>

Search API for 'File' entry type

## Search API for 'File' entry type

<a id="opIdsearch_file"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/file
```

`GET /repository/search/type/file`

API to search for entries of type File

<h3 id="search-api-for-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typefitsdata">type/fits_data</h1>

Search API for 'FITS Data File' entry type

## Search API for 'FITS Data File' entry type

<a id="opIdsearch_fits_data"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/fits_data
```

`GET /repository/search/type/fits_data`

API to search for entries of type FITS Data File

<h3 id="search-api-for-fits-data-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.fits_data.origin|query|string|false|Origin|
|search.fits_data.telescope|query|string|false|Telescope|
|search.fits_data.instrument|query|string|false|Instrument|

<h3 id="search-api-for-fits-data-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeftp">type/ftp</h1>

Search API for 'Remote FTP File View' entry type

## Search API for 'Remote FTP File View' entry type

<a id="opIdsearch_ftp"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/ftp
```

`GET /repository/search/type/ftp`

API to search for entries of type Remote FTP File View

<h3 id="search-api-for-remote-ftp-file-view-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-remote-ftp-file-view-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegadgetscountdown">type/gadgets_countdown</h1>

Search API for 'Countdown' entry type

## Search API for 'Countdown' entry type

<a id="opIdsearch_gadgets_countdown"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gadgets_countdown
```

`GET /repository/search/type/gadgets_countdown`

API to search for entries of type Countdown

<h3 id="search-api-for-countdown-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-countdown-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegadgetsstock">type/gadgets_stock</h1>

Search API for 'Stock Ticker' entry type

## Search API for 'Stock Ticker' entry type

<a id="opIdsearch_gadgets_stock"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gadgets_stock
```

`GET /repository/search/type/gadgets_stock`

API to search for entries of type Stock Ticker

<h3 id="search-api-for-stock-ticker-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-stock-ticker-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegadgetsweather">type/gadgets_weather</h1>

Search API for 'Weather' entry type

## Search API for 'Weather' entry type

<a id="opIdsearch_gadgets_weather"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gadgets_weather
```

`GET /repository/search/type/gadgets_weather`

API to search for entries of type Weather

<h3 id="search-api-for-weather-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-weather-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegazeteercensustracts">type/gazeteer_census_tracts</h1>

Search API for 'Census Tracts' entry type

## Search API for 'Census Tracts' entry type

<a id="opIdsearch_gazeteer_census_tracts"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gazeteer_census_tracts
```

`GET /repository/search/type/gazeteer_census_tracts`

API to search for entries of type Census Tracts

<h3 id="search-api-for-census-tracts-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_gazeteer_census_tracts.state|query|string|false|State|
|search.db_gazeteer_census_tracts.state_fips|query|string|false|State Fips|
|search.db_gazeteer_census_tracts.county_name|query|string|false|County Name|
|search.db_gazeteer_census_tracts.county_fips|query|string|false|County Fips|
|search.db_gazeteer_census_tracts.census_tract_id|query|string|false|Census Tract Id|
|search.db_gazeteer_census_tracts.full_census_tract_id|query|string|false|Full Census Tract Id|
|search.db_gazeteer_census_tracts.land_area|query|number(double)|false|Land Area|
|search.db_gazeteer_census_tracts.water_area|query|number(double)|false|Water Area|
|search.db_gazeteer_census_tracts.location|query|string|false|Location|

<h3 id="search-api-for-census-tracts-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegazeteercounties">type/gazeteer_counties</h1>

Search API for 'Census Gazeteer Counties' entry type

## Search API for 'Census Gazeteer Counties' entry type

<a id="opIdsearch_gazeteer_counties"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gazeteer_counties
```

`GET /repository/search/type/gazeteer_counties`

API to search for entries of type Census Gazeteer Counties

<h3 id="search-api-for-census-gazeteer-counties-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_gazeteer_counties.state_abbreviation|query|string|false|State Abbreviation|
|search.db_gazeteer_counties.state_fips|query|string|false|State Fips|
|search.db_gazeteer_counties.county_fips|query|string|false|County Fips|
|search.db_gazeteer_counties.full_county_fips|query|string|false|Full County Fips|
|search.db_gazeteer_counties.county_name|query|string|false|County Name|
|search.db_gazeteer_counties.area_land|query|number(double)|false|Area Land|
|search.db_gazeteer_counties.area_water|query|number(double)|false|Area Water|
|search.db_gazeteer_counties.location|query|string|false|Location|

<h3 id="search-api-for-census-gazeteer-counties-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeoge">type/geo_ge</h1>

Search API for 'GeoJson File' entry type

## Search API for 'GeoJson File' entry type

<a id="opIdsearch_geo_geojson"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_geojson
```

`GET /repository/search/type/geo_geojson`

API to search for entries of type GeoJson File

<h3 id="search-api-for-geojson-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-geojson-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeogeotiff">type/geo_geotiff</h1>

Search API for 'GeoTIFF' entry type

## Search API for 'GeoTIFF' entry type

<a id="opIdsearch_geo_geotiff"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_geotiff
```

`GET /repository/search/type/geo_geotiff`

API to search for entries of type GeoTIFF

<h3 id="search-api-for-geotiff-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-geotiff-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeogpx">type/geo_gpx</h1>

Search API for 'GPX GPS File' entry type

## Search API for 'GPX GPS File' entry type

<a id="opIdsearch_geo_gpx"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_gpx
```

`GET /repository/search/type/geo_gpx`

API to search for entries of type GPX GPS File

<h3 id="search-api-for-gpx-gps-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.geo_gpx.distance|query|number(double)|false|Distance|
|search.geo_gpx.total_time|query|number(double)|false|Total Time|
|search.geo_gpx.moving_time|query|number(double)|false|Moving Time|
|search.geo_gpx.speed|query|number(double)|false|Average Speed|
|search.geo_gpx.elevation_gain|query|number(double)|false|Elevation Gain|
|search.geo_gpx.elevation_loss|query|number(double)|false|Elevation Loss|

<h3 id="search-api-for-gpx-gps-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeohdf5">type/geo_hdf5</h1>

Search API for 'HDF5 File' entry type

## Search API for 'HDF5 File' entry type

<a id="opIdsearch_geo_hdf5"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_hdf5
```

`GET /repository/search/type/geo_hdf5`

API to search for entries of type HDF5 File

<h3 id="search-api-for-hdf5-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-hdf5-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeokml">type/geo_kml</h1>

Search API for 'KML/KMZ File' entry type

## Search API for 'KML/KMZ File' entry type

<a id="opIdsearch_geo_kml"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_kml
```

`GET /repository/search/type/geo_kml`

API to search for entries of type KML/KMZ File

<h3 id="search-api-for-kmlkmz-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-kmlkmz-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeoshapefile">type/geo_shapefile</h1>

Search API for 'Shapefile' entry type

## Search API for 'Shapefile' entry type

<a id="opIdsearch_geo_shapefile"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_shapefile
```

`GET /repository/search/type/geo_shapefile`

API to search for entries of type Shapefile

<h3 id="search-api-for-shapefile-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-shapefile-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegeoshapefilefips">type/geo_shapefile_fips</h1>

Search API for 'Shapefile with FIPS Code' entry type

## Search API for 'Shapefile with FIPS Code' entry type

<a id="opIdsearch_geo_shapefile_fips"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/geo_shapefile_fips
```

`GET /repository/search/type/geo_shapefile_fips`

API to search for entries of type Shapefile with FIPS Code

<h3 id="search-api-for-shapefile-with-fips-code-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-shapefile-with-fips-code-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeglossary">type/glossary</h1>

Search API for 'Glossary' entry type

## Search API for 'Glossary' entry type

<a id="opIdsearch_glossary"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/glossary
```

`GET /repository/search/type/glossary`

API to search for entries of type Glossary

<h3 id="search-api-for-glossary-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-glossary-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegridaggregation">type/gridaggregation</h1>

Search API for 'Grid Aggregation' entry type

## Search API for 'Grid Aggregation' entry type

<a id="opIdsearch_gridaggregation"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/gridaggregation
```

`GET /repository/search/type/gridaggregation`

API to search for entries of type Grid Aggregation

<h3 id="search-api-for-grid-aggregation-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-grid-aggregation-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typegroup">type/group</h1>

Search API for 'Folder' entry type

## Search API for 'Folder' entry type

<a id="opIdsearch_group"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/group
```

`GET /repository/search/type/group`

API to search for entries of type Folder

<h3 id="search-api-for-folder-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-folder-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typehipchatgroup">type/hipchat_group</h1>

Search API for 'HipChat Group' entry type

## Search API for 'HipChat Group' entry type

<a id="opIdsearch_hipchat_group"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/hipchat_group
```

`GET /repository/search/type/hipchat_group`

API to search for entries of type HipChat Group

<h3 id="search-api-for-hipchat-group-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-hipchat-group-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typehomepage">type/homepage</h1>

Search API for 'Home Page' entry type

## Search API for 'Home Page' entry type

<a id="opIdsearch_homepage"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/homepage
```

`GET /repository/search/type/homepage`

API to search for entries of type Home Page

<h3 id="search-api-for-home-page-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-home-page-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeincident">type/incident</h1>

Search API for 'Incident' entry type

## Search API for 'Incident' entry type

<a id="opIdsearch_incident"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/incident
```

`GET /repository/search/type/incident`

API to search for entries of type Incident

<h3 id="search-api-for-incident-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.incident.incidenttype|query|string|false|Incident Type|
|search.incident.cause|query|string|false|Cause|
|search.incident.state|query|string|false|State|

<h3 id="search-api-for-incident-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typejeopardy">type/jeopardy</h1>

Search API for 'Jeopardy' entry type

## Search API for 'Jeopardy' entry type

<a id="opIdsearch_jeopardy"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/jeopardy
```

`GET /repository/search/type/jeopardy`

API to search for entries of type Jeopardy

<h3 id="search-api-for-jeopardy-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_jeopardy.question|query|string|false|Question|
|search.db_jeopardy.answer|query|string|false|Answer|
|search.db_jeopardy.round|query|string|false|Round|
|search.db_jeopardy.category|query|string|false|Category|
|search.db_jeopardy.air_date|query|string|false|Air Date|

<h3 id="search-api-for-jeopardy-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelatlonimage">type/latlonimage</h1>

Search API for 'Lat-Lon Image' entry type

## Search API for 'Lat-Lon Image' entry type

<a id="opIdsearch_latlonimage"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/latlonimage
```

`GET /repository/search/type/latlonimage`

API to search for entries of type Lat-Lon Image

<h3 id="search-api-for-lat-lon-image-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-lat-lon-image-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelidarcollection">type/lidar_collection</h1>

Search API for 'LiDAR Collection' entry type

## Search API for 'LiDAR Collection' entry type

<a id="opIdsearch_lidar_collection"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/lidar_collection
```

`GET /repository/search/type/lidar_collection`

API to search for entries of type LiDAR Collection

<h3 id="search-api-for-lidar-collection-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-lidar-collection-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelidarlas">type/lidar_las</h1>

Search API for 'LAS Lidar Data' entry type

## Search API for 'LAS Lidar Data' entry type

<a id="opIdsearch_lidar_las"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/lidar_las
```

`GET /repository/search/type/lidar_las`

API to search for entries of type LAS Lidar Data

<h3 id="search-api-for-las-lidar-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-las-lidar-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelidarlvis">type/lidar_lvis</h1>

Search API for 'LVIS Lidar Data' entry type

## Search API for 'LVIS Lidar Data' entry type

<a id="opIdsearch_lidar_lvis"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/lidar_lvis
```

`GET /repository/search/type/lidar_lvis`

API to search for entries of type LVIS Lidar Data

<h3 id="search-api-for-lvis-lidar-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-lvis-lidar-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelink">type/link</h1>

Search API for 'Link' entry type

## Search API for 'Link' entry type

<a id="opIdsearch_link"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/link
```

`GET /repository/search/type/link`

API to search for entries of type Link

<h3 id="search-api-for-link-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-link-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelocalfiles">type/localfiles</h1>

Search API for 'Server Side Files' entry type

## Search API for 'Server Side Files' entry type

<a id="opIdsearch_localfiles"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/localfiles
```

`GET /repository/search/type/localfiles`

API to search for entries of type Server Side Files

<h3 id="search-api-for-server-side-files-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-server-side-files-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typelocations">type/locations</h1>

Search API for 'Locations' entry type

## Search API for 'Locations' entry type

<a id="opIdsearch_locations"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/locations
```

`GET /repository/search/type/locations`

API to search for entries of type Locations

<h3 id="search-api-for-locations-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_locations.name|query|string|false|Name|
|search.db_locations.type|query|string|false|Type|
|search.db_locations.location|query|string|false|Location|

<h3 id="search-api-for-locations-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemapgooglemap">type/map_googlemap</h1>

Search API for 'Google Map URL' entry type

## Search API for 'Google Map URL' entry type

<a id="opIdsearch_map_googlemap"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/map_googlemap
```

`GET /repository/search/type/map_googlemap`

API to search for entries of type Google Map URL

<h3 id="search-api-for-google-map-url-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-google-map-url-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediaaudiofile">type/media_audiofile</h1>

Search API for 'Audio File' entry type

## Search API for 'Audio File' entry type

<a id="opIdsearch_media_audiofile"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_audiofile
```

`GET /repository/search/type/media_audiofile`

API to search for entries of type Audio File

<h3 id="search-api-for-audio-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-audio-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediaimageloop">type/media_imageloop</h1>

Search API for 'Image Loop' entry type

## Search API for 'Image Loop' entry type

<a id="opIdsearch_media_imageloop"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_imageloop
```

`GET /repository/search/type/media_imageloop`

API to search for entries of type Image Loop

<h3 id="search-api-for-image-loop-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-image-loop-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediaphotoalbum">type/media_photoalbum</h1>

Search API for 'Photo Album' entry type

## Search API for 'Photo Album' entry type

<a id="opIdsearch_media_photoalbum"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_photoalbum
```

`GET /repository/search/type/media_photoalbum`

API to search for entries of type Photo Album

<h3 id="search-api-for-photo-album-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-photo-album-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediavideochannel">type/media_video_channel</h1>

Search API for 'Video Channel' entry type

## Search API for 'Video Channel' entry type

<a id="opIdsearch_media_video_channel"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_video_channel
```

`GET /repository/search/type/media_video_channel`

API to search for entries of type Video Channel

<h3 id="search-api-for-video-channel-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-video-channel-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediavideoquicktime">type/media_video_quicktime</h1>

Search API for 'Quicktime Video' entry type

## Search API for 'Quicktime Video' entry type

<a id="opIdsearch_media_video_quicktime"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_video_quicktime
```

`GET /repository/search/type/media_video_quicktime`

API to search for entries of type Quicktime Video

<h3 id="search-api-for-quicktime-video-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-quicktime-video-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typemediayoutubevideo">type/media_youtubevideo</h1>

Search API for 'YouTube Video' entry type

## Search API for 'YouTube Video' entry type

<a id="opIdsearch_media_youtubevideo"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/media_youtubevideo
```

`GET /repository/search/type/media_youtubevideo`

API to search for entries of type YouTube Video

<h3 id="search-api-for-youtube-video-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-youtube-video-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typenotes">type/notes</h1>

Search API for 'Notes' entry type

## Search API for 'Notes' entry type

<a id="opIdsearch_notes"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/notes
```

`GET /repository/search/type/notes`

API to search for entries of type Notes

<h3 id="search-api-for-notes-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_notes.note|query|string|false|Note|

<h3 id="search-api-for-notes-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typenotesjsonfile">type/notes_jsonfile</h1>

Search API for 'Json File' entry type

## Search API for 'Json File' entry type

<a id="opIdsearch_notes_jsonfile"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/notes_jsonfile
```

`GET /repository/search/type/notes_jsonfile`

API to search for entries of type Json File

<h3 id="search-api-for-json-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-json-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typenotesnote">type/notes_note</h1>

Search API for 'Note' entry type

## Search API for 'Note' entry type

<a id="opIdsearch_notes_note"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/notes_note
```

`GET /repository/search/type/notes_note`

API to search for entries of type Note

<h3 id="search-api-for-note-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-note-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typenotesnotebook">type/notes_notebook</h1>

Search API for 'Notebook' entry type

## Search API for 'Notebook' entry type

<a id="opIdsearch_notes_notebook"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/notes_notebook
```

`GET /repository/search/type/notes_notebook`

API to search for entries of type Notebook

<h3 id="search-api-for-notebook-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-notebook-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typenwsfeed">type/nwsfeed</h1>

Search API for 'NWS Forecast Feed' entry type

## Search API for 'NWS Forecast Feed' entry type

<a id="opIdsearch_nwsfeed"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/nwsfeed
```

`GET /repository/search/type/nwsfeed`

API to search for entries of type NWS Forecast Feed

<h3 id="search-api-for-nws-forecast-feed-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-nws-forecast-feed-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeopendaplink">type/opendaplink</h1>

Search API for 'OPeNDAP Link' entry type

## Search API for 'OPeNDAP Link' entry type

<a id="opIdsearch_opendaplink"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/opendaplink
```

`GET /repository/search/type/opendaplink`

API to search for entries of type OPeNDAP Link

<h3 id="search-api-for-opendap-link-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-opendap-link-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeowlclass">type/owl.class</h1>

Search API for 'OWL Class' entry type

## Search API for 'OWL Class' entry type

<a id="opIdsearch_owl.class"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/owl.class
```

`GET /repository/search/type/owl.class`

API to search for entries of type OWL Class

<h3 id="search-api-for-owl-class-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-owl-class-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeowlontology">type/owl.ontology</h1>

Search API for 'OWL Ontology' entry type

## Search API for 'OWL Ontology' entry type

<a id="opIdsearch_owl.ontology"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/owl.ontology
```

`GET /repository/search/type/owl.ontology`

API to search for entries of type OWL Ontology

<h3 id="search-api-for-owl-ontology-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-owl-ontology-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepasteitentry">type/pasteitentry</h1>

Search API for 'Paste Text Entry' entry type

## Search API for 'Paste Text Entry' entry type

<a id="opIdsearch_pasteitentry"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/pasteitentry
```

`GET /repository/search/type/pasteitentry`

API to search for entries of type Paste Text Entry

<h3 id="search-api-for-paste-text-entry-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-paste-text-entry-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepointtext">type/point_text</h1>

Search API for 'Text Point Data' entry type

## Search API for 'Text Point Data' entry type

<a id="opIdsearch_point_text"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/point_text
```

`GET /repository/search/type/point_text`

API to search for entries of type Text Point Data

<h3 id="search-api-for-text-point-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-text-point-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepolicestopdata">type/police_stop_data</h1>

Search API for 'Police Stop Data' entry type

## Search API for 'Police Stop Data' entry type

<a id="opIdsearch_police_stop_data"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/police_stop_data
```

`GET /repository/search/type/police_stop_data`

API to search for entries of type Police Stop Data

<h3 id="search-api-for-police-stop-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_police_stop_data.race|query|string|false|Race|
|search.db_police_stop_data.ethnicity|query|string|false|Ethnicity|
|search.db_police_stop_data.sex|query|string|false|Sex|
|search.db_police_stop_data.minutes|query|integer|false|Minutes|
|search.db_police_stop_data.date|query|string|false|Date|
|search.db_police_stop_data.address|query|string|false|Address|
|search.db_police_stop_data.resident|query|string|false|Resident|

<h3 id="search-api-for-police-stop-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepoll">type/poll</h1>

Search API for 'Poll' entry type

## Search API for 'Poll' entry type

<a id="opIdsearch_poll"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/poll
```

`GET /repository/search/type/poll`

API to search for entries of type Poll

<h3 id="search-api-for-poll-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-poll-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectcampaign">type/project_campaign</h1>

Search API for 'Campaign' entry type

## Search API for 'Campaign' entry type

<a id="opIdsearch_project_campaign"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_campaign
```

`GET /repository/search/type/project_campaign`

API to search for entries of type Campaign

<h3 id="search-api-for-campaign-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-campaign-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectcasestudy">type/project_casestudy</h1>

Search API for 'Case Study' entry type

## Search API for 'Case Study' entry type

<a id="opIdsearch_project_casestudy"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_casestudy
```

`GET /repository/search/type/project_casestudy`

API to search for entries of type Case Study

<h3 id="search-api-for-case-study-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_casestudy.intended_use|query|string|false|Intended Use|
|search.project_casestudy.location|query|string|false|Where|

<h3 id="search-api-for-case-study-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectcontribution">type/project_contribution</h1>

Search API for 'Research Contribution' entry type

## Search API for 'Research Contribution' entry type

<a id="opIdsearch_project_contribution"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_contribution
```

`GET /repository/search/type/project_contribution`

API to search for entries of type Research Contribution

<h3 id="search-api-for-research-contribution-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-research-contribution-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectdataformat">type/project_dataformat</h1>

Search API for 'Data Format' entry type

## Search API for 'Data Format' entry type

<a id="opIdsearch_project_dataformat"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_dataformat
```

`GET /repository/search/type/project_dataformat`

API to search for entries of type Data Format

<h3 id="search-api-for-data-format-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_dataformat.data_type|query|string|false|Data Type|
|search.project_dataformat.field|query|string|false|Field|

<h3 id="search-api-for-data-format-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectdataset">type/project_dataset</h1>

Search API for 'Dataset' entry type

## Search API for 'Dataset' entry type

<a id="opIdsearch_project_dataset"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_dataset
```

`GET /repository/search/type/project_dataset`

API to search for entries of type Dataset

<h3 id="search-api-for-dataset-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_dataset.dataset_id|query|string|false|Dataset ID|
|search.project_dataset.data_type|query|string|false|Data Type|
|search.project_dataset.data_level|query|string|false|Data Level|

<h3 id="search-api-for-dataset-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectdeployment">type/project_deployment</h1>

Search API for 'Deployment' entry type

## Search API for 'Deployment' entry type

<a id="opIdsearch_project_deployment"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_deployment
```

`GET /repository/search/type/project_deployment`

API to search for entries of type Deployment

<h3 id="search-api-for-deployment-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-deployment-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectexperiment">type/project_experiment</h1>

Search API for 'Experiment' entry type

## Search API for 'Experiment' entry type

<a id="opIdsearch_project_experiment"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_experiment
```

`GET /repository/search/type/project_experiment`

API to search for entries of type Experiment

<h3 id="search-api-for-experiment-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-experiment-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectfieldnote">type/project_fieldnote</h1>

Search API for 'Field Note' entry type

## Search API for 'Field Note' entry type

<a id="opIdsearch_project_fieldnote"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_fieldnote
```

`GET /repository/search/type/project_fieldnote`

API to search for entries of type Field Note

<h3 id="search-api-for-field-note-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-field-note-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectgpscontrolpoints">type/project_gps_controlpoints</h1>

Search API for 'Control Points File' entry type

## Search API for 'Control Points File' entry type

<a id="opIdsearch_project_gps_controlpoints"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_gps_controlpoints
```

`GET /repository/search/type/project_gps_controlpoints`

API to search for entries of type Control Points File

<h3 id="search-api-for-control-points-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-control-points-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectgpsraw">type/project_gps_raw</h1>

Search API for 'Raw GPS File' entry type

## Search API for 'Raw GPS File' entry type

<a id="opIdsearch_project_gps_raw"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_gps_raw
```

`GET /repository/search/type/project_gps_raw`

API to search for entries of type Raw GPS File

<h3 id="search-api-for-raw-gps-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-raw-gps-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectgpsrinex">type/project_gps_rinex</h1>

Search API for 'RINEX File' entry type

## Search API for 'RINEX File' entry type

<a id="opIdsearch_project_gps_rinex"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_gps_rinex
```

`GET /repository/search/type/project_gps_rinex`

API to search for entries of type RINEX File

<h3 id="search-api-for-rinex-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-rinex-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectinstrument">type/project_instrument</h1>

Search API for 'Instrument Data Collection' entry type

## Search API for 'Instrument Data Collection' entry type

<a id="opIdsearch_project_instrument"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_instrument
```

`GET /repository/search/type/project_instrument`

API to search for entries of type Instrument Data Collection

<h3 id="search-api-for-instrument-data-collection-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-instrument-data-collection-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectlearningresource">type/project_learning_resource</h1>

Search API for 'Teaching Resource' entry type

## Search API for 'Teaching Resource' entry type

<a id="opIdsearch_project_learning_resource"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_learning_resource
```

`GET /repository/search/type/project_learning_resource`

API to search for entries of type Teaching Resource

<h3 id="search-api-for-teaching-resource-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_learning_resource.topic|query|string|false|Topic|
|search.project_learning_resource.grade_level|query|string|false|Grade Level|

<h3 id="search-api-for-teaching-resource-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectmeeting">type/project_meeting</h1>

Search API for 'Meeting' entry type

## Search API for 'Meeting' entry type

<a id="opIdsearch_project_meeting"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_meeting
```

`GET /repository/search/type/project_meeting`

API to search for entries of type Meeting

<h3 id="search-api-for-meeting-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_meeting.topic|query|string|false|Topic|
|search.project_meeting.location|query|string|false|Location|
|search.project_meeting.participants|query|string|false|Participants|

<h3 id="search-api-for-meeting-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectorganization">type/project_organization</h1>

Search API for 'Organization' entry type

## Search API for 'Organization' entry type

<a id="opIdsearch_project_organization"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_organization
```

`GET /repository/search/type/project_organization`

API to search for entries of type Organization

<h3 id="search-api-for-organization-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_organization.organization_type|query|string|false|Organization Type|
|search.project_organization.status|query|string|false|Status|

<h3 id="search-api-for-organization-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectprogram">type/project_program</h1>

Search API for 'Program' entry type

## Search API for 'Program' entry type

<a id="opIdsearch_project_program"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_program
```

`GET /repository/search/type/project_program`

API to search for entries of type Program

<h3 id="search-api-for-program-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-program-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectproject">type/project_project</h1>

Search API for 'Project' entry type

## Search API for 'Project' entry type

<a id="opIdsearch_project_project"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_project
```

`GET /repository/search/type/project_project`

API to search for entries of type Project

<h3 id="search-api-for-project-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-project-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectservice">type/project_service</h1>

Search API for 'Data Access Service' entry type

## Search API for 'Data Access Service' entry type

<a id="opIdsearch_project_service"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_service
```

`GET /repository/search/type/project_service`

API to search for entries of type Data Access Service

<h3 id="search-api-for-data-access-service-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_service.service_type|query|string|false|Service Type|
|search.project_service.provider|query|string|false|Provider|

<h3 id="search-api-for-data-access-service-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectsite">type/project_site</h1>

Search API for 'Site' entry type

## Search API for 'Site' entry type

<a id="opIdsearch_project_site"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_site
```

`GET /repository/search/type/project_site`

API to search for entries of type Site

<h3 id="search-api-for-site-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_site.short_name|query|string|false|Short Name|
|search.project_site.site_type|query|string|false|Site Type|
|search.project_site.status|query|string|false|Status|
|search.project_site.network|query|string|false|Network|
|search.project_site.country|query|string|false|Country|
|search.project_site.state|query|string|false|State/Province|
|search.project_site.county|query|string|false|County|

<h3 id="search-api-for-site-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectsoftwarepackage">type/project_softwarepackage</h1>

Search API for 'Software Tool' entry type

## Search API for 'Software Tool' entry type

<a id="opIdsearch_project_softwarepackage"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_softwarepackage
```

`GET /repository/search/type/project_softwarepackage`

API to search for entries of type Software Tool

<h3 id="search-api-for-software-tool-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_softwarepackage.software_use|query|string|false|Software Use|
|search.project_softwarepackage.software_type|query|string|false|Software Type|
|search.project_softwarepackage.domain|query|string|false|Science Domain|
|search.project_softwarepackage.platform|query|string|false|Platform|
|search.project_softwarepackage.license|query|string|false|License|
|search.project_softwarepackage.status|query|string|false|Development Status|
|search.project_softwarepackage.capabilities|query|string|false|Capabilities|

<h3 id="search-api-for-software-tool-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectstandardname">type/project_standard_name</h1>

Search API for 'Standard Parameter Name' entry type

## Search API for 'Standard Parameter Name' entry type

<a id="opIdsearch_project_standard_name"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_standard_name
```

`GET /repository/search/type/project_standard_name`

API to search for entries of type Standard Parameter Name

<h3 id="search-api-for-standard-parameter-name-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_standard_name.unit|query|string|false|Canonical Unit|
|search.project_standard_name.aliases|query|string|false|Aliases|

<h3 id="search-api-for-standard-parameter-name-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectsurveylocation">type/project_surveylocation</h1>

Search API for 'Survey Location' entry type

## Search API for 'Survey Location' entry type

<a id="opIdsearch_project_surveylocation"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_surveylocation
```

`GET /repository/search/type/project_surveylocation`

API to search for entries of type Survey Location

<h3 id="search-api-for-survey-location-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-survey-location-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectterm">type/project_term</h1>

Search API for 'Vocabulary Term' entry type

## Search API for 'Vocabulary Term' entry type

<a id="opIdsearch_project_term"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_term
```

`GET /repository/search/type/project_term`

API to search for entries of type Vocabulary Term

<h3 id="search-api-for-vocabulary-term-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.project_term.value|query|string|false|Term Value|

<h3 id="search-api-for-vocabulary-term-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectvisit">type/project_visit</h1>

Search API for 'Site Visit' entry type

## Search API for 'Site Visit' entry type

<a id="opIdsearch_project_visit"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_visit
```

`GET /repository/search/type/project_visit`

API to search for entries of type Site Visit

<h3 id="search-api-for-site-visit-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-site-visit-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeprojectvocabulary">type/project_vocabulary</h1>

Search API for 'Vocabulary' entry type

## Search API for 'Vocabulary' entry type

<a id="opIdsearch_project_vocabulary"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/project_vocabulary
```

`GET /repository/search/type/project_vocabulary`

API to search for entries of type Vocabulary

<h3 id="search-api-for-vocabulary-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-vocabulary-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepropertysales">type/property_sales</h1>

Search API for 'Property Sales' entry type

## Search API for 'Property Sales' entry type

<a id="opIdsearch_property_sales"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/property_sales
```

`GET /repository/search/type/property_sales`

API to search for entries of type Property Sales

<h3 id="search-api-for-property-sales-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_property_sales.property_address|query|string|false|Property Address|
|search.db_property_sales.city|query|string|false|City|
|search.db_property_sales.zipcode|query|string|false|Zip Code|
|search.db_property_sales.sale_price|query|number(double)|false|Sale Price|
|search.db_property_sales.sale_date|query|string|false|Sale Date|
|search.db_property_sales.seller|query|string|false|Seller|
|search.db_property_sales.buyer|query|string|false|Buyer|
|search.db_property_sales.type|query|string|false|Property Type|
|search.db_property_sales.building_description|query|string|false|Building Description|
|search.db_property_sales.building_design|query|string|false|Building Design|
|search.db_property_sales.subdivision|query|string|false|Subdivision|
|search.db_property_sales.location|query|string|false|Location|

<h3 id="search-api-for-property-sales-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepropertydb">type/propertydb</h1>

Search API for 'Property Database' entry type

## Search API for 'Property Database' entry type

<a id="opIdsearch_propertydb"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/propertydb
```

`GET /repository/search/type/propertydb`

API to search for entries of type Property Database

<h3 id="search-api-for-property-database-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_propertydb.property_id|query|string|false|Property ID|
|search.db_propertydb.owner|query|string|false|Owner|
|search.db_propertydb.address|query|string|false|Address|
|search.db_propertydb.city|query|string|false|City|
|search.db_propertydb.state|query|string|false|State|
|search.db_propertydb.value|query|integer|false|Property Value|
|search.db_propertydb.building_type|query|string|false|Building Type|
|search.db_propertydb.house_size|query|integer|false|Building Sq Ft|
|search.db_propertydb.lot_sqft|query|integer|false|Lot Size Sq Ft|
|search.db_propertydb.lot_acres|query|number(double)|false|Lot Size Acres|
|search.db_propertydb.price_sqft|query|number(double)|false|$-sqft|
|search.db_propertydb.location|query|string|false|Location|

<h3 id="search-api-for-property-database-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typepythonnotebook">type/python_notebook</h1>

Search API for 'IPython Notebook file' entry type

## Search API for 'IPython Notebook file' entry type

<a id="opIdsearch_python_notebook"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/python_notebook
```

`GET /repository/search/type/python_notebook`

API to search for entries of type IPython Notebook file

<h3 id="search-api-for-ipython-notebook-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-ipython-notebook-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeslackteam">type/slack_team</h1>

Search API for 'Slack Team' entry type

## Search API for 'Slack Team' entry type

<a id="opIdsearch_slack_team"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/slack_team
```

`GET /repository/search/type/slack_team`

API to search for entries of type Slack Team

<h3 id="search-api-for-slack-team-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-slack-team-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typestatusboard">type/statusboard</h1>

Search API for 'Status Board' entry type

## Search API for 'Status Board' entry type

<a id="opIdsearch_statusboard"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/statusboard
```

`GET /repository/search/type/statusboard`

API to search for entries of type Status Board

<h3 id="search-api-for-status-board-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_statusboard.what|query|string|false|What|
|search.db_statusboard.status|query|string|false|Status|

<h3 id="search-api-for-status-board-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typesunrisesunset">type/sunrisesunset</h1>

Search API for 'Sunrise/Sunset Display' entry type

## Search API for 'Sunrise/Sunset Display' entry type

<a id="opIdsearch_sunrisesunset"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/sunrisesunset
```

`GET /repository/search/type/sunrisesunset`

API to search for entries of type Sunrise/Sunset Display

<h3 id="search-api-for-sunrisesunset-display-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sunrisesunset-display-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetasks">type/tasks</h1>

Search API for 'Tasks' entry type

## Search API for 'Tasks' entry type

<a id="opIdsearch_tasks"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/tasks
```

`GET /repository/search/type/tasks`

API to search for entries of type Tasks

<h3 id="search-api-for-tasks-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_tasks.title|query|string|false|Title|
|search.db_tasks.priority|query|string|false|Priority|
|search.db_tasks.status|query|string|false|Status|
|search.db_tasks.complete|query|number(double)|false|% Complete|
|search.db_tasks.assignedto|query|string|false|Assigned To|
|search.db_tasks.startdate|query|string|false|Start Date|
|search.db_tasks.enddate|query|string|false|End Date|

<h3 id="search-api-for-tasks-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetmdbmovies">type/tmdbmovies</h1>

Search API for 'Tmdb Movies' entry type

## Search API for 'Tmdb Movies' entry type

<a id="opIdsearch_tmdbmovies"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/tmdbmovies
```

`GET /repository/search/type/tmdbmovies`

API to search for entries of type Tmdb Movies

<h3 id="search-api-for-tmdb-movies-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_tmdbmovies.original_title|query|string|false|Original Title|
|search.db_tmdbmovies.overview|query|string|false|Overview|
|search.db_tmdbmovies.budget|query|number(double)|false|Budget|
|search.db_tmdbmovies.genres|query|string|false|Genres|
|search.db_tmdbmovies.homepage|query|string|false|Homepage|
|search.db_tmdbmovies.movie_id|query|string|false|Id|
|search.db_tmdbmovies.keywords|query|string|false|Keywords|
|search.db_tmdbmovies.original_language|query|string|false|Original Language|
|search.db_tmdbmovies.popularity|query|number(double)|false|Popularity|
|search.db_tmdbmovies.production_companies|query|string|false|Production Companies|
|search.db_tmdbmovies.production_countries|query|string|false|Production Countries|
|search.db_tmdbmovies.release_date|query|string|false|Release Date|
|search.db_tmdbmovies.revenue|query|number(double)|false|Revenue|
|search.db_tmdbmovies.runtime|query|number(double)|false|Runtime|
|search.db_tmdbmovies.spoken_languages|query|string|false|Spoken Languages|
|search.db_tmdbmovies.status|query|string|false|Status|
|search.db_tmdbmovies.tagline|query|string|false|Tagline|
|search.db_tmdbmovies.title|query|string|false|Title|
|search.db_tmdbmovies.vote_average|query|number(double)|false|Vote Average|
|search.db_tmdbmovies.vote_count|query|number(double)|false|Vote Count|

<h3 id="search-api-for-tmdb-movies-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetodo">type/todo</h1>

Search API for 'Todo' entry type

## Search API for 'Todo' entry type

<a id="opIdsearch_todo"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/todo
```

`GET /repository/search/type/todo`

API to search for entries of type Todo

<h3 id="search-api-for-todo-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_todo.checked|query|boolean|false|Done|
|search.db_todo.title|query|string|false|What|
|search.db_todo.category|query|string|false|Category|

<h3 id="search-api-for-todo-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetripevent">type/trip_event</h1>

Search API for 'Event' entry type

## Search API for 'Event' entry type

<a id="opIdsearch_trip_event"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/trip_event
```

`GET /repository/search/type/trip_event`

API to search for entries of type Event

<h3 id="search-api-for-event-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-event-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetripflight">type/trip_flight</h1>

Search API for 'Flight Leg' entry type

## Search API for 'Flight Leg' entry type

<a id="opIdsearch_trip_flight"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/trip_flight
```

`GET /repository/search/type/trip_flight`

API to search for entries of type Flight Leg

<h3 id="search-api-for-flight-leg-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-flight-leg-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetriphotel">type/trip_hotel</h1>

Search API for 'Lodging' entry type

## Search API for 'Lodging' entry type

<a id="opIdsearch_trip_hotel"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/trip_hotel
```

`GET /repository/search/type/trip_hotel`

API to search for entries of type Lodging

<h3 id="search-api-for-lodging-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-lodging-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetripreport">type/trip_report</h1>

Search API for 'Trip Report' entry type

## Search API for 'Trip Report' entry type

<a id="opIdsearch_trip_report"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/trip_report
```

`GET /repository/search/type/trip_report`

API to search for entries of type Trip Report

<h3 id="search-api-for-trip-report-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-trip-report-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetriptrip">type/trip_trip</h1>

Search API for 'Trip' entry type

## Search API for 'Trip' entry type

<a id="opIdsearch_trip_trip"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/trip_trip
```

`GET /repository/search/type/trip_trip`

API to search for entries of type Trip

<h3 id="search-api-for-trip-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-trip-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeawcmetar">type/type_awc_metar</h1>

Search API for 'AWC Weather Observations' entry type

## Search API for 'AWC Weather Observations' entry type

<a id="opIdsearch_type_awc_metar"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_awc_metar
```

`GET /repository/search/type/type_awc_metar`

API to search for entries of type AWC Weather Observations

<h3 id="search-api-for-awc-weather-observations-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_awc_metar.site_id|query|string|false|Site ID|

<h3 id="search-api-for-awc-weather-observations-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypebizstockseries">type/type_biz_stockseries</h1>

Search API for 'Stock Ticker Data' entry type

## Search API for 'Stock Ticker Data' entry type

<a id="opIdsearch_type_biz_stockseries"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_biz_stockseries
```

`GET /repository/search/type/type_biz_stockseries`

API to search for entries of type Stock Ticker Data

<h3 id="search-api-for-stock-ticker-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-stock-ticker-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeblsseries">type/type_bls_series</h1>

Search API for 'BLS Series' entry type

## Search API for 'BLS Series' entry type

<a id="opIdsearch_type_bls_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_bls_series
```

`GET /repository/search/type/type_bls_series`

API to search for entries of type BLS Series

<h3 id="search-api-for-bls-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_bls_series.survey_name|query|string|false|Survey Name|
|search.type_bls_series.measure_data_type|query|string|false|Measure Data Type|
|search.type_bls_series.industry|query|string|false|Industry|
|search.type_bls_series.sector|query|string|false|Sector|
|search.type_bls_series.area|query|string|false|Area|
|search.type_bls_series.item|query|string|false|Item|
|search.type_bls_series.seasonality|query|string|false|Seasonality|

<h3 id="search-api-for-bls-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeblssurvey">type/type_bls_survey</h1>

Search API for 'BLS Survey' entry type

## Search API for 'BLS Survey' entry type

<a id="opIdsearch_type_bls_survey"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_bls_survey
```

`GET /repository/search/type/type_bls_survey`

API to search for entries of type BLS Survey

<h3 id="search-api-for-bls-survey-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-bls-survey-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypecensusacs">type/type_census_acs</h1>

Search API for 'US Census ACS Data' entry type

## Search API for 'US Census ACS Data' entry type

<a id="opIdsearch_type_census_acs"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_census_acs
```

`GET /repository/search/type/type_census_acs`

API to search for entries of type US Census ACS Data

<h3 id="search-api-for-us-census-acs-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_census_acs.fields|query|string|false|Indicators|
|search.type_census_acs.for_type|query|string|false|For|
|search.type_census_acs.in_type1|query|string|false|In|
|search.type_census_acs.in_type2|query|string|false|In #2|

<h3 id="search-api-for-us-census-acs-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedaymet">type/type_daymet</h1>

Search API for 'Daymet Daily Weather' entry type

## Search API for 'Daymet Daily Weather' entry type

<a id="opIdsearch_type_daymet"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_daymet
```

`GET /repository/search/type/type_daymet`

API to search for entries of type Daymet Daily Weather

<h3 id="search-api-for-daymet-daily-weather-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-daymet-daily-weather-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedbtable">type/type_db_table</h1>

Search API for 'Database Table' entry type

## Search API for 'Database Table' entry type

<a id="opIdsearch_type_db_table"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_db_table
```

`GET /repository/search/type/type_db_table`

API to search for entries of type Database Table

<h3 id="search-api-for-database-table-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-database-table-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumentcsv">type/type_document_csv</h1>

Search API for 'CSV File' entry type

## Search API for 'CSV File' entry type

<a id="opIdsearch_type_document_csv"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_csv
```

`GET /repository/search/type/type_document_csv`

API to search for entries of type CSV File

<h3 id="search-api-for-csv-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-csv-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumentdoc">type/type_document_doc</h1>

Search API for 'Word File' entry type

## Search API for 'Word File' entry type

<a id="opIdsearch_type_document_doc"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_doc
```

`GET /repository/search/type/type_document_doc`

API to search for entries of type Word File

<h3 id="search-api-for-word-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-word-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumenthtml">type/type_document_html</h1>

Search API for 'HTML File' entry type

## Search API for 'HTML File' entry type

<a id="opIdsearch_type_document_html"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_html
```

`GET /repository/search/type/type_document_html`

API to search for entries of type HTML File

<h3 id="search-api-for-html-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-html-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumentpdf">type/type_document_pdf</h1>

Search API for 'PDF File' entry type

## Search API for 'PDF File' entry type

<a id="opIdsearch_type_document_pdf"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_pdf
```

`GET /repository/search/type/type_document_pdf`

API to search for entries of type PDF File

<h3 id="search-api-for-pdf-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-pdf-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumentppt">type/type_document_ppt</h1>

Search API for 'Powerpoint File' entry type

## Search API for 'Powerpoint File' entry type

<a id="opIdsearch_type_document_ppt"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_ppt
```

`GET /repository/search/type/type_document_ppt`

API to search for entries of type Powerpoint File

<h3 id="search-api-for-powerpoint-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-powerpoint-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedocumentxls">type/type_document_xls</h1>

Search API for 'Excel File' entry type

## Search API for 'Excel File' entry type

<a id="opIdsearch_type_document_xls"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_document_xls
```

`GET /repository/search/type/type_document_xls`

API to search for entries of type Excel File

<h3 id="search-api-for-excel-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-excel-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypedrilsdowncasestudy">type/type_drilsdown_casestudy</h1>

Search API for 'Drilsdown Case Study' entry type

## Search API for 'Drilsdown Case Study' entry type

<a id="opIdsearch_type_drilsdown_casestudy"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_drilsdown_casestudy
```

`GET /repository/search/type/type_drilsdown_casestudy`

API to search for entries of type Drilsdown Case Study

<h3 id="search-api-for-drilsdown-case-study-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-drilsdown-case-study-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeedgarfiling">type/type_edgar_filing</h1>

Search API for 'SEC EDGAR Filing' entry type

## Search API for 'SEC EDGAR Filing' entry type

<a id="opIdsearch_type_edgar_filing"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_edgar_filing
```

`GET /repository/search/type/type_edgar_filing`

API to search for entries of type SEC EDGAR Filing

<h3 id="search-api-for-sec-edgar-filing-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_edgar_filing.form_type|query|string|false|Form Type|
|search.type_edgar_filing.company_name|query|string|false|Company Name|
|search.type_edgar_filing.cik_number|query|string|false|CIK Number|
|search.type_edgar_filing.standard_industrial_classification|query|string|false|Standard Industrial Classification|
|search.type_edgar_filing.irs_number|query|string|false|IRS Number|
|search.type_edgar_filing.state|query|string|false|State of Incorporation|

<h3 id="search-api-for-sec-edgar-filing-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeeiacategory">type/type_eia_category</h1>

Search API for 'EIA Category' entry type

## Search API for 'EIA Category' entry type

<a id="opIdsearch_type_eia_category"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_eia_category
```

`GET /repository/search/type/type_eia_category`

API to search for entries of type EIA Category

<h3 id="search-api-for-eia-category-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-eia-category-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeeiaseries">type/type_eia_series</h1>

Search API for 'EIA Series' entry type

## Search API for 'EIA Series' entry type

<a id="opIdsearch_type_eia_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_eia_series
```

`GET /repository/search/type/type_eia_series`

API to search for entries of type EIA Series

<h3 id="search-api-for-eia-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-eia-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrifeatureserver">type/type_esri_featureserver</h1>

Search API for 'ESRI Feature Server' entry type

## Search API for 'ESRI Feature Server' entry type

<a id="opIdsearch_type_esri_featureserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_featureserver
```

`GET /repository/search/type/type_esri_featureserver`

API to search for entries of type ESRI Feature Server

<h3 id="search-api-for-esri-feature-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-feature-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrigeometryserver">type/type_esri_geometryserver</h1>

Search API for 'ESRI Geometry Server' entry type

## Search API for 'ESRI Geometry Server' entry type

<a id="opIdsearch_type_esri_geometryserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_geometryserver
```

`GET /repository/search/type/type_esri_geometryserver`

API to search for entries of type ESRI Geometry Server

<h3 id="search-api-for-esri-geometry-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-geometry-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrigpserver">type/type_esri_gpserver</h1>

Search API for 'ESRI GP Server' entry type

## Search API for 'ESRI GP Server' entry type

<a id="opIdsearch_type_esri_gpserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_gpserver
```

`GET /repository/search/type/type_esri_gpserver`

API to search for entries of type ESRI GP Server

<h3 id="search-api-for-esri-gp-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-gp-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesriimageserver">type/type_esri_imageserver</h1>

Search API for 'ESRI Image Server' entry type

## Search API for 'ESRI Image Server' entry type

<a id="opIdsearch_type_esri_imageserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_imageserver
```

`GET /repository/search/type/type_esri_imageserver`

API to search for entries of type ESRI Image Server

<h3 id="search-api-for-esri-image-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-image-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrilayer">type/type_esri_layer</h1>

Search API for 'ESRI Layer' entry type

## Search API for 'ESRI Layer' entry type

<a id="opIdsearch_type_esri_layer"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_layer
```

`GET /repository/search/type/type_esri_layer`

API to search for entries of type ESRI Layer

<h3 id="search-api-for-esri-layer-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_esri_layer.layer_type|query|string|false|Layer Type|

<h3 id="search-api-for-esri-layer-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrimapserver">type/type_esri_mapserver</h1>

Search API for 'ESRI Map Server' entry type

## Search API for 'ESRI Map Server' entry type

<a id="opIdsearch_type_esri_mapserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_mapserver
```

`GET /repository/search/type/type_esri_mapserver`

API to search for entries of type ESRI Map Server

<h3 id="search-api-for-esri-map-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-map-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrirestfolder">type/type_esri_restfolder</h1>

Search API for 'ESRI Services Folder' entry type

## Search API for 'ESRI Services Folder' entry type

<a id="opIdsearch_type_esri_restfolder"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_restfolder
```

`GET /repository/search/type/type_esri_restfolder`

API to search for entries of type ESRI Services Folder

<h3 id="search-api-for-esri-services-folder-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-services-folder-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrirestserver">type/type_esri_restserver</h1>

Search API for 'ESRI Web Server' entry type

## Search API for 'ESRI Web Server' entry type

<a id="opIdsearch_type_esri_restserver"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_restserver
```

`GET /repository/search/type/type_esri_restserver`

API to search for entries of type ESRI Web Server

<h3 id="search-api-for-esri-web-server-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-web-server-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeesrirestservice">type/type_esri_restservice</h1>

Search API for 'ESRI Rest Service' entry type

## Search API for 'ESRI Rest Service' entry type

<a id="opIdsearch_type_esri_restservice"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_esri_restservice
```

`GET /repository/search/type/type_esri_restservice`

API to search for entries of type ESRI Rest Service

<h3 id="search-api-for-esri-rest-service-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-esri-rest-service-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeextremes">type/type_extremes</h1>

Search API for 'NOAA Extremes Data' entry type

## Search API for 'NOAA Extremes Data' entry type

<a id="opIdsearch_type_extremes"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_extremes
```

`GET /repository/search/type/type_extremes`

API to search for entries of type NOAA Extremes Data

<h3 id="search-api-for-noaa-extremes-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_extremes.region|query|string|false|US Climate Region|
|search.type_extremes.variable|query|string|false|Variable|

<h3 id="search-api-for-noaa-extremes-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypefredcategory">type/type_fred_category</h1>

Search API for 'FRED Category' entry type

## Search API for 'FRED Category' entry type

<a id="opIdsearch_type_fred_category"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_fred_category
```

`GET /repository/search/type/type_fred_category`

API to search for entries of type FRED Category

<h3 id="search-api-for-fred-category-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-fred-category-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypefredseries">type/type_fred_series</h1>

Search API for 'FRED Series' entry type

## Search API for 'FRED Series' entry type

<a id="opIdsearch_type_fred_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_fred_series
```

`GET /repository/search/type/type_fred_series`

API to search for entries of type FRED Series

<h3 id="search-api-for-fred-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-fred-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfsagency">type/type_gtfs_agency</h1>

Search API for 'Transit Agency' entry type

## Search API for 'Transit Agency' entry type

<a id="opIdsearch_type_gtfs_agency"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_agency
```

`GET /repository/search/type/type_gtfs_agency`

API to search for entries of type Transit Agency

<h3 id="search-api-for-transit-agency-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-transit-agency-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfsroute">type/type_gtfs_route</h1>

Search API for 'Transit Route' entry type

## Search API for 'Transit Route' entry type

<a id="opIdsearch_type_gtfs_route"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_route
```

`GET /repository/search/type/type_gtfs_route`

API to search for entries of type Transit Route

<h3 id="search-api-for-transit-route-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_gtfs_route.route_id|query|string|false|Route ID|
|search.type_gtfs_route.stop_names|query|string|false|Stop Names|

<h3 id="search-api-for-transit-route-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfsroutes">type/type_gtfs_routes</h1>

Search API for 'Transit Route Collection' entry type

## Search API for 'Transit Route Collection' entry type

<a id="opIdsearch_type_gtfs_routes"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_routes
```

`GET /repository/search/type/type_gtfs_routes`

API to search for entries of type Transit Route Collection

<h3 id="search-api-for-transit-route-collection-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-transit-route-collection-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfsstop">type/type_gtfs_stop</h1>

Search API for 'Transit Stop' entry type

## Search API for 'Transit Stop' entry type

<a id="opIdsearch_type_gtfs_stop"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_stop
```

`GET /repository/search/type/type_gtfs_stop`

API to search for entries of type Transit Stop

<h3 id="search-api-for-transit-stop-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_gtfs_stop.stop_id|query|string|false|Stop ID|
|search.type_gtfs_stop.stop_code|query|string|false|Stop Code|
|search.type_gtfs_stop.zone_id|query|string|false|Zone ID|
|search.type_gtfs_stop.location_type|query|string|false|Location Type|
|search.type_gtfs_stop.wheelchair_boarding|query|string|false|Wheelchair Boarding|

<h3 id="search-api-for-transit-stop-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfsstops">type/type_gtfs_stops</h1>

Search API for 'Transit Stop Collection' entry type

## Search API for 'Transit Stop Collection' entry type

<a id="opIdsearch_type_gtfs_stops"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_stops
```

`GET /repository/search/type/type_gtfs_stops`

API to search for entries of type Transit Stop Collection

<h3 id="search-api-for-transit-stop-collection-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-transit-stop-collection-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypegtfstrip">type/type_gtfs_trip</h1>

Search API for 'Transit Trip' entry type

## Search API for 'Transit Trip' entry type

<a id="opIdsearch_type_gtfs_trip"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_gtfs_trip
```

`GET /repository/search/type/type_gtfs_trip`

API to search for entries of type Transit Trip

<h3 id="search-api-for-transit-trip-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_gtfs_trip.trip_id|query|string|false|Trip ID|
|search.type_gtfs_trip.stop_ids|query|string|false|Stop IDS|
|search.type_gtfs_trip.wheelchair_accessible|query|string|false|Wheelchair Accessible|
|search.type_gtfs_trip.bikes_allowed|query|string|false|Bikes Allowed|

<h3 id="search-api-for-transit-trip-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypehazarddata">type/type_hazarddata</h1>

Search API for 'Hazard Data' entry type

## Search API for 'Hazard Data' entry type

<a id="opIdsearch_type_hazarddata"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_hazarddata
```

`GET /repository/search/type/type_hazarddata`

API to search for entries of type Hazard Data

<h3 id="search-api-for-hazard-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_hazarddata.source|query|string|false|Source Agency|

<h3 id="search-api-for-hazard-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypehydrocolorado">type/type_hydro_colorado</h1>

Search API for 'Colorado DNR Stream Gage' entry type

## Search API for 'Colorado DNR Stream Gage' entry type

<a id="opIdsearch_type_hydro_colorado"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_hydro_colorado
```

`GET /repository/search/type/type_hydro_colorado`

API to search for entries of type Colorado DNR Stream Gage

<h3 id="search-api-for-colorado-dnr-stream-gage-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_hydro_colorado.site_id|query|string|false|Site ID|

<h3 id="search-api-for-colorado-dnr-stream-gage-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeidvbundle">type/type_idv_bundle</h1>

Search API for 'IDV Bundle' entry type

## Search API for 'IDV Bundle' entry type

<a id="opIdsearch_type_idv_bundle"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_idv_bundle
```

`GET /repository/search/type/type_idv_bundle`

API to search for entries of type IDV Bundle

<h3 id="search-api-for-idv-bundle-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-idv-bundle-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeimage">type/type_image</h1>

Search API for 'Image' entry type

## Search API for 'Image' entry type

<a id="opIdsearch_type_image"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_image
```

`GET /repository/search/type/type_image`

API to search for entries of type Image

<h3 id="search-api-for-image-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-image-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeimageairport">type/type_image_airport</h1>

Search API for 'Airport Image' entry type

## Search API for 'Airport Image' entry type

<a id="opIdsearch_type_image_airport"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_image_airport
```

`GET /repository/search/type/type_image_airport`

API to search for entries of type Airport Image

<h3 id="search-api-for-airport-image-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-airport-image-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeimagewebcam">type/type_image_webcam</h1>

Search API for 'Webcam' entry type

## Search API for 'Webcam' entry type

<a id="opIdsearch_type_image_webcam"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_image_webcam
```

`GET /repository/search/type/type_image_webcam`

API to search for entries of type Webcam

<h3 id="search-api-for-webcam-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-webcam-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypemb">type/type_mb</h1>

Search API for 'MB Bathymetry' entry type

## Search API for 'MB Bathymetry' entry type

<a id="opIdsearch_type_mb"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_mb
```

`GET /repository/search/type/type_mb`

API to search for entries of type MB Bathymetry

<h3 id="search-api-for-mb-bathymetry-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-mb-bathymetry-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypembcollection">type/type_mb_collection</h1>

Search API for 'Bathymetry Collection' entry type

## Search API for 'Bathymetry Collection' entry type

<a id="opIdsearch_type_mb_collection"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_mb_collection
```

`GET /repository/search/type/type_mb_collection`

API to search for entries of type Bathymetry Collection

<h3 id="search-api-for-bathymetry-collection-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-bathymetry-collection-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypembpointbasic">type/type_mb_point_basic</h1>

Search API for 'Basic MB point file' entry type

## Search API for 'Basic MB point file' entry type

<a id="opIdsearch_type_mb_point_basic"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_mb_point_basic
```

`GET /repository/search/type/type_mb_point_basic`

API to search for entries of type Basic MB point file

<h3 id="search-api-for-basic-mb-point-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-basic-mb-point-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypemetametadictionary">type/type_metameta_dictionary</h1>

Search API for 'Metadata Dictionary' entry type

## Search API for 'Metadata Dictionary' entry type

<a id="opIdsearch_type_metameta_dictionary"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_metameta_dictionary
```

`GET /repository/search/type/type_metameta_dictionary`

API to search for entries of type Metadata Dictionary

<h3 id="search-api-for-metadata-dictionary-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_metameta_dictionary.field_index|query|integer|false|Index|
|search.type_metameta_dictionary.dictionary_type|query|string|false|Type|
|search.type_metameta_dictionary.short_name|query|string|false|Short Name|
|search.type_metameta_dictionary.super_type|query|string|false|Super Type|
|search.type_metameta_dictionary.isgroup|query|boolean|false|Is Group|
|search.type_metameta_dictionary.handler_class|query|string|false|Handler Class|
|search.type_metameta_dictionary.properties|query|string|false|Properties|
|search.type_metameta_dictionary.wiki_text|query|string|false|Wiki Text|

<h3 id="search-api-for-metadata-dictionary-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypemetametafield">type/type_metameta_field</h1>

Search API for 'Metadata Field' entry type

## Search API for 'Metadata Field' entry type

<a id="opIdsearch_type_metameta_field"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_metameta_field
```

`GET /repository/search/type/type_metameta_field`

API to search for entries of type Metadata Field

<h3 id="search-api-for-metadata-field-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_metameta_field.field_index|query|integer|false|Index|
|search.type_metameta_field.field_id|query|string|false|Field ID|
|search.type_metameta_field.datatype|query|string|false|Data Type|
|search.type_metameta_field.enumeration_values|query|string|false|Enumeration Values|
|search.type_metameta_field.properties|query|string|false|Properties|
|search.type_metameta_field.database_column_size|query|integer|false|Database Column Size|
|search.type_metameta_field.missing|query|string|false|Missing Value|
|search.type_metameta_field.unit|query|string|false|Unit|

<h3 id="search-api-for-metadata-field-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypenasaames">type/type_nasaames</h1>

Search API for 'NASA AMES File' entry type

## Search API for 'NASA AMES File' entry type

<a id="opIdsearch_type_nasaames"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_nasaames
```

`GET /repository/search/type/type_nasaames`

API to search for entries of type NASA AMES File

<h3 id="search-api-for-nasa-ames-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-nasa-ames-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypencss">type/type_ncss</h1>

Search API for 'NetCDF Point Subset' entry type

## Search API for 'NetCDF Point Subset' entry type

<a id="opIdsearch_type_ncss"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_ncss
```

`GET /repository/search/type/type_ncss`

API to search for entries of type NetCDF Point Subset

<h3 id="search-api-for-netcdf-point-subset-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-netcdf-point-subset-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypenitf">type/type_nitf</h1>

Search API for 'NITF File' entry type

## Search API for 'NITF File' entry type

<a id="opIdsearch_type_nitf"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_nitf
```

`GET /repository/search/type/type_nitf`

API to search for entries of type NITF File

<h3 id="search-api-for-nitf-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-nitf-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointamerifluxlevel2">type/type_point_ameriflux_level2</h1>

Search API for 'Ameriflux Level 2 CSV File' entry type

## Search API for 'Ameriflux Level 2 CSV File' entry type

<a id="opIdsearch_type_point_ameriflux_level2"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ameriflux_level2
```

`GET /repository/search/type/type_point_ameriflux_level2`

API to search for entries of type Ameriflux Level 2 CSV File

<h3 id="search-api-for-ameriflux-level-2-csv-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_ameriflux_level2.site_id|query|string|false|Site ID|
|search.type_point_ameriflux_level2.contact|query|string|false|Contact|
|search.type_point_ameriflux_level2.ecosystem_type|query|string|false|Ecosystem Type|

<h3 id="search-api-for-ameriflux-level-2-csv-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointamrcfinal">type/type_point_amrc_final</h1>

Search API for 'AMRC Final QC Data' entry type

## Search API for 'AMRC Final QC Data' entry type

<a id="opIdsearch_type_point_amrc_final"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_amrc_final
```

`GET /repository/search/type/type_point_amrc_final`

API to search for entries of type AMRC Final QC Data

<h3 id="search-api-for-amrc-final-qc-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_amrc_final.site_id|query|string|false|Site ID|
|search.type_point_amrc_final.site_name|query|string|false|Site Name|
|search.type_point_amrc_final.argos_id|query|string|false|Argos ID|

<h3 id="search-api-for-amrc-final-qc-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointamrcfreewave">type/type_point_amrc_freewave</h1>

Search API for 'AMRC Freewave  Data' entry type

## Search API for 'AMRC Freewave Data' entry type

<a id="opIdsearch_type_point_amrc_freewave"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_amrc_freewave
```

`GET /repository/search/type/type_point_amrc_freewave`

API to search for entries of type AMRC Freewave  Data

<h3 id="search-api-for-amrc-freewave-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_amrc_freewave.station_name|query|string|false|Station Name|
|search.type_point_amrc_freewave.format|query|string|false|File Format|
|search.type_point_amrc_freewave.datalogger_model|query|string|false|Data Logger Model|
|search.type_point_amrc_freewave.datalogger_serial|query|string|false|Data Logger Serial|

<h3 id="search-api-for-amrc-freewave-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointczo">type/type_point_czo</h1>

Search API for 'CZO Display File Format' entry type

## Search API for 'CZO Display File Format' entry type

<a id="opIdsearch_type_point_czo"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_czo
```

`GET /repository/search/type/type_point_czo`

API to search for entries of type CZO Display File Format

<h3 id="search-api-for-czo-display-file-format-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-czo-display-file-format-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointgcnet">type/type_point_gcnet</h1>

Search API for 'GC-Net Point Data' entry type

## Search API for 'GC-Net Point Data' entry type

<a id="opIdsearch_type_point_gcnet"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_gcnet
```

`GET /repository/search/type/type_point_gcnet`

API to search for entries of type GC-Net Point Data

<h3 id="search-api-for-gc-net-point-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-gc-net-point-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointgeomagiaga2002">type/type_point_geomag_iaga2002</h1>

Search API for 'IAGA 2002 Geomagnetism Data' entry type

## Search API for 'IAGA 2002 Geomagnetism Data' entry type

<a id="opIdsearch_type_point_geomag_iaga2002"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_geomag_iaga2002
```

`GET /repository/search/type/type_point_geomag_iaga2002`

API to search for entries of type IAGA 2002 Geomagnetism Data

<h3 id="search-api-for-iaga-2002-geomagnetism-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_geomag_iaga2002.iaga_code|query|string|false|IAGA Code|
|search.type_point_geomag_iaga2002.station_name|query|string|false|Station Name|
|search.type_point_geomag_iaga2002.source_of_data|query|string|false|Source of data|
|search.type_point_geomag_iaga2002.digital_sampling|query|string|false|Digital Sampling|
|search.type_point_geomag_iaga2002.data_interval|query|string|false|Data Interval|
|search.type_point_geomag_iaga2002.data_type|query|string|false|Data Type|

<h3 id="search-api-for-iaga-2002-geomagnetism-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointhydrowaterml">type/type_point_hydro_waterml</h1>

Search API for 'WaterML' entry type

## Search API for 'WaterML' entry type

<a id="opIdsearch_type_point_hydro_waterml"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_hydro_waterml
```

`GET /repository/search/type/type_point_hydro_waterml`

API to search for entries of type WaterML

<h3 id="search-api-for-waterml-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_hydro_waterml.site_code|query|string|false|Site Code|
|search.type_point_hydro_waterml.site_name|query|string|false|Site Name|

<h3 id="search-api-for-waterml-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointicebridgeatmicessn">type/type_point_icebridge_atm_icessn</h1>

Search API for 'ATM Ice SSN Data' entry type

## Search API for 'ATM Ice SSN Data' entry type

<a id="opIdsearch_type_point_icebridge_atm_icessn"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_icebridge_atm_icessn
```

`GET /repository/search/type/type_point_icebridge_atm_icessn`

API to search for entries of type ATM Ice SSN Data

<h3 id="search-api-for-atm-ice-ssn-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-atm-ice-ssn-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointicebridgeatmqfit">type/type_point_icebridge_atm_qfit</h1>

Search API for 'ATM QFIT Data' entry type

## Search API for 'ATM QFIT Data' entry type

<a id="opIdsearch_type_point_icebridge_atm_qfit"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_icebridge_atm_qfit
```

`GET /repository/search/type/type_point_icebridge_atm_qfit`

API to search for entries of type ATM QFIT Data

<h3 id="search-api-for-atm-qfit-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-atm-qfit-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointicebridgemccordsirmcr2">type/type_point_icebridge_mccords_irmcr2</h1>

Search API for 'McCords Irmcr2 Data' entry type

## Search API for 'McCords Irmcr2 Data' entry type

<a id="opIdsearch_type_point_icebridge_mccords_irmcr2"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_icebridge_mccords_irmcr2
```

`GET /repository/search/type/type_point_icebridge_mccords_irmcr2`

API to search for entries of type McCords Irmcr2 Data

<h3 id="search-api-for-mccords-irmcr2-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-mccords-irmcr2-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointicebridgemccordsirmcr3">type/type_point_icebridge_mccords_irmcr3</h1>

Search API for 'McCords Irmcr3 Data' entry type

## Search API for 'McCords Irmcr3 Data' entry type

<a id="opIdsearch_type_point_icebridge_mccords_irmcr3"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_icebridge_mccords_irmcr3
```

`GET /repository/search/type/type_point_icebridge_mccords_irmcr3`

API to search for entries of type McCords Irmcr3 Data

<h3 id="search-api-for-mccords-irmcr3-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-mccords-irmcr3-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointicebridgeparis">type/type_point_icebridge_paris</h1>

Search API for 'Paris Data' entry type

## Search API for 'Paris Data' entry type

<a id="opIdsearch_type_point_icebridge_paris"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_icebridge_paris
```

`GET /repository/search/type/type_point_icebridge_paris`

API to search for entries of type Paris Data

<h3 id="search-api-for-paris-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-paris-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointidv">type/type_point_idv</h1>

Search API for 'IDV Point File' entry type

## Search API for 'IDV Point File' entry type

<a id="opIdsearch_type_point_idv"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_idv
```

`GET /repository/search/type/type_point_idv`

API to search for entries of type IDV Point File

<h3 id="search-api-for-idv-point-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-idv-point-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointinline">type/type_point_inline</h1>

Search API for 'Inline Point File' entry type

## Search API for 'Inline Point File' entry type

<a id="opIdsearch_type_point_inline"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_inline
```

`GET /repository/search/type/type_point_inline`

API to search for entries of type Inline Point File

<h3 id="search-api-for-inline-point-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-inline-point-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointncdcclimate">type/type_point_ncdc_climate</h1>

Search API for 'NC  DC Climate Data' entry type

## Search API for 'NC DC Climate Data' entry type

<a id="opIdsearch_type_point_ncdc_climate"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ncdc_climate
```

`GET /repository/search/type/type_point_ncdc_climate`

API to search for entries of type NC  DC Climate Data

<h3 id="search-api-for-nc-dc-climate-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-nc-dc-climate-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnetcdf">type/type_point_netcdf</h1>

Search API for 'NetCDF Point File' entry type

## Search API for 'NetCDF Point File' entry type

<a id="opIdsearch_type_point_netcdf"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_netcdf
```

`GET /repository/search/type/type_point_netcdf`

API to search for entries of type NetCDF Point File

<h3 id="search-api-for-netcdf-point-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-netcdf-point-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnoaacarbon">type/type_point_noaa_carbon</h1>

Search API for 'NOAA Carbon Measurements' entry type

## Search API for 'NOAA Carbon Measurements' entry type

<a id="opIdsearch_type_point_noaa_carbon"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_noaa_carbon
```

`GET /repository/search/type/type_point_noaa_carbon`

API to search for entries of type NOAA Carbon Measurements

<h3 id="search-api-for-noaa-carbon-measurements-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_noaa_carbon.site_id|query|string|false|Site ID|
|search.type_point_noaa_carbon.parameter|query|string|false|Parameter|
|search.type_point_noaa_carbon.project|query|string|false|Project|
|search.type_point_noaa_carbon.lab_id_number|query|string|false|Lab ID Number|
|search.type_point_noaa_carbon.measurement_group|query|string|false|Measurement Group|

<h3 id="search-api-for-noaa-carbon-measurements-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnoaaflaskevent">type/type_point_noaa_flask_event</h1>

Search API for 'NOAA Flask Event Measurements' entry type

## Search API for 'NOAA Flask Event Measurements' entry type

<a id="opIdsearch_type_point_noaa_flask_event"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_noaa_flask_event
```

`GET /repository/search/type/type_point_noaa_flask_event`

API to search for entries of type NOAA Flask Event Measurements

<h3 id="search-api-for-noaa-flask-event-measurements-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_noaa_flask_event.site_id|query|string|false|Site ID|
|search.type_point_noaa_flask_event.parameter|query|string|false|Parameter|
|search.type_point_noaa_flask_event.project|query|string|false|Project|
|search.type_point_noaa_flask_event.lab_id_number|query|string|false|Lab ID Number|
|search.type_point_noaa_flask_event.measurement_group|query|string|false|Measurement Group|

<h3 id="search-api-for-noaa-flask-event-measurements-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnoaaflaskmonth">type/type_point_noaa_flask_month</h1>

Search API for 'NOAA Flask Month Measurements' entry type

## Search API for 'NOAA Flask Month Measurements' entry type

<a id="opIdsearch_type_point_noaa_flask_month"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_noaa_flask_month
```

`GET /repository/search/type/type_point_noaa_flask_month`

API to search for entries of type NOAA Flask Month Measurements

<h3 id="search-api-for-noaa-flask-month-measurements-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_noaa_flask_month.site_id|query|string|false|Site ID|
|search.type_point_noaa_flask_month.parameter|query|string|false|Parameter|
|search.type_point_noaa_flask_month.project|query|string|false|Project|
|search.type_point_noaa_flask_month.lab_id_number|query|string|false|Lab ID Number|
|search.type_point_noaa_flask_month.measurement_group|query|string|false|Measurement Group|

<h3 id="search-api-for-noaa-flask-month-measurements-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnoaamadis">type/type_point_noaa_madis</h1>

Search API for 'NOAA MADIS Point Data' entry type

## Search API for 'NOAA MADIS Point Data' entry type

<a id="opIdsearch_type_point_noaa_madis"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_noaa_madis
```

`GET /repository/search/type/type_point_noaa_madis`

API to search for entries of type NOAA MADIS Point Data

<h3 id="search-api-for-noaa-madis-point-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-noaa-madis-point-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointnoaatower">type/type_point_noaa_tower</h1>

Search API for 'NOAA Tower Network' entry type

## Search API for 'NOAA Tower Network' entry type

<a id="opIdsearch_type_point_noaa_tower"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_noaa_tower
```

`GET /repository/search/type/type_point_noaa_tower`

API to search for entries of type NOAA Tower Network

<h3 id="search-api-for-noaa-tower-network-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_noaa_tower.site_id|query|string|false|Site ID|

<h3 id="search-api-for-noaa-tower-network-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceancnv">type/type_point_ocean_cnv</h1>

Search API for 'SeaBird CNV Data' entry type

## Search API for 'SeaBird CNV Data' entry type

<a id="opIdsearch_type_point_ocean_cnv"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_cnv
```

`GET /repository/search/type/type_point_ocean_cnv`

API to search for entries of type SeaBird CNV Data

<h3 id="search-api-for-seabird-cnv-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-seabird-cnv-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceancsvsadotts">type/type_point_ocean_csv_sado_TTS</h1>

Search API for 'SADO TTS Data' entry type

## Search API for 'SADO TTS Data' entry type

<a id="opIdsearch_type_point_ocean_csv_sado_TTS"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_csv_sado_TTS
```

`GET /repository/search/type/type_point_ocean_csv_sado_TTS`

API to search for entries of type SADO TTS Data

<h3 id="search-api-for-sado-tts-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sado-tts-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceancsvsadometeo">type/type_point_ocean_csv_sado_meteo</h1>

Search API for 'SADO Meteo Data' entry type

## Search API for 'SADO Meteo Data' entry type

<a id="opIdsearch_type_point_ocean_csv_sado_meteo"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_csv_sado_meteo
```

`GET /repository/search/type/type_point_ocean_csv_sado_meteo`

API to search for entries of type SADO Meteo Data

<h3 id="search-api-for-sado-meteo-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sado-meteo-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceancsvsadoposition">type/type_point_ocean_csv_sado_position</h1>

Search API for 'SADO Position Data' entry type

## Search API for 'SADO Position Data' entry type

<a id="opIdsearch_type_point_ocean_csv_sado_position"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_csv_sado_position
```

`GET /repository/search/type/type_point_ocean_csv_sado_position`

API to search for entries of type SADO Position Data

<h3 id="search-api-for-sado-position-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-sado-position-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceannetcdfglider">type/type_point_ocean_netcdf_glider</h1>

Search API for 'NetCDF Glider Data' entry type

## Search API for 'NetCDF Glider Data' entry type

<a id="opIdsearch_type_point_ocean_netcdf_glider"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_netcdf_glider
```

`GET /repository/search/type/type_point_ocean_netcdf_glider`

API to search for entries of type NetCDF Glider Data

<h3 id="search-api-for-netcdf-glider-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_ocean_netcdf_track.platform|query|string|false|Platform|

<h3 id="search-api-for-netcdf-glider-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceannetcdftrack">type/type_point_ocean_netcdf_track</h1>

Search API for 'NetCDF Track Data' entry type

## Search API for 'NetCDF Track Data' entry type

<a id="opIdsearch_type_point_ocean_netcdf_track"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_netcdf_track
```

`GET /repository/search/type/type_point_ocean_netcdf_track`

API to search for entries of type NetCDF Track Data

<h3 id="search-api-for-netcdf-track-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_ocean_netcdf_track.platform|query|string|false|Platform|

<h3 id="search-api-for-netcdf-track-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointoceanooidmgx">type/type_point_ocean_ooi_dmgx</h1>

Search API for 'OOI Data' entry type

## Search API for 'OOI Data' entry type

<a id="opIdsearch_type_point_ocean_ooi_dmgx"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_ocean_ooi_dmgx
```

`GET /repository/search/type/type_point_ocean_ooi_dmgx`

API to search for entries of type OOI Data

<h3 id="search-api-for-ooi-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-ooi-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointopenaq">type/type_point_openaq</h1>

Search API for 'Open AQ Air Quality' entry type

## Search API for 'Open AQ Air Quality' entry type

<a id="opIdsearch_type_point_openaq"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_openaq
```

`GET /repository/search/type/type_point_openaq`

API to search for entries of type Open AQ Air Quality

<h3 id="search-api-for-open-aq-air-quality-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_openaq.location|query|string|false|Location|
|search.type_point_openaq.country|query|string|false|Country|
|search.type_point_openaq.city|query|string|false|City|
|search.type_point_openaq.hours_offset|query|integer|false|Offset Hours|

<h3 id="search-api-for-open-aq-air-quality-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointpbopositiontimeseries">type/type_point_pbo_position_time_series</h1>

Search API for 'PBO Position Time Series' entry type

## Search API for 'PBO Position Time Series' entry type

<a id="opIdsearch_type_point_pbo_position_time_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_pbo_position_time_series
```

`GET /repository/search/type/type_point_pbo_position_time_series`

API to search for entries of type PBO Position Time Series

<h3 id="search-api-for-pbo-position-time-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_pbo_position_time_series.four_char_id|query|string|false|Four Char ID|
|search.type_point_pbo_position_time_series.station_name|query|string|false|Station Name|
|search.type_point_pbo_position_time_series.reference_frame|query|string|false|Reference Frame|
|search.type_point_pbo_position_time_series.format_version|query|string|false|Format Version|
|search.type_point_pbo_position_time_series.processing_center|query|string|false|Processing Center|

<h3 id="search-api-for-pbo-position-time-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointsimplerecords">type/type_point_simple_records</h1>

Search API for 'Simple Records' entry type

## Search API for 'Simple Records' entry type

<a id="opIdsearch_type_point_simple_records"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_simple_records
```

`GET /repository/search/type/type_point_simple_records`

API to search for entries of type Simple Records

<h3 id="search-api-for-simple-records-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-simple-records-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointsnotel">type/type_point_snotel</h1>

Search API for 'SNOTEL Snow Data' entry type

## Search API for 'SNOTEL Snow Data' entry type

<a id="opIdsearch_type_point_snotel"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_snotel
```

`GET /repository/search/type/type_point_snotel`

API to search for entries of type SNOTEL Snow Data

<h3 id="search-api-for-snotel-snow-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_snotel.site_id|query|string|false|Site ID|
|search.type_point_snotel.site_number|query|string|false|Site Number|
|search.type_point_snotel.state|query|string|false|State|
|search.type_point_snotel.network|query|string|false|Network|
|search.type_point_snotel.huc_name|query|string|false|HUC Name|
|search.type_point_snotel.huc_id|query|string|false|HUC ID|

<h3 id="search-api-for-snotel-snow-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointtext">type/type_point_text</h1>

Search API for 'Record Text File' entry type

## Search API for 'Record Text File' entry type

<a id="opIdsearch_type_point_text"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_text
```

`GET /repository/search/type/type_point_text`

API to search for entries of type Record Text File

<h3 id="search-api-for-record-text-file-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-record-text-file-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepointwsbbggp">type/type_point_wsbb_ggp</h1>

Search API for 'Global Geodynamics GGP Format' entry type

## Search API for 'Global Geodynamics GGP Format' entry type

<a id="opIdsearch_type_point_wsbb_ggp"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_point_wsbb_ggp
```

`GET /repository/search/type/type_point_wsbb_ggp`

API to search for entries of type Global Geodynamics GGP Format

<h3 id="search-api-for-global-geodynamics-ggp-format-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_point_wsbb_ggp.station|query|string|false|Station|
|search.type_point_wsbb_ggp.instrument|query|string|false|Instrument|
|search.type_point_wsbb_ggp.author|query|string|false|Author|

<h3 id="search-api-for-global-geodynamics-ggp-format-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypepsdmonthlyclimateindex">type/type_psd_monthly_climate_index</h1>

Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

## Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

<a id="opIdsearch_type_psd_monthly_climate_index"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_psd_monthly_climate_index
```

`GET /repository/search/type/type_psd_monthly_climate_index`

API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index

<h3 id="search-api-for-noaa-esrl-psd-monthly-climate-index-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.type_psd_monthly_climate_index.units|query|string|false|Units|

<h3 id="search-api-for-noaa-esrl-psd-monthly-climate-index-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypequandlseries">type/type_quandl_series</h1>

Search API for 'QUANDL Series' entry type

## Search API for 'QUANDL Series' entry type

<a id="opIdsearch_type_quandl_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_quandl_series
```

`GET /repository/search/type/type_quandl_series`

API to search for entries of type QUANDL Series

<h3 id="search-api-for-quandl-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-quandl-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeservicegroup">type/type_service_group</h1>

Search API for 'Service Group' entry type

## Search API for 'Service Group' entry type

<a id="opIdsearch_type_service_group"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_service_group
```

`GET /repository/search/type/type_service_group`

API to search for entries of type Service Group

<h3 id="search-api-for-service-group-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-service-group-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeservicelink">type/type_service_link</h1>

Search API for 'Service Link' entry type

## Search API for 'Service Link' entry type

<a id="opIdsearch_type_service_link"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_service_link
```

`GET /repository/search/type/type_service_link`

API to search for entries of type Service Link

<h3 id="search-api-for-service-link-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-service-link-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypesocrataseries">type/type_socrata_series</h1>

Search API for 'SOCRATA Series' entry type

## Search API for 'SOCRATA Series' entry type

<a id="opIdsearch_type_socrata_series"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_socrata_series
```

`GET /repository/search/type/type_socrata_series`

API to search for entries of type SOCRATA Series

<h3 id="search-api-for-socrata-series-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-socrata-series-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypesoundingcod">type/type_sounding_cod</h1>

Search API for 'COD Sounding' entry type

## Search API for 'COD Sounding' entry type

<a id="opIdsearch_type_sounding_cod"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_sounding_cod
```

`GET /repository/search/type/type_sounding_cod`

API to search for entries of type COD Sounding

<h3 id="search-api-for-cod-sounding-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-cod-sounding-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypesoundingfrd">type/type_sounding_frd</h1>

Search API for 'FRD Sounding' entry type

## Search API for 'FRD Sounding' entry type

<a id="opIdsearch_type_sounding_frd"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_sounding_frd
```

`GET /repository/search/type/type_sounding_frd`

API to search for entries of type FRD Sounding

<h3 id="search-api-for-frd-sounding-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-frd-sounding-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypesoundinggsd">type/type_sounding_gsd</h1>

Search API for 'GSD Sounding' entry type

## Search API for 'GSD Sounding' entry type

<a id="opIdsearch_type_sounding_gsd"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_sounding_gsd
```

`GET /repository/search/type/type_sounding_gsd`

API to search for entries of type GSD Sounding

<h3 id="search-api-for-gsd-sounding-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-gsd-sounding-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypesoundingwyoming">type/type_sounding_wyoming</h1>

Search API for 'UW Sounding' entry type

## Search API for 'UW Sounding' entry type

<a id="opIdsearch_type_sounding_wyoming"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_sounding_wyoming
```

`GET /repository/search/type/type_sounding_wyoming`

API to search for entries of type UW Sounding

<h3 id="search-api-for-uw-sounding-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-uw-sounding-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypetmy">type/type_tmy</h1>

Search API for 'NREL TMY Data' entry type

## Search API for 'NREL TMY Data' entry type

<a id="opIdsearch_type_tmy"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_tmy
```

`GET /repository/search/type/type_tmy`

API to search for entries of type NREL TMY Data

<h3 id="search-api-for-nrel-tmy-data-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-nrel-tmy-data-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypetweet">type/type_tweet</h1>

Search API for 'Tweet' entry type

## Search API for 'Tweet' entry type

<a id="opIdsearch_type_tweet"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_tweet
```

`GET /repository/search/type/type_tweet`

API to search for entries of type Tweet

<h3 id="search-api-for-tweet-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-tweet-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypeusgsgauge">type/type_usgs_gauge</h1>

Search API for 'USGS Stream Gauge' entry type

## Search API for 'USGS Stream Gauge' entry type

<a id="opIdsearch_type_usgs_gauge"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_usgs_gauge
```

`GET /repository/search/type/type_usgs_gauge`

API to search for entries of type USGS Stream Gauge

<h3 id="search-api-for-usgs-stream-gauge-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-usgs-stream-gauge-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypevirtual">type/type_virtual</h1>

Search API for 'Virtual Group' entry type

## Search API for 'Virtual Group' entry type

<a id="opIdsearch_type_virtual"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_virtual
```

`GET /repository/search/type/type_virtual`

API to search for entries of type Virtual Group

<h3 id="search-api-for-virtual-group-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-virtual-group-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypewmscapabilities">type/type_wms_capabilities</h1>

Search API for 'WMS Capabilities' entry type

## Search API for 'WMS Capabilities' entry type

<a id="opIdsearch_type_wms_capabilities"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_wms_capabilities
```

`GET /repository/search/type/type_wms_capabilities`

API to search for entries of type WMS Capabilities

<h3 id="search-api-for-wms-capabilities-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-wms-capabilities-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typetypewmslayer">type/type_wms_layer</h1>

Search API for 'WMS Layer' entry type

## Search API for 'WMS Layer' entry type

<a id="opIdsearch_type_wms_layer"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/type_wms_layer
```

`GET /repository/search/type/type_wms_layer`

API to search for entries of type WMS Layer

<h3 id="search-api-for-wms-layer-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-wms-layer-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeufosightings">type/ufo_sightings</h1>

Search API for 'Ufo Sightings' entry type

## Search API for 'Ufo Sightings' entry type

<a id="opIdsearch_ufo_sightings"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/ufo_sightings
```

`GET /repository/search/type/ufo_sightings`

API to search for entries of type Ufo Sightings

<h3 id="search-api-for-ufo-sightings-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_ufo_sightings.datetime|query|string|false|Datetime|
|search.db_ufo_sightings.city|query|string|false|City|
|search.db_ufo_sightings.state|query|string|false|State|
|search.db_ufo_sightings.country|query|string|false|Country|
|search.db_ufo_sightings.shape|query|string|false|Shape|
|search.db_ufo_sightings.duration_seconds|query|number(double)|false|Duration (seconds)|
|search.db_ufo_sightings.duration_hours_min|query|string|false|Duration (hours/min)|
|search.db_ufo_sightings.comments|query|string|false|Comments|
|search.db_ufo_sightings.date_posted|query|string|false|Date Posted|
|search.db_ufo_sightings.latitude|query|number(double)|false|Latitude|
|search.db_ufo_sightings.longitude|query|number(double)|false|Longitude|

<h3 id="search-api-for-ufo-sightings-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeusplaces">type/us_places</h1>

Search API for 'US Places' entry type

## Search API for 'US Places' entry type

<a id="opIdsearch_us_places"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/us_places
```

`GET /repository/search/type/us_places`

API to search for entries of type US Places

<h3 id="search-api-for-us-places-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_us_places.feature_name|query|string|false|Place Name|
|search.db_us_places.feature_class|query|string|false|Place Type|
|search.db_us_places.state_alpha|query|string|false|State|
|search.db_us_places.county_name|query|string|false|County Name|
|search.db_us_places.location|query|string|false|Location|
|search.db_us_places.elev_in_ft|query|number(double)|false|Elev In Ft|

<h3 id="search-api-for-us-places-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typevoteyesno">type/vote_yesno</h1>

Search API for 'Simple Yes-No Vote' entry type

## Search API for 'Simple Yes-No Vote' entry type

<a id="opIdsearch_vote_yesno"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/vote_yesno
```

`GET /repository/search/type/vote_yesno`

API to search for entries of type Simple Yes-No Vote

<h3 id="search-api-for-simple-yes-no-vote-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.db_vote_yesno.vote|query|string|false|My Vote|

<h3 id="search-api-for-simple-yes-no-vote-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typeweblog">type/weblog</h1>

Search API for 'Weblog' entry type

## Search API for 'Weblog' entry type

<a id="opIdsearch_weblog"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/weblog
```

`GET /repository/search/type/weblog`

API to search for entries of type Weblog

<h3 id="search-api-for-weblog-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|

<h3 id="search-api-for-weblog-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="geodesystemscom443-typewikipage">type/wikipage</h1>

Search API for 'Wiki Page' entry type

## Search API for 'Wiki Page' entry type

<a id="opIdsearch_wikipage"></a>

> Code samples

```bash
curl https://example.com/repository/search/type/wikipage
```

`GET /repository/search/type/wikipage`

API to search for entries of type Wiki Page

<h3 id="search-api-for-wiki-page-entry-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Search text|
|name|query|string|false|Search name|
|description|query|string|false|Search description|
|fromdate|query|string(date-time)|false|From date|
|todate|query|string(date-time)|false|To date|
|createdate.from|query|string(date-time)|false|Archive create date from|
|createdate.to|query|string(date-time)|false|Archive create date to|
|changedate.from|query|string(date-time)|false|Archive change date from|
|changedate.to|query|string(date-time)|false|Archive change date to|
|group|query|string|false|Parent entry|
|filesuffix|query|string|false|File suffix|
|maxlatitude|query|number(float)|false|Northern bounds of search|
|minlongitude|query|number(float)|false|Western bounds of search|
|minlatitude|query|number(float)|false|Southern bounds of search|
|maxlongitude|query|number(float)|false|Eastern bounds of search|
|max|query|integer|false|Max number of results|
|skip|query|integer|false|Number to skip|
|search.wikipage.wikitext|query|string|false|Wiki Text|
|search.wikipage.category|query|string|false|Wiki Page Category|

<h3 id="search-api-for-wiki-page-entry-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response was specified|None|

<aside class="success">
This operation does not require authentication
</aside>
