declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {}
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__api__': {
      $get: {
        input: {}
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/__heartbeat__': {
      $get:
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/__lbheartbeat__': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/__version__': {
      $get: {
        input: {}
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/batch': {
      $post:
        | {
            input: {
              json: {
                defaults?:
                  | {
                      body?: { [x: string]: { [x: string]: unknown } } | undefined
                      headers?: { [x: string]: { [x: string]: unknown } } | undefined
                      method?:
                        | 'GET'
                        | 'HEAD'
                        | 'DELETE'
                        | 'TRACE'
                        | 'POST'
                        | 'PUT'
                        | 'PATCH'
                        | undefined
                      path?: string | undefined
                    }
                  | undefined
                requests: {
                  body?: { [x: string]: { [x: string]: unknown } } | undefined
                  headers?: { [x: string]: { [x: string]: unknown } } | undefined
                  method?:
                    | 'GET'
                    | 'HEAD'
                    | 'DELETE'
                    | 'TRACE'
                    | 'POST'
                    | 'PUT'
                    | 'PATCH'
                    | undefined
                  path: string
                }[]
              }
            }
            output: {
              responses: {
                body?: { [x: string]: { [x: string]: unknown } } | undefined
                headers?: { [x: string]: { [x: string]: unknown } } | undefined
                path: string
                status: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                defaults?:
                  | {
                      body?: { [x: string]: { [x: string]: unknown } } | undefined
                      headers?: { [x: string]: { [x: string]: unknown } } | undefined
                      method?:
                        | 'GET'
                        | 'HEAD'
                        | 'DELETE'
                        | 'TRACE'
                        | 'POST'
                        | 'PUT'
                        | 'PATCH'
                        | undefined
                      path?: string | undefined
                    }
                  | undefined
                requests: {
                  body?: { [x: string]: { [x: string]: unknown } } | undefined
                  headers?: { [x: string]: { [x: string]: unknown } } | undefined
                  method?:
                    | 'GET'
                    | 'HEAD'
                    | 'DELETE'
                    | 'TRACE'
                    | 'POST'
                    | 'PUT'
                    | 'PATCH'
                    | undefined
                  path: string
                }[]
              }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                defaults?:
                  | {
                      body?: { [x: string]: { [x: string]: unknown } } | undefined
                      headers?: { [x: string]: { [x: string]: unknown } } | undefined
                      method?:
                        | 'GET'
                        | 'HEAD'
                        | 'DELETE'
                        | 'TRACE'
                        | 'POST'
                        | 'PUT'
                        | 'PATCH'
                        | undefined
                      path?: string | undefined
                    }
                  | undefined
                requests: {
                  body?: { [x: string]: { [x: string]: unknown } } | undefined
                  headers?: { [x: string]: { [x: string]: unknown } } | undefined
                  method?:
                    | 'GET'
                    | 'HEAD'
                    | 'DELETE'
                    | 'TRACE'
                    | 'POST'
                    | 'PUT'
                    | 'PATCH'
                    | undefined
                  path: string
                }[]
              }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets': {
      $get:
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?:
                | {
                    'collection:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                    'group:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                    'record:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/monitor/collections/changes/records': {
      $get:
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: { data?: { bucket: string; collection: string; host: string }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bid/collections/:cid/changeset': {
      $get: {
        input: { param: { bid: string; cid: string } } & {
          query: {
            _since?: string | undefined
            _expected: string
            _limit?: number | undefined
            bucket?: string | undefined
            collection?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/buckets/:bucket_id/collections': {
      $get:
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?:
                | {
                    cache_expires?: number | undefined
                    schema?: { [x: string]: { [x: string]: unknown } } | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucket_id/collections/:collection_id/records': {
      $get:
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: { data?: { [x: string]: { [x: string]: unknown } }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string; collection_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucket_id/collections/:collection_id/records/:id': {
      $get:
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?: { [x: string]: { [x: string]: unknown } } | undefined
              permissions?:
                | { read?: string[] | undefined; write?: string[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string; collection_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucket_id/collections/:collection_id/records/:id/attachment': {
      $delete: {
        input: { param: { bucket_id: string; collection_id: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { bucket_id: string; collection_id: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/buckets/:bucket_id/collections/:id': {
      $get:
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?:
                | {
                    cache_expires?: number | undefined
                    schema?: { [x: string]: { [x: string]: unknown } } | undefined
                  }
                | undefined
              permissions?:
                | {
                    read?: string[] | undefined
                    'record:create'?: string[] | undefined
                    write?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucket_id/groups': {
      $get:
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: { data?: { members?: string[] | undefined }[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string } } & {
              query: {
                _limit?: number | undefined
                _sort?: string[] | undefined
                _token?: string | undefined
                _since?: number | undefined
                _to?: number | undefined
                _before?: number | undefined
                id?: string | undefined
                last_modified?: number | undefined
                _fields?: string[] | undefined
              }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:bucket_id/groups/:id': {
      $get:
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?: { members?: string[] | undefined } | undefined
              permissions?:
                | { read?: string[] | undefined; write?: string[] | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { bucket_id: string; id: string } } & {
              query: { _fields?: string[] | undefined }
            } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/buckets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              data?:
                | {
                    'collection:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                    'group:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                    'record:schema'?: { [x: string]: { [x: string]: unknown } } | undefined
                  }
                | undefined
              permissions?:
                | {
                    'collection:create'?: string[] | undefined
                    'group:create'?: string[] | undefined
                    read?: string[] | undefined
                    write?: string[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { id: string } } & { query: { _fields?: string[] | undefined } } & {
              header: { 'If-Match'?: string | undefined; 'If-None-Match'?: string | undefined }
            }
            output: {
              code: number
              details?: { [x: string]: unknown } | undefined
              errno: number
              error: string
              info?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/contribute.json': {
      $get: {
        input: {}
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
