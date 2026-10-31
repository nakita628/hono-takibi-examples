import { createRoute, z } from '@hono/zod-openapi'

const APageOfResultsSchema = z
  .object({
    page: z.int().exactOptional().openapi({ description: 'Number of this page of results' }),
    pages: z.int().exactOptional().openapi({ description: 'Total number of pages of results' }),
    per_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of items per page of results' }),
    total: z.int().exactOptional().openapi({ description: 'Total number of results' }),
  })
  .openapi({ required: [] })
  .openapi('APageOfResults')

const AbstractPropertyValueSchema = z
  .object({
    pred: z.string().exactOptional().openapi({ description: 'predicate (attribute) part' }),
    val: z.string().exactOptional().openapi({ description: 'value part' }),
    xrefs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Xrefs provenance for property-value' }),
  })
  .openapi({ required: [] })
  .openapi('AbstractPropertyValue')

const NamedObjectCoreSchema = z
  .object({
    category: z.array(z.string().openapi({ description: 'Type of object' })).exactOptional(),
    id: z.string().openapi({ description: 'ID or CURIE e.g. MGI:1201606' }),
    iri: z.string().exactOptional().openapi({ description: 'IRI' }),
    label: z.string().exactOptional().openapi({ description: 'RDFS Label' }),
  })
  .openapi({ required: ['id'] })
  .openapi('NamedObjectCore')

const SynonymPropertyValueSchema = AbstractPropertyValueSchema.and(z.object({})).openapi(
  'SynonymPropertyValue',
)

const NamedObjectSchema = NamedObjectCoreSchema.and(
  z
    .object({
      consider: z
        .array(
          z
            .string()
            .openapi({
              description: 'Potential replacement object (if named object is obsoleted)',
            }),
        )
        .exactOptional(),
      deprecated: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'True if the node is deprecated/obsoleted.' }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Descriptive text for the entity. For ontology classes, this will be a definition.',
        }),
      replaced_by: z
        .array(
          z
            .string()
            .openapi({ description: 'Direct 1:1 replacement (if named object is obsoleted)' }),
        )
        .exactOptional(),
      synonyms: z
        .array(SynonymPropertyValueSchema)
        .exactOptional()
        .openapi({ description: 'list of synonyms or alternate labels' }),
      types: z
        .array(z.string().openapi({ description: 'Type of object (direct)' }))
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('NamedObject')

const RelationSchema = NamedObjectSchema.and(z.object({})).openapi('Relation')

const AnnotationExtensionSchema = z
  .object({
    filler: NamedObjectSchema.exactOptional().openapi({
      description: 'Extension interpreted as OWL expression (r1 some r2 some .. some filler).',
    }),
    relation_chain: z
      .array(RelationSchema)
      .exactOptional()
      .openapi({ description: 'Relationship type. If more than one value, interpreted as chain' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationExtension')

const EdgeSchema = z
  .object({
    meta: z.object({}).exactOptional().openapi({ description: 'metadata about the Edge' }),
    obj: z.string().exactOptional().openapi({ description: 'Object (target) Node ID' }),
    pred: z.string().exactOptional().openapi({ description: 'Predicate (relation) ID' }),
    sub: z.string().exactOptional().openapi({ description: 'Subject (source) Node ID' }),
  })
  .openapi({ required: [] })
  .openapi('Edge')

const NodeSchema = z
  .object({
    id: z.string().openapi({ description: 'ID or CURIE e.g. MGI:1201606' }),
    label: z.string().exactOptional().openapi({ description: 'RDFS Label' }),
  })
  .openapi({ required: ['id'] })
  .openapi('Node')

const GraphSchema = z
  .object({
    edges: z.array(EdgeSchema).exactOptional().openapi({ description: 'All edges in graph' }),
    nodes: z.array(NodeSchema).exactOptional().openapi({ description: 'All nodes in graph' }),
  })
  .openapi({ required: [] })
  .openapi('Graph')

const EntityReferenceSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID or CURIE e.g. MGI:1201606' }),
    label: z.string().exactOptional().openapi({ description: 'RDFS Label' }),
  })
  .openapi({ required: [] })
  .openapi('EntityReference')

const TaxonSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'CURIE ID, e.g. NCBITaxon:9606' }),
    label: z.string().exactOptional().openapi({ description: 'RDFS Label' }),
  })
  .openapi({ required: [] })
  .openapi('Taxon')

const BioObjectCoreSchema = NamedObjectCoreSchema.and(
  z
    .object({
      taxon: TaxonSchema.exactOptional().openapi({
        description: 'Taxon to which the object belongs',
      }),
    })
    .openapi({ required: [] }),
).openapi('BioObjectCore')

const RelationRefSchema = NamedObjectCoreSchema.and(
  z
    .object({
      inverse: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({ description: 'is relation inverted' }),
    })
    .openapi({ required: [] }),
).openapi('RelationRef')

const AssociationSchema = z
  .object({
    evidence_graph: GraphSchema.exactOptional().openapi({
      description:
        'An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object',
    }),
    evidence_types: z
      .array(EntityReferenceSchema)
      .exactOptional()
      .openapi({ description: 'Evidence types (ECO classes)' }),
    id: z.string().openapi({ description: 'Association/annotation unique ID' }),
    negated: z.boolean().exactOptional().openapi({ description: 'True if association is negated' }),
    object: BioObjectCoreSchema.openapi({
      description: 'Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330',
    }),
    object_eq: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Equivalent identifiers to object node' }),
    object_extensions: z
      .array(
        AnnotationExtensionSchema.openapi({
          description:
            'Additional properties of the object in the context of this association. See http://www.biomedcentral.com/1471-2105/15/155',
        }),
      )
      .exactOptional(),
    provided_by: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Provider of association, e.g. Orphanet, ClinVar' }),
    publications: z
      .array(EntityReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'Publications supporting association, extracted from evidence graph',
      }),
    qualifiers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Qualifier on the association' }),
    relation: RelationRefSchema.openapi({
      description: 'Relationship type connecting subject and object',
    }),
    slim: z.array(z.string()).exactOptional().openapi({ description: 'Objects mapped to a slim' }),
    subject: BioObjectCoreSchema.openapi({
      description: 'Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606',
    }),
    subject_eq: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Equivalent identifiers to subject node' }),
    subject_extensions: z
      .array(
        AnnotationExtensionSchema.openapi({
          description: 'Additional properties of the subject in the context of this association.',
        }),
      )
      .exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of association, e.g. gene-phenotype' }),
  })
  .openapi({ required: ['id', 'object', 'relation', 'subject'] })
  .openapi('Association')

const SearchResultSchema = z
  .object({
    docs: z.array(z.object({})).exactOptional().openapi({ description: 'solr docs' }),
    facet_counts: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Mapping between field names and association counts' }),
    highlighting: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Mapping between id and solr highlight' }),
    numFound: z
      .int()
      .exactOptional()
      .openapi({ description: 'total number of associations matching query' }),
  })
  .openapi({ required: [] })
  .openapi('SearchResult')

const CompactAssociationSetSchema = z
  .object({
    objects: z
      .array(z.string())
      .openapi({
        description:
          'List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)',
      }),
    relation: z
      .string()
      .openapi({ description: 'Relationship type connecting subject and object list' }),
    subject: z
      .string()
      .openapi({ description: 'Subject of association (what it is about), e.g. MGI:1201606' }),
  })
  .openapi({ required: ['objects', 'relation', 'subject'] })
  .openapi('CompactAssociationSet')

const AssociationResultsSchema = SearchResultSchema.and(
  z
    .object({
      associations: z
        .array(AssociationSchema)
        .exactOptional()
        .openapi({
          description: 'Complete representation of full association object, plus evidence',
        }),
      compact_associations: z
        .array(CompactAssociationSetSchema)
        .exactOptional()
        .openapi({
          description:
            'Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs',
        }),
      objects: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'List of distinct objects used' }),
    })
    .openapi({ required: [] }),
).openapi('AssociationResults')

const AutocompleteResultSchema = z
  .object({
    category: z.array(z.string()).exactOptional().openapi({ description: 'node categories' }),
    equivalent_ids: z.array(z.string()).exactOptional().openapi({ description: 'Equivalent IDs' }),
    has_highlight: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if highlight can be interpreted as html, else False' }),
    highlight: z.string().exactOptional().openapi({ description: 'solr highlight' }),
    id: z.string().exactOptional().openapi({ description: 'curie formatted id' }),
    label: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'primary label (rdfs:label)' }),
    match: z
      .string()
      .exactOptional()
      .openapi({
        description: 'matched part of document (may be primary label, synonym, id, etc)',
      }),
    taxon: z.string().exactOptional().openapi({ description: 'taxon as NCBITaxon curie' }),
    taxon_label: z.string().exactOptional().openapi({ description: 'taxon label' }),
  })
  .openapi({ required: [] })
  .openapi('AutocompleteResult')

const AutocompleteResultsSchema = z
  .object({
    docs: z
      .array(AutocompleteResultSchema)
      .exactOptional()
      .openapi({ description: 'list of AutocompleteResult docs' }),
  })
  .openapi({ required: [] })
  .openapi('AutocompleteResults')

const BioObjectSchema = NamedObjectSchema.and(
  z
    .object({
      association_counts: z
        .object({})
        .exactOptional()
        .openapi({ description: 'association counts' }),
      taxon: TaxonSchema.exactOptional().openapi({
        description: 'Taxon to which the object belongs',
      }),
      xrefs: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 ',
        }),
    })
    .openapi({ required: [] }),
).openapi('BioObject')

const CompareInputSchema = z
  .object({
    query_ids: z
      .array(
        z
          .array(z.string().openapi({ description: 'curie formatted id' }))
          .openapi({ description: 'list of ids' }),
      )
      .exactOptional()
      .openapi({ description: 'list of query profiles' }),
    reference_ids: z
      .array(z.string().openapi({ description: 'curie formatted id' }))
      .exactOptional()
      .openapi({ description: 'list of ids' }),
  })
  .openapi({ required: [] })
  .openapi('CompareInput')

const D2PAssociationSchema = AssociationSchema.and(
  z
    .object({
      frequency: EntityReferenceSchema.exactOptional().openapi({
        description: 'Frequency of phenotype in patients with disease',
      }),
      onset: EntityReferenceSchema.exactOptional().openapi({
        description: 'Onset of phenotype in disease process',
      }),
    })
    .openapi({ required: [] }),
).openapi('D2PAssociation')

