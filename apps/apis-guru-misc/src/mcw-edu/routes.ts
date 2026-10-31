import { createRoute, z } from '@hono/zod-openapi'

const AnnotatedGeneRequestSchema = z
  .object({
    accId: z.string().exactOptional(),
    evidenceCodes: z.array(z.string()).exactOptional(),
    speciesTypeKeys: z.array(z.int32()).exactOptional(),
  })
  .openapi({ title: 'AnnotatedGeneRequest', required: [] })
  .openapi('AnnotatedGeneRequest')

const AnnotationSchema = z
  .object({
    annotatedObjectRgdId: z.int32().exactOptional(),
    annotationExtension: z.string().exactOptional(),
    aspect: z.string().exactOptional(),
    createdBy: z.int32().exactOptional(),
    createdDate: z.iso.datetime({ offset: true }).exactOptional(),
    dataSrc: z.string().exactOptional(),
    evidence: z.string().exactOptional(),
    geneProductFormId: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    lastModifiedBy: z.int32().exactOptional(),
    lastModifiedDate: z.iso.datetime({ offset: true }).exactOptional(),
    notes: z.string().exactOptional(),
    objectName: z.string().exactOptional(),
    objectSymbol: z.string().exactOptional(),
    originalCreatedDate: z.iso.datetime({ offset: true }).exactOptional(),
    qualifier: z.string().exactOptional(),
    refRgdId: z.int32().exactOptional(),
    relativeTo: z.string().exactOptional(),
    rgdObjectKey: z.int32().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    term: z.string().exactOptional(),
    termAcc: z.string().exactOptional(),
    withInfo: z.string().exactOptional(),
    xrefSource: z.string().exactOptional(),
  })
  .openapi({ title: 'Annotation', required: [] })
  .openapi('Annotation')

const AnnotationRequestSchema = z
  .object({
    evidenceCodes: z.array(z.string()).exactOptional(),
    ids: z.array(z.string()).exactOptional(),
    speciesTypeKeys: z.array(z.int32()).exactOptional(),
    termAcc: z.string().exactOptional(),
  })
  .openapi({ title: 'AnnotationRequest', required: [] })
  .openapi('AnnotationRequest')

const ChromosomeSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    contigCount: z.int32().exactOptional(),
    gapCount: z.int32().exactOptional(),
    gapLength: z.int32().exactOptional(),
    genbankId: z.string().exactOptional(),
    mapKey: z.int32().exactOptional(),
    ordinalNumber: z.int32().exactOptional(),
    refseqId: z.string().exactOptional(),
    seqLength: z.int32().exactOptional(),
  })
  .openapi({ title: 'Chromosome', required: [] })
  .openapi('Chromosome')

const EnrichmentGeneRequestSchema = z
  .object({
    accId: z.string().exactOptional(),
    geneSymbols: z.array(z.string()).exactOptional(),
    species: z.string().exactOptional(),
  })
  .openapi({ title: 'EnrichmentGeneRequest', required: [] })
  .openapi('EnrichmentGeneRequest')

const EnrichmentRequestSchema = z
  .object({
    aspect: z.string().exactOptional(),
    genes: z.array(z.string()).exactOptional(),
    species: z.string().exactOptional(),
  })
  .openapi({ title: 'EnrichmentRequest', required: [] })
  .openapi('EnrichmentRequest')

const GeneSchema = z
  .object({
    agrDescription: z.string().exactOptional(),
    description: z.string().exactOptional(),
    ensemblFullName: z.string().exactOptional(),
    ensemblGeneSymbol: z.string().exactOptional(),
    ensemblGeneType: z.string().exactOptional(),
    geneSource: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    mergedDescription: z.string().exactOptional(),
    name: z.string().exactOptional(),
    ncbiAnnotStatus: z.string().exactOptional(),
    nomenReviewDate: z.iso.datetime({ offset: true }).exactOptional(),
    nomenSource: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    refSeqStatus: z.string().exactOptional(),
    rgdId: z.int32().exactOptional(),
    soAccId: z.string().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    symbol: z.string().exactOptional(),
    type: z.string().exactOptional(),
    variant: z.boolean().exactOptional(),
  })
  .openapi({ title: 'Gene', required: [] })
  .openapi('Gene')

const MapSchema = z
  .object({
    dbsnpVersion: z.string().exactOptional(),
    description: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    methodKey: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    primaryRefAssembly: z.boolean().exactOptional(),
    rank: z.int32().exactOptional(),
    refSeqAssemblyAcc: z.string().exactOptional(),
    refSeqAssemblyName: z.string().exactOptional(),
    rgdId: z.int32().exactOptional(),
    source: z.string().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    ucscAssemblyId: z.string().exactOptional(),
    unit: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ title: 'Map', required: [] })
  .openapi('Map')

const MapPairSchema = z
  .object({ keyValue: z.string().exactOptional(), stringValue: z.string().exactOptional() })
  .openapi({ title: 'MapPair', required: [] })
  .openapi('MapPair')

const MappedGeneSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    gene: GeneSchema.exactOptional(),
    mapKey: z.int32().exactOptional(),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stop: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    strand: z.string().exactOptional(),
  })
  .openapi({ title: 'MappedGene', required: [] })
  .openapi('MappedGene')

const MappedGenePositionSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    mapKey: z.int32().exactOptional(),
    rgdId: z.int32().exactOptional(),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stop: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    strand: z.string().exactOptional(),
    symbol: z.string().exactOptional(),
  })
  .openapi({ title: 'MappedGenePosition', required: [] })
  .openapi('MappedGenePosition')

const QTLSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    flank1RgdId: z.int32().exactOptional(),
    flank2RgdId: z.int32().exactOptional(),
    inheritanceType: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    linkageImage: z.string().exactOptional(),
    lod: z.float64().exactOptional(),
    lodImage: z.string().exactOptional(),
    mostSignificantCmoTerm: z.string().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    peakOffset: z.int32().exactOptional(),
    peakRgdId: z.int32().exactOptional(),
    pvalue: z.float64().exactOptional(),
    rgdId: z.int32().exactOptional(),
    sourceUrl: z.string().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    symbol: z.string().exactOptional(),
    variance: z.float64().exactOptional(),
  })
  .openapi({ title: 'QTL', required: [] })
  .openapi('QTL')

const MappedQTLSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    mapKey: z.int32().exactOptional(),
    qtl: QTLSchema.exactOptional(),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stop: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    strand: z.string().exactOptional(),
  })
  .openapi({ title: 'MappedQTL', required: [] })
  .openapi('MappedQTL')

const SSLPSchema = z
  .object({
    expectedSize: z.int32().exactOptional(),
    forwardSeq: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    reverseSeq: z.string().exactOptional(),
    rgdId: z.int32().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    sslpType: z.string().exactOptional(),
    templateSeq: z.string().exactOptional(),
  })
  .openapi({ title: 'SSLP', required: [] })
  .openapi('SSLP')

const MappedSSLPSchema = z
  .object({
    chromosome: z.string().exactOptional(),
    mapKey: z.int32().exactOptional(),
    sslp: SSLPSchema.exactOptional(),
    start: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stop: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    strand: z.string().exactOptional(),
  })
  .openapi({ title: 'MappedSSLP', required: [] })
  .openapi('MappedSSLP')

const OrthologRequestSchema = z
  .object({
    rgdIds: z.array(z.int32()).exactOptional(),
    speciesTypeKeys: z.array(z.int32()).exactOptional(),
  })
  .openapi({ title: 'OrthologRequest', required: [] })
  .openapi('OrthologRequest')

const PathwayObjectSchema = z
  .object({
    accId: z.string().exactOptional(),
    id: z.string().exactOptional(),
    objDesc: z.string().exactOptional(),
    objName: z.string().exactOptional(),
    typeId: z.int32().exactOptional(),
    typeName: z.string().exactOptional(),
    url: z.string().exactOptional(),
    xdb_key: z.int32().exactOptional(),
  })
  .openapi({ title: 'PathwayObject', required: [] })
  .openapi('PathwayObject')

const ReferenceSchema = z
  .object({
    citation: z.string().exactOptional(),
    doi: z.string().exactOptional(),
    editors: z.string().exactOptional(),
    issue: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    notes: z.string().exactOptional(),
    pages: z.string().exactOptional(),
    pubDate: z.iso.datetime({ offset: true }).exactOptional(),
    pubStatus: z.string().exactOptional(),
    publication: z.string().exactOptional(),
    publisher: z.string().exactOptional(),
    publisherCity: z.string().exactOptional(),
    refAbstract: z.string().exactOptional(),
    referenceType: z.string().exactOptional(),
    rgdId: z.int32().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    title: z.string().exactOptional(),
    urlWebReference: z.string().exactOptional(),
    volume: z.string().exactOptional(),
  })
  .openapi({ title: 'Reference', required: [] })
  .openapi('Reference')

const PathwaySchema = z
  .object({
    description: z.string().exactOptional(),
    hasAlteredPath: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    objectList: z.array(PathwayObjectSchema).exactOptional(),
    pathwayCategories: z.array(z.string()).exactOptional(),
    referenceList: z.array(ReferenceSchema).exactOptional(),
  })
  .openapi({ title: 'Pathway', required: [] })
  .openapi('Pathway')

const RGDIDListRequestSchema = z
  .object({ rgdIds: z.array(z.int32()).exactOptional() })
  .openapi({ title: 'RGDIDListRequest', required: [] })
  .openapi('RGDIDListRequest')

const StatusSchema = z
  .object({
    cryopreservedEmbryo: z.boolean().exactOptional(),
    cryopreservedSperm: z.boolean().exactOptional(),
    cryorecovery: z.boolean().exactOptional(),
    key: z.int32().exactOptional(),
    liveAnimals: z.boolean().exactOptional(),
    statusDate: z.iso.datetime({ offset: true }).exactOptional(),
    strainRgdId: z.int32().exactOptional(),
  })
  .openapi({ title: 'Status', required: [] })
  .openapi('Status')

