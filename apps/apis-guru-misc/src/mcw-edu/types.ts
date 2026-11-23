type AnnotationRequest = {
  evidenceCodes?: string[] | undefined
  ids?: string[] | undefined
  speciesTypeKeys?: number[] | undefined
  termAcc?: string | undefined
}
type Annotation = {
  annotatedObjectRgdId?: number | undefined
  annotationExtension?: string | undefined
  aspect?: string | undefined
  createdBy?: number | undefined
  createdDate?: string | undefined
  dataSrc?: string | undefined
  evidence?: string | undefined
  geneProductFormId?: string | undefined
  key?: number | undefined
  lastModifiedBy?: number | undefined
  lastModifiedDate?: string | undefined
  notes?: string | undefined
  objectName?: string | undefined
  objectSymbol?: string | undefined
  originalCreatedDate?: string | undefined
  qualifier?: string | undefined
  refRgdId?: number | undefined
  relativeTo?: string | undefined
  rgdObjectKey?: number | undefined
  speciesTypeKey?: number | undefined
  term?: string | undefined
  termAcc?: string | undefined
  withInfo?: string | undefined
  xrefSource?: string | undefined
}
type MapPair = { keyValue?: string | undefined; stringValue?: string | undefined }
type EnrichmentGeneRequest = {
  accId?: string | undefined
  geneSymbols?: string[] | undefined
  species?: string | undefined
}
type EnrichmentRequest = {
  aspect?: string | undefined
  genes?: string[] | undefined
  species?: string | undefined
}
type Gene = {
  agrDescription?: string | undefined
  description?: string | undefined
  ensemblFullName?: string | undefined
  ensemblGeneSymbol?: string | undefined
  ensemblGeneType?: string | undefined
  geneSource?: string | undefined
  key?: number | undefined
  mergedDescription?: string | undefined
  name?: string | undefined
  ncbiAnnotStatus?: string | undefined
  nomenReviewDate?: string | undefined
  nomenSource?: string | undefined
  notes?: string | undefined
  refSeqStatus?: string | undefined
  rgdId?: number | undefined
  soAccId?: string | undefined
  speciesTypeKey?: number | undefined
  symbol?: string | undefined
  type?: string | undefined
  variant?: boolean | undefined
}
type AnnotatedGeneRequest = {
  accId?: string | undefined
  evidenceCodes?: string[] | undefined
  speciesTypeKeys?: number[] | undefined
}
type MappedGene = {
  chromosome?: string | undefined
  gene?: Gene | undefined
  mapKey?: number | undefined
  start?: bigint | undefined
  stop?: bigint | undefined
  strand?: string | undefined
}
type OrthologRequest = { rgdIds?: number[] | undefined; speciesTypeKeys?: number[] | undefined }
type MappedGenePosition = {
  chromosome?: string | undefined
  mapKey?: number | undefined
  rgdId?: number | undefined
  start?: bigint | undefined
  stop?: bigint | undefined
  strand?: string | undefined
  symbol?: string | undefined
}
type RGDIDListRequest = { rgdIds?: number[] | undefined }
type Map = {
  dbsnpVersion?: string | undefined
  description?: string | undefined
  key?: number | undefined
  methodKey?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  primaryRefAssembly?: boolean | undefined
  rank?: number | undefined
  refSeqAssemblyAcc?: string | undefined
  refSeqAssemblyName?: string | undefined
  rgdId?: number | undefined
  source?: string | undefined
  speciesTypeKey?: number | undefined
  ucscAssemblyId?: string | undefined
  unit?: string | undefined
  version?: string | undefined
}
type Chromosome = {
  chromosome?: string | undefined
  contigCount?: number | undefined
  gapCount?: number | undefined
  gapLength?: number | undefined
  genbankId?: string | undefined
  mapKey?: number | undefined
  ordinalNumber?: number | undefined
  refseqId?: string | undefined
  seqLength?: number | undefined
}
type TermXRef = {
  key?: number | undefined
  termAcc?: string | undefined
  xrefDescription?: string | undefined
  xrefValue?: string | undefined
}
type Term = {
  accId?: string | undefined
  comment?: string | undefined
  createdBy?: string | undefined
  creationDate?: string | undefined
  definition?: string | undefined
  modificationDate?: string | undefined
  obsolete?: number | undefined
  ontologyId?: string | undefined
  term?: string | undefined
  xrefs?: TermXRef[] | undefined
}
type PathwayObject = {
  accId?: string | undefined
  id?: string | undefined
  objDesc?: string | undefined
  objName?: string | undefined
  typeId?: number | undefined
  typeName?: string | undefined
  url?: string | undefined
  xdb_key?: number | undefined
}
type Reference = {
  citation?: string | undefined
  doi?: string | undefined
  editors?: string | undefined
  issue?: string | undefined
  key?: number | undefined
  notes?: string | undefined
  pages?: string | undefined
  pubDate?: string | undefined
  pubStatus?: string | undefined
  publication?: string | undefined
  publisher?: string | undefined
  publisherCity?: string | undefined
  refAbstract?: string | undefined
  referenceType?: string | undefined
  rgdId?: number | undefined
  speciesTypeKey?: number | undefined
  title?: string | undefined
  urlWebReference?: string | undefined
  volume?: string | undefined
}
type Pathway = {
  description?: string | undefined
  hasAlteredPath?: string | undefined
  id?: string | undefined
  name?: string | undefined
  objectList?: PathwayObject[] | undefined
  pathwayCategories?: string[] | undefined
  referenceList?: Reference[] | undefined
}
type QTL = {
  chromosome?: string | undefined
  flank1RgdId?: number | undefined
  flank2RgdId?: number | undefined
  inheritanceType?: string | undefined
  key?: number | undefined
  linkageImage?: string | undefined
  lod?: number | undefined
  lodImage?: string | undefined
  mostSignificantCmoTerm?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  peakOffset?: number | undefined
  peakRgdId?: number | undefined
  pvalue?: number | undefined
  rgdId?: number | undefined
  sourceUrl?: string | undefined
  speciesTypeKey?: number | undefined
  symbol?: string | undefined
  variance?: number | undefined
}
type MappedQTL = {
  chromosome?: string | undefined
  mapKey?: number | undefined
  qtl?: QTL | undefined
  start?: bigint | undefined
  stop?: bigint | undefined
  strand?: string | undefined
}
type SSLP = {
  expectedSize?: number | undefined
  forwardSeq?: string | undefined
  key?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  reverseSeq?: string | undefined
  rgdId?: number | undefined
  speciesTypeKey?: number | undefined
  sslpType?: string | undefined
  templateSeq?: string | undefined
}
type MappedSSLP = {
  chromosome?: string | undefined
  mapKey?: number | undefined
  sslp?: SSLP | undefined
  start?: bigint | undefined
  stop?: bigint | undefined
  strand?: string | undefined
}
type Status = {
  cryopreservedEmbryo?: boolean | undefined
  cryopreservedSperm?: boolean | undefined
  cryorecovery?: boolean | undefined
  key?: number | undefined
  liveAnimals?: boolean | undefined
  statusDate?: string | undefined
  strainRgdId?: number | undefined
}
type Strain = {
  backgroundStrainRgdId?: number | undefined
  chrAltered?: string | undefined
  color?: string | undefined
  geneticStatus?: string | undefined
  genetics?: string | undefined
  imageUrl?: string | undefined
  inbredGen?: string | undefined
  key?: number | undefined
  lastStatus?: string | undefined
  lastStatusObject?: Status | undefined
  modificationMethod?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  origin?: string | undefined
  researchUse?: string | undefined
  rgdId?: number | undefined
  source?: string | undefined
  speciesTypeKey?: number | undefined
  statusLog?: Status[] | undefined
  strain?: string | undefined
  strainTypeName?: string | undefined
  substrain?: string | undefined
  symbol?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/agr/affectedGenomicModels/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/agr/alleles/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/agr/expression/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/agr/phenotypes/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/agr/variants/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/agr/:taxonId': {
      $get:
        | {
            input: { param: { taxonId: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { taxonId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/annotations/': {
      $post:
        | {
            input: { json: AnnotationRequest }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: AnnotationRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: AnnotationRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: AnnotationRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: AnnotationRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/annotations/accId/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: MapPair[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/annotations/count/:accId/:includeChildren': {
      $get:
        | {
            input: { param: { accId: string; includeChildren: boolean } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren': {
      $get:
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/annotations/count/:accId/:speciesTypeKey/:includeChildren/:objectType': {
      $get:
        | {
            input: {
              param: {
                accId: string
                speciesTypeKey: number
                includeChildren: boolean
                objectType: number
              }
            }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                accId: string
                speciesTypeKey: number
                includeChildren: boolean
                objectType: number
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                accId: string
                speciesTypeKey: number
                includeChildren: boolean
                objectType: number
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                accId: string
                speciesTypeKey: number
                includeChildren: boolean
                objectType: number
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/annotations/reference/:refRgdId': {
      $get:
        | {
            input: { param: { refRgdId: number } }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { refRgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { refRgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { refRgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/annotations/rgdId/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/annotations/rgdId/:rgdId/:ontologyPrefix': {
      $get:
        | {
            input: { param: { rgdId: number; ontologyPrefix: string } }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { rgdId: number; ontologyPrefix: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { rgdId: number; ontologyPrefix: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { rgdId: number; ontologyPrefix: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/annotations/:accId/:rgdId': {
      $get:
        | {
            input: { param: { accId: string; rgdId: number } }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; rgdId: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; rgdId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; rgdId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/annotations/:accId/:speciesTypeKey/:includeChildren': {
      $get:
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: Annotation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number; includeChildren: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enrichment/annotatedGenes': {
      $post:
        | {
            input: { json: EnrichmentGeneRequest }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: EnrichmentGeneRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: EnrichmentGeneRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: EnrichmentGeneRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: EnrichmentGeneRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/enrichment/data': {
      $post:
        | {
            input: { json: EnrichmentRequest }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: EnrichmentRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: EnrichmentRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: EnrichmentRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: EnrichmentRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/affyId/:affyId/:speciesTypeKey': {
      $get:
        | {
            input: { param: { affyId: string; speciesTypeKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { affyId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { affyId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { affyId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/alias/:aliasSymbol/:speciesTypeKey': {
      $get:
        | {
            input: { param: { aliasSymbol: string; speciesTypeKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { aliasSymbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { aliasSymbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { aliasSymbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/allele/:rgdId': {
      $get:
        | { input: { param: { rgdId: number } }; output: Gene[]; outputFormat: 'text'; status: 200 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/annotation': {
      $post:
        | {
            input: { json: AnnotatedGeneRequest }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: AnnotatedGeneRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: AnnotatedGeneRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: AnnotatedGeneRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: AnnotatedGeneRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/annotation/:accId': {
      $get:
        | { input: { param: { accId: string } }; output: Gene[]; outputFormat: 'text'; status: 200 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/annotation/:accId/:speciesTypeKey': {
      $get:
        | {
            input: { param: { accId: string; speciesTypeKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/keyword/:keyword/:speciesTypeKey': {
      $get:
        | {
            input: { param: { keyword: string; speciesTypeKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { keyword: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { keyword: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { keyword: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/map/:mapKey': {
      $get:
        | {
            input: { param: { mapKey: number } }
            output: MappedGene[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/mapped/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: MappedGene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/orthologs': {
      $post:
        | {
            input: { json: OrthologRequest }
            output: { [x: string]: Gene[] }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: OrthologRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: OrthologRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: OrthologRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: OrthologRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/orthologs/:rgdId': {
      $get:
        | { input: { param: { rgdId: number } }; output: Gene[]; outputFormat: 'text'; status: 200 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/region/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: MappedGenePosition[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/species/:speciesTypeKey': {
      $get:
        | {
            input: { param: { speciesTypeKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: Gene[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/genes/:rgdId': {
      $get:
        | { input: { param: { rgdId: number } }; output: Gene; outputFormat: 'text'; status: 200 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/genes/:symbol/:speciesTypeKey': {
      $get:
        | {
            input: { param: { symbol: string; speciesTypeKey: number } }
            output: Gene
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { symbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { symbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { symbol: string; speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/lookup/geneTypes': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblGene': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblGene/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblProtein': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblProtein/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblTranscript': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/EnsemblTranscript/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GTEx': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GTEx/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GenBankNucleotide': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GenBankNucleotide/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GenBankProtein': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/GenBankProtein/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/HGNC': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/HGNC/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/MGI': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/MGI/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/NCBIGene': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/NCBIGene/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/UniProt': {
      $post:
        | {
            input: { json: RGDIDListRequest }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RGDIDListRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/id/map/UniProt/:rgdId': {
      $get:
        | {
            input: { param: { rgdId: number } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/maps/:speciesTypeKey': {
      $get:
        | {
            input: { param: { speciesTypeKey: number } }
            output: Map[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/lookup/speciesTypeKeys': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/lookup/standardUnit/:accId': {
      $get:
        | { input: { param: { accId: string } }; output: string; outputFormat: 'text'; status: 200 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/maps/chr/:chromosome/:mapKey': {
      $get:
        | {
            input: { param: { chromosome: string; mapKey: number } }
            output: Chromosome
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chromosome: string; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chromosome: string; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chromosome: string; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/maps/chr/:mapKey': {
      $get:
        | {
            input: { param: { mapKey: number } }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { mapKey: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/maps/:speciesTypeKey': {
      $get:
        | {
            input: { param: { speciesTypeKey: number } }
            output: Map[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ontology/ont/:accId': {
      $get:
        | {
            input: { param: { accId: string } }
            output: { [x: string]: string[] }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/ontology/term/:accId1/:accId2': {
      $get:
        | {
            input: { param: { accId1: string; accId2: string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId1: string; accId2: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId1: string; accId2: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId1: string; accId2: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/ontology/term/:accId': {
      $get:
        | { input: { param: { accId: string } }; output: Term; outputFormat: 'text'; status: 200 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { accId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/pathways/diagrams/search/:searchString': {
      $get:
        | {
            input: { param: { searchString: string } }
            output: Pathway[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { searchString: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { searchString: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { searchString: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/pathways/diagramsForCategory/:category': {
      $get:
        | {
            input: { param: { category: string } }
            output: Pathway[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { category: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { category: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { category: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/phenotype/phenominer/chart/:speciesTypeKey/:refRgdId/:termString': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; refRgdId: number; termString: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; refRgdId: number; termString: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; refRgdId: number; termString: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; refRgdId: number; termString: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/phenotype/phenominer/chart/:speciesTypeKey/:termString': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; termString: string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; termString: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; termString: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; termString: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/qtls/mapped/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: MappedQTL[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/qtls/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: QTL[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/qtls/:rgdId': {
      $get:
        | { input: { param: { rgdId: number } }; output: QTL; outputFormat: 'text'; status: 200 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/sslps/mapped/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: MappedSSLP[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/activeObject/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/geneType/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/objectStatus/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/objectWithRefSeq/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/objectWithReference/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/objectWithXdb/:speciesTypeKey/:objectKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; objectKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; objectKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; objectKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; objectKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/proteinInteraction/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/qtlInheritanceType/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/retiredObject/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/strainType/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/withdrawnObject/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/count/xdb/:speciesTypeKey/:dateYYYYMMDD': {
      $get:
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { speciesTypeKey: number; dateYYYYMMDD: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/activeObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/geneType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/objectStatus/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/objectWithRefSeq/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/objectWithReference/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/objectWithXdb/:speciesTypeKey/:objectKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: {
                speciesTypeKey: number
                objectKey: number
                dateFromYYYYMMDD: string
                dateToYYYYMMDD: string
              }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                speciesTypeKey: number
                objectKey: number
                dateFromYYYYMMDD: string
                dateToYYYYMMDD: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                speciesTypeKey: number
                objectKey: number
                dateFromYYYYMMDD: string
                dateToYYYYMMDD: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                speciesTypeKey: number
                objectKey: number
                dateFromYYYYMMDD: string
                dateToYYYYMMDD: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/proteinInteraction/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/qtlInheritanceType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/retiredObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/strainType/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/withdrawnObject/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/diff/xdb/:speciesTypeKey/:dateFromYYYYMMDD/:dateToYYYYMMDD': {
      $get:
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: { [x: string]: string }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { speciesTypeKey: number; dateFromYYYYMMDD: string; dateToYYYYMMDD: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stats/term/:accId/:filterAccId': {
      $get:
        | {
            input: { param: { accId: string; filterAccId: string } }
            output: { [x: string]: number }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accId: string; filterAccId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accId: string; filterAccId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { accId: string; filterAccId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/strains/all': {
      $get:
        | { input: {}; output: Strain[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/strains/:chr/:start/:stop/:mapKey': {
      $get:
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: Strain[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { chr: string; start: bigint; stop: bigint; mapKey: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/strains/:rgdId': {
      $get:
        | { input: { param: { rgdId: number } }; output: Strain; outputFormat: 'text'; status: 200 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { rgdId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