const D2PAssociationResultsSchema = SearchResultSchema.and(
  z
    .object({
      associations: z
        .array(D2PAssociationSchema)
        .exactOptional()
        .openapi({
          description:
            'Complete representation of full disease to phenotype association, plus evidence',
        }),
      compact_associations: z
        .array(CompactAssociationSetSchema)
        .exactOptional()
        .openapi({
          description:
            'Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs',
        }),
      objects: z
        .array(z.string())
        .exactOptional()
        .openapi({ description: 'List of distinct objects used' }),
    })
    .openapi({ required: [] }),
).openapi('D2PAssociationResults')

const TokenSchema = z
  .object({
    categories: z.array(z.string()).exactOptional().openapi({ description: 'entity categories' }),
    id: z.string().exactOptional().openapi({ description: 'The CURIE for the entity or token' }),
    terms: z.array(z.string()).exactOptional().openapi({ description: 'terms' }),
  })
  .openapi({ required: [] })
  .openapi('Token')

const SpanSchema = z
  .object({
    end: z.int().exactOptional().openapi({ description: 'end of span text relative to content' }),
    start: z
      .int()
      .exactOptional()
      .openapi({ description: 'start of span text relative to content' }),
    text: z.string().exactOptional().openapi({ description: 'span text' }),
    token: z
      .array(TokenSchema)
      .exactOptional()
      .openapi({ description: 'A token or entity extracted from the span text' }),
  })
  .openapi({ required: [] })
  .openapi('Span')

const EntityAnnotationResultSchema = z
  .object({
    content: z
      .string()
      .default('The content from which the entities are extracted from')
      .exactOptional(),
    spans: z.array(SpanSchema).exactOptional().openapi({ description: 'A marked-up span of text' }),
  })
  .openapi({ required: [] })
  .openapi('EntityAnnotationResult')

const FeatureSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'curie formatted id' }),
    isPresent: z.boolean().exactOptional().openapi({ description: 'is the feature present' }),
    label: z.string().exactOptional().openapi({ description: 'curie formatted id' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'feature type (only phenotype supported)' }),
  })
  .openapi({ required: [] })
  .openapi('Feature')

const IcNodeSchema = NodeSchema.and(
  z
    .object({ IC: z.number().exactOptional().openapi({ description: 'Information content' }) })
    .openapi({ required: [] }),
).openapi('IcNode')

const LayAutocompleteSchema = z
  .object({
    highlight: z.string().exactOptional().openapi({ description: 'solr highlight' }),
    id: z.string().exactOptional().openapi({ description: 'curie formatted id' }),
    label: z.string().exactOptional().openapi({ description: 'primary label (rdfs:label)' }),
    matched_synonym: z.string().exactOptional().openapi({ description: 'matched synonym' }),
  })
  .openapi({ required: [] })
  .openapi('LayAutocomplete')

const LayResultsSchema = z
  .object({
    results: z
      .array(LayAutocompleteSchema)
      .exactOptional()
      .openapi({ description: 'list of AutocompleteResult docs' }),
  })
  .openapi({ required: [] })
  .openapi('LayResults')

const VariantSetSchema = z
  .object({
    body: z.string().openapi({ description: 'Article content' }),
    category: z.string().exactOptional(),
    category_id: z.int().exactOptional(),
    id: z.int().exactOptional().openapi({ description: 'The unique identifier of a variant set' }),
    pub_date: z.iso.datetime({ offset: true }).exactOptional(),
    title: z.string().openapi({ description: 'Article title' }),
  })
  .openapi({ required: ['body', 'title'] })
  .openapi('VariantSet')

const PageOfVariantSetsSchema = APageOfResultsSchema.and(
  z.object({ items: z.array(VariantSetSchema).exactOptional() }).openapi({ required: [] }),
).openapi('PageOfVariantSets')

const PairwiseMatchSchema = z
  .object({
    lcs: IcNodeSchema.exactOptional().openapi({ description: 'lowest common subsumer' }),
    match: IcNodeSchema.exactOptional().openapi({ description: 'match id' }),
    reference: IcNodeSchema.exactOptional().openapi({ description: 'reference id' }),
  })
  .openapi({ required: [] })
  .openapi('PairwiseMatch')

const SeqSchema = BioObjectSchema.and(
  z
    .object({
      alphabet: z.string().exactOptional().openapi({ description: 'one of: DNA, RNA or AA' }),
      md5checksum: z.string().exactOptional().openapi({ description: 'checksum' }),
      residues: z
        .string()
        .exactOptional()
        .openapi({ description: 'string representing sequence of residues' }),
      seqlen: z.string().exactOptional().openapi({ description: 'length of sequence' }),
    })
    .openapi({ required: [] }),
).openapi('Seq')

