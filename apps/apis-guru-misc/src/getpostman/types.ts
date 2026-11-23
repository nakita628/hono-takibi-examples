declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apis': {
      $get: {
        input: {
          query: {
            workspace?: string | undefined
            since?: string | undefined
            until?: string | undefined
            createdBy?: string | undefined
            updatedBy?: string | undefined
            isPublic?: string | undefined
            name?: string | undefined
            summary?: string | undefined
            description?: string | undefined
            sort?: string | undefined
            direction?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { workspace?: string | undefined } } & {
          json: {
            api?:
              | {
                  description?: string | undefined
                  name?: string | undefined
                  summary?: string | undefined
                }
              | undefined
          }
        }
        output: {
          api?:
            | {
                createdAt?: string | undefined
                createdBy?: string | undefined
                description?: string | undefined
                id?: string | undefined
                name?: string | undefined
                summary?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId': {
      $delete: {
        input: { param: { apiId: string } }
        output: { api?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { apiId: string } }
        output: {
          api?:
            | {
                createdAt?: string | undefined
                createdBy?: string | undefined
                description?: string | undefined
                id?: string | undefined
                name?: string | undefined
                summary?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { apiId: string } } & {
          json: {
            api?: { description?: string | undefined; name?: string | undefined } | undefined
          }
        }
        output: {
          api?:
            | {
                createdAt?: string | undefined
                createdBy?: string | undefined
                description?: string | undefined
                id?: string | undefined
                name?: string | undefined
                summary?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions': {
      $get: {
        input: { param: { apiId: string } }
        output: {
          versions?:
            | {
                createdAt?: string | undefined
                createdBy?: string | undefined
                description?: string | undefined
                id?: string | undefined
                name?: string | undefined
                summary?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { apiId: string } } & {
          json: {
            version?:
              | {
                  name?: string | undefined
                  source?:
                    | {
                        id?: string | undefined
                        relations?:
                          | {
                              documentation?: boolean | undefined
                              mock?: boolean | undefined
                              monitor?: boolean | undefined
                            }
                          | undefined
                        schema?: boolean | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          version?:
            | { api?: string | undefined; id?: string | undefined; name?: string | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId': {
      $delete: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: { version?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          version?:
            | {
                api?: string | undefined
                createdAt?: string | undefined
                createdBy?: string | undefined
                id?: string | undefined
                name?: string | undefined
                schema?: string[] | undefined
                updatedAt?: string | undefined
                updatedBy?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { apiId: string; apiVersionId: string } } & {
          json: { version?: { name?: string | undefined } | undefined }
        }
        output: {
          version?:
            | {
                api?: string | undefined
                createdAt?: string | undefined
                createdBy?: string | undefined
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
                updatedBy?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/contracttest': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          contracttest?:
            | {
                collectionId?: string | undefined
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/documentation': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          documentation?:
            | {
                collectionId?: string | undefined
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/environment': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          environment?:
            | {
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/integrationtest': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          integrationtest?:
            | {
                collectionId?: string | undefined
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/monitor': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          monitor?:
            | {
                id?: string | undefined
                monitorId?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/relations': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          relations?:
            | {
                contracttest?:
                  | {
                      '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2'?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            updatedAt?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                integrationtest?:
                  | {
                      '521b0486-ab91-4d3a-9189-43c9380a0533'?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            updatedAt?: string | undefined
                          }
                        | undefined
                      'a236b715-e682-460b-97b6-c1db24f7612e'?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            updatedAt?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                mock?:
                  | {
                      '4ccd755f-2c80-481b-a262-49b55e12f5e1'?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            updatedAt?: string | undefined
                            url?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { apiId: string; apiVersionId: string } } & {
          json: {
            contracttest?: string[] | undefined
            documentation?: string[] | undefined
            mock?: string[] | undefined
            testsuite?: string[] | undefined
          }
        }
        output: {
          contracttest?: string[] | undefined
          documentation?: string[] | undefined
          testsuite?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/schemas': {
      $post: {
        input: { param: { apiId: string; apiVersionId: string } } & {
          json: {
            schema?:
              | {
                  language?: string | undefined
                  schema?: string | undefined
                  type?: string | undefined
                }
              | undefined
          }
        }
        output: {
          schema?:
            | {
                apiVersion?: string | undefined
                createdAt?: string | undefined
                createdBy?: string | undefined
                id?: string | undefined
                language?: string | undefined
                type?: string | undefined
                updateBy?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string; schemaId: string } }
        output: {
          schema?:
            | {
                apiVersion?: string | undefined
                createdAt?: string | undefined
                createdBy?: string | undefined
                id?: string | undefined
                language?: string | undefined
                type?: string | undefined
                updateBy?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { apiId: string; apiVersionId: string; schemaId: string } } & {
          json: {
            schema?:
              | {
                  language?: string | undefined
                  schema?: string | undefined
                  type?: string | undefined
                }
              | undefined
          }
        }
        output: {
          schema?:
            | {
                apiVersion?: string | undefined
                createdAt?: string | undefined
                createdBy?: string | undefined
                id?: string | undefined
                language?: string | undefined
                type?: string | undefined
                updateBy?: string | undefined
                updatedAt?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId/collections': {
      $post: {
        input: { param: { apiId: string; apiVersionId: string; schemaId: string } } & {
          query: { workspace?: string | undefined }
        } & {
          json: {
            name?: string | undefined
            relations?: { type?: string | undefined }[] | undefined
          }
        }
        output: {
          collection?: { id?: string | undefined; uid?: string | undefined } | undefined
          relations?: { id?: string | undefined; type?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/testsuite': {
      $get: {
        input: { param: { apiId: string; apiVersionId: string } }
        output: {
          testsuite?:
            | {
                collectionId?: string | undefined
                id?: string | undefined
                name?: string | undefined
                updatedAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apis/:apiId/versions/:apiVersionId/:entityType/:entityId/syncWithSchema': {
      $put:
        | {
            input: {
              param: { apiId: string; apiVersionId: string; entityType: string; entityId: string }
            }
            output: { success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiId: string; apiVersionId: string; entityType: string; entityId: string }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections': {
      $get: {
        input: {}
        output: {
          collections?:
            | {
                id?: string | undefined
                name?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              collection?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/collections/fork/:collection_uid': {
      $post: {
        input: { param: { collection_uid: string } } & {
          query: { workspace?: string | undefined }
        } & { json: { name?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/merge': {
      $post: {
        input: {
          json: {
            destination?: string | undefined
            source?: string | undefined
            strategy?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/collections/:collection_uid': {
      $delete:
        | {
            input: { param: { collection_uid: string } }
            output: {
              collection?: { id?: string | undefined; uid?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_uid: string } }
            output: {
              error?:
                | {
                    details?: { id?: string | undefined; item?: string | undefined } | undefined
                    message?: string | undefined
                    name?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { collection_uid: string } }
        output: {
          collection?:
            | {
                info?:
                  | {
                      _postman_id?: string | undefined
                      description?: string | undefined
                      name?: string | undefined
                      schema?: string | undefined
                    }
                  | undefined
                item?:
                  | {
                      event?:
                        | {
                            listen?: string | undefined
                            script?:
                              | { exec?: string | undefined; type?: string | undefined }
                              | undefined
                          }[]
                        | undefined
                      id?: string | undefined
                      name?: string | undefined
                      request?:
                        | {
                            body?:
                              | {
                                  formdata?: { [x: string]: unknown }[] | undefined
                                  mode?: string | undefined
                                }
                              | undefined
                            description?: string | undefined
                            header?:
                              | {
                                  description?: string | undefined
                                  key?: string | undefined
                                  value?: string | undefined
                                }[]
                              | undefined
                            method?: string | undefined
                            url?: string | undefined
                          }
                        | undefined
                      response?: { [x: string]: unknown }[] | undefined
                    }[]
                  | undefined
                variables?: { [x: string]: unknown }[] | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { collection_uid: string } } & {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            _postman_id?: string | undefined
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              collection?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_uid: string } } & {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            _postman_id?: string | undefined
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collection_uid: string } } & {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            _postman_id?: string | undefined
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_uid: string } } & {
              json: {
                collection?:
                  | {
                      info?:
                        | {
                            _postman_id?: string | undefined
                            description?: string | undefined
                            name?: string | undefined
                            schema?: string | undefined
                          }
                        | undefined
                      item?:
                        | {
                            item?:
                              | {
                                  name?: string | undefined
                                  request?:
                                    | {
                                        body?:
                                          | { mode?: string | undefined; raw?: string | undefined }
                                          | undefined
                                        description?: string | undefined
                                        header?:
                                          | {
                                              key?: string | undefined
                                              value?: string | undefined
                                            }[]
                                          | undefined
                                        method?: string | undefined
                                        url?: string | undefined
                                      }
                                    | undefined
                                }[]
                              | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?:
                | {
                    details?: { id?: string | undefined; item?: string | undefined } | undefined
                    message?: string | undefined
                    name?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/environments': {
      $get: {
        input: {}
        output: {
          environments?:
            | {
                id?: string | undefined
                name?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                environment?:
                  | {
                      name?: string | undefined
                      values?:
                        | { key?: string | undefined; value?: string | undefined }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              environment?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                environment?:
                  | {
                      name?: string | undefined
                      values?:
                        | { key?: string | undefined; value?: string | undefined }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/environments/:environment_uid': {
      $delete:
        | {
            input: { param: { environment_uid: string } }
            output: {
              environment?: { id?: string | undefined; uid?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_uid: string } }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { environment_uid: string } }
        output: {
          environment?:
            | {
                id?: string | undefined
                name?: string | undefined
                values?:
                  | {
                      enabled?: boolean | undefined
                      hovered?: boolean | undefined
                      key?: string | undefined
                      type?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { environment_uid: string } } & {
              json: {
                environment?:
                  | {
                      name?: string | undefined
                      values?:
                        | { key?: string | undefined; value?: string | undefined }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              environment?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment_uid: string } } & {
              json: {
                environment?:
                  | {
                      name?: string | undefined
                      values?:
                        | { key?: string | undefined; value?: string | undefined }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/import/exported': {
      $post:
        | {
            input: {}
            output: {
              collections?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | {
                    details?: { param?: string | undefined } | undefined
                    message?: string | undefined
                    name?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/import/openapi': {
      $post:
        | {
            input: {
              json: {
                input?:
                  | {
                      info?:
                        | {
                            license?: { name?: string | undefined } | undefined
                            title?: string | undefined
                            version?: string | undefined
                          }
                        | undefined
                      openapi?: string | undefined
                      paths?:
                        | {
                            '/pets'?:
                              | {
                                  get?:
                                    | {
                                        operationId?: string | undefined
                                        parameters?:
                                          | {
                                              description?: string | undefined
                                              in?: string | undefined
                                              name?: string | undefined
                                              required?: boolean | undefined
                                              schema?:
                                                | {
                                                    format?: string | undefined
                                                    type?: string | undefined
                                                  }
                                                | undefined
                                            }[]
                                          | undefined
                                        responses?:
                                          | {
                                              default?:
                                                | {
                                                    content?:
                                                      | {
                                                          'application/json'?:
                                                            | {
                                                                schema?:
                                                                  | {
                                                                      properties?:
                                                                        | {
                                                                            code?:
                                                                              | {
                                                                                  format?:
                                                                                    | string
                                                                                    | undefined
                                                                                  type?:
                                                                                    | string
                                                                                    | undefined
                                                                                }
                                                                              | undefined
                                                                            message?:
                                                                              | {
                                                                                  type?:
                                                                                    | string
                                                                                    | undefined
                                                                                }
                                                                              | undefined
                                                                          }
                                                                        | undefined
                                                                      required?:
                                                                        | string[]
                                                                        | undefined
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    description?: string | undefined
                                                  }
                                                | undefined
                                            }
                                          | undefined
                                        summary?: string | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      servers?: { url?: string | undefined }[] | undefined
                    }
                  | undefined
                type?: string | undefined
              }
            }
            output: {
              collections?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                input?:
                  | {
                      info?:
                        | {
                            license?: { name?: string | undefined } | undefined
                            title?: string | undefined
                            version?: string | undefined
                          }
                        | undefined
                      openapi?: string | undefined
                      paths?:
                        | {
                            '/pets'?:
                              | {
                                  get?:
                                    | {
                                        operationId?: string | undefined
                                        parameters?:
                                          | {
                                              description?: string | undefined
                                              in?: string | undefined
                                              name?: string | undefined
                                              required?: boolean | undefined
                                              schema?:
                                                | {
                                                    format?: string | undefined
                                                    type?: string | undefined
                                                  }
                                                | undefined
                                            }[]
                                          | undefined
                                        responses?:
                                          | {
                                              default?:
                                                | {
                                                    content?:
                                                      | {
                                                          'application/json'?:
                                                            | {
                                                                schema?:
                                                                  | {
                                                                      properties?:
                                                                        | {
                                                                            code?:
                                                                              | {
                                                                                  format?:
                                                                                    | string
                                                                                    | undefined
                                                                                  type?:
                                                                                    | string
                                                                                    | undefined
                                                                                }
                                                                              | undefined
                                                                            message?:
                                                                              | {
                                                                                  type?:
                                                                                    | string
                                                                                    | undefined
                                                                                }
                                                                              | undefined
                                                                          }
                                                                        | undefined
                                                                      required?:
                                                                        | string[]
                                                                        | undefined
                                                                    }
                                                                  | undefined
                                                              }
                                                            | undefined
                                                        }
                                                      | undefined
                                                    description?: string | undefined
                                                  }
                                                | undefined
                                            }
                                          | undefined
                                        summary?: string | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      servers?: { url?: string | undefined }[] | undefined
                    }
                  | undefined
                type?: string | undefined
              }
            }
            output: {
              error?:
                | {
                    details?: { param?: string | undefined } | undefined
                    message?: string | undefined
                    name?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/me': {
      $get: {
        input: {}
        output: {
          operations?:
            | {
                limit?: number | undefined
                name?: string | undefined
                overage?: number | undefined
                usage?: number | undefined
              }[]
            | undefined
          user?:
            | {
                avatar?: string | undefined
                email?: string | undefined
                fullName?: string | undefined
                id?: string | undefined
                isPublic?: boolean | undefined
                username?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mocks': {
      $get: {
        input: {}
        output: {
          mocks?:
            | {
                collection?: string | undefined
                environment?: string | undefined
                id?: string | undefined
                mockUrl?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            mock?: { collection?: string | undefined; environment?: string | undefined } | undefined
          }
        }
        output: {
          mock?:
            | {
                collection?: string | undefined
                environment?: string | undefined
                id?: string | undefined
                mockUrl?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mocks/:mock_uid': {
      $delete: {
        input: { param: { mock_uid: string } }
        output: { mock?: { id?: string | undefined; uid?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { mock_uid: string } }
        output: {
          mock?:
            | {
                collection?: string | undefined
                environment?: string | undefined
                id?: string | undefined
                mockUrl?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { mock_uid: string } } & {
          json: {
            mock?:
              | {
                  description?: string | undefined
                  environment?: string | undefined
                  name?: string | undefined
                  private?: boolean | undefined
                  versionTag?: string | undefined
                }
              | undefined
          }
        }
        output: {
          mock?:
            | {
                collection?: string | undefined
                config?:
                  | {
                      headers?: { [x: string]: unknown }[] | undefined
                      matchBody?: boolean | undefined
                      matchQueryParams?: boolean | undefined
                      matchWildcards?: boolean | undefined
                    }
                  | undefined
                environment?: string | undefined
                id?: string | undefined
                mockUrl?: string | undefined
                name?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mocks/:mock_uid/publish': {
      $post: {
        input: { param: { mock_uid: string } }
        output: { mock?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mocks/:mock_uid/unpublish': {
      $delete: {
        input: { param: { mock_uid: string } }
        output: { mock?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitors': {
      $get: {
        input: {}
        output: {
          monitors?:
            | {
                id?: string | undefined
                name?: string | undefined
                owner?: string | undefined
                uid?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                monitor?:
                  | {
                      collection?: string | undefined
                      environment?: string | undefined
                      name?: string | undefined
                      schedule?:
                        | { cron?: string | undefined; timezone?: string | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              monitor?:
                | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                monitor?:
                  | {
                      collection?: string | undefined
                      environment?: string | undefined
                      name?: string | undefined
                      schedule?:
                        | { cron?: string | undefined; timezone?: string | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?:
                | {
                    details?: { param?: string | undefined } | undefined
                    message?: string | undefined
                    name?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/monitors/:monitor_uid': {
      $delete:
        | {
            input: { param: { monitor_uid: string } }
            output: { monitor?: { id?: string | undefined; uid?: string | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { monitor_uid: string } }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { monitor_uid: string } }
            output: {
              monitor?:
                | {
                    collectionUid?: string | undefined
                    distribution?: { [x: string]: unknown }[] | undefined
                    environmentUid?: string | undefined
                    id?: string | undefined
                    lastRun?:
                      | {
                          finishedAt?: string | undefined
                          startedAt?: string | undefined
                          stats?:
                            | {
                                assertions?:
                                  | { failed?: number | undefined; total?: number | undefined }
                                  | undefined
                                requests?: { total?: number | undefined } | undefined
                              }
                            | undefined
                          status?: string | undefined
                        }
                      | undefined
                    name?: string | undefined
                    notifications?:
                      | {
                          onError?: { email?: string | undefined }[] | undefined
                          onFailure?: { email?: string | undefined }[] | undefined
                        }
                      | undefined
                    options?:
                      | {
                          followRedirects?: boolean | undefined
                          requestDelay?: number | undefined
                          requestTimeout?: number | undefined
                          strictSSL?: boolean | undefined
                        }
                      | undefined
                    owner?: string | undefined
                    schedule?:
                      | {
                          cron?: string | undefined
                          nextRun?: string | undefined
                          timezone?: string | undefined
                        }
                      | undefined
                    uid?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { monitor_uid: string } }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { monitor_uid: string } } & {
          json: {
            monitor?:
              | {
                  name?: string | undefined
                  schedule?:
                    | { cron?: string | undefined; timezone?: string | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: {
          monitor?:
            | { id?: string | undefined; name?: string | undefined; uid?: string | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/monitors/:monitor_uid/run': {
      $post: {
        input: { param: { monitor_uid: string } }
        output: {
          run?:
            | {
                executions?:
                  | {
                      id?: number | undefined
                      item?: { id?: string | undefined; name?: string | undefined } | undefined
                      request?:
                        | {
                            body?:
                              | { contentLength?: number | undefined; mode?: string | undefined }
                              | undefined
                            headers?:
                              | {
                                  accept?: string | undefined
                                  'accept-encoding'?: string | undefined
                                  'content-length'?: number | undefined
                                  'content-type'?: string | undefined
                                }
                              | undefined
                            method?: string | undefined
                            timestamp?: string | undefined
                            url?: string | undefined
                          }
                        | undefined
                      response?:
                        | {
                            body?: { contentLength?: number | undefined } | undefined
                            code?: number | undefined
                            headers?:
                              | {
                                  connection?: string | undefined
                                  'content-encoding'?: string | undefined
                                  'content-type'?: string | undefined
                                  date?: string | undefined
                                  'transfer-encoding'?: string | undefined
                                }
                              | undefined
                            responseSize?: number | undefined
                            responseTime?: number | undefined
                          }
                        | undefined
                    }[]
                  | undefined
                failures?:
                  | {
                      assertion?: { 'Status code is 400'?: boolean | undefined } | undefined
                      executionId?: number | undefined
                      message?: string | undefined
                      name?: string | undefined
                    }[]
                  | undefined
                info?:
                  | {
                      collectionUid?: string | undefined
                      finishedAt?: string | undefined
                      jobId?: string | undefined
                      monitorId?: string | undefined
                      name?: string | undefined
                      startedAt?: string | undefined
                      status?: string | undefined
                    }
                  | undefined
                stats?:
                  | {
                      assertions?:
                        | { failed?: number | undefined; total?: number | undefined }
                        | undefined
                      requests?:
                        | { failed?: number | undefined; total?: number | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks': {
      $post: {
        input: { query: { workspace?: string | undefined } } & {
          json: {
            webhook?: { collection?: string | undefined; name?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/workspaces': {
      $get: {
        input: {}
        output: {
          workspaces?:
            | { id?: string | undefined; name?: string | undefined; type?: string | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                workspace?:
                  | {
                      collections?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      description?: string | undefined
                      environments?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      mocks?: { id?: string | undefined }[] | undefined
                      monitors?: { id?: string | undefined }[] | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              workspace?: { id?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                workspace?:
                  | {
                      collections?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      description?: string | undefined
                      environments?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      mocks?: { id?: string | undefined }[] | undefined
                      monitors?: { id?: string | undefined }[] | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/workspaces/:workspace_id': {
      $delete: {
        input: { param: { workspace_id: string } }
        output: { workspace?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { workspace_id: string } }
            output: {
              workspace?:
                | {
                    collections?:
                      | {
                          id?: string | undefined
                          name?: string | undefined
                          uid?: string | undefined
                        }[]
                      | undefined
                    description?: string | undefined
                    environments?:
                      | {
                          id?: string | undefined
                          name?: string | undefined
                          uid?: string | undefined
                        }[]
                      | undefined
                    id?: string | undefined
                    name?: string | undefined
                    type?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_id: string } }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { workspace_id: string } } & {
              json: {
                workspace?:
                  | {
                      collections?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      description?: string | undefined
                      environments?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      mocks?: { id?: string | undefined }[] | undefined
                      monitors?: { id?: string | undefined }[] | undefined
                      name?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              workspace?: { id?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspace_id: string } } & {
              json: {
                workspace?:
                  | {
                      collections?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      description?: string | undefined
                      environments?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      mocks?: { id?: string | undefined }[] | undefined
                      monitors?: { id?: string | undefined }[] | undefined
                      name?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspace_id: string } } & {
              json: {
                workspace?:
                  | {
                      collections?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      description?: string | undefined
                      environments?:
                        | {
                            id?: string | undefined
                            name?: string | undefined
                            uid?: string | undefined
                          }[]
                        | undefined
                      mocks?: { id?: string | undefined }[] | undefined
                      monitors?: { id?: string | undefined }[] | undefined
                      name?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              error?: { message?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
