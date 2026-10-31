<h1 id="rat-genome-database-rest-api">Rat Genome Database REST API v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The RGD REST API provides programmatic access to information and annotation stored in the Rat Genome Database

Base URLs:

* <a href="https://api.apis.guru//rest.rgd.mcw.edu/rgdws">https://api.apis.guru//rest.rgd.mcw.edu/rgdws</a>

<a href="http://rgd.mcw.edu/wg/citing-rgd">Terms of service</a>
Email: <a href="mailto:RGD.Data2@mcw.edu">Rat Genome Database</a> 
Web: <a href="http://rgd.mcw.edu">Rat Genome Database</a> 
License: <a href="https://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons</a>

<h1 id="rat-genome-database-rest-api-agr">AGR</h1>

Alliance of Genome Resources

## Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId

<a id="opIdgetAffectedGenomicModelsUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/affectedGenomicModels/string
```

`GET /agr/affectedGenomicModels/{taxonId}`

<h3 id="get-affected-genomic-models-rat-strains-with-gene-alleles-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-affected-genomic-models-rat-strains-with-gene-alleles-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-affected-genomic-models-rat-strains-with-gene-alleles-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get gene allele records submitted by RGD to AGR by taxonId

<a id="opIdgetAllelesForTaxonUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/alleles/string
```

`GET /agr/alleles/{taxonId}`

<h3 id="get-gene-allele-records-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-gene-allele-records-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-gene-allele-records-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get expression annotations submitted by RGD to AGR by taxonId

<a id="opIdgetExpressionForTaxonUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/expression/string
```

`GET /agr/expression/{taxonId}`

<h3 id="get-expression-annotations-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-expression-annotations-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-expression-annotations-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get phenotype annotations submitted by RGD to AGR by taxonId

<a id="opIdgetPhenotypesForTaxonUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/phenotypes/string
```

`GET /agr/phenotypes/{taxonId}`

<h3 id="get-phenotype-annotations-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-phenotype-annotations-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-phenotype-annotations-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get basic variant records submitted by RGD to AGR by taxonId

<a id="opIdgetVariantsForTaxonUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/variants/string
```

`GET /agr/variants/{taxonId}`

<h3 id="get-basic-variant-records-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-basic-variant-records-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-basic-variant-records-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get gene records submitted by RGD to AGR by taxonId

<a id="opIdgetGenesForLatestAssemblyUsingGET"></a>

> Code samples

```bash
curl https://example.com/agr/string
```

`GET /agr/{taxonId}`

<h3 id="get-gene-records-submitted-by-rgd-to-agr-by-taxonid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxonId|path|string|true|The taxon ID for species|

<h3 id="get-gene-records-submitted-by-rgd-to-agr-by-taxonid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-gene-records-submitted-by-rgd-to-agr-by-taxonid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-annotation">Annotation</h1>

## Return a list of genes annotated to an ontology term

<a id="opIdgetAnnotationsUsingPOST"></a>

> Code samples

```bash
curl https://example.com/annotations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "evidenceCodes": [
      "string"
    ],
    "ids": [
      "string"
    ],
    "speciesTypeKeys": [
      0
    ],
    "termAcc": "string"
  }'
```

`POST /annotations/`

> Body parameter

```json
{
  "evidenceCodes": [
    "string"
  ],
  "ids": [
    "string"
  ],
  "speciesTypeKeys": [
    0
  ],
  "termAcc": "string"
}
```

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnnotationRequest](#schemaannotationrequest)|false|data|
|» evidenceCodes|body|[string]|false|none|
|» ids|body|[string]|false|none|
|» speciesTypeKeys|body|[integer(int32)]|false|none|
|» termAcc|body|string|false|none|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list ontology term accession IDs annotated to an rgd object

<a id="opIdgetTermAccIdsUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/accId/0
```

`GET /annotations/accId/{rgdId}`

<h3 id="returns-a-list-ontology-term-accession-ids-annotated-to-an-rgd-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="returns-a-list-ontology-term-accession-ids-annotated-to-an-rgd-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-ontology-term-accession-ids-annotated-to-an-rgd-object-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MapPair](#schemamappair)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns annotation count for ontology accession ID

<a id="opIdgetAnnotationCountByAccIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/count/string/true
```

`GET /annotations/count/{accId}/{includeChildren}`

<h3 id="returns-annotation-count-for-ontology-accession-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology term accession ID|
|includeChildren|path|boolean|true|true: return annotations for the term and children, false: return annotations for the term only |

<h3 id="returns-annotation-count-for-ontology-accession-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns annotation count for ontology accession ID and speicies

<a id="opIdgetAnnotationCountByAccIdAndSpeciesUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/count/string/0/true
```

`GET /annotations/count/{accId}/{speciesTypeKey}/{includeChildren}`

<h3 id="returns-annotation-count-for-ontology-accession-id-and-speicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology term accession ID|
|speciesTypeKey|path|integer(int32)|true|A list of species type keys can be found using the lookup service|
|includeChildren|path|boolean|true|true: return annotations for the term and children, false: return annotations for the term only |

<h3 id="returns-annotation-count-for-ontology-accession-id-and-speicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns annotation count for ontology accession ID and object type

<a id="opIdgetAnnotationCountByAccIdAndObjectTypeUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/count/string/0/true/0
```

`GET /annotations/count/{accId}/{speciesTypeKey}/{includeChildren}/{objectType}`

<h3 id="returns-annotation-count-for-ontology-accession-id-and-object-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology term accession ID|
|speciesTypeKey|path|integer(int32)|true|A list of species type keys can be found using the lookup service|
|includeChildren|path|boolean|true|true: return annotations for the term and children, false: return annotations for the term only |
|objectType|path|integer(int32)|true|A list of object types can be found using the lookup service|

<h3 id="returns-annotation-count-for-ontology-accession-id-and-object-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of annotations for a reference

<a id="opIdgetAnnotsByRefrerenceUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/reference/0
```

`GET /annotations/reference/{refRgdId}`

<h3 id="returns-a-list-of-annotations-for-a-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refRgdId|path|integer(int32)|true|Reference RGD ID|

<h3 id="returns-a-list-of-annotations-for-a-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-annotations-for-a-reference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of annotations by RGD ID

<a id="opIdgetAnnotationsByRgdIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/rgdId/0
```

`GET /annotations/rgdId/{rgdId}`

<h3 id="returns-a-list-of-annotations-by-rgd-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="returns-a-list-of-annotations-by-rgd-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-annotations-by-rgd-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of annotations by RGD ID and ontology prefix

<a id="opIdgetAnnotationsByRgdIdAndOntologyUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/rgdId/0/string
```

`GET /annotations/rgdId/{rgdId}/{ontologyPrefix}`

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-prefix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|
|ontologyPrefix|path|string|true|Ontology Prefix.  The prefix can be found left of the semicolon in an ontology term accession ID.  As an example, term accession PW:0000034 has the ontology prefix PW|

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-prefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-prefix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of annotations by RGD ID and ontology term accession ID

<a id="opIdgetAnnotationsByAccIdAndRgdIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/string/0
```

`GET /annotations/{accId}/{rgdId}`

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-term-accession-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology Term Accession ID|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-term-accession-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-annotations-by-rgd-id-and-ontology-term-accession-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list annotations for an ontology term or a term and it's children

<a id="opIdgetAnnotationsUsingGET"></a>

> Code samples

```bash
curl https://example.com/annotations/string/0/true
```

`GET /annotations/{accId}/{speciesTypeKey}/{includeChildren}`

<h3 id="returns-a-list-annotations-for-an-ontology-term-or-a-term-and-its-children-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology term accession ID|
|speciesTypeKey|path|integer(int32)|true|A list of species type keys can be found using the lookup service|
|includeChildren|path|boolean|true|true: return annotations for the term and children, false: return annotations for the term only |

<h3 id="returns-a-list-annotations-for-an-ontology-term-or-a-term-and-its-children-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-annotations-for-an-ontology-term-or-a-term-and-its-children-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Annotation](#schemaannotation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-gene">Gene</h1>

## Return a list of genes for an affymetrix ID

<a id="opIdgetGenesByAffyIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/affyId/string/0
```

`GET /genes/affyId/{affyId}/{speciesTypeKey}`

<h3 id="return-a-list-of-genes-for-an-affymetrix-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|affyId|path|string|true|Affymetrix ID|
|speciesTypeKey|path|integer(int32)|true|A list of RGD species type keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-for-an-affymetrix-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-for-an-affymetrix-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes for an alias and species

<a id="opIdgetGenesByAliasSymbolUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/alias/string/0
```

`GET /genes/alias/{aliasSymbol}/{speciesTypeKey}`

<h3 id="return-a-list-of-genes-for-an-alias-and-species-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasSymbol|path|string|true|Gene alias symbol|
|speciesTypeKey|path|integer(int32)|true|A list of RGD species type keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-for-an-alias-and-species-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-for-an-alias-and-species-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of gene alleles

<a id="opIdgetGeneAllelesUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/allele/0
```

`GET /genes/allele/{rgdId}`

<h3 id="return-a-list-of-gene-alleles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID of gene|

<h3 id="return-a-list-of-gene-alleles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-gene-alleles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes annotated to an ontology term

<a id="opIdgetAnnotatedGenesUsingPOST"></a>

> Code samples

```bash
curl https://example.com/genes/annotation \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "accId": "string",
    "evidenceCodes": [
      "string"
    ],
    "speciesTypeKeys": [
      0
    ]
  }'
```

`POST /genes/annotation`

> Body parameter

```json
{
  "accId": "string",
  "evidenceCodes": [
    "string"
  ],
  "speciesTypeKeys": [
    0
  ]
}
```

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnnotatedGeneRequest](#schemaannotatedgenerequest)|false|data|
|» accId|body|string|false|none|
|» evidenceCodes|body|[string]|false|none|
|» speciesTypeKeys|body|[integer(int32)]|false|none|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes annotated to an ontology term

<a id="opIdgetAllAnnotatedGenesUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/annotation/string
```

`GET /genes/annotation/{accId}`

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Accesstion ID|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes annotated to an ontology term

<a id="opIdgetGenesAnnotatedUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/annotation/string/0
```

`GET /genes/annotation/{accId}/{speciesTypeKey}`

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Ontology term accession ID|
|speciesTypeKey|path|integer(int32)|true|Species type key.  A list of species type keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-annotated-to-an-ontology-term-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes by keyword and species type key

<a id="opIdgetGenesByKeywordUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/keyword/string/0
```

`GET /genes/keyword/{keyword}/{speciesTypeKey}`

<h3 id="return-a-list-of-genes-by-keyword-and-species-type-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|path|string|true|Search keyword|
|speciesTypeKey|path|integer(int32)|true|Species type key.  A list of species type keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-by-keyword-and-species-type-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-by-keyword-and-species-type-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of all genes with position information for an assembly

<a id="opIdgetGeneByMapKeyUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/map/0
```

`GET /genes/map/{mapKey}`

<h3 id="return-a-list-of-all-genes-with-position-information-for-an-assembly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mapKey|path|integer(int32)|true|A list of RGD assembly map keys can be found in the lookup service|

<h3 id="return-a-list-of-all-genes-with-position-information-for-an-assembly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-all-genes-with-position-information-for-an-assembly-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MappedGene](#schemamappedgene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes position and map key

<a id="opIdgetMappedGenesByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/mapped/string/0/0/0
```

`GET /genes/mapped/{chr}/{start}/{stop}/{mapKey}`

<h3 id="return-a-list-of-genes-position-and-map-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of RGD assembly map keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-position-and-map-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-position-and-map-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MappedGene](#schemamappedgene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of gene orthologs

<a id="opIdgetOrthologsByListUsingPOST"></a>

> Code samples

```bash
curl https://example.com/genes/orthologs \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ],
    "speciesTypeKeys": [
      0
    ]
  }'
```

`POST /genes/orthologs`

> Body parameter

```json
{
  "rgdIds": [
    0
  ],
  "speciesTypeKeys": [
    0
  ]
}
```

<h3 id="return-a-list-of-gene-orthologs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrthologRequest](#schemaorthologrequest)|true|orthologRequest|
|» rgdIds|body|[integer(int32)]|false|none|
|» speciesTypeKeys|body|[integer(int32)]|false|none|

<h3 id="return-a-list-of-gene-orthologs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-gene-orthologs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of gene orthologs

<a id="opIdgetGeneOrthologsUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/orthologs/0
```

`GET /genes/orthologs/{rgdId}`

<h3 id="return-a-list-of-gene-orthologs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID of a gene|

<h3 id="return-a-list-of-gene-orthologs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-gene-orthologs-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes in region

<a id="opIdgetGenesInRegionUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/region/string/0/0/0
```

`GET /genes/region/{chr}/{start}/{stop}/{mapKey}`

<h3 id="return-a-list-of-genes-in-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of RGD assembly map keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-in-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-in-region-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MappedGenePosition](#schemamappedgeneposition)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of all genes for a species in RGD

<a id="opIdgetGenesBySpeciesUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/species/0
```

`GET /genes/species/{speciesTypeKey}`

<h3 id="return-a-list-of-all-genes-for-a-species-in-rgd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|A list of RGD species type keys can be found in the lookup service|

<h3 id="return-a-list-of-all-genes-for-a-species-in-rgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-all-genes-for-a-species-in-rgd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of genes position and map key

<a id="opIdgetGenesByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/string/0/0/0
```

`GET /genes/{chr}/{start}/{stop}/{mapKey}`

<h3 id="return-a-list-of-genes-position-and-map-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of RGD assembly map keys can be found in the lookup service|

<h3 id="return-a-list-of-genes-position-and-map-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-genes-position-and-map-key-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Gene](#schemagene)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a gene record by RGD ID

<a id="opIdgetGeneByRgdIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/0
```

`GET /genes/{rgdId}`

<h3 id="get-a-gene-record-by-rgd-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|The RGD ID of a Gene in RGD|

<h3 id="get-a-gene-record-by-rgd-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Gene](#schemagene)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a gene record by symbol and species type key

<a id="opIdgetGeneBySymbolUsingGET"></a>

> Code samples

```bash
curl https://example.com/genes/string/0
```

`GET /genes/{symbol}/{speciesTypeKey}`

<h3 id="get-a-gene-record-by-symbol-and-species-type-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|symbol|path|string|true|Gene Symbol|
|speciesTypeKey|path|integer(int32)|true|Species type key.  A list of species type keys can be found in the lookup service|

<h3 id="get-a-gene-record-by-symbol-and-species-type-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Gene](#schemagene)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-lookup">Lookup</h1>

## Returns a list of gene types avialable in RGD

<a id="opIdgetGeneTypesUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/geneTypes
```

`GET /lookup/geneTypes`

<h3 id="returns-a-list-of-gene-types-avialable-in-rgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-of-gene-types-avialable-in-rgd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to Ensembl Gene IDs

<a id="opIdgetEnsemblGeneMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblGene \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/EnsemblGene`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-ensembl-gene-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-ensembl-gene-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-ensembl-gene-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an Ensembl Gene ID

<a id="opIdgetEnsemblGeneMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblGene/0
```

`GET /lookup/id/map/EnsemblGene/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-ensembl-gene-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-ensembl-gene-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-ensembl-gene-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to Ensembl Protein IDs

<a id="opIdgetEnsemblProteinMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblProtein \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/EnsemblProtein`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-ensembl-protein-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-ensembl-protein-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-ensembl-protein-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an Ensembl Protein ID

<a id="opIdgetEnsemblProteinMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblProtein/0
```

`GET /lookup/id/map/EnsemblProtein/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-ensembl-protein-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-ensembl-protein-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-ensembl-protein-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to Ensembl Transcript IDs

<a id="opIdgetEnsemblTranscriptMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblTranscript \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/EnsemblTranscript`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-ensembl-transcript-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-ensembl-transcript-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-ensembl-transcript-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an Ensembl Transcript ID

<a id="opIdgetEnsemblTranscriptMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/EnsemblTranscript/0
```

`GET /lookup/id/map/EnsemblTranscript/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-ensembl-transcript-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-ensembl-transcript-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-ensembl-transcript-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to GTEx IDs

<a id="opIdgetGTEXMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GTEx \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/GTEx`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-gtex-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-gtex-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-gtex-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an GTEx ID

<a id="opIdgetGTEXMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GTEx/0
```

`GET /lookup/id/map/GTEx/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-gtex-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-gtex-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-gtex-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to GenBank Nucleotide IDs

<a id="opIdgetGenBankNucleotideMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GenBankNucleotide \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/GenBankNucleotide`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-genbank-nucleotide-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-genbank-nucleotide-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-genbank-nucleotide-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to a GenBank Nucleotide ID

<a id="opIdgetGenBankNucleotideMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GenBankNucleotide/0
```

`GET /lookup/id/map/GenBankNucleotide/{rgdId}`

<h3 id="translate-an-rgd-id-to-a-genbank-nucleotide-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-a-genbank-nucleotide-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-a-genbank-nucleotide-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to GenBank Protein IDs

<a id="opIdgetGenBankProteinMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GenBankProtein \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/GenBankProtein`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-genbank-protein-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-genbank-protein-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-genbank-protein-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to a GenBank Protein ID

<a id="opIdgetGenBankProteinMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/GenBankProtein/0
```

`GET /lookup/id/map/GenBankProtein/{rgdId}`

<h3 id="translate-an-rgd-id-to-a-genbank-protein-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-a-genbank-protein-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-a-genbank-protein-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to HGNC IDs

<a id="opIdgetHGNCMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/HGNC \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/HGNC`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-hgnc-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-hgnc-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-hgnc-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an HGNC ID

<a id="opIdgetHGNCMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/HGNC/0
```

`GET /lookup/id/map/HGNC/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-hgnc-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-hgnc-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-hgnc-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to MGI IDs

<a id="opIdgetMGIMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/MGI \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/MGI`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-mgi-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-mgi-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-mgi-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an MGI ID

<a id="opIdgetMGIMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/MGI/0
```

`GET /lookup/id/map/MGI/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-mgi-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-mgi-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-mgi-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to NCBI Gene IDs

<a id="opIdgetNCBIGeneMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/NCBIGene \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/NCBIGene`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-ncbi-gene-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-ncbi-gene-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-ncbi-gene-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to an NCBI Gene ID

<a id="opIdgetNCBIGeneMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/NCBIGene/0
```

`GET /lookup/id/map/NCBIGene/{rgdId}`

<h3 id="translate-an-rgd-id-to-an-ncbi-gene-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-an-ncbi-gene-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-an-ncbi-gene-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate RGD IDs to UniProt IDs

<a id="opIdgetUniProtMappingUsingPOST"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/UniProt \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "rgdIds": [
      0
    ]
  }'
```

`POST /lookup/id/map/UniProt`

> Body parameter

```json
{
  "rgdIds": [
    0
  ]
}
```

<h3 id="translate-rgd-ids-to-uniprot-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGDIDListRequest](#schemargdidlistrequest)|false|data|
|» rgdIds|body|[integer(int32)]|false|none|

<h3 id="translate-rgd-ids-to-uniprot-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-rgd-ids-to-uniprot-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Translate an RGD ID to a UniProt ID

<a id="opIdgetUniProtMappingUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/id/map/UniProt/0
```

`GET /lookup/id/map/UniProt/{rgdId}`

<h3 id="translate-an-rgd-id-to-a-uniprot-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="translate-an-rgd-id-to-a-uniprot-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="translate-an-rgd-id-to-a-uniprot-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list assembly maps for a species

<a id="opIdgetMapsUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/maps/0
```

`GET /lookup/maps/{speciesTypeKey}`

<h3 id="return-a-list-assembly-maps-for-a-species-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|RGD species type key. A full list of keys is available throught the lookup service.  1=human, 2=mouse, 3=rat,ect|

<h3 id="return-a-list-assembly-maps-for-a-species-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-assembly-maps-for-a-species-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Map](#schemamap)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a Map of species type keys available in RGD

<a id="opIdgetSpeciesTypesUsingGET"></a>

> Code samples

```bash
curl https://example.com/lookup/speciesTypeKeys
```

`GET /lookup/speciesTypeKeys`

<h3 id="return-a-map-of-species-type-keys-available-in-rgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a standardUnit for an ontology if it exists

<a id="opIdgetMapsUsingGET_1"></a>

> Code samples

```bash
curl https://example.com/lookup/standardUnit/string
```

`GET /lookup/standardUnit/{accId}`

<h3 id="return-a-standardunit-for-an-ontology-if-it-exists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|RGD term acc|

<h3 id="return-a-standardunit-for-an-ontology-if-it-exists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-map">Map</h1>

Map Web Service

## Return a list of assemblies

<a id="opIdgetMapsBySpeciesUsingGET"></a>

> Code samples

```bash
curl https://example.com/maps/0
```

`GET /maps/{speciesTypeKey}`

<h3 id="return-a-list-of-assemblies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|species Key|

<h3 id="return-a-list-of-assemblies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-assemblies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Map](#schemamap)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-ontology">Ontology</h1>

Ontology Web Service

## Returns child and parent terms for Accession ID

<a id="opIdgetOntDagsUsingGET"></a>

> Code samples

```bash
curl https://example.com/ontology/ont/string
```

`GET /ontology/ont/{accId}`

<h3 id="returns-child-and-parent-terms-for-accession-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Accession ID|

<h3 id="returns-child-and-parent-terms-for-accession-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-child-and-parent-terms-for-accession-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns true or false for terms

<a id="opIdisDescendantOfUsingGET"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string/string
```

`GET /ontology/term/{accId1}/{accId2}`

<h3 id="returns-true-or-false-for-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId1|path|string|true|Child Term Accession ID|
|accId2|path|string|true|Parent Term Accession ID|

<h3 id="returns-true-or-false-for-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns term for Accession ID

<a id="opIdgetTermUsingGET"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string
```

`GET /ontology/term/{accId}`

<h3 id="returns-term-for-accession-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|Term Accession ID|

<h3 id="returns-term-for-accession-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Term](#schematerm)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-pathway">Pathway</h1>

## Return a list of pathways based on search term

<a id="opIdsearchPathwaysUsingGET"></a>

> Code samples

```bash
curl https://example.com/pathways/diagrams/search/string
```

`GET /pathways/diagrams/search/{searchString}`

<h3 id="return-a-list-of-pathways-based-on-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchString|path|string|true|Free text search string|

<h3 id="return-a-list-of-pathways-based-on-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-pathways-based-on-search-term-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pathway](#schemapathway)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of pathways based on category provided

<a id="opIdgetPathwaysWithDiagramsForCategoryUsingGET"></a>

> Code samples

```bash
curl https://example.com/pathways/diagramsForCategory/string
```

`GET /pathways/diagramsForCategory/{category}`

<h3 id="return-a-list-of-pathways-based-on-category-provided-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|Pathway Category|

<h3 id="return-a-list-of-pathways-based-on-category-provided-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-pathways-based-on-category-provided-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pathway](#schemapathway)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-qtl">QTL</h1>

## Returns a list QTL for given position and assembly map

<a id="opIdgetMappedQTLByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/qtls/mapped/string/0/0/0
```

`GET /qtls/mapped/{chr}/{start}/{stop}/{mapKey}`

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of assembly map keys can be found using the lookup service|

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MappedQTL](#schemamappedqtl)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list QTL for given position and assembly map

<a id="opIdgetQtlListByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/qtls/string/0/0/0
```

`GET /qtls/{chr}/{start}/{stop}/{mapKey}`

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of assembly map keys can be found using the lookup service|

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-qtl-for-given-position-and-assembly-map-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QTL](#schemaqtl)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a QTL for provided RGD ID

<a id="opIdgetQTLByRgdIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/qtls/0
```

`GET /qtls/{rgdId}`

<h3 id="return-a-qtl-for-provided-rgd-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID|

<h3 id="return-a-qtl-for-provided-rgd-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QTL](#schemaqtl)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-quantitative-phenotype">Quantitative Phenotype</h1>

Phenotype Web Service

## Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms. Results will be all records that match all terms submitted. Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139). Species type is an integer value (3=rat, 4=chinchilla). Reference RGD ID for a study works like a filter.

<a id="opIdgetChartInfoUsingGET"></a>

> Code samples

```bash
curl https://example.com/phenotype/phenominer/chart/0/0/string
```

`GET /phenotype/phenominer/chart/{speciesTypeKey}/{refRgdId}/{termString}`

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-reference-rgd-id-for-a-study-works-like-a-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|Species Type Key - 3=rat 4=chinchilla |
|refRgdId|path|integer(int32)|true|Reference RGD ID for a study|
|termString|path|string|true|List of term accession IDs|

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-reference-rgd-id-for-a-study-works-like-a-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-reference-rgd-id-for-a-study-works-like-a-filter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms. Results will be all records that match all terms submitted. Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139). Species type is an integer value (3=rat, 4=chinchilla)

<a id="opIdgetChartInfoUsingGET_1"></a>

> Code samples

```bash
curl https://example.com/phenotype/phenominer/chart/0/string
```

`GET /phenotype/phenominer/chart/{speciesTypeKey}/{termString}`

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|Species Type Key - 3=rat 4=chinchilla |
|termString|path|string|true|List of term accession IDs|

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-quantitative-phenotypes-values-based-on-a-combination-of-clinical-measurement-experimental-condition-rat-strain-andor-measurement-method-ontology-terms-results-will-be-all-records-that-match-all-terms-submitted-ontology-ids-should-be-submitted-as-a-comma-delimited-list-ex-rs0000029cmo0000155cmo0000139-species-type-is-an-integer-value-3rat-4chinchilla-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-rat-strain">Rat Strain</h1>

## Return all active strains in RGD

<a id="opIdgetAllStrainsUsingGET"></a>

> Code samples

```bash
curl https://example.com/strains/all
```

`GET /strains/all`

<h3 id="return-all-active-strains-in-rgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-all-active-strains-in-rgd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Strain](#schemastrain)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return all active strains by position

<a id="opIdgetStrainsByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/strains/string/0/0/0
```

`GET /strains/{chr}/{start}/{stop}/{mapKey}`

<h3 id="return-all-active-strains-by-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|RGD Map Key (available through lookup service)|

<h3 id="return-all-active-strains-by-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-all-active-strains-by-position-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Strain](#schemastrain)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return a strain by RGD ID

<a id="opIdgetStrainByRgdIdUsingGET"></a>

> Code samples

```bash
curl https://example.com/strains/0
```

`GET /strains/{rgdId}`

<h3 id="return-a-strain-by-rgd-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rgdId|path|integer(int32)|true|RGD ID of the strain|

<h3 id="return-a-strain-by-rgd-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Strain](#schemastrain)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-sslp">SSLP</h1>

SSLP Web Service

## Returns a list SSLP for given position and assembly map

<a id="opIdgetMappedSSLPByPositionUsingGET"></a>

> Code samples

```bash
curl https://example.com/sslps/mapped/string/0/0/0
```

`GET /sslps/mapped/{chr}/{start}/{stop}/{mapKey}`

<h3 id="returns-a-list-sslp-for-given-position-and-assembly-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chr|path|string|true|Chromosome|
|start|path|integer(int64)|true|Start Position|
|stop|path|integer(int64)|true|Stop Position|
|mapKey|path|integer(int32)|true|A list of assembly map keys can be found using the lookup service|

<h3 id="returns-a-list-sslp-for-given-position-and-assembly-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="returns-a-list-sslp-for-given-position-and-assembly-map-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MappedSSLP](#schemamappedsslp)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-statistics">Statistics</h1>

Stats Web Service

## Count of active objects by type, for specified species and date

<a id="opIdgetActiveObjectCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/activeObject/0/string
```

`GET /stats/count/activeObject/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-active-objects-by-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-active-objects-by-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-active-objects-by-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of gene types, for specified species and date

<a id="opIdgetGeneTypeCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/geneType/0/string
```

`GET /stats/count/geneType/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-gene-types-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-gene-types-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-gene-types-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of objects with given status, for specified species and date

<a id="opIdgetObjectStatusCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/objectStatus/0/string
```

`GET /stats/count/objectStatus/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-objects-with-given-status-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-objects-with-given-status-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-objects-with-given-status-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of objects with reference sequence(s), by object type, for specified species and date

<a id="opIdgetObjectsWithRefSeqCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/objectWithRefSeq/0/string
```

`GET /stats/count/objectWithRefSeq/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of objects with reference, by object type, for specified species and date

<a id="opIdgetObjectsWithReferenceCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/objectWithReference/0/string
```

`GET /stats/count/objectWithReference/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-objects-with-reference-by-object-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-objects-with-reference-by-object-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-objects-with-reference-by-object-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of objects with external database ids, by database id, for specified species, object type and date

<a id="opIdgetObjectsWithXDBsCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/objectWithXdb/0/0/string
```

`GET /stats/count/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateYYYYMMDD}`

<h3 id="count-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|objectKey|path|integer(int32)|true|objectKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of protein interactions, for specified species and date

<a id="opIdgetProteinInteractionCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/proteinInteraction/0/string
```

`GET /stats/count/proteinInteraction/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-protein-interactions-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-protein-interactions-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-protein-interactions-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of strains, by qtl inheritance type, for specified species and date

<a id="opIdgetQtlInheritanceTypeCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/qtlInheritanceType/0/string
```

`GET /stats/count/qtlInheritanceType/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of retired objects by type, for specified species and date

<a id="opIdgetRetiredObjectCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/retiredObject/0/string
```

`GET /stats/count/retiredObject/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-retired-objects-by-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-retired-objects-by-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-retired-objects-by-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of strain types, for specified species and date

<a id="opIdgetStrainTypeCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/strainType/0/string
```

