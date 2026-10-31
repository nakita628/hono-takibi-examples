<h1 id="biolink-api">BioLink API v1.1.14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API integration layer for linked biological objects.

 __Source:__ https://github.com/biolink/biolink-api/

Base URLs:

* <a href="https://api.apis.guru/api">https://api.apis.guru/api</a>

License: BSD3

<h1 id="biolink-api-bioentity">bioentity</h1>

Retrieval of domain entities plus associations

## Returns genes associated with a given anatomy

<a id="opIdget_anatomy_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/anatomy/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/anatomy/{id}/genes`

<h3 id="returns-genes-associated-with-a-given-anatomy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-given-anatomy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns gene IDs for all genes associated with a given anatomy, filtered by taxon

<a id="opIdget_anatomy_gene_by_taxon_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/anatomy/string/genes/string
```

`GET /bioentity/anatomy/{id}/genes/{taxid}`

<aside class="warning">
This operation is deprecated
</aside>

For example, + NCBITaxon:10090 (mouse)

<h3 id="returns-gene-ids-for-all-genes-associated-with-a-given-anatomy-filtered-by-taxon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|taxid|path|string|true|Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)|
|id|path|string|true|CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results|

<h3 id="returns-gene-ids-for-all-genes-associated-with-a-given-anatomy-filtered-by-taxon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a case

<a id="opIdget_case_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/case/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/case/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a case|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a case

<a id="opIdget_case_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/case/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/case/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a case|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns models associated with a case

<a id="opIdget_case_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/case/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/case/{id}/models`

<h3 id="returns-models-associated-with-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a case|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-models-associated-with-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a case

<a id="opIdget_case_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/case/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/case/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a case|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a case

<a id="opIdget_case_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/case/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/case/{id}/variants`

<h3 id="returns-variants-associated-with-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a case|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a disease

<a id="opIdget_disease_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/cases`

<h3 id="returns-cases-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of disease, e.g. MONDO:0007103, MONDO:0010918. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a disease

<a id="opIdget_disease_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/genes`

<h3 id="returns-genes-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|association_type|query|string|false|Additional filters: causal, non_causal, both|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|association_type|causal|
|association_type|non_causal|
|association_type|both|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a disease

<a id="opIdget_disease_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. Orphanet:399158, DOID:0080008. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations to models of the disease

<a id="opIdget_disease_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/models`

In the association object returned, the subject will be the disease, and the object will be the model.
The model may be a gene or genetic element.

If the query disease is a general class, the association subject may be to a specific disease.

In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.

In other cases, the association will be *indirect*, for
example, chaining over orthology. In these cases the chain
will be reflected in the *evidence graph*

* TODO: provide hook into owlsim for dynamic computation of models by similarity

<h3 id="returns-associations-to-models-of-the-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-associations-to-models-of-the-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations to models of the disease constrained by taxon

<a id="opIdget_disease_model_taxon_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/models/string \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/models/{taxon}`

<aside class="warning">
This operation is deprecated
</aside>

See /disease/<id>/models route for full details

<h3 id="returns-associations-to-models-of-the-disease-constrained-by-taxon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|path|string|true|CURIE of organism taxonomy class to constrain models, e.g NCBITaxon:10090 (M. musculus).<br><br> Higher level taxa may be used|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-associations-to-models-of-the-disease-constrained-by-taxon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns pathways associated with a disease

<a id="opIdget_disease_pathway_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/pathways \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/pathways`

<h3 id="returns-pathways-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. DOID:4450. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-pathways-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with disease

<a id="opIdget_disease_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, Orphanet:1934, DOID:678. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string",
      "frequency": {
        "id": "string",
        "label": "string"
      },
      "onset": {
        "id": "string",
        "label": "string"
      }
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[D2PAssociationResults](#schemad2passociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a disease

<a id="opIdget_disease_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/publications`

<h3 id="returns-publications-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns substances associated with a disease

<a id="opIdget_disease_substance_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/treatment
```

`GET /bioentity/disease/{id}/treatment`

e.g. drugs or small molecules used to treat

<h3 id="returns-substances-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of disease, e.g. DOID:2841 (asthma). Equivalent IDs not yet supported|

<h3 id="returns-substances-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a disease

<a id="opIdget_disease_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/disease/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/disease/{id}/variants`

<h3 id="returns-variants-associated-with-a-disease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-disease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns annotations associated to a function term

<a id="opIdget_function_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/function/string
```

`GET /bioentity/function/{id}`

<h3 id="returns-annotations-associated-to-a-function-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|beginning row|
|rows|query|integer|false|number of rows|
|evidence|query|[string]|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|id|path|string|true|CURIE identifier of a function term (e.g. GO:0044598)|

<h3 id="returns-annotations-associated-to-a-function-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated to a GO term

<a id="opIdget_function_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/function/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/function/{id}/genes`

<h3 id="returns-genes-associated-to-a-go-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|relationship_type|query|string|false|relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0044598|

#### Enumerated Values

|Parameter|Value|
|---|---|
|relationship_type|involved_in|
|relationship_type|involved_in_regulation_of|
|relationship_type|acts_upstream_of_or_within|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-to-a-go-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated to a GO term

<a id="opIdget_function_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/function/string/publications
```

`GET /bioentity/function/{id}/publications`

<h3 id="returns-publications-associated-to-a-go-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|beginning row|
|rows|query|integer|false|number of rows|
|evidence|query|[string]|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0044598|

<h3 id="returns-publications-associated-to-a-go-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns taxons associated to a GO term

<a id="opIdget_function_taxon_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/function/string/taxons
```

`GET /bioentity/function/{id}/taxons`

<h3 id="returns-taxons-associated-to-a-go-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|beginning row|
|rows|query|integer|false|number of rows|
|evidence|query|[string]|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0044598|

<h3 id="returns-taxons-associated-to-a-go-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anatomical entities associated with a gene

<a id="opIdget_gene_anatomy_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/anatomy \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/anatomy`

<h3 id="returns-anatomical-entities-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:13434|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-anatomical-entities-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a gene

<a id="opIdget_gene_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/cases`

<h3 id="returns-cases-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of gene, e.g. HGNC:613, HGNC:11025|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with gene

<a id="opIdget_gene_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/diseases`

<h3 id="returns-diseases-associated-with-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|association_type|query|string|false|Additional filters: causal, non_causal, both|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|association_type|causal|
|association_type|non_causal|
|association_type|both|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns expression events for a gene

<a id="opIdget_gene_expression_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/expression/anatomy \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/expression/anatomy`

<h3 id="returns-expression-events-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-expression-events-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns function associations for a gene

<a id="opIdget_gene_function_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/function \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/function`

IMPLEMENTATION DETAILS
----------------------

Note: currently this is implemented as a query to the GO/AmiGO solr instance.
This directly supports IDs such as:

 - ZFIN e.g. ZFIN:ZDB-GENE-050417-357

Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
the standard for biolink is MGI:nnnn, so you should use this (will be transparently
mapped to legacy ID)

Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
mapped behind the scenes for querying.

<h3 id="returns-function-associations-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|id, e.g. NCBIGene:6469. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-function-associations-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a gene

<a id="opIdget_gene_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. ZFIN:ZDB-GENE-980526-166|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns homologs for a gene

<a id="opIdget_gene_homolog_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/homologs \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/homologs`

<h3 id="returns-homologs-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)|
|homology_type|query|string|false|P (paralog), O (Ortholog) or LDO (least-diverged ortholog)|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|id|path|string|true|id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|homology_type|P|
|homology_type|O|
|homology_type|LDO|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-homologs-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns interactions for a gene

<a id="opIdget_gene_interactions"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/interactions \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/interactions`

<h3 id="returns-interactions-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-interactions-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns models associated with a gene

<a id="opIdget_gene_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/models`

<h3 id="returns-models-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:17988|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-models-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Return diseases associated with orthologs of a gene

<a id="opIdget_gene_ortholog_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/ortholog/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/ortholog/diseases`

<h3 id="return-diseases-associated-with-orthologs-of-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="return-diseases-associated-with-orthologs-of-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Return phenotypes associated with orthologs for a gene

<a id="opIdget_gene_ortholog_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/ortholog/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/ortholog/phenotypes`

<h3 id="return-phenotypes-associated-with-orthologs-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="return-phenotypes-associated-with-orthologs-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns pathways associated with gene

<a id="opIdget_gene_pathway_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/pathways \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/pathways`

<h3 id="returns-pathways-associated-with-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:50846. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-pathways-associated-with-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with gene

<a id="opIdget_gene_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a gene

<a id="opIdget_gene_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/publications`

<h3 id="returns-publications-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. NCBIGene:4750|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a gene

<a id="opIdget_gene_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/gene/{id}/variants`

<h3 id="returns-variants-associated-with-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of gene, e.g. HGNC:10896|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a genotype

<a id="opIdget_genotype_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/cases`

<h3 id="returns-cases-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of genotype, e.g. dbSNPIndividual:10440, dbSNPIndividual:22633|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a genotype

<a id="opIdget_genotype_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. dbSNPIndividual:11441 (if non-human will return models)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a genotype

<a id="opIdget_genotype_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/genes`

<h3 id="returns-genes-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes-genotype associations

<a id="opIdget_genotype_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/genotypes`

Genotypes may be related to one another according to the GENO model

<h3 id="returns-genotypes-genotype-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-genotype-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns models associated with a genotype

<a id="opIdget_genotype_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/models`

<h3 id="returns-models-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-models-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a genotype

<a id="opIdget_genotype_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a genotype

<a id="opIdget_genotype_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/publications`

<h3 id="returns-publications-associated-with-a-genotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-genotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes-variant associations

<a id="opIdget_genotype_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/genotype/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/genotype/{id}/variants`

<h3 id="returns-genotypes-variant-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of genotype, e.g. MONARCH:FBgeno422705|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-variant-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations to GO terms for a gene

<a id="opIdget_goterm_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/goterm/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/goterm/{id}/genes`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-associations-to-go-terms-for-a-gene-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|relationship_type|query|string|false|relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0044598|

#### Enumerated Values

|Parameter|Value|
|---|---|
|relationship_type|involved_in|
|relationship_type|involved_in_regulation_of|
|relationship_type|acts_upstream_of_or_within|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-associations-to-go-terms-for-a-gene-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a model

<a id="opIdget_model_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/cases`

<h3 id="returns-cases-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier for a model, e.g. Coriell:GM22295, Coriell:HG02187|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a model

<a id="opIdget_model_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a model, e.g. MGI:5573196|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a model

<a id="opIdget_model_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/genes`

<h3 id="returns-genes-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a model, e.g. MMRRC:042787|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a model

<a id="opIdget_model_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a model, e.g. Coriell:NA16660|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a model

<a id="opIdget_model_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|id|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a model

<a id="opIdget_model_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/publications`

<h3 id="returns-publications-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a model, e.g. MGI:5644542|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a model

<a id="opIdget_model_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/model/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/model/{id}/variants`

<h3 id="returns-variants-associated-with-a-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a model, e.g. MMRRC:042787|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a pathway

<a id="opIdget_pathway_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/pathway/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/pathway/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-pathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE any pathway element. E.g. REACT:R-HSA-5387390|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-pathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a pathway

<a id="opIdget_pathway_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/pathway/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/pathway/{id}/genes`

<h3 id="returns-genes-associated-with-a-pathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE any pathway element. E.g. REACT:R-HSA-5387390|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-pathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a pathway

<a id="opIdget_pathway_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/pathway/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/pathway/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-pathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE any pathway element. E.g. REACT:R-HSA-5387390|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-pathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns anatomical entities associated with a phenotype

<a id="opIdget_phenotype_anatomy_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/anatomy \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/anatomy`

Example IDs:

 * MP:0008521 abnormal Bowman membrane

<h3 id="returns-anatomical-entities-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of phenotype, e.g. MP:0008521. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
[
  {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "consider": [
      "string"
    ],
    "deprecated": true,
    "description": "string",
    "replaced_by": [
      "string"
    ],
    "synonyms": [
      {
        "pred": "string",
        "val": "string",
        "xrefs": [
          "string"
        ]
      }
    ],
    "types": [
      "string"
    ]
  }
]
```

<h3 id="returns-anatomical-entities-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-anatomical-entities-associated-with-a-phenotype-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NamedObject](#schemanamedobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a phenotype

<a id="opIdget_phenotype_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/cases`

<h3 id="returns-cases-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|Pheno class CURIE identifier, e.g  HP:0011951 (Aspiration pneumonia), HP:0002450 (Abnormal motor neuron morphology)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a phenotype

<a id="opIdget_phenotype_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of phenotype, e.g. HP:0007359. Equivalent IDs can be used with same results|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string",
      "frequency": {
        "id": "string",
        "label": "string"
      },
      "onset": {
        "id": "string",
        "label": "string"
      }
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[D2PAssociationResults](#schemad2passociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns gene IDs for all genes associated with a given phenotype, filtered by taxon

<a id="opIdget_phenotype_gene_by_taxon_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/gene/string/ids
```

`GET /bioentity/phenotype/{id}/gene/{taxid}/ids`

<aside class="warning">
This operation is deprecated
</aside>

For example, MP:0001569 + NCBITaxon:10090 (mouse)

<h3 id="returns-gene-ids-for-all-genes-associated-with-a-given-phenotype-filtered-by-taxon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxid|path|string|true|Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)|
|id|path|string|true|Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)|

<h3 id="returns-gene-ids-for-all-genes-associated-with-a-given-phenotype-filtered-by-taxon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a phenotype

<a id="opIdget_phenotype_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/genes`

<h3 id="returns-genes-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level), |

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a phenotype

<a id="opIdget_phenotype_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns pathways associated with a phenotype

<a id="opIdget_phenotype_pathway_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/pathways \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/pathways`

<h3 id="returns-pathways-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-pathways-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a phenotype

<a id="opIdget_phenotype_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/publications`

<h3 id="returns-publications-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a phenotype

<a id="opIdget_phenotype_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/phenotype/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/phenotype/{id}/variants`

<h3 id="returns-variants-associated-with-a-phenotype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-phenotype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a publication

<a id="opIdget_publication_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a publication

<a id="opIdget_publication_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/genes`

<h3 id="returns-genes-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a publication

<a id="opIdget_publication_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns models associated with a publication

<a id="opIdget_publication_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/models`

<h3 id="returns-models-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-models-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a publication

<a id="opIdget_publication_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns variants associated with a publication

<a id="opIdget_publication_variant_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/publication/string/variants \
  -H 'Accept: application/json'
```

`GET /bioentity/publication/{id}/variants`

<h3 id="returns-variants-associated-with-a-publication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier for a publication, e.g. PMID:11751940|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-variants-associated-with-a-publication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations between an activity and process and the specified substance

<a id="opIdget_substance_participant_in_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/substance/string/participant_in \
  -H 'Accept: application/json'
```

`GET /bioentity/substance/{id}/participant_in`

Examples relationships:

 * substance is a metabolite of a process
 * substance is synthesized by a process
 * substance is modified by an activity
 * substance elicits a response program/pathway
 * substance is transported by activity or pathway

For example, CHEBI:40036 (amitrole)

<h3 id="returns-associations-between-an-activity-and-process-and-the-specified-substance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of substance, e.g. CHEBI:40036|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-associations-between-an-activity-and-process-and-the-specified-substance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-associations-between-an-activity-and-process-and-the-specified-substance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations between given drug and roles

<a id="opIdget_substance_role_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/substance/string/roles \
  -H 'Accept: application/json'
```

`GET /bioentity/substance/{id}/roles`

Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)

<h3 id="returns-associations-between-given-drug-and-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of substance, e.g. CHEBI:40036|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-associations-between-given-drug-and-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-associations-between-given-drug-and-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns substances associated with a disease

<a id="opIdget_substance_treats_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/substance/string/treats
```

`GET /bioentity/substance/{id}/treats`

e.g. drugs or small molecules used to treat

<h3 id="returns-substances-associated-with-a-disease-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of substance, e.g. CHEBI:40036|

<h3 id="returns-substances-associated-with-a-disease-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns cases associated with a variant

<a id="opIdget_variant_case_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/cases \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/cases`

<h3 id="returns-cases-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of variant, e.g. OMIM:309550.0004, dbSNP:rs5030868|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-cases-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns diseases associated with a variant

<a id="opIdget_variant_disease_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/diseases \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/diseases`

<h3 id="returns-diseases-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of variant, e.g. ClinVarVariant:14925|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-diseases-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genes associated with a variant

<a id="opIdget_variant_gene_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/genes \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/genes`

<h3 id="returns-genes-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genes-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns genotypes associated with a variant

<a id="opIdget_variant_genotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/genotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/genotypes`

<h3 id="returns-genotypes-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-genotypes-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns models associated with a variant

<a id="opIdget_variant_model_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/models \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/models`

<h3 id="returns-models-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|CURIE identifier of variant, e.g. OMIM:607623.0012, dbSNP:rs5030868|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-models-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns phenotypes associated with a variant

<a id="opIdget_variant_phenotype_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/phenotypes \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/phenotypes`

<h3 id="returns-phenotypes-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-phenotypes-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns publications associated with a variant

<a id="opIdget_variant_publication_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/variant/string/publications \
  -H 'Accept: application/json'
```

`GET /bioentity/variant/{id}/publications`

<h3 id="returns-publications-associated-with-a-variant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-publications-associated-with-a-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns basic info on object of any type

<a id="opIdget_generic_object"></a>

> Code samples

```bash
curl https://example.com/bioentity/string \
  -H 'Accept: application/json'
```

`GET /bioentity/{id}`

<h3 id="returns-basic-info-on-object-of-any-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|id|path|string|true|id, e.g. NCBIGene:84570|

> Example responses

> 200 Response

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ],
  "association_counts": {},
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "xrefs": [
    "string"
  ]
}
```

<h3 id="returns-basic-info-on-object-of-any-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BioObject](#schemabioobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns associations for an entity regardless of the type

<a id="opIdget_generic_associations"></a>

> Code samples

```bash
curl https://example.com/bioentity/string/associations \
  -H 'Accept: application/json'
```

`GET /bioentity/{id}/associations`

<h3 id="returns-associations-for-an-entity-regardless-of-the-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|taxon|query|[string]|false|One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default|
|direct_taxon|query|boolean|false|Set true to exclude inferred taxa|
|relation|query|string|false|A relation CURIE to filter associations|
|sort|query|string|false|Sorting responses <field> <desc,asc>|
|q|query|string|false|Query string to filter documents|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

<h3 id="returns-associations-for-an-entity-regardless-of-the-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociationResults](#schemaassociationresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Return basic info on an object for a given type

<a id="opIdget_generic_object_by_type"></a>

> Code samples

```bash
curl https://example.com/bioentity/gene/string
```

`GET /bioentity/{type}/{id}`

<h3 id="return-basic-info-on-an-object-for-a-given-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|facet|query|boolean|false|Enable faceting|
|facet_fields|query|[string]|false|Fields to facet on|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|fetch_objects|query|boolean|false|If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|direct|query|boolean|false|Set true to only include direct associations, and false to include inferred (via subclass or subclass\|part of), default=False|
|get_association_counts|query|boolean|false|Get association counts|
|distinct_counts|query|boolean|false|Get distinct counts for associations (to be used in conjunction with 'get_association_counts' parameter)|
|type|path|string|true|bioentity type|
|id|path|string|true|id, e.g. NCBIGene:84570|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|gene|
|type|variant|
|type|genotype|
|type|phenotype|
|type|disease|
|type|goterm|
|type|pathway|
|type|anatomy|
|type|substance|
|type|individual|
|type|publication|
|type|model|
|type|case|

<h3 id="return-basic-info-on-an-object-for-a-given-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-association">association</h1>

Retrieve associations between entities or entity and descriptors

## Returns associations connecting two entities

<a id="opIdget_associations_between"></a>

> Code samples

```bash
curl https://example.com/association/between/string/string \
  -H 'Accept: application/json'
```

`GET /association/between/{subject}/{object}`

Given two entities (e.g. a particular gene and a particular disease), if these two entities
are connected (directly or indirectly), then return the association objects describing
the connection.

<h3 id="returns-associations-connecting-two-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|object|path|string|true|Return associations pointing to this node, e.g. MP:0013765. Can also be a biological entity such as a gene|
|subject|path|string|true|Return associations emanating from this node, e.g. MGI:1342287 (If ID is from an ontology then results would include inferred associations, by default)|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-associations-connecting-two-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-associations-connecting-two-entities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching associations for a given subject category

<a id="opIdget_association_by_subject_category_search"></a>

> Code samples

```bash
curl https://example.com/association/find/string \
  -H 'Accept: application/json'
```

`GET /association/find/{subject_category}`

<h3 id="returns-list-of-matching-associations-for-a-given-subject-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|subject_taxon|query|string|false|Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)|
|object_taxon|query|string|false|Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)|
|relation|query|string|false|Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.|
|subject_category|path|string|true|Category of entity at link Subject (source), e.g. gene, disease, phenotype|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-list-of-matching-associations-for-a-given-subject-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matching-associations-for-a-given-subject-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching associations between a given subject and object category

<a id="opIdget_association_by_subject_and_object_category_search"></a>

> Code samples

```bash
curl https://example.com/association/find/string/string \
  -H 'Accept: application/json'
```

`GET /association/find/{subject_category}/{object_category}`

<h3 id="returns-list-of-matching-associations-between-a-given-subject-and-object-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|subject|query|string|false|Subject CURIE|
|object|query|string|false|Object CURIE|
|subject_taxon|query|string|false|Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)|
|object_taxon|query|string|false|Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)|
|relation|query|string|false|Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.|
|object_category|path|string|true|Category of entity at link Object (target), e.g. gene, disease, phenotype|
|subject_category|path|string|true|Category of entity at link Subject (source), e.g. gene, disease, phenotype|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-list-of-matching-associations-between-a-given-subject-and-object-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matching-associations-between-a-given-subject-and-object-category-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching associations starting from a given subject (source)