const StrainSchema = z
  .object({
    backgroundStrainRgdId: z.int32().exactOptional(),
    chrAltered: z.string().exactOptional(),
    color: z.string().exactOptional(),
    geneticStatus: z.string().exactOptional(),
    genetics: z.string().exactOptional(),
    imageUrl: z.string().exactOptional(),
    inbredGen: z.string().exactOptional(),
    key: z.int32().exactOptional(),
    lastStatus: z.string().exactOptional(),
    lastStatusObject: StatusSchema.exactOptional(),
    modificationMethod: z.string().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    origin: z.string().exactOptional(),
    researchUse: z.string().exactOptional(),
    rgdId: z.int32().exactOptional(),
    source: z.string().exactOptional(),
    speciesTypeKey: z.int32().exactOptional(),
    statusLog: z.array(StatusSchema).exactOptional(),
    strain: z.string().exactOptional(),
    strainTypeName: z.string().exactOptional(),
    substrain: z.string().exactOptional(),
    symbol: z.string().exactOptional(),
  })
  .openapi({ title: 'Strain', required: [] })
  .openapi('Strain')

const TermXRefSchema = z
  .object({
    key: z.int32().exactOptional(),
    termAcc: z.string().exactOptional(),
    xrefDescription: z.string().exactOptional(),
    xrefValue: z.string().exactOptional(),
  })
  .openapi({ title: 'TermXRef', required: [] })
  .openapi('TermXRef')

const TermSchema = z
  .object({
    accId: z.string().exactOptional(),
    comment: z.string().exactOptional(),
    createdBy: z.string().exactOptional(),
    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
    definition: z.string().exactOptional(),
    modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    obsolete: z.int32().exactOptional(),
    ontologyId: z.string().exactOptional(),
    term: z.string().exactOptional(),
    xrefs: z.array(TermXRefSchema).exactOptional(),
  })
  .openapi({ title: 'Term', required: [] })
  .openapi('Term')

const RGDIDListRequestRequestBody = {
  description: 'data',
  content: { 'application/json': { schema: RGDIDListRequestSchema } },
}

export const getAgrAffectedGenomicModelsTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/affectedGenomicModels/{taxonId}',
  tags: ['AGR'],
  summary:
    'Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId',
  operationId: 'getAffectedGenomicModelsUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAgrAllelesTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/alleles/{taxonId}',
  tags: ['AGR'],
  summary: 'Get gene allele records submitted by RGD to AGR by taxonId',
  operationId: 'getAllelesForTaxonUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAgrExpressionTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/expression/{taxonId}',
  tags: ['AGR'],
  summary: 'Get expression annotations submitted by RGD to AGR by taxonId',
  operationId: 'getExpressionForTaxonUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAgrPhenotypesTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/phenotypes/{taxonId}',
  tags: ['AGR'],
  summary: 'Get phenotype annotations submitted by RGD to AGR by taxonId',
  operationId: 'getPhenotypesForTaxonUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAgrVariantsTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/variants/{taxonId}',
  tags: ['AGR'],
  summary: 'Get basic variant records submitted by RGD to AGR by taxonId',
  operationId: 'getVariantsForTaxonUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAgrTaxonIdRoute = createRoute({
  method: 'get',
  path: '/agr/{taxonId}',
  tags: ['AGR'],
  summary: 'Get gene records submitted by RGD to AGR by taxonId',
  operationId: 'getGenesForLatestAssemblyUsingGET',
  request: {
    params: z.object({
      taxonId: z
        .string()
        .openapi({
          param: {
            description: 'The taxon ID for species',
            in: 'path',
            name: 'taxonId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAnnotationsIndexRoute = createRoute({
  method: 'post',
  path: '/annotations/',
  tags: ['Annotation'],
  summary: 'Return a list of genes annotated to an ontology term',
  operationId: 'getAnnotationsUsingPOST',
  request: {
    body: {
      description: 'data',
      content: { 'application/json': { schema: AnnotationRequestSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsAccIdRgdIdRoute = createRoute({
  method: 'get',
  path: '/annotations/accId/{rgdId}',
  tags: ['Annotation'],
  summary: 'Returns a list ontology term accession IDs annotated to an rgd object',
  operationId: 'getTermAccIdsUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MapPairSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsCountAccIdIncludeChildrenRoute = createRoute({
  method: 'get',
  path: '/annotations/count/{accId}/{includeChildren}',
  tags: ['Annotation'],
  summary: 'Returns annotation count for ontology accession ID',
  operationId: 'getAnnotationCountByAccIdUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology term accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      includeChildren: z
        .stringbool()
        .openapi({
          param: {
            description:
              'true: return annotations for the term and children, false: return annotations for the term only ',
            in: 'path',
            name: 'includeChildren',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.int32() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenRoute = createRoute({
  method: 'get',
  path: '/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}',
  tags: ['Annotation'],
  summary: 'Returns annotation count for ontology accession ID and speicies',
  operationId: 'getAnnotationCountByAccIdAndSpeciesUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology term accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of species type keys can be found using the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeChildren: z
        .stringbool()
        .openapi({
          param: {
            description:
              'true: return annotations for the term and children, false: return annotations for the term only ',
            in: 'path',
            name: 'includeChildren',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.int32() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsCountAccIdSpeciesTypeKeyIncludeChildrenObjectTypeRoute = createRoute({
  method: 'get',
  path: '/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}/{objectType}',
  tags: ['Annotation'],
  summary: 'Returns annotation count for ontology accession ID and object type',
  operationId: 'getAnnotationCountByAccIdAndObjectTypeUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology term accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of species type keys can be found using the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeChildren: z
        .stringbool()
        .openapi({
          param: {
            description:
              'true: return annotations for the term and children, false: return annotations for the term only ',
            in: 'path',
            name: 'includeChildren',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      objectType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of object types can be found using the lookup service',
            in: 'path',
            name: 'objectType',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.int32() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsReferenceRefRgdIdRoute = createRoute({
  method: 'get',
  path: '/annotations/reference/{refRgdId}',
  tags: ['Annotation'],
  summary: 'Returns a list of annotations for a reference',
  operationId: 'getAnnotsByRefrerenceUsingGET',
  request: {
    params: z.object({
      refRgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Reference RGD ID',
            in: 'path',
            name: 'refRgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsRgdIdRgdIdRoute = createRoute({
  method: 'get',
  path: '/annotations/rgdId/{rgdId}',
  tags: ['Annotation'],
  summary: 'Returns a list of annotations by RGD ID',
  operationId: 'getAnnotationsByRgdIdUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsRgdIdRgdIdOntologyPrefixRoute = createRoute({
  method: 'get',
  path: '/annotations/rgdId/{rgdId}/{ontologyPrefix}',
  tags: ['Annotation'],
  summary: 'Returns a list of annotations by RGD ID and ontology prefix',
  operationId: 'getAnnotationsByRgdIdAndOntologyUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ontologyPrefix: z
        .string()
        .openapi({
          param: {
            description:
              'Ontology Prefix.  The prefix can be found left of the semicolon in an ontology term accession ID.  As an example, term accession PW:0000034 has the ontology prefix PW',
            in: 'path',
            name: 'ontologyPrefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsAccIdRgdId2Route = createRoute({
  method: 'get',
  path: '/annotations/{accId}/{rgdId}',
  tags: ['Annotation'],
  summary: 'Returns a list of annotations by RGD ID and ontology term accession ID',
  operationId: 'getAnnotationsByAccIdAndRgdIdUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology Term Accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAnnotationsAccIdSpeciesTypeKeyIncludeChildrenRoute = createRoute({
  method: 'get',
  path: '/annotations/{accId}/{speciesTypeKey}/{includeChildren}',
  tags: ['Annotation'],
  summary: "Returns a list annotations for an ontology term or a term and it's children",
  operationId: 'getAnnotationsUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology term accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of species type keys can be found using the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      includeChildren: z
        .stringbool()
        .openapi({
          param: {
            description:
              'true: return annotations for the term and children, false: return annotations for the term only ',
            in: 'path',
            name: 'includeChildren',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(AnnotationSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postEnrichmentAnnotatedGenesRoute = createRoute({
  method: 'post',
  path: '/enrichment/annotatedGenes',
  tags: ['enrichment-web-service'],
  summary:
    'Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology',
  operationId: 'getEnrichmentDataUsingPOST',
  request: {
    body: {
      description: 'geneRequest',
      content: { 'application/json': { schema: EnrichmentGeneRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.object({}) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postEnrichmentDataRoute = createRoute({
  method: 'post',
  path: '/enrichment/data',
  tags: ['enrichment-web-service'],
  summary:
    'Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group',
  operationId: 'getEnrichmentDataUsingPOST_1',
  request: {
    body: {
      description: 'enrichmentRequest',
      content: { 'application/json': { schema: EnrichmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.object({}) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesAffyIdAffyIdSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/affyId/{affyId}/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes for an affymetrix ID',
  operationId: 'getGenesByAffyIdUsingGET',
  request: {
    params: z.object({
      affyId: z
        .string()
        .openapi({
          param: {
            description: 'Affymetrix ID',
            in: 'path',
            name: 'affyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesAliasAliasSymbolSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/alias/{aliasSymbol}/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes for an alias and species',
  operationId: 'getGenesByAliasSymbolUsingGET',
  request: {
    params: z.object({
      aliasSymbol: z
        .string()
        .openapi({
          param: {
            description: 'Gene alias symbol',
            in: 'path',
            name: 'aliasSymbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesAlleleRgdIdRoute = createRoute({
  method: 'get',
  path: '/genes/allele/{rgdId}',
  tags: ['Gene'],
  summary: 'Return a list of gene alleles',
  operationId: 'getGeneAllelesUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID of gene',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postGenesAnnotationRoute = createRoute({
  method: 'post',
  path: '/genes/annotation',
  tags: ['Gene'],
  summary: 'Return a list of genes annotated to an ontology term',
  operationId: 'getAnnotatedGenesUsingPOST',
  request: {
    body: {
      description: 'data',
      content: { 'application/json': { schema: AnnotatedGeneRequestSchema } },
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesAnnotationAccIdRoute = createRoute({
  method: 'get',
  path: '/genes/annotation/{accId}',
  tags: ['Gene'],
  summary: 'Return a list of genes annotated to an ontology term',
  operationId: 'getAllAnnotatedGenesUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Accesstion ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesAnnotationAccIdSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/annotation/{accId}/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes annotated to an ontology term',
  operationId: 'getGenesAnnotatedUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Ontology term accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Species type key.  A list of species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesKeywordKeywordSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/keyword/{keyword}/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes by keyword and species type key',
  operationId: 'getGenesByKeywordUsingGET',
  request: {
    params: z.object({
      keyword: z
        .string()
        .openapi({
          param: {
            description: 'Search keyword',
            in: 'path',
            name: 'keyword',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Species type key.  A list of species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesMapMapKeyRoute = createRoute({
  method: 'get',
  path: '/genes/map/{mapKey}',
  tags: ['Gene'],
  summary: 'Return a list of all genes with position information for an assembly',
  operationId: 'getGeneByMapKeyUsingGET',
  request: {
    params: z.object({
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD assembly map keys can be found in the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MappedGeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesMappedChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/genes/mapped/{chr}/{start}/{stop}/{mapKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes position and map key',
  operationId: 'getMappedGenesByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD assembly map keys can be found in the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MappedGeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postGenesOrthologsRoute = createRoute({
  method: 'post',
  path: '/genes/orthologs',
  tags: ['Gene'],
  summary: 'Return a list of gene orthologs',
  operationId: 'getOrthologsByListUsingPOST',
  request: {
    body: {
      description: 'orthologRequest',
      content: { 'application/json': { schema: OrthologRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.record(z.string(), z.array(GeneSchema)) } },
    },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesOrthologsRgdIdRoute = createRoute({
  method: 'get',
  path: '/genes/orthologs/{rgdId}',
  tags: ['Gene'],
  summary: 'Return a list of gene orthologs',
  operationId: 'getGeneOrthologsUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID of a gene',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesRegionChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/genes/region/{chr}/{start}/{stop}/{mapKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes in region',
  operationId: 'getGenesInRegionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD assembly map keys can be found in the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MappedGenePositionSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesSpeciesSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/species/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Return a list of all genes for a species in RGD',
  operationId: 'getGenesBySpeciesUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/genes/{chr}/{start}/{stop}/{mapKey}',
  tags: ['Gene'],
  summary: 'Return a list of genes position and map key',
  operationId: 'getGenesByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of RGD assembly map keys can be found in the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(GeneSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesRgdIdRoute = createRoute({
  method: 'get',
  path: '/genes/{rgdId}',
  tags: ['Gene'],
  summary: 'Get a gene record by RGD ID',
  operationId: 'getGeneByRgdIdUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The RGD ID of a Gene in RGD',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: GeneSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getGenesSymbolSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/genes/{symbol}/{speciesTypeKey}',
  tags: ['Gene'],
  summary: 'Get a gene record by symbol and species type key',
  operationId: 'getGeneBySymbolUsingGET',
  request: {
    params: z.object({
      symbol: z
        .string()
        .openapi({
          param: {
            description: 'Gene Symbol',
            in: 'path',
            name: 'symbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Species type key.  A list of species type keys can be found in the lookup service',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: GeneSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupGeneTypesRoute = createRoute({
  method: 'get',
  path: '/lookup/geneTypes',
  tags: ['Lookup'],
  summary: 'Returns a list of gene types avialable in RGD',
  operationId: 'getGeneTypesUsingGET',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapEnsemblGeneRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/EnsemblGene',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to Ensembl Gene IDs',
  operationId: 'getEnsemblGeneMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapEnsemblGeneRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/EnsemblGene/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an Ensembl Gene  ID',
  operationId: 'getEnsemblGeneMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapEnsemblProteinRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/EnsemblProtein',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to Ensembl Protein IDs',
  operationId: 'getEnsemblProteinMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapEnsemblProteinRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/EnsemblProtein/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an Ensembl Protein ID',
  operationId: 'getEnsemblProteinMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapEnsemblTranscriptRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/EnsemblTranscript',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to Ensembl Transcript IDs',
  operationId: 'getEnsemblTranscriptMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapEnsemblTranscriptRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/EnsemblTranscript/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an Ensembl Transcript ID',
  operationId: 'getEnsemblTranscriptMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapGTExRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/GTEx',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to GTEx IDs',
  operationId: 'getGTEXMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapGTExRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/GTEx/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an GTEx ID',
  operationId: 'getGTEXMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapGenBankNucleotideRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/GenBankNucleotide',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to GenBank Nucleotide IDs',
  operationId: 'getGenBankNucleotideMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapGenBankNucleotideRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/GenBankNucleotide/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to a GenBank Nucleotide ID',
  operationId: 'getGenBankNucleotideMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapGenBankProteinRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/GenBankProtein',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to GenBank Protein IDs',
  operationId: 'getGenBankProteinMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapGenBankProteinRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/GenBankProtein/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to a GenBank Protein ID',
  operationId: 'getGenBankProteinMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapHGNCRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/HGNC',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to HGNC IDs',
  operationId: 'getHGNCMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapHGNCRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/HGNC/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an HGNC ID',
  operationId: 'getHGNCMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapMGIRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/MGI',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to MGI IDs',
  operationId: 'getMGIMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapMGIRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/MGI/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an MGI ID',
  operationId: 'getMGIMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapNCBIGeneRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/NCBIGene',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to NCBI Gene IDs',
  operationId: 'getNCBIGeneMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapNCBIGeneRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/NCBIGene/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to an NCBI Gene ID',
  operationId: 'getNCBIGeneMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postLookupIdMapUniProtRoute = createRoute({
  method: 'post',
  path: '/lookup/id/map/UniProt',
  tags: ['Lookup'],
  summary: 'Translate RGD IDs to UniProt IDs',
  operationId: 'getUniProtMappingUsingPOST',
  request: { body: RGDIDListRequestRequestBody },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    201: { description: 'Created' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupIdMapUniProtRgdIdRoute = createRoute({
  method: 'get',
  path: '/lookup/id/map/UniProt/{rgdId}',
  tags: ['Lookup'],
  summary: 'Translate an RGD ID to a UniProt ID',
  operationId: 'getUniProtMappingUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupMapsSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/lookup/maps/{speciesTypeKey}',
  tags: ['Lookup'],
  summary: 'Return a list assembly maps for a species',
  operationId: 'getMapsUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'RGD species type key. A full list of keys is available throught the lookup service.  1=human, 2=mouse, 3=rat,ect',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MapSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupSpeciesTypeKeysRoute = createRoute({
  method: 'get',
  path: '/lookup/speciesTypeKeys',
  tags: ['Lookup'],
  summary: 'Return a Map of species type keys available in RGD',
  operationId: 'getSpeciesTypesUsingGET',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.object({}) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getLookupStandardUnitAccIdRoute = createRoute({
  method: 'get',
  path: '/lookup/standardUnit/{accId}',
  tags: ['Lookup'],
  summary: 'Return a standardUnit for an ontology if it exists',
  operationId: 'getMapsUsingGET_1',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'RGD term acc',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMapsChrChromosomeMapKeyRoute = createRoute({
  method: 'get',
  path: '/maps/chr/{chromosome}/{mapKey}',
  tags: ['Chromosome', 'Map'],
  summary: 'Return a list of chromosomes',
  operationId: 'getChromosomeByAssemblyUsingGET',
  request: {
    params: z.object({
      chromosome: z
        .string()
        .openapi({
          param: {
            description: 'chromosome',
            in: 'path',
            name: 'chromosome',
            required: true,
            schema: { type: 'string' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'mapKey',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ChromosomeSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMapsChrMapKeyRoute = createRoute({
  method: 'get',
  path: '/maps/chr/{mapKey}',
  tags: ['Chromosome', 'Map'],
  summary: 'Return a list of chromosomes',
  operationId: 'getChromosomesByAssemblyUsingGET',
  request: {
    params: z.object({
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'mapKey',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMapsSpeciesTypeKeyRoute = createRoute({
  method: 'get',
  path: '/maps/{speciesTypeKey}',
  tags: ['Map'],
  summary: 'Return a list of assemblies',
  operationId: 'getMapsBySpeciesUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'species Key',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MapSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getOntologyOntAccIdRoute = createRoute({
  method: 'get',
  path: '/ontology/ont/{accId}',
  tags: ['Ontology'],
  summary: 'Returns child and parent terms for Accession ID',
  operationId: 'getOntDagsUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.record(z.string(), z.array(z.string())) } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getOntologyTermAccId1AccId2Route = createRoute({
  method: 'get',
  path: '/ontology/term/{accId1}/{accId2}',
  tags: ['Ontology'],
  summary: 'Returns true or false for terms',
  operationId: 'isDescendantOfUsingGET',
  request: {
    params: z.object({
      accId1: z
        .string()
        .openapi({
          param: {
            description: 'Child Term Accession ID',
            in: 'path',
            name: 'accId1',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accId2: z
        .string()
        .openapi({
          param: {
            description: 'Parent Term Accession ID',
            in: 'path',
            name: 'accId2',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getOntologyTermAccIdRoute = createRoute({
  method: 'get',
  path: '/ontology/term/{accId}',
  tags: ['Ontology'],
  summary: 'Returns term for Accession ID',
  operationId: 'getTermUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'Term Accession ID',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TermSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPathwaysDiagramsSearchSearchStringRoute = createRoute({
  method: 'get',
  path: '/pathways/diagrams/search/{searchString}',
  tags: ['Pathway'],
  summary: 'Return a list of pathways based on search term',
  operationId: 'searchPathwaysUsingGET',
  request: {
    params: z.object({
      searchString: z
        .string()
        .openapi({
          param: {
            description: 'Free text search string',
            in: 'path',
            name: 'searchString',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(PathwaySchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPathwaysDiagramsForCategoryCategoryRoute = createRoute({
  method: 'get',
  path: '/pathways/diagramsForCategory/{category}',
  tags: ['Pathway'],
  summary: 'Return a list of pathways based on category provided',
  operationId: 'getPathwaysWithDiagramsForCategoryUsingGET',
  request: {
    params: z.object({
      category: z
        .string()
        .openapi({
          param: {
            description: 'Pathway Category',
            in: 'path',
            name: 'category',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(PathwaySchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPhenotypePhenominerChartSpeciesTypeKeyRefRgdIdTermStringRoute = createRoute({
  method: 'get',
  path: '/phenotype/phenominer/chart/{speciesTypeKey}/{refRgdId}/{termString}',
  tags: ['Quantitative Phenotype'],
  summary:
    'Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.',
  operationId: 'getChartInfoUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Species Type Key - 3=rat 4=chinchilla ',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      refRgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Reference RGD ID for a study',
            in: 'path',
            name: 'refRgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      termString: z
        .string()
        .openapi({
          param: {
            description: 'List of term accession IDs',
            in: 'path',
            name: 'termString',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getPhenotypePhenominerChartSpeciesTypeKeyTermStringRoute = createRoute({
  method: 'get',
  path: '/phenotype/phenominer/chart/{speciesTypeKey}/{termString}',
  tags: ['Quantitative Phenotype'],
  summary:
    'Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)',
  operationId: 'getChartInfoUsingGET_1',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Species Type Key - 3=rat 4=chinchilla ',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      termString: z
        .string()
        .openapi({
          param: {
            description: 'List of term accession IDs',
            in: 'path',
            name: 'termString',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.object({})) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getQtlsMappedChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/qtls/mapped/{chr}/{start}/{stop}/{mapKey}',
  tags: ['QTL'],
  summary: 'Returns a list QTL for given position and assembly map',
  operationId: 'getMappedQTLByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of assembly map keys can be found using the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MappedQTLSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getQtlsChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/qtls/{chr}/{start}/{stop}/{mapKey}',
  tags: ['QTL'],
  summary: 'Returns a list QTL for given position and assembly map',
  operationId: 'getQtlListByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of assembly map keys can be found using the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(QTLSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getQtlsRgdIdRoute = createRoute({
  method: 'get',
  path: '/qtls/{rgdId}',
  tags: ['QTL'],
  summary: 'Return a QTL for provided RGD ID',
  operationId: 'getQTLByRgdIdUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: QTLSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getSslpsMappedChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/sslps/mapped/{chr}/{start}/{stop}/{mapKey}',
  tags: ['SSLP'],
  summary: 'Returns a list SSLP for given position and assembly map',
  operationId: 'getMappedSSLPByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'A list of assembly map keys can be found using the lookup service',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(MappedSSLPSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountActiveObjectSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/activeObject/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of active objects by type, for specified species and date',
  operationId: 'getActiveObjectCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountGeneTypeSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/geneType/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of gene types, for specified species and date',
  operationId: 'getGeneTypeCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountObjectStatusSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/objectStatus/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of objects with given status, for specified species and date',
  operationId: 'getObjectStatusCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountObjectWithRefSeqSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/objectWithRefSeq/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary:
    'Count of objects with reference sequence(s), by object type, for specified species and date',
  operationId: 'getObjectsWithRefSeqCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountObjectWithReferenceSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/objectWithReference/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of objects with reference, by object type, for specified species and date',
  operationId: 'getObjectsWithReferenceCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountObjectWithXdbSpeciesTypeKeyObjectKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary:
    'Count of objects with external database ids, by database id, for specified species, object type and date',
  operationId: 'getObjectsWithXDBsCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      objectKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'objectKey',
            in: 'path',
            name: 'objectKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountProteinInteractionSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/proteinInteraction/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of protein interactions, for specified species and date',
  operationId: 'getProteinInteractionCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountQtlInheritanceTypeSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/qtlInheritanceType/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of strains, by qtl inheritance type, for specified species and date',
  operationId: 'getQtlInheritanceTypeCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountRetiredObjectSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/retiredObject/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of retired objects by type, for specified species and date',
  operationId: 'getRetiredObjectCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountStrainTypeSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/strainType/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of strain types, for specified species and date',
  operationId: 'getStrainTypeCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountWithdrawnObjectSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/withdrawnObject/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of withdrawn objects by type, for specified species and date',
  operationId: 'getWithdrawnObjectCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsCountXdbSpeciesTypeKeyDateYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/count/xdb/{speciesTypeKey}/{dateYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count of external database ids, for specied species and date',
  operationId: 'getXdbsCountUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateYYYYMMDD',
            in: 'path',
            name: 'dateYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsDiffActiveObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/activeObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary: 'Count difference of active objects, by type, for specified species and date range',
    operationId: 'getActiveObjectDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffGeneTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/diff/geneType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count difference of gene types, for specified species and date range',
  operationId: 'getGeneTypeDiffUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateFromYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateFromYYYYMMDD',
            in: 'path',
            name: 'dateFromYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dateToYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateToYYYYMMDD',
            in: 'path',
            name: 'dateToYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsDiffObjectStatusSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/objectStatus/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary: 'Count difference of objects with given status, for specified species and date range',
    operationId: 'getObjectStatusDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffObjectWithRefSeqSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/objectWithRefSeq/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary:
      'Count difference of objects with reference sequence(s), by object type, for specified species and date range',
    operationId: 'getObjectsWithRefSeqDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffObjectWithReferenceSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/objectWithReference/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary:
      'Count difference of objects with reference, by object type, for specified species and date range',
    operationId: 'getObjectsWithReferenceDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffObjectWithXdbSpeciesTypeKeyObjectKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary:
      'Count difference of objects with external database ids, by database id, for specified species, object type and date range',
    operationId: 'getObjectsWithXDBsDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        objectKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'objectKey',
              in: 'path',
              name: 'objectKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffProteinInteractionSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/proteinInteraction/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary: 'Count difference of protein interactions, for specified species and date range',
    operationId: 'getProteinInteractionDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffQtlInheritanceTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/qtlInheritanceType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary:
      'Count difference of strains, by qtl inheritance type, for specified species and date range',
    operationId: 'getQtlInheritanceTypeDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffRetiredObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/retiredObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary: 'Count difference of retired objects, by type, for specified species and date range',
    operationId: 'getRetiredObjectDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffStrainTypeSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/diff/strainType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count difference of strain types, for specified species and date range',
  operationId: 'getStrainTypeDiffUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateFromYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateFromYYYYMMDD',
            in: 'path',
            name: 'dateFromYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dateToYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateToYYYYMMDD',
            in: 'path',
            name: 'dateToYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsDiffWithdrawnObjectSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute =
  createRoute({
    method: 'get',
    path: '/stats/diff/withdrawnObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
    tags: ['Statistics'],
    summary: 'Count difference of withdrawn objects, by type, for specified species and date range',
    operationId: 'getWithdrawnObjectDiffUsingGET',
    request: {
      params: z.object({
        speciesTypeKey: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'speciesTypeKey',
              in: 'path',
              name: 'speciesTypeKey',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        dateFromYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateFromYYYYMMDD',
              in: 'path',
              name: 'dateFromYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
        dateToYYYYMMDD: z
          .string()
          .openapi({
            param: {
              description: 'dateToYYYYMMDD',
              in: 'path',
              name: 'dateToYYYYMMDD',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getStatsDiffXdbSpeciesTypeKeyDateFromYYYYMMDDDateToYYYYMMDDRoute = createRoute({
  method: 'get',
  path: '/stats/diff/xdb/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}',
  tags: ['Statistics'],
  summary: 'Count difference of external database ids, for specified species and date range',
  operationId: 'getXdbsDiffUsingGET',
  request: {
    params: z.object({
      speciesTypeKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'speciesTypeKey',
            in: 'path',
            name: 'speciesTypeKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      dateFromYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateFromYYYYMMDD',
            in: 'path',
            name: 'dateFromYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dateToYYYYMMDD: z
        .string()
        .openapi({
          param: {
            description: 'dateToYYYYMMDD',
            in: 'path',
            name: 'dateToYYYYMMDD',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.string()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStatsTermAccIdFilterAccIdRoute = createRoute({
  method: 'get',
  path: '/stats/term/{accId}/{filterAccId}',
  tags: ['Statistics'],
  summary: 'getTermStats',
  operationId: 'getTermStatsUsingGET',
  request: {
    params: z.object({
      accId: z
        .string()
        .openapi({
          param: {
            description: 'accId',
            in: 'path',
            name: 'accId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filterAccId: z
        .string()
        .openapi({
          param: {
            description: 'filterAccId',
            in: 'path',
            name: 'filterAccId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.record(z.string(), z.int32()) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStrainsAllRoute = createRoute({
  method: 'get',
  path: '/strains/all',
  tags: ['Rat Strain'],
  summary: 'Return all active strains in RGD',
  operationId: 'getAllStrainsUsingGET',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(StrainSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStrainsChrStartStopMapKeyRoute = createRoute({
  method: 'get',
  path: '/strains/{chr}/{start}/{stop}/{mapKey}',
  tags: ['Rat Strain'],
  summary: 'Return all active strains by position',
  operationId: 'getStrainsByPositionUsingGET',
  request: {
    params: z.object({
      chr: z
        .string()
        .openapi({
          param: {
            description: 'Chromosome',
            in: 'path',
            name: 'chr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Start Position',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      stop: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Stop Position',
            in: 'path',
            name: 'stop',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      mapKey: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD Map Key (available through lookup service)',
            in: 'path',
            name: 'mapKey',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(StrainSchema) } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getStrainsRgdIdRoute = createRoute({
  method: 'get',
  path: '/strains/{rgdId}',
  tags: ['Rat Strain'],
  summary: 'Return a strain by RGD ID',
  operationId: 'getStrainByRgdIdUsingGET',
  request: {
    params: z.object({
      rgdId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'RGD ID of the strain',
            in: 'path',
            name: 'rgdId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: StrainSchema } } },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})