const SequencePositionSchema = z
  .object({ position: z.int().exactOptional(), reference: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SequencePosition')

const SequenceLocationSchema = BioObjectSchema.and(
  z
    .object({
      end: SequencePositionSchema.exactOptional(),
      phase: z.int().exactOptional(),
      score: z.int().exactOptional(),
      start: SequencePositionSchema.exactOptional(),
      strand: z
        .int()
        .exactOptional()
        .openapi({ description: "Strand direction: 1=='+', -1=='-', 0 or null infers unknown." }),
    })
    .openapi({ required: [] }),
).openapi('SequenceLocation')

const SequenceFeatureSchema = BioObjectSchema.and(
  z
    .object({
      homology_associations: z.array(AssociationSchema).exactOptional(),
      locations: z.array(SequenceLocationSchema).exactOptional(),
      seq: SeqSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('SequenceFeature')

const TypedNodeSchema = NodeSchema.and(
  z
    .object({
      taxon: NodeSchema.exactOptional().openapi({ description: 'taxon' }),
      type: z
        .string()
        .exactOptional()
        .openapi({ description: 'node type (eg phenotype, disease)' }),
    })
    .openapi({ required: [] }),
).openapi('TypedNode')

const SimMatchSchema = TypedNodeSchema.and(
  z
    .object({
      pairwise_match: z
        .array(PairwiseMatchSchema.openapi({ description: 'list of pairwise matches' }))
        .exactOptional(),
      rank: z.string().exactOptional().openapi({ description: 'rank' }),
      score: z.number().exactOptional().openapi({ description: 'sim score' }),
      significance: z.string().exactOptional().openapi({ description: 'p-value' }),
    })
    .openapi({ required: [] }),
).openapi('SimMatch')

const SimMetadataSchema = z
  .object({ max_max_ic: z.number().exactOptional().openapi({ description: 'max IC' }) })
  .openapi({ required: [] })
  .openapi('SimMetadata')

const SimQuerySchema = z
  .object({
    ids: z.array(NodeSchema.openapi({ description: 'list of ids' })).exactOptional(),
    negated_ids: z.array(NodeSchema.openapi({ description: 'list of ids' })).exactOptional(),
    reference: TypedNodeSchema.exactOptional().openapi({
      description: 'reference individual or class (eg gene, disease)',
    }),
    target_ids: z.array(z.array(NodeSchema.openapi({ description: 'query ids' }))).exactOptional(),
    unresolved_ids: z
      .array(z.string().openapi({ description: 'curie formatted id' }))
      .exactOptional()
      .openapi({ description: 'list of unresolved ids' }),
  })
  .openapi({ required: [] })
  .openapi('SimQuery')

const SimResultSchema = z
  .object({
    matches: z.array(SimMatchSchema.openapi({ description: 'list of matches' })).exactOptional(),
    metadata: SimMetadataSchema.exactOptional(),
    query: SimQuerySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimResult')

const SufficiencyOutputSchema = z
  .object({
    categorical_score: z.number().exactOptional().openapi({ description: 'categorical score' }),
    scaled_score: z.number().exactOptional().openapi({ description: 'scaled score' }),
    simple_score: z.number().exactOptional().openapi({ description: 'simple score' }),
  })
  .openapi({ required: [] })
  .openapi('SufficiencyOutput')

const SufficiencyPostInputSchema = z
  .object({
    features: z.array(FeatureSchema).exactOptional().openapi({ description: 'list of features' }),
    id: z.string().exactOptional().openapi({ description: 'curie formatted id' }),
  })
  .openapi({ required: [] })
  .openapi('SufficiencyPostInput')

const MmeSchema = z.object({}).openapi('Mme')

const AmbiguousPrefixResponse = { description: 'Error handler to handle AmbiguousPrefix' }

const InvalidSyntaxResponse = { description: 'Error handler to handle InvalidSyntax' }

const MaskErrorResponse = { description: 'When any error occurs on mask' }

const NoContractionResponse = { description: 'Error handler to handle NoContraction' }

const NoExpansionResponse = { description: 'Error handler to handle NoExpansion' }

const NoPrefixResponse = { description: 'Error handler to handle NoPrefix' }

const NoResultFoundResponse = { description: '' }

const NoResultFoundExceptionResponse = {
  description: 'Error handler to handle NoResultFoundException',
}

const ParseErrorResponse = { description: "When a mask can't be parsed" }

const RouteNotImplementedExceptionResponse = {
  description: 'Error handler to handle RouteNotImplementedException',
}

const UnhandledExceptionResponse = { description: 'Error handler to handle UnhandledException' }

const UnrecognizedBioentityTypeExceptionResponse = {
  description: 'Error handler to handle UnrecognizedBioentityTypeException',
}

const MmeRequestBody = { content: { 'application/json': { schema: MmeSchema } }, required: true }

const VariantSetRequestBody = {
  content: { 'application/json': { schema: VariantSetSchema } },
  required: true,
}

export const getAssociationBetweenSubjectObjectRoute = createRoute({
  method: 'get',
  path: '/association/between/{subject}/{object}',
  tags: ['association'],
  summary: 'Returns associations connecting two entities',
  description:
    'Given two entities (e.g. a particular gene and a particular disease), if these two entities\nare connected (directly or indirectly), then return the association objects describing\nthe connection.',
  operationId: 'get_associations_between',
  request: {
    params: z.object({
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Return associations pointing to this node, e.g. MP:0013765. Can also be a biological entity such as a gene',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subject: z
        .string()
        .openapi({
          param: {
            description:
              'Return associations emanating from this node, e.g. MGI:1342287 (If ID is from an ontology then results would include inferred associations, by default)',
            in: 'path',
            name: 'subject',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationFindSubjectCategoryRoute = createRoute({
  method: 'get',
  path: '/association/find/{subject_category}',
  tags: ['association'],
  summary: 'Returns list of matching associations for a given subject category',
  operationId: 'get_association_by_subject_category_search',
  request: {
    params: z.object({
      subject_category: z
        .string()
        .openapi({
          param: {
            description:
              'Category of entity at link Subject (source), e.g. gene, disease, phenotype',
            in: 'path',
            name: 'subject_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)',
            in: 'query',
            name: 'object_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationFindSubjectCategoryObjectCategoryRoute = createRoute({
  method: 'get',
  path: '/association/find/{subject_category}/{object_category}',
  tags: ['association'],
  summary: 'Returns list of matching associations between a given subject and object category',
  operationId: 'get_association_by_subject_and_object_category_search',
  request: {
    params: z.object({
      object_category: z
        .string()
        .openapi({
          param: {
            description:
              'Category of entity at link Object (target), e.g. gene, disease, phenotype',
            in: 'path',
            name: 'object_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subject_category: z
        .string()
        .openapi({
          param: {
            description:
              'Category of entity at link Subject (source), e.g. gene, disease, phenotype',
            in: 'path',
            name: 'subject_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      subject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Subject CURIE',
            in: 'query',
            name: 'subject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object CURIE',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)',
            in: 'query',
            name: 'object_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationFromSubjectRoute = createRoute({
  method: 'get',
  path: '/association/from/{subject}',
  tags: ['association'],
  summary: 'Returns list of matching associations starting from a given subject (source)',
  operationId: 'get_associations_from',
  request: {
    params: z.object({
      subject: z
        .string()
        .openapi({
          param: {
            description:
              'Return associations emanating from this node, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357 (If ID is from an ontology then results would include inferred associations, by default)',
            in: 'path',
            name: 'subject',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      object_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)',
            in: 'query',
            name: 'object_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationToObjectRoute = createRoute({
  method: 'get',
  path: '/association/to/{object}',
  tags: ['association'],
  summary: 'Returns list of matching associations pointing to a given object (target)',
  operationId: 'get_associations_to',
  request: {
    params: z.object({
      object: z
        .string()
        .openapi({
          param: {
            description:
              'Return associations pointing to this node, e.g. specifying MP:0013765 will return all genes, variants, strains, etc. annotated with this term. Can also be a biological entity such as a gene',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationTypeAssociationTypeRoute = createRoute({
  method: 'get',
  path: '/association/type/{association_type}',
  tags: ['association'],
  summary: 'Returns list of matching associations of a given type',
  operationId: 'get_association_by_subject_and_assoc_type',
  request: {
    params: z.object({
      association_type: z
        .string()
        .openapi({
          param: {
            description: 'Association type, eg gene_phenotype',
            in: 'path',
            name: 'association_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      subject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Subject CURIE',
            in: 'query',
            name: 'subject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Object CURIE',
            in: 'query',
            name: 'object',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getAssociationIdRoute = createRoute({
  method: 'get',
  path: '/association/{id}',
  tags: ['association'],
  summary: 'Returns the association with a given identifier',
  description:
    'An association connects, at a minimum, two things, designated subject and object,\nvia some relationship. Associations also include evidence, provenance etc.',
  operationId: 'get_association_object',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'identifier for an association, e.g. f5ba436c-f851-41b3-9d9d-bb2b5fc879d4',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getBioentityAnatomyIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/anatomy/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a given anatomy',
  operationId: 'get_anatomy_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityAnatomyIdGenesTaxidRoute = createRoute({
  method: 'get',
  path: '/bioentity/anatomy/{id}/genes/{taxid}',
  tags: ['bioentity'],
  summary: 'Returns gene IDs for all genes associated with a given anatomy, filtered by taxon',
  description: 'For example, + NCBITaxon:10090 (mouse)',
  operationId: 'get_anatomy_gene_by_taxon_associations',
  request: {
    params: z.object({
      taxid: z
        .string()
        .openapi({
          param: {
            description:
              'Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)',
            in: 'path',
            name: 'taxid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of anatomical entity, e.g. GO:0005634 (nucleus), UBERON:0002037 (cerebellum), CL:0000540 (neuron). Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  deprecated: true,
})

export const getBioentityCaseIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/case/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a case',
  operationId: 'get_case_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a case',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityCaseIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/case/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a case',
  operationId: 'get_case_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a case',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityCaseIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/case/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns models associated with a case',
  operationId: 'get_case_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a case',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityCaseIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/case/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a case',
  operationId: 'get_case_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a case',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityCaseIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/case/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a case',
  operationId: 'get_case_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a case',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a disease',
  operationId: 'get_disease_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. MONDO:0007103, MONDO:0010918. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a disease',
  operationId: 'get_disease_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      association_type: z
        .enum(['causal', 'non_causal', 'both'])
        .default('both')
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional filters: causal, non_causal, both',
            explode: true,
            in: 'query',
            name: 'association_type',
            schema: { default: 'both', enum: ['causal', 'non_causal', 'both'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a disease',
  operationId: 'get_disease_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. Orphanet:399158, DOID:0080008. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns associations to models of the disease',
  description:
    'In the association object returned, the subject will be the disease, and the object will be the model.\nThe model may be a gene or genetic element.\n\nIf the query disease is a general class, the association subject may be to a specific disease.\n\nIn some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.\n\nIn other cases, the association will be *indirect*, for\nexample, chaining over orthology. In these cases the chain\nwill be reflected in the *evidence graph*\n\n* TODO: provide hook into owlsim for dynamic computation of models by similarity',
  operationId: 'get_disease_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdModelsTaxonRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/models/{taxon}',
  tags: ['bioentity'],
  summary: 'Returns associations to models of the disease constrained by taxon',
  description: 'See /disease/<id>/models route for full details',
  operationId: 'get_disease_model_taxon_associations',
  request: {
    params: z.object({
      taxon: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE of organism taxonomy class to constrain models, e.g NCBITaxon:10090 (M. musculus).\n\n Higher level taxa may be used',
            in: 'path',
            name: 'taxon',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
  deprecated: true,
})

export const getBioentityDiseaseIdPathwaysRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/pathways',
  tags: ['bioentity'],
  summary: 'Returns pathways associated with a disease',
  operationId: 'get_disease_pathway_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. DOID:4450. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with disease',
  operationId: 'get_disease_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, Orphanet:1934, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: D2PAssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a disease',
  operationId: 'get_disease_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityDiseaseIdTreatmentRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/treatment',
  tags: ['bioentity'],
  summary: 'Returns substances associated with a disease',
  description: 'e.g. drugs or small molecules used to treat',
  operationId: 'get_disease_substance_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. DOID:2841 (asthma). Equivalent IDs not yet supported',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentityDiseaseIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/disease/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a disease',
  operationId: 'get_disease_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityFunctionIdRoute = createRoute({
  method: 'get',
  path: '/bioentity/function/{id}',
  tags: ['bioentity'],
  summary: 'Returns annotations associated to a function term',
  operationId: 'get_function_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a function term (e.g. GO:0044598)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            explode: true,
            in: 'query',
            name: 'evidence',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentityFunctionIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/function/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated to a GO term',
  operationId: 'get_function_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0044598',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relationship_type: z
        .enum(['involved_in', 'involved_in_regulation_of', 'acts_upstream_of_or_within'])
        .default('involved_in')
        .exactOptional()
        .openapi({
          param: {
            description:
              "relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')",
            explode: true,
            in: 'query',
            name: 'relationship_type',
            schema: {
              default: 'involved_in',
              enum: ['involved_in', 'involved_in_regulation_of', 'acts_upstream_of_or_within'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityFunctionIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/function/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated to a GO term',
  operationId: 'get_function_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0044598',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            explode: true,
            in: 'query',
            name: 'evidence',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentityFunctionIdTaxonsRoute = createRoute({
  method: 'get',
  path: '/bioentity/function/{id}/taxons',
  tags: ['bioentity'],
  summary: 'Returns taxons associated to a GO term',
  operationId: 'get_function_taxon_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0044598',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      evidence: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            explode: true,
            in: 'query',
            name: 'evidence',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentityGeneIdAnatomyRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/anatomy',
  tags: ['bioentity'],
  summary: 'Returns anatomical entities associated with a gene',
  operationId: 'get_gene_anatomy_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. NCBIGene:13434',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a gene',
  operationId: 'get_gene_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. HGNC:613, HGNC:11025',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with gene',
  operationId: 'get_gene_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      association_type: z
        .enum(['causal', 'non_causal', 'both'])
        .default('both')
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional filters: causal, non_causal, both',
            explode: true,
            in: 'query',
            name: 'association_type',
            schema: { default: 'both', enum: ['causal', 'non_causal', 'both'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdExpressionAnatomyRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/expression/anatomy',
  tags: ['bioentity'],
  summary: 'Returns expression events for a gene',
  operationId: 'get_gene_expression_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdFunctionRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/function',
  tags: ['bioentity'],
  summary: 'Returns function associations for a gene',
  description:
    'IMPLEMENTATION DETAILS\n----------------------\n\nNote: currently this is implemented as a query to the GO/AmiGO solr instance.\nThis directly supports IDs such as:\n\n - ZFIN e.g. ZFIN:ZDB-GENE-050417-357\n\nNote that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,\nthe standard for biolink is MGI:nnnn, so you should use this (will be transparently\nmapped to legacy ID)\n\nAdditionally, for some species such as Human, GO has the annotation attached to the UniProt ID.\nAgain, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be\nmapped behind the scenes for querying.',
  operationId: 'get_gene_function_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:6469. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a gene',
  operationId: 'get_gene_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. ZFIN:ZDB-GENE-980526-166',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdHomologsRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/homologs',
  tags: ['bioentity'],
  summary: 'Returns homologs for a gene',
  operationId: 'get_gene_homolog_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      homology_type: z
        .enum(['P', 'O', 'LDO'])
        .exactOptional()
        .openapi({
          param: {
            description: 'P (paralog), O (Ortholog) or LDO (least-diverged ortholog)',
            explode: true,
            in: 'query',
            name: 'homology_type',
            schema: { enum: ['P', 'O', 'LDO'], type: 'string' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdInteractionsRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/interactions',
  tags: ['bioentity'],
  summary: 'Returns interactions for a gene',
  operationId: 'get_gene_interactions',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns models associated with a gene',
  operationId: 'get_gene_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. NCBIGene:17988',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdOrthologDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/ortholog/diseases',
  tags: ['bioentity'],
  summary: 'Return diseases associated with orthologs of a gene',
  operationId: 'get_gene_ortholog_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. NCBIGene:4750',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdOrthologPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/ortholog/phenotypes',
  tags: ['bioentity'],
  summary: 'Return phenotypes associated with orthologs for a gene',
  operationId: 'get_gene_ortholog_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. NCBIGene:4750',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdPathwaysRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/pathways',
  tags: ['bioentity'],
  summary: 'Returns pathways associated with gene',
  operationId: 'get_gene_pathway_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of gene, e.g. NCBIGene:50846. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with gene',
  operationId: 'get_gene_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a gene',
  operationId: 'get_gene_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. NCBIGene:4750',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGeneIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/gene/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a gene',
  operationId: 'get_gene_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of gene, e.g. HGNC:10896',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a genotype',
  operationId: 'get_genotype_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of genotype, e.g. dbSNPIndividual:10440, dbSNPIndividual:22633',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a genotype',
  operationId: 'get_genotype_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of genotype, e.g. dbSNPIndividual:11441 (if non-human will return models)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a genotype',
  operationId: 'get_genotype_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes-genotype associations',
  description: 'Genotypes may be related to one another according to the GENO model',
  operationId: 'get_genotype_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns models associated with a genotype',
  operationId: 'get_genotype_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a genotype',
  operationId: 'get_genotype_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a genotype',
  operationId: 'get_genotype_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGenotypeIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/genotype/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns genotypes-variant associations',
  operationId: 'get_genotype_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of genotype, e.g. MONARCH:FBgeno422705',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityGotermIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/goterm/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns associations to GO terms for a gene',
  operationId: 'get_goterm_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0044598',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relationship_type: z
        .enum(['involved_in', 'involved_in_regulation_of', 'acts_upstream_of_or_within'])
        .default('involved_in')
        .exactOptional()
        .openapi({
          param: {
            description:
              "relationship type ('involved_in', 'involved_in_regulation_of' or 'acts_upstream_of_or_within')",
            explode: true,
            in: 'query',
            name: 'relationship_type',
            schema: {
              default: 'involved_in',
              enum: ['involved_in', 'involved_in_regulation_of', 'acts_upstream_of_or_within'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
  deprecated: true,
})

export const getBioentityModelIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a model',
  operationId: 'get_model_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. Coriell:GM22295, Coriell:HG02187',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a model',
  operationId: 'get_model_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. MGI:5573196',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a model',
  operationId: 'get_model_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. MMRRC:042787',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a model',
  operationId: 'get_model_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. Coriell:NA16660',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a model',
  operationId: 'get_model_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a model',
  operationId: 'get_model_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. MGI:5644542',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityModelIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/model/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a model',
  operationId: 'get_model_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a model, e.g. MMRRC:042787',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPathwayIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/pathway/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a pathway',
  operationId: 'get_pathway_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE any pathway element. E.g. REACT:R-HSA-5387390',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPathwayIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/pathway/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a pathway',
  operationId: 'get_pathway_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE any pathway element. E.g. REACT:R-HSA-5387390',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPathwayIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/pathway/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a pathway',
  operationId: 'get_pathway_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE any pathway element. E.g. REACT:R-HSA-5387390',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdAnatomyRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/anatomy',
  tags: ['bioentity'],
  summary: 'Returns anatomical entities associated with a phenotype',
  description: 'Example IDs:\n\n * MP:0008521 abnormal Bowman membrane',
  operationId: 'get_phenotype_anatomy_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of phenotype, e.g. MP:0008521. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(NamedObjectSchema) } },
    },
  },
})

export const getBioentityPhenotypeIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a phenotype',
  operationId: 'get_phenotype_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  HP:0011951 (Aspiration pneumonia), HP:0002450 (Abnormal motor neuron morphology)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a phenotype',
  operationId: 'get_phenotype_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of phenotype, e.g. HP:0007359. Equivalent IDs can be used with same results',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: D2PAssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdGeneTaxidIdsRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/gene/{taxid}/ids',
  tags: ['bioentity'],
  summary: 'Returns gene IDs for all genes associated with a given phenotype, filtered by taxon',
  description: 'For example, MP:0001569 + NCBITaxon:10090 (mouse)',
  operationId: 'get_phenotype_gene_by_taxon_associations',
  request: {
    params: z.object({
      taxid: z
        .string()
        .openapi({
          param: {
            description:
              'Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)',
            in: 'path',
            name: 'taxid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  deprecated: true,
})

export const getBioentityPhenotypeIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a phenotype',
  operationId: 'get_phenotype_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level), ',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a phenotype',
  operationId: 'get_phenotype_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdPathwaysRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/pathways',
  tags: ['bioentity'],
  summary: 'Returns pathways associated with a phenotype',
  operationId: 'get_phenotype_pathway_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a phenotype',
  operationId: 'get_phenotype_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPhenotypeIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/phenotype/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a phenotype',
  operationId: 'get_phenotype_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Pheno class CURIE identifier, e.g  WBPhenotype:0000180 (axon morphology variant), MP:0001569 (abnormal circulating bilirubin level)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a publication',
  operationId: 'get_publication_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a publication',
  operationId: 'get_publication_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a publication',
  operationId: 'get_publication_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns models associated with a publication',
  operationId: 'get_publication_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a publication',
  operationId: 'get_publication_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityPublicationIdVariantsRoute = createRoute({
  method: 'get',
  path: '/bioentity/publication/{id}/variants',
  tags: ['bioentity'],
  summary: 'Returns variants associated with a publication',
  operationId: 'get_publication_variant_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier for a publication, e.g. PMID:11751940',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentitySubstanceIdParticipantInRoute = createRoute({
  method: 'get',
  path: '/bioentity/substance/{id}/participant_in',
  tags: ['bioentity'],
  summary: 'Returns associations between an activity and process and the specified substance',
  description:
    'Examples relationships:\n\n * substance is a metabolite of a process\n * substance is synthesized by a process\n * substance is modified by an activity\n * substance elicits a response program/pathway\n * substance is transported by activity or pathway\n\nFor example, CHEBI:40036 (amitrole)',
  operationId: 'get_substance_participant_in_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of substance, e.g. CHEBI:40036',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getBioentitySubstanceIdRolesRoute = createRoute({
  method: 'get',
  path: '/bioentity/substance/{id}/roles',
  tags: ['bioentity'],
  summary: 'Returns associations between given drug and roles',
  description: 'Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)',
  operationId: 'get_substance_role_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of substance, e.g. CHEBI:40036',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getBioentitySubstanceIdTreatsRoute = createRoute({
  method: 'get',
  path: '/bioentity/substance/{id}/treats',
  tags: ['bioentity'],
  summary: 'Returns substances associated with a disease',
  description: 'e.g. drugs or small molecules used to treat',
  operationId: 'get_substance_treats_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of substance, e.g. CHEBI:40036',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentityVariantIdCasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/cases',
  tags: ['bioentity'],
  summary: 'Returns cases associated with a variant',
  operationId: 'get_variant_case_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of variant, e.g. OMIM:309550.0004, dbSNP:rs5030868',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdDiseasesRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/diseases',
  tags: ['bioentity'],
  summary: 'Returns diseases associated with a variant',
  operationId: 'get_variant_disease_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of variant, e.g. ClinVarVariant:14925',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdGenesRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/genes',
  tags: ['bioentity'],
  summary: 'Returns genes associated with a variant',
  operationId: 'get_variant_gene_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdGenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/genotypes',
  tags: ['bioentity'],
  summary: 'Returns genotypes associated with a variant',
  operationId: 'get_variant_genotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdModelsRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/models',
  tags: ['bioentity'],
  summary: 'Returns models associated with a variant',
  operationId: 'get_variant_model_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of variant, e.g. OMIM:607623.0012, dbSNP:rs5030868',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdPhenotypesRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/phenotypes',
  tags: ['bioentity'],
  summary: 'Returns phenotypes associated with a variant',
  operationId: 'get_variant_phenotype_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityVariantIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/variant/{id}/publications',
  tags: ['bioentity'],
  summary: 'Returns publications associated with a variant',
  operationId: 'get_variant_publication_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityIdRoute = createRoute({
  method: 'get',
  path: '/bioentity/{id}',
  tags: ['bioentity'],
  summary: 'Returns basic info on object of any type',
  operationId: 'get_generic_object',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:84570',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BioObjectSchema } } },
  },
})

export const getBioentityIdAssociationsRoute = createRoute({
  method: 'get',
  path: '/bioentity/{id}/associations',
  tags: ['bioentity'],
  summary: 'Returns associations for an entity regardless of the type',
  operationId: 'get_generic_associations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more taxon CURIE to filter associations by subject taxon; includes inferred associations by default',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      direct_taxon: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set true to exclude inferred taxa',
            in: 'query',
            name: 'direct_taxon',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A relation CURIE to filter associations',
            in: 'query',
            name: 'relation',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorting responses <field> <desc,asc>',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to filter documents',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociationResultsSchema } },
    },
  },
})

export const getBioentityTypeIdRoute = createRoute({
  method: 'get',
  path: '/bioentity/{type}/{id}',
  tags: ['bioentity'],
  summary: 'Return basic info on an object for a given type',
  operationId: 'get_generic_object_by_type',
  request: {
    params: z.object({
      type: z
        .enum([
          'gene',
          'variant',
          'genotype',
          'phenotype',
          'disease',
          'goterm',
          'pathway',
          'anatomy',
          'substance',
          'individual',
          'publication',
          'model',
          'case',
        ])
        .openapi({
          param: {
            description: 'bioentity type',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: [
                'gene',
                'variant',
                'genotype',
                'phenotype',
                'disease',
                'goterm',
                'pathway',
                'anatomy',
                'substance',
                'individual',
                'publication',
                'model',
                'case',
              ],
              type: 'string',
            },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:84570',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      facet: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable faceting',
            in: 'query',
            name: 'facet',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      facet_fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to facet on',
            explode: true,
            in: 'query',
            name: 'facet_fields',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      unselect_evidence: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes evidence objects in response',
            in: 'query',
            name: 'unselect_evidence',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      fetch_objects: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload',
            in: 'query',
            name: 'fetch_objects',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      use_compact_associations: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, returns results in compact associations format',
            in: 'query',
            name: 'use_compact_associations',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direct: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False',
            in: 'query',
            name: 'direct',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      get_association_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Get association counts',
            in: 'query',
            name: 'get_association_counts',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      distinct_counts: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Get distinct counts for associations (to be used in conjunction with 'get_association_counts' parameter)",
            in: 'query',
            name: 'distinct_counts',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetAssociationsRoute = createRoute({
  method: 'get',
  path: '/bioentityset/associations',
  tags: ['bioentityset'],
  summary: 'Returns compact associations for a given input set',
  operationId: 'get_entity_set_associations',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      background: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests',
            explode: true,
            in: 'query',
            name: 'background',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      object_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'E.g. phenotype, function',
            in: 'query',
            name: 'object_category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object_slim: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED',
            in: 'query',
            name: 'object_slim',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getBioentitysetDescriptorCountsRoute = createRoute({
  method: 'get',
  path: '/bioentityset/descriptor/counts',
  tags: ['bioentityset'],
  summary: 'Summary statistics for objects associated',
  operationId: 'get_entity_set_summary',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      background: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests',
            explode: true,
            in: 'query',
            name: 'background',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      object_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'E.g. phenotype, function',
            in: 'query',
            name: 'object_category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object_slim: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED',
            in: 'query',
            name: 'object_slim',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetGraphRoute = createRoute({
  method: 'get',
  path: '/bioentityset/graph',
  tags: ['bioentityset'],
  summary: 'TODO Graph object spanning all entities',
  operationId: 'get_entity_set_graph_resource',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      background: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests',
            explode: true,
            in: 'query',
            name: 'background',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      object_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'E.g. phenotype, function',
            in: 'query',
            name: 'object_category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      object_slim: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED',
            in: 'query',
            name: 'object_slim',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetHomologsIndexRoute = createRoute({
  method: 'get',
  path: '/bioentityset/homologs/',
  tags: ['bioentityset/homologs'],
  summary: 'Returns homology associations for a given input set of genes',
  operationId: 'get_entity_set_homologs',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getBioentitysetOverrepresentationRoute = createRoute({
  method: 'get',
  path: '/bioentityset/overrepresentation',
  tags: ['bioentityset'],
  summary: 'Summary statistics for objects associated',
  operationId: 'get_over_representation',
  request: {
    query: z.object({
      object_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'E.g. phenotype, function',
            in: 'query',
            name: 'object_category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      background: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests',
            explode: true,
            in: 'query',
            name: 'background',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      subject_category: z
        .string()
        .default('gene')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Default: gene. Other types may be used e.g. disease but statistics may not make sense',
            in: 'query',
            name: 'subject_category',
            schema: { default: 'gene', type: 'string' },
            required: false,
          },
        }),
      max_p_value: z
        .string()
        .default('0.05')
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude results with p-value greater than this',
            in: 'query',
            name: 'max_p_value',
            schema: { default: '0.05', type: 'string' },
            required: false,
          },
        }),
      ontology: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)',
            in: 'query',
            name: 'ontology',
            schema: { type: 'string' },
            required: false,
          },
        }),
      taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'must be NCBITaxon CURIE. Example: NCBITaxon:9606',
            in: 'query',
            name: 'taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetSlimmerAnatomyRoute = createRoute({
  method: 'get',
  path: '/bioentityset/slimmer/anatomy',
  tags: ['bioentityset/slimmer'],
  summary: 'For a given gene(s), summarize its annotations over a defined set of slim',
  operationId: 'get_entity_set_anatomy_slimmer',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)',
            explode: true,
            in: 'query',
            name: 'slim',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetSlimmerFunctionRoute = createRoute({
  method: 'get',
  path: '/bioentityset/slimmer/function',
  tags: ['bioentityset/slimmer'],
  summary: 'For a given gene(s), summarize its annotations over a defined set of slim',
  operationId: 'get_entity_set_function_slimmer',
  request: {
    query: z.object({
      relationship_type: z
        .enum(['involved_in', 'acts_upstream_of_or_within'])
        .default('acts_upstream_of_or_within')
        .exactOptional()
        .openapi({
          param: {
            description: "relationship type ('involved_in' or 'acts_upstream_of_or_within')",
            explode: true,
            in: 'query',
            name: 'relationship_type',
            schema: {
              default: 'acts_upstream_of_or_within',
              enum: ['involved_in', 'acts_upstream_of_or_within'],
              type: 'string',
            },
            required: false,
          },
        }),
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)',
            explode: true,
            in: 'query',
            name: 'slim',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getBioentitysetSlimmerPhenotypeRoute = createRoute({
  method: 'get',
  path: '/bioentityset/slimmer/phenotype',
  tags: ['bioentityset/slimmer'],
  summary: 'For a given gene(s), summarize its annotations over a defined set of slim',
  operationId: 'get_entity_set_phenotype_slimmer',
  request: {
    query: z.object({
      subject: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387',
            explode: true,
            in: 'query',
            name: 'subject',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID (IMPLEMENTED) or subset ID (TODO)',
            explode: true,
            in: 'query',
            name: 'slim',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      exclude_automatic_assertions: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, excludes associations that involve IEAs (ECO:0000501)',
            in: 'query',
            name: 'exclude_automatic_assertions',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'beginning row',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamActivityRoute = createRoute({
  method: 'get',
  path: '/cam/activity',
  tags: ['cam'],
  summary: 'Returns list of models',
  operationId: 'get_activity_collection',
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamInstanceIdRoute = createRoute({
  method: 'get',
  path: '/cam/instance/{id}',
  tags: ['cam'],
  summary: 'Returns list of matches',
  operationId: 'get_instance_object',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getCamInstancesRoute = createRoute({
  method: 'get',
  path: '/cam/instances',
  tags: ['cam'],
  summary: 'Returns list of all instances',
  operationId: 'get_model_instances',
  responses: { 200: { description: 'Success' } },
})

export const getCamModelRoute = createRoute({
  method: 'get',
  path: '/cam/model',
  tags: ['cam'],
  summary: 'Returns list of ALL models',
  operationId: 'get_model_collection',
  responses: { 200: { description: 'Success' } },
})

export const getCamModelContributorsRoute = createRoute({
  method: 'get',
  path: '/cam/model/contributors',
  tags: ['cam'],
  summary: 'Returns list of all contributors across all models',
  operationId: 'get_model_contributors',
  responses: { 200: { description: 'Success' } },
})

export const getCamModelPropertiesRoute = createRoute({
  method: 'get',
  path: '/cam/model/properties',
  tags: ['cam'],
  summary: 'Returns list of all properties used across all models',
  operationId: 'get_model_properties',
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamModelPropertyValuesRoute = createRoute({
  method: 'get',
  path: '/cam/model/property_values',
  tags: ['cam'],
  summary: 'Returns list property-values for all models',
  operationId: 'get_model_property_values',
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamModelQueryRoute = createRoute({
  method: 'get',
  path: '/cam/model/query',
  tags: ['cam'],
  summary: 'Returns list of models matching query',
  operationId: 'get_model_query',
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamModelIdRoute = createRoute({
  method: 'get',
  path: '/cam/model/{id}',
  tags: ['cam'],
  summary: 'Returns a complete model',
  operationId: 'get_model_object',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getCamPhysicalInteractionRoute = createRoute({
  method: 'get',
  path: '/cam/physical_interaction',
  tags: ['cam'],
  summary: 'Returns list of models',
  operationId: 'get_physical_interaction',
  request: {
    query: z.object({
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in title of model',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to search for in contributor of model',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getEvidenceGraphIdRoute = createRoute({
  method: 'get',
  path: '/evidence/graph/{id}',
  tags: ['evidence/graph'],
  summary: 'Returns evidence graph object for a given association',
  description: 'Note that every association is assumed to have a unique ID',
  operationId: 'get_evidence_graph_object',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(GraphSchema) } },
    },
  },
})

export const getEvidenceGraphIdTableRoute = createRoute({
  method: 'get',
  path: '/evidence/graph/{id}/table',
  tags: ['evidence/graph'],
  summary: 'Returns evidence as a association_results object given an association',
  description: 'Note that every association is assumed to have a unique ID',
  operationId: 'get_evidence_graph_table',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      is_publication: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, considers dc:source as edge',
            in: 'query',
            name: 'is_publication',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getGenomeFeaturesWithinBuildReferenceBeginEndRoute = createRoute({
  method: 'get',
  path: '/genome/features/within/{build}/{reference}/{begin}/{end}',
  tags: ['genome/features'],
  summary: 'Returns list of matches',
  operationId: 'get_features_within_resource',
  request: {
    params: z.object({
      build: z
        .string()
        .openapi({
          param: { in: 'path', name: 'build', required: true, schema: { type: 'string' } },
        }),
      reference: z
        .string()
        .openapi({
          param: { in: 'path', name: 'reference', required: true, schema: { type: 'string' } },
        }),
      begin: z
        .string()
        .openapi({
          param: { in: 'path', name: 'begin', required: true, schema: { type: 'string' } },
        }),
      end: z
        .string()
        .openapi({
          param: { in: 'path', name: 'end', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(SequenceFeatureSchema) } },
    },
  },
})

export const getGraphEdgesFromIdRoute = createRoute({
  method: 'get',
  path: '/graph/edges/from/{id}',
  tags: ['graph'],
  summary: 'Returns edges emanating from a given node',
  operationId: 'get_edge_resource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE e.g. HP:0000465',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      depth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'How far to traverse for neighbors',
            in: 'query',
            name: 'depth',
            schema: { default: 1, type: 'integer' },
            required: false,
          },
        }),
      direction: z
        .enum(['INCOMING', 'OUTGOING', 'BOTH'])
        .default('BOTH')
        .exactOptional()
        .openapi({
          param: {
            description: 'Which direction to traverse (used only if relationship_type is defined)',
            explode: true,
            in: 'query',
            name: 'direction',
            schema: { default: 'BOTH', enum: ['INCOMING', 'OUTGOING', 'BOTH'], type: 'string' },
            required: false,
          },
        }),
      relationship_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Relationship type to traverse',
            explode: true,
            in: 'query',
            name: 'relationship_type',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      entail: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include sub-properties and equivalent properties',
            in: 'query',
            name: 'entail',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      graph: z
        .enum(['data', 'ontology'])
        .default('data')
        .exactOptional()
        .openapi({
          param: {
            description: 'Which monarch graph to query',
            explode: true,
            in: 'query',
            name: 'graph',
            schema: { default: 'data', enum: ['data', 'ontology'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(GraphSchema) } },
    },
  },
})

export const getGraphNodeIdRoute = createRoute({
  method: 'get',
  path: '/graph/node/{id}',
  tags: ['graph'],
  summary: 'Returns a graph node',
  description:
    'A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,\na molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.',
  operationId: 'get_node_resource',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE e.g. HP:0000465',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(BioObjectSchema) } },
    },
  },
})

export const getIdentifierMapperSourceTargetIndexRoute = createRoute({
  method: 'get',
  path: '/identifier/mapper/{source}/{target}/',
  tags: ['identifier/mapper'],
  summary: 'TODO maps a list of identifiers from a source to a target',
  operationId: 'get_identifier_mapper',
  request: {
    params: z.object({
      source: z
        .string()
        .openapi({
          param: { in: 'path', name: 'source', required: true, schema: { type: 'string' } },
        }),
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getIdentifierPrefixesIndexRoute = createRoute({
  method: 'get',
  path: '/identifier/prefixes/',
  tags: ['identifier/prefixes'],
  summary: 'Returns list of prefixes',
  operationId: 'get_prefix_collection',
  responses: { 200: { description: 'Success' } },
})

export const getIdentifierPrefixesContractUriRoute = createRoute({
  method: 'get',
  path: '/identifier/prefixes/contract/{uri}',
  tags: ['identifier/prefixes'],
  summary: 'Returns contracted URI',
  operationId: 'get_prefix_contract',
  request: {
    params: z.object({
      uri: z
        .string()
        .openapi({
          param: {
            description:
              'URI of entity to be contracted to identifier/CURIE, e.g "http://www.informatics.jax.org/accession/MGI:1"',
            in: 'path',
            name: 'uri',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getIdentifierPrefixesExpandIdRoute = createRoute({
  method: 'get',
  path: '/identifier/prefixes/expand/{id}',
  tags: ['identifier/prefixes'],
  summary: 'Returns expanded URI',
  operationId: 'get_prefix_expand',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of entity to be contracted to URI, e.g "MGI:1"',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getIndividualPedigreeIdRoute = createRoute({
  method: 'get',
  path: '/individual/pedigree/{id}',
  tags: ['individual'],
  summary: 'Returns list of matches',
  operationId: 'get_pedigree',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getIndividualIdRoute = createRoute({
  method: 'get',
  path: '/individual/{id}',
  tags: ['individual'],
  summary: 'Returns list of matches',
  operationId: 'get_individual',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getMartCaseObjectCategoryTaxonRoute = createRoute({
  method: 'get',
  path: '/mart/case/{object_category}/{taxon}',
  tags: ['mart'],
  summary: 'Bulk download of case associations',
  description:
    'NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.',
  operationId: 'get_mart_case_associations_resource',
  request: {
    params: z.object({
      taxon: z
        .string()
        .openapi({
          param: {
            description: 'taxon of case, must be of form NCBITaxon:9606',
            in: 'path',
            name: 'taxon',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object_category: z
        .string()
        .openapi({
          param: {
            description: 'Category of entity at link Subject (target), e.g. phenotype, disease',
            in: 'path',
            name: 'object_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMartDiseaseObjectCategoryTaxonRoute = createRoute({
  method: 'get',
  path: '/mart/disease/{object_category}/{taxon}',
  tags: ['mart'],
  summary: 'Bulk download of disease associations',
  description:
    'NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.',
  operationId: 'get_mart_disease_associations_resource',
  request: {
    params: z.object({
      taxon: z
        .string()
        .openapi({
          param: {
            description: 'taxon of disease, must be of form NCBITaxon:9606',
            in: 'path',
            name: 'taxon',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object_category: z
        .string()
        .openapi({
          param: {
            description: 'Category of entity at link Object (target), e.g. phenotype, disease',
            in: 'path',
            name: 'object_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMartGeneObjectCategoryTaxonRoute = createRoute({
  method: 'get',
  path: '/mart/gene/{object_category}/{taxon}',
  tags: ['mart'],
  summary: 'Bulk download of gene associations',
  description:
    'NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.',
  operationId: 'get_mart_gene_associations_resource',
  request: {
    params: z.object({
      taxon: z
        .string()
        .openapi({
          param: {
            description: 'taxon of gene, must be of form NCBITaxon:9606',
            in: 'path',
            name: 'taxon',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object_category: z
        .string()
        .openapi({
          param: {
            description: 'Category of entity at link Object (target), e.g. phenotype, disease',
            in: 'path',
            name: 'object_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      slim: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID',
            explode: true,
            in: 'query',
            name: 'slim',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMartOrthologTaxon1Taxon2Route = createRoute({
  method: 'get',
  path: '/mart/ortholog/{taxon1}/{taxon2}',
  tags: ['mart'],
  summary: 'Bulk download of orthologs',
  operationId: 'get_mart_ortholog_associations_resource',
  request: {
    params: z.object({
      taxon2: z
        .string()
        .openapi({
          param: {
            description: 'object taxon, e.g. NCBITaxon:10090',
            in: 'path',
            name: 'taxon2',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taxon1: z
        .string()
        .openapi({
          param: {
            description: 'subject taxon, e.g. NCBITaxon:9606',
            in: 'path',
            name: 'taxon1',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMartParalogTaxon1Taxon2Route = createRoute({
  method: 'get',
  path: '/mart/paralog/{taxon1}/{taxon2}',
  tags: ['mart'],
  summary: 'Bulk download of paralogs',
  operationId: 'get_mart_paralog_associations_resource',
  request: {
    params: z.object({
      taxon2: z
        .string()
        .openapi({
          param: {
            description: 'object taxon, e.g. NCBITaxon:9606',
            in: 'path',
            name: 'taxon2',
            required: true,
            schema: { type: 'string' },
          },
        }),
      taxon1: z
        .string()
        .openapi({
          param: {
            description: 'subject taxon, e.g. NCBITaxon:9606',
            in: 'path',
            name: 'taxon1',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getMetadataDatasetsRoute = createRoute({
  method: 'get',
  path: '/metadata/datasets',
  tags: ['metadata'],
  summary: 'Get metadata for all datasets from SciGraph',
  operationId: 'get_metadata_for_datasets',
  responses: { 200: { description: 'Success' } },
})

export const postMmeDiseaseRoute = createRoute({
  method: 'post',
  path: '/mme/disease',
  tags: ['mme'],
  summary: 'Match a patient to diseases based on their phenotypes',
  operationId: 'post_disease_mme',
  request: { body: MmeRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const postMmeFlyRoute = createRoute({
  method: 'post',
  path: '/mme/fly',
  tags: ['mme'],
  summary: 'Match a patient to fruit fly genes based on similar phenotypes',
  operationId: 'post_fly_mme',
  request: { body: MmeRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const postMmeMouseRoute = createRoute({
  method: 'post',
  path: '/mme/mouse',
  tags: ['mme'],
  summary: 'Match a patient to mouse genes based on similar phenotypes',
  operationId: 'post_mouse_mme',
  request: { body: MmeRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const postMmeNematodeRoute = createRoute({
  method: 'post',
  path: '/mme/nematode',
  tags: ['mme'],
  summary: 'Match a patient to nematode genes based on similar phenotypes',
  operationId: 'post_nematode_mme',
  request: { body: MmeRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const postMmeZebrafishRoute = createRoute({
  method: 'post',
  path: '/mme/zebrafish',
  tags: ['mme'],
  summary: 'Match a patient to zebrafish genes based on similar phenotypes',
  operationId: 'post_zebrafish_mme',
  request: { body: MmeRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const getNlpAnnotateIndexRoute = createRoute({
  method: 'get',
  path: '/nlp/annotate/',
  tags: ['nlp/annotate'],
  summary: 'Annotate a given text using SciGraph annotator',
  operationId: 'get_annotate',
  request: {
    query: z.object({
      content: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The text content to annotate',
            in: 'query',
            name: 'content',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to include for annotation',
            explode: true,
            in: 'query',
            name: 'include_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      exclude_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to exclude for annotation',
            explode: true,
            in: 'query',
            name: 'exclude_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      min_length: z
        .string()
        .default('4')
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum number of characters in the annotated entity',
            in: 'query',
            name: 'min_length',
            schema: { default: 4, type: 'string' },
            required: false,
          },
        }),
      longest_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should only the longest entity be returned for an overlapping group',
            in: 'query',
            name: 'longest_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_abbreviation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should abbreviations be included',
            in: 'query',
            name: 'include_abbreviation',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_acronym: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should acronyms be included',
            in: 'query',
            name: 'include_acronym',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_numbers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should numbers be included',
            in: 'query',
            name: 'include_numbers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postNlpAnnotateIndexRoute = createRoute({
  method: 'post',
  path: '/nlp/annotate/',
  tags: ['nlp/annotate'],
  summary: 'Annotate a given text using SciGraph annotator',
  operationId: 'post_annotate',
  request: {
    query: z.object({
      content: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The text content to annotate',
            in: 'query',
            name: 'content',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to include for annotation',
            explode: true,
            in: 'query',
            name: 'include_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      exclude_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to exclude for annotation',
            explode: true,
            in: 'query',
            name: 'exclude_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      min_length: z
        .string()
        .default('4')
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum number of characters in the annotated entity',
            in: 'query',
            name: 'min_length',
            schema: { default: 4, type: 'string' },
            required: false,
          },
        }),
      longest_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should only the longest entity be returned for an overlapping group',
            in: 'query',
            name: 'longest_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_abbreviation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should abbreviations be included',
            in: 'query',
            name: 'include_abbreviation',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_acronym: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should acronyms be included',
            in: 'query',
            name: 'include_acronym',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_numbers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should numbers be included',
            in: 'query',
            name: 'include_numbers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getNlpAnnotateEntitiesRoute = createRoute({
  method: 'get',
  path: '/nlp/annotate/entities',
  tags: ['nlp/annotate'],
  summary: 'Annotate a given content using SciGraph annotator and get all entities from content',
  operationId: 'get_annotate_entities',
  request: {
    query: z.object({
      content: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The text content to annotate',
            in: 'query',
            name: 'content',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to include for annotation',
            explode: true,
            in: 'query',
            name: 'include_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      exclude_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to exclude for annotation',
            explode: true,
            in: 'query',
            name: 'exclude_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      min_length: z
        .string()
        .default('4')
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum number of characters in the annotated entity',
            in: 'query',
            name: 'min_length',
            schema: { default: 4, type: 'string' },
            required: false,
          },
        }),
      longest_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should only the longest entity be returned for an overlapping group',
            in: 'query',
            name: 'longest_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_abbreviation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should abbreviations be included',
            in: 'query',
            name: 'include_abbreviation',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_acronym: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should acronyms be included',
            in: 'query',
            name: 'include_acronym',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_numbers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should numbers be included',
            in: 'query',
            name: 'include_numbers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityAnnotationResultSchema } },
    },
  },
})

export const postNlpAnnotateEntitiesRoute = createRoute({
  method: 'post',
  path: '/nlp/annotate/entities',
  tags: ['nlp/annotate'],
  summary: 'Annotate a given content using SciGraph annotator and get all entities from content',
  operationId: 'post_annotate_entities',
  request: {
    query: z.object({
      content: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The text content to annotate',
            in: 'query',
            name: 'content',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to include for annotation',
            explode: true,
            in: 'query',
            name: 'include_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      exclude_category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Categories to exclude for annotation',
            explode: true,
            in: 'query',
            name: 'exclude_category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      min_length: z
        .string()
        .default('4')
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum number of characters in the annotated entity',
            in: 'query',
            name: 'min_length',
            schema: { default: 4, type: 'string' },
            required: false,
          },
        }),
      longest_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should only the longest entity be returned for an overlapping group',
            in: 'query',
            name: 'longest_only',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_abbreviation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should abbreviations be included',
            in: 'query',
            name: 'include_abbreviation',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_acronym: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should acronyms be included',
            in: 'query',
            name: 'include_acronym',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      include_numbers: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Should numbers be included',
            in: 'query',
            name: 'include_numbers',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityAnnotationResultSchema } },
    },
  },
})

export const getOntolIdentifierIndexRoute = createRoute({
  method: 'get',
  path: '/ontol/identifier/',
  tags: ['ontol/identifier'],
  summary: 'Fetches a map from CURIEs/IDs to labels',
  operationId: 'get_ontol_identifier_resource',
  request: {
    query: z.object({
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'List of labels',
            explode: true,
            in: 'query',
            name: 'label',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postOntolIdentifierIndexRoute = createRoute({
  method: 'post',
  path: '/ontol/identifier/',
  tags: ['ontol/identifier'],
  summary: 'Fetches a map from CURIEs/IDs to labels',
  description:
    "Takes 'label' list argument either as a querystring argument or as a key\nin the POST body when content-type is application/json.",
  operationId: 'post_ontol_identifier_resource',
  request: {
    query: z.object({
      label: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'List of labels',
            explode: true,
            in: 'query',
            name: 'label',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntolInformationContentSubjectCategoryObjectCategorySubjectTaxonRoute = createRoute(
  {
    method: 'get',
    path: '/ontol/information_content/{subject_category}/{object_category}/{subject_taxon}',
    tags: ['ontol'],
    summary: 'Returns information content (IC) for a set of relevant ontology classes',
    description:
      '```\nIC = -log2( freq(t) / popSize )\n```\n\nHere the frequency and population is calculated for a particular dataset:\ne.g. all human disease-phenotype associations',
    operationId: 'get_information_content_resource',
    request: {
      params: z.object({
        subject_category: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subject_category',
              required: true,
              schema: { type: 'string' },
            },
          }),
        object_category: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'object_category',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subject_taxon: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'subject_taxon',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        evidence: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ',
              in: 'query',
              name: 'evidence',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' } },
  },
)

export const getOntolLabelerIndexRoute = createRoute({
  method: 'get',
  path: '/ontol/labeler/',
  tags: ['ontol/labeler'],
  summary: 'Fetches a map from CURIEs/IDs to labels',
  operationId: 'get_ontol_labeler_resource',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'List of ids',
            explode: true,
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntolSubgraphOntologyNodeRoute = createRoute({
  method: 'get',
  path: '/ontol/subgraph/{ontology}/{node}',
  tags: ['ontol'],
  summary: 'Extract a subgraph from an ontology',
  operationId: 'get_extract_ontology_subgraph_resource',
  request: {
    params: z.object({
      node: z
        .string()
        .openapi({
          param: {
            description: 'class ID, e.g. HP:0001288',
            in: 'path',
            name: 'node',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ontology: z
        .string()
        .openapi({
          param: {
            description: 'ontology ID, e.g. go, uberon, mp, hp',
            in: 'path',
            name: 'ontology',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cnode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'cnode',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      include_ancestors: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Ancestors',
            in: 'query',
            name: 'include_ancestors',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      include_descendants: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Descendants',
            in: 'query',
            name: 'include_descendants',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['subClassOf', 'BFO:0000050'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'relation',
            schema: {
              default: ['subClassOf', 'BFO:0000050'],
              items: { type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      include_meta: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include metadata in response',
            in: 'query',
            name: 'include_meta',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postOntolSubgraphOntologyNodeRoute = createRoute({
  method: 'post',
  path: '/ontol/subgraph/{ontology}/{node}',
  tags: ['ontol'],
  summary: 'Extract a subgraph from an ontology',
  operationId: 'post_extract_ontology_subgraph_resource',
  request: {
    params: z.object({
      node: z
        .string()
        .openapi({
          param: {
            description: 'class ID, e.g. HP:0001288',
            in: 'path',
            name: 'node',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ontology: z
        .string()
        .openapi({
          param: {
            description: 'ontology ID, e.g. go, uberon, mp, hp',
            in: 'path',
            name: 'ontology',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cnode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'cnode',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      include_ancestors: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Ancestors',
            in: 'query',
            name: 'include_ancestors',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      include_descendants: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Descendants',
            in: 'query',
            name: 'include_descendants',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['subClassOf', 'BFO:0000050'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'relation',
            schema: {
              default: ['subClassOf', 'BFO:0000050'],
              items: { type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      include_meta: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include metadata in response',
            in: 'query',
            name: 'include_meta',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologySharedSubjectObjectRoute = createRoute({
  method: 'get',
  path: '/ontology/shared/{subject}/{object}',
  tags: ['ontology'],
  summary: 'Returns the ancestor ontology terms shared by two ontology terms',
  operationId: 'get_ontology_terms_shared_ancestor',
  request: {
    params: z.object({
      subject: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0006259',
            in: 'path',
            name: 'subject',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0046483',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologySubsetIdRoute = createRoute({
  method: 'get',
  path: '/ontology/subset/{id}',
  tags: ['ontology'],
  summary: 'Returns meta data of an ontology subset (slim)',
  operationId: 'get_ontology_subset',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'name of a slim subset, e.g. goslim_agr, goslim_generic',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologyTermIdRoute = createRoute({
  method: 'get',
  path: '/ontology/term/{id}',
  tags: ['ontology'],
  summary: 'Returns meta data of an ontology term',
  operationId: 'get_ontology_term',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0003677',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologyTermIdGraphRoute = createRoute({
  method: 'get',
  path: '/ontology/term/{id}/graph',
  tags: ['ontology'],
  summary: 'Returns graph of an ontology term',
  operationId: 'get_ontology_term_graph',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0000981',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      graph_type: z
        .enum([
          'topology_graph',
          'regulates_transitivity_graph',
          'neighborhood_graph',
          'neighborhood_limited_graph',
        ])
        .default('topology_graph')
        .exactOptional()
        .openapi({
          param: {
            description:
              "graph type ('topology_graph', 'regulates_transitivity_graph' or 'neighborhood_graph')",
            explode: true,
            in: 'query',
            name: 'graph_type',
            schema: {
              default: 'topology_graph',
              enum: [
                'topology_graph',
                'regulates_transitivity_graph',
                'neighborhood_graph',
                'neighborhood_limited_graph',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologyTermIdSubgraphRoute = createRoute({
  method: 'get',
  path: '/ontology/term/{id}/subgraph',
  tags: ['ontology'],
  summary: 'Extract a subgraph from an ontology term',
  operationId: 'get_ontology_term_subgraph',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0007275',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cnode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'cnode',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      include_ancestors: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Ancestors',
            in: 'query',
            name: 'include_ancestors',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      include_descendants: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include Descendants',
            in: 'query',
            name: 'include_descendants',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      relation: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default(['subClassOf', 'BFO:0000050'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Additional classes',
            explode: true,
            in: 'query',
            name: 'relation',
            schema: {
              default: ['subClassOf', 'BFO:0000050'],
              items: { type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      include_meta: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include metadata in response',
            in: 'query',
            name: 'include_meta',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOntologyTermIdSubsetsRoute = createRoute({
  method: 'get',
  path: '/ontology/term/{id}/subsets',
  tags: ['ontology'],
  summary: 'Returns subsets (slims) associated to an ontology term',
  operationId: 'get_ontology_term_subsets',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'CURIE identifier of a GO term, e.g. GO:0006259',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getOwlOntologyDlqueryQueryRoute = createRoute({
  method: 'get',
  path: '/owl/ontology/dlquery/{query}',
  tags: ['owl/ontology'],
  summary: 'Placeholder - use OWLery for now',
  operationId: 'get_dl_query',
  request: {
    params: z.object({
      query: z
        .string()
        .openapi({
          param: { in: 'path', name: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getOwlOntologySparqlQueryRoute = createRoute({
  method: 'get',
  path: '/owl/ontology/sparql/{query}',
  tags: ['owl/ontology'],
  summary: 'Placeholder - use direct SPARQL endpoint for now',
  operationId: 'get_sparql_query',
  request: {
    params: z.object({
      query: z
        .string()
        .openapi({
          param: { in: 'path', name: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getPairSimJaccardId1Id2Route = createRoute({
  method: 'get',
  path: '/pair/sim/jaccard/{id1}/{id2}',
  tags: ['pair/sim'],
  summary: 'Get pairwise similarity',
  operationId: 'get_pair_sim_jaccard_resource',
  request: {
    params: z.object({
      id2: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:1200; ZFIN:ZDB-GENE-980528-2059; UniProtKB:P12644',
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            description: 'id, e.g. NCBIGene:10891; ZFIN:ZDB-GENE-980526-166; UniProtKB:Q15465',
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      object_category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'e.g. disease, phenotype, gene. Two subjects will be compared based on overlap between associations to objects in this category',
            in: 'query',
            name: 'object_category',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const getRelationUsageIndexRoute = createRoute({
  method: 'get',
  path: '/relation/usage/',
  tags: ['relation/usage'],
  summary: 'All relations used plus count of associations',
  operationId: 'get_relation_usage_resource',
  request: {
    query: z.object({
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getRelationUsageBetweenSubjectCategoryObjectCategoryRoute = createRoute({
  method: 'get',
  path: '/relation/usage/between/{subject_category}/{object_category}',
  tags: ['relation/usage'],
  summary: 'All relations used plus count of associations',
  operationId: 'get_relation_usage_between_resource',
  request: {
    params: z.object({
      subject_category: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'subject_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
      object_category: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'object_category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getRelationUsagePivotRoute = createRoute({
  method: 'get',
  path: '/relation/usage/pivot',
  tags: ['relation/usage'],
  summary: 'Relation usage count for all subj x obj category combinations',
  operationId: 'get_relation_usage_pivot_resource',
  request: {
    query: z.object({
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getRelationUsagePivotLabelRoute = createRoute({
  method: 'get',
  path: '/relation/usage/pivot/label',
  tags: ['relation/usage'],
  summary: 'Relation usage count for all subj x obj category combinations, showing label',
  operationId: 'get_relation_usage_pivot_label_resource',
  request: {
    query: z.object({
      subject_taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default',
            in: 'query',
            name: 'subject_taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      evidence: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)\n                    or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.\n                    ',
            in: 'query',
            name: 'evidence',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationResultsSchema) } },
    },
  },
})

export const getSearchEntityAutocompleteTermRoute = createRoute({
  method: 'get',
  path: '/search/entity/autocomplete/{term}',
  tags: ['search'],
  summary: 'Returns list of matching concepts or entities using lexical search',
  operationId: 'get_autocomplete',
  request: {
    params: z.object({
      term: z
        .string()
        .openapi({
          param: { in: 'path', name: 'term', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      fq: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.',
            explode: true,
            in: 'query',
            name: 'fq',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. gene, disease',
            explode: true,
            in: 'query',
            name: 'category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      prefix: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'ontology prefix: HP, -MONDO',
            explode: true,
            in: 'query',
            name: 'prefix',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      include_eqs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include equivalent ids in prefix filter',
            in: 'query',
            name: 'include_eqs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      boost_fx: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'boost function e.g. pow(edges,0.334)',
            explode: true,
            in: 'query',
            name: 'boost_fx',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      boost_q: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'boost query e.g. category:genotype^-10',
            explode: true,
            in: 'query',
            name: 'boost_q',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'taxon filter, eg NCBITaxon:9606, includes inferred taxa',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'row number to start from',
            in: 'query',
            name: 'start',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      highlight_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'highlight class',
            in: 'query',
            name: 'highlight_class',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_match: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimum should match parameter, see solr docs for details',
            in: 'query',
            name: 'min_match',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_groups: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude grouping classes (classes with subclasses)',
            in: 'query',
            name: 'exclude_groups',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      minimal_tokenizer: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'set to true to use the minimal tokenizer, good for variants and genotypes',
            in: 'query',
            name: 'minimal_tokenizer',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AutocompleteResultsSchema } },
    },
  },
})

export const getSearchEntityHpoPlTermRoute = createRoute({
  method: 'get',
  path: '/search/entity/hpo-pl/{term}',
  tags: ['search'],
  summary: 'Returns list of matching concepts or entities using lexical search',
  operationId: 'get_search_hpo_entities',
  request: {
    params: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'search string, e.g. muscle atrophy, frequent infections',
            in: 'path',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 10, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'row number to start from',
            in: 'query',
            name: 'start',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      phenotype_group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'phenotype group id',
            in: 'query',
            name: 'phenotype_group',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phenotype_group_label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'phenotype group label',
            in: 'query',
            name: 'phenotype_group_label',
            schema: { type: 'string' },
            required: false,
          },
        }),
      anatomical_system: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'anatomical system id',
            in: 'query',
            name: 'anatomical_system',
            schema: { type: 'string' },
            required: false,
          },
        }),
      anatomical_system_label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'anatomical system label',
            in: 'query',
            name: 'anatomical_system_label',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highlight_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'highlight class',
            in: 'query',
            name: 'highlight_class',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: LayResultsSchema } } },
  },
})

export const getSearchEntityTermRoute = createRoute({
  method: 'get',
  path: '/search/entity/{term}',
  tags: ['search'],
  summary: 'Returns list of matching concepts or entities using lexical search',
  operationId: 'get_search_entities',
  request: {
    params: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'search string, e.g. shh, parkinson, femur',
            in: 'path',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fq: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.',
            explode: true,
            in: 'query',
            name: 'fq',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      category: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. gene, disease',
            explode: true,
            in: 'query',
            name: 'category',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      prefix: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'ontology prefix: HP, -MONDO',
            explode: true,
            in: 'query',
            name: 'prefix',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      include_eqs: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Include equivalent ids in prefix filter',
            in: 'query',
            name: 'include_eqs',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      boost_fx: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'boost function e.g. pow(edges,0.334)',
            explode: true,
            in: 'query',
            name: 'boost_fx',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      boost_q: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'boost query e.g. category:genotype^-10',
            explode: true,
            in: 'query',
            name: 'boost_q',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      taxon: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'taxon filter, eg NCBITaxon:9606, includes inferred taxa',
            explode: true,
            in: 'query',
            name: 'taxon',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      rows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows',
            in: 'query',
            name: 'rows',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      start: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'row number to start from',
            in: 'query',
            name: 'start',
            schema: { default: '0', type: 'string' },
            required: false,
          },
        }),
      highlight_class: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'highlight class',
            in: 'query',
            name: 'highlight_class',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_match: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'minimum should match parameter, see solr docs for details',
            in: 'query',
            name: 'min_match',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_groups: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude grouping classes (classes with subclasses)',
            in: 'query',
            name: 'exclude_groups',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      minimal_tokenizer: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'set to true to use the minimal tokenizer, good for variants and genotypes',
            in: 'query',
            name: 'minimal_tokenizer',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResultSchema } },
    },
  },
})

export const getSimCompareRoute = createRoute({
  method: 'get',
  path: '/sim/compare',
  tags: ['sim'],
  summary: 'Compare a reference profile vs one profiles',
  operationId: 'get_sim_compare',
  request: {
    query: z.object({
      is_feature_set: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'set to true if *all* input ids are phenotypic features, else set to false',
            in: 'query',
            name: 'is_feature_set',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      metric: z
        .enum(['phenodigm', 'jaccard', 'simGIC', 'resnik', 'symmetric_resnik'])
        .default('phenodigm')
        .exactOptional()
        .openapi({
          param: {
            description: 'Metric for computing similarity',
            explode: true,
            in: 'query',
            name: 'metric',
            schema: {
              default: 'phenodigm',
              enum: ['phenodigm', 'jaccard', 'simGIC', 'resnik', 'symmetric_resnik'],
              type: 'string',
            },
            required: false,
          },
        }),
      ref_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description:
              'A phenotype or identifier that is composed of phenotypes (eg disease, gene)',
            explode: true,
            in: 'query',
            name: 'ref_id',
            schema: { default: [], items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      query_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description:
              'A phenotype or identifier that is composed of phenotypes (eg disease, gene)',
            explode: true,
            in: 'query',
            name: 'query_id',
            schema: { default: [], items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SimResultSchema } } },
  },
})

export const postSimCompareRoute = createRoute({
  method: 'post',
  path: '/sim/compare',
  tags: ['sim'],
  summary: 'Compare a reference profile vs one or more profiles',
  operationId: 'post_sim_compare',
  request: {
    body: { content: { 'application/json': { schema: CompareInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SimResultSchema } } },
  },
})

export const getSimScoreRoute = createRoute({
  method: 'get',
  path: '/sim/score',
  tags: ['sim'],
  summary: 'Get annotation score',
  operationId: 'get_annotation_score',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Phenotype identifier (eg HP:0004935)',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      absent_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description: 'absent phenotype (eg HP:0002828)',
            explode: true,
            in: 'query',
            name: 'absent_id',
            schema: { default: [], items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SufficiencyOutputSchema } },
    },
  },
})

export const postSimScoreRoute = createRoute({
  method: 'post',
  path: '/sim/score',
  tags: ['sim'],
  summary: 'Get annotation score',
  operationId: 'post_annotation_score',
  request: {
    body: {
      content: { 'application/json': { schema: SufficiencyPostInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SufficiencyOutputSchema } },
    },
  },
})

export const getSimSearchRoute = createRoute({
  method: 'get',
  path: '/sim/search',
  tags: ['sim'],
  summary: 'Search for phenotypically similar diseases or model genes',
  operationId: 'get_sim_search',
  request: {
    query: z.object({
      is_feature_set: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'set to true if *all* input ids are phenotypic features, else set to false',
            in: 'query',
            name: 'is_feature_set',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      metric: z
        .enum(['phenodigm', 'jaccard', 'simGIC', 'resnik', 'symmetric_resnik'])
        .default('phenodigm')
        .exactOptional()
        .openapi({
          param: {
            description: 'Metric for computing similarity',
            explode: true,
            in: 'query',
            name: 'metric',
            schema: {
              default: 'phenodigm',
              enum: ['phenodigm', 'jaccard', 'simGIC', 'resnik', 'symmetric_resnik'],
              type: 'string',
            },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .default([])
        .exactOptional()
        .openapi({
          param: {
            description:
              'A phenotype or identifier that is composed of phenotypes (eg disease, gene)',
            explode: true,
            in: 'query',
            name: 'id',
            schema: { default: [], items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of rows, max 500',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      taxon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ncbi taxon id',
            in: 'query',
            name: 'taxon',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SimResultSchema } } },
  },
})

export const getVariationSetIndexRoute = createRoute({
  method: 'get',
  path: '/variation/set/',
  tags: ['variation/set'],
  summary: 'Returns list of variant sets',
  operationId: 'get_variant_sets_collection',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(2),
            z.literal(10),
            z.literal(20),
            z.literal(30),
            z.literal(40),
            z.literal(50),
          ]),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page {error_msg}',
            explode: true,
            in: 'query',
            name: 'per_page',
            schema: { default: 10, enum: [2, 10, 20, 30, 40, 50], type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PageOfVariantSetsSchema } },
    },
  },
})

export const postVariationSetIndexRoute = createRoute({
  method: 'post',
  path: '/variation/set/',
  tags: ['variation/set'],
  summary: 'Creates a new variant set',
  operationId: 'post_variant_sets_collection',
  request: { body: VariantSetRequestBody },
  responses: { 200: { description: 'Success' } },
})

export const getVariationSetAnalyzeIdRoute = createRoute({
  method: 'get',
  path: '/variation/set/analyze/{id}',
  tags: ['variation/set'],
  summary: 'Returns list of matches',
  operationId: 'get_variant_analyze',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AssociationSchema) } },
    },
  },
})

export const getVariationSetArchiveYearMonthDayRoute = createRoute({
  method: 'get',
  path: '/variation/set/archive/{year}/{month}/{day}',
  tags: ['variation/set'],
  summary: 'Returns list of variant sets from a specified time period',
  operationId: 'get_variant_sets_archive_collection',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'year', required: true, schema: { type: 'integer' } },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'month', required: true, schema: { type: 'integer' } },
        }),
      day: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'day', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(2),
            z.literal(10),
            z.literal(20),
            z.literal(30),
            z.literal(40),
            z.literal(50),
          ]),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Results per page {error_msg}',
            explode: true,
            in: 'query',
            name: 'per_page',
            schema: { default: 10, enum: [2, 10, 20, 30, 40, 50], type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PageOfVariantSetsSchema } },
    },
  },
})

export const getVariationSetIdRoute = createRoute({
  method: 'get',
  path: '/variation/set/{id}',
  tags: ['variation/set'],
  summary: 'Returns a variant set',
  operationId: 'get_variant_set_item',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: VariantSetSchema } } },
    404: { description: 'VariantSet not found.' },
  },
})

export const putVariationSetIdRoute = createRoute({
  method: 'put',
  path: '/variation/set/{id}',
  tags: ['variation/set'],
  summary: 'Updates a variant set',
  operationId: 'put_variant_set_item',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: VariantSetRequestBody,
  },
  responses: {
    204: { description: 'VariantSet successfully updated.' },
    404: { description: 'VariantSet not found.' },
  },
})

export const deleteVariationSetIdRoute = createRoute({
  method: 'delete',
  path: '/variation/set/{id}',
  tags: ['variation/set'],
  summary: 'Deletes variant set',
  operationId: 'delete_variant_set_item',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'VariantSet successfully deleted.' },
    404: { description: 'VariantSet not found.' },
  },
})
