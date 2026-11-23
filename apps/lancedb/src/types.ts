declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/table/': {
      $get:
        | {
            input: { query: { limit?: number | undefined; page_token?: string | undefined } }
            output: { tables?: string[] | undefined; page_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; page_token?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/create/': {
      $post:
        | {
            input: { param: { name: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/query/': {
      $post:
        | {
            input: { param: { name: string } } & {
              json: {
                vector: unknown
                vector_column?: string | undefined
                prefilter?: boolean | undefined
                k?: number | undefined
                distance_type?: string | undefined
                bypass_vector_index?: boolean | undefined
                filter?: string | undefined
                columns?: string[] | undefined
                nprobe?: number | undefined
                refine_factor?: number | undefined
                fast_search?: boolean | undefined
              }
            }
            output: {
              results?:
                | {
                    id?: number | undefined
                    selected_col_1_to_return?: unknown | undefined
                    selected_col_n_to_return?: unknown | undefined
                    _distance?: unknown | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              json: {
                vector: unknown
                vector_column?: string | undefined
                prefilter?: boolean | undefined
                k?: number | undefined
                distance_type?: string | undefined
                bypass_vector_index?: boolean | undefined
                filter?: string | undefined
                columns?: string[] | undefined
                nprobe?: number | undefined
                refine_factor?: number | undefined
                fast_search?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              json: {
                vector: unknown
                vector_column?: string | undefined
                prefilter?: boolean | undefined
                k?: number | undefined
                distance_type?: string | undefined
                bypass_vector_index?: boolean | undefined
                filter?: string | undefined
                columns?: string[] | undefined
                nprobe?: number | undefined
                refine_factor?: number | undefined
                fast_search?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              json: {
                vector: unknown
                vector_column?: string | undefined
                prefilter?: boolean | undefined
                k?: number | undefined
                distance_type?: string | undefined
                bypass_vector_index?: boolean | undefined
                filter?: string | undefined
                columns?: string[] | undefined
                nprobe?: number | undefined
                refine_factor?: number | undefined
                fast_search?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/insert/': {
      $post:
        | {
            input: { param: { name: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/merge_insert/': {
      $post:
        | {
            input: { param: { name: string } } & {
              query: {
                on: string
                when_matched_update_all?: boolean | undefined
                when_matched_update_all_filt?: string | undefined
                when_not_matched_insert_all?: boolean | undefined
                when_not_matched_by_source_delete?: boolean | undefined
                when_not_matched_by_source_delete_filt?: string | undefined
              }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                on: string
                when_matched_update_all?: boolean | undefined
                when_matched_update_all_filt?: string | undefined
                when_not_matched_insert_all?: boolean | undefined
                when_not_matched_by_source_delete?: boolean | undefined
                when_not_matched_by_source_delete_filt?: string | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: {
                on: string
                when_matched_update_all?: boolean | undefined
                when_matched_update_all_filt?: string | undefined
                when_not_matched_insert_all?: boolean | undefined
                when_not_matched_by_source_delete?: boolean | undefined
                when_not_matched_by_source_delete_filt?: string | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              query: {
                on: string
                when_matched_update_all?: boolean | undefined
                when_matched_update_all_filt?: string | undefined
                when_not_matched_insert_all?: boolean | undefined
                when_not_matched_by_source_delete?: boolean | undefined
                when_not_matched_by_source_delete_filt?: string | undefined
              }
            } & { json: File }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/delete/': {
      $post:
        | {
            input: { param: { name: string } } & { json: { predicate?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: { predicate?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/table/:name/drop/': {
      $post:
        | {
            input: { param: { name: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: File }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/v1/table/:name/describe/': {
      $post:
        | {
            input: { param: { name: string } }
            output: {
              table?: string | undefined
              version?: number | undefined
              schema?: string | undefined
              stats?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { name: string } }; output: string; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/v1/table/:name/index/list/': {
      $post:
        | {
            input: { param: { name: string } }
            output: {
              indexes?:
                | {
                    columns?: string[] | undefined
                    index_name?: string | undefined
                    index_uuid?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { name: string } }; output: string; outputFormat: 'text'; status: 404 }
    }
  } & {
    '/v1/table/:name/create_index/': {
      $post:
        | {
            input: { param: { name: string } } & {
              json: {
                column?: string | undefined
                name?: string | undefined
                replace?: boolean | undefined
                metric_type?: string | undefined
                index_type?: string | undefined
                custom_stop_words?: (string[] | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              json: {
                column?: string | undefined
                name?: string | undefined
                replace?: boolean | undefined
                metric_type?: string | undefined
                index_type?: string | undefined
                custom_stop_words?: (string[] | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              json: {
                column?: string | undefined
                name?: string | undefined
                replace?: boolean | undefined
                metric_type?: string | undefined
                index_type?: string | undefined
                custom_stop_words?: (string[] | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              json: {
                column?: string | undefined
                name?: string | undefined
                replace?: boolean | undefined
                metric_type?: string | undefined
                index_type?: string | undefined
                custom_stop_words?: (string[] | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/create_scalar_index/': {
      $post:
        | {
            input: { param: { name: string } } & {
              json: { column?: string | undefined; index_type?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              json: { column?: string | undefined; index_type?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              json: { column?: string | undefined; index_type?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              json: { column?: string | undefined; index_type?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/v1/table/:name/index/:index_name/drop/': {
      $post:
        | {
            input: { param: { name: string; index_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { name: string; index_name: string } }
            output: string
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { name: string; index_name: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { name: string; index_name: string } }
            output: string
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