<a id="opIdget_associations_from"></a>

> Code samples

```bash
curl https://example.com/association/from/string \
  -H 'Accept: application/json'
```

`GET /association/from/{subject}`

<h3 id="returns-list-of-matching-associations-starting-from-a-given-subject-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|object_taxon|query|string|false|Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)|
|relation|query|string|false|Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.|
|subject|path|string|true|Return associations emanating from this node, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357 (If ID is from an ontology then results would include inferred associations, by default)|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-list-of-matching-associations-starting-from-a-given-subject-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matching-associations-starting-from-a-given-subject-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching associations pointing to a given object (target)

<a id="opIdget_associations_to"></a>

> Code samples

```bash
curl https://example.com/association/to/string \
  -H 'Accept: application/json'
```

`GET /association/to/{object}`

<h3 id="returns-list-of-matching-associations-pointing-to-a-given-object-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|object|path|string|true|Return associations pointing to this node, e.g. specifying MP:0013765 will return all genes, variants, strains, etc. annotated with this term. Can also be a biological entity such as a gene|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-list-of-matching-associations-pointing-to-a-given-object-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matching-associations-pointing-to-a-given-object-target-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching associations of a given type

<a id="opIdget_association_by_subject_and_assoc_type"></a>

> Code samples

```bash
curl https://example.com/association/type/string \
  -H 'Accept: application/json'
```

`GET /association/type/{association_type}`

<h3 id="returns-list-of-matching-associations-of-a-given-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2|
|unselect_evidence|query|boolean|false|If true, excludes evidence objects in response|
|exclude_automatic_assertions|query|boolean|false|If true, excludes associations that involve IEAs (ECO:0000501)|
|use_compact_associations|query|boolean|false|If true, returns results in compact associations format|
|subject|query|string|false|Subject CURIE|
|object|query|string|false|Object CURIE|
|association_type|path|string|true|Association type, eg gene_phenotype|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-list-of-matching-associations-of-a-given-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matching-associations-of-a-given-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the association with a given identifier

<a id="opIdget_association_object"></a>

> Code samples

```bash
curl https://example.com/association/string \
  -H 'Accept: application/json'
```

`GET /association/{id}`

An association connects, at a minimum, two things, designated subject and object,
via some relationship. Associations also include evidence, provenance etc.

<h3 id="returns-the-association-with-a-given-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|identifier for an association, e.g. f5ba436c-f851-41b3-9d9d-bb2b5fc879d4|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-the-association-with-a-given-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-the-association-with-a-given-identifier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-cam">cam</h1>

Operations on GO Causal Activity Models (GO-CAMs)

## Returns list of models

<a id="opIdget_activity_collection"></a>

> Code samples

```bash
curl https://example.com/cam/activity
```

`GET /cam/activity`

<h3 id="returns-list-of-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|

<h3 id="returns-list-of-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matches

<a id="opIdget_instance_object"></a>

> Code samples

```bash
curl https://example.com/cam/instance/string \
  -H 'Accept: application/json'
```

`GET /cam/instance/{id}`

<h3 id="returns-list-of-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-list-of-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of all instances

<a id="opIdget_model_instances"></a>

> Code samples

```bash
curl https://example.com/cam/instances
```

`GET /cam/instances`

<h3 id="returns-list-of-all-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of ALL models

<a id="opIdget_model_collection"></a>

> Code samples

```bash
curl https://example.com/cam/model
```

`GET /cam/model`

<h3 id="returns-list-of-all-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of all contributors across all models

<a id="opIdget_model_contributors"></a>

> Code samples

```bash
curl https://example.com/cam/model/contributors
```

`GET /cam/model/contributors`

<h3 id="returns-list-of-all-contributors-across-all-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of all properties used across all models

<a id="opIdget_model_properties"></a>

> Code samples

```bash
curl https://example.com/cam/model/properties
```

`GET /cam/model/properties`

<h3 id="returns-list-of-all-properties-used-across-all-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|

<h3 id="returns-list-of-all-properties-used-across-all-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list property-values for all models

<a id="opIdget_model_property_values"></a>

> Code samples

```bash
curl https://example.com/cam/model/property_values
```

`GET /cam/model/property_values`

<h3 id="returns-list-property-values-for-all-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|

<h3 id="returns-list-property-values-for-all-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of models matching query

<a id="opIdget_model_query"></a>

> Code samples

```bash
curl https://example.com/cam/model/query
```

`GET /cam/model/query`

<h3 id="returns-list-of-models-matching-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|

<h3 id="returns-list-of-models-matching-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a complete model

<a id="opIdget_model_object"></a>

> Code samples

```bash
curl https://example.com/cam/model/string
```

`GET /cam/model/{id}`

<h3 id="returns-a-complete-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="returns-a-complete-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of models

<a id="opIdget_physical_interaction"></a>

> Code samples

```bash
curl https://example.com/cam/physical_interaction
```

`GET /cam/physical_interaction`

<h3 id="returns-list-of-models-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|string to search for in title of model|
|contributor|query|string|false|string to search for in contributor of model|

<h3 id="returns-list-of-models-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-bioentityset">bioentityset</h1>

Operations over sets of entities

## Returns compact associations for a given input set

<a id="opIdget_entity_set_associations"></a>

> Code samples

```bash
curl https://example.com/bioentityset/associations \
  -H 'Accept: application/json'
```

`GET /bioentityset/associations`

<h3 id="returns-compact-associations-for-a-given-input-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|false|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|background|query|[string]|false|Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests|
|object_category|query|string|false|E.g. phenotype, function|
|object_slim|query|string|false|Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-compact-associations-for-a-given-input-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-compact-associations-for-a-given-input-set-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Summary statistics for objects associated

<a id="opIdget_entity_set_summary"></a>

> Code samples

```bash
curl https://example.com/bioentityset/descriptor/counts
```

`GET /bioentityset/descriptor/counts`

<h3 id="summary-statistics-for-objects-associated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|false|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|background|query|[string]|false|Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests|
|object_category|query|string|false|E.g. phenotype, function|
|object_slim|query|string|false|Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED|

<h3 id="summary-statistics-for-objects-associated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## TODO Graph object spanning all entities

<a id="opIdget_entity_set_graph_resource"></a>

> Code samples

```bash
curl https://example.com/bioentityset/graph
```

`GET /bioentityset/graph`

<h3 id="todo-graph-object-spanning-all-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|false|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|background|query|[string]|false|Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests|
|object_category|query|string|false|E.g. phenotype, function|
|object_slim|query|string|false|Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED|

<h3 id="todo-graph-object-spanning-all-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Summary statistics for objects associated

<a id="opIdget_over_representation"></a>

> Code samples

```bash
curl https://example.com/bioentityset/overrepresentation
```

`GET /bioentityset/overrepresentation`

<h3 id="summary-statistics-for-objects-associated-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_category|query|string|false|E.g. phenotype, function|
|subject|query|[string]|false|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|background|query|[string]|false|Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests|
|subject_category|query|string|false|Default: gene. Other types may be used e.g. disease but statistics may not make sense|
|max_p_value|query|string|false|Exclude results with p-value greater than this|
|ontology|query|string|false|ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)|
|taxon|query|string|false|must be NCBITaxon CURIE. Example: NCBITaxon:9606|

<h3 id="summary-statistics-for-objects-associated-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-bioentitysethomologs">bioentityset/homologs</h1>

Map gene IDs to their homologs

## Returns homology associations for a given input set of genes

<a id="opIdget_entity_set_homologs"></a>

> Code samples

```bash
curl https://example.com/bioentityset/homologs/ \
  -H 'Accept: application/json'
```

`GET /bioentityset/homologs/`

<h3 id="returns-homology-associations-for-a-given-input-set-of-genes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|false|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-homology-associations-for-a-given-input-set-of-genes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-homology-associations-for-a-given-input-set-of-genes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-bioentitysetslimmer">bioentityset/slimmer</h1>

maps a set of entities to a slim

## For a given gene(s), summarize its annotations over a defined set of slim

<a id="opIdget_entity_set_anatomy_slimmer"></a>

> Code samples

```bash
curl 'https://example.com/bioentityset/slimmer/anatomy?subject=string&slim=string'
```

`GET /bioentityset/slimmer/anatomy`

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|true|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|slim|query|[string]|true|Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)|
|exclude_automatic_assertions|query|boolean|false|If set, excludes associations that involve IEAs (ECO:0000501)|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## For a given gene(s), summarize its annotations over a defined set of slim

<a id="opIdget_entity_set_function_slimmer"></a>

> Code samples

```bash
curl 'https://example.com/bioentityset/slimmer/function?subject=string&slim=string'
```

`GET /bioentityset/slimmer/function`

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|relationship_type|query|string|false|relationship type ('involved_in' or 'acts_upstream_of_or_within')|
|subject|query|[string]|true|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|slim|query|[string]|true|Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)|
|exclude_automatic_assertions|query|boolean|false|If set, excludes associations that involve IEAs (ECO:0000501)|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|

#### Enumerated Values

|Parameter|Value|
|---|---|
|relationship_type|involved_in|
|relationship_type|acts_upstream_of_or_within|

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## For a given gene(s), summarize its annotations over a defined set of slim

<a id="opIdget_entity_set_phenotype_slimmer"></a>

> Code samples

```bash
curl 'https://example.com/bioentityset/slimmer/phenotype?subject=string&slim=string'
```

`GET /bioentityset/slimmer/phenotype`

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|query|[string]|true|Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387|
|slim|query|[string]|true|Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)|
|exclude_automatic_assertions|query|boolean|false|If set, excludes associations that involve IEAs (ECO:0000501)|
|rows|query|integer|false|number of rows|
|start|query|integer|false|beginning row|

<h3 id="for-a-given-genes-summarize-its-annotations-over-a-defined-set-of-slim-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-evidencegraph">evidence/graph</h1>

Operations on evidence graphs

## Returns evidence graph object for a given association

<a id="opIdget_evidence_graph_object"></a>

> Code samples

```bash
curl https://example.com/evidence/graph/string \
  -H 'Accept: application/json'
```

`GET /evidence/graph/{id}`

Note that every association is assumed to have a unique ID

<h3 id="returns-evidence-graph-object-for-a-given-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada|

> Example responses

> 200 Response

```json
[
  {
    "edges": [
      {
        "meta": {},
        "obj": "string",
        "pred": "string",
        "sub": "string"
      }
    ],
    "nodes": [
      {
        "id": "string",
        "label": "string"
      }
    ]
  }
]
```

<h3 id="returns-evidence-graph-object-for-a-given-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-evidence-graph-object-for-a-given-association-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Graph](#schemagraph)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns evidence as a association_results object given an association

<a id="opIdget_evidence_graph_table"></a>

> Code samples

```bash
curl https://example.com/evidence/graph/string/table \
  -H 'Accept: application/json'
```

`GET /evidence/graph/{id}/table`

Note that every association is assumed to have a unique ID

<h3 id="returns-evidence-as-a-associationresults-object-given-an-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_publication|query|boolean|false|If true, considers dc:source as edge|
|id|path|string|true|association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="returns-evidence-as-a-associationresults-object-given-an-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-evidence-as-a-associationresults-object-given-an-association-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-genomefeatures">genome/features</h1>

Operations to retrieve sequence features

## Returns list of matches

<a id="opIdget_features_within_resource"></a>

> Code samples

```bash
curl https://example.com/genome/features/within/string/string/string/string \
  -H 'Accept: application/json'
```

`GET /genome/features/within/{build}/{reference}/{begin}/{end}`

<h3 id="returns-list-of-matches-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build|path|string|true|none|
|reference|path|string|true|none|
|begin|path|string|true|none|
|end|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "consider": [
      "string"
    ],
    "deprecated": true,
    "description": "string",
    "replaced_by": [
      "string"
    ],
    "synonyms": [
      {
        "pred": "string",
        "val": "string",
        "xrefs": [
          "string"
        ]
      }
    ],
    "types": [
      "string"
    ],
    "association_counts": {},
    "taxon": {
      "id": "string",
      "label": "string"
    },
    "xrefs": [
      "string"
    ],
    "homology_associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "locations": [
      {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "consider": [
          "string"
        ],
        "deprecated": true,
        "description": "string",
        "replaced_by": [
          "string"
        ],
        "synonyms": [
          {
            "pred": "string",
            "val": "string",
            "xrefs": [
              "string"
            ]
          }
        ],
        "types": [
          "string"
        ],
        "association_counts": {},
        "taxon": {
          "id": "string",
          "label": "string"
        },
        "xrefs": [
          "string"
        ],
        "end": {
          "position": 0,
          "reference": "string"
        },
        "phase": 0,
        "score": 0,
        "start": {
          "position": 0,
          "reference": "string"
        },
        "strand": 0
      }
    ],
    "seq": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "consider": [
        "string"
      ],
      "deprecated": true,
      "description": "string",
      "replaced_by": [
        "string"
      ],
      "synonyms": [
        {
          "pred": "string",
          "val": "string",
          "xrefs": [
            "string"
          ]
        }
      ],
      "types": [
        "string"
      ],
      "association_counts": {},
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "xrefs": [
        "string"
      ],
      "alphabet": "string",
      "md5checksum": "string",
      "residues": "string",
      "seqlen": "string"
    }
  }
]
```

<h3 id="returns-list-of-matches-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matches-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SequenceFeature](#schemasequencefeature)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-graph">graph</h1>

Operations over data graphs

## Returns edges emanating from a given node

<a id="opIdget_edge_resource"></a>

> Code samples

```bash
curl https://example.com/graph/edges/from/string \
  -H 'Accept: application/json'
```

`GET /graph/edges/from/{id}`

<h3 id="returns-edges-emanating-from-a-given-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|depth|query|integer|false|How far to traverse for neighbors|
|direction|query|string|false|Which direction to traverse (used only if relationship_type is defined)|
|relationship_type|query|[string]|false|Relationship type to traverse|
|entail|query|boolean|false|Include sub-properties and equivalent properties|
|graph|query|string|false|Which monarch graph to query|
|id|path|string|true|CURIE e.g. HP:0000465|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|INCOMING|
|direction|OUTGOING|
|direction|BOTH|
|graph|data|
|graph|ontology|

> Example responses

> 200 Response

```json
[
  {
    "edges": [
      {
        "meta": {},
        "obj": "string",
        "pred": "string",
        "sub": "string"
      }
    ],
    "nodes": [
      {
        "id": "string",
        "label": "string"
      }
    ]
  }
]
```

<h3 id="returns-edges-emanating-from-a-given-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-edges-emanating-from-a-given-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Graph](#schemagraph)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a graph node

<a id="opIdget_node_resource"></a>

> Code samples

```bash
curl https://example.com/graph/node/string \
  -H 'Accept: application/json'
```

`GET /graph/node/{id}`

A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.

<h3 id="returns-a-graph-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|CURIE e.g. HP:0000465|

> Example responses

> 200 Response

```json
[
  {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "consider": [
      "string"
    ],
    "deprecated": true,
    "description": "string",
    "replaced_by": [
      "string"
    ],
    "synonyms": [
      {
        "pred": "string",
        "val": "string",
        "xrefs": [
          "string"
        ]
      }
    ],
    "types": [
      "string"
    ],
    "association_counts": {},
    "taxon": {
      "id": "string",
      "label": "string"
    },
    "xrefs": [
      "string"
    ]
  }
]
```

<h3 id="returns-a-graph-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-a-graph-node-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BioObject](#schemabioobject)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-identifiermapper">identifier/mapper</h1>

mapping and resolution of identifiers

## TODO maps a list of identifiers from a source to a target

<a id="opIdget_identifier_mapper"></a>

> Code samples

```bash
curl https://example.com/identifier/mapper/string/string/ \
  -H 'Accept: application/json'
```

`GET /identifier/mapper/{source}/{target}/`

<h3 id="todo-maps-a-list-of-identifiers-from-a-source-to-a-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|target|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="todo-maps-a-list-of-identifiers-from-a-source-to-a-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="todo-maps-a-list-of-identifiers-from-a-source-to-a-target-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-identifierprefixes">identifier/prefixes</h1>

identifier prefixes

## Returns list of prefixes

<a id="opIdget_prefix_collection"></a>

> Code samples

```bash
curl https://example.com/identifier/prefixes/
```

`GET /identifier/prefixes/`

<h3 id="returns-list-of-prefixes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns contracted URI

<a id="opIdget_prefix_contract"></a>

> Code samples

```bash
curl https://example.com/identifier/prefixes/contract/string
```

`GET /identifier/prefixes/contract/{uri}`

<h3 id="returns-contracted-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|path|string|true|URI of entity to be contracted to identifier/CURIE, e.g "http://www.informatics.jax.org/accession/MGI:1"|

<h3 id="returns-contracted-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns expanded URI

<a id="opIdget_prefix_expand"></a>

> Code samples

```bash
curl https://example.com/identifier/prefixes/expand/string
```

`GET /identifier/prefixes/expand/{id}`

<h3 id="returns-expanded-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of entity to be contracted to URI, e.g "MGI:1"|

<h3 id="returns-expanded-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-mart">mart</h1>

Perform bulk operations

## Bulk download of case associations

<a id="opIdget_mart_case_associations_resource"></a>

> Code samples

```bash
curl https://example.com/mart/case/string/string
```

`GET /mart/case/{object_category}/{taxon}`

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

<h3 id="bulk-download-of-case-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|taxon|path|string|true|taxon of case, must be of form NCBITaxon:9606|
|object_category|path|string|true|Category of entity at link Subject (target), e.g. phenotype, disease|

<h3 id="bulk-download-of-case-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk download of disease associations

<a id="opIdget_mart_disease_associations_resource"></a>

> Code samples

```bash
curl https://example.com/mart/disease/string/string
```

`GET /mart/disease/{object_category}/{taxon}`

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

<h3 id="bulk-download-of-disease-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|taxon|path|string|true|taxon of disease, must be of form NCBITaxon:9606|
|object_category|path|string|true|Category of entity at link Object (target), e.g. phenotype, disease|

<h3 id="bulk-download-of-disease-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk download of gene associations

<a id="opIdget_mart_gene_associations_resource"></a>

> Code samples

```bash
curl https://example.com/mart/gene/string/string
```

`GET /mart/gene/{object_category}/{taxon}`

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

<h3 id="bulk-download-of-gene-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slim|query|[string]|false|Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID|
|taxon|path|string|true|taxon of gene, must be of form NCBITaxon:9606|
|object_category|path|string|true|Category of entity at link Object (target), e.g. phenotype, disease|

<h3 id="bulk-download-of-gene-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk download of orthologs

<a id="opIdget_mart_ortholog_associations_resource"></a>

> Code samples

```bash
curl https://example.com/mart/ortholog/string/string
```

`GET /mart/ortholog/{taxon1}/{taxon2}`

<h3 id="bulk-download-of-orthologs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxon2|path|string|true|object taxon, e.g. NCBITaxon:10090|
|taxon1|path|string|true|subject taxon, e.g. NCBITaxon:9606|

<h3 id="bulk-download-of-orthologs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk download of paralogs

<a id="opIdget_mart_paralog_associations_resource"></a>

> Code samples

```bash
curl https://example.com/mart/paralog/string/string
```

`GET /mart/paralog/{taxon1}/{taxon2}`

<h3 id="bulk-download-of-paralogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxon2|path|string|true|object taxon, e.g. NCBITaxon:9606|
|taxon1|path|string|true|subject taxon, e.g. NCBITaxon:9606|

<h3 id="bulk-download-of-paralogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-nlpannotate">nlp/annotate</h1>

annotate text using named entities

## Annotate a given text using SciGraph annotator

<a id="opIdget_annotate"></a>

> Code samples

```bash
curl https://example.com/nlp/annotate/
```

`GET /nlp/annotate/`

<h3 id="annotate-a-given-text-using-scigraph-annotator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content|query|string|false|The text content to annotate|
|include_category|query|[string]|false|Categories to include for annotation|
|exclude_category|query|[string]|false|Categories to exclude for annotation|
|min_length|query|string|false|The minimum number of characters in the annotated entity|
|longest_only|query|boolean|false|Should only the longest entity be returned for an overlapping group|
|include_abbreviation|query|boolean|false|Should abbreviations be included|
|include_acronym|query|boolean|false|Should acronyms be included|
|include_numbers|query|boolean|false|Should numbers be included|

<h3 id="annotate-a-given-text-using-scigraph-annotator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Annotate a given text using SciGraph annotator

<a id="opIdpost_annotate"></a>

> Code samples

```bash
curl https://example.com/nlp/annotate/ \
  -X POST
