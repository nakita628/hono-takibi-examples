type QueryInputSchema = { [x: string]: { [x: string]: unknown } }
type _400 = {
  code: string
  errors?:
    | {
        code?: string | undefined
        location?:
          | { col?: number | undefined; file?: string | undefined; row?: number | undefined }
          | undefined
        message?: string | undefined
      }[]
    | undefined
  message: string
}
type _404 = { code: string; message: string }
type WebhookInputSchema = { [x: string]: { [x: string]: unknown } }
type PartialQuerySchema = { [x: string]: { [x: string]: unknown } }
type _200SingleResult = {
  result?:
    | {
        bundles?: { authz?: { service?: string | undefined } | undefined } | undefined
        decision_logs?: { service?: string | undefined } | undefined
        default_authorization_decision?: string | undefined
        default_decision?: string | undefined
        keys?: { 'global-key'?: { scope?: string | undefined } | undefined } | undefined
        labels?: { id?: string | undefined; version?: string | undefined } | undefined
        services?: { acmecorp?: { url?: string | undefined } | undefined } | undefined
        status?: { service?: string | undefined } | undefined
      }
    | undefined
}
type PatchesSchema = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path: string
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}[]
type InputSchema = { [x: string]: { [x: string]: unknown } }
type DataSchema = { [x: string]: unknown }
type _200Result = {
  result?:
    | {
        ast?:
          | {
              package?:
                | {
                    path?:
                      | { type?: 'import' | 'package' | undefined; value?: string | undefined }[]
                      | undefined
                  }
                | undefined
              rules?:
                | {
                    body?:
                      | {
                          index?: number | undefined
                          terms?:
                            | {
                                type?: string | undefined
                                value?:
                                  | { type?: string | undefined; value?: string | undefined }[]
                                  | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    head?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          name?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
          | undefined
        id?: string | undefined
        raw?: string | undefined
      }[]
    | undefined
}
type QSchema = { [x: string]: { [x: string]: unknown } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | {
            input: { query: { pretty?: boolean | undefined } } & { json: QueryInputSchema }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { pretty?: boolean | undefined } } & { json: QueryInputSchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pretty?: boolean | undefined } } & { json: QueryInputSchema }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { pretty?: boolean | undefined } } & { json: QueryInputSchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/health': {
      $get:
        | {
            input: { query: { bundles?: boolean | undefined; plugins?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { bundles?: boolean | undefined; plugins?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v0/data/:path': {
      $post:
        | {
            input: { param: { path: string } } & { query: { pretty?: boolean | undefined } } & {
              json: WebhookInputSchema
            }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              provenance?:
                | {
                    build_commit?: string | undefined
                    build_hostname?: string | undefined
                    build_timestamp?: string | undefined
                    bundles?: { [x: string]: { [x: string]: unknown } } | undefined
                    version?: string | undefined
                  }
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & { query: { pretty?: boolean | undefined } } & {
              json: WebhookInputSchema
            }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & { query: { pretty?: boolean | undefined } } & {
              json: WebhookInputSchema
            }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { path: string } } & { query: { pretty?: boolean | undefined } } & {
              json: WebhookInputSchema
            }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/compile': {
      $post:
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: PartialQuerySchema }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: PartialQuerySchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: PartialQuerySchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/config': {
      $get:
        | {
            input: { query: { pretty?: boolean | undefined } }
            output: _200SingleResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pretty?: boolean | undefined } }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/data/:path': {
      $delete:
        | { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { path: string } }; output: _404; outputFormat: 'json'; status: 404 }
        | { input: { param: { path: string } }; output: _400; outputFormat: 'json'; status: 500 }
      $get:
        | {
            input: { param: { path: string } } & {
              query: {
                input?: { [x: string]: { [x: string]: unknown } } | undefined
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              provenance?:
                | {
                    build_commit?: string | undefined
                    build_hostname?: string | undefined
                    build_timestamp?: string | undefined
                    bundles?: { [x: string]: { [x: string]: unknown } } | undefined
                    version?: string | undefined
                  }
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                input?: { [x: string]: { [x: string]: unknown } } | undefined
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                input?: { [x: string]: { [x: string]: unknown } } | undefined
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { path: string } } & { json: PatchesSchema }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { path: string } } & { json: PatchesSchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & { json: PatchesSchema }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { path: string } } & { json: PatchesSchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { path: string } } & {
              query: {
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: InputSchema }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              provenance?:
                | {
                    build_commit?: string | undefined
                    build_hostname?: string | undefined
                    build_timestamp?: string | undefined
                    bundles?: { [x: string]: { [x: string]: unknown } } | undefined
                    version?: string | undefined
                  }
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & {
              query: {
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: InputSchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              query: {
                pretty?: boolean | undefined
                provenance?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
                instrument?: boolean | undefined
              }
            } & { json: InputSchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { path: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            } & { json: DataSchema }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { path: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            } & { json: DataSchema }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { path: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            } & { json: DataSchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { path: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            } & { json: DataSchema }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { path: string } } & {
              header: { 'If-None-Match'?: string | undefined }
            } & { json: DataSchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/policies': {
      $get:
        | {
            input: { query: { pretty?: boolean | undefined } }
            output: _200Result
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pretty?: boolean | undefined } }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/policies/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              provenance?:
                | {
                    build_commit?: string | undefined
                    build_hostname?: string | undefined
                    build_timestamp?: string | undefined
                    bundles?: { [x: string]: { [x: string]: unknown } } | undefined
                    version?: string | undefined
                  }
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _200Result
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { pretty?: boolean | undefined } }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { pretty?: boolean | undefined; metrics?: boolean | undefined }
            } & { json: string }
            output: _200Result
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { pretty?: boolean | undefined; metrics?: boolean | undefined }
            } & { json: string }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { pretty?: boolean | undefined; metrics?: boolean | undefined }
            } & { json: string }
            output: _400
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/query': {
      $get:
        | {
            input: {
              query: {
                q: string
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            }
            output: _400
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            } & { json: QSchema }
            output: {
              result?:
                | {
                    ast?:
                      | {
                          package?:
                            | {
                                path?:
                                  | {
                                      type?: 'import' | 'package' | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          rules?:
                            | {
                                body?:
                                  | {
                                      index?: number | undefined
                                      terms?:
                                        | {
                                            type?: string | undefined
                                            value?:
                                              | {
                                                  type?: string | undefined
                                                  value?: string | undefined
                                                }[]
                                              | undefined
                                          }[]
                                        | undefined
                                    }[]
                                  | undefined
                                head?:
                                  | {
                                      key?:
                                        | { type?: string | undefined; value?: string | undefined }
                                        | undefined
                                      name?: string | undefined
                                    }
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    raw?: string | undefined
                  }[]
                | undefined
              metrics?:
                | {
                    counter_server_query_cache_hit?: number | undefined
                    timer_query_compile_stage_build_comprehension_index_ns?: number | undefined
                    timer_query_compile_stage_check_safety_ns?: number | undefined
                    timer_query_compile_stage_check_types_ns?: number | undefined
                    timer_query_compile_stage_check_undefined_funcs_ns?: number | undefined
                    timer_query_compile_stage_check_unsafe_builtins_ns?: number | undefined
                    timer_query_compile_stage_resolve_refs_ns?: number | undefined
                    timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_expr_terms_ns?: number | undefined
                    timer_query_compile_stage_rewrite_local_vars_ns?: number | undefined
                    timer_query_compile_stage_rewrite_to_capture_value_ns?: number | undefined
                    timer_query_compile_stage_rewrite_with_values_ns?: number | undefined
                    timer_rego_input_parse_ns?: number | undefined
                    timer_rego_module_compile_ns?: number | undefined
                    timer_rego_module_parse_ns?: number | undefined
                    timer_rego_query_compile_ns?: number | undefined
                    timer_rego_query_eval_ns?: number | undefined
                    timer_rego_query_parse_ns?: number | undefined
                    timer_server_handler_ns?: number | undefined
                    timer_server_read_bytes_ns?: number | undefined
                  }
                | undefined
              explanation?:
                | {
                    locals?:
                      | {
                          key?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                          value?:
                            | { type?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    node?:
                      | {
                          index?: number | undefined
                          terms?:
                            | { type?: string | undefined; value?: string | undefined }[]
                            | undefined
                        }
                      | undefined
                    op?: 'enter' | 'exit' | 'eval' | 'fail' | 'redo' | undefined
                    parent_id?: number | undefined
                    query_id?: number | undefined
                    type?: 'expr' | 'rule' | 'body' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            } & { json: QSchema }
            output: _400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            } & { json: QSchema }
            output: _400
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                pretty?: boolean | undefined
                explain?: string | undefined
                metrics?: boolean | undefined
              }
            } & { json: QSchema }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  },
  '/'
>
export default routes
