declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/clips': {
      $get:
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    end_time: number
                    media_id: string
                    name: string
                    start_time: number
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    end_time: number
                    media_id: string
                    name: string
                    start_time: number
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    end_time: number
                    media_id: string
                    name: string
                    start_time: number
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    end_time: number
                    media_id: string
                    name: string
                    start_time: number
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/clips/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: {
                    end_time?: number | undefined
                    name?: string | undefined
                    start_time?: number | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: {
                    end_time?: number | undefined
                    name?: string | undefined
                    start_time?: number | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: {
                    end_time?: number | undefined
                    name?: string | undefined
                    start_time?: number | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/direct_uploads': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/v1/medias': {
      $get:
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                page?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    description?: string | undefined
                    name?: string | undefined
                    source_url?: string | undefined
                    upload_id?: string | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    description?: string | undefined
                    name?: string | undefined
                    source_url?: string | undefined
                    upload_id?: string | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    description?: string | undefined
                    name?: string | undefined
                    source_url?: string | undefined
                    upload_id?: string | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    description?: string | undefined
                    name?: string | undefined
                    source_url?: string | undefined
                    upload_id?: string | undefined
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/medias/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: { description?: string | undefined; name?: string | undefined }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: { description?: string | undefined; name?: string | undefined }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                data: {
                  attributes: { description?: string | undefined; name?: string | undefined }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/webhook_subscriptions': {
      $get:
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                filter?: { [x: string]: unknown } | undefined
                sort?:
                  | 'created_at'
                  | '-created_at'
                  | 'original_created_at'
                  | '-original_created_at'
                  | 'name'
                  | '-name'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    subscribed_events?: { [x: string]: unknown }[] | undefined
                    url: string
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    subscribed_events?: { [x: string]: unknown }[] | undefined
                    url: string
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                data: {
                  attributes: {
                    subscribed_events?: { [x: string]: unknown }[] | undefined
                    url: string
                  }
                }
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/webhook_subscriptions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes
