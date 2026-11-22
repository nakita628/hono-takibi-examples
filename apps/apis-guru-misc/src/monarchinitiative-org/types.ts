type Edge = {
  meta?: { [x: string]: unknown } | undefined
  obj?: string | undefined
  pred?: string | undefined
  sub?: string | undefined
}
type Node = { id: string; label?: string | undefined }
type EntityReference = { id?: string | undefined; label?: string | undefined }
type SynonymPropertyValue = {
  pred?: string | undefined
  val?: string | undefined
  xrefs?: string[] | undefined
}
type Relation = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
}
type Association = {
  evidence_graph?: { edges?: Edge[] | undefined; nodes?: Node[] | undefined } | undefined
  evidence_types?: EntityReference[] | undefined
  id: string
  negated?: boolean | undefined
  object: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  }
  object_eq?: string[] | undefined
  object_extensions?:
    | {
        filler?:
          | {
              category?: string[] | undefined
              id: string
              iri?: string | undefined
              label?: string | undefined
              consider?: string[] | undefined
              deprecated?: boolean | undefined
              description?: string | undefined
              replaced_by?: string[] | undefined
              synonyms?: SynonymPropertyValue[] | undefined
              types?: string[] | undefined
            }
          | undefined
        relation_chain?: Relation[] | undefined
      }[]
    | undefined
  provided_by?: string[] | undefined
  publications?: EntityReference[] | undefined
  qualifiers?: string[] | undefined
  relation: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    inverse?: boolean | undefined
  }
  slim?: string[] | undefined
  subject: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  }
  subject_eq?: string[] | undefined
  subject_extensions?:
    | {
        filler?:
          | {
              category?: string[] | undefined
              id: string
              iri?: string | undefined
              label?: string | undefined
              consider?: string[] | undefined
              deprecated?: boolean | undefined
              description?: string | undefined
              replaced_by?: string[] | undefined
              synonyms?: SynonymPropertyValue[] | undefined
              types?: string[] | undefined
            }
          | undefined
        relation_chain?: Relation[] | undefined
      }[]
    | undefined
  type?: string | undefined
}
type CompactAssociationSet = { objects: string[]; relation: string; subject: string }
type AssociationResults = {
  docs?: { [x: string]: unknown }[] | undefined
  facet_counts?: { [x: string]: unknown } | undefined
  highlighting?: { [x: string]: unknown } | undefined
  numFound?: number | undefined
  associations?: Association[] | undefined
  compact_associations?: CompactAssociationSet[] | undefined
  objects?: string[] | undefined
}
type D2PAssociation = {
  evidence_graph?: { edges?: Edge[] | undefined; nodes?: Node[] | undefined } | undefined
  evidence_types?: EntityReference[] | undefined
  id: string
  negated?: boolean | undefined
  object: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  }
  object_eq?: string[] | undefined
  object_extensions?:
    | {
        filler?:
          | {
              category?: string[] | undefined
              id: string
              iri?: string | undefined
              label?: string | undefined
              consider?: string[] | undefined
              deprecated?: boolean | undefined
              description?: string | undefined
              replaced_by?: string[] | undefined
              synonyms?: SynonymPropertyValue[] | undefined
              types?: string[] | undefined
            }
          | undefined
        relation_chain?: Relation[] | undefined
      }[]
    | undefined
  provided_by?: string[] | undefined
  publications?: EntityReference[] | undefined
  qualifiers?: string[] | undefined
  relation: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    inverse?: boolean | undefined
  }
  slim?: string[] | undefined
  subject: {
    category?: string[] | undefined
    id: string
    iri?: string | undefined
    label?: string | undefined
    taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  }
  subject_eq?: string[] | undefined
  subject_extensions?:
    | {
        filler?:
          | {
              category?: string[] | undefined
              id: string
              iri?: string | undefined
              label?: string | undefined
              consider?: string[] | undefined
              deprecated?: boolean | undefined
              description?: string | undefined
              replaced_by?: string[] | undefined
              synonyms?: SynonymPropertyValue[] | undefined
              types?: string[] | undefined
            }
          | undefined
        relation_chain?: Relation[] | undefined
      }[]
    | undefined
  type?: string | undefined
  frequency?: { id?: string | undefined; label?: string | undefined } | undefined
  onset?: { id?: string | undefined; label?: string | undefined } | undefined
}
type D2PAssociationResults = {
  docs?: { [x: string]: unknown }[] | undefined
  facet_counts?: { [x: string]: unknown } | undefined
  highlighting?: { [x: string]: unknown } | undefined
  numFound?: number | undefined
  associations?: D2PAssociation[] | undefined
  compact_associations?: CompactAssociationSet[] | undefined
  objects?: string[] | undefined
}
type NamedObject = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
}
type BioObject = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
  association_counts?: { [x: string]: unknown } | undefined
  taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  xrefs?: string[] | undefined
}
type Graph = { edges?: Edge[] | undefined; nodes?: Node[] | undefined }
type SequencePosition = { position?: number | undefined; reference?: string | undefined }
type SequenceLocation = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
  association_counts?: { [x: string]: unknown } | undefined
  taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  xrefs?: string[] | undefined
  end?: SequencePosition | undefined
  phase?: number | undefined
  score?: number | undefined
  start?: SequencePosition | undefined
  strand?: number | undefined
}
type Seq = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
  association_counts?: { [x: string]: unknown } | undefined
  taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  xrefs?: string[] | undefined
  alphabet?: string | undefined
  md5checksum?: string | undefined
  residues?: string | undefined
  seqlen?: string | undefined
}
type SequenceFeature = {
  category?: string[] | undefined
  id: string
  iri?: string | undefined
  label?: string | undefined
  consider?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  replaced_by?: string[] | undefined
  synonyms?: SynonymPropertyValue[] | undefined
  types?: string[] | undefined
  association_counts?: { [x: string]: unknown } | undefined
  taxon?: { id?: string | undefined; label?: string | undefined } | undefined
  xrefs?: string[] | undefined
  homology_associations?: Association[] | undefined
  locations?: SequenceLocation[] | undefined
  seq?: Seq | undefined
}
type Mme = { [x: string]: unknown }
type Token = {
  categories?: string[] | undefined
  id?: string | undefined
  terms?: string[] | undefined
}
type Span = {
  end?: number | undefined
  start?: number | undefined
  text?: string | undefined
  token?: Token[] | undefined
}
type EntityAnnotationResult = { content?: string | undefined; spans?: Span[] | undefined }
type AutocompleteResult = {
  category?: string[] | undefined
  equivalent_ids?: string[] | undefined
  has_highlight?: boolean | undefined
  highlight?: string | undefined
  id?: string | undefined
  label?: string[] | undefined
  match?: string | undefined
  taxon?: string | undefined
  taxon_label?: string | undefined
}
type AutocompleteResults = { docs?: AutocompleteResult[] | undefined }
type LayAutocomplete = {
  highlight?: string | undefined
  id?: string | undefined
  label?: string | undefined
  matched_synonym?: string | undefined
}
type LayResults = { results?: LayAutocomplete[] | undefined }
type SearchResult = {
  docs?: { [x: string]: unknown }[] | undefined
  facet_counts?: { [x: string]: unknown } | undefined
  highlighting?: { [x: string]: unknown } | undefined
  numFound?: number | undefined
}
type SimMetadata = { max_max_ic?: number | undefined }
type SimQuery = {
  ids?: { id: string; label?: string | undefined }[] | undefined
  negated_ids?: { id: string; label?: string | undefined }[] | undefined
  reference?:
    | {
        id: string
        label?: string | undefined
        taxon?: { id: string; label?: string | undefined } | undefined
        type?: string | undefined
      }
    | undefined
  target_ids?: { id: string; label?: string | undefined }[][] | undefined
  unresolved_ids?: string[] | undefined
}
type SimResult = {
  matches?:
    | {
        id: string
        label?: string | undefined
        taxon?: { id: string; label?: string | undefined } | undefined
        type?: string | undefined
        pairwise_match?:
          | {
              lcs?: { id: string; label?: string | undefined; IC?: number | undefined } | undefined
              match?:
                | { id: string; label?: string | undefined; IC?: number | undefined }
                | undefined
              reference?:
                | { id: string; label?: string | undefined; IC?: number | undefined }
                | undefined
            }[]
          | undefined
        rank?: string | undefined
        score?: number | undefined
        significance?: string | undefined
      }[]
    | undefined
  metadata?: SimMetadata | undefined
  query?: SimQuery | undefined
}
type CompareInput = { query_ids?: string[][] | undefined; reference_ids?: string[] | undefined }
type SufficiencyOutput = {
  categorical_score?: number | undefined
  scaled_score?: number | undefined
  simple_score?: number | undefined
}
type Feature = {
  id?: string | undefined
  isPresent?: boolean | undefined
  label?: string | undefined
  type?: string | undefined
}
type SufficiencyPostInput = { features?: Feature[] | undefined; id?: string | undefined }
type VariantSet = {
  body: string
  category?: string | undefined
  category_id?: number | undefined
  id?: number | undefined
  pub_date?: string | undefined
  title: string
}
type PageOfVariantSets = {
  page?: number | undefined
  pages?: number | undefined
  per_page?: number | undefined
  total?: number | undefined
  items?: VariantSet[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/association/between/:subject/:object': {
      $get: {
        input: { param: { object: string; subject: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/find/:subject_category': {
      $get: {
        input: { param: { subject_category: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
            subject_taxon?: string | undefined
            object_taxon?: string | undefined
            relation?: string | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/find/:subject_category/:object_category': {
      $get: {
        input: { param: { object_category: string; subject_category: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
            subject?: string | undefined
            object?: string | undefined
            subject_taxon?: string | undefined
            object_taxon?: string | undefined
            relation?: string | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/from/:subject': {
      $get: {
        input: { param: { subject: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
            object_taxon?: string | undefined
            relation?: string | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/to/:object': {
      $get: {
        input: { param: { object: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/type/:association_type': {
      $get: {
        input: { param: { association_type: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            evidence?: string | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            use_compact_associations?: boolean | undefined
            subject?: string | undefined
            object?: string | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/association/:id': {
      $get: {
        input: { param: { id: string } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/anatomy/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/anatomy/:id/genes/:taxid': {
      $get: {
        input: { param: { taxid: string; id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/case/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/case/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/case/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/case/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/case/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
            association_type?: 'causal' | 'non_causal' | 'both' | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/models/:taxon': {
      $get: {
        input: { param: { taxon: string; id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/pathways': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: D2PAssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/treatment': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/disease/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/function/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            start?: number | undefined
            rows?: number | undefined
            evidence?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/function/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
            relationship_type?:
              | 'involved_in'
              | 'involved_in_regulation_of'
              | 'acts_upstream_of_or_within'
              | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/function/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            start?: number | undefined
            rows?: number | undefined
            evidence?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/function/:id/taxons': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            start?: number | undefined
            rows?: number | undefined
            evidence?: string[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/anatomy': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
            association_type?: 'causal' | 'non_causal' | 'both' | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/expression/anatomy': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/function': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/homologs': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            homology_type?: 'P' | 'O' | 'LDO' | undefined
            direct_taxon?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/interactions': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/ortholog/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/ortholog/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/pathways': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/gene/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/genotype/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/goterm/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            relationship_type?:
              | 'involved_in'
              | 'involved_in_regulation_of'
              | 'acts_upstream_of_or_within'
              | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/model/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/pathway/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/pathway/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/pathway/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/anatomy': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: NamedObject[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: D2PAssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/gene/:taxid/ids': {
      $get: {
        input: { param: { taxid: string; id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/pathways': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/phenotype/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/publication/:id/variants': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/substance/:id/participant_in': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/substance/:id/roles': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/substance/:id/treats': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/cases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/diseases': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/genes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/genotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/models': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/phenotypes': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/variant/:id/publications': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
          }
        }
        output: BioObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/:id/associations': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            taxon?: string[] | undefined
            direct_taxon?: boolean | undefined
            relation?: string | undefined
            sort?: string | undefined
            q?: string | undefined
          }
        }
        output: AssociationResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentity/:type/:id': {
      $get: {
        input: {
          param: {
            type:
              | 'gene'
              | 'variant'
              | 'genotype'
              | 'phenotype'
              | 'disease'
              | 'goterm'
              | 'pathway'
              | 'anatomy'
              | 'substance'
              | 'individual'
              | 'publication'
              | 'model'
              | 'case'
            id: string
          }
        } & {
          query: {
            rows?: number | undefined
            start?: number | undefined
            facet?: boolean | undefined
            facet_fields?: string[] | undefined
            unselect_evidence?: boolean | undefined
            exclude_automatic_assertions?: boolean | undefined
            fetch_objects?: boolean | undefined
            use_compact_associations?: boolean | undefined
            slim?: string[] | undefined
            evidence?: string | undefined
            direct?: boolean | undefined
            get_association_counts?: boolean | undefined
            distinct_counts?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/associations': {
      $get: {
        input: {
          query: {
            subject?: string[] | undefined
            background?: string[] | undefined
            object_category?: string | undefined
            object_slim?: string | undefined
          }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentityset/descriptor/counts': {
      $get: {
        input: {
          query: {
            subject?: string[] | undefined
            background?: string[] | undefined
            object_category?: string | undefined
            object_slim?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/graph': {
      $get: {
        input: {
          query: {
            subject?: string[] | undefined
            background?: string[] | undefined
            object_category?: string | undefined
            object_slim?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/homologs/': {
      $get: {
        input: { query: { subject?: string[] | undefined } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bioentityset/overrepresentation': {
      $get: {
        input: {
          query: {
            object_category?: string | undefined
            subject?: string[] | undefined
            background?: string[] | undefined
            subject_category?: string | undefined
            max_p_value?: string | undefined
            ontology?: string | undefined
            taxon?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/slimmer/anatomy': {
      $get: {
        input: {
          query: {
            subject: string[]
            slim: string[]
            exclude_automatic_assertions?: boolean | undefined
            rows?: number | undefined
            start?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/slimmer/function': {
      $get: {
        input: {
          query: {
            relationship_type?: 'involved_in' | 'acts_upstream_of_or_within' | undefined
            subject: string[]
            slim: string[]
            exclude_automatic_assertions?: boolean | undefined
            rows?: number | undefined
            start?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bioentityset/slimmer/phenotype': {
      $get: {
        input: {
          query: {
            subject: string[]
            slim: string[]
            exclude_automatic_assertions?: boolean | undefined
            rows?: number | undefined
            start?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cam/activity': {
      $get: {
        input: { query: { title?: string | undefined; contributor?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cam/instance/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { title?: string | undefined; contributor?: string | undefined }
        }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cam/instances': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/cam/model': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/cam/model/contributors': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cam/model/properties': {
      $get: {
        input: { query: { title?: string | undefined; contributor?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cam/model/property_values': {
      $get: {
        input: { query: { title?: string | undefined; contributor?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cam/model/query': {
      $get: {
        input: { query: { title?: string | undefined; contributor?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cam/model/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/cam/physical_interaction': {
      $get: {
        input: { query: { title?: string | undefined; contributor?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/evidence/graph/:id': {
      $get: { input: { param: { id: string } }; output: Graph[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/evidence/graph/:id/table': {
      $get: {
        input: { param: { id: string } } & { query: { is_publication?: boolean | undefined } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/genome/features/within/:build/:reference/:begin/:end': {
      $get: {
        input: { param: { build: string; reference: string; begin: string; end: string } }
        output: SequenceFeature[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/graph/edges/from/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            depth?: number | undefined
            direction?: 'INCOMING' | 'OUTGOING' | 'BOTH' | undefined
            relationship_type?: string[] | undefined
            entail?: boolean | undefined
            graph?: 'data' | 'ontology' | undefined
          }
        }
        output: Graph[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/graph/node/:id': {
      $get: {
        input: { param: { id: string } }
        output: BioObject[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identifier/mapper/:source/:target/': {
      $get: {
        input: { param: { source: string; target: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identifier/prefixes/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/identifier/prefixes/contract/:uri': {
      $get: { input: { param: { uri: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identifier/prefixes/expand/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/individual/pedigree/:id': {
      $get: {
        input: { param: { id: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/individual/:id': {
      $get: {
        input: { param: { id: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mart/case/:object_category/:taxon': {
      $get: {
        input: { param: { taxon: string; object_category: string } } & {
          query: { slim?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mart/disease/:object_category/:taxon': {
      $get: {
        input: { param: { taxon: string; object_category: string } } & {
          query: { slim?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mart/gene/:object_category/:taxon': {
      $get: {
        input: { param: { taxon: string; object_category: string } } & {
          query: { slim?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mart/ortholog/:taxon1/:taxon2': {
      $get: {
        input: { param: { taxon2: string; taxon1: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mart/paralog/:taxon1/:taxon2': {
      $get: {
        input: { param: { taxon2: string; taxon1: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/metadata/datasets': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mme/disease': {
      $post: { input: { json: Mme }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/mme/fly': { $post: { input: { json: Mme }; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mme/mouse': { $post: { input: { json: Mme }; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mme/nematode': {
      $post: { input: { json: Mme }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/mme/zebrafish': {
      $post: { input: { json: Mme }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/nlp/annotate/': {
      $get: {
        input: {
          query: {
            content?: string | undefined
            include_category?: string[] | undefined
            exclude_category?: string[] | undefined
            min_length?: string | undefined
            longest_only?: boolean | undefined
            include_abbreviation?: boolean | undefined
            include_acronym?: boolean | undefined
            include_numbers?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            content?: string | undefined
            include_category?: string[] | undefined
            exclude_category?: string[] | undefined
            min_length?: string | undefined
            longest_only?: boolean | undefined
            include_abbreviation?: boolean | undefined
            include_acronym?: boolean | undefined
            include_numbers?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nlp/annotate/entities': {
      $get: {
        input: {
          query: {
            content?: string | undefined
            include_category?: string[] | undefined
            exclude_category?: string[] | undefined
            min_length?: string | undefined
            longest_only?: boolean | undefined
            include_abbreviation?: boolean | undefined
            include_acronym?: boolean | undefined
            include_numbers?: boolean | undefined
          }
        }
        output: EntityAnnotationResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            content?: string | undefined
            include_category?: string[] | undefined
            exclude_category?: string[] | undefined
            min_length?: string | undefined
            longest_only?: boolean | undefined
            include_abbreviation?: boolean | undefined
            include_acronym?: boolean | undefined
            include_numbers?: boolean | undefined
          }
        }
        output: EntityAnnotationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ontol/identifier/': {
      $get: { input: { query: { label: string[] } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { query: { label: string[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontol/information_content/:subject_category/:object_category/:subject_taxon': {
      $get: {
        input: {
          param: { subject_category: string; object_category: string; subject_taxon: string }
        } & { query: { evidence?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontol/labeler/': {
      $get: { input: { query: { id: string[] } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/ontol/subgraph/:ontology/:node': {
      $get: {
        input: { param: { node: string; ontology: string } } & {
          query: {
            cnode?: string[] | undefined
            include_ancestors?: boolean | undefined
            include_descendants?: boolean | undefined
            relation?: string[] | undefined
            include_meta?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { node: string; ontology: string } } & {
          query: {
            cnode?: string[] | undefined
            include_ancestors?: boolean | undefined
            include_descendants?: boolean | undefined
            relation?: string[] | undefined
            include_meta?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontology/shared/:subject/:object': {
      $get: {
        input: { param: { subject: string; object: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontology/subset/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/ontology/term/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/ontology/term/:id/graph': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            graph_type?:
              | 'topology_graph'
              | 'regulates_transitivity_graph'
              | 'neighborhood_graph'
              | 'neighborhood_limited_graph'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontology/term/:id/subgraph': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            cnode?: string[] | undefined
            include_ancestors?: boolean | undefined
            include_descendants?: boolean | undefined
            relation?: string[] | undefined
            include_meta?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/ontology/term/:id/subsets': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/owl/ontology/dlquery/:query': {
      $get: {
        input: { param: { query: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/owl/ontology/sparql/:query': {
      $get: {
        input: { param: { query: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pair/sim/jaccard/:id1/:id2': {
      $get: {
        input: { param: { id2: string; id1: string } } & {
          query: { object_category?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/relation/usage/': {
      $get: {
        input: { query: { subject_taxon?: string | undefined; evidence?: string | undefined } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/relation/usage/between/:subject_category/:object_category': {
      $get: {
        input: { param: { subject_category: string; object_category: string } } & {
          query: { subject_taxon?: string | undefined; evidence?: string | undefined }
        }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/relation/usage/pivot': {
      $get: {
        input: { query: { subject_taxon?: string | undefined; evidence?: string | undefined } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/relation/usage/pivot/label': {
      $get: {
        input: { query: { subject_taxon?: string | undefined; evidence?: string | undefined } }
        output: AssociationResults[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/entity/autocomplete/:term': {
      $get: {
        input: { param: { term: string } } & {
          query: {
            fq?: string[] | undefined
            category?: string[] | undefined
            prefix?: string[] | undefined
            include_eqs?: boolean | undefined
            boost_fx?: string[] | undefined
            boost_q?: string[] | undefined
            taxon?: string[] | undefined
            rows?: number | undefined
            start?: string | undefined
            highlight_class?: string | undefined
            min_match?: string | undefined
            exclude_groups?: boolean | undefined
            minimal_tokenizer?: boolean | undefined
          }
        }
        output: AutocompleteResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/entity/hpo-pl/:term': {
      $get: {
        input: { param: { term: string } } & {
          query: {
            rows?: number | undefined
            start?: string | undefined
            phenotype_group?: string | undefined
            phenotype_group_label?: string | undefined
            anatomical_system?: string | undefined
            anatomical_system_label?: string | undefined
            highlight_class?: string | undefined
          }
        }
        output: LayResults
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/entity/:term': {
      $get: {
        input: { param: { term: string } } & {
          query: {
            fq?: string[] | undefined
            category?: string[] | undefined
            prefix?: string[] | undefined
            include_eqs?: boolean | undefined
            boost_fx?: string[] | undefined
            boost_q?: string[] | undefined
            taxon?: string[] | undefined
            rows?: number | undefined
            start?: string | undefined
            highlight_class?: string | undefined
            min_match?: string | undefined
            exclude_groups?: boolean | undefined
            minimal_tokenizer?: boolean | undefined
          }
        }
        output: SearchResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sim/compare': {
      $get: {
        input: {
          query: {
            is_feature_set?: boolean | undefined
            metric?: 'phenodigm' | 'jaccard' | 'simGIC' | 'resnik' | 'symmetric_resnik' | undefined
            ref_id?: string[] | undefined
            query_id?: string[] | undefined
          }
        }
        output: SimResult
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: CompareInput }; output: SimResult; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sim/score': {
      $get: {
        input: { query: { id?: string[] | undefined; absent_id?: string[] | undefined } }
        output: SufficiencyOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SufficiencyPostInput }
        output: SufficiencyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sim/search': {
      $get: {
        input: {
          query: {
            is_feature_set?: boolean | undefined
            metric?: 'phenodigm' | 'jaccard' | 'simGIC' | 'resnik' | 'symmetric_resnik' | undefined
            id?: string[] | undefined
            limit?: number | undefined
            taxon?: string | undefined
          }
        }
        output: SimResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/variation/set/': {
      $get: {
        input: {
          query: { page?: number | undefined; per_page?: 2 | 10 | 20 | 30 | 40 | 50 | undefined }
        }
        output: PageOfVariantSets
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: VariantSet }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/variation/set/analyze/:id': {
      $get: {
        input: { param: { id: string } }
        output: Association[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/variation/set/archive/:year/:month/:day': {
      $get: {
        input: { param: { year: number; month: number; day: number } } & {
          query: { page?: number | undefined; per_page?: 2 | 10 | 20 | 30 | 40 | 50 | undefined }
        }
        output: PageOfVariantSets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/variation/set/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: VariantSet
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: VariantSet }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: VariantSet }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