`GET /stats/count/strainType/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-strain-types-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-strain-types-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-strain-types-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of withdrawn objects by type, for specified species and date

<a id="opIdgetWithdrawnObjectCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/withdrawnObject/0/string
```

`GET /stats/count/withdrawnObject/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-withdrawn-objects-by-type-for-specified-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-withdrawn-objects-by-type-for-specified-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-withdrawn-objects-by-type-for-specified-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count of external database ids, for specied species and date

<a id="opIdgetXdbsCountUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/count/xdb/0/string
```

`GET /stats/count/xdb/{speciesTypeKey}/{dateYYYYMMDD}`

<h3 id="count-of-external-database-ids-for-specied-species-and-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateYYYYMMDD|path|string|true|dateYYYYMMDD|

<h3 id="count-of-external-database-ids-for-specied-species-and-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-of-external-database-ids-for-specied-species-and-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of active objects, by type, for specified species and date range

<a id="opIdgetActiveObjectDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/activeObject/0/string/string
```

`GET /stats/diff/activeObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-active-objects-by-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-active-objects-by-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-active-objects-by-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of gene types, for specified species and date range

<a id="opIdgetGeneTypeDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/geneType/0/string/string
```

`GET /stats/diff/geneType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-gene-types-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-gene-types-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-gene-types-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of objects with given status, for specified species and date range

<a id="opIdgetObjectStatusDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/objectStatus/0/string/string
```

`GET /stats/diff/objectStatus/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-objects-with-given-status-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-objects-with-given-status-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-objects-with-given-status-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of objects with reference sequence(s), by object type, for specified species and date range

<a id="opIdgetObjectsWithRefSeqDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/objectWithRefSeq/0/string/string
```

`GET /stats/diff/objectWithRefSeq/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-objects-with-reference-sequences-by-object-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of objects with reference, by object type, for specified species and date range

<a id="opIdgetObjectsWithReferenceDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/objectWithReference/0/string/string
```

`GET /stats/diff/objectWithReference/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-objects-with-reference-by-object-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-objects-with-reference-by-object-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-objects-with-reference-by-object-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of objects with external database ids, by database id, for specified species, object type and date range

<a id="opIdgetObjectsWithXDBsDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/objectWithXdb/0/0/string/string
```

`GET /stats/diff/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|objectKey|path|integer(int32)|true|objectKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-objects-with-external-database-ids-by-database-id-for-specified-species-object-type-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of protein interactions, for specified species and date range

<a id="opIdgetProteinInteractionDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/proteinInteraction/0/string/string
```

`GET /stats/diff/proteinInteraction/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-protein-interactions-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-protein-interactions-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-protein-interactions-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of strains, by qtl inheritance type, for specified species and date range

<a id="opIdgetQtlInheritanceTypeDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/qtlInheritanceType/0/string/string
```

`GET /stats/diff/qtlInheritanceType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-strains-by-qtl-inheritance-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of retired objects, by type, for specified species and date range

<a id="opIdgetRetiredObjectDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/retiredObject/0/string/string
```

`GET /stats/diff/retiredObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-retired-objects-by-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-retired-objects-by-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-retired-objects-by-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of strain types, for specified species and date range

<a id="opIdgetStrainTypeDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/strainType/0/string/string
```

`GET /stats/diff/strainType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-strain-types-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-strain-types-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-strain-types-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of withdrawn objects, by type, for specified species and date range

<a id="opIdgetWithdrawnObjectDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/withdrawnObject/0/string/string
```

`GET /stats/diff/withdrawnObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-withdrawn-objects-by-type-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-withdrawn-objects-by-type-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-withdrawn-objects-by-type-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Count difference of external database ids, for specified species and date range

<a id="opIdgetXdbsDiffUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/diff/xdb/0/string/string
```

`GET /stats/diff/xdb/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}`

<h3 id="count-difference-of-external-database-ids-for-specified-species-and-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|speciesTypeKey|path|integer(int32)|true|speciesTypeKey|
|dateFromYYYYMMDD|path|string|true|dateFromYYYYMMDD|
|dateToYYYYMMDD|path|string|true|dateToYYYYMMDD|

<h3 id="count-difference-of-external-database-ids-for-specified-species-and-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="count-difference-of-external-database-ids-for-specified-species-and-date-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getTermStats

<a id="opIdgetTermStatsUsingGET"></a>

> Code samples

```bash
curl https://example.com/stats/term/string/string
```

`GET /stats/term/{accId}/{filterAccId}`

<h3 id="gettermstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accId|path|string|true|accId|
|filterAccId|path|string|true|filterAccId|

<h3 id="gettermstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="gettermstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int32)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-enrichment-web-service">enrichment-web-service</h1>

Enrichment Web Service

## Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology

<a id="opIdgetEnrichmentDataUsingPOST"></a>

> Code samples

```bash
curl https://example.com/enrichment/annotatedGenes \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "accId": "string",
    "geneSymbols": [
      "string"
    ],
    "species": "string"
  }'
```

`POST /enrichment/annotatedGenes`

> Body parameter

```json
{
  "accId": "string",
  "geneSymbols": [
    "string"
  ],
  "species": "string"
}
```

<h3 id="return-a-list-of-genes-annotated-to-the-termgenes-are-rgdids-separated-by-commaspecies-type-is-an-integer-valueterm-is-the-ontology-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnrichmentGeneRequest](#schemaenrichmentgenerequest)|true|geneRequest|
|» accId|body|string|false|none|
|» geneSymbols|body|[string]|false|none|
|» species|body|string|false|none|

<h3 id="return-a-list-of-genes-annotated-to-the-termgenes-are-rgdids-separated-by-commaspecies-type-is-an-integer-valueterm-is-the-ontology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

<a id="opIdgetEnrichmentDataUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/enrichment/data \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "aspect": "string",
    "genes": [
      "string"
    ],
    "species": "string"
  }'
```

`POST /enrichment/data`

> Body parameter

```json
{
  "aspect": "string",
  "genes": [
    "string"
  ],
  "species": "string"
}
```

<h3 id="return-a-chart-of-ontology-terms-annotated-to-the-genesgenes-are-rgdids-separated-by-commaspecies-type-is-an-integer-valueaspect-is-the-ontology-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EnrichmentRequest](#schemaenrichmentrequest)|true|enrichmentRequest|
|» aspect|body|string|false|none|
|» genes|body|[string]|false|none|
|» species|body|string|false|none|

<h3 id="return-a-chart-of-ontology-terms-annotated-to-the-genesgenes-are-rgdids-separated-by-commaspecies-type-is-an-integer-valueaspect-is-the-ontology-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="rat-genome-database-rest-api-chromosome">Chromosome</h1>

## Return a list of chromosomes

<a id="opIdgetChromosomeByAssemblyUsingGET"></a>

> Code samples

```bash
curl https://example.com/maps/chr/string/0
```

`GET /maps/chr/{chromosome}/{mapKey}`

<h3 id="return-a-list-of-chromosomes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chromosome|path|string|true|chromosome|
|mapKey|path|integer(int32)|true|mapKey|

<h3 id="return-a-list-of-chromosomes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Chromosome](#schemachromosome)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of chromosomes

<a id="opIdgetChromosomesByAssemblyUsingGET"></a>

> Code samples

```bash
curl https://example.com/maps/chr/0
```

`GET /maps/chr/{mapKey}`

<h3 id="return-a-list-of-chromosomes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mapKey|path|integer(int32)|true|mapKey|

<h3 id="return-a-list-of-chromosomes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="return-a-list-of-chromosomes-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnnotatedGeneRequest">AnnotatedGeneRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotatedgenerequest"></a>
<a id="schema_AnnotatedGeneRequest"></a>
<a id="tocSannotatedgenerequest"></a>
<a id="tocsannotatedgenerequest"></a>

