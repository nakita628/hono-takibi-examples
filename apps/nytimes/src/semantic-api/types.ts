type ConceptRelation = {
  concept_created?: string | undefined
  concept_id?: number | undefined
  concept_name?: string | undefined
  concept_status?: string | undefined
  concept_type?: string | undefined
  concept_updated?: string | undefined
  is_times_tag?: number | undefined
  vernacular?: string | undefined
}
type Concept = {
  ancestors?: ConceptRelation[] | undefined
  article_list?:
    | {
        results?:
          | {
              body?: string | undefined
              byline?: string | undefined
              concepts?:
                | {
                    nytd_des?: string[] | undefined
                    nytd_org?: string[] | undefined
                    nytd_per?: string[] | undefined
                  }
                | undefined
              date?: string | undefined
              document_type?: string | undefined
              title?: string | undefined
              type_of_material?: string | undefined
              url?: string | undefined
            }[]
          | undefined
        total?: number | undefined
      }
    | undefined
  combinations?:
    | {
        combination_note?: string | undefined
        combination_source_concept_id?: number | undefined
        combination_source_concept_name?: string | undefined
        combination_source_concept_type?: string | undefined
        combination_target_concept_id?: number | undefined
        combination_target_concept_name?: string | undefined
        combination_target_concept_type?: string | undefined
      }[]
    | undefined
  concept_created?: string | undefined
  concept_id?: number | undefined
  concept_name?: string | undefined
  concept_status?: string | undefined
  concept_type?: string | undefined
  concept_updated?: string | undefined
  descendants?: ConceptRelation[] | undefined
  is_times_tag?: number | undefined
  links?:
    | {
        concept_id?: number | undefined
        concept_name?: string | undefined
        concept_status?: string | undefined
        concept_type?: string | undefined
        is_times_tag?: number | undefined
        link?: string | undefined
        link_id?: number | undefined
        link_type?: string | undefined
        mapping_type?: string | undefined
        relation?: string | undefined
      }[]
    | undefined
  scope_notes?:
    | {
        scope_note?: string | undefined
        scope_note_name?: string | undefined
        scope_note_type?: string | undefined
      }[]
    | undefined
  search_api_query?: string | undefined
  taxonomy?:
    | {
        source_concept_id?: number | undefined
        source_concept_name?: string | undefined
        source_concept_type?: string | undefined
        source_concept_vernacular?: string | undefined
        target_concept_id?: number | undefined
        target_concept_name?: string | undefined
        target_concept_type?: string | undefined
        target_concept_vernacular?: string | undefined
        taxonomic_relation?: string | undefined
        taxonomic_verification_status?: string | undefined
      }[]
    | undefined
  vernacular?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/name/:concept-type/:specific-concept.json': {
      $get: {
        input: {
          param: {
            'concept-type': 'nytd_geo' | 'nytd_per' | 'nytd_org' | 'nytd_des'
            'specific-concept': string
          }
        } & {
          query: {
            fields?:
              | 'all'
              | 'pages'
              | 'ticker_symbol'
              | 'links'
              | 'taxonomy'
              | 'combinations'
              | 'geocodes'
              | 'article_list'
              | 'scope_notes'
              | 'search_api_query'
              | undefined
            query: string
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Concept[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search.json': {
      $get: {
        input: {
          query: {
            query: string
            offset?: number | undefined
            fields?:
              | 'all'
              | 'pages'
              | 'ticker_symbol'
              | 'links'
              | 'taxonomy'
              | 'combinations'
              | 'geocodes'
              | 'article_list'
              | 'scope_notes'
              | 'search_api_query'
              | undefined
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: ConceptRelation[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