```

`POST /nlp/annotate/`

<h3 id="annotate-a-given-text-using-scigraph-annotator-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content|query|string|false|The text content to annotate|
|include_category|query|[string]|false|Categories to include for annotation|
|exclude_category|query|[string]|false|Categories to exclude for annotation|
|min_length|query|string|false|The minimum number of characters in the annotated entity|
|longest_only|query|boolean|false|Should only the longest entity be returned for an overlapping group|
|include_abbreviation|query|boolean|false|Should abbreviations be included|
|include_acronym|query|boolean|false|Should acronyms be included|
|include_numbers|query|boolean|false|Should numbers be included|

<h3 id="annotate-a-given-text-using-scigraph-annotator-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Annotate a given content using SciGraph annotator and get all entities from content

<a id="opIdget_annotate_entities"></a>

> Code samples

```bash
curl https://example.com/nlp/annotate/entities \
  -H 'Accept: application/json'
```

`GET /nlp/annotate/entities`

<h3 id="annotate-a-given-content-using-scigraph-annotator-and-get-all-entities-from-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content|query|string|false|The text content to annotate|
|include_category|query|[string]|false|Categories to include for annotation|
|exclude_category|query|[string]|false|Categories to exclude for annotation|
|min_length|query|string|false|The minimum number of characters in the annotated entity|
|longest_only|query|boolean|false|Should only the longest entity be returned for an overlapping group|
|include_abbreviation|query|boolean|false|Should abbreviations be included|
|include_acronym|query|boolean|false|Should acronyms be included|
|include_numbers|query|boolean|false|Should numbers be included|

> Example responses

> 200 Response

```json
{
  "content": "The content from which the entities are extracted from",
  "spans": [
    {
      "end": 0,
      "start": 0,
      "text": "string",
      "token": [
        {
          "categories": [
            "string"
          ],
          "id": "string",
          "terms": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="annotate-a-given-content-using-scigraph-annotator-and-get-all-entities-from-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EntityAnnotationResult](#schemaentityannotationresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Annotate a given content using SciGraph annotator and get all entities from content

<a id="opIdpost_annotate_entities"></a>

> Code samples

```bash
curl https://example.com/nlp/annotate/entities \
  -X POST \
  -H 'Accept: application/json'
```

`POST /nlp/annotate/entities`

<h3 id="annotate-a-given-content-using-scigraph-annotator-and-get-all-entities-from-content-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content|query|string|false|The text content to annotate|
|include_category|query|[string]|false|Categories to include for annotation|
|exclude_category|query|[string]|false|Categories to exclude for annotation|
|min_length|query|string|false|The minimum number of characters in the annotated entity|
|longest_only|query|boolean|false|Should only the longest entity be returned for an overlapping group|
|include_abbreviation|query|boolean|false|Should abbreviations be included|
|include_acronym|query|boolean|false|Should acronyms be included|
|include_numbers|query|boolean|false|Should numbers be included|

> Example responses

> 200 Response

```json
{
  "content": "The content from which the entities are extracted from",
  "spans": [
    {
      "end": 0,
      "start": 0,
      "text": "string",
      "token": [
        {
          "categories": [
            "string"
          ],
          "id": "string",
          "terms": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

<h3 id="annotate-a-given-content-using-scigraph-annotator-and-get-all-entities-from-content-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EntityAnnotationResult](#schemaentityannotationresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-ontol">ontol</h1>

extract a subgraph from an ontology

## Returns information content (IC) for a set of relevant ontology classes

<a id="opIdget_information_content_resource"></a>

> Code samples

```bash
curl https://example.com/ontol/information_content/string/string/string
```

`GET /ontol/information_content/{subject_category}/{object_category}/{subject_taxon}`

```
IC = -log2( freq(t) / popSize )
```

Here the frequency and population is calculated for a particular dataset:
e.g. all human disease-phenotype associations

<h3 id="returns-information-content-ic-for-a-set-of-relevant-ontology-classes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)<br>                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.<br>                    |
|subject_category|path|string|true|none|
|object_category|path|string|true|none|
|subject_taxon|path|string|true|none|

<h3 id="returns-information-content-ic-for-a-set-of-relevant-ontology-classes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Extract a subgraph from an ontology

<a id="opIdget_extract_ontology_subgraph_resource"></a>

> Code samples

```bash
curl https://example.com/ontol/subgraph/string/string
```

`GET /ontol/subgraph/{ontology}/{node}`

<h3 id="extract-a-subgraph-from-an-ontology-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cnode|query|[string]|false|Additional classes|
|include_ancestors|query|boolean|false|Include Ancestors|
|include_descendants|query|boolean|false|Include Descendants|
|relation|query|[string]|false|Additional classes|
|include_meta|query|boolean|false|Include metadata in response|
|node|path|string|true|class ID, e.g. HP:0001288|
|ontology|path|string|true|ontology ID, e.g. go, uberon, mp, hp|

<h3 id="extract-a-subgraph-from-an-ontology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Extract a subgraph from an ontology

<a id="opIdpost_extract_ontology_subgraph_resource"></a>

> Code samples

```bash
curl https://example.com/ontol/subgraph/string/string \
  -X POST
```

`POST /ontol/subgraph/{ontology}/{node}`

<h3 id="extract-a-subgraph-from-an-ontology-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cnode|query|[string]|false|Additional classes|
|include_ancestors|query|boolean|false|Include Ancestors|
|include_descendants|query|boolean|false|Include Descendants|
|relation|query|[string]|false|Additional classes|
|include_meta|query|boolean|false|Include metadata in response|
|node|path|string|true|class ID, e.g. HP:0001288|
|ontology|path|string|true|ontology ID, e.g. go, uberon, mp, hp|

<h3 id="extract-a-subgraph-from-an-ontology-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-ontollabeler">ontol/labeler</h1>

Assign labels to IDs

## Fetches a map from CURIEs/IDs to labels

<a id="opIdget_ontol_labeler_resource"></a>

> Code samples

```bash
curl 'https://example.com/ontol/labeler/?id=string'
```

`GET /ontol/labeler/`

<h3 id="fetches-a-map-from-curiesids-to-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|List of ids|

<h3 id="fetches-a-map-from-curiesids-to-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-ontolidentifier">ontol/identifier</h1>

Retrieve IDs for labels

## Fetches a map from CURIEs/IDs to labels

<a id="opIdget_ontol_identifier_resource"></a>

> Code samples

```bash
curl 'https://example.com/ontol/identifier/?label=string'
```

`GET /ontol/identifier/`

<h3 id="fetches-a-map-from-curiesids-to-labels-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|query|[string]|true|List of labels|

<h3 id="fetches-a-map-from-curiesids-to-labels-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Fetches a map from CURIEs/IDs to labels

<a id="opIdpost_ontol_identifier_resource"></a>

> Code samples

```bash
curl 'https://example.com/ontol/identifier/?label=string' \
  -X POST
```

`POST /ontol/identifier/`

Takes 'label' list argument either as a querystring argument or as a key
in the POST body when content-type is application/json.

<h3 id="fetches-a-map-from-curiesids-to-labels-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|query|[string]|true|List of labels|

<h3 id="fetches-a-map-from-curiesids-to-labels-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-ontology">ontology</h1>

Operations on Ontology Terms and Subsets

## Returns the ancestor ontology terms shared by two ontology terms

<a id="opIdget_ontology_terms_shared_ancestor"></a>

> Code samples

```bash
curl https://example.com/ontology/shared/string/string
```

`GET /ontology/shared/{subject}/{object}`

<h3 id="returns-the-ancestor-ontology-terms-shared-by-two-ontology-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject|path|string|true|CURIE identifier of a GO term, e.g. GO:0006259|
|object|path|string|true|CURIE identifier of a GO term, e.g. GO:0046483|

<h3 id="returns-the-ancestor-ontology-terms-shared-by-two-ontology-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns meta data of an ontology subset (slim)

<a id="opIdget_ontology_subset"></a>

> Code samples

```bash
curl https://example.com/ontology/subset/string
```

`GET /ontology/subset/{id}`

<h3 id="returns-meta-data-of-an-ontology-subset-slim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|name of a slim subset, e.g. goslim_agr, goslim_generic|

<h3 id="returns-meta-data-of-an-ontology-subset-slim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns meta data of an ontology term

<a id="opIdget_ontology_term"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string
```

`GET /ontology/term/{id}`

<h3 id="returns-meta-data-of-an-ontology-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0003677|

<h3 id="returns-meta-data-of-an-ontology-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns graph of an ontology term

<a id="opIdget_ontology_term_graph"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string/graph
```

`GET /ontology/term/{id}/graph`

<h3 id="returns-graph-of-an-ontology-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|graph_type|query|string|false|graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0000981|

#### Enumerated Values

|Parameter|Value|
|---|---|
|graph_type|topology_graph|
|graph_type|regulates_transitivity_graph|
|graph_type|neighborhood_graph|
|graph_type|neighborhood_limited_graph|

<h3 id="returns-graph-of-an-ontology-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Extract a subgraph from an ontology term

<a id="opIdget_ontology_term_subgraph"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string/subgraph
```

`GET /ontology/term/{id}/subgraph`

<h3 id="extract-a-subgraph-from-an-ontology-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cnode|query|[string]|false|Additional classes|
|include_ancestors|query|boolean|false|Include Ancestors|
|include_descendants|query|boolean|false|Include Descendants|
|relation|query|[string]|false|Additional classes|
|include_meta|query|boolean|false|Include metadata in response|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0007275|

<h3 id="extract-a-subgraph-from-an-ontology-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns subsets (slims) associated to an ontology term

<a id="opIdget_ontology_term_subsets"></a>

> Code samples

```bash
curl https://example.com/ontology/term/string/subsets
```

`GET /ontology/term/{id}/subsets`

<h3 id="returns-subsets-slims-associated-to-an-ontology-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|CURIE identifier of a GO term, e.g. GO:0006259|

<h3 id="returns-subsets-slims-associated-to-an-ontology-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-owlontology">owl/ontology</h1>

OWL-level operations on an ontology

## Placeholder - use OWLery for now

<a id="opIdget_dl_query"></a>

> Code samples

```bash
curl https://example.com/owl/ontology/dlquery/string \
  -H 'Accept: application/json'
```

`GET /owl/ontology/dlquery/{query}`

<h3 id="placeholder---use-owlery-for-now-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="placeholder---use-owlery-for-now-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="placeholder---use-owlery-for-now-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Placeholder - use direct SPARQL endpoint for now

<a id="opIdget_sparql_query"></a>

> Code samples

```bash
curl https://example.com/owl/ontology/sparql/string \
  -H 'Accept: application/json'
```

`GET /owl/ontology/sparql/{query}`

<h3 id="placeholder---use-direct-sparql-endpoint-for-now-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="placeholder---use-direct-sparql-endpoint-for-now-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="placeholder---use-direct-sparql-endpoint-for-now-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-pairsim">pair/sim</h1>

pairwise similarity between two entities

## Get pairwise similarity

<a id="opIdget_pair_sim_jaccard_resource"></a>

> Code samples

```bash
curl https://example.com/pair/sim/jaccard/string/string
```

`GET /pair/sim/jaccard/{id1}/{id2}`

<h3 id="get-pairwise-similarity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_category|query|string|false|e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category|
|id2|path|string|true|id, e.g. NCBIGene:1200; ZFIN:ZDB-GENE-980528-2059; UniProtKB:P12644|
|id1|path|string|true|id, e.g. NCBIGene:10891; ZFIN:ZDB-GENE-980526-166; UniProtKB:Q15465|

<h3 id="get-pairwise-similarity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-individual">individual</h1>

Individual humans (including patients), or organisms

## Returns list of matches

<a id="opIdget_pedigree"></a>

> Code samples

```bash
curl https://example.com/individual/pedigree/string \
  -H 'Accept: application/json'
```

`GET /individual/pedigree/{id}`

<h3 id="returns-list-of-matches-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-list-of-matches-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matches-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matches

<a id="opIdget_individual"></a>

> Code samples

```bash
curl https://example.com/individual/string \
  -H 'Accept: application/json'
```

`GET /individual/{id}`

<h3 id="returns-list-of-matches-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-list-of-matches-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matches-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-relationusage">relation/usage</h1>

Usage of different relationship types

## All relations used plus count of associations

<a id="opIdget_relation_usage_resource"></a>

> Code samples

```bash
curl https://example.com/relation/usage/ \
  -H 'Accept: application/json'
```

`GET /relation/usage/`

<h3 id="all-relations-used-plus-count-of-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject_taxon|query|string|false|SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)<br>                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.<br>                    |

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="all-relations-used-plus-count-of-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="all-relations-used-plus-count-of-associations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## All relations used plus count of associations

<a id="opIdget_relation_usage_between_resource"></a>

> Code samples

```bash
curl https://example.com/relation/usage/between/string/string \
  -H 'Accept: application/json'
```

`GET /relation/usage/between/{subject_category}/{object_category}`

<h3 id="all-relations-used-plus-count-of-associations-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject_taxon|query|string|false|SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)<br>                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.<br>                    |
|subject_category|path|string|true|none|
|object_category|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="all-relations-used-plus-count-of-associations-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="all-relations-used-plus-count-of-associations-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Relation usage count for all subj x obj category combinations

<a id="opIdget_relation_usage_pivot_resource"></a>

> Code samples

```bash
curl https://example.com/relation/usage/pivot \
  -H 'Accept: application/json'
```

`GET /relation/usage/pivot`

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject_taxon|query|string|false|SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)<br>                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.<br>                    |

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Relation usage count for all subj x obj category combinations, showing label

<a id="opIdget_relation_usage_pivot_label_resource"></a>

> Code samples

```bash
curl https://example.com/relation/usage/pivot/label \
  -H 'Accept: application/json'
```

`GET /relation/usage/pivot/label`

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-showing-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subject_taxon|query|string|false|SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default|
|evidence|query|string|false|Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)<br>                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.<br>                    |

> Example responses

> 200 Response

```json
[
  {
    "docs": [
      {}
    ],
    "facet_counts": {},
    "highlighting": {},
    "numFound": 0,
    "associations": [
      {
        "evidence_graph": {
          "edges": [
            {
              "meta": {},
              "obj": "string",
              "pred": "string",
              "sub": "string"
            }
          ],
          "nodes": [
            {
              "id": "string",
              "label": "string"
            }
          ]
        },
        "evidence_types": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "id": "string",
        "negated": true,
        "object": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "object_eq": [
          "string"
        ],
        "object_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "provided_by": [
          "string"
        ],
        "publications": [
          {
            "id": "string",
            "label": "string"
          }
        ],
        "qualifiers": [
          "string"
        ],
        "relation": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "inverse": false
        },
        "slim": [
          "string"
        ],
        "subject": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "taxon": {
            "id": "string",
            "label": "string"
          }
        },
        "subject_eq": [
          "string"
        ],
        "subject_extensions": [
          {
            "filler": {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            },
            "relation_chain": [
              {
                "category": [
                  "string"
                ],
                "id": "string",
                "iri": "string",
                "label": "string",
                "consider": [
                  "string"
                ],
                "deprecated": true,
                "description": "string",
                "replaced_by": [
                  "string"
                ],
                "synonyms": [
                  {
                    "pred": "string",
                    "val": "string",
                    "xrefs": [
                      "string"
                    ]
                  }
                ],
                "types": [
                  "string"
                ]
              }
            ]
          }
        ],
        "type": "string"
      }
    ],
    "compact_associations": [
      {
        "objects": [
          "string"
        ],
        "relation": "string",
        "subject": "string"
      }
    ],
    "objects": [
      "string"
    ]
  }
]
```

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-showing-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="relation-usage-count-for-all-subj-x-obj-category-combinations-showing-label-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssociationResults](#schemaassociationresults)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-search">search</h1>

Search for entities

## Returns list of matching concepts or entities using lexical search

<a id="opIdget_autocomplete"></a>

> Code samples

```bash
curl https://example.com/search/entity/autocomplete/string \
  -H 'Accept: application/json'
```

`GET /search/entity/autocomplete/{term}`

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fq|query|[string]|false|fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.|
|category|query|[string]|false|e.g. gene, disease|
|prefix|query|[string]|false|ontology prefix: HP, -MONDO|
|include_eqs|query|boolean|false|Include equivalent ids in prefix filter|
|boost_fx|query|[string]|false|boost function e.g. pow(edges,0.334)|
|boost_q|query|[string]|false|boost query e.g. category:genotype^-10|
|taxon|query|[string]|false|taxon filter, eg NCBITaxon:9606, includes inferred taxa|
|rows|query|integer|false|number of rows|
|start|query|string|false|row number to start from|
|highlight_class|query|string|false|highlight class|
|min_match|query|string|false|minimum should match parameter, see solr docs for details|
|exclude_groups|query|boolean|false|Exclude grouping classes (classes with subclasses)|
|minimal_tokenizer|query|boolean|false|set to true to use the minimal tokenizer, good for variants and genotypes|
|term|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "docs": [
    {
      "category": [
        "string"
      ],
      "equivalent_ids": [
        "string"
      ],
      "has_highlight": true,
      "highlight": "string",
      "id": "string",
      "label": [
        "string"
      ],
      "match": "string",
      "taxon": "string",
      "taxon_label": "string"
    }
  ]
}
```

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AutocompleteResults](#schemaautocompleteresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching concepts or entities using lexical search

<a id="opIdget_search_hpo_entities"></a>

> Code samples

```bash
curl https://example.com/search/entity/hpo-pl/string \
  -H 'Accept: application/json'
```

`GET /search/entity/hpo-pl/{term}`

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rows|query|integer|false|number of rows|
|start|query|string|false|row number to start from|
|phenotype_group|query|string|false|phenotype group id|
|phenotype_group_label|query|string|false|phenotype group label|
|anatomical_system|query|string|false|anatomical system id|
|anatomical_system_label|query|string|false|anatomical system label|
|highlight_class|query|string|false|highlight class|
|term|path|string|true|search string, e.g. muscle atrophy, frequent infections|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "highlight": "string",
      "id": "string",
      "label": "string",
      "matched_synonym": "string"
    }
  ]
}
```

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LayResults](#schemalayresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matching concepts or entities using lexical search

<a id="opIdget_search_entities"></a>

> Code samples

```bash
curl https://example.com/search/entity/string \
  -H 'Accept: application/json'
```

`GET /search/entity/{term}`

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fq|query|[string]|false|fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.|
|category|query|[string]|false|e.g. gene, disease|
|prefix|query|[string]|false|ontology prefix: HP, -MONDO|
|include_eqs|query|boolean|false|Include equivalent ids in prefix filter|
|boost_fx|query|[string]|false|boost function e.g. pow(edges,0.334)|
|boost_q|query|[string]|false|boost query e.g. category:genotype^-10|
|taxon|query|[string]|false|taxon filter, eg NCBITaxon:9606, includes inferred taxa|
|rows|query|integer|false|number of rows|
|start|query|string|false|row number to start from|
|highlight_class|query|string|false|highlight class|
|min_match|query|string|false|minimum should match parameter, see solr docs for details|
|exclude_groups|query|boolean|false|Exclude grouping classes (classes with subclasses)|
|minimal_tokenizer|query|boolean|false|set to true to use the minimal tokenizer, good for variants and genotypes|
|term|path|string|true|search string, e.g. shh, parkinson, femur|

> Example responses

> 200 Response

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0
}
```

<h3 id="returns-list-of-matching-concepts-or-entities-using-lexical-search-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchResult](#schemasearchresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-variationset">variation/set</h1>

Operations related to sets of variants

## Returns list of variant sets

<a id="opIdget_variant_sets_collection"></a>

> Code samples

```bash
curl https://example.com/variation/set/ \
  -H 'Accept: application/json'
```

`GET /variation/set/`

<h3 id="returns-list-of-variant-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Results per page {error_msg}|

#### Enumerated Values

|Parameter|Value|
|---|---|
|per_page|2|
|per_page|10|
|per_page|20|
|per_page|30|
|per_page|40|
|per_page|50|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "total": 0,
  "items": [
    {
      "body": "string",
      "category": "string",
      "category_id": 0,
      "id": 0,
      "pub_date": "1970-01-01T00:00:00Z",
      "title": "string"
    }
  ]
}
```

<h3 id="returns-list-of-variant-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Page_of_variant_sets](#schemapage_of_variant_sets)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new variant set

<a id="opIdpost_variant_sets_collection"></a>

> Code samples

```bash
curl https://example.com/variation/set/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string",
    "category": "string",
    "category_id": 0,
    "id": 0,
    "pub_date": "1970-01-01T00:00:00Z",
    "title": "string"
  }'
```

`POST /variation/set/`

> Body parameter

```json
{
  "body": "string",
  "category": "string",
  "category_id": 0,
  "id": 0,
  "pub_date": "1970-01-01T00:00:00Z",
  "title": "string"
}
```

<h3 id="creates-a-new-variant-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[variant_set](#schemavariant_set)|true|none|
|» body|body|string|true|Article content|
|» category|body|string|false|none|
|» category_id|body|integer|false|none|
|» id|body|integer|false|The unique identifier of a variant set|
|» pub_date|body|string(date-time)|false|none|
|» title|body|string|true|Article title|

<h3 id="creates-a-new-variant-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of matches

<a id="opIdget_variant_analyze"></a>

> Code samples

```bash
curl https://example.com/variation/set/analyze/string \
  -H 'Accept: application/json'
```

`GET /variation/set/analyze/{id}`

<h3 id="returns-list-of-matches-4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "evidence_graph": {
      "edges": [
        {
          "meta": {},
          "obj": "string",
          "pred": "string",
          "sub": "string"
        }
      ],
      "nodes": [
        {
          "id": "string",
          "label": "string"
        }
      ]
    },
    "evidence_types": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "id": "string",
    "negated": true,
    "object": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "object_eq": [
      "string"
    ],
    "object_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "provided_by": [
      "string"
    ],
    "publications": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "qualifiers": [
      "string"
    ],
    "relation": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "inverse": false
    },
    "slim": [
      "string"
    ],
    "subject": {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      }
    },
    "subject_eq": [
      "string"
    ],
    "subject_extensions": [
      {
        "filler": {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        },
        "relation_chain": [
          {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          }
        ]
      }
    ],
    "type": "string"
  }
]
```

<h3 id="returns-list-of-matches-4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-list-of-matches-4-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Association](#schemaassociation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns list of variant sets from a specified time period

<a id="opIdget_variant_sets_archive_collection"></a>

> Code samples

```bash
curl https://example.com/variation/set/archive/0/0/0 \
  -H 'Accept: application/json'
```

`GET /variation/set/archive/{year}/{month}/{day}`

<h3 id="returns-list-of-variant-sets-from-a-specified-time-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Results per page {error_msg}|
|year|path|integer|true|none|
|month|path|integer|true|none|
|day|path|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|per_page|2|
|per_page|10|
|per_page|20|
|per_page|30|
|per_page|40|
|per_page|50|

> Example responses

> 200 Response

```json
{
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "total": 0,
  "items": [
    {
      "body": "string",
      "category": "string",
      "category_id": 0,
      "id": 0,
      "pub_date": "1970-01-01T00:00:00Z",
      "title": "string"
    }
  ]
}
```

<h3 id="returns-list-of-variant-sets-from-a-specified-time-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Page_of_variant_sets](#schemapage_of_variant_sets)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a variant set

<a id="opIdget_variant_set_item"></a>

> Code samples

```bash
curl https://example.com/variation/set/string \
  -H 'Accept: application/json'
```

`GET /variation/set/{id}`

<h3 id="returns-a-variant-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "body": "string",
  "category": "string",
  "category_id": 0,
  "id": 0,
  "pub_date": "1970-01-01T00:00:00Z",
  "title": "string"
}
```

<h3 id="returns-a-variant-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[variant_set](#schemavariant_set)|
|404|Not Found|VariantSet not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Updates a variant set

<a id="opIdput_variant_set_item"></a>

> Code samples

```bash
curl https://example.com/variation/set/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "body": "string",
    "category": "string",
    "category_id": 0,
    "id": 0,
    "pub_date": "1970-01-01T00:00:00Z",
    "title": "string"
  }'
```

`PUT /variation/set/{id}`

> Body parameter

```json
{
  "body": "string",
  "category": "string",
  "category_id": 0,
  "id": 0,
  "pub_date": "1970-01-01T00:00:00Z",
  "title": "string"
}
```

<h3 id="updates-a-variant-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[variant_set](#schemavariant_set)|true|none|
|» body|body|string|true|Article content|
|» category|body|string|false|none|
|» category_id|body|integer|false|none|
|» id|body|integer|false|The unique identifier of a variant set|
|» pub_date|body|string(date-time)|false|none|
|» title|body|string|true|Article title|

<h3 id="updates-a-variant-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|VariantSet successfully updated.|None|
|404|Not Found|VariantSet not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes variant set

<a id="opIddelete_variant_set_item"></a>

> Code samples

```bash
curl https://example.com/variation/set/string \
  -X DELETE
```

`DELETE /variation/set/{id}`

<h3 id="deletes-variant-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletes-variant-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|VariantSet successfully deleted.|None|
|404|Not Found|VariantSet not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-sim">sim</h1>

Perform semantic similarity, ranking, and sufficiency scoring

## Compare a reference profile vs one profiles

<a id="opIdget_sim_compare"></a>

> Code samples

```bash
curl https://example.com/sim/compare \
  -H 'Accept: application/json'
```

`GET /sim/compare`

<h3 id="compare-a-reference-profile-vs-one-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_feature_set|query|boolean|false|set to true if *all* input ids are phenotypic features, else set to false|
|metric|query|string|false|Metric for computing similarity|
|ref_id|query|[string]|false|A phenotype or identifier that is composed of phenotypes (eg disease, gene)|
|query_id|query|[string]|false|A phenotype or identifier that is composed of phenotypes (eg disease, gene)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metric|phenodigm|
|metric|jaccard|
|metric|simGIC|
|metric|resnik|
|metric|symmetric_resnik|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string",
      "pairwise_match": [
        {
          "lcs": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "match": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "reference": {
            "id": "string",
            "label": "string",
            "IC": 0
          }
        }
      ],
      "rank": "string",
      "score": 0,
      "significance": "string"
    }
  ],
  "metadata": {
    "max_max_ic": 0
  },
  "query": {
    "ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "negated_ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "reference": {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string"
    },
    "target_ids": [
      [
        {
          "id": "string",
          "label": "string"
        }
      ]
    ],
    "unresolved_ids": [
      "string"
    ]
  }
}
```

<h3 id="compare-a-reference-profile-vs-one-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SimResult](#schemasimresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Compare a reference profile vs one or more profiles

<a id="opIdpost_sim_compare"></a>

> Code samples

```bash
curl https://example.com/sim/compare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query_ids": [
      [
        "string"
      ]
    ],
    "reference_ids": [
      "string"
    ]
  }'
```

`POST /sim/compare`

> Body parameter

```json
{
  "query_ids": [
    [
      "string"
    ]
  ],
  "reference_ids": [
    "string"
  ]
}
```

<h3 id="compare-a-reference-profile-vs-one-or-more-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompareInput](#schemacompareinput)|true|none|
|» query_ids|body|[[string]]|false|list of query profiles|
|» reference_ids|body|[string]|false|list of ids|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string",
      "pairwise_match": [
        {
          "lcs": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "match": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "reference": {
            "id": "string",
            "label": "string",
            "IC": 0
          }
        }
      ],
      "rank": "string",
      "score": 0,
      "significance": "string"
    }
  ],
  "metadata": {
    "max_max_ic": 0
  },
  "query": {
    "ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "negated_ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "reference": {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string"
    },
    "target_ids": [
      [
        {
          "id": "string",
          "label": "string"
        }
      ]
    ],
    "unresolved_ids": [
      "string"
    ]
  }
}
```

<h3 id="compare-a-reference-profile-vs-one-or-more-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SimResult](#schemasimresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Get annotation score

<a id="opIdget_annotation_score"></a>

> Code samples

```bash
curl https://example.com/sim/score \
  -H 'Accept: application/json'
```

`GET /sim/score`

<h3 id="get-annotation-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Phenotype identifier (eg HP:0004935)|
|absent_id|query|[string]|false|absent phenotype (eg HP:0002828)|

> Example responses

> 200 Response

```json
{
  "categorical_score": 0,
  "scaled_score": 0,
  "simple_score": 0
}
```

<h3 id="get-annotation-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SufficiencyOutput](#schemasufficiencyoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Get annotation score

<a id="opIdpost_annotation_score"></a>

> Code samples

```bash
curl https://example.com/sim/score \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "features": [
      {
        "id": "string",
        "isPresent": true,
        "label": "string",
        "type": "string"
      }
    ],
    "id": "string"
  }'
```

`POST /sim/score`

> Body parameter

```json
{
  "features": [
    {
      "id": "string",
      "isPresent": true,
      "label": "string",
      "type": "string"
    }
  ],
  "id": "string"
}
```

<h3 id="get-annotation-score-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SufficiencyPostInput](#schemasufficiencypostinput)|true|none|
|» features|body|[[Feature](#schemafeature)]|false|list of features|
|» id|body|string|false|curie formatted id|

> Example responses

> 200 Response

```json
{
  "categorical_score": 0,
  "scaled_score": 0,
  "simple_score": 0
}
```

<h3 id="get-annotation-score-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SufficiencyOutput](#schemasufficiencyoutput)|

<aside class="success">
This operation does not require authentication
</aside>

## Search for phenotypically similar diseases or model genes

<a id="opIdget_sim_search"></a>

> Code samples

```bash
curl https://example.com/sim/search \
  -H 'Accept: application/json'
```

`GET /sim/search`

<h3 id="search-for-phenotypically-similar-diseases-or-model-genes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_feature_set|query|boolean|false|set to true if *all* input ids are phenotypic features, else set to false|
|metric|query|string|false|Metric for computing similarity|
|id|query|[string]|false|A phenotype or identifier that is composed of phenotypes (eg disease, gene)|
|limit|query|integer|false|number of rows, max 500|
|taxon|query|string|false|ncbi taxon id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metric|phenodigm|
|metric|jaccard|
|metric|simGIC|
|metric|resnik|
|metric|symmetric_resnik|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string",
      "pairwise_match": [
        {
          "lcs": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "match": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "reference": {
            "id": "string",
            "label": "string",
            "IC": 0
          }
        }
      ],
      "rank": "string",
      "score": 0,
      "significance": "string"
    }
  ],
  "metadata": {
    "max_max_ic": 0
  },
  "query": {
    "ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "negated_ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "reference": {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string"
    },
    "target_ids": [
      [
        {
          "id": "string",
          "label": "string"
        }
      ]
    ],
    "unresolved_ids": [
      "string"
    ]
  }
}
```

<h3 id="search-for-phenotypically-similar-diseases-or-model-genes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SimResult](#schemasimresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-mme">mme</h1>

Match patients with similar diseases and non-human genes based on their phenotypes

## Match a patient to diseases based on their phenotypes

<a id="opIdpost_disease_mme"></a>

> Code samples

```bash
curl https://example.com/mme/disease \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`POST /mme/disease`

> Body parameter

```json
{}
```

<h3 id="match-a-patient-to-diseases-based-on-their-phenotypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[mme](#schemamme)|true|none|

<h3 id="match-a-patient-to-diseases-based-on-their-phenotypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Match a patient to fruit fly genes based on similar phenotypes

<a id="opIdpost_fly_mme"></a>

> Code samples

```bash
curl https://example.com/mme/fly \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`POST /mme/fly`

> Body parameter

```json
{}
```

<h3 id="match-a-patient-to-fruit-fly-genes-based-on-similar-phenotypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[mme](#schemamme)|true|none|

<h3 id="match-a-patient-to-fruit-fly-genes-based-on-similar-phenotypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Match a patient to mouse genes based on similar phenotypes

<a id="opIdpost_mouse_mme"></a>

> Code samples

```bash
curl https://example.com/mme/mouse \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`POST /mme/mouse`

> Body parameter

```json
{}
```

<h3 id="match-a-patient-to-mouse-genes-based-on-similar-phenotypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[mme](#schemamme)|true|none|

<h3 id="match-a-patient-to-mouse-genes-based-on-similar-phenotypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Match a patient to nematode genes based on similar phenotypes

<a id="opIdpost_nematode_mme"></a>

> Code samples

