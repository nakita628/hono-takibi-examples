type Items = {
  name: string
  id?: string | undefined
  drs_uri?: string[] | undefined
  contents?: Items[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/service-info': {
      $get:
        | {
            input: {}
            output: {
              id: string
              name: string
              type: { artifact: 'drs' }
              description?: string | undefined
              organization: { name: string; url: string }
              contactUrl?: string | undefined
              documentationUrl?: string | undefined
              createdAt?: string | undefined
              updatedAt?: string | undefined
              environment?: string | undefined
              version: string
              maxBulkRequestLength: number
              drs?:
                | {
                    maxBulkRequestLength: number
                    objectCount?: number | undefined
                    totalObjectSize?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/objects/:object_id': {
      $options:
        | {
            input: { param: { object_id: string } }
            output: {
              drs_object_id?: string | undefined
              supported_types?: ('None' | 'BasicAuth' | 'BearerAuth' | 'PassportAuth')[] | undefined
              passport_auth_issuers?: string[] | undefined
              bearer_auth_issuers?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { object_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { object_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { object_id: string } }; output: {}; outputFormat: string; status: 405 }
        | {
            input: { param: { object_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: {
              id: string
              name?: string | undefined
              self_uri: string
              size: bigint
              created_time: string
              updated_time?: string | undefined
              version?: string | undefined
              mime_type?: string | undefined
              checksums: { checksum: string; type: string }[]
              access_methods?:
                | {
                    type: 's3' | 'gs' | 'ftp' | 'gsiftp' | 'globus' | 'htsget' | 'https' | 'file'
                    access_url?: { url: string; headers?: string[] | undefined } | undefined
                    access_id?: string | undefined
                    cloud?: string | undefined
                    region?: string | undefined
                    available?: boolean | undefined
                    authorizations?:
                      | {
                          drs_object_id?: string | undefined
                          supported_types?:
                            | ('None' | 'BasicAuth' | 'BearerAuth' | 'PassportAuth')[]
                            | undefined
                          passport_auth_issuers?: string[] | undefined
                          bearer_auth_issuers?: string[] | undefined
                        }
                      | undefined
                  }[]
                | undefined
              contents?:
                | {
                    name: string
                    id?: string | undefined
                    drs_uri?: string[] | undefined
                    contents?: Items[] | undefined
                  }[]
                | undefined
              description?: string | undefined
              aliases?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { object_id: string } } & { query: { expand?: boolean | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: {
              id: string
              name?: string | undefined
              self_uri: string
              size: bigint
              created_time: string
              updated_time?: string | undefined
              version?: string | undefined
              mime_type?: string | undefined
              checksums: { checksum: string; type: string }[]
              access_methods?:
                | {
                    type: 's3' | 'gs' | 'ftp' | 'gsiftp' | 'globus' | 'htsget' | 'https' | 'file'
                    access_url?: { url: string; headers?: string[] | undefined } | undefined
                    access_id?: string | undefined
                    cloud?: string | undefined
                    region?: string | undefined
                    available?: boolean | undefined
                    authorizations?:
                      | {
                          drs_object_id?: string | undefined
                          supported_types?:
                            | ('None' | 'BasicAuth' | 'BearerAuth' | 'PassportAuth')[]
                            | undefined
                          passport_auth_issuers?: string[] | undefined
                          bearer_auth_issuers?: string[] | undefined
                        }
                      | undefined
                  }[]
                | undefined
              contents?:
                | {
                    name: string
                    id?: string | undefined
                    drs_uri?: string[] | undefined
                    contents?: Items[] | undefined
                  }[]
                | undefined
              description?: string | undefined
              aliases?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { object_id: string } } & {
              json: { expand?: boolean | undefined; passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/objects': {
      $options:
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: {
              summary?:
                | {
                    requested?: number | undefined
                    resolved?: number | undefined
                    unresolved?: number | undefined
                  }
                | undefined
              unresolved_drs_objects?:
                | { error_code?: number | undefined; object_ids?: string[] | undefined }[]
                | undefined
              resolved_drs_object?:
                | {
                    drs_object_id?: string | undefined
                    supported_types?:
                      | ('None' | 'BasicAuth' | 'BearerAuth' | 'PassportAuth')[]
                      | undefined
                    passport_auth_issuers?: string[] | undefined
                    bearer_auth_issuers?: string[] | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: { bulk_object_ids?: string[] | undefined } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: {
              summary?:
                | {
                    requested?: number | undefined
                    resolved?: number | undefined
                    unresolved?: number | undefined
                  }
                | undefined
              unresolved_drs_objects?:
                | { error_code?: number | undefined; object_ids?: string[] | undefined }[]
                | undefined
              resolved_drs_object?:
                | {
                    id: string
                    name?: string | undefined
                    self_uri: string
                    size: bigint
                    created_time: string
                    updated_time?: string | undefined
                    version?: string | undefined
                    mime_type?: string | undefined
                    checksums: { checksum: string; type: string }[]
                    access_methods?:
                      | {
                          type:
                            | 's3'
                            | 'gs'
                            | 'ftp'
                            | 'gsiftp'
                            | 'globus'
                            | 'htsget'
                            | 'https'
                            | 'file'
                          access_url?: { url: string; headers?: string[] | undefined } | undefined
                          access_id?: string | undefined
                          cloud?: string | undefined
                          region?: string | undefined
                          available?: boolean | undefined
                          authorizations?:
                            | {
                                drs_object_id?: string | undefined
                                supported_types?:
                                  | ('None' | 'BasicAuth' | 'BearerAuth' | 'PassportAuth')[]
                                  | undefined
                                passport_auth_issuers?: string[] | undefined
                                bearer_auth_issuers?: string[] | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    contents?:
                      | {
                          name: string
                          id?: string | undefined
                          drs_uri?: string[] | undefined
                          contents?: Items[] | undefined
                        }[]
                      | undefined
                    description?: string | undefined
                    aliases?: string[] | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { query: { expand?: boolean | undefined } } & {
              json: { passports?: string[] | undefined; bulk_object_ids?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/objects/:object_id/access/:access_id': {
      $get:
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { url: string; headers?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { object_id: string; access_id: string } }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { url: string; headers?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { object_id: string; access_id: string } } & {
              json: { passports?: string[] | undefined }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/objects/access': {
      $post:
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              summary?:
                | {
                    requested?: number | undefined
                    resolved?: number | undefined
                    unresolved?: number | undefined
                  }
                | undefined
              unresolved_drs_objects?:
                | { error_code?: number | undefined; object_ids?: string[] | undefined }[]
                | undefined
              resolved_drs_object_access_urls?:
                | {
                    drs_object_id?: string | undefined
                    drs_access_id?: string | undefined
                    url: string
                    headers?: string[] | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              json: {
                passports?: string[] | undefined
                bulk_object_access_ids?:
                  | {
                      bulk_object_id?: string | undefined
                      bulk_access_ids?: string[] | undefined
                    }[]
                  | undefined
              }
            }
            output: { msg?: string | undefined; status_code?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