```json
{
  "accId": "string",
  "evidenceCodes": [
    "string"
  ],
  "speciesTypeKeys": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accId|string|false|none|none|
|evidenceCodes|[string]|false|none|none|
|speciesTypeKeys|[integer(int32)]|false|none|none|

<h2 id="tocS_Annotation">Annotation</h2>
<!-- backwards compatibility -->
<a id="schemaannotation"></a>
<a id="schema_Annotation"></a>
<a id="tocSannotation"></a>
<a id="tocsannotation"></a>

```json
{
  "annotatedObjectRgdId": 0,
  "annotationExtension": "string",
  "aspect": "string",
  "createdBy": 0,
  "createdDate": "1970-01-01T00:00:00Z",
  "dataSrc": "string",
  "evidence": "string",
  "geneProductFormId": "string",
  "key": 0,
  "lastModifiedBy": 0,
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "notes": "string",
  "objectName": "string",
  "objectSymbol": "string",
  "originalCreatedDate": "1970-01-01T00:00:00Z",
  "qualifier": "string",
  "refRgdId": 0,
  "relativeTo": "string",
  "rgdObjectKey": 0,
  "speciesTypeKey": 0,
  "term": "string",
  "termAcc": "string",
  "withInfo": "string",
  "xrefSource": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedObjectRgdId|integer(int32)|false|none|none|
|annotationExtension|string|false|none|none|
|aspect|string|false|none|none|
|createdBy|integer(int32)|false|none|none|
|createdDate|string(date-time)|false|none|none|
|dataSrc|string|false|none|none|
|evidence|string|false|none|none|
|geneProductFormId|string|false|none|none|
|key|integer(int32)|false|none|none|
|lastModifiedBy|integer(int32)|false|none|none|
|lastModifiedDate|string(date-time)|false|none|none|
|notes|string|false|none|none|
|objectName|string|false|none|none|
|objectSymbol|string|false|none|none|
|originalCreatedDate|string(date-time)|false|none|none|
|qualifier|string|false|none|none|
|refRgdId|integer(int32)|false|none|none|
|relativeTo|string|false|none|none|
|rgdObjectKey|integer(int32)|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|term|string|false|none|none|
|termAcc|string|false|none|none|
|withInfo|string|false|none|none|
|xrefSource|string|false|none|none|

<h2 id="tocS_AnnotationRequest">AnnotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotationrequest"></a>
<a id="schema_AnnotationRequest"></a>
<a id="tocSannotationrequest"></a>
<a id="tocsannotationrequest"></a>

```json
{
  "evidenceCodes": [
    "string"
  ],
  "ids": [
    "string"
  ],
  "speciesTypeKeys": [
    0
  ],
  "termAcc": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidenceCodes|[string]|false|none|none|
|ids|[string]|false|none|none|
|speciesTypeKeys|[integer(int32)]|false|none|none|
|termAcc|string|false|none|none|

<h2 id="tocS_Chromosome">Chromosome</h2>
<!-- backwards compatibility -->
<a id="schemachromosome"></a>
<a id="schema_Chromosome"></a>
<a id="tocSchromosome"></a>
<a id="tocschromosome"></a>

```json
{
  "chromosome": "string",
  "contigCount": 0,
  "gapCount": 0,
  "gapLength": 0,
  "genbankId": "string",
  "mapKey": 0,
  "ordinalNumber": 0,
  "refseqId": "string",
  "seqLength": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|contigCount|integer(int32)|false|none|none|
|gapCount|integer(int32)|false|none|none|
|gapLength|integer(int32)|false|none|none|
|genbankId|string|false|none|none|
|mapKey|integer(int32)|false|none|none|
|ordinalNumber|integer(int32)|false|none|none|
|refseqId|string|false|none|none|
|seqLength|integer(int32)|false|none|none|

<h2 id="tocS_EnrichmentGeneRequest">EnrichmentGeneRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenrichmentgenerequest"></a>
<a id="schema_EnrichmentGeneRequest"></a>
<a id="tocSenrichmentgenerequest"></a>
<a id="tocsenrichmentgenerequest"></a>

```json
{
  "accId": "string",
  "geneSymbols": [
    "string"
  ],
  "species": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accId|string|false|none|none|
|geneSymbols|[string]|false|none|none|
|species|string|false|none|none|

<h2 id="tocS_EnrichmentRequest">EnrichmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenrichmentrequest"></a>
<a id="schema_EnrichmentRequest"></a>
<a id="tocSenrichmentrequest"></a>
<a id="tocsenrichmentrequest"></a>

```json
{
  "aspect": "string",
  "genes": [
    "string"
  ],
  "species": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|string|false|none|none|
|genes|[string]|false|none|none|
|species|string|false|none|none|

<h2 id="tocS_Gene">Gene</h2>
<!-- backwards compatibility -->
<a id="schemagene"></a>
<a id="schema_Gene"></a>
<a id="tocSgene"></a>
<a id="tocsgene"></a>

```json
{
  "agrDescription": "string",
  "description": "string",
  "ensemblFullName": "string",
  "ensemblGeneSymbol": "string",
  "ensemblGeneType": "string",
  "geneSource": "string",
  "key": 0,
  "mergedDescription": "string",
  "name": "string",
  "ncbiAnnotStatus": "string",
  "nomenReviewDate": "1970-01-01T00:00:00Z",
  "nomenSource": "string",
  "notes": "string",
  "refSeqStatus": "string",
  "rgdId": 0,
  "soAccId": "string",
  "speciesTypeKey": 0,
  "symbol": "string",
  "type": "string",
  "variant": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agrDescription|string|false|none|none|
|description|string|false|none|none|
|ensemblFullName|string|false|none|none|
|ensemblGeneSymbol|string|false|none|none|
|ensemblGeneType|string|false|none|none|
|geneSource|string|false|none|none|
|key|integer(int32)|false|none|none|
|mergedDescription|string|false|none|none|
|name|string|false|none|none|
|ncbiAnnotStatus|string|false|none|none|
|nomenReviewDate|string(date-time)|false|none|none|
|nomenSource|string|false|none|none|
|notes|string|false|none|none|
|refSeqStatus|string|false|none|none|
|rgdId|integer(int32)|false|none|none|
|soAccId|string|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|symbol|string|false|none|none|
|type|string|false|none|none|
|variant|boolean|false|none|none|

<h2 id="tocS_Map">Map</h2>
<!-- backwards compatibility -->
<a id="schemamap"></a>
<a id="schema_Map"></a>
<a id="tocSmap"></a>
<a id="tocsmap"></a>

```json
{
  "dbsnpVersion": "string",
  "description": "string",
  "key": 0,
  "methodKey": 0,
  "name": "string",
  "notes": "string",
  "primaryRefAssembly": true,
  "rank": 0,
  "refSeqAssemblyAcc": "string",
  "refSeqAssemblyName": "string",
  "rgdId": 0,
  "source": "string",
  "speciesTypeKey": 0,
  "ucscAssemblyId": "string",
  "unit": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbsnpVersion|string|false|none|none|
|description|string|false|none|none|
|key|integer(int32)|false|none|none|
|methodKey|integer(int32)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|primaryRefAssembly|boolean|false|none|none|
|rank|integer(int32)|false|none|none|
|refSeqAssemblyAcc|string|false|none|none|
|refSeqAssemblyName|string|false|none|none|
|rgdId|integer(int32)|false|none|none|
|source|string|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|ucscAssemblyId|string|false|none|none|
|unit|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_MapPair">MapPair</h2>
<!-- backwards compatibility -->
<a id="schemamappair"></a>
<a id="schema_MapPair"></a>
<a id="tocSmappair"></a>
<a id="tocsmappair"></a>

```json
{
  "keyValue": "string",
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyValue|string|false|none|none|
|stringValue|string|false|none|none|

<h2 id="tocS_MappedGene">MappedGene</h2>
<!-- backwards compatibility -->
<a id="schemamappedgene"></a>
<a id="schema_MappedGene"></a>
<a id="tocSmappedgene"></a>
<a id="tocsmappedgene"></a>

```json
{
  "chromosome": "string",
  "gene": {
    "agrDescription": "string",
    "description": "string",
    "ensemblFullName": "string",
    "ensemblGeneSymbol": "string",
    "ensemblGeneType": "string",
    "geneSource": "string",
    "key": 0,
    "mergedDescription": "string",
    "name": "string",
    "ncbiAnnotStatus": "string",
    "nomenReviewDate": "1970-01-01T00:00:00Z",
    "nomenSource": "string",
    "notes": "string",
    "refSeqStatus": "string",
    "rgdId": 0,
    "soAccId": "string",
    "speciesTypeKey": 0,
    "symbol": "string",
    "type": "string",
    "variant": true
  },
  "mapKey": 0,
  "start": 0,
  "stop": 0,
  "strand": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|gene|[Gene](#schemagene)|false|none|none|
|mapKey|integer(int32)|false|none|none|
|start|integer(int64)|false|none|none|
|stop|integer(int64)|false|none|none|
|strand|string|false|none|none|

<h2 id="tocS_MappedGenePosition">MappedGenePosition</h2>
<!-- backwards compatibility -->
<a id="schemamappedgeneposition"></a>
<a id="schema_MappedGenePosition"></a>
<a id="tocSmappedgeneposition"></a>
<a id="tocsmappedgeneposition"></a>

```json
{
  "chromosome": "string",
  "mapKey": 0,
  "rgdId": 0,
  "start": 0,
  "stop": 0,
  "strand": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|mapKey|integer(int32)|false|none|none|
|rgdId|integer(int32)|false|none|none|
|start|integer(int64)|false|none|none|
|stop|integer(int64)|false|none|none|
|strand|string|false|none|none|
|symbol|string|false|none|none|

<h2 id="tocS_MappedQTL">MappedQTL</h2>
<!-- backwards compatibility -->
<a id="schemamappedqtl"></a>
<a id="schema_MappedQTL"></a>
<a id="tocSmappedqtl"></a>
<a id="tocsmappedqtl"></a>

```json
{
  "chromosome": "string",
  "mapKey": 0,
  "qtl": {
    "chromosome": "string",
    "flank1RgdId": 0,
    "flank2RgdId": 0,
    "inheritanceType": "string",
    "key": 0,
    "linkageImage": "string",
    "lod": 0,
    "lodImage": "string",
    "mostSignificantCmoTerm": "string",
    "name": "string",
    "notes": "string",
    "peakOffset": 0,
    "peakRgdId": 0,
    "pvalue": 0,
    "rgdId": 0,
    "sourceUrl": "string",
    "speciesTypeKey": 0,
    "symbol": "string",
    "variance": 0
  },
  "start": 0,
  "stop": 0,
  "strand": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|mapKey|integer(int32)|false|none|none|
|qtl|[QTL](#schemaqtl)|false|none|none|
|start|integer(int64)|false|none|none|
|stop|integer(int64)|false|none|none|
|strand|string|false|none|none|

<h2 id="tocS_MappedSSLP">MappedSSLP</h2>
<!-- backwards compatibility -->
<a id="schemamappedsslp"></a>
<a id="schema_MappedSSLP"></a>
<a id="tocSmappedsslp"></a>
<a id="tocsmappedsslp"></a>

```json
{
  "chromosome": "string",
  "mapKey": 0,
  "sslp": {
    "expectedSize": 0,
    "forwardSeq": "string",
    "key": 0,
    "name": "string",
    "notes": "string",
    "reverseSeq": "string",
    "rgdId": 0,
    "speciesTypeKey": 0,
    "sslpType": "string",
    "templateSeq": "string"
  },
  "start": 0,
  "stop": 0,
  "strand": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|mapKey|integer(int32)|false|none|none|
|sslp|[SSLP](#schemasslp)|false|none|none|
|start|integer(int64)|false|none|none|
|stop|integer(int64)|false|none|none|
|strand|string|false|none|none|

<h2 id="tocS_OrthologRequest">OrthologRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorthologrequest"></a>
<a id="schema_OrthologRequest"></a>
<a id="tocSorthologrequest"></a>
<a id="tocsorthologrequest"></a>

```json
{
  "rgdIds": [
    0
  ],
  "speciesTypeKeys": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rgdIds|[integer(int32)]|false|none|none|
|speciesTypeKeys|[integer(int32)]|false|none|none|

<h2 id="tocS_Pathway">Pathway</h2>
<!-- backwards compatibility -->
<a id="schemapathway"></a>
<a id="schema_Pathway"></a>
<a id="tocSpathway"></a>
<a id="tocspathway"></a>

```json
{
  "description": "string",
  "hasAlteredPath": "string",
  "id": "string",
  "name": "string",
  "objectList": [
    {
      "accId": "string",
      "id": "string",
      "objDesc": "string",
      "objName": "string",
      "typeId": 0,
      "typeName": "string",
      "url": "string",
      "xdb_key": 0
    }
  ],
  "pathwayCategories": [
    "string"
  ],
  "referenceList": [
    {
      "citation": "string",
      "doi": "string",
      "editors": "string",
      "issue": "string",
      "key": 0,
      "notes": "string",
      "pages": "string",
      "pubDate": "1970-01-01T00:00:00Z",
      "pubStatus": "string",
      "publication": "string",
      "publisher": "string",
      "publisherCity": "string",
      "refAbstract": "string",
      "referenceType": "string",
      "rgdId": 0,
      "speciesTypeKey": 0,
      "title": "string",
      "urlWebReference": "string",
      "volume": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|hasAlteredPath|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|objectList|[[PathwayObject](#schemapathwayobject)]|false|none|none|
|pathwayCategories|[string]|false|none|none|
|referenceList|[[Reference](#schemareference)]|false|none|none|

<h2 id="tocS_PathwayObject">PathwayObject</h2>
<!-- backwards compatibility -->
<a id="schemapathwayobject"></a>
<a id="schema_PathwayObject"></a>
<a id="tocSpathwayobject"></a>
<a id="tocspathwayobject"></a>

```json
{
  "accId": "string",
  "id": "string",
  "objDesc": "string",
  "objName": "string",
  "typeId": 0,
  "typeName": "string",
  "url": "string",
  "xdb_key": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accId|string|false|none|none|
|id|string|false|none|none|
|objDesc|string|false|none|none|
|objName|string|false|none|none|
|typeId|integer(int32)|false|none|none|
|typeName|string|false|none|none|
|url|string|false|none|none|
|xdb_key|integer(int32)|false|none|none|

<h2 id="tocS_QTL">QTL</h2>
<!-- backwards compatibility -->
<a id="schemaqtl"></a>
<a id="schema_QTL"></a>
<a id="tocSqtl"></a>
<a id="tocsqtl"></a>

```json
{
  "chromosome": "string",
  "flank1RgdId": 0,
  "flank2RgdId": 0,
  "inheritanceType": "string",
  "key": 0,
  "linkageImage": "string",
  "lod": 0,
  "lodImage": "string",
  "mostSignificantCmoTerm": "string",
  "name": "string",
  "notes": "string",
  "peakOffset": 0,
  "peakRgdId": 0,
  "pvalue": 0,
  "rgdId": 0,
  "sourceUrl": "string",
  "speciesTypeKey": 0,
  "symbol": "string",
  "variance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chromosome|string|false|none|none|
|flank1RgdId|integer(int32)|false|none|none|
|flank2RgdId|integer(int32)|false|none|none|
|inheritanceType|string|false|none|none|
|key|integer(int32)|false|none|none|
|linkageImage|string|false|none|none|
|lod|number(double)|false|none|none|
|lodImage|string|false|none|none|
|mostSignificantCmoTerm|string|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|peakOffset|integer(int32)|false|none|none|
|peakRgdId|integer(int32)|false|none|none|
|pvalue|number(double)|false|none|none|
|rgdId|integer(int32)|false|none|none|
|sourceUrl|string|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|symbol|string|false|none|none|
|variance|number(double)|false|none|none|

<h2 id="tocS_RGDIDListRequest">RGDIDListRequest</h2>
<!-- backwards compatibility -->
<a id="schemargdidlistrequest"></a>
<a id="schema_RGDIDListRequest"></a>
<a id="tocSrgdidlistrequest"></a>
<a id="tocsrgdidlistrequest"></a>

```json
{
  "rgdIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rgdIds|[integer(int32)]|false|none|none|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "citation": "string",
  "doi": "string",
  "editors": "string",
  "issue": "string",
  "key": 0,
  "notes": "string",
  "pages": "string",
  "pubDate": "1970-01-01T00:00:00Z",
  "pubStatus": "string",
  "publication": "string",
  "publisher": "string",
  "publisherCity": "string",
  "refAbstract": "string",
  "referenceType": "string",
  "rgdId": 0,
  "speciesTypeKey": 0,
  "title": "string",
  "urlWebReference": "string",
  "volume": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|citation|string|false|none|none|
|doi|string|false|none|none|
|editors|string|false|none|none|
|issue|string|false|none|none|
|key|integer(int32)|false|none|none|
|notes|string|false|none|none|
|pages|string|false|none|none|
|pubDate|string(date-time)|false|none|none|
|pubStatus|string|false|none|none|
|publication|string|false|none|none|
|publisher|string|false|none|none|
|publisherCity|string|false|none|none|
|refAbstract|string|false|none|none|
|referenceType|string|false|none|none|
|rgdId|integer(int32)|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|title|string|false|none|none|
|urlWebReference|string|false|none|none|
|volume|string|false|none|none|

<h2 id="tocS_SSLP">SSLP</h2>
<!-- backwards compatibility -->
<a id="schemasslp"></a>
<a id="schema_SSLP"></a>
<a id="tocSsslp"></a>
<a id="tocssslp"></a>

```json
{
  "expectedSize": 0,
  "forwardSeq": "string",
  "key": 0,
  "name": "string",
  "notes": "string",
  "reverseSeq": "string",
  "rgdId": 0,
  "speciesTypeKey": 0,
  "sslpType": "string",
  "templateSeq": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expectedSize|integer(int32)|false|none|none|
|forwardSeq|string|false|none|none|
|key|integer(int32)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|reverseSeq|string|false|none|none|
|rgdId|integer(int32)|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|sslpType|string|false|none|none|
|templateSeq|string|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "cryopreservedEmbryo": true,
  "cryopreservedSperm": true,
  "cryorecovery": true,
  "key": 0,
  "liveAnimals": true,
  "statusDate": "1970-01-01T00:00:00Z",
  "strainRgdId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryopreservedEmbryo|boolean|false|none|none|
|cryopreservedSperm|boolean|false|none|none|
|cryorecovery|boolean|false|none|none|
|key|integer(int32)|false|none|none|
|liveAnimals|boolean|false|none|none|
|statusDate|string(date-time)|false|none|none|
|strainRgdId|integer(int32)|false|none|none|

<h2 id="tocS_Strain">Strain</h2>
<!-- backwards compatibility -->
<a id="schemastrain"></a>
<a id="schema_Strain"></a>
<a id="tocSstrain"></a>
<a id="tocsstrain"></a>

```json
{
  "backgroundStrainRgdId": 0,
  "chrAltered": "string",
  "color": "string",
  "geneticStatus": "string",
  "genetics": "string",
  "imageUrl": "string",
  "inbredGen": "string",
  "key": 0,
  "lastStatus": "string",
  "lastStatusObject": {
    "cryopreservedEmbryo": true,
    "cryopreservedSperm": true,
    "cryorecovery": true,
    "key": 0,
    "liveAnimals": true,
    "statusDate": "1970-01-01T00:00:00Z",
    "strainRgdId": 0
  },
  "modificationMethod": "string",
  "name": "string",
  "notes": "string",
  "origin": "string",
  "researchUse": "string",
  "rgdId": 0,
  "source": "string",
  "speciesTypeKey": 0,
  "statusLog": [
    {
      "cryopreservedEmbryo": true,
      "cryopreservedSperm": true,
      "cryorecovery": true,
      "key": 0,
      "liveAnimals": true,
      "statusDate": "1970-01-01T00:00:00Z",
      "strainRgdId": 0
    }
  ],
  "strain": "string",
  "strainTypeName": "string",
  "substrain": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundStrainRgdId|integer(int32)|false|none|none|
|chrAltered|string|false|none|none|
|color|string|false|none|none|
|geneticStatus|string|false|none|none|
|genetics|string|false|none|none|
|imageUrl|string|false|none|none|
|inbredGen|string|false|none|none|
|key|integer(int32)|false|none|none|
|lastStatus|string|false|none|none|
|lastStatusObject|[Status](#schemastatus)|false|none|none|
|modificationMethod|string|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|origin|string|false|none|none|
|researchUse|string|false|none|none|
|rgdId|integer(int32)|false|none|none|
|source|string|false|none|none|
|speciesTypeKey|integer(int32)|false|none|none|
|statusLog|[[Status](#schemastatus)]|false|none|none|
|strain|string|false|none|none|
|strainTypeName|string|false|none|none|
|substrain|string|false|none|none|
|symbol|string|false|none|none|

<h2 id="tocS_Term">Term</h2>
<!-- backwards compatibility -->
<a id="schematerm"></a>
<a id="schema_Term"></a>
<a id="tocSterm"></a>
<a id="tocsterm"></a>

```json
{
  "accId": "string",
  "comment": "string",
  "createdBy": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "definition": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "obsolete": 0,
  "ontologyId": "string",
  "term": "string",
  "xrefs": [
    {
      "key": 0,
      "termAcc": "string",
      "xrefDescription": "string",
      "xrefValue": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accId|string|false|none|none|
|comment|string|false|none|none|
|createdBy|string|false|none|none|
|creationDate|string(date-time)|false|none|none|
|definition|string|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|obsolete|integer(int32)|false|none|none|
|ontologyId|string|false|none|none|
|term|string|false|none|none|
|xrefs|[[TermXRef](#schematermxref)]|false|none|none|

<h2 id="tocS_TermXRef">TermXRef</h2>
<!-- backwards compatibility -->
<a id="schematermxref"></a>
<a id="schema_TermXRef"></a>
<a id="tocStermxref"></a>
<a id="tocstermxref"></a>

```json
{
  "key": 0,
  "termAcc": "string",
  "xrefDescription": "string",
  "xrefValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|integer(int32)|false|none|none|
|termAcc|string|false|none|none|
|xrefDescription|string|false|none|none|
|xrefValue|string|false|none|none|