```bash
curl https://example.com/mme/nematode \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`POST /mme/nematode`

> Body parameter

```json
{}
```

<h3 id="match-a-patient-to-nematode-genes-based-on-similar-phenotypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[mme](#schemamme)|true|none|

<h3 id="match-a-patient-to-nematode-genes-based-on-similar-phenotypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Match a patient to zebrafish genes based on similar phenotypes

<a id="opIdpost_zebrafish_mme"></a>

> Code samples

```bash
curl https://example.com/mme/zebrafish \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{}'
```

`POST /mme/zebrafish`

> Body parameter

```json
{}
```

<h3 id="match-a-patient-to-zebrafish-genes-based-on-similar-phenotypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[mme](#schemamme)|true|none|

<h3 id="match-a-patient-to-zebrafish-genes-based-on-similar-phenotypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="biolink-api-metadata">metadata</h1>

Get metadata

## Get metadata for all datasets from SciGraph

<a id="opIdget_metadata_for_datasets"></a>

> Code samples

```bash
curl https://example.com/metadata/datasets
```

`GET /metadata/datasets`

<h3 id="get-metadata-for-all-datasets-from-scigraph-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_A_page_of_results">A_page_of_results</h2>
<!-- backwards compatibility -->
<a id="schemaa_page_of_results"></a>
<a id="schema_A_page_of_results"></a>
<a id="tocSa_page_of_results"></a>
<a id="tocsa_page_of_results"></a>

```json
{
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Number of this page of results|
|pages|integer|false|none|Total number of pages of results|
|per_page|integer|false|none|Number of items per page of results|
|total|integer|false|none|Total number of results|

<h2 id="tocS_AbstractPropertyValue">AbstractPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaabstractpropertyvalue"></a>
<a id="schema_AbstractPropertyValue"></a>
<a id="tocSabstractpropertyvalue"></a>
<a id="tocsabstractpropertyvalue"></a>

```json
{
  "pred": "string",
  "val": "string",
  "xrefs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pred|string|false|none|predicate (attribute) part|
|val|string|false|none|value part|
|xrefs|[string]|false|none|Xrefs provenance for property-value|

<h2 id="tocS_AnnotationExtension">AnnotationExtension</h2>
<!-- backwards compatibility -->
<a id="schemaannotationextension"></a>
<a id="schema_AnnotationExtension"></a>
<a id="tocSannotationextension"></a>
<a id="tocsannotationextension"></a>

```json
{
  "filler": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "consider": [
      "string"
    ],
    "deprecated": true,
    "description": "string",
    "replaced_by": [
      "string"
    ],
    "synonyms": [
      {
        "pred": "string",
        "val": "string",
        "xrefs": [
          "string"
        ]
      }
    ],
    "types": [
      "string"
    ]
  },
  "relation_chain": [
    {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "consider": [
        "string"
      ],
      "deprecated": true,
      "description": "string",
      "replaced_by": [
        "string"
      ],
      "synonyms": [
        {
          "pred": "string",
          "val": "string",
          "xrefs": [
            "string"
          ]
        }
      ],
      "types": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filler|object|false|none|Extension interpreted as OWL expression (r1 some r2 some .. some filler).|
|relation_chain|[[Relation](#schemarelation)]|false|none|Relationship type. If more than one value, interpreted as chain|

<h2 id="tocS_Association">Association</h2>
<!-- backwards compatibility -->
<a id="schemaassociation"></a>
<a id="schema_Association"></a>
<a id="tocSassociation"></a>
<a id="tocsassociation"></a>

```json
{
  "evidence_graph": {
    "edges": [
      {
        "meta": {},
        "obj": "string",
        "pred": "string",
        "sub": "string"
      }
    ],
    "nodes": [
      {
        "id": "string",
        "label": "string"
      }
    ]
  },
  "evidence_types": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "id": "string",
  "negated": true,
  "object": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "taxon": {
      "id": "string",
      "label": "string"
    }
  },
  "object_eq": [
    "string"
  ],
  "object_extensions": [
    {
      "filler": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "consider": [
          "string"
        ],
        "deprecated": true,
        "description": "string",
        "replaced_by": [
          "string"
        ],
        "synonyms": [
          {
            "pred": "string",
            "val": "string",
            "xrefs": [
              "string"
            ]
          }
        ],
        "types": [
          "string"
        ]
      },
      "relation_chain": [
        {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        }
      ]
    }
  ],
  "provided_by": [
    "string"
  ],
  "publications": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "qualifiers": [
    "string"
  ],
  "relation": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "inverse": false
  },
  "slim": [
    "string"
  ],
  "subject": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "taxon": {
      "id": "string",
      "label": "string"
    }
  },
  "subject_eq": [
    "string"
  ],
  "subject_extensions": [
    {
      "filler": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "consider": [
          "string"
        ],
        "deprecated": true,
        "description": "string",
        "replaced_by": [
          "string"
        ],
        "synonyms": [
          {
            "pred": "string",
            "val": "string",
            "xrefs": [
              "string"
            ]
          }
        ],
        "types": [
          "string"
        ]
      },
      "relation_chain": [
        {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        }
      ]
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence_graph|object|false|none|An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object|
|evidence_types|[[EntityReference](#schemaentityreference)]|false|none|Evidence types (ECO classes)|
|id|string|true|none|Association/annotation unique ID|
|negated|boolean|false|none|True if association is negated|
|object|object|true|none|Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330|
|object_eq|[string]|false|none|Equivalent identifiers to object node|
|object_extensions|[object]|false|none|none|
|provided_by|[string]|false|none|Provider of association, e.g. Orphanet, ClinVar|
|publications|[[EntityReference](#schemaentityreference)]|false|none|Publications supporting association, extracted from evidence graph|
|qualifiers|[string]|false|none|Qualifier on the association|
|relation|object|true|none|Relationship type connecting subject and object|
|slim|[string]|false|none|Objects mapped to a slim|
|subject|object|true|none|Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606|
|subject_eq|[string]|false|none|Equivalent identifiers to subject node|
|subject_extensions|[object]|false|none|none|
|type|string|false|none|Type of association, e.g. gene-phenotype|

<h2 id="tocS_AssociationResults">AssociationResults</h2>
<!-- backwards compatibility -->
<a id="schemaassociationresults"></a>
<a id="schema_AssociationResults"></a>
<a id="tocSassociationresults"></a>
<a id="tocsassociationresults"></a>

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docs|[object]|false|none|solr docs|
|facet_counts|object|false|none|Mapping between field names and association counts|
|highlighting|object|false|none|Mapping between id and solr highlight|
|numFound|integer|false|none|total number of associations matching query|
|associations|[[Association](#schemaassociation)]|false|none|Complete representation of full association object, plus evidence|
|compact_associations|[[CompactAssociationSet](#schemacompactassociationset)]|false|none|Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs|
|objects|[string]|false|none|List of distinct objects used|

<h2 id="tocS_AutocompleteResult">AutocompleteResult</h2>
<!-- backwards compatibility -->
<a id="schemaautocompleteresult"></a>
<a id="schema_AutocompleteResult"></a>
<a id="tocSautocompleteresult"></a>
<a id="tocsautocompleteresult"></a>

```json
{
  "category": [
    "string"
  ],
  "equivalent_ids": [
    "string"
  ],
  "has_highlight": true,
  "highlight": "string",
  "id": "string",
  "label": [
    "string"
  ],
  "match": "string",
  "taxon": "string",
  "taxon_label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|node categories|
|equivalent_ids|[string]|false|none|Equivalent IDs|
|has_highlight|boolean|false|none|True if highlight can be interpreted as html, else False|
|highlight|string|false|none|solr highlight|
|id|string|false|none|curie formatted id|
|label|[string]|false|none|primary label (rdfs:label)|
|match|string|false|none|matched part of document (may be primary label, synonym, id, etc)|
|taxon|string|false|none|taxon as NCBITaxon curie|
|taxon_label|string|false|none|taxon label|

<h2 id="tocS_AutocompleteResults">AutocompleteResults</h2>
<!-- backwards compatibility -->
<a id="schemaautocompleteresults"></a>
<a id="schema_AutocompleteResults"></a>
<a id="tocSautocompleteresults"></a>
<a id="tocsautocompleteresults"></a>

```json
{
  "docs": [
    {
      "category": [
        "string"
      ],
      "equivalent_ids": [
        "string"
      ],
      "has_highlight": true,
      "highlight": "string",
      "id": "string",
      "label": [
        "string"
      ],
      "match": "string",
      "taxon": "string",
      "taxon_label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docs|[[AutocompleteResult](#schemaautocompleteresult)]|false|none|list of AutocompleteResult docs|

<h2 id="tocS_BioObject">BioObject</h2>
<!-- backwards compatibility -->
<a id="schemabioobject"></a>
<a id="schema_BioObject"></a>
<a id="tocSbioobject"></a>
<a id="tocsbioobject"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ],
  "association_counts": {},
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "xrefs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|
|association_counts|object|false|none|association counts|
|taxon|object|false|none|Taxon to which the object belongs|
|xrefs|[string]|false|none|Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 |

<h2 id="tocS_BioObjectCore">BioObjectCore</h2>
<!-- backwards compatibility -->
<a id="schemabioobjectcore"></a>
<a id="schema_BioObjectCore"></a>
<a id="tocSbioobjectcore"></a>
<a id="tocsbioobjectcore"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "taxon": {
    "id": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|taxon|object|false|none|Taxon to which the object belongs|

<h2 id="tocS_CompactAssociationSet">CompactAssociationSet</h2>
<!-- backwards compatibility -->
<a id="schemacompactassociationset"></a>
<a id="schema_CompactAssociationSet"></a>
<a id="tocScompactassociationset"></a>
<a id="tocscompactassociationset"></a>

```json
{
  "objects": [
    "string"
  ],
  "relation": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objects|[string]|true|none|List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)|
|relation|string|true|none|Relationship type connecting subject and object list|
|subject|string|true|none|Subject of association (what it is about), e.g. MGI:1201606|

<h2 id="tocS_CompareInput">CompareInput</h2>
<!-- backwards compatibility -->
<a id="schemacompareinput"></a>
<a id="schema_CompareInput"></a>
<a id="tocScompareinput"></a>
<a id="tocscompareinput"></a>

```json
{
  "query_ids": [
    [
      "string"
    ]
  ],
  "reference_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_ids|[[string]]|false|none|list of query profiles|
|reference_ids|[string]|false|none|list of ids|

<h2 id="tocS_D2PAssociation">D2PAssociation</h2>
<!-- backwards compatibility -->
<a id="schemad2passociation"></a>
<a id="schema_D2PAssociation"></a>
<a id="tocSd2passociation"></a>
<a id="tocsd2passociation"></a>

```json
{
  "evidence_graph": {
    "edges": [
      {
        "meta": {},
        "obj": "string",
        "pred": "string",
        "sub": "string"
      }
    ],
    "nodes": [
      {
        "id": "string",
        "label": "string"
      }
    ]
  },
  "evidence_types": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "id": "string",
  "negated": true,
  "object": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "taxon": {
      "id": "string",
      "label": "string"
    }
  },
  "object_eq": [
    "string"
  ],
  "object_extensions": [
    {
      "filler": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "consider": [
          "string"
        ],
        "deprecated": true,
        "description": "string",
        "replaced_by": [
          "string"
        ],
        "synonyms": [
          {
            "pred": "string",
            "val": "string",
            "xrefs": [
              "string"
            ]
          }
        ],
        "types": [
          "string"
        ]
      },
      "relation_chain": [
        {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        }
      ]
    }
  ],
  "provided_by": [
    "string"
  ],
  "publications": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "qualifiers": [
    "string"
  ],
  "relation": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "inverse": false
  },
  "slim": [
    "string"
  ],
  "subject": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "taxon": {
      "id": "string",
      "label": "string"
    }
  },
  "subject_eq": [
    "string"
  ],
  "subject_extensions": [
    {
      "filler": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "consider": [
          "string"
        ],
        "deprecated": true,
        "description": "string",
        "replaced_by": [
          "string"
        ],
        "synonyms": [
          {
            "pred": "string",
            "val": "string",
            "xrefs": [
              "string"
            ]
          }
        ],
        "types": [
          "string"
        ]
      },
      "relation_chain": [
        {
          "category": [
            "string"
          ],
          "id": "string",
          "iri": "string",
          "label": "string",
          "consider": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "replaced_by": [
            "string"
          ],
          "synonyms": [
            {
              "pred": "string",
              "val": "string",
              "xrefs": [
                "string"
              ]
            }
          ],
          "types": [
            "string"
          ]
        }
      ]
    }
  ],
  "type": "string",
  "frequency": {
    "id": "string",
    "label": "string"
  },
  "onset": {
    "id": "string",
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence_graph|object|false|none|An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object|
|evidence_types|[[EntityReference](#schemaentityreference)]|false|none|Evidence types (ECO classes)|
|id|string|true|none|Association/annotation unique ID|
|negated|boolean|false|none|True if association is negated|
|object|object|true|none|Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330|
|object_eq|[string]|false|none|Equivalent identifiers to object node|
|object_extensions|[object]|false|none|none|
|provided_by|[string]|false|none|Provider of association, e.g. Orphanet, ClinVar|
|publications|[[EntityReference](#schemaentityreference)]|false|none|Publications supporting association, extracted from evidence graph|
|qualifiers|[string]|false|none|Qualifier on the association|
|relation|object|true|none|Relationship type connecting subject and object|
|slim|[string]|false|none|Objects mapped to a slim|
|subject|object|true|none|Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606|
|subject_eq|[string]|false|none|Equivalent identifiers to subject node|
|subject_extensions|[object]|false|none|none|
|type|string|false|none|Type of association, e.g. gene-phenotype|
|frequency|object|false|none|Frequency of phenotype in patients with disease|
|onset|object|false|none|Onset of phenotype in disease process|

<h2 id="tocS_D2PAssociationResults">D2PAssociationResults</h2>
<!-- backwards compatibility -->
<a id="schemad2passociationresults"></a>
<a id="schema_D2PAssociationResults"></a>
<a id="tocSd2passociationresults"></a>
<a id="tocsd2passociationresults"></a>

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0,
  "associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string",
      "frequency": {
        "id": "string",
        "label": "string"
      },
      "onset": {
        "id": "string",
        "label": "string"
      }
    }
  ],
  "compact_associations": [
    {
      "objects": [
        "string"
      ],
      "relation": "string",
      "subject": "string"
    }
  ],
  "objects": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docs|[object]|false|none|solr docs|
|facet_counts|object|false|none|Mapping between field names and association counts|
|highlighting|object|false|none|Mapping between id and solr highlight|
|numFound|integer|false|none|total number of associations matching query|
|associations|[[D2PAssociation](#schemad2passociation)]|false|none|Complete representation of full disease to phenotype association, plus evidence|
|compact_associations|[[CompactAssociationSet](#schemacompactassociationset)]|false|none|Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs|
|objects|[string]|false|none|List of distinct objects used|

<h2 id="tocS_Edge">Edge</h2>
<!-- backwards compatibility -->
<a id="schemaedge"></a>
<a id="schema_Edge"></a>
<a id="tocSedge"></a>
<a id="tocsedge"></a>

```json
{
  "meta": {},
  "obj": "string",
  "pred": "string",
  "sub": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|metadata about the Edge|
|obj|string|false|none|Object (target) Node ID|
|pred|string|false|none|Predicate (relation) ID|
|sub|string|false|none|Subject (source) Node ID|

<h2 id="tocS_EntityAnnotationResult">EntityAnnotationResult</h2>
<!-- backwards compatibility -->
<a id="schemaentityannotationresult"></a>
<a id="schema_EntityAnnotationResult"></a>
<a id="tocSentityannotationresult"></a>
<a id="tocsentityannotationresult"></a>

```json
{
  "content": "The content from which the entities are extracted from",
  "spans": [
    {
      "end": 0,
      "start": 0,
      "text": "string",
      "token": [
        {
          "categories": [
            "string"
          ],
          "id": "string",
          "terms": [
            "string"
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|spans|[[Span](#schemaspan)]|false|none|A marked-up span of text|

<h2 id="tocS_EntityReference">EntityReference</h2>
<!-- backwards compatibility -->
<a id="schemaentityreference"></a>
<a id="schema_EntityReference"></a>
<a id="tocSentityreference"></a>
<a id="tocsentityreference"></a>

```json
{
  "id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID or CURIE e.g. MGI:1201606|
|label|string|false|none|RDFS Label|

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "id": "string",
  "isPresent": true,
  "label": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|curie formatted id|
|isPresent|boolean|false|none|is the feature present|
|label|string|false|none|curie formatted id|
|type|string|false|none|feature type (only phenotype supported)|

<h2 id="tocS_Graph">Graph</h2>
<!-- backwards compatibility -->
<a id="schemagraph"></a>
<a id="schema_Graph"></a>
<a id="tocSgraph"></a>
<a id="tocsgraph"></a>

```json
{
  "edges": [
    {
      "meta": {},
      "obj": "string",
      "pred": "string",
      "sub": "string"
    }
  ],
  "nodes": [
    {
      "id": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edges|[[Edge](#schemaedge)]|false|none|All edges in graph|
|nodes|[[Node](#schemanode)]|false|none|All nodes in graph|

<h2 id="tocS_IcNode">IcNode</h2>
<!-- backwards compatibility -->
<a id="schemaicnode"></a>
<a id="schema_IcNode"></a>
<a id="tocSicnode"></a>
<a id="tocsicnode"></a>

```json
{
  "id": "string",
  "label": "string",
  "IC": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|label|string|false|none|RDFS Label|
|IC|number|false|none|Information content|

<h2 id="tocS_LayAutocomplete">LayAutocomplete</h2>
<!-- backwards compatibility -->
<a id="schemalayautocomplete"></a>
<a id="schema_LayAutocomplete"></a>
<a id="tocSlayautocomplete"></a>
<a id="tocslayautocomplete"></a>

```json
{
  "highlight": "string",
  "id": "string",
  "label": "string",
  "matched_synonym": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highlight|string|false|none|solr highlight|
|id|string|false|none|curie formatted id|
|label|string|false|none|primary label (rdfs:label)|
|matched_synonym|string|false|none|matched synonym|

<h2 id="tocS_LayResults">LayResults</h2>
<!-- backwards compatibility -->
<a id="schemalayresults"></a>
<a id="schema_LayResults"></a>
<a id="tocSlayresults"></a>
<a id="tocslayresults"></a>

```json
{
  "results": [
    {
      "highlight": "string",
      "id": "string",
      "label": "string",
      "matched_synonym": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[LayAutocomplete](#schemalayautocomplete)]|false|none|list of AutocompleteResult docs|

<h2 id="tocS_NamedObject">NamedObject</h2>
<!-- backwards compatibility -->
<a id="schemanamedobject"></a>
<a id="schema_NamedObject"></a>
<a id="tocSnamedobject"></a>
<a id="tocsnamedobject"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|

<h2 id="tocS_NamedObjectCore">NamedObjectCore</h2>
<!-- backwards compatibility -->
<a id="schemanamedobjectcore"></a>
<a id="schema_NamedObjectCore"></a>
<a id="tocSnamedobjectcore"></a>
<a id="tocsnamedobjectcore"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|label|string|false|none|RDFS Label|

<h2 id="tocS_Page_of_variant_sets">Page_of_variant_sets</h2>
<!-- backwards compatibility -->
<a id="schemapage_of_variant_sets"></a>
<a id="schema_Page_of_variant_sets"></a>
<a id="tocSpage_of_variant_sets"></a>
<a id="tocspage_of_variant_sets"></a>

```json
{
  "page": 0,
  "pages": 0,
  "per_page": 0,
  "total": 0,
  "items": [
    {
      "body": "string",
      "category": "string",
      "category_id": 0,
      "id": 0,
      "pub_date": "1970-01-01T00:00:00Z",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Number of this page of results|
|pages|integer|false|none|Total number of pages of results|
|per_page|integer|false|none|Number of items per page of results|
|total|integer|false|none|Total number of results|
|items|[[variant_set](#schemavariant_set)]|false|none|none|

<h2 id="tocS_PairwiseMatch">PairwiseMatch</h2>
<!-- backwards compatibility -->
<a id="schemapairwisematch"></a>
<a id="schema_PairwiseMatch"></a>
<a id="tocSpairwisematch"></a>
<a id="tocspairwisematch"></a>

```json
{
  "lcs": {
    "id": "string",
    "label": "string",
    "IC": 0
  },
  "match": {
    "id": "string",
    "label": "string",
    "IC": 0
  },
  "reference": {
    "id": "string",
    "label": "string",
    "IC": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lcs|object|false|none|lowest common subsumer|
|match|object|false|none|match id|
|reference|object|false|none|reference id|

<h2 id="tocS_Relation">Relation</h2>
<!-- backwards compatibility -->
<a id="schemarelation"></a>
<a id="schema_Relation"></a>
<a id="tocSrelation"></a>
<a id="tocsrelation"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|

<h2 id="tocS_RelationRef">RelationRef</h2>
<!-- backwards compatibility -->
<a id="schemarelationref"></a>
<a id="schema_RelationRef"></a>
<a id="tocSrelationref"></a>
<a id="tocsrelationref"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "inverse": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|inverse|boolean|false|none|is relation inverted|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "docs": [
    {}
  ],
  "facet_counts": {},
  "highlighting": {},
  "numFound": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docs|[object]|false|none|solr docs|
|facet_counts|object|false|none|Mapping between field names and association counts|
|highlighting|object|false|none|Mapping between id and solr highlight|
|numFound|integer|false|none|total number of associations matching query|

<h2 id="tocS_Seq">Seq</h2>
<!-- backwards compatibility -->
<a id="schemaseq"></a>
<a id="schema_Seq"></a>
<a id="tocSseq"></a>
<a id="tocsseq"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ],
  "association_counts": {},
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "xrefs": [
    "string"
  ],
  "alphabet": "string",
  "md5checksum": "string",
  "residues": "string",
  "seqlen": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|
|association_counts|object|false|none|association counts|
|taxon|object|false|none|Taxon to which the object belongs|
|xrefs|[string]|false|none|Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 |
|alphabet|string|false|none|one of: DNA, RNA or AA|
|md5checksum|string|false|none|checksum|
|residues|string|false|none|string representing sequence of residues|
|seqlen|string|false|none|length of sequence|

<h2 id="tocS_SequenceFeature">SequenceFeature</h2>
<!-- backwards compatibility -->
<a id="schemasequencefeature"></a>
<a id="schema_SequenceFeature"></a>
<a id="tocSsequencefeature"></a>
<a id="tocssequencefeature"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ],
  "association_counts": {},
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "xrefs": [
    "string"
  ],
  "homology_associations": [
    {
      "evidence_graph": {
        "edges": [
          {
            "meta": {},
            "obj": "string",
            "pred": "string",
            "sub": "string"
          }
        ],
        "nodes": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      },
      "evidence_types": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "id": "string",
      "negated": true,
      "object": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "object_eq": [
        "string"
      ],
      "object_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "provided_by": [
        "string"
      ],
      "publications": [
        {
          "id": "string",
          "label": "string"
        }
      ],
      "qualifiers": [
        "string"
      ],
      "relation": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "inverse": false
      },
      "slim": [
        "string"
      ],
      "subject": {
        "category": [
          "string"
        ],
        "id": "string",
        "iri": "string",
        "label": "string",
        "taxon": {
          "id": "string",
          "label": "string"
        }
      },
      "subject_eq": [
        "string"
      ],
      "subject_extensions": [
        {
          "filler": {
            "category": [
              "string"
            ],
            "id": "string",
            "iri": "string",
            "label": "string",
            "consider": [
              "string"
            ],
            "deprecated": true,
            "description": "string",
            "replaced_by": [
              "string"
            ],
            "synonyms": [
              {
                "pred": "string",
                "val": "string",
                "xrefs": [
                  "string"
                ]
              }
            ],
            "types": [
              "string"
            ]
          },
          "relation_chain": [
            {
              "category": [
                "string"
              ],
              "id": "string",
              "iri": "string",
              "label": "string",
              "consider": [
                "string"
              ],
              "deprecated": true,
              "description": "string",
              "replaced_by": [
                "string"
              ],
              "synonyms": [
                {
                  "pred": "string",
                  "val": "string",
                  "xrefs": [
                    "string"
                  ]
                }
              ],
              "types": [
                "string"
              ]
            }
          ]
        }
      ],
      "type": "string"
    }
  ],
  "locations": [
    {
      "category": [
        "string"
      ],
      "id": "string",
      "iri": "string",
      "label": "string",
      "consider": [
        "string"
      ],
      "deprecated": true,
      "description": "string",
      "replaced_by": [
        "string"
      ],
      "synonyms": [
        {
          "pred": "string",
          "val": "string",
          "xrefs": [
            "string"
          ]
        }
      ],
      "types": [
        "string"
      ],
      "association_counts": {},
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "xrefs": [
        "string"
      ],
      "end": {
        "position": 0,
        "reference": "string"
      },
      "phase": 0,
      "score": 0,
      "start": {
        "position": 0,
        "reference": "string"
      },
      "strand": 0
    }
  ],
  "seq": {
    "category": [
      "string"
    ],
    "id": "string",
    "iri": "string",
    "label": "string",
    "consider": [
      "string"
    ],
    "deprecated": true,
    "description": "string",
    "replaced_by": [
      "string"
    ],
    "synonyms": [
      {
        "pred": "string",
        "val": "string",
        "xrefs": [
          "string"
        ]
      }
    ],
    "types": [
      "string"
    ],
    "association_counts": {},
    "taxon": {
      "id": "string",
      "label": "string"
    },
    "xrefs": [
      "string"
    ],
    "alphabet": "string",
    "md5checksum": "string",
    "residues": "string",
    "seqlen": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|
|association_counts|object|false|none|association counts|
|taxon|object|false|none|Taxon to which the object belongs|
|xrefs|[string]|false|none|Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 |
|homology_associations|[[Association](#schemaassociation)]|false|none|none|
|locations|[[SequenceLocation](#schemasequencelocation)]|false|none|none|
|seq|[Seq](#schemaseq)|false|none|none|

<h2 id="tocS_SequenceLocation">SequenceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasequencelocation"></a>
<a id="schema_SequenceLocation"></a>
<a id="tocSsequencelocation"></a>
<a id="tocssequencelocation"></a>

```json
{
  "category": [
    "string"
  ],
  "id": "string",
  "iri": "string",
  "label": "string",
  "consider": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "replaced_by": [
    "string"
  ],
  "synonyms": [
    {
      "pred": "string",
      "val": "string",
      "xrefs": [
        "string"
      ]
    }
  ],
  "types": [
    "string"
  ],
  "association_counts": {},
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "xrefs": [
    "string"
  ],
  "end": {
    "position": 0,
    "reference": "string"
  },
  "phase": 0,
  "score": 0,
  "start": {
    "position": 0,
    "reference": "string"
  },
  "strand": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|none|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|iri|string|false|none|IRI|
|label|string|false|none|RDFS Label|
|consider|[string]|false|none|none|
|deprecated|boolean|false|none|True if the node is deprecated/obsoleted.|
|description|string|false|none|Descriptive text for the entity. For ontology classes, this will be a definition.|
|replaced_by|[string]|false|none|none|
|synonyms|[[SynonymPropertyValue](#schemasynonympropertyvalue)]|false|none|list of synonyms or alternate labels|
|types|[string]|false|none|none|
|association_counts|object|false|none|association counts|
|taxon|object|false|none|Taxon to which the object belongs|
|xrefs|[string]|false|none|Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 |
|end|[SequencePosition](#schemasequenceposition)|false|none|none|
|phase|integer|false|none|none|
|score|integer|false|none|none|
|start|[SequencePosition](#schemasequenceposition)|false|none|none|
|strand|integer|false|none|Strand direction: 1=='+', -1=='-', 0 or null infers unknown.|

<h2 id="tocS_SequencePosition">SequencePosition</h2>
<!-- backwards compatibility -->
<a id="schemasequenceposition"></a>
<a id="schema_SequencePosition"></a>
<a id="tocSsequenceposition"></a>
<a id="tocssequenceposition"></a>

```json
{
  "position": 0,
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|integer|false|none|none|
|reference|string|false|none|none|

<h2 id="tocS_SimMatch">SimMatch</h2>
<!-- backwards compatibility -->
<a id="schemasimmatch"></a>
<a id="schema_SimMatch"></a>
<a id="tocSsimmatch"></a>
<a id="tocssimmatch"></a>

```json
{
  "id": "string",
  "label": "string",
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "type": "string",
  "pairwise_match": [
    {
      "lcs": {
        "id": "string",
        "label": "string",
        "IC": 0
      },
      "match": {
        "id": "string",
        "label": "string",
        "IC": 0
      },
      "reference": {
        "id": "string",
        "label": "string",
        "IC": 0
      }
    }
  ],
  "rank": "string",
  "score": 0,
  "significance": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|label|string|false|none|RDFS Label|
|taxon|object|false|none|taxon|
|type|string|false|none|node type (eg phenotype, disease)|
|pairwise_match|[object]|false|none|none|
|rank|string|false|none|rank|
|score|number|false|none|sim score|
|significance|string|false|none|p-value|

<h2 id="tocS_SimMetadata">SimMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasimmetadata"></a>
<a id="schema_SimMetadata"></a>
<a id="tocSsimmetadata"></a>
<a id="tocssimmetadata"></a>

```json
{
  "max_max_ic": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_max_ic|number|false|none|max IC|

<h2 id="tocS_SimQuery">SimQuery</h2>
<!-- backwards compatibility -->
<a id="schemasimquery"></a>
<a id="schema_SimQuery"></a>
<a id="tocSsimquery"></a>
<a id="tocssimquery"></a>

```json
{
  "ids": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "negated_ids": [
    {
      "id": "string",
      "label": "string"
    }
  ],
  "reference": {
    "id": "string",
    "label": "string",
    "taxon": {
      "id": "string",
      "label": "string"
    },
    "type": "string"
  },
  "target_ids": [
    [
      {
        "id": "string",
        "label": "string"
      }
    ]
  ],
  "unresolved_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[object]|false|none|none|
|negated_ids|[object]|false|none|none|
|reference|object|false|none|reference individual or class (eg gene, disease)|
|target_ids|[[object]]|false|none|none|
|unresolved_ids|[string]|false|none|list of unresolved ids|

<h2 id="tocS_SimResult">SimResult</h2>
<!-- backwards compatibility -->
<a id="schemasimresult"></a>
<a id="schema_SimResult"></a>
<a id="tocSsimresult"></a>
<a id="tocssimresult"></a>

```json
{
  "matches": [
    {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string",
      "pairwise_match": [
        {
          "lcs": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "match": {
            "id": "string",
            "label": "string",
            "IC": 0
          },
          "reference": {
            "id": "string",
            "label": "string",
            "IC": 0
          }
        }
      ],
      "rank": "string",
      "score": 0,
      "significance": "string"
    }
  ],
  "metadata": {
    "max_max_ic": 0
  },
  "query": {
    "ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "negated_ids": [
      {
        "id": "string",
        "label": "string"
      }
    ],
    "reference": {
      "id": "string",
      "label": "string",
      "taxon": {
        "id": "string",
        "label": "string"
      },
      "type": "string"
    },
    "target_ids": [
      [
        {
          "id": "string",
          "label": "string"
        }
      ]
    ],
    "unresolved_ids": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[object]|false|none|none|
|metadata|[SimMetadata](#schemasimmetadata)|false|none|none|
|query|[SimQuery](#schemasimquery)|false|none|none|

<h2 id="tocS_Span">Span</h2>
<!-- backwards compatibility -->
<a id="schemaspan"></a>
<a id="schema_Span"></a>
<a id="tocSspan"></a>
<a id="tocsspan"></a>

```json
{
  "end": 0,
  "start": 0,
  "text": "string",
  "token": [
    {
      "categories": [
        "string"
      ],
      "id": "string",
      "terms": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|false|none|end of span text relative to content|
|start|integer|false|none|start of span text relative to content|
|text|string|false|none|span text|
|token|[[Token](#schematoken)]|false|none|A token or entity extracted from the span text|

<h2 id="tocS_SufficiencyOutput">SufficiencyOutput</h2>
<!-- backwards compatibility -->
<a id="schemasufficiencyoutput"></a>
<a id="schema_SufficiencyOutput"></a>
<a id="tocSsufficiencyoutput"></a>
<a id="tocssufficiencyoutput"></a>

```json
{
  "categorical_score": 0,
  "scaled_score": 0,
  "simple_score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categorical_score|number|false|none|categorical score|
|scaled_score|number|false|none|scaled score|
|simple_score|number|false|none|simple score|

<h2 id="tocS_SufficiencyPostInput">SufficiencyPostInput</h2>
<!-- backwards compatibility -->
<a id="schemasufficiencypostinput"></a>
<a id="schema_SufficiencyPostInput"></a>
<a id="tocSsufficiencypostinput"></a>
<a id="tocssufficiencypostinput"></a>

```json
{
  "features": [
    {
      "id": "string",
      "isPresent": true,
      "label": "string",
      "type": "string"
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[Feature](#schemafeature)]|false|none|list of features|
|id|string|false|none|curie formatted id|

<h2 id="tocS_SynonymPropertyValue">SynonymPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemasynonympropertyvalue"></a>
<a id="schema_SynonymPropertyValue"></a>
<a id="tocSsynonympropertyvalue"></a>
<a id="tocssynonympropertyvalue"></a>

```json
{
  "pred": "string",
  "val": "string",
  "xrefs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pred|string|false|none|predicate (attribute) part|
|val|string|false|none|value part|
|xrefs|[string]|false|none|Xrefs provenance for property-value|

<h2 id="tocS_Taxon">Taxon</h2>
<!-- backwards compatibility -->
<a id="schemataxon"></a>
<a id="schema_Taxon"></a>
<a id="tocStaxon"></a>
<a id="tocstaxon"></a>

```json
{
  "id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|CURIE ID, e.g. NCBITaxon:9606|
|label|string|false|none|RDFS Label|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "categories": [
    "string"
  ],
  "id": "string",
  "terms": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[string]|false|none|entity categories|
|id|string|false|none|The CURIE for the entity or token|
|terms|[string]|false|none|terms|

<h2 id="tocS_TypedNode">TypedNode</h2>
<!-- backwards compatibility -->
<a id="schematypednode"></a>
<a id="schema_TypedNode"></a>
<a id="tocStypednode"></a>
<a id="tocstypednode"></a>

```json
{
  "id": "string",
  "label": "string",
  "taxon": {
    "id": "string",
    "label": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID or CURIE e.g. MGI:1201606|
|label|string|false|none|RDFS Label|
|taxon|object|false|none|taxon|
|type|string|false|none|node type (eg phenotype, disease)|

<h2 id="tocS_mme">mme</h2>
<!-- backwards compatibility -->
<a id="schemamme"></a>
<a id="schema_mme"></a>
<a id="tocSmme"></a>
<a id="tocsmme"></a>

```json
{}
```

<h2 id="tocS_variant_set">variant_set</h2>
<!-- backwards compatibility -->
<a id="schemavariant_set"></a>
<a id="schema_variant_set"></a>
<a id="tocSvariant_set"></a>
<a id="tocsvariant_set"></a>

```json
{
  "body": "string",
  "category": "string",
  "category_id": 0,
  "id": 0,
  "pub_date": "1970-01-01T00:00:00Z",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|Article content|
|category|string|false|none|none|
|category_id|integer|false|none|none|
|id|integer|false|none|The unique identifier of a variant set|
|pub_date|string(date-time)|false|none|none|
|title|string|true|none|Article title|
