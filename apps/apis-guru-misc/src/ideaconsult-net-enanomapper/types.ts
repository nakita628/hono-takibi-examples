type Investigation = {
  _childDocuments_?: { [x: string]: unknown } | undefined
  assay?: string | undefined
  document_uuid?: string | undefined
  effectendpoint?: string | undefined
  endpoint?: string | undefined
  endpointcategory?: string | undefined
  err?: number | undefined
  errQualifier?: string | undefined
  guidance?: string | undefined
  investigation?: string | undefined
  loQualifier?: string | undefined
  loValue?: number | undefined
  name?: string | undefined
  owner_name?: string | undefined
  publicname?: string | undefined
  reference?: string | undefined
  reference_owner?: string | undefined
  reference_year?: string | undefined
  resulttype?: string | undefined
  s_uuid?: string | undefined
  studyResultType?: string | undefined
  substanceType?: string | undefined
  textValue?: string | undefined
  topcategory?: string | undefined
  type_s?: string | undefined
  unit?: string | undefined
  upQualifier?: string | undefined
  upValue?: number | undefined
  updated?: string | undefined
}
type Dataset = {
  dataEntry?: { [x: string]: unknown } | undefined
  feature?: { [x: string]: unknown } | undefined
  model_uri?: string | undefined
  query?: { [x: string]: unknown } | undefined
}
type Facet = { facet?: { [x: string]: unknown } | undefined }
type Substance = { substance?: { [x: string]: unknown } | undefined }
type SubstanceComposition = {
  composition?: { [x: string]: unknown } | undefined
  feature?: { [x: string]: unknown } | undefined
}
type SubstanceStudy = { study?: { [x: string]: unknown } | undefined }
type SubstanceStudySummary = { facet?: { [x: string]: unknown } | undefined }
type SolrResponse = {
  response?:
    | {
        docs?: { [x: string]: unknown }[] | undefined
        maxScore?: number | undefined
        numFound?: number | undefined
        start?: number | undefined
      }
    | undefined
  responseHeader?:
    | {
        QTime?: number | undefined
        params?: { [x: string]: unknown } | undefined
        status?: number | undefined
        zkConnected?: boolean | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/enm/:db/investigation': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Investigation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Investigation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Investigation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Investigation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Investigation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                type:
                  | 'byinvestigation'
                  | 'byassay'
                  | 'bysubstance'
                  | 'byprovider'
                  | 'bycitation'
                  | 'bystudytype'
                  | 'bystructure_inchikey'
                  | 'bystructure_smiles'
                  | 'bystructure_name'
                  | 'bysubstance_name'
                  | 'bysubstance_type'
                search: string
                inchikey?: string | undefined
                id?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/query/compound/:term/:representation': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                term: 'search' | 'url' | 'inchikey'
                representation:
                  | 'all'
                  | 'smiles'
                  | 'reach'
                  | 'stdinchi'
                  | 'stdinchikey'
                  | 'names'
                  | 'iupac_name'
                  | 'synonym'
                  | 'cas'
                  | 'einecs'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                casesens?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                term: 'search' | 'url' | 'inchikey'
                representation:
                  | 'all'
                  | 'smiles'
                  | 'reach'
                  | 'stdinchi'
                  | 'stdinchikey'
                  | 'names'
                  | 'iupac_name'
                  | 'synonym'
                  | 'cas'
                  | 'einecs'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                casesens?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/query/similarity': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                type?: 'smiles' | 'mol' | 'url' | undefined
                threshold?: number | undefined
                dataset_uri?: string | undefined
                filterBySubstance?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                mol?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                type?: 'smiles' | 'mol' | 'url' | undefined
                threshold?: number | undefined
                dataset_uri?: string | undefined
                filterBySubstance?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                mol?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/query/smarts': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                type?: 'smiles' | 'mol' | 'url' | undefined
                dataset_uri?: string | undefined
                filterBySubstance?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                mol?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                b64search?: string | undefined
                type?: 'smiles' | 'mol' | 'url' | undefined
                dataset_uri?: string | undefined
                filterBySubstance?: boolean | undefined
                bundle_uri?: string | undefined
                sameas?: string | undefined
                mol?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/query/study': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
              }
            }
            output: Facet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                type?:
                  | 'substancetype'
                  | 'name'
                  | 'like'
                  | 'regexp'
                  | 'uuif'
                  | 'CompTox'
                  | 'DOI'
                  | 'reliability'
                  | 'purposeFlag'
                  | 'studyResultType'
                  | 'isRobustStudy'
                  | 'citation'
                  | 'citationowner'
                  | 'topcategory'
                  | 'endpointcategory'
                  | 'params'
                  | 'owner_name'
                  | 'owner_uuid'
                  | 'related'
                  | 'reference'
                  | 'facet'
                  | undefined
                compound_uri?: string | undefined
                bundle_uri?: string | undefined
                addDummySubstance?: boolean | undefined
                studysummary?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Substance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
              }
            } & {
              query: {
                search?: string | undefined
                type?:
                  | 'substancetype'
                  | 'name'
                  | 'like'
                  | 'regexp'
                  | 'uuif'
                  | 'CompTox'
                  | 'DOI'
                  | 'reliability'
                  | 'purposeFlag'
                  | 'studyResultType'
                  | 'isRobustStudy'
                  | 'citation'
                  | 'citationowner'
                  | 'topcategory'
                  | 'endpointcategory'
                  | 'params'
                  | 'owner_name'
                  | 'owner_uuid'
                  | 'related'
                  | 'reference'
                  | 'facet'
                  | undefined
                compound_uri?: string | undefined
                bundle_uri?: string | undefined
                addDummySubstance?: boolean | undefined
                studysummary?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance/:uuid': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                'property_uris[]'?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: Substance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                'property_uris[]'?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance/:uuid/composition': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                all?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: SubstanceComposition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                all?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance/:uuid/structures': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & { query: { page?: number | undefined; pagesize?: number | undefined } }
            output: Dataset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & { query: { page?: number | undefined; pagesize?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance/:uuid/study': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
                property_uri?: string | undefined
                property?: string | undefined
                investigation_uuid?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: SubstanceStudy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
                property_uri?: string | undefined
                property?: string | undefined
                investigation_uuid?: string | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/enm/:db/substance/:uuid/studySummary': {
      $get:
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
                property_uri?: string | undefined
                property?: string | undefined
                result?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: SubstanceStudySummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                db:
                  | 'calibrate'
                  | 'enanomapper'
                  | 'enpra'
                  | 'marina'
                  | 'nanogenotox'
                  | 'nanoinformatix'
                  | 'nanoreg1'
                  | 'nanoreg2'
                  | 'nanotest'
                uuid: string
              }
            } & {
              query: {
                top?: 'P-CHEM' | 'ECOTOX' | 'ENV FATE' | 'TOX' | 'EXPOSURE' | undefined
                category?: string | undefined
                property_uri?: string | undefined
                property?: string | undefined
                result?: boolean | undefined
                page?: number | undefined
                pagesize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/select': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: SolrResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: SolrResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              query: {
                q?: string | undefined
                fq?: string | undefined
                fl?: string | undefined
                start?: number | undefined
                rows?: number | undefined
                wt?: 'json' | 'xml' | 'csv' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 510
          }
      $post:
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: SolrResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: SolrResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { wt?: 'json' | 'xml' | undefined } } & {
              json: {
                facet?: { [x: string]: unknown } | undefined
                params?: { fl?: string[] | undefined; rows?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 510
          }
    }
  },
  '/'
>
export default routes
